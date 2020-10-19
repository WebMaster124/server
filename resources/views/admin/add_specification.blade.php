
@include('admin.include.sidebar')
<style>
.hide{
    display: none;
}
.show{
    display: block;
}
</style>
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Specification </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">add specification</li>
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
            <div class="item-specification hide" data-count="0">
                <a class="delete btn btn-danger pull-right mr-3" data-count="0">Delete</a>
                <div class="form-group">
                    <label class="col-sm-3 control-label">Specification<span class="count hide">0</span></label>
                    <div class="col-sm-2">
                        <select class="form-control select-type" id="category_id" name="specification[][type]">
                            <option value="1">Dropdown</option>
                            <option value="2">Inputbox</option>
                            <option value="3">Checkbox</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">Label Name*</label>
                    <div class="col-sm-2">
                        <input class="form-control label-name" name="specification[][label]"
                               placeholder="Enter Label Name" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">Label Values*</label>
                    <div class="col-sm-6">
                        <input class="col-sm-4 form-control label-values" name="specification[][value]"
                               placeholder="Enter Label Values (Enter it by comma seperate)" required>
                    </div>
                </div>
            </div>
            <form action="{{ action('SpecificationController@saveSpecification') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Parent Category *:</label>
                            <div class="col-sm-6">
                                <select class="form-control parent_id" id="parent_id" name="parent_id">
                                    <option selected disabled value="">Select Parent Category</option>
                                    <?php
                                    $parent_ids = \App\Http\Controllers\CategoryController::viewParentCategory();
                                    foreach ($parent_ids  as $parent_id){ ?>
                                    <option value="<?php echo $parent_id->id; ?>"><?php echo $parent_id->category_name; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group hide sub-category-lists">
                            <label class="col-sm-3 control-label">Sub Category *:</label>
                            <div class="col-sm-6">
                                <select class="form-control sub-category" id="category_id" name="category_id">
                                </select>
                            </div>
                        </div>
                        <div class="item-specification-lists">

                            <div class="item-specification" data-count="1">
                                <a class="delete btn btn-danger pull-right mr-3" data-count="1">Delete</a>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Specification<span class="data-count hide">1</span></label>
                                    <div class="col-sm-2">
                                        <select class="form-control select-type" id="category_id" name="specification[0][type]">
                                            <option value="1">Dropdown</option>
                                            <option value="2">Inputbox</option>
                                            <option value="3">Checkbox</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Label Name*</label>
                                    <div class="col-sm-2">
                                        <input class="form-control label-name" name="specification[0][label]"
                                               placeholder="Enter Label Name" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label ">Label Values*</label>
                                    <div class="col-sm-6">
                                        <input class="col-sm-4 form-control label-values" name="specification[0][value]"
                                               placeholder="Enter Label Values (Enter it by comma seperate)" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="add-new-row btn btn-primary pull-right mt-3" data-clickcount="1">Add New Row</a>
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
    .item-specification{
        border: 1px solid;
        padding: 20px 0;
        margin-bottom:20px;
    }
    .mt-3{
        margin-top:1.8rem;
    }
    .mr-3 {
        margin-right: 1.8rem;
    }
</style>
<script>
    $(document).ready(function() {
        var count = $(".add-new-row").attr('data-clickcount');
        if(count == 1){
            $('.delete').addClass('hide');
        }
        $('#parent_id').change(function () {
            $.ajax({
                type: 'POST',
                url: 'get-subcategoty',
                data: {
                    '_token': $('input[name=_token]').val(),
                    'id': $('#parent_id').val(),
                },
                success: function (data) {
                    $(".sub-category").html(data);

                    var v = $(".sub-category").val();
                    $('.' + v).show();
                    $('.main-class .form-group:not(".' + v + '")').hide();
                    $('.sub-category-lists').removeClass('hide');
                }
            });
        });
        $('select.select-type').live('change', function () {

            var typeVal = $(this).val();
            if (typeVal == 2) {
                $(this).parent().parent().next().next().addClass('hide');
                $(this).parent().parent().next().next().children().next().children().removeAttr('required');
            } else {
                $(this).parent().parent().next().next().removeClass('hide');
            }
        });
        $('.add-new-row').live('click', function () {
            $('.delete').removeClass('hide');
            var count = $(".add-new-row").attr('data-clickcount');
            var countPlus = parseInt(count) + 1;
            $(".item-specification.hide").clone().appendTo('.item-specification-lists');
            $(".item-specification:last-child").removeClass('hide').attr('data-count', countPlus);
            $(".item-specification:last-child .count").html(countPlus);
            $(".item-specification:last-child .select-type").attr("name", "specification[" + count + "][type]");
            $(".item-specification:last-child .label-name").attr("name", "specification[" + count + "][label]");
            $(".item-specification:last-child .label-values").attr("name", "specification[" + count + "][value]");
            $(".add-new-row").attr('data-clickcount', countPlus);
            $(".delete").attr('data-count',countPlus);
        });
        $('#category_id').on('change', function () {
            var v = $('#category_id').val();
            $('.' + v).show();
            $('.main-class .form-group:not(".' + v + '")').hide();
        });
        $(".delete").live('click', function () {
            $(this).parent().remove();
            var leng = $(".item-specification").length;
            if (leng <= 2) {
                $('.delete').addClass('hide');
            }
            else {
                $('.delete').removeClass('hide');
            }
        });

    });
</script>
</body>

</html>
