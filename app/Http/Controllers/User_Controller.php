<?php
/**
 * Created by PhpStorm.
 * User: manishg
 * Date: 3/12/2018
 * Time: 4:07 PM
 */

namespace App\Http\Controllers;


use App\User;
use App\ItemsCategoryAuction;
use Storage;

use App\Exports\CategoryExport;

use App\Exports\UsersExport;
use App\Exports\ItemsCategoryAuctionExport;
use File;
//use App\Exports\CategoryExport;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

use App\Mail\InactiveReason;
use App\Mail\UserWarning;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;

class User_Controller extends Controller
{
   function loginForm(){
        if(Session::get('userId')){
                return redirect('admin/dashboard');
            }
           return view('admin/login');
    }

    function changepassword(){
    if(Session::get('userId')){
           return view('admin/view_change_password');
	}
    }
    
    function updatepassword(Request $r){
		 
		   if(Session::get('userId')){
     try {
            DB::beginTransaction();
			echo $userId=Session::get('userId');
                        
			 $r->validate([
                'old_password' => 'required',
                'new_password' => 'required|min:4',
                'confirm_password' => 'required|same:new_password'
             
            ]);
            $user=DB::table('users')->where(['id'=>$userId,'role'=>'admin'])->first();
			
            
                if(Hash::check($r->old_password,$user->password)){
					
					echo $new_password=$r->new_password;
                                        echo '<br/>';
				$pass=['passdword'=>bcrypt($new_password)];
//                                print_r($pass);
//                                exit;
				     $update=DB::table('users')->where(['id'=>$userId])->update(['password'=>bcrypt($new_password)]);
					//$update=DB::table('users')->where(['id'=>$userId])->update(['password'=>$password]);
					if($update){
						 DB::commit();
					 Session::flash('message', 'Password changed successfully.');
                return redirect('admin/ChangePassword');
					}
					//   DB::commit();
					
				}
			
	else{
                Session::flash('message', 'You have entered an invalid current password.');
                return view('admin/view_change_password');
            }
            DB::commit();
        }catch (Exception $e){
               echo $e->getMessage();
               DB::rollBack();
        }
          
    }
	 } 
	 
	 
	/*   public function export($type)
    {
		
        return Excel::download(new UsersExport, 'User.' . $type);
    }
	
    public function exportc($type)
    {
		
        return Excel::download(new ItemsCategoryAuctionExport, 'C.' . $type);
    }   */
	
	
	
	
	 public function downloadJSONFile(){
	  $data=DB::table('users')->where('user_status','1')->get(['email', 'first_name', 'last_name','natinality','display_name','role','address']);
   


	  $val ='<?php chmod($filename, 0777);<?php
header("Content-type: text/html");
echo "<html>
<body>";
 
$file = fopen("file.txt","r") or die("Error");
?><table>
	  <th>S.No</th>
	  <th>email</th>
	   <th>First Name</th>
	   <th>Last Name</th>
	   <th>Nationality</th>
	   <th>Display Name</th>
	   <th>Role</th>
	   <th>Address</th>';
	 $i=1;
	 foreach($data as $datas){
		 $val .= "<tr><td>".$i."  </td><td>". $datas->email."  </td>
	            <td>". $datas->first_name."  </td>
				 <td>". $datas->last_name."  </td>
				  <td>". $datas->natinality."  </td>
				   <td>". $datas->display_name."  </td>
				    <td>". $datas->role."  </td> 
					<td>". $datas->address."  </td></tr>";
					$i++;
	 }
	 $val .= '</table><body></html>';
	 
	  $file = 'Active_Users.txt';
      $destinationPath=public_path()."/upload/json/";
      if (!is_dir($destinationPath)) {  mkdir($destinationPath,0777,true);  }

      File::put($destinationPath.$file,$data);
	// $file = explode("__", file_get_contents($destinationPath/$file));
	// str_replace('_'.($num-1), '_'.$num, $withoutExt);
      return response()->download($destinationPath.$file);	
	
    
    }
    
