<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 6/16/2018
 * Time: 11:21 AM
 */

namespace App\Http\Controllers;


use App\Mail\MakeOffer;
use App\Mail\OfferStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class MakeOfferController extends Controller
{
    function makeOffer(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $count=DB::table('make_offer')->where(['buyer_id'=>$r->buyer_id,'seller_id'=>$r->seller_id,'product_id'=>$r->product_id])->count();
                if($count >= 33)
                    $this->reply['bid']=['status'=>'fail','msg'=>'<i  class="fa" style="font-size:48px !important; color:#c27410 !important;">&#xf071;</i> Dear Customer, You can only make a maximum of 3 offers for this item, unfortunately
you have made more than three offers on this product and no more offers can be
accepted. Please pay the asking price to continue with the purchase <i  class="fa fai" style="font-size:48px !important; color:#c27410 !important;">&#xf071;</i> '];
                else{
                    $product=DB::table('product')->where('id',$r->product_id)->first();
                    //echo $product->min_price;
                    //echo $product->max_price;
                   
                    if($r->offer_price > $product->min_price){
                        //echo "djfbjkdsbf";exit;
                        $make_offer=['buyer_id'=>$r->buyer_id,'quantity'=>$r->quantity,'seller_id'=>$r->seller_id,'product_id'=>$r->product_id,'offer_price'=>$r->offer_price];
                        $save=DB::table('make_offer')->insertGetId($make_offer);
                        if($save){
                            DB::commit();
                            $seller_info=DB::table('users')->where('id',$r->seller_id)->first();
                            $buyer_info=DB::table('users')->where('id',$r->buyer_id)->first();

                            $product_info=DB::table('product')->where('id',$r->product_id)->first();
                            $product_info->photos=unserialize($product_info->photos);
                            $product_info->photos=$product_info->photos[0];
                            $product_info->shipment_type=unserialize($product_info->shipment_type);
                            $product_info->offer_price=$r->offer_price;
                             //$product_info->product_title=
                            $product_info->qnt=$r->quantity;
                            $email_template=DB::table('email_template')->where('id','20')->first();
                            if($r->offer_price > $product->max_price) {
                                
                             
                            Mail::to($seller_info->email)->send(new MakeOffer($product_info,$buyer_info,$email_template,$seller_info,$r));   
                                
                                
                                
                                $update_status=DB::table('make_offer')->where(['id'=>$save])->update(['offer_status'=>"Accept",'updated_date'=>date('Y-m-d H:i:s')]);
                                if ($update_status) {
                                    $product->photos=unserialize($product->photos);
                                    $product->photos=$product->photos[0];
                                    $product->shipment_type=unserialize($product->shipment_type);
                                    $link = config('app.frontend_url') . "#/ReviewOrder/product_id=$r->product_id&quantity=$r->quantity&specification=&user_id=$r->buyer_id&price=$r->offer_price";
                                   // $link = config('app.frontend_url')."seller-my-account/PurchaseHistory";
                                    $product->link = $link;
                                    $product->offer_price=$r->offer_price;
                                    $product->qnt=$r->quantity;
                                    $product->offer_status="Accept";
                                    $buyer_info=DB::table('users')->where('id',$r->buyer_id)->first();
                                    Mail::to($buyer_info->email)->send(new OfferStatus($product,$buyer_info,$link));
                                }
                            }else{
                                Mail::to($seller_info->email)->send(new MakeOffer($product_info,$buyer_info,$email_template,$seller_info,$r));   
                                //echo "dkjidf";exit;
                            
                            }
                            $this->reply['bid']=['status'=>'success','msg'=>"Offer submitted successfully."];
                        }  else
                            $this->reply['bid']=['status'=>'Fail','msg'=>'Something wrong happen,Please try again!'];
                    }else{
                        //BUYER INFO
                         $link = config('app.frontend_url') . "#/ReviewOrder/product_id=$r->product_id&quantity=$r->quantity&specification=&user_id=$r->buyer_id&price=$r->offer_price";
                                 
                        $product->photos=unserialize($product->photos);
                        $product->photos=$product->photos[0];
                        $product->shipment_type=unserialize($product->shipment_type);
                        $product->offer_price=$r->offer_price;
                        $product->qnt=$r->quantity;
                        $product->offer_status="Decline";
                        $buyer_info=DB::table('users')->where('id',$r->buyer_id)->first();
                        Mail::to($buyer_info->email)->send(new OfferStatus($product,$buyer_info,$link));
                        $this->reply['bid']=['status'=>'success','msg'=>"Offer submitted successfully."];
                    }
                }

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(\Exception $e){
            DB::rollBack();
            echo $e->getMessage();
        }
    }

    function offerStatus(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $update_status=DB::table('make_offer')->where(['id'=>$r->offer_id])->update(['offer_status'=>$r->offer_status,'updated_date'=>date('Y-m-d H:i:s')]);
                if($update_status){
                        $offer_price=DB::table('make_offer')->where('id',$r->offer_id)->first();
                        //PRODUCT INFO
                        $product_info=DB::table('product')->where('id',$offer_price->product_id)->first();
                        $product_info->photos=unserialize($product_info->photos);
                        $product_info->photos=$product_info->photos[0];
                        $product_info->shipment_type=unserialize($product_info->shipment_type);
                        $product_info->offer_price=$offer_price->offer_price;
                        $product_info->qnt=$offer_price->quantity;

                        if($r->offer_status=="Accept"){
                            $link=config('app.frontend_url')."ReviewOrder/product_id=$offer_price->product_id&quantity=$offer_price->quantity&specification=&user_id=$offer_price->buyer_id&price=$offer_price->offer_price";
                            $product_info->link=$link;
                            $product_info->offer_status="Accept";
                        }
                        else
                            $product_info->offer_status="Decline";
                        //BUYER INFO
                        $buyer_info=DB::table('users')->where('id',$offer_price->buyer_id)->first();
                        Mail::to($buyer_info->email)->send(new OfferStatus($product_info));

                    DB::commit();
                    $this->reply['offer_status']=['status'=>'success','msg'=>'Offer status change successfully.'];
                }else
                    $this->reply['offer_status']=['status'=>'fail','msg'=>'Something wrong happen,please try again.'];
            }else
                $this->reply['auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function AutoDeclineAfterTwoDays(Request $r){
        try{
                DB::beginTransaction();
                $offers=DB::table('make_offer')->where(['offer_status'=>'Pending'])->whereRaw('created_date <= DATE_SUB(NOW(), INTERVAL 2 DAY)')->get();
                foreach ($offers as $offer){
                    $update_status=DB::table('make_offer')->where(['id'=>$offer->id])->update(['offer_status'=>'Decline','updated_date'=>date('Y-m-d H:i:s')]);
                    if($update_status){
                      //  $offer_price=DB::table('make_offer')->where('id',$offer->id)->first();
                        //PRODUCT INFO
                        $product_info=DB::table('product')->where('id',$offer->product_id)->first();
                        $product_info->photos=unserialize($product_info->photos);
                        $product_info->photos=$product_info->photos[0];
                        $product_info->shipment_type=unserialize($product_info->shipment_type);
                        $product_info->offer_price=$offer->offer_price;
                        $product_info->qnt=$offer->quantity;

                        $product_info->offer_status="Decline";
                        //BUYER INFO
                        $buyer_info=DB::table('users')->where('id',$offer->buyer_id)->first();
                        //BUYER MAIL
                        Mail::to($buyer_info->email)->send(new OfferStatus($product_info));
                        //SELLER MAIl
                        $seller_info=DB::table('users')->where('id',$offer->seller_id)->first(['email']);
                       // Mail::to($seller_info->email)->send(new MakeOffer($product_info,$buyer_info));

                        DB::commit();
                        //  $this->reply['offer_status']=['status'=>'success','msg'=>'Offer status change successfully.'];
                    }
              }
                $this->reply['offer_status']=['status'=>'success','msg'=>'Offer status decline successfully.'];

            return response()->json($this->reply);
        }catch(\Exception $e){
            echo $e->getMessage();
        }
    }

    function viewMyOffers(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                $offer_product=DB::table('make_offer as a')
                    ->join('product as p','p.id','=','a.product_id')
                    ->join('users as u','u.id','=','a.seller_id')
                    ->where(['a.buyer_id'=>$r->user_id])
                    ->get(['a.id','a.buyer_id','a.seller_id','a.product_id','a.offer_price','a.offer_status','a.quantity',
                        'u.display_name as seller_name',
                        'p.title','p.product_sku','p.photos','p.price','p.duration','p.renew_duration','p.created_date as product_created_date','p.shipment_type','p.approve_date']);

                if($offer_product){
                    foreach ($offer_product as $offer){
                        //TIME LEFT
                        $date=strtotime("+$offer->renew_duration day",strtotime($offer->approve_date));
                        $last_date=date('Y-m-d H:i:s',$date);
                        $current_date=date('Y-m-d H:i:s');

                        $last_date=date_create($last_date);
                        $current_date=date_create($current_date);

                        $interval=date_diff($current_date,$last_date);
                        $days_left= $interval->format('%R%a days');
                        $hour= $interval->format('%h hours ');
                        $offer->days_left=$days_left.' '.$hour;

                        $invert = $interval->invert;
                        if ($invert == "0")
                            $offer->time = 'Started';
                        else
                            $offer->time = 'End';

                        //SELLER FEEDBACK COUNT
                        $positiveAvg=DB::table('feedback')->where('receiver_id',$offer->seller_id)->first([DB::raw("SUM(IF(feedback_type='Positive', '1', '0'))/COUNT(id) as avg ,COUNT(id) as count")]);
                        $offer->feedback_avg=$positiveAvg->avg*100;
                        $offer->feedback_cnt=$positiveAvg->count;

                        $offer->photos=unserialize($offer->photos);
                        $offer->shipment_type=unserialize($offer->shipment_type);
                    }
                    $this->reply['offers']=['status'=>'success','data'=>$offer_product];
                }else
                    $this->reply['offers']=['status'=>'fail','msg'=>'Something wrong happen,Please try again.'];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];
            return response()->json($this->reply);
        }catch(\Exception $e){
            echo $e->getMessage();
        }
    }

    function sellerViewOffers(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
            $seller_offer=DB::table('make_offer as m')
                ->join('users as u','u.id','=','m.buyer_id')
                ->where('m.product_id',$r->product_id)
                ->get(['m.id as offer_id','m.buyer_id','m.product_id','m.seller_id','m.offer_price','m.quantity','m.offer_status',
                    'u.first_name','u.last_name','u.display_name','u.profile_pic']);
            if($seller_offer)
                $this->reply['offers']=['status'=>'success','data'=>$seller_offer];
            else
                $this->reply['offers']=['status'=>'fail','msg'=>'Something wrong happen,please try again'];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
        }
    }
}