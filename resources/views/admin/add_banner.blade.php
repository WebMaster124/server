
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.3.3/css/bootstrap-colorpicker.min.css" rel="stylesheet">
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Banner </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Add banner</li>
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
            <form action="{{ action('BannerController@saveBanner') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Select Set *:</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="sel1" name="set_id">
                                    @foreach($banners_set as $banner_set)
                                    <option value="{{$banner_set->id}}">{{$banner_set->set_name}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Title *:</label>
                            <div class="col-sm-6">
                                <input required value="{{old('title')}}" type="text" class="form-control" id="category_name" placeholder="Enter  banner title" name="title">
                                @if ($errors->has('title'))
                                    <div class="error">{{ $errors->first('title') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Description *:</label>
                            <div class="col-sm-6">
                                <textarea required class="form-control" rows="5" name="description"> {{old('description')}}</textarea>
                                @if ($errors->has('description'))
                                    <div class="error">{{ $errors->first('description') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Image *:</label>
                            <div class="col-sm-6">
                                <input type="file" class="form-control" id="category_name"  name="banner_image">
                                <span class="help-block">Banner image must be in 1310 * 330 dimension.</span>
                                @if ($errors->has('banner_image'))
                                    <div class="error">{{ $errors->first('banner_image') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner URL :</label>
                            <div class="col-sm-6">
                                <input required type="text" value="{{old('url')}}" class="form-control" id="category_name" placeholder="Enter  banner url" name="url">
                                @if ($errors->has('url'))
                                    <div class="error">{{ $errors->first('url') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Div Color *:</label>
                            <div class="col-sm-6">
                                <input required id="mycp" value="{{old('div_color')}}" type="text" class="form-control"  placeholder="Enter div color." name="div_color"/>
                                @if ($errors->has('div_color'))
                                    <div class="error">{{ $errors->first('div_color') }}</div>
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.3.3/js/bootstrap-colorpicker.min.js"></script>
<script>
    $('#mycp').colorpicker({});
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
