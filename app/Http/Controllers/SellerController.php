<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 4/25/2018
 * Time: 5:41 PM
 */

namespace App\Http\Controllers;


use App\Mail\ContactSeller;
use App\Mail\SendSellerInvoice;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Exception;
use PDF;


class SellerController extends Controller
{
    //----------------------------------------------------ADMIN CONTROLLER-----------------------------------------

    function viewSellerList(Request $r){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        $seller=DB::table('users')->orderBy('id','desc')->where('role','seller')->get();
        return view('admin/seller_list')->with('users',$seller);
    }

    function viewSellerPaymentHistory(){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        $user_id=Input::get('id');
        if(!Input::get('month'))
            $month=date('m');
        else
            $month=Input::get('month');

        if(!Input::get('year'))
            $year=date('Y');
        else
            $year=Input::get('year');


        $user=DB::table('users')->where('id',$user_id)->first();
        $user->address=explode('@',$user->address);

        $date_array['issue_date']=date('Y-m-d',strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();//date('Y-m-d');
        $date = strtotime("+ 5 day", strtotime(date('Y-m-d',strtotime("$year-$month-1"))));//strtotime(Carbon::now()->startOfMonth()->toDateString()));
        $date_array['payment_date'] = date("Y-m-d", $date);
        $start_date=date('Y-m-d',strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();
        $date_array['start_date']=$start_date;
        $last_date_find = strtotime(date('Y-m-d',strtotime("$year-$month-1")) . ", last day of this month");
        $end_date  = date("Y-m-d",$last_date_find);
        $date_array['end_date']=$end_date;
        $invoice_id= strtotime($start_date).$month. $user_id;
        $date_array['invoice_id']=$invoice_id;

        $products=DB::table('product')->whereMonth('created_date',$month)->whereNotIn('status',[2,8,9])->whereYear('created_date',$year)->where('user_id',$user_id)->get(['title','fees_details','seller_fee','id']);
        $total=0;
        foreach ($products as $product){
            $product->fees_details=unserialize($product->fees_details);
            $total=$total+$product->seller_fee;
        }

        $transactions=DB::table('update_product as up')
            ->join('product as p','p.id','=','up.product_id')
            ->whereMonth('up.created_date',$month)->whereYear('up.created_date',$year)->where('up.user_id',$user_id)->get(['p.title','up.changes','up.created_date','p.product_sku']);

        $transaction_Total=0;
        $changess=[];
        foreach ($transactions as $transaction){
            $transaction->changes=unserialize($transaction->changes);
            $changes=unserialize($transaction->changes);
            
            
                
            if(isset($changes['featured_fees']) && $changes['featured_fees']!=''){
                array_push($changess,$changes['featured_fees']);
                $transaction_Total=$transaction_Total+$changes['featured_fees'][1];
            }elseif(isset($changes['categories_fees']) && $changes['categories_fees']!=''){
                array_push($changess,$changes['categories_fees']);
                $transaction_Total=$transaction_Total+$changes['categories_fees'][0];
            }
            
        }
        $grand_total=$total+$transaction_Total;

        $checkPaymentStatus = DB::table('seller_payment_history')
            ->Where(['month'=>$month, 'year'=>$year, 'seller_id'=>$user_id])->first();
        if($checkPaymentStatus)
            $checkPaymentStatus->payment_detail = unserialize($checkPaymentStatus->payment_detail);
        else
            $checkPaymentStatus = '';

        return view('admin/seller_payment')->with('payment_detail', $checkPaymentStatus)->with('dates',$date_array)->with('user',$user)->with('products',$products)->with('total',$total)
            ->with('transaction_detail',$transactions)->with('transaction_total',$transaction_Total)->with('grand_total',$grand_total)->with('changes',$changess);
    }

    function monthlyInvoicePayment(){ 
//        echo 'dfdgfdg';
        
        $month =  date('m');
//        echo '<br>';
        $year = date('Y');
        $datee =  date('Y-m-d');
//         $datee =  "2020-02-29";
//        echo '<br>';
//        $month =  '11';
//        echo '<br>';
//             $year = '2019';
//             echo '<br>';
$e_date = date("Y-m-t", strtotime($datee));

if($e_date==$datee){
    echo 'send';
    exit;
    
               $date_array['issue_date']=date('d.m.Y',strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();//date('Y-m-d');
                $date = strtotime("+ 5 day", strtotime(date('d.m.Y',strtotime("$year-$month-1"))));//strtotime(Carbon::now()->startOfMonth()->toDateString()));
                $date_array['payment_date'] = date("d.m.Y", $date);
                $start_date=date('d.m.Y',strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();
                $date_array['start_date']=$start_date;
                $last_date_find = strtotime(date('d.m.Y',strtotime("$year-$month-1")) . ", last day of this month");
                $end_date  = date("d.m.Y",$last_date_find);
                $date_array['end_date']=$end_date;
                

                $m_products = DB::table('product')->whereMonth('created_date', $month)->whereNotIn('status',[2,8,9])->whereYear('created_date', $year)->get(['title', 'fees_details', 'seller_fee', 'id', 'created_date', 'product_sku','user_id']);
        
//        echo count($m_products);
//        echo '<br>';
//        print_r($m_products);
//        exit;
        
        foreach($m_products as $products){
//            print_r($products);
//            exit;
            $total=0;
//        foreach ($products as $product){
            $products->fees_details=unserialize($products->fees_details);
            $total=$total+$products->seller_fee;
//        }
            
            $invoice_id= strtotime($start_date).$month. $products->user_id;
                $date_array['invoice_id']=$invoice_id;
            $user=DB::table('users')->where('id',$products->user_id)->first();
        $transactions=DB::table('update_product as up')
            ->join('product as p','p.id','=','up.product_id')
            ->whereMonth('up.created_date',$month)->whereYear('up.created_date',$year)->where('up.user_id',$products->user_id)->get(['p.title','up.changes','up.created_date','p.product_sku']);

        $transaction_Total=0;
        foreach ($transactions as $transaction){
            $transaction->changes=unserialize($transaction->changes);

            if($transaction->changes['featured_fees']!=''){
                $transaction_Total=$transaction_Total+$transaction->changes['featured_fees'][1];
            }else
                $transaction_Total=$transaction_Total+$transaction->changes['categories_fees'][0];
        }
        $grand_total=$total+$transaction_Total;

        /* return view('invoice/seller_invoice')->with('user',$user)->with('dates',$date_array)->with('products',$products)->with('total',$total)
                 ->with('transaction_details',$transactions)->with('transaction_total',$transaction_Total)->with('grand_total',$grand_total);*/
        $invoice_note=DB::table('setting')->where('id','1')->first(['invoice_note']);
//        echo $id;
//        print_r($user);
        
        $products1[] = $products;
        $data = [
            'user' => $user,
            'dates'=>$date_array,
            'products'=>$products1,
            'total'=>$total,
            'transaction_details'=>$transactions,
            'transaction_total'=>$transaction_Total,
            'grand_total'=>$grand_total,
            'invoice_note'=>$invoice_note->invoice_note
        ];
        
//        $pdf = PDF::loadView('/invoice/seller_invoice',$data)->save(public_path("invoice/seller/$invoice_id.pdf"));
        echo '<pre>';
        print_r($data);
        echo '</pre>';
        echo '<br>';
        echo "invoice/seller/$invoice_id.pdf";echo '<br>';
        exit;
        
//        $email_template=DB::table('email_template')->where('id','21')->first();
//        Mail::to($user->email)->send(new SendSellerInvoice($invoice_id,$email_template));
        
            
            
//           exit; 
        }
    
    
    
} else{
    echo 'else';
    exit;
}

//exit;
//                $user = DB::table('users')->where('id', $r->user_id)->first();
//                $user->address = explode('@', $user->address);

        return redirect("admin/dashboard");
//        print_r($_POST);
    }
    
    
    
    function sendSellerPaymentInvoiceByAdmin(){

        $id=Input::get('id');
        if(!Input::get('month'))
            $month=date('m');
        else
            $month=Input::get('month');

        if(!Input::get('year'))
            $year=date('Y');
        else
            $year=Input::get('year');

        $user=DB::table('users')->where('id',$id)->first();

        $date_array['issue_date']=date('Y-m-d',strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();//date('Y-m-d');
        $date = strtotime("+ 5 day", strtotime(date('Y-m-d',strtotime("$year-$month-1"))));//strtotime(Carbon::now()->startOfMonth()->toDateString()));
        $date_array['payment_date'] = date("Y-m-d", $date);
        $start_date=date('Y-m-d',strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();
        $date_array['start_date']=$start_date;
        $last_date_find = strtotime(date('Y-m-d',strtotime("$year-$month-1")) . ", last day of this month");
        $end_date  = date("Y-m-d",$last_date_find);
        $date_array['end_date']=$end_date;
        
//        echo strtotime($start_date).'<br>';
//        echo $month.'<br>';
//        echo $id.'<br>';
        
        $invoice_id= strtotime($start_date).$month. $id;
//        exit;
        $date_array['invoice_id']=$invoice_id;

        $products=DB::table('product')->whereMonth('created_date',$month)->whereNotIn('status',[2,8,9])->whereYear('created_date',$year)->where('user_id',$id)->get(['title','fees_details','seller_fee','id','created_date','product_sku']);
        $total=0;
        foreach ($products as $product){
            $product->fees_details=unserialize($product->fees_details);
            $total=$total+$product->seller_fee;
        }

        $transactions=DB::table('update_product as up')
            ->join('product as p','p.id','=','up.product_id')
            ->whereMonth('up.created_date',$month)->whereYear('up.created_date',$year)->where('up.user_id',$id)->get(['p.title','up.id','up.changes','up.created_date','p.product_sku']);
        $changess=[];
        $transaction_Total=0;
        foreach ($transactions as $transaction){
            $transaction->changes=unserialize($transaction->changes);
            $changes=unserialize($transaction->changes);
//            echo '<pre>';
//            print_r($changes);
//            echo '</pre>';
            if(isset($changes['featured_fees']) && $changes['featured_fees']!=''){
                array_push($changess, 'featured_fees');
                array_push($changess, $changes['featured_fees']);
                $transaction_Total=$transaction_Total+$changes['featured_fees'][1];
            }elseif(isset($changes['categories_fees']) && $changes['categories_fees']!=''){
                array_push($changess, 'categories_fees');
                array_push($changess, $changes['categories_fees']);
                $transaction_Total=$transaction_Total+$changes['categories_fees'][0];
            }
        }
        $grand_total=$total+$transaction_Total;

        /* return view('invoice/seller_invoice')->with('user',$user)->with('dates',$date_array)->with('products',$products)->with('total',$total)
                 ->with('transaction_details',$transactions)->with('transaction_total',$transaction_Total)->with('grand_total',$grand_total);*/
        $invoice_note=DB::table('setting')->where('id','1')->first(['invoice_note']);
//        echo $id;
//        print_r($user);
        $data = [
            'user' => $user,
            'dates'=>$date_array,
            'products'=>$products,
            'total'=>$total,
            'transaction_details'=>$transactions,
            'transaction_total'=>$transaction_Total,
            'grand_total'=>$grand_total,
            'changes'=>$changess,
            'invoice_note'=>$invoice_note->invoice_note
        ];
//        echo '<pre>';
//        print_r($transactions);
//        echo '</pre>';
//        echo '<pre>';
//        print_r($data);
//        echo '</pre>';
//        exit;
        $pdf = PDF::loadView('/invoice/seller_invoice',$data)->save(public_path("invoice/seller/$invoice_id.pdf"));
        
        echo "invoice/seller/$invoice_id.pdf";
        exit;
        
        $email_template=DB::table('email_template')->where('id','21')->first();
        Mail::to($user->email)->send(new SendSellerInvoice($invoice_id,$email_template));
        return redirect("admin/view-seller-payment-history?id=$id&year=$year&month=$month");
    }

    
    function viewInvoiceForm(Request $r){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        $seller=DB::table('users')->orderBy('id','desc')->where('role','seller')->get();
        return view('admin/add_invoice_setting')->with('users',$seller);
    }
    
    function saveInvoiceForm(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
//            print_r($r->invoicelist);
            
//            $r->validate([
//                'sellerid' => 'required',
//                'month' => 'required',
//                'invoicelist' => 'required',
//                'checklist' => 'required'
//            ]);
            
            
            
            
//            echo $r;
//            echo 'invoicelist';
//            print_r($r->invoicelist);
//            echo count($r->seller_id);
//            exit;
            
//            $month = $r->month;
            $month = date('m-Y', strtotime($r->month));
//            print_r($r->checklist);
//            echo '<br>';
            $checklist = implode(',', $r->checklist);
//            exit;
            foreach ($r->invoicelist as $id){
                $sets = ['seller_id' => $id, 'month' => $month, 'checklist_id' => $checklist];
//                print_r($sets);echo '<br>';
                $save = DB::table('seller_invoice_setting')->insertGetId($sets);
                DB::commit();
            }
//            exit;
            if ($save) {
                Session::flash('message','Seller invoice setting add successfully');
                return redirect('admin/view-invoice-form');
            } else {
                Session::flash('message','Something want to wrong.');
                return redirect('admin/view-invoice-form');
            }
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }
    
    function viewInvoiceSetting(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $seller=DB::table('seller_invoice_setting as f')
                ->join('users as u','u.id','=','f.seller_id')
                ->get(['f.id','f.seller_id' ,'f.month','f.checklist_id','u.first_name','u.last_name','u.display_name']);
            
//            print_r($seller);
//            exit;
            
            return view('admin/view_invoice_setting')->with('datas',$seller);
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }
    
    function editInvoiceForm($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $seller=DB::table('seller_invoice_setting as f')
                ->join('users as u','u.id','=','f.seller_id')
                ->where('f.id',$id)
                ->first(['f.id','f.month','f.checklist_id','u.first_name','u.last_name','u.display_name']);
            if($seller)
                return view('admin/edit_invoice_form')->with('data',$seller);
            else
                return response()->view('errors.404');
        }
        catch(Exception $e){
            echo $e->getMessage();
        }
    }
    
    function editInvoiceFormData(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $r->validate([
                'month' => 'required',
                'checklist' => 'required'
            ]);

            $month = $r->month;
//            $end_date = $r->end_date;
            $checklist = implode(',', $r->checklist);
            $sets = ['month' => $month, 'checklist_id' => $checklist,'updated_date'=>date('Y-m-d h:i:s')];
            $save = DB::table('seller_invoice_setting')->where('id',$r->id)->update($sets);
            if ($save) {
                Session::flash('message','Seller invoice setting updated successfully');
                DB::commit();
                return redirect('admin/view-invoice-setting');
            }
            else{
                Session::flash('message','Something want to wrong.');
                return redirect('admin/view-invoice-setting');
            }
        }
        catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }
    
    function deleteInvoiceSetting($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            $delete=DB::table('seller_invoice_setting')->where('id',$id)->delete();
            if($delete){
                Session::flash('message','Seller Invoice Setting deleted Successfully');
                DB::commit();
                return redirect('admin/view-invoice-setting');
            }else{
                Session::flash('message','something wrong happen');
                return redirect('admin/view-invoice-setting');
            }
        }
        catch(Exception $e){
            echo $e->getMessage();
        }
    }
    
    
    
    function previewSellerPaymentHistory(Request $r){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
                
                $date= explode(" ",$r->date);
                $user_id= implode(",",$r->id);
//                print_r(explode(" ",$r->date));
                $month = $date[0];
                $year = $date[1];
//                $r->user_id=$user_id;
                $user_id1 = $user_id;
//                exit;
$data = [];
$i=0;
                $user=DB::table('users')->whereIn('id',$r->id)->get();
//                print_r($user);
//                exit;
                foreach ($user as $users){
//                    print_r($users);
                    $user_name = $users->first_name .' '. $users->last_name .' ( '.$users->display_name .' ) ';
//                    array_push($data,$user_name);
//                    array_push($data,$r->date);
                    $data[$i]['user_id'] = $users->id;
                    $data[$i]['user_name'] = $user_name;
        $data[$i]['month'] = $r->date;
        
        $date_array['issue_date']=date('Y-m-d',strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();//date('Y-m-d');
        $date = strtotime("+ 5 day", strtotime(date('Y-m-d',strtotime("$year-$month-1"))));//strtotime(Carbon::now()->startOfMonth()->toDateString()));
        $date_array['payment_date'] = date("Y-m-d", $date);
        $start_date=date('Y-m-d',strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();
        $date_array['start_date']=$start_date;
        $last_date_find = strtotime(date('Y-m-d',strtotime("$year-$month-1")) . ", last day of this month");
        $end_date  = date("Y-m-d",$last_date_find);
        $date_array['end_date']=$end_date;
//        echo $start_date;
        $timestamp = strtotime($start_date);

$year = date('Y', $timestamp);
//echo '<br>';
$month = date("n", $timestamp);
//        exit;
        
//        echo strtotime($start_date).'<br>';
//        echo $month.'<br>';
//        echo $users->id.'<br>';

        $invoice_id= strtotime($start_date).$month. $users->id;
        
//        exit;
        $date_array['invoice_id']=$invoice_id;
//        array_push($data,$invoice_id);
        $data[$i]['invoice'] = $invoice_id;
        $products=DB::table('product')->whereMonth('created_date',$month)->whereNotIn('status',[2,8,9])->whereYear('created_date',$year)->where('user_id',$users->id)->get(['title','fees_details','seller_fee','id','created_date','product_sku']);
        $total=0;
        foreach ($products as $product){
            $product->fees_details=unserialize($product->fees_details);
            $total=$total+$product->seller_fee;
        }

        $transactions=DB::table('update_product as up')
            ->join('product as p','p.id','=','up.product_id')
            ->whereMonth('up.created_date',$month)->whereYear('up.created_date',$year)->where('up.user_id',$users->id)->get(['p.title','up.id','up.changes','up.created_date','p.product_sku']);
        $changess=[];
        $transaction_Total=0;
        foreach ($transactions as $transaction){
            $transaction->changes=unserialize($transaction->changes);
            $changes=unserialize($transaction->changes);
//            echo '<pre>';
//            print_r($changes);
//            echo '</pre>';
            if(isset($changes['featured_fees']) && $changes['featured_fees']!=''){
                array_push($changess, 'featured_fees');
                array_push($changess, $changes['featured_fees']);
                $transaction_Total=$transaction_Total+$changes['featured_fees'][1];
            }elseif(isset($changes['categories_fees']) && $changes['categories_fees']!=''){
                array_push($changess, 'categories_fees');
                array_push($changess, $changes['categories_fees']);
                $transaction_Total=$transaction_Total+$changes['categories_fees'][0];
            }
        }
        $grand_total=$total+$transaction_Total;

        /* return view('invoice/seller_invoice')->with('user',$user)->with('dates',$date_array)->with('products',$products)->with('total',$total)
                 ->with('transaction_details',$transactions)->with('transaction_total',$transaction_Total)->with('grand_total',$grand_total);*/
        $invoice_note=DB::table('setting')->where('id','1')->first(['invoice_note']);
//        echo $id;
//        echo '<pre>';
//        print_r($user);
//        echo '</pre>';
        $data1 = [
            'user' => $users,
            'dates'=>$date_array,
            'products'=>$products,
            'total'=>$total,
            'transaction_details'=>$transactions,
            'transaction_total'=>$transaction_Total,
            'grand_total'=>$grand_total,
            'changes'=>$changess,
            'invoice_note'=>$invoice_note->invoice_note
        ];
//        echo '<pre>$data1';
//        print_r($data1);
//        echo '</pre>';
        
        $pdf = PDF::loadView('/invoice/seller_invoice',$data1)->save(public_path("invoice/seller/$invoice_id.pdf"));
        $data[$i]['invoice'] = "invoice/seller/$invoice_id.pdf";
//        echo "invoice/seller/$invoice_id.pdf";
//        exit;
        
        
        $i++;
                } 
        
        ?>
        <div class="panel panel-default">
            <div class="panel-body">
                <!-- table-responsive -->
                <div class="clearfix mb30"></div>
                <br />
                <div class="table-responsive">
                    <table class="table" id="table2">
                        <thead>
                        <tr>
                            <th>Select</th>
                            <th>Seller Name</th>
                            <th>Month/Year</th>
                            <th>Preview Invoice</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($data as $datas){ 
                            $file_pointer='../invoice/seller/'.$datas['invoice'].'.pdf';
//                            if(file_exists($file_pointer)){
                            ?>
                        <tr>
                            <td><input type="checkbox" name="invoicelist[]"  value="<?php echo $datas['user_id']; ?>" required="required"/>
                                <input type="hidden" name="invoiceid[]"  value="<?php echo $datas['user_id']; ?>"/>
                               <?php // if ($errors->has('invoiceid')) { ?>
                                            <!--<div class="error"><?php // echo $errors->first('invoiceid'); ?></div>-->
                            <?php // } ?>
                            </td>
                            <td><?php echo $datas['user_name']; ?></td>
                            <td><?php echo $datas['month']; ?></td>
                            <td>
                                <!--<a <?php  $file_pointer='../invoice/seller/'.$datas['invoice'].'.pdf'; if(file_exists($file_pointer)){ echo 'href="'.$file_pointer.'" target="_blank"'; } else { echo '#'; } ?> >-->
                                <a href="../<?php echo $datas['invoice']; ?>" target="_blank" >
                                    <i title="Preview" class="fa fa-eye text-primary" style="font-size: 20px;"></i>
                                </a> &nbsp;&nbsp;&nbsp; 
                              
                                
                            </td>
                        </tr>
                            <?php } //else { ?>
                        
                        <!--<tr><td><p style="text-align: center;">No data found</p></td></tr>-->
                            <?php //}
//                            } ?>
                        </tbody>
                    </table>
                </div>
             
                <!-- table-responsive -->
            </div>
            <!-- panel-body -->
        </div>
        
        <?php
        
    }
    
    
    
    //-----------------------------------------------------API-----------------------------------------------------
    function saveSeller(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                if($r->status=="save"){
                    $checkSeller=DB::table('save_seller')->where(['user_id'=>$r->user_id,'seller_id'=>$r->seller_id])->exists();
                    if($checkSeller){
                        $this->reply['save_seller']=['status'=>'fail','msg'=>'Seller already saved.'];
                        return response()->json($this->reply);
                    }else
                        $Seller=DB::table('save_seller')->insertGetId(['user_id'=>$r->user_id,'seller_id'=>$r->seller_id]);
                }elseif($r->status=="remove")
                    $Seller=DB::table('save_seller')->where(['user_id'=>$r->user_id,'seller_id'=>$r->seller_id])->delete();
                else
                    $reply['seller']=['status'=>'fail','msg'=>'status not match.'];

                if($Seller){
                    DB::commit();
                    $reply['seller']=['status'=>'success','msg'=>'Operation perform successful.'];
                }else{
                    $reply['seller']=['status'=>'fail','msg'=>'something wrong'];
                }
            }
            return response()->json($reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function viewSeller(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();

                $qry=DB::table('save_seller as s')
                    ->join('users as us','us.id','=','s.seller_id')
                    ->where('s.user_id',$r->user_id)
                    ->orderBy('s.created_date','desc');
                $viewSeller=$qry->get(['us.business_name','us.display_name','s.created_date','s.seller_id','s.id','us.profile_pic','us.created_date as registered_date']);
                if($viewSeller){
                    for($i=0;$i<count($viewSeller);$i++) {
                        $positiveAvg=DB::table('feedback')->where('receiver_id',$viewSeller[$i]->seller_id)->first([DB::raw("SUM(IF(feedback_type='Positive', '1', '0'))/COUNT(id) as avg,COUNT(id) as count ")]);
                        $viewSeller[$i]->feedback_avg=$positiveAvg->avg*100;
                        $viewSeller[$i]->feedback_count=$positiveAvg->count;

                        $user_follower_count=DB::table('save_seller as s')
                            ->where('s.seller_id',$viewSeller[$i]->seller_id)
                            ->count();
                        $viewSeller[$i]->follower_cnt=$user_follower_count;
                        $viewSeller[$i]->created_date = date('d.m.Y H:i:s',strtotime($viewSeller[$i]->created_date));
                        $viewSeller[$i]->registered_date = date('d.m.Y H:i:s',strtotime($viewSeller[$i]->registered_date));
                    }
                    DB::commit();
                    $reply['seveseller']=['status'=>'success','data'=>$viewSeller];
                }
                else{
                    $reply['seveseller']=['status'=>'fail','msg'=>'something wrong'];
                }
            }
            return response()->json($reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function viewFollower(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $follower=DB::table('save_seller as s')
                    ->join('users as u','u.id','=','s.user_id')
                    ->where('s.seller_id',$r->user_id)
                    ->get(['u.first_name','u.last_name','u.display_name','u.profile_pic','u.id as user_id']);
                foreach ($follower as $f){
                    $user_follower_count=DB::table('save_seller as s')
                        ->join('users as u','u.id','=','s.user_id')
                        ->where('s.seller_id',$f->user_id)
                        ->count();
                    $f->follower_cnt=$user_follower_count;
                }
                $this->reply['follower']=['status'=>'success','data'=>$follower];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function viewFollowing(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $following=DB::table('save_seller as s')
                    ->join('users as u','u.id','=','s.seller_id')
                    ->where('s.user_id',$r->user_id)
                    ->get(['u.first_name','u.last_name','u.display_name','u.profile_pic','u.id as user_id']);

                foreach ($following as $f){
                    $user_follower_cnt=DB::table('save_seller as s')
                        ->join('users as u','u.id','=','s.seller_id')
                        ->where('s.seller_id',$f->user_id)
                        ->count();
                    $f->follower_cnt=$user_follower_cnt;
                }
                $this->reply['following']=['status'=>'success','data'=>$following];
            }else
                $this->reply['auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function contactSeller(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $user_info=DB::table('users')->where('id',$r->user_id)->first(['first_name','last_name','display_name','email']);
                $seller_info=DB::table('users')->where('id',$r->seller_id)->first(['first_name','last_name','display_name','email']);
                $user_info->msg=$r->message;

                Mail::to("$seller_info->email","$seller_info->first_name")->send(new ContactSeller($user_info,$seller_info));
                $this->reply['contact_seller']=['status'=>'success','msg'=>'Successful send mail.'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
        return response()->json($this->reply);
    }

    function viewActiveProduct(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();

               /* $p_ids=array();
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
                        $p_ids[]=$product->id;
                    }
                }*/
                $products=DB::table('product')->where(['status'=>'1','user_id'=>$r->user_id])->get();
                $p_id=array();
                foreach ($products as $product){
                    $date = strtotime("+ $product->renew_duration day", strtotime($product->approve_date));
                    $last_date=date("Y-m-d h:i:s", $date);
                    $current_date=date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    if($datetime1 > $datetime2)
                        $p_id[]=$product->id;
                }

                $qry=DB::table('product as p')
                    ->where(function($q){
                        $q->orwhere('status','1');
                        $q->orwhere('status','3');})
                    ->whereNotIn('id',$p_id);

                if($r->user_id)
                    $qry=$qry->where('p.user_id',$r->user_id);
                if($r->product_id)
                    $qry=$qry->where('p.id',$r->product_id);
                if($r->newly_listed)
                    $qry=$qry->orderBy('p.created_date','desc');
                    //$qry=$qry->where('p.created_date','>',Carbon::now()->subDays(2));
                if($r->price)
                    $qry=$qry->orderBy('p.price',$r->price);
                if($r->quantity)
                    $qry=$qry->orderBy('p.quantity',$r->quantity);
                if($r->auction)
                    $qry=$qry->where('p.selling_type',$r->auction);
                if($r->fix_price){
                    $qry=$qry->where('p.selling_type',$r->fix_price);
                    $qry=$qry->where('make_offer','!=','1');
                }
                if($r->best_offer)
                    $qry=$qry->where('p.make_offer','=','1');
                if($r->out_of_stock)
                    $qry=$qry->where('p.quantity','<=','0');

                $products=$qry->get(['p.id as product_id','p.product_sku','p.title','p.subtitle','p.category_id','p.photos',
                    'p.isbn','p.settype_id','p.brand_id','p.p_condition','p.discount','p.condition_description','p.specification','p.payment_opt','p.description',
                    'p.quantity','p.price','p.duration','p.renew_duration','p.return_opt','p.selling_type','p.product_address','p.warrenty','p.ship_to','p.daily_deal','p.status','p.created_date','p.secondary_cat_ids','p.make_offer',
                    'p.shipment_type','p.delivery_days','p.paypal_email','p.updated_date','p.approve_date'
                ]);
                foreach($products as $product){
                    //RATING
                    $product_avg=$this->ProductAvg($product->product_id);
                    $product->product_avg=$product_avg[0];
                    $product->product_rate_cnt=$product_avg[1];

                    $product->views=DB::table('recently_view')->where('product_id',$product->product_id)->count();

                    $productImg=unserialize($product->photos);
                    $product->photos=$productImg;

                    $product->description=preg_replace('!\\r?\\n!', " ",$product->description);
                    $product->condition_description=preg_replace('!\\r?\\n!', " ",$product->condition_description);

                    $product->specification=unserialize($product->specification);

                    $payment_opt=unserialize($product->payment_opt);
                    $product->payment_opt=preg_replace('!\\r?\\n!', " ",$payment_opt);

                    $shipment_type=unserialize($product->shipment_type);
                    $product->shipment_type=preg_replace('!\\r?\\n!', " ",$shipment_type);

                    $category=DB::table('category')->where('id',$product->category_id)->first();
                    $product->sub_category_name=$category->category_name;

                    $parent_cat=DB::table('category')->where('id',$category->parent_id)->first();
                    $product->parent_cat_name=$parent_cat->category_name;
                    $product->parent_cat_id=$parent_cat->id;

                    if($product->secondary_cat_ids!='' ){
                        $sec_ids=unserialize($product->secondary_cat_ids);
                        $secondry_category=DB::table('category')->whereIn('id',$sec_ids)->get(['id','parent_id','category_name','facility_charges']);
                        $product->secondry_cat=$secondry_category;
                    }else
                        $product->secondry_cat=[];

                    $discount=$product->price*$product->discount/100;
                    $product->final_price=$product->price-$discount;

                    //CHECK PRODUCT REMAINING TIME
                    $duration=  $product->renew_duration;
                    $created_date=$product->approve_date;
                    $date = strtotime("+ $duration day", strtotime($created_date));
                    $last_date = date("Y-m-d h:m:i", $date);
                    $current_date = date("Y-m-d h:m:i");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);
                    $days_left = $interval->format('%R%a days');

                    $hour = $interval->format('%h hours ');
                    $product->days_left = $days_left . ' ' . $hour;
                    $product->days=$interval->format('%a').'.'.$interval->format('%h');

                    $invert = $interval->invert;
                    if ($invert == "0")
                        $product->time = 'Started';
                    else
                        $product->time = 'End';
            }
                //COUNT
                $data['all']=DB::table('product')->where(['user_id'=>$r->user_id])->whereNotIn('id',$p_id)
                    ->where(function ($q){
                        $q->orWhere('status',"1");
                        $q->orWhere('status',"3");
                    })->count();
                $data['auction']=DB::table('product')->where(['user_id'=>$r->user_id])->whereNotIn('id',$p_id)
                    ->where(function ($q){
                        $q->orWhere('status',"1");
                        $q->orWhere('status',"3");
                    })->where('selling_type','Auction style')->count();
                $data['fix_price']=DB::table('product')->where(['user_id'=>$r->user_id])->whereNotIn('id',$p_id)
                    ->where(function ($q){
                        $q->orWhere('status',"1");
                        $q->orWhere('status',"3");
                    })->where('make_offer','!=','1')
                    ->where('selling_type','Fixed price')->count();
                $data['best_offer']=DB::table('product')->where(['user_id'=>$r->user_id])->whereNotIn('id',$p_id)
                    ->where(function ($q){
                        $q->orWhere('status',"1");
                        $q->orWhere('status',"3");
                    })->where('make_offer','=','1')->count();
                $data['out_of_stock']=DB::table('product')->where(['user_id'=>$r->user_id])->whereNotIn('id',$p_id)
                    ->where(function ($q){
                        $q->orWhere('status',"1");
                        $q->orWhere('status',"3");
                    })->where('quantity','<=','0')->count();

                //SORT MULTIDIMENSIONAL ARRAY
                if($r->endsoon){
                    $products=$products->toArray();
                    array_multisort( array_column($products, "days"), SORT_ASC, $products);
                }
                if($products)
                    $this->reply=['status'=>'success','data'=>$products,'count'=>$data];
                else
                    $this->reply=['status'=>'fail','msg'=>"something wrong happen."];

                DB::commit();
            }else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }catch (Exception $e){
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
    function MeargeImages(){
        $SPath = public_path("images/product/1/S/2.jpeg");
        $SPath= str_replace("\\","/",$SPath);

        $src=public_path('images/filler_white.png');
        $src= str_replace("\\","/",$src);
        $dest = imagecreatefrompng($src);
        $src = imagecreatefromjpeg($SPath);

        imagealphablending($dest, false);
        imagesavealpha($dest, true);
        //imagecopymerge($dest, $src, 0, 0, 100, 100, 1350, 1500, 100); //have to play with these numbers for it to work for you, etc.
        imagecopymerge($dest, $src, 250, 100, 0, 0, 350, 350, 100); //have to play with these numbers for it to work for you, etc.

        header('Content-Type: image/png');

        addslashes(file_get_contents(imagepng($dest)));
    }

    function viewSoldProduct(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $user_id=$r->user_id;

                $qry=DB::table('order as o')
                    ->join('product as p','p.id','=','o.product_id')
                    ->distinct('o.product_id')
                    ->select("product_id",
                        DB::raw("(SELECT SUM(quantity) from tbl_order where status!='cancel' and product_id=tbl_o.product_id) as sold_quantity,
                       (SELECT  count(buyer_id) from tbl_order where status!='cancel' and product_id=tbl_o.product_id) as buyer_cnt"))
                    ->where('o.status','!=','cancel')
                    ->where('p.status','!=','9')
                    ->where(['o.seller_id'=>$user_id]);
                if($r->payment)
                    $qry=$qry->where('o.status','unpaid');
                if($r->shipment)
                    $qry=$qry->where('o.status','conform');
                if($r->shipped)
                    $qry=$qry->where('o.status','shipped');

                $sold_product=$qry->get();

                $sold_item=array();
                foreach ($sold_product as $product){
                    $product_info=DB::table('product')->where(['id'=>$product->product_id,'status'=>'1'])->first();
                    if($product_info){
                        $product_info->sold_quantity=$product->sold_quantity;
                        $product_info->total_buyer=$product->buyer_cnt;
                        $sold_item[]=$product_info;
                    }
                }

                if(count($sold_item)>0){
                    foreach ($sold_item as $item){
                        $item->photos=unserialize($item->photos);
                        $item->specification=unserialize($item->specification);
                        $item->shipment_type=unserialize($item->shipment_type);
                        $item->payment_opt=unserialize($item->payment_opt);
                    }
                    $this->reply['sold_product']=['status'=>'success','data'=>$sold_item];
                }else
                    $this->reply['sold_product']=['status'=>'success','data'=>[]];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function viewProductPurchaseUserList(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                $qry=DB::table('order as o')
                    ->leftjoin('users as u','u.id','=','o.buyer_id')
                    ->leftjoin('shipping as s','s.id','=','o.shipping_id')
                    ->where('o.product_id',$r->product_id);

                $viewProductPurchaseUserList=$qry->get(['u.first_name','u.last_name','u.email','u.display_name','u.mobile_number','u.profile_pic','u.id as user_id',
                    'o.id','o.order_id','o.product_id','o.buyer_id','o.status','o.order_price','o.quantity','o.order_status','o.created_date as order_date',
                    's.ship_name','s.mobile','s.ship_date','s.ship_address','s.ship_city','s.ship_state','s.ship_country','s.ship_pincode']);
                $i=0;
                foreach($viewProductPurchaseUserList as $viewList){
                    $viewProductPurchaseUserList[$i]->order_date = date('d.m.Y H:i:s', strtotime($viewList->order_date));
                    $i++;
                }

                $this->reply['user_list']=['status'=>'success','data'=>$viewProductPurchaseUserList];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
        }
    }

    function sellSimilar(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                $p_id=array();
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

                $product_info=DB::table('product')->where('id',$r->product_id)->first(['category_id']);
                $similarProducts=DB::table('product as p')
                    ->whereNotIn('p.id',$p_id)
                    ->join('users as u','u.id','=','p.user_id')
                    ->where('p.category_id',$product_info->category_id)
                    ->where('p.status','=','1')
                    ->get(['p.id as product_id','p.product_sku','p.title','p.subtitle','p.category_id','p.photos',
                        'p.isbn','p.settype_id','p.brand_id','p.p_condition','p.discount','p.condition_description','p.specification','p.payment_opt','p.description',
                        'p.quantity','p.price','p.duration','p.renew_duration','p.return_opt','p.selling_type','p.product_address','p.warrenty','p.ship_to','p.daily_deal','p.status','p.created_date','p.secondary_cat_ids',
                        'p.shipment_type','p.delivery_days','p.paypal_email','p.updated_date','p.approve_date',
                        'u.id as user_id','u.first_name','u.last_name','u.email','u.business_mobile','u.business_name','u.business_relationship']);

                foreach ($similarProducts as $product){

                    //RATING
                    $product_avg=$this->ProductAvg($product->product_id);
                    $product->product_avg=$product_avg[0];
                    $product->product_rate_cnt=$product_avg[1];

                    $product->photos=unserialize($product->photos);
                    $product->specification=unserialize($product->specification);
                    $product->shipment_type=unserialize($product->shipment_type);
                    $product->secondary_cat_ids=unserialize($product->secondary_cat_ids);
                    $product->payment_opt=unserialize($product->payment_opt);

                    $duration=  $product->renew_duration;
                    $created_date=$product->approve_date;
                    $date = strtotime("+ $duration day", strtotime($created_date));
                    $last_date = date("Y-m-d h:i:s", $date);
                    $current_date = date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);
                    $days_left = $interval->format('%R%a days');

                    $days=substr($days_left, 1,2);
                    $product->endsoon=trim($days);
                    $product->final_price=$product->price;
                    $hour = $interval->format('%h hours ');
                    $product->days_left = $days_left . ' ' . $hour;

                    $invert = $interval->invert;
                    if ($invert == "0")
                        $product->time = 'Started';
                    else
                        $product->time = 'End';
                }
                $this->reply['similar_products']=['status'=>'success','data'=>$similarProducts];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function viewDeleteProduct(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $qry=DB::table('product')->where(['user_id'=>$r->user_id,'status'=>'9']);
                if($r->price)
                    $qry=$qry->orderBy('price',$r->price);
                if($r->recently)
                    $qry=$qry->where("updated_date",">", Carbon::now()->subDays(2));
                if($r->sold)
                    $qry=$qry->where('quantity','0');
                if($r->unsold)
                    $qry=$qry->where('quantity','!=','0');
                if($r->current_month)
                    $qry=$qry->where("updated_date",">", Carbon::now()->startOfMonth());
                if($r->last_month)
                    $qry=$qry->whereMonth('updated_date',date('m',strtotime(date('Y-m')." -1 month")));
                if($r->last60days)
                    $qry=$qry->whereRaw('updated_date >= DATE_SUB(NOW(), INTERVAL 60 DAY)');

                $deleted_products=$qry->get();

                foreach ($deleted_products as $product){

                    $duration=  $product->renew_duration;
                    $created_date=$product->approve_date;
                    $date = strtotime("+ $duration day", strtotime($created_date));
                    $last_date = date("Y-m-d h:m:i", $date);
                    $current_date = date("Y-m-d h:m:i");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);
                    $days_left = $interval->format('%R%a days');

                    $hour = $interval->format('%h hours ');
                    $product->days_left = $days_left . ' ' . $hour;

                    $invert = $interval->invert;
                    if ($invert == "0")
                        $product->time = 'Started';
                    else
                        $product->time = 'End';

                    $product->photos=unserialize($product->photos);
                    $product->specification=unserialize($product->specification);
                    $product->shipment_type=unserialize($product->shipment_type);
                    $product->payment_opt=unserialize($product->payment_opt);

                }
                $this->reply['deleted_product']=['status'=>'success','data'=>$deleted_products];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function viewUnSoldProduct(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $products=DB::table('product')->where(['status'=>'1','user_id'=>$r->user_id])->get();
                $p_id=array();
                foreach ($products as $product){
                    $date = strtotime("+ $product->renew_duration day", strtotime($product->approve_date));
                    $last_date=date("Y-m-d h:i:s", $date);
                    $current_date=date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    if($datetime1 > $datetime2)
                        $p_id[]=$product->id;
                }
                $qry=DB::table('product')->whereIn('id',$p_id);
                $unsold_product=$qry->get()->toArray();
                $i=0;
//                print_r($unsold_product);
//                exit;
                foreach ($unsold_product as $p){
                    $p->photos=unserialize($p->photos);
                    $p->specification=unserialize($p->specification);
                    $p->shipment_type=unserialize($p->shipment_type);
                    $p->payment_opt=unserialize($p->payment_opt);
                    $date = strtotime("+ $p->renew_duration days", strtotime($p->approve_date));
                    $last_date=date("Y-m-d H:i:s", $date);
                    $p->last_date=$last_date;
                    $unsold_product[$i]->last_date = date('d.m.Y H:i:s', strtotime($p->last_date));
                    $i++;
                }
                if($r->val=="recent_first")
                    array_multisort( array_column($unsold_product, "last_date"), SORT_DESC, $unsold_product );
                if($r->val=="recent_last")
                    array_multisort( array_column($unsold_product, "last_date"), SORT_ASC, $unsold_product );

                $this->reply['unsold_product']=['status'=>'success','data'=>$unsold_product];
            }else
                $this->reply['Auth']=['status'=>'success','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function viewCancelProduct(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $products=DB::table('order as o')
                    ->join('product as p','p.id','=','o.product_id')
                    ->distinct('o.product_id')
                    ->where(['o.status'=>'cancel','seller_id'=>$r->user_id])
                    ->get(['o.product_id','p.photos','p.title','p.product_sku','p.subtitle','p.isbn','p.p_condition','p.discount','p.quantity',
                        'p.price','p.product_address','p.description','p.created_date']);

                foreach ($products as $product){
                    $product->photos=unserialize($product->photos);
                }
                $this->reply['cancel']=['status'=>'success','data'=>$products];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function viewCancelProductUserList(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $users=DB::table('order as o')
                    ->join('users as u','u.id','=','o.buyer_id')
                    ->join('shipping as s','s.id','=','o.shipping_id')
                    ->distinct('o.buyer_id')
                    ->groupBy('o.buyer_id')
                    ->where(['o.status'=>'cancel','o.product_id'=>$r->product_id])
                    ->get(['u.first_name','u.last_name','u.email','u.id as user_id','u.user_status','u.created_date',
                        'o.buyer_id','o.product_id','o.seller_id','o.shipping_id','o.order_id']);

                $this->reply['cancel_users']=['status'=>'success','data'=>$users];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);

        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function viewEndProducts(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $update=DB::table('product')->whereIn('id',$r->product_id)->update(['renew_duration'=>'-1']);

                $this->reply['cancel_users']=['status'=>'success','msg'=>"Products end successful."];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);

        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function userDashboard(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {
                $user_id = $r->user_id;
                $data=array();

                //ALL SELLING COUNT
                $all_selling = DB::table('product')->where('user_id',$user_id)->count();
                $data['all_selling']=$all_selling;

                //SOLD COUNT
                $sold=DB::table('order as o')
                    ->join('product as p','p.id','=','o.product_id')
                    ->distinct('o.product_id')
                    ->where(['o.seller_id'=>$user_id,'p.status'=>'1'])
                    ->where('o.status','!=','cancel')
                    ->get(['o.product_id']);
                $data['sold']=count($sold);

                //DELETE COUNT
                $delete=DB::table('product')->where(['user_id'=>$user_id,'status'=>"9"])->count();
                $data['delete']=$delete;

                //UNSOLD COUNT
                $product_id=array();
                $unsold=DB::table('product')->where('user_id',$user_id)->where('status','=','1')->get();
                foreach ($unsold as $product){
                    $date=strtotime("+ $product->renew_duration days",strtotime($product->approve_date));
                    $date=date("Y-m-d h:i:s",$date);
                    $current_date=date("Y-m-d h:i:s");

                    if(strtotime($date) < strtotime($current_date))
                        $product_id[]=$product->id;
                }
                $data['unsold']=count($product_id);

                //ACTIVE PRODUCT
                $data['active']=DB::table('product')->where('user_id',$user_id)->where('status','=','1')->count();
                //DRAFT PRODUCT
                $data['draft']=DB::table('product')->where('user_id',$user_id)
                    ->where(function ($q){
                        $q->orWhere('status',"0");
                        $q->orWhere('status',"2");
                        $q->orWhere('status',"7");
                    })->count();

                //RETURN PRODUCT
                $return=DB::table('resolution_center')->distinct('product_id')
                    ->where(function ($q) use ($user_id){
                        $q->orWhere('seller_id',"$user_id");
                        $q->orWhere('buyer_id',"$user_id");
                    })
                    ->get(['product_id']);
                $data['return']=count($return);

                $this->reply['dashboard']=['status'=>'success','count'=>$data];
            }else
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function sellerPaymentHistory(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {

                $month = ($r->month ? $r->month : date('m'));
                $year = ($r->year ? $r->year : date('Y'));

                $user = DB::table('users')->where('id', $r->user_id)->first();
                $user->address = explode('@', $user->address);

                $date_array['issue_date']=date('d.m.Y',strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();//date('Y-m-d');
                $date = strtotime("+ 5 day", strtotime(date('d.m.Y',strtotime("$year-$month-1"))));//strtotime(Carbon::now()->startOfMonth()->toDateString()));
                $date_array['payment_date'] = date("d.m.Y", $date);
                $start_date=date('d.m.Y',strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();
                $date_array['start_date']=$start_date;
                $last_date_find = strtotime(date('d.m.Y',strtotime("$year-$month-1")) . ", last day of this month");
                $end_date  = date("d.m.Y",$last_date_find);
                $date_array['end_date']=$end_date;
                $invoice_id= strtotime($start_date).$month. $r->user_id;
                $date_array['invoice_id']=$invoice_id;

                $products = DB::table('product')->whereMonth('created_date', $month)->whereNotIn('status',[2,8,9])->whereYear('created_date', $year)->where('user_id', $r->user_id)->get(['title', 'fees_details', 'seller_fee', 'id', 'created_date', 'product_sku']);
                $total = 0;
                $i =0;
                foreach ($products as $product) {
                    $product->fees_details = unserialize($product->fees_details);
                    $total = $total + $product->seller_fee;
                    $products[$i]->created_date = date('d.m.Y H:i:s', strtotime($product->created_date));
                    $i++;
                }

                $transactions = DB::table('update_product as up')
                    ->join('product as p', 'p.id', '=', 'up.product_id')
                    ->whereMonth('up.created_date', $month)->whereYear('up.created_date', $year)->where('up.user_id', $r->user_id)->get(['p.title', 'up.changes', 'up.created_date', 'p.product_sku']);
                $transaction_Total = 0;
                $i=0;
                $chargess=[];
//                print_r($transactions);
//                echo count($transactions);
                foreach ($transactions as $transaction) {
                    $transaction->changes = unserialize($transaction->changes);
                    $changes = unserialize($transaction->changes);
//                    print_r($changes);
                    if(isset($changes['featured_fees'])){
//                        print_r($changes['featured_fees']);
                        array_push($chargess, $changes['featured_fees']);
                         if ($changes['featured_fees'] != '') {
                        $transaction_Total = $transaction_Total + $changes['featured_fees'][1];
                    } else
                        $transaction_Total = $transaction_Total + $changes['categories_fees'][0];
                    }
                   
                    $transactions[$i]->created_date = date('d.m.Y H:i:s', strtotime($transaction->created_date));
                    $i++;
                }
//exit;
                $grand_total = $total + $transaction_Total;

                //Check payment status
                $checkPaymentStatus = DB::table('seller_payment_history')
                                ->Where(['month'=>$month, 'year'=>$year, 'seller_id'=>$r->user_id])->first();
//                print_r($checkPaymentStatus);
//                exit;
                if($checkPaymentStatus) {
                    if ($checkPaymentStatus->payment_status == "COMPLETED") {
                        $paymentStatus = TRUE;
                        $paymentDetail = unserialize($checkPaymentStatus->payment_detail);
                    } else {
                        $paymentStatus = FALSE;
                    }
                    $paymentDate = date('d.m.Y H:i:s',strtotime($checkPaymentStatus->created_dt));
                }
                else {
                    $paymentStatus = FALSE;
                    $paymentDetail = '';
                    $paymentDate = '';
                }
//                print_r($paymentDetail);
//                exit;
                $this->reply['payment_history'] = ['status' => 'success', 'paymentDate' => $paymentDate, 'payment_status'=>$paymentStatus, 'payment_detail'=>$paymentDetail, 'user' => $user, 'date' => $date_array, 'product' => $products,
                    'total' => $total, 'transaction_details' => $transactions, 'transaction_total' => $transaction_Total, 'grand_total' => $grand_total, 'changes' =>$chargess];
            }
            else
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
            return response()->json($this->reply);

        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function sendSellerPaymentInvoice(Request $r){
        
        $month=($r->month?$r->month:date('m'));
        $year=($r->year?$r->year:date('Y'));

        $user=DB::table('users')->where('id',$r->user_id)->first();
        $date_array['issue_date']=date('Y-m-d',strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();//date('Y-m-d');
        $date = strtotime("+ 5 day", strtotime(date('Y-m-d',strtotime("$year-$month-1"))));//strtotime(Carbon::now()->startOfMonth()->toDateString()));
        $date_array['payment_date'] = date("Y-m-d", $date);
        $start_date=date('Y-m-d',strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();
        $date_array['start_date']=$start_date;
        $last_date_find = strtotime(date('Y-m-d',strtotime("$year-$month-1")) . ", last day of this month");
        $end_date  = date("Y-m-d",$last_date_find);
        $date_array['end_date']=$end_date;
        $invoice_id= strtotime($start_date).$month. $r->user_id;
        $date_array['invoice_id']=$invoice_id;

        $products=DB::table('product')->whereMonth('created_date',$month)->whereNotIn('status',[2,8,9])->whereYear('created_date',$year)->where('user_id',$r->user_id)->get(['title','fees_details','seller_fee','id','created_date','product_sku']);
        $total=0;
        foreach ($products as $product){
            $product->fees_details=unserialize($product->fees_details);
            $total=$total+$product->seller_fee;
        }

        $transactions=DB::table('update_product as up')
            ->join('product as p','p.id','=','up.product_id')
            ->whereMonth('up.created_date',$month)->whereYear('up.created_date',$year)->where('up.user_id',$r->user_id)->get(['p.title','up.changes','up.created_date','p.product_sku']);

        $transaction_Total=0;
        foreach ($transactions as $transaction){
            $transaction->changes=unserialize($transaction->changes);
            if(isset($transaction->changes['featured_fees'])){
            if($transaction->changes['featured_fees']!=''){
                $transaction_Total=$transaction_Total+$transaction->changes['featured_fees'][1];
            }else
                $transaction_Total=$transaction_Total+$transaction->changes['categories_fees'][0];
        }
        }
        $grand_total=$total+$transaction_Total;

        /* return view('invoice/seller_invoice')->with('user',$user)->with('dates',$date_array)->with('products',$products)->with('total',$total)
                 ->with('transaction_details',$transactions)->with('transaction_total',$transaction_Total)->with('grand_total',$grand_total);*/
        $invoice_note=DB::table('setting')->where('id','1')->first(['invoice_note']);

        $data = [
            'user' => $user,
            'dates'=>$date_array,
            'products'=>$products,
            'total'=>$total,
            'transaction_details'=>$transactions,
            'transaction_total'=>$transaction_Total,
            'grand_total'=>$grand_total,
            'invoice_note'=>$invoice_note->invoice_note
        ];

        $pdf = PDF::loadView('/invoice/seller_invoice',$data);//->save(public_path("invoice/seller/$invoice_id.pdf"));
        //$pdfContent=   $pdf->Output('', "S");
        return $pdf->stream('seller_invoice.pdf');

        //view()->share('user',$user)->share('dates',$date_array)->share('products',$products);
        //  $pdf = PDF::loadView('/invoice/seller_invoice');
        //  return $pdf->download('pdfview.pdf');
        //return view('invoice/seller_invoice')->with('user',$user)->with('dates',$date_array)->with('products',$products);
    }

    function cronSendSellerInvoice(){

        $users=DB::table('users')->where(['user_status'=>'1'])->where('role','!=','admin')->get(['id']);
        foreach ($users as $user) {
            $id=$user->id;
            $month = date('m');
            $year = date('Y');

            $user = DB::table('users')->where('id', $id)->first();

            $date_array['issue_date'] = date('Y-m-d', strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();//date('Y-m-d');
            $date = strtotime("+ 5 day", strtotime(date('Y-m-d', strtotime("$year-$month-1"))));//strtotime(Carbon::now()->startOfMonth()->toDateString()));
            $date_array['payment_date'] = date("Y-m-d", $date);
            $start_date = date('Y-m-d', strtotime("$year-$month-1"));//Carbon::now()->startOfMonth()->toDateString();
            $date_array['start_date'] = $start_date;
            $last_date_find = strtotime(date('Y-m-d', strtotime("$year-$month-1")) . ", last day of this month");
            $end_date = date("Y-m-d", $last_date_find);
            $date_array['end_date'] = $end_date;
            $invoice_id = strtotime($start_date) . $month . $id;
            $date_array['invoice_id'] = $invoice_id;

            $products = DB::table('product')->whereMonth('created_date', $month)->whereNotIn('status', [2, 8, 9])->whereYear('created_date', $year)->where('user_id', $id)->get(['title', 'fees_details', 'seller_fee', 'id', 'created_date', 'product_sku']);
            $total = 0;
            foreach ($products as $product) {
                $product->fees_details = unserialize($product->fees_details);
                $total = $total + $product->seller_fee;
            }

            $transactions = DB::table('update_product as up')
                ->join('product as p', 'p.id', '=', 'up.product_id')
                ->whereMonth('up.created_date', $month)->whereYear('up.created_date', $year)->where('up.user_id', $id)->get(['p.title', 'up.changes', 'up.created_date', 'p.product_sku']);

            $transaction_Total = 0;
            foreach ($transactions as $transaction) {
                $transaction->changes = unserialize($transaction->changes);

                if ($transaction->changes['featured_fees'] != '') {
                    $transaction_Total = $transaction_Total + $transaction->changes['featured_fees'][1];
                } else
                    $transaction_Total = $transaction_Total + $transaction->changes['categories_fees'][0];
            }
            $grand_total = $total + $transaction_Total;

            /* return view('invoice/seller_invoice')->with('user',$user)->with('dates',$date_array)->with('products',$products)->with('total',$total)
                     ->with('transaction_details',$transactions)->with('transaction_total',$transaction_Total)->with('grand_total',$grand_total);*/
            $invoice_note = DB::table('setting')->where('id', '1')->first(['invoice_note']);

            $data = [
                'user' => $user,
                'dates' => $date_array,
                'products' => $products,
                'total' => $total,
                'transaction_details' => $transactions,
                'transaction_total' => $transaction_Total,
                'grand_total' => $grand_total,
                'invoice_note' => $invoice_note->invoice_note
            ];

            $pdf = PDF::loadView('/invoice/seller_invoice', $data)->save(public_path("invoice/seller/$invoice_id.pdf"));
            $email_template = DB::table('email_template')->where('id', '21')->first();
            Mail::to($user->email)->send(new SendSellerInvoice($invoice_id, $email_template));
        }
        $this->reply = ['status' => 'success', 'msg' => 'success'];
        return response()->json($this->reply);
    }

    function storeSellerPaymentDetails(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();

            if(Hash::check($auth,$authDB->auth)) {
                $paymentInfo=$r->payment_Info;
				
                foreach ($paymentInfo as $pay) {
						
                    $payment_data = array(
                        'sendertransaction_id'=>$pay['sendertransaction_id'],
                        'sendertransaction_status'=>$pay['sendertransaction_status'],
                        'transaction_id'=>$pay['transaction_id'],
                        'transaction_status'=>$pay['transaction_status'],
                        'receiver_email'=>$pay['receiver_email'],
                        'sender_email'=>$r->sender_email,
                        'pay_key'=>$r->pay_key
                    );
                    $payment_data = serialize($payment_data);
                    $payment=['seller_id'=>$r->user_id, 'invoice_id' => $r->invoice_id, 'month' => $r->month, 'year' => $r->year, 'payment_amount'=>$pay['amount'],
                        'payment_detail'=>$payment_data, 'payment_status' => $pay['transaction_status']];
						
                    DB::table('seller_payment_history')->insertGetId($payment);
                }
                $this->reply['seller_payment_history']=['status'=>'success','msg'=>'success'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail'];
            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
        }
    }
    
    
    
    
    

}