<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 5/18/2018
 * Time: 11:03 AM
 */

namespace App\Http\Controllers;


use App\Mail\Message;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class MessageController
{
    function sendMessage(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                if($r->message){
                    $receiver = DB::table('users')->where(['user_status' => '1', 'id' => $r->receiver_id])->exists();
                    if ($receiver) {
                        $save_message = ['sender_id' => $r->sender_id, 'receiver_id' => $r->receiver_id, 'message' => $r->message, 'product_id' => $r->product_id];
                        $save = DB::table('message')->insertGetId($save_message);
                        if ($save) {
                            $sender_info = DB::table('users')->where('id', $r->sender_id)->first(['first_name', 'last_name', 'display_name', 'email']);
                            $receiver_info = DB::table('users')->where('id', $r->receiver_id)->first(['first_name', 'last_name', 'display_name', 'email']);
                            $sender_info->msg = $r->message;
                            Mail::to("$receiver_info->email", "$receiver_info->first_name")->send(new Message($sender_info, $receiver_info));
                            $this->reply['message'] = ['status' => 'success', 'msg' => 'message send successfully.'];
                        } else
                            $this->reply['message'] = ['status' => 'fail', 'msg' => 'Something wrong happen,please try again.'];
                    } else
                        $this->reply['message'] = ['status' => 'fail', 'msg' => 'Receiver is Suspended by admin,please try after sometime.'];
                }else
                    $this->reply['message'] = ['status' => 'fail', 'msg' => 'Message not be an empty,please try again.'];
            }else
                    $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function viewMessages(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $sender_id=$r->sender_id;
                $receiver_id=$r->receiver_id;
                //SET MESSAGE IS READ
                  $v=DB::table('message')->where(['receiver_id'=>$sender_id,'is_read'=>'0','product_id'=>$r->product_id])->update(['is_read'=>'1']);

                //DISPLAY MESSAGES
                $view_message=DB::table('message as m')
                    ->join('users as s','s.id','=','m.sender_id')
                    ->join('users as r','r.id','=','m.receiver_id')
                    ->where(['m.product_id'=>$r->product_id])
                    ->whereIn('m.sender_id',[$sender_id,$receiver_id])
                    ->whereIn('m.receiver_id',[$sender_id,$receiver_id])
                    ->orderBy('m.created_date','asc')
                    ->select('m.message','m.created_date','m.sender_id','m.receiver_id','m.product_id','m.is_read',
                        'r.first_name as receiver','r.profile_pic as rec_pic',
                        's.first_name as sender','s.profile_pic as send_pic')
                    ->get();

                $i=0;
                foreach($view_message as $viewmsg){
                    $view_message[$i]->created_date = date('d.m.Y H:i:s', strtotime($viewmsg->created_date));
                    $i++;
                }

                //PRODUCT INFORMATION
                $product_info=DB::table('product')->where('id',$r->product_id)->first(['title','photos','id','user_id']);
                $product_info->photos=unserialize($product_info->photos);
                if($view_message){
                    $this->reply['message']=['status'=>'success','data'=>$view_message,'product_info'=>$product_info];
                }else
                    $this->reply['message']=['status'=>'fail','msg'=>'Something wrong happen,please try again.'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function searchMessage(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $sender_id=$r->sender_id;
                $receiver_id=$r->receiver_id;

                $view_message=DB::table('message as m')
                    ->join('users as s','s.id','=','m.sender_id')
                    ->join('users as r','r.id','=','m.receiver_id')
                    ->where(['m.product_id'=>$r->product_id])
                    ->whereIn('m.sender_id',[$sender_id,$receiver_id])
                    ->whereIn('m.receiver_id',[$sender_id,$receiver_id])
                    ->where('m.message','like',"%$r->message%")
                    ->orderBy('m.created_date','asc')
                    ->select('m.message','m.created_date','m.sender_id','m.receiver_id','m.product_id','m.is_read',
                        'r.first_name as receiver','r.profile_pic as rec_pic',
                        's.first_name as sender','s.profile_pic as send_pic')
                    ->get();

                if($view_message){
                    $this->reply['message']=['status'=>'success','data'=>$view_message];
                }else
                    $this->reply['message']=['status'=>'fail','msg'=>'Something wrong happen,please try again.'];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function viewMessageList(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                 $qry=DB::table('message as m')
                    ->join('product as p','p.id','=','m.product_id')
                    ->join('users as s','s.id','=','m.sender_id')
                    ->join('users as r','r.id','=','m.receiver_id')
                     ->orderBy('m.id','desc')
                     ->where('r.user_status','1')
                    ->groupBy(['m.sender_id','m.product_id']);
                  if($r->search)
                      $qry=$qry->where(function ($q) use ($r){
                          $q->orWhere('p.title','like',"%$r->search%");
                  });

                 if($r->user_role=="buyer"){
                    $qry=$qry->where(function ($q) use ($r){
                         $q->orWhere('m.sender_id',$r->user_id);
                 });

                  $product_id=DB::select("SELECT group_concat(id) as id from tbl_product where user_id=$r->user_id");
                  $product_id=explode(',',$product_id[0]->id);
                  $qry=$qry->whereNotIn('m.product_id',$product_id);
                  $list=$qry->select(['m.created_date','m.receiver_id','m.product_id',
                     'p.title','r.first_name as receiver','r.profile_pic as rec_pic',
                     ])->get();

                 } if($r->user_role=="seller"){
                    $qry=$qry->where(function ($q) use ($r){
                        $q->orWhere('m.receiver_id',$r->user_id);
                    });
                    $product_id=DB::select("SELECT group_concat(id) as id from tbl_product where user_id=$r->user_id");
                    $product_id=explode(',',$product_id[0]->id);
                    $qry=$qry->whereIn('m.product_id',$product_id);
                     $list=$qry->select(['m.created_date','m.sender_id','m.product_id',
                        'p.title',
                        's.first_name as sender','s.profile_pic as send_pic'])->get();
                }
                 if($list){
					 $i=0;
                     foreach ($list as $l){
						 $list[$i]->created_date = date('d.m.Y H:i:s', strtotime($l->created_date));
                         if($r->user_role=="seller") {

                             $cnt = DB::table('message')->where(['receiver_id' => $r->user_id, 'sender_id' => $l->sender_id,'product_id'=>$l->product_id ,'is_read' => '0'])->count();
                             $l->unread = $cnt;
                         }else{
                             $cnt = DB::table('message')->where(['receiver_id' => $r->user_id, 'sender_id' => $l->receiver_id,'product_id'=>$l->product_id, 'is_read' => '0'])->count();
                             $l->unread = $cnt;
                         }
						$i++; 
                     }
                    $this->reply['message']=['status'=>'success','data'=>$list];
                }else
                    $this->reply['message']=['status'=>'fail','msg'=>'Something wrong happen,please try again.'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function totalUnreadMessage(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                $cnt=DB::table('message')->where(['receiver_id'=>$r->user_id,'is_read'=>'0'])->count();

                $cartCnt=DB::table('add_to_cart')
                    ->where('user_id',$r->user_id)
                    ->select(DB::raw("SUM(quantity) as item"))
                    ->get();
                $itemCnt=($cartCnt[0]->item == ''?'0':$cartCnt[0]->item);
                $current_date = date("Y-m-d H:i:s");
                $announcement_cnt=DB::table('announcements')->where(['user_id'=>$r->user_id,'is_read'=>'0'])->where('announce_on','<=', $current_date)->count();

                $this->reply['count']=['status'=>'success','cnt'=>$cnt,'cart_total'=>$itemCnt,'announcement_cnt'=>$announcement_cnt];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }
}