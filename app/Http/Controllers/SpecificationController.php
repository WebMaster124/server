<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 5/7/2018
 * Time: 10:53 AM
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;


class SpecificationController extends Controller
{
    function specificationForm(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
             return view('/admin/add_specification');
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function saveSpecification(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            $r->validate([
                'specification' => 'required',
                'category_id' => 'required',
            ]);

            $specification=serialize(array_values($r->specification));
            $save=DB::table('new_specification')->insertGetId(['specification'=>$specification,'category_id'=>$r->category_id]);
            if($save){
                Session::flash('message','Specification add successfully.');
                DB::commit();
                return redirect('admin/specification-form');
            }else{
                Session::flash('message','Something wrong happen, Please try again.');
                return redirect('admin/specification-form');
            }
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function viewSpecification(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $specifications=DB::table('new_specification')->get();
            return view('/admin/view_specification')->with('specifications',$specifications);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function editSpecification($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $specification=DB::table('new_specification as s')
                ->join('category as c','c.id','=','s.category_id')
                ->where('s.id',$id)->first(['s.id','s.specification','c.category_name','c.id as category_id','c.parent_id']);
            if($specification)
                 return view('/admin/edit_specification')->with('specification',$specification);
            else
                return response()->view('errors.404');

        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function editSpecificationData(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            $specification=serialize(array_values($r->specification));
            $spec=['specification'=>$specification,'category_id'=>$r->category_id,'updated_date'=>date('Y-m-d')];
            $update=DB::table('new_specification')->where('id',$r->id)->update($spec);
            if($update){
                Session::flash('message','Specification update successfully.');
                DB::commit();
                return redirect('admin/view-specification');
            }else{
                Session::flash('message','Something wrong happen, Please try again.');
                return redirect('admin/view-specification');
            }
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function deleteSpecification($id){
        if (!Session::get('userId'))
            return redirect('admin/login');

        try{
            DB::beginTransaction();
            $delete= DB::table('new_specification')->where('id',$id)->delete();
            if($delete){
                DB::commit();
                Session::flash('message', 'Specification deleted successfully.');
                return redirect('admin/view-specification');
            }
            else{
                Session::flash('message', 'something wrong happen.');
                return redirect('admin/view-specification');
            }
        }catch (Exception $e){
            DB::rollBack();
            print_r($e);
        }
    }

    /*------------------------------------------------------API-------------------------------------------------------*/

    function viewSpecificationAPI(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $specifications=DB::table('new_specification')
                    ->where('category_id',$r->category_id)
                    ->get();
                
                
                if($specifications){
                    foreach ($specifications as $specification){
                        $specification_val=unserialize($specification->specification);
                        
                        for($i=0;$i<count($specification_val);$i++){
                            $specification_val[$i]['id']=$specification->id;
                            $specification_val[$i]['label']=ucwords($specification_val[$i]['label']);
                            $specification_val[$i]['value']  = explode(',',$specification_val[$i]['value']);
                        }
                        $specification->specification=$specification_val;
                    }
                    $this->reply['specification']=['status'=>'success','data'=>$specifications];
                }else
                    $this->reply['specification']=['status'=>'fail','msg'=>'something wrong happen,please try again.'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
        }
    }
    function viewColorAPI(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
//                print_r($r->color_id);
                $color = $r->color_id;
//                echo count($color);
//                exit;
                $i;
//                $color_html='';
                for ($i = 0; $i < count($color); $i++) {
                    $color_html = '<label for="vehicle1"><?php echo $color[$i];?></label> <input type="file" id="vehicle1" name="vehicle1" value="<?php echo $color[$i];?>" ><br>';
                    
                    }
//                $color = explode(',',$r->color_id);
                echo $color_html;
                exit;
                    
                
                    $this->reply['color']=['status'=>'success','data'=>$color_html];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
        }
    }

    function viewSpecificationAPIBackUp(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $specifications=DB::table('specification')->where('category_id',$r->category_id)->get();
                if($specifications){
                    foreach ($specifications as $specification){
                        $spec=unserialize($specification->specification);
                        foreach ($spec as $k=>$s){
                            if(isset($s)){
                                $s=explode(',',$s);
                                $k=str_replace('-','_',$k);
                                $k=str_replace('&','',$k);
                                $spe["$k"]= $s;
                            }
                        }
                        $specification->specification=$spe;
                    }
                    $this->reply['specification']=['status'=>'success','data'=>$specifications];
                }else
                    $this->reply['specification']=['status'=>'fail','msg'=>'something wrong happen,please try again.'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
        }
    }
}