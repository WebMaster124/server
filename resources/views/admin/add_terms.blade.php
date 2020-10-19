
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Terms and Conditions </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">add terms and conditions</li>
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
            <form action="{{ action('TermsController@saveTermsData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">User Name *:</label>
                            <div class="col-sm-6">
                                <select required class="form-control chosen-select" style="overflow-y:scroll" name="user_id[]" multiple>
                                    <option value="">Select user </option>
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
                            <label class="col-sm-3 control-label">Document *:</label>
                            <div class="col-sm-6">
                                <div class="form-group">
                                        <div class="input-group">
                                            <input type="checkbox" name="checkdoc[]"  value="1" id="argeement" required/> <label>User Argeement</label><br>
                                            <input type="checkbox" name="checkdoc[]"  value="2" id="policy" required/> <label>User Privacy Notice</label><br>
                                        </div>
                                        @if ($errors->has('checklist'))
                                            <div class="error">{{ $errors->first('checklist') }}</div>
                                        @endif
                                    </div>
                        </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Export Type *:</label>
                            <div class="col-sm-6">
                                <div class="form-group">
                                        <div class="input-group">
                                            <input type="checkbox" name="checklist[]"  value="1" id="pdf" required/> <label>Export in PDF</label><br>
                                            <input type="checkbox" name="checklist[]"  value="2" id="email" required/> <label>Via Email</label><br>
                                        </div>
                                        @if ($errors->has('checklist'))
                                            <div class="error">{{ $errors->first('checklist') }}</div>
                                        @endif
                                    </div>
                        </div>
                        <div class="panel-footer">
                            <div class="row">
                                <div class="col-sm-12">
                                    <?php 
                                    if(isset($agree)){
                                    if($agree!=''){ ?>
                                    <a href="../<?php echo $agree; ?>" class="a_argee" target="_blank">User Argeement</a>
                                    <?php } } ?>
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
<script>
  jQuery(".chosen-select").chosen({
        'width': '100%',
        'white-space': 'nowrap'
    });
    jQuery(function($) {
  var requiredCheckboxes = $(':checkbox[required]');
  requiredCheckboxes.on('change', function(e) {
    var checkboxGroup = requiredCheckboxes.filter('[name="' + $(this).attr('name') + '"]');
    var isChecked = checkboxGroup.is(':checked');
    checkboxGroup.prop('required', !isChecked);
  });
  requiredCheckboxes.trigger('change');
});


//$('#submit').click(function(){
//    alert('hi');
//    
//    if($('#pdf').prop('checked')){
//        alert('pdf');
//        $.ajax({
//            type:'POST',
//            url:'download-pdf/{id}',
//            data: {
//                '_token': $('input[name=_token]').val(),
//                'date': date,
//                'id': id
//            },
//            success:function(data){
////                console.log(data);
//				 $('.data').html(data); 
//            }
//        });
//    }
//});



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
