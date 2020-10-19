@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
    <style>
        .close1{
            font-size: 20px;
            position: absolute;
            top: -11px;
            left: 200px;
            color: black;
        }
        .close{
            top: -11px;
            color: black;
            opacity: unset;
            left: 200px;
            position: absolute;
        }
        .close2{
            font-size: 20px;
            position: absolute;
            top: -11px;
            left: 200px;
            color: black;
        }
    </style>
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Update Category  <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Update Category</li>
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
            <form action="{{ action('CategoryController@editMainCategoryData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{ $category->id }}">

                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Parent Category *:</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="sel1" name="parent_id">
                                    <option value="0">No Parent Category</option>
                                    <?php
                                        $parent_ids = \App\Http\Controllers\CategoryController::viewParentCategory();
                                        foreach ($parent_ids  as $parent_id){
                                        $selected=($parent_id->id==$category->parent_id ? 'selected':'');
                                    ?>
                                    <option value="<?php echo $parent_id->id; ?>" {{$selected}}><?php echo $parent_id->category_name; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Category Name *:</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="category_name" value="{{$category->category_name}}" placeholder="Enter Category Name" name="category_name">
                                @if ($errors->has('category_name'))
                                    <div class="error">{{ $errors->first('category_name') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Category Image :</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <input type="file" class="form-control" id="category_name"   name="category_image">
                                    {{--<span class="help-block">Banner image must be 255 * 255 dimension.</span>--}}
                                    <input type="hidden" value="{{$category->category_image}}" name="old_image">
                                    @if ($errors->has('category_image'))
                                        <div class="error">{{ $errors->first('category_image') }}</div>
                                    @endif
                                </div>
                                <div class="col-sm-6">
                                    @if($category->category_image !='' AND isset($category->category_image))
                                    <span class='close1'><i class="fa fa-times-circle"></i></span>
                                         <img src="{{asset("/images/category/$category->category_image")}}" height="auto" width="200">
                                    @else
                                        <img height="auto" width="200" src="{{ asset('/images/placeholder.gif')}}">
                                    @endif
                                </div>
                            </div>
                        </div>
                        <input type='hidden' value="" name="remove_cat_img" class='remove_cat_img'>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Facility Charges *:</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="facility_charge" value="{{$category->facility_charges}}" placeholder="Enter Facility Charges" name="facility_charges">
                                @if ($errors->has('facility_charges'))
                                    <div class="error">{{ $errors->first('facility_charges') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group" id="season_thumbnail">
                            <label class="col-sm-3 control-label">Season Thumbnails Image :</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <input type="file" class="form-control" id="season_thumbnail"   name="season_thumbnail">
                                    <span class="help-block">Season thumbnails image must be 255 * 255 dimension.</span>
                                    <input type="hidden" value="{{$category->season_thumbnail}}" name="old_thumbnail">
                                    @if ($errors->has('season_thumbnail'))
                                        <div class="error">{{ $errors->first('season_thumbnail') }}</div>
                                    @endif
                                </div>
                                <div class="col-sm-6">
                                    @if($category->season_thumbnail!='')
                                        <span class='close2'><i class="fa fa-times-circle"></i></span>
                                        <img src="{{asset("/images/category/$category->season_thumbnail")}}" height="auto" width="200">
                                    @else
                                        <img height="auto" width="200" src="{{ asset('/images/placeholder.gif')}}">
                                    @endif
                                </div>
                            </div>
                        </div>
                        <input type='hidden' value="" name="remove_season_thumbnail" class='remove_season_thumbnail'>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Title :</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" value="{{$category->Category_banner_title}}" id="category_name" placeholder="Enter Category banner title" name="Category_banner_title">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Description :</label>
                            <div class="col-sm-6">
                                <textarea class="form-control" rows="5" name="Category_banner_desc">{{$category->Category_banner_desc}}</textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Image :</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <input type="file" class="form-control" id="category_name" value="{{$category->Category_banner_image}}"  name="Category_banner_image">
                                    {{--<span class="help-block">Banner image must be 1350 * 350 dimension.</span>--}}
                                    @if ($errors->has('Category_banner_image'))
                                        <div class="error">{{ $errors->first('Category_banner_image') }}</div>
                                    @endif
                                </div>
                                <div class="col-sm-6">
                                    <div class='col-lg-2 col-sm-6 col-md-3 col-sm-12 col-12 p-2'>
                                    @if($category->Category_banner_image!='')
                                        <span class='close'><i class="fa fa-times-circle"></i></span>
                                        <img height="auto" width="200" src="{{ asset('/images/category/'.$category->Category_banner_image)}}">
                                            <input type="hidden" value="{{$category->Category_banner_image}}" name="old_banner_image">
                                    @else
                                        <img height="auto" width="200" src="{{ asset('/images/placeholder.gif')}}">
                                    @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                            <input type='hidden' value="" name="remove_img" class='hidde_val'>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner URL :</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" value="{{$category->Category_banner_link}}" id="category_name" placeholder="Enter Category banner url" name="Category_banner_link">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Menu Type *:</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="menu_type" value="top" id="radioPrimary"  {{($category->menu_type=='top'?'checked':'')}}/>
                                        <label for="radioPrimary">Top Category</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="menu_type" value="additional" id="radioPrimaryd" {{($category->menu_type=='additional'?'checked':'')}}/>
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
            var self= '';
            $('.close').on('click',function(){

                var imgSRC = $(this).parent().find('img').attr('src');
                var imgName = imgSRC.substr(imgSRC.lastIndexOf('/') + 1);

                //self.push(imgName);
                $(this).parent().remove();
                $('.hidde_val').val(imgName);
            });

            $('.close1').on('click',function(){

                var imgSRC = $(this).parent().find('img').attr('src');
                var imgName = imgSRC.substr(imgSRC.lastIndexOf('/') + 1);

                //self.push(imgName);
                $(this).parent().remove();
                $('.remove_cat_img').val(imgName);
            });
            $('.close2').on('click',function(){

                var imgSRC = $(this).parent().find('img').attr('src');
                var imgName = imgSRC.substr(imgSRC.lastIndexOf('/') + 1);

                //self.push(imgName);
                $(this).parent().remove();
                $('.remove_season_thumbnail').val(imgName);
            });

            var ids=$('#sel1').val();

            if(parseInt(ids)  == 107 || parseInt(ids) == 0){
                $('#facility_charge1').attr('disabled','disabled');
                $('#season_thumbnail').show();
            }else{
                $('#season_thumbnail').hide();
            }

            $('#sel1').change(function(){
                var id=$('#sel1').val();
                if( id == 107 || id==0){
                    $('#facility_charge').removeAttr('disabled');
                    $('#facility_charge').val('');
                    $('#season_thumbnail').show();
                }else{
                    $('#season_thumbnail').hide();
                    $.ajax({
                        type:'POST',
                        url:'../get-facility-charge',
                        data: {
                            '_token': $('input[name=_token]').val(),
                            'id': id,
                        },
                        success:function(data){
                            $("#facility_charge").val(data);
                           /*$('#facility_charge').attr('disabled','disabled');*/
                        }
                    });
                }
            });
        });

</script>
</body>

</html>
