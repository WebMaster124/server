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
<div class="notfound_logo">
    <a href="#"><img src="{{\Illuminate\Support\Facades\URL::asset('/images/Dibdaa.png')}}" class="dibdaalogo img-fluid mx-auto d-block" alt="Dibdaa Logo"></a>
</div>
<section>
    <div class="bg-light notfound_solid_banner_inner">
        <h3 class="notfound_error_page">error page</h3>
        <ul class="notfound_ul">
            <li class="notfound_li"><a href="{{config('app.frontend_url')}}" class="notfound_ul_li_a">Home</a></li>
            <li class="notfound_li"><span class="notfound_span"> > </span></li>
            <li class="notfound_li"><a href="#" class="notfound_ul_li_a">Error Page</a></li>
        </ul>
    </div>
    <div class="notfoundpanel">
        <h1>404!</h1>
        <h3>Error - Not Found</h3>
        <p class="notfound_p">Sorry we’re not able to find what you looking for</p>
        <p class="notfound_p pb-15">BACK TO<a href="{{config('app.frontend_url')}}" class="notfound_home_link notfound_a">HOME</a></p>
    </div><!-- notfoundpanel -->
</section>
<footer class="footer_area">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-md-12 col-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                    <div class="collapse navbar-collapse productlistingfooter" id="navbarSupportedContent">
                        <ul class="navbar-nav set_fontSize mx-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="{{config('app.frontend_url')}}CMS/about-us">About Dibdaa</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{config('app.frontend_url')}}CMS/announcements">Announcements</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{config('app.frontend_url')}}faq">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{config('app.frontend_url')}}CMS/security-center">Security Center</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link checklogin" href="{{config('app.frontend_url')}}USR/login">Resolution Center</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{config('app.frontend_url')}}/faq/listing/7">Seller Center</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{config('app.frontend_url')}}CMS/policies">Policies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{config('app.frontend_url')}}CMS/affiliates">Affiliates</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{config('app.frontend_url')}}contact-us">Help &amp; Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{config('app.frontend_url')}}site-map">Site Map</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="footer_copyright">
                    <h5 class="text-center text-black">©2018 Copyright, All rights reserved |  <a href="{{config('app.frontend_url')}}CMS/user-agreement" class="text-black">User Agreement,</a> <a href="{{config('app.frontend_url')}}CMS/user-privacy" class="text-black">Privacy</a></h5>
                </div>
            </div>
            <div class="col-lg-2 col-md-12 col-12">
                <div class="row m-0">
                    <div class="col-lg-12 col-md-6 col-12 p-0 pt-lg-0 pt-md-4 text-center">
                        <div class="SocialLink mt-lg-3 mb-lg-0 mb-md-0 mb-4">
                            <a class="ml-3 mr-2 social-admin" href="https://www.facebook.com/dibdaa/" target="_blank">
                                <img alt="Facebook" border="0" onmouseout="this.src='{{\Illuminate\Support\Facades\URL::asset('/images/fb.png')}}'" onmouseover="this.src='{{\Illuminate\Support\Facades\URL::asset('/images/fb.png')}}'" src="{{\Illuminate\Support\Facades\URL::asset('/images/fb.png')}}" class="margin-right-social" width="20px">
                            </a>
                            <a class="mr-2 social-admin" href="https://www.instagram.com/dibdaa/" target="_blank">
                                <img alt="Instagram" border="0" onmouseout="this.src='{{\Illuminate\Support\Facades\URL::asset('/images/insta.png')}}'" onmouseover="this.src='{{\Illuminate\Support\Facades\URL::asset('/images/insta.png')}}'" src="{{\Illuminate\Support\Facades\URL::asset('/images/insta.png')}}" class="margin-right-social" width="20px">
                            </a>
                            <a class="mr-2 social-admin" href="https://twitter.com/dibdaa" target="_blank">
                                <img alt="Twitter" border="0" onmouseout="this.src='{{\Illuminate\Support\Facades\URL::asset('/images/twitter.png')}}'" onmouseover="this.src='{{\Illuminate\Support\Facades\URL::asset('/images/twitter.png')}}'" src="{{\Illuminate\Support\Facades\URL::asset('/images/twitter.png')}}" class="margin-right-social" width="20px">
                            </a>
                            <a class="mr-4 social-admin" href="https://www.linkedin.com/company/dibdaa/" target="_blank">
                                <img alt="LinkedIn" border="0" onmouseout="this.src='{{\Illuminate\Support\Facades\URL::asset('/images/link.png')}}'" onmouseover="this.src='{{\Illuminate\Support\Facades\URL::asset('/images/link.png')}}'" src="{{\Illuminate\Support\Facades\URL::asset('/images/link.png')}}" width="20px">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6 col-12 p-0">
                        <h6 class=" mt-0 mt-lg-4 mt-md-0 mb-2 mb-lg-2 mb-md-2 footer_download_app text-center">DOWNLOAD OUR
                            APPS</h6>
                        <div class="row m-0 pt-2 pt-lg-2 pt-md-0">
                            <div class="col-lg-6 col-md-6 col-6 text-center">
                                <a><img class="img-fluid" src="{{\Illuminate\Support\Facades\URL::asset('/images/Play-Store-logo.png')}}"></a>
                            </div>
                            <div class="col-lg-6 col-md-6 col-6 text-center">
                                <a><img class="img-fluid" src="{{\Illuminate\Support\Facades\URL::asset('/images/Apple-Store-logo.png')}}"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<script src="{{ asset('js/jquery-1.10.2.min.js') }}"></script>
<script src="{{ asset('js/jquery-migrate-1.2.1.min.js') }}"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/modernizr.min.js') }}"></script>
<script src="{{ asset('js/retina.min.js') }}"></script>
<script src="{{ asset('js/screenfull.js') }}" type="text/javascript"></script>
<script src="{{ asset('js/custom.js') }}"></script>

</body>
</html>
