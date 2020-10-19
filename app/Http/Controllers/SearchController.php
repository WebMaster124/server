<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 4/27/2018
 * Time: 10:55 AM
 */

namespace App\Http\Controllers;


use function GuzzleHttp\Psr7\str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Exception;

class SearchController extends Controller
{
    function advanceSearch(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $category=array();
                $per_page=(isset($r->per_page)?$r->per_page:50);

                $products=DB::table('product')->where('status','1')->get();

                if($r->end_product=='REMOVE_END_PRODUCT'){
                    foreach ($products as $product){
                        $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                        $last_date=date("Y-m-d h:i:s", $date);
                        $current_date=date("Y-m-d h:i:s");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);

                        $invert=$interval->invert;
                        if($invert=="1"){
                            $p_id[]=$product->id;
                        }
                    }
                }else
                    $p_id=array();


                $qry=DB::table('product as p')->where('p.status','=','1')->whereNotIn('id',$p_id);
                //Check and Search title and description
                if($r->keyword){
                    $qry=$qry->where(function ($q) use ($r){
                        $q->orWhere('p.title','like',"%$r->keyword%");
                        $q->orWhere('p.description','like',"%$r->keyword%");
                    });
                    /*$qry=$qry->orWhere(function ($q) use ($r){

                    });*/
                }

