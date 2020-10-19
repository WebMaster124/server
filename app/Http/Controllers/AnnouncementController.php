<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Mockery\Exception;

class AnnouncementController extends Controller
{
    function viewAnnouncementForm(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');

            return view('admin/add_announcement');
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function saveAnnouncement(Request $r){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            $announce='';
            if($r->users=='all')
                $usres=DB::table('users')->where('role','!=','admin')->get(['id']);
            else
                 $usres=DB::table('users')->where('role',$r->users)->get(['id']);
            
            $attach_img_name='';
            if($r->hasFile('attach_image')) {
                $attach_img = $r->file('attach_image');
                $attach_img_name = time() . '1.' . $attach_img->getClientOriginalExtension();
                $destinationPath = public_path('/images/announce_attachment');
                $attach_img->move($destinationPath, $attach_img_name);
//                $this->compress($destinationPath . '/' . $attach_img_name, $destinationPath . '/' . $attach_img_name, 70);
            }
            
            foreach ($usres as $user){
                $date = $r->announce_date . ' ' . $r->announce_time;
                
                $sec = strtotime($date);  
                $newdate = date ("Y-m-d H:i", $sec);
                $announce_date = $newdate . ":00";  
                $current_date = date("Y-m-d H:i:s");
                $announcement=['user_id'=>$user->id,'message'=>$r->announcement,'announcements_by'=>'admin','announce_on'=>$announce_date,'announce_to'=>$r->users,'announce_attachment'=>$attach_img_name];
                
//                print_r($announcement);
               
                
                $announce= DB::table('announcements')->insertGetId($announcement);
            } 
//             exit;
            if($announce) {
                Session::flash('message','Announcement send successfully.');
                return redirect('admin/view-announcement-form');
            } else {
                Session::flash('message','Something wrong happen.');
                return redirect('admin/view-announcement-form');
            }
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function viewAnnouncement(){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            $announcements=DB::table('announcements')->distinct('announce_to')->groupBy('message')->get();
            return view('admin/view_announcement')->with('announcements',$announcements);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function deleteAnnouncement($id){
        try{
            if(!Session::get('userId'))
                return redirect('admin/login');
            $announcement=DB::table('announcements')->where('id',$id)->first();
            $delete=DB::table('announcements')->where('message',$announcement->message)->delete();
            if($delete){
                Session::flash('message','Announcement delete successfully.');
                return redirect('admin/view-announcement');
            }else{
                Session::flash('message','Something wrong happen.');
                return redirect('admin/view-announcement');
            }
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }
    
    
    //REDUCE IMAGE SIZE
    function compress($source, $destination, $quality) {
        $info = getimagesize($source);
        echo $info['mime'];exit;
        if ($info['mime'] == 'image/jpeg')
            $image = imagecreatefromjpeg($source);
        elseif ($info['mime'] == 'image/gif')
            $image = imagecreatefromgif($source);
        elseif ($info['mime'] == 'image/png')
            $image = imagecreatefrompng($source);
        imagejpeg($image, $destination, $quality);
        return $destination;
    }
    

    //--------------------------------------------API---------------------------------------------------------

    function viewAnnouncementPopupAPI(Request $r){
//        echo $r;
//        echo $r->id;
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {

                $qry = DB::table('announcements')->where(['user_id' => $r->user_id])->orderBy('created_date','desc')->limit(3);
                 $current_date = date("Y-m-d H:i:s");
                $ext=[];
                if ($r->notification){
                    $qry = $qry->where(['is_read' => '0']);
                    $qry = $qry->where('announce_on','<=', $current_date);
                }
            if ($r->id){
                    $qry = $qry->where(['id' => $r->id]);
            }
                $announcement = $qry->get();
                
//                print_r($announcement);
//                exit();
                
                if($r->id)
                     DB::table('announcements')->where(['user_id'=> $r->user_id,'id'=>$r->id])->update(['is_read' => '1']);
                if($r->view_all)
                    DB::table('announcements')->where(['user_id'=> $r->user_id])->update(['is_read' => '1']);
				$i=0;
                                
                foreach ($announcement as $announce){
                    $announce->message=strip_tags($announce->message);
//                    echo $announce->announce_attachment;
                    if($announce->announce_attachment!=''){
                        $ext=explode('.',$announce->announce_attachment);
                        
                        $announcement[$i]->ext = $ext[1];
                        
                     } else {
//                        $ext1='1578050729111.jpg';
//                        $ext=explode('.',$ext1);
                    }
					
				
			
						//$announcement[$i]->pdf = "<iframe id='preview_docs' data-tap-disabled='true' webkitallowfullscreen mozallowfullscreen allowfullscreen src='http://onlinetnt.com/images/announce_attachment/".$announce->announce_attachment."' style='width: 50%;height: 100%;'></iframe>";
						$announcement[$i]->pdf = "http://onlinetnt.com/images/announce_attachment/".$announce->announce_attachment;
				
					
                    
					$announcement[$i]->created_date = date('d.m.Y H:i:s', strtotime($announce->created_date));
					$i++;
				}
                $count=count($announcement);
//print_r($announcement);
//exit;
//$type = $ext[1];
                $this->reply['announcements'] = ['status' => 'success', 'data' => $announcement,'count'=>$count];
//                print_r($this->reply['announcements']);
//                exit;
             } else
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];

            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
        }
    }
    function viewAnnouncementAPI(Request $r){
//        echo $r;
//        echo $r->id;
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {

                $qry = DB::table('announcements')->where(['user_id' => $r->user_id])->orderBy('created_date','desc');
                 $current_date = date("Y-m-d H:i:s");
                $ext=[];
                if ($r->notification){
                    $qry = $qry->where(['is_read' => '0']);
                    $qry = $qry->where('announce_on','<=', $current_date);
                }
            if ($r->id){
                    $qry = $qry->where(['id' => $r->id]);
            }
                $announcement = $qry->get();
                
//                print_r($announcement);
                
                if($r->id)
                     DB::table('announcements')->where(['user_id'=> $r->user_id,'id'=>$r->id])->update(['is_read' => '1']);
                if($r->view_all)
                    DB::table('announcements')->where(['user_id'=> $r->user_id])->update(['is_read' => '1']);
				$i=0;
                                
                foreach ($announcement as $announce){
                    $announce->message=strip_tags($announce->message);
//                    echo $announce->announce_attachment;
                    if($announce->announce_attachment!=''){
                        $ext=explode('.',$announce->announce_attachment);
                        
                        $announcement[$i]->ext = $ext[1];
                        
                     } else {
//                        $ext1='1578050729111.jpg';
//                        $ext=explode('.',$ext1);
                    }
					
				
			
						//$announcement[$i]->pdf = "<iframe id='preview_docs' data-tap-disabled='true' webkitallowfullscreen mozallowfullscreen allowfullscreen src='http://onlinetnt.com/images/announce_attachment/".$announce->announce_attachment."' style='width: 50%;height: 100%;'></iframe>";
						$announcement[$i]->pdf = "http://onlinetnt.com/images/announce_attachment/".$announce->announce_attachment;
				
					
                    
					$announcement[$i]->created_date = date('d.m.Y H:i:s', strtotime($announce->created_date));
					$i++;
				}
                $count=count($announcement);
//print_r($ext);

//$type = $ext[1];
                $this->reply['announcements'] = ['status' => 'success', 'data' => $announcement,'count'=>$count];
//                print_r($this->reply['announcements']);
//                exit;
             } else
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];

            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function unreadAnnouncement(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                $update = DB::table('announcements')->where(['user_id'=> $r->user_id,'id'=>$r->id])->update(['is_read' => '1']);
                if($update)
                    $this->reply['announcement']=['status'=>'success','msg'=>'unread successful.'];
                else
                    $this->reply['announcement']=['status'=>'fail','msg'=>'Something wrong happen,please try again.'];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
        }
    }
}
