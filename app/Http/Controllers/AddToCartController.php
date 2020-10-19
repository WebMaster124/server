<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 4/13/2018
 * Time: 6:20 PM
 */

namespace App\Http\Controllers;


use App\Mail\BasketEmailNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Exception;
use Illuminate\Support\Facades\Mail;

class AddToCartController extends Controller
{
    function saveCart(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)) {
                DB::beginTransaction();

                $check_cart=DB::table('add_to_cart')->where(['product_id' => $r->product_id, 'user_id' => $r->user_id])->exists();
                if($check_cart){
                    $reply['cart'] = ['status' => 'fail', 'msg' => 'This product already exist in cart.'];
                }else{
                    $specification = $r->specification;

                    //  $specification = explode(',', $specification);
                    $specification = serialize($specification);

                    $cart = ['product_id' => $r->product_id, 'user_id' => $r->user_id, 'specification' => $specification, 'quantity' => $r->quantity];
                    $reply['cart'] = ['status' => 'success', 'msg' => 'successfull insert'];
                    $saveCart = DB::table('add_to_cart')->insertGetId($cart);
                    if ($saveCart) {
                        DB::commit();
                        $count = DB::table('add_to_cart')->where('user_id', $r->user_id)->count();
                        $reply['cart'] = ['status' => 'success', 'msg' => 'successfull insert', 'count' => $count];
                    } else {
                        $reply['cart'] = ['status' => 'fail', 'msg' => 'something wrong'];
                    }
                }
            }else
                $reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication fail.'];

            return response()->json($reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function viewCart(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $qry=DB::table('add_to_cart as a')
                    ->join('product as p','p.id','=','a.product_id')
                    ->leftJoin('users as u','u.id','=','p.user_id');
                if(isset($r->id))
                    $qry=$qry->where('a.id',$r->id);
                if($r->user_id)
                    $qry=$qry->where('a.user_id',$r->user_id);

                $viewCart=$qry->get(['p.id as product_id','p.price','p.sq','p.title','p.photos','p.duration','p.renew_duration','p.quantity as product_quantity','p.created_date','p.approve_date','u.id as user_id',
                    'u.business_name','u.display_name','p.discount','a.quantity','a.specification','a.id as cart_id']);

               /* $viewBusinessName = $qry->groupBy('u.business_name')->get(['u.business_name']);
                $viewBusinessName = $viewBusinessName->toArray();
                foreach($viewBusinessName as $key => $val){
                    $businessLists[] = $val->business_name;
                }*/
                if($viewCart){
                    DB::commit();
                    $total=0;
                    $viewCartRes=array();
                    $total_item=0;
                    foreach ($viewCart as $cart) {
                        $total_item=$total_item + $cart->quantity;
                        // if(in_array($cart->business_name,$businessLists)) {
                        $FeedbackCount = DB::table('feedback')->where('receiver_id', $cart->user_id)->count();
                        $cart->feedback_count = $FeedbackCount;
                        $productImg = unserialize($cart->photos);
                        $cart->photos = $productImg;

                        $cart->specification = unserialize($cart->specification);
                        //Size Quantity price sent for quatity validation
                        $specification = $cart->specification;
                        if($specification['size'][0] != '-') {
                            $size = $specification['size'][0];
                            $sq = unserialize($cart->sq);
                            $cart->product_quantity = $sq[$size];
                        }


                        if ($cart->product_quantity != '0') {
                            $discountPer = $cart->discount * $cart->quantity;
                            $discount = $cart->price * $discountPer / 100;
                            $price = $cart->price * $cart->quantity;
                            $cart->price = $price;
                            $total = $total + $price - $discount;
                        }

                        $date = strtotime("+$cart->renew_duration day", strtotime($cart->approve_date));
                        $last_date = date("Y-m-d h:m:i", $date);
                        $current_date = date("Y-m-d h:m:i");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);
                        $days_left = $interval->format('%R%a days');

                        $hour = $interval->format('%h hours ');
                        $cart->days_left = $days_left . ' ' . $hour;

                        $invert = $interval->invert;
                        if ($invert == "0")
                            $cart->time = 'Started';
                        else
                            $cart->time = 'End';

                        //Added in group
                        $businessName[] = $cart->display_name;
                        $viewCartRes[$cart->display_name][] = $cart;

                        //   }
                    }
                    if(!empty($businessName))
                        $viewCartRes['businessName'] = array_values(array_unique($businessName));
                    else
                        $viewCartRes['businessName'] = '';

                    $reply['cart']=['status'=>'success','data'=>$viewCartRes,'total'=>$total,'total_item'=>$total_item];
                }else
                    $reply['cart']=['status'=>'fail','msg'=>'something wrong'];

            }else
                $reply['Auth']=['status'=>'auth','msg'=>'Authentication fail'];

            return response()->json($reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function updateCart(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();

                $updatedCart=DB::table('add_to_cart')->where('id',$r->id)->update(['quantity'=>$r->quantity,'updated_date'=>date('Y-m-d')]);
                if($updatedCart){
                    DB::commit();
                    $reply['cart']=['status'=>'success','msg'=>'successful update'];
                }
                else{
                    $reply['cart']=['status'=>'fail','msg'=>'something wrong'];
                }
            }
            return response()->json($reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function removeCart(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();

                $deleteCart=DB::table('add_to_cart')->where('id',$r->id)->delete();
                if($deleteCart){
                    DB::commit();
                    $reply['cart']=['status'=>'success','msg'=>'successful delete'];
                }
                else{
                    $reply['cart']=['status'=>'fail','msg'=>'something wrong'];
                }
            }
            return response()->json($reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function basketEmailNotification(Request $r){
        try{
                $BasketDays=DB::table('setting')->where('id','1')->first();
                $BasketDay=unserialize($BasketDays->setting);
                $BasketDay=$BasketDay['basket_email'];
                $basket_day=explode(',',$BasketDay);

            foreach ($basket_day as $day) {

                $carts = DB::table('add_to_cart as a')
                    ->join('product as p', 'p.id', '=', 'a.product_id')
                    ->leftJoin('users as u', 'u.id', '=', 'a.user_id')
                    ->where('u.user_status', '1')
                    ->where('p.status', '1')
                    ->get(['p.id as product_id', 'p.price', 'p.title', 'p.photos', 'p.duration', 'p.renew_duration', 'p.quantity as product_quantity', 'p.created_date', 'p.approve_date','p.shipment_type',
                        'u.id as user_id','u.business_name', 'u.display_name',
                        'p.discount', 'a.quantity', 'a.specification', 'a.id as cart_id', 'a.created_date as cart_create_date']);
                foreach ($carts as $cart) {
                    $date = strtotime("+ $day day", strtotime($cart->cart_create_date));
                    $last_date = date("Y-m-d", $date);
                    $current_date = date("Y-m-d");

                   $datetime1 = date_create($current_date);
                   $datetime2 = date_create($last_date);
                   if($datetime1 == $datetime2 ) {
                       $productImg = unserialize($cart->photos);
                       $cart->photos = $productImg[0];
                       $cart->specification = unserialize($cart->specification);
                       $discountPer = $cart->discount * $cart->quantity;
                       $discount = $cart->price * $discountPer / 100;
                       $price = $cart->price * $cart->quantity;
                       $cart->price = $price - $discount;
                       $user_info=DB::table('users')->where('id',$cart->user_id)->first(['email']);
                       $email_template=DB::table('email_template')->where('id','16')->first();
                        Mail::to($user_info->email)->send(new BasketEmailNotification($cart,$email_template));
                   }
                }
            }
            $this->reply['basket_email']=['status'=>'success'];

            return response()->json($this->reply);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}