<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 4/17/2018
 * Time: 10:43 AM
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

use File;
use Mockery\Exception;

class BrandController extends Controller
{

    function brandForm(){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        return view('admin/add_brand');
    }
    function saveBrand(Request $r){
        try {
            if (!Session::get('userId')) {
                return redirect('admin/login');
            }
            DB::beginTransaction();
            $r->validate([
                'brand_title' => 'required',
                'settype_id' => 'required',
                'brand_image'=>'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);
            if($r->hasFile('brand_image')){
                $brand_image=$r->file('brand_image');
                $image_name=time().'.'.$brand_image->getClientOriginalExtension();
            }

            $brand=['brand_title'=>$r->brand_title,'settype_id'=>$r->settype_id,'category_id'=>$r->category_id,'brand_image'=>$image_name];

            $save=DB::table('brand')->insertGetId($brand);

            if($save){
                if($r->hasFile('brand_image')){
                    $path=public_path("/images/brand/$save");
                    File::makeDirectory($path, $mode = 0777, true, true);
                   $brand_image->move($path,$image_name);
                }
                DB::commit();
                Session::flash('message', 'Brand created successfully.');
                return redirect('admin/brand-form');
            }
            else{
                Session::flash('message', 'Something wrong happen.');
                return redirect('admin/brand-form');
            }
        }
        catch (Exception $e){
            DB::rollBack();
        }
    }

    function viewBrand(){
        try{
            if(!Session::get('userId')){
                return redirect('admin/login');
            }
            $brands=DB::table('brand as b')
                ->join('settype as s','s.id','=','b.settype_id')->get(['b.id','b.brand_title','s.settype','b.brand_image']);
            return view('/admin/view_brand')->with('brands',$brands);
        }
        catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function editBrand($id){
            try{
                if(!Session::get('userId'))
                    return redirect('admin/login');

                $brand=DB::table('brand as b')
                    ->join('settype as s','s.id','=','b.settype_id')
                    ->where('b.id',$id)
                    ->first(['b.id','b.settype_id','s.settype','b.brand_title','b.category_id','b.brand_image']);
                return view('/admin/edit_brand')->with('brand',$brand);
        }catch(Exception $e){
              echo $e->getMessage();
            }
    }

    function editBrandData(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            $r->validate([
                'brand_title' => 'required',
                'settype_id' => 'required',
                'brand_image'=>'image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);
            if($r->hasFile('brand_image')){
                $brand_image=$r->file('brand_image');
                $image_name=time().'.'.$brand_image->getClientOriginalExtension();
            }else{
                $image_name=$r->old_image;
            }

            $updated_date=date('Y-m-d');
            $update=DB::table('brand')->where('id',$r->id)->update(['category_id'=>$r->category_id,'brand_title'=>$r->brand_title,'settype_id'=>$r->settype_id,'brand_image'=>$image_name,'updated_date'=>$updated_date]);

            if($update){
                if($r->hasFile('brand_image')){
                    $path=public_path("/images/brand/$r->id");
                    File::makeDirectory($path, $mode = 0777, true, true);
                    $brand_image->move($path,$image_name);
                }
                Session::flash('message','Successful updated.');
                DB::commit();
                return redirect('admin/view-brand');
            }
            else{
                Session::flash('message','something wrong happen.');
                return redirect('admin/view-brand');
            }
        } catch(Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function deleteBrand($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
               $delete=DB::table('brand')->where('id',$id)->delete();
            if($delete){
                Session::flash('message','Successful deleted.');
                DB::commit();
                return redirect('admin/view-brand');
            }
            else{
                Session::flash('message','something wrong happen.');
                return redirect('admin/view-brand');
            }
        } catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    /*-----------------------------------------------------------------API----------------------------------------------------*/

    function viewBrandApi(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();

                $qry=DB::table('brand as b')
                    ->join('category as c','c.id','=','b.category_id')
                    ->join('settype as s','s.id','=','b.settype_id');
                if(isset($r->category_id))
                 $qry=$qry->where('b.category_id',$r->category_id);
                if(isset($r->settype_id))
                    $qry=$qry->where('b.settype_id',$r->settype_id);

                $brand=$qry->get(['b.brand_title','s.settype','c.category_name','b.id']);
                   if($brand)
                       $this->reply['brand'] = ['status'=>'success','data'=>$brand];
                   else
                       $this->reply['brand'] = [ 'status' =>'fail', 'msg' => 'something wrong. please , try again!' ];

                DB::commit();
            } else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e) {
            echo $e->getMessage();
            DB::rollback();
        }
    }
}