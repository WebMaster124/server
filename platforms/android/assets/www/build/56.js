webpackJsonp([56],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerAgreementPageModule", function() { return SellerAgreementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seller_agreement__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellerAgreementPageModule = /** @class */ (function () {
    function SellerAgreementPageModule() {
    }
    SellerAgreementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seller_agreement__["a" /* SellerAgreementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__seller_agreement__["a" /* SellerAgreementPage */]),
            ],
        })
    ], SellerAgreementPageModule);
    return SellerAgreementPageModule;
}());

//# sourceMappingURL=seller-agreement.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellerAgreementPage; });
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





var SellerAgreementPage = /** @class */ (function () {
    function SellerAgreementPage(googleanalytics, plt, infoService, viewCtrl, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('SellerAgreement');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    SellerAgreementPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        this.showAgreementdata();
    };
    SellerAgreementPage.prototype.showAgreementdata = function () {
        var _this = this;
        var pass_aboutus = {
            id: this.navParams.get('id')
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/cms/view-cms', pass_aboutus, function (response) {
            _this.showaboutData = response;
            $('#seller-agreement').append(response.cms.data.page_content);
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    SellerAgreementPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SellerAgreementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seller-agreement',template:/*ion-inline-start:"/var/www/html/src/pages/cms/seller-agreement/seller-agreement.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title><h6>{{showaboutData?.cms.data.page_title}}</h6></ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()"><i class="fa fa-close" style="font-size:24px"></i></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="faq">\n <!-- <div class="wrapper">-->\n    <div class="container faq-page-main">\n      <div class="row">\n        <div class="col-lg-12 col-md-12 col-12 mt-3 mb-0 setFontSize" id="seller-agreement">\n\n        </div>\n      </div>\n    </div>\n</ion-content>\n\n<ion-footer class="text-center">\n    <button ion-button (click)="closeModal()" class="btn theme-light-btn">OK</button>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/src/pages/cms/seller-agreement/seller-agreement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SellerAgreementPage);
    return SellerAgreementPage;
}());

//# sourceMappingURL=seller-agreement.js.map

/***/ })

});
//# sourceMappingURL=56.js.map