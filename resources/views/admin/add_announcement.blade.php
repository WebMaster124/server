
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Announcement </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Announcement</li>
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
            <form action="{{ action('AnnouncementController@saveAnnouncement') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="panel-body">
                        <div class="form-group" id="menu_type" >
                            <label class="col-sm-2 control-label">Send Announcement to :</label>
                            <div class="col-sm-10">
                                <select required class="form-control" id="sel1" name="users">
                                    <option selected="" disabled>SELECT USERS</option>
                                    <option value="all">All Users</option>
                                    <option value="seller">Sellers</option>
                                    <option value="buyer">Buyers</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Announcement Date :</label>
                            <div class="col-sm-10">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                            <input required value="{{old('announce_date')}}" type="text" class="form-control" placeholder="mm/dd/yyyy" id="datepicker" name="announce_date">
                                        </div>
                                        @if ($errors->has('announce_date'))
                                            <div class="error">{{ $errors->first('announce_date') }}</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group mb15">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
                                            <div class="bootstrap-timepicker">
                                                <input id="timepicker" type="text" class="form-control" name="announce_time"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group" id="menu_type" >
                            <label class="col-sm-2 control-label">Announcement:</label>
                            <div class="col-sm-10">
                                <textarea required  id="itemdescription" rows="10" name="announcement" cols="250"></textarea>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="col-sm-2 control-label">Attachment:</label>
                            <div class="col-sm-6">
                                <input type="file" class="form-control" id="attach_name"  name="attach_image">
                                {{--<span class="help-block">Banner image must be 255 * 255 dimension.</span>--}}
                                @if ($errors->has('attach_image'))
                                    <div class="error">{{ $errors->first('attach_image') }}</div>
                                @endif
                            </div>
                        </div>
                        
                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-sm-12">
                                <button id="preview" type="button" class="btn btn-primary">Preview</button>
<!--                                <button id="preview" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Preview</button>-->
                                <button id="submit" class="btn btn-primary">Submit</button>
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


<!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Announcement Preview</h4>
        </div>
        <div class="modal-body">
            <p class="preview_content"></p>
            <p class="preview_docs">
                <img id="preview_img" src="" style="width: 50%;height: 50%;display: none;">
                <iframe id="preview_docs" src="" style="width: 100%;height: 50%;display: none;"></iframe>
            </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default close_btn" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>

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
    /* Code for item description in CKeditor */
    window.onload = function () {
        CKEDITOR.editorConfig = function (config) {
            config.language = 'es';
            config.uiColor = '#F7B42C';
            config.height = 300;
            config.toolbarCanCollapse = true;
        };
        CKEDITOR.replace('itemdescription');
    };
</script>
<script type="text/javascript" src="//cdn.ckeditor.com/4.5.1/standard/ckeditor.js"></script>

<script>
    function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    var url = input.value;
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    reader.onload = function(e) {
        
        if(ext=='pdf'){
            $('#preview_docs').attr('src', e.target.result);
            $('#preview_docs').show();
        } else {
            $('#preview_img').attr('src', e.target.result);
            $('#preview_img').show();
        }
    }
    
    reader.readAsDataURL(input.files[0]);
  }
}
    $('input[type="file"]').change(function(){
        readURL(this);
});

    $('.close').click(function(){
        $('#preview_docs').hide();
        $('#preview_img').hide();
    });
    $('.close_btn').click(function(){
        $('#preview_docs').hide();
        $('#preview_img').hide();
    });
    
    $('#preview').click(function(){
    var desc = CKEDITOR.instances['itemdescription'].getData();
    if(desc!=''){
    $('.preview_content').html(desc);
//    $('#preview_img').attr('src',docs);
    $('#myModal').modal('toggle');
    } else{
        alert('Fill the Announcement Content');
    }
    });
    
</script>
    


</body>
</html>
