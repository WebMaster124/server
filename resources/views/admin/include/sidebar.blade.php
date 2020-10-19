
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link rel="shortcut icon" href="{{ asset('images/favicon.png') }}" type="image/png">
    <title>Admin</title>
    <link rel="stylesheet" href="{{ asset('css/style.default.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/jquery.datatables.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/bootstrap-fileupload.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/bootstrap-timepicker.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/jquery.tagsinput.css') }}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    {{--<link rel="stylesheet" href="{{ asset('css/colorpicker.css') }}" />--}}
    <link rel="stylesheet" href="{{ asset('css/dropzone.css') }}" />
	
  <link rel="stylesheet" href="	https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.1/css/buttons.dataTables.min.css"> 


    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.min.js"></script>
    <![endif]-->
    <style>
        .paging_full_numbers{
            padding-bottom: 18px;
        }
        .dashboard:hover{
            text-decoration: none;
        }
    </style>
</head>

<body class="stickyheader">
<!-- Preloader -->
<div id="preloader">
    <div id="status"><i class="fa fa-spinner fa-spin"></i></div>
</div>
<section>

<div class="logopanel">
    <h1><a class="dashboard" href="{{action('User_Controller@index')}}"><span>[</span> Dibdaa <span>]</span></a></h1>
</div>
<!-- logopanel -->
<div class="leftpanel sticky-leftpanel">
    <div class="leftpanelinner" style="margin-bottom: 100px;">
        <!-- This is only visible to small devices -->
        <div class="visible-xs hidden-sm hidden-md hidden-lg">
            <div class="media userlogged">
               <!--  <img alt="" src="images/photos/loggeduser.png" class="media-object"> -->
                <div class="media-body">
                    <h4> {{ \Illuminate\Support\Facades\Session::get('userName')}}</h4>
                    <span></span>
                </div>
            </div>
            <h5 class="sidebartitle actitle">Account</h5>
            <ul class="nav nav-pills nav-stacked nav-mb30">
                <!-- <li><a href="profile.html"><i class="fa fa-user"></i> <span>Profile</span></a></li>
                <li><a href="#"><i class="fa fa-cog"></i> <span>Account Settings</span></a></li>
                <li><a href="#"><i class="fa fa-question-circle"></i> <span>Help</span></a></li> -->
                 <li><a href="{{action('User_Controller@logout')}}"><i class="glyphicon glyphicon-log-out"></i> Log Out</a></li>
            </ul>
        </div>
        <ul class="nav nav-pills nav-stacked nav-">
            <li class="nav-dashboard active"><a href="{{action('User_Controller@index')}}"><i class="fa fa-home"></i> <span>Dashboard</span></a></li>
            <li class="nav-parent nav-other" ><a href="#1"><i class="fa fa-user"></i> <span>User Management</span></a>
                <ul class="children">
                    <li><a href="{{action('User_Controller@viewBuyers')}}"><i class="fa fa-caret-right"></i>View Users</a></li><li><a href="{{action('User_Controller@viewBuyersLog')}}"><i class="fa fa-caret-right"></i>View Users Log</a></li><li><a href="{{action('TermsController@viewTerms')}}"><i class="fa fa-caret-right"></i>Download Document</a></li>
                    {{--<li><a href="{{action('User_Controller@viewSellers')}}"><i class="fa fa-caret-right"></i>Seller Management</a></li>--}}
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#2"><i class="fa fa-edit"></i> <span>Category Management</span></a>
                <ul class="children">
                    <li><a href="{{action('CategoryController@mainCategoryForm')}}"><i class="fa fa-caret-right"></i>Add Category</a></li>
                    <li><a href="{{action('CategoryController@viewMainCategory')}}"><i class="fa fa-caret-right"></i>Manage Category</a></li>
                </ul>
            </li>
           {{-- <li class="nav-parent"><a href="#"><i class="fa fa-edit"></i> <span>Set Type Management</span></a>
                <ul class="children">
                    <li><a href="{{action('SetTypeController@setTypeForm')}}"><i class="fa fa-caret-right"></i>Add Set Type</a></li>
                    <li><a href="{{action('SetTypeController@viewSetType')}}"><i class="fa fa-caret-right"></i>Manage Set Type</a></li>
                </ul>
            </li>
            <li class="nav-parent"><a href="#"><i class="fa fa-edit"></i> <span>Brand Management</span></a>
                <ul class="children">
                    <li><a href="{{action('BrandController@brandForm')}}"><i class="fa fa-caret-right"></i>Add Brand</a></li>
                    <li><a href="{{action('BrandController@viewBrand')}}"><i class="fa fa-caret-right"></i>Manage Brand</a></li>
                </ul>
            </li>--}}
            <li class="nav-parent nav-other"><a href="#17"><i class="fa fa-edit"></i> <span>Season Deal Mgmt</span></a>
                <ul class="children">
                    <li><a href="{{action('SeasonController@seasonForm')}}"><i class="fa fa-caret-right"></i>Add Season</a></li>
                    <li><a href="{{action('SeasonController@viewSeason')}}"><i class="fa fa-caret-right"></i>Manage Season</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#20"><i class="fa fa-edit"></i> <span>Feature Deal Mgmt</span></a>
                <ul class="children">
                    <li><a href="{{action('FeatureController@featureForm')}}"><i class="fa fa-caret-right"></i>Add Feature</a></li>
                    <li><a href="{{action('FeatureController@viewFeature')}}"><i class="fa fa-caret-right"></i>Manage Feature</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#3"><i class="fa fa-user"></i> <span>Product Management</span></a>
                <ul class="children">
                    <li><a href="{{action('ProductController@viewRelistProduct')}}"><i class="fa fa-caret-right"></i>View Pending Relist Products</a></li>
                    <li><a href="{{action('ProductController@viewPendingProduct')}}"><i class="fa fa-caret-right"></i>View Pending Products</a></li>
                    <li><a href="{{action('ProductController@viewProduct')}}"><i class="fa fa-caret-right"></i>View Products</a></li>
                    <li><a href="{{action('ReportProductController@viewProductReport')}}"><i class="fa fa-caret-right"></i>Product Report</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#4"><i class="fa fa-edit"></i> <span>Home Banner </span></a>
                <ul class="children">
                    <li><a href="{{action('BannerController@bannerSetForm')}}"><i class="fa fa-caret-right"></i>Add Sets</a></li>
                    <li><a href="{{action('BannerController@viewBannerSet')}}"><i class="fa fa-caret-right"></i>Manage Sets</a></li>
                    <li><a href="{{action('BannerController@bannerForm')}}"><i class="fa fa-caret-right"></i>Add Banner</a></li>
                    <li><a href="{{action('BannerController@viewBanner')}}"><i class="fa fa-caret-right"></i>Manage Banner</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#5"><i class="fa fa-edit"></i> <span>Faq Management</span></a>
                <ul class="children">
                    <li><a href="{{action('FaqController@faqForm')}}"><i class="fa fa-caret-right"></i>Add Faq</a></li>
                    <li><a href="{{action('FaqController@viewFaq')}}"><i class="fa fa-caret-right"></i>Manage Faq</a></li>
                    <li><a href="{{action('FaqController@faqCategoryForm')}}"><i class="fa fa-caret-right"></i>Add Faq Category</a></li>
                    <li><a href="{{action('FaqController@viewFaqCategory')}}"><i class="fa fa-caret-right"></i>Manage Faq Category</a></li>
                    <li><a href="{{action('FaqController@bannerForm')}}"><i class="fa fa-caret-right"></i>Manage Faq Banner</a></li>
                </ul>
            </li>
