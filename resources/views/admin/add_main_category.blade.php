
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Category </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Add Category</li>
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
            <form action="{{ action('CategoryController@saveMainCategory') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Parent Category *:</label>
                            <div class="col-sm-6">
                                <select value="{{old('parent_id')}}" class="form-control" id="sel1" name="parent_id">
                                    <option value="0">No Parent Category</option>
                                    <?php
                                    $parent_ids = \App\Http\Controllers\CategoryController::viewParentCategory();
                                    foreach ($parent_ids  as $parent_id){ ?>
                                    <option value="<?php echo $parent_id->id; ?>"><?php echo $parent_id->category_name; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Category Name *:</label>
                            <div class="col-sm-6">
                                <input type="text" required value="{{old('category_name')}}" class="form-control" id="category_name" placeholder="Enter Category Name" name="category_name">
                                @if ($errors->has('category_name'))
                                    <div class="error">{{ $errors->first('category_name') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Category Image :</label>
                            <div class="col-sm-6">
                                <input type="file" class="form-control" id="category_name"  name="category_image">
                                {{--<span class="help-block">Banner image must be 255 * 255 dimension.</span>--}}
                                @if ($errors->has('category_image'))
                                    <div class="error">{{ $errors->first('category_image') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Facility Charges *:</label>
                            <div class="col-sm-6">
                                <input type="text" required value="{{old('facility_charges')}}" class="form-control" id="facility_charge" placeholder="Enter Facility Charges"  name="facility_charges">
                                @if ($errors->has('facility_charges'))
                                    <div class="error">{{ $errors->first('facility_charges') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group" id="season_thumbnail">
                            <label class="col-sm-3 control-label">Season Thumbnails Image :</label>
                            <div class="col-sm-6">
                                <input type="file" class="form-control" id="season_thumbnail"  name="season_thumbnail">
                                <span class="help-block">Season thumbnails image must be 255 * 255 dimension.</span>
                                @if ($errors->has('season_thumbnail'))
                                    <div class="error">{{ $errors->first('season_thumbnail') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Title :</label>
                            <div class="col-sm-6">
                                <input type="text" value="{{old('Category_banner_title')}}" class="form-control" id="category_name" placeholder="Enter Category banner title" name="Category_banner_title">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Description :</label>
                            <div class="col-sm-6">
                                <textarea class="form-control" rows="5" name="Category_banner_desc"> {{old('Category_banner_desc')}}</textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Image :</label>
                            <div class="col-sm-6">
                                <input type="file" class="form-control" id="category_name"  name="Category_banner_image">
                                {{--<span class="help-block">Banner image must be 1350 * 350 dimension.</span>--}}
                                @if ($errors->has('Category_banner_image'))
                                    <div class="error">{{ $errors->first('Category_banner_image') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner URL :</label>
                            <div class="col-sm-6">
                                <input type="text" value="{{old('Category_banner_link')}}" class="form-control" id="category_name" placeholder="Enter Category banner url" name="Category_banner_link">
                            </div>
                        </div>
                        <div class="form-group" id="menu_type" style="display: none;">
                            <label class="col-sm-3 control-label">Menu Type *:</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="menu_type" value="top" id="radioPrimary" checked="checked" />
                                        <label for="radioPrimary">Top Category</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="menu_type" value="additional" id="radioPrimaryd" />
                                        <label for="radioPrimaryd">Additional Category</label>
                                    </div>
                                </div>
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
        $('#sel1').change(function(){
            var id=$('#sel1').val();
            if(id == 107 || id==0){
                $('#facility_charge').val('');
                $('#season_thumbnail').show();
            }else{
                $('#season_thumbnail').hide();
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
