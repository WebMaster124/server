webpackJsonp([51],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqListingPageModule", function() { return FaqListingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_listing__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FaqListingPageModule = /** @class */ (function () {
    function FaqListingPageModule() {
    }
    FaqListingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq_listing__["a" /* FaqListingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faq_listing__["a" /* FaqListingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], FaqListingPageModule);
    return FaqListingPageModule;
}());

//# sourceMappingURL=faq-listing.module.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FaqListingPage = /** @class */ (function () {
    function FaqListingPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('FaqListing');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    FaqListingPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('FaqListing body');
        $(document).prop('title', 'FAQ List');
        $(".zoomContainer").remove();
        var d = new Date();
        this.showYear = d.getFullYear();
        this.showFaqlisting();
    };
    FaqListingPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.content._scroll) {
            this.content.ionScrollEnd.subscribe(function (data) {
                if (data == null)
                    return false;
                if (_this.plt.width() >= 769) {
                    if (data.scrollTop >= "130") {
                        $('.top-header').slideUp();
                    }
                    else {
                        $('.top-header').slideDown();
                    }
                }
                else {
                    if (data.scrollTop >= "130") {
                        $('.mobile-sell-now').slideUp();
                    }
                    else {
                        $('.mobile-sell-now').slideDown();
                    }
                }
            });
        }
    };
    //show faq data.
    FaqListingPage.prototype.showFaqlisting = function () {
        var _this = this;
        var faq_listing = {
            category_id: this.navParams.data.id
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/faq/view-faq', faq_listing, function (response) {
            if (response.status == "success") {
                _this.faqlistin_data = response;
                _this.infoService.hideLoading();
            }
            else {
                _this.infoService.hideLoading();
            }
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], FaqListingPage.prototype, "content", void 0);
    FaqListingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq-listing',template:/*ion-inline-start:"/var/www/html/src/pages/faq/faq-listing/faq-listing.html"*/'<ion-content padding class="faq-listing">\n	<div class="wrapper">\n		<div class="container faq-listing-main mb-3">\n			<div class="row">\n				<div class="col-lg-12 col-md-12 col-xl-12 col-12 setFontSize">\n					<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n					<p class="mb-2 setFont">\n						<a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;\n							<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n						<a class="breadcrumblink font-weight-bold" href="#/faq">FAQ</a>&nbsp;\n							<i class="fa fa-angle-right"></i>&nbsp;\n						<a class="breadcrumblink font-weight-bold" disabled *ngIf="navParams?.data.id == 1">Listing</a>\n						<a class="breadcrumblink font-weight-bold" disabled *ngIf="navParams?.data.id == 2">Shipping</a>\n						<a class="breadcrumblink font-weight-bold" disabled *ngIf="navParams?.data.id == 3">Stores</a>\n						<a class="breadcrumblink font-weight-bold" disabled *ngIf="navParams?.data.id == 4">Returns</a>\n						<a class="breadcrumblink font-weight-bold" disabled *ngIf="navParams?.data.id == 5">Seller Protection</a>\n						<a class="breadcrumblink font-weight-bold" disabled *ngIf="navParams?.data.id == 6">Buyer</a>\n						<a class="breadcrumblink font-weight-bold" disabled *ngIf="navParams?.data.id == 7">Seller</a>\n					</p>\n				</div>\n			</div>\n			<div class="row m-0">\n				<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n					<h6 class="m-0 text-left" *ngIf="navParams?.data.id == 1">Listing</h6>\n					<h6 class="m-0 text-left" *ngIf="navParams?.data.id == 2">Shipping</h6>\n					<h6 class="m-0 text-left" *ngIf="navParams?.data.id == 3">Stores</h6>\n					<h6 class="m-0 text-left" *ngIf="navParams?.data.id == 4">Returns</h6>\n					<h6 class="m-0 text-left" *ngIf="navParams?.data.id == 5">Seller Protection</h6>\n					<h6 class="m-0 text-left" *ngIf="navParams?.data.id == 6">Buyer</h6>\n					<h6 class="m-0 text-left" *ngIf="navParams?.data.id == 7">Seller</h6>\n				</div>\n			</div>\n			<div class="row">\n				<div class="col-lg-12 col-md-12 col-12 mt-3 mb-3">\n					<div id="accordion" class="accordion">\n						<div class="card setFont" *ngIf="faqlistin_data?.data.length > 0">\n							<div *ngFor="let faqdata of faqlistin_data?.data;let i=index;" class="card-height">\n								<a class="card-header collapsed a-question" data-toggle="collapse" href="#collapse{{i}}">\n									<div class="card-title">\n										{{faqdata?.question}}\n									</div>\n								</a>\n								<div id="collapse{{i}}" class="card-body collapse" data-parent="#accordion">\n									<p>\n										{{faqdata?.answer}}\n									</p>\n								</div>\n							</div>\n						</div>\n						<div class="card setFont text-center" *ngIf="faqlistin_data?.data.length <= 0">\n							<span>No data found</span>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n			<!--================Footer Area =================-->\n	<footer-page></footer-page>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/faq/faq-listing/faq-listing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FaqListingPage);
    return FaqListingPage;
}());

//# sourceMappingURL=faq-listing.js.map

/***/ })

});
//# sourceMappingURL=51.js.map