webpackJsonp([55],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerPrivacyPageModule", function() { return SellerPrivacyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seller_privacy__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SellerPrivacyPageModule = /** @class */ (function () {
    function SellerPrivacyPageModule() {
    }
    SellerPrivacyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seller_privacy__["a" /* SellerPrivacyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__seller_privacy__["a" /* SellerPrivacyPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SellerPrivacyPageModule);
    return SellerPrivacyPageModule;
}());

//# sourceMappingURL=seller-privacy.module.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellerPrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SellerPrivacyPage = /** @class */ (function () {
    function SellerPrivacyPage(plt, navCtrl, navParams) {
        this.plt = plt;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SellerPrivacyPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('sellerPrivacy body');
        $(document).prop('title', 'Seller Privacy Notice');
        $(".zoomContainer").remove();
    };
    SellerPrivacyPage.prototype.ngAfterViewInit = function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SellerPrivacyPage.prototype, "content", void 0);
    SellerPrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seller-privacy',template:/*ion-inline-start:"/var/www/html/src/pages/cms/seller-privacy/seller-privacy.html"*/'<ion-content padding class="faq">\n  <div class="wrapper">\n    <div class="container faq-page-main">\n      <div class="row">\n        <div class="col-lg-12 col-md-12 col-xl-12 col-12 setFontSize">\n          <p class="mb-2"><a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n            <a class="breadcrumblink font-weight-bold" disabled>Seller Privacy Notice</a></p>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-lg-12 col-md-12 col-12">\n          <h4 class="m-0">Seller Privacy Notice</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n  <footer-page></footer-page>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/cms/seller-privacy/seller-privacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SellerPrivacyPage);
    return SellerPrivacyPage;
}());

//# sourceMappingURL=seller-privacy.js.map

/***/ })

});
//# sourceMappingURL=55.js.map