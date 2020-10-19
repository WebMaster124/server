<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//CART MANAGEMENT
Route::group(['prefix'=>'cart'],function(){
    Route::post('add-to-cart','AddToCartController@saveCart');
    Route::post('view-cart','AddToCartController@viewCart');
    Route::post('update-cart','AddToCartController@updateCart');
    Route::post('remove-cart','AddToCartController@removeCart');
    Route::post('view-about-cart','AboutCartController@viewAboutCartApi');
    Route::post('basket-email-notification','AddToCartController@basketEmailNotification');
});

//WISHLIST MANAGEMENT
Route::group(['prefix'=>'wishlist'],function(){
    Route::post('add-to-wishlist','AddToWishlistController@saveWishlist');
    Route::post('view-wishlist','AddToWishlistController@viewWishlist');
    Route::post('remove-wishlist','AddToWishlistController@removeWishlist');
    Route::post('update-wishlist-note','AddToWishlistController@updateNote');
});

//CATEGORY MANAGEMENT
Route::group(['prefix'=>'category'],function(){
    Route::post('view-category','CategoryController@viewCategory');
    Route::post('view-menu-category','CategoryController@viewMenuCategory');
    Route::post('view-parent-category','CategoryController@viewParentCategoryAPI');
    Route::post('view-category-site-map','CategoryController@viewCategorySiteMap');

});

//BRAND MANAGEMENT
Route::group(['prefix'=>'brand'],function(){
    Route::post('view-brand','BrandController@viewBrandApi');
 });

//SETTYPE MANAGEMENT
Route::group(['prefix'=>'settype'],function(){
    Route::post('view-settype','SetTypeController@viewSetTypeApi');
});

//BANNER MANAGEMENT
Route::group(['prefix'=>'banner'],function(){
    Route::post('view-banner','BannerController@viewBannerApi');
});

//FAQ MANAGEMENT
Route::group(['prefix'=>'faq',''],function(){
    Route::post('view-faq','FaqController@viewFaqApi');
    Route::post('view-faq-category','FaqController@viewFaqCategoryApi');
    Route::post('view-faq-banner','FaqController@viewFaqBannerApi');
});

//PRODUCT MANAGEMENT
Route::group(['prefix'=>'product'],function(){

    //PRODUCT MANAGEMENT
    Route::post('save-product','ProductAPIController@saveProduct');
    Route::post('view-product','ProductAPIController@viewProduct');
    Route::post('edit-product','ProductAPIController@editProduct');
    Route::post('delete-product','ProductAPIController@deleteProduct');
    Route::post('undelete-product','ProductAPIController@unDeleteProduct');
    Route::post('auto-save-product','ProductAPIController@autoSaveProduct');
    
    Route::post('relist-product','ProductAPIController@relistProduct');

    //RECENTLY VIEW
    Route::post('add-recently-view','ProductAPIController@addRecentlyView');
    Route::post('recently-viewed-items','ProductAPIController@recentlyViewedItems');
    //WATCHED ITEM
    Route::post('watched-items','ProductAPIController@watchedItems');
    //VIEW PER HOUR
    Route::post('view-per-hour','ProductAPIController@viewPerHour');
    //LATEST TRENDING
    Route::post('latest-trending','ProductAPIController@latestTrending');
    //DAILY DEALS
    Route::post('daily-deals','ProductAPIController@dailyDeals');
    //COMPARE PRODUCT
    Route::post('compare-product','ProductAPIController@compareProducts');
    //CATEGORY WISH PRODUCT LISTING
    Route::post('category-product-list','ProductAPIController@categoryProductList');
    //SPECIFICATION
    Route::post('view-specification','SpecificationController@viewSpecificationAPI');
    Route::post('view-color','SpecificationController@viewColorAPI');
    //PRODUCT DRAFT
    Route::post('view-product-draft','ProductAPIController@viewProductDraft');
    //FILTER SPECIFICATION
    Route::post('filter-specification','ProductAPIController@filterSpecification');
    //LIST COUNT
    Route::post('list-count','ProductAPIController@listCount');
    Route::post('list-address','ProductAPIController@listAddress');
    //VIEW PRODUCT FOR EDIT
    Route::post('view-product-edit','ProductAPIController@viewProductForEdit');
    Route::post('reduce-image','ProductAPIController@reduceImage');
    //RECOMMENDED FOR YOU
    Route::post('recommended-for-you','ProductAPIController@recommendedForYou');
    // ADD PER HOUR
    Route::post('add-per-hour','ProductAPIController@addPerHour');
    // CHECK PRODUCT IMAGE
    Route::post('check-image','ProductAPIController@CheckImage');
    // CHECK BUSINESS ADDRESS
    Route::post('check-address','ProductAPIController@checkBusinessAddress');
    //LATEST DRAFT
    Route::post('view-latest-draft','ProductAPIController@viewLatestDraft');
    //DELETE LATEST DRAFT
    Route::post('delete-latest-draft','ProductAPIController@DeleteLatestDraft');

    //PRODUCT SCHEDULE
    Route::post('product-schedule','ProductAPIController@AutoScheduleProduct');

    //NEW PRODUCT LISTING
    Route::post('new-products','ProductAPIController@newProducts');

});

