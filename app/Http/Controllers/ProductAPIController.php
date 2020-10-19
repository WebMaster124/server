<?php

namespace App\Http\Controllers;

use App\Mail\InactiveProductReason;
use App\Mail\NewProduct;
use App\Mail\RelistProduct;
use App\Mail\UpdateRelistProduct;
use App\Mail\UpdateRelistProductAdminMail;
use App\Mail\NewProductAdminMail;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use File;
use Exception;
use Illuminate\Support\Str;
use OpenCloud\CloudMonitoring\Resource\Check;

class ProductAPIController extends Controller
{

    function autoSaveProduct(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $secondary_cat_ids=serialize($r->secondary_cat_ids);
                $product_sku=mt_rand(1,100000);

                $product=['user_id'=>$r->user_id,'product_sku'=>$product_sku,'title'=>$r->title,'subtitle'=>$r->subtitle,
                    'category_id'=>$r->category_id,'secondary_cat_ids'=>$secondary_cat_ids,'status'=>'8'];

                $save=DB::table('product')->insertGetId($product);
                if($save){
                    $this->reply=['status'=>'success','msg'=>'product created successful.','product_id'=>$save];
                    DB::commit();
                }else
                    $this->reply=['status'=>'fail','msg'=>'something wrong happen.'];

            } else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            return response()->json($this->reply);
        }
        catch (Exception $e){
            DB::rollBack();
            $this->reply=['status'=>'fail','msg'=>'Something Wrong happen, Please try again.','details'=>$e->getMessage()];
            return response()->json($this->reply);
        }
    }

    function saveProduct(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();

                    if($r->photos){
                        $i=1;
                        $productImageArray=array();
                        foreach($r->photos as $name) {
                            $name=    explode(",", $name);
                            $data = base64_decode($name[1]);
                            $extenstion=$name[0];
                            $extenstion=substr($extenstion,11,4);

                            if($extenstion != 'png;' && $extenstion != 'jpeg') {
                                $this->reply=['status'=>'fail','msg'=>'Image type must be png/jpeg.'];
                                return response()->json($this->reply);
                            }
                            if($extenstion=='jpeg')
                                $imagename= $i.'.jpeg';
                            if($extenstion=='png;')
                                $imagename= $i.'.png';
                            $productImageArray[]=$imagename;
                            $i++;
                        }
                        $imageName=serialize($productImageArray);
                    } else {
                        $imageName=serialize(array());
                    }
                   $specification=serialize($r->specification);

                   $payment_opt=explode(',',$r->payment_opt);
                   $payment_opt=serialize($payment_opt);

                    $shipment_type=explode(',',$r->shipment_type);
                    $shipment_type=serialize($shipment_type);

                    $secondary_cat_ids=serialize($r->secondary_cat_ids);
                    $seller_fee=($r->seller_fee?$r->seller_fee:0);
                    $make_offer=($r->make_offer?$r->make_offer:0);
                    $renew=($r->renew?$r->renew:'No');
                    $discount =($r->discount?$r->discount:0);
                    $product_sku=mt_rand(1,100000);
                    $fees_details=serialize($r->fees_details);
                    $product=['user_id'=>$r->user_id,'product_sku'=>$product_sku,'title'=>$r->title,'subtitle'=>$r->subtitle,
                        'category_id'=>$r->category_id,'secondary_cat_ids'=>$secondary_cat_ids,'photos'=>$imageName,'isbn'=>$r->isbn,'settype_id'=>$r->settype_id,'brand_id'=>$r->brand_id,'p_condition'=>$r->p_condition,
                        'condition_description'=>$r->condition_description,'specification'=>$specification,'description'=>$r->description,
                        'quantity'=>$r->quantity,'price'=>$r->price,'duration'=>$r->duration,'renew_duration'=>$r->duration,'payment_opt'=>$payment_opt,'return_opt'=>$r->return_opt,
                        'return_policy'=>$r->return_policy,'discount'=>$discount,'renew'=>$renew,
                        'selling_type'=>$r->selling_type,'product_address'=>$r->product_address,'warrenty'=>$r->warrenty,'season_deal'=>$r->season_deal,
                        'ship_to'=>$r->ship_to,'daily_deal'=>$r->daily_deal,'deals_days'=>$r->deals_days,'shipment_type'=>$shipment_type,'delivery_days'=>$r->delivery_days,
                         'min_price'=>$r->min_price,'max_price'=>$r->max_price,'paypal_email'=>$r->paypal_email,'seller_fee'=>$seller_fee,'fees_details'=>$fees_details,'make_offer'=>$make_offer];

                    $save=DB::table('product')->insertGetId($product);
                    if($save){
                        if($r->photos){
                            $SPath = public_path("/images/product/$save/S/");
                            File::makeDirectory($SPath, $mode = 0777, true, true);
                            $MPath = public_path("/images/product/$save/M/");
                            File::makeDirectory($MPath, $mode = 0777, true, true);
                            $LPath = public_path("/images/product/$save/L/");
                            File::makeDirectory($LPath, $mode = 0777, true, true);
                            $i=1;
                            $productImageArray=array();
                            foreach($r->photos as $name){
                                $name=    explode(",", $name);
                                $data = base64_decode($name[1]);

                                $imagename= $i.'.jpeg';
                                $productImageArray[]=$imagename;
                                $extenstion=$name[0];
                                $extenstion=substr($extenstion,11,4);

                                if($extenstion=='jpeg')
                                    $imagename= $i.'.jpeg';
                                if($extenstion=='png;')
                                    $imagename= $i.'.png';

                                file_put_contents($SPath.$imagename, $data);
                                $this->resize($imagename, $SPath,350,350,$extenstion);
                                $this->compress($SPath.$imagename,$SPath.$imagename,70);
                                file_put_contents($MPath.$imagename, $data);
                                $this->resize($imagename, $MPath,500,500,$extenstion);
                                $this->compress($MPath.$imagename,$MPath.$imagename,70);
                                file_put_contents($LPath.$imagename, $data);
                                $this->compress($LPath.$imagename,$LPath.$imagename,70);
                                $i++;
                            }
                        }
                        $this->reply=['status'=>'success','msg'=>'product created successful.'];
                        DB::commit();
                        $user_info=DB::table('users')->where('id',$r->user_id)->first(['email','first_name','last_name','display_name']);
                        $product_info=DB::table('product')->where('id',$save)->first();
                        $product_info->photos=unserialize($product_info->photos);
                        $product_info->photos=$product_info->photos[0];
                        $product_info->shipment_type=unserialize($product_info->shipment_type);

                        Mail::to($user_info->email)->send(new NewProduct($user_info,$product_info));
                        // SEND MAIL TO ADMIN
                        $admin=DB::table('users')->where('role','admin')->first(['email']);
                        $product_info->from='NEW_PRODUCT'; 
                        Mail::to($admin->email)->send(new NewProductAdminMail($user_info,$product_info));
                    }else
                        $this->reply=['status'=>'fail','msg'=>'something wrong happen.'];

            } else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            return response()->json($this->reply);
        }
        catch (Exception $e){
            DB::rollBack();
            $this->reply=['status'=>'fail','msg'=>'Something Wrong happen, Please try again.','details'=>$e->getMessage()];
            return response()->json($this->reply);
        }
    }

    function CheckImage(Request $r){
        try {
            $SPath = public_path("/images/product/CheckImage/S/");
            File::makeDirectory($SPath, $mode = 0777, true, true);
            $MPath = public_path("/images/product/CheckImage/M/");
            File::makeDirectory($MPath, $mode = 0777, true, true);
            $LPath = public_path("/images/product/CheckImage/L/");
            File::makeDirectory($LPath, $mode = 0777, true, true);
            $i=1;
            $productImageArray=array();
            $original_name='';

            /*foreach($r->photos as $photo) {*/
                $name = explode(",", $r->photos['base']);
                $original_name=$r->photos['name'];
                $data = base64_decode($name[1]);

                $imagename = $i . '.jpeg';
                $productImageArray[] = $imagename;
                $extenstion = $name[0];
                $extenstion = substr($extenstion, 11, 4);

                if($extenstion != 'png;' && $extenstion != 'jpeg'){
                    $this->reply=['status'=>'fail','msg'=>'Image type must be png/jpeg.'];
                    return response()->json($this->reply);
                }

                if ($extenstion == 'jpeg')
                    $imagename = $i . '.jpeg';
                if ($extenstion == 'png;')
                    $imagename = $i . '.png';

                file_put_contents($SPath . $imagename, $data);
                $this->resize($imagename, $SPath, 350, 350, $extenstion);
                $this->compress($SPath . $imagename, $SPath . $imagename, 70);
            //   unlink($SPath . $imagename);
                file_put_contents($MPath . $imagename, $data);
                $this->resize($imagename, $MPath, 500, 500, $extenstion);
                $this->compress($MPath . $imagename, $MPath . $imagename, 70);
              //  unlink($MPath.$imagename);
                file_put_contents($LPath . $imagename, $data);
                $this->compress($LPath . $imagename, $LPath . $imagename, 70);
                //unlink($LPath.$imagename);
                $i++;

            $this->reply=['status'=>'success','msg'=>'All images are valid.'];
           return response()->json($this->reply);
        } catch (Exception $e) {
            $this->reply=['status'=>'fail','msg'=>'Images are corrupted or not valid, please try again','details'=>$original_name];
            return response()->json($this->reply);
        }
    }

    function resize($source_img,$folder,$width,$height,$extenstion){
        $folder= str_replace("\\","/",$folder);
        $newname ="$source_img";

        // Set the resize_image name
        $resize_image = $folder.'/'.$newname;
        $uploadimage = $folder."$source_img";

        // It makes the new image width /height
        $newwidth = $width;
        $newheight = $height;

        // It gets the size of the image
        list( $width,$height ) = getimagesize( $uploadimage );
        // It loads the images we use jpeg function you can use any function like imagecreatefromjpeg
        $thumb = imagecreatetruecolor( $newwidth, $newheight );
        if($extenstion=='jpeg')
             $source = imagecreatefromjpeg( $uploadimage );
        if($extenstion=='png;')
               $source = imagecreatefrompng( $uploadimage );
        // Resize the $thumb image.

        imagecopyresized($thumb, $source, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);
        // It then save the new image to the location specified by $resize_image variable
        imagejpeg( $thumb, $resize_image, 100 );
        // 100 Represents the quality of an image you can set and ant number in place of 100.
        $out_image=addslashes(file_get_contents($resize_image));
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

   function viewProductForEdit(Request $r){
        try{

            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)) {

                $product=DB::table('product')->where('id',$r->product_id)->first();
                $product->photos=unserialize($product->photos);
                $selectedSpecification=unserialize($product->specification);
                $product->specification=unserialize($product->specification);
                $product->payment_opt=unserialize($product->payment_opt);
                $product->shipment_type=unserialize($product->shipment_type);
                $product->fees_details=unserialize($product->fees_details);
                //Check Quatity Serilized or Not
                $sq = @unserialize($product->sq);
                if ($sq !== false) {
                    $product->sq = $sq;
                }

                $category=DB::table('category')->where('id',$product->category_id)->first();
                $product->sub_category_name=$category->category_name;
                $product->sub_cat_charge=$category->facility_charges;

                $parent_cat=DB::table('category')->where('id',$category->parent_id)->first();
                $product->parent_cat_name=$parent_cat->category_name;
                $product->parent_cat_id=$parent_cat->id;
                $subcate=array();
                if($product->secondary_cat_ids!='' ){
                    $sec_ids=unserialize($product->secondary_cat_ids);
                    $subcate=DB::table('category')->where('parent_id',$category->parent_id)->get(['id','parent_id','category_name','facility_charges']);
                        foreach ($subcate as $s){
                            $true=in_array($s->id,$sec_ids);
                            if($true)
                                $s->check=true;
                            else
                                $s->check=false;
                        }
                }else
                    $product->secondry_cat=[];

                $specification=DB::table('new_specification')->where('category_id',$product->category_id)->first();
                $spec=unserialize($specification->specification);
                for($i=0;$i<count($spec);$i++){
                    $label = $spec[$i]['label'];
                    $spec[$i]['label']=ucwords($spec[$i]['label']);
                    $value = explode(',',$spec[$i]['value']);
                    $label = str_replace(' ','_', $label);
                    if(!empty($selectedSpecification[0][$label])) {
                        if(count($selectedSpecification[0][$label]) <= 1){
                            if (in_array($selectedSpecification[0][$label][0], $value)) {
                                $spec[$i]['selectedValue'][] = $selectedSpecification[0][$label][0];
                            }
                            else{
                                $spec[$i]['selectedValue'][] = $selectedSpecification[0][$label][0];
                            }
                        }else{
                            $spec[$i]['selectedValue'] = $selectedSpecification[0][$label];
                            $value=  array_diff($value, $spec[$i]['selectedValue']);
                            $value=array_values($value);
                        }
                    }
                    $spec[$i]['value']=$value;
                }

                $specification->specification=$spec;

                $this->reply['product']=['status'=>'success','data'=>$product,'specification'=>$specification,'sub_category'=>$subcate];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
            } catch(Exception $e){
            echo $e->getMessage();
        }
    }

   function viewProduct(Request $r){
        try {

            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();

                $qry=DB::table('product as p')
                    ->leftjoin('users as u','u.id','=','p.user_id')
                    ->whereIn('p.status',[1,2]);

                if($r->seller_id)
                    $qry=$qry->where('p.user_id',$r->seller_id);

                if($r->product_id)
                    $qry=$qry->where('p.id',$r->product_id);

                $product=$qry->select('p.id as product_id','p.product_sku','p.title','p.subtitle','p.category_id','p.photos','p.user_id as seller_id','p.approve_date',
                    'p.isbn','p.settype_id','p.brand_id','p.p_condition','p.discount','p.condition_description','p.specification','p.payment_opt','p.description',
                    'p.quantity','p.price','p.duration','p.renew_duration','p.return_opt','p.selling_type','p.product_address','p.warrenty','p.ship_to','p.daily_deal','p.status','p.created_date','p.secondary_cat_ids','p.make_offer',
                    'p.shipment_type','p.delivery_days','p.sq','p.paypal_email','p.updated_date','p.return_policy','p.deals_days','p.season_deal','p.min_price',
                    'u.id as user_id','u.first_name','u.last_name','u.email','u.business_mobile','u.business_name','u.business_relationship','u.display_name',
                    DB::raw("(SELECT SUM(quantity) from tbl_order where status!='cancel' and product_id=tbl_p.id) as sold_quantity"))
                    ->get();

                for($i=0;$i<count($product);$i++){

                    $positiveAvg=DB::table('feedback')->where('receiver_id',$product[$i]->user_id)->first([DB::raw("SUM(IF(feedback_type='Positive', '1', '0'))/COUNT(id) as avg,COUNT(id) as count ")]);
                    $product[$i]->feedback_avg=$positiveAvg->avg*100;
                    $product[$i]->feedback_count=$positiveAvg->count;

                    $product_avg=DB::table('product_rate')->where('product_id',$product[$i]->product_id)->first([DB::raw("SUM(rate)/COUNT(id) as product_avg ,COUNT(id) as product_rate_cnt")]);
                    $product[$i]->product_avg=($product_avg->product_avg != '' ?(int)$product_avg->product_avg:0);
                    $product[$i]->product_rate_cnt=$product_avg->product_rate_cnt;

                    if($product[$i]->sold_quantity)
                        $product[$i]->sold_avg = round($product[$i]->sold_quantity / ($product[$i]->sold_quantity + $product[$i]->quantity) * 100,2);
                    else
                        $product[$i]->sold_avg=0;

                    //Check Quatity Serilized or Not. sq = Size Quantity
                    if(isset($r->sq) && $r->sq != ''){
                        if(!empty($product[$i]->sq)) {
                            $flipsq = array_flip(unserialize($product[$i]->sq));
                            $sq = array_search($r->sq, $flipsq);
                            $product[$i]->sq = $sq;
                        }
                        else{
                            $product[$i]->sq = '';
                        }
                    }

                    $saveSeller=DB::table('save_seller')->where(['user_id'=>$r->user_id,'seller_id'=>$product[$i]->user_id])->exists();
                    $product[$i]->save_seller=$saveSeller;

                    $saveCart=DB::table('add_to_cart')->where(['user_id'=>$r->user_id,'product_id'=>$r->product_id])->exists();
                        /*
                            foreach ($saveCart as $cart){
                                $cart->specification=unserialize($cart->specification);
                            }
                   */
                    $product[$i]->save_cart=$saveCart;

                    $makeOffer=DB::table('make_offer')->where(['buyer_id'=>$r->user_id,'product_id'=>$r->product_id,'offer_status'=>'Pending'])->exists();
                    $product[$i]->make_offer_status=$makeOffer;

                    $saveWishlist=DB::table('add_to_wishlist')->where(['user_id'=>$r->user_id,'product_id'=>$r->product_id])->exists();
                    $product[$i]->save_wishlist=$saveWishlist;

                    $productImg=unserialize($product[$i]->photos);
                    $product[$i]->photos=$productImg;

                    $product[$i]->description=preg_replace('!\\r?\\n!', " ",$product[$i]->description);
                    $product[$i]->condition_description=preg_replace('!\\r?\\n!', " ",$product[$i]->condition_description);

                    $product[$i]->specification=unserialize($product[$i]->specification);

                    $payment_opt=unserialize($product[$i]->payment_opt);
                    $product[$i]->payment_opt=preg_replace('!\\r?\\n!', " ",$payment_opt);

                    $shipment_type=unserialize($product[$i]->shipment_type);
                    $product[$i]->shipment_type=preg_replace('!\\r?\\n!', " ",$shipment_type);

                    $category=DB::table('category')->where('id',$product[$i]->category_id)->first();
                    $product[$i]->sub_category_name=$category->category_name;

                    $parent_cat=DB::table('category')->where('id',$category->parent_id)->first();
                    $product[$i]->parent_cat_name=$parent_cat->category_name;
                    $product[$i]->parent_cat_id=$parent_cat->id;
                    $product[$i]->updated_date = date('d.m.Y',strtotime($product[$i]->updated_date));

                    if($product[$i]->secondary_cat_ids!='' ){
                        $sec_ids=unserialize($product[$i]->secondary_cat_ids);
                        $secondry_category=DB::table('category')->whereIn('id',$sec_ids)->get(['id','parent_id','category_name','facility_charges']);
                        $product[$i]->secondry_cat=$secondry_category;
                    }else
                        $product[$i]->secondry_cat=[];

                    $discount=$product[$i]->price*$product[$i]->discount/100;
                    $product[$i]->final_price=$product[$i]->price-$discount;

                    //CHECK PRODUCT REMAINING TIME
                    $duration=  $product[$i]->renew_duration;
                    $created_date=$product[$i]->approve_date;
                    $date = strtotime("+ $duration day", strtotime($created_date));
                    $last_date = date("Y-m-d h:i:s", $date);
                    $current_date = date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);
                    $days_left = $interval->format('%R%a days');

                    $hour = $interval->format('%h hours ');
                    $product[$i]->days_left = $days_left . ' ' . $hour;

                    $days=substr($days_left, 1,2);
                    $product[$i]->endsoon=trim($days);

                    $invert = $interval->invert;
                    if ($invert == "0")
                        $product[$i]->time = 'Started';
                    else
                        $product[$i]->time = 'End';

                    //IF SELLING STYLE AUCTION
                    if($product[$i]->selling_type=="Auction style"){
                        $last_bid=DB::table('auction_bid')->where('product_id',$r->product_id)->orderBy('id','desc')->first();
                        $count=DB::table('auction_bid')->where('product_id',$r->product_id)->count();
                        if($last_bid)
                            $last_bid->count=$count;
                        $product[$i]->last_bid[]=$last_bid;
                    }else
                        $product[$i]->last_bid=array();
                } if($product){
                    $feedback=array();
                    if($r->seller_id ==''){
                        $qry = DB::table('product_rate as f')
                            ->join('users as us', 'us.id', '=', 'f.receiver_id')
                            ->join('users as ub', 'ub.id', '=', 'f.sender_id')
                            ->join('product as p', 'p.id', '=', 'f.product_id')
                            ->orderBy('f.id','desc');
                        $qry = $qry->where('f.product_id', $r->product_id);
                        $feedback = $qry->select(['f.id', 'p.title as product_title', 'p.product_sku', 'p.id as product_id', 'p.price',
                            'f.rate', 'f.title', 'f.description', 'f.created_date',
                            DB::raw("CONCAT(tbl_ub.first_name,' ',tbl_ub.last_name) as buyer_name,tbl_ub.display_name as buyer_display_name,tbl_ub.id as buyer_id,CONCAT(tbl_us.first_name,' ',tbl_us.last_name) as seller_name,tbl_us.display_name as seller_display_name")])
                            ->paginate(5);

                        $i=0;
                        foreach ($feedback as $f) {
                         //$feedback[$i]->tell_us_more = unserialize($f->tell_us_more);
                            //$feedback[$i]->description =  preg_replace('!\\r?\\n!', " ",$f->description);
                            $feedback[$i]->created_date = date('d.m.Y H:i:s', strtotime($f->created_date));
                            $i++;
                        }
                    }



                    $this->reply=['status'=>'success','data'=>$product,'feedback'=>$feedback];
                }else
                    $this->reply=['status'=>'fail','msg'=>"something wrong happen."];

                DB::commit();
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        } catch (Exception $e) {
            echo $e->getMessage();
            DB::rollBack();
        }
    }

   function editProduct(Request $r){

//       echo $r->id;
//       echo '<br>';
//       echo $r->user_id;
//       echo '<br>';
//       echo $r->status;
//       echo '<br>';
//       
//       
//       print_r($r->photos);
//       echo $r;
//       print_r($r->changes);
      
//       exit;
       try{

            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();

            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();

                $productOldImages=DB::table('product')->where('id',$r->id)->first(['photos','daily_deal','duration','category_id']);
                $productOldImage=unserialize($productOldImages->photos);
                if(!empty($productOldImage)){
                    $productOldImage=array_diff($productOldImage,$r->removeImages);
                    $productOldImage=array_values($productOldImage);
                }

                if($r->photos) {
                    $i=1;
                    if($r->mobile_device == false){
                        if($r->reset_photo == true){
                            if(!empty($productOldImage)) {
                                foreach ($productOldImage as $removeImg) {
                                    $SPath = public_path("/images/product/$r->id/S/$removeImg");
                                    @unlink($SPath);
                                    $MPath = public_path("/images/product/$r->id/M/$removeImg");
                                    @unlink($MPath);
                                    $LPath = public_path("/images/product/$r->id/L/$removeImg");
                                    @unlink($LPath);
                                }
                            }
                            DB::table('product')->where('id',$r->id)->update(['photos'=>serialize(array())]);
                            DB::commit();
                            $productOldImages=DB::table('product')->where('id',$r->id)->first(['photos','daily_deal','duration','category_id']);
                            $productOldImage=unserialize($productOldImages->photos);
                            if(!empty($productOldImage)){
                                $productOldImage=array_diff($productOldImage,$r->removeImages);
                                $productOldImage=array_values($productOldImage);
                            }
                        }
                    }

                    $productImageArray=array();
                    foreach($r->photos as $name){
                        $name=    explode(",", $name);
                        $data = base64_decode($name[1]);

                        $extenstion=$name[0];
                        $extenstion=substr($extenstion,11,4);
                        if($extenstion != 'png;' && $extenstion != 'jpeg'){
                            $this->reply=['status'=>'fail','msg'=>'Image type must be png/jpeg.'];
                            return response()->json($this->reply);
                        }
                        if($extenstion=='jpeg')
                            $imagename= time().$i.'.jpeg';
                        if($extenstion=='png;')
                            $imagename= time().$i.'.png';

                        $SPath = public_path("/images/product/$r->id/S/");
                        File::makeDirectory($SPath, $mode = 0777, true, true);
                        $MPath = public_path("/images/product/$r->id/M/");
                        File::makeDirectory($MPath, $mode = 0777, true, true);
                        $LPath = public_path("/images/product/$r->id/L/");
                        File::makeDirectory($LPath, $mode = 0777, true, true);

                        file_put_contents($SPath.$imagename, $data);
                        $this->resize($imagename, $SPath,350,350,$extenstion);
                        $this->compress($SPath.$imagename,$SPath.$imagename,70);
                        file_put_contents($MPath.$imagename, $data);
                        $this->resize($imagename, $MPath,500,500,$extenstion);
                        $this->compress($MPath.$imagename,$MPath.$imagename,70);
                        file_put_contents($LPath.$imagename, $data);
                        $this->compress($LPath.$imagename,$LPath.$imagename,70);

                        $productImageArray[]=$imagename;
                        $i++;
                    }
//                    print_r($productImageArray);
//                     exit;
                    $productImages=array();
                    if(!empty($productOldImage))
                         $productImages=array_merge($productOldImage,$productImageArray);
                    else
                        $productImages=$productImageArray;

                    $imageName=serialize($productImages);
                } else {
                    $imageName=serialize($productOldImage);  }

                $specification=serialize($r->specification);
                $payment_opt=explode(',',$r->payment_opt);
                $payment_opt=serialize($payment_opt);

                $shipment_type=explode(',',$r->shipment_type);
                $shipment_type=serialize($shipment_type);
                $fees_details=serialize($r->fees_details);

                $secondary_cat_ids=serialize($r->secondary_cat_ids);
                $seller_fee=($r->seller_fee?$r->seller_fee:0);
                $make_offer=($r->make_offer?$r->make_offer:0);

                $renew=($r->renew?$r->renew:'No');

                $daily_deal=($r->daily_deal==0?$productOldImages->daily_deal:$r->daily_deal);

                $status=(isset($r->status)?$r->status:8);

                $schedule_date=($r->schedule_date?$r->schedule_date:'');

                if($productOldImages->category_id != $r->category_id){
                    DB::table('product')->where(['id'=>$r->id,'user_id'=>$r->user_id])->update(['specification'=>'']);
                    DB::commit();
                }
                //Size Quantity and Item Default quantity merge
                if(isset($r->sq) && $r->sq != '')
                    $sq = serialize($r->sq);
                else
                    $sq = '';

                $discount = ($r->discount?$r->discount:0);
                $product=['user_id'=>$r->user_id,'title'=>$r->title,'subtitle'=>$r->subtitle,
                    'category_id'=>$r->category_id,'secondary_cat_ids'=>$secondary_cat_ids,'photos'=>$imageName,'isbn'=>$r->isbn,'settype_id'=>$r->settype_id,'brand_id'=>$r->brand_id,'p_condition'=>$r->p_condition,
                    'condition_description'=>$r->condition_description,'specification'=>$specification,'description'=>$r->description,
                    'quantity'=>$r->quantity,'sq'=>$sq,'price'=>$r->price,'payment_opt'=>$payment_opt,'return_opt'=>$r->return_opt,
                    'return_policy'=>$r->return_policy,'discount'=>$discount,'renew'=>$renew ,
                    'selling_type'=>$r->selling_type,'product_address'=>$r->product_address,'warrenty'=>$r->warrenty,'season_deal'=>$r->season_deal,'season_day'=>$r->season_day,
                    'ship_to'=>$r->ship_to,'daily_deal'=>$r->daily_deal,'deals_days'=>$r->deals_days,'shipment_type'=>$shipment_type,'delivery_days'=>$r->delivery_days,
                    'min_price'=>$r->min_price,'max_price'=>$r->max_price,'updated_date'=>date('Y-m-d g:i:s'),'paypal_email'=>$r->paypal_email
                    ,'seller_fee'=>$seller_fee,'fees_details'=>$fees_details,'make_offer'=>$make_offer,'status'=>$status,'schedule_date'=>$schedule_date];
//                echo 'sfsdfsdf<br>';
                //echo $r->id;
//                print_r($product);
//                $r->changes = $fees_details;
                
//                     $check_id = DB::table('update_product')->where(['product_id'=>$r->id,'user_id'=>$r->user_id])->get(['product_id']);
//                     echo count($check_id);
//                     print_r($check_id);
//                     echo 'product_id: '.$check_id->product_id;
//                     exit;
//                    if(!empty($r->changes) && $check_id->product_id!=$r->id){
//                        $changes=serialize($r->changes);
//                        DB::table('update_product')->insertGetId(['product_id'=>$r->id,'changes'=>$changes,'user_id'=>$r->user_id]);
//                    }
//                exit;
                $update=DB::table('product')->where(['id'=>$r->id,'user_id'=>$r->user_id])->update($product);
                if($update){
                    if(($r->duration != 0) && ($productOldImages->duration != $r->duration))
                        DB::table('product')->where(['id'=>$r->id,'user_id'=>$r->user_id])->update(['duration'=>$r->duration,'renew_duration' => DB::raw("renew_duration + $r->duration")]);
                      $r->changes = $fees_details;
                      $check_id = DB::table('update_product')->where(['product_id'=>$r->id,'user_id'=>$r->user_id])->get(['product_id']);
//                      echo $check_id->product_id;
//                      exit;
                    if(!empty($r->changes) && $check_id=='0'){
//                        if($check_id->product_id!=$r->id){
                        $changes=serialize($r->changes);
                        DB::table('update_product')->insertGetId(['product_id'=>$r->id,'changes'=>$changes,'user_id'=>$r->user_id]);
//                        }
                    }

                    foreach ($r->removeImages as $removeImg){
                        $SPath = public_path("/images/product/$r->id/S/$removeImg");
                        @unlink($SPath);
                        $MPath = public_path("/images/product/$r->id/M/$removeImg");
                        @unlink($MPath);
                        $LPath = public_path("/images/product/$r->id/L/$removeImg");
                        @unlink($LPath);
                    }
                    
                    
//                    echo $r;
//                    print_r($product);
//                    echo 'dfdfydr'.$r->status.'</br>';
//                    echo 'dfdfydr'.$r->from_product;
                    
//                    exit;
                    //SEND MAIL TO ADMIN
                    $product_info=DB::table('product')->where(['id'=>$r->id])->whereIn('status',[0,2])->first();
//                    if($product_info){
//                        $user_info=DB::table('users')->where('id',$r->user_id)->first(['email','first_name','last_name','display_name']);
//                        $product_info->photos=unserialize($product_info->photos);
//                        $product_info->photos=$product_info->photos[0];
//                        $product_info->shipment_type=unserialize($product_info->shipment_type);
//                        $email_template=DB::table('email_template')->where('id','7')->first();
//                        Mail::to($user_info->email)->send(new NewProduct($user_info,$product_info,$email_template));
//
//                        $admin=DB::table('users')->where('role','admin')->first(['email']);
//                        $product_info->from='EDIT_PRODUCT';
//                        $email_template_admin=DB::table('email_template')->where('id','9')->first();
//                        
////                        print_r($email_template_admin);
//                        
////                        exit;
//                        $subject = "$user_info->display_name. added a new item .$product_info->title";
//                        $product_notify = ['user_id'=>$r->user_id,'subject'=>$email_template_admin->subject,'description'=>$subject,'module'=>'view-pending-product'];
//                        $insert_notification=DB::table('admin_notification')->insert($product_notify);
//                        
////                        Mail::to($admin->email)->send(new NewProductAdminMail($user_info,$product_info,$email_template_admin));
//                        Mail::to('renugadevimurugesan@gmail.com')->send(new NewProductAdminMail($user_info,$product_info,$email_template_admin));
//                    }
                    if($product_info){
                        DB::table('product')->where(['id'=>$r->id,'user_id'=>$r->user_id])->update(['renew_duration' =>$r->duration,'created_date'=>date('Y-m-d g:i:s')]);
                        $product_info=DB::table('product')->where(['id'=>$r->id])->first();
                        $user_info=DB::table('users')->where('id',$r->user_id)->first(['email','first_name','last_name','display_name']);
                        $product_info->photos=unserialize($product_info->photos);
                        $product_info->photos=$product_info->photos[0];
                        $product_info->shipment_type=unserialize($product_info->shipment_type);
                        $email_template=DB::table('email_template')->where('id','7')->first();
                        
                        //print_r($email_template);exit;
                        
                        Mail::to($user_info->email)->send(new NewProduct($user_info,$product_info,$email_template));

                        $admin=DB::table('users')->where('role','admin')->first(['email']);
                        $product_info->from='NEW_PRODUCT';
                        $email_template_admin=DB::table('email_template')->where('id','8')->first();
                        
                        $searchArray = array("product_title");
                        $replaceArray = array($product_info->title);

                        $email_template_admin_subject = str_replace($searchArray,$replaceArray,$email_template_admin->subject);
                        
                        
                        $subject = "$user_info->display_name. added a new item .$product_info->title";
                        $product_notify = ['user_id'=>$r->user_id,'subject'=>$email_template_admin_subject,'description'=>$subject,'module'=>'view-pending-product'];
                        $insert_notification=DB::table('admin_notification')->insert($product_notify);
                        
                        
                        Mail::to($admin->email)->send(new NewProductAdminMail($user_info,$product_info,$email_template_admin));
//                        Mail::to('renugadevimurugesan@gmail.com')->send(new NewProductAdminMail($user_info,$product_info,$email_template_admin));
                    }

                    if($r->from_product=="ADD_PRODUCT"){
                        DB::table('product')->where(['id'=>$r->id,'user_id'=>$r->user_id])->update(['renew_duration' =>$r->duration,'created_date'=>date('Y-m-d g:i:s')]);
                        $product_info=DB::table('product')->where(['id'=>$r->id])->first();
                        $user_info=DB::table('users')->where('id',$r->user_id)->first(['email','first_name','last_name','display_name']);
                        $product_info->photos=unserialize($product_info->photos);
                        $product_info->photos=$product_info->photos[0];
                        $product_info->shipment_type=unserialize($product_info->shipment_type);
                        $email_template=DB::table('email_template')->where('id','7')->first();
                        
                        //print_r($email_template);exit;
                        
                        Mail::to($user_info->email)->send(new NewProduct($user_info,$product_info,$email_template));

                        $admin=DB::table('users')->where('role','admin')->first(['email']);
                        $product_info->from='NEW_PRODUCT';
                        $email_template_admin=DB::table('email_template')->where('id','8')->first();
                        
                        $searchArray = array("product_title");
                        $replaceArray = array($product_info->title);

                        $email_template_admin_subject = str_replace($searchArray,$replaceArray,$email_template_admin->subject);
                        
                        
                        $subject = "$user_info->display_name. added a new item .$product_info->title";
                        $product_notify = ['user_id'=>$r->user_id,'subject'=>$email_template_admin_subject,'description'=>$subject,'module'=>'view-pending-product'];
                        $insert_notification=DB::table('admin_notification')->insert($product_notify);
                        
                        
                        Mail::to($admin->email)->send(new NewProductAdminMail($user_info,$product_info,$email_template_admin));
//                        Mail::to('renugadevimurugesan@gmail.com')->send(new NewProductAdminMail($user_info,$product_info,$email_template_admin));
                    }
                    if($r->from_product=="RELIST_PRODUCT"){
                        DB::table('product')->where(['id'=>$r->id,'user_id'=>$r->user_id])->update(['renew_duration' =>$r->duration,'created_date'=>date('Y-m-d g:i:s')]);
                        $product_info=DB::table('product')->where(['id'=>$r->id])->first();
                        $user_info=DB::table('users')->where('id',$r->user_id)->first(['email','first_name','last_name','display_name']);
                        $product_info->photos=unserialize($product_info->photos);
                        $product_info->photos=$product_info->photos[0];
                        $product_info->shipment_type=unserialize($product_info->shipment_type);
                        $email_template=DB::table('email_template')->where('id','24')->first();
                        
                        //print_r($email_template);
                        
                        
                        //exit;
                        
                        Mail::to($user_info->email)->send(new UpdateRelistProduct($user_info,$product_info,$email_template));

                        $admin=DB::table('users')->where('role','admin')->first(['email']);
                        $product_info->from='RELIST_PRODUCT';
                        $email_template_admin=DB::table('email_template')->where('id','25')->first();
                        
                        $searchArray = array("product_title");
                        $replaceArray = array($product_info->title);
                        $email_template_admin_subject = str_replace($searchArray,$replaceArray,$email_template_admin->subject);
                        
                        $subject = "$user_info->display_name. relist .$product_info->title. item";
                        $product_notify = ['user_id'=>$r->user_id,'subject'=>$email_template_admin_subject,'description'=>$subject,'module'=>'view-relist-product'];
                        $insert_notification=DB::table('admin_notification')->insert($product_notify);
                        Mail::to($admin->email)->send(new UpdateRelistProductAdminMail($user_info,$product_info,$email_template_admin));
//                        Mail::to('renugadevimurugesan@gmail.com')->send(new UpdateRelistProductAdminMail($user_info,$product_info,$email_template_admin));
                    }
                    $this->reply=['status'=>'success','msg'=>'product updated successful.'];
                    DB::commit();
                }else
                    $this->reply=['status'=>'fail','msg'=>'something wrong happen.'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

            return response()->json($this->reply);
        } catch (Exception $e){
            DB::rollBack();
            $this->reply=['status'=>'fail','msg'=>'Something wrong happen,please try again.','detail'=>$e->getMessage()];
            return response()->json($this->reply);
        }
    }

    function checkBusinessAddress(Request $r){
        
         try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {
                $seller_info=DB::table('users')->where('id',$r->id)->first(['business_address']);
                //print_r($seller_info->business_address);
                
                if($seller_info->business_address==''){
                    $this->reply['check_address'] = ['status' => 'error','msg'=>'Please update your address', 'data' => $seller_info];
                } else {
                
                $this->reply['check_address'] = ['status' => 'success', 'data' => $seller_info];
                }
            } else
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
        
        
    }
    
   function viewLatestDraft(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {
                $latestDrafts=DB::table('product')->where(['status'=>'8','user_id'=>$r->user_id])
                    ->get(['id','photos','title','created_date','subtitle']);
                $i=0;
                foreach ($latestDrafts as $latestDraft){
                    $latestDraft->photos=unserialize($latestDraft->photos);
                    $latestDrafts[$i]->created_date = date('d.m.Y H:i:s', strtotime($latestDraft->created_date));
                    $i++;
                }

                $this->reply['latest_draft'] = ['status' => 'success', 'data' => $latestDrafts];
            } else
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
   }


   function DeleteLatestDraft(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {

                $delete=DB::table('product')->where('id',$r->product_id)->delete();
                if($delete)
                    $this->reply['latest_draft'] = ['status' => 'success', 'msg' => 'Delete Successfully.'];
                else
                    $this->reply['latest_draft'] = ['status' => 'fail', 'msg' => 'Something wrong happen.'];
            } else
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];

            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

   function deleteProduct(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                    $delete=DB::table('product')
                        ->where(['user_id'=>$r->user_id])
                        ->whereIn('id',$r->product_id)
                        ->update(['status'=>'9','updated_date'=>date('Y-m-d')]);
                    if($delete){
                        $this->reply=['status'=>'success','msg'=>'Product deleted successfully'];
                        DB::commit();
                    }else{
                        $this->reply=['status'=>'fail','msg'=>'product not deleted,please try again...'];
                    }
                }
            else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

   function unDeleteProduct(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $delete=DB::table('product')
                    ->where(['user_id'=>$r->user_id])
                    ->whereIn('id',$r->product_id)
                    ->update(['status'=>'0','updated_date'=>date('Y-m-d')]);
                if($delete){
                    $this->reply=['status'=>'success','msg'=>'Product un-deleted successfully'];
                    DB::commit();
                }else{
                    $this->reply=['status'=>'fail','msg'=>'product not un-deleted,please try again...'];
                }
            }
            else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

   function addRecentlyView(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)) {
                DB::beginTransaction();

                $save = DB::table('recently_view')->insertGetId(['user_id' => $r->user_id, 'product_id' => $r->product_id]);
                if ($save) {
                    $this->reply = ['status' => 'success', 'msg' => 'Recently View successfully'];
                    DB::commit();
                } else {
                    $this->reply = ['status' => 'fail', 'msg' => 'Something wrong,please try again...'];
                }
            } else {
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }
        catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

   function addPerHour(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)) {
                DB::beginTransaction();

                $viewPerHour=DB::table('product_view_per_hour')->where('device_token',$r->device_token)->exists();
                if($viewPerHour)
                    $this->reply = ['status' => 'fail', 'msg' => 'Device token already added.'];
                else{
                    $save = DB::table('product_view_per_hour')->insertGetId(['device_token'=>$r->device_token,'product_id' => $r->product_id]);
                    if ($save) {
                        $this->reply = ['status' => 'success', 'msg' => 'View per hour successfully'];
                        DB::commit();
                    } else
                        $this->reply = ['status' => 'fail', 'msg' => 'Something wrong,please try again...'];
                }
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Error.'];

            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

   function viewPerHour(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $count=DB::table('recently_view')->where('product_id',$r->product_id)
                  ->whereRaw('created_date >= DATE_SUB(NOW(), INTERVAL 1 HOUR)')->count();
                  //  ->count();
                $time=Carbon::now();
                $this->reply=['status'=>'success','count'=>$count,'time'=>$time];

            }else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

   function addPerHours(Request $r){
       try{
           $auth=$r->header('Auth');
           $authDB=DB::table('auth')->where('id','1')->first();
           if(Hash::check($auth,$authDB->auth)){
               $save=DB::table('product_view_per_hour')->insertGetId(['product_id',$r->product_id]);
               if($save)
                   $this->reply['per_hour']=['status'=>'success','msg'=>'Success fully added.'];
               else
                   $this->reply['per_hour']=['status'=>'fail','msg'=>'Something wrong happend'];

           }else
               $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail'];

       }catch (\Exception $e){
           echo $e->getMessage();
           DB::rollback();
       }
    }

   function recentlyViewedItems(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {

                $p_id=array();
                $products=DB::table('product')->where('status','1')->get();
                foreach ($products as $product){
                    $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                    $last_date=date("Y-m-d h:i:s", $date);
                    $current_date=date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);

                    $invert=$interval->invert;
                    if($invert=="1"){
                        $p_id[]=$product->id;
                    }
                }

                 $qry= DB::table('recently_view as r')
                    ->join('product as p', 'p.id', '=', 'r.product_id')
                    ->where('r.user_id', $r->user_id)
                    ->where('p.status', '=', '1')
                    ->where('p.quantity', '!=', '0')
                    ->whereNotIn('p.id',$p_id)
                    ->orderBy('r.created_date','asc')
                    ->distinct('p.id');
        //->where('r.created_date', '>=', Carbon::now()->subDays(30))
                if($r->limit)
                   $qry=$qry->limit($r->limit);

                $products=$qry->get(['p.title','p.product_address','p.photos','p.selling_type','p.min_price','p.price','p.shipment_type', 'p.id','p.duration','p.renew_duration','p.created_date','p.discount','p.quantity','p.approve_date']);
                
                $shipment_type[]='';
                foreach ($products as $product) {

                    //RATING
                    $product_avg=$this->ProductAvg($product->id);
                    $product->product_avg=$product_avg[0];
                    $product->product_rate_cnt=$product_avg[1];

                    if($product->selling_type=="Auction style")
                        $product->price=$product->min_price;

                    $product_images = unserialize($product->photos);
                    $product->photos = $product_images;

                    $duration = $product->renew_duration;
                    $created_date=$product->approve_date;
                    $date = strtotime("+ $duration day", strtotime($created_date));
                    $last_date = date("Y-m-d h:i:s", $date);
                    $current_date = date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);
                    $days_left = $interval->format('%R%a days');

                    $days=substr($days_left, 1,2);
                    $product->endsoon=trim($days);

                    $hour = $interval->format('%h hours ');
                    $product->days_left = $days_left . ' ' . $hour;

                    $invert = $interval->invert;
                    if ($invert == "0")
                        $product->time = 'Started';
                    else
                        $product->time = 'End';

                    $price =$product->price;
                    $discount = $price * $product->discount / 100;
                    $product->final_price = $price - $discount;
                    
                    $shipping_type=unserialize($product->shipment_type);
                    $i=0;
                    
                    if(count($shipping_type)==1){
                        $product->shipment_type=$shipping_type[$i];
                    } else {
                        foreach($shipping_type as $shipping_list){
                            if($shipping_list!='' || $i!=0){
                                array_push($shipment_type, $shipping_list);
                            }
                        }
                       $product->shipment_type = implode(',', array_filter($shipment_type));
                    }
                    

                }
//                exit;
                $this->reply = ['status' => 'success', 'data' => $products];
            } else {
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

   function watchedItems(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $products=DB::table('recently_view as r')
                    ->join('product as p','p.id','=','r.product_id')
                    ->where('p.status','=','1')
                    ->where('r.user_id',$r->user_id)
                    ->get(['p.title','p.photos','p.price','p.id']);
                $i=0;
                foreach ($products as $product){
                    $product_images=unserialize($product->photos);
                    $products[$i]->photos=$product_images;
                    $i++;
                }
                $this->reply=['status'=>'success','data'=>$products];
            }
            else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

   function latestTrending(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $p_id=array();
                $products=DB::table('product')->where('status','1')->get();
                foreach ($products as $product){
                    $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                    $last_date=date("Y-m-d h:i:s", $date);
                    $current_date=date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);

                    $invert=$interval->invert;
                    if($invert=="1"){
                        $p_id[]=$product->id;
                    }
                }

                $products=DB::table('recently_view as r')
                    ->join('product as p','p.id','=','r.product_id')
                    ->where('p.status','=','1')
                    ->where('p.quantity','!=','0')
                    ->select("r.product_id",'p.selling_type','p.product_address','p.min_price','p.title','p.photos','p.price','p.duration','p.renew_duration','p.created_date','p.approve_date','p.discount','p.shipment_type','p.quantity',DB::raw("COUNT(tbl_r.product_id) as count"))
                    ->groupBy('r.product_id')
                    ->whereNotIn('p.id',$p_id)
                    ->limit($r->limit)
                    ->orderBy('count', 'DESC')
                    ->get();

//                print_r($products);
//                echo $products['shipment_type'];
//                exit;
                $shipment_type[]='';
                foreach ($products as $product){

                    //RATING
                    $product_avg=$this->ProductAvg($product->product_id);
                    $product->product_avg=$product_avg[0];
                    $product->product_rate_cnt=$product_avg[1];

                    $product_images=unserialize($product->photos);
                    $product->photos=$product_images;

                    if($product->selling_type=="Auction style")
                        $product->price=$product->min_price;

                    $duration=  $product->renew_duration;
                    $created_date=$product->approve_date;
                    $date = strtotime("+ $duration day", strtotime($created_date));
                    $last_date = date("Y-m-d h:i:s", $date);
                    $current_date = date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);
                    $days_left = $interval->format('%R%a days');

                    $days=substr($days_left, 1,2);
                    $product->endsoon=trim($days);

                    $hour = $interval->format('%h hours ');
                    $product->days_left = $days_left . ' ' . $hour;

                    $invert = $interval->invert;
                    if ($invert == "0")
                        $product->time = 'Started';
                    else
                        $product->time = 'End';

                    $price =$product->price;
                    $discount = $price * $product->discount / 100;
                    $product->final_price = $price - $discount;
                    
                    $shipping_type=unserialize($product->shipment_type);
                    $i=0;
                    
                    if(count($shipping_type)==1){
                        $product->shipment_type=$shipping_type[$i];
                    } else {
                        foreach($shipping_type as $shipping_list){
                            if($shipping_list!=''){
                                array_push($shipment_type, $shipping_list);
                            }
                        }
                       $product->shipment_type = implode(',', array_filter($shipment_type));
                    }
                    
//                    print_r($shipment_type);
                    
                    
                }
