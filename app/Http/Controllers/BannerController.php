<?php

namespace App\Http\Controllers;




use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Hash;
use Mockery\Exception;

class BannerController extends Controller
{
    function bannerForm(){
        if(!Session::get('userId'))
            return redirect('admin/login');
        $bannerSets=DB::table('banners_set')->get();
        return view('/admin/add_banner')->with('banners_set',$bannerSets);
    }

    function saveBanner(Request $r){
        try {
            if (!Session::get('userId')) {
                return redirect('admin/login');
            }
            DB::beginTransaction();
            Input::flash();
            $r->validate([
                'set_id' => 'required',
                'title' => 'required',
                'description' => 'required',
                'banner_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048|dimensions:width=1310,height=330',
                'div_color'=>'required'
            ]);

            if ($r->hasFile('banner_image')) {
                $image = $r->file('banner_image');
                $name = time() . '.' . $image->getClientOriginalExtension();
                $destinationPath = public_path('/images/banner');
                $image->move($destinationPath, $name);
                $this->compress($destinationPath.'/'.$name,$destinationPath.'/'.$name,70);
                $banner = ['title' => $r->title, 'set_id' => $r->set_id, 'description' => $r->description,
                    'banner_image' => $name, 'url' => $r->url,'div_color'=>$r->div_color];
            }

            $save = DB::table('home_banner')->insertGetId($banner);
            if ($save) {
                DB::commit();
                Session::flash('message', 'Banner created successfully.');
                return redirect('admin/banner-form');
            } else {
                Session::flash('message', 'Something wrong happen.');
                return redirect('admin/banner-form');
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

    function viewBanner(){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        try{
            $banners=DB::table('home_banner as b')
                ->join('banners_set as s','s.id','=','b.set_id')
                ->get(['b.title','b.banner_image','b.url','b.description','s.set_name','b.id']);
            return view('admin/view_banner')->with('banners',$banners);
        }
        catch (Exception $e){
            print_r($e);
        }
    }

    function editBanner($id){
        try{
            if (!Session::get('userId'))
                return redirect('admin/login');

            $viewBanner=DB::table('home_banner')->where('id',$id)->first();
            $bannerSets=DB::table('banners_set')->get();
            if($viewBanner)
                return view('admin/edit_banner')->with('banner',$viewBanner)->with('banners_set',$bannerSets);
            else
                return response()->view('errors.404');
        }
        catch (Exception $e){
            print_r($e);
        }
    }

    function viewBanerDetails($id){
        try{
            if (!Session::get('userId'))
                return redirect('admin/login');

            $viewBanner=DB::table('home_banner')->where('id',$id)->first();
            $bannerSets=DB::table('banners_set')->get();
            return view('admin/view_banner_details')->with('banner',$viewBanner)->with('banners_set',$bannerSets);
        }
        catch (Exception $e){
            print_r($e);
        }
    }

    function editBannerData(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            $r->validate([
                'set_id' => 'required',
                'title' => 'required',
                'description' => 'required',
                'banner_image' => 'image|mimes:jpeg,png,jpg,gif|max:2048|dimensions:width=1310,height=330',
                'div_color'=>'required'
            ]);

            if ($r->hasFile('banner_image')) {
                $image = $r->file('banner_image');
                $name = time().'.'.$image->getClientOriginalExtension();
                $destinationPath = public_path('/images/banner');
                $image->move($destinationPath, $name);
                $destinationPath=public_path().'/images/banner';
                $this->compress($destinationPath.'/'.$name,$destinationPath.'/'.$name,70);
                $banner=['title'=>$r->title,'set_id'=>$r->set_id,'description'=>$r->description,
                    'banner_image'=>$name,'url'=>$r->url,'div_color'=>$r->div_color];
            }
            else{
                $banner=['title'=>$r->title,'set_id'=>$r->set_id,'description'=>$r->description,
                    'banner_image'=>$r->old_image,'url'=>$r->url,'div_color'=>$r->div_color];
            }
            $update=DB::table('home_banner')->where('id',$r->id)->update($banner);
            if($update){
                DB::commit();
                Session::flash('message', 'Banner update successfully.');
                return redirect('admin/view-banner');
            }
            else{
                Session::flash('message', 'Something wrong happen.');
                return redirect('admin/view-banner');
            }
        }
        catch (Exception $e){
            DB::rollBack();
        }
    }

    function deleteBanner($id){
        if (!Session::get('userId'))
            return redirect('admin/login');

        try{
            DB::beginTransaction();
            $delete= DB::table('home_banner')->where('id',$id)->delete();
            if($delete){
                DB::commit();
                Session::flash('message', 'Banner deleted successfully.');
                return redirect('admin/view-banner');
            }
            else{
                Session::flash('message', 'something wrong happen.');
                return redirect('admin/view-banner');
            }
        }
        catch (Exception $e){
            DB::rollBack();
            print_r($e);
        }
    }

    function bannerSetForm(){
        if(!Session::get('userId'))
            return redirect('admin/login');

        return view('/admin/add_banner_set');
    }

    function saveBannerSet(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $r->validate([
                'set_name' => 'required',
                'start_date' => 'required',
                'end_date' => 'required'
            ]);

            $start_date = $r->start_date . ' ' . $r->start_time;
            $end_date = $r->end_date . ' ' . $r->end_time;
            $sets = ['set_name' => $r->set_name, 'start_date' => $start_date, 'end_date' => $end_date];
            $save = DB::table('banners_set')->insertGetId($sets);

            if ($save) {
                Session::flash('message','Banner set add successfully');
                DB::commit();
                return view('admin/add_banner_set');
            }
            else{
                Session::flash('message','Something want to wrong.');
                return view('admin/add_banner_set');
            }
        }
        catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }
    function viewBannerSet(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            $banner_sets=DB::table('banners_set')->get();
            return view('admin/view_banner_set')->with('banner_sets',$banner_sets);
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }
    function editBannerSet($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $setData=DB::table('banners_set')->where('id',$id)->first();
            if($setData)
                return view('admin/edit_banner_set')->with('banner_set',$setData);
            else
                return response()->view('errors.404');
        }
        catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function changeSetStatus($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            $update=DB::table('banners_set')->where('id',$id)->update(['status'=>'1','updated_date'=>date('Y-m-d')]);
            if($update){
                DB::table('banners_set')->where('id','!=',$id)->update(['status'=>'0','updated_date'=>date('Y-m-d')]);
                Session::flash('message','Product status change successfully.');
                DB::commit();
                return redirect('admin/view-banner-set');
            }
            else{
                Session::flash('message','Something wrong happen.');
                return redirect('admin/view-banner-set');
            }
        }catch (Exception $e){
            $e->getMessage();
            DB::rollBack();
        }
    }

