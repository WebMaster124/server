<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;

class EmailController extends Controller
{
    function emailTemplateForm(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            return view('admin/add_email_template');
        } catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function saveEmailTemplate(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $r->validate([
                'title' => 'required',
                'subject' => 'required',
                'banner_image'=>'image|mimes:jpeg,png,jpg|max:2048',
                'heading'=>'required'
             ]);
            if ($r->hasFile('banner_image')) {
                $banner_img = $r->file('banner_image');
                $banner_img_name = time() . '.' . $banner_img->getClientOriginalExtension();
                $destinationPath = public_path('/images/email_image');
                $banner_img->move($destinationPath, $banner_img_name);
                $this->compress($destinationPath.'/'.$banner_img_name,$destinationPath.'/'.$banner_img_name,70);
                $email = ['heading'=>$r->heading,'subject'=>$r->subject,'title' => $r->title, 'content' => $r->contents, 'banner_image' => $banner_img_name];
            }else
                $email = ['heading'=>$r->heading,'subject'=>$r->subject,'title' => $r->title, 'content' => $r->contents, 'banner_image' => '','subject'=>$r->subject];
            $save = DB::table('email_template')->insertGetId($email);
            if($save) {
                Session::flash('message','Email template add successfully');
                DB::commit();
                return view('admin/add_email_template');
            }else{
                Session::flash('message','Something Wrong happen, please try again.');
                return view('admin/add_email_template');
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


    function viewEmailTemplate(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            $emails=DB::table('email_template')->get();
            return view('admin/view_email_template')->with('emails',$emails);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function editEmailTemplate($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $email=DB::table('email_template')->where('id',$id)->first();
            if($email)
                return view('admin/edit_email_template')->with('email',$email);
            else
                return response()->view('errors.404');
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function editEmailTemplateData(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $r->validate([
                'title' => 'required',
                'subject' => 'required',
                'banner_image'=>'image|mimes:jpeg,png,jpg|max:2048',
                'heading'=>'required'
            ]);
            if ($r->hasFile('banner_image')) {
                $banner_img = $r->file('banner_image');
                $banner_img_name = time() . '.' . $banner_img->getClientOriginalExtension();
                $destinationPath = public_path('/images/email_image');
                $banner_img->move($destinationPath, $banner_img_name);
                $this->compress($destinationPath.'/'.$banner_img_name,$destinationPath.'/'.$banner_img_name,70);
            }elseif ($r->remove_img)
                $banner_img_name='';
            else
                $banner_img_name=$r->old_image;

            $email = ['heading'=>$r->heading,'subject'=>$r->subject,'title' => $r->title, 'content' => $r->contents, 'banner_image' => $banner_img_name,'subject'=>$r->subject,'updated_date'=>date('Y-m-d h:i:s')];
            $save = DB::table('email_template')->where('id',$r->id)->update($email);
            if($save) {
                Session::flash('message','edit email template  successfully');
                DB::commit();
                return redirect('admin/view-email-template');
            }else{
                Session::flash('message','Something Wrong happen, please try again.');
                return redirect('admin/view-email-template');
            }
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

}
