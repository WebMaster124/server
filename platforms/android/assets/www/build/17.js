webpackJsonp([17],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewProductPageModule", function() { return PreviewProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_product__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PreviewProductPageModule = /** @class */ (function () {
    function PreviewProductPageModule() {
    }
    PreviewProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__preview_product__["a" /* PreviewProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__preview_product__["a" /* PreviewProductPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], PreviewProductPageModule);
    return PreviewProductPageModule;
}());

//# sourceMappingURL=preview-product.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__replace_string_replace_string__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replace_underscore_replace_underscore__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__remove_underscore_remove_underscore__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discount_discount__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__removeplus_sign_removeplus_sign__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__replace_name_replace_name__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__date_time_format_filter_date_time_format_filter__ = __webpack_require__(765);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__replace_string_replace_string__["a" /* ReplaceStringPipe */],
                __WEBPACK_IMPORTED_MODULE_2__replace_underscore_replace_underscore__["a" /* ReplaceUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_3__remove_underscore_remove_underscore__["a" /* RemoveUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_4__discount_discount__["a" /* DiscountPipe */],
                __WEBPACK_IMPORTED_MODULE_5__removeplus_sign_removeplus_sign__["a" /* RemoveplusSignPipe */],
                __WEBPACK_IMPORTED_MODULE_6__replace_name_replace_name__["a" /* ReplaceNamePipe */],
                __WEBPACK_IMPORTED_MODULE_7__date_time_format_filter_date_time_format_filter__["a" /* DateTimeFormatFilterPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__replace_string_replace_string__["a" /* ReplaceStringPipe */],
                __WEBPACK_IMPORTED_MODULE_2__replace_underscore_replace_underscore__["a" /* ReplaceUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_3__remove_underscore_remove_underscore__["a" /* RemoveUnderscorePipe */],
                __WEBPACK_IMPORTED_MODULE_4__discount_discount__["a" /* DiscountPipe */],
                __WEBPACK_IMPORTED_MODULE_5__removeplus_sign_removeplus_sign__["a" /* RemoveplusSignPipe */],
                __WEBPACK_IMPORTED_MODULE_6__replace_name_replace_name__["a" /* ReplaceNamePipe */],
                __WEBPACK_IMPORTED_MODULE_7__date_time_format_filter_date_time_format_filter__["a" /* DateTimeFormatFilterPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplaceStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the ReplaceStringPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ReplaceStringPipe = /** @class */ (function () {
    function ReplaceStringPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ReplaceStringPipe.prototype.transform = function (value, args) {
        var filter = args;
        return filter ? value.replace('Days_', '') : value;
    };
    ReplaceStringPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'replaceString',
        })
    ], ReplaceStringPipe);
    return ReplaceStringPipe;
}());

//# sourceMappingURL=replace-string.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplaceUnderscorePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the ReplaceUnderscorePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ReplaceUnderscorePipe = /** @class */ (function () {
    function ReplaceUnderscorePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ReplaceUnderscorePipe.prototype.transform = function (value, args) {
        var filter = args;
        return filter ? value.replace(/\s/g, '_') : value;
    };
    ReplaceUnderscorePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'replaceUnderscore',
        })
    ], ReplaceUnderscorePipe);
    return ReplaceUnderscorePipe;
}());

//# sourceMappingURL=replace-underscore.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveUnderscorePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the RemoveUnderscorePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var RemoveUnderscorePipe = /** @class */ (function () {
    function RemoveUnderscorePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RemoveUnderscorePipe.prototype.transform = function (value, args) {
        var filter = args;
        return filter ? value.replace('_', ' ') : value;
    };
    RemoveUnderscorePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'removeUnderscore',
        })
    ], RemoveUnderscorePipe);
    return RemoveUnderscorePipe;
}());

