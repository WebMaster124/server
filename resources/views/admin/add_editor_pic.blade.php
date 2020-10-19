
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Editor Pick </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">add editor pick</li>
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
            <form action="{{ action('EditorPickController@saveEditorPick') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Title</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="category_name" placeholder="Enter title" name="title">
                                @if ($errors->has('title'))
                                    <div class="error">{{ $errors->first('title') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Description</label>
                            <div class="col-sm-6">
                                <textarea class="form-control" rows="5" name="description"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Image</label>
                            <div class="col-sm-6">
                                <input type="file" class="form-control" id="category_name"  name="image">
                                @if ($errors->has('image'))
                                    <div class="error">{{ $errors->first('image') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Category *:</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="category_id" name="category_id">
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
                            <label class="col-sm-3 control-label">Sub Category:</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="sub_category" multiple name="sub_category">
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Product :</label>
                            <div class="col-sm-6">
                                    <select class="chosen-select" multiple name="products" id="products" data-placeholder="Choose a Country...">
                                        <option value=""></option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Aland Islands">Aland Islands</option>
                                    </select>


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
    $('#category_id').change(function(){
        $.ajax({
            type:'POST',
            url:'get-subcategoty',
            data: {
                '_token': $('input[name=_token]').val(),
                'id': $('#category_id').val(),
            },
            success:function(data){
                $("#sub_category").html(data);
            }
        });
    });
// Chosen Select
    jQuery(".chosen-select").chosen({
        'width': '100%',
        'white-space': 'nowrap'
    });

</script>
</body>
</html>
