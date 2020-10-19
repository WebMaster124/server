<base href="http://onlinetnt.com/admin/">
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Edit Feature Deal </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">edit feature deal</li>
            </ol>
        </div>
    </div>

    <div class="contentpanel">
        @if(Session::has('message'))
            <div class="alert alert-warning">
                {{ Session::get('message') }}
            </div>
        @endif
		<?php 
		//dd($season_deal);
		 $get_img_catid = json_decode($feature_deal->feature_image, true);
		 
		 //$get_img_catname = json_decode($feature_deal->feature_name, true);
		 
		 //$feature_deal->feature_name
		 /*  echo "<pre>";
		 print_r($get_img_catname);
		 echo "</pre>"; */   
		?>
        <div class="row">
            <form action="{{ action('FeatureController@editFeatureData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{ $feature_deal->id  }}">
                    <div class="panel-body">
					
					 <div class="form-group" >
                            <label class="col-sm-3 control-label">Feature Name <span style="color:red">* </span>:</label>
                            <div class="col-sm-6" id="feature_name_id">
                                <input type="text"  class="form-control" id="feature_deal" value="<?php echo $feature_deal->feature_deal; ?>" placeholder="Enter feature Name" name="feature_deal">
								
                                @if ($errors->has('feature_name'))
                                    <div class="error">{{ $errors->first('feature_name') }}</div>
                                @endif
                            </div>
                        </div>
						
						 <div class="form-group" >
                            <label class="col-sm-3 control-label">Number Of Categories<span style="color:red">* </span>:</label>
                             <div class="col-sm-6">
                                <select required class="form-control" id="num_of_cat" name="num_of_cat" >
								<option value="">Choose Number of Categories</option>
								{{$num_of_cat=$feature_deal->num_of_categories}}
                                    <option value="1" @if($num_of_cat==1) Selected @endif >1</option>
                                    <option value="2" @if($num_of_cat==2) Selected @endif>2</option>
									<option value="3" @if($num_of_cat==3) Selected @endif>3</option>
                                    <option value="4" @if($num_of_cat==4) Selected @endif>4</option>
                                    <option value="5" @if($num_of_cat==5) Selected @endif>5</option>
                                    <option value="6" @if($num_of_cat==6) Selected @endif>6</option>
                                    <option value="7" @if($num_of_cat==7) Selected @endif>7</option>
                                    <option value="8" @if($num_of_cat==8) Selected @endif>8</option>
                                    <option value="9" @if($num_of_cat==9) Selected @endif>9</option>
                                    <option value="10" @if($num_of_cat==10) Selected @endif>10</option>
                                   
                                </select>
                            </div>
                        </div>
						
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Parent Category *:</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="category_ids"  multiple style="height: 175px">
                                    <?php
                                    $category=unserialize($feature_deal->category_ids);

                                    $parent_ids = \App\Http\Controllers\CategoryController::viewParentCategory();
									echo $feature_deal->feature_image;
									
								
						 //$getimg[] = unserialize($season_deal->season_image);
						 //$getimg[] = json_decode($season_deal->season_image);
						
										$i =0;
										$get_img ="";
                                    foreach ($parent_ids  as $parent_id){
                                    $select='';
                                            foreach ($category as $c){
                                                if($parent_id->id==$c){
                                                   echo $select='selected';
											       $i++;
												}
												
                                            }
							
											
                                    ?>
                              <option <?php echo $select; ?> data="<?php
							   if(in_array($parent_id->id, array_column($get_img_catid, 'cat_id'))) {
													$key = array_search($parent_id->id, array_column($get_img_catid, 'cat_id'));
													echo $get_img = $get_img_catid[$key]['image'];
							  } 
							  ?>" data-name="<?php
							   if(in_array($parent_id->id, array_column($get_img_catid, 'cat_id'))) {
													$key = array_search($parent_id->id, array_column($get_img_catid, 'cat_id'));
													echo $get_img = $get_img_catid[$key]['name'];
							  }
							  ?>" value="<?php echo $parent_id->id; ?>"><?php echo $parent_id->category_name; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
						 <input type="hidden" value="{{$feature_deal->feature_image}}" class="form-control" id="feature_name" placeholder="Enter feature Name" name="feature_name">
                       <!--  <div class="form-group">
                            <label class="col-sm-3 control-label">Feature Name *:</label>
                            <div class="col-sm-6">
                               < <input type="text" required value="{{$feature_deal->feature_name}}" class="form-control" id="feature_name" placeholder="Enter feature Name" name="feature_name">
                                @if ($errors->has('feature_name'))
                                    <div class="error">{{ $errors->first('feature_name') }}</div>
                                @endif 
                            </div>
                        </div>-->
                        
                        <div class="form-group">
                            <!--<label class="col-sm-3 control-label">Feature Image :</label>-->
							
                           <div class="col-sm-6" id="feature_img_edit">
						   </div>
						  
						
						
                            </div>
							
							<div class="form-group">
                          
							
                           <div class="col-sm-6" id="feature_img">
						   </div>
						 
						
                            </div>
							 <div class="form-group" id="drill" style="display:none;">
						  <div class="form-group"><label class="col-sm-3 control-label"> </label><div class="col-sm-6" id="feature_name_id"><input type="checkbox" id="checkbox1" class="drill" /><label class="col-sm-3 control-label">Drill to Sub category </label></div></div>
						  </div>
							<div class="form-group">
                          
							
                           <div class="col-sm-6" id="feature_img1">
						   </div>
						 
						
                            </div>
							
                        </div>
						
						
<!--                        <div class="form-group">
                            <label class="col-sm-3 control-label">Feature Charges <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <input type="text" required value="{{$feature_deal->feature_charges}}" class="form-control" id="feature_charges" placeholder="Enter Facility Charges"  name="feature_charges">

                                @if ($errors->has('feature_charges'))
                                    <div class="error">{{ $errors->first('feature_charges') }}</div>
                                @endif
                            </div>
                        </div>-->
                        
                        
                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-sm-12">
                                <button id="submit" class="btn btn-primary">Submit</button>
                                <button type="reset" class="btn btn-default">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- row -->
</div>
<!-- contentpanel -->
</div>
<!-- mainpanel -->
<!-- rightpanel -->
</section>
@include('admin.include.footer')
<style>
    div.error{
        color: red;
        display:block !important;
    }
</style>
<script>
   $(document).ready(function () {
 $.ajax({
                    type:'GET',
                    url:'get_parent_category',
					data:{'id':selected},
					success:function(data){
						//alert(data);
						 $('.parent_cat').append(data); 
                       // $("#facility_charge").val(data);
                    }
                });
                });
    $(document).ready(function () {

var i =1;
var f =0;
$('#category_ids option:selected').each(function() {
	var imgs = $(this).attr('data');
	//alert(imgs);
	var ids = $(this).val();
	var feature_det = $("#feature_name").val();
	//alert(feature_det);
	var obj = JSON.parse(feature_det);
    var selected=obj[f].cat_id;
                                   
$('#feature_img_edit').append('<div class="form-group" id="'+ids+'"><label class="col-sm-6 control-label">Feature Name <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="text" class="form-control" placeholder="Enter feature Name" id="feature_name'+i+'"  name="feature_name[]" required value="'+obj[f].name+'"><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+ids+'"  name="cat_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div><div class="form-group"><label class="col-sm-6 control-label">Feature Image <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="file" class="form-control" id="feature_image'+i+'"  name="feature_image[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif<img src="/images/feature/'+obj[f].image+'" height="auto" width="200"></div></div></div><div class="form-group"><label class="col-sm-6 control-label">Parent Category <span style="color:red">* </span>:</label><div class="col-sm-6"> <select  value='+selected+' required class="form-control parent_cat" id="parent_id'+i+'" name="category_idss[]"> </select> </div></div>');



//alert('#category_idss'+i);
	//$('#feature_img_edit').append('<div id="'+ids+'"><span><label class="col-sm-3 control-label">Feature Name *:</label><input type="text" required value="'+obj[f].name+'" class="form-control" id="feature_n" placeholder="Enter feature Name" name="feature_name[]"><input type="file" class="form-control" id="feature_image'+i+'"  name="feature_image[]"><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+ids+'"  name="cat_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</span><img src="/images/feature/'+imgs+'" height="auto" width="200"></div>');
	  
i++;
f++;


	});
	});
</script>
<script>
/* $('#category_ids option:selected').each(function() {
	var selected = $(this).val();
		    var check_imgs = $(this).attr('data');
	  alert(check_imgs);
	   var i=1;
	  if(check_imgs == ""){
                $('#season_img').append('<div id="'+selected+'"><span><input type="file" class="form-control" id="season_image'+i+'"  name="season_image[]"><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+selected+'"  name="cat_id[]">@if ($errors->has("season_image"))<div class="error">{{ $errors->first("season_image") }}</div>@endif</span></div>');
				i++;
	  }
}); */
 $('#category_ids').change(function(e) {
 $('#feature_img_edit').remove();
 var getlen = $('#category_ids option:selected').length;
	/*  if(getlen == 0){
		  $('#season_img_edit').hide();
	 } */
	
        var selected = $(e.target).val();
   /*      var checke_img  = $(e.target).attr('data');
 checke_img.forEach(function(element1){
	 alert(element1);
 }); */
		
		var i =1;
		var f =0;
$('#category_ids option:selected').each(function() {
	var imgs = $(this).attr('data');
	var names = $(this).attr('data-name');
	var ids = $(this).val();
	var req = "";
	//var feature_det = $("#feature_name").val();
	//var obj = JSON.parse(feature_det);
	if(imgs == ""){
		req = "required";
	}else{
		req = "";
	}		
		
    if(i!=1){
		//alert(f);
	      $('#feature_img').append('<div id="'+ids+'"><div class="form-group"><label class="col-sm-6 control-label">Feature Name <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="text" class="form-control" placeholder="Enter feature Name" id="feature_name'+i+'"  name="feature_name[]" required value="'+names+'"></div></div><div class="form-group"><label class="col-sm-6 control-label">Feature Image <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="file" class="form-control" id="feature_image'+i+'"  name="feature_image[]" '+req+'><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+ids+'"  name="cat_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif<img src="/images/feature/'+imgs+'" height="auto" width="200"><div></div><div></div>');
	                   //$('#feature_img').append('<div class="form-group" id="'+ids+'"><label class="col-sm-6 control-label">Feature Name <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="text" class="form-control" placeholder="Enter feature Name" id="feature_name'+i+'"  name="feature_name[]" required value="'+obj[f].name+'"><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+ids+'"  name="cat_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div><div class="form-group"><label class="col-sm-6 control-label">Feature Image <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="file" class="form-control" id="feature_image'+i+'"  name="feature_image[]"required>@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div><img src="/images/feature/'+imgs+'" height="auto" width="200"></div></div>');
	 } else {
		 //alert(f);
		  $('#feature_img').html('<div id="'+ids+'"><div class="form-group"><label class="col-sm-6 control-label">Feature Name <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="text" class="form-control" placeholder="Enter feature Name" id="feature_name'+i+'"  name="feature_name[]" required value="'+names+'"></div></div><div class="form-group"><label class="col-sm-6 control-label">Feature Image <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="file" class="form-control" id="feature_image'+i+'"  name="feature_image[]" '+req+'><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+ids+'"  name="cat_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif<img src="/images/feature/'+imgs+'" height="auto" width="200"></div></div><div></div>');
		              //$('#feature_img').html('<div class="form-group" id="'+ids+'"><label class="col-sm-6 control-label">Feature Name <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="text" class="form-control" placeholder="Enter feature Name" id="feature_name'+i+'"  name="feature_name[]" required value="'+obj[f].name+'"><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+ids+'"  name="cat_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div><div class="form-group"><label class="col-sm-6 control-label">Feature Image <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="file" class="form-control" id="feature_image'+i+'"  name="feature_image[]"required>@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div><img src="/images/feature/'+imgs+'" height="auto" width="200"></div></div>');
	 }	 
	 
i++;
f++;
	});
		
        /* var i=1;
        selected.forEach(function(element){
        //alert(element);
            
            if(i!=1){
                $('#season_img').append('<span><input type="file" class="form-control" id="season_image'+i+'"  name="season_image[]"><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+element+'"  name="cat_id[]">@if ($errors->has("season_image"))<div class="error">{{ $errors->first("season_image") }}</div>@endif</span>');
            } else {
                $('#season_img').html('<span><input type="file" class="form-control" id="season_image'+i+'"  name="season_image[]"><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+element+'"  name="cat_id[]">@if ($errors->has("season_image"))<div class="error">{{ $errors->first("season_image") }}</div>@endif</span>');
                }
            
            i++;
          }); */
        //$('#season_img').append('<span><input type="file" class="form-control" id="season_image2"  name="season_image[]"><input type="hidden" class="form-control" id="cat_id2"  name="cat_id[]">@if ($errors->has("season_image"))<div class="error">{{ $errors->first("season_image") }}</div>@endif</span>');
        
    });

    $(document).ready(function () {
        $('#sel1').change(function(){
            var id=$('#sel1').val();
            if(id == 107 || id==0){
                $('#facility_charge').val('');
            }else{
                $.ajax({
                    type:'POST',
                    url:'get-facility-charge',
                    data: {
                        '_token': $('input[name=_token]').val(),
                        'id': $('#sel1').val(),
                    },
                    success:function(data){
                        $("#facility_charge").val(data);
                    }
                });
            }
        });
        $('#sel1').change(function () {
            var id=$('#sel1').val();
            if(id == 0){
                $('#menu_type').hide();
            }else{
                $('#menu_type').show();
            }
        });
        
        
        
    });
	
	
	
	 $('#num_of_cat').change(function(e) {
	  var num_of_cat = $(e.target).val();
	  //alert(num_of_cat);
	  for(var i=1;i<=num_of_cat;i++){
		if(i==1){
			
			$('#feature_img_edit').html('');
			$('#feature_img').html('');
			$('#feature_img1').html('');
			$('#feature_img').append(' <div class="form-group"><label class="col-sm-6 control-label">Sub Category Name <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="text" class="form-control" placeholder="Enter Sub Category Name" id="feature_name'+i+'"  name="feature_name[]" required><input type="hidden" class="form-control" id="cats_id'+i+'"   name="cats_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div><div class="form-group"><label class="col-sm-6 control-label">Sub Category Image <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="file" class="form-control" id="feature_image'+i+'"  name="feature_image[]"required><input type="hidden" class="form-control" id="cat_id'+i+'"   name="cat_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div><div class="form-group"><label class="col-sm-6 control-label">Parent Category <span style="color:red">* </span>:</label><div class="col-sm-6"> <select required class="form-control parent_cat" id="category_idss'+i+'" name="category_ids[]"> </select> </div></div>');
			//  $('#feature_img').append(' <div class="form-group"><label class="col-sm-6 control-label"> </label><div class="col-sm-6" id="feature_name_id"><input type="checkbox" id="drill" class="drill" /><label class="col-sm-6 control-label">Drill to Sub category </label></div></div>');
			  $('#drill').css('display','block');
		   }else{
			   //$('#feature_img').html('');
			   $('#feature_img1').append(' <div class="form-group"><label class="col-sm-6 control-label">Sub Category Name <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="text" class="form-control" placeholder="Enter Sub Category Name" id="feature_name'+i+'"  name="feature_name[]" required><input type="hidden" class="form-control" id="cats_id'+i+'"   name="cats_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div><div class="form-group"><label class="col-sm-6 control-label">Sub Category Image <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="file" class="form-control" id="feature_image'+i+'"  name="feature_image[]"required><input type="hidden" class="form-control" id="cat_id'+i+'"   name="cat_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div><div class="form-group"><label class="col-sm-6 control-label">Parent Category <span style="color:red">* </span>:</label><div class="col-sm-6"> <select required class="form-control parent_cat" id="category_idss'+i+'" name="category_ids[]"> </select> </div></div>');
		   }
		  
		   
	  }
	  
	   $.ajax({
                    type:'GET',
                    url:'get_parent_category',
					success:function(data){
						//alert(data);
						 $('.parent_cat').append(data); 
                       // $("#facility_charge").val(data);
                    }
                });
	  
 });
</script>
</body>
</html>