//FEEDBACK MANAGEMENT
Route::group(['prefix'=>'feedback'],function (){
    Route::post('save-feedback','FeedbackController@saveFeedBackApi');
    Route::post('view-feedback','FeedbackController@viewFeedBackApi');
    Route::post('reply-feedback','FeedbackController@replyFeedback');
    Route::post('view-feedback-rating','FeedbackController@viewFeedbackRating');
    Route::post('reply-feedback-list','FeedbackController@replyFeedbackList');
    Route::post('view-seller-rating','FeedbackController@viewSellerRating');
});
//PRODUCT RATING MANAGEMENT
Route::group(['prefix'=>'rating'],function (){
    Route::post('save-rating','ProductRateController@saveProductRating');
    Route::post('save-rating_site','ProductRateController@saveSiteRating');
    Route::post('check_count','ProductRateController@check_count');
	
    Route::post('view-product-rating','ProductRateController@viewProductRating');
});
//USER MANAGEMENT
Route::group(['prefix'=>'user'],function(){
    Route::post('user-policy','UserAPIController@policyDoc');
    Route::post('buyer-registration','UserAPIController@registrationBuyer');
    Route::post('resend-email','UserAPIController@resendOTP');
    Route::post('check-otp','UserAPIController@checkOTP');
    Route::post('seller-registration','UserAPIController@registrationSeller');
    Route::post('login','UserAPIController@login');
    Route::post('forgot-password','UserAPIController@forgetPassword');
    Route::post('set-password','UserAPIController@setPassword');
    Route::post('view-profile','UserAPIController@viewProfile');
    Route::post('update-profile','UserAPIController@updateProfile');
    Route::post('change-password','UserAPIController@changePassword');
    Route::post('update-seller-profile','UserAPIController@updateSellerProfile');
    Route::post('change-username','UserAPIController@changeUserName');
    Route::post('contact-us','UserAPIController@ContactUs');
    Route::post('convert-buyer-to-seller','UserAPIController@ConvertBuyerToSeller');
    Route::post('edit-business-info','UserAPIController@editBusinessInfo');
    Route::post('edit-business-info-array','UserAPIController@editBusinessInfoArray');
    Route::post('get_country','UserAPIController@get_country');
    Route::post('get_state','UserAPIController@get_state');
   Route::post('edit-business-address','UserAPIController@edit_address');

});

