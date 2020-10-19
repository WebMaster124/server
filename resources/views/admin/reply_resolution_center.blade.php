
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Reply  </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Reply </li>
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
            <form action="{{ action('ResolutionCenterController@replyResolutionCenter') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <input type="hidden" name="id" value="{{$resolution_center->id}}">

                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Product Name</label>
                            <div class="col-sm-6">
                                <label class="col-sm-3 control-label">{{$resolution_center->title}}</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Image</label>
                            <div class="col-sm-6">
                                <?php $product_images=unserialize($resolution_center->photos); ?>
                                <img class="admin_reg_list_img" height="100" width="100"
                                     src="{{ asset("images/product/$resolution_center->product_id/M/$product_images[0]") }}"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Seller Name</label>
                            <div class="col-sm-6">
                                <label class="col-sm-3 control-label">{{ $resolution_center->seller_f_name .' '.$resolution_center->seller_l_name }}</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Buyer Name</label>
                            <div class="col-sm-6">
                                <label class="col-sm-3 control-label">{{ $resolution_center->buyer_f_name .' '.$resolution_center->buyer_l_name }}</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Requested By</label>
                            <div class="col-sm-6">
                                <label class="col-sm-3 control-label">{{ $resolution_center->requested_by }}</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Question</label>
                            <div class="col-sm-9">
                                <label class="col-sm-3 control-label">{{ $resolution_center->question }}</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Reply</label>
                            <div class="col-sm-6">
                                <textarea class="form-control" rows="5" name="answer"> {{ $resolution_center->answer }} </textarea>
                                @if($errors->has('answer'))
                                    <div class="error">{{ $errors->first('answer') }}</div>
                                @endif

                            </div>
                        </div>
                        <div class="panel-footer">
                            <div class="row">
                                <div class="col-sm-12">
                                    <button class="btn btn-primary">Submit</button>
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
