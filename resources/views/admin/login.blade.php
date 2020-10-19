<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
  <link rel="shortcut icon" href="{{ asset('\images\favicon.png') }}" type="image/png">
  <title>Admin</title>
  <link href="{{ asset('css/style.default.css') }}" rel="stylesheet">
  <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
  <script src="js/html5shiv.js"></script>
  <script src="js/respond.min.js"></script>
  <![endif]-->
</head>

<body class="signin">
  <!-- Preloader -->
  <div id="preloader">
    <div id="status"><i class="fa fa-spinner fa-spin"></i></div>
  </div>
  <section>
    <div class="signinpanel login-fix">
      <div class="row">
        <div class="col-md-12">
          <!--<div class="logo"><a href="#">Project Name</a></div>-->
          <div class="logo"><a href="#"><span><img  src="{{ asset('\images\Dibdaa.png') }}"></span></a></div>
          <div class="login-column">
            <div class="header clearfix">
              <h4 class="login-title"><i class="fa fa-sign-in"></i> Sign In</h4>
            </div>
            <div class="login-form">

              @if(Session::has('message'))
                <div class="alert alert-danger">
                <i class="fa fa-times"></i> {{ Session::get('message') }}
                </div>
              @endif

              <form action="{{ action('User_Controller@login')}}" method="post">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
               {{-- <div class="alert alert-warning no-radius no-margin padding-sm"><i class="fa fa-info-circle"></i> Please sign in to maniac dashboard</div>--}}
                <div class="login-content">
                  <div class="form-group">
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
                  </div>
                  <div class="form-group">
                    <div class="ckbox ckbox-success">
                      <input type="checkbox" id="checkbox1">
                      <label for="checkbox1"></label>
                    </div> <small class="remember">Remember me</small></div>
                    <div class="box-footer">
                      <button type="submit" class="btn btn-success btn-block">Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="box-extra clearfix">
              <!-- <a href="#" class="pull-right btn btn-xs">Forgotten Password?</a> -->
            </div>
          </div>
          <!-- col-sm-5 -->
        </div>
        <!-- row -->
        <div class="signup-footer"> Copyright © 2018.</div>
      </div>
      <!-- signin -->
    </section>
    <script src="{{ asset('js/jquery-1.10.2.min.js') }}"></script>
    <script src="{{ asset('js/jquery-migrate-1.2.1.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/modernizr.min.js') }}"></script>
    <script src="{{ asset('js/jquery.sparkline.min.js') }}"></script>
    <script src="{{ asset('js/toggles.min.js') }}"></script>
    <script src="{{ asset('js/retina.min.js') }}"></script>
    <script src="{{ asset('js/jquery.cookies.js') }}"></script>
    <script src="{{ asset('js/screenfull.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/custom.js') }}"></script>
    <script src="{{ asset('js/bootstrapValidator.js') }}" type="text/javascript"></script>
    <script type="text/javascript">
      jQuery(document).ready(function() {

        //Check
        jQuery('.ckbox input').click(function() {
          var t = jQuery(this);
          if (t.is(':checked')) {
            t.closest('tr').addClass('selected');
          } else {
            t.closest('tr').removeClass('selected');
          }
        });

        // Star
        jQuery('.star').click(function() {
          if (!jQuery(this).hasClass('star-checked')) {
            jQuery(this).addClass('star-checked');
          } else
          jQuery(this).removeClass('star-checked');
          return false;
        });

        // Read mail
        jQuery('.table-email .media').click(function() {
          location.href = "read.html";
        });

      });

      $(document).ready(function() {
        $('#loginform').bootstrapValidator({
          message: 'This value is not valid',
          fields: {
            username: {
              message: 'The username is not valid',
              validators: {
                notEmpty: {
                  message: 'The username is required and can\'t be empty'
                }
              }
            },
            password: {
              validators: {
                notEmpty: {
                  message: 'The password is required and can\'t be empty'
                }
              }
            }
          }
        });

      });
    </script>
  </body>
  </html>






