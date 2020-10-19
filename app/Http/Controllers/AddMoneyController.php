<?php
namespace App\Http\Controllers;
use App\Http\Requests;
use Illuminate\Http\Request;
use Validator;
use URL;
use Session;
use Redirect;
use Input;
/** All Paypal Details class **/
use PayPal\Rest\ApiContext;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\RedirectUrls;
use PayPal\Api\ExecutePayment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\Transaction;
class AddMoneyController extends Controller
{
    private $_api_context;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       // parent::__construct();
        
        /** setup PayPal api context **/
        $paypal_conf = \Config::get('paypal');
		//print_r($paypal_conf);exit;
        $this->_api_context = new ApiContext(new OAuthTokenCredential($paypal_conf['client_id'], $paypal_conf['secret']));
        $this->_api_context->setConfig($paypal_conf['settings']);
    }
    /**
     * Show the application paywith paypalpage.
     *
     * @return \Illuminate\Http\Response
     */
//    public function payWithPaypal()
//    {
//        return view('paywithpaypal');
//    }
    public function getPaymentResult()
    {
//        echo 'dftrthgjfgj2234234';exit;
        return view('paypalresponse');
    }
    public function payWithPaypal($amount,$checkoutInfo)
    {
//        echo base64_decode(urldecode($amount)).'<br>';
//        echo base64_decode(urldecode($checkoutInfo));
//        exit;
        return view('paywithpaypal')->with('amount',base64_decode(urldecode($amount)))->with('checkoutInfo',base64_decode(urldecode($checkoutInfo)));
    }
    /**
     * Store a details of payment with paypal.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function postPaymentWithpaypal(Request $request)
    {
//        echo $request;
//        echo $request->get('amount');
//        echo $sdfdsf=$request->get('checkoutInfo');
//        exit;
        $payer = new Payer();
        $payer->setPaymentMethod('paypal');
        $item_1 = new Item();
        $item_1->setName('Item 1') /** item name **/
            ->setCurrency('USD')
            ->setQuantity(1)
            ->setPrice($request->get('amount')); /** unit price **/
        $item_list = new ItemList();
        $item_list->setItems(array($item_1));
        $amount = new Amount();
        $amount->setCurrency('USD')
            ->setTotal($request->get('amount'));
        $transaction = new Transaction();
        $transaction->setAmount($amount)
            ->setItemList($item_list)
            ->setDescription('Your transaction description');
        $redirect_urls = new RedirectUrls();
        $redirect_urls->setReturnUrl(URL::route('payment.status')) /** Specify return URL **/
            ->setCancelUrl(URL::route('payment.status'));
//        $redirect_urls->setReturnUrl(URL::route('payment.status',['amount'=>$request->get('amount'),'checkoutInfo'=>$request->get('checkoutInfo')])) /** Specify return URL **/
//            ->setCancelUrl(URL::route('payment.status',['amount'=>$request->get('amount'),'checkoutInfo'=>$request->get('checkoutInfo')]));
        $payment = new Payment();
        $payment->setIntent('Sale')
            ->setPayer($payer)
            ->setRedirectUrls($redirect_urls)
            ->setTransactions(array($transaction));
            /** dd($payment->create($this->_api_context));exit; **/
        try {
            $payment->create($this->_api_context);
        } catch (\PayPal\Exception\PPConnectionException $ex) {
            if (\Config::get('app.debug')) {
                \Session::put('error','Connection timeout');
                return Redirect::route('addmoney.paywithpaypal');
                /** echo "Exception: " . $ex->getMessage() . PHP_EOL; **/
                /** $err_data = json_decode($ex->getData(), true); **/
                /** exit; **/
            } else {
                \Session::put('error','Some error occur, sorry for inconvenient');
                return Redirect::route('addmoney.paywithpaypal');
                /** die('Some error occur, sorry for inconvenient'); **/
            }
        }
        foreach($payment->getLinks() as $link) {
            if($link->getRel() == 'approval_url') {
                $redirect_url = $link->getHref();
                break;
            }
        }
        /** add payment ID to session **/
        Session::put('paypal_payment_id', $payment->getId());
        Session::put('checkoutInfo', $request->get('checkoutInfo'));
        
        if(isset($redirect_url)) {
            /** redirect to paypal **/
            return Redirect::away($redirect_url);
        }
        \Session::put('error','Unknown error occurred');
        return Redirect::route('addmoney.paywithpaypal');
    }
    public function getPaymentStatus()
    {
//        echo $redirect_url;exit;
        
//        $checkoutInfo = json_decode(Session::get('checkoutInfo'));
//        print_r($checkoutInfo);
//        exit;
        /** Get the payment ID before session clear **/
        $payment_id = Session::get('paypal_payment_id');
        /** clear the session payment ID **/
        Session::forget('paypal_payment_id');
		$payer_id=$_GET['PayerID'];
		$token=$_GET['token'];
       /*  if (empty(Input::get('PayerID')) || empty(Input::get('token'))) {
            \Session::put('error','Payment failed');
            return Redirect::route('addmoney.paywithpaypal');
        } */
		if (empty($payer_id || $token)) {
            \Session::put('error','Payment failed');
            return Redirect::route('addmoney.paywithpaypal');
        }
        $payment = Payment::get($payment_id, $this->_api_context);
        /** PaymentExecution object includes information necessary **/
        /** to execute a PayPal account payment. **/
        /** The payer_id is added to the request query parameters **/
        /** when the user is redirected from paypal back to your site **/
        $execution = new PaymentExecution();
        $execution->setPayerId($payer_id);
        /**Execute the payment **/
        $result = $payment->execute($execution, $this->_api_context);
        /** dd($result);exit; /** DEBUG RESULT, remove it later **/
        if ($result->getState() == 'approved') { 
            $checkoutInfo = Session::get('checkoutInfo');
            /** it's all right **/
            /** Here Write your database logic like that insert record or value in database if you want **/
            \Session::put('success','Payment success');
//            alert('Payment success');
            return Redirect::route('payment.result');
//            return Redirect::route('addmoney.paywithpaypal');
        }
        \Session::put('error','Payment failed');
        return Redirect::route('addmoney.paywithpaypal');
    }
    
    
    public function placeOrder(Request $r){
        echo $r;
//        exit;
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            print_r($authDB);
            echo '<br>';
            echo Hash::check($auth,$authDB->auth);
            echo '<br>';
            echo $auth;
            exit;
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
                        'c.specification', 'c.quantity', 'p.price', 'p.discount', 'p.user_id as seller_id', 'p.title', 'p.photos', 'p.quantity as product_quantity', 'p.shipment_type']);
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
                        ->first(['id', 'title', 'photos', 'discount', 'quantity','sq', 'price', 'delivery_days', 'user_id as seller_id', 'photos', 'shipment_type']);

//                    print_r($product_info);
                    
                    if ($product_info->quantity >= $r->quantity) {
                        $specification = $r->specification;

                        $buy_size = $specification['size'];
						
                        $specification = serialize($specification);

                        $payment_opt=($r->order_status=='Completed'?'1':'2');
                        $place_order = ['order_id' => $order_id, 'product_id' => $product_info->id, 'buyer_id' => $r->user_id, 'shipping_id' => $r->shipping_id,
                            'specification' => $specification, 'quantity' => $r->quantity, 'seller_id' => $r->seller_id, 'status' => $r->order_status,
                            'payment_opt'=>$payment_opt,'order_status'=>'Processing'];
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
                        echo $this->reply['place_order'] = ['status' => 'success', 'msg' => 'order place successfully', 'order_id' => $order_id];
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
    
  }