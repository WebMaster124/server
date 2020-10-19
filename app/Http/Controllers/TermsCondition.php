<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;

class TermsController extends Controller
{
    function viewTerms(){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        $free_seller=DB::table('free_seller_period')->get([DB::raw('group_concat(seller_id) as seller_id')]);
        $seller_id=explode(',',$free_seller[0]->seller_id);
        $seller=DB::table('users')->orderBy('id','desc')->whereNotIn('id',$seller_id)->where('role','seller')->get(['id','first_name','last_name','display_name']);

        return view('admin/add_terms')->with('users',$seller);
    }

    function saveFreeSellerPeriod(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $r->validate([
                'seller_id' => 'required',
                'start_date' => 'required',
                'end_date' => 'required'
            ]);

            $start_date = $r->start_date;
            $end_date = $r->end_date;
            foreach ($r->seller_id as $id){
                $sets = ['seller_id' => $id, 'start_date' => $start_date, 'end_date' => $end_date];
                $save = DB::table('free_seller_period')->insertGetId($sets);
                DB::commit();
            }
            if ($save) {
                Session::flash('message','Save free seller period add successfully');
                return redirect('admin/free-seller-form');
            } else {
                Session::flash('message','Something want to wrong.');
                return redirect('admin/free-seller-form');
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