//# sourceMappingURL=remove-underscore.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the DiscountPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var DiscountPipe = /** @class */ (function () {
    function DiscountPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    DiscountPipe.prototype.transform = function (value, args) {
        var tmp = args;
        return (tmp > 0) ? (value - (value * tmp) / 100) : value;
    };
    DiscountPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'discount',
        })
    ], DiscountPipe);
    return DiscountPipe;
}());

//# sourceMappingURL=discount.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveplusSignPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the RemoveplusSignPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var RemoveplusSignPipe = /** @class */ (function () {
    function RemoveplusSignPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RemoveplusSignPipe.prototype.transform = function (value, args) {
        var filter = args;
        return filter ? value.replace('+', '') : value;
    };
    RemoveplusSignPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'removeplusSign',
        })
    ], RemoveplusSignPipe);
    return RemoveplusSignPipe;
}());

//# sourceMappingURL=removeplus-sign.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplaceNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the ReplaceNamePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ReplaceNamePipe = /** @class */ (function () {
    function ReplaceNamePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ReplaceNamePipe.prototype.transform = function (value, args) {
        var filter = args;
        var getFirstChar = filter.substring(1, 0);
        var getLastChar = filter.substring(filter.length - 1);
        var setName = getFirstChar + '***' + getLastChar;
        return filter ? value.replace(filter, setName) : value;
    };
    ReplaceNamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'replaceName',
        })
    ], ReplaceNamePipe);
    return ReplaceNamePipe;
}());

//# sourceMappingURL=replace-name.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimeFormatFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the DateTimeFormatFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var DateTimeFormatFilterPipe = /** @class */ (function () {
    function DateTimeFormatFilterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    DateTimeFormatFilterPipe.prototype.transform = function (date, format) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]("en-US");
        date = datePipe.transform(date, format);
        return date;
    };
    DateTimeFormatFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateTimeFormatFilter',
        })
    ], DateTimeFormatFilterPipe);
    return DateTimeFormatFilterPipe;
}());

