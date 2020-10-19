<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 4/16/2018
 * Time: 3:37 PM
 */

namespace App\Http\Controllers;


use App\Mail\ContactUs;
use App\Mail\ForgotPassword;
use App\Mail\NewSellerUser;
use App\Mail\NewUser;
use File;
use PDF;
use function GuzzleHttp\Promise\promise_for;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Exception;



class UserAPIController extends Controller
{
        function Demo(Request $r){
            try{
                $auth=$r->header('Auth');
                $authDB=DB::table('auth')->where('id','1')->first();
                if(Hash::check($auth,$authDB->auth)){
                    DB::beginTransaction();

                    DB::commit();
                }else{
                    $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
                }
                return response()->json($this->reply);
            }
            catch (Exception $e){
                echo $e->getMessage();
                DB::rollback();
            }
        }

        function registrationBuyer(Request $r){
            try{
                $auth=$r->header('Auth');
                $authDB=DB::table('auth')->where('id','1')->first();
//                $this->reply['user'] = ['status' => 'success', 'msg' => 'OTP send successfully.','user_id'=>1];
                if(Hash::check($auth,$authDB->auth)){
                    $userEmail=DB::table('users')
                        ->where(['email'=>$r->email,'user_status'=>'1'])
                        ->first(['email']);
                    if($userEmail)
                       $this->reply['user']=[ 'status' => 'fail', 'msg' => " A User with the email $userEmail->email already exsist. Please try again." ];
                    else{
                        $display_name=explode('@',$r->email);
                        $display_name[0]=$display_name[0].rand(10,100);

                        $user=['business_name'=>$r->business_name,'account_type'=>$r->account_type,'first_name'=>$r->first_name,'last_name'=>$r->last_name,'email'=>$r->email,
                                'role'=>$r->userrole,'natinality'=>$r->natinality,'display_name'=>$display_name[0],'password'=>Hash::make($r->password)];
//                        print_r($user);
                        $current_date= date("Y-m-d H:i:s");
                        $ip_address= $_SERVER['REMOTE_ADDR'];
                        $user_name= $r->first_name.' '.$r->last_name;
                        
                        
                         
                         $userId=DB::table('users')->insertGetId($user);
                         $user_log=['user_id'=>$userId,'user_name'=>$user_name,'nationality'=>$r->natinality,'agreed_on'=>$current_date,'ip_address'=>$ip_address];
                        
//                        print_r($user_log);
//                        exit;
                         
                         
                         
                        if($userId) {
                            $userLog=DB::table('users_log')->insertGetId($user_log);
                          /* Mail::to($r->email,$r->first_name)->send(new NewUser($userId,$r->first_name,$r->last_name,$display_name[0]));
                            $this->reply['user'] = ['status' => 'success', 'msg' => 'Account created successfully.'];*/
                           $rand_no=rand(1000,9999);
                            DB::table('otp')->insertGetId(['email'=>$r->email,'otp'=>$rand_no]);
                            $email_template=DB::table('email_template')->where('id','6')->first();
                            Mail::to($r->email)->send(new NewSellerUser($userId,$r->first_name,$rand_no,$r->email,$email_template));
                            $this->reply['user'] = ['status' => 'success', 'msg' => 'OTP send successfully.','user_id'=>$userId];
                            DB::commit();
                        }
                        else
                            $this->reply['user']=['status'=>'fail','msg'=>'Something wrong happen. Please try again.','requested-data'=>$_POST];
                    }
                }
                else{
                    $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
                }
                return response()->json($this->reply);
            }
            catch (Exception $e){
                echo $e->getMessage();
                DB::rollback();
            }
        }

