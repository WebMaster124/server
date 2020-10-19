
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Edit Specification <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">edit specification</li>
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
                    <label class="col-sm-3 control-label">Specification <span class="count hide">0</span></label>
                    <div class="col-sm-2">
                        <select class="form-control select-type" id="category_id" name="specification[][type]">
                            <option value="1">Dropdown</option>
                            <option value="2">Inputbox</option>
                            <option value="3">Checkbox</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">Label Name *</label>
                    <div class="col-sm-2">
                        <input class="form-control label-name" name="specification[][label]"
                               placeholder="Enter Label Name" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">Label Values *</label>
                    <div class="col-sm-6">
                        <input class="col-sm-4 form-control label-values" name="specification[][value]"
                               placeholder="Enter Label Values (Enter it by comma seperate)" required>
                    </div>
                </div>
            </div>
            <form action="{{ action('SpecificationController@editSpecificationData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{ $specification->id }}">

                    <div class="panel-body">

                        <div class="form-group">
                            <label class="col-sm-3 control-label">Parent Category *:</label>
                            <div class="col-sm-6">

                                <?php
                                $parent_ids = \App\Http\Controllers\CategoryController::viewParentCategory();

                                foreach ($parent_ids  as $parent_id){
                                $select=($parent_id->id==$specification->parent_id?'selected':'');
                                if($select == "selected")
                                    echo '<input type="text" class="form-control" value="'.$parent_id->category_name.'" disabled="" name="category_id">';
                                }
                                ?>

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Sub Category *:</label>
                            <div class="col-sm-6">
                                <input type="hidden" value="{{$specification->category_id}}" id="category_id" name="category_id">
                                <input type="text" class="form-control" value="{{$specification->category_name}}"  disabled="" >
                                {{--<select class="form-control" id="category_id" name="category_id">
                                    <option value="{{$specification->category_id}}">{{$specification->category_name}}</option>
                                </select>--}}
                            </div>
                        </div>
                        <div class="item-specification-lists">
                        <?php $spec=unserialize($specification->specification);

                        for($i=0;$i<count($spec);$i++){
                        $j=$i+1;
                        ?>

                            <div class="item-specification" data-count="{{$j}}">
                                <a class="delete btn btn-danger pull-right mr-3" data-count="1">Delete</a>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Specification <span class="data-count hide">{{$j}}</span></label>
                                    <div class="col-sm-2">
                                        <select class="form-control select-type" id="category_id" name="specification[{{$i}}][type]">
                                            @if($spec[$i]['type']==1)
                                                <option selected value="1">Dropdown</option>
                                                <option value="2">Inputbox</option>
                                                <option value="3">Checkbox</option>
                                            @elseif($spec[$i]['type']==2)
                                                <option value="1">Dropdown</option>
                                                <option selected value="2">Inputbox</option>
                                                <option value="3">Checkbox</option>
                                            @else
                                                <option value="1">Dropdown</option>
                                                <option value="2">Inputbox</option>
                                                <option selected value="3">Checkbox</option>
                                            @endif
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Label Name *</label>
                                    <div class="col-sm-2">
                                        <input class="form-control label-name" value="{{$spec[$i]['label']}}" name="specification[{{$i}}][label]"
                                               placeholder="Enter Label Name" required>
                                    </div>
                                </div>
                                @if($spec[$i]['type'] != 2)
                                <div class="form-group">
                                    <label class="col-sm-3 control-label ">Label Values *</label>
                                    <div class="col-sm-6">
                                        <input class="col-sm-4 form-control label-values" value="{{$spec[$i]['value']}}" name="specification[{{$i}}][value]"
                                               placeholder="Enter Label Values (Enter it by comma seperate)" required>
                                    </div>
                                </div>
                                @else
                                    <div class="form-group hide">
                                        <label class="col-sm-3 control-label ">Label Values </label>
                                        <div class="col-sm-6">
                                            <input class="col-sm-4 form-control label-values" value="" name="specification[{{$i}}][value]"
                                                   placeholder="Enter Label Values (Enter it by comma seperate)">
                                        </div>
                                    </div>
                                @endif
                            </div>
                        <?php } ?>
                        </div>
                        <a class="add-new-row btn btn-primary pull-right mt-3" data-clickcount="{{$i}}">Add New Row</a>
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

    $('#category_id').on('change',function(){
        var v=$('#category_id').val();

        $('.'+v).show();
        $('.main-class .form-group:not(".'+v+'")').hide();
    });

    $(document).ready(function(){
        $('select.select-type').live('change',function(){

            var typeVal = $(this).val();
            if(typeVal == 2){
                debugger;
                $(this).parent().parent().next().next().addClass('hide');
                $(this).parent().parent().next().next().children().next().children().removeAttr('required');
            }else{
                $(this).parent().parent().next().next().removeClass('hide');
            }
        });
        $('.add-new-row').live('click',function(){
         
            $('.delete').removeClass('hide');
            var count = $(".add-new-row").attr('data-clickcount');
            var countPlus =  parseInt(count)+1;
            $(".item-specification.hide").clone().appendTo('.item-specification-lists');
            $(".item-specification:last-child").removeClass('hide').attr('data-count',countPlus);
            $(".item-specification:last-child .count").html(countPlus);
            $(".item-specification:last-child .select-type").attr("name","specification["+count+"][type]");
            $(".item-specification:last-child .label-name").attr("name","specification["+count+"][label]");
            $(".item-specification:last-child .label-values").attr("name","specification["+count+"][value]");
            $(".add-new-row").attr('data-clickcount', countPlus);
            $(".delete").attr('data-count',countPlus);
        });
        var v=$('#category_id').val();

        $('.'+v).show();
        $('.main-class .form-group:not(".'+v+'")').hide();

        $(".delete").live('click',function(){
            $(this).parent().remove();
            var leng = $(".item-specification").length;
            if(leng <= 2){
                $('.delete').addClass('hide');
            }
            else{
                $('.delete').removeClass('hide');
            }
        });
    });

</script>
</body>

</html>
