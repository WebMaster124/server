webpackJsonp([58],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutUsPageModule = /** @class */ (function () {
    function AboutUsPageModule() {
    }
    AboutUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], AboutUsPageModule);
    return AboutUsPageModule;
}());

//# sourceMappingURL=about-us.module.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
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





var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(googleanalytics, plt, modalCtrl, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.modalCtrl = modalCtrl;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bannerImg = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + "/cms_banners/";
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView(_this.navParams.data.id);
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    AboutUsPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass(this.navParams.data.id + ' body');
        $(".zoomContainer").remove();
        if (this.navParams.data.id == 'about-us') {
            $(document).prop('title', 'About Us');
            this.callaboutFunction('1');
        }
        else if (this.navParams.data.id == 'comingsoon') {
            $(document).prop('title', 'Coming Soon');
            this.callaboutFunction('20');
        }
        else if (this.navParams.data.id == 'selling-tools') {
            $(document).prop('title', 'How To Selling Tools');
            this.callaboutFunction('15');
        }
        else if (this.navParams.data.id == 'mobile-apps') {
            $(document).prop('title', 'Mobile Apps');
            this.callaboutFunction('16');
        }
        else if (this.navParams.data.id == 'security') {
            $(document).prop('title', 'Security Awareness');
            this.callaboutFunction('17');
        }
        else if (this.navParams.data.id == 'company-info') {
            $(document).prop('title', 'Company Information');
            this.callaboutFunction('3');
        }
        else if (this.navParams.data.id == 'news') {
            $(document).prop('title', 'News');
            this.callaboutFunction('4');
        }
        else if (this.navParams.data.id == 'investord') {
            $(document).prop('title', 'Investord');
            this.callaboutFunction('5');
        }
        else if (this.navParams.data.id == 'careers') {
            $(document).prop('title', 'Careers');
            this.callaboutFunction('6');
        }
        else if (this.navParams.data.id == 'advertise') {
            $(document).prop('title', 'Advertise with us');
            this.callaboutFunction('7');
        }
        else if (this.navParams.data.id == 'policies') {
            $(document).prop('title', 'Policies');
            this.callaboutFunction('8');
        }
        else if (this.navParams.data.id == 'announcements') {
            $(document).prop('title', 'Announcements');
            this.callaboutFunction('9');
        }
        else if (this.navParams.data.id == 'knowledge') {
            $(document).prop('title', 'Knowledge Base');
            this.callaboutFunction('10');
        }
        else if (this.navParams.data.id == 'charity') {
            $(document).prop('title', 'Dibdaa for Charity');
            this.callaboutFunction('11');
        }
        else if (this.navParams.data.id == 'stuff') {
            $(document).prop('title', 'Free Stuff');
            this.callaboutFunction('12');
        }
        else if (this.navParams.data.id == 'community') {
            $(document).prop('title', 'Dibdaa Community');
            this.callaboutFunction('13');
        }
        else if (this.navParams.data.id == 'affiliates') {
            $(document).prop('title', 'Affiliates');
            this.callaboutFunction('21');
        }
        else if (this.navParams.data.id == 'security-center') {
            $(document).prop('title', 'Security Center');
            this.callaboutFunction('22');
        }
        else if (this.navParams.data.id == 'useragreement') {
            $(document).prop('title', 'User Agreement');
            this.callaboutFunction('23');
        }
        else if (this.navParams.data.id == 'userprivacy') {
            $(document).prop('title', 'User Privacy');
            this.callaboutFunction('24');
        }
        else if (this.navParams.data.id == 'return') {
            $(document).prop('title', 'Dibdaa Return');
            this.callaboutFunction('28');
        }
        else if (this.navParams.data.id == 'registration') {
            $(document).prop('title', 'Registration');
            this.callaboutFunction('29');
        }
        else if (this.navParams.data.id == 'cookies') {
            $(document).prop('title', 'Cookies');
            this.callaboutFunction('30');
        }
        else if (this.navParams.data.id == 'sellerprivacy') {
            $(document).prop('title', 'Seller Privacy');
            this.callaboutFunction('26');
        }
        else if (this.navParams.data.id == 'selleragreement') {
            $(document).prop('title', 'Seller Agreement');
            this.callaboutFunction('25');
        }
        else if (this.navParams.data.id == 'resolutioncenter') {
            $(document).prop('title', 'Resolution Center');
            this.callaboutFunction('31');
        }
    };
    AboutUsPage.prototype.ngAfterViewInit = function () {
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
    AboutUsPage.prototype.callaboutFunction = function (val) {
        var _this = this;
        var pass_aboutus = {
            id: val
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/cms/view-cms', pass_aboutus, function (response) {
            _this.showaboutData = response;
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    //open modalCtrl.
    AboutUsPage.prototype.funccallmodal = function () {
        var modalPage;
        modalPage = this.modalCtrl.create('SellerAgreementPage');
        modalPage.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], AboutUsPage.prototype, "content", void 0);
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-us',template:/*ion-inline-start:"/var/www/html/src/pages/cms/about-us/about-us.html"*/'<ion-content class="faq">\n  <div class="wrapper">\n    <div class="container faq-page-main">\n      <div class="row">\n        <div class="col-lg-12 col-md-12 col-xl-12 col-12 setFontSize">\n			<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n			<p class="mb-2"><a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n            <a class="breadcrumblink font-weight-bold" disabled>{{showaboutData?.cms.data.page_title}}</a></p>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-lg-12 col-md-12 col-12">\n          <h4 class="m-0">{{showaboutData?.cms.data.page_title}}</h4>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-lg-12 col-md-12 col-12 mt-3 mb-0">\n          <img src="{{bannerImg}}{{showaboutData?.cms.data.banner}}" *ngIf="showaboutData?.cms.data.banner != \'\'" class="faq-banner-image img-fluid mx-auto d-block">\n          <img src="assets/images/placeholder_banner.jpg" *ngIf="showaboutData?.cms.data.banner == \'\'" class="faq-banner-image img-fluid mx-auto d-block">\n        </div>\n      </div>\n      <div class="row m-0 bg-light">\n        <div class="col-lg-12 col-md-12 col-12 mt-2 pt-2 pb-2 setFontSize" id="about-us" [innerHTML]="showaboutData?.cms.data.page_content">\n		\n        </div>\n      </div>\n    </div>\n    <footer-page></footer-page>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/cms/about-us/about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ })

});
//# sourceMappingURL=58.js.map