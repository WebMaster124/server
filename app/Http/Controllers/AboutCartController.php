<?php
/**
 * Created by PhpStorm.
 * User: khushp
 * Date: 8/3/2018
 * Time: 4:10 PM
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Validator;
use Mockery\Exception;

class AboutCartController
{
    function aboutCartForm(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            return view('admin/add_about_cart');
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function saveAboutCart(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $r->validate([
                'question' => 'required',
                'answer' => 'required',
            ]);

            $about_cart=['question'=>$r->question,'answer'=>$r->answer];
            $save=DB::table('about_cart')->insertGetId($about_cart);
            if($save){
                DB::commit();
                Session::flash('message', 'About cart created successfully.');
                return redirect('admin/aboutcart-form');
            }
            else{
                Session::flash('message', 'Something wrong happen.');
                return redirect('admin/aboutcart-form');
            }
        }
        catch (Exception $e){
            DB::rollBack();
        }
    }

    function viewAboutCart(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $about_cart=DB::table('about_cart')->get();
            return view('/admin/view_aboutcart')->with('about_carts',$about_cart);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function editAboutCart($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $about_cart=DB::table('about_cart')->where('id',$id)->first();
            if($about_cart)
                return view('/admin/edit_aboutcart')->with('about_cart',$about_cart);
            else
                return response()->view('errors.404');

        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function editAboutCartData(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            $updated_date=date('Y-m-d g:i:s');
            $r->validate([
                'question' => 'required',
                'answer' => 'required',
            ]);
            $update=DB::table('about_cart')->where('id',$r->id)->update(['question'=>$r->question,'answer'=>$r->answer,'updated_date'=>$updated_date]);
            if($update){
                Session::flash('message','Successful updated.');
                DB::commit();
                return redirect('admin/view-aboutcart');
            }else{
                Session::flash('message','something wrong happen.');
                return redirect('admin/view-aboutcart');
            }
        }
        catch(Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function deleteAboutCart($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            DB::beginTransaction();
            $delete=DB::table('about_cart')->where('id',$id)->delete();
            if($delete){
                Session::flash('message','Successful deleted.');
                DB::commit();
                return redirect('admin/view-aboutcart');
            }
            else{
                Session::flash('message','something wrong happen.');
                return redirect('admin/view-cart');
            }
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    //----------------------------------------------API----------------------------------------------------------

    function viewAboutCartApi(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                    $about_cart=DB::table('about_cart')->get();
                    if($about_cart)
                        $this->reply['about_cart']=['status'=>'success','data'=>$about_cart];
                    else
                        $this->reply['about_cart']=['status'=>'fail','msg'=>'Something wrong happen,Please try again.'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            $e->getMessage();
        }
    }
}