<!--            <li class="nav-parent nav-other"><a href="#5"><i class="fa fa-edit"></i> <span>Faq Category Management</span></a>
                <ul class="children">
                    
                </ul>
            </li>-->
            <li class="nav-parent nav-other"><a href="#5"><i class="fa fa-edit"></i> <span>About Cart Mgmt</span></a>
                <ul class="children">
                    <li><a href="{{action('AboutCartController@aboutCartForm')}}"><i class="fa fa-caret-right"></i>Add About Cart</a></li>
                    <li><a href="{{action('AboutCartController@viewAboutCart')}}"><i class="fa fa-caret-right"></i>Manage About Cart</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#6"><i class="fa fa-edit"></i> <span>Feedback Management</span></a>
                <ul class="children" >
                    <li><a href="{{action('FeedbackController@viewFeedBack')}}"><i class="fa fa-caret-right"></i>Manage Feedback</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#7"><i class="fa fa-edit"></i> <span>Coupon Management</span></a>
                <ul class="children">
                    <li><a href="{{action('CouponController@couponCodeForm')}}"><i class="fa fa-caret-right"></i>Add Coupon Code</a></li>
                    <li><a href="{{action('CouponController@viewCouponCode')}}"><i class="fa fa-caret-right"></i>Manage Coupon Code</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#8"><i class="fa fa-edit"></i> <span>Category Specifications</span></a>
                <ul class="children">
                    <li><a href="{{action('SpecificationController@specificationForm')}}"><i class="fa fa-caret-right"></i>Add Specification</a></li>
                    <li><a href="{{action('SpecificationController@viewSpecification')}}"><i class="fa fa-caret-right"></i>Manage Specification</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#9"><i class="fa fa-edit"></i> <span>Order Management</span></a>
                <ul class="children">
                          <li><a href="{{action('CheckoutController@viewOrder')}}"><i class="fa fa-caret-right"></i>Manage Order</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#10"><i class="fa fa-edit"></i> <span>Advertise Management</span></a>
                <ul class="children">
                    <li><a href="{{action('AdvertisementController@advertiseForm')}}"><i class="fa fa-caret-right"></i>Add Advertise</a></li>
                    <li><a href="{{action('AdvertisementController@viewAdvertise')}}"><i class="fa fa-caret-right"></i>Manage Advertise</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#11"><i class="fa fa-edit"></i> <span>Resolution Center </span></a>
                <ul class="children">
                    <li><a href="{{action('ResolutionCenterController@viewResolutionCenterList')}}"><i class="fa fa-caret-right"></i>Manage Resolution Center</a></li>
                    {{--<li><a href="{{action('ResolutionCenterController@breadcrumb')}}"><i class="fa fa-caret-right"></i>breadcrumb</a></li>--}}
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#12"><i class="fa fa-edit"></i> <span>CMS Management </span></a>
                <ul class="children">
                    <li><a href="{{action('CMSController@cmsForm')}}"><i class="fa fa-caret-right"></i>Add CMS</a></li>
                    <li><a href="{{action('CMSController@viewCMS')}}"><i class="fa fa-caret-right"></i>Manage CMS</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#13"><i class="fa fa-edit"></i> <span>PayPal Management </span></a>
                <ul class="children">
                    <li><a href="{{action('PaypalController@payForm')}}"><i class="fa fa-caret-right"></i>PayPal Settings</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#14"><i class="fa fa-edit"></i> <span>Seller Payment Mgmt </span></a>
                <ul class="children">
                    <li><a href="{{action('SellerController@viewSellerList')}}"><i class="fa fa-caret-right"></i>Seller Payment History</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#16"><i class="fa fa-edit"></i> <span>Announcement Mgmt </span></a>
                <ul class="children">
                    <li><a href="{{action('AnnouncementController@viewAnnouncementForm')}}"><i class="fa fa-caret-right"></i>Add Announcements</a></li>
                    <li><a href="{{action('AnnouncementController@viewAnnouncement')}}"><i class="fa fa-caret-right"></i>Mgmt Announcements</a></li>
                </ul>
            </li>
           <li class="nav-parent nav-other"><a href="#18"><i class="fa fa-edit"></i> <span>Email Template Mgmt </span></a>
                <ul class="children">
                  {{--  <li><a href="{{action('EmailController@emailTemplateForm')}}"><i class="fa fa-caret-right"></i>Add Email Template</a></li>--}}
                    <li><a href="{{action('EmailController@viewEmailTemplate')}}"><i class="fa fa-caret-right"></i>Mgmt Email Template</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#19"><i class="fa fa-edit"></i> <span>Free Sell Period Mgmt</span></a>
                <ul class="children">
                    <li><a href="{{action('FreeSellerPeriod@viewSellers')}}"><i class="fa fa-caret-right"></i>Add Sell Period</a></li>
                    <li><a href="{{action('FreeSellerPeriod@viewFreeSellerPeriod')}}"><i class="fa fa-caret-right"></i>View Sell Period</a></li>
                </ul>
            </li>
            <li class="nav-parent nav-other"><a href="#19"><i class="fa fa-edit"></i> <span>Seller Invoice Mgmt</span></a>
                <ul class="children">
                    <li><a href="{{action('SellerController@viewInvoiceForm')}}"><i class="fa fa-caret-right"></i>Add Invoice Setting</a></li>
                    <li><a href="{{action('SellerController@viewInvoiceSetting')}}"><i class="fa fa-caret-right"></i>View Invoice Setting</a></li>
                </ul>
            </li>
            
            

            <li class="nav-parent nav-other"><a href="#15"><i class="fa fa-edit"></i> <span>Setting </span></a>
                <ul class="children">
                    <li><a href="{{action('SettingController@blockManagementForm')}}"><i class="fa fa-caret-right"></i>Blocks Management</a></li>
                    <li><a href="{{action('SettingController@autoRelistProduct')}}"><i class="fa fa-caret-right"></i>Relist Management</a></li>
                    <li><a href="{{action('SettingController@buyerInvoice')}}"><i class="fa fa-caret-right"></i>Invoice Management</a></li>
                    <li><a href="{{action('SettingController@contactUs')}}"><i class="fa fa-caret-right"></i>Contact Management</a></li>
                    <li><a href="{{action('SettingController@settingForm')}}"><i class="fa fa-caret-right"></i>Save Setting</a></li>
                </ul>
            </li>
        </ul>
        <!-- infosummary -->
    </div>
    <!-- leftpanelinner -->
</div>