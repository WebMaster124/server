<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 5/2/2018
 * Time: 11:36 AM
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;


class CouponController extends Controller
{
    function couponCodeForm(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            return view('admin/add_coupon_code');
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function saveCouponCode(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            Input::flash();
            $r->validate([
                'code'=>'required|regex:/^[a-zA-Z0-9]+$/u|unique:coupon_code',
                'discount'=>'numeric|required|min:0',
                'coupon_cnt'=>'numeric|required|min:0',
                'expiry_date'=>'required'
            ], ['coupon_cnt.min' => 'The coupon count must be at least 0.']
            );

            $expiry_date = strtotime($r->expiry_date);
            $expiry_date = date('Y-m-d',$expiry_date);

            $coupon_code=['code'=>$r->code,'discount'=>$r->discount,'remaining_cnt'=>$r->coupon_cnt,'coupon_cnt'=>$r->coupon_cnt,'expiry_date'=>$expiry_date,'code_type'=>$r->code_type];

            $save=DB::table('coupon_code')->insertGetId($coupon_code);
            if($save){
                Session::flash('message','Coupon Code added successfully.');
                DB::commit();
                return redirect('admin/coupon-code-form');
            }else{
                Session::flash('message','Something wrong happen, Please try again.');
                return redirect('admin/coupon-code-form');
            }
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function viewCouponCode(){
        try{
            if(!Session::get('userId')){
                return redirect('admin/login');
            }
            $codes=DB::table('coupon_code')->get();
            return view('/admin/view_coupon_code')->with('codes',$codes);
        }
        catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function editCouponCode($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $code=DB::table('coupon_code')->where('id',$id)->first();
            if($code)
                return view('/admin/edit_coupon_code')->with('code',$code);
            else
                return response()->view('errors.404');

        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function editCouponCodeData(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $r->validate([
                'code'=>'required|regex:/^[a-zA-Z0-9]+$/u|unique:coupon_code,code,'.$r->id,
                'discount'=>'numeric|required|min:0',
                'coupon_cnt'=>'numeric|required|min:0',
                'expiry_date'=>'required'
            ],
                ['coupon_cnt.min' => 'The coupon count must be at least 0.']
            );
            $expiry_date = strtotime($r->expiry_date);
            $expiry_date = date('Y-m-d',$expiry_date);
            $updated_date=date('Y-m-d');

            $coupon_code=['code'=>$r->code,'discount'=>$r->discount,'remaining_cnt'=>$r->coupon_cnt,'coupon_cnt'=>$r->coupon_cnt,'expiry_date'=>$expiry_date,'code_type'=>$r->code_type,'updated_date'=>$updated_date];

            $update=DB::table('coupon_code')->where('id',$r->id)->update($coupon_code);
            if($update){
                Session::flash('message','Coupon Code updated successfully.');
                DB::commit();
                return redirect('admin/view-coupon-code');
            }else{
                Session::flash('message','Something wrong happen, Please try again.');
                return redirect('admin/view-coupon-code');
            }
        } catch(Exception $e) {
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function deleteCouponCode($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            $delete=DB::table('coupon_code')->where('id',$id)->delete();
            if($delete){
                Session::flash('message','Coupon Code deleted successfully.');
                DB::commit();
                return redirect('admin/view-coupon-code');
            }else{
                Session::flash('message','something wrong happen.');
                return redirect('admin/view-coupon-code');
            }
        }
        catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

  static function viewCoupon($code){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $code=DB::table('coupon_code')->where('code',$code)->first();
            return $code;
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    /*-----------------------------------------------------API-------------------------------------------------------*/

    function applyCouponCode(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $notmatch=false;

               /* $couponCodeApply=DB::table('coupon_code_apply_by')->where(['user_id'=>$r->user_id,'coupon_code'=>$r->code])->exists();
                if($couponCodeApply){
                    $this->reply['coupon_code'] = ['status' => 'fail', 'msg' => 'Coupon Code is already used.'];
                }else {*/
                    $total=0;
                    $couponCode = DB::table('coupon_code')->get();
                    foreach ($couponCode as $code) {
                        //CHECK COUPON CODE IS MATCH OR NOT
                        if ($code->code == $r->code) {
                            $current_date = date('Y-m-d');
                            //CHECK CODE COUNT
                            if ($code->coupon_cnt > 0) {
                                //CHECK CODE EXPIRY DATE
                                if ($current_date < $code->expiry_date) {
                                    //CHECK AND COUNT COUPON CODE DISCOUNT
                                    $price = $r->price;
                                    if ($code->code_type == 'Flat Discount') {
                                        if($price > $code->discount){
                                            $total = $price - $code->discount;
                                            DB::table('coupon_code')->where('id', $code->id)->update(['remaining_cnt' => DB::raw("remaining_cnt - 1")]);
                                        }else{
                                            $this->reply['coupon_code'] = ['status' => 'fail', 'msg' => 'Price must be grater than discount'];
                                            return response()->json($this->reply);
                                            exit;
                                        }
                                    } else {
                                        $code_discount = $price * $code->discount / 100;
                                        $total = $price - $code_discount;
                                        DB::table('coupon_code')->where('id', $code->id)->update(['remaining_cnt' => DB::raw("remaining_cnt - 1")]);
                                    }
                                    DB::table('coupon_code_apply_by')->insertGetId(['user_id' => $r->user_id, 'coupon_code' => $r->code]);
                                    $this->reply['coupon_code'] = ['status' => 'success', 'msg' => 'Coupon Code apply successful.', 'total' => round($total,2), 'data' => $code];
                                    $notmatch = true;
                                } else {
                                    $this->reply['coupon_code'] = ['status' => 'fail', 'msg' => 'Coupon Code is now expire.'];
                                    $notmatch = true;
                                }
                            } else {
                                $this->reply['coupon_code'] = ['status' => 'fail', 'msg' => 'All coupon code are used.'];
                                $notmatch = true;
                            }
                        }
                    }
                    if ($notmatch == false)
                        $this->reply['coupon_code'] = ['status' => 'fail', 'msg' => 'Coupon Code is not match.'];

            }else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function removeCouponCode(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                /*$removeUser=DB::table('coupon_code_apply_by')->where(['user_id'=>$r->user_id,'coupon_code'=>$r->code])->delete();
                if($removeUser){*/
                    DB::table('coupon_code')->where('id', $r->id)->update(['remaining_cnt' => DB::raw("remaining_cnt + 1")]);
                    DB::commit();
                    $this->reply['coupon_code']=['status'=>'success','msg'=>'coupon code remove successfully.'];
                /*}else
                    $this->reply['coupon_code']=['status'=>'fail','msg'=>'something wrong happen.'];*/

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

}