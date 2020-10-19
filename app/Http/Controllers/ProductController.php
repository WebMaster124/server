<?php

namespace App\Http\Controllers;

use App\Mail\InactiveProductReason;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use Mockery\Exception;

class ProductController extends Controller
{
    function viewProduct(){
        if(!Session::get('userId'))
            return redirect('admin/login');

            $yr=Input::get('year');
            $mnth=Input::get('month');

            $start_date=Input::get('start_date');
            $end_date=Input::get('end_date');
            if($start_date){
                $start = date("Y-m-d",strtotime($start_date));
                $end = date("Y-m-d",strtotime($end_date."+1 day"));
            }else{
                $start='';
                $end='';
            }

            $qry=DB::table('product')->where('status','!=','8')->where('status','!=','2')->orderBy('id','desc');
            if($mnth)
                $qry=$qry->whereMonth('created_date',$mnth);
            if($yr)
                $qry=$qry->whereYear('created_date',$yr);
            if(($start !='') && ($end != ''))
                $qry->whereBetween('created_date',[$start,$end]);

            $products=$qry ->get();
            $status=  Input::get('status');

        return view('/admin/view_product')->with('products',$products)->with('status',$status);
    }

    function viewPendingProduct(){
        if(!Session::get('userId'))
            return redirect('admin/login');

            $yr=Input::get('year');
            $mnth=Input::get('month');

            $start_date=Input::get('start_date');
            $end_date=Input::get('end_date');
            if($start_date){
                $start = date("Y-m-d",strtotime($start_date));
                $end = date("Y-m-d",strtotime($end_date."+1 day"));
            }else{
                $start='';
                $end='';
            }

            $qry=DB::table('product')->where('status','=','2')->orderBy('created_date','desc');
                if($mnth)
                    $qry=$qry->whereMonth('created_date',$mnth);
                if($yr)
                    $qry=$qry->whereYear('created_date',$yr);
                if(($start !='') && ($end != ''))
                    $qry->whereBetween('created_date',[$start,$end]);

               $products=$qry  ->get();
        return view('/admin/view_pending_product')->with('products',$products);
    }

