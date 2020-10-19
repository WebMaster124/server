
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Feature Deal </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">add feature deal</li>
            </ol>
        </div>
    </div>

    <div class="contentpanel">
        @if(Session::has('message'))
            <div class="alert alert-warning">
                {{ Session::get('message') }}
            </div>
        @endif
        <div class="row">
            <form action="{{ action('FeatureController@saveFeature') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="panel-body">
					 <div class="form-group" >
                            <label class="col-sm-3 control-label">Feature Name <span style="color:red">* </span>:</label>
                            <div class="col-sm-6" id="feature_name_id">
                                <input type="text"  class="form-control" id="feature_deal" placeholder="Enter feature Name" name="feature_deal">
								
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
                                    <option value="1">1</option>
                                    <option value="2">2</option>
									<option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                   
                                </select>
                            </div>


                   </div>
						
						
						
						
                        <!--<div class="form-group" ><label class="col-sm-3 control-label">Parent Category <span style="color:red">* </span>:</label><div class="col-sm-6"><select required class="form-control" id="category_id" name="category_id"><option value="">Select Parent Category </option><?php $parent_ids = \App\Http\Controllers\CategoryController::viewParentCategory(); $i =0; $get_img =""; foreach ($parent_ids  as $parent_id){$select='';?><option <?php echo $select; ?> value="<?php echo $parent_id->id; ?>"><?php echo $parent_id->category_name; ?></option><?php } ?></select></div></div>-->
						  <div class="form-group box" >
						   <div class="col-sm-12" id="feature_img" >
						  </div>
						  </div>
						  <div class="form-group" id="drill" style="display:none;">
						  <div class="form-group"><label class="col-sm-3 control-label"> </label><div class="col-sm-6" id="feature_name_id"><input type="checkbox" id="checkbox1" class="drill" /><label class="col-sm-3 control-label">Drill to Sub category </label></div></div>
						  </div>
						 <div class="form-group">
						   <div class="col-sm-12" id="feature_img1" >
						  </div>
						  </div>
						  
                        <div class="form-group" style="display:none;">
                            <label class="col-sm-3 control-label">Feature Name <span style="color:red">* </span>:</label>
                            <div class="col-sm-6" id="feature_name_id">
                                <input type="text"  class="form-control" id="feature_name" placeholder="Enter feature Name" name="">
								<input type="hidden" class="form-control" id="cats_id1"  name="cats_id[]">
                                @if ($errors->has('feature_name'))
                                    <div class="error">{{ $errors->first('feature_name') }}</div>
                                @endif
                            </div>
                        </div>
                        
                        	 <div class="form-group" style="display:none;">
                            <label class="col-sm-3 control-label">Feature Image :</label>
                            <div class="col-sm-6"  >
                                <span>
                                    <input type="file" class="form-control" id="feature_image1"  name="feature_image[]">
                                    <input type="hidden" class="form-control" id="cat_id1"  name="cat_id[]">
                                @if ($errors->has('feature_image'))
                                    <div class="error">{{ $errors->first('feature_image') }}</div>
                                @endif
                                </span>
                                
                                
                                
                            </div>
                            
                        </div>
