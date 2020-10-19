
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
    <style>
        .close{
            top: -11px;
            color: black;
            opacity: unset;
            left: 200px;
            position: absolute;
        }
    </style>
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Edit CMS <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">edit cms</li>
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
            <form action="{{ action('CMSController@editCMSData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" value="{{$cms->id}}" name="id">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Page Title *:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" value="{{$cms->page_title}}" id="page_title" placeholder="Enter  page title" name="page_title">
                                @if ($errors->has('page_title'))
                                    <div class="error">{{ $errors->first('page_title') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Page Banner</label>
                            <div class="col-sm-10">
                                <div class="col-sm-6">
                                    <input type="file" class="form-control" id="category_name"  name="banner">
                                    <span class="help-block">Supported formats : &nbsp; .jpg &nbsp; , &nbsp; .png</span>
                                    <span class="help-block">Image Size : Less than 2 MB </span>
                                    <span class="help-block">For optimal sizing use  1310 * 330 dimension.</span>
                                    <input type="hidden" class="form-control" id="category_name" value="{{$cms->banner}}"  name="old_image">
                                    @if ($errors->has('banner'))
                                        <div class="error">{{ $errors->first('banner') }}</div>
                                    @endif
                                </div>
                                <div class="col-sm-6">
                                    @if($cms->banner!='')
                                        <span class='close'><i class="fa fa-times-circle"></i></span>
                                        <img height="auto" width="200" src="{{asset("/images/cms_banners/$cms->banner")}}">
                                    @else
                                        <img height="auto" width="200" src="{{asset("/images/placeholder.gif")}}">
                                    @endif
                                </div>
                            </div>
                        </div>
                        <input type='hidden' value="" name="remove_img" class='hidde_val'>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Page Content *:</label>
                            <div class="col-sm-10">
                               <textarea  id="itemdescription" rows="10" name="page_content" cols="250">
                                    {{$cms->page_content}}
                                </textarea>
                                {{--<textarea  rows="10" name="page_content" cols="150">{{$cms->page_content}}</textarea>--}}
                                @if($errors->has('page_content'))
                                    <div class="error">{{ $errors->first('page_content') }}</div>
                                @endif
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
<script>
    /* Code for item description in CKeditor */
    window.onload = function () {
        CKEDITOR.editorConfig = function (config) {
            config.language = 'es';
            config.uiColor = '#F7B42C';
            config.height = 300;
            config.toolbarCanCollapse = true;
        };
        CKEDITOR.replace('itemdescription');
    };
</script>
<script type="text/javascript" src="//cdn.ckeditor.com/4.5.1/standard/ckeditor.js"></script>
<script>
    var self= [];
    $('.close').on('click',function(){

        var imgSRC = $(this).parent().find('img').attr('src');
        var imgName = imgSRC.substr(imgSRC.lastIndexOf('/') + 1);

        self.push(imgName);
        $(this).parent().remove();
        $('.hidde_val').val(self);
    });

    jQuery('#datepicker').datepicker({
        minDate : 0
    });
    jQuery('#datepicker1').datepicker({
        minDate : 0
    });
    jQuery('#timepicker').timepicker({
        defaultTIme: false
    });
    jQuery('#timepicker1').timepicker({
        defaultTIme: false
    });
</script>
<style>
    div.error{
        color: red;
        display:block !important;
    }
</style>
</body>
</html>
