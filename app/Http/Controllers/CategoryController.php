<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 4/11/2018
 * Time: 12:13 PM
 */

namespace App\Http\Controllers;

use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;


class CategoryController
{
    function mainCategoryForm(){
        if (!Session::get('userId'))
            return redirect('admin/login');

        return view('admin/add_main_category');
    }

    function saveMainCategory(Request $r){
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $r->validate([
                'category_name' => 'required',
                'facility_charges' => 'required',
                'Category_banner_image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'category_image'=> 'image|mimes:jpeg,png,jpg,gif|max:2048',
                'season_thumbnail'=>'image|mimes:jpeg,png,jpg,gif|max:2048|dimensions:width=255,height=255',
            ]);
            $cate_img_name='';
            if($r->hasFile('category_image')) {
                $cat_img = $r->file('category_image');
                $cate_img_name = time() . '1.' . $cat_img->getClientOriginalExtension();
                $destinationPath = public_path('/images/category');
                $cat_img->move($destinationPath, $cate_img_name);
                $this->compress($destinationPath . '/' . $cate_img_name, $destinationPath . '/' . $cate_img_name, 70);
            }
            
            $thumbnail_name='';
            if($r->hasFile('season_thumbnail')) {
                $season_thumbnail = $r->file('season_thumbnail');
                $thumbnail_name = time() . '2.' . $season_thumbnail->getClientOriginalExtension();
                $destinationPath = public_path('/images/category');
                $season_thumbnail->move($destinationPath, $thumbnail_name);
                $this->compress($destinationPath . '/' . $thumbnail_name, $destinationPath . '/' . $thumbnail_name, 70);
            }
            if($r->hasFile('Category_banner_image')) {
                $image = $r->file('Category_banner_image');
                $name = time().'3.'.$image->getClientOriginalExtension();
                $destinationPath = public_path('/images/category');
                $image->move($destinationPath, $name);
                $this->compress($destinationPath.'/'.$cate_img_name,$destinationPath.'/'.$cate_img_name,70);
                $category=['category_name'=>$r->category_name,'parent_id'=>$r->parent_id,
                    'Category_banner_title'=>$r->Category_banner_title,'Category_banner_desc'=>$r->Category_banner_desc,
                    'Category_banner_image'=>$name,'season_thumbnail'=>$thumbnail_name,'Category_banner_link'=>$r->Category_banner_link,'category_image'=>$cate_img_name,'menu_type'=>$r->menu_type,'facility_charges'=>$r->facility_charges];
            }else{
                    $category=['season_thumbnail'=>$thumbnail_name,'category_name'=>$r->category_name,'parent_id'=>$r->parent_id,'category_image'=>$cate_img_name,'menu_type'=>$r->menu_type,'facility_charges'=>$r->facility_charges];
            }

            $save=DB::table('category')->insertGetId($category);

            if($save){
                DB::commit();
                Session::flash('message', 'Category created successfully.');
                return redirect('admin/main-category-form');
            }else{
                Session::flash('message', 'Something wrong happen.');
                return redirect('admin/main-category-form');
            }
        }catch (Exception $e){
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

    function viewMainCategory(){
            if (!Session::get('userId')) {
                return redirect('admin/login');
            }try{
                $categories = DB::table('category AS c1')
                    ->where('c1.parent_id', '0')
                    ->get();
                for($i=0;$i<count($categories);$i++){
                    $subCat=DB::table('category')->where('parent_id',$categories[$i]->id)->get()->toArray();
                    $categories[$i]->sub=$subCat;
                }
                return view('admin/view_main_category')->with('categories',$categories);
            }
            catch (Exception $e){
                print_r($e);
            }
    }

    function editMainCategory($id){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        try{
            $viewCategory=DB::table('category')->where('id',$id)->first();
            if($viewCategory)
                return view('admin/edit_main_category')->with('category',$viewCategory);
            else
                return response()->view('errors.404');
        }
        catch (Exception $e){
            print_r($e);
        }
    }

    function viewCategoryDetails($id){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        try{
            $viewCategory=DB::table('category')->where('id',$id)->first();
            if($viewCategory)
                return view('admin/view_category_detail')->with('category',$viewCategory);
            else
                return response()->view('errors.404');
        }
        catch (Exception $e){
            print_r($e);
        }
    }

    function editMainCategoryData(Request $r){
        try {
            if (!Session::get('userId')) {
                return redirect('admin/login');
            }
            $r->validate([
                'category_name' => 'required',
                'facility_charges' => 'required',
                'Category_banner_image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
                'category_image'=> 'image|mimes:jpeg,png,jpg,gif|max:2048',
                'season_thumbnail'=>'image|mimes:jpeg,png,jpg,gif|max:2048|dimensions:width=255,height=255',
            ]);

            DB::beginTransaction();
            $updated_date=date('Y-m-d');
            if($r->hasFile('category_image')) {
                $cat_img = $r->file('category_image');
                $cate_img_name = time() . '11.' . $cat_img->getClientOriginalExtension();
                $destinationPath = public_path('/images/category');
                $cat_img->move($destinationPath, $cate_img_name);
                $this->compress($destinationPath.'/'.$cate_img_name,$destinationPath.'/'.$cate_img_name,70);
            }elseif ($r->remove_cat_img){
                $cate_img_name='';
            }else{
                $cate_img_name=$r->old_image;
            }
            if($r->hasFile('season_thumbnail')) {
                $season_thumbnail = $r->file('season_thumbnail');
                $thumbnail_name = time() . '12.' . $season_thumbnail->getClientOriginalExtension();
                $destinationPath = public_path('/images/category');
                $season_thumbnail->move($destinationPath, $thumbnail_name);
                $this->compress($destinationPath . '/' . $thumbnail_name, $destinationPath . '/' . $thumbnail_name, 70);
            }elseif ($r->remove_season_thumbnail){
                $thumbnail_name='';
            }else{
                $thumbnail_name=$r->old_thumbnail;
            }
            if ($r->hasFile('Category_banner_image')) {
                $image = $r->file('Category_banner_image');
                $name = time().'13.'.$image->getClientOriginalExtension();
                $destinationPath = public_path('/images/category');
                $image->move($destinationPath, $name);
                $this->compress($destinationPath.'/'.$name,$destinationPath.'/'.$name,70);
            }elseif($r->remove_img) {
                $name='';
            }else{
                $name=$r->old_banner_image;
            }

            $category=['category_name'=>$r->category_name,'parent_id'=>$r->parent_id,
                'Category_banner_title'=>$r->Category_banner_title,'Category_banner_desc'=>$r->Category_banner_desc,'Category_banner_image'=>$name
                ,'Category_banner_link'=>$r->Category_banner_link,'updated_date'=>$updated_date,'category_image'=>$cate_img_name,
                'menu_type'=>$r->menu_type,'facility_charges'=>$r->facility_charges,'season_thumbnail'=>$thumbnail_name];

            $update=DB::table('category')->where('id',$r->id)->update($category);
            if($update){
                DB::commit();
                Session::flash('message', 'Category updated successfully.');
                return redirect('admin/view-main-category');
            }else{
                Session::flash('message', 'Something wrong happen.');
                return redirect('admin/view-main-category');
            }
        }catch (Exception $e){
            DB::rollBack();
        }
    }
    static function viewParentCategory(){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }try{
            $viewCategory=DB::table('category')->where('parent_id','0')->get();
            return $viewCategory;
        }catch (Exception $e){
            print_r($e);
        }
    }
	
	
	  function getParentCategory(){
		  
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }try{
            $viewCategory=DB::table('category')->where('parent_id','0')->get();
			$option ='';
			if(isset($_GET['id'])){
			$selected=$_GET['id'];
			}else{
				$selected='';
			}
			 foreach($viewCategory as $values){
				 $value=$values->id;
				 $name=$values->category_name;
			$option .='<option value="'.$value.'">'.$name.'</option>';
			} 
            echo $option;
        }catch (Exception $e){
            print_r($e);
        }
    }
	
	
    static function viewParentCategoryName($id){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }try{
            $viewCategory=DB::table('category')->where('id',$id)->first();
            return $viewCategory;
        }catch (Exception $e){
            print_r($e);
        }
    }

    static function viewCategorys(){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }try{
            $category=DB::table('category')->get();
            return $category;
        }catch (Exception $e){
            print_r($e);
        }
    }

     function deleteCategory($id){
         if (!Session::get('userId'))
             return redirect('admin/login');

         try{
             DB::beginTransaction();
             $category=DB::table('category')->where('parent_id',$id)->get(['id']);
             $cat_id=array($id);
             foreach ($category as $id){
                 $cat_id[]=$id->id;
             }
             $check_product=DB::table('product')->whereIn('category_id',$cat_id)->exists();
              if($check_product){
                  Session::flash('message', 'Can not delete category because this category use in product.');
                  return redirect('admin/view-main-category');
              }else{
                 $delete= DB::table('category')->where('id',$id)->delete();
                 DB::table('category')->where('parent_id',$id)->delete();
               //  DB::table('new_specification')->where('category_id',$id)->delete();
                 if($delete){
                    DB::commit();
                     Session::flash('message', 'Category deleted successfully.');
                     return redirect('admin/view-main-category');
                 }else{
                     Session::flash('message', 'something wrong happen.');
                     return redirect('admin/view-main-category');
                 }
              }
         }catch (Exception $e){
             DB::rollBack();
             print_r($e);
         }
    }
