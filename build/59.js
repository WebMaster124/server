webpackJsonp([59],{

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopByDepartmentsPageModule", function() { return ShopByDepartmentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_by_departments__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShopByDepartmentsPageModule = /** @class */ (function () {
    function ShopByDepartmentsPageModule() {
    }
    ShopByDepartmentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shop_by_departments__["a" /* ShopByDepartmentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shop_by_departments__["a" /* ShopByDepartmentsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ShopByDepartmentsPageModule);
    return ShopByDepartmentsPageModule;
}());

//# sourceMappingURL=shop-by-departments.module.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopByDepartmentsPage; });
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





var ShopByDepartmentsPage = /** @class */ (function () {
    function ShopByDepartmentsPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cat_image = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/category/';
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('ShopByDepartments');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    //scroll to hide and show top header.
    ShopByDepartmentsPage.prototype.ngAfterViewInit = function () {
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
    ShopByDepartmentsPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('ShopByDepartments body');
        $(".zoomContainer").remove();
        this.showSubCategory();
    };
    //show categories data.
    ShopByDepartmentsPage.prototype.showSubCategory = function () {
        var _this = this;
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/category/view-category-site-map', '', function (response) {
            _this.subCategotyData = response.categories;
        }, function (error) {
            console.log(error);
        });
    };
    ShopByDepartmentsPage.prototype.gotoCategoryPage = function (val) {
        this.navCtrl.push('ParentCategoryPage', {
            id: val
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ShopByDepartmentsPage.prototype, "content", void 0);
    ShopByDepartmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shop-by-departments',template:/*ion-inline-start:"/var/www/html/src/pages/category/shop-by-departments/shop-by-departments.html"*/'<ion-content padding>\n<div class="wrapper">\n	<div class="container saved-main mb-3">\n        <div class="row setFontSize">\n            <div class="col-lg-12 col-md-12 col-xl-12 col-12">\n                <p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n				<p class="mb-2 setFontSize">\n					<a href="#/home" class="breadcrumblink">Home</a>&nbsp;\n						<i class="fa fa-angle-right"></i>&nbsp;\n                    <a href="#" class="breadcrumblink">Shop By Departments</a>\n				</p>\n            </div>\n        </div>\n		\n        <div class="row m-0">\n            <div class="col-lg-12 col-md-12 col-12 p-0">\n                <h5 class="mb-2">Shop By Departments</h5>\n            </div>\n        </div>\n\n        <div class="row saved-product-list mt-2 pt-3 pb-3 border bg-light rounded m-0">\n            <div class="col-lg-3 col-md-4 col-6 mb-3 setFontSize" *ngFor="let catdata of subCategotyData?.data">\n                <a (click)="gotoCategoryPage(catdata?.id)">\n                    <div class="img__wrap" *ngIf="catdata?.category_image != \'\'">\n                        <img src="{{cat_image}}{{catdata?.category_image}}" class="img-fluid menclothesimages" />\n                    </div>\n					<div class="img__wrap" *ngIf="catdata?.category_image == \'\'">\n                        <img src="assets/images/category.png" class="img-fluid menclothesimages" />\n                    </div>\n                    <p class="pt-2 saved-price">{{catdata?.category_name}}</p>\n                </a>\n            </div>\n        </div>\n    </div>\n	<footer-page></footer-page>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/category/shop-by-departments/shop-by-departments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ShopByDepartmentsPage);
    return ShopByDepartmentsPage;
}());

//# sourceMappingURL=shop-by-departments.js.map

/***/ })

});
//# sourceMappingURL=59.js.map