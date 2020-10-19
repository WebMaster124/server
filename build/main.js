webpackJsonp([61],{

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/view-cart/view-cart.module": [
		696,
		60
	],
	"../pages/category/parent-category/parent-category.module": [
		697,
		7
	],
	"../pages/category/shop-by-departments/shop-by-departments.module": [
		698,
		59
	],
	"../pages/category/sub-category/sub-category.module": [
		744,
		6
	],
	"../pages/cms/about-us/about-us.module": [
		699,
		58
	],
	"../pages/cms/contact-us/contact-us.module": [
		700,
		57
	],
	"../pages/cms/seller-agreement/seller-agreement.module": [
		701,
		56
	],
	"../pages/cms/seller-privacy/seller-privacy.module": [
		702,
		55
	],
	"../pages/cms/site-map/site-map.module": [
		703,
		54
	],
	"../pages/cms/user-agreement/user-agreement.module": [
		704,
		53
	],
	"../pages/cms/user-privacy/user-privacy.module": [
		705,
		52
	],
	"../pages/faq/faq-listing/faq-listing.module": [
		706,
		51
	],
	"../pages/faq/faq.module": [
		707,
		50
	],
	"../pages/faq/leave-feedback-seller/leave-feedback-seller.module": [
		708,
		49
	],
	"../pages/faq/leave-feedback/leave-feedback.module": [
		709,
		48
	],
	"../pages/faq/leave-product-rating/leave-product-rating.module": [
		710,
		47
	],
	"../pages/home/advance-search-data/advance-search-data.module": [
		711,
		5
	],
	"../pages/home/advance-search/advance-search.module": [
		712,
		46
	],
	"../pages/home/all-item/all-item.module": [
		745,
		45
	],
	"../pages/home/home.module": [
		750,
		44
	],
	"../pages/home/notification-details/notification-details.module": [
		713,
		21
	],
	"../pages/home/search-data/search-data.module": [
		714,
		4
	],
	"../pages/login/business-details/business-details.module": [
		715,
		43
	],
	"../pages/login/check-otp/check-otp.module": [
		716,
		42
	],
	"../pages/login/confirm-account/confirm-account.module": [
		717,
		41
	],
	"../pages/login/login.module": [
		748,
		22
	],
	"../pages/login/reset-password/reset-password.module": [
		718,
		40
	],
	"../pages/login/security-measure/security-measure.module": [
		719,
		39
	],
	"../pages/login/set-password/set-password.module": [
		720,
		38
	],
	"../pages/modal/businessinfo-edit/businessinfo-edit.module": [
		721,
		37
	],
	"../pages/modal/modal.module": [
		723,
		36
	],
	"../pages/modal/page-advertisement/page-advertisement.module": [
		722,
		35
	],
	"../pages/product/add-product/add-product.module": [
		754,
		10
	],
	"../pages/product/added-seller-info/added-seller-info.module": [
		746,
		34
	],
	"../pages/product/bid-history/bid-history.module": [
		724,
		20
	],
	"../pages/product/check-out/check-out.module": [
		751,
		33
	],
	"../pages/product/compare-items/compare-items.module": [
		725,
		19
	],
	"../pages/product/complete-list/complete-list.module": [
		755,
		9
	],
	"../pages/product/draft-listing/draft-listing.module": [
		726,
		32
	],
	"../pages/product/edit-product/edit-product.module": [
		753,
		8
	],
	"../pages/product/order-detail/order-detail.module": [
		727,
		18
	],
	"../pages/product/preview-product/preview-product.module": [
		728,
		17
	],
	"../pages/product/product-details/product-details.module": [
		752,
		11
	],
	"../pages/product/product-list/product-list.module": [
		730,
		31
	],
	"../pages/product/report-item/report-item.module": [
		729,
		30
	],
	"../pages/product/view-review/view-review.module": [
		731,
		3
	],
	"../pages/seller-my-account/add-note-wishlist/add-note-wishlist.module": [
		732,
		29
	],
	"../pages/seller-my-account/buyer-profile/buyer-profile.module": [
		747,
		28
	],
	"../pages/seller-my-account/contact-seller/contact-seller.module": [
		733,
		27
	],
	"../pages/seller-my-account/fees-calculator/fees-calculator.module": [
		734,
		16
	],
	"../pages/seller-my-account/leave-message/leave-message.module": [
		735,
		15
	],
	"../pages/seller-my-account/personalizedfeedback/personalizedfeedback.module": [
		736,
		2
	],
	"../pages/seller-my-account/replay-resolution/replay-resolution.module": [
		737,
		14
	],
	"../pages/seller-my-account/seller-invoice-details/seller-invoice-details.module": [
		738,
		13
	],
	"../pages/seller-my-account/seller-my-account.module": [
		756,
		1
	],
	"../pages/seller-my-account/user-list/user-list.module": [
		739,
		26
	],
	"../pages/seller-my-account/user-profile/user-profile.module": [
		749,
		12
	],
	"../pages/seller-my-account/viewpurchase-userlist/viewpurchase-userlist.module": [
		740,
		0
	],
	"../pages/sellerpayment-success/sellerpayment-success.module": [
		741,
		25
	],
	"../pages/show-error/show-error.module": [
		742,
		24
	],
	"../pages/thankyou/thankyou.module": [
		743,
		23
		
	], 
        "../pages/product/product-success/product-success.module": [
		757,
		61
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_page_footer_page__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_conponent_notification_conponent__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__footer_page_footer_page__["a" /* FooterPageComponent */],
                __WEBPACK_IMPORTED_MODULE_2__notification_conponent_notification_conponent__["a" /* NotificationConponentComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__footer_page_footer_page__["a" /* FooterPageComponent */],
                __WEBPACK_IMPORTED_MODULE_2__notification_conponent_notification_conponent__["a" /* NotificationConponentComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the PhotoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PhotoProvider = /** @class */ (function () {
    function PhotoProvider(file, _CAMERA) {
        this.file = file;
        this._CAMERA = _CAMERA;
    }
    PhotoProvider.prototype.selectImage = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cameraOptions = {
                sourceType: _this._CAMERA.PictureSourceType.PHOTOLIBRARY,
                destinationType: _this._CAMERA.DestinationType.DATA_URL,
                quality: 100,
                targetWidth: 1024,
                targetHeight: 1024,
                encodingType: _this._CAMERA.EncodingType.JPEG,
                correctOrientation: true,
                allowEdit: true
            };
            _this._CAMERA.getPicture(cameraOptions).then(function (data) {
                resolve('data:image/jpeg;base64,' + data);
            });
        });
    };
    PhotoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], PhotoProvider);
    return PhotoProvider;
}());

//# sourceMappingURL=photo.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(367);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng4_intl_phone__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ErrorHandler__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_components_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng4_geoautocomplete__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_photo_photo__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_analytics__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_keyboard__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 /*IonicErrorHandler*/
















