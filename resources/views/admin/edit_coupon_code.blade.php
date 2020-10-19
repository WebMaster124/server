
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Edit Coupon Code <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">edit coupon code</li>
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
            <form action="{{ action('CouponController@editCouponCodeData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{$code->id}}">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Coupon Code *:</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="set_name" value="{{$code->code}}" placeholder="Enter coupon code" name="code">
                                @if ($errors->has('code'))
                                    <div class="error">{{ $errors->first('code') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Coupon Code type *:</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="code_type" name="code_type">
                                    @if($code->code_type=="Flat Discount")
                                        <option selected value="Flat Discount">Flat Discount</option>
                                        <option value="Percentage Discount">Percentage Discount</option>
                                    @else
                                        <option value="Flat Discount">Flat Discount *:</option>
                                        <option selected value="Percentage Discount">Percentage Discount</option>
                                    @endif

                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label"> <div id="type_label">
                                    @if($code->code_type=="Flat Discount")
                                        Flat Discount (AED) *:
                                    @else
                                        Percentage Discount (%) *:
                                    @endif

                                </div></label>
                            <div class="col-sm-6">
                                <input type="number" class="form-control" id="discount" value="{{$code->discount}}" placeholder="Enter coupon code discount" name="discount">
                                @if ($errors->has('discount'))
                                    <div class="error">{{ $errors->first('discount') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Coupon Count *:</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="set_name" value="{{$code->coupon_cnt}}" placeholder="Enter coupon count" name="coupon_cnt">
                                @if ($errors->has('coupon_cnt'))
                                    <div class="error">{{ $errors->first('coupon_cnt') }}</div>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">Expiry Date *:</label>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                        <input type="text" class="form-control" value="{{$code->expiry_date}}" placeholder="mm/dd/yyyy" id="datepicker" name="expiry_date">
                                    </div>
                                    @if ($errors->has('expiry_date'))
                                        <div class="error">{{ $errors->first('expiry_date') }}</div>
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
$(document).ready(function () {
    var v=$('#code_type').val();
    if(v=='Percentage Discount'){
        $('#type_label').html('Percentage Discount (%) *:');
        $('#discount').attr('max','100');
    }else{
        $('#type_label').html('Flat Discount (AED) *:');
        $('#discount').removeAttr('max');
    }
});

    $('#code_type').change(function(){
        var v=$('#code_type').val();
        if(v=='Percentage Discount'){
            $('#type_label').html('Percentage Discount (%) *:');
            $('#discount').attr('max','100');
        }else{
            $('#type_label').html('Flat Discount (AED) *:');
            $('#discount').removeAttr('max');
        }

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
