<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 4/25/2018
 * Time: 1:24 PM
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Exception;

class AddToWishlistController extends Controller
{
    function saveWishlist(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)) {
                DB::beginTransaction();

                $viewWishlist = DB::table('add_to_wishlist')->where(['product_id' => $r->product_id, 'user_id' => $r->user_id])->exists();
                if ($viewWishlist==false){
                    $specification = serialize($r->specification);
                    $wishlist = ['product_id' => $r->product_id, 'user_id' => $r->user_id, 'specification' => $specification, 'quantity' => $r->quantity];
                    $saveList = DB::table('add_to_wishlist')->insertGetId($wishlist);
                    if ($saveList) {
                        DB::commit();
                        $reply['wishlist'] = ['status' => 'success', 'msg' => 'successfull insert'];
                    } else
                        $reply['wishlist'] = ['status' => 'fail', 'msg' => 'something wrong'];
                }
                else{
                    $reply['wishlist'] = ['status' => 'fail', 'msg' => 'You already save this product in wishlist.'];
                }
            }
            return response()->json($reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }
    function ProductAvg($id){
        $product_avg=DB::table('product_rate')->where('product_id',$id)->first([DB::raw("SUM(rate)/COUNT(id) as product_avg ,COUNT(id) as product_rate_cnt")]);
        $product[]=round($product_avg->product_avg);
        $product[]=$product_avg->product_rate_cnt;

        return $product;
    }
    function viewWishlist(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $qry=DB::table('add_to_wishlist as a')
                    ->join('product as p','p.id','=','a.product_id')
                    ->leftJoin('users as u','u.id','=','p.user_id');
                if(isset($r->product_id))
                    $qry=$qry->whereIn('a.product_id',$r->product_id);
                if($r->user_id)
                    $qry=$qry->where('a.user_id',$r->user_id);

                $viewWishlist=$qry->get(['p.id as product_id','p.product_address','p.product_sku','p.selling_type','p.min_price','p.price','p.title','p.photos','p.duration','p.renew_duration','p.created_date','p.approve_date','u.id as user_id',
                    'u.business_name','p.discount','a.quantity','a.specification','a.id as list_id','p.created_date','a.notes','u.display_name']);
                if($viewWishlist){
                    DB::commit();
                    $start_cnt=0;
                    $end_cnt=0;
                    foreach ($viewWishlist as $list){
                        $positiveAvg=DB::table('feedback')->where('receiver_id',$list->user_id)->first([DB::raw("SUM(IF(feedback_type='Positive', '1', '0'))/COUNT(id) as avg,COUNT(id) as count ")]);
                        $list->feedback_avg=$positiveAvg->avg*100;
                        $list->feedback_count=$positiveAvg->count;
                        //RATING
                        $product_avg=$this->ProductAvg($list->product_id);
                        $list->product_avg=$product_avg[0];
                        $list->product_rate_cnt=$product_avg[1];

                        if($list->selling_type=="Auction style")
                            $list->price=$list->min_price;

                        $productImg=unserialize($list->photos);
                        $list->photos=$productImg;

                        $saveCart=DB::table('add_to_cart')->where(['user_id'=>$r->user_id,'product_id'=>$list->product_id])->exists();
                        $list->saveCart=$saveCart;

                        $date = strtotime("+$list->renew_duration day", strtotime($list->approve_date));
                        $last_date=date("Y-m-d h:m:i", $date);
                        $current_date=date("Y-m-d h:m:i");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);
                        $days_left= $interval->format('%R%a days');

                        $hour= $interval->format('%h hours ');
                        $list->days_left=$days_left.' '.$hour;

                        $invert=$interval->invert;
                        if($invert=="0"){
                            $list->time='Started';
                            $start_cnt++;
                            }
                        else{
                            $list->time='End';
                            $end_cnt++;
                          }

                        $list->specification=unserialize($list->specification);

                    }
                    $reply['wishlist']=['status'=>'success','data'=>$viewWishlist,'start_cnt'=>$start_cnt,'end_cnt'=>$end_cnt];
                }
                else
                    $reply['wishlist']=['status'=>'fail','msg'=>'something wrong'];
            }
            else
                $reply['Auth']=['status'=>'auth','msg'=>'Authentication fail'];

            return response()->json($reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function removeWishlist(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)) {
                DB::beginTransaction();
                $deleteWishlist = DB::table('add_to_wishlist')->where(['user_id'=>$r->user_id])->whereIn('product_id',$r->product_id)->delete();
                if ($deleteWishlist) {
                    DB::commit();
                    $reply['wishlist'] = ['status' => 'success', 'msg' => 'successful delete'];
                } else
                    $reply['wishlist'] = ['status' => 'fail', 'msg' => 'something wrong'];
            }
            return response()->json($reply);
        }
        catch (Exception $e) {
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function updateNote(Request $r)
    {
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {
                DB::beginTransaction();

                $product_id = $r->product_id;
                $note = $r->note;
                $j = 0;
                for ($i = 0; $i < count($product_id); $i++) {
                    $updateNote = DB::table('add_to_wishlist')->where(['user_id' => $r->user_id, 'product_id' => $product_id[$j]])->update(['notes' => $note[$j]]);
                    $j++;
                }
                if ($updateNote) {
                    DB::commit();
                    $reply['wishlist'] = ['status' => 'success', 'msg' => 'successful updated'];
                } else
                    $reply['wishlist'] = ['status' => 'fail', 'msg' => 'something wrong'];
            }
        } catch (Exception $e) {
            echo $e->getMessage();
            DB::rollback();
        }
        return response()->json($reply);
    }
}