//import { UniqueDeviceID } from '@ionic-native/unique-device-id';
//import { Market } from '@ionic-native/market';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng4_intl_phone__["a" /* InternationalPhoneModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    iconMode: 'md',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    pageTransition: 'ios-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/cart/view-cart/view-cart.module#ViewCartPageModule', name: 'ViewCartPage', segment: 'view-cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/parent-category/parent-category.module#ParentCategoryPageModule', name: 'ParentCategoryPage', segment: 'b/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/shop-by-departments/shop-by-departments.module#ShopByDepartmentsPageModule', name: 'ShopByDepartmentsPage', segment: 'shop-by-departments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cms/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'CMS/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cms/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cms/seller-agreement/seller-agreement.module#SellerAgreementPageModule', name: 'SellerAgreementPage', segment: 'seller-agreement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cms/seller-privacy/seller-privacy.module#SellerPrivacyPageModule', name: 'SellerPrivacyPage', segment: 'seller-privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cms/site-map/site-map.module#SiteMapPageModule', name: 'SiteMapPage', segment: 'site-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cms/user-agreement/user-agreement.module#UserAgreementPageModule', name: 'UserAgreementPage', segment: 'user-agreement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cms/user-privacy/user-privacy.module#UserPrivacyPageModule', name: 'UserPrivacyPage', segment: 'user-privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq-listing/faq-listing.module#FaqListingPageModule', name: 'FaqListingPage', segment: 'faq/listing/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/leave-feedback-seller/leave-feedback-seller.module#LeaveFeedbackSellerPageModule', name: 'LeaveFeedbackSellerPage', segment: 'reply-review/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/leave-feedback/leave-feedback.module#LeaveFeedbackPageModule', name: 'LeaveFeedbackPage', segment: 'write-feedback/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/leave-product-rating/leave-product-rating.module#LeaveProductRatingPageModule', name: 'LeaveProductRatingPage', segment: 'write-review/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/advance-search-data/advance-search-data.module#AdvanceSearchDataPageModule', name: 'AdvanceSearchDataPage', segment: 'srch/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/advance-search/advance-search.module#AdvanceSearchPageModule', name: 'AdvanceSearchPage', segment: 'advance-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/notification-details/notification-details.module#NotificationDetailsPageModule', name: 'NotificationDetailsPage', segment: 'notification/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/search-data/search-data.module#SearchDataPageModule', name: 'SearchDataPage', segment: 'Search/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/business-details/business-details.module#BusinessDetailsPageModule', name: 'BusinessDetailsPage', segment: 'USR-Register/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/check-otp/check-otp.module#CheckOtpPageModule', name: 'CheckOtpPage', segment: 'check-otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/confirm-account/confirm-account.module#ConfirmAccountPageModule', name: 'ConfirmAccountPage', segment: 'confirm-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/security-measure/security-measure.module#SecurityMeasurePageModule', name: 'SecurityMeasurePage', segment: 'security-measure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/set-password/set-password.module#SetPasswordPageModule', name: 'SetPasswordPage', segment: 'set-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/businessinfo-edit/businessinfo-edit.module#BusinessinfoEditPageModule', name: 'BusinessinfoEditPage', segment: 'businessinfo-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/page-advertisement/page-advertisement.module#PageAdvertisementPageModule', name: 'PageAdvertisementPage', segment: 'page-advertisement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/bid-history/bid-history.module#BidHistoryPageModule', name: 'BidHistoryPage', segment: 'viewbids/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/compare-items/compare-items.module#CompareItemsPageModule', name: 'CompareList', segment: 'SubmitActionCompareProduct/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/draft-listing/draft-listing.module#DraftListingPageModule', name: 'DraftListingPage', segment: 'draft-listing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/order-detail/order-detail.module#OrderDetailPageModule', name: 'OrderDetailPage', segment: 'order-history/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/preview-product/preview-product.module#PreviewProductPageModule', name: 'PreviewProductPage', segment: 'previewProduct', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/report-item/report-item.module#ReportItemPageModule', name: 'ReportItemPage', segment: 'report-item/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product-list/product-list.module#ProductListPageModule', name: 'ProductListPage', segment: 'productlist/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/view-review/view-review.module#ViewReviewPageModule', name: 'ViewReviewPage', segment: 'product-reviews/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller-my-account/add-note-wishlist/add-note-wishlist.module#AddNoteWishlistPageModule', name: 'AddNoteWishlist', segment: 'SubmitAction.BulkAddNote/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller-my-account/contact-seller/contact-seller.module#ContactSellerPageModule', name: 'ContactSellerPage', segment: 'ContactUser/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller-my-account/fees-calculator/fees-calculator.module#FeesCalculatorPageModule', name: 'FeesCalculatorPage', segment: 'fees-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller-my-account/leave-message/leave-message.module#LeaveMessagePageModule', name: 'LeaveMessagePage', segment: 'ViewMessageDetail/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller-my-account/personalizedfeedback/personalizedfeedback.module#PersonalizedfeedbackPageModule', name: 'PersonalizedfeedbackPage', segment: 'ViewPersonalizedFeedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller-my-account/replay-resolution/replay-resolution.module#ReplayResolutionPageModule', name: 'ReplayResolutionPage', segment: 'ViewThreadDetail/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller-my-account/seller-invoice-details/seller-invoice-details.module#SellerInvoiceDetailsPageModule', name: 'SellerInvoiceDetailsPage', segment: 'sellerinvoiceDetails/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller-my-account/user-list/user-list.module#UserListPageModule', name: 'UserListPage', segment: 'offerList/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller-my-account/viewpurchase-userlist/viewpurchase-userlist.module#ViewpurchaseUserlistPageModule', name: 'ViewpurchaseUserlistPage', segment: 'purchaseusrList/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sellerpayment-success/sellerpayment-success.module#SellerpaymentSuccessPageModule', name: 'SellerpaymentSuccessPage', segment: 'paymentsuccess/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-error/show-error.module#ShowErrorPageModule', name: 'ShowErrorPage', segment: 'e/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thankyou/thankyou.module#ThankyouPageModule', name: 'ThankyouPage', segment: 'ordersuccess/:id', priority: 'low', defaultHistory: [] },
						{ loadChildren: '../pages/category/sub-category/sub-category.module#SubCategoryPageModule', name: 'SubCategoryPage', segment: 'c/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/all-item/all-item.module#AllItemPageModule', name: 'AllItemPage', segment: 'GetAll/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/added-seller-info/added-seller-info.module#AddedSellerInfoPageModule', name: 'AddedSellerInfoPage', segment: 'seller-business-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller-my-account/buyer-profile/buyer-profile.module#BuyerProfilePageModule', name: 'BuyerProfilePage', segment: 'Buyerprofile/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'USR/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller-my-account/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'UserProfile/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/check-out/check-out.module#CheckOutPageModule', name: 'CheckOutPage', segment: 'ReviewOrder/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetails', segment: 'viewItem/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/edit-product/edit-product.module#EditProductPageModule', name: 'EditProduct', segment: 'EditItem&draftId/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/add-product/add-product.module#AddProductPageModule', name: 'AddProductPage', segment: 'add-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product-success/product-success.module#SuccessProductPageModule', name: 'SuccessProductPage', segment: 'product-success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/complete-list/complete-list.module#CompleteListPageModule', name: 'AddProduct', segment: 'completelist/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller-my-account/seller-my-account.module#SellerMyAccountPageModule', name: 'SellerMyAccountPage', segment: 'seller-my-account/:id', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_ng4_geoautocomplete__["a" /* Ng4GeoautocompleteModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_6__services_info__["a" /* InfoService */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_13__providers_photo_photo__["a" /* PhotoProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_keyboard__["a" /* Keyboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_10__ErrorHandler__["a" /* GlobalErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FooterPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterPageComponent = /** @class */ (function () {
    function FooterPageComponent(iab, navCtrl, platform) {
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItemData = null;
        }
        else {
            this.localItemData = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].localItem;
        }
    }
    FooterPageComponent.prototype.ngOnInit = function () {
        var d = new Date();
        this.showYear = d.getFullYear();
    };
    FooterPageComponent.prototype.callCMSPage = function (val) {
        if (val == 'register' || val == "dibdaaPremium" || val == "login") {
            localStorage.setItem('getPageDetails', 'resolutionCenter');
            this.navCtrl.push('LoginPage', {
                id: val
            });
        }
        else if (val == "add-product") {
            this.navCtrl.push('DraftListingPage');
        }
        else if (val == "resolutioncenter" || val == "cookies" || val == "comingsoon" || val == "userprivacy" || val == "useragreement" || val == "security-center" || val == "affiliates" || val == "policies" || val == "announcements" || val == "about-us") {
            this.navCtrl.push('AboutUsPage', {
                id: val
            });
        }
        else if (val == "FaqPage") {
            if (this.navCtrl.getActive().name == "FaqPage") {
                return;
            }
            this.navCtrl.push('FaqPage');
        }
        else if (val == "contactUs") {
            if (this.navCtrl.getActive().name == "ContactUsPage") {
                return;
            }
            this.navCtrl.push('ContactUsPage');
        }
        else if (val == "site-map") {
            if (this.navCtrl.getActive().name == "SiteMapPage") {
                return;
            }
            this.navCtrl.push('SiteMapPage');
        }
        else if (val == "faq-listing") {
            if (this.navCtrl.getActive().name == "FaqListingPage") {
                return;
            }
            this.navCtrl.push('FaqListingPage', {
                id: '7'
            });
        }
    };
    FooterPageComponent.prototype.openURLInBrowser = function (val) {
        var target = "_blank";
        var options = {
            location: 'yes',
            hidden: 'no',
            hardwareback: 'no',
            mediaPlaybackRequiresUserAction: 'no',
        };
        var browser;
        if (val == "Facebook") {
            browser = this.iab.create("https://www.facebook.com/dibdaa/", target, options);
        }
        else if (val == "Instagram") {
            browser = this.iab.create("https://www.instagram.com/dibdaa/", target, options);
        }
        else if (val == "Twitter") {
            browser = this.iab.create("https://twitter.com/dibdaa", target, options);
        }
        else if (val == "LinkedIn") {
            browser = this.iab.create("https://www.linkedin.com/company/dibdaa", target, options);
        }
        browser.on('loadstop').subscribe(function (event) {
        });
    };
    FooterPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer-page',template:/*ion-inline-start:"/var/www/html/src/components/footer-page/footer-page.html"*/'<!-- Generated template for the FooterPageComponent component -->\n<footer class="footer_area pt-lg-4 pb-lg-4">\n  <div class="container">\n    <div class="row">\n      <div class="col-lg-10 col-md-12 col-12">\n        <nav class="navbar navbar-expand-lg navbar-light bg-white">\n          <div class="collapse navbar-collapse productlistingfooter" id="navbarSupportedContent">\n            <ul class="navbar-nav set_fontSize mx-auto">\n              <li class="nav-item">\n                <a class="nav-link" (click)="callCMSPage(\'about-us\')">About Dibdaa</a>\n              </li>\n              <li class="nav-item">\n                <a class="nav-link" (click)="callCMSPage(\'announcements\')">Announcements</a>\n              </li>\n              <li class="nav-item">\n                <a class="nav-link" (click)="callCMSPage(\'FaqPage\')">FAQ</a>\n              </li>\n              <li class="nav-item">\n                <a class="nav-link" (click)="callCMSPage(\'security-center\')">Security Center</a>\n              </li>\n              <li class="nav-item">\n                <a class="nav-link" (click)="callCMSPage(\'resolutioncenter\')">Resolution Center</a>\n              </li>\n              <li class="nav-item">\n                <a class="nav-link" (click)="callCMSPage(\'faq-listing\')">Seller Center</a>\n              </li>\n              <li class="nav-item">\n                <a class="nav-link" (click)="callCMSPage(\'policies\')">Policies</a>\n              </li>\n              <li class="nav-item">\n                <a class="nav-link" (click)="callCMSPage(\'affiliates\')">Affiliates</a>\n              </li>\n              <li class="nav-item">\n                <a class="nav-link" (click)="callCMSPage(\'contactUs\')">Help &amp; Contact</a>\n              </li>\n              <li class="nav-item">\n                <a class="nav-link" (click)="callCMSPage(\'site-map\')">Site Map</a>\n              </li>\n            </ul>\n          </div>\n        </nav>\n        <div class="footer_copyright">\n			<div class="row">\n				<div class="col-lg-8 mt-lg-2 text-lg-right">\n					<h5 class="m-0 p-0">© {{showYear}} Copyright, All rights reserved |  <a (click)="callCMSPage(\'useragreement\')">User Agreement,</a> <a (click)="callCMSPage(\'userprivacy\')">Privacy ,</a><a (click)="callCMSPage(\'cookies\')">Cookies</a></h5>\n				</div>\n				<div class="col-lg-4 text-lg-left">\n					<img src="assets/images/homepage_footerimg.png" />\n				</div>\n			</div>\n        </div>\n      </div>\n      <div class="col-lg-2 col-md-12 col-12">\n        <div class="row m-0" *ngIf="platform.is(\'core\') == true || platform.is(\'mobileweb\') == true">\n          <div class="col-lg-12 col-md-6 col-12 p-0 pt-lg-0 pt-md-4 text-center">\n            <div class="SocialLink mt-lg-3 mb-lg-0 mb-md-0 mb-4">\n              <a class="ml-3 mr-2" href="https://www.facebook.com/dibdaa/" target="_blank" title="Facebook">\n                <img src="assets/images/SocialImages/fb.png"\n                     onmouseover="this.src=\'assets/images/SocialImages/fb_hover.png\'"\n                     onmouseout="this.src=\'assets/images/SocialImages/fb.png\'"\n                     border="0" alt="Facebook" width="20px"/>\n              </a>\n              <a class="mr-2" href="https://www.instagram.com/dibdaa/" target="_blank" title="Instagram">\n                <img src="assets/images/SocialImages/insta.png"\n                     onmouseover="this.src=\'assets/images/SocialImages/insta_hover.png\'"\n                     onmouseout="this.src=\'assets/images/SocialImages/insta.png\'"\n                     border="0" alt="Instagram" width="20px"/>\n              </a>\n              <a class="mr-2" href="https://twitter.com/dibdaa" target="_blank" title="Twitter">\n                <img src="assets/images/SocialImages/twitter.png"\n                     onmouseover="this.src=\'assets/images/SocialImages/twitter_hover.png\'"\n                     onmouseout="this.src=\'assets/images/SocialImages/twitter.png\'"\n                     border="0" alt="Twitter" width="20px"/>\n              </a>\n              <a class="mr-4" href="https://www.linkedin.com/company/dibdaa/" target="_blank" title="LinkedIn">\n                <img src="assets/images/SocialImages/link.png"\n                     onmouseover="this.src=\'assets/images/SocialImages/link_hover.png\'"\n                     onmouseout="this.src=\'assets/images/SocialImages/link.png\'"\n                     border="0" alt="LinkedIn" width="20px"/>\n              </a>\n            </div>\n          </div>\n          <div class="col-lg-12 col-md-6 col-12 p-0">\n            <h6 class=" mt-0 mt-lg-4 mt-md-0 mb-2 mb-lg-2 mb-md-2 text-center">DOWNLOAD OUR\n              APPS</h6>\n            <div class="row m-0 pt-2 pt-lg-2 pt-md-0">\n              <div class="col-lg-6 col-md-6 col-6 text-right">\n                <a><img class="img-fluid" src="assets/images/Play-Store-logo.png"></a>\n              </div>\n              <div class="col-lg-6 col-md-6 col-6 text-left">\n                <a><img class="img-fluid" src="assets/images/Apple-Store-logo.png"></a>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n        <div class="row m-0" *ngIf="platform.is(\'core\') == false && platform.is(\'mobileweb\') == false">\n            <div class="col-lg-12 col-md-6 col-12 p-0 pt-lg-0 pt-md-4 text-center">\n                <div class="SocialLink mt-lg-3 mb-lg-0 mb-md-0 mb-4">\n                    <a class="ml-3 mr-2" (click)="openURLInBrowser(\'Facebook\')" title="Facebook">\n                        <img src="assets/images/SocialImages/fb.png"\n                        onmouseover="this.src=\'assets/images/SocialImages/fb_hover.png\'"\n                        onmouseout="this.src=\'assets/images/SocialImages/fb.png\'"\n                        border="0" alt="Facebook" width="20px"/>\n                    </a>\n                    <a class="mr-2" (click)="openURLInBrowser(\'Instagram\')" title="Instagram">\n                        <img src="assets/images/SocialImages/insta.png"\n                        onmouseover="this.src=\'assets/images/SocialImages/insta_hover.png\'"\n                        onmouseout="this.src=\'assets/images/SocialImages/insta.png\'"\n                        border="0" alt="Instagram" width="20px"/>\n                    </a>\n                    <a class="mr-2" (click)="openURLInBrowser(\'Twitter\')" title="Twitter">\n                        <img src="assets/images/SocialImages/twitter.png"\n                        onmouseover="this.src=\'assets/images/SocialImages/twitter_hover.png\'"\n                        onmouseout="this.src=\'assets/images/SocialImages/twitter.png\'"\n                        border="0" alt="Twitter" width="20px"/>\n                    </a>\n                    <a class="mr-4" (click)="openURLInBrowser(\'LinkedIn\')" title="LinkedIn">\n                        <img src="assets/images/SocialImages/link.png"\n                        onmouseover="this.src=\'assets/images/SocialImages/link_hover.png\'"\n                        onmouseout="this.src=\'assets/images/SocialImages/link.png\'"\n                        border="0" alt="LinkedIn" width="20px"/>\n                    </a>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n'/*ion-inline-end:"/var/www/html/src/components/footer-page/footer-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], FooterPageComponent);
    return FooterPageComponent;
}());

//# sourceMappingURL=footer-page.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationConponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationConponentComponent = /** @class */ (function () {
    function NotificationConponentComponent(events, infoService) {
        var _this = this;
        this.events = events;
        this.infoService = infoService;
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].localItem;
        }
        this.events.subscribe('notification:functioncall', function () {
            _this.callnotification();
        });
        this.callnotification();
        
        
        
    }
    NotificationConponentComponent.prototype.callnotification = function () {
        var _this = this;
        var passData = {
            user_id: this.localItem.id,
            notification: true
        };
	
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].serverUrl + 'api/announcement/view-announcements', passData, function (response) {
            _this.shownotificationData = response.announcements;
            if (response.announcements.count > 0) {
                $('#announcementCount').text(response.announcements.count);
                $('#announcementCount_mobile').text(response.announcements.count);
            }
            else {
                $('#announcementCount').text('');
                $('#announcementCount_mobile').text('');
            }
        }, function (error) {
            console.log(error);
        });
    };
    NotificationConponentComponent.prototype.readNotification = function (val) {
        var _this = this;
        var passunreadData = {
            user_id: this.localItem.id,
            id: val
        };
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].serverUrl + 'api/announcement/unread-announcement', passunreadData, function (response) {
            _this.callnotification();
        }, function (error) {
            console.log(error);
        });
    };
    NotificationConponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'notification-component',template:/*ion-inline-start:"/var/www/html/src/components/notification-conponent/notification-conponent.html"*/'<!-- Generated template for the NotificationConponentComponent component -->\n<div class="notifi_title" *ngIf="shownotificationData?.count > 0">\n	<p class="mb-0">You have {{shownotificationData?.count}} Notifications</p>\n</div>\n\n<div [ngClass]="{\'notifi_item\': i < 5}" *ngFor="let notData of shownotificationData?.data;let i = index">\n	<div class="content" *ngIf="i < 5">\n		<a (click)="readNotification(notData?.id)"><i class="fa fa-times-circle close-read-notification"></i></a>\n		<p><a href="#/notification/{{notData?.id}}">{{ (notData?.message.length > 50)? (notData?.message | slice:0:50)+\'...\':(notData?.message) }}</a></p>\n		<span class="date">{{notData?.created_date}}</span>\n	</div>\n</div>\n\n<div class="pt-4" *ngIf="shownotificationData?.count > 0">\n	<a href="#/notification/all"><h6 class="m-0 p-0">View all</h6></a>\n</div>\n<div class="row p-0 m-0" *ngIf="shownotificationData?.count <= 0">\n	<p class="nodata">You\'re all caught up!</p>\n</div>'/*ion-inline-end:"/var/www/html/src/components/notification-conponent/notification-conponent.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */]])
    ], NotificationConponentComponent);
    return NotificationConponentComponent;
}());