        function resendOTP(Request $r){
            
//            echo $r;
//            exit;
            
            try{
                $auth=$r->header('Auth');
                $authDB=DB::table('auth')->where('id','1')->first();
                if(Hash::check($auth,$authDB->auth)){
                    $rand_no=rand(1000,9999);
                    
                    
                    $otp=DB::table('otp')->where(['email'=>$r->email])->first();
                    $user=DB::table('users')->where(['id'=>$r->id])->first();
                    
//                    print_r($otp);
//                    print_r($user);
//                    exit;
                    if($otp->otp!=''){
                         $email_template=DB::table('email_template')->where('id','6')->first();
                    Mail::to('renugadevimurugesan@gmail.com')->send(new NewSellerUser($r->id,$user->first_name,$otp->otp,$r->email,$email_template));
//                    Mail::to($r->email)->send(new NewSellerUser($r->id,$user->first_name,$otp->otp,$r->email,$email_template));
                    $this->reply['resend_otp'] = ['status' => 'success', 'msg' => 'OTP resend successfully.','user_id'=>$r->id];
                    DB::commit();
                    } else {
                        $this->reply['resend_otp'] = ['status' => 'fail', 'msg' => 'Try Again'];
                    }
                    
                    
//                    DB::table('otp')->insertGetId(['email'=>$r->email,'otp'=>$rand_no]);
                    //Mail::to($r->email)->send(new NewSellerUser($userId,$r->first_name,$rand_no,$r->email));
                }else
                    $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
                return response()->json($this->reply);
            }catch (Exception $e){
                $e->getMessage();
            }
        }

        function checkOTP(Request $r){
            try{
                $auth=$r->header('Auth');
                $authDB=DB::table('auth')->where('id','1')->first();
                if(Hash::check($auth,$authDB->auth)){
                    $otp=DB::table('otp')->where(['email'=>$r->email,'otp'=>$r->otp])->first();
                    if($otp){
                         DB::table('users')->where('id',$r->user_id)->update(['user_status'=>'1']);
                        //DB::table('otp')->where('email',$r->email)->delete();
                        $user_info=DB::table('users')->where('id',$r->user_id)->first();

                        $email_template=DB::table('email_template')->where('id','5')->first();
//                        Mail::to($r->email)->send(new NewUser($user_info->id,$user_info->first_name,$user_info->last_name,$user_info->display_name,$email_template));
                        Mail::to('vijay.vc@hotmail.com')->send(new NewUser($user_info->id,$user_info->first_name,$user_info->last_name,$user_info->display_name,$email_template));
                        DB::table('users')->where('id','!=',$r->user_id)->where('email',$r->email)->delete();
                        $this->reply['user'] = ['status' => 'success', 'msg' => 'You are register successfully.'];
                    }else
                        $this->reply['user'] = ['status' => 'fail', 'msg' => 'Verification Code not match'];
                }else
                    $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

                    return response()->json($this->reply);
            }catch (Exception $e){
                echo $e->getMessage();
                DB::rollback();
            }
        }

