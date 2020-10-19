<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ProductRateController extends Controller
{
    function saveProductRating(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {
                DB::beginTransaction();
                $check_feedback=DB::table('product_rate')->where(['sender_id' => $r->sender_id, 'product_id' => $r->product_id])->exists();
                if($check_feedback){
                    $this->reply['product_rate'] = ['status' => 'fail', 'msg' => 'You have already given rating on this product.'];
                } else {
                    $product_review = serialize([ $r->recommend, $r->valueproduct, $r->qualityproduct]);
                    $feedback = ['sender_id' => $r->sender_id, 'product_id' => $r->product_id, 'receiver_id' => $r->receiver_id, 'feedback_by' => $r->feedback_by,
                        'title' => $r->title, 'description' => $r->description, 'product_review' => $product_review, 'rate' => $r->rate];
                    $save = DB::table('product_rate')->insertGetId($feedback);
                    if ($save) {
                        DB::commit();
                        $this->reply['product_rate'] = ['status' => 'success', 'msg' => 'rating submitted successfully.'];
                    } else
                        $this->reply['product_rate'] = ['status' => 'fail', 'msg' => 'something wrong happen.'];
                }
            } else {
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (\Exception $e) {
            echo $e->getMessage();
            DB::rollback();
        }
    }
	function check_count(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {
                DB::beginTransaction();
                
//                echo $r;
                $check_feedback=DB::table('site_rate')->where(['sender_id' => $r->sender_id])->exists();
                if($check_feedback){
                    $this->reply['site_rate'] = ['status' => 'exist', 'msg' => 'You have already given rating on this product.'];
                } else {
                   $this->reply['site_rate'] = ['status' => 'Not exist'];
                }
            } else {
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (\Exception $e) {
            echo $e->getMessage();
            DB::rollback();
        }
    }
	function saveSiteRating(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {
                DB::beginTransaction();
                
//                echo $r;
                $check_feedback=DB::table('site_rate')->where(['sender_id' => $r->sender_id])->exists();
                if($check_feedback){
                    $this->reply['site_rate'] = ['status' => 'exist', 'msg' => 'You have already given rating on this product.'];
                } else {
                    //$product_review = serialize([ $r->recommend, $r->valueproduct, $r->qualityproduct]);
                    $feedback = ['sender_id' => $r->sender_id,'rate' => $r->rate,'description' => $r->description];
                    $save = DB::table('site_rate')->insertGetId($feedback);
                    if ($save) {
                        DB::commit();
                        $this->reply['site_rate'] = ['status' => 'success', 'msg' => 'rating submitted successfully.'];
                    } else
                        $this->reply['site_rate'] = ['status' => 'fail', 'msg' => 'something wrong happen.'];
                }
            } else {
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (\Exception $e) {
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function viewProductRating(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {

                $per_page=($r->per_page?$r->per_page:'50');

                DB::beginTransaction();
                $qry = DB::table('product_rate as f')
                    ->join('users as us', 'us.id', '=', 'f.receiver_id')
                    ->join('users as ub', 'ub.id', '=', 'f.sender_id')
                    ->join('product as p', 'p.id', '=', 'f.product_id')
                    ->orderBy('f.id','desc');
                if ($r->sender_id)
                    $qry = $qry->where(['f.sender_id'=> $r->sender_id]);
                if ($r->receiver_id)
                    $qry = $qry->where('f.receiver_id', $r->receiver_id);
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
                    'f.rate', 'f.title', 'f.description',  'f.product_review', 'f.created_date',
                    DB::raw("CONCAT(tbl_ub.first_name,' ',tbl_ub.last_name) as buyer_name,tbl_ub.display_name as buyer_display_name,tbl_ub.id as buyer_id,CONCAT(tbl_us.first_name,' ',tbl_us.last_name) as seller_name,tbl_us.display_name as seller_display_name,tbl_us.id as seller_id")])
                    ->paginate($per_page);

                $i = 0;
                foreach ($feedback as $f) {
                    $feedback[$i]->photos=unserialize($f->photos);
                    $feedback[$i]->product_review = unserialize($f->product_review);
                    $feedback[$i]->description =  preg_replace('!\\r?\\n!', " ",$f->description);
                    $feedback[$i]->created_date = date('d.m.Y H:i:s', strtotime($f->created_date));
                    $i++;
                } if ($feedback) {
                    DB::commit();
                    $this->reply['product_rate'] = ['status' => 'success', 'data' => $feedback];
                } else
                    $this->reply['product_rate'] = ['status' => 'fail', 'msg' => 'something wrong happen.'];
            } else {
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e) {
            echo $e->getMessage();
            DB::rollback();
        }
    }
}


