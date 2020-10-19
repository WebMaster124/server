<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 4/24/2018
 * Time: 2:37 PM
 */

namespace App\Http\Controllers;


use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Exception;

class FeedbackController extends Controller
{
    /*----------------------------------------------API----------------------------------------------------------------*/

    function saveFeedBackApi(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {
                DB::beginTransaction();
                $check_feedback=DB::table('feedback')->where(['sender_id' => $r->sender_id, 'product_id' => $r->product_id,'order_id'=>$r->order_id])->exists();
                if($check_feedback) {
                    $this->reply['feedback'] = ['status' => 'fail', 'msg' => 'You have already  given feedback on this product.'];
                } else {
                    $tell_us_more = serialize([$r->communicaton, $r->recommend, $r->valuemoney, $r->dispatched]);
                    $feedback = ['order_id'=>$r->order_id,'sender_id' => $r->sender_id, 'product_id' => $r->product_id, 'receiver_id' => $r->receiver_id, 'feedback_by' => $r->feedback_by,
                        'title' => $r->title, 'description' => $r->description, 'tell_us_more' => $tell_us_more, 'feedback_type' => $r->feedback_type, 'rate' => $r->rate];
                    $save = DB::table('feedback')->insertGetId($feedback);
                    if ($save) {
                        if ($r->feedback_by == 'seller')
                            DB::table('feedback')->where(['sender_id' => $r->receiver_id, 'product_id' => $r->product_id, 'receiver_id' => $r->sender_id])->update(['responce' => 'done']);
                        DB::commit();
                        $this->reply['feedback'] = ['status' => 'success', 'msg' => 'feedback submited successfully.'];
                    } else
                        $this->reply['feedback'] = ['status' => 'fail', 'msg' => 'something wrong happen.'];
                }
            } else {
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e) {
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function replyFeedbackList(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {

                $per_page=($r->per_page?$r->per_page:'50');
                DB::beginTransaction();
                $qry = DB::table('feedback as f')
                    ->join('users as us', 'us.id', '=', 'f.receiver_id')
                    ->join('users as ub', 'ub.id', '=', 'f.sender_id')
                    ->join('product as p', 'p.id', '=', 'f.product_id');

                $qry = $qry->where('f.receiver_id', $r->user_id);
                $qry = $qry->where('f.responce',null);
                $qry = $qry->orderby('f.id','desc');

                if($r->user_role=='seller'){
                    $feedbacks = $qry->select(['f.id','f.receiver_id as seller_id','f.sender_id as buyer_id',
                         'p.title as product_title', 'p.product_sku', 'p.id as product_id', 'p.price','p.photos',
                        'f.rate', 'f.title', 'f.description', 'f.feedback_type', 'f.tell_us_more', 'f.created_date','f.order_id',
                        DB::raw("CONCAT(tbl_ub.first_name,' ',tbl_ub.last_name) as buyer_name,CONCAT(tbl_us.first_name,' ',tbl_us.last_name) as seller_name")])
                        ->paginate($per_page);
                }else{
                    $feedbacks = $qry->select(['f.id','f.receiver_id as buyer_id','f.sender_id as seller_id',
                        'p.title as product_title', 'p.product_sku', 'p.id as product_id', 'p.price','p.photos',
                        'f.rate', 'f.title', 'f.description', 'f.feedback_type', 'f.tell_us_more', 'f.created_date',
                        DB::raw("CONCAT(tbl_ub.first_name,' ',tbl_ub.last_name) as seller_name,CONCAT(tbl_us.first_name,' ',tbl_us.last_name) as buyer_name")])
                        ->paginate($per_page);
                }
                $i = 0;
                foreach ($feedbacks as $feedback) {
                    $feedback->tell_us_more = unserialize($feedback->tell_us_more);
                    $feedback->description =  preg_replace('!\\r?\\n!', " ",$feedback->description);
                    $feedback->photos=unserialize($feedback->photos);
                    $feedbacks[$i]->created_date = date('d.m.Y H:i:s', strtotime($feedback->created_date));
                    $i++;
                }
                if ($feedbacks) {
                    DB::commit();
                    $this->reply['feedback'] = ['status' => 'success', 'data' => $feedbacks];
                } else
                    $this->reply['feedback'] = ['status' => 'fail', 'msg' => 'something wrong happen.'];
            } else {
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e) {
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function viewFeedBackApi(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {

                $per_page=($r->per_page?$r->per_page:'50');

                DB::beginTransaction();
                $qry = DB::table('feedback as f')
                    ->join('users as us', 'us.id', '=', 'f.receiver_id')
                    ->join('users as ub', 'ub.id', '=', 'f.sender_id')
                    ->join('product as p', 'p.id', '=', 'f.product_id')
                    ->orderBy('f.id','desc');
                if ($r->sender_id)
                    $qry = $qry->where(['f.sender_id'=> $r->sender_id]);
                if ($r->receiver_id)
                    $qry = $qry->where('f.receiver_id', $r->receiver_id);
                if ($r->feedback_type)
                    $qry = $qry->where('f.feedback_type', $r->feedback_type);
                if ($r->product_id)
                    $qry = $qry->where('f.product_id', $r->product_id);
                if($r->user_role)
                    $qry = $qry->where(['f.feedback_by'=>$r->user_role, 'f.receiver_id'=> $r->receiver_id]);
                if($r->user_id)
                    $qry = $qry->where(function ($q)  use ($r){
                        $q->orWhere('f.sender_id',$r->user_id);
                        $q->orWhere('f.receiver_id',$r->user_id);
                    });

                $feedback = $qry->select(['f.id', 'p.title as product_title', 'p.product_sku', 'p.id as product_id', 'p.price','p.photos',
                    'f.rate', 'f.title', 'f.description', 'f.feedback_type', 'f.tell_us_more', 'f.created_date',
                    DB::raw("CONCAT(tbl_ub.first_name,' ',tbl_ub.last_name) as buyer_name,tbl_ub.display_name as buyer_display_name,CONCAT(tbl_us.first_name,' ',tbl_us.last_name) as seller_name,tbl_us.display_name as seller_display_name,tbl_us.id as seller_id")])
                    ->paginate($per_page);

                $i = 0;
                foreach ($feedback as $f) {
                    $feedback[$i]->photos=unserialize($f->photos);
                    $feedback[$i]->tell_us_more = unserialize($f->tell_us_more);
                    $feedback[$i]->description =  preg_replace('!\\r?\\n!', " ",$f->description);
                    $feedback[$i]->created_date = date('d.m.Y H:i:s', strtotime($f->created_date));
                    $i++;
                }if ($feedback) {
                    DB::commit();
                    $this->reply['feedback'] = ['status' => 'success', 'data' => $feedback];
                } else
                    $this->reply['feedback'] = ['status' => 'fail', 'msg' => 'something wrong happen.'];
            } else {
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e) {
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function viewFeedbackRating(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {

                $data['positiveOne']=DB::table('feedback')->where(['receiver_id'=>$r->reciever_id,'feedback_type'=>'Positive'])->where("created_date",">", Carbon::now()->subMonths(1))->count();
                $data['negativeOne']=DB::table('feedback')->where(['receiver_id'=>$r->reciever_id,'feedback_type'=>'Negative'])->where("created_date",">", Carbon::now()->subMonths(1))->count();
                $data['neutralOne']=DB::table('feedback')->where(['receiver_id'=>$r->reciever_id,'feedback_type'=>'Neutral'])->where("created_date",">", Carbon::now()->subMonths(1))->count();

                $data['positiveSix']=DB::table('feedback')->where(['receiver_id'=>$r->reciever_id,'feedback_type'=>'Positive'])->where("created_date",">", Carbon::now()->subMonths(6))->count();
                $data['negativeSix']=DB::table('feedback')->where(['receiver_id'=>$r->reciever_id,'feedback_type'=>'Negative'])->where("created_date",">", Carbon::now()->subMonths(6))->count();
                $data['neutralSix']=DB::table('feedback')->where(['receiver_id'=>$r->reciever_id,'feedback_type'=>'Neutral'])->where("created_date",">", Carbon::now()->subMonths(6))->count();

                $data['positiveTwelve']=DB::table('feedback')->where(['receiver_id'=>$r->reciever_id,'feedback_type'=>'Positive'])->where("created_date",">", Carbon::now()->subMonths(12))->count();
                $data['negativeTwelve']=DB::table('feedback')->where(['receiver_id'=>$r->reciever_id,'feedback_type'=>'Negative'])->where("created_date",">", Carbon::now()->subMonths(12))->count();
                $data['neutralTwelve']=DB::table('feedback')->where(['receiver_id'=>$r->reciever_id,'feedback_type'=>'Neutral'])->where("created_date",">", Carbon::now()->subMonths(12))->count();

                $this->reply['feedback'] = ['status' => 'success', 'data' => $data];
            }else
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function viewSellerRating(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {

                $feedbacks=DB::table('feedback')->where('receiver_id',$r->user_id)->get();
                $rating=array();
                $communication_total=0;
                $recommend_total=0;
                $valuemoney_total=0;
                $dispatched_total=0;
                $count=count($feedbacks);
                foreach ($feedbacks as $feedback){
                    $tell_us_more=unserialize($feedback->tell_us_more);
                    $communication_total=$communication_total+$tell_us_more[0];
                    $recommend_total=$recommend_total+$tell_us_more[1];
                    $valuemoney_total=$valuemoney_total+$tell_us_more[2];
                    $dispatched_total=$dispatched_total+$tell_us_more[3];
                }
                if($count!=0){
                    $communication_avg=$communication_total/$count;
                    $recommend_avg=$recommend_total/$count;
                    $valuemoney_avg=$valuemoney_total/$count;
                    $dispatched_avg=$dispatched_total/$count;
                }else{
                    $communication_avg=0;
                    $recommend_avg=0;
                    $valuemoney_avg=0;
                    $dispatched_avg=0;
                }
                $rating['communication']=['avg'=>round($communication_avg),'total'=>$communication_total];
                $rating['recommend']=['avg'=>round($recommend_avg),'total'=>$recommend_total];
                $rating['valuemoney']=['avg'=>round($valuemoney_avg),'total'=>$valuemoney_total];
                $rating['dispatch']=['avg'=>round($dispatched_avg),'total'=>$dispatched_total];

                $this->reply['feedback'] = ['status' => 'success','data'=>$rating];
            }else
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function replyFeedback(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {
                DB::beginTransaction();
                    $update=DB::table('feedback')->where('id',$r->id)->update(['responce'=>$r->reply,'updated_date'=>date('Y-m-d H:i:s')]);
                    if($update){
                        DB::commit();
                        $this->reply['feedback']=['status'=>'success','msg'=>'Replay successful'];
                    }else
                        $this->reply['feedback'] = ['status' => 'fail', 'msg' => 'something wrong happen.'];
            }else
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
         return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    /*----------------------------------------------ADMIN PANEL-------------------------------------------------------*/

    function viewFeedBack()  {
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');
            $qry = DB::table('feedback as f')
                ->join('users as us', 'us.id', '=', 'f.receiver_id')
                ->join('users as ub', 'ub.id', '=', 'f.sender_id')
                ->join('product as p', 'p.id', '=', 'f.product_id');

            $feedback = $qry->get(['f.id', 'p.title as product_title', 'p.product_sku', 'p.id as product_id', 'p.price',
                'f.rate', 'f.title', 'f.description', 'f.feedback_type', 'f.tell_us_more', 'f.created_date','f.feedback_by',
                DB::raw("CONCAT(tbl_ub.first_name,' ',tbl_ub.last_name) as buyer_name,CONCAT(tbl_us.first_name,' ',tbl_us.last_name) as seller_name")]);
            $i = 0;
            foreach ($feedback as $f) {
                $feedback[$i]->tell_us_more = unserialize($f->tell_us_more);
                $i++;
            }
            if ($feedback) {
                    return view('admin/view-feedback')->with('feedbacks', $feedback);
            } else
                $this->reply = ['status' => 'fail', 'msg' => 'something wrong happen.'];
        } catch (\Mockery\Exception $e) {
            echo $e->getMessage();
        }
    }

    function editFeedback($id){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');
           $qry = DB::table('feedback as f')
                ->join('users as us', 'us.id', '=', 'f.receiver_id')
                ->join('users as ub', 'ub.id', '=', 'f.sender_id')
                ->join('product as p', 'p.id', '=', 'f.product_id')
                ->where('f.id', $id);

            $feedback = $qry->first(['f.id', 'p.title as product_title', 'p.product_sku', 'p.id as product_id', 'p.price',
                'f.rate', 'f.title', 'f.description', 'f.feedback_type', 'f.tell_us_more', 'f.created_date','f.feedback_by',
                DB::raw("CONCAT(tbl_ub.first_name,' ',tbl_ub.last_name) as buyer_name,CONCAT(tbl_us.first_name,' ',tbl_us.last_name) as seller_name")]);
            if ($feedback) {
                return view('admin/edit-feedback')->with('feedback', $feedback);
            } else
                return response()->view('errors.404');
        } catch (\Mockery\Exception $e) {
            echo $e->getMessage();
        }
     }

    function editFeedbackData(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            $feedback = ['title' => $r->title, 'description' => $r->description, 'feedback_type' => $r->feedback_type,
                'updated_date'=>date('Y-m-d')];
            $update = DB::table('feedback')->where('id',$r->id)->update($feedback);
            if ($update) {
                DB::commit();
                Session::flash('message', 'update successful');
                return redirect('admin/view-feedback');
            } else {
                Session::flash('message', 'something wrong happen');
                return redirect('admin/view-feedback');
            }
        } catch (\Mockery\Exception $e) {
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function deleteFeedback($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            $delete=DB::table('feedback')->where('id',$id)->delete();
            if($delete){
                Session::flash('message','Successful deleted.');
                DB::commit();
                return redirect('admin/view-feedback');
            }
            else{
                Session::flash('message','something wrong happen.');
                return redirect('admin/view-feedback');
            }
        }
        catch(\Mockery\Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }
}