
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Change Password</h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Change Password</li>
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
            <form action="{{ action('User_Controller@updatePassword') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <div class="panel-body">
                          <div class="form-group">
          <label for="name">Current Password</label>
          <input required type="password" value="{{old('old_password')}}" name="old_password" class="form-control" id="old_password">
          @if ($errors->has('old_password'))
            <div class="error">{{ $errors->first('old_password') }}</div>
                                @endif
	</div>
                        <div class="form-group">
          <label for="name">New Password</label>
          <input required type="password" value="{{old('new_password')}}" name="new_password" class="form-control" id="password">
		  @if ($errors->has('new_password'))
            <div class="error">{{ $errors->first('new_password') }}</div>
                                @endif
						</div>
                        <div class="form-group">
          <label for="name">Confirm Password</label>
          <input required type="password" value="{{old('confirm_password')}}" name="confirm_password" class="form-control" id="password_confirmation">
		  @if ($errors->has('confirm_password'))
            <div class="error">{{ $errors->first('confirm_password') }}</div>
                                @endif
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
<style>
    div.error{
        color: red;
        display:block !important;
    }
</style>
<script>
 $( document ).ready(function() {

$(".dropdown-menu").css("display","");
 });

</script>
</body>
</html>
