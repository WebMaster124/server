<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 5/3/2018
 * Time: 11:34 AM
 */

namespace App\Http\Controllers;


use App\Mail\CancelOrder;
use App\Mail\OrderStatus;
use App\Mail\PlaceOrderBuyer;
use App\Mail\PlaceOrderSeller;
use App\Mail\ProductOrderStatus;
use App\Mail\ReturnOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Exception;
use Carbon\Carbon;


class CheckoutController extends Controller{

    function viewOrder(){
        try{
            if(!Session::get('userId'))
                return redirect('/login');

            $orders=DB::table('order as o')
                ->join('users as u','u.id','=','o.buyer_id')
                ->join('product as p','p.id','=','o.product_id')
                ->join('users as us','us.id','=','o.seller_id')
                ->get(['u.id as buyer_id','u.first_name as buyer_f_name','u.last_name as buyer_l_name',
                    'p.title',
                    'o.status','o.quantity','o.order_id','o.created_date',
                    'us.first_name as seller_f_name','us.last_name as seller_l_name','us.id as seller_id']);

            return view('/admin/view_order')->with('orders',$orders);
        }
        catch (\Mockery\Exception $e){
            echo $e->getMessage();
        }
    }

    function orderDetails($order_id){
        try{
            if(!Session::get('userId'))
                return redirect('/login');

            $orders=DB::table('order as o')
                ->join('product as p','p.id','=','o.product_id')
                ->where('o.order_id',$order_id)
                ->get([
                    'p.title','p.photos','p.price','p.shipment_type','p.discount','p.product_sku',
                    'o.status','o.quantity as order_quantity','o.order_id','o.order_id','o.order_id','o.order_id','o.product_id','o.coupon_code','o.order_price']);
            $buyer=DB::table('order as o')
                ->join('product as p','p.id','=','o.product_id')
                ->join('users as u','u.id','=','o.buyer_id')
                ->where('o.order_id',$order_id)
                ->first(['u.id as buyer_id','u.first_name','u.last_name',
                    'u.mobile_number','u.email','u.display_name']);
            $sellers=DB::table('order as o')
                ->join('product as p','p.id','=','o.product_id')
                ->join('users as u','u.id','=','o.seller_id')
                ->where('o.order_id',$order_id)
                ->distinct('u.id')
                ->get(['u.id as seller_id','u.first_name','u.last_name',
                    'u.mobile_number','u.email','u.display_name','u.business_name','u.business_mobile','u.business_relationship','u.company_number']);

            return view('/admin/order_detail')->with('orders',$orders)->with('buyer',$buyer)->with('sellers',$sellers);
        }
        catch (\Mockery\Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    /*----------------------------------------------------API-----------------------------------------------------*/

    function checkOutInfo(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if(Hash::check($auth,$authDB->auth)) {
                //USER DETAILS
                $user_info = DB::table('users')->where('id', $r->user_id)
                    ->first(['id', 'first_name', 'last_name', 'mobile_number', 'address']);
                if($user_info->address!=''){
                    $address = explode('@', $user_info->address);
                    $user_info->address = $address[0] . ' ' . $address[1];
                    $user_info->city = $address[3];
                    $user_info->country = $address[4];
                    $user_info->pincode = $address[2];
                    $user_info->state = "";
                }else{
                    $user_info->address = "";
                    $user_info->city = "";
                    $user_info->country = "";
                    $user_info->pincode = "";
                    $user_info->state = "";
                }
                $total = 0;
                //CHECK REQUEST
                $item_cnt=0;
                if ($r->cart == 'true') {
                    //PRODUCT DETAILS
                    //CHECK PRODUCT IS EXPIRE OR NOT
                    $all_product=DB::table('product')->where('status','=','1')->get();
                    $p_id=array();
                    foreach ($all_product as $p){
                       $date = strtotime("+ $p->duration day", strtotime($p->created_date));
                       $last_date=date("Y-m-d h:m:i", $date);
                        $current_date=date("Y-m-d h:m:i");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        if($datetime1 > $datetime2)
                            $p_id[]=$p->id;
                    }
                    $qry = DB::table('product as p')
                        ->join('add_to_cart as c', 'c.product_id', '=', 'p.id')
                        ->join('users as u','u.id','=','p.user_id')
                        ->where('c.user_id', $r->user_id)
                        ->where('p.quantity','!=','0')
                        ->whereNotIn('p.id',$p_id);

                    if($r->seller_id)
                        $qry=$qry->whereIn('p.user_id',$r->seller_id);

                      $product_info=$qry->get(['p.id as product_id','p.quantity as product_quantity', 'p.title', 'p.photos', 'p.discount', 'p.price', 'p.delivery_days', 'p.user_id as seller_id',
                            'c.quantity', 'c.specification','c.id as cart_id','u.display_name','u.first_name']);
                    $i = 0;
                        $viewcheckOut=array();
                        foreach ($product_info as $product) {
                            $item_cnt=$item_cnt+$product->quantity;
                            $product_info[$i]->photos = unserialize($product->photos);
                            $product_info[$i]->specification = unserialize($product->specification);
                            $price = $product->quantity * $product->price;
                            $discount = $price * $product->discount / 100;
                            $product_info[$i]->final_price = $price - $discount;
                            $total = $total + $price - $discount;
                            $i++;
                         //   $viewcheckOut[$product->display_name][]=$product;
                        }

                    $cart=true;
                } else {
                    $product_info = DB::table('product')->where('id', $r->product_id)
                        ->first(['id', 'title', 'photos', 'discount', 'price', 'delivery_days', 'user_id','quantity as product_quantity']);

                    $product_info->photos = unserialize($product_info->photos);
                    $price = $r->quantity * $product_info->price;
                    $discount = $price * $product_info->discount / 100;
                    $product_info->final_price = $price - $discount;
                    $product_info->quantity = $r->quantity;
                    $product_info->specification = $r->specification;
                    $total=$price - $discount;

                    //WHEN COME FROM OFFER PANEL
                    if($r->offer_price){
                        $product_info->final_price=$r->offer_price;
                        $product_info->price=$r->offer_price;
                        $total=$r->offer_price;
                        $product_info->make_offer=true;
                        $product_info->my_offer_id=$r->offer_id;
                    }else
                        $product_info->make_offer=false;

                    //WHEN COME FROM BID PANEL
                    if($r->bid_price){
                        $product_info->final_price=$r->bid_price;
                        $product_info->price=$r->bid_price;
                        $total=$r->bid_price;
                        $product_info->make_bid=true;
                    }else
                        $product_info->make_bid=false;

                    $cart=false;
                    $seller_info=DB::table('users')->where('id',$product_info->user_id)->first(['display_name']);
                    $product_info->display_name=$seller_info->display_name;
                  //  $viewcheckOut[$seller_info->display_name][]=$product_info;
                }

                $this->reply['checkout_info'] = ['status' => 'success', 'user_info' => $user_info, 'product_info' =>$product_info, 'total' => $total,'cart'=>$cart,'item_cnt'=>$item_cnt];
            }else
               $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function placeOrder(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $order_id= time(). $r->user_id;
                $total=0;
                $buyer_info=DB::table('users')->where('id',$r->user_id)->first();
                $buyer_name=$buyer_info->first_name.' '.$buyer_info->last_name;
                $shipping_info=DB::table('shipping')->where('id',$r->shipping_id)->first();
                $date1=date('M d,Y');

                //COME FROM CART
                if ($r->cart == 'true') {
                    //CHECK PRODUCT IS EXPIRE OR NOT
                    $all_product=DB::table('product')->where('status','=','1')->get();
                    $p_id=array();
                    foreach ($all_product as $p){

                      $date = strtotime("+ $p->duration day", strtotime($p->created_date));
                      $last_date=date("Y-m-d h:m:i", $date);
                      $current_date=date("Y-m-d h:m:i");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        if($datetime1 > $datetime2)
                            $p_id[]=$p->id;
                    }

                    //MULTIPLE PRODUCT ORDER
                    //PRODUCT DETAILS
                    $qry = DB::table('add_to_cart as c')
                        ->join('product as p','p.id','=','c.product_id')
                        ->where('c.user_id', $r->user_id)
                        ->where('p.quantity','!=','0')
                        ->whereNotIn('p.id',$p_id);

                    if($r->seller_id)
                        $qry=$qry->whereIn('p.user_id',$r->seller_id);

                     $product_info=  $qry->get(['c.id as cart_id','c.product_id',
                            'c.specification','c.quantity','p.price','p.discount','p.user_id as seller_id','p.title','p.photos','p.quantity as product_quantity','p.shipment_type']);
                    $i = 0;

                    if(count($product_info) !== 0) {
                        $seller=array();
                        $seller_id=array();
                        foreach ($product_info as $product) {
                            $place_order = ['order_id' => $order_id, 'product_id' => $product->product_id, 'buyer_id' => $r->user_id, 'shipping_id' => $r->shipping_id,
                                'specification' => $product->specification, 'quantity' => $product->quantity, 'seller_id' => $product->seller_id];
                            if ($product->quantity > $product->product_quantity) {
                                $this->reply['place_order'] = ['status' => 'fail', 'msg' => 'Product not available.', 'product_detail' => $product];
                                return response()->json($this->reply);
                                exit;
                            }

                            DB::table('order')->insertGetId($place_order);
                            $price = $product->quantity * $product->price;
                            $discount = $price * $product->discount / 100;
                            $product_info[$i]->final_price = $price - $discount;
                            $total = $total + $price - $discount;

                            $productImg = unserialize($product->photos);
                            $product_info[$i]->photos = $productImg[0];
                            $product_info[$i]->shipment_type = unserialize($product->shipment_type);
                            //SELLER INFORMATION
                            $seller_info = DB::table('users')->where('id', $product->seller_id)->first();
                            $seller_name = $seller_info->first_name . ' ' . $seller_info->last_name;
                            $paypalEmail = $seller_info->payment_email;
                            $seller_id[]=$seller_info->id;
                            $product_name = $product->title;
                            $product_quantity = $product->quantity;
                            $product_price = $product->price;
                            $product_discount = $product->discount;
                            $final_price = $price - $discount;
                            //CHECK COUPON CODE APPLY OR NOT

                            $coupon_code = array();
                            if ($r->coupon_code) {
                                $total = $r->final_price;
                                $coupon_code = DB::table('coupon_code')->where('code', $r->coupon_code)->first();
                            }

                            //QUANTITY MANAGEMENT
                            DB::table('product')->where('id', $product->product_id)->update(['quantity' => DB::raw("quantity - $product->quantity")]);

                            // REMOVE CART PRODUCT
                            DB::table('add_to_cart')->where('id',$product->cart_id)->delete();
                            $product_detail = [$product_name, $product_quantity, $product_price, $final_price, $product_discount];
                            //SEND MAIL TO SELLER
                            Mail::to($seller_info->email, $seller_name)->send(new PlaceOrderSeller($order_id, $product_detail, $seller_name, $total, $date1, $shipping_info, $buyer_info, $coupon_code));
                            $i++;
                        }
                        $seller=DB::table('users')->whereIn('id',$seller_id)->get();
                        //SEND MAIL TO BUYER
                        Mail::to($buyer_info->email, $buyer_name)->send(new PlaceOrderBuyer($order_id, $product_info, $buyer_name, $total, $date1, $shipping_info, $coupon_code, $paypalEmail, 'cart',$seller));
                        //UPDATE FINAL ORDER PRICE
                        DB::table('order')->where(['buyer_id' => $r->user_id, 'order_id' => $order_id])->update(['order_price' => $total]);
                        if ($r->coupon_code) {
                            DB::table('order')->where(['buyer_id' => $r->user_id, 'order_id' => $order_id])->update(['coupon_code' => $r->coupon_code]);
                        }
                        $this->reply['place_order'] = ['status' => 'success', 'msg' => 'order place successfully', 'order_id' => $order_id];
                    }else
                      $this->reply['place_order'] = ['status' => 'fail', 'msg' => 'Cart is empty'];
                }else{
                    //SINGLE PRODUCT ORDER
                    $product_info = DB::table('product')->where('id', $r->product_id)
                        ->first(['id', 'title', 'photos', 'discount','quantity','price', 'delivery_days', 'user_id as seller_id','photos','shipment_type']);

                    if($product_info->quantity >= $r->quantity) {

                        $specification = serialize($r->specification);

                        $place_order = ['order_id' => $order_id, 'product_id' => $product_info->id, 'buyer_id' => $r->user_id, 'shipping_id' => $r->shipping_id,
                            'specification' => $specification, 'quantity' => $r->quantity,'seller_id'=>$r->seller_id];
                        DB::table('order')->insertGetId($place_order);

                        $productImg= unserialize($product_info->photos);
                        $product_info->photos=$productImg[0];
                        $price = $r->quantity * $product_info->price;
                        $discount = $price * $product_info->discount / 100;
                        $product_info->final_price = $price - $discount;
                        $product_info->quantity = $r->quantity;
                        $product_info->specification = $r->specification;
                        $total = $price - $discount;
                        $product_info->shipment_type=unserialize($product_info->shipment_type);

                        //SELLER INFORMATION
                        $seller_info = DB::table('users')->where('id', $product_info->seller_id)->first();
                        $seller_name = $seller_info->first_name . ' ' . $seller_info->last_name;
                        $product_name = $product_info->title;
                        $product_quantity = $r->quantity;
                        $product_price = $product_info->price;
                        $final_price = $price - $discount;
                        $product_discount = $product_info->discount;

                        if($r->final_price){
                            $total = $r->final_price;
                            $final_price=$r->final_price;
                            if($r->make_offer==true)
                                DB::table('make_offer')->where('id',$r->offer_id)->update(['offer_status'=>'Done']);
                        }

                        //CHECK COUPON CODE APPLY OR NOT
                        $coupon_code=array();
                        if ($r->coupon_code) {
                            $coupon_code=DB::table('coupon_code')->where('code',$r->coupon_code)->first();
                        }
                        //QUANTITY MANAGEMENT
                        DB::table('product')->where('id',$product_info->id)->update(['quantity'=>DB::raw("quantity - $r->quantity")]);

                        $product_detail = [$product_name, $product_quantity, $product_price, $final_price, $product_discount];
                        //SEND MAIL TO SELLER
                        Mail::to($seller_info->email, $seller_name)->send(new PlaceOrderSeller($order_id, $product_detail, $seller_name, $total, $date1, $shipping_info, $buyer_info,$coupon_code));
                        //SEND MAIL TO BUYER
                        Mail::to($buyer_info->email, $buyer_name)->send(new PlaceOrderBuyer($order_id, $product_info, $buyer_name, $total, $date1, $shipping_info, $coupon_code,'','',$seller_info));
                        //UPDATE FINAL ORDER PRICE
                        DB::table('order')->where(['buyer_id' => $r->user_id, 'order_id' => $order_id])->update(['order_price' => $total]);

                        if($r->coupon_code) {
                            DB::table('order')->where(['buyer_id' => $r->user_id, 'order_id' => $order_id])->update(['coupon_code' => $r->coupon_code]);
                        }
                        $this->reply['place_order']=['status'=>'success','msg'=>'order place successfully','order_id'=>$order_id];
                    }
                    else
                        $this->reply['place_order']=['status'=>'fail','msg'=>'Product not available.','product_detail'=>$product_info];
                }
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }



    function viewPurchaseHistory(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                $qry=DB::table('order')->where('buyer_id',$r->user_id)
                      ->groupBy(['order_id'])
                    ->orderBy('created_date','desc');

                if($r->year)
                    $qry=$qry->whereYear('created_date',$r->year);

                 $orders=$qry->get(['id','order_id','order_price','status','created_date']);

                foreach ($orders as $order){
                    $resultCount=DB::table('order')
                        ->where('order_id',$order->order_id)
                        ->select(DB::raw("SUM(IF(status='paid', '1', '0')) as paid,SUM(IF(status='unpaid', '1', '0')) as unpaid ,count(*) as cnt"))
                        ->first();

                    if($resultCount->paid >= 1 && $resultCount->unpaid >= 1)
                      $order->status="Partially Paid";
                    else if($resultCount->paid >= 1 && $resultCount->unpaid == 0)
                      $order->status="Paid";
                    else
                      $order->status="Unpaid";
                }
                $this->reply['order']=['status'=>'success','data'=>$orders];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function viewPurchaseHistoryDetails(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $order_id=$r->order_id;
                $orders=DB::table('order as o')
                    ->leftjoin('coupon_code as c','c.code','=','o.coupon_code')
                    ->join('product as p','p.id','=','o.product_id')
                    ->join('users as us','us.id','=','p.user_id')
                    ->where('o.order_id',$order_id)
                    ->get([
                        'us.display_name',
                        'p.title','p.photos','p.price','p.shipment_type','p.discount','p.product_sku',
                        'o.status','o.seller_id','o.quantity as order_quantity','o.order_id','o.order_id','o.order_id','o.order_id','o.product_id','o.coupon_code','o.order_price','o.created_date',
                        'c.discount as coupon_code_discount','c.code_type'
                    ]);

                $shippTo=DB::table('order as o')
                    ->join('shipping as s','s.id','=','o.shipping_id')
                    ->where('o.order_id',$order_id)
                    ->first(['s.id','s.user_id','s.ship_name','s.mobile','s.ship_address','s.ship_city','s.ship_state','s.ship_country','s.ship_pincode']);

                 $sellers=DB::table('order as o')
                    ->join('users as u','u.id','=','o.seller_id')
                    ->select(DB::raw("tbl_u.id as seller_id,tbl_u.first_name,tbl_u.last_name,
                        tbl_u.mobile_number,tbl_u.email,tbl_u.display_name,tbl_u.business_name,tbl_u.business_mobile,
                        tbl_u.business_relationship,tbl_u.company_number,
                        (SELECT SUM(IF(feedback_type='Positive', '1', '0'))/COUNT(id)*100 as avg FROM tbl_feedback where receiver_id=tbl_u.id) as avg,
                        (SELECT COUNT(id) FROM tbl_feedback where receiver_id=tbl_u.id) as count"))
                    ->where('o.order_id',$order_id)
                    ->distinct('u.id')
                    ->get();
                $viewOrders=array();
                foreach ($orders as $order){
                    $order->photos=unserialize($order->photos);
                    $order->shipment_type=unserialize($order->shipment_type);
              //  $viewOrders[$order->display_name][]=$order;
                }
                $this->reply['order']=['status'=>'success','order_info'=>$orders,'shipping_info'=>$shippTo,'seller_info'=>$sellers];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function cancelOrder(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)) {
                DB::beginTransaction();

                $cancelOrder = DB::table('order')->where('order_id', $r->order_id)->update(['status' => 'cancel', 'updated_date' => date('Y-m-d G:i:s')]);
                if ($cancelOrder) {
                    DB::commit();
                    $orderDetails=DB::table('order')->where('order_id',$r->order_id)->get();
                    $userDetail=DB::table('users')->where('id',$r->user_id)->first(['first_name','last_name','email','display_name','mobile_number']);
                    $product_id=array();
                    $seller_id=array();
                    foreach ($orderDetails as $order){
                        //INCREASE QUANTITY
                        DB::table('product')->where('id',$order->product_id)->update(['quantity'=>DB::raw("quantity + $order->quantity")]);
                        $product_id[]=$order->product_id;
                        $seller_id[]=$order->seller_id;
                }
                    $product_info=DB::table('product')->whereIn('id',$product_id)->get();
                    $seller_info=DB::table('users')->whereIn('id',$seller_id)->get(['id','first_name','last_name','email','display_name','mobile_number']);
                    foreach ($seller_info as $seller){
                        Mail::to($seller->email,$seller->first_name)->send(new CancelOrder($product_info,$userDetail,$orderDetails,$seller));
                    }
                    $this->reply['cancel-order'] = ['status' => 'success', 'msg' => 'order cancel successful.'];
                } else
                    $this->reply['cancel-order'] = ['status' => 'fail', 'msg' => 'something wrong happen.'];
            }else
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function viewCancelOrder(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $orders=DB::table('order')
                    ->where(['buyer_id'=>$r->user_id,'status'=>'cancel'])
                    ->distinct('order_id')
                    ->groupBy('order_id')
                    ->get(['id','order_id','order_price','status','created_date']);

                $this->reply['order']=['status'=>'success','data'=>$orders];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function returnOrder(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $returnOrder=DB::table('order')->where(['order_id'=>$r->order_id,'buyer_id'=>$r->user_id])->get();
                $userDetail=DB::table('users')->where('id',$r->user_id)->first(['first_name','last_name','email','display_name','mobile_number']);
                $product_id=array();
                $seller_id=array();
                foreach ($returnOrder as $order){
                    $return_product=['buyer_id'=>$order->buyer_id,'seller_id'=>$order->seller_id,'order_id'=>$order->order_id,'product_id'=>$order->product_id,
                                    'reason'=>$r->reason];
                    DB::table('product_return')->insertGetId($return_product);
                    $product_id[]=$order->product_id;
                    $seller_id[]=$order->seller_id;
                    }
                $product_info=DB::table('product')->whereIn('id',$product_id)->get();
                $seller_info=DB::table('users')->whereIn('id',$seller_id)->get();

                foreach ($seller_info as $seller){
                    Mail::to($seller->email,$seller->first_name)->send(new ReturnOrder($r->order_id,$userDetail,$product_info,$r->reason,$seller));
                }

                DB::commit();
                $this->reply['return_order']=['status'=>'success','msg'=>'Return order request submitted successful.'];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function changeOrderStatus(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $update=DB::table('order')->where('order_id',$r->order_id)->update(['status'=>$r->status,'updated_date'=>date('Y-m-d H:i:s')]);
                if($update){
                    $order_detail=DB::table('order')->where('order_id',$r->order_id)->first();
                    $user_info=DB::table('users')->where('id',$order_detail->buyer_id)->first();
                    $status=$r->status;
                    Mail::to($user_info->email,$user_info->first_name)->send(new OrderStatus($order_detail,$user_info,$status));
                    $this->reply['change-status']=['status'=>'success','msg'=>'Status change successfully.'];
                }
                else
                    $this->reply['change-status']=['status'=>'fail','msg'=>'Something wrong happen,please try again.'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function changeOrderProductStatus(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $update=DB::table('order')->where(['order_id'=>$r->order_id,'product_id'=>$r->product_id,'buyer_id'=>$r->buyer_id])->update(['status'=>$r->status,'updated_date'=>date('Y-m-d H:i:s')]);
                if($update){
                    //ORDER DETAILS
                    $order_detail=DB::table('order')->where(['order_id'=>$r->order_id,'product_id'=>$r->product_id,'buyer_id'=>$r->buyer_id])->first();
                    $user_info=DB::table('users')->where('id',$order_detail->buyer_id)->first();
                    $product_info=DB::table('product')->where('id',$r->product_id)->first();
                    $product_info->photos=unserialize($product_info->photos);
                    $product_info->photos=$product_info->photos[0];
                    $product_info->shipment_type=unserialize($product_info->shipment_type);

                    $seller_info=DB::table('users')->where('id',$order_detail->seller_id)->first();
                    $status=$r->status;
                    Mail::to($user_info->email,$user_info->first_name)->cc([$seller_info->email])->send(new ProductOrderStatus($product_info,$order_detail,$user_info,$status));
                    $this->reply['change-status']=['status'=>'success','msg'=>'Status change successfully.'];
                }
                else
                    $this->reply['change-status']=['status'=>'fail','msg'=>'Something wrong happen,please try again.'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function viewPurchaseProduct(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                $order_date=DB::table('order')->where('buyer_id',$r->user_id)->get(['created_date','product_id']);
                $p_id=array();
                foreach ($order_date as $order){

                    $product=DB::table('product')->where('id',$order->product_id)->where('return_opt','!=','No')->first();
                    if($product){
                        $return_opt=substr($product->return_opt,5);
                        $date = strtotime("$return_opt days", strtotime($order->created_date));
                        $last_date=date("Y-m-d g:i:s", $date);

                        $current_date=date("Y-m-d g:i:s");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);
                        $invert=$interval->invert;
                        if($invert=="0"){
                            $p_id[]=$product->id;
                        }
                    }
                }

                $viewProducts=DB::table('order as o')
                    ->join('product as p','p.id','=','o.product_id')
                    ->join('users as u','u.id','=','p.user_id')
                    ->where('o.buyer_id',$r->user_id)
                    ->whereIn('p.id',$p_id)
                    ->distinct('o.product_id')
                    ->get(['o.product_id','o.buyer_id','o.seller_id',
                            'p.title','u.first_name','u.last_name']);

                $this->reply['purchase_products']=['status'=>'success','data'=>$viewProducts];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function payplaPayment(){
        return view('Paypal/paypal_form');
    }


}