//SAVE SELLER MANAGEMENT
Route::group(['prefix'=>'seller'],function (){
    Route::post('save-seller','SellerController@saveSeller');
    Route::post('view-seller','SellerController@viewSeller');
    Route::post('remove-seller','SellerController@removeSeller');
    Route::post('contact-seller','SellerController@contactSeller');
    Route::post('view-followers','SellerController@viewFollower');
    Route::post('view-following','SellerController@viewFollowing');

    Route::post('view-active-product','SellerController@viewActiveProduct');
    Route::post('view-sold-product','SellerController@viewSoldProduct');
    Route::post('view-product-purchase-user-list','SellerController@viewProductPurchaseUserList');

    Route::post('view-deleted-product','SellerController@viewDeleteProduct');
    Route::post('view-unsold-product','SellerController@viewUnSoldProduct');
    Route::post('view-cancel-product','SellerController@viewCancelProduct');
    Route::post('view-cancel-product-user','SellerController@viewCancelProductUserList');

    Route::post('sell-similar','SellerController@sellSimilar');
    Route::post('end-product','SellerController@viewEndProducts');
    Route::post('seller-payment-history','SellerController@sellerPaymentHistory');
    Route::post('send-seller-payment-invoice','SellerController@sendSellerPaymentInvoice');
    Route::get('MeargeImages','SellerController@MeargeImages');
    Route::post('cron-send-seller-payment-invoice','SellerController@cronSendSellerInvoice');
    Route::post('store-seller-payment-details','SellerController@storeSellerPaymentDetails');
 });

//SEARCH MANAGEMENT
Route::group(['prefix'=>'search'],function (){
    Route::post('advance-search','SearchController@advanceSearch');
    Route::post('home-search','SearchController@homeSearch');
    Route::post('save-search','SearchController@saveSearch');
    Route::post('edit-search','SearchController@editSearch');
    Route::post('view-search','SearchController@viewSearch');
    Route::post('update-search','SearchController@updateSearch');
    Route::post('delete-search','SearchController@deleteSearch');
    Route::post('view-search-product','SearchController@viewSearchProduct');
});

//COUPON CODE MANAGEMENT
Route::group(['prefix'=>'coupon'],function (){
    Route::post('apply-coupon-code','CouponController@applyCouponCode');
    Route::post('remove-coupon-code','CouponController@removeCouponCode');
});

//SHIP ADDRESS MANAGEMENT
Route::group(['prefix'=>'ship-address'],function (){
    Route::post('save-ship-address','ShipAddressAPIController@addShipAddress');
    Route::post('view-ship-address','ShipAddressAPIController@viewShipAddress');
    Route::post('update-ship-address','ShipAddressAPIController@updateShipAddress');
    Route::post('delete-ship-address','ShipAddressAPIController@deleteShipAddress');
    Route::post('make-primary-address','ShipAddressAPIController@makePrimary');
});

//CHECK OUT
Route::group(['prefix'=>'checkout'],function (){
    Route::post('create','ShippingController@create');
    Route::post('check-out-info','CheckoutController@checkOutInfo');
    Route::post('place-order','CheckoutController@placeOrder');
    Route::post('place-PaypalOrderorder','CheckoutController@placePaypalOrder');
    Route::post('change-order-status','CheckoutController@changeOrderStatus');
    Route::post('view-purchase-products','CheckoutController@viewPurchaseProduct');
    Route::post('change-order-product-status','CheckoutController@changeOrderProductStatus');
    Route::post('store-payment-details','CheckoutController@storePaypalPaymentDetails');
});

//PURCHASE HISTORY
Route::group(['prefix'=>'purchase'],function (){
    Route::post('purchase-history','CheckoutController@viewPurchaseHistory');
    Route::post('purchase-details','CheckoutController@viewPurchaseHistoryDetails');
    Route::post('cancel-order','CheckoutController@cancelOrder');
    Route::post('return-order','CheckoutController@returnOrder');
    Route::post('view-cancel-order','CheckoutController@viewCancelOrder');
 });

//HOME
Route::group(['prefix'=>'home'],function (){
    
    Route::post('view-advertise','AdvertisementController@viewAdvertiseApi');
    Route::post('view-blocks','ProductAPIController@viewBlocks');
    Route::post('under-fifty','ProductAPIController@underFiftyProduct');
    Route::post('check-season-deal','SeasonController@checkSeasonDeal');
    Route::post('dashboard','User_Controller@dashboard');
});

