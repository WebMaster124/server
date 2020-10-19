
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add SetType </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Add SetType</li>
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
            <form action="{{ action('SetTypeController@saveSetType') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Parent Category *:</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="sel1" name="category_id">
                                    <option value="0">No Parent Category</option>
                                    <?php
                                    $parent_ids = \App\Http\Controllers\CategoryController::viewCategorys();
                                    foreach ($parent_ids  as $parent_id){ ?>
                                    <option value="<?php echo $parent_id->id; ?>"><?php echo $parent_id->category_name; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">SetType Name::</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="brand_title" placeholder="Enter set type" name="settype">
                                @if ($errors->has('settype'))
                                    <div class="error">{{ $errors->first('settype') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">SetType Image:</label>
                            <div class="col-sm-6">
                                <input type="file" class="form-control" id="brand_title"  name="settype_image">
                                @if ($errors->has('settype_image'))
                                    <div class="error">{{ $errors->first('settype_image') }}</div>
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
