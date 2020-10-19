
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Edit SetType <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Edit SetType</li>
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
            <form action="{{ action('SetTypeController@editSetTypeData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{ $settype->id }}">

                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Parent Category *:</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="sel1" name="category_id">
                                    <?php
                                    $parent_ids = \App\Http\Controllers\CategoryController::viewCategorys();
                                    foreach ($parent_ids  as $parent_id){
                                    $select=($parent_id->id==$settype->category_id?'selected':'');
                                    ?>
                                    <option value="<?php echo $parent_id->id; ?>" <?php echo $select; ?>><?php echo $parent_id->category_name; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">SetType Name::</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="brand_title" placeholder="Enter set type name" required value="{{ $settype->settype }}" name="settype">
                                @if ($errors->has('settype'))
                                    <div class="error">{{ $errors->first('settype') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">SetType Image:</label>
                            <div class="col-sm-6">
                                <div class="col-md-6">
                                    <input type="file" class="form-control" id="brand_title" placeholder="Enter brand name" name="settype_image">
                                    <input type="hidden" value="{{$settype->settype_image}}"  name="old_image">
                                    @if ($errors->has('settype_image'))
                                        <div class="error">{{ $errors->first('settype_image') }}</div>
                                    @endif
                                </div>
                                <div class="col-md-6">
                                    @if($settype->settype_image!='')
                                        <img height="100" width="100" src="{{asset("/images/settype/$settype->id/$settype->settype_image")}}">
                                    @else
                                        <img height="100" width="100" src="{{asset("/images/placeholder.gif")}}">
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
</body>

</html>