//PRODUCT REPORT
Route::group(['prefix'=>'report'],function (){
    Route::post('product-report','ReportProductController@productReport');
});

//MESSAGE CONTROLLER
Route::group(['prefix'=>'message'],function(){
    Route::post('send-message','MessageController@sendMessage');
    Route::post('view-messages','MessageController@viewMessages');
    Route::post('message-list','MessageController@viewMessageList');
    Route::post('unread-msg-count','MessageController@totalUnreadMessage');
    Route::post('search-message','MessageController@searchMessage');
});

//RESOLUTION CENTER
Route::group(['prefix'=>'resolution-center'],function(){
    Route::post('add-resolution-center','ResolutionCenterController@addResolutionCenter');
    Route::post('breadcrumb','ResolutionCenterController@breadcrumb');
    Route::post('view-resolution-thread-center','ResolutionCenterController@viewResolutionCenterThreadApi');
    Route::post('view-resolution-products','ResolutionCenterController@viewResolutionProducts');
    Route::post('reply-resolution-center','ResolutionCenterController@replyResolutionCenterApi');
    Route::post('change-ticket-status','ResolutionCenterController@changeTicketStatus');
});

//SETTING
Route::group(['prefix'=>'setting'],function(){
    Route::post('setting','SettingController@viewSetting');
    Route::post('seller-fees','SettingController@viewSellerFees');
    Route::post('view-punchline','SettingController@viewPunchLine');
    Route::get('dateFun','SettingController@dateFun');
    Route::post('setting-data','SettingController@settingDataAPI');
});

//DASHBOARD
Route::group(['prefix'=>'dashboard'],function(){
    Route::post('user-dashboard','SellerController@userDashboard');
});

//BID CONTROLLER
Route::group(['prefix'=>'bid'],function(){
    Route::post('place-bid','BidController@placeBid');
    Route::post('view-last-bid','BidController@viewLastBid');
    Route::post('view-bid-history','BidController@viewBidHistory');
    Route::post('view-own-bids','BidController@viewOwnBids');
    Route::post('view-winning-bids','BidController@viewWinningBids');
    Route::post('view-not-winning-bids','BidController@viewNotWinningBids');
    Route::post('declare-winner','BidController@declareWinner');
});

//MAKE OFFER CONTROLLER
Route::group(['prefix'=>'make-offer'],function(){
    Route::post('make-offer','MakeOfferController@makeOffer');
    Route::post('offer-status','MakeOfferController@offerStatus');
    Route::post('view-my-offers','MakeOfferController@viewMyOffers');
    Route::post('seller-view-offers','MakeOfferController@sellerViewOffers');
    Route::post('decline-offer-after-two-days','MakeOfferController@AutoDeclineAfterTwoDays');
});

//PAYPAL
Route::group(['prefix'=>'pay'],function(){
    Route::get('paypal-details','PaypalController@viewPayPalDetails');
    Route::get('payment-details','PaypalController@paymentDetails');
    Route::post('paypal','PaypalController@callPaypalApi');
    Route::post('paypal-payment-detail','PaypalController@PaypalPaymentDetail');
    Route::post('login-with-paypal','PaypalController@loginWithPaypal');
    Route::get('email-form','PaypalController@emailForm');
    Route::post('verify-paypal-email','PaypalController@verifyPaypalEmail');
    Route::post('seller-paypal-payment','PaypalController@sellerPaypalPaymentApi');
});

//CMS MANAGEMENT
Route::group(['prefix'=>'cms'],function(){
    Route::post('view-cms','CMSController@viewCmsAPI');
});
//ANNOUNCEMENT MANAGEMENT
Route::group(['prefix'=>'announcement'],function(){
    Route::post('view-announcements','AnnouncementController@viewAnnouncementAPI');
    Route::post('view-announcements-popup','AnnouncementController@viewAnnouncementPopupAPI');
    Route::post('unread-announcement','AnnouncementController@unreadAnnouncement');
});

//CONTACT MANAGEMENT
Route::group(['prefix'=>'contact'],function(){
    Route::post('view-contact','SettingController@viewContactApi');
});



