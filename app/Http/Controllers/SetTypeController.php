<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 4/21/2018
 * Time: 2:31 PM
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

use File;
use Mockery\Exception;

class SetTypeController extends Controller
{
    function setTypeForm(){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        return view('admin/add_settype');
    }
    function saveSetType(Request $r){
        try {
            if (!Session::get('userId')) {
                return redirect('admin/login');
            }
            DB::beginTransaction();
            $r->validate([
                'settype' => 'required',
                'settype_image'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            if($r->hasFile('settype_image')) {
                $settype_image = $r->file('settype_image');
                $image_name = time() . '.' . $settype_image->getClientOriginalExtension();
            }

            $brand=['settype'=>$r->settype,'category_id'=>$r->category_id,'settype_image'=>$image_name];

            $save=DB::table('settype')->insertGetId($brand);

            if($save){
                if($r->hasFile('settype_image')){
                    $path=public_path('/images/settype/'.$save);
                    File::makeDirectory($path, $mode = 0777, true, true);
                    $settype_image->move($path,$image_name);
                }
                DB::commit();
                Session::flash('message', 'Settype created successfully.');
                return redirect('admin/settype-form');
            }
            else{
                Session::flash('message', 'Something wrong happen.');
                return redirect('admin/settype-form');
            }
        }
        catch (Exception $e){
            DB::rollBack();
        }
    }

    function viewSetType(){
        try{
            if(!Session::get('userId')){
                return redirect('admin/login');
            }
            $settypes=DB::table('settype')->get();
            return view('/admin/view_settype')->with('settypes',$settypes);
        }
        catch(Exception $e){
            echo $e->getMessage();
        }
    }
    function editSetType($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            $settype=DB::table('settype')->where('id',$id)->first();
            return view('/admin/edit_settype')->with('settype',$settype);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }
    function editSetTypeData(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();

            $r->validate([
                'settype' => 'required',
                'settype_image'=>'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            if($r->hasFile('settype_image')) {
                $settype_image = $r->file('settype_image');
                $image_name = time() . '.' . $settype_image->getClientOriginalExtension();
            }else{
                $image_name=$r->old_image;
            }
            $updated_date=date('Y-m-d');
            $update=DB::table('settype')->where('id',$r->id)->update(['settype'=>$r->settype,'category_id'=>$r->category_id,'updated_date'=>$updated_date,'settype_image'=>$image_name]);

            if($update){
                if($r->hasFile('settype_image')){
                    $path=public_path('/images/settype/'.$r->id);
                    File::makeDirectory($path, $mode = 0777, true, true);
                    $settype_image->move($path,$image_name);
                }
                Session::flash('message','Successful updated.');
                DB::commit();
                return redirect('admin/view-settype');
            }
            else{
                Session::flash('message','something wrong happen.');
                return redirect('admin/view-settype');
            }
        }
        catch(Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }
    function deleteSetType($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            $delete=DB::table('settype')->where('id',$id)->delete();
            if($delete){
                Session::flash('message','Successful deleted.');
                DB::commit();
                return redirect('admin/view-settype');
            }
            else{
                Session::flash('message','something wrong happen.');
                return redirect('admin/view-settype');
            }
        }
        catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }
        function viewSetTypeAjax(Request $r){
            try{
                if(!Session::get('userId'))
                    return redirect('admin/login');
                    $setTypes=DB::table('settype')->where('category_id',$r->id)->get();
                    $set[]="<option value='' selected disabled>Select SetType</option>";
                    foreach($setTypes as $setType){
                           $set[]="<option value=".$setType->id.">$setType->settype</option>";
                    }
                    return $set;
            }
            catch(Exception $e){
                echo $e->getMessage();
            }
        }

    /*-----------------------------------------------------------------API----------------------------------------------------*/

    function viewSetTypeApi(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();

                $qry=DB::table('settype as b')
                    ->join('category as c','c.id','=','b.category_id');
                if(isset($r->category_id))
                    $qry=$qry->where('c.id',$r->category_id);

                $settype=$qry->get(['b.settype','c.category_name','b.id']);
                if($settype)
                    $this->reply['settype'] = ['status'=>'success','data'=>$settype];
                else
                    $this->reply['settype'] = [ 'status' =>'fail', 'msg' => 'something wrong. please , try again!' ];

                DB::commit();
            }
            else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }
        catch (Exception $e)
        {
            echo $e->getMessage();
            DB::rollback();
        }
    }
}