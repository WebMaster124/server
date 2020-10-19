
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
        <h2> Edit Email Template <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>

        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">edit email template</li>
            </ol>
        </div>
    </div>
    <div class="contentpanel">
        @if(Session::has('message'))
            <div class="alert alert-warning">
                {{ Session::get('message') }}
            </div>
        @endif
        <span class="help-block"><b>NOTE : </b>You cannot change capital words like USER_NAME , PRODUCT_TITLE , etc...</span>

        <div class="row">
            <form action="{{ action('EmailController@editEmailTemplateData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{$email->id}}">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Email Title *:</label>
                            <div class="col-sm-10">
                                <input required  value="{{$email->title}}" type="text" class="form-control" id="page_title" placeholder="Enter  email title" name="title">
                                @if ($errors->has('title'))
                                    <div class="error">{{ $errors->first('title') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Email Subject *:</label>
                            <div class="col-sm-10">
                                <input required  value="{{$email->subject}}" type="text" class="form-control" id="page_title" placeholder="Enter email subject" name="subject">
                                @if ($errors->has('subject'))
                                    <div class="error">{{ $errors->first('subject') }}</div>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">Email Heading *:</label>
                            <div class="col-sm-10">
                                <textarea required  id="itemdescription1" rows="10" name="heading" cols="250"><?php echo $email->heading; ?></textarea>
                                @if ($errors->has('heading'))
                                    <div class="error">{{ $errors->first('heading') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Email Advertisement Image</label>
                            <div class="col-sm-10">
                                <div class="col-sm-6">
                                    <input type="file" class="form-control" id="category_name"  name="banner_image">
                                    <span class="help-block">Supported formats : &nbsp; .jpg &nbsp; , &nbsp; .png</span>
                                    <span class="help-block">Image Size : Less than 2 MB </span>
                                    <input type="hidden" class="form-control" id="category_name" value="{{$email->banner_image}}"  name="old_image">
                                    @if ($errors->has('banner_image'))
                                        <div class="error">{{ $errors->first('banner_image') }}</div>
                                    @endif
                                </div>
                                <div class="col-sm-6">
                                    @if($email->banner_image!='')
                                        <span class='close'><i class="fa fa-times-circle"></i></span>
                                        <img height="auto" width="200" src="{{asset("/images/email_image/$email->banner_image")}}">
                                    @else
                                        <img height="auto" width="200" src="{{asset("/images/placeholder.gif")}}">
                                    @endif
                                </div>
                            </div>
                        </div>
                        <input type='hidden' value="" name="remove_img" class='hidde_val'>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Email Content *:</label>
                            <div class="col-sm-10">
                                <textarea required  id="itemdescription" rows="10" name="contents" cols="250"><?php echo $email->content; ?></textarea>
                                @if ($errors->has('contents'))
                                    <div class="error">{{ $errors->first('contents') }}</div>
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
        CKEDITOR.replace('itemdescription1');
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
