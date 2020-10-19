
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Edit Season Deal </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">edit season deal</li>
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
		 $get_img_catid = json_decode($season_deal->season_image, true);
		/*  echo "<pre>";
		 print_r($get_img_catid);
		 echo "</pre>";    */
		?>
        <div class="row">
            <form action="{{ action('SeasonController@editSeasonData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{ $season_deal->id  }}">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Parent Category *:</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="category_ids" name="category_ids[]" multiple style="height: 175px">
                                    <?php
                                    $category=unserialize($season_deal->category_ids);

                                    $parent_ids = \App\Http\Controllers\CategoryController::viewParentCategory();
									echo $season_deal->season_image;
									
								
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
							  ?>" value="<?php echo $parent_id->id; ?>"><?php echo $parent_id->category_name; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Season Name *:</label>
                            <div class="col-sm-6">
                                <input type="text" required value="{{$season_deal->season_name}}" class="form-control" id="season_name" placeholder="Enter season Name" name="season_name">
                                @if ($errors->has('season_name'))
                                    <div class="error">{{ $errors->first('season_name') }}</div>
                                @endif
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Season Image :</label>
							
                           <div class="col-sm-6" id="season_img_edit">
						   </div>
						  
						 
                                <!-- <input type="file" class="form-control" id="season_image"  name="season_image">
								 <input type="hidden" class="form-control" id="category_name" value="{{$season_deal->season_image}}"  name="old_image">
																@if($season_deal->season_image!='')
                                        <img src="{{asset("/images/season/$season_deal->season_image")}}" height="auto" width="200">
                                    @else
                                        <img height="auto" width="200" src="{{ asset('/images/placeholder.gif')}}">
                                    @endif
                                {{--<span class="help-block">Banner image must be 255 * 255 dimension.</span>--}}
                                @if ($errors->has('season_image'))
                                    <div class="error">{{ $errors->first('season_image') }}</div>
                                @endif-->
						
                            </div>
							
							<div class="form-group">
                            <label class="col-sm-3 control-label"> </label>
							
                           <div class="col-sm-6" id="season_img">
						   </div>
						 
						
                            </div>
							
                        </div>
						
						
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Season Charges <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <input type="text" required value="{{$season_deal->season_charges}}" class="form-control" id="season_charges" placeholder="Enter Facility Charges"  name="season_charges">

                                @if ($errors->has('season_charges'))
                                    <div class="error">{{ $errors->first('season_charges') }}</div>
                                @endif
                            </div>
                        </div>
                        
                        
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

var i =1;
$('#category_ids option:selected').each(function() {
	var imgs = $(this).attr('data');
	var ids = $(this).val();

   //alert(imgs);
	 $('#season_img_edit').append('<div id="'+ids+'"><span><input type="file" class="form-control" id="season_image'+i+'"  name="season_image[]"><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+ids+'"  name="cat_id[]">@if ($errors->has("season_image"))<div class="error">{{ $errors->first("season_image") }}</div>@endif</span><img src="/images/season/'+imgs+'" height="auto" width="200"></div>');
	 
i++;
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
 $('#season_img_edit').remove();
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
$('#category_ids option:selected').each(function() {
	var imgs = $(this).attr('data');
	var ids = $(this).val();

    if(i!=1){
		//alert(imgs);
	      $('#season_img').append('<div id="'+ids+'"><span><input type="file" class="form-control" id="season_image'+i+'"  name="season_image[]"><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+ids+'"  name="cat_id[]">@if ($errors->has("season_image"))<div class="error">{{ $errors->first("season_image") }}</div>@endif</span><img src="/images/season/'+imgs+'" height="auto" width="200"></div>');
	 } else {
		 //alert();
		  $('#season_img').html('<div id="'+ids+'"><span><input type="file" class="form-control" id="season_image'+i+'"  name="season_image[]"><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+ids+'"  name="cat_id[]">@if ($errors->has("season_image"))<div class="error">{{ $errors->first("season_image") }}</div>@endif</span><img src="/images/season/'+imgs+'" height="auto" width="200"></div>');
	 }	 
	 
i++;
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
</script>
</body>
</html>
