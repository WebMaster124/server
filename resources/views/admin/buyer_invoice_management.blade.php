
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2>Invoice Management</h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Invoice Management</li>
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
            <form action="{{ action('SettingController@buyerInvoiceForm') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="panel-body">
                        
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Declaration Heading  <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <!--<textarea required class="form-control" rows="5" name="buyer[declaration]"> {{old('declaration')}} </textarea>-->
                                <input required class="form-control" rows="5" name="decl_heading" value="<?php echo $buyer['declaration_heading']; ?>"> 
                                @if ($errors->has('decl_heading'))
                                    <div class="error">{{ $errors->first('decl_heading') }}</div>
                                @endif
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Declaration <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <!--<textarea required class="form-control" rows="5" name="buyer[declaration]"> {{old('declaration')}} </textarea>-->
                                <textarea required class="form-control" rows="5" name="declaration"> <?php echo $buyer['declaration']; ?> </textarea>
                                @if ($errors->has('declaration'))
                                    <div class="error">{{ $errors->first('declaration') }}</div>
                                @endif
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Aknowledgment Heading <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <!--<textarea required class="form-control" rows="5" name="buyer[declaration]"> {{old('declaration')}} </textarea>-->
                                <input required class="form-control" rows="5" name="aknow_heading" value="<?php echo $buyer['aknowledgment_heading']; ?>"> 
                                @if ($errors->has('aknow_heading'))
                                    <div class="error">{{ $errors->first('Aknowledgment Heading') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Customer Aknowledgment <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <!--<textarea required class="form-control" rows="5" name="buyer[aknowledgment]"> {{old('aknowledgment')}} </textarea>-->
                                <textarea required class="form-control" rows="5" name="aknowledgment"> <?php echo $buyer['aknowledgment']; ?> </textarea>
                                @if ($errors->has('aknowledgment'))
                                    <div class="error">{{ $errors->first('aknowledgment') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Footer Note1 <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <!--<textarea required class="form-control" rows="5" name="buyer[aknowledgment]"> {{old('aknowledgment')}} </textarea>-->
                                <textarea required class="form-control" rows="5" name="footer_note1" id="note1"> <?php echo $buyer['footer_note1']; ?> </textarea>
                                @if ($errors->has('footer_note1'))
                                    <div class="error">{{ $errors->first('footer_note1') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Footer Note2 <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <!--<textarea required class="form-control" rows="5" name="buyer[aknowledgment]"> {{old('aknowledgment')}} </textarea>-->
                                <textarea required class="form-control" rows="5" name="footer_note2" id="note2"> <?php echo $buyer['footer_note2']; ?> </textarea>
                                @if ($errors->has('footer_note2'))
                                    <div class="error">{{ $errors->first('footer_note2') }}</div>
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
        CKEDITOR.replace('note1');
        CKEDITOR.replace('note2');
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
