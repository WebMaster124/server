<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;

use PDF;
use Illuminate\Support\Facades\Hash;
use App\Mail\DocumentMail;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;
use ZipArchive;
use File;

class TermsController extends Controller
{
    function viewTerms(){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        
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
        
        
        $free_seller=DB::table('free_seller_period')->get([DB::raw('group_concat(seller_id) as seller_id')]);
        $seller_id=explode(',',$free_seller[0]->seller_id);
        $seller=DB::table('users')->orderBy('id','desc')->whereNotIn('id',$seller_id)->where('role','seller')->get(['id','first_name','last_name','display_name']);

        return view('admin/add_terms')->with('users',$users);
    }
    function viewpdf($agree,$privacy){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
//        echo 'sdfsdf'.$agree;
//        echo 'sdfsdf'.$privacy;
//        exit;
        
//        echo phpinfo();
        
//        $agree = explode(',',$agree);
//        $privacy = explode(',',$privacy);
        
        
//         echo '<pre>';
//        print_r($agree);
//        echo '</pre>';
//        echo '<pre>';
//        print_r($privacy);
//        echo '</pre>';
//        $files =[];
//        
//        foreach($agree as $agrees){
//            $agrees = 'agreement/user_agreement/'.$agrees.'.pdf';
//            array_push($files,$agrees);
//        }
//        foreach($privacy as $privacys){
//            $privacys = 'agreement/user_privacy/'.$privacys.'.pdf';
//            array_push($files,$privacys);
//        }
////        print_r($files);
////        exit;
//       $zip = new ZipArchive;
//   
//        $fileName = strtotime("now").'.zip';
//   
////        echo public_path('agreement/zip/'.$fileName);
////        exit;
//        
//        if ($zip->open(public_path('agreement/zip/'.$fileName), ZipArchive::CREATE) === TRUE)
//        {
////            $files = array('Ganesh_kumar_240.pdf','Ganesh_kumar_241.pdf','Ganesh_kumar_242.pdf','Ganesh_kumar_243.pdf');
//            
////            $files = File::files(public_path('agreement/'));
//   
//            foreach ($files as $value) {
////                $value = public_path('agreement/user_agreement/'.$value);
//                $relativeNameInZipFile = basename($value);
//                $zip->addFile($value, $relativeNameInZipFile);
//            }
////            exit;
//             
//            $zip->close();
//        }
//        chmod(public_path('agreement/zip/'.$fileName), 0777); 
//        return response()->download(public_path('agreement/zip/'.$fileName));
//        $r->user_id ='2';
//        Mail::to('renugadevimurugesan@gmail.com')->send(new DocumentMail($r->user_id, $fileName));
////         $zip = new ZipArchive;
////   
////        $fileName = 'myNewFile.zip';
////   
////        if ($zip->open(public_path($fileName), ZipArchive::CREATE) === TRUE)
////        {
////            $files = public_path('agreement/user_agreement/'.$agree.'.pdf');
////   
////            foreach ($files as $key => $value) {
////                $relativeNameInZipFile = basename($value);
////                $zip->addFile($value, $relativeNameInZipFile);
////            }
////             
////            $zip->close();
////        }
////    
////        return response()->download(public_path('agreement/zip/'.$fileName));
//    
//        
//        exit;
//        
//        
//        
////        $zipname = 'enter_any_name_for_the_zipped_file.zip';
////            $zip = new ZipArchive;
////            $zip->open($zipname, ZipArchive::CREATE);
////            foreach ($agree as $file) {
////                echo $file = $file.'.pdf';
////              $zip->addFile($file);
////            }
////            
////            $zip->close();
//        
////             header('Content-Type: application/zip');
////            header('Content-disposition: attachment; filename='.$zipname);
////            header('Content-Length: ' . filesize($zipname));
////            readfile($zipname);
//            exit;
////        return view('admin/download_pdf');
        return view('admin/download_pdf')->with('agree',$agree)->with('privacy',$privacy);
    }

