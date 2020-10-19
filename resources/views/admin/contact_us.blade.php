
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2>Contact Us Management</h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">contact us Management</li>
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
            <form action="{{ action('SettingController@contactUsForm') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="panel-body">
                        
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Phone No  <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <!--<input required class="form-control" rows="5" name="phone_no" value="">--> 
                                <input required class="form-control" rows="5" name="phone_no" value="<?php echo $contact['phone_no']; ?>"> 
                                @if ($errors->has('phone_no'))
                                    <div class="error">{{ $errors->first('phone_no') }}</div>
                                @endif
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Email Id <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <!--<input required class="form-control" rows="5" name="email" value="">--> 
                                <input required class="form-control" rows="5" name="email" value="<?php echo $contact['email']; ?>">
                                @if ($errors->has('email'))
                                    <div class="error">{{ $errors->first('email') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Address <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <!--<textarea required class="form-control" rows="5" name="address" id="address"></textarea>-->
                                <textarea required class="form-control" rows="5" name="address"> <?php echo $contact['address']; ?> </textarea>
                                @if ($errors->has('address'))
                                    <div class="error">{{ $errors->first('address') }}</div>
                                @endif
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
    /* Code for item description in CKeditor */
    window.onload = function () {
        CKEDITOR.editorConfig = function (config) {
            config.language = 'es';
            config.uiColor = '#F7B42C';
            config.height = 300;
            config.toolbarCanCollapse = true;
        };
        CKEDITOR.replace('address');
    };
//    window.onload = function () {
//        CKEDITOR.editorConfig = function (config) {
//            config.language = 'es';
//            config.uiColor = '#F7B42C';
//            config.height = 300;
//            config.toolbarCanCollapse = true;
//        };
//        CKEDITOR.replace('note2');
//    };
</script>
<script type="text/javascript" src="//cdn.ckeditor.com/4.5.1/standard/ckeditor.js"></script>


</body>

</html>
