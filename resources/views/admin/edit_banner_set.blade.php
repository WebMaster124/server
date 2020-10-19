
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Edit Banner <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
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
            <form action="{{ action('BannerController@editBannerSetData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{ $banner_set->id}}">

                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Set *:</label>
                            <div class="col-sm-6">
                                <input type="text" value="{{$banner_set->set_name}}" class="form-control" id="category_name" placeholder="Enter  banner set" name="set_name">
                                @if ($errors->has('set_name'))
                                    <div class="error">{{ $errors->first('set_name') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Start Date *:</label>
                            <div class="col-sm-6">
                                <div class="col-md-6">
                                    <div class="form-group">

                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                            <?php $start_date=explode(' ',$banner_set->start_date);?>
                                            <input type="text" value="{{$start_date[0]}}" class="form-control" placeholder="mm/dd/yyyy" id="datepicker" name="start_date">
                                        </div>
                                        @if ($errors->has('start_date'))
                                            <div class="error">{{ $errors->first('start_date') }}</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group mb15">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
                                            <div class="bootstrap-timepicker">
                                                <input id="timepicker" value="{{$start_date[1]}}" type="text" class="form-control" name="start_time"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">End Date *:</label>
                            <div class="col-sm-6">
                                <div class="col-md-6">
                                    <div class="form-group">

                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                            <?php $end_date=explode(' ',$banner_set->end_date);?>
                                            <input type="text" value="{{$end_date[0]}}" class="form-control" placeholder="mm/dd/yyyy" id="datepicker1" name="end_date">
                                        </div>
                                        @if ($errors->has('end_date'))
                                            <div class="error">{{ $errors->first('end_date') }}</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">

                                        <div class="input-group mb15">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
                                            <div class="bootstrap-timepicker">
                                                <input id="timepicker1" value="{{$end_date[1]}}" type="text" class="form-control" name="end_time"/>
                                            </div>
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
