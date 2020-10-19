<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/admin', function () {
    return view('admin/login');
});

Route::group(['prefix'=>'admin','middleware' => 'preventBackHistory'],function() {

    //USER MANAGEMENT
    Route::get('login', 'User_Controller@loginForm');

    Route::post('logincode', 'User_Controller@login');
    Route::get('dashboard', 'User_Controller@index');
    Route::get('logout', 'User_Controller@logout');
    Route::get('dashboard', 'User_Controller@index');
    Route::get('view-buyers', 'User_Controller@viewBuyers');
    Route::get('view-sellers', 'User_Controller@viewSellers');
    Route::get('buyer-details/{id}', 'User_Controller@viewBuyerDetails');
    Route::get('seller-details/{id}', 'User_Controller@viewSellerDetails');
    Route::get('change-user-status/{id}/{status}/{slug}', 'User_Controller@changeUserStatus');
    Route::get('inactive-reason/{id}/{status}/{slug}', 'User_Controller@ViewInactiveReasonForm');
    Route::post('inactive-user-status','User_Controller@inactiveUserStatus');
    Route::get('delete-users/{id}','User_Controller@deleteUsers');
    Route::get('user-warning/{id}','User_Controller@userWarning');
    Route::post('send-warning-mail','User_Controller@SendWarningMail');

    //CATEGORY MANAGEMENT
    Route::get('main-category-form', 'CategoryController@mainCategoryForm');
    Route::post('save-main-category', 'CategoryController@saveMainCategory');
    Route::get('view-main-category', 'CategoryController@viewMainCategory');
    Route::get('edit-main-category/{id}', 'CategoryController@editMainCategory');
    Route::post('edit-main-category-data', 'CategoryController@editMainCategoryData');
    Route::get('delete-main-category/{id}', 'CategoryController@deleteCategory');
    Route::post('get-subcategoty','CategoryController@getSubCategory');
    Route::post('get-facility-charge','CategoryController@getFacilityCharge');
    Route::get('view-category-detail/{id}', 'CategoryController@viewCategoryDetails');



    //BRAND MANAGEMENT
    Route::get('brand-form','BrandController@brandForm');
    Route::post('save-brand','BrandController@saveBrand');
    Route::get('view-brand','BrandController@viewBrand');
    Route::get('edit-brand/{id}','BrandController@editBrand');
    Route::post('edit-brand-data','BrandController@editBrandData');
    Route::get('delete-brand/{id}','BrandController@deleteBrand');

    //HOME BANNER MANAGEMENT
    Route::get('banner-form','BannerController@bannerForm');
    Route::post('save-banner','BannerController@saveBanner');
    Route::get('view-banner','BannerController@viewBanner');
    Route::get('edit-banner/{id}','BannerController@editBanner');
    Route::post('edit-banner-data','BannerController@editBannerData');
    Route::get('delete-banner/{id}','BannerController@deleteBanner');
    Route::get('view-banner-details/{id}','BannerController@viewBanerDetails');


    //HOME SETTYPE MANAGEMENT
    Route::get('settype-form','SetTypeController@setTypeForm');
    Route::post('save-SetType','SetTypeController@saveSetType');
    Route::get('view-settype','SetTypeController@viewSetType');
    Route::get('edit-settype/{id}','SetTypeController@editSetType');
    Route::post('edit-settype-data','SetTypeController@editSetTypeData');
    Route::get('delete-settype/{id}','SetTypeController@deleteSetType');

    Route::post('get-setType','SetTypeController@viewSetTypeAjax');

    //BANNER SET MANAGEMENT
    Route::get('banner-set-form','BannerController@bannerSetForm');
    Route::post('save-banner-set','BannerController@saveBannerSet');
    Route::get('view-banner-set','BannerController@viewBannerSet');
    Route::get('edit-banner-set/{id}','BannerController@editBannerSet');
    Route::post('edit-banner-set-data','BannerController@editBannerSetData');
    Route::get('delete-banner-set/{id}','BannerController@deleteBannerSet');
    Route::get('change-set-status/{id}','BannerController@changeSetStatus');

    //PRODUCT MANAGEMENT
    Route::get('view-product','ProductController@viewProduct');
    Route::get('view-pending-product','ProductController@viewPendingProduct');
    Route::get('change-product-status/{id}/{status}/{slug}','ProductController@changeProductStatus');
    Route::get('view-product-details/{id}','ProductController@viewProductDetails');
    Route::get('deactive-product-form/{id}/{status}/{slag}','ProductController@viewDeactiveReasonForm');
    Route::post('deactive-product-status','ProductController@deactiveProductStatus');
    Route::post('approve-bulk-products','ProductController@approveBulkProductStatus');

    //DASHBOARD MANAGEMENTS
    Route::get('seller-charge-by-auction/{id?}/{year?}/{month?}','ProductController@sellerChargeByAuctionType');
    Route::get('seller-charge-by-fix/{id?}/{year?}/{month?}','ProductController@sellerChargeByFixPrice');
    Route::get('cash-sale-details','ProductController@cashSaleDetails');
    Route::get('paypal-sale-details','ProductController@paypalSaleDetails');
    Route::get('item-listed-by-category','ProductController@ItemListedByCategory');
    Route::get('item-sale-by-category','ProductController@saleByCategory');
    Route::get('return-products-lists','ProductController@returnProductList');

    //FAQ MANAGEMENT
    Route::get('faq-form','FaqController@faqForm');
    Route::post('save-faq','FaqController@saveFaq');
    Route::get('view-faq','FaqController@viewFaq');
    Route::get('edit-faq/{id}','FaqController@editFaq');
    Route::post('edit-faq-data','FaqController@editFaqData');
    Route::get('delete-faq/{id}','FaqController@deleteFaq');

    //ABOUT CART MANAGEMENT
    Route::get('aboutcart-form','AboutCartController@aboutCartForm');
    Route::post('save-aboutcart','AboutCartController@saveAboutCart');
    Route::get('view-aboutcart','AboutCartController@viewAboutCart');
    Route::get('edit-aboutcart/{id}','AboutCartController@editAboutCart');
    Route::post('edit-aboutcart-data','AboutCartController@editAboutCartData');
    Route::get('delete-aboutcart/{id}','AboutCartController@deleteAboutCart');

    //FEEDBACK MANAGEMENT
    Route::get('view-feedback','FeedbackController@viewFeedBack');
    Route::get('edit-feedback/{id}','FeedbackController@editFeedback');
    Route::post('edit-feedback-data','FeedbackController@editFeedbackData');
    Route::get('delete-feedback/{id}','FeedbackController@deleteFeedback');

    //COUPON CODE MANAGEMENT
    Route::get('coupon-code-form','CouponController@couponCodeForm');
    Route::post('save-coupon-code','CouponController@saveCouponCode');
    Route::get('view-coupon-code','CouponController@viewCouponCode');
    Route::get('edit-coupon-code/{id}','CouponController@editCouponCode');
    Route::post('edit-coupon-code-data','CouponController@editCouponCodeData');
    Route::get('delete-coupon-code/{id}','CouponController@deleteCouponCode');

    //SPECIFICATION MANAGEMENT
    Route::get('specification-form','SpecificationController@specificationForm');
    Route::post('save-specification','SpecificationController@saveSpecification');
    Route::get('view-specification','SpecificationController@viewSpecification');
    Route::get('edit-specification/{id}','SpecificationController@editSpecification');
    Route::post('edit-specification-data','SpecificationController@editSpecificationData');
    Route::get('delete-specification/{id}','SpecificationController@deleteSpecification');

    //ORDER MANAGEMENT
    Route::get('view-order','CheckoutController@viewOrder');
    Route::get('order-detail/{id}','CheckoutController@orderDetails');

    //ADVERTISE MANAGEMENT
    Route::get('advertise-form','AdvertisementController@advertiseForm');
    Route::post('save-advertise','AdvertisementController@saveAdvertise');
    Route::get('view-advertise','AdvertisementController@viewAdvertise');
    Route::get('edit-advertise/{id}','AdvertisementController@editAdvertise');
    Route::post('edit-advertise-data','AdvertisementController@editAdvertiseData');
    Route::get('delete-advertise/{id}','AdvertisementController@deleteAdvertise');
    Route::get('change-advertise-status/{id}','AdvertisementController@changeStatus');

    //PRODUCT REPORT
    Route::get('product-report','ReportProductController@viewProductReport');
    Route::get('delete-product/{product_id}/{report_id}','ReportProductController@deleteProduct');
    Route::get('delete-report/{id}','ReportProductController@deleteReport');

    //RESOLUTION CENTER
     Route::get('view-resolution-center-list','ResolutionCenterController@viewResolutionCenterList');
     Route::get('view-resolution-center/{id}','ResolutionCenterController@viewResolutionCenter');
     Route::post('reply-resolution-center','ResolutionCenterController@replyResolutionCenter');
     Route::get('view-ticket/{id}','ResolutionCenterController@viewThreads');

    //SETTING
    Route::get('setting-form','SettingController@settingForm');
    Route::post('setting-save','SettingController@saveSetting');
    Route::get('block-management-form','SettingController@blockManagementForm');
    Route::post('block-management','SettingController@blockManagement');
    //EDITOR PICK
    Route::get('editor-pick-form','EditorPickController@editorPickForm');
    Route::post('save-editor-pick','EditorPickController@saveEditorPick');

    Route::get('breadcrumb','ResolutionCenterController@breadcrumb');

    //CMS CONTROLLER
    Route::get('cms-form','CMSController@cmsForm');
    Route::post('add-cms','CMSController@addCMS');
    Route::get('view-cms','CMSController@viewCMS');
    Route::get('edit-cms/{id}','CMSController@editCMS');
    Route::post('edit-cms-data','CMSController@editCMSData');
    Route::get('delete-cms/{id}','CMSController@deleteCMS');

    //EMAIL MANAGEMENTS
    Route::get('email-template-form','EmailController@emailTemplateForm');
    Route::post('save-email-template','EmailController@saveEmailTemplate');
    Route::get('view-email-template','EmailController@viewEmailTemplate');
    Route::get('edit-email-template/{id}','EmailController@editEmailTemplate');
    Route::post('edit-email-template-data','EmailController@editEmailTemplateData');

    //PAYPAL DETAILS
    Route::get('pay-form','PaypalController@payForm');
    Route::post('edit-paypal-data','PaypalController@editPayPalData');

    //SELLER PAYMENT HISTORY
    Route::get('view-seller-list','SellerController@viewSellerList');

   // Route::get('view-seller-payment-history/{id}/{month?}/{year?}',['as' => 'post.path', 'uses' => 'SellerController@viewSellerPaymentHistory']);
    Route::get('view-seller-payment-history','SellerController@viewSellerPaymentHistory');
  //  Route::get('view-seller-payment-history',['as' => 'view-seller-payment-history', 'uses' => 'SellerController@viewSellerPaymentHistory']);
    Route::get('send-seller-payment-invoice-by-admin','SellerController@sendSellerPaymentInvoiceByAdmin');

    //ANNOUNCEMENT MANAGEMENT
    Route::get('view-announcement-form','AnnouncementController@viewAnnouncementForm');
    Route::post('save-announcement','AnnouncementController@saveAnnouncement');
    Route::get('view-announcement','AnnouncementController@viewAnnouncement');
    Route::get('delete-announcement/{id}','AnnouncementController@deleteAnnouncement');

    //SEASON MANAGEMENT
    Route::get('season-form','SeasonController@seasonForm');
    Route::post('save-season','SeasonController@saveSeason');
    Route::get('view-season','SeasonController@viewSeason');
    Route::get('edit-season/{id}','SeasonController@editSeason');
    Route::post('edit-season-data','SeasonController@editSeasonData');
    Route::get('change-season-status/{id}','SeasonController@changeStatus');

    //FREE SELLER PERIOD
    Route::get('free-seller-form','FreeSellerPeriod@viewSellers');
    Route::post('save-free-seller-period','FreeSellerPeriod@saveFreeSellerPeriod');
    Route::get('view-free-seller-period','FreeSellerPeriod@viewFreeSellerPeriod');
    Route::get('edit-free-seller-period/{id}','FreeSellerPeriod@editFreeSellerPeriod');
    Route::post('edit-free-seller-period-data','FreeSellerPeriod@editFreeSellerPeriodData');
    Route::get('delete-free-seller-period/{id}','FreeSellerPeriod@deleteFreeSellerPeriod');



});

Route::group([ 'prefix' => 'user' ], function() {
   // Route::post('login', 'User_Controller@loginForm');
});
