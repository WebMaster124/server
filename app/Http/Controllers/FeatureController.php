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
		
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
            $r->validate([
               'feature_deal' => 'required|regex:/^[A-Za-z0-9- ]+$/',
               'num_of_cat' => 'required',
                //'season_image'=> 'required|image|mimes:jpeg,png,jpg,gif',
		//'feature_charges' => 'required|Numeric',
                
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
                    //echo $r->feature_name;
                    
                     // echo $r->category_id;
                    
                  //  exit;
					/* $img_with_catid['cat_id'] = $r->cat_id[$i];
					$img_with_catid['image'] = $cat_img; */
                    //$cat_id = $r->cat_id[$i];
					 $item = array( 
                                                        'parent_cat' => $r->category_id[$i],
							'cat_id' => $r->category_ids[$i],
							'name' => $r->feature_name[$i],	
							'image' => $cate_img_name
						);
					$file_data_array[] = $item;
					
					
                    $destinationPath = public_path('/images/feature');
                    $cat_img->move($destinationPath, $cate_img_name);
                    $this->compress($destinationPath . '/' . $cate_img_name, $destinationPath . '/' . $cate_img_name, 70);
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
            $image=json_encode($file_data_array);
			
			/* 
			$i=0;
			 foreach($r->feature_name as $name){
				 if($name != NULL){
                    $cat_img = $name;
                    array_push($img_array, $cat_img);
					 $item = array(
							'cat_id' => $r->cat_id[$i], 
							'name' => $cat_img
						);
					$name_data_array[] = $item; 
				 }
        $i++;				 
                }
				 $f_name=json_encode($name_data_array); */
			
			
			
		/* echo "<pre>";
		print_r($r->feature_name);
		echo "</pre>";	
			
			echo "<pre>";
		print_r($name_data_array);
		echo "</pre>";
		
		echo "<pre>";
		print_r($file_data_array);
		echo "</pre>";
		
		dd("1");
		exit; */
			
           
           // $category_ids=$r->category_id;
             
//            $feature=['category_ids'=>$category_ids,'feature_name'=>$image,'feature_image'=>$image,'feature_charges'=>$r->feature_charges];
            $feature=['category_ids'=>$image,'feature_name'=>$image,'feature_image'=>$image,'feature_deal'=>$r->feature_deal,'num_of_categories'=>$r->num_of_cat];
            
            $save=DB::table('feature_deal')->insertGetId($feature);
            
            if($save){
               
                DB::table('feature_deal')->where('id','!=',$save)->update(['status'=>'0']);
                DB::commit();
               //  echo $save;exit;
                Session::flash('message', 'Feature deal created successfully.');
                return redirect('admin/view-feature');
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

    $newImageWidth =198;
    $newImageHeight =198;

    $newImageLayer=imagecreatetruecolor($newImageWidth,$newImageHeight);
    imagecopyresampled($newImageLayer,$imageSrc,0,0,0,0,$newImageWidth,$newImageHeight,$imageWidth,$imageHeight);

    return $newImageLayer;
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
            $qry=DB::table('feature_deal')->orderBy('id','desc');
            $feature_deal=$qry->get();
            
//            echo $feature_deal;exit;
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
		
        try {
            if (!Session::get('userId'))
                return redirect('admin/login');

            DB::beginTransaction();
            Input::flash();
              $r->validate([
               'feature_deal' => 'required|regex:/^[A-Za-z0-9- ]+$/',
               'num_of_cat' => 'required',
                //'season_image'=> 'required|image|mimes:jpeg,png,jpg,gif',
		//'feature_charges' => 'required|Numeric',
                
//                'season_image'=> 'image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);
			
			
			$category_ids=serialize($r->category_ids);
                        $season=['category_ids'=>$category_ids,'feature_name'=>$r->feature_name];
			$feature_deal=DB::table('feature_deal')->where('id',$r->id)->first();
			
//		 echo "<pre>";
//			print_r($r->category_ids);
//			echo "</pre>"; 
//		
//			
//		 echo "<pre>";
//			print_r($r->file('feature_image'));
//			echo "</pre>"; 
		
		
			$new_result = json_decode($feature_deal->feature_image,true);
		/* 	echo "<pre>";
			print_r($new_result);
			echo "</pre>"; 
	 */
	 $get_repeated = [];
			if($r->hasFile('feature_image')) {
			$c=0;
                        
                       //echo "adfdsf";exit;
		 foreach($r->category_idss as $idvalues){	
			 $i=0;
			 //echo $idvalues;
			 foreach($r->file('feature_image') as $key=>$feature_images){
                           //  echo $key;exit;
				if($c == $key){
					$get_repeated[] = $idvalues;
			        $cat_img = $feature_images;
                    $cate_img_name = time() . $i .'1.' . $cat_img->getClientOriginalExtension();
					
					$destinationPath = public_path('/images/feature');
                    $cat_img->move($destinationPath, $cate_img_name);
                    $this->compress($destinationPath . '/' . $cate_img_name, $destinationPath . '/' . $cate_img_name, 70);
					
			        $edit_ary = array(
                                                        'parent_cat' => $r->category_idss[$i],
							'cat_id' => $r->category_ids[$i],
							'name' => $r->feature_name[$c],		
							'image' => $cate_img_name
						);
					$efile_data_array[] = $edit_ary;
					$efile_data_array_updated[] = $edit_ary;
					
				}
                                
                                
                                
                                else{
					
				
//					if(in_array($idvalues, array_column($new_result, 'cat_id'))) {
			 $key = array_search($idvalues, array_column($new_result, 'cat_id'));
				 $edit_ary = array(
                                                         'parent_cat' => $r->category_idss[$i],
							'cat_id' => $r->category_ids[$i],
							'name'	=> $r->feature_name[$c],
							'image' => $new_result[$key]['image']
						);
						
					$efile_data_array[] = $edit_ary; 	
				
//			}
			
					
					
					
					/* $edit_ary = array(
							'cat_id' => $idvalues, 
							'name' => '',
							'image' => ''
						);
					$efile_data_array[] = $edit_ary; */
				}
				
				
				$i++;
		     }
			
		   $c++;
		}
	
		
	//print_r($efile_data_array);exit;
	
	 foreach($efile_data_array as $keylist=>$listvalue){
		if(in_array($listvalue['cat_id'], $get_repeated)){
			  unset($efile_data_array[$keylist]);
		 }
		
	}
	
foreach(array_unique(array_merge($efile_data_array,$efile_data_array_updated),SORT_REGULAR) as $final_vals){
	
	$finalr = array(
                                                         'parent_cat' => $final_vals['parent_cat'],
							'cat_id' => $final_vals['cat_id'],
							'name'	=> $final_vals['name'],	
							'image' => $final_vals['image']
						);
				$finalr_array[] = $finalr;
}
  
	 
			 
			 echo	$image=json_encode($finalr_array);
                         
                         
                       //  print_r($image);exit;
		
			
				 //$feature=['category_ids'=>$category_ids,'feature_name'=>$r->feature_name,'feature_image'=>$image,'feature_charges'=>$r->feature_charges];		
				// $feature=['category_ids'=>$image,'feature_name'=>$image,'feature_image'=>$image];		
	
	$feature=['category_ids'=>$image,'feature_name'=>$image,'feature_image'=>$image,'feature_deal'=>$r->feature_deal,'num_of_categories'=>$r->num_of_cat];
		
		  
			 }
                         
                         
                         else{
				 $new_results = json_decode($feature_deal->feature_image,true);
                                 
                                // print_r($new_results);
                                 
				 $m=0;
                                 $val[]=$r->category_idss;
                              //   print_r($val);exit;
				  foreach($r->category_idss as $idvalues){
//					  if(in_array($idvalues, array_column($new_results, 'parent_cat'))) {
						  $nkey = array_search($idvalues, array_column($new_results, 'parent_cat'));
						  $newres = array(
                                                       'parent_cat' => $r->category_idss[$m], 
						      'cat_id' => $r->category_ids[$m], 
							  'name'	=> $r->feature_name[$m],
							  'image' => $new_results[$nkey]['image']
						  );
						  $newresultset_array[] = $newres;
					  //}
					  $m++;
				  }
                                 
				 $imagee=json_encode($newresultset_array);
				 //$feature=['category_ids'=>$category_ids,'feature_name'=>$r->feature_name,'feature_image'=>$imagee,'feature_charges'=>$r->feature_charges];		
				// $feature=['category_ids'=>$imagee,'feature_name'=>$imagee,'feature_image'=>$imagee];
                                 
                                 
                                 $feature=['category_ids'=>$imagee,'feature_name'=>$imagee,'feature_image'=>$imagee,'feature_deal'=>$r->feature_deal,'num_of_categories'=>$r->num_of_cat];
            
	     
			
			
			 }
                         
           /*   echo "<pre>";
			 print_r($feature);
			 echo "</pre>";
			 echo "2";
			 dd($feature);
			 exit;  */
           
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