                //Check and Search item is sold or not
                // Check and Search time is end or not
                if(($r->sold=="true") OR ($r->completed=='true')){
                    $product_data=DB::table('product')->where('status','=','1')->get();
                    $p_id=array();
                    foreach ($product_data as $product){
                        $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                        $last_date=date("Y-m-d h:i:s", $date);
                        $current_date=date("Y-m-d h:i:s");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);

                        $invert=$interval->invert;
                        if($invert=="1"){
                            $p_id[]=$product->id;
                        }
                    }
                    if($r->sold=="true")
                         $qry=$qry->where('p.quantity','<=','0');
                    if($r->completed=='true')
                         $qry=$qry->whereIn('p.id',$p_id);
                }
                //Check and Search category
                if($r->category_id){
                    $category=DB::table('category')->where('parent_id',$r->category_id)->get(['id','parent_id','category_name','category_image','menu_type']);
                    $cat_id=array($r->category_id);
                    foreach ($category as $id){
                        $cat_id[]=$id->id;
                    }
                    $qry=$qry->whereIn('p.category_id',$cat_id);
                }
                //Check and Search max and min price
                if(($r->min_price) AND ($r->max_price))
                    $qry=$qry->whereBetween('p.price',[$r->min_price,$r->max_price]);
                //Check and Search product selling formate
                if($r->buy_formats)
                    $qry=$qry->where('p.selling_type',$r->buy_formats);
                //Check and Search product condition
                if($r->item_condition)
                    $qry=$qry->where('p.p_condition',$r->item_condition);
                //Check and Search Product rating
                if($r->product_rating){
                    $products_rating=DB::table('product as p1')
                        ->join('product_rate as f','f.product_id','=','p1.id')
                        ->groupBy('f.product_id')
                        ->get(['p1.id',DB::raw("ROUND(AVG(tbl_f.rate)) as avg")]);
                    $product_id=array();
                    foreach ($products_rating as $id){
                        if($r->product_rating <= $id->avg)
                            $product_id[]=$id->id;
                    }
                    $qry=$qry->whereIn('p.id',$product_id);
                }
                //Check and Search seller nationality
                if($r->nationality){
                    $users=DB::table('users')->where('natinality',$r->nationality)->get(['id']);
                    $user_id=array();
                    foreach ($users as $user)
                        $user_id[]=$user->id;
                    $qry=$qry->whereIn('p.user_id',$user_id);
                }

                //SEARCH BY SELLER NAME
                if($r->seller_name){
                    $users=DB::table('users')->where('display_name','like',"%$r->seller_name%")->get(['id']);
                    $user_id=array();
                    foreach ($users as $user){
                        $user_id[]=$user->id;
                    }
                    $seller_product=DB::table('product')->whereIn('user_id',$user_id)->get(['id']);
                    foreach ($seller_product as $product)
                        $product_id[]=$product->id;

                    $qry=$qry->whereIn('p.id',$product_id);
                }

                //Payment Type
                if($r->payment_opt){
                    $product_id=array();
                    foreach ($products as $product){
                        $payment=unserialize($product->payment_opt);
                        if(in_array($r->payment_opt,$payment))
                            $product_id[]=$product->id;
                    }
                    $qry=$qry->whereIn('p.id',$product_id);
                }
                //Shipment Options
                if($r->shipping_opt){
                    $product_id=array();
                    foreach ($products as $product){
                        $shipment_type=unserialize($product->shipment_type);
                        if(in_array($r->shipping_opt,$shipment_type))
                            $product_id[]=$product->id;
                    }
                    $qry=$qry->whereIn('p.id',$product_id);
                }
                //ITEM LOCATION
                if($r->item_location)
                    $qry=$qry->where('p.product_address',$r->item_location);
                //NUMBERS OF BIDS
                if(($r->min_bid_number) AND ($r->max_bid_number)){
                    $product_id=array();
                    foreach ($products as $product){
                        if($product->selling_type=='Auction style'){
                            $count=DB::table('auction_bid')->where('product_id',$product->id)->count();
                            if(($count<=$r->max_bid_number) AND ($count>=$r->min_bid_number) ){
                                $product_id[]=$product->id;
                            }
                        }
                    }
                    $qry=$qry->whereIn('p.id',$product_id);
                }
                if(($r->hours)){
                    $product_id=array();
                    foreach ($products as $p){
                        $duration=  $p->renew_duration;
                        $created_date=$p->approve_date;
                        $date = strtotime("+ $duration day", strtotime($created_date));
                        $last_date = date("Y-m-d h:i:s", $date);
                        $current_date = date("Y-m-d h:i:s");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);
                        $days_left = $interval->format('%R%a');

                        $days_left=substr($days_left, 1);
                        $hours_left= $days_left*24;
                        if($r->listing_options=='0' ){
                            if($hours_left<=$r->hours){
                                $invert = $interval->invert;
                                if ($invert == "0")
                                    $product_id[]=$p->id;
                            }
                        }
                        if($r->listing_options == '1') {
                            if($hours_left>=$r->hours){
                                $invert = $interval->invert;
                                if ($invert == "0")
                                    $product_id[]=$p->id;
                            }
                        }
                    }
                    $qry=$qry->whereIn('p.id',$product_id);
                }
                $products=$qry->paginate($per_page);
                if($products){
                        $i=0;
                        foreach ($products as $product){

                            $products[$i]->description=preg_replace('!\\r?\\n!', " ",$product->description);
                            $products[$i]->condition_description=preg_replace('!\\r?\\n!', " ",$product->condition_description);

                            $products[$i]->shipment_type=unserialize($product->shipment_type);
                            $products[$i]->payment_opt=unserialize($product->payment_opt);

                            $product_avg=$this->ProductAvg($product->id);
                            $product->product_avg=$product_avg[0];
                            $product->product_rate_cnt=$product_avg[1];

                            $product_image=unserialize($product->photos);
                            $products[$i]->photos=$product_image;

                            $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                            $last_date=date("Y-m-d h:i:s", $date);
                            $current_date=date("Y-m-d h:i:s");

                            $datetime1 = date_create($current_date);
                            $datetime2 = date_create($last_date);
                            $interval = date_diff($datetime1, $datetime2);
                            $days_left= $interval->format('%R%a days');

                            $hour= $interval->format('%h hours ');
                            $products[$i]->days_left=$days_left.' '.$hour;

                            $days=substr($days_left, 1,2);
                            $product->endsoon=trim($days);

                            $invert=$interval->invert;

                            //IF SELLING STYLE AUCTION
                            if($product->selling_type=="Auction style"){
                                $last_bid=DB::table('auction_bid')->where('product_id',$product->id)->orderBy('id','desc')->first();
                               if($last_bid)
                                    $product->last_bid=$last_bid->bid_price;
                               else
                                   $product->last_bid=$product->min_price;
                            }else
                                $product->last_bid="0";

                            if($invert=="0")
                                $products[$i]->time='Started';
                            else
                                $products[$i]->time='End';

                            $i++;
                            unset($product->specification);

                        }
                        if($r->product_rating){
                            $products=$products->toArray();
                            array_multisort( array_column($products['data'], "product_avg"), SORT_ASC, $products['data']);
                        }
                    $this->reply=['status'=>'success','data'=>$products,'sub_category'=>$category];
                }
                else
                    $this->reply=['status'=>'fail','msg'=>'Something wrong happen'];
            }
            else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function homeSearch(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $category=array();

                $products=DB::table('product')->where('status','1')->get();
                foreach ($products as $product){
                    $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                    $last_date=date("Y-m-d h:i:s", $date);
                    $current_date=date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);

                    $invert=$interval->invert;
                    if($invert=="1"){
                        $p_id[]=$product->id;
                    }
                }

                $qry=DB::table('product as p')->where('p.status','=','1')->whereNotIn('id',$p_id);
                //Check and Search title and description
                if($r->keyword){
                    $qry=$qry->where(function ($q) use ($r){
                        $q->orWhere('p.title','like',"%$r->keyword%");
                        $q->orWhere('p.description','like',"%$r->keyword%");
                    });
                }
                //Check and Search category
                if($r->category_id){
                    $category=DB::table('category')->where('parent_id',$r->category_id)->get(['id','parent_id','category_name','category_image','menu_type']);
                    $cat_id=array($r->category_id);
                    foreach ($category as $id){
                        $cat_id[]=$id->id;
                    }
                    $qry=$qry->whereIn('p.category_id',$cat_id);
                }

                //Payment Type
                if($r->payment_opt){
                    $product_id=array();
                    foreach ($products as $product){
                        $payment=unserialize($product->payment_opt);
                        if(in_array($r->payment_opt,$payment))
                            $product_id[]=$product->id;
                    }
                    $qry=$qry->whereIn('p.id',$product_id);
                }
                //SEARCH BY SELLER NAME
                if($r->seller_name){
                    $users=DB::table('users')->where('display_name','like',"%$r->seller_name%")->get(['id']);
                    $user_id=array();
                    foreach ($users as $user){
                        $user_id[]=$user->id;
                    }
                    $seller_product=DB::table('product')->whereIn('user_id',$user_id)->get(['id']);
                    foreach ($seller_product as $product)
                        $product_id[]=$product->id;

                    $qry=$qry->whereIn('p.id',$product_id);
                }

                $products=$qry->get();
                if($products){
                    $i=0;
                    foreach ($products as $product) {

                        $product_avg=$this->ProductAvg($product->id);
                        $product->product_avg=$product_avg[0];
                        $product->product_rate_cnt=$product_avg[1];

                        $products[$i]->description=preg_replace('!\\r?\\n!', " ",$product->description);
                        $products[$i]->condition_description=preg_replace('!\\r?\\n!', " ",$product->condition_description);

                        $product_image = unserialize($product->photos);
                        $products[$i]->photos = $product_image;

                        //IF SELLING STYLE AUCTION
                        if($product->selling_type=="Auction style"){
                            $last_bid=DB::table('auction_bid')->where('product_id',$product->id)->orderBy('id','desc')->first();
                            if($last_bid)
                                $product->last_bid=$last_bid->bid_price;
                            else
                                $product->last_bid=$product->min_price;
                        }else
                            $product->last_bid="0";

                        $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                        $last_date = date("Y-m-d h:i:s", $date);
                        $current_date = date("Y-m-d h:i:s");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);
                        $days_left = $interval->format('%R%a days');

                        $hour = $interval->format('%h hours ');
                        $products[$i]->days_left = $days_left . ' ' . $hour;
                        $days=substr($days_left, 1,2);
                        $product->endsoon=trim($days);
                        $invert = $interval->invert;
                        if ($invert == "0")
                            $products[$i]->time = 'Started';
                        else
                            $products[$i]->time = 'End';

                        unset($product->specification);
                        unset($product->shipment_type);
                        unset($product->payment_opt);
                        $i++;
                    }
                    $this->reply=['status'=>'success','data'=>$products,'sub_category'=>$category];
                }
                else
                    $this->reply=['status'=>'fail','msg'=>'Something wrong happen'];
            }
            else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function saveSearch(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                    $search=serialize($r->search);
                    $saveSearch=DB::table('save_search')->insertGetId(['search'=>$search,'user_id'=>$r->user_id,'keyword'=>$r->keyword]);
                    if($saveSearch){
                        $this->reply['save_search']=['status'=>'success','msg'=>'insert successful.'];
                        DB::commit();
                    }else{
                        $this->reply['save_search']=['status'=>'fail','msg'=>'something wrong happen.'];
                    }
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }
    function editSearch(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $view_search=DB::table('save_search')->where('id',$r->id)->first();
                $search=unserialize($view_search->search);

                if($r->keyword=='min_price' || $r->keyword=='max_price'){
                    unset($search['max_price']);
                    unset($search['min_price']);
                }else
                    unset($search[$r->keyword]);


                $search=serialize($search);
                $saveSearch=DB::table('save_search')->where(['user_id'=>$r->user_id,'id'=>$r->id])->update(['search'=>$search]);
                if($saveSearch){
                    $this->reply['update_search']=['status'=>'success','msg'=>'update successful.'];
                    DB::commit();
                }else{
                    $this->reply['update_search']=['status'=>'fail','msg'=>'something wrong happen.'];
                }
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function viewSearch(Request $r){
        try{
            DB::beginTransaction();
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $qry=DB::table('save_search');
                if($r->id)
                    $qry=$qry->where('id',$r->id);
                if($r->user_id)
                    $qry=$qry->where('user_id',$r->user_id);

                $viewSearch=$qry->get();
                if($viewSearch){
                    $i=0;
                    foreach ($viewSearch as $search){
                        $sear=unserialize($search->search);
                        foreach ($sear as $key => $value) {
                            if ($key == 'category_id') {
                                $category_id = $value[0];
                                $category = DB::table('category')->where('id', $category_id)->first(['category_name']);
                                $sear['category_id']=[$category->category_name];
                            }
                        }
                        $viewSearch[$i]->search=$sear;
                        $viewSearch[$i]->created_date = date('d.m.Y H:i:s', strtotime($search->created_date));
                        $i++;
                    }
                    $this->reply['view_search']=['status'=>'success','data'=>$viewSearch];
                }else
                    $this->reply['view_search']=['status'=>'fail','msg'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function viewSearchProduct(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)) {
                $viewSearch = DB::table('save_search')->where('id', $r->id)->first();
                if ($viewSearch) {
                    $searchs = unserialize($viewSearch->search);
                    $per_page = '';
                    $keyword = '';
                    $sold = '';
                    $completed = '';
                    $category_id = '';
                    $min_price = '';
                    $max_price = '';
                    $buy_formats = '';
                    $item_condition = '';
                    $product_rating = '';
                    $nationality = '';
                    $hours = '';
                    $listing_options='';
                    $payment_opt='';
                    $shipping_opt='';
                    $item_location='';
                    $min_bid_number='';
                    $max_bid_number='';
                    $seller_name='';
                    $end_product='';
                    foreach ($searchs as $key => $value) {
                        if ($key == 'Resultsperpage')
                            $per_page = $value[0];
                        if ($key == 'keyword')
                            $keyword = $value[0];
                        if ($key == 'sold')
                            $sold = $value[0];
                        if ($key == 'completed')
                            $completed = $value[0];
                        if ($key == 'category_id')
                            $category_id = $value[0];
                        if ($key == 'min_price')
                            $min_price = $value[0];
                        if ($key == 'max_price')
                            $max_price = $value[0];
                        if ($key == 'buy_formats')
                            $buy_formats = $value[0];
                        if ($key == 'item_condition')
                            $item_condition = $value[0];
                        if ($key == 'product_rating')
                            $product_rating = $value[0];
                        if ($key == 'nationality')
                            $nationality = $value[0];
                        if($key=='hours')
                            $hours=$value[0];
                        if($key=='payment_opt')
                            $payment_opt=$value[0];
                        if($key=='shipping_opt')
                            $shipping_opt=$value[0];
                        if($key=='item_location')
                            $item_location=$value[0];
                        if($key=='max_bid_number')
                            $max_bid_number=$value[0];
                        if($key=='min_bid_number')
                            $min_bid_number=$value[0];
                        if($key=='listing_options')
                            $listing_options=$value[0];
                        if($key=='seller_name')
                            $seller_name=$value[0];
                        if($key=='end_product')
                            $end_product=$value[0];
                    }

                    $category = array();
                    $per_page = ($per_page != '' ? $per_page : 50);

                    $products=DB::table('product')->where('status','1')->get();
                    if($end_product=='REMOVE_END_PRODUCT'){
                        foreach ($products as $product){
                            $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                            $last_date=date("Y-m-d h:i:s", $date);
                            $current_date=date("Y-m-d h:i:s");

                            $datetime1 = date_create($current_date);
                            $datetime2 = date_create($last_date);
                            $interval = date_diff($datetime1, $datetime2);

                            $invert=$interval->invert;
                            if($invert=="1"){
                                $p_id[]=$product->id;
                            }
                        }
                    }else
                        $p_id=array();

               $qry = DB::table('product as p')->where('p.status', '=', '1')->whereNotIn('id',$p_id);
                    //Check and Search title and description
                    if ($keyword != '') {
                        $qry = $qry->where(function ($q) use ($keyword) {
                            $q->orWhere('p.title', 'like', "%$keyword%");
                            $q->orWhere('p.description', 'like', "%$keyword%");
                        });
                    }
                    //Check and Search item is sold or not
                    // Check and Search time is end or not
                    if (($sold == "true") OR ($completed == 'true')) {
                        $product_data = DB::table('product')->where('status', '=', '1')->get();
                        $p_id = array();
                        foreach ($product_data as $product) {
                            $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                            $last_date = date("Y-m-d h:i:s", $date);
                            $current_date = date("Y-m-d h:i:s");

                            $datetime1 = date_create($current_date);
                            $datetime2 = date_create($last_date);
                            $interval = date_diff($datetime1, $datetime2);

                            $invert = $interval->invert;
                            if ($invert == "1") {
                                $p_id[] = $product->id;
                            }
                        }
                        if ($sold == "true")
                            $qry = $qry->where('p.quantity', '<=', '0');
                        if ($completed == 'true')
                            $qry = $qry->whereIn('p.id', $p_id);
                    }
                    //Check and Search category
                    if ($category_id !='') {

                        $category = DB::table('category')->where('parent_id', $category_id)->get(['id', 'parent_id', 'category_name', 'category_image', 'menu_type']);
                        $cat_id = array($category_id);
                        foreach ($category as $id) {
                            $cat_id[] = $id->id;
                        }
                        $qry = $qry->whereIn('p.category_id', $cat_id);
                    }
                    //Check and Search max and min price
                    if (($min_price !='') AND ($max_price !='')) {
                        $qry = $qry->whereBetween('p.price', [$min_price, $max_price]);
                    }
                    //Check and Search product selling formate
                    if ($buy_formats !='') {
                      $qry = $qry->where('p.selling_type', $buy_formats);
                    }
                    //Check and Search product condition
                    if ($item_condition !='') {
                        $qry = $qry->where('p.p_condition', $item_condition);
                    }
                    //Check and Search Product rating
                    if ($product_rating !='') {
                        $products_rating = DB::table('product as p1')
                            ->join('product_rate as f', 'f.product_id', '=', 'p1.id')
                            ->groupBy('f.product_id')
                            ->get(['p1.id', DB::raw("ROUND(AVG(tbl_f.rate)) as avg")]);
                        $product_id = array();
                        foreach ($products_rating as $id) {
                            if ($product_rating <= $id->avg)
                                $product_id[] = $id->id;
                        }
                        $qry = $qry->whereIn('p.id', $product_id);
                    }
                    if($seller_name != ''){
                        $users=DB::table('users')->where('display_name','like',"%$seller_name%")->get(['id']);
                        $user_id=array();
                        foreach ($users as $user){
                            $user_id[]=$user->id;
                        }
                        $seller_product=DB::table('product')->whereIn('user_id',$user_id)->get(['id']);
                        foreach ($seller_product as $product)
                            $product_id[]=$product->id;

                        $qry=$qry->whereIn('p.id',$product_id);
                    }
                    //Check and Search seller nationality
                    if ($nationality !='') {
                        $users = DB::table('users')->where('natinality', $nationality)->get(['id']);
                        $user_id = array();
                        foreach ($users as $user)
                            $user_id[] = $user->id;
                        $qry = $qry->whereIn('p.user_id', $user_id);
                    }
                    //Payment Type
                    if($payment_opt){

                        $product_id=array();
                        foreach ($products as $product){
                            $payment=unserialize($product->payment_opt);
                            if(in_array($payment_opt,$payment))
                                $product_id[]=$product->id;
                        }
                        $qry=$qry->whereIn('p.id',$product_id);
                    }
                    //Shipment Options
                    if($shipping_opt){
                        $product_id=array();
                        foreach ($products as $product){
                            $shipment_type=unserialize($product->shipment_type);
                            if(in_array($shipping_opt,$shipment_type))
                                $product_id[]=$product->id;
                        }
                        $qry=$qry->whereIn('p.id',$product_id);
                    }
                    //ITEM LOCATION
                    if($item_location)
                        $qry=$qry->where('p.product_address',$item_location);
                    //NUMBERS OF BIDS
                    if(($min_bid_number) AND ($max_bid_number)){
                        $product_id=array();
                        foreach ($products as $product){
                            if($product->selling_type=='Auction style'){
                                $count=DB::table('auction_bid')->where('product_id',$product->id)->count();
                                if(($count<=$max_bid_number) AND ($count>=$min_bid_number) ){
                                    $product_id[]=$product->id;
                                }
                            }
                        }
                        $qry=$qry->whereIn('p.id',$product_id);
                    }
                    if(($hours)){
                        $product_id=array();
                        foreach ($products as $p){
                            $duration=  $p->renew_duration;
                            $created_date=$p->approve_date;
                            $date = strtotime("+ $duration day", strtotime($created_date));
                            $last_date = date("Y-m-d h:i:s", $date);
                            $current_date = date("Y-m-d h:i:s");

                            $datetime1 = date_create($current_date);
                            $datetime2 = date_create($last_date);
                            $interval = date_diff($datetime1, $datetime2);
                            $days_left = $interval->format('%R%a');

                            $days_left=substr($days_left, 1);

                            $days=substr($days_left, 1,2);
                            $product->endsoon=trim($days);

                            $hours_left= $days_left*24;
                            if($listing_options=='0' ){
                                if($hours_left<=$hours){
                                    $invert = $interval->invert;
                                    if ($invert == "0")
                                        $product_id[]=$p->id;
                                }
                            }
                            if($listing_options == '1') {
                                if($hours_left>=$hours){
                                    $invert = $interval->invert;
                                    if ($invert == "0")
                                        $product_id[]=$p->id;
                                }
                            }
                        }
                        $qry=$qry->whereIn('p.id',$product_id);
                    }
                    $products = $qry->paginate($per_page);
                    if ($products) {
                        $i = 0;
                        foreach ($products as $product) {

                            $product_avg=$this->ProductAvg($product->id);
                            $product->product_avg=$product_avg[0];
                            $product->product_rate_cnt=$product_avg[1];

                            $products[$i]->description = preg_replace('!\\r?\\n!', " ", $product->description);
                            $products[$i]->condition_description = preg_replace('!\\r?\\n!', " ", $product->condition_description);

                            $product_image = unserialize($product->photos);
                            $products[$i]->photos = $product_image;

                            $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                            $last_date = date("Y-m-d h:i:s", $date);
                            $current_date = date("Y-m-d h:i:s");

                            $datetime1 = date_create($current_date);
                            $datetime2 = date_create($last_date);
                            $interval = date_diff($datetime1, $datetime2);
                            $days_left = $interval->format('%R%a days');

                            //IF SELLING STYLE AUCTION
                            if($product->selling_type=="Auction style"){
                                $last_bid=DB::table('auction_bid')->where('product_id',$product->id)->orderBy('id','desc')->first();
                                if($last_bid)
                                    $product->last_bid=$last_bid->bid_price;
                                else
                                    $product->last_bid=$product->min_price;
                            }else
                                $product->last_bid="0";

                            $hour = $interval->format('%h hours ');
                            $products[$i]->days_left = $days_left . ' ' . $hour;
                            $invert = $interval->invert;
                            if ($invert == "0")
                                $products[$i]->time = 'Started';
                            else
                                $products[$i]->time = 'End';

                            $i++;
                            unset($product->specification);
                            unset($product->shipment_type);
                            unset($product->payment_opt);
                        }
                        if($product_rating){
                            $products=$products->toArray();
                            array_multisort( array_column($products['data'], "product_avg"), SORT_ASC, $products['data']);
                        }
                        $this->reply = ['status' => 'success', 'data' => $products, 'sub_category' => $category];
                    } else
                        $this->reply = ['status' => 'fail', 'msg' => 'Something wrong happen'];
                }else
                    $this->reply = ['status' => 'fail', 'msg' => 'Something wrong happen'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function updateSearch(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $search=explode(',',$r->search);
                $search=serialize($search);
                $updateSearch=DB::table('save_search')->where('id',$r->id)->update(['search'=>$search,'updated_date'=>date('Y-m-d')]);
                if($updateSearch){
                    $this->reply['save_search']=['status'=>'success','msg'=>'update successful.'];
                    DB::commit();
                }else{
                    $this->reply['save_search']=['status'=>'fail','msg'=>'something wrong happen.'];
                }
            }
            else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function deleteSearch(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $delete=DB::table('save_search')->where('id',$r->id)->delete();
                if($delete){
                    $this->reply['save_search']=['status'=>'success','msg'=>'delete successful'];
                    DB::commit();
                }else{
                    $this->reply['save_search']=['status'=>'fail','msg'=>'something wrong happen'];
                }
            }else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function ProductAvg($id){
        $product_avg=DB::table('product_rate')->where('product_id',$id)->first([DB::raw("SUM(rate)/COUNT(id) as product_avg ,COUNT(id) as product_rate_cnt")]);
        $product[]=round($product_avg->product_avg);
        $product[]=$product_avg->product_rate_cnt;

        return $product;
    }
}