<!--                        <div class="form-group">
                            <label class="col-sm-3 control-label">Feature Charges <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <input type="text" required value="{{old('feature_charges')}}" class="form-control" id="feature_charges" placeholder="Enter Facility Charges"  name="feature_charges">
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
$(document).ready(function() {
 //alert("xfihguh");  



 $('#feature_img').on('change', '.drill', function() {
      //  alert("dsff");
		 if($(this).is(":checked")) {
               
                   
                   var sub_category =$(this).attr("id");
                    $(".category_id"+sub_category+"_sub").css("display","block");
		  // alert(selected);
        }else{
		var sub_category =$(this).attr("id");
                    $(".category_id"+sub_category+"_sub").css("display","none");	
		}
        
       
    });
    
     $('#feature_img1').on('change', '.drill', function() {
        //alert("dsff");
		 if($(this).is(":checked")) {
               
                   
                   var sub_category =$(this).attr("id");
                    $(".category_id"+sub_category+"_sub").css("display","block");
		  // alert(selected);
        }else{
		var sub_category =$(this).attr("id");
                    $(".category_id"+sub_category+"_sub").css("display","none");	
		}
        
       
    });
  
 
//    $('#checkbox1').change(function() {
//       // alert("dsff");
//		 if($(this).is(":checked")) {
//           var sub = $("#category_id1_sub").val();
//          // alert(sub);
//           var parent = $("#category_id1").val();
//          // alert(parent);
//           
//		 
//                   $(".category_id").val(parent);
//                   
//                       $.ajax({
//            type:'POST',
//            url:'get-subcategoty',
//            data: {
//                '_token': $('input[name=_token]').val(),
//                'id': parent,
//            },
//            success:function(data){
//                
//                $(".parent_cat").html(data);
//                 $(".parent_cat").val(sub);
//				// $('#'+sub_category+'_sub').html(data); 
//                /* $("#category_id").html(data);
//
//                var v=$("#category_id").val();
//                $('.'+v).show();
//                $('.main-class .form-group:not(".'+v+'")').hide(); */
//            }
//        });
//                   
//                   
//                   
//		  // alert(selected);
//        }else{
//			var sub = $("#category_id1_sub").val();
//                        var parent = $("#category_id1").val();
//			$(".parent_cat").val('');
//			$("#category_id1_sub").val(sub);
//                        
//                        $(".category_id").val('');
//			$("#category_id1").val(parent);
//		}
//        
//       
//    });
});

 $('#num_of_cat').change(function(e) {
	  var num_of_cat = $(e.target).val();
	  //alert(num_of_cat);
	  for(var i=1;i<=num_of_cat;i++){
		if(i==1){
			$('#feature_img').html('');
			$('#feature_img1').html('');
			$('#feature_img').append('<div class="item-specification " style="border:1px solid; padding:10px;"><div class="form-group" ><label class="col-sm-3 control-label">Parent Category <span style="color:red">* </span>:</label><div class="col-sm-6"><select required class="form-control category_id category_id_parent" id="category_id'+i+'" name="category_id[]"><option value="">Select Parent Category </option><?php $parent_ids = \App\Http\Controllers\CategoryController::viewParentCategory(); $i =0; $get_img =""; foreach ($parent_ids  as $parent_id){$select='';?><option <?php echo $select; ?> value="<?php echo $parent_id->id; ?>"><?php echo $parent_id->category_name; ?></option><?php } ?></select></div></div> <div class="form-group"><label class="col-sm-3 control-label">Sub Category Name <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="text" class="form-control" placeholder="Enter Sub Category Name" id="feature_name'+i+'"  name="feature_name[]" required><input type="hidden" class="form-control" id="cats_id'+i+'"   name="cats_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div><div class="form-group"><label class="col-sm-3 control-label">Sub Category Image <span style="color:red">* </span>:</label><div class="col-sm-3" id="feature_name_id"><input type="file" class="form-control" id="feature_image'+i+'"  name="feature_image[]"required><input type="hidden" class="form-control" id="cat_id'+i+'"   name="cat_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div> <div class="form-group"><label class="col-sm-3 control-label"> </label><div class="col-sm-6" id="feature_name_id"><input type="checkbox" id="'+i+'" class="drill" /><label class="col-sm-3 control-label">Drill to Sub category </label></div></div><div class="form-group category_id'+i+'_sub" style="display:none;"><label class="col-sm-3 control-label">Sub Category <span style="color:red">* </span>:</label><div class="col-sm-3"> <select  class="form-control parent_cat" id="category_id'+i+'_sub" name="category_ids[]"  > </select> </div></div></div>');
			//  $('#feature_img').append(' <div class="form-group"><label class="col-sm-6 control-label"> </label><div class="col-sm-6" id="feature_name_id"><input type="checkbox" id="drill" class="drill" /><label class="col-sm-6 control-label">Drill to Sub category </label></div></div>');
			  //$('#drill').css('display','block');
		   }else{
			   //$('#feature_img').html('');
			   $('#feature_img1').append(' <div class=" form-group box" style="border:1px solid; padding:10px;"> <div class="form-group" ><label class="col-sm-3 control-label">Parent Category <span style="color:red">* </span>:</label><div class="col-sm-6"><select required class="form-control category_id category_id_parent" id="category_id'+i+'" name="category_id[]"><option value="">Select Parent Category </option><?php $parent_ids = \App\Http\Controllers\CategoryController::viewParentCategory(); $i =0; $get_img =""; foreach ($parent_ids  as $parent_id){$select='';?><option <?php echo $select; ?> value="<?php echo $parent_id->id; ?>"><?php echo $parent_id->category_name; ?></option><?php } ?></select></div></div>  <div class="form-group" ><label class="col-sm-3 control-label">Sub Category Name <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="text" class="form-control" placeholder="Enter Sub Category Name" id="feature_name'+i+'"  name="feature_name[]" required><input type="hidden" class="form-control" id="cats_id'+i+'"   name="cats_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div><div class="form-group"><label class="col-sm-3 control-label">Sub Category Image <span style="color:red">* </span>:</label><div class="col-sm-3" id="feature_name_id"><input type="file" class="form-control" id="feature_image'+i+'"  name="feature_image[]"required><input type="hidden" class="form-control" id="cat_id'+i+'"   name="cat_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div> <div class="form-group"><label class="col-sm-3 control-label"> </label><div class="col-sm-6" id="feature_name_id"><input type="checkbox" id="'+i+'"  class="drill" /><label class="col-sm-3 control-label">Drill to Sub category </label></div></div><div class="form-group category_id'+i+'_sub" style="display:none;"><label class="col-sm-3 control-label">Sub Category <span style="color:red">* </span>:</label><div class="col-sm-3"> <select  class="form-control parent_cat" id="category_id'+i+'_sub" name="category_ids[]" > </select> </div></div></div>');
		   }
		  
		   // $('.box').css('display','block');
	  }
	  
	 
	  
 });
  
