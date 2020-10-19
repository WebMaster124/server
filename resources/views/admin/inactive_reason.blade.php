
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Reason </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Reason</li>
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
            <form action="{{ action('User_Controller@inactiveUserStatus') }}" method="post" enctype="multipart/form-data" >
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{$id}}">
                    <input type="hidden" name="slag" value="{{$slag}}">
                    <input type="hidden" name="status" value="{{$status}}">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Reason *:</label>
                            <div class="col-sm-10">
                                <textarea  id="itemdescription" required class="form-control" rows="5" name="reason"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-sm-12">
                                <button class="btn btn-primary" id="btn">Submit</button>
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
<style>
    div.error{
        color: red;
        display:block !important;
    }
</style>
</body>
</html>
