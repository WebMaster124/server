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


//Route::group([ 'prefix' => 'shipping' ], function() {
//   Route::get('/shipping', 'ShippingController@index');
//});
Route::get('verifyemail', 'ShippingController@verifyEmail');
Route::get('shipping', 'ShippingController@getShippingResult');
Route::get('paywithpaypal/{amount}/{order}', array('as' => 'addmoney.paywithpaypal','uses' => 'AddMoneyController@payWithPaypal',));
Route::post('paypal', array('as' => 'addmoney.paypal','uses' => 'AddMoneyController@postPaymentWithpaypal',));
Route::get('paypal', array('as' => 'payment.status','uses' => 'AddMoneyController@getPaymentStatus',));
Route::get('paypalresponse', array('as' => 'payment.result','uses' => 'AddMoneyController@getPaymentResult',));
//Route::post('placeorder', array('as' => 'Checkout.placeOrder','uses' => 'CheckoutController@placeOrder',));
Route::post('placeorder','AddMoneyController@placeOrder');



//Route::get('sellerinvoice','SellerController@monthlyInvoicePayment');
//Route::get('view-seller-payment-history','SellerController@viewSellerPaymentHistory');

//Route::get('/admin', 'User_Controller@notification');
Route::group(['prefix'=>'admin','middleware' => 'preventBackHistory'],function() {

//Route::get('dashboard','SellerController@monthlyInvoicePayment');
Route::get('sellerinvoice','SellerController@monthlyInvoicePayment');
    //USER MANAGEMENT
		Route::get('users/export/{type}', 'User_Controller@export');
		Route::get('users/exportc/{type}', 'User_Controller@exportc');

    Route::get('view-notification/{module}', 'User_Controller@notification');
    Route::get('login', 'User_Controller@loginForm');

    Route::post('logincode', 'User_Controller@login');
    Route::get('dashboard', 'User_Controller@index');
    Route::get('logout', 'User_Controller@logout');
    Route::get('dashboard', 'User_Controller@index');
    Route::get('view-buyers', 'User_Controller@viewBuyers');
    Route::get('view-buyers-log', 'User_Controller@viewBuyersLog');
    Route::get('view-sellers', 'User_Controller@viewSellers');
    Route::get('buyer-details/{id}', 'User_Controller@viewBuyerDetails');
    Route::get('seller-details/{id}', 'User_Controller@viewSellerDetails');
    Route::get('change-user-status/{id}/{status}/{slug}', 'User_Controller@changeUserStatus');
    Route::get('inactive-reason/{id}/{status}/{slug}', 'User_Controller@ViewInactiveReasonForm');
    Route::post('inactive-user-status','User_Controller@inactiveUserStatus');
    Route::get('delete-users/{id}','User_Controller@deleteUsers');
    Route::get('user-warning/{id}','User_Controller@userWarning');
    Route::post('send-warning-mail','User_Controller@SendWarningMail');
    Route::get('ChangePassword', 'User_Controller@ChangePassword');
    Route::post('UpdatePassword', 'User_Controller@updatePassword');

    
    //EXPORT FUNCTIONS
    Route::get('season/export/{type}', 'SeasonController@export');
    
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
	
	
	Route::get('get_parent_category','CategoryController@getParentCategory');



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
    Route::get('view-relist-product','ProductController@viewRelistProduct');
    Route::get('change-product-status/{id}/{status}/{slug}','ProductController@changeProductStatus');
    Route::get('view-product-details/{id}','ProductController@viewProductDetails');
    Route::get('deactive-product-form/{id}/{status}/{slag}','ProductController@viewDeactiveReasonForm');
    Route::post('deactive-product-status','ProductController@deactiveProductStatus');
    Route::post('approve-bulk-products','ProductController@approveBulkProductStatus');
        Route::post('reject-bulk-products','ProductController@rejectBulkProductStatus');

    //DASHBOARD MANAGEMENTS
    Route::get('seller-charge-by-auction/{id?}/{year?}/{month?}/{start_date?}/{end_date?}','ProductController@sellerChargeByAuctionType');
    Route::get('seller-charge-by-fix/{id?}/{year?}/{month?}/{start_date?}/{end_date?}','ProductController@sellerChargeByFixPrice');
    Route::get('cash-sale-details','ProductController@cashSaleDetails');
    Route::get('paypal-sale-details','ProductController@paypalSaleDetails');
    Route::get('item-listed-by-category','ProductController@ItemListedByCategory');
    Route::get('item-sale-by-category','ProductController@saleByCategory');
    Route::get('delivered-category-item/{id?}/{year?}/{month?}/{start_date?}/{end_date?}','ProductController@deliveredCategoryItem');
    Route::get('item-by-auction/{id?}/{year?}/{month?}/{start_date?}/{end_date?}','ProductController@auctionCategoryItem');
    Route::get('item-by-fix/{id?}/{year?}/{month?}/{start_date?}/{end_date?}','ProductController@fixCategoryItem');
    Route::get('return-product-list','ProductController@returnProductList');

    //FAQ MANAGEMENT
    Route::get('faq-form','FaqController@faqForm');
    Route::post('save-faq','FaqController@saveFaq');
    Route::get('view-faq','FaqController@viewFaq');
    Route::get('edit-faq/{id}','FaqController@editFaq');
    Route::post('edit-faq-data','FaqController@editFaqData');
    Route::get('delete-faq/{id}','FaqController@deleteFaq');
    
    
    //FAQ CATEGORY MANAGEMENT
    Route::get('faq-category-form','FaqController@faqCategoryForm');
    Route::post('save-faq-category','FaqController@saveFaqCategory');
    Route::get('view-faq-category','FaqController@viewFaqCategory');
    Route::get('edit-faq-category/{id}', 'FaqController@editFaqCategory');
    Route::post('edit-faq-category-data', 'FaqController@editFaqCategoryData');
    Route::get('delete-faq-category/{id}', 'FaqController@deleteFaqCategory');
    Route::get('view-faq-category-detail/{id}', 'FaqController@viewFaqCategoryDetails');

    //FAQ BANNER MANAGEMENT
    Route::get('faq-banner-form','FaqController@bannerForm');
    Route::post('edit-faq-banner','FaqController@editFaqBanner');
    
    
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
    Route::get('relist-management','SettingController@autoRelistProduct');
    Route::post('relist-management-form','SettingController@autoRelistForm');
    Route::get('buyer-invoice','SettingController@buyerInvoice');
    Route::post('buyer-invoice-form','SettingController@buyerInvoiceForm');
    Route::get('contact','SettingController@contactUs');
    Route::post('contact-form','SettingController@contactUsForm');
    
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
    
    Route::post('preview-seller-payment-history','SellerController@previewSellerPaymentHistory');
    

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
    
    
    //FEATURE MANAGEMENT
    Route::get('feature-form','FeatureController@featureForm');
    Route::post('save-feature','FeatureController@saveFeature');
    Route::get('view-feature','FeatureController@viewFeature');
    Route::get('edit-feature/{id}','FeatureController@editFeature');
    Route::post('edit-feature-data','FeatureController@editFeatureData');
    Route::get('change-feature-status/{id}','FeatureController@changeStatus');

    //FREE SELLER PERIOD
    Route::get('free-seller-form','FreeSellerPeriod@viewSellers');
    Route::post('save-free-seller-period','FreeSellerPeriod@saveFreeSellerPeriod');
    Route::get('view-free-seller-period','FreeSellerPeriod@viewFreeSellerPeriod');
    Route::get('edit-free-seller-period/{id}','FreeSellerPeriod@editFreeSellerPeriod');
    Route::post('edit-free-seller-period-data','FreeSellerPeriod@editFreeSellerPeriodData');
    Route::get('delete-free-seller-period/{id}','FreeSellerPeriod@deleteFreeSellerPeriod');
    
    
    //TERMS AND CONDITIONS
        Route::get('terms-form','TermsController@viewTerms');
    Route::post('save-terms-data','TermsController@saveTermsData');
    Route::get('view-free-seller-period','FreeSellerPeriod@viewFreeSellerPeriod');
//    Route::post('download-pdf','TermsController@viewpdf');
    Route::get('download-pdf/{id}/{id1}','TermsController@viewpdf');
    Route::post('edit-free-seller-period-data','FreeSellerPeriod@editFreeSellerPeriodData');
    Route::get('delete-free-seller-period/{id}','FreeSellerPeriod@deleteFreeSellerPeriod');

    //Seller Invoice Setting
    Route::get('view-invoice-form','SellerController@viewInvoiceForm');
    Route::post('save-invoice-form','SellerController@saveInvoiceForm');
    Route::get('view-invoice-setting','SellerController@viewInvoiceSetting');
    Route::get('edit-invoice-form/{id}','SellerController@editInvoiceForm');
    Route::post('edit-invoice-form-data','SellerController@editInvoiceFormData');
    Route::get('delete-invoice-setting/{id}','FreeSellerPeriod@deleteInvoiceSetting');
});

Route::group([ 'prefix' => 'user' ], function() {
   // Route::post('login', 'User_Controller@loginForm');
});

//define('SITEURL','http://www.onlinetnt.com');
