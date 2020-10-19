
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Edit Brand <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Edit Brand</li>
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
            <form action="{{ action('BrandController@editBrandData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{ $brand->id }}">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email">Parent Category:</label>
                                    <select class="form-control" id="category_ids" name="category_id">
                                        <?php
                                        $parent_ids = \App\Http\Controllers\CategoryController::viewCategorys();
                                        foreach ($parent_ids  as $parent_id){
                                        $select=($parent_id->id==$brand->category_id?'selected':'');
                                            ?>
                                        <option value="<?php echo $parent_id->id; ?>" {{$select}}><?php echo $parent_id->category_name; ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email">Set Type:</label>
                                    <select class="form-control" id="setyype_id" name="settype_id">
                                        <option value="{{$brand->settype_id}}">{{$brand->settype}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email">Brand Name:</label>
                                    <input type="text" class="form-control" id="brand_title" placeholder="Enter brand name" required value="{{ $brand->brand_title }}" name="brand_title">
                                    @if ($errors->has('brand_title'))
                                        <div class="error">{{ $errors->first('brand_title') }}</div>
                                    @endif
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="email">Brand Image:</label>
                                        <input type="hidden" class="form-control" id="brand_title" placeholder="Enter brand name"  value="{{ $brand->brand_image }}" name="old_image">
                                        <input type="file" class="form-control" id="brand_title" name="brand_image">
                                        @if ($errors->has('brand_image'))
                                            <div class="error">{{ $errors->first('brand_image') }}</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    @if($brand->brand_image!='')
                                        <img height="100" width="100" style="padding-top: 10px" src="{{asset("/images/brand/$brand->id/$brand->brand_image")}}">
                                    @else
                                        <img height="100" width="100" style="padding-top: 10px" src="{{asset("/images/placeholder.gif")}}">
                                    @endif
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
    $('#category_ids').on('change',function(){
        $.ajax({
            type:'POST',
            url:'../get-setType',
            data: {
                '_token': $('input[name=_token]').val(),
                'id': $('#category_ids').val(),
            },
            success:function(data){
                $("#setyype_id").html(data);
            }
        });
    });
</script>
</body>
</html>
