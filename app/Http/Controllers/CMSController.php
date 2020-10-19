<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 6/13/2018
 * Time: 2:31 PM
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;

class CMSController extends Controller
{
    function cmsForm(){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        return view('admin/addCMS');
    }

    function addCMS(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $r->validate([
                'page_title' => 'required',
                'page_content' => 'required',
                'banner'=>'image|mimes:jpeg,png,jpg|max:2048'
            ]);
            if ($r->hasFile('banner')) {
                $banner_img = $r->file('banner');
                $banner_img_name = time() . '.' . $banner_img->getClientOriginalExtension();
                $destinationPath = public_path('/images/cms_banners');
                $banner_img->move($destinationPath, $banner_img_name);
                $this->compress($destinationPath.'/'.$banner_img_name,$destinationPath.'/'.$banner_img_name,70);
                $cms = ['page_title' => $r->page_title, 'page_content' => $r->page_content, 'banner' => $banner_img_name];
            }else
                $cms = ['page_title' => $r->page_title, 'page_content' => $r->page_content, 'banner' => ''];
            $save = DB::table('cms')->insertGetId($cms);
            if($save) {
                Session::flash('message','CMS add successfully');
                DB::commit();
                return view('admin/addCMS');
            }else{
                Session::flash('message','Something Wrong happen, please try again.');
                return view('admin/addCMS');
            }
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
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

    function viewCMS(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            $cmss=DB::table('cms')->get();
            return view('admin/view_cms')->with('cmss',$cmss);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function editCMS($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $cms=DB::table('cms')->where('id',$id)->first();
            if($cms)
                return view('admin/edit_cms')->with('cms',$cms);
            else
                return response()->view('errors.404');
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function editCMSData(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $r->validate([
                'page_title' => 'required',
                'page_content' => 'required',
                'banner'=>'image|mimes:jpeg,png,jpg|max:2048'
            ]);

            if($r->hasFile('banner')) {
                $banner_img = $r->file('banner');
                $banner_img_name = time().'.'.$banner_img->getClientOriginalExtension();
                $destinationPath = public_path('/images/cms_banners');
                $banner_img->move($destinationPath, $banner_img_name);
                $this->compress($destinationPath.'/'.$banner_img_name,$destinationPath.'/'.$banner_img_name,70);
                $cms = ['banner'=>$banner_img_name,'page_title' => $r->page_title,'page_content'=>$r->page_content,'updated_date'=>date('Y-m-d H:i:s')];
            }else{
                if($r->remove_img !='')
                     $cms = ['banner'=>'','page_title' => $r->page_title,'page_content'=>$r->page_content,'updated_date'=>date('Y-m-d H:i:s')];
                else
                     $cms = ['page_title' => $r->page_title,'page_content'=>$r->page_content,'updated_date'=>date('Y-m-d H:i:s')];
            }
            $save = DB::table('cms')->where('id',$r->id)->update($cms);
            if($save){
                Session::flash('message','CMS update successfully');
                DB::commit();
                return redirect('admin/view-cms');
            }else{
                Session::flash('message','Something Wrong happen, please try again.');
                return redirect('admin/view-cms');
            }
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function deleteCMS($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            $delete=DB::table('cms')->where('id',$id)->delete();
            if($delete){
                Session::flash('message','CMS deleted Successfully');
                DB::commit();
                return redirect('admin/view-cms');
            }else{
                Session::flash('message','Something Wrong happen, please try again.');
                return redirect('admin/view-cms');
            }
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    //-------------------------------------------------API------------------------------------------------------------

    function viewCmsAPI(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $viewCms=DB::table('cms')->where('id',$r->id)->first();
                if($viewCms)
                    $this->reply['cms']=['status'=>'success','data'=>$viewCms];
                else
                    $this->reply['cms']=['status'=>'fail','msg'=>'Something Wrong happen, please try again.'];
            }else
                $this->reply['auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
        }
    }
}