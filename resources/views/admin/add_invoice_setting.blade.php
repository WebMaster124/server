
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<link rel="stylesheet" type="text/css" media="screen" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/base/jquery-ui.css">
<!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.js"></script>
 
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js"></script>
 
<link rel="stylesheet" type="text/css" media="screen" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/base/jquery-ui.css">-->

<!-- headerbar -->
    <div class="pageheader">
        <h2> Seller Invoice Setting </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Seller Invoice Setting</li>
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
            <form action="{{ action('SellerController@saveInvoiceForm') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Seller Name *:</label>
                            <div class="col-sm-6">
                                <select required="1" class="form-control chosenselect" style="overflow-y:scroll" name="seller_id[]" multiple>
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
                            <label class="col-sm-3 control-label">Month *:</label>
                            <div class="col-sm-6">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                            <input required value="{{old('month')}}" type="text" class="form-control" placeholder="mm/yyyy" id="datepicker" name="month">
                                        <!--<input type='text' id='txtDate' />-->
                                        </div>
                                        @if ($errors->has('month'))
                                            <div class="error">{{ $errors->first('month') }}</div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="data"></div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label"></label>
                            <div class="col-sm-6">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input type="checkbox" name="checklist[]"  value="1" id="checkPrimary1" required="required"> <label>Edit Invoice</label><br>
                                            <input type="checkbox" name="checklist[]"  value="2" id="checkPrimary2" required="required"> <label>Resend Invoice</label><br>
                                            <input type="checkbox" name="checklist[]"  value="3" id="checkPrimary3" required="required"> <label>Charge card on file</label><br>
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

<!--<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js"></script>-->
<script>
    
    jQuery(function($) {
  var requiredCheckboxes = $(':checkbox[required]');
  requiredCheckboxes.on('change', function(e) {
    var checkboxGroup = requiredCheckboxes.filter('[name="' + $(this).attr('name') + '"]');
    var isChecked = checkboxGroup.is(':checked');
    checkboxGroup.prop('required', !isChecked);
  });
  requiredCheckboxes.trigger('change');
});
    
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
    jQuery('#table2').dataTable({
            "sPaginationType": "full_numbers",
            aaSorting : [[0, 'asc']]
        });
    jQuery(".chosen-select").chosen({
        'width': '100%',
        'white-space': 'nowrap'
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
    jQuery(".chosen-choices").css('overflow-y','auto');
       function getdata(){
        var id = $('.chosenselect').val();
        var date = $('#datepicker').val();
//        alert(id);
//        alert(date);
        call(id,date);
       
        
    }
    
    function call(id,date){
         $.ajax({
            type:'POST',
            url:'preview-seller-payment-history',
            data: {
                '_token': $('input[name=_token]').val(),
                'date': date,
                'id': id
            },
            success:function(data){
//                console.log(data);
				 $('.data').html(data); 
            }
        });
    }
    
    function alert(){
        alert('Invoice is not genarated. Generate the invoice in seller payment management.');
    }
    $('.chosenselect').change(function(){
     getdata();
    });
    $('#datepicker').blur(function(){
     getdata();
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
