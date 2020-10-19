<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 6/14/2018
 * Time: 4:16 PM
 */

namespace App\Http\Controllers;


use App\Mail\BidOffer;
use App\Mail\BidWinner;
use App\Mail\BuyerBidOffer;
use App\Mail\LastBidBuyer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class BidController extends Controller
{
    function placeBid(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $last_bid=DB::table('auction_bid')->where('product_id',$r->product_id)->orderBy('id','desc')->first(['buyer_id','bid_price']);
                if (!empty($last_bid)){
                    if($last_bid->bid_price >= $r->bid_price){
                        $last_bid_price=$last_bid->bid_price + 1;
                        $this->reply['bid'] = ['status' => 'fail', 'msg' => "You have to bid at least $last_bid_price AED"];
                    }else {
                        $bid_data = ['buyer_id' => $r->buyer_id, 'seller_id' => $r->seller_id, 'product_id' => $r->product_id, 'bid_price' => $r->bid_price];
                        $save = DB::table('auction_bid')->insertGetId($bid_data);
                        if ($save) {
                            $seller_info = DB::table('users')->where('id', $r->seller_id)->first();
                            $buyer_info = DB::table('users')->where('id', $r->buyer_id)->first();

                            $product_info = DB::table('product')->where('id', $r->product_id)->first();
                            $product_info->photos = unserialize($product_info->photos);
                            $product_info->photos = $product_info->photos[0];
                            $product_info->shipment_type = unserialize($product_info->shipment_type);
                            $product_info->offer_price = $r->bid_price;
                            $product_info->qnt = '1';
                            //PRODUCT END DATE
                            $duration = $product_info->renew_duration;
                            $created_date = $product_info->approve_date;
                            $date = strtotime("+ $duration day", strtotime($created_date));
                            $last_date = date("Y-m-d h:m:i", $date);
                            $current_date = date("Y-m-d h:m:i");

                            $datetime1 = date_create($current_date);
                            $datetime2 = date_create($last_date);
                            $interval = date_diff($datetime1, $datetime2);
                            $days_left = $interval->format('%R%a days');

                            $hour = $interval->format('%h hours ');
                            $product_info->days_left = $days_left . ' ' . $hour;


                            $email_template = DB::table('email_template')->where('id', '17')->first();
                            Mail::to($seller_info->email)->send(new BidOffer($buyer_info, $product_info, $email_template));

                            //BUYER MAIL
                            $email_template = DB::table('email_template')->where('id', '22')->first();
                            Mail::to($buyer_info->email)->send(new BuyerBidOffer($seller_info, $product_info, $email_template));
                            //SEND MAIL TO LAST BID USERS
                            if (!empty($last_bid)) {
                                $last_buyer = DB::table('users')->where('id', $last_bid->buyer_id)->first(['email']);
                                $product_info->your_bid = $last_bid->bid_price;
                                $email_template_last = DB::table('email_template')->where('id', '18')->first();
                                Mail::to($last_buyer->email)->send(new LastBidBuyer($buyer_info, $product_info, $email_template_last));
                            }
                            DB::commit();
                            $this->reply['bid'] = ['status' => 'success', 'data' => $bid_data];
                        } else
                            $this->reply['bid'] = ['status' => 'fail', 'msg' => 'Something wrong happen,Please try again!'];
                    }
                }else {
                    $bid_data = ['buyer_id' => $r->buyer_id, 'seller_id' => $r->seller_id, 'product_id' => $r->product_id, 'bid_price' => $r->bid_price];
                    $save = DB::table('auction_bid')->insertGetId($bid_data);
                    if ($save) {
                        $seller_info = DB::table('users')->where('id', $r->seller_id)->first();
                        $buyer_info = DB::table('users')->where('id', $r->buyer_id)->first();

                        $product_info = DB::table('product')->where('id', $r->product_id)->first();
                        $product_info->photos = unserialize($product_info->photos);
                        $product_info->photos = $product_info->photos[0];
                        $product_info->shipment_type = unserialize($product_info->shipment_type);
                        $product_info->offer_price = $r->bid_price;
                        $product_info->qnt = '1';
                        //PRODUCT END DATE
                        $duration = $product_info->renew_duration;
                        $created_date = $product_info->approve_date;
                        $date = strtotime("+ $duration day", strtotime($created_date));
                        $last_date = date("Y-m-d h:m:i", $date);
                        $current_date = date("Y-m-d h:m:i");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);
                        $days_left = $interval->format('%R%a days');

                        $hour = $interval->format('%h hours ');
                        $product_info->days_left = $days_left . ' ' . $hour;


                        $email_template = DB::table('email_template')->where('id', '17')->first();
                        
                        Mail::to($seller_info->email)->send(new BidOffer($buyer_info, $product_info, $email_template));

                        //BUYER MAIL
                        $email_template = DB::table('email_template')->where('id', '22')->first();
                        
                        Mail::to($buyer_info->email)->send(new BuyerBidOffer($seller_info, $product_info, $email_template));
                        //SEND MAIL TO LAST BID USERS
                        if (!empty($last_bid)) {
                            $last_buyer = DB::table('users')->where('id', $last_bid->buyer_id)->first(['email']);
                            $product_info->your_bid = $last_bid->bid_price;
                            $email_template_last = DB::table('email_template')->where('id', '18')->first();
                            Mail::to($last_buyer->email)->send(new LastBidBuyer($buyer_info, $product_info, $email_template_last));
                        }
                        DB::commit();
                        $this->reply['bid'] = ['status' => 'success', 'data' => $bid_data];
                    } else
                        $this->reply['bid'] = ['status' => 'fail', 'msg' => 'Something wrong happen,Please try again!'];
                }
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(\Exception $e){
            DB::rollBack();
            echo $e->getMessage();
        }
    }

    function viewLastBid(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $last_bid=DB::table('auction_bid')->where('product_id',$r->product_id)->orderBy('id','desc')->first();
                if($last_bid){
                    DB::commit();
                    $count=DB::table('auction_bid')->where('product_id',$r->product_id)->count();
                    $this->reply['bid']=['status'=>'success','data'=>$last_bid,'count'=>$count];
                }else
                    $this->reply['bid']=['status'=>'Fail','msg'=>'Something wrong happen,Please try again!'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(\Exception $e){
            DB::rollBack();
            echo $e->getMessage();
        }
    }

    function viewBidHistory(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $count=array();
                $product_id=$r->product_id;

                $bids=DB::table('auction_bid as a')
                    ->join('users as u','u.id','=','a.buyer_id')
                    ->where('a.product_id',$product_id)
                    ->orderBy('a.id','desc')
                    ->get(['a.buyer_id','a.seller_id','a.product_id','a.bid_price','a.created_date',
                        'u.first_name','u.last_name','u.email','u.display_name']);

                if($bids){
                    $i = 0;
                    foreach ($bids as $bid){
                        $bids[$i]->created_date = date('d.m.Y H:i:s', strtotime($bid->created_date));
                        $feedback_count=DB::table('feedback')->where('receiver_id',$bid->buyer_id)->count();
                        $bid->feedback_cnt=$feedback_count;
                        $i++;
                    }
                    //BID COUNT
                    $count['bids_count']=DB::table('auction_bid')->where('product_id',$product_id)->count();
                    //BIDDER COUNT
                    $bider_count=DB::table('auction_bid')->where('product_id',$product_id)->groupBy('buyer_id')->get();
                    $count['bidder_count']=count($bider_count);
                    //TIME LEFT
                    $product=DB::table('product')->where('id',$product_id)->first(['duration','renew_duration','created_date','id','title','photos','product_sku','shipment_type','approve_date']);
                    $days_left="";
                    if($product){
                        $product->photos=unserialize($product->photos);
                        $product->shipment_type=unserialize($product->shipment_type);

                        $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                        $last_date=date("Y-m-d h:m:i", $date);
                        $current_date=date("Y-m-d h:m:i");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);
                        $days_left= $interval->format('%R%a days');
                        $hour= $interval->format('%h hours ');
                        $days_left=$days_left.' '.$hour;

                        $invert = $interval->invert;
                        if ($invert == "0")
                            $product->time = 'Started';
                        else
                            $product->time = 'End';
                    }
                    $count['time_left']=$days_left;
                    $count['duration']=$product->duration;


                    $this->reply['bid']=['status'=>'success','data'=>$bids,'count'=>$count,'product_info'=>$product];
                }else
                    $this->reply['bid']=['status'=>'fail','msg'=>'Something wrong happen,Please try again!'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(\Exception $e){
            echo $e->getMessage();
        }
    }

    function viewOwnBids(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                $bid_product=DB::table('auction_bid as a')
                            ->join('product as p','p.id','=','a.product_id')
                            ->join('users as u','u.id','=','a.seller_id')
                            ->where(['a.buyer_id'=>$r->user_id,'a.winner_id'=>'0'])
                            ->groupBy('a.product_id')
                            ->get(['a.buyer_id','a.seller_id','a.product_id','a.created_date',
                                'u.display_name as seller_name',
                                'p.title','p.product_sku','p.photos','p.price','p.duration','p.renew_duration','p.created_date as product_created_date','p.shipment_type','p.approve_date']);
                if($bid_product){
                    foreach ($bid_product as $bid){
                        //TIME LEFT
                        $date=strtotime("+$bid->renew_duration day",strtotime($bid->approve_date));
                        $last_date=date('Y-m-d H:i:s',$date);
                        $current_date=date('Y-m-d H:i:s');

                        $last_date=date_create($last_date);
                        $current_date=date_create($current_date);

                        $interval=date_diff($current_date,$last_date);
                        $days_left= $interval->format('%R%a days');
                        $hour= $interval->format('%h hours ');
                        $bid->days_left=$days_left.' '.$hour;

                        $invert=$interval->invert;
                        if($invert=="0"){
                            $bid->time='Started';
                        }
                        else{
                            $bid->time='End';
                        }

                        //SELLER FEEDBACK COUNT
                        $positiveAvg=DB::table('feedback')->where('receiver_id',$bid->seller_id)->first([DB::raw("SUM(IF(feedback_type='Positive', '1', '0'))/COUNT(id) as avg ,COUNT(id) as count")]);
                        $bid->feedback_avg=$positiveAvg->avg*100;
                        $bid->feedback_cnt=$positiveAvg->count;

                        //BID COUNT
                        $bid->bid_cnt=DB::table('auction_bid')->where('product_id',$bid->product_id)->count();

                        //MY MAX BID
                        $my_max_bid=DB::table('auction_bid')->where(['buyer_id'=>$r->user_id,'product_id'=>$bid->product_id])->orderBy('id','desc')->first(['bid_price']);
                        $bid->my_max_bid=$my_max_bid->bid_price;

                        //MAX BID
                        $max_bid=DB::table('auction_bid')->where('product_id',$bid->product_id)->orderBy('id','desc')->first(['bid_price']);
                        $bid->max_bid=$max_bid->bid_price;


                        $bid->photos=unserialize($bid->photos);
                        $bid->shipment_type=unserialize($bid->shipment_type);
                    }
                    $this->reply['bid']=['status'=>'success','data'=>$bid_product];
                }else
                    $this->reply['bid']=['status'=>'fail','msg'=>'Something wrong happen,Please try again.'];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(\Exception $e){
            echo $e->getMessage();
        }
    }

    function viewWinningBids(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                $bid_product=DB::table('auction_bid as a')
                    ->join('product as p','p.id','=','a.product_id')
                    ->join('users as u','u.id','=','a.seller_id')
                    ->where(['a.buyer_id'=>$r->user_id,'a.winner_id'=>$r->user_id])
                    ->groupBy('a.product_id')
                    ->get(['a.buyer_id','a.seller_id','a.product_id','a.created_date',
                        'u.display_name as seller_name',
                        'p.title','p.product_sku','p.photos','p.price','p.duration','p.renew_duration','p.created_date as product_created_date','p.shipment_type','p.approve_date']);
                if($bid_product){
                    foreach ($bid_product as $bid){
                        //TIME LEFT
                        $date=strtotime("+$bid->renew_duration day",strtotime($bid->approve_date));
                        $last_date=date('Y-m-d H:i:s',$date);
                        $current_date=date('Y-m-d H:i:s');

                        $last_date=date_create($last_date);
                        $current_date=date_create($current_date);

                        $interval=date_diff($current_date,$last_date);
                        $days_left= $interval->format('%R%a days');
                        $hour= $interval->format('%h hours ');
                        $bid->days_left=$days_left.' '.$hour;
                        $invert=$interval->invert;
                        if($invert=="0"){
                            $bid->time='Started';
                        }
                        else{
                            $bid->time='End';
                        }

                        $bid_status=DB::table('order')->where(['buyer_id'=>$r->user_id,'product_id'=>$bid->product_id])->exists();
                        if($bid_status)
                            $bid->bid_status="Done";
                        else
                            $bid->bid_status="Purchase";

                        //SELLER FEEDBACK COUNT
                        $positiveAvg=DB::table('feedback')->where('receiver_id',$bid->seller_id)->first([DB::raw("SUM(IF(feedback_type='Positive', '1', '0'))/COUNT(id) as avg ,COUNT(id) as count")]);
                        $bid->feedback_avg=$positiveAvg->avg*100;
                        $bid->feedback_cnt=$positiveAvg->count;

                        //BID COUNT
                        $bid->bid_cnt=DB::table('auction_bid')->where('product_id',$bid->product_id)->count();

                        //MY MAX BID
                        $my_max_bid=DB::table('auction_bid')->where(['buyer_id'=>$r->user_id,'product_id'=>$bid->product_id])->orderBy('id','desc')->first(['bid_price']);
                        $bid->my_max_bid=$my_max_bid->bid_price;

                        //MAX BID
                        $max_bid=DB::table('auction_bid')->where('product_id',$bid->product_id)->orderBy('id','desc')->first(['bid_price']);
                        $bid->max_bid=$max_bid->bid_price;


                        $bid->photos=unserialize($bid->photos);
                        $bid->shipment_type=unserialize($bid->shipment_type);
                    }
                    $this->reply['bid']=['status'=>'success','data'=>$bid_product];
                }else
                    $this->reply['bid']=['status'=>'fail','msg'=>'Something wrong happen,Please try again.'];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(\Exception $e){
            echo $e->getMessage();
        }
    }

    function viewNotWinningBids(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                $bid_product=DB::table('auction_bid as a')
                    ->join('product as p','p.id','=','a.product_id')
                    ->join('users as u','u.id','=','a.seller_id')
                    ->where(['a.buyer_id'=>$r->user_id])
                    ->where('a.winner_id','!=',$r->user_id)
                    ->where('a.winner_id','!=','')
                    ->groupBy('a.product_id')
                    ->get(['a.buyer_id','a.seller_id','a.product_id','a.created_date',
                        'u.display_name as seller_name',
                        'p.title','p.product_sku','p.photos','p.price','p.duration','p.renew_duration','p.created_date as product_created_date','p.shipment_type','p.approve_date']);
                if($bid_product){
                    foreach ($bid_product as $bid){
                        //TIME LEFT
                        $date=strtotime("+$bid->renew_duration day",strtotime($bid->approve_date));
                        $last_date=date('Y-m-d H:i:s',$date);
                        $current_date=date('Y-m-d H:i:s');

                        $last_date=date_create($last_date);
                        $current_date=date_create($current_date);

                        $interval=date_diff($current_date,$last_date);
                        $days_left= $interval->format('%R%a days');
                        $hour= $interval->format('%h hours ');
                        $bid->days_left=$days_left.' '.$hour;
                        $invert=$interval->invert;
                        if($invert=="0"){
                            $bid->time='Started';
                        }
                        else{
                            $bid->time='End';
                        }

                        //SELLER FEEDBACK COUNT
                        $positiveAvg=DB::table('feedback')->where('receiver_id',$bid->seller_id)->first([DB::raw("SUM(IF(feedback_type='Positive', '1', '0'))/COUNT(id) as avg ,COUNT(id) as count")]);
                        $bid->feedback_avg=$positiveAvg->avg*100;
                        $bid->feedback_cnt=$positiveAvg->count;

                        //BID COUNT
                        $bid->bid_cnt=DB::table('auction_bid')->where('product_id',$bid->product_id)->count();

                        //MY MAX BID
                        $my_max_bid=DB::table('auction_bid')->where(['buyer_id'=>$r->user_id,'product_id'=>$bid->product_id])->orderBy('id','desc')->first(['bid_price']);
                        $bid->my_max_bid=$my_max_bid->bid_price;

                        //MAX BID
                        $max_bid=DB::table('auction_bid')->where('product_id',$bid->product_id)->orderBy('id','desc')->first(['bid_price']);
                        $bid->max_bid=$max_bid->bid_price;

                        $bid->photos=unserialize($bid->photos);
                        $bid->shipment_type=unserialize($bid->shipment_type);
                    }
                    $this->reply['bid']=['status'=>'success','data'=>$bid_product];
                }else
                    $this->reply['bid']=['status'=>'fail','msg'=>'Something wrong happen,Please try again.'];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(\Exception $e){
            echo $e->getMessage();
        }
    }

    function declareWinner(Request $r){
        try{
                $auction_products=DB::table('product as p')
                    ->where(['p.selling_type'=>'Auction style','p.status'=>'1'])
                    ->get();

                $p_id=array();
                foreach($auction_products as $product){
                    $date = strtotime("+ $product->renew_duration day", strtotime($product->approve_date));
                    $last_date=date("Y-m-d h:m:i", $date);
                    $current_date=date("Y-m-d h:m:i");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    if($datetime1 > $datetime2)
                        $p_id[]=$product->id;
                    }

                    if(count($p_id)){
                        $max_bid_ids=DB::table('auction_bid')
                            ->whereIn('product_id',$p_id)
                            ->select(DB::raw("max(id) as id"))
                            ->groupBy('product_id')
                            ->get();

                        foreach($max_bid_ids as $max){
                            $max_bid=DB::table('auction_bid')->where('id',$max->id)->first();
                            $winner=DB::table('users')->where('id',$max_bid->buyer_id)->first();

                            $product_info=DB::table('product')->where('id',$max_bid->product_id)->first();
                            $product_info->photos=unserialize($product_info->photos);
                            $product_info->photos=$product_info->photos[0];
                            $product_info->shipment_type=unserialize($product_info->shipment_type);
                            $product_info->max_bid=$max_bid->bid_price;

                            /* $link = action( 'CheckoutController@checkOutInfo',  [ 'product_id' => $max_bid->product_id,
                                    'quantity' => '1' ,'specification'=>'','user_id'=>$max_bid->buyer_id] );*/
                            $link=config('app.frontend_url')."ReviewOrder/product_id=$max_bid->product_id&quantity'='1&specification=&user_id=$max_bid->buyer_id";
                           //$link = file_get_contents('http://tinyurl.com/api-create.php?url='.$link);
                            $email_template=DB::table('email_template')->where('id','19')->first();
                            Mail::to($winner->email)->send(new BidWinner($link,$product_info,$email_template));
                            //Update product status
                            DB::table('product')->where('id',$max_bid->product_id)->update(['status'=>'3','updated_date'=>date('Y-m-d H:i:s')]);
                            //Update winner id
                            DB::table('auction_bid')->where('product_id',$max_bid->product_id)->update(['winner_id'=>$winner->id,'updated_date'=>date('Y-m-d H:i:s')]);
                            $this->reply['winner']=['status'=>'success','msg'=>'Winner declare successful.'];
                        }
                    }else
                        $this->reply['winner']=['status'=>'fail','msg'=>'No product to end.'];
                return response()->json($this->reply);


        }catch (\Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }
}