//                exit;
                $this->reply=['status'=>'success','data'=>$products];
            }else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

   function dailyDeals(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){

                $p_ids=array();
                $products=DB::table('product')->where('status','1')->get();
                foreach ($products as $product){
                    $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                    $last_date=date("Y-m-d h:i:s", $date);
                    $current_date=date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);

                    $invert=$interval->invert;
                    if($invert=="1"){
                        $p_ids[]=$product->id;
                    }
                }
                $p_id=array();
                $checkProducts=DB::table('product')
                    ->where('daily_deal','Yes')
                    ->where('status','=','1')
                    ->whereNotIn('id',$p_ids)
                    ->get();
                
                $shipment_type=[];
                foreach ($checkProducts as $checkProduct){

                    $duration=  $checkProduct->deals_days;
                    $created_date=$checkProduct->approve_date;
                    $date = strtotime("+ $duration day", strtotime($created_date));
                    $last_date = date("Y-m-d h:i:s", $date);
                    $current_date = date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    if($datetime1 > $datetime2)
                        $p_id[]=$checkProduct->id;
                }


                $qry=DB::table('product')
                    ->where('daily_deal','Yes')
                    ->where('status','=','1')
                    ->whereNotIn('id',$p_id)
                    ->whereNotIn('id',$p_ids);
                if($r->limit)
                    $qry=$qry->limit($r->limit);

                $products=$qry->get(['title','selling_type','product_address','min_price','discount','photos','price','id','duration','renew_duration','created_date','discount','quantity','shipment_type','approve_date']);
                foreach ($products as $product){
                    //RATING
                    $product_avg=$this->ProductAvg($product->id);
                    $product->product_avg=$product_avg[0];
                    $product->product_rate_cnt=$product_avg[1];

                    if($product->selling_type=="Auction style")
                        $product->price=$product->min_price;
                    $product_images=unserialize($product->photos);
                    $product->photos=$product_images;

                    $duration=  $product->renew_duration;
                    $created_date=$product->approve_date;
                    $date = strtotime("+ $duration day", strtotime($created_date));
                    $last_date = date("Y-m-d h:i:s", $date);
                    $current_date = date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);
                    $days_left = $interval->format('%R%a days');

                    $days=substr($days_left, 1,2);
                    $product->endsoon=trim($days);

                    $hour = $interval->format('%h hours ');
                    $product->days_left = $days_left . ' ' . $hour;

                    $invert = $interval->invert;
                    if ($invert == "0")
                        $product->time = 'Started';
                    else
                        $product->time = 'End';

                    $price =$product->price;
                    $discount = $price * $product->discount / 100;
                    $product->final_price = $price - $discount;
                    
                    
                    if(count($product->shipment_type)==1){
                        $product->shipment_type=$shipping_type[$i];
                    } else {
                        foreach($shipping_type as $shipping_list){
                            if($shipping_list!=''){
                                array_push($shipment_type, $shipping_list);
                            }
                        }
                       $product->shipment_type = implode(',', array_filter($shipment_type));
                    }
                    

                }
                $this->reply=['status'=>'success','data'=>$products];
            } else {
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

   function viewProductDraft(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $data['latestDrafts']=DB::table('product')->where(['status'=>'8','user_id'=>$r->user_id])->count();
                $data['saveDrafts']=DB::table('product')->where('user_id',$r->user_id)
                    ->where(function ($q){
                        $q->orWhere('status',"0");
                        $q->orWhere('status',"2");
                        $q->orWhere('status',"7");
                    })->count();

                $products=DB::table('product')
                    ->where(function ($q){
                        $q->orWhere('status',"0");
                        $q->orWhere('status',"2");
                        $q->orWhere('status',"7");
                    })->where('user_id',$r->user_id)
                    ->get();
                $i=0;
                foreach ($products as $product){
                    $product_images=unserialize($product->photos);
                    $product->photos=$product_images;

                    $product_specification=unserialize($product->specification);
                    $product->specification=$product_specification;
                    $products[$i]->created_date = date('d.m.Y H:i:s', strtotime($product->created_date));
                    $i++;

                }
                $this->reply['draft_product']=['status'=>'success','data'=>$products, 'count'=>$data];
            }else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

   function compareProducts(Request $r){
        try {
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $product_id=explode(',',$r->product_id);
                $qry=DB::table('product as p')
                    ->join('users as u','u.id','=','p.user_id')
                    ->whereIn('p.id',$product_id);

                $viewWishlist=$qry->get(['p.id as product_id','p.price','p.title','p.photos','p.duration','p.renew_duration','p.created_date','u.id as user_id',
                    'u.business_name','p.discount','p.created_date','p.approve_date','p.selling_type','p.product_address','p.p_condition','p.payment_opt','p.return_opt','p.specification','p.return_policy']);
                if($viewWishlist) {
                    DB::commit();
                    foreach ($viewWishlist as $list)
                    {
                        $positiveAvg=DB::table('feedback')->where('receiver_id',$list->user_id)->first([DB::raw("SUM(IF(feedback_type='Positive', '1', '0'))/COUNT(id) as avg ,COUNT(id) as count")]);
                        $list->feedback_avg=$positiveAvg->avg*100;
                        $list->feedback_count=$positiveAvg->count;

                        $productImg=unserialize($list->photos);
                        $list->photos=$productImg[0];

                        $payment_opt=unserialize($list->payment_opt);
                        $list->payment_opt=$payment_opt;

                        $list->specification=unserialize($list->specification);

                        $date = strtotime("+$list->renew_duration day", strtotime($list->approve_date));
                        $last_date=date("Y-m-d h:i:s", $date);
                        $current_date=date("Y-m-d h:i:s");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);
                        $days_left= $interval->format('%R%a days');
                        $hour= $interval->format('%h hours ');
                        $list->days_left=$days_left.' '.$hour;

                        $invert=$interval->invert;
                        if($invert=="0"){
                            $list->time='Started';
                        }
                        else{
                            $list->time='End';
                        }
                    }
                    $reply['compare']=['status'=>'success','data'=>$viewWishlist];
                }else
                    $reply['compare']=['status'=>'fail','msg'=>'something wrong'];
            }
            else
               $reply['Auth']=['status'=>'auth','msg'=>'Authentication fail'];

            return response()->json($reply);
        }catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
   }

   function categoryProductList(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)) {
                DB::beginTransaction();
                $per_page = (isset($r->per_page) ? $r->per_page : 10);

                $products=DB::table('product')->where('status','1')->get();
//                echo '<pre>';
//                print_r($products);
//                echo '</pre>';
                $p_id=array();
                    foreach ($products as $product){
                        $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                        $last_date=date("Y-m-d h:i:s", $date);
                        $current_date=date("Y-m-d h:i:s");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);

                        $invert=$interval->invert;
                        if($invert=="1"){
                            $p_id[]=$product->id;
                        }
                    }

                $qry = DB::table('product as p')->where('p.status', '1')->whereNotIn('id',$p_id);
                //SEARCH AND CHECK CATEGORY ID
                if ($r->category_id) {
                    $category_id = DB::table('category')->where('parent_id', $r->category_id)->get(['id']);
                    $cat_id = array($r->category_id);
                    foreach ($category_id as $id) {
                        $cat_id[] = $id->id;
                    }
                    $qry = $qry->whereIn('p.category_id', $cat_id);
                }
                //SEARCH AND CHECK SETTYPE ID
                if ($r->settype_id)
                    $qry = $qry->where('p.settype_id', $r->settype_id);

                //SEARCH AND CHECK BRAND ID
                if ($r->brand_id)
                    $qry = $qry->where('p.brand_id', $r->brand_id);

                //SEARCH AND CHECK SEASON DEAL
                if($r->season_deal){
//                     echo $r->category_id;
//                    exit;
                    $season_product_id=array();
                    foreach ($products as $product){
                        $date = strtotime("+$product->season_day day", strtotime($product->approve_date));
                        $last_date=date("Y-m-d h:i:s", $date);
                        $current_date=date("Y-m-d h:i:s");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);

                        $invert=$interval->invert;
                        if($invert=="1"){
                            $season_product_id[]=$product->id;
                        }
                    }
                    $qry = $qry->where('p.season_deal','Yes')->whereNotIn('p.id',$season_product_id);
                }
                //SEARCH AND CHECK FEATURE DEAL
                if($r->feature_deal){
//                    echo $r->category_id;
//                    exit;
                    $feature_product_id=array();
                    foreach ($products as $product){
//                        $date = strtotime("+$product->feature_day day", strtotime($product->approve_date));
//                        $last_date=date("Y-m-d h:i:s", $date);
//                        $current_date=date("Y-m-d h:i:s");
//
//                        $datetime1 = date_create($current_date);
//                        $datetime2 = date_create($last_date);
//                        $interval = date_diff($datetime1, $datetime2);
//
//                        $invert=$interval->invert;
//                        if($invert=="1"){
                            $feature_product_id[]=$product->id;
//                        }
                    }
//                    $qry = $qry->where('p.feature_deal','Yes')->whereNotIn('p.id',$feature_product_id);
                    $qry = $qry->whereNotIn('p.id',$feature_product_id);
                }

                $products = $qry->paginate($per_page);
                $auction_cnt=0;
                $fixed_cnt=0;
                if ($products) {
                    $i = 0;
                    foreach ($products as $product) {

                        $duration=  $product->renew_duration;
                        $created_date=$product->approve_date;
                        $date = strtotime("+ $duration day", strtotime($created_date));
                        $last_date = date("Y-m-d h:i:s", $date);
                        $current_date = date("Y-m-d h:i:s");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);
                        $days_left = $interval->format('%R%a days');

                        $days=substr($days_left, 1,2);
                        $product->endsoon=trim($days);

                        $hour = $interval->format('%h hours ');
                        $product->days_left = $days_left . ' ' . $hour;

                        $invert = $interval->invert;
                        if ($invert == "0")
                            $product->time = 'Started';
                        else
                            $product->time = 'End';

                        $product_avg=$this->ProductAvg($product->id);
                        $product->product_avg=$product_avg[0];
                        $product->product_rate_cnt=$product_avg[1];

                        $product_image = unserialize($product->photos);
                        $products[$i]->photos = $product_image;

                        unset($product->specification);
                        unset($product->shipment_type);
                        unset($product->payment_opt);

                        if($product->selling_type=="Fixed price")
                            $fixed_cnt++;
                        else
                            $auction_cnt++;

                        if($product->selling_type=="Auction style"){
                            $last_bid=DB::table('auction_bid')->where('product_id',$product->id)->orderBy('id','desc')->first();
                            if($last_bid)
                                $product->last_bid=$last_bid->bid_price;
                            else
                                $product->last_bid=$product->min_price;
                        }else
                            $product->last_bid="0";

                        $i++;
                    }
                    $cnt=['Auction_count'=>$auction_cnt,'Fixed_count'=>$fixed_cnt,'Total'=>$i];
                    //DISPLAY SUB CATEGORY
                    $sub_category = array();
                    $set_type = array();
                    $brand = array();

                    $cat_id = array();
                    $category_id = DB::table('category')->where('parent_id', $r->category_id)->get();

                    $cat_id = array($r->category_id);
                    foreach ($category_id as $id) {
                        $cat_id[] = $id->id;
                    }
                  //  $set_type = DB::table('settype')->whereIn('category_id', $cat_id)->get();
                    $category_info=DB::table('category as c')
                        ->select(DB::raw("tbl_c.id,tbl_c.category_name,tbl_c.category_image,tbl_c.menu_type,tbl_c.Category_banner_title,
                         tbl_c.Category_banner_desc,tbl_c.Category_banner_image,tbl_c.Category_banner_link,tbl_c.parent_id,
                        (SELECT category_name from tbl_category where id=tbl_c.parent_id) as parent_category_name"))
                        ->where('c.id',$r->category_id)
                        ->first();
             //       $brand = DB::table('brand')->whereIn('category_id', $cat_id)->orWhere('settype_id', $r->settype_id)->get();

                    $this->reply = ['status' => 'success','count'=>$cnt, 'data' => $products,'category'=>$category_info ,'sub_category' => $category_id, 'set_type' => $set_type, 'brand' => $brand];
                } else
                    $this->reply = ['status' => 'fail', 'msg' => 'Something wrong happen'];

                DB::commit();
            }
            else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
   }

   function ProductAvg($id){
       $product_avg=DB::table('product_rate')->where('product_id',$id)->first([DB::raw("SUM(rate)/COUNT(id) as product_avg ,COUNT(id) as product_rate_cnt")]);
       $product[]=round($product_avg->product_avg);
       $product[]=$product_avg->product_rate_cnt;

       return $product;
   }

   function filterSpecification(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $specifications=$r->specification;
                $products=DB::table('product')->where('status','1')->get();
                $p_id=array();
                foreach ($products as $product){
                    $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                    $last_date=date("Y-m-d h:i:s", $date);
                    $current_date=date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);

                    $invert=$interval->invert;
                    if($invert=="1"){
                        $p_id[]=$product->id;
                    }
                }

                $qry=DB::table('product')->where('category_id',$r->category_id)->whereNotIn('id',$p_id)
                    ->where('status','=','1');

                $products=$qry->get();
                $product_id=array();
                $p_id=array();
                if($products){
                    if($specifications) {
                        foreach ($products as $product) {
                            $spec = unserialize($product->specification);
                            foreach ($spec as $k => $s) {
                                if (isset($s)) {
                                    $k = str_replace('-', '_', $k);
                                    $spe["$k"] = $s;
                                    foreach ($specifications as $k1 => $v1) {
                                        foreach ($spe[$k] as $s1){
                                            if(array_intersect($s1,$specifications[$k1]))
                                                $product_id[] = $product->id;
                                        }
                                    }
                                }
                            }
                            $product->specification = $spe;
                        }
                    }else{
                        foreach ($products as $product)
                            $p_id[]=$product->id;
                    }

                  $qry=DB::table('product')->where('category_id',$r->category_id);
                    if(count($product_id)>0)
                         $qry= $qry->whereIn('id',$product_id);
                    else
                        $qry= $qry->whereIn('id',$p_id);

                    if($r->min_price && $r->max_price)
                          $qry=$qry->whereBetween('price',[$r->min_price,$r->max_price]);

                   $product=$qry->get();

                    foreach ($product as $p){
                        $p->photos=unserialize($p->photos);
                        $p->specification=unserialize($p->specification);

                        $duration=  $p->renew_duration;
                        $created_date=$p->approve_date;
                        $date = strtotime("+ $duration day", strtotime($created_date));
                        $last_date = date("Y-m-d h:i:s", $date);
                        $current_date = date("Y-m-d h:i:s");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);
                        $days_left = $interval->format('%R%a days');

                        $days=substr($days_left, 1,2);
                        $p->endsoon=trim($days);

                        $hour = $interval->format('%h hours ');
                        $p->days_left = $days_left . ' ' . $hour;

                        $invert = $interval->invert;
                        if ($invert == "0")
                            $p->time = 'Started';
                        else
                            $p->time = 'End';

                    }
                    $this->reply['specification']=['status'=>'success','data'=>$product];
                }else
                    $this->reply['specification']=['status'=>'fail','msg'=>'something wrong happen,please try again.'];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];

        return response()->json($this->reply);
        } catch(Exception $e){
            echo $e->getMessage();
        }
   }

   function listCount(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $user_id=$r->user_id;
                $data=array();
                //WISH LIST COUNT
                $data['wishlist']=DB::table('add_to_wishlist')->where('user_id',$user_id)->count();
                //SAVE SEARCH COUNT
                $data['save_search']=DB::table('save_search')->where('user_id',$user_id)->count();
                //SAVE SELLER
                $data['save_seller']=DB::table('save_seller')->where('user_id',$user_id)->count();
                //PURCHASE HISTORY COUNT
                $purchase_count=DB::table('order')->where('buyer_id',$user_id)->DISTINCT('order_id')->orderBy('order_id')->get(['order_id']);
                $data['purchase_count']=count($purchase_count);

                //SELL

                //ALL SELLING COUNT
                $all_selling = DB::table('product')->where('user_id',$user_id)->count();
                $data['all_selling']=$all_selling;

                //SOLD COUNT
                $sold=DB::table('order as o')
                    ->join('product as p','p.id','=','o.product_id')
                    ->groupBy('o.product_id')
                    ->where(['o.seller_id'=>$user_id])
                    ->where('o.status','!=','cancel')
                    ->get(['o.product_id']);
                $data['sold']=count($sold);

                //DELETE COUNT
                $delete=DB::table('product')->where(['user_id'=>$user_id,'status'=>'9'])->count();
                $data['delete']=$delete;

                //UNSOLD COUNT
                $product_id=array();
                $unsold=DB::table('product')->where('user_id',$user_id)->where('status','=','1')->get();
                foreach ($unsold as $product){
                    $date=strtotime("+ $product->renew_duration days",strtotime($product->approve_date));
                    $date=date("Y-m-d h:i:s",$date);
                    $current_date=date("Y-m-d h:i:s");

                    if(strtotime($date) < strtotime($current_date))
                        $product_id[]=$product->id;
                }

                $data['unsold']=count($product_id);
                $products=DB::table('product')->where(['status'=>'1','user_id'=>$r->user_id])->get();
                $p_id=array();
                foreach ($products as $product){
                    $date = strtotime("+ $product->renew_duration day", strtotime($product->approve_date));
                    $last_date=date("Y-m-d h:i:s", $date);
                    $current_date=date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    if($datetime1 > $datetime2)
                        $p_id[]=$product->id;
                }
                
//                echo $user_id;
//                echo '<br>';
//                print_r($p_id);
//                echo '<br>';
//                Select id,title,status from tbl_product where id Not In('326','328','348','349','352') and user_id='212' and ( status='1' OR status='3');
                //ACTIVE PRODUCT
                $data['active']=DB::table('product')->where(['user_id'=>$user_id])->whereNotIn('id',$p_id)->where(function($q){
                    $q->orwhere('status','1');
                    $q->orwhere('status','3');})
                   ->count();
//                    echo $data['active'];
//                $qry1=DB::table('product')->where(['user_id'=>$user_id])->whereNotIn('id',$p_id)->get();
//                print_r($qry1);exit;
//                $qry1 =  $qry1->where(function($q){
//                    $q->orwhere('status','1');
//                    $q->orwhere('status','3');});
//                    $aa=$qry1->get(['id']);
//                    echo 'adsfsd';
//                    print_r($aa);
                //DRAFT PRODUCT
                $data['draft']=DB::table('product')->where('user_id',$user_id)
                    ->where(function ($q){
                        $q->orWhere('status',"0");
                        $q->orWhere('status',"2");
                        $q->orWhere('status',"7");
                        $q->orWhere('status',"8");
                        })->count();

                //RETURN PRODUCT
                $qry=DB::table('resolution_center as r')
                    ->leftjoin('users as u','u.id','=','r.buyer_id')
                    ->leftjoin('users as us','us.id','=','r.seller_id')
                    ->leftjoin('product as p','p.id','=','r.product_id')
                    ->groupBy('r.buyer_id','r.product_id','r.order_id')
                    ->orderBy('r.id','desc');
                $qry=  $qry->where(function($q) use ($user_id) {
                    $q->orWhere('r.seller_id',$user_id);
                });
                $seller_return=$qry->get(['r.product_id']);
                $qry1=DB::table('resolution_center as r')
                    ->leftjoin('users as u','u.id','=','r.buyer_id')
                    ->leftjoin('users as us','us.id','=','r.seller_id')
                    ->leftjoin('product as p','p.id','=','r.product_id')
                    ->groupBy('r.buyer_id','r.product_id','r.order_id')
                    ->orderBy('r.id','desc');
                $qry1 =  $qry1->where(function($q) use ($user_id) {
                    $q->orWhere('r.buyer_id',$user_id);
                });
                $buyer_return=$qry1->get(['r.product_id']);

                $data['return']= count($seller_return) + count($buyer_return) ;
                $data['seller_return']=count($seller_return);
                $data['buyer_return']= count($buyer_return) ;

//                print_r($data);
                //exit;
                $this->reply['list_count']=['status'=>'success','data'=>$data];
            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail'];

            return response()->json($data);
        } catch (Exception $e){
            echo $e->getMessage();
        }
   }
   function listAddress(Request $r){
//       exit;
       try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $p_id=array();
                $user=DB::table('users')->where('id',$r->user_id)->get();
//                print_r($users);
//                exit;
                //$address='';
                foreach($user as $users){
                    if($users->account_type == 'business_account'){
                    $value=unserialize($users->business_address);
//                    print_r($value);
                    
                    $address = $value['flat_no'].','.$value['street'].''.$value['city'].' - '. $value['pincode'].','.$value['state_name'].','.$value['country_name'];
//                 $address .= $value['city'].',';
//                 $address .= $value['state_name'].',';
//                 $address .= $$value['country_name'].'. ';
                 if(isset($value['landmark'])){
                  $address .= 'landmark - '.$value['landmark'];
                 }
//                 echo
//                    print_r($address);
//                    exit;
                    
                } else if($users->account_type == 'personal_account'){
                    $value=unserialize($users->personal_address);
                    
                    $address = $value['flat_no'].','.$value['street'].''.$value['city'].' - '. $value['pincode'].','.$value['state_name'].','.$value['country_name'];
//                 $address .= $value['city'].',';
//                 $address .= $value['state_name'].',';
//                 $address .= $$value['country_name'].'. ';
                 if(isset($value['landmark'])){
                  $address .= 'landmark - '.$value['landmark'];
                 }
                    
                }
                }
                
                $this->reply['list_address']=['status'=>'success','data'=>$address];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail'];

           return response()->json($this->reply);
       }catch (Exception $e){
           echo $e->getMessage();
       }
   }
   function recommendedForYou(Request $r){
       try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $p_id=array();
                $products=DB::table('product')->where('status','1')->get();
                foreach ($products as $product){
                    $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                    $last_date=date("Y-m-d h:i:s", $date);
                    $current_date=date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);

                    $invert=$interval->invert;
                    if($invert=="1"){
                        $p_id[]=$product->id;
                    }
                }

                $products_info=array();
                $save_search=DB::table('save_search')->where(['user_id'=>$r->user_id])->distinct('keyword')->where('keyword','!=','')->get(['keyword']);

                foreach ($save_search as $search){
                    $qry=DB::table('product')->where('status','1')->whereNotIn('id',$p_id)->where('title','like',"%$search->keyword%");

                    $products=$qry->get(['id','title','product_address','photos','selling_type','min_price','product_sku','discount','quantity','price','duration','renew_duration','created_date','approve_date']);
                    foreach ($products as $product){

                        //RATING
                        $product_avg=$this->ProductAvg($product->id);
                        $product->product_avg=$product_avg[0];
                        $product->product_rate_cnt=$product_avg[1];

                        $product->photos=unserialize($product->photos);

                        if($product->selling_type=="Auction style")
                            $product->price=$product->min_price;

                        $duration=  $product->renew_duration;
                        $created_date=$product->approve_date;

                        $date = strtotime("+ $duration day", strtotime($created_date));
                        $last_date = date("Y-m-d h:i:s", $date);
                        $current_date = date("Y-m-d h:i:s");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);
                        $days_left = $interval->format('%R%a days');

                        $days=substr($days_left, 1,2);
                        $product->endsoon=trim($days);

                        $hour = $interval->format('%h hours ');
                        $product->days_left = $days_left . ' ' . $hour;

                        $invert = $interval->invert;
                        if ($invert == "0")
                            $product->time = 'Started';
                        else
                            $product->time = 'End';

                        $products_info[]=$product;
                    }
                }
                $this->reply['list_count']=['status'=>'success','data'=>$products_info];

            }else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail'];

           return response()->json($this->reply);
       }catch (Exception $e){
           echo $e->getMessage();
       }
   }

   function viewBlocks(Request $r){
       try{
           $auth=$r->header('Auth');
           $authDB=DB::table('auth')->where('id','1')->first();
           if(Hash::check($auth,$authDB->auth)){

               $p_ids=array();
               $products=DB::table('product')->where('status','1')->get();
               foreach ($products as $product){
                   $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                   $last_date=date("Y-m-d h:i:s", $date);
                   $current_date=date("Y-m-d h:i:s");

                   $datetime1 = date_create($current_date);
                   $datetime2 = date_create($last_date);
                   $interval = date_diff($datetime1, $datetime2);

                   $invert=$interval->invert;
                   if($invert=="1"){
                       $p_ids[]=$product->id;
                   }
               }

               //VIEW BANNERS
               $qry=DB::table('home_banner as b')->join('banners_set as s','s.id','=','b.set_id');
               $qry=$qry->where('s.status','1');
               $banner=$qry->get(['b.title','b.banner_image','b.url','b.description','s.set_name','b.id','b.div_color']);

               //SEASON DEALS
               $season=DB::table('season_deal')->where('status','1')->first();
              // print_r($season);
               $category_ids=unserialize($season->category_ids);
               //print_r($category_ids);
               unset($season->category_ids);
               $season_category=DB::table('category')->whereIn('id',$category_ids)->get(['id','category_name','season_thumbnail']);
                $season->season_cat=$season_category;
                
                
               //FEATURE DEALS
               $feature=DB::table('feature_deal')->where('status','1')->first();
              
//               echo '<pre>';
//               print_r($feature);
//               echo '</pre>';
               
//               print_r(json_decode($feature->category_ids));
               
              $category_ids=$feature->category_ids;
               $category_idss=json_decode($category_ids);
               $feature->category_ids=[];
               foreach($category_idss as $rec){
                    $parent_cat[]=$rec->parent_cat;
//                    $parent_cat['cat_id']=$rec->cat_id;
//                    $parent_cat['name']=$rec->name;
//                    $parent_cat['image']=$rec->image;
                    
//                    array_push($parent_cat,$rec);
                    array_push($feature->category_ids,$rec);
//                 $feature->category_ids=$rec;
               }
               
//               echo '<pre>';
//               print_r($parent_cat);
//               echo '</pre>';
               
              //unset($feature->category_ids);
               $feature_category=DB::table('category')->whereIn('id',$parent_cat)->get(['id','category_name','season_thumbnail']);
                $feature->feature_cat=$feature_category;
                
                
             
              
//               unset($season->category_ids);
//               $season_category=DB::table('category')->whereIn('id',$category_ids)->get(['id','category_name','season_thumbnail']);
//                $season->season_cat=$season_category;

                
                
                
               //LATEST TRENDING
               $trandingProducts=DB::table('recently_view as r')
                   ->join('product as p','p.id','=','r.product_id')
                   ->where('p.status','=','1')
                   ->where('p.quantity','!=','0')
                   ->select("r.product_id",'p.title','p.photos','p.price','p.duration','p.renew_duration','p.created_date','p.approve_date','p.discount','p.quantity',DB::raw("COUNT(tbl_r.product_id) as count"))
                   ->groupBy('r.product_id')
                   ->whereNotIn('p.id',$p_ids)
                   ->limit($r->limit)
                   ->orderBy('count', 'DESC')
                   ->get();

               foreach ($trandingProducts as $product){
                   $product_images=unserialize($product->photos);
                   $product->photos=$product_images;

                   $duration=  $product->renew_duration;
                   $created_date=$product->approve_date;
                   $date = strtotime("+ $duration day", strtotime($created_date));
                   $last_date = date("Y-m-d h:i:s", $date);
                   $current_date = date("Y-m-d h:i:s");

                   $datetime1 = date_create($current_date);
                   $datetime2 = date_create($last_date);
                   $interval = date_diff($datetime1, $datetime2);
                   $days_left = $interval->format('%R%a days');

                   $days=substr($days_left, 1,2);
                   $product->endsoon=trim($days);

                   $hour = $interval->format('%h hours ');
                   $product->days_left = $days_left . ' ' . $hour;

                   $invert = $interval->invert;
                   if ($invert == "0")
                       $product->time = 'Started';
                   else
                       $product->time = 'End';

                   $price =$product->price;
                   $discount = $price * $product->discount / 100;
                   $product->final_price = $price - $discount;
               }

               //DAILY DEALS
               $p_id=array();
               $checkProducts=DB::table('product')
                   ->where('daily_deal','Yes')
                   ->where('status','=','1')
                   ->whereNotIn('id',$p_ids)
                   ->get();
               foreach ($checkProducts as $checkProduct){

                   $duration=  $checkProduct->deals_days;
                   $created_date=$checkProduct->approve_date;
                   $date = strtotime("+ $duration day", strtotime($created_date));
                   $last_date = date("Y-m-d h:i:s", $date);
                   $current_date = date("Y-m-d h:i:s");

                   $datetime1 = date_create($current_date);
                   $datetime2 = date_create($last_date);
                   if($datetime1 > $datetime2)
                       $p_id[]=$checkProduct->id;
               }

               $qry=DB::table('product')
                   ->where('daily_deal','Yes')
                   ->where('status','=','1')
                       ->where('quantity','!=','0')
                   ->whereNotIn('id',$p_ids)
                   ->whereNotIn('id',$p_id);
               if($r->limit)
                   $qry=$qry->limit($r->limit);

               $dailyProducts=$qry->get(['title','selling_type','min_price','discount','photos','price','id','duration','renew_duration','created_date','discount','quantity','approve_date']);
               foreach ($dailyProducts as $product){
                   $product_images=unserialize($product->photos);
                   $product->photos=$product_images;
                   if($product->selling_type=="Auction style")
                       $product->price=$product->min_price;

                   $duration=  $product->renew_duration;
                   $created_date=$product->approve_date;
                   $date = strtotime("+ $duration day", strtotime($created_date));
                   $last_date = date("Y-m-d h:i:s", $date);
                   $current_date = date("Y-m-d h:i:s");

                   $datetime1 = date_create($current_date);
                   $datetime2 = date_create($last_date);
                   $interval = date_diff($datetime1, $datetime2);
                   $days_left = $interval->format('%R%a days');

                   $days=substr($days_left, 1,2);
                   $product->endsoon=trim($days);

                   $hour = $interval->format('%h hours ');
                   $product->days_left = $days_left . ' ' . $hour;

                   $invert = $interval->invert;
                   if ($invert == "0")
                       $product->time = 'Started';
                   else
                       $product->time = 'End';

                   $price =$product->price;
                   $discount = $price * $product->discount / 100;
                   $product->final_price = $price - $discount;
               }

               $recommendedProductsInfo=array();
               $recentlyViewProducts=array();
               if($r->user_id !='0'){

                   //RECENTLY VIEW
                   $qry= DB::table('recently_view as r')
                       ->join('product as p', 'p.id', '=', 'r.product_id')
                       ->where('r.user_id', $r->user_id)
                       ->where('p.status', '=', '1')
                           ->where('p.quantity','!=','0')
                       ->whereNotIn('p.id',$p_ids)
                       ->distinct('p.id');
                   //->where('r.created_date', '>=', Carbon::now()->subDays(30));
                   if($r->limit)
                       $qry=$qry->limit($r->limit);

                   $recentlyViewProducts=$qry->get(['p.title','p.selling_type','p.min_price', 'p.photos', 'p.price', 'p.id','p.duration','p.renew_duration','p.created_date','p.discount','p.quantity','p.approve_date']);
                   foreach ($recentlyViewProducts as $product) {
                       $product_images = unserialize($product->photos);
                       $product->photos = $product_images;

                       if($product->selling_type=="Auction style")
                           $product->price=$product->min_price;

                       $duration=  $product->renew_duration;
                       $created_date=$product->approve_date;
                       $date = strtotime("+ $duration day", strtotime($created_date));
                       $last_date = date("Y-m-d h:i:s", $date);
                       $current_date = date("Y-m-d h:i:s");

                       $datetime1 = date_create($current_date);
                       $datetime2 = date_create($last_date);
                       $interval = date_diff($datetime1, $datetime2);
                       $days_left = $interval->format('%R%a days');

                       $days=substr($days_left, 1,2);
                       $product->endsoon=trim($days);

                       $hour = $interval->format('%h hours ');
                       $product->days_left = $days_left . ' ' . $hour;

                       $invert = $interval->invert;
                       if ($invert == "0")
                           $product->time = 'Started';
                       else
                           $product->time = 'End';

                       $price =$product->price;
                       $discount = $price * $product->discount / 100;
                       $product->final_price = $price - $discount;
                   }

                   //RECOMMENDED FOR YOU
                   $save_search=DB::table('save_search')->where(['user_id'=>$r->user_id])->distinct('keyword')->where('keyword','!=','')->get(['keyword']);
                   foreach ($save_search as $search){
                       $qry=DB::table('product')
                           ->whereNotIn('id',$p_ids)
                           ->where('status','1')
                               ->where('quantity','!=','0')
                           ->where('title','like',"%$search->keyword%");


                       $recommendedProducts=$qry->get(['id','title','photos','product_sku','discount','quantity','price','duration','renew_duration','created_date','approve_date']);

                       foreach ($recommendedProducts as $product){
                           $product->photos=unserialize($product->photos);

                           $duration=  $product->renew_duration;
                           $created_date=$product->approve_date;
                           $date = strtotime("+ $duration day", strtotime($created_date));
                           $last_date = date("Y-m-d h:i:s", $date);
                           $current_date = date("Y-m-d h:i:s");

                           $datetime1 = date_create($current_date);
                           $datetime2 = date_create($last_date);
                           $interval = date_diff($datetime1, $datetime2);
                           $days_left = $interval->format('%R%a days');

                           $days=substr($days_left, 1,2);
                           $product->endsoon=trim($days);

                           $hour = $interval->format('%h hours ');
                           $product->days_left = $days_left . ' ' . $hour;

                           $invert = $interval->invert;
                           if ($invert == "0")
                               $product->time = 'Started';
                           else
                               $product->time = 'End';

                           $recommendedProductsInfo[]=$product;
                       }
                   }
               }
               //REMOVE DUPLICATE VALUE IN MULTI DIM ARRAY
               $recommendedProductsInfo = (array) array_map("unserialize", array_unique(array_map("serialize", $recommendedProductsInfo)));

               //ALL NEW PRODUCTS
               $products=DB::table('product')->where('status','1')->get();

               foreach ($products as $product){
                   $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                   $last_date=date("Y-m-d h:i:s", $date);
                   $current_date=date("Y-m-d h:i:s");

                   $datetime1 = date_create($current_date);
                   $datetime2 = date_create($last_date);
                   $interval = date_diff($datetime1, $datetime2);

                   $invert=$interval->invert;
                   if($invert!="1"){
                       $p_id[]=$product->id;
                   }
               }
//               print_r($p_id);
               $qry=DB::table('product')
                       ->whereIn('id',$p_id)
                   ->where('status','=','1')
                       ->where('quantity','!=','0')
                   ->orderBy('approve_date','desc');
//                   ->whereNotIn('id',$p_id);
                   
               if($r->limit)
                   $qry=$qry->limit($r->limit);

               $newProducts=$qry->get(['title','discount','photos','price','id','duration','renew_duration','created_date','discount','quantity','approve_date']);
               foreach ($newProducts as $product){
                   $product_images=unserialize($product->photos);
                   $product->photos=$product_images;

                   $price =$product->price;
                   $discount = $price * $product->discount / 100;
                   $product->final_price = $price - $discount;
               }
               // Block Management
               $block_management=DB::table('setting')->where('id','1')->first(['block_management']);
               $block=unserialize($block_management->block_management);
               
               
               // Auto Relist Management
               $relist_management=DB::table('setting')->where('id','1')->first(['auto_relist_management']);
               
               $relist=unserialize($relist_management->auto_relist_management);
               
               
               if($relist['autorelist']==1){
//                   echo 'relist';
//                   echo $r->user_id;
                   $products=DB::table('product')->where(['renew'=>'Yes'])->where('user_id', $r->user_id)->where('status', '1')->get();
                $p_id=array();
                
//                print_r($products);
                
                $relist_management=DB::table('setting')->where('id','1')->first(['auto_relist_management']);
        $relist=unserialize($relist_management->auto_relist_management);
//                print_r($relist['times']);
                foreach($products as $product){
//                    $date1=date_create("$product->approve_date");
//                    echo date_format($date1,"Y-m-d").'<br>';
                    
                    $date1=date_create("$product->approve_date");
                    date_add($date1,date_interval_create_from_date_string("$product->renew_duration days"));
                   $last_date = date_format($date1,"Y-m-d");
//                    $date=date_create("2013-03-15");
//                    date_add($date,date_interval_create_from_date_string("$product->renew_duration days"));
//                     echo '<br>gfhdhg';
//                    $date = strtotime($date);
//                    $last_date=date("Y-m-d h:i:s", $date);
                   $current_date=date("Y-m-d");

//                    $datetime1 = date_create($current_date);
//                    $datetime2 = date_create($last_date);
//                    echo $last_date;
                    $renew_count = $product->renew_count;
//                    echo '<br>';
//                    echo 'if:'. ($current_date >= $last_date);
//                    echo '<br>gfhdhg';
                    if($current_date >= $last_date){
                        if($product->renew_count<$relist['times']){
                        $p_id[]=$product->id;
//                        $count=$product->renew_count;
                        $count=$renew_count+1;
                        $update1=DB::table('product')->where('id',$product->id)->where('user_id', $r->user_id)->update(['renew_count'=>$count]);
                        }
                    }
                }
//                   print_r($p_id);
                   
                   $update=DB::table('product')->whereIn('id',$p_id)->where('user_id', $r->user_id)->update(['status'=>'1','updated_date'=>date('Y-m-d'),'approve_date'=>date('Y-m-d')]);
//                    echo $update;
//                    if($update){
//                        
//                        
//                            $product_info=DB::table('product')->where(['id'=>$r->id])->first();
//                            $user_info=DB::table('users')->where('id',$r->user_id)->first(['email','first_name','last_name','display_name']);
//                            $product_info->photos=unserialize($product_info->photos);
//                            $product_info->photos=$product_info->photos[0];
//                            $product_info->shipment_type=unserialize($product_info->shipment_type);
//                            $email_template=DB::table('email_template')->where('id','23')->first();
////                            print_r($email_template);
////                            exit;
//                            Mail::to($user_info->email)->send(new RelistProduct($user_info,$product_info,$email_template));
//                            
//                    }
                   
               } else {
//                   echo 'nonrelist';
               }
               
//               exit;
               
               
//              print_r($season);
//              exit;
               

              $this->reply['blocks']=['season_deal'=>$season,'feature_deal'=>$feature,'banners'=>$banner ,'latest_trending'=>$trandingProducts,'daily_deals'=>$dailyProducts,'recently_viewed'=>$recentlyViewProducts,'recommended'=>$recommendedProductsInfo,'new_products'=>$newProducts,'block'=>$block];
           }else
               $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail'];

           return response()->json($this->reply);
       } catch (Exception $e){
           echo $e->getMessage();
       }
   }

   function newProducts(Request $r){
       try {
           $auth = $r->header('Auth');
           $authDB = DB::table('auth')->where('id', '1')->first();
           if (Hash::check($auth, $authDB->auth)) {
               $products = DB::table('product')->where('status', '1')->get();

               foreach ($products as $product) {
                   $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                   $last_date = date("Y-m-d h:i:s", $date);
                   $current_date = date("Y-m-d h:i:s");

                   $datetime1 = date_create($current_date);
                   $datetime2 = date_create($last_date);
                   $interval = date_diff($datetime1, $datetime2);

                   $invert = $interval->invert;
                   if ($invert == "1") {
                       $p_id[] = $product->id;
                   }
               }

               $qry = DB::table('product')
                   ->where('status', '=', '1')
                   ->where('quantity', '!=', '0')
                   ->orderBy('approve_date', 'desc')
                   ->whereNotIn('id', $p_id);
               if ($r->limit)
                   $qry = $qry->limit($r->limit);

               $newProducts = $qry->get(['title','product_address' ,'discount','min_price','selling_type', 'photos', 'price', 'id', 'duration', 'renew_duration', 'created_date', 'discount', 'quantity', 'approve_date','shipment_type']);
               $shipment_type[]='';
               foreach ($newProducts as $product) {
                    //RATING
                   $product_avg=$this->ProductAvg($product->id);
                   $product->product_avg=$product_avg[0];
                   $product->product_rate_cnt=$product_avg[1];

                   $product_images = unserialize($product->photos);
                   $product->photos = $product_images;
                    if($product->selling_type=="Auction style")
                        $product->price=$product->min_price;
                   $price = $product->price;
                   $discount = $price * $product->discount / 100;
                   $product->final_price = $price - $discount;
                   $shipping_type=unserialize($product->shipment_type);
                    $i=0;
                    
                    if(count($shipping_type)==1){
                        $product->shipment_type=$shipping_type[$i];
                    } else {
                        foreach($shipping_type as $shipping_list){
                            if($shipping_list!=''){
                                array_push($shipment_type, $shipping_list);
                            }
                        }
                       $product->shipment_type = implode(',', array_filter($shipment_type));
                    }
               }
               $this->reply['products']=['status'=>'success','data'=>$newProducts];
           } else
               $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
       return response()->json($this->reply);
       }catch (Exception $e){
           echo $e->getMessage();
       }
   }

    function underFiftyProduct(Request $r){
        try {
            $auth = $r->header('Auth');
            $authDB = DB::table('auth')->where('id', '1')->first();
            if (Hash::check($auth, $authDB->auth)) {
                $p_id=array();
                $setting = DB::table('setting')->first();
                $products=DB::table('product')->where('status','1')->get();
                    foreach ($products as $product){
                        $date = strtotime("+$product->renew_duration day", strtotime($product->approve_date));
                        $last_date=date("Y-m-d h:i:s", $date);
                        $current_date=date("Y-m-d h:i:s");

                        $datetime1 = date_create($current_date);
                        $datetime2 = date_create($last_date);
                        $interval = date_diff($datetime1, $datetime2);

                        $invert=$interval->invert;
                        if($invert=="1"){
                            $p_id[]=$product->id;
                        }
                    }
                $product_id=array();
                $product_price=DB::table('product')->where('status','=','1')->whereNotIn('id',$p_id)->get();
                
                foreach ($product_price as $price){
                    if($price->selling_type=='Auction style')
                    {
                       $lastbid= ProductController::lastBid($price->id);
                        if($lastbid)
                         $bid_price= $lastbid->bid_price;
                        else
                         $bid_price= $price->min_price;
                        if($bid_price <= $setting->home_page_menu_value){
                            $product_id[]=$price->id;
                        }
                    }else{
                        $discount=$price->price*$price->discount/100;
                        $final_price=$price->price-$discount;
                        if($final_price <= $setting->home_page_menu_value){
                            $product_id[]=$price->id;
                        }
                    }
                }


                $qry= DB::table('product')->whereIn('id',$product_id)->where('status','=','1');
                if($r->limit)
                    $qry=$qry->limit($r->limit);

                $products=$qry->get(['title', 'photos', 'price', 'id','duration','renew_duration','created_date','min_price','discount','quantity','approve_date','product_address','selling_type']);
                foreach ($products as $product) {

                    if($product->selling_type=="Auction style")
                        $product->price=$product->min_price;

                    $product_images = unserialize($product->photos);
                    $product->photos = $product_images;

                    $product_avg=$this->ProductAvg($product->id);
                    $product->product_avg=$product_avg[0];
                    $product->product_rate_cnt=$product_avg[1];

                    $duration=  $product->renew_duration;
                    $created_date=$product->approve_date;
                    $date = strtotime("+ $duration day", strtotime($created_date));
                    $last_date = date("Y-m-d h:i:s", $date);
                    $current_date = date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    $interval = date_diff($datetime1, $datetime2);
                    $days_left = $interval->format('%R%a days');

                    $days=substr($days_left, 1,2);
                    $product->endsoon=trim($days);

                    $hour = $interval->format('%h hours ');
                    $product->days_left = $days_left . ' ' . $hour;

                    $invert = $interval->invert;
                    if ($invert == "0")
                        $product->time = 'Started';
                    else
                        $product->time = 'End';

                    $price =$product->price;
                    $discount = $price * $product->discount / 100;
                    $product->final_price = $price - $discount;
                }
                $this->reply['under_fifty'] = ['status' => 'success', 'data' => $products];
            } else {
                $this->reply['Auth'] = ['status' => 'fail', 'msg' => 'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
        }
    }

    function autoRenewProduct(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                $products=DB::table('product')->where(['renew'=>'Yes'])->get();
                $p_id=array();
                foreach($products as $product){
                    $date = strtotime("+ $product->renew_duration day", strtotime($product->approve_date));
                    $last_date=date("Y-m-d h:i:s", $date);
                    $current_date=date("Y-m-d h:i:s");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    if($datetime1 > $datetime2)
                        $p_id[]=$product->id;
                }
                if(count($p_id)){
                    foreach ($p_id as $id){
                        DB::table('product')->where(['id'=>$id])->update(['renew_duration' => DB::raw("renew_duration + 10")]);
                        $product_info=DB::table('product')->where('id',$id)->first();
                        $product_info->renew_product='Yes';
                        $user_info=DB::table('users')->where('id',$product_info->user_id)->first();
                     }
                }else
                    $this->reply['winner']=['status'=>'fail','msg'=>'No product to end.'];
                return response()->json($this->reply);
            } else
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication fail.'];

        } catch (\Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }

    function AutoScheduleProduct(Request $r){
        try{
                $products=DB::table('product')->where('status','7')->get();
                if($products) {
                    foreach ($products as $product) {
                        $schedule_date = strtotime($product->schedule_date);
                        $current_date = strtotime(date("Y-m-d h:i:s"));

                        if ($current_date > $schedule_date) {
                            DB::table('product')->where('id', $product->id)->update(['status' => '1', 'updated_date' => date('Y-m-d h:i:s')]);
                            $product->photos = unserialize($product->photos);
                            $product->photos = $product->photos[0];
                            $product->shipment_type = unserialize($product->shipment_type);

                            $user_info = DB::table('users')->where('id', $product->user_id)->first(['id', 'first_name', 'email', 'status_reason', 'user_status']);
                            $email_template=DB::table('email_template')->where('id','10')->first();
                            Mail::to($user_info->email, $user_info->first_name)->send(new InactiveProductReason($user_info, $product,$email_template));
                            $this->reply['schedule'] = ['status' => 'success', 'msg' => 'Product live successful.'];
                        } else
                            $this->reply['schedule'] = ['status' => 'fail', 'msg' => 'No product to scheduled'];
                    }
                } else
                $this->reply['schedule']=['status'=>'fail','msg'=>'No product to scheduled'];


            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    
     function relistProduct(Request $r){
//        echo 'testing123';
//        echo 'id'.$r->id;
//        echo 'user_id'.$r->user_id;
        //exit;
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
//                    $delete=DB::table('product')
//                        ->where(['user_id'=>$r->user_id])
//                        ->whereIn('id',$r->product_id)
//                        ->update(['status'=>'1','updated_date'=>date('Y-m-d')]);
                    $status =1;
                    
                    $update=DB::table('product')->where(['id'=>$r->id,'user_id'=>$r->user_id])->update(['status'=>$status,'updated_date'=>date('Y-m-d'),'approve_date'=>date('Y-m-d')]);
                    
                    if($update){
                        
                        
                        if($status==1){
                            $product_info=DB::table('product')->where(['id'=>$r->id])->first();
                            $user_info=DB::table('users')->where('id',$r->user_id)->first(['email','first_name','last_name','display_name']);
                            $product_info->photos=unserialize($product_info->photos);
                            $product_info->photos=$product_info->photos[0];
                            $product_info->shipment_type=unserialize($product_info->shipment_type);
                            
                            
//                            $product_info=DB::table('product')->where(['id'=>$r->id])->first();
//                        $user_info=DB::table('users')->where('id',$r->user_id)->first(['email','first_name','last_name','display_name']);
//                        $product_info->photos=unserialize($product_info->photos);
//                        $product_info->photos=$product_info->photos[0];
//                        $product_info->shipment_type=unserialize($product_info->shipment_type);
//                        $email_template=DB::table('email_template')->where('id','7')->first();
//                        
//                        //print_r($email_template);exit;
//                        
//                        Mail::to($user_info->email)->send(new NewProduct($user_info,$product_info,$email_template));
                            
                            
                            
                            
                            $email_template=DB::table('email_template')->where('id','23')->first();
//                            print_r($email_template);
//                            exit;
                            Mail::to($user_info->email)->send(new RelistProduct($user_info,$product_info,$email_template));
//                            Mail::to('renugadevimurugesan@gmail.com')->send(new RelistProduct($user_info,$product_info,$email_template));
                            
                            
                        }
                        
                        
                        
                        $this->reply=['status'=>'success','msg'=>'Relist Product successfully'];
                        DB::commit();
                    }else{
                        $this->reply=['status'=>'fail','msg'=>'product not relisted,please try again...'];
                    }
                }
            else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        } catch (Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }
    
    
}