    function login(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();

                $user=DB::table('users')->where('email',$r->user_name)->orWhere('display_name',$r->user_name)->first();
                if($user){
                    if($user->user_status=='0')
                        $this->reply['user']=['status'=>'fail','msg'=>'Your account is deactivated.'];
                    else{
                        if(Hash::check($r->password,$user->password)){
                            $user->payment_opt=unserialize($user->payment_opt);
                            $this->reply['user']=['status'=>'success','msg'=>$user];
                        }
                        else
                            $this->reply['user']=['status'=>'fail','msg'=>'Enter valid password.'];
                    }
                }else
                    $this->reply['user']=['status'=>'fail','msg'=>'Enter valid Email or Username.'];
                DB::commit();
            }
            else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function registrationSeller(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

              if($r->case==1){
                  $userEmail=DB::table('users')
                      ->where('email',$r->email)
                      ->first(['email']);

                  $userMobile=DB::table('users')
                      ->where('business_mobile',$r->business_number)
                      ->first(['business_mobile']);

                  if($userEmail)
                      $this->reply['user']=[ 'status' => 'fail', 'msg' => 'An email is already exist. Please try again.'];

                  elseif($userMobile) {
                      $this->reply['user'] = ['status' => 'fail', 'msg' => 'A mobile number is already exist. Please try again.'];
                  }else{
                      $display_name=explode('@',$r->email);
                      $display_name[0]=$display_name[0].rand(10,100);

                      $user=['business_name'=>$r->business_name,'email'=>$r->email,
                          'role'=>$r->userrole,'display_name'=>$display_name[0],'password'=>Hash::make($r->password),'business_mobile'=>$r->business_number];

                      $userId=DB::table('users')->insertGetId($user);
                      if($userId) {
                          DB::table('shop')->insertGetId(['user_id'=>$userId,'shop_name'=>$r->business_name]);
                          $this->reply['user'] = ['status' => 'success', 'msg' => 'User created successful','user_id'=>$userId];
                          DB::commit();
                      } else
                          $this->reply['user']=['status'=>'fail','msg'=>'Something wrong happen.','requested-data'=>$_POST];
                  }
              }
              if($r->case==2){
                  $userMobile=DB::table('users')
                      ->where('mobile_number',$r->mobile_number)
                      ->first(['mobile_number']);
                  $payment_email=DB::table('users')
                      ->where('payment_email',$r->payment_email)
                      ->first(['payment_email']);

                  if($userMobile) {
                        $this->reply['user'] = ['status' => 'fail', 'msg' => 'A mobile number is already exist. Please try again.'];
                  }
                  elseif($payment_email){
                      $this->reply['user']=[ 'status' => 'fail', 'msg' => 'An payment_email is already exist. Please try again.' ];
                  }
                  else{
                        $userDetails=DB::table('users')->where('id',$r->user_id)->first();
                        $address=$r->address1.'@'.$r->address2.'@'.$r->postcode.'@'.$r->city.'@'.$r->country;
                        $payment_opt=explode(',',$r->payment_opt);
                        $payment_opt=serialize($payment_opt);
                        $user=['address'=>$address,'natinality'=>$r->natinality,'mobile_number'=>$r->mobile_number,'first_name'=>$r->first_name,'last_name'=>$r->last_name,
                            'business_relationship'=>$r->business_relationship,'payment_opt'=>$payment_opt,'payment_email'=>$r->payment_email,
                            'vat_number'=>$r->var_number,'company_number'=>$r->company_number];
                        $rand_no=rand(1000,9999);
                        DB::table('otp')->insertGetId(['email'=>$userDetails->email,'otp'=>$rand_no]);
                        $userUpdate=DB::table('users')->where('id',$r->user_id)->update($user);
                    if($userUpdate){
                        Mail::to($userDetails->email,$r->first_name)->send(new NewSellerUser($r->user_id,$r->first_name,$rand_no));
                        $this->reply['user'] = ['status' => 'success', 'msg' => 'User update successful'];
                        DB::commit();
                    }
                  }
              }
              if($r->case==3){
                  $otp=DB::table('otp')->where(['email'=>$r->email,'otp'=>$r->otp])->first();
                 if($otp){
                      DB::table('users')->where('email',$r->email)->update(['user_status'=>'1']);
                      DB::table('otp')->where('email',$r->email)->delete();
                      $this->reply['user'] = ['status' => 'success', 'msg' => 'User created successful'];
                  }else{
                      $this->reply['user'] = ['status' => 'fail', 'msg' => 'OTP not match'];
                 }
              }
            }
            else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function forgetPassword(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $user=DB::table('users')->where('email',$r->email)->orWhere('display_name',$r->email)->first();
                if($user) {
                    $newPassword = 'Dibdaa@' . rand(1, 10000);
                    $request_id=DB::table('forgot_password')->insertGetId(['user_id'=>$user->id,'email'=>$r->email]);
                    //$update=DB::table('users')->where('id',$user->id)->update(['password'=>$newPassword,'updated_date'=>date('Y-m-d')]);
                    // if($update){
                    $email_template=DB::table('email_template')->where('id','4')->first();
                    Mail::to($user->email, $user->first_name)->send(new ForgotPassword($user->first_name, $user->id, $user->email,$request_id,$email_template));
                    $this->reply['user'] = ['status' => 'success', 'msg' => 'Mail send successful.'];
                    //}
                }
                else
                    $this->reply['user']=['status'=>'fail','msg'=>'Email or username is not registered.'];
                DB::commit();
            }else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function setPassword(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $request_id=DB::table('forgot_password')->where('id',$r->request_id)->exists();
                if($request_id){
                    $update=DB::table('users')->where('id',$r->user_id)->update(['password'=>Hash::make($r->password)]);
                    if($update){
                        $this->reply['user']=['status'=>'success','msg'=>'Password reset successfully.'];
                        DB::table('forgot_password')->where('id',$r->request_id)->delete();
                        DB::commit();
                    }
                    else{
                        $this->reply['user']=['status'=>'fail','msg'=>'You are already used this link.'];
                    }
                }else
                    $this->reply['user']=['status'=>'fail','msg'=>'You are already used this link.'];
            }
            else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function viewProfile(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $profile=DB::table('users')->where('id',$r->user_id)->first();

                unset($profile->password);
                $profile->address=explode('@',$profile->address);
                $profile->payment_opt=unserialize($profile->payment_opt);
                //$profile->dob=date('Y-m-d',strtotime($profile->dob));
                if($profile){
                    $positiveAvg=DB::table('feedback')->where('receiver_id',$r->user_id)->first([DB::raw("SUM(IF(feedback_type='Positive', '1', '0'))/COUNT(id) as avg,COUNT(id) as count ")]);
                    $profile->feedback_avg=round($positiveAvg->avg*100,2);
                    $positiveCount=DB::table('feedback')->where(['receiver_id'=>$r->user_id,'feedback_type'=>'Positive'])->count();
                    $profile->positiveCount=$positiveCount;
                    $nautralCount=DB::table('feedback')->where(['receiver_id'=>$r->user_id,'feedback_type'=>'Neutral'])->count();
                    $profile->neutralCount=$nautralCount;
                    $negativeCount=DB::table('feedback')->where(['receiver_id'=>$r->user_id,'feedback_type'=>'Negative'])->count();
                    $profile->negativeCount=$negativeCount;
                    $profile->totalCount=DB::table('feedback')->where(['receiver_id'=>$r->user_id])->count();

                    $this->reply['user']=['status'=>'success','data'=>$profile];
                }
                else
                    $this->reply['user']=['status'=>'success','msg'=>'Something wrong happen.please try again.'];
            }
            else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function updateProfile(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                $userMobile=DB::table('users')
                    ->where(['mobile_number'=>$r->mobile_number])
                    ->where('id','!=',$r->id)
                    ->first(['mobile_number']);
                $userEmail=DB::table('users')
                    ->where(['email'=>$r->email])
                    ->where('id','!=',$r->id)
                    ->first(['email']);
                if($userEmail)
                    $this->reply['user']=[ 'status' => 'fail', 'msg' => " A User with the email $userEmail->email already exsist. Please try again." ];
                elseif($userMobile) {
                    $this->reply['user'] = ['status' => 'fail', 'msg' => "A $userMobile->mobile_number number is already exist. Please try again."];
                } else {
                    $state=($r->state==''?' ':$r->state);
                    $postcode=($r->postcode==' '?'':$r->postcode);

                    $address = $r->address1 . '@' . $r->address2 . '@' . $postcode . '@' . $r->city . '@' . $r->country. '@' . $state;
                    $destinationPath = public_path("/images/user/$r->id/");
                    File::makeDirectory($destinationPath, $mode = 0777, true, true);
                    if ($r->prifile_image) {
                        $name = explode(",", $r->prifile_image);
                        $data = base64_decode($name[1]);
                        $imagename = time() . '.jpeg';
                        file_put_contents($destinationPath . $imagename, $data);
                        $user = ['first_name' => $r->first_name, 'last_name' => $r->last_name, 'natinality' => $r->natinality, 'mobile_number' => $r->mobile_number,'email'=>$r->email,
                        'dob' => $r->dob, 'gender' => $r->gender,'payment_email'=>$r->payment_email, 'profile_pic' => $imagename, 'address' => $address,'updated_date'=>date('Y-m-d h:m:i')];
                    } else
                        $user = ['first_name' => $r->first_name, 'last_name' => $r->last_name, 'natinality' => $r->natinality, 'mobile_number' => $r->mobile_number,'email'=>$r->email,
                        'dob' => $r->dob,'payment_email'=>$r->payment_email, 'gender' => $r->gender, 'address' => $address,'updated_date'=>date('Y-m-d h:m:i')];

                    $update = DB::table('users')->where('id', $r->id)->update($user);
                    if ($update) {
                        $this->reply['user'] = ['status' => 'success', 'msg' =>'Updated successfully'];
                    } else
                        $this->reply['user'] = ['status' => 'success', 'msg' => 'Something wrong happen.'];
                    }
                }
                else{
                    $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function updateSellerProfile(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();

                $userMobile=DB::table('users')
                    ->where(['mobile_number'=>$r->mobile_number])
                    ->where('id','!=',$r->id)
                    ->first(['mobile_number']);

                if($userMobile) {
                    $this->reply['user'] = ['status' => 'fail', 'msg' => "A $userMobile->mobile_number number is already exist. Please try again."];
                }else{
                    $address = $r->address1 . '@' . $r->address2 . '@' . $r->postcode . '@' . $r->city . '@' . $r->country. '@' . $r->state;
                    $destinationPath = public_path("/images/user/$r->id/");
                    $payment_opt=explode(',',$r->payment_otp);
                    $payment_opt=serialize($payment_opt);
                    File::makeDirectory($destinationPath, $mode = 0777, true, true);
                    if ($r->prifile_image) {
                        $name = explode(",", $r->prifile_image);
                        $data = base64_decode($name[1]);
                        $imagename = time() . '.jpeg';
                        file_put_contents($destinationPath . $imagename, $data);
                        $user = ['first_name' => $r->first_name, 'last_name' => $r->last_name, 'natinality' => $r->natinality, 'mobile_number' => $r->mobile_number,
                            'dob' => $r->dob, 'gender' => $r->gender, 'profile_pic' => $imagename, 'address' => $address,
                            'business_mobile'=>$r->business_mobile,'business_name'=>$r->business_name,'payment_opt'=>$payment_opt,'payment_email'=>$r->payment_email,
                            'business_relationship'=>$r->business_relationship,'company_number'=>$r->company_number,'vat_number'=>$r->vat_number,
                            'updated_date'=>date('Y-m-d h:m:i')];
                    } else
                        $user = ['first_name' => $r->first_name, 'last_name' => $r->last_name, 'natinality' => $r->natinality, 'mobile_number' => $r->mobile_number,
                            'dob' => $r->dob, 'gender' => $r->gender, 'address' => $address,
                            'business_mobile'=>$r->business_mobile,'business_name'=>$r->business_name,'payment_opt'=>$payment_opt,'payment_email'=>$r->payment_email,
                            'business_relationship'=>$r->business_relationship,'company_number'=>$r->company_number,'vat_number'=>$r->vat_number,
                            'updated_date'=>date('Y-m-d h:m:i')];

                    $update = DB::table('users')->where('id', $r->id)->update($user);

                    if ($update) {
                        DB::commit();
                        $this->reply['user'] = ['status' => 'success', 'msg' =>'Updated successfully'];
                    } else
                        $this->reply['user'] = ['status' => 'success', 'msg' => 'Something wrong happen.'];
                }
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function changePassword(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $user=DB::table('users')->where('id',$r->user_id)->first();
                if($user){
                    if(Hash::check($r->old_password,$user->password)){
                        $update=DB::table('users')->where('id',$r->user_id)->update(['password'=>Hash::make($r->new_password)]);
                        if($update){
                            $this->reply['user']=['status'=>'success','msg'=>'Password reset successfully.'];
                            DB::commit();
                        }else{
                            $this->reply['user']=['status'=>'success','msg'=>'Something wrong happen, Please try again.'];
                        }
                    }else{
                        $this->reply['user']=['status'=>'success','msg'=>'Old password is wrong.'];
                    }
                }
            }else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function changeUserName(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)) {
                DB::beginTransaction();
                $user = DB::table('users')->where('id','!=',$r->user_id)->where('display_name' ,'=', $r->user_name)->first();
                if ($user)
                    $this->reply['user']=['status'=>'fail','msg'=>'Username already exist.'];
                else{
                    $update=DB::table('users')->where('id',$r->user_id)->update(['display_name'=>$r->user_name,'updated_date'=>date('Y-m-d H:i:s')]);
                    if($update){
                        DB::commit();
                        $this->reply['user']=['status'=>'success','msg'=>'Username reset successfully.'];
                    }else
                        $this->reply['user']=['status'=>'success','msg'=>'Something wrong happen,please try again.'];
                }
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function ContactUs(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                    $user['name']=$r->name;
                    $user['mobile']=$r->mobile;
                    $user['email']=$r->email;
                    $user['message']=$r->message;
                if ($r->hasFile('file')) {
                    $file = $r->file('file');
                    $file_name = time() . '.' . $file->getClientOriginalExtension();
                    $destinationPath = public_path('/upload');
                    $file->move($destinationPath, $file_name);
                }else
                    $file_name='';
                $admin=DB::table('users')->where('role','admin')->first();
                Mail::to($admin->email)->send(new ContactUs($user,$file_name));
                $this->reply['contact_us']=['status'=>'success','msg'=>'Mail send successfully.'];
            }else
                $this->reply['auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function ConvertBuyerToSeller(Request $r){
         try {
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                    $payment_opt=explode(',',$r->payment_opt);
                    $payment_opt=serialize($payment_opt);
                    $seller=['account_type'=>$r->account_type,'business_mobile'=>$r->business_mobile,'business_address'=>$r->business_address,'business_type'=>$r->business_type,'business_name'=>$r->business_name,'payment_opt'=>$payment_opt,'payment_email'=>$r->payment_email,
                        'business_relationship'=>$r->business_relationship,'company_number'=>$r->company_number,'vat_number'=>$r->vat_number,'role'=>$r->role];
                    $update=DB::table('users')->where('id',$r->user_id)->update($seller);
                    if($update){
                   /*     $setting = DB::table('setting')->first();
                        $setting = unserialize($setting->setting);
                        $start_dt = date('Y-m-d', strtotime($setting['start_date']));
                        $end_dt = date('Y-m-d', strtotime($setting['end_date']));
                        $free_seller=['seller_id'=>$r->user_id,'start_date'=>$start_dt,'end_date'=>$end_dt];
                        DB::table('free_seller_period')->insertGetId($free_seller);
                   */     DB::commit();
                        $this->reply['users']=['status'=>'success','msg'=>'User role converted successfully.'];
                    }else
                        $this->reply['users']=['status'=>'fail','msg'=>'Something wrong happen, Please try again.'];

              return response()->json($this->reply);
            } else
                $this->reply['status']=['status'=>'fail','msg'=>'Authentication Fail.'];
         } catch (Exception $e){
             DB::rollback();
             echo $e->getMessage();
         }
    }

    function editBusinessInfo(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();

                $business=DB::table('users')->where('id',$r->id)->update([$r->key=>$r->value,'updated_date'=>date('Y-m-d h:i:s')]);
                if($business){
                    DB::commit();
                    $this->reply['users']=['status'=>'success','msg'=>'Business updated successfully.'];
                }else
                    $this->reply['users']=['status'=>'fail','msg'=>'Something wrong happen,please try again'];
            }else
                $this->reply['status']=['status'=>'fail','msg'=>'Authentication Fail.'];

          return response()->json($this->reply);
        }catch (Exception $e){
            DB::rollback();
            echo $e->getMessage();
        }
    }

    function editBusinessInfoArray(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)) {
                DB::beginTransaction();
                foreach ($r->key as $key=>$value) {
                    $business = DB::table('users')->where('id', $r->id)->update([$key => $value, 'updated_date' => date('Y-m-d h:i:s')]);
                    DB::commit();
                }
                $this->reply['users'] = ['status' => 'success', 'msg' => 'Business updated successfully.'];
                DB::commit();
            }else
                $this->reply['status']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            DB::rollback();
            echo $e->getMessage();
        }
    }
    
    
 
    
    
    
    function get_country(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                //$parentCategoryId = ( $r->parentCategoryId == '' ? 0 : $r->parentCategoryId );
                $tblPrefix = config('database.connections.mysql.prefix');

                $categories = DB::table('country')->get();
                
                if($categories)
                    $this->reply['categories'] = ['status'=>'success','data'=>$categories];
                else
                    $this->reply['categories'] = [ 'status' =>'fail', 'msg' => 'something wrong. please , try again!' ];

                return response()->json($this->reply);
            } else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }
    
    
    
    
    function get_state(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                //$parentCategoryId = ( $r->parentCategoryId == '' ? 0 : $r->parentCategoryId );
                $tblPrefix = config('database.connections.mysql.prefix');

                $states = DB::table('states')->where('country_id' ,$r->country_id)->get();
                
                if($states)
                    $this->reply['states'] = ['status'=>'success','data'=>$states];
                else
                    $this->reply['states'] = [ 'status' =>'fail', 'msg' => 'something wrong. please , try again!' ];

                return response()->json($this->reply);
            } else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }
    
    
    
    
     function edit_address(Request $r){
         //echo $r;
         //exit;
         try {
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                   //// $payment_opt=explode(',',$r->payment_opt);
                
                 $country_name=DB::table('country')->where('id',$r->value['country_id'])->first();
                 $state_name=DB::table('states')->where('id',$r->value['state_id'])->first();
                 
                 $address = $r->value['flat'].' '.$r->value['street'];
                 $address .= $r->value['city'].',';
                 $address .= $state_name->name.',';
                 $address .= $country_name->country_name.'. ';
                 if(isset($r->value['landmark'])){
                  $address .= 'landmark - '.$r->value['landmark'];
                 }
                 
                 $add=['country_name'=>$country_name->country_name,'country_id'=>$r->value['country_id'],'state_name'=>$state_name->name,'state_id'=>$r->value['state_id'],'flat_no'=>$r->value['flat'],'street'=>$r->value['street'],'city'=>$r->value['city'],'pincode'=>$r->value['pincode'],'landmark'=>$r->value['landmark']];
//                 print_r($add);
//                 echo $r->key;
//                 echo $address;exit;
                 
                    $value=serialize($add);
//                    echo $value;
                
                 $business=DB::table('users')->where('id',$r->id)->update([$r->key=>$value,'updated_date'=>date('Y-m-d h:i:s')]);
                 
//                 echo $business;exit;
               // print_r($r->data);exit;
                    //$seller1=['country'=>$r->country_id,'flat_no'=>$r->flat,'city'=>$r->city,'state'=>$r->state,'pincode'=>$r->pincode,'landmark'=>$r->landmark];
                    //print_r($seller1);
                         ////$setting = serialize($seller1); 
                         //$seller=['business_address'=>$setting];
                    //$update=DB::table('userss')->where('id',$r->id)->update($seller);
                    if($business){
                   /*     $setting = DB::table('setting')->first();
                        $setting = unserialize($setting->setting);
                        $start_dt = date('Y-m-d', strtotime($setting['start_date']));
                        $end_dt = date('Y-m-d', strtotime($setting['end_date']));
                        $free_seller=['seller_id'=>$r->user_id,'start_date'=>$start_dt,'end_date'=>$end_dt];
                        DB::table('free_seller_period')->insertGetId($free_seller);
                   */     DB::commit();
                        $this->reply['users']=['status'=>'success','msg'=>'Address Changed  Successfully.','address'=>$address];
                    }else
                        $this->reply['users']=['status'=>'fail','msg'=>'Something wrong happen, Please try again.'];

              return response()->json($this->reply);
            } else
                $this->reply['status']=['status'=>'fail','msg'=>'Authentication Fail.'];
         } catch (Exception $e){
             DB::rollback();
             echo $e->getMessage();
         }
    }
    
    
    
    function policyDoc(Request $r){
        
        
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();

                $agreement = DB::table('cms')->where('id' ,$r->agreement)->first();
                $privacy = DB::table('cms')->where('id' ,$r->privacy)->first();
                
//                print_r($agreement);
//                echo '</br>';
//                echo $privacy;
//                echo '</br>';
//                exit;
                
                
                
                $ip_address=$_SERVER['REMOTE_ADDR'];
                /*Get user ip address details with geoplugin.net*/
                $geopluginURL='http://www.geoplugin.net/php.gp?ip='.$ip_address;
                $addrDetailsArr = unserialize(file_get_contents($geopluginURL));
                /*Get City name by return array*/
                $city = $addrDetailsArr['geoplugin_city'];
                /*Get Country name by return array*/
                $country = $addrDetailsArr['geoplugin_countryName'];
                /*Comment out these line to see all the posible details*/
                /*echo '<pre>';
                print_r($addrDetailsArr);
                die();*/
                if(!$city){
                   $city='Not Define';
                }if(!$country){
                   $country='Not Define';
                }
                
                
                $data_agreement = [
                    "page_title"=>$agreement->page_title,
                    "page_content"=>$agreement->page_content,
                    "user_name"=>$r->name,
//                    "date"=>date("d-m-Y"),
                    "date"=>date("F d, Y"),
                    "ip_address"=>$ip_address,
                    "country"=>$country,
                    "nationality"=>$r->natinality
                    
                ];
                $data_privacy = [
                    "page_title"=>$privacy->page_title,
                    "page_content"=>$privacy->page_content,
                    "user_name"=>$r->name,
                    "date"=>date("F d, Y"),
                    "ip_address"=>$ip_address,
                    "country"=>$country,
                    "nationality"=>$r->natinality
                    
                ];
//                print_r($data_agreement);
                $name = str_replace(" ","_",$r->name);
//                echo "agreement/user_agreement/".$name."_".$r->id.".pdf";
//                echo "agreement/user_privacy/".$name."_".$r->id.".pdf";
        //        $pdf = PDF::loadView('/invoice/buyer_invoice', $data);
                $pdf_agreement = PDF::loadView('/agreement/user_agreement', $data_agreement)->save(public_path("agreement/user_agreement/user_agreement_".$name."_".$r->id.".pdf"));
                $pdf_privacy = PDF::loadView('/agreement/user_privacy', $data_privacy)->save(public_path("agreement/user_privacy/user_privacy_".$name."_".$r->id.".pdf"));
//                exit;
                
//                if($pdf_agreement && $pdf_privacy)
                    $this->reply['docs'] = ['status'=>'success'];
//                else
//                    $this->reply['docs'] = [ 'status' =>'fail', 'msg' => 'something wrong. please , try again!' ];

                return response()->json($this->reply);
            } else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
        
        
        
    }
    
}