//AJAX CALL FOR SPECIFICATION
    function getSubCategory(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            $specification=DB::table('new_specification')->get(['category_id']);
            $category_id=array();
            foreach ($specification as $s) {
                $category_id[] = $s->category_id;
            }
//            $categorys=DB::table('category')->where('parent_id',$r->id)->whereNotIn('id',$category_id)->get();
            $categorys=DB::table('category')->where('parent_id',$r->id)->get();
           // print_r($categorys);exit;

            $set[]="<option value='0' selected >Select Sub Category</option>";
            foreach($categorys as $category){
                        $select=($category->id==$r->category_id?'seleted':'');
                        $set[]="<option value=".$category->id." $select>$category->category_name</option>";
            }
            return $set;
        } catch(Exception $e){
            echo $e->getMessage();
        }
    }

    //AJAX CALL FOR FACILITY CHARGE
    function getFacilityCharge(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            $chanrge=DB::table('category')->where('id',$r->id)->first(['facility_charges']);

            return $chanrge->facility_charges;
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }


    /*-------------------------------------------------------------- API------------------------------------------------*/

    function viewCategory(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $parentCategoryId = ( $r->parentCategoryId == '' ? 0 : $r->parentCategoryId );
                $tblPrefix = config('database.connections.mysql.prefix');

                $categories = DB::table('category AS c1')
                    ->where('c1.parent_id', $parentCategoryId)
                    ->get();
                for($i=0;$i<count($categories);$i++){
                   $subCat=DB::table('category')->where('parent_id',$categories[$i]->id)->get();
                   $categories[$i]->sub=$subCat;
               }
                if($categories)
                    $this->reply['categories'] = ['status'=>'success','data'=>$categories];
                else
                    $this->reply['categories'] = [ 'status' =>'fail', 'msg' => 'something wrong. please , try again!' ];

                return response()->json($this->reply);
            } else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function viewCategorySiteMap(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $categories = DB::table('category')->where('parent_id','0')->orderBy('category_name','asc')->get();
                foreach ($categories as $category){
                    $sub_category=DB::table('category')->where('parent_id',$category->id)->orderBy('category_name','asc')->get();
                    $category->sub_category=$sub_category;
                }

                if($categories)
                    $this->reply['categories'] = ['status'=>'success','data'=>$categories];
                else
                    $this->reply['categories'] = [ 'status' =>'fail','msg' => 'something wrong. please , try again!'];

                return response()->json($this->reply);
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function viewParentCategoryAPI(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $parentCategoryId = ( $r->parentCategoryId == '' ? 0 : $r->parentCategoryId );
                $tblPrefix = config('database.connections.mysql.prefix');

                $categories = DB::table('category AS c1')
                    ->where('c1.parent_id', $parentCategoryId)
                    ->get();
                if($categories)
                    $this->reply['categories'] = ['status'=>'success','data'=>$categories];
                else
                    $this->reply['categories'] = [ 'status' =>'fail', 'msg' => 'something wrong. please , try again!' ];

                return response()->json($this->reply);
            }
            else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    function  viewMenuCategory(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $parentCategoryId = ( $r->parentCategoryId == '' ? 0 : $r->parentCategoryId );
                $tblPrefix = config('database.connections.mysql.prefix');

                $categories = DB::table('category AS c1')
                    ->where('c1.parent_id', $parentCategoryId)
                    ->get();
                for($i=0;$i<count($categories);$i++){
                    $subTopCat=DB::table('category')->where(['parent_id'=>$categories[$i]->id,'menu_type'=>'top'])->get();
                    $subadditionalCat=DB::table('category')->where(['parent_id'=>$categories[$i]->id,'menu_type'=>'additional'])->get();
                    $categories[$i]->sub['top']=$subTopCat;
                    $categories[$i]->sub['additional']=$subadditionalCat;
                }

                //VIEW PUNCH LINE
                $punchLine=DB::table('setting')->where('id','1')->first();
                $punchLine=unserialize($punchLine->setting);
                $punchLine=$punchLine['punch_line'];

                if($categories)
                    $this->reply['categories'] = ['status'=>'success','data'=>$categories,'punch_line'=>$punchLine];
                else
                    $this->reply['categories'] = [ 'status' =>'fail', 'msg' => 'something wrong. please , try again!' ];

                return response()->json($this->reply);
            }
            else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }
}