    function saveTermsData(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');
//echo 'fadsf';
            DB::beginTransaction();
            Input::flash();
            //echo phpinfo();
            
            
//            echo $r->user_id;
//            print_r($r->checkdoc);
//            print_r($r->checklist);
            $agree_name=[];
            $privacy_name=[];
            
 
            
            foreach($r->user_id as $user_id){
                $user_log = DB::table('users_log')->where('user_id' ,$user_id)->first();
                $name = str_replace(" ","_",$user_log->user_name);
                $agree="user_agreement_".$name."_".$user_id."";
                $privacy="user_privacy_".$name."_".$user_id."";
                if(count($r->checkdoc)==2){
                    
                } else if(in_array("1", $r->checkdoc)){
                    $privacy = 'null';
                } else if(in_array("2", $r->checkdoc)){
                    $agree = 'null';
                }
                
                array_push($agree_name,$agree);
                array_push($privacy_name,$privacy);
                
                
             
            
            ///Then download the zipped file.
            
                
                
               
            }
            $agree1=implode(',',$agree_name);
            $privacy1=implode(',',$privacy_name);
            
//            return redirect('admin/download-pdf/'.$agree1.'/'.$privacy1.'');
            
//            exit;
//        $files =[];
//        
//        foreach($agree_name as $agrees){
//            $agrees = 'agreement/user_agreement/'.$agrees.'.pdf';
//            array_push($files,$agrees);
//        }
//        foreach($privacy_name as $privacys){
//            $privacys = 'agreement/user_privacy/'.$privacys.'.pdf';
//            array_push($files,$privacys);
//        }
//        
//        
//       $zip = new ZipArchive;
//   
//        $fileName = strtotime("now").'.zip';
//   
////        echo public_path('agreement/zip/'.$fileName);
////        exit;
//        
//        if ($zip->open(public_path('agreement/zip/'.$fileName), ZipArchive::CREATE) === TRUE)
//        {
////            $files = array('Ganesh_kumar_240.pdf','Ganesh_kumar_241.pdf','Ganesh_kumar_242.pdf','Ganesh_kumar_243.pdf');
//            
////            $files = File::files(public_path('agreement/'));
//   
//            foreach ($files as $value) {
////                $value = public_path('agreement/user_agreement/'.$value);
//                $relativeNameInZipFile = basename($value);
//                if($relativeNameInZipFile!="null.pdf"){
//                $zip->addFromString($value,$relativeNameInZipFile);
//                }
//            }
//            
////            echo $zip->addFile($relativeNameInZipFile);
////           $zip->addFromString($value,$relativeNameInZipFile);
////            echo $relativeNameInZipFile;
////            echo 'true';
////        } else {
////            echo 'false';
////        }
////            exit;
////             if($zip->close()){
////            echo 'true';
////        } else {
////            echo 'false';
////        }
//            $zip->close();
//        }
//        
////        exit;
//        
//        
//        chmod(public_path('agreement/zip/'.$fileName), 0777); 
//        chmod($fileName, 0777); 
//        print_r($r->checklist);
        if(count($r->checklist)==2){
//            echo 'both';
            
            
            foreach($r->user_id as $user_id){
                $user_log = DB::table('users_log')->where('user_id' ,$user_id)->first();
                $name = str_replace(" ","_",$user_log->user_name);
                $name = str_replace(" ","_",$user_log->user_name);
                $date = $user_log->agreed_on;
                $agree="user_agreement_".$name."_".$user_id."";
                $privacy="user_privacy_".$name."_".$user_id."";
                
                if(count($r->checkdoc)==2){
                    
                } else if(in_array("1", $r->checkdoc)){
                    $privacy = 'null';
                } else if(in_array("2", $r->checkdoc)){
                    $agree = 'null';
                }
                
            $user_email = DB::table('users')->where('id' ,$user_id)->first();
        Mail::to($user_email->email)->send(new DocumentMail($user_id,$user_log->user_name,$date, $agree,$privacy));
//        Mail::to('renugadevimurugesan@gmail.com')->send(new DocumentMail($user_id,$name,$date, $agree,$privacy));
        
            }
//        return response()->download(public_path('agreement/zip/'.$fileName));
        return redirect('admin/download-pdf/'.$agree1.'/'.$privacy1.'');
        Session::flash('message','Successfully Done');
                
//                return redirect('admin/terms-form');
        
        } else if(in_array("1", $r->checklist)){
//            echo 'download';
//            redirect('admin/terms-form');
//            return response()->download(public_path('agreement/zip/'.$fileName));
            return redirect('admin/download-pdf/'.$agree1.'/'.$privacy1.'');
            Session::flash('message','Successfully Done');
                
//                return redirect('admin/terms-form');
        } else if(in_array("2", $r->checklist)){
//            echo 'mail';
            
             foreach($r->user_id as $user_id){
                $user_log = DB::table('users_log')->where('user_id' ,$user_id)->first();
                $name = str_replace(" ","_",$user_log->user_name);
                $name = str_replace(" ","_",$user_log->user_name);
                $date = $user_log->agreed_on;
                $agree="user_agreement_".$name."_".$user_id."";
                $privacy="user_privacy_".$name."_".$user_id."";
                
                if(count($r->checkdoc)==2){
                    
                } else if(in_array("1", $r->checkdoc)){
                    $privacy = 'null';
                } else if(in_array("2", $r->checkdoc)){
                    $agree = 'null';
                }
                
            $user_email = DB::table('users')->where('id' ,$user_id)->first();
        Mail::to($user_email->email)->send(new DocumentMail($user_id,$user_log->user_name,$date, $agree,$privacy));
//        Mail::to('renugadevimurugesan@gmail.com')->send(new DocumentMail($user_id,$name,$date, $agree,$privacy));
        
            }
            
            
//             Mail::to('renugadevimurugesan@gmail.com')->send(new DocumentMail($r->user_id, $fileName));
             Session::flash('message','Successfully Done');
                
                return redirect('admin/terms-form');
        }
        
            
            
            
            
            
            
            
            
            
            
//              exit;
            
            
            
            if ($save) {
                Session::flash('message','Successfully Done');
                
                return redirect('admin/terms-form');
            } else {
                Session::flash('message','Something want to wrong.');
                return redirect('admin/terms-form');
            }
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function viewFreeSellerPeriod(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $seller=DB::table('free_seller_period as f')
                ->join('users as u','u.id','=','f.seller_id')
                ->get(['f.id','f.start_date','f.end_date','u.first_name','u.last_name','u.display_name']);
            return view('admin/view_free_seller_period')->with('datas',$seller);
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function editFreeSellerPeriod($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $seller=DB::table('free_seller_period as f')
                ->join('users as u','u.id','=','f.seller_id')
                ->where('f.id',$id)
                ->first(['f.id','f.start_date','f.end_date','u.first_name','u.last_name','u.display_name']);
            if($seller)
                return view('admin/edit_free_seller_period')->with('data',$seller);
            else
                return response()->view('errors.404');
        }
        catch(Exception $e){
            echo $e->getMessage();
        }
    }
    function editFreeSellerPeriodData(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $r->validate([
                'start_date' => 'required',
                'end_date' => 'required'
            ]);

            $start_date = $r->start_date;
            $end_date = $r->end_date;
            $sets = ['start_date' => $start_date, 'end_date' => $end_date,'updated_date'=>date('Y-m-d h:i:s')];
            $save = DB::table('free_seller_period')->where('id',$r->id)->update($sets);
            if ($save) {
                Session::flash('message','Edit free seller period add successfully');
                DB::commit();
                return redirect('admin/view-free-seller-period');
            }
            else{
                Session::flash('message','Something want to wrong.');
                return redirect('admin/view-free-seller-period');
            }
        }
        catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function deleteFreeSellerPeriod($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            $delete=DB::table('free_seller_period')->where('id',$id)->delete();
            if($delete){
                Session::flash('message','Free seller period deleted Successfully');
                DB::commit();
                return redirect('admin/view-free-seller-period');
            }else{
                Session::flash('message','something wrong happen');
                return redirect('admin/view-free-seller-period');
            }
        }
        catch(Exception $e){
            echo $e->getMessage();
        }
    }
}
