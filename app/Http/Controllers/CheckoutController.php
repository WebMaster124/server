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
use App\Mail\SellerSingleOrder;
use PDF;
use function GuzzleHttp\Promise\promise_for;
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
                return redirect('admin/login');

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
                return redirect('admin/login');

            $orders=DB::table('order as o')
                ->join('product as p','p.id','=','o.product_id')
                ->where('o.order_id',$order_id)
                ->get([
                    'p.title','p.photos','p.price','p.shipment_type','p.discount','p.product_sku',
                    'o.status','o.quantity as order_quantity','o.order_id','o.order_id','o.order_id','o.order_id','o.product_id','o.coupon_code','o.order_price','o.created_date']);

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

            $paymentDetails = DB::table('payment as p')
                ->select('u.display_name','u.id as seller_id', 'p.*')
                ->join('users as u','u.payment_email','=','p.receiver_email')
                ->where('p.order_id', $order_id)->orderBy('id', 'ASC')->get()->toArray();
            if(count($orders))
                return view('/admin/order_detail')->with('orders',$orders)->with('buyer',$buyer)->with('sellers',$sellers)->with('payments',$paymentDetails);
            else
                return response()->view('errors.404');
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
                    ->first(['id', 'first_name', 'last_name', 'mobile_number', 'address','payment_email']);
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
                       $date = strtotime("+ $p->renew_duration day", strtotime($p->created_date));
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
                        ->where('u.user_status','1')
                        ->whereNotIn('p.id',$p_id);

                    if($r->seller_id)
                        $qry=$qry->whereIn('p.user_id',$r->seller_id);

                      $product_info=$qry->get(['p.id as product_id','p.payment_opt','p.sq','p.quantity as product_quantity', 'p.title', 'p.photos', 'p.discount', 'p.price', 'p.delivery_days', 'p.user_id as seller_id',
                            'c.quantity', 'c.specification','c.id as cart_id','u.display_name','u.first_name','u.payment_email']);
                        $i = 0;
                        $viewcheckOut=array();
                        foreach ($product_info as $product) {
                            $item_cnt=$item_cnt+$product->quantity;
                            $product_info[$i]->photos = unserialize($product->photos);
                            $product_info[$i]->specification = unserialize($product->specification);

                            //Size Quantity price sent for quatity validation
                            $specification = $product_info[$i]->specification;
                            if($specification['size'][0] != '-') {
                                $size = $specification['size'][0];
                                $sq = unserialize($product->sq);
                                $product->product_quantity = $sq[$size];
                            }

                            $product_info[$i]->payment_opt=unserialize($product->payment_opt);
                            $price = $product->quantity * $product->price;
                            $discount = $price * $product->discount / 100;
                            $product_info[$i]->final_price = $price - $discount;
                            $total = $total + $price - $discount;
                            $i++;
                            $businessName[]=$product->display_name;


                            $viewcheckOut[$product->display_name][]= $product->final_price;
                            $viewcheckOut[$product->display_name]['email']= rtrim($product->payment_email);

                            //Added in group
                            $product_group[$product->display_name][] = $product;
                        }

                       if(!empty($businessName)){
                           $viewcheckOut['businessName'] = array_values(array_unique($businessName));
                           $product_group['businessName'] = array_values(array_unique($businessName));
                       }else{
                           $product_group['businessName']='';
                           $viewcheckOut['businessName'] = '';
                       }


                       for($i = 0; $i < count($viewcheckOut['businessName']); $i++){
                           $viewcheckOut[$viewcheckOut['businessName'][$i]]['total'] = array_sum($viewcheckOut[$viewcheckOut['businessName'][$i]]);
                           $viewcheckOut[$viewcheckOut['businessName'][$i]]['total']= round($viewcheckOut[$viewcheckOut['businessName'][$i]]['total'] * 0.27,2);
                       }

                    $cart=true;
                    $this->reply['checkout_info'] = ['status' => 'success','seller'=>$viewcheckOut ,'user_info' => $user_info, 'product_info' =>$product_group, 'total' => $total,'cart'=>$cart,'item_cnt'=>$item_cnt];
                } else {
                    $product_info = DB::table('product')->where('id', $r->product_id)
                        ->first(['id', 'title', 'photos', 'discount','sq', 'price','payment_opt' ,'delivery_days', 'user_id','quantity as product_quantity']);

                    $product_info->photos = unserialize($product_info->photos);
                    $product_info->payment_opt = unserialize($product_info->payment_opt);

                    $price = $r->quantity * $product_info->price;
                    $discount = $price * $product_info->discount / 100;
                    $product_info->final_price = $price - $discount;
                    $product_info->quantity = $r->quantity;
                    $product_info->specification = $r->specification;
                    //Size Quantity price sent for quatity validation

                    $specification = $r->specification;
                    if($specification['size'] != '-') {
                        $size = $specification['size'];
                        $sq = unserialize($product_info->sq);
                        $product_info->product_quantity = $sq[$size];
                    }

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
                    $seller_info=DB::table('users')->where('id',$product_info->user_id)->first(['display_name','payment_email','user_status','business_address']);
//                    print_r($seller_info);
//                    exit;
                    
                    $product_info->display_name=$seller_info->display_name;
                    $product_info->payment_email=$seller_info->payment_email;
                    $product_info->user_status=$seller_info->user_status;
                    $viewcheckOut[$seller_info->display_name][]=$product_info;
                    $viewcheckOut['businessName'][]=$product_info->display_name;
                    $this->reply['checkout_info'] = ['status' => 'success','seller'=>$viewcheckOut ,'user_info' => $user_info, 'product_info' =>$product_info, 'total' => $total,'cart'=>$cart,'item_cnt'=>$item_cnt];
                }

            }else
               $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function placeOrder(Request $r){
//        echo $r;
//        exit;
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
//            print_r($authDB);
//            echo '<br>';
//            echo Hash::check($auth,$authDB->auth);
//            echo '<br>';
//            echo $auth;
//            exit;
            if(Hash::check($auth,$authDB->auth)) {
                if ($r->user_id){
                $order_id = time() . $r->user_id;
                $total = 0;
                $buyer_info = DB::table('users')->where('id', $r->user_id)->first();
                
//                print_r($buyer_info);
                
                $buyer_name = $buyer_info->first_name . ' ' . $buyer_info->last_name;
                $buyer_email = $buyer_info->email;
                if($buyer_info->mobile_number!=''){
                $buyer_mobile = $buyer_info->mobile_number;
                } else {
                    $buyer_mobile = $buyer_info->business_mobile;
                }
                if($buyer_info->vat_number!=''){
                $buyer_VAT = $buyer_info->vat_number;
                } else {
                    $buyer_TRN = 'N/A';
                    $buyer_VAT = 'N/A';
                }
//                
//                echo $r->shipping_id;
                $shipping_info = DB::table('shipping')->where('id', $r->shipping_id)->first();
                
//                print_r($shipping_info);
                
                $date1 = date('M d,Y');
//                echo 'cart'.$r->cart;
                
                
                
                //COME FROM CART
                if ($r->cart == 'true') {

                    //CHECK PRODUCT IS EXPIRE OR NOT
                    $all_product = DB::table('product')->where('status', '=', '1')->get();
                    $p_id = array();
                    foreach ($all_product as $p) {
                        $date = strtotime("+ $p->renew_duration day", strtotime($p->created_date));
                        $last_date = date("Y-m-d h:m:i", $date);
                        $current_date = date("Y-m-d h:m:i");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        if ($datetime1 > $datetime2)
                            $p_id[] = $p->id;
                    }

                    //MULTIPLE PRODUCT ORDER
                    //PRODUCT DETAILS
                    $qry = DB::table('add_to_cart as c')
                        ->join('product as p', 'p.id', '=', 'c.product_id')
                        ->where('c.user_id', $r->user_id)
                        ->where('p.quantity', '!=', '0')
                        ->whereNotIn('p.id', $p_id);

                    if ($r->seller_id)
                        $qry = $qry->whereIn('p.user_id', $r->seller_id);

                    $product_info = $qry->get(['c.id as cart_id', 'c.product_id','p.sq',
                        'c.specification', 'c.quantity', 'p.price', 'p.discount', 'p.user_id as seller_id', 'p.title', 'p.photos', 'p.quantity as product_quantity', 'p.shipment_type','p.payment_opt','p.return_opt','p.return_policy']);
                    $i = 0;
                    
                    
                    if (count($product_info) !== 0) {
                        $seller = array();
                        $seller_id = array();
                        $product_detail = array();
                        $coupon_code = array();
                        foreach ($product_info as $product) {
                            $payment_opt=($r->order_status=='Completed'?'1':'2');
                            $place_order = ['order_id' => $order_id, 'product_id' => $product->product_id, 'buyer_id' => $r->user_id, 'shipping_id' => $r->shipping_id,
                                'specification' => $product->specification, 'quantity' => $product->quantity, 'seller_id' => $product->seller_id, 'status' => $r->order_status,
                                'payment_opt'=>$payment_opt,'order_status'=>'Processing'];
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
							echo "here";exit;
                            $product_info[$i]->shipment_type = unserialize($product->shipment_type);
                            $product_info[$i]->specification = unserialize($product->specification);

                            //SELLER INFORMATION
                            $seller_info = DB::table('users')->where('id', $product->seller_id)->first();
                            $seller_name = $seller_info->first_name . ' ' . $seller_info->last_name;
                            $paypalEmail = $seller_info->payment_email;
                            $seller_id[] = $seller_info->id;
                            $product_name = $product->title;
                            $product_quantity = $product->quantity;
                            $product_price = $product->price;
                            $product_discount = $product->discount;
                            $product_specification = $product_info[$i]->specification;

                            $final_price = $price - $discount;
                            //CHECK COUPON CODE APPLY OR NOT
//                            $seller[]=$seller_info;

                            if ($r->coupon_code) {
                                $total = $r->final_price;
                                $coupon_code = DB::table('coupon_code')->where('code', $r->coupon_code)->first();
                            }

                            //QUANTITY MANAGEMENT
                            DB::table('product')->where('id', $product->product_id)->update(['quantity' => DB::raw("quantity - $product->quantity")]);

                            //Quantity Management for Size wise
                            $specification = $product_specification;
                            if($specification['size'][0] != '-') {
                                $size = $specification['size'][0];
                                $sq = unserialize($product_info->sq);
                                $sq[$size] = $sq[$size] - $product->quantity;
                                $sq = serialize($sq);
                                DB::table('product')->where('id', $product->product_id)->update(['sq' => $sq]);
                            }

                            // REMOVE CART PRODUCT
                           DB::table('add_to_cart')->where('id',$product->cart_id)->delete();
                             $product_detail[] = [$product_name, $product_quantity, $product_price, $final_price, $product_discount, $product_specification, $product->seller_id];
                             //SEND MAIL TO SELLER
                            $i++;
                        }
                        $seller = DB::table('users')->whereIn('id', $seller_id)->get();
                        if ($r->coupon_code) {
                            $coupon_code = DB::table('coupon_code')->where('code', $r->coupon_code)->first();
                            $coupon_code->discount = round($coupon_code->discount / $i, 2);
                        }
                        $email_template_seller=DB::table('email_template')->where('id','3')->first();
                        $email_template_seller->order_status=$r->order_status;
                        foreach ($seller as $s) {
                           Mail::to($s->email)->send(new PlaceOrderSeller($order_id, $product_info, $s->id, $total, $date1, $shipping_info, $buyer_info, $coupon_code,$email_template_seller));
                        }

                        //SEND MAIL TO BUYER
                        $payment_status=$r->order_status;
                        if($payment_status=='unpaid')
                           $email_template=DB::table('email_template')->where('id','1')->first();
                        else
                            $email_template=DB::table('email_template')->where('id','2')->first();
//                        echo '123456789<br>';
                        $this->buyerInvoice('Cart',$order_id, $product_info, $buyer_name, $buyer_email, $buyer_mobile, $buyer_TRN, $buyer_VAT, $total, $date1, $shipping_info, $seller,$r->user_id);
//                        print_r($seller);
                       Mail::to($buyer_info->email, $buyer_name)->send(new PlaceOrderBuyer($order_id, $product_info, $buyer_name, $total, $date1, $shipping_info, $coupon_code, $payment_status, 'cart', $seller,$email_template));
                        
//                       exit;
                        //UPDATE FINAL ORDER PRICE
                        DB::table('order')->where(['buyer_id' => $r->user_id, 'order_id' => $order_id])->update(['order_price' => $total]);
                        if ($r->coupon_code) {
                            DB::table('order')->where(['buyer_id' => $r->user_id, 'order_id' => $order_id])->update(['coupon_code' => $r->coupon_code]);
                        }

                        $this->reply['place_order'] = ['status' => 'success', 'msg' => 'order place successfully', 'order_id' => $order_id];
                        //return view('Paypal/paypal_form')->with('product_info',$product_info)->with('paypalEmail',$paypalEmail);
                    } else
                        $this->reply['place_order'] = ['status' => 'fail', 'msg' => 'Cart is empty'];
                } else {

                    //SINGLE PRODUCT ORDER
                    $product_info = DB::table('product')->where('id', $r->product_id)
                        ->first(['id', 'title', 'photos', 'discount', 'quantity','sq', 'price', 'delivery_days', 'user_id as seller_id', 'photos', 'shipment_type','payment_opt','return_opt','return_policy','ship_to']);

//                    print_r($product_info);
//                    echo '<br>';
//                    echo $product_info->return_opt;
//                    exit;
                    if($product_info->return_opt!='No'){
                    $product_info->return_opt = substr($product_info->return_opt, strpos($product_info->return_opt, "_") + 1);    
                    }
//                    echo $product_info->return_opt;
//                    $aa = unserialize($product_info->payment_opt);
//                    print_r($aa);
//                    exit;
                    
                    if ($product_info->quantity >= $r->quantity) {
                        $specification = $r->specification;

                        $buy_size = $specification['size'];
						
                        $specification = serialize($specification);

                       $payment_opt=($r->order_status=='Completed'?'1':'2');
                        $place_order = ['order_id' => $order_id, 'product_id' => $product_info->id, 'buyer_id' => $r->user_id, 'shipping_id' => $r->shipping_id,
                            'specification' => $specification, 'quantity' => $r->quantity, 'seller_id' => $r->seller_id, 'status' => $r->order_status,
                            'payment_opt'=>$payment_opt,'order_status'=>'Processing'];
//                        print_r($place_order);echo '<br>';
//                        print_r($product_info->sq);echo '<br>';
//                        if($product_info->sq != '') {
//                            $sq = unserialize($product_info->sq);
//                            print_r($sq);
//                            if(isset($sq['size']) && $sq['size'] != $buy_size) {
//                                $sq['size'] = $sq['size'] - $r->quantity;
//                                echo $sq = serialize($sq);
//                                //DB::table('product')->where('id', $product_info->id)->update(['sq' => $sq]);
//                            }
//                        }
//                    exit;
                        DB::table('order')->insertGetId($place_order);

                        $productImg = unserialize($product_info->photos);
                        $product_info->photos = $productImg[0];
                        $price = $r->quantity * $product_info->price;
                        $discount = $price * $product_info->discount / 100;
                        $product_info->final_price = $price - $discount;
                        $product_info->quantity = $r->quantity;
                        $product_info->specification = $r->specification;
                        $total = $price - $discount;
                        $product_info->shipment_type = unserialize($product_info->shipment_type);
                        $product_specification = $r->specification;
                        
                        //SELLER INFORMATION
                        $seller_info = DB::table('users')->where('id', $product_info->seller_id)->first();
                        $seller_name = $seller_info->first_name . ' ' . $seller_info->last_name;
                        $product_name = $product_info->title;
                        $product_quantity = $r->quantity;
                        $product_price = $product_info->price;
                        $final_price = $price - $discount;
                        $product_discount = $product_info->discount;

                        $value = unserialize($seller_info->business_address);
//                        $address = $value['flat_no'].','.$value['street'].'</br>'.$value['city'].' - '. $value['pincode'].',</br>'.$value['state_name'].',</br>'.$value['country_name'];
                        $seller_info->business_address = $value;
//                        exit;
                        
                        if ($r->final_price) {
                            $total = $r->final_price;
                            $final_price = $r->final_price;
                            if ($r->make_offer == true)
                                DB::table('make_offer')->where('id', $r->offer_id)->update(['offer_status' => 'Done']);
                        }
                        //CHECK COUPON CODE APPLY OR NOT
                        $coupon_code = array();
                        if ($r->coupon_code) {
                            $coupon_code = DB::table('coupon_code')->where('code', $r->coupon_code)->first();
                        }
                        //QUANTITY MANAGEMENT
                        DB::table('product')->where('id', $product_info->id)->update(['quantity' => DB::raw("quantity - $r->quantity")]);

                        //Quantity Management for Size wise
                        if($product_info->sq != '') {
                            $sq = unserialize($product_info->sq);
                            if(isset($sq['size']) && $sq['size'] != $buy_size) {
                                $sq['size'] = $sq['size'] - $r->quantity;
                                $sq = serialize($sq);
                                DB::table('product')->where('id', $product_info->id)->update(['sq' => $sq]);
                            }
                        }
//                               print_r($product_info);exit;
                
                        $product_detail = [$product_name, $product_quantity, $product_price, $final_price, $product_discount, $product_specification];
//                        print_r($product_detail);echo '<br>';
//                        exit;
                        //SEND MAIL TO SELLER
                        $email_template_seller=DB::table('email_template')->where('id','3')->first();
                        $email_template_seller->order_status=$r->order_status;
                        Mail::to($seller_info->email, $seller_name)->send(new SellerSingleOrder($order_id, $product_detail, $seller_name, $total, $date1, $shipping_info, $buyer_info, $coupon_code,$email_template_seller));
                        //SEND MAIL TO BUYER
                        $payment_status=$r->order_status;
                        
                        $invoice_management=DB::table('setting')->where('id','1')->first(['buyer_invoice_management']);
                        $invoice=unserialize($invoice_management->buyer_invoice_management);
                        
//                         print_r($invoice);
//                         echo '<br>';
//                         $footer_note1 = strip_tags($invoice['footer_note1'],'<br/>');
//                        echo 'asdasdsaas';
//                        echo '<br>';
//                        print_r($seller_info);
//                        exit;
                        // GENERATE BUYER INVOICE
                          $this->buyerInvoice('Buy It Now',$order_id, $product_info, $buyer_name, $buyer_email, $buyer_mobile, $buyer_TRN, $buyer_VAT, $total, $date1, $shipping_info, $seller_info,$r->user_id,$invoice['declaration_heading'],$invoice['aknowledgment_heading'],$invoice['declaration'],$invoice['aknowledgment'],$invoice['footer_note1'],$invoice['footer_note2'], $r->order_status);
                        
                          
//                          print_r($this->buyerInvoice('Buy It Now',$order_id, $product_info, $buyer_name, $buyer_email, $buyer_mobile, $buyer_TRN, $buyer_VAT, $total, $date1, $shipping_info, $seller_info,$r->user_id,$invoice['declaration'],$invoice['aknowledgment']));
//                        exit;
                        if($payment_status=='unpaid')
                            $email_template=DB::table('email_template')->where('id','1')->first();
                        else
                            $email_template=DB::table('email_template')->where('id','2')->first();
                       
//                        print_r(new PlaceOrderBuyer($order_id, $product_info, $buyer_name, $buyer_email, $buyer_mobile, $buyer_TRN, $buyer_VAT, $total, $date1, $shipping_info, $coupon_code, $payment_status, '', $seller_info,$email_template));
//                        exit;
                     
                        Mail::to($buyer_info->email, $buyer_name)->send(new PlaceOrderBuyer($order_id, $product_info, $buyer_name, $buyer_email, $buyer_mobile, $buyer_TRN, $buyer_VAT, $total, $date1, $shipping_info, $coupon_code, $payment_status, '', $seller_info,$email_template));
//                         echo 'sdfsdfsdfsdf--';
                        //UPDATE FINAL ORDER PRICE
                        DB::table('order')->where(['buyer_id' => $r->user_id, 'order_id' => $order_id])->update(['order_price' => $total]);
//                        echo 'sdfsdfsdfsdf243242345';
//                        echo '<br>'.$order_id;
//                        exit;
                        if ($r->coupon_code) {
                            DB::table('order')->where(['buyer_id' => $r->user_id, 'order_id' => $order_id])->update(['coupon_code' => $r->coupon_code]);
                        }
                            $this->reply['place_order'] = ['status' => 'success', 'msg' => 'order place successfully', 'order_id' => $order_id];
//                        exit;
                    } else
                        $this->reply['place_order'] = ['status' => 'fail', 'msg' => 'Product not available.', 'product_detail' => $product_info];
                }
            } else
                    $this->reply['place_order'] = ['status' => 'fail', 'msg' => 'User id not be null.'];
            } else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            if($r->coupon_code){
                DB::table('coupon_code')->where('code', $r->coupon_code)->update(['remaining_cnt' => DB::raw("remaining_cnt + 1")]);
            }

            $this->reply['place_order']=['status'=>'fail88','msg'=>$e->getMessage()];
            return response()->json($this->reply);
            DB::rollBack();
        }
    }

    function  buyerInvoice($from,$order_id, $product_info, $buyer_name, $buyer_email, $buyer_mobile, $buyer_TRN, $buyer_VAT, $total, $date1, $shipping_info,$seller_info,$buyer_id,$declaration_heading,$aknowledgment_heading,$declaration,$buyer_aknowledgment,$footer_note1,$footer_note2,$order_status){
        $searchArray = array("buyer_name");
        $replaceArray = array($buyer_name);

        $aknowledgment =  html_entity_decode(str_replace($searchArray,$replaceArray,$buyer_aknowledgment,$payment_status));
        
        
        $data = [
            "from"=>$from,
            "order_id"=>$order_id,
            "product_info"=>$product_info,
            "buyer_name"=>$buyer_name,
            "buyer_email"=>$buyer_email,
            "buyer_mobile"=>$buyer_mobile,
            "buyer_TRN"=>$buyer_TRN,
            "buyer_VAT"=>$buyer_VAT,
            "total"=>$total,
            "order_date"=>$date1,
            "shipping_info"=>$shipping_info,
            "seller_info"=>$seller_info,
            "invoice_no"=>strtotime($date1).''.$buyer_id,
            "declaration_heading"=> $declaration_heading,
            "aknowledgment_heading"=>$aknowledgment_heading,
            "declaration"=> $declaration,
            "aknowledgment"=>$aknowledgment,
            "footer_note1"=>$footer_note1,
            "footer_note2"=>$footer_note2,
              "payment_status"=>$order_status
        ];
//        print_r($data);
//        exit;
//        echo "invoice/buyer/$order_id.pdf";
//        $pdf = PDF::loadView('/invoice/buyer_invoice', $data);
        $pdf = PDF::loadView('/invoice/buyer_invoice', $data)->save(public_path("invoice/buyer/$order_id.pdf"));
//        exit;
    }

    function buyer(){
        return view('/invoice/buyer_invoice');
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
                if($r->date)
                    $qry=$qry->whereDate('created_date', $r->date);
                if($r->status)
                    $qry=$qry->where('status',$r->status);

                $orders=$qry->get(['id','order_id','order_price','status','created_date']);
                $i=0;
                foreach ($orders as $order){
                    $order->feedback_status=false;
                    $order->feedback_receive_status=false;
                    $order_info=DB::table('order')->where('order_id',$order->order_id)->get(['buyer_id','product_id','seller_id','order_id']);
                    $feedback_cnt=0;
                    $product_cnt=0;
                    foreach ($order_info as $ord){
                        $feedback_status=DB::table('feedback')->where(['sender_id'=>$ord->buyer_id,'product_id'=>$ord->product_id,'receiver_id'=>$ord->seller_id,'feedback_by'=>'buyer','order_id'=>$ord->order_id])->exists();
                        if($feedback_status)
                            $feedback_cnt++;
                        $product_cnt++;

                        $feedback_rec_status=DB::table('feedback')->where(['sender_id'=>$ord->seller_id,'product_id'=>$ord->product_id,'receiver_id'=>$ord->buyer_id,'feedback_by'=>'seller','order_id'=>$ord->order_id])->exists();
                        if($feedback_rec_status)
                            $order->feedback_receive_status=true;
                    }
                    if($feedback_cnt==$product_cnt)
                        $order->feedback_status=true;


                   $resultCount=DB::table('order')
                        ->where('order_id',$order->order_id)
                        ->select(DB::raw("SUM(IF(status='Completed', '1', '0')) as paid,SUM(IF(status='unpaid', '1', '0')) as unpaid ,count(*) as cnt"))
                        ->first();

                    if($resultCount->paid >= 1 && $resultCount->unpaid >= 1)
                      $order->status="Partially Paid";
                    else if($resultCount->paid >= 1 && $resultCount->unpaid == 0)
                      $order->status="Completed";
                    else
                      $order->status="Unpaid";

                    $orders[$i]->created_date = date('d.m.Y H:i:s',strtotime($order->created_date));
                    $i++;
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
                        'o.specification','o.buyer_id','o.order_status','o.status','o.seller_id','o.quantity as order_quantity','o.order_id','o.order_id','o.order_id','o.order_id','o.product_id','o.coupon_code','o.order_price','o.created_date',
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
                    $order->specification=unserialize($order->specification);
                    $order->feedback_status=DB::table('feedback')->where(['sender_id'=>$order->buyer_id,'product_id'=>$order->product_id,'receiver_id'=>$order->seller_id,'feedback_by'=>'buyer','order_id'=>$order->order_id])->exists();
                    $order->feedback_receive_status=DB::table('feedback')->where(['sender_id'=>$order->seller_id,'product_id'=>$order->product_id,'receiver_id'=>$order->buyer_id,'feedback_by'=>'seller','order_id'=>$order->order_id])->exists();
                    $businessName[] = $order->display_name;
                    $orderPrice = $order->order_price;
                    $order->created_date = date('d.m.Y H:i:s', strtotime($order->created_date));
                    $viewCartRes[$order->display_name][] = $order;
                    //  $viewOrders[$order->display_name][]=$order;
                }

                if(!empty($businessName))
                    $viewCartRes['businessName'] = array_values(array_unique($businessName));
                else
                    $viewCartRes['businessName'] = '';
                $transaction_detail=array();
                $paymentDetails = DB::table('payment as p')
                    ->select('u.display_name', 'p.*')
                    ->join('users as u','u.payment_email','=','p.receiver_email')
                    ->where('p.order_id', $order_id)->orderBy('id', 'ASC')->get()->toArray();
                foreach($paymentDetails as $paymentDetail){
                    $transaction_detail[$paymentDetail->display_name]['transaction_id'] = $paymentDetail->transaction_id;
                    $transaction_detail[$paymentDetail->display_name]['sendertransaction_id'] = $paymentDetail->sendertransaction_id;
                }
                $this->reply['order']=['status'=>'success','transaction_detail'=>$transaction_detail,'order_price'=> $orderPrice,'order_info'=>$viewCartRes,'shipping_info'=>$shippTo,'seller_info'=>$sellers];
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
            } else
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
                foreach ($returnOrder as $order) {
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

            } else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        } catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function changeOrderStatus(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $update=DB::table('order')->where('order_id',$r->order_id)->where('seller_id',$r->seller_id)->update(['order_status'=>$r->status,'updated_date'=>date('Y-m-d H:i:s')]);
                if($update){
                    $order_detail=DB::table('order')->where('order_id',$r->order_id)->first();
                    $user_info=DB::table('users')->where('id',$order_detail->buyer_id)->first();
                    $product_info=DB::table('order as o')
                        ->join('product as p','p.id','=','o.product_id')
                        ->where(['o.order_id'=>$r->order_id,'o.seller_id'=>$r->seller_id])
                        ->get(['o.quantity','p.title','p.photos','p.price','p.discount','p.shipment_type','o.product_id']);

                    foreach ($product_info as $product){
                        $product->photos=unserialize($product->photos);
                        $product->shipment_type=unserialize($product->shipment_type);
                    }
                    $seller_info=DB::table('users')->where('id',$order_detail->seller_id)->first();
                    $status=$r->status;
                    Mail::to($user_info->email,$user_info->first_name)->send(new OrderStatus($order_detail,$user_info,$status,$product_info,$seller_info));
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
                if($r->status=='Completed')
                    $update=DB::table('order')->where(['order_id'=>$r->order_id,'product_id'=>$r->product_id,'buyer_id'=>$r->buyer_id])->update(['status'=>$r->status,'updated_date'=>date('Y-m-d H:i:s')]);
                else
                    $update=DB::table('order')->where(['order_id'=>$r->order_id,'product_id'=>$r->product_id,'buyer_id'=>$r->buyer_id])->update(['order_status'=>$r->status,'updated_date'=>date('Y-m-d H:i:s')]);
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

                     $product=DB::table('product')->where('id',$order->product_id)->first();
                    if($product){
                        if($product->return_opt=='No')
                            $return_opt=30;
                        else
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
                    ->get(['o.product_id','o.buyer_id','o.seller_id','o.order_id',
                            'p.title','u.first_name','u.last_name','u.display_name']);

                $this->reply['purchase_products']=['status'=>'success','data'=>$viewProducts];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function storePaypalPaymentDetails(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();

            if(Hash::check($auth,$authDB->auth)) {
               $paymentInfo=$r->payment_Info;
                foreach ($paymentInfo as $pay) {
                    $payment=['order_id'=>$r->order_id,'sendertransaction_id'=>$pay['sendertransaction_id'],'sendertransaction_status'=>$pay['sendertransaction_status'],'transaction_id'=>$pay['transaction_id'],'transaction_status'=>$pay['transaction_status'],'amount'=>$pay['amount'],
                    'receiver_email'=>$pay['receiver_email'],'payKey'=>$r->payKey,'sender_email'=>$r->sender_email];
                    DB::table('payment')->insertGetId($payment);
                }
                $this->reply['payment']=['status'=>'success','msg'=>'success'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail'];
            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
        }
    }
    
    
    function placePaypalOrder(Request $r){
        $Info = $r->checkoutInfo;
        $r=json_decode($Info);
//        echo $r->user_id;
//        exit;
        try{
//            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
//            print_r($authDB);
//            echo '<br>';
//            echo Hash::check($auth,$authDB->auth);
//            echo '<br>';
            $auth = 'dibdaaauth';
//            exit;
            if(Hash::check($auth,$authDB->auth)) {
                if ($r->user_id){
                $order_id = time() . $r->user_id;
                $total = 0;
                $buyer_info = DB::table('users')->where('id', $r->user_id)->first();
                
//                print_r($buyer_info);
                
                $buyer_name = $buyer_info->first_name . ' ' . $buyer_info->last_name;
                $buyer_email = $buyer_info->email;
                if($buyer_info->mobile_number!=''){
                $buyer_mobile = $buyer_info->mobile_number;
                } else {
                    $buyer_mobile = $buyer_info->business_mobile;
                }
                if($buyer_info->vat_number!=''){
                $buyer_VAT = $buyer_info->vat_number;
                } else {
                    $buyer_TRN = 'N/A';
                    $buyer_VAT = 'N/A';
                }
//                
//                echo $r->shipping_id;
                $shipping_info = DB::table('shipping')->where('id', $r->shipping_id)->first();
                
//                print_r($shipping_info);
                
                $date1 = date('M d,Y');
//                echo 'cart'.$r->cart;
                
                
                
                //COME FROM CART
//                if ($r->cart == 'true') {
//
//                    //CHECK PRODUCT IS EXPIRE OR NOT
//                    $all_product = DB::table('product')->where('status', '=', '1')->get();
//                    $p_id = array();
//                    foreach ($all_product as $p) {
//                        $date = strtotime("+ $p->renew_duration day", strtotime($p->created_date));
//                        $last_date = date("Y-m-d h:m:i", $date);
//                        $current_date = date("Y-m-d h:m:i");
//
//                        $datetime1 = date_create($current_date);
//                        $datetime2 = date_create($last_date);
//                        if ($datetime1 > $datetime2)
//                            $p_id[] = $p->id;
//                    }
//
//                    //MULTIPLE PRODUCT ORDER
//                    //PRODUCT DETAILS
//                    $qry = DB::table('add_to_cart as c')
//                        ->join('product as p', 'p.id', '=', 'c.product_id')
//                        ->where('c.user_id', $r->user_id)
//                        ->where('p.quantity', '!=', '0')
//                        ->whereNotIn('p.id', $p_id);
//
//                    if ($r->seller_id)
//                        $qry = $qry->whereIn('p.user_id', $r->seller_id);
//
//                    $product_info = $qry->get(['c.id as cart_id', 'c.product_id','p.sq',
//                        'c.specification', 'c.quantity', 'p.price', 'p.discount', 'p.user_id as seller_id', 'p.title', 'p.photos', 'p.quantity as product_quantity', 'p.shipment_type']);
//                    $i = 0;
//                    
//                    
//                    if (count($product_info) !== 0) {
//                        $seller = array();
//                        $seller_id = array();
//                        $product_detail = array();
//                        $coupon_code = array();
//                        foreach ($product_info as $product) {
//                            $payment_opt=($r->order_status=='Completed'?'1':'2');
//                            $place_order = ['order_id' => $order_id, 'product_id' => $product->product_id, 'buyer_id' => $r->user_id, 'shipping_id' => $r->shipping_id,
//                                'specification' => $product->specification, 'quantity' => $product->quantity, 'seller_id' => $product->seller_id, 'status' => $r->order_status,
//                                'payment_opt'=>$payment_opt,'order_status'=>'Processing'];
//                            if ($product->quantity > $product->product_quantity) {
//                                $this->reply['place_order'] = ['status' => 'fail', 'msg' => 'Product not available.', 'product_detail' => $product];
//                                return response()->json($this->reply);
//                                exit;
//                            }
//
//                            DB::table('order')->insertGetId($place_order);
//                            $price = $product->quantity * $product->price;
//                            $discount = $price * $product->discount / 100;
//                            $product_info[$i]->final_price = $price - $discount;
//                            $total = $total + $price - $discount;
//
//                            $productImg = unserialize($product->photos);
//                            $product_info[$i]->photos = $productImg[0];
//                            $product_info[$i]->shipment_type = unserialize($product->shipment_type);
//                            $product_info[$i]->specification = unserialize($product->specification);
//
//                            //SELLER INFORMATION
//                            $seller_info = DB::table('users')->where('id', $product->seller_id)->first();
//                            $seller_name = $seller_info->first_name . ' ' . $seller_info->last_name;
//                            $paypalEmail = $seller_info->payment_email;
//                            $seller_id[] = $seller_info->id;
//                            $product_name = $product->title;
//                            $product_quantity = $product->quantity;
//                            $product_price = $product->price;
//                            $product_discount = $product->discount;
//                            $product_specification = $product_info[$i]->specification;
//
//                            $final_price = $price - $discount;
//                            //CHECK COUPON CODE APPLY OR NOT
////                            $seller[]=$seller_info;
//
//                            if ($r->coupon_code) {
//                                $total = $r->final_price;
//                                $coupon_code = DB::table('coupon_code')->where('code', $r->coupon_code)->first();
//                            }
//
//                            //QUANTITY MANAGEMENT
//                            DB::table('product')->where('id', $product->product_id)->update(['quantity' => DB::raw("quantity - $product->quantity")]);
//
//                            //Quantity Management for Size wise
//                            $specification = $product_specification;
//                            if($specification['size'][0] != '-') {
//                                $size = $specification['size'][0];
//                                $sq = unserialize($product_info->sq);
//                                $sq[$size] = $sq[$size] - $product->quantity;
//                                $sq = serialize($sq);
//                                DB::table('product')->where('id', $product->product_id)->update(['sq' => $sq]);
//                            }
//
//                            // REMOVE CART PRODUCT
//                           DB::table('add_to_cart')->where('id',$product->cart_id)->delete();
//                             $product_detail[] = [$product_name, $product_quantity, $product_price, $final_price, $product_discount, $product_specification, $product->seller_id];
//                             //SEND MAIL TO SELLER
//                            $i++;
//                        }
//                        $seller = DB::table('users')->whereIn('id', $seller_id)->get();
//                        if ($r->coupon_code) {
//                            $coupon_code = DB::table('coupon_code')->where('code', $r->coupon_code)->first();
//                            $coupon_code->discount = round($coupon_code->discount / $i, 2);
//                        }
//                        $email_template_seller=DB::table('email_template')->where('id','3')->first();
//                        $email_template_seller->order_status=$r->order_status;
//                        foreach ($seller as $s) {
//                           Mail::to($s->email)->send(new PlaceOrderSeller($order_id, $product_info, $s->id, $total, $date1, $shipping_info, $buyer_info, $coupon_code,$email_template_seller));
//                        }
//
//                        //SEND MAIL TO BUYER
//                        $payment_status=$r->order_status;
//                        if($payment_status=='unpaid')
//                           $email_template=DB::table('email_template')->where('id','1')->first();
//                        else
//                            $email_template=DB::table('email_template')->where('id','2')->first();
////                        echo '123456789<br>';
//                        $this->buyerInvoice('Cart',$order_id, $product_info, $buyer_name, $buyer_email, $buyer_mobile, $buyer_TRN, $buyer_VAT, $total, $date1, $shipping_info, $seller,$r->user_id);
////                        print_r($seller);
//                       Mail::to($buyer_info->email, $buyer_name)->send(new PlaceOrderBuyer($order_id, $product_info, $buyer_name, $total, $date1, $shipping_info, $coupon_code, $payment_status, 'cart', $seller,$email_template));
//                        
////                       exit;
//                        //UPDATE FINAL ORDER PRICE
//                        DB::table('order')->where(['buyer_id' => $r->user_id, 'order_id' => $order_id])->update(['order_price' => $total]);
//                        if ($r->coupon_code) {
//                            DB::table('order')->where(['buyer_id' => $r->user_id, 'order_id' => $order_id])->update(['coupon_code' => $r->coupon_code]);
//                        }
//
//                        $this->reply['place_order'] = ['status' => 'success', 'msg' => 'order place successfully', 'order_id' => $order_id];
//                        //return view('Paypal/paypal_form')->with('product_info',$product_info)->with('paypalEmail',$paypalEmail);
//                    } else
//                        $this->reply['place_order'] = ['status' => 'fail', 'msg' => 'Cart is empty'];
//                } else {

                    //SINGLE PRODUCT ORDER
                    $product_info = DB::table('product')->where('id', $r->product_id)
                        ->first(['id', 'title', 'photos', 'discount', 'quantity','sq', 'price', 'delivery_days', 'user_id as seller_id', 'photos', 'shipment_type']);

                    //print_r($product_info);
//                    print_r($r->specification);exit;
                    if ($product_info->quantity >= $r->quantity) {
                        $specification = $r->specification;

                        $buy_size = $specification->size;
						
                        $specification = serialize($specification);
//                        echo '<br>';
                        $payment_opt=($r->order_status=='Completed'?'1':'2');
                        $place_order = ['order_id' => $order_id, 'product_id' => $product_info->id, 'buyer_id' => $r->user_id, 'shipping_id' => $r->shipping_id,
                            'specification' => $specification, 'quantity' => $r->quantity, 'seller_id' => $r->seller_id, 'status' => $r->order_status,
                            'payment_opt'=>$payment_opt,'order_status'=>'Processing'];
                        DB::table('order')->insertGetId($place_order);
//                        echo $product_info->photos;
                        $productImg = unserialize($product_info->photos);
//                        print_r($productImg);
                        
                        $product_info->photos = $productImg[0];
                        $price = $r->quantity * $product_info->price;
                        $discount = $price * $product_info->discount / 100;
                        $product_info->final_price = $price - $discount;
                        $product_info->quantity = $r->quantity;
                        $product_info->specification = $r->specification;
                        $total = $price - $discount;
                        $product_info->shipment_type = unserialize($product_info->shipment_type);
                        $product_specification = $r->specification;
                        
                        //SELLER INFORMATION
                        $seller_info = DB::table('users')->where('id', $product_info->seller_id)->first();
                        $seller_name = $seller_info->first_name . ' ' . $seller_info->last_name;
                        $product_name = $product_info->title;
                        $product_quantity = $r->quantity;
                        $product_price = $product_info->price;
                        $final_price = $price - $discount;
                        $product_discount = $product_info->discount;

                        if ($r->final_price) {
                            $total = $r->final_price;
                            $final_price = $r->final_price;
                            if ($r->make_offer == true)
                                DB::table('make_offer')->where('id', $r->offer_id)->update(['offer_status' => 'Done']);
                        }
                        //CHECK COUPON CODE APPLY OR NOT
                        $coupon_code = array();
                        if ($r->coupon_code) {
                            $coupon_code = DB::table('coupon_code')->where('code', $r->coupon_code)->first();
                        }
                        //QUANTITY MANAGEMENT
                        DB::table('product')->where('id', $product_info->id)->update(['quantity' => DB::raw("quantity - $r->quantity")]);
                        
                        //Quantity Management for Size wise
                        if($product_info->sq != '') {
                            $sq = unserialize($product_info->sq);
                            if(isset($sq['size']) && $sq['size'] != $buy_size) {
                                $sq['size'] = $sq['size'] - $r->quantity;
                                $sq = serialize($sq);
                                DB::table('product')->where('id', $product_info->id)->update(['sq' => $sq]);
                            }
                        }
                            
                
                        $product_detail = [$product_name, $product_quantity, $product_price, $final_price, $product_discount, $product_specification];
                        //print_r($product_detail);
                        
                        //SEND MAIL TO SELLER
                        $email_template_seller=DB::table('email_template')->where('id','3')->first();
                        $email_template_seller->order_status=$r->order_status;
                        Mail::to($seller_info->email, $seller_name)->send(new SellerSingleOrder($order_id, $product_detail, $seller_name, $total, $date1, $shipping_info, $buyer_info, $coupon_code,$email_template_seller));
                        //SEND MAIL TO BUYER
                        $payment_status=$r->order_status;
//                        exit;
                        $invoice_management=DB::table('setting')->where('id','1')->first(['buyer_invoice_management']);
                        $invoice=unserialize($invoice_management->buyer_invoice_management);
                        
//                         print_r($invoice);
//                         echo '<br>';
//                         $footer_note1 = strip_tags($invoice['footer_note1'],'<br/>');
//                        echo 'asdasdsaas';
//                        echo '<br>';
//                        print_r($seller_info);
//                        exit;
                        // GENERATE BUYER INVOICE
                          $this->buyerInvoice('Buy It Now',$order_id, $product_info, $buyer_name, $buyer_email, $buyer_mobile, $buyer_TRN, $buyer_VAT, $total, $date1, $shipping_info, $seller_info,$r->user_id,$invoice['declaration_heading'],$invoice['aknowledgment_heading'],$invoice['declaration'],$invoice['aknowledgment'],$invoice['footer_note1'],$invoice['footer_note2']);
                        
                          
//                          print_r($this->buyerInvoice('Buy It Now',$order_id, $product_info, $buyer_name, $buyer_email, $buyer_mobile, $buyer_TRN, $buyer_VAT, $total, $date1, $shipping_info, $seller_info,$r->user_id,$invoice['declaration'],$invoice['aknowledgment']));
//                        exit;
                        if($payment_status=='unpaid')
                            $email_template=DB::table('email_template')->where('id','1')->first();
                        else
                            $email_template=DB::table('email_template')->where('id','2')->first();
//                        echo 'sdfsdfsdfsdf';
//                        echo '<br>';
//                        print_r(new PlaceOrderBuyer($order_id, $product_info, $buyer_name, $buyer_email, $buyer_mobile, $buyer_TRN, $buyer_VAT, $total, $date1, $shipping_info, $coupon_code, $payment_status, '', $seller_info,$email_template));
//                        exit;
                        
                        Mail::to($buyer_info->email, $buyer_name)->send(new PlaceOrderBuyer($order_id, $product_info, $buyer_name, $buyer_email, $buyer_mobile, $buyer_TRN, $buyer_VAT, $total, $date1, $shipping_info, $coupon_code, $payment_status, '', $seller_info,$email_template));
                        
                        //UPDATE FINAL ORDER PRICE
                        DB::table('order')->where(['buyer_id' => $r->user_id, 'order_id' => $order_id])->update(['order_price' => $total]);
                        
                        if ($r->coupon_code) {
                            DB::table('order')->where(['buyer_id' => $r->user_id, 'order_id' => $order_id])->update(['coupon_code' => $r->coupon_code]);
                        }
                        $this->reply['place_order'] = ['status' => 'success', 'msg' => 'order place successfully', 'order_id' => $order_id];
                        header("Location: http://www.onlinetnt.com/#/ordersuccess/".$order_id."");exit;
                    } else
                        $this->reply['place_order'] = ['status' => 'fail', 'msg' => 'Product not available.', 'product_detail' => $product_info];
//                }
            } else
                    $this->reply['place_order'] = ['status' => 'fail', 'msg' => 'User id not be null.'];
            } else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            if($r->coupon_code){
                DB::table('coupon_code')->where('code', $r->coupon_code)->update(['remaining_cnt' => DB::raw("remaining_cnt + 1")]);
            }

            $this->reply['place_order']=['status'=>'fail88','msg'=>$e->getMessage()];
            return response()->json($this->reply);
            DB::rollBack();
        }
    }
    
    
}