   function index(){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        
        
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

       $data=array();
       //NUMBER OF ITEMS
       $qry=DB::table('product')->whereIn('status',[1]);
       if($year)
           $qry=$qry->whereYear('created_date',$year);
       if($month)
           $qry=$qry->whereMonth('created_date',$month);
        if(($start !='') && ($end != ''))
            $qry->whereBetween('created_date',[$start,$end]);

       $item_count = $qry->count();
       $data['item_count']=$item_count;

        //NUMBER OF PENDING PRODUCT
       $qry=DB::table('product')->where('status','2');
       if($year)
           $qry=$qry->whereYear('created_date',$year);
       if($month)
           $qry=$qry->whereMonth('created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('created_date',[$start,$end]);

       $pending_item_count = $qry->count();
       $data['pending_item_count']=$pending_item_count;

        //DELETED PRODUCT COUNT
       $qry=DB::table('product')->where('status','9');
       if($year)
           $qry=$qry->whereYear('created_date',$year);
       if($month)
           $qry=$qry->whereMonth('created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('created_date',[$start,$end]);

       $deleted_item_count = $qry->count();
       $data['deleted_item_count']=$deleted_item_count;

       //TOTAL USER COUNT
       $qry=DB::table('users')->where('role','!=','admin');
       if($year)
           $qry=$qry->whereYear('created_date',$year);
       if($month)
           $qry=$qry->whereMonth('created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('created_date',[$start,$end]);

       $user_count = $qry->count();
       $data['users_cnt']=$user_count;
        //DELETED USER COUNT
       $qry=DB::table('users')->where('user_status','=','9')->where('role','!=','admin');
       if($year)
           $qry=$qry->whereYear('created_date',$year);
       if($month)
           $qry=$qry->whereMonth('created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('created_date',[$start,$end]);

       $active_user_count = $qry->count();
       $data['delete_user_count']=$active_user_count;

       //ACTIVE USER COUNT
       $qry=DB::table('users')->where('user_status','=','1')->where('role','!=','admin');
       if($year)
           $qry=$qry->whereYear('created_date',$year);
       if($month)
           $qry=$qry->whereMonth('created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('created_date',[$start,$end]);

       $active_user_count = $qry->count();
       $data['active_user_count']=$active_user_count;

       //INACTIVE USER COUNT
       $qry=DB::table('users')->where('user_status','=','0')->where('role','!=','admin');
       if($year)
           $qry=$qry->whereYear('created_date',$year);
       if($month)
           $qry=$qry->whereMonth('created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('created_date',[$start,$end]);

       $inactive_user_count = $qry->count();
       $data['inactive_user_count']=$inactive_user_count;

       //NUMBERS OF ITEMS BY CATEGORY
       $parent_categorys=DB::table('category')->where('parent_id','0')->get(['id','category_name']);
       foreach ($parent_categorys as $parent_category) {
           $sub_categorys=DB::table('category')->where('parent_id',[$parent_category->id])->get([DB::raw("group_concat(id) as id")]);
           $ids=explode(',',$sub_categorys[0]->id);
           $qry = DB::table('product')->whereIn('category_id',$ids)->whereIn('status',[1,3]);
           if($year)
               $qry=$qry->whereYear('created_date',$year);
           if($month)
               $qry=$qry->whereMonth('created_date',$month);
           if(($start !='') && ($end != ''))
               $qry->whereBetween('created_date',[$start,$end]);

           $products=$qry->get();
           $product_cnt=0;
           $product_qnt=0;
           $product_aed=0;
           foreach ($products as $product){
               $product_cnt++;
               $product_qnt=$product_qnt+$product->quantity;
               if($product->selling_type=="Auction style")
                   $product_aed=$product_aed+$product->min_price;
               else
                   $product_aed=$product_aed+$product->price;

           }
           $parent_category->item_count=$product_cnt;
           $parent_category->quantity=$product_qnt;
           $parent_category->aed=$product_aed;
       }
       $data['item_category_cnt']=$parent_categorys;

       //TOTAL SALES BY CATEGORY
       $parent_categorys_sales=DB::table('category')->where('parent_id','0')->get(['id','category_name']);
       foreach ($parent_categorys_sales as $parent_category) {
           $sub_categorys=DB::table('category')->where('parent_id',[$parent_category->id])->get([DB::raw("group_concat(id) as id")]);
           $ids=explode(',',$sub_categorys[0]->id);
           $qry =DB::table('product as p')
               ->join('order as o','o.product_id','=','p.id')
               ->whereIn('p.category_id',$ids);
           if($year)
               $qry=$qry->whereYear('o.created_date',$year);
           if($month)
               $qry=$qry->whereMonth('o.created_date',$month);
           if(($start !='') && ($end != ''))
               $qry->whereBetween('o.created_date',[$start,$end]);

           $product_cnt=$qry->count();

           $parent_category->item_count=$product_cnt;
       }
       $data['sale_category_cnt']=$parent_categorys_sales;

       //TOTAL SALES CASH AND PAYPAL
       //CASH SELL
       $qry=DB::table('order')->where('payment_opt','2');
       if($year)
           $qry=$qry->whereYear('created_date',$year);
       if($month)
           $qry=$qry->whereMonth('created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('created_date',[$start,$end]);

       $total_cash_sale=$qry->count();
       //FIX PRICE AED
       $cash_fix_total=0;
       $qry=DB::table('order as o')
           ->join('product as  p','p.id','=','o.product_id')
           ->where('o.payment_opt','2')
           ->where('p.selling_type','Fixed price');
       if($year)
           $qry=$qry->whereYear('o.created_date',$year);
       if($month)
           $qry=$qry->whereMonth('o.created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('o.created_date',[$start,$end]);

       $cash_product=$qry->get(['p.price','p.discount','o.quantity']);
       foreach ($cash_product as $product){
           if($product->quantity>0){
               $price=$product->price * $product->quantity;
               $discount=$product->discount * $product->quantity;
           }else{
               $price=$product->price ;
               $discount=$product->discount;
           }
           $discnt=($price*$discount)/100;
           $cash_fix_total+=$price-$discnt;
       }
       //AUCTION STYLE
       $qry=DB::table('order as o')
           ->join('product as  p','p.id','=','o.product_id')
           ->where('o.payment_opt','2')
           ->where('p.selling_type','Auction style');
       if($year)
           $qry=$qry->whereYear('o.created_date',$year);
       if($month)
           $qry=$qry->whereMonth('o.created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('o.created_date',[$start,$end]);

       $cash_auction_total=$qry->sum('o.order_price');
       $data['total_cash_sale']=['cash_count'=>$total_cash_sale,'cash_fix_total'=>$cash_fix_total,'cash_auction_total'=>$cash_auction_total];

       //PAYPAL SALE
       $qry=DB::table('order')->where('payment_opt','1');
       if($year)
           $qry=$qry->whereYear('created_date',$year);
       if($month)
           $qry=$qry->whereMonth('created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('created_date',[$start,$end]);

       $total_paypal_sale=$qry->count();


       //FIX PRICE AED
       $paypal_fix_total=0;
       $qry=DB::table('order as o')
           ->join('product as  p','p.id','=','o.product_id')
           ->where('o.payment_opt','1')
           ->where('p.selling_type','Fixed price');
       if($year)
           $qry=$qry->whereYear('o.created_date',$year);
       if($month)
           $qry=$qry->whereMonth('o.created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('o.created_date',[$start,$end]);

       $cash_product=$qry->get(['p.price','p.discount','o.quantity']);
       foreach ($cash_product as $product){
           if($product->quantity>0){
               $price=$product->price * $product->quantity;
               $discount=$product->discount * $product->quantity;
           }else{
               $price=$product->price ;
               $discount=$product->discount;
           }
           $discnt=($price*$discount)/100;
           $paypal_fix_total+=$price-$discnt;
       }
       $data['paypal_fix_total']=$paypal_fix_total;
       //AUCTION STYLE
       $qry=DB::table('order as o')
           ->join('product as  p','p.id','=','o.product_id')
           ->where('o.payment_opt','1')
           ->where('p.selling_type','Auction style');
       if($year)
           $qry=$qry->whereYear('o.created_date',$year);
       if($month)
           $qry=$qry->whereMonth('o.created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('o.created_date',[$start,$end]);

       $paypal_product=$qry->sum('o.order_price');
       $data['paypal_product']=$paypal_product;

       $data['total_paypal_sale']=['paypal_count'=>$total_paypal_sale,'paypal_fix_total'=>$paypal_fix_total,'paypal_auction_total'=>$paypal_product];


    //FEES CHANGE BY AUCTION TYPE
       $auction_sum=0;
       $auction_cnt=0;
       $qry=DB::table('product')->where('status','=','1')->where('selling_type','=','Auction style');
      
       if($year)
           $qry=$qry->whereYear('created_date',$year);
       if($month)
           $qry=$qry->whereMonth('created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('created_date',[$start,$end]);
        
       $fees_auction_type=$qry->get(['fees_details']);
       foreach ($fees_auction_type as $fees){
           $f=unserialize($fees->fees_details);
//           print_r($f);
           foreach ($f as $key=>$value){

               if($key=='featured_fees'){
                   $auction_sum=$auction_sum + 0;
               }
               elseif ($key=='season_fees'){
//                   echo '$value[1]'.$value['1'];
//                   echo '<br>';
                   $auction_sum=$auction_sum ;
//                   echo '<br>';
               }
               else
                   $auction_sum=$auction_sum +  $value[0];
           }
           
           $auction_cnt++;
       }
//       exit;
       $data['fees_auction_type']=['auction_sum'=>$auction_sum,'auction_cnt'=>$auction_cnt];

       //TOTAL SALES BY CATEGORY
       $auction_categorys_sales=DB::table('category')->where('parent_id','0')->get(['id','category_name']);
       foreach ($auction_categorys_sales as $parent_category) {
           $sub_categorys=DB::table('category')->where('parent_id',[$parent_category->id])->get([DB::raw("group_concat(id) as id")]);
           $ids=explode(',',$sub_categorys[0]->id);
           $qry =DB::table('product') ->whereIn('category_id',$ids)->where('status','=','1')->where('selling_type','=','Auction style');
           if($year)
               $qry=$qry->whereYear('created_date',$year);
           if($month)
               $qry=$qry->whereMonth('created_date',$month);
           if(($start !='') && ($end != ''))
               $qry->whereBetween('created_date',[$start,$end]);

           $product_cnt=$qry->get();
           $sum=0;
           $cnt=0;
           foreach ($product_cnt as $fees){
               $f=unserialize($fees->fees_details);
               foreach ($f as $key=>$value){
                   if($key=='featured_fees')
                       $sum=$sum +  $value[1];
                   elseif ($key=='season_fees')
                       $sum=$sum +  $value[1];
                   else
                       $sum=$sum +  $value[0];
               }
               $cnt++;
           }
           $parent_category->data=['Total AED'=>$sum,'Item Count'=>$cnt];
       }
       $data['auction_categorys_sales']=$auction_categorys_sales;


       //FEES CHANGE BY FIX TYPE
       $auction_sum=0;
       $auction_cnt=0;
       $qry=DB::table('product')->where('status','=','1')->where('selling_type','=','Fixed price');
       if($year)
           $qry=$qry->whereYear('created_date',$year);
       if($month)
           $qry=$qry->whereMonth('created_date',$month);
       if(($start !='') && ($end != ''))
           $qry->whereBetween('created_date',[$start,$end]);

       $fees_fix_type=$qry->get(['fees_details']);

       foreach ($fees_fix_type as $fees){
           $f=unserialize($fees->fees_details);

           foreach ($f as $key=>$value){
               if($key=='featured_fees'){
                   if(isset($value[1])){
                       $auction_sum=$auction_sum +  $value[1];
                   }
//                   else {
//                       $auction_sum=$auction_sum;
//                   }
               }else if ($key=='season_fees'){
                   if(isset($value[1])){
                       $auction_sum=$auction_sum +  $value[1];
                   }
                   //$auction_sum=$auction_sum +  $value[1];
               } else
                   $auction_sum=$auction_sum +  $value[0];
           }

           $auction_cnt++;
       }

       $data['fees_fix_type']=['fix_sum'=>$auction_sum,'fix_cnt'=>$auction_cnt];

       $fix_categorys_sales=DB::table('category')->where('parent_id','0')->get(['id','category_name']);
       foreach ($fix_categorys_sales as $parent_category) {
           $sub_categorys=DB::table('category')->where('parent_id',[$parent_category->id])->get([DB::raw("group_concat(id) as id")]);
           $ids=explode(',',$sub_categorys[0]->id);
           $qry =DB::table('product') ->whereIn('category_id',$ids)->where('status','=','1')->where('selling_type','=','Fixed price');
           if($year)
               $qry=$qry->whereYear('created_date',$year);
           if($month)
               $qry=$qry->whereMonth('created_date',$month);
           if(($start !='') && ($end != ''))
               $qry->whereBetween('created_date',[$start,$end]);

           $product_cnt=$qry->get();
           $sum=0;
           $cnt=0;
           foreach ($product_cnt as $fees){
               $f=unserialize($fees->fees_details);
               foreach ($f as $key=>$value){
                   if($key=='featured_fees')
                       if(isset($value[1])){
                       $sum=$sum +  $value[1];
                       }
                   else if ($key=='season_fees')
                       if(isset($value[1])){
                       $sum=$sum +  $value[1];
                       }
                   else
                       $sum=$sum +  $value[0];
               }
               $cnt++;
           }
           $parent_category->data=['Total AED'=>$sum,'Item Count'=>$cnt];
       }
       $data['fix_categorys_sales']=$fix_categorys_sales;

       //TOTAL Delivered BY CATEGORY
       $parent_categorys_sales=DB::table('category')->where('parent_id','0')->get(['id','category_name']);
       foreach ($parent_categorys_sales as $parent_category) {
           $sub_categorys=DB::table('category')->where('parent_id',[$parent_category->id])->get([DB::raw("group_concat(id) as id")]);
           $ids=explode(',',$sub_categorys[0]->id);
           $qry =DB::table('product as p')
               ->join('order as o','o.product_id','=','p.id')
               ->where('o.order_status','Delivered')
               ->whereIn('p.category_id',$ids);
           if($year)
               $qry=$qry->whereYear('o.created_date',$year);
           if($month)
               $qry=$qry->whereMonth('o.created_date',$month);
           if(($start !='') && ($end != ''))
               $qry->whereBetween('o.created_date',[$start,$end]);

           $product_cnt=$qry->count();

           $parent_category->item_count=$product_cnt;
       }
      $data['delivered_category_cnt']=$parent_categorys_sales;


       //TOTAL AUCTION ITEM BY CATEGORY
       $parent_categorys_auction=DB::table('category')->where('parent_id','0')->get(['id','category_name']);
       foreach ($parent_categorys_auction as $parent_category) {
           $sub_categorys=DB::table('category')->where('parent_id',[$parent_category->id])->get([DB::raw("group_concat(id) as id")]);
           $ids=explode(',',$sub_categorys[0]->id);
           $qry =DB::table('product as p')
               ->whereIn('p.status',[1,3])
               ->where('p.selling_type','Auction style')
               ->whereIn('p.category_id',$ids);
           if($year)
               $qry=$qry->whereYear('p.created_date',$year);
           if($month)
               $qry=$qry->whereMonth('p.created_date',$month);
           if(($start !='') && ($end != ''))
               $qry->whereBetween('p.created_date',[$start,$end]);

           $product_cnt=$qry->count();

           $parent_category->item_count=$product_cnt;
       }
       $data['auction_category_cnt']=$parent_categorys_auction;

       //TOTAL BUY IT NOW ITEM BY CATEGORY
       $parent_categorys_fix=DB::table('category')->where('parent_id','0')->get(['id','category_name']);
       foreach ($parent_categorys_fix as $parent_category) {
           $sub_categorys=DB::table('category')->where('parent_id',[$parent_category->id])->get([DB::raw("group_concat(id) as id")]);
           $ids=explode(',',$sub_categorys[0]->id);
           $qry =DB::table('product as p')
               ->whereIn('p.status',[1,3])
               ->where('p.selling_type','Fixed price')
               ->whereIn('p.category_id',$ids);
           if($year)
               $qry=$qry->whereYear('p.created_date',$year);
           if($month)
               $qry=$qry->whereMonth('p.created_date',$month);
           if(($start !='') && ($end != ''))
               $qry->whereBetween('p.created_date',[$start,$end]);

           $product_cnt=$qry->count();

           $parent_category->item_count=$product_cnt;
       }
       $data['fix_category_cnt']=$parent_categorys_fix;

           //Total returns, total refunds etc
        $total_sale=0;
        $total_return=0;
        $total_remaining_payment=0;
        $total_cancal_transaction=0;
        $saller_other=0;
        $total_remaining_product=0;
        $total_diff_product=0;
        $buyer_other=0;

       $qry=DB::table('resolution_center as r')
           ->leftjoin('users as u','u.id','=','r.buyer_id')
           ->leftjoin('users as us','us.id','=','r.seller_id')
           ->leftjoin('product as p','p.id','=','r.product_id')
           ->groupBy('r.buyer_id','r.product_id','r.order_id')
           ->orderBy('r.id','desc');

           if($year)
               $qry=$qry->whereYear('r.created_date',$year);
           if($month)
               $qry=$qry->whereMonth('r.created_date',$month);
           if(($start !='') && ($end != ''))
               $qry->whereBetween('r.created_date',[$start,$end]);

        $returns=$qry->get([DB::raw("count(tbl_r.id) as cnt,tbl_p.price,tbl_r.question,tbl_r.requested_by")]);

        foreach ($returns as $product){
            $total_return=count($returns);
            $total_sale=$total_sale + $product->price;
            if($product->question=="I received an item that does not match the seller's description")
                $total_diff_product=$total_diff_product + 1;
            elseif($product->question=="I haven't received it yet")
                $total_remaining_product=$total_remaining_product + 1;
            elseif($product->question=="I haven't received my payment yet")
                $total_remaining_payment=$total_remaining_payment + 1;
            elseif($product->question=="I need to cancel a transaction")
                $total_cancal_transaction=$total_cancal_transaction + 1;
            elseif(($product->question!="I haven't received my payment yet" || $product->question!="I need to cancel a transaction")&& ($product->requested_by=='seller'))
                $saller_other=$saller_other+ 1;
            elseif(($product->question!="I received an item that does not match the seller's description" || $product->question!="I haven't received it yet")&& ($product->requested_by=='buyer'))
                $buyer_other=$buyer_other+1;
        }
        
//        $data['notification']=DB::table('admin_notification')->where('status',0)->get();
//        echo $data['notification'];
//        if(mysqli_num_rows($result) > 0)
//        {
//            foreach($admin_notify as $row)
//            {
//              $output .= '
//              <li>
//              <a href="#">
//              <strong>'.$row["subject"].'</strong><br />
//              <small><em>'.$row["description"].'</em></small>
//              </a>
//              </li>
//              ';
//
//            }
//        } else {
//            $output .= '
//     <li><a href="#" class="text-bold text-italic">No Noti Found</a></li>';
//        }
        
//        exit;
        
       $data['total_sale']=$total_sale;
       $data['total_return']=$total_return;
       $data['total_remaining_payment']=$total_remaining_payment;
       $data['total_cancal_transaction']=$total_cancal_transaction;
       $data['total_remaining_product']=$total_remaining_product;
       $data['total_diff_product']=$total_diff_product;
       $data['buyer_other']=$buyer_other;
       $data['seller_other']=$saller_other;
	  
   return view('admin/admin_dashboard')->with('data',$data);
   }
function notification($id){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        
        $data=DB::table('admin_notification')->where('id',$id)->first(['module']);
        
        
        $view=DB::table('admin_notification')->where(['id'=>$id])->update(['status'=>'1']);
//        echo $module;exit;
        return redirect('admin/'.$data->module);
}
   
    function login(Request $r){
        try {
            DB::beginTransaction();
            $user=DB::table('users')->where(['email'=>$r->email,'role'=>'admin'])->first();
            if($user){
                if(Hash::check($r->pwd,$user->password)){
                    Session::put('userId', $user->id);
                    Session::put('userName', $user->first_name);
                        return redirect('admin/dashboard');
                }else{
                    Session::flash('message', 'You have entered an invalid email or password, Please try again.');
                    return view('admin/login');
                }
            }else{
                Session::flash('message', 'You have entered an invalid email or password, please try again.');
                return view('admin/login');
            }
            DB::commit();
        }catch (Exception $e){
               echo $e->getMessage();
               DB::rollBack();
        }
    }

    function viewBuyers(){
        try{
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

            $qry=DB::table('users')
                ->where('role','!=','admin');
                if($mnth)
                    $qry=$qry->whereMonth('created_date',$mnth);
                if($yr)
                    $qry=$qry->whereYear('created_date',$yr);
                if(($start !='') && ($end != ''))
                    $qry->whereBetween('created_date',[$start,$end]);

            $qry=$qry->orderBy('id','desc');
            $users=$qry->get();
//            echo "<pre>";
//            print_r($users);
//              echo "</pre>";
//            exit;
          $status=  Input::get('status');
            return view('/admin/view_buyers')->with('users',$users)->with('status',$status);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }
    function viewBuyersLog(){
        try{
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

            $qry=DB::table('users')
                ->where('role','!=','admin');
                if($mnth)
                    $qry=$qry->whereMonth('created_date',$mnth);
                if($yr)
                    $qry=$qry->whereYear('created_date',$yr);
                if(($start !='') && ($end != ''))
                    $qry->whereBetween('created_date',[$start,$end]);

            $qry=$qry->orderBy('id','desc');
            $users=$qry->get([DB::raw('id')]);
            
//            print_r($users->id);
//            exit;
            $id = [];
            foreach($users as $user){
//                print_r($user->id);
                array_push($id,$user->id);
//                echo '<br>';
            }
            $qry_l=DB::table('users_log')
                    ->whereIn('user_id',$id);
                   $user_log=$qry_l->get();
//            print_r($user_log);
//            exit;
            
          $status=  Input::get('status');
            return view('/admin/view_buyers_log')->with('users',$user_log)->with('status',$status);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function viewSellers(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $users=DB::table('users')
                ->orderBy('id','desc')
                ->where('role','seller')
                ->get();
            return view('/admin/view_sellers')->with('users',$users);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

   /* function changeUserStatus(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();

                $update=DB::table('users')->where('id',$r->id)->update(['user_status'=>$r->status,'status_reason'=>$r->reason]);

            DB::commit();
            return redirect($r->slug);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }*/

    function changeUserStatus($id,$status,$slug){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            if($status=='1'){
                $update=DB::table('users')->where('id',$id)->update(['user_status'=>$status]);
            }else{
                $update=DB::table('users')->where('id',$id)->update(['user_status'=>$status]);
            }
            DB::commit();
            return redirect("admin/$slug");
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function ViewInactiveReasonForm($id,$status,$slag){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            
//            if($status == 0){
//                $update=DB::table('product')->where(['status'=>'1','user_id'=>$id])->update(['status'=>'4']);
//            }
//            elseif ($status == 1){
//                $update=DB::table('product')->where(['status'=>'4','user_id'=>$id])->update(['status'=>'1']);
//            }
            $update=DB::table('users')->where('id',$id)->update(['user_status'=>$status]);
//            echo $update;exit;
            if($update){
                $user_info=DB::table('users')->where('id',$id)->first(['id','first_name','email','user_status']);
                if($user_info->user_status==1)
                    $email_template=DB::table('email_template')->where('id','13')->first();
                else
                    $email_template=DB::table('email_template')->where('id','14')->first();

                Mail::to($user_info->email,$user_info->first_name)->send(new InactiveReason($user_info,$email_template));
                return redirect("admin/$slag");
            }
//            return view('/admin/inactive_reason')->with(['id'=>$id,'status'=>$status,'slag'=>$slug]);
//            else
//                return redirect("admin/$slag");
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function inactiveUserStatus(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

           if($r->status == 0)
                DB::table('product')->where(['status'=>'1','user_id'=>$r->id])->update(['status'=>'4']);
            elseif ($r->status == 1)
                DB::table('product')->where(['status'=>'4','user_id'=>$r->id])->update(['status'=>'1']);

            $update=DB::table('users')->where('id',$r->id)->update(['user_status'=>$r->status,'status_reason'=>$r->reason]);
            if($update){
                $user_info=DB::table('users')->where('id',$r->id)->first(['id','first_name','email','status_reason','user_status']);
                if($user_info->user_status==1)
                    $email_template=DB::table('email_template')->where('id','13')->first();
                else
                    $email_template=DB::table('email_template')->where('id','14')->first();

                Mail::to($user_info->email,$user_info->first_name)->send(new InactiveReason($user_info,$email_template));
                return redirect("admin/$r->slag");
            }
            else
                return redirect("admin/$r->slag");
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    function viewBuyerDetails($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

           $user= DB::table('users')->where('id',$id)->first();
           if($user)
                return view('/admin/buyer_detail')->with('user',$user);
           else
               return response()->view('errors.404');
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function viewSellerDetails($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $user= DB::table('users')->where('id',$id)->first();
            if($user)
                return view('/admin/seller_detail')->with('user',$user);
            else
                return response()->view('errors.404');
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function deleteUsers($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $deleteUser=DB::table('users')->where('id',$id)->update(['user_status'=>'9','updated_date'=>date('Y-m-d h:i:s')]);
            if($deleteUser){
                DB::table('product')->where(['status'=>'1','user_id'=>$id])->update(['status'=>'4']);
                Session::flash('message', 'User deleted successfully.');
                return redirect('admin/view-buyers');
            }else{
                Session::flash('message', 'Something wrong happen, please try again.');
                return redirect('admin/view-buyers');
            }

        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function userWarning($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            return view('/admin/user_warning')->with('id',$id);
        } catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function SendWarningMail(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
                $user=DB::table('users')->where('id',$r->id)->first(['email']);

            if($user){
                $email_template=DB::table('email_template')->where('id','15')->first();
                Mail::to($user->email)->send(new UserWarning($r->warning,$email_template));
                Session::flash('message', 'Warning mail send successful.');
                return redirect('admin/view-buyers');
            } else
                return response()->view('errors.404');

        } catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function dashboard(Request $r) {

        $qry=DB::table('order')->where('payment_opt','1');
        if($r->year)
            $qry=$qry->whereYear('created_date',$r->year);
        if($r->month)
            $qry=$qry->whereMonth('created_date',$r->month);
        $total_paypal_sale=$qry->count();
        //FIX PRICE AED
        $paypal_fix_total=0;
        $qry=DB::table('order as o')
            ->join('product as  p','p.id','=','o.product_id')
            ->where('o.payment_opt','1')
            ->where('p.selling_type','Fixed price');
        if($r->year)
            $qry=$qry->whereYear('o.created_date',$r->year);
        if($r->month)
            $qry=$qry->whereMonth('o.created_date',$r->month);
        $cash_product=$qry->get(['p.price','p.discount','o.quantity']);
        foreach ($cash_product as $product){
            if($product->quantity>0){
               $price=$product->price * $product->quantity;
                $discount=$product->discount * $product->quantity;
            }else{
                $price=$product->price ;
                $discount=$product->discount;
            }
             $discnt=($price*$discount)/100;
            $paypal_fix_total+=$price-$discnt;
        }
        //AUCTION STYLE
        $qry=DB::table('order as o')
            ->join('product as  p','p.id','=','o.product_id')
            ->where('o.payment_opt','1')
            ->where('p.selling_type','Auction style');
        if($r->year)
            $qry=$qry->whereYear('o.created_date',$r->year);
        if($r->month)
            $qry=$qry->whereMonth('o.created_date',$r->month);
        $paypal_product=$qry->sum('o.order_price');
    }

    function logout(){
        Session::forget('userId');
        Session::forget('userName');
        return redirect('admin/login');
    }
}