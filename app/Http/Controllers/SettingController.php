<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 5/22/2018
 * Time: 12:29 PM
 */

namespace App\Http\Controllers;


use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;

class SettingController extends Controller
{
    function settingForm(){
        if(!Session::get('userId'))
            return redirect('admin/login');
        $view=DB::table('setting')->where('id','1')->first();

        return view('admin/add_setting')->with('all_setting',$view);
    }

    function saveSetting(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            
            $setting=serialize($r->setting);
            $feature_item=serialize($r->feature_item);
            $season_deal_fee=serialize($r->season_deal_fee);
            $insert_fee=serialize($r->insert_fee);
//            echo $r->menu_value;
//            exit;
         //   $save=DB::table('setting')->insertGetId(['setting'=>$setting]);
            $save=DB::table('setting')->where('id','1')->update(['insert_fee'=>$insert_fee,'season_deal_fee'=>$season_deal_fee,'invoice_note'=>$r->invoice_note,'setting'=>$setting,'feature_item'=>$feature_item,'home_page_menu_value'=>$r->menu_value,'updated_date'=>date('Y-m-d h:i:s')]);
            if($save){
                Session::flash('message','Setting Save Successfully.');
                DB::commit();
                return redirect('admin/setting-form');
            }else{
                Session::flash('message','Something wrong happen,please try again.');
                return redirect('admin/setting-form');
            }
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function blockManagementForm(){
        if(!Session::get('userId'))
            return redirect('admin/login');

        $block_management=DB::table('setting')->where('id','1')->first(['block_management']);
        $blocks=unserialize($block_management->block_management);

        return view('admin/blocks_management')->with('blocks',$blocks);
    }
    
    function blockManagement(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            $blocks=serialize($r->block);
            $save=DB::table('setting')->where('id','1')->update(['block_management'=>$blocks]);
            if($save){
                DB::commit();
                Session::flash('message','Block Management save successfully.');
                return redirect('admin/block-management-form');
            }else {
                Session::flash('message','Block Management save successfully.');
                return redirect('admin/block-management-form');
            }
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }
    
    function autoRelistProduct(){
        if(!Session::get('userId'))
            return redirect('admin/login');

        $relist_management=DB::table('setting')->where('id','1')->first(['auto_relist_management']);
        $relist=unserialize($relist_management->auto_relist_management);
//            echo $blocks;
//            print_r($blocks);
//            exit;
        return view('admin/auto_relist_management')->with('relist',$relist);
    }
    function autoRelistForm(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            //echo serialize($r->relist);
            
//            if(DB::connection()->getDatabaseName())
//{
//   echo "Connected sucessfully to database ".DB::connection()->getDatabaseName().".";
//}
            
            
            
            
            DB::beginTransaction();
            
            Input::flash();
            $current_date=date('Y-m-d');
            
//            if($r->charge==0){
////                echo $r->charge;
////            exit;
//            $r->validate([
//                'times' => 'required',
//                'autorelist' => 'required',
//                'charge' => 'required',
//                'charge_val' => 'required',
//            ]);
//                
//            } else {
//                $r->validate([
//                'times' => 'required',
//                'autorelist' => 'required',
//                'charge' => 'required',
//            ]);
//            }
            
             $relist_data=['times'=>$r->times,'autorelist'=>$r->autorelist,'charge'=>$r->charge,'charge_val'=>$r->charge_val];
//            
            $relist=serialize($relist_data);
//            $relist=serialize($r->relist);
//            echo $relist;
//            exit;
            $save=DB::table('setting')->where('id','1')->update(['auto_relist_management'=>$relist]);
//            echo $save;
//            exit;
            if($save){
                DB::commit();
                Session::flash('message','Relist Management save successfully.');
                return redirect('admin/relist-management');
            }else {
                Session::flash('message','Relist Management save successfully.');
                return redirect('admin/relist-management');
            }
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }
    
    
    function buyerInvoice(){
        if(!Session::get('userId'))
            return redirect('admin/login');

        $invoice_management=DB::table('setting')->where('id','1')->first(['buyer_invoice_management']);
        $invoice=unserialize($invoice_management->buyer_invoice_management);
//            $invoice['note1']= 'setsetea';
//            $invoice['note2']= 'setsetea';
//            print_r($invoice);
//            exit;
        return view('admin/buyer_invoice_management')->with('buyer',$invoice);
//        return view('admin/buyer_invoice_management');
    }
    function buyerInvoiceForm(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $current_date=date('Y-m-d');
//            echo $r;
//            exit;
            $r->validate([
                'decl_heading' => 'required',
                'aknow_heading' => 'required',
                'declaration' => 'required',
                'aknowledgment' => 'required',
                'footer_note1' => 'required',
                'footer_note2' => 'required',
            ]);
            
            
             $invoice=['declaration_heading'=>$r->decl_heading,'aknowledgment_heading'=>$r->aknow_heading,'declaration'=>$r->declaration,'aknowledgment'=>$r->aknowledgment,'footer_note1'=>$r->footer_note1,'footer_note2'=>$r->footer_note2];
//             $invoice=['declaration'=>$r->declaration,'aknowledgment'=>$r->aknowledgment,'footer_note1'=>$r->note1,'footer_note2'=>$r->note2];
//             $buyer_invoice=serialize($r->buyer);
            $buyer_invoice=serialize($invoice);
            
//            print_r($invoice);
//            exit;
            
            $save=DB::table('setting')->where('id','1')->update(['buyer_invoice_management'=>$buyer_invoice]);
            
//           
//            $save=DB::table('faq')->insertGetId($faq);
            
            
//            echo $save;
//            exit;
            if($save){
                DB::commit();
                Session::flash('message','Buyer Invoice Management save successfully.');
                return redirect('admin/buyer-invoice');
            }else {
                Session::flash('message','Buyer Invoice Management save successfully.');
                return redirect('admin/buyer-invoice');
            }
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }


    function contactUs(){
        if(!Session::get('userId'))
            return redirect('admin/login');

        $contact_management=DB::table('setting')->where('id','1')->first(['contact_management']);
        $contact=unserialize($contact_management->contact_management);
//            $invoice['note1']= 'setsetea';
//            $invoice['note2']= 'setsetea';
//            print_r($invoice);
//            exit;
        return view('admin/contact_us')->with('contact',$contact);
//        return view('admin/contact_us');
    }
    
    function contactUsForm(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $current_date=date('Y-m-d');
//            echo $r;
//            exit;
            $r->validate([
                'phone_no' => 'required',
                'email' => 'required',
                'address' => 'required',
            ]);
            
             $address = strip_tags($r->address);
             $data=['phone_no'=>$r->phone_no,'email'=>$r->email,'address'=>$address];
//             $invoice=['declaration'=>$r->declaration,'aknowledgment'=>$r->aknowledgment,'footer_note1'=>$r->note1,'footer_note2'=>$r->note2];
//             $buyer_invoice=serialize($r->buyer);
            $contact_data=serialize($data);
            
//            print_r($contact_data);
//            exit;
            
            $save=DB::table('setting')->where('id','1')->update(['contact_management'=>$contact_data]);
            
//           
//            $save=DB::table('faq')->insertGetId($faq);
            
            
//            echo $save;
//            exit;
            if($save){
                DB::commit();
                Session::flash('message','Contact Us Management save successfully.');
                return redirect('admin/contact');
            }else {
                Session::flash('message','Contact Us Management save successfully.');
                return redirect('admin/contact');
            }
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }
    
    static function viewCurrency(){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }try{
            $viewCurrency=DB::table('currencies')->get();
            return $viewCurrency;
        }catch (Exception $e){
            print_r($e);
        }
    }
    
    
    /*-----------------------------------------------------API--------------------------------------------------------*/
    
    
    function viewContactApi(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $contact=DB::table('setting')->where('id','1')->first();
                $contactdata=unserialize($contact->contact_management);
//                $address = strip_tags($contactdata['address']);
//                $phone_no=$contactdata['']
//                print_r($contactdata);
//                exit;
                if($contactdata)
                    $this->reply=['status'=>'success','data'=>$contactdata];
                else
                    $this->reply=['status'=>'fail','msg'=>"something worng happen"];
                DB::commit();
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
    
    
    
    
    function viewSetting(Request $r){
        try{
                $auth = $r->header('auth');
                $authDB = DB::table('auth')->where('id', '1')->first();
                if (Hash::check($auth, $authDB->auth)) {
                    $setting = DB::table('setting')->first();
                    $setting = unserialize($setting->setting);
                    $this->reply['setting'] = ['status' => 'success', 'data' => $setting];
                } else
                    $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication fail'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
        }
    }
    function settingDataAPI(Request $r){
        try{
                $auth = $r->header('auth');
                $authDB = DB::table('auth')->where('id', '1')->first();
                if (Hash::check($auth, $authDB->auth)) {
                    $setting = DB::table('setting')->first();
//                    $setting = unserialize($setting->setting);
                    $this->reply['setting'] = ['status' => 'success', 'data' => $setting->home_page_menu_value];
                   
                } else
                    $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication fail'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
        }
    }

    function viewPunchLine(Request $r){
        try{
            $auth=$r->header('auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $punchLine=DB::table('setting')->where('id','1')->first();
                $punchLine=unserialize($punchLine->setting);
                $punchLine=$punchLine['punch_line'];
                if($punchLine)
                    $this->reply['punchline']=['status'=>'success','data'=>$punchLine];
                else
                    $this->reply['punchline']=['status'=>'fail','msg'=>'Something wrong happen, please try again.'];
            }else
                $this->reply['auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);

        }catch (\Exception $e){
            echo $e->getMessage();
        }
    }

    function viewSellerFees(Request $r){
        try{
            $auth=$r->header('auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                $count=DB::table('product')->where('user_id',$r->user_id)->count();
                $setting_all = DB::table('setting')->first();
                $feature_item=unserialize($setting_all->feature_item);
                $season_deal_fee=unserialize($setting_all->season_deal_fee);
                $insert_fee=unserialize($setting_all->insert_fee);
                $setting = unserialize($setting_all->setting);

                $current_dt = date('Y-m-d');
                $current_dt=date('Y-m-d', strtotime($current_dt));
                //FREE SELLER PERIOD
                $seller_period=DB::table('free_seller_period')->where('seller_id',$r->user_id)->first();
//                echo $r->user_id;
//                print_r($seller_period);
                
                
                if($seller_period){
                    $period_start_date= date('Y-m-d', strtotime($seller_period->start_date));
                    $period_end_date=date('Y-m-d', strtotime($seller_period->end_date));
                    if (($current_dt >= $period_start_date) && ($current_dt <= $period_end_date)){
                        $setting['insertion_fee']="0";
                    }
                }

                $start_dt = date('Y-m-d', strtotime($setting['start_date']));
                $end_dt = date('Y-m-d', strtotime($setting['end_date']));

                if (($current_dt >= $start_dt) && ($current_dt <= $end_dt)){
                        $setting['insertion_fee']="0";
                }else{
                    if($count<$setting['free_insertion'])
                        $setting['insertion_fee']="0";
                }

                $return_days=explode(',',$setting['return_days']);
                unset($setting['return_days']);
                unset($setting['punch_line']);

                $this->reply['setting'] = ['status' => 'success','insert_fee'=>$insert_fee ,'data' => $setting,'return_days'=>$return_days,'feature_item'=>$feature_item,'season_deal_fee'=>$season_deal_fee];
            }else
                $this->reply['auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
        }
    }
}