<?php

namespace App\Http\Controllers;

use App\Season;
use Storage;
use App\Exports\SeasonExport;

use Maatwebsite\Excel\Facades\Excel;
//use Maatwebsite\Excel\Excel;

//use Maatwebsite\Excel\Excel;
//use Excel;

use Symfony\Component\HttpFoundation\BinaryFileResponse;
use File;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;

class FeatureController extends Controller
{
	
	
    function featureForm(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            return view('admin/add_feature_deal');
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }
	

    
    function saveFeature(Request $r){
		//print_r($r->all());
		//exit;
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $r->validate([
               // 'feature_name' => 'required|regex:/^[A-Za-z0-9- ]+$/',
                //'season_image'=> 'required|image|mimes:jpeg,png,jpg,gif',
		'feature_charges' => 'required|Numeric',
                
//                'season_image'=> 'image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);
			  $cate_img_name='';
                          $img_array = [];
                        // $img_with_catid = [];
                          $i=0;
            if($r->hasFile('feature_image')) {
                
                foreach($r->file('feature_image') as $feature_image){
					 
                    $cat_img = $feature_image;
                    $cate_img_name = time() . $i .'1.' . $cat_img->getClientOriginalExtension();
                    
                    array_push($img_array, $cate_img_name);
					/* $img_with_catid['cat_id'] = $r->cat_id[$i];
					$img_with_catid['image'] = $cat_img; */
                    //$cat_id = $r->cat_id[$i];
                    
					 $item = array(
							'cat_id' => $r->cat_id[$i], 
							'image' => $cate_img_name
						);
					$file_data_array[] = $item;
					
					
                    $destinationPath = public_path('/images/feature');
                    $cat_img->move($destinationPath, $cate_img_name);
                    
                    $i++;
                    
                }
				//dd(json_encode($file_data_array));
				//dd(json_decode(json_encode($file_data_array)));
				//print($img_with_catid);
                //exit;
                
//                echo $cat_img = $r->file('season_image');echo '<br>';
//                echo $cate_img_name = time() . '1.' . $cat_img->getClientOriginalExtension();
//                $destinationPath = public_path('/images/season');
//                $cat_img->move($destinationPath, $cate_img_name);
                //$this->compress($destinationPath . '/' . $cate_img_name, $destinationPath . '/' . $cate_img_name, 70);
                
            }
			
			
			
			
			
            
            //$image=serialize($img_array);
            $image=json_encode($file_data_array);
			
			
			$i=0;
			 foreach($r->feature_name as $name){
				 if($name != NULL){
					 
                    $cat_img = $name;
                   // $cate_img_name = time() . $i .'1.' . $cat_img->getClientOriginalExtension();
                    
                    array_push($img_array, $cat_img);
					/* $img_with_catid['cat_id'] = $r->cat_id[$i];
					$img_with_catid['image'] = $cat_img; */
                    //$cat_id = $r->cat_id[$i];
                    
					 $item = array(
							'cat_id' => $r->cat_id[$i], 
							'name' => $cat_img
						);
					$name_data_array[] = $item;
					
					
                   
                    
                   
				 }
        $i++;				 
                }
				//print_r($name_data_array);exit;
				//$f_name=implode(",",$name_data_array);
				 $f_name=json_encode($name_data_array);
			
			
			
			
			
			
           
            $category_ids=serialize($r->category_ids);
             
            $feature=['category_ids'=>$category_ids,'feature_name'=>$f_name,'feature_image'=>$image,'feature_charges'=>$r->feature_charges];
            
            $save=DB::table('feature_deal')->insertGetId($feature);
            if($save){
                DB::table('feature_deal')->where('id','!=',$save)->update(['status'=>'0']);
                DB::commit();
                Session::flash('message', 'Feature deal created successfully.');
                return redirect('admin/feature-form');
            }
            else{
                Session::flash('message', 'Something wrong happen.');
                return redirect('admin/feature-form');
            }
        }
        catch (Exception $e){
            DB::rollBack();
        }
    }
    
   
    
    public function downloadJSONFile(){
	  $data=Season::join('Category', 'Category.parent_id', '=', 'season_deal.category_ids')->select('Category.category_name','season_deal.season_name','season_deal.season_charges','season_deal.status')->get();
      $file = 'Seasons.txt';
      $destinationPath=public_path()."/upload/json/";
      if (!is_dir($destinationPath)) {  mkdir($destinationPath,0777,true);  }
	  
      File::put($destinationPath.$file,$data);
      return response()->download($destinationPath.$file);
    }
    
//    function saveSeason(Request $r){
//        try {
//            if (!Session::get('userId'))
//                return redirect('admin/login');
//
//            DB::beginTransaction();
//            Input::flash();
//            $r->validate([
//                'season_name' => 'required'
//            ]);
//            $category_ids=serialize($r->category_ids);
//            $season=['category_ids'=>$category_ids,'season_name'=>$r->season_name];
//            $save=DB::table('season_deal')->insertGetId($season);
//            if($save){
//                DB::table('season_deal')->where('id','!=',$save)->update(['status'=>'0']);
//                DB::commit();
//                Session::flash('message', 'Season deal created successfully.');
//                return redirect('admin/season-form');
//            }
//            else{
//                Session::flash('message', 'Something wrong happen.');
//                return redirect('admin/season-form');
//            }
//        }
//        catch (Exception $e){
//            DB::rollBack();
//        }
//    }

    function viewFeature(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $feature_deal=DB::table('feature_deal')->get();
            return view('/admin/view_feature_deal')->with('feature_deals',$feature_deal);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }
    function editFeature($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            $feature_deal=DB::table('feature_deal')->where('id',$id)->first();
            if($feature_deal)
                return view('/admin/edit_feature_deal')->with('feature_deal',$feature_deal);
            else
                return response()->view('errors.404');

        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

//    function editSeasonData(Request $r){
//        try {
//            if (!Session::get('userId'))
//                return redirect('admin/login');
//
//            DB::beginTransaction();
//            Input::flash();
//            $r->validate([
//                'season_name' => 'required'
//            ]);
//            $category_ids=serialize($r->category_ids);
//            $season=['category_ids'=>$category_ids,'season_name'=>$r->season_name];
//            $save=DB::table('season_deal')->where('id',$r->id)->update($season);
//            if($save){
//                DB::commit();
//                Session::flash('message', 'Season deal updated successfully.');
//                return redirect('admin/view-season');
//            }
//            else{
//                Session::flash('message', 'Something wrong happen.');
//                return redirect('admin/view-season');
//            }
//        }
//        catch (Exception $e){
//            DB::rollBack();
//        }
//    }

    function editFeatureData(Request $r){
		//dd($r->all());
		/* echo "<pre>";
		print_r($r->all());
		echo "</pre>"; */
		//dd($r->category_ids);
		 
		 
		//dd($r->file('season_image'));
			
		//exit;
		//return $r->file('season_image');
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $r->validate([
                'feature_name' => 'required|regex:/^[A-Za-z0-9- ]+$/',
            ]);
			
			$r->validate([
                'feature_name' => 'required|regex:/^[A-Za-z0-9- ]+$/',
				'feature_charges' => 'required|Numeric',
                //'season_image'=> 'image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);
			$category_ids=serialize($r->category_ids);
            $season=['category_ids'=>$category_ids,'feature_name'=>$r->feature_name];
			$feature_deal=DB::table('feature_deal')->where('id',$r->id)->first();
			if($r->hasFile('feature_image')) {
			$c=0;
		 foreach($r->category_ids as $idvalues){
			 $i=0;
			 //echo $idvalues;
			 foreach($r->file('feature_image') as $key=>$feature_images){
				if($c == $key){
					
			        $cat_img = $feature_images;
                    $cate_img_name = time() . $i .'1.' . $cat_img->getClientOriginalExtension();
					
					$destinationPath = public_path('/images/feature');
                    $cat_img->move($destinationPath, $cate_img_name);
					
			        $edit_ary = array(
							'cat_id' => $idvalues, 
							'image' => $cate_img_name
						);
					$efile_data_array[] = $edit_ary;
				}else{
					$edit_ary = array(
							'cat_id' => $idvalues, 
							'image' => ''
						);
					$efile_data_array[] = $edit_ary;
				}
				
				
				$i++;
		     }
			
		   $c++;
		}
	
		
		/* echo "<pre>";
		print_r($efile_data_array);
		echo "</pre>";
		
		echo "<pre>";
		print_r(json_decode($season_deal->season_image,true));
		echo "</pre>";  */
		
		$new_result = json_decode($feature_deal->feature_image,true);
		foreach ($efile_data_array as $aff) {
			
			
		if(in_array($aff['cat_id'], array_column($new_result, 'cat_id'))) {
			 $key = array_search($aff['cat_id'], array_column($new_result, 'cat_id'));
				 $finalr = array(
							'cat_id' => $aff['cat_id'], 
							'image' => $new_result[$key]['image']
						);
				 $finalr_array[] = $finalr; 
			}else{
				$finalr = array(
							'cat_id' => $aff['cat_id'], 
							'image' => $aff['image']
						);
				$finalr_array[] = $finalr;
			} 
			 
				
		}
	/* 	echo "<pre>";
		print_r($finalr_array);
		echo "</pre>"; 
		dd('text'); */
			$image=json_encode($finalr_array);
			
			
				 $feature=['category_ids'=>$category_ids,'feature_name'=>$r->feature_name,'feature_image'=>$image,'feature_charges'=>$r->feature_charges];		
			 }else{
				 $new_results = json_decode($feature_deal->feature_image,true);
				 
				  foreach($r->category_ids as $idvalues){
					  if(in_array($idvalues, array_column($new_results, 'cat_id'))) {
						  $nkey = array_search($idvalues, array_column($new_results, 'cat_id'));
						  $newres = array(
						      'cat_id' => $new_results[$nkey]['cat_id'], 
							  'image' => $new_results[$nkey]['image']
						  );
						  $newresultset_array[] = $newres;
					  }
				  }
				 $imagee=json_encode($newresultset_array);
				 $feature=['category_ids'=>$category_ids,'feature_name'=>$r->feature_name,'feature_image'=>$imagee,'feature_charges'=>$r->feature_charges];		
			 }
            
            
           
            $save=DB::table('feature_deal')->where('id',$r->id)->update($feature);
            if($save){
                DB::commit();
                Session::flash('message', 'Feature deal updated successfully.');
                return redirect('admin/view-feature');
            }
            else{
                Session::flash('message', 'Something wrong happen.');
                return redirect('admin/view-feature');
            }
        }
        catch (Exception $e){
            DB::rollBack();
        } 
    }
    
    
    function changeStatus($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            $update=DB::table('feature_deal')->where('id',$id)->update(['status'=>'1','updated_date'=>date('Y-m-d')]);
            if($update){
                DB::table('feature_deal')->where('id','!=',$id)->update(['status'=>'0','updated_date'=>date('Y-m-d')]);
                Session::flash('message','Feature deal status change successfully.');
                DB::commit();
                return redirect('admin/view-feature');
            }
            else{
                Session::flash('message','Something wrong happen.');
                return redirect('admin/view-feature');
            }
        }catch (Exception $e){
            $e->getMessage();
            DB::rollBack();
        }
    }

    //-------------------------------------------------------API-----------------------------------------------------------

    function checkFeatureDeal(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $feature_deal=DB::table('feature_deal')->where('status','1')->first();
                $categorys=unserialize($feature_deal->category_ids);
                $status=in_array($r->cat_id,$categorys);
                $this->reply['check_feature_deal']=['status'=>'success','msg'=>$status];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

        return response()->json($this->reply);
        } catch (\Exception $e) {
            $e->getMessage();
        }
    }
}
