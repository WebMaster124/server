
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
    @include('admin.include.header')
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.3.3/css/bootstrap-colorpicker.min.css" rel="stylesheet">
    <!-- headerbar -->
    <div class="pageheader">
        <h2> View  Banner  <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Edit banner</li>
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

                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Set Name</label>
                            <div class="col-sm-6">
                                    @foreach($banners_set as $banner_set)
                                        @if($banner_set->id==$banner->set_id)
                                            {{$banner_set->set_name}}
                                        @endif
                                    @endforeach
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Title</label>
                            <div class="col-sm-6">
                                {{$banner->title}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Description</label>
                            <div class="col-sm-6">
                                {{$banner->description}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Images</label>
                            <div class="col-sm-6">
                                <img height="100" width="200" src="{{asset("/images/banner/$banner->banner_image")}}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner URL</label>
                            <div class="col-sm-6">
                                {{$banner->url}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Div Color </label>
                            <div class="col-sm-6">
                                {{$banner->div_color}}
                            </div>
                        </div>
                     </div>
                </div>
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.3.3/js/bootstrap-colorpicker.min.js"></script>
<script>
    $('#mycp').colorpicker({});
    jQuery('#datepicker').datepicker();
    jQuery('#datepicker1').datepicker();
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
