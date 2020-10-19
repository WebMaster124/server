
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Free Sell Seller Period </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">add free sell seller period</li>
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
            <form action="{{ action('FreeSellerPeriod@saveFreeSellerPeriod') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Seller Name *:</label>
                            <div class="col-sm-6">
                                <select required class="form-control chosen-select" style="overflow-y:scroll" name="seller_id[]" multiple>
                                    <?php foreach ($users  as $user){ ?>
                                        <option value="<?php echo $user->id; ?>"><?php echo $user->first_name.' '.$user->last_name .' ( '.$user->display_name.' ) '  ?></option>
                                    <?php } ?>
                                </select>
                                @if ($errors->has('seller_id'))
                                    <div class="error">{{ $errors->first('seller_id') }}</div>
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
                                            <input required value="{{old('start_date')}}" type="text" class="form-control" placeholder="mm/dd/yyyy" id="datepicker" name="start_date">
                                        </div>
                                        @if ($errors->has('start_date'))
                                            <div class="error">{{ $errors->first('start_date') }}</div>
                                        @endif
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
                                            <input required value="{{old('end_date')}}" type="text" class="form-control" placeholder="mm/dd/yyyy" id="datepicker1" name="end_date">
                                        </div>
                                        @if ($errors->has('end_date'))
                                            <div class="error">{{ $errors->first('end_date') }}</div>
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
                                            <input type="checkbox" name="checklist[]"  value="1" id="selectAll" /> <label>ALL</label><br>
                                            <input type="checkbox" name="checklist[]"  value="2" id="checkPrimary2" /> <label>Listing Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="3" id="checkPrimary3" /> <label>Final sales commission Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="4" id="checkPrimary4" /> <label>Buy it now Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="5" id="checkPrimary5" /> <label>Season deal Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="6" id="checkPrimary5" /> <label>Feature deal Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="7" id="checkPrimary5" /> <label>Inserting Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="8" id="checkPrimary5" /> <label>Subtitle Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="9" id="checkPrimary5" /> <label>Category Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="10" id="checkPrimary5" /> <label>Relisting Fee</label><br>
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
    jQuery(".chosen-select").chosen({
        'width': '100%',
        'white-space': 'nowrap'
    });
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
    jQuery(".chosen-choices").css('overflow-y','auto');
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
    div.chosen-container-multi .chosen-choices {
        height: auto!important;
    }
</style>
</body>
</html>