    function changeProductStatus($id,$status,$slug){
        try {
            if(!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            $product_info=DB::table('product')->where('id',$id)->first(['schedule_date']);
            if($product_info->schedule_date !=''){
                $status=7;
            }
            $update=DB::table('product')->where('id',$id)->update(['approve_date'=>date('Y-m-d g:i:s'),'status'=>$status,'updated_date'=>date('Y-m-d')]);
            if($update) {
                    if($status==1){
                        if($product_info->schedule_date ==''){
                            $product=DB::table('product')->where('id',$id)->first();
                            $product->photos=unserialize($product->photos);
                            $product->photos=$product->photos[0];
                            $product->shipment_type=unserialize($product->shipment_type);

                            $user_info=DB::table('users')->where('id',$product->user_id)->first(['id','first_name','email','status_reason','user_status']);
                            $email_template=DB::table('email_template')->where('id','10')->first();
                            Mail::to($user_info->email,$user_info->first_name)->send(new InactiveProductReason($user_info,$product,'',$email_template));
                        }
                    }
                    Session::flash('message','Product status change successfully.');
                    DB::commit();
                    return redirect("admin/$slug");
            } else {
                Session::flash('message','Something wrong happen.');
                return redirect("admin/$slug");
            }
        } catch (Exception $e) {
               $e->getMessage();
               DB::rollBack();
        }
    }

    function approveBulkProductStatus(Request $r){
        try {
            if(!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            $product_ids=explode(',',$r->ids);
            $status=$r->status;
            foreach ($product_ids as $id){
                $product_info=DB::table('product')->where('id',$id)->first(['schedule_date']);
                if($product_info->schedule_date !=''){
                    $status=7;
                }
                $update=DB::table('product')->where('id',$id)->update(['approve_date'=>date('Y-m-d g:i:s'),'status'=>$status,'updated_date'=>date('Y-m-d')]);
                if($update) {
                    if($status==1) {
                        if($product_info->schedule_date ==''){
                            $product=DB::table('product')->where('id',$id)->first();
                            $product->photos=unserialize($product->photos);
                            $product->photos=$product->photos[0];
                            $product->shipment_type=unserialize($product->shipment_type);

                            $user_info=DB::table('users')->where('id',$product->user_id)->first(['id','first_name','email','status_reason','user_status']);
                            $email_template=DB::table('email_template')->where('id','10')->first();
                            Mail::to($user_info->email,$user_info->first_name)->send(new InactiveProductReason($user_info,$product,'',$email_template));
                        }
                    }
                } else {
                    Session::flash('message','Something wrong happen.');
                    return redirect("admin/$r->slug");
                }
            }
            Session::flash('message','Product status change successfully.');
            DB::commit();
            return redirect("admin/$r->slug");
        } catch (Exception $e) {
            $e->getMessage();
            DB::rollBack();
        }
    }
    function rejectBulkProductStatus(Request $r){
        try {
            if(!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            $product_ids=explode(',',$r->rids);

            $reason = "Your item is rejected by administrator. Please contact administartor if you have any query.";
            foreach ($product_ids as $id){
                $update=DB::table('product')->where('id',$id)->update(['status'=>$r->status,'updated_date'=>date('Y-m-d h:i:s')]);
                if($update) {
                    $product=DB::table('product')->where('id',$id)->first();
                    $product->photos=unserialize($product->photos);
                    $product->photos=$product->photos[0];
                    $product->shipment_type=unserialize($product->shipment_type);
                    $user_info=DB::table('users')->where('id',$product->user_id)->first(['id','first_name','email','status_reason','user_status']);
                    $email_template=DB::table('email_template')->where('id','11')->first();
                    Mail::to($user_info->email,$user_info->first_name)->send(new InactiveProductReason($user_info,$product,$reason,$email_template));
                } else {
                    $error_prodlists[] = $id;
                }
            }
            if(!empty($error_prodlists)){
                $prodIds = explode(',', $error_prodlists);
                Session::flash('message','Something wrong happen with this product ids :'. $prodIds);
                return redirect("admin/$r->slug");
            }
            else {
                Session::flash('message', 'All selected items rejected successfully.');
                DB::commit();
                return redirect("admin/$r->slug");
            }
        } catch (Exception $e) {
            $e->getMessage();
            DB::rollBack();
        }
    }

    static function lastBid($id) {
        $last_bid=DB::table('auction_bid')->where('product_id',$id)->orderBy('id','desc')->first();
        return $last_bid;
    }

    function viewDeactiveReasonForm($id,$status,$slug){
        try {
            if(!Session::get('userId'))
                return redirect('admin/login');

            return view('/admin/deactive_product_reason')->with(['id'=>$id,'status'=>$status,'slug'=>$slug]);
        } catch (Exception $e) {
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function deactiveProductStatus(Request $r) {
        try {
            if(!Session::get('userId'))
                return redirect('admin/login');

            $update=DB::table('product')->where('id',$r->id)->update(['status'=>$r->status,'updated_date'=>date('Y-m-d h:i:s')]);
            if($update) {
                $product=DB::table('product')->where('id',$r->id)->first();
                $product->photos=unserialize($product->photos);
                $product->photos=$product->photos[0];
                $product->shipment_type=unserialize($product->shipment_type);
                $user_info=DB::table('users')->where('id',$product->user_id)->first(['id','first_name','email','status_reason','user_status']);
                $email_template=DB::table('email_template')->where('id','11')->first();
                Mail::to($user_info->email,$user_info->first_name)->send(new InactiveProductReason($user_info,$product,$r->reason,$email_template));
                Session::flash('message','Mail send to the product owner.');
                if($r->status==0)
                    return redirect("admin/$r->slug");
                else
                    return redirect('admin/view-pending-product');
            } else {
                Session::flash('message','Something wrong happen.');
                return redirect("admin/$r->slug");
            }
        } catch(Exception $e) {
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function viewProductDetails($id) {
        if(!Session::get('userId'))
            return redirect('admin/login');

        $products=DB::table('product as p')
            ->join('users as u','u.id','=','p.user_id')
            ->where('p.id',$id)
            ->first(['p.id as product_id','p.product_sku','p.title','p.subtitle','p.category_id','p.photos',
                'p.isbn','p.brand_id','p.p_condition','p.condition_description','p.specification','p.payment_opt','p.description',
                'p.quantity','p.price','p.duration','p.renew_duration','p.return_opt','p.selling_type','p.product_address','p.warrenty','p.ship_to','p.daily_deal','p.status','p.min_price',
                'p.shipment_type','p.delivery_days','p.renew','p.season_deal','p.daily_deal','p.fees_details',
                'u.id as user_id','u.first_name','u.last_name','u.email','u.business_mobile','u.business_name','u.business_relationship']);

        return view('/admin/product_details')->with('product',$products);
    }

    function sellerChargeByAuctionType($category_id='',$year='',$month='',$start_date='',$end_date=''){

        if($year==0)
            $year='';
        if($month==0)
            $month='';

        if($start_date){
            $start = date("Y-m-d",strtotime($start_date));
            $end = date("Y-m-d",strtotime($end_date."+1 day"));
        }else{
            $start='';
            $end='';
        }

        $sub_categorys=DB::table('category')->where('parent_id',[$category_id])->get([DB::raw("group_concat(id) as id")]);
        $ids=explode(',',$sub_categorys[0]->id);

        $qry=DB::table('product as p')->join('users as u','u.id','=','p.user_id')
            ->where('p.status','=','1')->where('p.selling_type','=','Auction style');
        if($category_id)
            $qry=$qry->whereIn('p.category_id',$ids);
        if($year)
            $qry=$qry->whereYear('p.created_date',$year);
        if($month)
            $qry=$qry->whereMonth('p.created_date',$month);
        if(($start !='') && ($end != ''))
            $qry->whereBetween('p.created_date',[$start,$end]);

        $fees_auction_type=$qry->get(['p.id','p.product_sku','p.title','p.subtitle','p.category_id','p.photos','p.fees_details',
            'p.isbn','p.brand_id','p.p_condition','p.condition_description','p.specification','p.payment_opt','p.description',
            'p.quantity','p.price','p.duration','p.renew_duration','p.return_opt','p.selling_type','p.product_address','p.warrenty','p.ship_to','p.daily_deal','p.status','p.min_price',
            'p.shipment_type','p.delivery_days','p.created_date','p.approve_date',
            'u.id as user_id','u.first_name','u.last_name','u.email','u.business_mobile','u.business_name','u.business_relationship']);

        return view('admin/seller_charge_by_auction')->with('fees_auction_type',$fees_auction_type);
     }

     function sellerChargeByFixPrice($category_id='',$year='',$month='',$start_date='',$end_date=''){

         if($year==0)
             $year='';
         if($month==0)
             $month='';

         if($start_date){
             $start = date("Y-m-d",strtotime($start_date));
             $end = date("Y-m-d",strtotime($end_date."+1 day"));
         } else {
             $start='';
             $end='';
         }

         $sub_categorys=DB::table('category')->where('parent_id',[$category_id])->get([DB::raw("group_concat(id) as id")]);
         $ids=explode(',',$sub_categorys[0]->id);

         $qry=DB::table('product as p')->join('users as u','u.id','=','p.user_id')
             ->where('p.status','=','1')->where('p.selling_type','=','Fixed price');
         if($category_id)
             $qry=$qry->whereIn('p.category_id',$ids);
         if($year)
             $qry=$qry->whereYear('p.created_date',$year);
         if($month)
             $qry=$qry->whereMonth('p.created_date',$month);
         if(($start !='') && ($end != ''))
             $qry->whereBetween('p.created_date',[$start,$end]);

         $fees_fix_price=$qry->get(['p.id','p.product_sku','p.title','p.subtitle','p.category_id','p.photos','p.fees_details',
             'p.isbn','p.brand_id','p.p_condition','p.condition_description','p.specification','p.payment_opt','p.description',
             'p.quantity','p.price','p.duration','p.renew_duration','p.return_opt','p.selling_type','p.product_address','p.warrenty','p.ship_to','p.daily_deal','p.status','p.min_price',
             'p.shipment_type','p.delivery_days','p.created_date','p.approve_date',
             'u.id as user_id','u.first_name','u.last_name','u.email','u.business_mobile','u.business_name','u.business_relationship']);

         return view('admin/seller_charge_by_fix_price')->with('fees_fix_price',$fees_fix_price);
     }

     function cashSaleDetails(){
         $year=Input::get('year');
         $month=Input::get('month');

         $start_date=Input::get('start_date');
         $end_date=Input::get('end_date');
         if($start_date){
             $start = date("Y-m-d",strtotime($start_date));
             $end = date("Y-m-d",strtotime($end_date."+1 day"));
         }else{
             $start='';
             $end='';
         }

         $qry=DB::table('order as o')
             ->join('product as  p','p.id','=','o.product_id')
             ->join('users as u','u.id','=','p.user_id')
             ->where('o.payment_opt','2');
         if($year)
             $qry=$qry->whereYear('o.created_date',$year);
         if($month)
             $qry=$qry->whereMonth('o.created_date',$month);
         if(($start !='') && ($end != ''))
             $qry->whereBetween('o.created_date',[$start,$end]);

         $cash_product=$qry->get(['p.id','p.product_sku','p.title','p.subtitle','p.category_id','p.payment_opt','p.description',
             'p.price','p.discount','p.selling_type','p.product_address','p.ship_to','p.daily_deal','p.status','p.min_price',
             'p.shipment_type','p.delivery_days','p.approve_date',
             'u.id as user_id','u.first_name','u.last_name','o.order_price','o.quantity','o.created_date']);

         return view('admin/cash_sale_details')->with('cash_product',$cash_product);
     }

    function paypalSaleDetails(){

        $year=Input::get('year');
        $month=Input::get('month');

        $start_date=Input::get('start_date');
        $end_date=Input::get('end_date');
        if($start_date){
            $start = date("Y-m-d",strtotime($start_date));
            $end = date("Y-m-d",strtotime($end_date."+1 day"));
        }else{
            $start='';
            $end='';
        }

        $qry=DB::table('order as o')
            ->join('product as  p','p.id','=','o.product_id')
            ->join('users as u','u.id','=','p.user_id')
            ->where('o.payment_opt','1');
        if($year)
            $qry=$qry->whereYear('o.created_date',$year);
        if($month)
            $qry=$qry->whereMonth('o.created_date',$month);
        if(($start !='') && ($end != ''))
            $qry->whereBetween('o.created_date',[$start,$end]);

        $paypal_product=$qry->get(['p.id','p.product_sku','p.title','p.subtitle','p.category_id','p.payment_opt','p.description',
            'p.price','p.discount','p.selling_type','p.product_address','p.ship_to','p.daily_deal','p.status','p.min_price',
            'p.shipment_type','p.delivery_days','p.approve_date',
            'u.id as user_id','u.first_name','u.last_name','o.order_price','o.quantity','o.created_date']);

        return view('admin/paypal_sale_details')->with('paypal_product',$paypal_product);
    }

    function ItemListedByCategory() {
        $year=Input::get('year');
        $month=Input::get('month');

        $start_date=Input::get('start_date');
        $end_date=Input::get('end_date');
        if($start_date){
            $start = date("Y-m-d",strtotime($start_date));
            $end = date("Y-m-d",strtotime($end_date."+1 day"));
        }else{
            $start='';
            $end='';
        }

        $parent_categorys=DB::table('category')->where('parent_id','0')->get(['id','category_name']);
        $products=array();
        foreach ($parent_categorys as $parent_category) {
            $sub_categorys=DB::table('category')->where('parent_id',[$parent_category->id])->get([DB::raw("group_concat(id) as id")]);
            $ids=explode(',',$sub_categorys[0]->id);
            $qry = DB::table('product as p')
                ->join('users as u','u.id','=','p.user_id')
                ->whereIn('p.category_id',$ids)->whereIn('p.status',[1,3]);
            if($year)
                $qry=$qry->whereYear('p.created_date',$year);
            if($month)
                $qry=$qry->whereMonth('p.created_date',$month);
            if(($start !='') && ($end != ''))
                $qry->whereBetween('p.created_date',[$start,$end]);

            $product=$qry->get(['p.id','p.product_sku','p.title','p.subtitle','p.fees_details','p.quantity','p.category_id','p.payment_opt','p.description',
                'p.price','p.discount','p.selling_type','p.product_address','p.ship_to','p.daily_deal','p.status','p.min_price',
                'p.shipment_type','p.delivery_days','p.created_date','p.approve_date',
                'u.id as user_id','u.first_name','u.last_name']);
            foreach ($product as $prod){
                $prod->parent_cat_name=$parent_category->category_name;
            }
            $parent_category->product=$product;
        }
        return view('admin/item_list_by_category')->with('parent_categorys',$parent_categorys);
    }

    function saleByCategory() {
        $year = Input::get('year');
        $month = Input::get('month');
        $start_date=Input::get('start_date');
        $end_date=Input::get('end_date');
        if($start_date) {
            $start = date("Y-m-d",strtotime($start_date));
            $end = date("Y-m-d",strtotime($end_date."+1 day"));
        } else {
            $start='';
            $end='';
        }

        $parent_categorys_sales = DB::table('category')->where('parent_id', '0')->get(['id', 'category_name']);
        foreach ($parent_categorys_sales as $parent_category) {
            $sub_categorys = DB::table('category')->where('parent_id', [$parent_category->id])->get([DB::raw("group_concat(id) as id")]);
            $ids = explode(',', $sub_categorys[0]->id);
            $qry = DB::table('product as p')
                ->join('order as o', 'o.product_id', '=', 'p.id')
                ->join('users as u', 'u.id', '=', 'p.user_id')
                ->join('users as bu', 'bu.id', '=', 'o.buyer_id')
                ->whereIn('p.category_id', $ids);
            if ($year)
                $qry = $qry->whereYear('o.created_date', $year);
            if ($month)
                $qry = $qry->whereMonth('o.created_date', $month);
            if(($start !='') && ($end != ''))
                $qry->whereBetween('o.created_date',[$start,$end]);

            $product = $qry->get(['p.id', 'p.product_sku', 'p.title', 'p.subtitle', 'p.category_id', 'p.payment_opt', 'p.description',
                'p.price', 'p.discount', 'p.selling_type', 'p.product_address', 'p.ship_to', 'p.daily_deal', 'p.status', 'p.min_price',
                'p.shipment_type', 'p.delivery_days', 'p.created_date', 'p.approve_date',
                'u.id as user_id', 'u.first_name', 'u.last_name', 'o.order_price', 'o.quantity','bu.first_name as b_f_name','bu.last_name as b_l_name']);

            foreach ($product as $prod) {
                $prod->parent_cat_name = $parent_category->category_name;
            }
            $parent_category->product = $product;
        }
        return view('admin/sale_by_category')->with('parent_categorys', $parent_categorys_sales);
    }

    function deliveredCategoryItem($id='',$year='',$month='',$start_date='',$end_date=''){
        if($year==0)
            $year='';
        if($month==0)
            $month='';

        if($start_date){
            $start = date("Y-m-d",strtotime($start_date));
            $end = date("Y-m-d",strtotime($end_date."+1 day"));
        }else{
            $start='';
            $end='';
        }

        $sub_categorys=DB::table('category')->where('parent_id',[$id])->get([DB::raw("group_concat(id) as id")]);
        $ids=explode(',',$sub_categorys[0]->id);

        $qry=DB::table('product as p')
            ->join('order as o','o.product_id','=','p.id')
            ->join('users as u','u.id','=','o.buyer_id')
            ->where('o.order_status','Delivered');

        if($id)
            $qry=$qry->whereIn('p.category_id',$ids);
        if($year)
            $qry=$qry->whereYear('p.created_date',$year);
        if($month)
            $qry=$qry->whereMonth('p.created_date',$month);
        if(($start !='') && ($end != ''))
            $qry->whereBetween('p.created_date',[$start,$end]);

        $deliveredCategory=$qry->get(['p.id','p.product_sku','p.product_address','p.title','p.category_id','o.quantity','p.shipment_type',
            'o.created_date','p.price', 'p.discount', 'p.min_price','p.selling_type',
            'u.id as user_id','u.first_name','u.last_name']);

        return view('admin/delivered_category_item')->with('deliveredCategory',$deliveredCategory);
    }

    function auctionCategoryItem($id='',$year='',$month='',$start_date='',$end_date='') {

        if($year==0)
            $year='';
        if($month==0)
            $month='';

        if($start_date) {
            $start = date("Y-m-d",strtotime($start_date));
            $end = date("Y-m-d",strtotime($end_date."+1 day"));
        } else {
            $start='';
            $end='';
        }

        $sub_categorys=DB::table('category')->where('parent_id',[$id])->get([DB::raw("group_concat(id) as id")]);
        $ids=explode(',',$sub_categorys[0]->id);

        $qry=DB::table('product as p')
            ->join('users as u','u.id','=','p.user_id')
            ->where('p.selling_type','Auction style')
            ->whereIn('p.status',[1,3])
            ->whereIn('p.category_id',$ids);
        if($id)
            $qry=$qry->whereIn('p.category_id',$ids);
        if($year)
            $qry=$qry->whereYear('p.created_date',$year);
        if($month)
            $qry=$qry->whereMonth('p.created_date',$month);
        if(($start !='') && ($end != ''))
            $qry->whereBetween('p.created_date',[$start,$end]);

        $auctionCategory=$qry->get(['p.id','p.product_sku','p.title','p.category_id','p.quantity','p.shipment_type','p.approve_date',
            'p.price', 'p.discount', 'p.selling_type', 'p.product_address', 'p.ship_to', 'p.daily_deal', 'p.status', 'p.min_price',
            'u.id as user_id','u.first_name','u.last_name']);

        return view('admin/auction_category_item')->with('auctionCategory',$auctionCategory);
    }

    function fixCategoryItem($id='',$year='',$month='',$start_date='',$end_date=''){

        if($year==0)
            $year='';
        if($month==0)
            $month='';

        if($start_date){
            $start = date("Y-m-d",strtotime($start_date));
            $end = date("Y-m-d",strtotime($end_date."+1 day"));
        } else {
            $start='';
            $end='';
        }

        $sub_categorys=DB::table('category')->where('parent_id',[$id])->get([DB::raw("group_concat(id) as id")]);
        $ids=explode(',',$sub_categorys[0]->id);

        $qry=DB::table('product as p')
            ->join('users as u','u.id','=','p.user_id')
            ->where('p.selling_type','Fixed price')
            ->whereIn('p.status',[1,3])
            ->whereIn('p.category_id',$ids);
        if($id)
            $qry=$qry->whereIn('p.category_id',$ids);
        if($year)
            $qry=$qry->whereYear('p.created_date',$year);
        if($month)
            $qry=$qry->whereMonth('p.created_date',$month);
        if(($start !='') && ($end != ''))
            $qry->whereBetween('p.created_date',[$start,$end]);

        $auctionCategory=$qry->get(['p.id','p.product_sku','p.title','p.category_id','p.quantity','p.shipment_type','p.approve_date',
            'p.price', 'p.discount', 'p.selling_type', 'p.product_address', 'p.ship_to', 'p.daily_deal', 'p.status', 'p.min_price',
            'u.id as user_id','u.first_name','u.last_name']);

        return view('admin/fix_category_item')->with('auctionCategory',$auctionCategory);
    }

    function returnProductList() {
        $year = Input::get('year');
        $month = Input::get('month');
        $start_date=Input::get('start_date');
        $end_date=Input::get('end_date');
        if($start_date) {
            $start = date("Y-m-d",strtotime($start_date));
            $end = date("Y-m-d",strtotime($end_date."+1 day"));
        } else {
            $start='';
            $end='';
        }

        $qry=DB::table('resolution_center as r')
            ->leftjoin('users as u','u.id','=','r.buyer_id')
            ->leftjoin('users as us','us.id','=','r.seller_id')
            ->leftjoin('product as p','p.id','=','r.product_id')
            ->leftjoin('order as o','o.order_id','=','r.order_id')
            ->groupBy('r.buyer_id','r.product_id','r.order_id')
            ->orderBy('r.id','desc');

        if($year)
            $qry=$qry->whereYear('r.created_date',$year);
        if($month)
            $qry=$qry->whereMonth('r.created_date',$month);
        if(($start !='') && ($end != ''))
            $qry->whereBetween('r.created_date',[$start,$end]);

        $returns=$qry->get(['r.product_id','o.created_date as sold_date','r.question','r.created_date as query_date','o.quantity as order_quantity']);
      
		foreach ($returns as $return){
            $product=DB::table('product as p')->join('users as u','u.id','=','p.user_id')->where('p.id',$return->product_id)->first(['p.id','p.product_sku','p.title','p.category_id','p.quantity','p.shipment_type','p.approve_date',
                'p.price', 'p.discount', 'p.selling_type', 'p.product_address', 'p.ship_to', 'p.daily_deal', 'p.status', 'p.min_price','p.fees_details',
                'u.id as user_id','u.first_name','u.last_name']);
            $product->question=$return->question;
            $product->sold_date=$return->sold_date;
            $product->query_date=$return->query_date;
            $product->order_quantity=$return->order_quantity; 
            $products[]=$product;
		
        }
		
		
        return view('admin/return_product_list')->with('products',$products);
    }
    
    
    function viewRelistProduct(){
        if(!Session::get('userId'))
            return redirect('admin/login');

            $yr=Input::get('year');
            $mnth=Input::get('month');

            $start_date=Input::get('start_date');
            $end_date=Input::get('end_date');
            if($start_date){
                $start = date("Y-m-d",strtotime($start_date));
                $end = date("Y-m-d",strtotime($end_date."+1 day"));
            }else{
                $start='';
                $end='';
            }
            
            $qry=DB::table('product')->where('status','=','5')->get();
//               $p_id=array();
//                foreach ($qry as $product){
//                    $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
//                    $last_date=date("Y-m-d h:i:s", $date);
//                    $current_date=date("Y-m-d h:i:s");
//
//                    $datetime1 = date_create($current_date);
//                    $datetime2 = date_create($last_date);
//                    if($datetime1 > $datetime2)
//                        $p_id[]=$product->id;
//                }
//               $qry=DB::table('product')->whereIn('id',$p_id)->orderBy('created_date','desc');
//               $qry->whereIn('id',$p_id);
//               $products=$qry->get();
        return view('/admin/view_relist_product')->with('products',$qry);
    }
    
    
    
    
    
    
}