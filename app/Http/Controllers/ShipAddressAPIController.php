<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 5/2/2018
 * Time: 4:30 PM
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Exception;

class ShipAddressAPIController
{
    function addShipAddress(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                    DB::beginTransaction();

                    $userAddress=DB::table('shipping')->where(['user_id' => $r->user_id, 'ship_name' => $r->ship_name,
                        'ship_address' => $r->ship_address, 'mobile' => $r->mobile,'ship_city' => $r->ship_city,
                         'ship_country' => $r->ship_country])->exists();

                    if($userAddress){
                        $this->reply['ship_address'] = ['status' => 'success', 'msg' => 'Address is already exist.'];
                    }else{
                        $primary_add=($r->primary_add=='1'?'1':'0');
                        $state=($r->ship_state==''?'':$r->ship_state);
                        $ship_pincode=($r->ship_pincode==''?'':$r->ship_pincode);
                        $address = ['user_id' => $r->user_id, 'ship_name' => $r->ship_name, 'ship_address' => $r->ship_address, 'mobile' => $r->mobile,
                            'ship_city' => $r->ship_city, 'ship_state' => $state, 'ship_country' => $r->ship_country, 'ship_pincode' => $ship_pincode,'primary_add'=>$primary_add];

                        $save = DB::table('shipping')->insertGetId($address);
                        if ($save) {
                            if($r->primary_add=="1")
                                DB::table('shipping')->where('user_id','=',$r->user_id)->where('id','!=',$save)->update(['primary_add'=>'0']);
                            $this->reply['ship_address'] = ['status' => 'success', 'msg' => 'ship address inserted successfully.', 'id' => $save];
                            DB::commit();
                        } else {
                            $this->reply['ship_address'] = ['status' => 'fail', 'msg' => 'something wrong happen.'];
                        }
                    }
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }
    function viewShipAddress(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $qry=DB::table('shipping')->where('status','1');
                    if($r->id)
                        $qry=$qry->where('id',$r->id);
                    if($r->user_id)
                        $qry=$qry->where('user_id',$r->user_id);

                $view=$qry->get();
                if($view)
                    $this->reply['ship_address']=['status'=>'success','data'=>$view];
                else
                    $this->reply['ship_address']=['status'=>'fail','msg'=>'something wrong happen,please try again.'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function updateShipAddress(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $state=($r->ship_state==''?'':$r->ship_state);
                $ship_pincode=($r->ship_pincode==''?'':$r->ship_pincode);
                $adddress=['ship_name'=>$r->ship_name,'mobile'=>$r->mobile,'ship_address'=>$r->ship_address,'ship_city'=>$r->ship_city,
                    'ship_state'=>$state,'ship_country'=>$r->ship_country,'ship_pincode'=>$ship_pincode,'updated_date'=>date('Y-m-d h:i:sa')];
                $update=DB::table('shipping')->where('id',$r->id)->update($adddress);
                if($update){
                    $this->reply['ship_address']=['status'=>'success','msg'=>'Ship address updated successfully.','id'=>$r->id];
                    DB::commit();
                }else
                    $this->reply['ship_address']=['status'=>'fail','msg'=>'something wrong happen,please try again.'];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function deleteShipAddress(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $delete=DB::table('shipping')->where(['user_id'=>$r->user_id,'id'=>$r->ship_id])->update(['status'=>'9']);
                if($delete){
                    DB::commit();
                    $this->reply['ship_address']=['status'=>'success','msg'=>'shipping address deleted successfully.'];
                }else
                    $this->reply['ship_address']=['status'=>'fail','msg'=>'Something wrong happen.'];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            DB::rollback();
            $this->reply['error']=['status'=>'fail','msg'=>$e->getMessage()];
        }
    }

    function makePrimary(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $primary=DB::table('shipping')->where(['user_id'=>$r->user_id,'id'=>$r->ship_id])->update(['primary_add'=>'1']);
                if($primary){
                    DB::table('shipping')->where('user_id','=',$r->user_id)->where('id','!=',$r->ship_id)->update(['primary_add'=>'0']);
                    DB::commit();
                    $this->reply['ship_address']=['status'=>'success','msg'=>'Make primary shipping address successfully.'];
                }else
                    $this->reply['ship_address']=['status'=>'fail','msg'=>'Something wrong happen.'];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch(Exception $e){
            DB::rollback();
            $this->reply['error']=['status'=>'fail','msg'=>$e->getMessage()];
        }
    }

}