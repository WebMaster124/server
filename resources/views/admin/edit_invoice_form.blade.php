
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Edit Seller Invoice Setting <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">edit seller invoice setting</li>
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
            <form action="{{ action('SellerController@editInvoiceFormData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{$data->id}}">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Seller Name *:</label>
                            <div class="col-sm-6">
                                <input disabled value="{{$data->first_name .' '. $data->last_name .' ( '.$data->display_name .' ) '}}"  type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Month *:</label>
                            <div class="col-sm-6">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                            <input required value="{{$data->month}}" type="text" class="form-control" placeholder="mm/yyyy" id="datepicker" name="month">
                                        </div>
                                        @if ($errors->has('month'))
                                            <div class="error">{{ $errors->first('month') }}</div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label"></label>
                            <div class="col-sm-6">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <?php
                                            $checklist = explode(',', $data->checklist_id);
                                            ?>
                                            
                                            <input type="checkbox" name="checklist[]"  value="1" id="checkPrimary1" <?php if(in_array(1, $checklist)){ echo 'checked';} ?> /> <label>Edit Invoice</label><br>
                                            <input type="checkbox" name="checklist[]"  value="2" id="checkPrimary2" <?php if(in_array(2, $checklist)){ echo 'checked';} ?> /> <label>Resend Invoice</label><br>
                                            <input type="checkbox" name="checklist[]"  value="3" id="checkPrimary3" <?php if(in_array(3, $checklist)){ echo 'checked';} ?> /> <label>Charge card on file</label><br>
                                        </div>
                                        @if ($errors->has('checklist'))
                                            <div class="error">{{ $errors->first('checklist') }}</div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer">
                            <div class="row">
                                <div class="col-sm-12">
                                    <button id="submit" class="btn btn-primary">Submit</button>
                                    <!--<button type="reset" class="btn btn-default">Reset</button>-->
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
<script>
$("#selectAll").click(function(){
        $("input[type=checkbox]").prop('checked', $(this).prop('checked'));

});
$("#checkPrimary2,#checkPrimary3,#checkPrimary4,#checkPrimary5").click(function(){
    if(!$(this).prop('checked')){
        $("#selectAll").prop('checked', $(this).prop('checked'));
    } 
    
    if($('#checkPrimary2').prop('checked') && $('#checkPrimary3').prop('checked') && $('#checkPrimary4').prop('checked') && $('#checkPrimary5').prop('checked')){
        $("#selectAll").prop('checked', 'checked');
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