    function editBannerSetData(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            $r->validate([
                'set_name'=>'required',
                'start_date'=>'required',
                'end_date'=>'required']);
            $start_date=$r->start_date.' '.$r->start_time;
            $end_date=$r->end_date.' '.$r->end_time;
            $banner_set=['set_name'=>$r->set_name,'start_date'=>$start_date,'end_date'=>$end_date,'updated_date'=>date('Y-m-d')];
            $update=DB::table('banners_set')->where('id',$r->id)->update($banner_set);

            if($update){
                Session::flash('message','Banner set data updated.');
                DB::commit();
                return redirect('admin/view-banner-set');
            }else{
                Session::flash('message','something wrong happen.');
                return redirect('admin/view-banner-set');
            }
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }
    function deleteBannerSet($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            $delete=DB::table('banners_set')->where('id',$id)->delete();
            $banners=DB::table('home_banner')->where('set_id',$id)->delete();
            if($delete){
                Session::flash('message','Banner set deleted Successfully');
                DB::commit();
                return redirect('admin/view-banner-set');
            }else{
                Session::flash('message','something wrong happen');
                return redirect('admin/view-banner-set');
            }
        }
        catch(Exception $e){
            echo $e->getMessage();
        }
    }

    /*------------------------------------------------------API-------------------------------------------------*/

    function viewBannerApi(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $qry=DB::table('home_banner as b')->join('banners_set as s','s.id','=','b.set_id');
                $qry=$qry->where('s.status','1');
                $banner=$qry->get(['b.title','b.banner_image','b.url','b.description','s.set_name','b.id','b.div_color']);
                if($banner)
                    $this->reply=['status'=>'success','data'=>$banner];
                else
                    $this->reply=['status'=>'fail','msg'=>'something wrong happen'];
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
