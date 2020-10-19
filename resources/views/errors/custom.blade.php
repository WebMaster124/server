<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link rel="shortcut icon" href="{{ asset('images/favicon.png') }}" type="image/png">

    <title>Admin</title>

    <link href="{{ asset('css/style.default.css') }}" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="{{ asset('js/html5shiv.js') }}"></script>
    <script src="{{ asset('js/respond.min.js') }}"></script>
    <![endif]-->
</head>

<body class="notfound">

<!-- Preloader -->
<div id="preloader">
    <div id="status"><i class="fa fa-spinner fa-spin"></i></div>
</div>

<section>
    <div class="notfoundpanel">
        <h1>500!</h1>
        <h3>An error has occurred!</h3>
        <h4>Server is currently under high load - please hit 'reload' on your browser in a minute to try again. </h4>
        <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button>
    </div><!-- notfoundpanel -->
</section>
<script src="{{ asset('js/jquery-1.10.2.min.js') }}"></script>
<script src="{{ asset('js/jquery-migrate-1.2.1.min.js') }}"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/modernizr.min.js') }}"></script>
<script src="{{ asset('js/retina.min.js') }}"></script>
<script src="{{ asset('js/screenfull.js') }}" type="text/javascript"></script>

<script src="{{ asset('js/custom.js') }}"></script>

</body>
</html>
