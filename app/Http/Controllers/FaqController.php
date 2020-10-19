<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 4/19/2018
 * Time: 5:03 PM
 */

namespace App\Http\Controllers;


use Illuminate\http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Hash;
use Mockery\Exception;


class FaqController extends Controller
{

    function faqForm(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            return view('admin/add_faq');
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function saveFaq(Request $r){
        try {
            if (!Session::get('userId')) {
                return redirect('admin/login');
            }
            DB::beginTransaction();
            Input::flash();
            $r->validate([
                'question' => 'required',
                'answer' => 'required',
            ]);

            $faq=['question'=>$r->question,'category_id'=>$r->category_id,'answer'=>$r->answer];
            $save=DB::table('faq')->insertGetId($faq);
            if($save){
                DB::commit();
                Session::flash('message', 'Faq created successfully.');
                return redirect('admin/faq-form');
            }else{
                Session::flash('message', 'Something wrong happen.');
                return redirect('admin/faq-form');
            }
        }catch (Exception $e){
            DB::rollBack();
        }
    }

    function viewFaq(){
        try{
            if(!Session::get('userId')){
                return redirect('admin/login');
            }
            $faqs=DB::table('faq')->get();
            return view('/admin/view_faq')->with('faqs',$faqs);
        }
        catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function editFaq($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $faq=DB::table('faq')->where('id',$id)->first();
            if($faq)
                return view('/admin/edit_faq')->with('faq',$faq);
            else
                return response()->view('errors.404');
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function editFaqData(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            $updated_date=date('Y-m-d');
            $r->validate([
                'question' => 'required',
                'answer' => 'required',
            ]);
            $update=DB::table('faq')->where('id',$r->id)->update(['question'=>$r->question,'answer'=>$r->answer,'category_id'=>$r->category_id,'updated_date'=>$updated_date]);
            if($update){
                Session::flash('message','Successful updated.');
                DB::commit();
                return redirect('admin/view-faq');
            }
            else{
                Session::flash('message','something wrong happen.');
                return redirect('admin/view-faq');
            }
        }
        catch(Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function deleteFaq($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            $delete=DB::table('faq')->where('id',$id)->delete();
            if($delete){
                Session::flash('message','Successful deleted.');
                DB::commit();
                return redirect('admin/view-faq');
            }
            else{
                Session::flash('message','something wrong happen.');
                return redirect('admin/view-faq');
            }
        }
        catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    
    
    function faqCategoryForm(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            return view('admin/add_faq_category');
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }
    
    function saveFaqCategory(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            
            DB::beginTransaction();
            Input::flash();
            
            $r->validate([
                'topic_name' => 'required',
                'topic_icon' => 'required',
                'topic_desc' => 'required',
                'status' => 'required',
            ]);
            //$cate_img_name='';
            //if($r->hasFile('Faq_image')) {
             //   $cat_img = $r->file('Faq_image');
              //  $cate_img_name = time() . '1.' . $cat_img->getClientOriginalExtension();
               // $destinationPath = public_path('/images/Faq');
               // $cat_img->move($destinationPath, $cate_img_name);
               // $this->compress($destinationPath . '/' . $cate_img_name, $destinationPath . '/' . $cate_img_name, 70);
           // }
            
            
                    $Faq=['title'=>$r->topic_name,'icon'=>$r->topic_icon,'description'=>$r->topic_desc,'status'=>$r->status];
                    
            $save=DB::table('faq_category')->insert($Faq);
            if($save){
                DB::commit();
                Session::flash('message', 'Faq Category created successfully.');
                return redirect('admin/faq-category-form');
            }else{
                //DB::error();
                Session::flash('message', 'Something wrong happen.');
                return redirect('admin/faq-category-form');
            }
        }catch (Exception $e){
            DB::rollBack();
        }
    }
    
    function viewFaqCategory(){
            if (!Session::get('userId')) {
                return redirect('admin/login');
            }try{
                $faq = DB::table('faq_category AS c1')
                    ->where('c1.status', '!=', '3')
                    ->get();
                for($i=0;$i<count($faq);$i++){
                    $subCat=DB::table('faq_category')->where('status','!=','1')->get()->toArray();
                    $faq[$i]->sub=$subCat;
                }
                return view('admin/view_faq_category')->with('faq',$faq);
            }
            catch (Exception $e){
                print_r($e);
            }
    }
    
    function editFaqCategory($id){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        try{
            $Faq=DB::table('faq_category')->where('id',$id)->first();
            if($Faq)
                return view('admin/edit_faq_category')->with('Faq',$Faq);
            else
                return response()->view('errors.404');
        }
        catch (Exception $e){
            print_r($e);
        }
    }
    
    function editFaqCategoryData(Request $r){
        try {
            if (!Session::get('userId')) {
                return redirect('admin/login');
            }
			            DB::beginTransaction();
            Input::flash();
			//echo $r->status.'yui';exit;
            $r->validate([
                'topic_name' => 'required',
				'topic_icon'=>'required',
				'status' => 'required',
				'topic_desc' => 'required',
                ]);
            //DB::beginTransaction();
            $updated_date=date('Y-m-d');
            
            $Faq=['title'=>$r->topic_name,'icon'=>$r->topic_icon,'status'=>$r->status,'description'=>$r->topic_desc,'updated_at'=>$updated_date];

            $update=DB::table('faq_category')->where('id',$r->id)->update($Faq);
            if($update){
                DB::commit();
                Session::flash('message', 'Faq Category updated successfully.');
                return redirect('admin/view-faq-category');
            }else{
                Session::flash('message', 'Something wrong happen.');
                return redirect('admin/view-faq-category');
            }
        }catch (Exception $e){
            DB::rollBack();
        }
    }
    

    function viewFaqCategoryDetails($id){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        try{
            $viewFaq=DB::table('faq_category')->where('id',$id)->first();
            if($viewFaq)
                return view('admin/view_faq_category_detail')->with('Faq',$viewFaq);
            else
                return response()->view('errors.404');
        }
        catch (Exception $e){
            print_r($e);
        }
    }
    function deleteFaqCategory($id){
         if (!Session::get('userId'))
             return redirect('admin/login');

         try{
             DB::beginTransaction();
             $Faq=DB::table('faq_category')->where('id',$id)->get(['id']);
             $cat_id=array($id);
             
             $delete=DB::table('faq_category')->where('id',$id)->update(['status'=>3]);
                // DB::table('faq_category')->where('id',$id)->delete();
               //  DB::table('new_specification')->where('Faq_id',$id)->delete();
                 if($delete){
                    DB::commit();
                     Session::flash('message', 'Faq Category deleted successfully.');
                     return redirect('admin/view-faq-category');
                 }else{
                     Session::flash('message', 'something wrong happen.');
                     return redirect('admin/view-faq-category');
                 }
              
         }catch (Exception $e){
             DB::rollBack();
             print_r($e);
         }
    }
    
    
    //Banner management
    function bannerForm(){
        if(!Session::get('userId'))
            return redirect('admin/login');
        $faq_banner=DB::table('faq_banner')->where('id',1)->first();
        
        
        return view('/admin/view_faq_banner')->with('banner',$faq_banner);
    }
    
    function editFaqBanner(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

//            echo $r->id;
//            exit;
            
            DB::beginTransaction();
            $r->validate([
                'banner_title' =>'required|regex:/^[A-Za-z0-9- ]+$/',
//                'banner_image' => 'image|mimes:jpeg,png,jpg,gif|max:2048|dimensions:width=1310,height=330'
                'banner_image' => 'image|mimes:jpeg,png,jpg,gif'
            ]);
			
            $updated_date=date('Y-m-d H:i:s');
//            echo $r->hasFile('banner_image');
//            exit;
            if ($r->hasFile('banner_image')) {
                               
                $image = $r->file('banner_image');
                
                $name = time().'.'.$image->getClientOriginalExtension();
                $destinationPath = public_path('/images/faq_banner');
                $image->move($destinationPath, $name);
                $destinationPath=public_path().'/images/faq_banner';
                $this->compress($destinationPath.'/'.$name,$destinationPath.'/'.$name,70);
                
                $banner=['title'=>$r->banner_title,'image'=>$name,'updated_date'=>$updated_date];
//                $update=DB::table('faq_banner')->where('id',$r->id)->update($banner);
                
//                print_r($banner);
//                exit;
//                $update=DB::table('faq_banner')->insert($banner);
            }
            else{
                $banner=['title'=>$r->banner_title,'image'=>$r->old_image,'updated_date'=>$updated_date];
//                $update=DB::table('faq_banner')->where('id',$r->id)->update($banner);
            }
            
//            exit;
            $update=DB::table('faq_banner')->where('id',$r->id)->update($banner);
            if($update){
                DB::commit();
                Session::flash('message', 'Banner update successfully.');
                return redirect('admin/faq-banner-form');
            }
            else{
                Session::flash('message', 'Something wrong happen.');
                return redirect('admin/faq-banner-form');
            }
        }
        catch (Exception $e){
            DB::rollBack();
        }
    }
    
    
    //REDUCE IMAGE SIZE
    function compress($source, $destination, $quality) {
        $info = getimagesize($source);
        if ($info['mime'] == 'image/jpeg')
            $image = imagecreatefromjpeg($source);
        elseif ($info['mime'] == 'image/gif')
            $image = imagecreatefromgif($source);
        elseif ($info['mime'] == 'image/png')
            $image = imagecreatefrompng($source);
        imagejpeg($image, $destination, $quality);
        return $destination;
    }
    
    
    /*-----------------------------------------------------API---------------------------------------------------------*/

    function viewFaqApi(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $qry=DB::table('faq');
                if(isset($r->category_id))
                    $qry=$qry->where('category_id',$r->category_id);
                $faq=$qry->get();
                if($faq)
                    $this->reply=['status'=>'success','data'=>$faq];
                else
                    $this->reply=['status'=>'fail','msg'=>"something worng happen"];
                DB::commit();
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
    function viewFaqCategoryApi(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $qry=DB::table('faq_category')->where('status','1');
//                if(isset($r->category_id))
//                    $qry=$qry->where('category_id',$r->category_id);
                $faq=$qry->get();
                if($faq)
                    $this->reply=['status'=>'success','data'=>$faq];
                else
                    $this->reply=['status'=>'fail','msg'=>"something worng happen"];
                DB::commit();
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
    function viewFaqBannerApi(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $qry=DB::table('faq_banner')->where('id','1');
                $faq=$qry->get();
                if($faq)
                    $this->reply=['status'=>'success','data'=>$faq];
                else
                    $this->reply=['status'=>'fail','msg'=>"something worng happen"];
                DB::commit();
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
}