//# sourceMappingURL=date-time-format-filter.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(357);
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
 * Generated class for the PreviewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreviewProductPage = /** @class */ (function () {
    function PreviewProductPage(googleanalytics, plt, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('PreviewProduct');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    PreviewProductPage.prototype.ngAfterViewInit = function () {
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
    PreviewProductPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('previewProduct body');
        $(document).prop('title', 'Preview Product');
        var cookie_data = localStorage.getItem('previeProduct');
        this.showpreviewdata = JSON.parse(cookie_data);
        this.specification_arr = Object.entries(this.showpreviewdata.specification[0]);
        var d = new Date();
        this.showYear = d.getFullYear();
    };
    PreviewProductPage.prototype.shipingtabseedetail = function () {
        document.getElementById('seedetailactivtab').click();
        this.content.scrollTo(0, 660, 1500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], PreviewProductPage.prototype, "content", void 0);
    PreviewProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-preview-product',template:/*ion-inline-start:"/var/www/html/src/pages/product/preview-product/preview-product.html"*/'<ion-content padding class="product-detail">\n<div class="wrapper">\n	<div class="container mb-3">\n        <div class="row ">\n            <div class="col-lg-12 col-md-12 col-xl-12 col-12 breadcrumblink_div">\n                <p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n				<p>\n					<a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n					<a href="#/add-product" class="breadcrumblink">Add Product</a> &nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n                    <a class="breadcrumblink" disabled>Preview Product</a>\n                </p>\n            </div>\n        </div> \n        <!--Varticle menu start-->\n        <div class="row m-0 justify-content-center">\n            <div class="col-lg-4 col-md-6 col-10 pl-lg-0">\n                <div id="magnific">\n					<div class="row">\n					<div class="large-5 column mr-3 col-12">\n						<div class="xzoom-container text-center" id="disp_zoom_img">\n							<img id="zoom_demo" class="galleryimg" src="{{showpreviewdata?.photos[0]}}">\n                            <div class="xzoom-thumbs gallery_demo">\n                                <img class="thumb_border" width="80" src="{{imgdisp}}" *ngFor="let imgdisp of showpreviewdata?.photos" />\n                            </div>\n						</div>\n                    </div>\n				        <div class="large-7 column"></div>\n                    </div>\n                </div>\n                <div class="col-lg-12">\n                    <div class="Upgrading text-center">\n                        <span class="Upgradingtxt breadcrumblink_div">Upgrading? Sell it, don\'t trade it. </span>\n                        <a class="btn theme-light-btn" role="button">Sell Now</a>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-8 col-md-12 col-12 p-lg-0">\n                <div class="row">\n                    <div class="col-lg-12 col-md-12 col-12 pb-2 itemdescription mt-2">\n                        <h5 class="mb-1">{{showpreviewdata?.title}}</h5>\n                        <p class="mb-1 breadcrumblink_div">Warranty : {{showpreviewdata?.specification[0].Warranty[0]}}</p>\n                        <p class="mb-1">\n							<span class="ratings">\n								<div class="empty-stars"></div>\n								<div class="full-stars" style="width:0%"></div>\n							</span>\n                            <span class="text-primary">\n                                <a>0 product ratings </a>\n                            </span>\n                            <span class="writeDiv">\n                                <b>|</b> &nbsp;<a>Write a review</a>\n                            </span>\n                        </p>\n                        <div class="row m-0">\n                            <div class="col-lg-6 col-md-6 col-12 p-0">\n                                <p class="m-0 totalview"><i class="fa fa-eye"></i>  0 viewed per hour</p>\n                            </div>\n                            <div class="col-lg-6 col-md-6 col-12 p-0">\n                                <p class="text-lg-right text-md-left text-left m-0">SKU No: 156989</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="row">\n                    <div class="col-lg-8 col-md-12 col-12 pb-2 mt-3 itemconditionform p-md-0">\n                        <form class="form-horizontal breadcrumblink_div">\n                            <div class="form-group row mb-1">\n                                <label class="control-label col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right mt-1">Condition:</label>\n                                <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                    <p class="font-weight-bold m-0">{{showpreviewdata?.p_condition}}</p>\n                                </div>\n                            </div>\n                            <div class="form-group row mb-1">\n                                <label class="control-label col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right mt-1"></label>\n                                <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                    <p class="font-italic">{{showpreviewdata?.condition_description}}\n                                </div>\n                            </div>\n\n                            <div class="form-group row mb-1" *ngIf="showpreviewdata?.specification[0].Color.length > 0">\n                                <label class="control-label col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right mt-1"><span class="text-danger font-weight-bold ">*</span>Color:</label>\n                                <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                    <select class="form-control selectcolor select-color" id="color" name="select_color">\n                                        <option value="-1">-Select-</option>\n                                        <option *ngFor="let colorData of showpreviewdata?.specification[0].Color;" [value]="colorData">{{colorData}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class="form-group row mb-1 mt-3" *ngIf="showpreviewdata?.specification[0].Size.length > 0">\n                                <label class="control-label col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right mt-1"><span class="text-danger font-weight-bold Z">*</span>Size:</label>\n                                <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                    <select class="form-control selectcolor select-size" id="size">\n                                        <option value="-1">-Select-</option>\n                                        <option *ngFor="let sizeData of showpreviewdata?.specification[0].Size;" [value]="sizeData">{{sizeData}}</option>\n                                    </select>\n                                </div>\n                            </div>\n\n                            <div class="priceformform-group row mt-3">\n                                <label class="control-label col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right mt-1 pricelabel">Quantity:</label>\n                                <div class="col-sm-3 col-lg-3 col-md-3 col-3">\n                                    <input type="number" class="form-control pricetxtbox" id="price1" value="1">\n                                </div>\n                                <p class="control-label col-sm-7 col-lg-7 col-md-5 col-6 p-lg-0 text-left pricelabel">\n                                     <span class="solditem">{{showpreviewdata?.quantity}}</span> Quantity available\n                                </p>\n                            </div>\n                        </form>\n						<div class="row itempricediv ml-0 mr-0 mt-0 pt-2 pb-2 mb-2 mt-3 breadcrumblink_div" *ngIf="showpreviewdata?.selling_type == \'Auction style\';else showfixprice"> <!-- *ngIf="show_categoryDetails?.data[0].selling_type == \'Auction style\';else showfixprice" -->\n                            <div class="col-lg-6 col-md-12 col-12 priceusdollar text-left">\n                                <div class="row">\n                                    <div class="col-lg-5 col-md-5 col-5 text-right pr-2">\n                                        Starting bid:\n                                    </div>\n                                    <div class="col-lg-7 col-md-7 col-7 pl-1">\n                                        <span class="pl-2 usdollarprice">{{showpreviewdata?.min_price}}</span>\n                                        <div class="row m-0">\n                                            <div class="col-lg-12 col-md-12 col-12 pl-1">\n                                                <div class="form-group">\n                                                    <input class="w-50 form-control form-control-sm bid-input" id="inputbid" type="text">\n                                                </div>\n                                            </div>\n                                            <div class="col-lg-12 col-md-12 col-12 pl-1 pr-0">\n                                                <p class="m-0 enter-price">Enter {{showpreviewdata?.price}} or more</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-lg-6 col-md-7 col-7 offset-5 pl-2 offset-lg-0 offset-md-5 addtocart">\n                                <div class="row">\n                                    <div class="col-lg-12 col-md-12 col-12">\n                                        [<a> 0 bids </a>]\n                                    </div>\n                                    <div class="col-lg-12 col-md-12 col-12 mt-2">\n                                        <a class="btn theme-light-btn" data-toggle="modal" data-target="#modalAuctionBid">Place bid</a>\n                                    </div>\n									<div class="col-lg-12 col-md-12 col-12 mt-2">\n										<a>\n											<p class="mb-1 addtowatchlist">\n												<i class="fa fa-plus pr-1"></i> Add to wish list\n											</p>\n										</a>\n									</div>\n                                </div>\n                            </div>\n                        </div>\n						<ng-template #showfixprice>\n							<div class="row itempricediv m-0 pt-2 mb-lg-4 breadcrumblink_div mb-3">\n								<div class="col-lg-6 col-md-12 col-12 priceusdollar text-left" *ngIf="showpreviewdata?.discount > 0">\n									List price: <span class="pl-2 text_deco"> {{showpreviewdata?.price}} AED </span> <br />\n                                    You save: <span class="pl-2">  {{showpreviewdata?.discount}} <span *ngIf="showpreviewdata?.discount == \'\'"> 0 </span>% OFF </span> <br />\n									Now: <span class="pl-2 usdollarprice"> {{ showpreviewdata?.price - showpreviewdata?.price * showpreviewdata?.discount / 100}} AED</span>\n								</div>\n								\n                                <div class="col-lg-6 col-md-12 col-12 priceusdollar text-left" *ngIf="showpreviewdata?.discount <= 0">\n                                    Price: <span class="pl-2"> {{showpreviewdata?.price}} AED </span>\n                                </div>\n\n								<div class="col-lg-6 col-md-12 col-12 addtocart">\n									<div class="row">\n										<div class="col-lg-12 col-md-4 col-6 mt-lg-0 mt-md-2 mt-2">\n											<a class="btn theme-light-btn" role="button">Buy It Now</a>\n										</div>\n										\n										<div class="col-lg-12 col-md-4 col-6 mt-2 mt-md-2">\n											<a class="btn theme-dark-btn" role="button">Add to cart</a>\n										</div>\n\n                                        <div class="col-lg-12 col-md-4 col-12 text-lg-left text-md-left text-center mt-2" *ngIf="showpreviewdata?.make_offer == 1">\n                                            <button class="btn theme-dark-btn">Make Offer</button>\n                                        </div>\n\n										<div class="col-lg-12 col-md-4 col-12 mt-2 text-lg-left text-md-left text-center">\n											<a>\n												<p class="mb-1 addtowatchlist">\n													<i class="fa fa-plus pr-1"></i> Add to wish list\n												</p>\n											</a>\n											\n										</div>\n									</div>\n								</div>\n								<div class="col-lg-4 col-md-6 col-12 mt-1 morethansold text-center pt-2 pb-2 borderrightsold">\n									<p class="m-0 solditem">0 sold</p>\n								</div>\n								<div class="col-lg-4 col-md-6 col-12 mt-1 morethansold text-center pt-2 pb-2 borderrightsold">\n									<p class="m-0">0% sold</p>\n								</div>\n								<div class="col-lg-4 col-md-12 col-12 mt-1 morethansold text-center pt-2 pb-2">\n									<p class="m-0" *ngIf="showpreviewdata?.return_opt == \'No\';else showreturn"> No Return </p>\n									<ng-template #showreturn>\n										<p class="m-0">{{showpreviewdata?.return_opt | replaceString:showpreviewdata?.return_opt}} <span *ngIf="showpreviewdata?.return_opt != \'No\'">days </span>returns</p>\n											\n										<!--<p class="m-0" *ngIf="showpreviewdata?.return_opt == \'Days_30\'">30 Days</p>\n										<p class="m-0" *ngIf="showpreviewdata?.return_opt == \'Days_60\'">60 Days</p>\n										<p class="deleveryans m-0" *ngIf="showpreviewdata?.return_opt == \'No\'">No Return</p>-->\n									</ng-template>\n								</div>\n							</div>\n						</ng-template>\n                        <div class="row mb-1 shiptedcondition breadcrumblink_div">\n                            <div class="col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right">Shipping:</div>\n                            <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                <p class="font-weight-bold m-0 notshipindia">\n                                    <a (click)="shipingtabseedetail()"><span class="seedetails"> &nbsp;See details</span></a></p>\n                                <p class="m-0 itemlocation">item location: {{showpreviewdata?.product_address}}</p>\n                                <p class="m-0 itemlocation"><span> Ships to: {{showpreviewdata?.product_address}}  </span> </p>\n                            </div>\n                        </div>\n                        <div class="row mb-1 mt-1 breadcrumblink_div">\n                            <div class="col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right">Delivery: </div>\n                            <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                <p class="deleveryans m-0"> \n									<span>{{showpreviewdata?.shipment_type}}</span>									\n								</p>\n                            </div>\n                        </div>\n                        <div class="row mb-1 mt-1 paymentcondition breadcrumblink_div">\n                            <div class="col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right">Payment:</div>\n                            <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                <div class="m-0" *ngIf="showpreviewdata?.payment_opt == \'1,2\'"><span ><img src="assets/images/logopaypal.png" class="mr-0"><img src="assets/images/payment_icons.png" class="img-fluid">,</span><span class="pl-2">Cash on delivery</span></div>\n                                <div class="m-0" *ngIf="showpreviewdata?.payment_opt == \'1\'"><span ><img src="assets/images/logopaypal.png" class="mr-0"><img src="assets/images/payment_icons.png" class="img-fluid"></span></div>\n                                <div class="m-0" *ngIf="showpreviewdata?.payment_opt == \'2\'"><span >Cash on delivery</span></div>\n                            </div>\n                        </div>\n                        <div class="row mb-1 mt-1 returnscondition breadcrumblink_div">\n                            <div class="col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right">Returns:</div>\n                            <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                <p class="deleveryans m-0">{{ showpreviewdata?.return_opt |\n                                        replaceString:showpreviewdata?.return_opt}} <span\n                                                *ngIf="showpreviewdata?.return_opt != \'No\'">days </span>\n                                        returns. <span *ngIf="showpreviewdata?.return_opt != \'No\'">{{showpreviewdata?.return_policy}}</span>\n							</div>\n                        </div>\n                        \n                    </div>\n                    <div class="col-lg-4 col-md-12 col-12 pb-2 mt-3 pr-0 topratedplus">\n                        <div class="row pr-3">\n                            <div class="col-lg-12 col-md-6 col-12 toprateddiv pt-2 pb-2">\n                                <div class="row starcontent pb-1">\n                                    <div class="col-lg-9 col-md-8 col-8 pl-0 pr-0 breadcrumblink_div">\n                                        <a><p class="buysprytxt mb-1">{{localItem?.display_name}} ( 1 <i class="fa fa-star star"></i>  )</p></a>\n                                        <p class="mb-1">100% Positive feedback</p>\n                                    </div>\n                                    </div>\n                                <div class="row saveseller pt-1 breadcrumblink_div">\n                                    <div class="col-lg-12 col-md-12 col-12 pl-0 pr-0">\n                                        <a><p class="savesellertxt mb-1"><i class="fa fa-heart-o"></i> Save this seller</p></a>\n										\n                                        <a><p class="savesellertxt mb-1"> Contact seller</p></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n		<div class="row productdescriptiontabrow mt-3">\n            <div class="col-lg-12 col-md-12 col-12 productdescriptiontab p-0">\n                <!-- Nav tabs -->\n                <div class="row ml-0 mr-0">\n                    <div class="col-lg-11 col-9 col-md-10 p-0">\n                        <ul class="nav detailnavigationtab" role="tablist">\n                            <li role="presentation" class="descriptiontabing active" id="descriptiontab">\n							<a href="#description" role="tab" class="btn tablistinbtn active show" data-toggle="tab">Description</a>\n                            </li>\n                            <li role="presentation" class="descriptiontabing">\n							<a href="#shippingandpayments" id="seedetailactivtab" class="btn tablistinbtn" role="tab" data-toggle="tab">Shipping ,Returns and Payments</a></li>\n                        </ul>\n                    </div>\n                    <div class="col-lg-1 col-3 col-md-2 text-right pl-0 pr-0 pr-xl-3 pr-lg-3">\n                        <a><p class="reportitem itemfortxt mb-0 breadcrumblink_div">Report item</p></a>\n                    </div>\n                    <!-- Tab panes -->\n                    <div class="col-lg-12 col-md-12 col-12 tab-content p-lg-4 p-md-3 p-2">\n                        <div role="tabpanel" class="tab-pane active" id="description">\n                            <div class="col-lg-12 col-md-12 col-12 pl-0 pr-0 mb-3 breadcrumblink_div">\n                                <p class="text-right itemnumber mb-2">SKU No: 156989</p>\n                                <p class="mb-2">Seller assumes all responsibility for this listing.</p>\n                                <p class="mb-0">Last updated on \n									<span class="font-weight-bold">Apr 13, 2018 03:43:03</span>\n								</p>\n                            </div>\n                            <div class="row mb-2 mb-lg-3 mb-xl-3 ml-0 mr-0 frontbg">\n                                <div class="col-lg-12 col-md-12 col-12 pl-3 pt-2 pb-2">\n                                    <h6 class="m-0">Item specifics</h6>\n                                </div>\n                            </div>\n                            <div class="col-lg-12 col-md-12 col-12 pl-3 pt-3 pb-1 pr-3 itemspecifics">\n                                <div class="row sellerrefurbished m-0 p-2 breadcrumblink_div">\n                                    <div class="col-lg-1 col-md-2 col-4 p-0">\n                                        <p class="m-0">Condition:</p>\n                                    </div>\n                                    <div class="col-lg-11 col-md-10 col-8 p-0">\n                                        <p class="m-0 font-weight-bold">{{showpreviewdata?.p_condition}}</p>\n                                    </div>\n                                </div>\n\n                                <div class="row itemspecificssub m-0 pl-0 pr-0 pt-2 pb-2">\n                                    <div class="col-lg-6 col-md-12 col-12 p-0 pl-lg-4 pr-lg-2">\n                                        <table class="table breadcrumblink_div">\n                                            <tbody>\n												<tr *ngFor="let itmsp of specification_arr;index as i">\n													<td class="firsttd" *ngIf="itmsp[1].length > 0 && itmsp[1][0] != \'\' && itmsp[0] != \'Item_Description\'">{{itmsp[0] | removeUnderscore:itmsp[0]}}:</td>\n													<td class="secondtd" *ngIf="itmsp[1].length > 0 && itmsp[1][0] != \'\' && itmsp[0] != \'Item_Description\'">{{itmsp[1]}}</td>\n												</tr>\n                                           </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row mt-3 mb-2 mb-lg-3 mb-xl-3 ml-0 mr-0 frontbg target_div">\n                                <div class="col-lg-12 col-md-12 col-12 pl-3 pt-2 pb-2">\n                                    <h6 class="m-0">Product Description</h6>\n                                </div>\n                            </div>\n                            <div class="row mt-3 ml-0 mr-0 pb-3">\n                                <div class="col-lg-12 col-md-12 col-12 pl-3 pt-2 pb-2 shopvarticledetail">\n                                    <div class="shopvarticledetailsublaw mb-lg-3 breadcrumblink_div">\n                                        <p [innerHTML]="showpreviewdata?.specification[0].Item_Description"></p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div role="tabpanel" class="tab-pane" id="shippingandpayments">\n                            <div class="col-lg-12 col-md-12 col-12 pl-0 pr-0 mb-3">\n                                <p class="mb-2 breadcrumblink_div">Seller assumes all responsibility for this listing.</p>\n                            </div>\n                            <div class="row mb-2 mb-lg-3 mb-xl-3 ml-0 mr-0 frontbg">\n                                <div class="col-lg-12 col-md-12 col-12 pl-3 pt-2 pb-2">\n                                    <h6 class="m-0">Shipping and handling</h6>\n                                </div>\n                            </div>\n                            <div class="row shipingandhandling m-0 pb-3" id="shippingandhandlingtabdetail">\n                                <div class="col-lg-12 col-md-12 col-12 pl-3 pt-3 pb-1 pr-3">\n                                    <table class="table breadcrumblink_div">\n                                        <tbody>\n                                        <tr>\n                                            <td class="firsttd">Item location:</td>\n                                            <td class="secondtd">{{showpreviewdata?.product_address}}</td>\n                                        </tr>\n                                        <tr>\n                                            <td class="firsttd">Shipping to:</td>\n                                            <td class="secondtd"><span> {{showpreviewdata?.product_address}} </span>\n											</td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                            <div class="row mb-2 mb-lg-3 mb-xl-3 ml-0 mr-0 frontbg">\n                                <div class="col-lg-12 col-md-12 col-12 pl-3 pt-2 pb-2">\n                                    <h6 class="m-0">Return policy <span class="pl-4" *ngIf="showpreviewdata?.return_opt == \'No\'">Not Applicable</span></h6>\n                                </div>\n                            </div>\n                            <div class="row shipingandhandling ml-0 mr-0 mt-3 mb-0 pb-3">\n                                <div class="col-lg-12 col-md-12 col-12 pl-3 pt-3 pb-1 pr-3" id="returnpolicy" *ngIf="showpreviewdata?.return_opt != \'No\'">\n                                    <table class="table breadcrumblink_div">\n                                        <thead class="thead-dark">\n                                        <tr>\n                                            <th scope="col" class="pl-3">After receiving the item, contact seller\n                                                within\n                                            </th>\n                                            <th scope="col">Refund will be given as</th>\n                                            <th scope="col">Return shipping</th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr>\n                                            <td class="pl-3">{{ showpreviewdata?.return_opt | replaceString:showpreviewdata?.return_opt }} <span *ngIf="showpreviewdata?.return_opt != \'No\'">days </span> returns</td>\n                                            <td>-</td>\n                                            <td><span *ngIf="showpreviewdata?.ship_to == \'buyer\'">Buyer pays for return shipping</span>\n                                                <span *ngIf="showpreviewdata?.ship_to == \'seller\'">Seller pays for return shipping</span>\n                                                <span *ngIf="showpreviewdata?.ship_to != \'seller\' && showpreviewdata?.ship_to != \'buyer\'">-</span>\n                                            </td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class="col-lg-12 col-md-12 col-12">\n                                    <div class="returnpolicydetails pl-3 pt-1 pb-1 pr-3">\n                                        <p class="m-0 breadcrumblink_div">Return policy details</p>\n                                    </div>\n                                    <div class="returnpolicydetailstxt pl-3 pt-1 pb-1 pr-3 breadcrumblink_div">\n                                        <p class="m-1">\n                                            {{ showpreviewdata?.return_policy }}\n                                        </p>\n                                        <p *ngIf="showpreviewdata?.return_policy == null">\n                                            Seller does not have a return policy\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row mb-2 mb-lg-3 mb-xl-3 ml-0 mr-0 frontbg">\n                                <div class="col-lg-12 col-md-12 col-12 pl-3 pt-2 pb-2">\n                                    <h6 class="m-0">Payment details</h6>\n                                </div>\n                            </div>\n                            <div class="row shipingandhandling ml-0 mr-0 mt-3 mb-0 pb-3" id="paypalaccepted">\n                                <div class="col-lg-12 col-md-12 col-12 pt-2">\n                                    <div class="row m-0 returnpolicydetails pl-3 pt-1 pb-1 pr-3">\n                                        <div class="col-lg-5 col-md-5 col-7 pl-0">\n                                            <p class="m-0 breadcrumblink_div">Payment method</p>\n                                        </div>\n                                        <div class="col-lg-7 col-md-7 col-5 pl-0">\n                                            <p class="m-0 breadcrumblink_div"> Preferred / Accepted</p>\n                                        </div>\n                                    </div>\n                                </div>\n								<div class="row w-100 pl-5" *ngIf="showpreviewdata?.payment_opt == \'1,2\'">\n                                    <div class="col-lg-5 col-md-5 col-7 pt-2 pl-lg-4">\n                                        <img src="assets/images/logopaypal.png" class="img-fluid"> <img src="assets/images/payment_icons.png" class="img-fluid"> \n                                    </div>\n                                    <div class="col-lg-5 col-md-5 col-5 pt-2 pl-lg-1">\n                                        <p class="m-0 breadcrumblink_div">Accepted</p>\n                                    </div>\n\n                                    <div class="col-lg-5 col-md-5 col-7 pt-2 pl-lg-4">\n                                        <p class="m-0 breadcrumblink_div"> Cash On Delivery </p>\n                                    </div>\n                                    <div class="col-lg-5 col-md-5 col-5 pt-2 pl-lg-1">\n                                        <p class="m-0 breadcrumblink_div">Accepted</p>\n                                    </div>\n                                </div>\n\n                                <div class="row w-100 pl-5" *ngIf="showpreviewdata?.payment_opt == \'1\'">\n                                    <div class="col-lg-5 col-md-5 col-7 pt-2 pl-lg-4">\n                                        <img src="assets/images/logopaypal.png" class="img-fluid"> <img src="assets/images/payment_icons.png" class="img-fluid">\n                                    </div>\n                                    <div class="col-lg-5 col-md-5 col-5 pt-2 pl-lg-1">\n                                        <p class="m-0 breadcrumblink_div">Accepted</p>\n                                    </div>\n                                </div>\n\n                                <div class="row w-100 pl-5" *ngIf="showpreviewdata?.payment_opt == \'2\'">\n                                    <div class="col-lg-5 col-md-5 col-7 pt-2 pl-lg-4">\n                                        <p class="m-0 breadcrumblink_div"> Cash On Delivery </p>\n                                    </div>\n                                    <div class="col-lg-5 col-md-5 col-5 pt-2 pl-lg-1">\n                                        <p class="m-0 breadcrumblink_div">Accepted</p>\n                                    </div>\n                                </div>\n							</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n	</div>\n</div>\n    <!--================Footer Area =================-->\n<footer-page></footer-page>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/product/preview-product/preview-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PreviewProductPage);
    return PreviewProductPage;
}());

//# sourceMappingURL=preview-product.js.map

/***/ })

});
//# sourceMappingURL=17.js.map