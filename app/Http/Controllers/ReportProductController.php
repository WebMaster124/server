<?php

namespace App\Http\Controllers;

use App\Mail\DeleteProduct;
use App\Mail\ReportItemAdmin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;

class ReportProductController extends Controller
{
    function viewProductReport(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $product_report=DB::table('product_report as pr')
                                ->join('product as p','p.id','=','pr.product_id')
                                ->join('users as u','u.id','=','pr.reported_by')
                                ->join('users as s','s.id','=','p.user_id')
                                ->get(['u.first_name','u.last_name','u.display_name','u.id as user_id',
                                    'p.title','p.photos','p.id as product_id','p.product_sku',
                                    'pr.id','pr.reason','pr.report_reasons',
                                    's.first_name as seller_f_name','s.last_name as seller_l_name','s.id as seller_id']);

            return view('admin/view_product_report')->with('product_reports',$product_report);
            }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function deleteProduct($product_id,$report_id){
        try{
            DB::beginTransaction();
            if(!Session::get('userId'))
                return redirect('admin/login');

            $delete=DB::table('product')->where('id',$product_id)->update(['status'=>'9','updated_date'=>date('Y-m-d')]);
            if($delete){
                DB::table('product_report')->where('id',$report_id)->delete();
                Session::flash('message','Product is delete successful');
                DB::commit();
                $product_info=DB::table('product')->where('id',$product_id)->first();
                $product_info->photos=unserialize($product_info->photos);
                $product_info->photos=$product_info->photos[0];
                $product_info->shipment_type=unserialize($product_info->shipment_type);

                $user_info=DB::table('users')->where('id',$product_info->user_id)->first(['email']);
                $email_template=DB::table('email_template')->where('id','12')->first();
                Mail::to($user_info->email)->send(new DeleteProduct($product_info,$email_template));

                return redirect('admin/product-report');
            }else{
                Session::flash('message','Something wrong happen,please try again.');
                return redirect('admin/product-report');
            }

        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function deleteReport($report_id){
        try{
            DB::beginTransaction();
            if(!Session::get('userId'))
                return redirect('admin/login');
            $delete=DB::table('product_report')->where('id',$report_id)->delete();
            if($delete){
                Session::flash('message','Product is allow successful');
                DB::commit();
                return redirect('admin/product-report');
            }else{
                Session::flash('message','Something Wrong happen,please try again.');
                return redirect('admin/product-report');
            }

        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    /*-------------------------------------------------------API------------------------------------------------------*/
    function productReport(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)) {
                DB::beginTransaction();
                $report=DB::table('product_report')->where(['reported_by'=>$r->reported_by,'product_id'=>$r->product_id])->exists();
                if($report)
                    $this->reply['product_report']=['status'=>'fail','msg'=>'Already reported for this product.'];
                else {
                    $report_reasons=serialize($r->report_reasons);
                    $product_report = ['reported_by' => $r->reported_by, 'product_id' => $r->product_id, 'reason' => $r->reason,'report_reasons'=>$report_reasons];
                    $save = DB::table('product_report')->insertGetId($product_report);
                    if ($save) {
                        $this->reply['product_report'] = ['status' => 'success', 'msg' => 'Successful reported to admin.'];


                        $admin=DB::table('users')->where('role','admin')->first(['email']);
                        $user_info=DB::table('users')->where('id',$r->reported_by)->first();
                        $user_info->reason=$r->reason;
                        $user_info->report_reasons=$r->report_reasons;
                        $product_info=DB::table('product')->where('id',$r->product_id)->first();
                        $product_info->photos=unserialize($product_info->photos);
                        $product_info->photos=$product_info->photos[0];
                        $product_info->shipment_type=unserialize($product_info->shipment_type);
                        Mail::to($admin->email)->send(new ReportItemAdmin($user_info,$product_info));
                        DB::commit();
                    } else
                        $this->reply['product_report'] = ['status' => 'fail', 'msg' => 'something wrong happen,please try again.'];
                }
                }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }
}