//   $('#category_id').change(function(e) {
//alert("jhkhjk");
//   $.ajax({
//                    type:'GET',
//                    url:'get_parent_category',
//					success:function(data){
//						//alert(data);
//						 $('.parent_cat').append(data); 
//                       // $("#facility_charge").val(data);
//                    }
//                });
//                });  
//                
                $('#feature_img').on('change', '.category_id', function() {
                
          var sub_category =$(this).attr("id");
        //alert(idArr);
                 $.ajax({
            type:'POST',
            url:'get-subcategoty',
            data: {
                '_token': $('input[name=_token]').val(),
                'id': $('#'+sub_category).val(),
            },
            success:function(data){
				 $('#'+sub_category+'_sub').html(data); 
                /* $("#category_id").html(data);

                var v=$("#category_id").val();
                $('.'+v).show();
                $('.main-class .form-group:not(".'+v+'")').hide(); */
            }
        });
                });
                
                
                
                      $('#feature_img1').on('change', '.category_id', function() {
                
         var sub_category =$(this).attr("id");
        //alert(idArr);
                 $.ajax({
            type:'POST',
            url:'get-subcategoty',
            data: {
                '_token': $('input[name=_token]').val(),
                'id': $('#'+sub_category).val(),
            },
            success:function(data){
                
                $('#'+sub_category+'_sub').html(data); 
				// $('.parent_cat').html(data); 
                /* $("#category_id").html(data);

                var v=$("#category_id").val();
                $('.'+v).show();
                $('.main-class .form-group:not(".'+v+'")').hide(); */
            }
        });
                });
              
              
              
               
                
				
//	  		$('.category_id').change(function(){
//    alert("xdjhkhjk");
//        $.ajax({
//            type:'POST',
//            url:'get-subcategoty',
//            data: {
//                '_token': $('input[name=_token]').val(),
//                'id': $('#category_id').val(),
//            },
//            success:function(data){
//				 $('.parent_cat').html(data); 
//                /* $("#category_id").html(data);
//
//                var v=$("#category_id").val();
//                $('.'+v).show();
//                $('.main-class .form-group:not(".'+v+'")').hide(); */
//            }
//        });
//    });	
				
				
 $('#category_ids').change(function(e) {
        var selected = $(e.target).val();
//        alert(selected);
        var i=1;
        selected.forEach(function(element){
//            alert(element);
            
            if(i!=1){
                $('#feature_img').append(' <div class="form-group"><label class="col-sm-6 control-label">Feature Name <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="text" class="form-control" placeholder="Enter feature Name" id="feature_name'+i+'"  name="feature_name[]" required><input type="hidden" class="form-control" id="cats_id'+i+'" value="'+element+'"  name="cats_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div><div class="form-group"><label class="col-sm-6 control-label">Feature Image <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="file" class="form-control" id="feature_image'+i+'"  name="feature_image[]"required><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+element+'"  name="cat_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div>');
               //$('#feature_name_id').append('<span><input type="text" placeholder="Enter feature Name" class="form-control" id="feature_name'+i+'"  name="feature_name[]"><input type="hidden" class="form-control" id="cats_id'+i+'" value="'+element+'"  name="cats_id[]">@if ($errors->has("feature_name"))<div class="error">{{ $errors->first("feature_name") }}</div>@endif</span>');
            } else {
				//alert("hiijhkjh");
                $('#feature_img').html(' <div class="form-group"><label class="col-sm-6 control-label">Feature Name <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="text" class="form-control" placeholder="Enter feature Name" id="feature_name'+i+'"  name="feature_name[]" required><input type="hidden" class="form-control" id="cats_id'+i+'" value="'+element+'"  name="cats_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div><div class="form-group"><label class="col-sm-6 control-label">Feature Image <span style="color:red">* </span>:</label><div class="col-sm-6" id="feature_name_id"><input type="file" class="form-control" id="feature_image'+i+'"  name="feature_image[]" required><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+element+'"  name="cat_id[]">@if ($errors->has("feature_image"))<div class="error">{{ $errors->first("feature_image") }}</div>@endif</div></div>');
                //$('#feature_name_id').html('<span><input type="text" placeholder="Enter feature Name" class="form-control" id="feature_name'+i+'"  name="feature_name[]"><input type="hidden" class="form-control" id="cats_id'+i+'" value="'+element+'"  name="cats_id[]">@if ($errors->has("feature_name"))<div class="error">{{ $errors->first("feature_name") }}</div>@endif</span>');
              }
            
            i++;
          });
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
	
</script>
</body>
</html>


