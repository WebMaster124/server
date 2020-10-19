
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Season Deal </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">add season deal</li>
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
            <form action="{{ action('SeasonController@saveSeason') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Parent Category *:</label>
                            <div class="col-sm-6">
                                <select required class="form-control" id="category_ids" name="category_ids[]" multiple style="height: 175px">
                                    <?php
                                        $parent_ids = \App\Http\Controllers\CategoryController::viewParentCategory();
                                        foreach ($parent_ids  as $parent_id){ ?>
                                        <option value="<?php echo $parent_id->id; ?>"><?php echo $parent_id->category_name; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Season Name *:</label>
                            <div class="col-sm-6">
                                <input type="text" required value="{{old('season_name')}}" class="form-control" id="season_name" placeholder="Enter season Name" name="season_name">
                                @if ($errors->has('season_name'))
                                    <div class="error">{{ $errors->first('season_name') }}</div>
                                @endif
                            </div>
                        </div>
                        
                        	<div class="form-group">
                            <label class="col-sm-3 control-label">Season Image :</label>
                            <div class="col-sm-6" id="season_img" >
                                <span>
                                    <input type="file" class="form-control" id="season_image1"  name="season_image[]">
                                    <input type="hidden" class="form-control" id="cat_id1"  name="cat_id[]">
                                @if ($errors->has('season_image'))
                                    <div class="error">{{ $errors->first('season_image') }}</div>
                                @endif
                                </span>
                                
                                
                                
                            </div>
                            
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Season Charges <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <input type="text" required value="{{old('season_charges')}}" class="form-control" id="season_charges" placeholder="Enter Facility Charges"  name="season_charges">
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

 $('#category_ids').change(function(e) {
        var selected = $(e.target).val();
//        alert(selected);
        var i=1;
        selected.forEach(function(element){
//            alert(element);
            
            if(i!=1){
                $('#season_img').append('<span><input type="file" class="form-control" id="season_image'+i+'"  name="season_image[]"><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+element+'"  name="cat_id[]">@if ($errors->has("season_image"))<div class="error">{{ $errors->first("season_image") }}</div>@endif</span>');
            } else {
                $('#season_img').html('<span><input type="file" class="form-control" id="season_image'+i+'"  name="season_image[]"><input type="hidden" class="form-control" id="cat_id'+i+'" value="'+element+'"  name="cat_id[]">@if ($errors->has("season_image"))<div class="error">{{ $errors->first("season_image") }}</div>@endif</span>');
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
