
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Email Template </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">add email template</li>
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
            <form action="{{ action('EmailController@saveEmailTemplate') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Email Title *:</label>
                            <div class="col-sm-10">
                                <input required value="{{old('title')}}" type="text" class="form-control" id="page_title" placeholder="Enter  email title" name="title">
                                @if ($errors->has('title'))
                                    <div class="error">{{ $errors->first('title') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Email Subject *:</label>
                            <div class="col-sm-10">
                                <input required value="{{old('subject')}}" type="text" class="form-control" id="page_title" placeholder="Enter email subject" name="subject">
                                @if ($errors->has('subject'))
                                    <div class="error">{{ $errors->first('subject') }}</div>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">Email Heading *:</label>
                            <div class="col-sm-10">
                                <textarea required  id="itemdescription1" rows="10" name="heading" cols="250">{{old('heading')}}</textarea>
                                @if ($errors->has('heading'))
                                    <div class="error">{{ $errors->first('heading') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Email Advertisement Image</label>
                            <div class="col-sm-10">
                                <input type="file" class="form-control" id="imgInp" name="banner_image">
                                <span class="help-block">Supported formats : &nbsp; .jpg &nbsp; , &nbsp; .png</span>
                                <span class="help-block">Image Size : Less than 2 MB </span>
                                @if ($errors->has('banner_image'))
                                    <div class="error">{{ $errors->first('banner_image') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Email Content *:</label>
                            <div class="col-sm-10">
                                <textarea required  id="itemdescription" rows="10" name="contents" cols="250">{{old('contents')}}</textarea>
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
