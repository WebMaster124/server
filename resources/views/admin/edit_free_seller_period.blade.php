
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
   
@include('admin.include.header')
 <link rel="stylesheet" type="text/css" media="screen" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/base/jquery-ui.css">
<!-- headerbar -->
    <div class="pageheader">
        <h2> Edit Free Sell Seller Period <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">edit free sell period</li>
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
            <form action="{{ action('FreeSellerPeriod@editFreeSellerPeriodData') }}" method="post" enctype="multipart/form-data">
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
                            <label class="col-sm-3 control-label">Start Date *:</label>
                            <div class="col-sm-6">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                            <input required value="{{$data->start_date}}" type="text" class="form-control" placeholder="mm/dd/yyyy" id="datepicker" name="start_date">
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
                                            <input required value="{{$data->end_date}}" type="text" class="form-control" placeholder="mm/dd/yyyy" id="datepicker1" name="end_date">
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
                                            <?php
                                            $checklist = explode(',', $data->checklist_id);
                                            ?>
                                            
                                            <input type="checkbox" name="checklist[]"  value="1" id="selectAll" <?php if(in_array(1, $checklist)){ echo 'checked';} ?> /> <label>ALL</label><br>
                                            <input type="checkbox" name="checklist[]"  value="2" id="checkPrimary2" <?php if(in_array(2, $checklist)){ echo 'checked';} ?> /> <label>Listing Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="3" id="checkPrimary3" <?php if(in_array(3, $checklist)){ echo 'checked';} ?> /> <label>Final sales commission Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="4" id="checkPrimary4" <?php if(in_array(4, $checklist)){ echo 'checked';} ?> /> <label>Buy it now Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="5" id="checkPrimary5" <?php if(in_array(5, $checklist)){ echo 'checked';} ?> /> <label>Season deal Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="6" id="checkPrimary5" <?php if(in_array(6, $checklist)){ echo 'checked';} ?> /> <label>Feature deal Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="7" id="checkPrimary5" <?php if(in_array(7, $checklist)){ echo 'checked';} ?>/> <label>Inserting Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="8" id="checkPrimary5" <?php if(in_array(8, $checklist)){ echo 'checked';} ?>/> <label>Subtitle Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="9" id="checkPrimary5" <?php if(in_array(9, $checklist)){ echo 'checked';} ?>/> <label>Category Fee</label><br>
                                            <input type="checkbox" name="checklist[]"  value="10" id="checkPrimary5" <?php if(in_array(10, $checklist)){ echo 'checked';} ?>/> <label>Relisting Fee</label><br>
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
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.js"></script>
 
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js"></script>
@include('admin.include.footer')
<style type="text/css">
        .ui-datepicker-calendar
        {
            display: none;
        }
        /*.ui-datepicker-calendar { display: none; }*/
    </style>
<script>
    $('#datepicker').datepicker({
     changeMonth: true,
     changeYear: true,
     dateFormat: 'MM yy',
     onClose: function() {
        var iMonth = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
        var iYear = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
        $(this).datepicker('setDate', new Date(iYear, iMonth, 1));
     },
     beforeShow: function() {
       if ((selDate = $(this).val()).length > 0)
       {
          iYear = selDate.substring(selDate.length - 4, selDate.length);
          iMonth = jQuery.inArray(selDate.substring(0, selDate.length - 5),
                   $(this).datepicker('option', 'monthNames'));
          $(this).datepicker('option', 'defaultDate', new Date(iYear, iMonth, 1));
          $(this).datepicker('setDate', new Date(iYear, iMonth, 1));
       }
    }
  });
//    jQuery('#datepicker').datepicker({
//        minDate : 0
//    });
//    jQuery('#datepicker1').datepicker({
//        minDate : 0
//    });
//    jQuery('#timepicker').timepicker({
//        defaultTIme: false
//    });
//    jQuery('#timepicker1').timepicker({
//        defaultTIme: false
//    });
</script>
<style>
    div.error{
        color: red;
        display:block !important;
    }
</style>
</body>
</html>
