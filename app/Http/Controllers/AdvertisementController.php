<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 5/11/2018
 * Time: 11:53 AM
 */

namespace App\Http\Controllers;


use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;


class AdvertisementController extends Controller
{
    function advertiseForm(){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            return view('/admin/add_advertise');
        } catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function saveAdvertise(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            Input::flash();
            $r->validate(['title'=>'required',
                'url'=>'required',
                'image'=>'required|image|mimes:jpeg,png,jpg,gif|max:2048']);

            $image=$r->file('image');
            $image_name=time().$image->getClientOriginalName();

            $advertise=['title'=>$r->title,'image'=>$image_name,'description'=>$r->description,'url'=>$r->url,'status'=>'1'];
            $save=DB::table('advertisement')->insertGetId($advertise);
            if($save) {
                $destinationPath = public_path("/images/advertisement/$save/");
                File::makeDirectory($destinationPath, $mode = 0777, true, true);
                $image->move($destinationPath, $image_name);
                $this->compress($destinationPath.'/'.$image_name,$destinationPath.'/'.$image_name,70);
                DB::table('advertisement')->where('id','!=',$save)->update(['status'=>'0']);
                Session::flash('message','Advertisement created successfully.');
                DB::commit();
                return redirect('admin/advertise-form');
            }else{
                Session::flash('message','Something wrong happen');
                return redirect('admin/advertise-form');
            }
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    //REDUCE IMAGE SIZE
    function compress($source, $destination, $quality) {
        $info = getimagesize($source);
        
         
        
        if ($info['mime'] == 'image/jpeg'){
            $image1 = imagecreatefromjpeg($source);
            $image = $this->imageResize($image1,$info[0],$info[1]);
        }
        elseif ($info['mime'] == 'image/gif'){
            $image1 = imagecreatefromgif($source);
            $image = $this->imageResize($image1,$info[0],$info[1]);
        }
    elseif ($info['mime'] == 'image/png'){
            $image1 = imagecreatefrompng($source);
            $image = $this->imageResize($image1,$info[0],$info[1]);
    }
        imagejpeg($image, $destination, $quality);
        return $destination;
    }
    
    function imageResize($imageSrc,$imageWidth,$imageHeight) {

    $newImageWidth =680;
    $newImageHeight =460;

    $newImageLayer=imagecreatetruecolor($newImageWidth,$newImageHeight);
    imagecopyresampled($newImageLayer,$imageSrc,0,0,0,0,$newImageWidth,$newImageHeight,$imageWidth,$imageHeight);

    return $newImageLayer;
}

    function viewAdvertise(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $advertisements=DB::table('advertisement')->get();
            return view('admin/view_advertise')->with('advertisements',$advertisements);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function editAdvertise($id){
        try {
            if(!Session::get('userId'))
                return redirect('admin/login');
            $advertise=DB::table('advertisement')->where('id',$id)->first();
            if($advertise)
                return view('admin/edit_advertise')->with('advertise',$advertise);
            else
                return response()->view('errors.404');

        } catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function editAdvertiseData(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            $r->validate([
                'title'=>'required',
                'url'=>'required',
                'image'=>'image|mimes:jpeg,jpg,png|max:2048']);
                if($r->file('image')){
                    $image=$r->file('image');
                    $image_name=time().$image->getClientOriginalName();
                    $path=public_path()."/images/advertisement/$r->id";
                    $image->move($path,$image_name);
                    $this->compress($path.'/'.$image_name,$path.'/'.$image_name,70);
                    $advertise=['title'=>$r->title,'url'=>$r->url,'description'=>$r->description,'image'=>$image_name,'updated_date'=>date('Y-m-d')];
                }else
                $advertise=['title'=>$r->title,'url'=>$r->url,'description'=>$r->description,'updated_date'=>date('Y-m-d')];

                $update=DB::table('advertisement')->where('id',$r->id)->update($advertise);
                if($update){
                    Session::flash('message','Advertisement update successful');
                    DB::commit();
                    return redirect('admin/view-advertise');
                }else{
                    Session::flash('message','something wrong happen.');
                    return redirect('admin/view-advertise');
                }

        }catch(Exception $e){
                echo $e->getMessage();
                DB::rollBack();
        }
    }

    function deleteAdvertise($id){
        try{
            if(!Session::get('userId'))
                return redirect('userId');
            $delete=DB::table('advertisement')->where('id',$id)->delete();
            if($delete){
                Session::flash('message','Advertisement delete successful');
                DB::commit();
                return redirect('admin/view-advertise');
            }else{
                Session::flash('message','something wrong happen.');
                return redirect('admin/view-advertise');
            }
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function changeStatus($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            $update=DB::table('advertisement')->where('id',$id)->update(['status'=>'1']);
            DB::table('advertisement')->where('id','!=',$id)->update(['status'=>'0']);
            DB::commit();
            return redirect('admin/view-advertise');
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    //---------------------------------------------------------API---------------------------------------------------

    function viewAdvertiseApi(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {
                $advertise=DB::table('advertisement')->where('status','1')->first();
                if($advertise)
                    $this->reply['advertisement']=['status'=>'success','data'=>$advertise];
                else
                    $this->reply['advertisement']=['status'=>'fail','msg'=>'something wrong happen'];
            } else
                $this->reply['Auth'] = ['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
        }

    }
}