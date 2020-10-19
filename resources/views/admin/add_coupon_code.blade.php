
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Coupon Code </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">add coupon code</li>
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
            <form action="{{ action('CouponController@saveCouponCode') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Coupon Code *:</label>
                            <div class="col-sm-6">
                                <input required value="{{old('code')}}" type="text" class="form-control" id="set_name" placeholder="Enter coupon code" name="code">
                                @if ($errors->has('code'))
                                    <div class="error">{{ $errors->first('code') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Coupon Code type *:</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="code_type" name="code_type">
                                    <option value="Flat Discount">Flat Discount</option>
                                    <option value="Percentage Discount">Percentage Discount</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label"> <div id="type_label">Flat Discount (AED) *:</div> </label>
                            <div class="col-sm-6">
                                <input required type="number" value="{{old('discount')}}" class="form-control" id="discount" placeholder="Enter coupon code discount" name="discount">
                                @if ($errors->has('discount'))
                                    <div class="error">{{ $errors->first('discount') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Coupon Count *:</label>
                            <div class="col-sm-6">
                                <input required type="text" value="{{old('coupon_cnt')}}" class="form-control" id="set_name" placeholder="Enter coupon count" name="coupon_cnt">
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
                                            <input required value="{{old('expiry_date')}}" type="text" class="form-control" placeholder="mm/dd/yyyy" id="datepicker" name="expiry_date">
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
                                    <div type="reset"  class="btn btn-default">Reset</div>
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