//# sourceMappingURL=notification-conponent.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    isLogin: false,
    localItem: null,
    serverUrl: "http://onlinetnt.com/",
    imageUrl: "http://onlinetnt.com/images/banner/",
    imageProduct: "http://onlinetnt.com/images",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_jquery_webslidemenu_js__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_jquery_webslidemenu_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_jquery_webslidemenu_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { Market } from '@ionic-native/market';
//import { UniqueDeviceID } from '@ionic-native/unique-device-id';
//import { AlertController } from 'ionic-angular';


var MyApp = /** @class */ (function () {
    function MyApp(iab, keyboard, app_version, appCtrl, infoService, platform, statusBar, splashScreen) {
        var _this = this;
        this.iab = iab;
        this.keyboard = keyboard;
        this.app_version = app_version;
        this.appCtrl = appCtrl;
        this.infoService = infoService;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'HomePage';
        this.retrievedObject = localStorage.getItem('userInfo');
        this.menuvalue='';
        this.showMenuValue();
//        this.show_modal();
        
        this.userImg = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].imageProduct + '/user/';
        if (this.retrievedObject == null || this.retrievedObject == '') {
            __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].localItem = null;
            __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].isLogin = false;
            this.lg = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */];
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].localItem = JSON.parse(this.retrievedObject);
            __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].isLogin = true;
            this.lg = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */];
        }
       
        
        if (this.platform.is('core') == false && this.platform.is('mobileweb') == false) {
            this.platform.ready().then(function () {
                _this.statusBar.backgroundColorByHexString('#ffffff');
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
                _this.keyboard.hideFormAccessoryBar(false);
                _this.app_version.getVersionNumber().then(function (version) {
                    _this.getapp_version = version;
                });
                /*this.uniqueDeviceID.get()
                  .then((uuid: any) => console.log(uuid))
                  .catch((error: any) => console.log(error)); */
                _this.callSearchcatList();
            });
        }
        else {
            this.callSearchcatList();
//            this.show_modal();
        }
    }
    MyApp.prototype.callSearchcatList = function () {
        var _this = this;
        try {
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].serverUrl + 'api/category/view-menu-category', '', function (response) {
                if (response.categories.status == "success") {
                    _this.menu_category = response.categories;
                    _this.categoryImgRul = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].imageProduct + '/category/';
                    /*if(this.platform.is('core') == false && this.platform.is('mobileweb') == false){
                        this.app_version.getVersionNumber().then((version:any) => {
                            if(version > this.menu_category.version){
                                let alert_upate = this.alertCtrl.create({
                                    title: 'New version available',
                                    message: 'Please update your App immediately.',
                                    buttons: [
                                        {
                                            text: 'Ignore',
                                            role: 'cancel',
                                            handler: () => {
                                            }
                                        },
                                        {
                                            text: 'Update',
                                            handler: () => {
                                                if(this.platform.is('ios') == true) {
                                                    this.market.open('id1292265668?mt=8'); // iOS use App Id
                                                }else if(this.platform.is('android') == true){
                                                    this.market.open('com.dibdaa'); //Android use package name
                                                }
                                            }
                                        }
                                    ]
                                });
                                alert_upate.present();
                            }
                        });
                    }*/
                }
                _this.viewMsgCount();
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    MyApp.prototype.showMenu = function () {
        $('#add_class_menu').toggleClass('wsoffcanvasopener');
    };
    MyApp.prototype.show_modal = function () {
//        alert('show');
        var _this = this;
//        alert(this.retrievedObject);
//        alert(this.retrievedObject);
        if(this.retrievedObject!=null){
        var id_uMsg = JSON.parse(this.retrievedObject);
        
        var passData = {
            user_id: id_uMsg.id,
            notification: true
        };
	
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].serverUrl + 'api/announcement/view-announcements', passData, function (response) {
            _this.shownotificationData = response.announcements;
//            alert(response.announcements.count);
            if (response.announcements.count > 0) {
                
//                $('#myModal').css({'display':'block'});
//                $('body').css('overflow', 'auto');
                $('#p').text(response.announcements.count);
//                $('#announcementCount_mobile').text(response.announcements.count);
            }
            else {
                $('#announcementCount').text('');
                $('#announcementCount_mobile').text('');
            }
        }, function (error) {
            console.log(error);
        });
        
        }
    };
    MyApp.prototype.close_modal = function (response) {
        alert(response);
//        $('#content1').css({'display':'none'});
    };
    MyApp.prototype.showMenuValue = function () {
     var _this = this;
            try {
//                var id_uMsg = JSON.parse(this.retrievedObject);
                var msg_details = {
//                    user_id: id_uMsg.id
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].serverUrl + 'api/setting/setting-data', msg_details, function (response) {
//                    alert(response.setting.data);
                    if (response.setting.status == "success") {
                        _this.menuvalue = response.setting.data;
//                        $('#ShowMessageCount').text(response.count.cnt);
//                        $('#ShowMsgCount').text(response.count.cnt);
                    }
//                    if (response.count.status == "success" && response.count.cart_total > 0) {
//                        $('#addtoCount').text(response.count.cart_total);
//                        $('#addtoCount_mobile').text(response.count.cart_total);
//                    }
//                    if (response.count.status == "success" && response.count.announcement_cnt > 0) {
//                        $('#announcementCount').text(response.count.announcement_cnt);
//                        $('#announcementCount_mobile').text(response.count.announcement_cnt);
//                    }
                }, function (error) {
                    console.log(error);
                });
            }
            catch (Error) {
                console.log(Error);
            }
    };
    MyApp.prototype.viewMsgCount = function () {
        if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].localItem == null) {
        }
        else {
            try {
                var id_uMsg = JSON.parse(this.retrievedObject);
                var msg_details = {
                    user_id: id_uMsg.id
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].serverUrl + 'api/message/unread-msg-count', msg_details, function (response) {
                    if (response.count.status == "success" && response.count.cnt > 0) {
                        $('#ShowMessageCount').text(response.count.cnt);
                        $('#ShowMsgCount').text(response.count.cnt);
                    }
                    if (response.count.status == "success" && response.count.cart_total > 0) {
                        $('#addtoCount').text(response.count.cart_total);
                        $('#addtoCount_mobile').text(response.count.cart_total);
                    }
                    if (response.count.status == "success" && response.count.announcement_cnt > 0) {
                        $('#announcementCount').text(response.count.announcement_cnt);
                        $('#announcementCount_mobile').text(response.count.announcement_cnt);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            catch (Error) {
                console.log(Error);
            }
        }
    };
    MyApp.prototype.viewCart = function () {
        if (this.nav.getActive().name == "ViewCartPage") {
            return;
        }
        this.nav.push('ViewCartPage');
    };
    MyApp.prototype.GoToCatList = function (val, val1) {
        if (val1 == 'Parent') {
            this.closeMenu();
            this.nav.push('ParentCategoryPage', {
                id: val
            });
        }
        else if (val1 == 'Sub') {
            this.closeMenu();
            this.nav.push('SubCategoryPage', {
                id: val
            });
        }
    };
    MyApp.prototype.logOut = function () {
        var my = this;
        my.infoService.showLoading();
        setTimeout(function () {
            localStorage.removeItem('userInfo');
            localStorage.removeItem('checkuserLogin');
            localStorage.removeItem('searchData');
            __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].isLogin = false;
            __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].localItem = null;
            my.infoService.hideLoading();
            my.nav.setRoot('HomePage');
        }, 1500);
    };
    MyApp.prototype.GoToSellerAccount = function (val) {
        this.nav.push('SellerMyAccountPage', {
            id: val
        });
    };
    MyApp.prototype.SearchHome = function (val) {
        var keywrd;
        var cat_id;
        keywrd = val.searchKeyWord;
        cat_id = val.allcategories;
        var home_search;
        var convert_stringify = '';
        var convert_encode = '';
        if ((keywrd != null && cat_id != null) && (keywrd != '' && cat_id != null) && (keywrd != '' && cat_id != '')) {
            home_search = {
                keyword: keywrd,
                category_id: cat_id
            };
            convert_stringify = JSON.stringify(home_search);
            convert_encode = btoa(convert_stringify);
            this.nav.push('SearchDataPage', {
                id: convert_encode
            });
        }
        else if (cat_id != null && cat_id != '') {
            this.nav.push('ParentCategoryPage', {
                id: cat_id
            });
        }
        else if (keywrd != null && keywrd != '') {
            home_search = {
                keyword: keywrd
            };
            convert_stringify = JSON.stringify(home_search);
            convert_encode = btoa(convert_stringify);
            this.nav.push('SearchDataPage', {
                id: convert_encode
            });
        }
    };
    MyApp.prototype.goToHomePage = function (val, val_pass) {
        if (val == "Home") {
            if (this.nav.getActive().name == "HomePage") {
                window.location.reload();
                return;
            }
            this.nav.setRoot('HomePage');
        }
        else if (val == "login") {
            localStorage.setItem('getPageDetails', val_pass);
            this.appCtrl.getRootNav().push('LoginPage', {
                id: 'login',
            });
        }
        else if (val == "register") {
            localStorage.setItem('getPageDetails', val_pass);
            this.appCtrl.getRootNav().push('LoginPage', {
                id: 'register'
            });
        }
        else if (val == "dibdaaPremium") {
            this.appCtrl.getRootNav().push('LoginPage', {
                id: 'dibdaaPremium'
            });
        }
    };
    MyApp.prototype.searchToggle = function () {
        $(".search-bar").slideToggle();
    };
    MyApp.prototype.closeMenu = function () {
        $('#add_class_menu').toggleClass('wsoffcanvasopener');
    };
    MyApp.prototype.gotouserProfilepage = function (val, val1) {
        if (val1 == "UserProfile") {
            if (this.nav.getActive().id == "UserProfilePage") {
                return;
            }
            this.nav.push('UserProfilePage', {
                id: val
            });
        }
        else if (val1 == "Buyerprofile") {
            if (this.nav.getActive().id == "BuyerProfilePage") {
                return;
            }
            this.nav.push('BuyerProfilePage', {
                id: val
            });
        }
        else if (val1 == "draft-listing") {
            if (this.nav.getActive().id == "DraftListingPage") {
                return;
            }
            this.nav.push('DraftListingPage');
        }
        else if (val1 == "seller-business-info") {
            if (this.nav.getActive().id == "AddedSellerInfoPage") {
                return;
            }
            this.nav.push('AddedSellerInfoPage');
        }
        else if (val1 == "contact-us") {
            if (this.nav.getActive().id == "ContactUsPage") {
                return false;
            }
            this.nav.push('ContactUsPage');
        }
        else if (val1 == "advance-search") {
            if (this.nav.getActive().id == "AdvanceSearchPage")
                return;
            this.nav.push('AdvanceSearchPage');
        }
        else if (val1 == "FeaturedDeals" || val1 == "UnderValue") {
            this.nav.push('AllItemPage', {
                id: val
            });
        }
        else if (val1 == "notificationAll") {
            this.nav.push('NotificationDetailsPage', {
                id: val
            });
        }
        else if (val1 == "about-us") {
            this.nav.push('AboutUsPage', {
                id: val
            });
        }
        else if (val1 == "faq") {
            if (this.nav.getActive().id == "FaqPage") {
                return;
            }
            this.nav.push('FaqPage');
        }
        else if (val1 == "shop-by-departments") {
            if (this.nav.getActive().id == "ShopByDepartmentsPage") {
                return;
            }
            this.nav.push('ShopByDepartmentsPage');
        }
        else if (val1 == "seller-my-account") {
            this.nav.setRoot('SellerMyAccountPage', {
                id: val
            });
        }
    };
    MyApp.prototype.openURLInBrowser_Menu = function (val) {
        var target = "_blank";
        var options = {
            location: 'yes',
            hidden: 'no',
            hardwareback: 'no',
            mediaPlaybackRequiresUserAction: 'no',
        };
        var browser;
        if (val == "Facebook") {
            browser = this.iab.create("https://www.facebook.com/dibdaa", target, options);
        }
        else if (val == "Instagram") {
            browser = this.iab.create("https://www.instagram.com/dibdaa", target, options);
        }
        else if (val == "Twitter") {
            browser = this.iab.create("https://twitter.com/dibdaa", target, options);
        }
        else if (val == "LinkedIn") {
            browser = this.iab.create("https://www.linkedin.com/company/dibdaa", target, options);
        }
        browser.on('loadstop').subscribe(function (event) {
        });
    };
    MyApp.prototype.clickonMenu = function (val, val1) {
        if (val1 == "UserProfile") {
            if (this.nav.getActive().id == "UserProfilePage") {
                return;
            }
            this.nav.push('UserProfilePage', {
                id: val
            });
        }
        else if (val1 == "Buyerprofile") {
            if (this.nav.getActive().id == "BuyerProfilePage") {
                return;
            }
            this.nav.push('BuyerProfilePage', {
                id: val
            });
        }
        else if (val1 == "draft-listing") {
            if (this.nav.getActive().id == "DraftListingPage") {
                return;
            }
            this.closeMenu();
            this.nav.push('DraftListingPage');
        }
        else if (val1 == "seller-business-info") {
            if (this.nav.getActive().id == "AddedSellerInfoPage") {
                return;
            }
            this.closeMenu();
            this.nav.push('AddedSellerInfoPage');
        }
        else if (val1 == "contact-us") {
            if (this.nav.getActive().id == "ContactUsPage") {
                return;
            }
            this.closeMenu();
            this.nav.push('ContactUsPage');
        }
        else if (val1 == "advance-search") {
            if (this.nav.getActive().id == "AdvanceSearchPage") {
                return;
            }
            this.closeMenu();
            this.nav.push('AdvanceSearchPage');
        }
        else if (val1 == "FeaturedDeals" || val1 == "UnderValue") {
            this.closeMenu();
            this.nav.push('AllItemPage', {
                id: val
            });
        }
        else if (val1 == "notificationAll") {
            this.nav.push('NotificationDetailsPage', {
                id: val
            });
        }
        else if (val1 == "about-us") {
            this.closeMenu();
            this.nav.push('AboutUsPage', {
                id: val
            });
        }
        else if (val1 == "faq") {
            if (this.nav.getActive().id == "FaqPage") {
                return;
            }
            this.closeMenu();
            this.nav.push('FaqPage');
        }
        else if (val1 == "shop-by-departments") {
            if (this.nav.getActive().id == "ShopByDepartmentsPage") {
                return;
            }
            this.closeMenu();
            this.nav.push('ShopByDepartmentsPage');
        }
        else if (val1 == "Home") {
            if (this.nav.getActive().id == "HomePage") {
                window.location.reload();
                return;
            }
            this.closeMenu();
            this.nav.setRoot('HomePage');
        }
        else if (val1 == "seller-my-account") {
            this.closeMenu();
            this.nav.setRoot('SellerMyAccountPage', {
                id: val
            });
        }
    };
    MyApp.prototype.callCMSPage_menu = function (val, val_pass) {
        this.closeMenu();
        if (val == 'register' || val == "dibdaaPremium" || val == "login") {
            localStorage.setItem('getPageDetails', val_pass);
            this.nav.push('LoginPage', {
                id: val
            });
        }
        else if (val == 'register_business') {
            this.nav.push('LoginPage', {
                id: 'registerBusiness'
            });
        }
        else if (val == "add-product") {
            this.nav.push('DraftListingPage');
        }
        else if (val == "resolutioncenter" || val == "cookies" || val == "registration" || val == "return" || val == "userprivacy" || val == "useragreement" || val == "comingsoon" || val == "policies" || val == "security" || val == "knowledge" || val == "charity" || val == "stuff" || val == "community" || val == "announcements" || val == "advertise" || val == "careers" || val == 'selling-tools' || val == "mobile-apps" || val == "company-info" || val == "news" || val == "investord") {
            this.nav.push('AboutUsPage', {
                id: val
            });
        }
        else if (val == "contactUs") {
            if (this.nav.getActive().id == "ContactUsPage") {
                return;
            }
            this.nav.push('ContactUsPage');
        }
        else if (val == "Fees-CalculatorPage") {
            if (this.nav.getActive().id == "FeesCalculatorPage") {
                return;
            }
            this.nav.push('FeesCalculatorPage');
        }
        else if (val == "faq-listing") {
            this.nav.push('FaqListingPage', {
                id: val_pass
            });
        }
        else if (val == "site-map") {
            this.nav.push('SiteMapPage');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/var/www/html/src/app/app.html"*/'<!--<ion-header>-->\n<div class="estatus"><span>Saving...</span></div>\n\n<div class="top-header " *ngIf="lg?.isLogin == false; else showdata;">\n	<div class="container back_color pl-lg-2">\n		<div class="row pl-lg-1 pr-lg-1">\n			<div class="col-lg-3 col-md-8 pl-lg-0 p-md-0">\n				<ul class="nav topnavigation firstnav">\n					<li class="nav-item dropdown withmydibdaa right-border pt-1 pb-1">\n						<a class="nav-link-top dropbtn"><i class="fa fa-user pr-2 login-iser-icon"></i> Hello. Guest</a>\n						<div class="dropdown-content signindropdown">\n							<a class="btn theme-light-btn mt-3 mb-3 ml-4 mr-4" (click)="goToHomePage(\'login\',\'HomePage\')" role="button">Sign In</a>\n							<div class="text-center">Don\'t have an account?<br/>\n								<a class="signup-link mt-2 mb-2" (click)="goToHomePage(\'register\',\'HomePage\')">Sign Up</a>\n							</div>\n							<a (click)="goToHomePage(\'login\',\'PurchaseHistory\')">My Orders</a>\n							<a (click)="goToHomePage(\'login\',\'MyAddresses\')">My Addresses</a>\n							<a (click)="goToHomePage(\'login\',\'WishList\')">Wish Lists</a>\n							<a (click)="goToHomePage(\'login\',\'account\')">Account Settings</a>\n						</div>\n					</li>\n\n					<li class="nav-item pt-1 pb-1">\n						<a (click)="gotouserProfilepage(\'FeaturedDeals\',\'FeaturedDeals\')"class="nav-link-top">Featured Deals</a>\n					</li>\n				</ul>\n			</div>\n			<div class="col-lg-5 col-md-2 pl-0 pr-0 pt-1 pb-1 listsellmain text-left">\n					<img src="assets/images/Dibdaa-icon.png">\n					<span *ngIf="menu_category?.punch_line != \'\';else showStatic_Offline;"> {{menu_category?.punch_line}}</span>\n					<ng-template #showStatic_Offline>\n						<span>The pacifying experience in Buying & Selling !</span>\n					</ng-template>\n			</div>\n			<div class="col-lg-4 col-md-12 pl-2 pl-md-0 pt-md-0 pb-md-0 pr-md-3">\n				<ul class="nav topnavigation secondnav pt-1 pb-1">\n					<li class="nav-item right-border"><a (click)="goToHomePage(\'login\',\'DraftListingPage\')" class="btn theme-light-btn sell-btn ml-2">Sell</a></li>\n					<li class="nav-item right-border float-right d-lg-block d-none d-md-none pt-1 pb-1">\n						<a class="nav-link-top" (click)="gotouserProfilepage(\'\',\'contact-us\')">Help & Contact</a>\n					</li>\n					<li class="nav-item pt-1 pb-1">\n						<a class="nav-link-top" (click)="goToHomePage(\'dibdaaPremium\',\'\')">Dibdaa Premium</a>\n					</li>\n				</ul>\n				<div class="row ml-0 mb-2 mr-0 mt-1 justify-content-end">\n					<div class="col-lg-6 col-md-5 col-4 pl-lg-0 pl-md-4 d-block d-lg-none d-md-block p-0 mobile-logo text-md-center">\n						<a (click)="goToHomePage(\'Home\',\'\')">\n							<img src="assets/images/Dibdaa.png" class="dibdaalogo img-fluid" alt="Dibdaa Logo">\n						</a>\n					</div>\n					<div class="col-lg-6 col-md-4 col-6 d-block d-lg-none d-md-block text-right p-0 back_color mobile_toprightIcon">\n						<a (click)="searchToggle()"><i class="fa fa-search bellshoping pl-2"></i></a>\n						<a (click)="goToHomePage(\'login\',\'HomePage\')"><i class="fa fa-user bellshoping pl-2"></i></a>\n						<a (click)="goToHomePage(\'login\',\'message\')"><i class="fa fa-envelope bellshoping pl-2"></i></a>\n						<a (click)="goToHomePage(\'login\',\'HomePage\')"><i class="fa fa-bell bellshoping pl-2"></i></a>\n						<a (click)="goToHomePage(\'login\',\'ViewCartPage\')">\n							<i class="fa fa-shopping-cart bellshoping pl-2"></i>\n							<span class="badge badge-warning badge-shaping"></span>\n						</a>\n					</div>\n				</div>\n				<div class="search-bar" style="display: none;">\n					<div class="row p-md-4 p-4 m-0 justify-content-center">\n						<div class="col-lg-8 col-md-11 col-12 p-0">\n							<div class="top_header_left">\n								<div class="input-group d-lg-none">\n									<form #frmspec="ngForm" class="form-inline searchanythingform" id="search-form" method="post" role="form">\n										<input type="text" class="form-control searchtxt" placeholder="Search For Anything" aria-label="Search" id="searchKeyWord" name="searchKeyWord" #searchKeyWord="ngModel" ngModel>\n										<select class="form-control allcategories" id="gh-cat" #allcategories="ngModel" ngModel name="allcategories" >\n											<option value="" selected>All Categories</option>\n											<option *ngFor="let cat_disp of menu_category?.data" [value]="cat_disp?.id">{{cat_disp?.category_name}}</option>\n										</select>\n										<button type="submit" class="btn btn-primary searchbutton" (click)="SearchHome(frmspec.value)">Search</button>\n									</form>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n         </div>\n    </div>\n</div>\n\n<ng-template #showdata>\n	<div class="top-header">\n		<div class="container back_color pl-lg-2">\n			<div class="row pl-lg-1 pr-lg-1">\n				<div class="col-lg-3 col-md-8 pl-lg-0 p-md-0">\n					<ul class="nav topnavigation firstnav">\n						<li class="nav-item right-border dropdown my-account-dropdown pt-1 pb-1">\n							Hi! <span class="font-weight-bold">{{lg?.localItem.first_name}}</span> <i class="fa fa-caret-down"></i>\n							<div class="dropdown-content-my-account">\n								<div class="row m-0">\n									<div class="col-lg-4 col-md-4 col-4 pt-3">\n										<img src="assets/images/men-placeholder.png" class="img-fluid" *ngIf="lg?.localItem.profile_pic == \'\'">\n										<img src="{{userImg}}{{lg?.localItem.id}}/{{lg?.localItem.profile_pic}}" *ngIf="lg?.localItem.profile_pic != \'\'" class="img-fluid">\n									</div>\n									<div class="col-lg-8 col-md-8 col-8 pt-3">\n										<span class="set_fontSize_header">{{lg?.localItem.first_name}} {{lg?.localItem.last_name}} </span>\n										<p>\n											<a (click)="gotouserProfilepage(lg?.localItem.id,\'UserProfile\')" *ngIf="lg?.localItem.role == \'seller\'">{{lg?.localItem.display_name}}</a>\n											<a (click)="gotouserProfilepage(lg?.localItem.id,\'Buyerprofile\')" *ngIf="lg?.localItem.role == \'buyer\'">{{lg?.localItem.display_name}}</a>\n										</p>\n									</div>\n									<div class="col-lg-12 col-md-12 col-12 pt-2">\n										<p class="mb-2">\n											<a href="#/seller-my-account/account">Account settings</a>\n										</p>\n										<p class="mb-2"><a (click)="logOut()">Sign out</a></p>\n									</div>\n								</div>\n							</div>\n						</li>\n						<li class="nav-item pt-1 pb-1">\n							<a (click)="gotouserProfilepage(\'FeaturedDeals\',\'FeaturedDeals\')" class="nav-link-top">Featured Deals</a>\n						</li>\n					</ul>\n				</div>\n				<div class="col-lg-5 col-md-2 pl-0 pr-0 pt-1 pb-1 listsellmain text-left">\n					<!--<a>-->\n						<img src="assets/images/Dibdaa-icon.png">\n						<span *ngIf="menu_category?.punch_line != \'\';else showStatic;">{{menu_category?.punch_line}}</span>\n						<ng-template #showStatic>\n							<span>The pacifying experience in Buying & Selling !</span>\n						</ng-template>\n					<!--</a>-->\n				</div>\n				<div class="col-lg-4 col-md-12 pl-2 pl-md-0 pt-md-0 pb-md-0 pr-md-2">\n					<ul class="nav topnavigation secondnav">\n						<li class="nav-item right-border">\n							<a (click)="gotouserProfilepage(\'\',\'draft-listing\')" class="btn theme-light-btn sell-btn ml-2" *ngIf="lg?.localItem.role == \'seller\'">Sell</a>\n							<a (click)="gotouserProfilepage(\'\',\'seller-business-info\')" class="btn theme-light-btn sell-btn ml-2" *ngIf="lg?.localItem.role == \'buyer\'">Sell</a>\n						</li>\n						<li class="nav-item right-border float-right d-lg-block d-none d-md-none pt-1 pb-1">\n							<a class="nav-link-top" (click)="gotouserProfilepage(\'\',\'contact-us\')">Help & Contact</a>\n						</li>\n						<li class="nav-item pt-1 pb-1">\n							<a class="nav-link-top" href="#/USR/dibdaaPremium">Dibdaa Premium</a>\n						</li>\n					</ul>\n					<div class="row ml-0 mb-2 mr-0 mt-1 justify-content-end">\n						<div class="col-lg-6 col-md-5 col-4 pl-lg-0 pl-md-4 d-block d-lg-none d-md-block p-0 mobile-logo text-md-center">\n							<a (click)="goToHomePage(\'Home\',\'\')">\n								<img src="assets/images/Dibdaa.png" class="dibdaalogo img-fluid" alt="Dibdaa Logo">\n							</a>\n						</div>\n						<div class="col-lg-6 col-md-4 col-6 d-block d-lg-none d-md-block text-right p-0 back_color mobile_toprightIcon">\n							<a (click)="searchToggle()"><i class="fa fa-search bellshoping pl-2"></i></a>\n							<a (click)="logOut()"><i class="fa fa-sign-out bellshoping pl-2"></i></a>\n							<a (click)="gotouserProfilepage(\'message\',\'seller-my-account\')">\n								<i class="fa fa-envelope bellshoping pl-2"></i>\n								<span class="badge badge-warning badge-shaping" id="ShowMsgCount" *ngIf="lg?.isLogin == true"></span>\n							</a>\n							<a (click)="gotouserProfilepage(\'all\',\'notificationAll\')">\n								<i class="fa fa-bell bellshoping pl-2"></i>\n								<span class="badge badge-warning badge-shaping" *ngIf="lg?.isLogin == true" id="announcementCount_mobile"></span>\n							</a>\n							<a (click)="viewCart()">\n								<i class="fa fa-shopping-cart bellshoping pl-2"></i>\n								<span class="badge badge-warning badge-shaping" *ngIf="lg?.isLogin == true" id="addtoCount_mobile"></span>\n							</a>\n						</div>\n					</div>\n					<div class="search-bar" style="display: none;">\n						<div class="row p-md-4 p-4 m-0 justify-content-center">\n							<div class="col-lg-8 col-md-11 col-12 p-0">\n								<div class="top_header_left">\n									<div class="input-group d-lg-none">\n										<form #frmspec="ngForm" class="form-inline searchanythingform" id="search-form" method="post" role="form">\n											<input type="text" class="form-control searchtxt" placeholder="Search For Anything" aria-label="Search" id="searchKeyWord" name="searchKeyWord" #searchKeyWord="ngModel" ngModel>\n											<select class="form-control allcategories" id="gh-cat" #allcategories="ngModel" ngModel name="allcategories">\n												<option value="" selected>All Categories</option>\n												<option *ngFor="let cat_disp of menu_category?.data" [value]="cat_disp?.id">{{cat_disp?.category_name}}</option>\n											</select>\n											<button type="submit" class="btn btn-primary searchbutton" (click)="SearchHome(frmspec.value)">Search</button>\n										</form>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</ng-template>\n\n<div class="header_top_area">\n	<div class="container"> \n		<div class="row pl-lg-0 pr-lg-1 pt-1 justify-content-center mobile-sell-now back_color">\n			<div class="col-lg-2 col-md-2 col-4 pr-lg-2 pl-lg-0 mb-lg-0 mb-md-0 mt-lg-0 mt-md-1 m-0">\n				<a class="d-none d-lg-block d-md-none">\n					<img src="assets/images/Dibdaa.png" class="dibdaalogo pl-lg-2 pr-lg-4" alt="Dibdaa Logo" (click)="goToHomePage(\'Home\',\'\')">\n				</a>\n				<span *ngIf="lg?.isLogin == true">\n					<a class="btn theme-light-btn sell_mobile mt-md-2 mb-md-2 mt-3 mb-1 d-block d-lg-none d-md-block" (click)="gotouserProfilepage(\'\',\'draft-listing\')" *ngIf="lg?.localItem.role == \'seller\'">Sell Now</a>\n					<a class="btn theme-light-btn sell_mobile mt-md-2 mb-md-2 mt-3 mb-1 d-block d-lg-none d-md-block" (click)="gotouserProfilepage(\'\',\'seller-business-info\')" *ngIf="lg?.localItem.role == \'buyer\'">Sell Now</a>\n				</span>\n				<span *ngIf="lg?.isLogin == false">\n					<a class="btn theme-light-btn sell_mobile mt-md-2 mb-md-2 mt-3 mb-1 d-block d-lg-none d-md-block" (click)="goToHomePage(\'login\',\'DraftListingPage\')">Sell Now</a>\n				</span>\n			</div>\n			<div class="col-lg-8 col-md-12 pl-lg-0 d-none d-lg-block d-md-none">\n				<div class="top_header_left">\n					<div class="input-group">\n						<form #frmspec="ngForm" class="form-inline searchanythingform" id="search-form" method="post" role="form">\n							<input type="text" class="form-control searchtxt" placeholder="Search For Anything" aria-label="Search" id="searchKeyWord" name="searchKeyWord" #searchKeyWord="ngModel" ngModel>\n							<select class="form-control allcategories" name="allcategories" id="gh-cat" #allcategories="ngModel" ngModel>\n								<option value="">All Categories</option>\n								<option *ngFor="let cat_disp of menu_category?.data" value="{{cat_disp?.id}}">{{cat_disp?.category_name}}</option>\n							</select>\n							<button type="submit" class="btn btn-primary searchbutton" (click)="SearchHome(frmspec.value)">Search</button>\n							<a (click)="gotouserProfilepage(\'\',\'advance-search\')" class="advancedlink">Advanced</a>\n						</form>\n					</div>\n				</div>\n			</div>\n			<div class="col-lg-1 col-md-2 pl-2 p-md-0 d-none d-lg-block d-md-none">\n				<ul class="nav topnavigation secondnav">\n					<li class="nav-item right-border float-right" *ngIf="lg?.isLogin == true">\n						<a class="nav-link-top" (click)="gotouserProfilepage(\'\',\'draft-listing\')" *ngIf="lg?.localItem.role == \'seller\'">Sell</a>\n						<a class="nav-link-top" (click)="gotouserProfilepage(\'\',\'seller-business-info\')" *ngIf="lg?.localItem.role == \'buyer\'">Sell</a>\n					</li>\n					<li class="nav-item right-border float-right" *ngIf="lg?.isLogin == false">\n						<a class="nav-link-top" (click)="goToHomePage(\'login\',\'DraftListingPage\')">Sell</a>\n					</li>\n					<li class="nav-item dropdown withmydibdaa" style="float: right;">\n						<a class="nav-link-top dropbtn">My Dibdaa</a>\n						<div class="dropdown-content" *ngIf="lg?.isLogin == true">\n							<a href="#/GetAll/RecentlyViewed">Recently Viewed</a>\n							<a href="#/seller-my-account/Bids">Bids/Offers</a>\n							<a href="#/seller-my-account/WishList">Wish List</a>\n							<a href="#/seller-my-account/PurchaseHistory">Purchase History</a>\n							<a href="#/seller-my-account/SavedSearches">Saved Searches</a>\n							<a href="#/seller-my-account/SavedSellers">Saved Sellers</a>\n							<a href="#/seller-my-account/Active">All Selling </a>\n							<a href="#/seller-my-account/SavedDrafts">My Drafts</a>\n							<a href="#/seller-my-account/account">My Account</a>\n						</div>\n						<div class="dropdown-content" *ngIf="lg?.isLogin == false">\n							<a (click)="goToHomePage(\'login\',\'RecentlyViewed\')">Recently Viewed</a>\n							<a (click)="goToHomePage(\'login\',\'Bids\')">Bids/Offers</a>\n							<a (click)="goToHomePage(\'login\',\'WishList\')">Wish List</a>\n							<a (click)="goToHomePage(\'login\',\'PurchaseHistory\')">Purchase History</a>\n							<a (click)="goToHomePage(\'login\',\'SavedSearches\')">Saved Searches</a>\n							<a (click)="goToHomePage(\'login\',\'SavedSellers\')">Saved Sellers</a>\n							<a (click)="goToHomePage(\'login\',\'Active\')">All Selling </a>\n							<a (click)="goToHomePage(\'login\',\'SavedDrafts\')">My Drafts</a>\n							<a (click)="goToHomePage(\'login\',\'account\')">My Account</a>\n						</div>\n					</li>\n				</ul>\n			</div>\n			<div class="col-lg-1 d-none d-lg-block d-md-none">\n				<div class="row">\n					<div class="col-lg-4 col-md-6 p-md-0 text-center dropdown" *ngIf="lg?.isLogin == false">\n						<a><i class="fa fa-bell bellshoping dropbtn"></i></a>\n						<div class="dropdown-contentbell">\n							<p class="nodata">Please <a (click)="goToHomePage(\'login\',\'HomePage\')">sign-in</a> to view notifications.</p>\n						</div>\n					</div>\n					<div class="col-lg-4 col-md-6 p-md-0 text-center" *ngIf="lg?.isLogin == true">\n						<a (click)="gotouserProfilepage(\'message\',\'seller-my-account\')">\n							<i class="fa fa-envelope bellshoping"></i>\n							<span class="badge badge-warning badge-shaping" id="ShowMessageCount" *ngIf="lg?.isLogin == true"></span>\n						</a>\n					</div>\n					<div class="col-lg-4 col-md-6 p-md-0 text-center" *ngIf="lg?.isLogin == false">\n						<a (click)="goToHomePage(\'login\',\'message\')">\n							<i class="fa fa-envelope bellshoping"></i>\n							<span class="badge badge-warning badge-shaping" id="ShowMessageCount" *ngIf="lg?.isLogin == true"></span>\n						</a>\n					</div>\n					<div class="col-lg-4 col-md-6 p-md-0 text-center dropdown" *ngIf="lg?.isLogin == true">\n						\n						<a><i class="fa fa-bell bellshoping dropbtn"></i></a>\n						<span class="badge badge-warning badge-shaping" id="announcementCount" *ngIf="lg?.isLogin == true"></span>\n						<div class="dropdown-contentbell pb-4">\n							<notification-component></notification-component>\n						</div>\n						\n					</div>\n					<div class="col-lg-4 col-md-6 p-md-0 text-center" *ngIf="lg?.isLogin == true">\n						<a (click)="viewCart()">\n							<i class="fa fa-shopping-cart bellshoping"></i>\n							<span class="badge badge-warning badge-shaping" id="addtoCount" *ngIf="lg?.isLogin == true"></span>\n						</a>\n					</div>\n					<div class="col-lg-4 col-md-6 p-md-0 text-center" *ngIf="lg?.isLogin == false">\n						<a (click)="goToHomePage(\'login\',\'ViewCartPage\')">\n							<i class="fa fa-shopping-cart bellshoping"></i>\n							<span class="badge badge-warning badge-shaping" id="addtoCount" *ngIf="lg?.isLogin == true"></span>\n						</a>\n					</div>\n					\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n\n<header class="shop_header_area">\n	<div class="headerfull">\n		<div class="wsmenucontainer clearfix" id="add_class_menu">\n			<div id="overlapblackbg"></div>\n			<div class="wsmobileheader clearfix"><a (click)="showMenu()" id="wsnavtoggle" class="animated-arrow"><span></span></a></div>\n			<div class="wsmain">\n				<nav class="wsmenu clearfix">\n					<ul class="mobile-sub wsmenu-list">\n						<li *ngIf="lg?.isLogin == true" class="mt-3 mb-3 d-lg-none">\n							<img src="assets/images/men-placeholder.png" class="img-fluid mb-2 mobile_usermenuImage" *ngIf="lg?.localItem.profile_pic == \'\'">\n							<img src="{{userImg}}{{lg?.localItem.id}}/{{lg?.localItem.profile_pic}}" *ngIf="lg?.localItem.profile_pic != \'\'" class="img-fluid mb-2 mobile_usermenuImage">\n							<h6 class="m-0 p-0">{{lg?.localItem.first_name}}  {{lg?.localItem.last_name}} </h6>\n						</li>\n						<li class="Shop_By_Departments">\n							<a class="navtext d-lg-none d-md-block d-block" (click)="clickonMenu(\'\',\'shop-by-departments\')"><span></span><span>Shop By Departments</span></a>\n							<a class="navtext d-lg-block d-md-none d-none"><span></span><span>Shop By Departments</span></a>\n							<div class="wsshoptabing wtsdepartmentmenu clearfix">\n								<div class="wsshopwp clearfix">\n									<ul class="wstabitem clearfix">\n										<li *ngFor="let menucategory of menu_category?.data;index as i" [ngClass]="{\'wsshoplink-active\':i===0}">\n											<a (click)="GoToCatList(menucategory.id,\'Parent\')">\n												<i class="fa fa-male" *ngIf="menucategory.category_name == \'Baby Items <2 years\'"></i>\n												<i class="fa fa-male" *ngIf="menucategory.category_name == \'Fashion\'"></i>\n												<i class="fa fa-television" *ngIf="menucategory.category_name == \'Electronics & Computers\'"></i> \n												<i class="fa fa-genderless" *ngIf="menucategory.category_name == \'Garden & Outdoor\'"></i>\n												<i class="fa fa-home" *ngIf="menucategory.category_name == \'Home & Living\'"></i>\n												<i class="fa fa-video-camera" *ngIf="menucategory.category_name == \'Entertainment\'"></i>		\n												<i class="fa fa-genderless" *ngIf="menucategory.category_name == \'Health & Beauty\'"></i>		\n												<i class="fa fa-genderless" *ngIf="menucategory.category_name == \'Toys\'"></i>		\n												<i class="fa fa-soccer-ball-o" *ngIf="menucategory.category_name == \'Sporting & Hobbies\'"></i>		\n												<i class="fa fa-genderless" *ngIf="menucategory.category_name == \'Other Categories\'"></i>		\n												{{menucategory?.category_name}}\n											</a>\n											<div class="wstitemright clearfix">\n												<div class="container-fluid">\n													<div class="row">\n														<div class="col-lg-7 col-md-12 clearfix">\n															<div class="wstheading clearfix">Top Categories\n															</div>\n															<ul class="wstliststy01 clearfix">\n																<li *ngFor="let topcat of menucategory.sub.top;let i=index;" >\n																	<a id="{{topcat.id}}" (click)="GoToCatList(topcat.id,\'Sub\')">{{topcat.category_name}}</a>\n																</li>\n															</ul>\n															<div class="wstheading clearfix" *ngIf="menucategory.sub.additional.length != 0">\n																Additional Categories\n															</div>\n															<ul class="wstliststy01 clearfix">\n																<li *ngFor="let addcat of menucategory.sub.additional">\n																	<a id="{{addcat.id}}" (click)="GoToCatList(addcat.id,\'Sub\')">{{addcat.category_name}}</a>\n																</li>\n															</ul>\n														</div>\n														<div class="col-lg-5 col-md-12 clearfix">\n															<a class="wstmegamenucolr text-right" href="#/b/{{menucategory.id}}">\n																<img src="{{categoryImgRul}}{{menucategory?.category_image}}" alt="" *ngIf="menucategory?.category_image != null && menucategory?.category_image != \'\'">\n																<img src="assets/images/category.png" alt="" *ngIf="menucategory?.category_image == null || menucategory?.category_image == \'\'">\n															</a>\n														</div>\n													</div>\n												</div>\n											</div>\n										</li>\n									</ul>\n								</div>\n							</div>\n						</li>\n						<li><a class="navtext homeactive" (click)="clickonMenu(\'\',\'Home\')">Home</a></li>\n						<li><a class="navtext" (click)="clickonMenu(\'about-us\',\'about-us\')">About Us</a></li>\n						<li *ngIf="lg?.isLogin == false">\n							<a class="navtext" (click)="goToHomePage(\'login\',\'SavedSearches\')">\n								<i class="fa fa-heart savedheart"></i> Saved\n							</a>\n						</li>\n						<li *ngIf="lg?.isLogin == true">\n							<a class="navtext" (click)="clickonMenu(\'SavedSearches\',\'seller-my-account\')">\n								<i class="fa fa-heart savedheart"></i> Saved\n							</a>\n						</li>\n						<li><a class="navtext" (click)="clickonMenu(\'UnderValue\',\'UnderValue\')"> Under {{menuvalue}} AED</a></li>\n						<li><a class="navtext" (click)="clickonMenu(\'\',\'contact-us\')"> Contact Us</a></li>\n						<li *ngIf="lg?.isLogin == true">\n							<a class="navtext d-lg-none" (click)="clickonMenu(\'\',\'draft-listing\')" *ngIf="lg?.localItem.role == \'seller\'">Sell</a>\n							<a class="navtext d-lg-none" (click)="clickonMenu(\'\',\'seller-business-info\')" *ngIf="lg?.localItem.role == \'buyer\'">Sell</a>\n						</li>\n						<li *ngIf="lg?.isLogin == false">\n							<a class="navtext d-lg-none" (click)="callCMSPage_menu(\'login\',\'DraftListingPage\')">Sell</a>\n						</li>\n						<li *ngIf="lg?.isLogin == true">\n							<a class="navtext d-lg-none" (click)="clickonMenu(\'Bids\',\'seller-my-account\')">My Dibdaa</a>\n						</li>\n						<li *ngIf="lg?.isLogin == false">\n							<a class="navtext d-lg-none" (click)="callCMSPage_menu(\'login\',\'Bids\')">My Dibdaa</a>\n						</li>\n						<li>\n							<a class="navtext d-lg-none" (click)="clickonMenu(\'\',\'advance-search\')">Advanced Search</a>\n						</li>\n						<li>\n							<a class="navtext d-lg-none" (click)="clickonMenu(\'\',\'faq\')">FAQ</a>\n						</li>\n						\n						<li>\n							<div class="footer_widgets_expand d-lg-none d-md-block d-block">\n								<div class="col-lg-9 mx-auto">\n									<div class="row">\n										<div class="col-sm-12 col-md-12 footer-dibdaa-mobile p-0">\n											<div id="accordion" role="tablist" aria-multiselectable="true" class="widget hidden-sm-up">\n												<div role="tab" id="headingOne">\n													<h4 class="card-header py-3 border-0">\n														<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne" class="text-left">\n															Buy <i class="fa fa-angle-down"></i>\n														</a>\n													</h4>\n												</div>\n												<div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne">\n													<div class="card-block">\n														<ul class="widget-list list-unstyled p-0">\n															<li class="mt-3"><a (click)="callCMSPage_menu(\'registration\',\'\')">Registration</a></li>\n															<li><a (click)="callCMSPage_menu(\'faq-listing\',\'6\')">Offers & buying help</a></li>\n															<li><a (click)="callCMSPage_menu(\'comingsoon\',\'\')">More Coming Soon…</a></li>\n														</ul>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n						</li>\n						\n						<li class="Shop_By_Departments">\n							<div class="footer_widgets_expand d-lg-none d-md-block d-block">\n								<div class="col-lg-9 mx-auto">\n									<div class="row">\n										<div class="col-sm-12 col-md-12 footer-dibdaa-mobile p-0">\n											<div id="accordion" role="tablist" aria-multiselectable="true" class="widget hidden-sm-up">\n												<div role="tab" id="headingOne">\n													<h4 class="card-header py-3 border-0">\n														<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseOne" class="text-left">\n															Sell <i class="fa fa-angle-down"></i>\n														</a> \n													</h4>\n												</div>\n												<div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingOne">\n													<div class="card-block">\n														<ul class="widget-list list-unstyled p-0">\n															<li class="mt-3"><a *ngIf="localItem != null" (click)="callCMSPage_menu(\'add-product\')">Start Selling</a></li>\n															<li class="mt-3"><a *ngIf="localItem == null" (click)="callCMSPage_menu(\'login\',\'DraftListingPage\')">Start Selling</a></li>\n															<li><a (click)="callCMSPage_menu(\'selling-tools\')">How To Selling Tools</a></li>\n															<li><a *ngIf="localItem == null" (click)="callCMSPage_menu(\'register_business\',\'\')">Business Accounts</a></li>\n															<li><a *ngIf="localItem != null && localItem.role == \'buyer\'" href="#/seller-business-info">Business Accounts</a></li>\n															<li><a (click)="callCMSPage_menu(\'dibdaaPremium\',\'\')">Dibdaa Premium</a></li>\n														</ul>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n						</li>\n						\n						<li class="Shop_By_Departments">\n							<div class="footer_widgets_expand d-lg-none d-md-block d-block">\n								<div class="col-lg-9 mx-auto">\n									<div class="row">\n										<div class="col-sm-12 col-md-12 footer-dibdaa-mobile p-0">\n											<div id="accordion" role="tablist" aria-multiselectable="true" class="widget hidden-sm-up">\n												<div role="tab" id="headingOne">\n													<h4 class="card-header py-3 border-0">\n														<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseOne" class="text-left">\n															Tools &amp; Apps <i class="fa fa-angle-down"></i>\n														</a>\n													</h4>\n												</div>\n												<div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingOne">\n													<div class="card-block">\n														<ul class="widget-list list-unstyled p-0">\n															<li class="mt-3"><a (click)="callCMSPage_menu(\'mobile-apps\',\'\')">Mobile Apps</a></li>\n															<li><a (click)="callCMSPage_menu(\'security\',\'\')">Security Awareness</a></li>\n															<li><a (click)="callCMSPage_menu(\'site-map\',\'\')">Site Map</a></li>\n														</ul>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n						</li>\n						\n						<li class="Shop_By_Departments">\n							<div class="footer_widgets_expand d-lg-none d-md-block d-block">\n								<div class="col-lg-9 mx-auto">\n									<div class="row">\n										<div class="col-sm-12 col-md-12 footer-dibdaa-mobile p-0">\n											<div id="accordion" role="tablist" aria-multiselectable="true" class="widget hidden-sm-up">\n												<div role="tab" id="headingOne">\n													<h4 class="card-header py-3 border-0">\n														<a data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseOne" class="text-left">\n															Stay Connected <i class="fa fa-angle-down"></i>\n														</a>\n													</h4>\n												</div>\n												<div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingOne">\n													<div class="card-block">\n														<ul class="widget-list list-unstyled p-0" *ngIf="platform.is(\'core\') == true || platform.is(\'mobileweb\') == true">\n															<li><a href="https://www.facebook.com/dibdaa/" target="_blank"><i class="fa fa-facebook-square"></i> Facebook</a></li>\n															<li><a href="https://twitter.com/dibdaa" target="_blank"><i class="fa fa-twitter-square"></i> Twitter</a></li>\n															<li><a href="https://www.instagram.com/dibdaa/" target="_blank"><i class="fa fa-instagram"></i> Instagram</a></li>\n															<li><a href="https://www.linkedin.com/company/dibdaa/" target="_blank"><i class="fa fa-linkedin-square"></i> LinkedIN</a></li>\n														</ul>\n                                                        <ul class="widget-list list-unstyled p-0" *ngIf="platform.is(\'core\') == false && platform.is(\'mobileweb\') == false">\n                                                            <li><a (click)="openURLInBrowser_Menu(\'Facebook\')"><i class="fa fa-facebook-square"></i> Facebook</a></li>\n                                                            <li><a (click)="openURLInBrowser_Menu(\'Twitter\')"><i class="fa fa-twitter-square"></i> Twitter</a></li>\n                                                            <li><a (click)="openURLInBrowser_Menu(\'Instagram\')"><i class="fa fa-instagram"></i> Instagram</a></li>\n                                                            <li><a (click)="openURLInBrowser_Menu(\'LinkedIn\')"><i class="fa fa-linkedin-square"></i> LinkedIN</a></li>\n                                                        </ul>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n						</li>\n						\n						<li class="Shop_By_Departments">\n							<div class="footer_widgets_expand d-lg-none d-md-block d-block">\n								<div class="col-lg-9 mx-auto">\n									<div class="row">\n										<div class="col-sm-12 col-md-12 footer-dibdaa-mobile p-0">\n											<div id="accordion" role="tablist" aria-multiselectable="true" class="widget hidden-sm-up">\n												<div role="tab" id="headingOne">\n													<h4 class="card-header py-3 border-0">\n														<a data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseOne" class="text-left">\n															About Dibdaa <i class="fa fa-angle-down"></i>\n														</a>\n													</h4>\n												</div>\n												<div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingOne">\n													<div class="card-block">\n														<ul class="widget-list list-unstyled p-0">\n															<li class="mt-3"><a (click)="callCMSPage_menu(\'company-info\',\'\')">Company Info</a></li>\n															<li><a (click)="callCMSPage_menu(\'news\',\'\')">News</a></li>\n															<li><a (click)="callCMSPage_menu(\'investord\',\'\')">Investors</a></li>\n															<li><a (click)="callCMSPage_menu(\'careers\',\'\')">Careers</a></li>\n															<li><a (click)="callCMSPage_menu(\'advertise\',\'\')">Advertise With Us</a></li>\n															<li><a (click)="callCMSPage_menu(\'policies\',\'\')">Policies</a></li>\n														</ul>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n						</li>\n						\n						<li class="Shop_By_Departments">\n							<div class="footer_widgets_expand d-lg-none d-md-block d-block">\n								<div class="col-lg-9 mx-auto">\n									<div class="row">\n										<div class="col-sm-12 col-md-12 footer-dibdaa-mobile p-0">\n											<div id="accordion" role="tablist" aria-multiselectable="true" class="widget hidden-sm-up">\n												<div role="tab" id="headingOne">\n													<h4 class="card-header py-3 border-0">\n														<a data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseOne" class="text-left">\n															Help &amp; Contact <i class="fa fa-angle-down"></i>\n														</a>\n													</h4>\n												</div>\n												<div id="collapseSix" class="collapse" role="tabpanel" aria-labelledby="headingOne">\n													<div class="card-block">\n														<ul class="widget-list list-unstyled p-0">\n															<li class="mt-3"><a (click)="callCMSPage_menu(\'resolutioncenter\',\'\')">Resolution Center</a></li>\n															<li><a (click)="callCMSPage_menu(\'faq-listing\',\'7\')">Seller Center</a></li>\n															<!--<li><a (click)="callCMSPage_menu(\'contactUs\',\'\')">Contact Us</a></li> -->\n															<li>\n																<a (click)="callCMSPage_menu(\'Fees-CalculatorPage\',\'\')">Fees Calculator</a>\n															</li>\n															<li><a (click)="callCMSPage_menu(\'return\',\'\')">Dibdaa Returns</a></li>\n														</ul>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n						</li>\n						\n						<li class="Shop_By_Departments">\n							<div class="footer_widgets_expand d-lg-none d-md-block d-block">\n								<div class="col-lg-9 mx-auto">\n									<div class="row">\n										<div class="col-sm-12 col-md-12 footer-dibdaa-mobile p-0">\n											<div id="accordion" role="tablist" aria-multiselectable="true" class="widget hidden-sm-up">\n												<div role="tab" id="headingOne">\n													<h4 class="card-header py-3 border-0">\n														<a data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseOne" class="text-left">\n															Community <i class="fa fa-angle-down"></i>\n														</a>\n													</h4>\n												</div>\n												<div id="collapseSeven" class="collapse" role="tabpanel" aria-labelledby="headingOne">\n													<div class="card-block">\n														<ul class="widget-list list-unstyled p-0">\n															<li class="mt-3"><a (click)="callCMSPage_menu(\'announcements\',\'\')">Announcements</a></li>\n															<li><a (click)="callCMSPage_menu(\'knowledge\',\'\')">Knowledge Base</a></li>\n															<li><a (click)="callCMSPage_menu(\'charity\',\'\')">Dibdaa For Charity</a></li>\n															<li><a (click)="callCMSPage_menu(\'stuff\',\'\')">Free Stuff</a></li>\n															<li><a (click)="callCMSPage_menu(\'community\',\'\')">Dibdaa Community</a></li>\n														</ul>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n						</li>\n						\n						<li *ngIf="platform.is(\'core\') == false && platform.is(\'mobileweb\') == false" class=" Shop_By_Departments pt-3 pb-3">\n							App version : {{getapp_version}}\n						</li>\n						\n						<li class="float-right">\n							<div class="listsellmain text-right p-1">\n								<img src="assets/images/Dibdaa-icon.png">\n								<span class="ml-1">The pacifying experience in Buying & Selling !</span>\n							</div>\n						</li>\n					</ul>\n				</nav>\n			</div>\n		</div>\n	</div>\n<div id="myModal" class="modal fade" style="display:none;opacity: 1;" *ngIf="shownotificationData?.count > 0" >\n<div class="modal-dialog" style="margin: 115px 30px 30px auto !important;width: 300px;">\n<div class="modal-content" id="content1" style="position: relative;background-color: #fff;background-clip: padding-box;border: 1px solid rgba(0,0,0,.2);border-radius: 6px;outline: 0;box-shadow: 0 3px 9px rgba(0,0,0,.5);" *ngFor="let notData of shownotificationData?.data;let i = index">\n<div class="modal-header">\n<button type="button" class="close" id="close1" data-dismiss="modal1" aria-hidden="true" (click)="close_modal(i)" style="margin-top: -10px;margin-right: 10px;padding: 0;cursor: pointer;background: 0 0;border: 0;">&times;</button>\n</div>\n<div class="modal-body" style="position: relative;padding: 15px;padding-top: 0px;">\n<p id="p" style="margin: 0 0 0px;font-size: 14px;">{{ (notData?.message.length > 50)? (notData?.message | slice:0:50)+\'...\':(notData?.message) }}</p>\n</div>\n</div>\n</div>\n</div>\n</header>\n<!--</ion-header>-->\n<ion-nav [root]="rootPage" >\n\n</ion-nav>\n'/*ion-inline-end:"/var/www/html/src/app/app.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

$(".firstnav li.nav-item.right-border.dropdown.my-account-dropdown.pt-1.pb-1 div.dropdown-content-my-account").hover(function () {
    $('body').toggleClass("ZoomLensHide");
});
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

/*var _0x964f=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x63\x6C\x69\x63\x6B","\x77\x73\x6F\x66\x66\x63\x61\x6E\x76\x61\x73\x6F\x70\x65\x6E\x65\x72","\x74\x6F\x67\x67\x6C\x65\x43\x6C\x61\x73\x73","\x2E\x77\x73\x6D\x65\x6E\x75\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x6F\x6E","\x23\x77\x73\x6E\x61\x76\x74\x6F\x67\x67\x6C\x65","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x23\x6F\x76\x65\x72\x6C\x61\x70\x62\x6C\x61\x63\x6B\x62\x67","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x77\x73\x6D\x65\x6E\x75\x2D\x63\x6C\x69\x63\x6B\x22\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x77\x73\x6D\x65\x6E\x75\x2D\x61\x72\x72\x6F\x77\x20\x66\x61\x20\x66\x61\x2D\x61\x6E\x67\x6C\x65\x2D\x64\x6F\x77\x6E\x22\x3E\x3C\x2F\x69\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x70\x72\x65\x70\x65\x6E\x64","\x2E\x77\x73\x6D\x65\x6E\x75\x2D\x73\x75\x62\x6D\x65\x6E\x75","\x68\x61\x73","\x2E\x77\x73\x6D\x65\x6E\x75\x2D\x6C\x69\x73\x74\x3E\x20\x6C\x69","\x2E\x77\x73\x73\x68\x6F\x70\x74\x61\x62\x69\x6E\x67","\x2E\x77\x73\x6D\x65\x6E\x75\x2D\x6C\x69\x73\x74\x20\x3E\x20\x6C\x69","\x2E\x6D\x65\x67\x61\x6D\x65\x6E\x75","\x77\x73\x2D\x61\x63\x74\x69\x76\x65\x61\x72\x72\x6F\x77","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x73\x69\x62\x6C\x69\x6E\x67\x73","\x70\x61\x72\x65\x6E\x74","\x73\x6C\x6F\x77","\x73\x6C\x69\x64\x65\x55\x70","\x2E\x77\x73\x6D\x65\x6E\x75\x2D\x73\x75\x62\x6D\x65\x6E\x75\x2C\x20\x2E\x77\x73\x73\x68\x6F\x70\x74\x61\x62\x69\x6E\x67\x2C\x20\x2E\x6D\x65\x67\x61\x6D\x65\x6E\x75","\x6E\x6F\x74","\x73\x6C\x69\x64\x65\x54\x6F\x67\x67\x6C\x65","\x2E\x77\x73\x6D\x65\x6E\x75\x2D\x63\x6C\x69\x63\x6B","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x77\x73\x6D\x65\x6E\x75\x2D\x63\x6C\x69\x63\x6B\x30\x32\x22\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x77\x73\x6D\x65\x6E\x75\x2D\x61\x72\x72\x6F\x77\x20\x66\x61\x20\x66\x61\x2D\x61\x6E\x67\x6C\x65\x2D\x64\x6F\x77\x6E\x22\x3E\x3C\x2F\x69\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x2E\x77\x73\x74\x69\x74\x65\x6D\x72\x69\x67\x68\x74","\x2E\x77\x73\x74\x61\x62\x69\x74\x65\x6D\x20\x3E\x20\x6C\x69","\x2E\x77\x73\x74\x62\x72\x61\x6E\x64\x62\x6F\x74\x74\x6F\x6D","\x2E\x77\x73\x74\x61\x62\x69\x74\x65\x6D\x30\x32\x20\x3E\x20\x6C\x69","\x2E\x77\x73\x6D\x65\x6E\x75\x2D\x63\x6C\x69\x63\x6B\x30\x32","\x6D\x6F\x75\x73\x65\x65\x6E\x74\x65\x72","\x77\x73\x73\x68\x6F\x70\x6C\x69\x6E\x6B\x2D\x61\x63\x74\x69\x76\x65","\x61\x64\x64\x43\x6C\x61\x73\x73","\x2E\x77\x73\x73\x68\x6F\x70\x74\x61\x62\x69\x6E\x67\x2E\x77\x74\x73\x64\x65\x70\x61\x72\x74\x6D\x65\x6E\x74\x6D\x65\x6E\x75\x20\x3E\x20\x2E\x77\x73\x73\x68\x6F\x70\x77\x70\x20\x3E\x20\x2E\x77\x73\x74\x61\x62\x69\x74\x65\x6D\x20\x3E\x20\x6C\x69","\x2E\x77\x73\x73\x68\x6F\x70\x74\x61\x62\x69\x6E\x67\x2E\x77\x74\x73\x62\x72\x61\x6E\x64\x6D\x65\x6E\x75\x20\x3E\x20\x2E\x77\x73\x73\x68\x6F\x70\x74\x61\x62\x69\x6E\x67\x77\x70\x20\x3E\x20\x2E\x77\x73\x74\x61\x62\x69\x74\x65\x6D\x30\x32\x20\x3E\x20\x6C\x69","\x72\x65\x61\x64\x79","\x6C\x6F\x61\x64\x20\x72\x65\x73\x69\x7A\x65","\x77\x69\x64\x74\x68","\x68\x65\x69\x67\x68\x74","\x31\x30\x30\x25","\x63\x73\x73","\x2E\x77\x73\x73\x68\x6F\x70\x77\x70","\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74","\x66\x69\x6E\x64","\x61\x75\x74\x6F","\x65\x61\x63\x68","","\x2E\x77\x73\x73\x68\x6F\x70\x74\x61\x62\x69\x6E\x67\x2C\x20\x2E\x77\x73\x74\x69\x74\x65\x6D\x72\x69\x67\x68\x74\x2C\x20\x2E\x77\x73\x74\x62\x72\x61\x6E\x64\x62\x6F\x74\x74\x6F\x6D","\x72\x65\x73\x69\x7A\x65"];(function(){_0x964f[0];document[_0x964f[2]](_0x964f[1],function(){},false);$(function(){$(_0x964f[8])[_0x964f[7]](_0x964f[3],function(){$(_0x964f[6])[_0x964f[5]](_0x964f[4]);return false});$(_0x964f[10])[_0x964f[7]](_0x964f[3],function(){$(_0x964f[6])[_0x964f[9]](_0x964f[4]);return false});$(_0x964f[15])[_0x964f[14]](_0x964f[13])[_0x964f[12]](_0x964f[11]);$(_0x964f[17])[_0x964f[14]](_0x964f[16])[_0x964f[12]](_0x964f[11]);$(_0x964f[17])[_0x964f[14]](_0x964f[18])[_0x964f[12]](_0x964f[11]);$(_0x964f[28])[_0x964f[7]](_0x964f[3],function(){$(this)[_0x964f[5]](_0x964f[19])[_0x964f[22]]()[_0x964f[21]]()[_0x964f[20]]()[_0x964f[9]](_0x964f[19]);$(_0x964f[25])[_0x964f[26]]($(this)[_0x964f[21]](_0x964f[25]))[_0x964f[24]](_0x964f[23]);$(this)[_0x964f[21]](_0x964f[13])[_0x964f[27]](_0x964f[23]);$(this)[_0x964f[21]](_0x964f[16])[_0x964f[27]](_0x964f[23]);$(this)[_0x964f[21]](_0x964f[18])[_0x964f[27]](_0x964f[23]);return false});$(_0x964f[31])[_0x964f[14]](_0x964f[30])[_0x964f[12]](_0x964f[29]);$(_0x964f[33])[_0x964f[14]](_0x964f[32])[_0x964f[12]](_0x964f[29]);$(_0x964f[34])[_0x964f[7]](_0x964f[3],function(){$(this)[_0x964f[21]](_0x964f[30])[_0x964f[27]](_0x964f[23]);$(this)[_0x964f[21]](_0x964f[32])[_0x964f[27]](_0x964f[23]);return false})});$(window)[_0x964f[40]](function(){$(_0x964f[38])[_0x964f[7]](_0x964f[35],function(){$(this)[_0x964f[37]](_0x964f[36])[_0x964f[21]](this)[_0x964f[9]](_0x964f[36]);return false});$(_0x964f[39])[_0x964f[7]](_0x964f[35],function(){$(this)[_0x964f[37]](_0x964f[36])[_0x964f[21]](this)[_0x964f[9]](_0x964f[36]);return false})});_0x50b6x2();$(window)[_0x964f[7]](_0x964f[41],function(){var _0x50b6x1=$(window)[_0x964f[42]]();if(_0x50b6x1<= 991){$(_0x964f[46])[_0x964f[45]](_0x964f[43],_0x964f[44]);$(_0x964f[30])[_0x964f[45]](_0x964f[43],_0x964f[44])}else {_0x50b6x2()}});function _0x50b6x2(){var _0x50b6x3=1;$(_0x964f[31])[_0x964f[50]](function(){var _0x50b6x4=$(this)[_0x964f[48]](_0x964f[30])[_0x964f[47]]();_0x50b6x3= _0x50b6x4> _0x50b6x3?_0x50b6x4:_0x50b6x3;$(this)[_0x964f[48]](_0x964f[30])[_0x964f[45]](_0x964f[43],_0x964f[49])});$(_0x964f[46])[_0x964f[45]](_0x964f[43],_0x50b6x3+ 0)}$(document)[_0x964f[40]](function(_0x50b6x5){function _0x50b6x6(){if(_0x50b6x5(window)[_0x964f[42]]()>= 991){_0x50b6x5(_0x964f[52])[_0x964f[45]]({"\x64\x69\x73\x70\x6C\x61\x79":_0x964f[51]})}}_0x50b6x6();_0x50b6x5(window)[_0x964f[53]](_0x50b6x6)})}())*/
var _0x964f = ["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74", "\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74", "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72", "\x63\x6C\x69\x63\x6B", "\x77\x73\x6F\x66\x66\x63\x61\x6E\x76\x61\x73\x6F\x70\x65\x6E\x65\x72", "\x74\x6F\x67\x67\x6C\x65\x43\x6C\x61\x73\x73", "\x2E\x77\x73\x6D\x65\x6E\x75\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72", "\x6F\x6E", "\x23\x77\x73\x6E\x61\x76\x74\x6F\x67\x67\x6C\x65", "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73", "\x23\x6F\x76\x65\x72\x6C\x61\x70\x62\x6C\x61\x63\x6B\x62\x67", "\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x77\x73\x6D\x65\x6E\x75\x2D\x63\x6C\x69\x63\x6B\x22\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x77\x73\x6D\x65\x6E\x75\x2D\x61\x72\x72\x6F\x77\x20\x66\x61\x20\x66\x61\x2D\x61\x6E\x67\x6C\x65\x2D\x64\x6F\x77\x6E\x22\x3E\x3C\x2F\x69\x3E\x3C\x2F\x73\x70\x61\x6E\x3E", "\x70\x72\x65\x70\x65\x6E\x64", "\x2E\x77\x73\x6D\x65\x6E\x75\x2D\x73\x75\x62\x6D\x65\x6E\x75", "\x68\x61\x73", "\x2E\x77\x73\x6D\x65\x6E\x75\x2D\x6C\x69\x73\x74\x3E\x20\x6C\x69", "\x2E\x77\x73\x73\x68\x6F\x70\x74\x61\x62\x69\x6E\x67", "\x2E\x77\x73\x6D\x65\x6E\x75\x2D\x6C\x69\x73\x74\x20\x3E\x20\x6C\x69", "\x2E\x6D\x65\x67\x61\x6D\x65\x6E\x75", "\x77\x73\x2D\x61\x63\x74\x69\x76\x65\x61\x72\x72\x6F\x77", "\x63\x68\x69\x6C\x64\x72\x65\x6E", "\x73\x69\x62\x6C\x69\x6E\x67\x73", "\x70\x61\x72\x65\x6E\x74", "\x73\x6C\x6F\x77", "\x73\x6C\x69\x64\x65\x55\x70", "\x2E\x77\x73\x6D\x65\x6E\x75\x2D\x73\x75\x62\x6D\x65\x6E\x75\x2C\x20\x2E\x77\x73\x73\x68\x6F\x70\x74\x61\x62\x69\x6E\x67\x2C\x20\x2E\x6D\x65\x67\x61\x6D\x65\x6E\x75", "\x6E\x6F\x74", "\x73\x6C\x69\x64\x65\x54\x6F\x67\x67\x6C\x65", "\x2E\x77\x73\x6D\x65\x6E\x75\x2D\x63\x6C\x69\x63\x6B", "\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x77\x73\x6D\x65\x6E\x75\x2D\x63\x6C\x69\x63\x6B\x30\x32\x22\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x77\x73\x6D\x65\x6E\x75\x2D\x61\x72\x72\x6F\x77\x20\x66\x61\x20\x66\x61\x2D\x61\x6E\x67\x6C\x65\x2D\x64\x6F\x77\x6E\x22\x3E\x3C\x2F\x69\x3E\x3C\x2F\x73\x70\x61\x6E\x3E", "\x2E\x77\x73\x74\x69\x74\x65\x6D\x72\x69\x67\x68\x74", "\x2E\x77\x73\x74\x61\x62\x69\x74\x65\x6D\x20\x3E\x20\x6C\x69", "\x2E\x77\x73\x74\x62\x72\x61\x6E\x64\x62\x6F\x74\x74\x6F\x6D", "\x2E\x77\x73\x74\x61\x62\x69\x74\x65\x6D\x30\x32\x20\x3E\x20\x6C\x69", "\x2E\x77\x73\x6D\x65\x6E\x75\x2D\x63\x6C\x69\x63\x6B\x30\x32", "\x6D\x6F\x75\x73\x65\x65\x6E\x74\x65\x72", "\x77\x73\x73\x68\x6F\x70\x6C\x69\x6E\x6B\x2D\x61\x63\x74\x69\x76\x65", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x2E\x77\x73\x73\x68\x6F\x70\x74\x61\x62\x69\x6E\x67\x2E\x77\x74\x73\x64\x65\x70\x61\x72\x74\x6D\x65\x6E\x74\x6D\x65\x6E\x75\x20\x3E\x20\x2E\x77\x73\x73\x68\x6F\x70\x77\x70\x20\x3E\x20\x2E\x77\x73\x74\x61\x62\x69\x74\x65\x6D\x20\x3E\x20\x6C\x69", "\x2E\x77\x73\x73\x68\x6F\x70\x74\x61\x62\x69\x6E\x67\x2E\x77\x74\x73\x62\x72\x61\x6E\x64\x6D\x65\x6E\x75\x20\x3E\x20\x2E\x77\x73\x73\x68\x6F\x70\x74\x61\x62\x69\x6E\x67\x77\x70\x20\x3E\x20\x2E\x77\x73\x74\x61\x62\x69\x74\x65\x6D\x30\x32\x20\x3E\x20\x6C\x69", "\x72\x65\x61\x64\x79", "\x6C\x6F\x61\x64\x20\x72\x65\x73\x69\x7A\x65", "\x77\x69\x64\x74\x68", "\x68\x65\x69\x67\x68\x74", "\x31\x30\x30\x25", "\x63\x73\x73", "\x2E\x77\x73\x73\x68\x6F\x70\x77\x70", "\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74", "\x66\x69\x6E\x64", "\x61\x75\x74\x6F", "\x65\x61\x63\x68", "", "\x2E\x77\x73\x73\x68\x6F\x70\x74\x61\x62\x69\x6E\x67\x2C\x20\x2E\x77\x73\x74\x69\x74\x65\x6D\x72\x69\x67\x68\x74\x2C\x20\x2E\x77\x73\x74\x62\x72\x61\x6E\x64\x62\x6F\x74\x74\x6F\x6D", "\x72\x65\x73\x69\x7A\x65"];
setTimeout(function(){
(function() {
    _0x964f[0];
    document[_0x964f[2]](_0x964f[1], function() {}, false);
    $(function() {
        $(_0x964f[8])[_0x964f[7]](_0x964f[3], function() {
            $(_0x964f[6])[_0x964f[5]](_0x964f[4]);
            return false
        });
        $(_0x964f[10])[_0x964f[7]](_0x964f[3], function() {
            $(_0x964f[6])[_0x964f[9]](_0x964f[4]);
            return false
        });
        $(_0x964f[15])[_0x964f[14]](_0x964f[13])[_0x964f[12]](_0x964f[11]);
        $(_0x964f[17])[_0x964f[14]](_0x964f[16])[_0x964f[12]](_0x964f[11]);
        $(_0x964f[17])[_0x964f[14]](_0x964f[18])[_0x964f[12]](_0x964f[11]);
        $(_0x964f[28])[_0x964f[7]](_0x964f[3], function() {
            $(this)[_0x964f[5]](_0x964f[19])[_0x964f[22]]()[_0x964f[21]]()[_0x964f[20]]()[_0x964f[9]](_0x964f[19]);
            $(_0x964f[25])[_0x964f[26]]($(this)[_0x964f[21]](_0x964f[25]))[_0x964f[24]](_0x964f[23]);
            $(this)[_0x964f[21]](_0x964f[13])[_0x964f[27]](_0x964f[23]);
            $(this)[_0x964f[21]](_0x964f[16])[_0x964f[27]](_0x964f[23]);
            $(this)[_0x964f[21]](_0x964f[18])[_0x964f[27]](_0x964f[23]);
            return false
        });
        $(_0x964f[31])[_0x964f[14]](_0x964f[30])[_0x964f[12]](_0x964f[29]);
        $(_0x964f[33])[_0x964f[14]](_0x964f[32])[_0x964f[12]](_0x964f[29]);
        $(_0x964f[34])[_0x964f[7]](_0x964f[3], function() {
            $(this)[_0x964f[21]](_0x964f[30])[_0x964f[27]](_0x964f[23]);
            $(this)[_0x964f[21]](_0x964f[32])[_0x964f[27]](_0x964f[23]);
            return false
        })
		return false
		
    });
    $(document)[_0x964f[40]](function() {
        $(_0x964f[38])[_0x964f[7]](_0x964f[35], function() {
            $(this)[_0x964f[37]](_0x964f[36])[_0x964f[21]](this)[_0x964f[9]](_0x964f[36]);
            return false
        });
        $(_0x964f[39])[_0x964f[7]](_0x964f[35], function() {
            $(this)[_0x964f[37]](_0x964f[36])[_0x964f[21]](this)[_0x964f[9]](_0x964f[36]);
            return false
        })
    });
    _0x50b6x2();
    $(window)[_0x964f[7]](_0x964f[41], function() {
        var _0x50b6x1 = $(window)[_0x964f[42]]();
        if (_0x50b6x1 <= 991) {
            $(_0x964f[46])[_0x964f[45]](_0x964f[43], _0x964f[44]);
            $(_0x964f[30])[_0x964f[45]](_0x964f[43], _0x964f[44])
        } else {
            _0x50b6x2()
        }
    });

    function _0x50b6x2() {
        var _0x50b6x3 = 1;
        $(_0x964f[31])[_0x964f[50]](function() {
            var _0x50b6x4 = $(this)[_0x964f[48]](_0x964f[30])[_0x964f[47]]();
            _0x50b6x3 = _0x50b6x4 > _0x50b6x3 ? _0x50b6x4 : _0x50b6x3;
            $(this)[_0x964f[48]](_0x964f[30])[_0x964f[45]](_0x964f[43], _0x964f[49])
        });
        $(_0x964f[46])[_0x964f[45]](_0x964f[43], _0x50b6x3 + 0)
    }
    $(document)[_0x964f[40]](function(_0x50b6x5) {
        function _0x50b6x6() {
            if (_0x50b6x5(window)[_0x964f[42]]() >= 991) {
                _0x50b6x5(_0x964f[52])[_0x964f[45]]({
                    "\x64\x69\x73\x70\x6C\x61\x79": _0x964f[51]
                })
            }
        }
        _0x50b6x6();
        _0x50b6x5(window)[_0x964f[53]](_0x50b6x6)
    })
}());
},3000);


/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalErrorHandler = /** @class */ (function (_super) {
    __extends(GlobalErrorHandler, _super);
    function GlobalErrorHandler() {
        return _super.call(this) || this;
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        _super.prototype.handleError.call(this, error);
        /*var path_register = window.location.href;
        var BSURL_register = path_register.split("#");
        (<any>window).location = BSURL_register[0]+"#/e"+BSURL_register[1];*/
    };
    GlobalErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalErrorHandler);
    return GlobalErrorHandler;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"]));

//# sourceMappingURL=ErrorHandler.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoService = /** @class */ (function () {
    function InfoService(plt, http_mobile, loading, http_web) {
        this.plt = plt;
        this.http_mobile = http_mobile;
        this.loading = loading;
        this.http_web = http_web;
    }
    InfoService.prototype.showLoading = function () {
        this.loader = this.loading.create({});
        this.loader.present();
    };
    InfoService.prototype.hideLoading = function () {
        this.loader.dismiss();
    };
    InfoService.prototype.callHttpFunction_post = function (URL, row_data, fun_sucess, fun_error) {
        if (this.plt.is('core') == true || this.plt.is('mobileweb') == true || this.plt.is('android') == true) {
            try {
                this.http_web.post(URL, row_data, { headers: { "Auth": "dibdaaauth" } }).subscribe(function (response) {
                    fun_sucess(response);
                }, function (error) {
                    fun_error(error);
                });
            }
            catch (Error) {
                console.log(Error);
            }
        }
        else {
            try {
                var headers = {
                    "Auth": "dibdaaauth",
                    "Content-Type": "application/json"
                };
                this.http_mobile.setDataSerializer('json');
                this.http_mobile.post(URL, row_data, headers).then(function (response) {
                    response.data = JSON.parse(response.data);
                    fun_sucess(response.data);
                }).catch(function (error) {
                    fun_error(error);
                });
            }
            catch (Error) {
                console.log(Error);
            }
        }
    };
    InfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], InfoService);
    return InfoService;
}());

//# sourceMappingURL=info.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.js.map
