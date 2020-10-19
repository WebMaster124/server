<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 5/21/2018
 * Time: 11:51 AM
 */

namespace App\Http\Controllers;


use App\Mail\ReturnOrder;
use App\Mail\ReturnOrderBySeller;
use App\Mail\TicketStatus;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;

class ResolutionCenterController extends Controller
{
     function viewResolutionCenterList(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            $viewResolution=DB::table('resolution_center as r')
                            ->leftjoin('users as u','u.id','=','r.buyer_id')
                            ->leftjoin('users as us','us.id','=','r.seller_id')
                            ->leftjoin('product as p','p.id','=','r.product_id')
                            ->groupBy('r.ticket_id')
                            ->get(['r.id','r.question','r.answer','r.requested_by','r.buyer_id','r.seller_id','r.product_id','r.ticket_id','r.created_date',
                                'u.first_name as buyer_f_name','u.last_name as buyer_l_name',
                                'us.first_name as seller_f_name','us.last_name as seller_l_name',
                                'p.title','p.photos']);

            return view('admin/view_resolution_center')->with('resolution_center',$viewResolution);

        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function viewResolutionCenter($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $viewResolution=DB::table('resolution_center as r')
                            ->leftjoin('users as u','u.id','=','r.buyer_id')
                            ->leftjoin('users as us','us.id','=','r.seller_id')
                            ->leftjoin('product as p','p.id','=','r.product_id')
                            ->where('r.id',$id)
                            ->first(['r.id','r.question','r.answer','r.requested_by','r.buyer_id','r.seller_id','r.product_id',
                                'u.first_name as buyer_f_name','u.last_name as buyer_l_name',
                                'us.first_name as seller_f_name','us.last_name as seller_l_name',
                                'p.title','p.photos']);
            if($viewResolution)
                return view('admin/reply_resolution_center')->with('resolution_center',$viewResolution);
            else
                return response()->view('errors.404');

        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function viewThreads($ticket_id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $qry=DB::table('resolution_center as r')
                ->leftjoin('users as u','u.id','=','r.buyer_id')
                ->leftjoin('users as us','us.id','=','r.seller_id')
                ->leftjoin('product as p','p.id','=','r.product_id');
            $qry=$qry->where(['r.ticket_id'=>$ticket_id]);

            $view_record=$qry->get(['r.id','r.buyer_id','r.seller_id','r.product_id','r.question','r.answer','r.reply_by','r.requested_by','r.ticket_id','r.ticket_status','r.created_date',
                'p.title','p.photos',
                'u.first_name as buyer_f_name','u.last_name as buyer_l_name','u.profile_pic as b_pic',
                'us.first_name as seller_f_name','us.last_name as seller_l_name','us.profile_pic as s_pic']);
            foreach ($view_record as $record){
                $record->photos=unserialize($record->photos);
            }

            return view('admin/view_ticket')->with('thread',$view_record);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

   public function replyResolutionCenter(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            $ticket_detail=DB::table('resolution_center')->where('ticket_id',$r->ticket_id)->first();
            $ResolutionCenter=['ticket_id'=>$ticket_detail->ticket_id,'buyer_id'=>$ticket_detail->buyer_id,'seller_id'=>$ticket_detail->seller_id,
                'product_id'=>$ticket_detail->product_id,'question'=>$ticket_detail->question,'requested_by'=>$r->user_role,'answer'=>$r->reply];
            $save=DB::table('resolution_center')->insertGetId($ResolutionCenter);
            if($save){
               /* $product_id[] = $ticket_detail->product_id;
                $seller_id[] = $ticket_detail->seller_id;
                //ORDER DETAIL
                $order_detail = DB::table('order')->where(['buyer_id' => $ticket_detail->buyer_id, 'seller_id' => $ticket_detail->seller_id, 'product_id' => $ticket_detail->product_id])->first();
                $order_id = $order_detail->order_id;
                //PRODUCT INFO
                $product_info = DB::table('product')->whereIn('id', $product_id)->get();
                //BUYER INFORMATION
                $buyer_info = DB::table('users')->where('id', $ticket_detail->buyer_id)->first();
                //SELLER INFORMATION
                $seller_info = DB::table('users')->whereIn('id', $seller_id)->get();*/

                /*foreach ($seller_info as $seller) {
                    Mail::to($buyer_info->email, $buyer_info->first_name)
                        ->send(new ReturnOrder($order_id, $buyer_info, $product_info, $r->reply, $seller, $ticket_detail->ticket_id, 'reply'));
                }*/
                DB::commit();
               return redirect('admin/view-ticket/'.$r->ticket_id);
            }
            }catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

 /*-----------------------------------------------------API---------------------------------------------------------*/

 function addResolutionCenter(Request $r){
     try{
         $auth=$r->header('Auth');
         $authDB=DB::table('auth')->where('id','1')->first();
         if(Hash::check($auth,$authDB->auth)){
             DB::beginTransaction();
             //ORDER DETAILS

             $order_detail=DB::table('order')->where(['order_id'=>$r->order_id,'buyer_id'=>$r->buyer_id,'seller_id'=>$r->seller_id,'product_id'=>$r->product_id])->first();
             $order_id=$order_detail->order_id;
             $ticket_id=$order_id.$r->product_id;
             //SAVE RESOLUTION REQUEST
             $check_ticket=DB::table('resolution_center')->where('ticket_id',$ticket_id)->count();
             if($check_ticket<=0) {
                 $ResolutionCenter = ['order_id' => $order_detail->order_id, 'ticket_id' => $ticket_id, 'buyer_id' => $r->buyer_id, 'seller_id' => $r->seller_id, 'product_id' => $r->product_id, 'question' => $r->question, 'requested_by' => $r->user_role];
                 $save = DB::table('resolution_center')->insertGetId($ResolutionCenter);
                 if ($save){
                     $product_id[] = $r->product_id;
                     $seller_id[] = $r->seller_id;
                     //BUYER INFORMATION
                     $buyer_info = DB::table('users')->where('id', $r->buyer_id)->first();
                     //PRODUCT INFORMATION
                     $product_info = DB::table('product')->whereIn('id', $product_id)->get();
                     //SELLER INFORMATION
                     $seller_info = DB::table('users')->whereIn('id', $seller_id)->get();
                     foreach ($seller_info as $seller) {
                         if ($r->user_role == 'buyer') {
                             Mail::to($seller->email, $seller->first_name)
                                 ->send(new ReturnOrder($order_id, $buyer_info, $product_info, $r->question, $seller, $ticket_id, 'request'));
                         }else{
                             Mail::to($buyer_info->email, $buyer_info->first_name)
                                 ->send(new ReturnOrderBySeller($order_id, $buyer_info, $product_info, $r->question, $seller, $ticket_id, 'request'));
                         }
                     }
                     DB::commit();
                     $this->reply['resolution_center'] = ['status' => 'success', 'msg' => 'Ticket Generate successful.', 'ticket_id' => $ticket_id];
                 }else
                     $this->reply['resolution_center'] = ['status' => 'fail', 'msg' => 'Something wrong happen,please try again.'];
             }else
                 $this->reply['resolution_center'] = ['status' => 'success', 'msg' => 'Ticket already created.', 'ticket_id' => $ticket_id];
         }else
             $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail'];
         return response()->json($this->reply);
     }catch(\Exception $e){
        echo $e->getMessage();
        DB::rollBack();
     }
 }

 function viewResolutionCenterThreadApi(Request $r){
     try{
         $auth=$r->header('auth');
         $authDB=DB::table('auth')->where('id','1')->first();
         if(Hash::check($auth,$authDB->auth)){
            $qry=DB::table('resolution_center as r')
                ->leftjoin('users as u','u.id','=','r.buyer_id')
                ->leftjoin('users as us','us.id','=','r.seller_id')
                ->leftjoin('product as p','p.id','=','r.product_id')
                ->orderBy('r.created_date','asc');
            $qry=$qry->where(['r.seller_id'=>$r->seller_id,'r.product_id'=>$r->product_id,'r.buyer_id'=>$r->buyer_id]);

            $view_record=$qry->get(['r.id','r.buyer_id','r.seller_id','r.product_id','r.question','r.answer','r.reply_by','r.requested_by','r.ticket_id','r.ticket_status','r.created_date','r.order_id',
                            'p.title','p.photos',
                            'u.first_name as buyer_f_name','u.last_name as buyer_l_name','u.profile_pic as buyer_pic',
                            'us.first_name as seller_f_name','us.last_name as seller_l_name','us.profile_pic as seller_pic']);
            $i=0;
            foreach ($view_record as $record){
                $record->photos=unserialize($record->photos);
                $view_record[$i]->created_date = date('d.m.Y H:i:s', strtotime($record->created_date));
                $i++;
            }
            $this->reply['resolution_center']=['status'=>'success','data'=>$view_record];
         }else
             $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
         return response()->json($this->reply);
     }catch (\Exception $e){
         echo $e->getMessage();
     }
 }

 function viewResolutionProducts(Request $r){
    try{
        $auth=$r->header('Auth');
        $authDB=DB::table('auth')->where('id','1')->first();
        if(Hash::check($auth,$authDB->auth)){

            $qry=DB::table('resolution_center as r')
                            ->leftjoin('users as u','u.id','=','r.buyer_id')
                            ->leftjoin('users as us','us.id','=','r.seller_id')
                            ->leftjoin('product as p','p.id','=','r.product_id')
                            ->groupBy('r.buyer_id','r.product_id','r.order_id')
                            ->orderBy('r.id','desc');

            if($r->one_day)
                $qry=$qry->where('r.created_date',">=",Carbon::now()->subDays(1));
            if($r->current_week)
                $qry=$qry->where('r.created_date',">=",Carbon::now()->startOfWeek());
            if($r->current_month)
                $qry=$qry->where('r.created_date',">=",Carbon::now()->startOfMonth());
            if($r->two_month)
                $qry=$qry->where('r.created_date',">=",Carbon::now()->subMonths(2));
            if($r->six_month)
                $qry=$qry->where('r.created_date',">=",Carbon::now()->subMonths(6));
            if($r->twelve_month)
                $qry=$qry->where('r.created_date',">=",Carbon::now()->subMonths(12));
            if($r->eighteen_month)
                $qry=$qry->where('r.created_date',">=",Carbon::now()->subMonths(18));

            if($r->user_role=='seller'){
                $qry=  $qry->where(function($q) use ($r) {
                    $q->orWhere('r.seller_id',$r->user_id);
                });
                $resolutionProducts=$qry->get(['r.id','r.product_id','r.seller_id','r.buyer_id','r.ticket_id','r.ticket_status','r.created_date','r.question','r.order_id',
                    'p.title','p.photos','p.price',
                    'u.first_name','u.last_name','u.display_name']);

            }

            if($r->user_role=='buyer'){
                $qry=  $qry->where(function($q) use ($r) {
                    $q->orWhere('r.buyer_id',$r->user_id);
                });
                $resolutionProducts=$qry->get(['r.id','r.product_id','r.seller_id','r.buyer_id','r.ticket_status','r.ticket_id','r.created_date','r.question',
                    'p.title','p.photos','p.price',
                    'us.first_name','us.last_name','us.display_name']);
            }
            $i = 0;
            foreach ($resolutionProducts as $product){
                $product->photos=unserialize($product->photos);
                $resolutionProducts[$i]->created_date = date('d.m.Y H:i:s', strtotime($product->created_date));
                $i++;
            }

            $this->reply['resolution_products']=['status'=>'success','data'=>$resolutionProducts];
        }else
            $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

        return response()->json($this->reply);
    }catch (\Exception $e){
        echo $e->getMessage();
    }
 }

 function replyResolutionCenterApi(Request $r){
     try{
         $auth=$r->header('auth');
         $authDB=DB::table('auth')->where('id','1')->first();
         if(Hash::check($auth,$authDB->auth)){
             DB::beginTransaction();
             $ticket_detail=DB::table('resolution_center')->where('ticket_id',$r->ticket_id)->first();
             $ResolutionCenter=['order_id'=>$ticket_detail->order_id,'ticket_id'=>$ticket_detail->ticket_id,'buyer_id'=>$ticket_detail->buyer_id,'seller_id'=>$ticket_detail->seller_id,
                 'product_id'=>$ticket_detail->product_id,'question'=>$ticket_detail->question,'requested_by'=>$r->user_role,'answer'=>$r->reply];
             $save=DB::table('resolution_center')->insertGetId($ResolutionCenter);
            if($save){
                $product_id[]=$ticket_detail->product_id;
                $seller_id[]=$ticket_detail->seller_id;
                //ORDER DETAIL
                $order_detail=DB::table('order')->where(['buyer_id'=>$ticket_detail->buyer_id,'seller_id'=>$ticket_detail->seller_id,'product_id'=>$ticket_detail->product_id])->first();
                $order_id=$order_detail->order_id;
                //PRODUCT INFO
                $product_info=DB::table('product')->whereIn('id',$product_id)->get();
                //BUYER INFORMATION
                $buyer_info=DB::table('users')->where('id',$ticket_detail->buyer_id)->first();
                //SELLER INFORMATION
                $seller_info=DB::table('users')->whereIn('id',$seller_id)->get();

                foreach ($seller_info as $seller){
                    if($r->user_role=='seller'){
                        Mail::to($buyer_info->email,$buyer_info->first_name)
                            ->send(new ReturnOrder($order_id,$buyer_info,$product_info,$r->reply,$seller,$ticket_detail->ticket_id,'reply'));
                    }else{
                        Mail::to($seller->email,$seller->first_name)
                            ->send(new ReturnOrderBySeller($order_id,$buyer_info,$product_info,$r->reply,$seller,$ticket_detail->ticket_id,'reply'));
                    }
                }
                DB::commit();
                $this->reply['resolution_center']=['status'=>'success','msg'=>'Replied Successful.'];
            }else
                $this->reply['resolution_center']=['status'=>'fail','msg'=>'Something wrong happen,please try again.'];

         }else
             $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

         return response()->json($this->reply);

     }catch (\Exception $e){
         echo $e->getMessage();
         DB::rollBack();
     }
 }

 function changeTicketStatus(Request $r){
     try{
        $auth=$r->header('Auth');
        $authDB=DB::table('auth')->where('id','1')->first();
        if(Hash::check($auth,$authDB->auth)){
            DB::beginTransaction();
            $update=DB::table('resolution_center')->where(['seller_id'=>$r->seller_id,'product_id'=>$r->product_id,'buyer_id'=>$r->buyer_id])
                        ->update(['ticket_status'=>$r->status,'updated_date'=>date('Y-m-d g:i:a')]);
            if($update){
                DB::commit();
                    $user_info=DB::table('users')->where('id',$r->buyer_id)->first();
                    $ticket_info=DB::table('resolution_center')->where(['seller_id'=>$r->seller_id,'product_id'=>$r->product_id,'buyer_id'=>$r->buyer_id])->first(['ticket_status','ticket_id']);
                Mail::to($user_info->email,$user_info->first_name)->send(new TicketStatus($user_info,$ticket_info));
                $this->reply['resolution_center']=['status'=>'success','msg'=>'Ticket Status updated successful.'];
            }else
                $this->reply['resolution_center']=['status'=>'fail','msg'=>'Something wrong happen,Please try again.'];
        }else
            $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

        return response()->json($this->reply);
     }catch (\Exception $e){
         echo $e->getMessage();
         DB::rollBack();
     }
 }

/* function breadcrumb(){
     return view('admin/breadcrumb');
    $crumbs = explode("/",$_SERVER["REQUEST_URI"]);
     foreach($crumbs as $crumb){
         echo ucfirst(str_replace(array(".php","_"),array(""," "),$crumb) . ' >> ');
     }
 }*/
}