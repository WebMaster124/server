webpackJsonp([11],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());

//# sourceMappingURL=product-details.module.js.map

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

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ez_plus__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ez_plus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ez_plus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_analytics__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(googleanalytics, alertCtrl, events, plt, fb, infoService, modalCtrl, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.plt = plt;
        this.fb = fb;
        this.infoService = infoService;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
        this.imgarray = [];
        this.specificationarr_obj = {};
        this.localItem = '';
        this.dispMakeOffer = false;
        this.select_color = '';
        this.avgCountArr = [];
        this.colorForm = fb.group({
            'color': ['-1', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            'size': ['-1', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
        });
        this.events.subscribe('productdetails:functioncall', function () {
            _this.showDetails();
        });
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('Product Details');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    ProductDetailsPage.prototype.ngAfterViewInit = function () {
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
    ProductDetailsPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $('#search-form')[0].reset();
        $('body').removeClass().addClass('ProductDetail body');
        $(".dropdown-content-my-account, .dropdown.withmydibdaa").hover(function () {
            $('#zoom_demo-zoomContainer').css('position', '');
        }, function () {
            $('#zoom_demo-zoomContainer').css('position', 'absolute');
        });
        this.viewperHour();
        this.showDetails();
    };
    ProductDetailsPage.prototype.shipingtabseedetail = function () {
        document.getElementById('seedetailactivtab').click();
        this.content.scrollTo(0, 660, 1500);
    };
    ProductDetailsPage.prototype.showBottom = function () {
        this.content.scrollToBottom(1500);
    };
    ProductDetailsPage.prototype.showDetails = function () {
        var _this = this;
        var pro_type;
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false) {
            pro_type = {
                product_id: this.navParams.data.id
            };
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
                pro_type = {
                    product_id: this.navParams.data.id
                };
            }
            else {
                pro_type = {
                    product_id: this.navParams.data.id,
                    user_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id
                };
            }
        }
        try {
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/view-product', pro_type, function (response) {
                if (response.data.length > 0) {
                    _this.show_categoryDetails = response;
                    $(document).prop('title', response.data[0].title);
                    _this.specification_arr = Object.entries(response.data[0].specification[0]);
                    var self = _this;
                    for (var a = 0; a < response.data[0].product_avg; a++) {
                        _this.avgCountArr.push(a);
                    }
                    setTimeout(function () {
                        $('.gallery_demo:last#gallery_demo').empty();
                        for (var i = 0; i < response.data[0].photos.length; i++) {
                            var imgfullpath_large = self.trandingImgUrl + response.data[0].product_id + '/L/' + response.data[0].photos[i];
                            $('.gallery_demo:last#gallery_demo').append('<a data-zoom-image="' + imgfullpath_large + '" data-image="' + imgfullpath_large + '"><img class="thumb_border" width="80" height="80" src="' + imgfullpath_large + '" title="image-' + i + '" xpreview="' + imgfullpath_large + '"></a>');
                        }
                        $('.zoom_demo:last#zoom_demo').attr('src', self.trandingImgUrl + response.data[0].product_id + '/L/' + response.data[0].photos[0]);
                        $('.zoom_demo:last#zoom_demo').attr('data-zoom-image', self.trandingImgUrl + response.data[0].product_id + '/L/' + response.data[0].photos[0]);
                        if ($(window).width() > 768) {
                            $(".zoom_demo:last#zoom_demo").ezPlus({
                                gallery: 'gallery_demo',
                                cursor: 'pointer',
                                easing: true,
                                scrollZoom: false,
                                galleryActiveClass: "active",
                            });
                        }
                        else {
                            $('.zoom_demo:last#zoom_demo').ezPlus({
                                constrainType: 'height', zoomType: 'lens',
                                containLensZoom: true, gallery: 'gallery_demo', cursor: 'pointer', galleryActiveClass: 'active'
                            });
                        }
                    }, 500);
                    _this.infoService.hideLoading();
                }
                else {
                    $(document).attr('title', 'Product Details');
                    _this.show_categoryDetails = response;
                    $('.error_inner:last').removeClass('d-none');
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
        catch (Error) {
            console.log(Error);
            this.infoService.hideLoading();
        }
    };
    ProductDetailsPage.prototype.viewperHour = function () {
        var _this = this;
        try {
            var pro_viewperHour = {
                product_id: this.navParams.data.id
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/view-per-hour', pro_viewperHour, function (response) {
                if (response.status == "success") {
                    _this.perHourcnt = response.count;
                }
                else {
                    _this.perHourcnt = 0;
                }
            }, function (error) {
                console.log(error);
            });
            this.addrecentlyview();
        }
        catch (Error) {
            console.log(Error);
        }
    };
    ProductDetailsPage.prototype.addrecentlyview = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false) {
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
            }
            else {
                try {
                    var pro_recent = {
                        product_id: this.navParams.data.id,
                        user_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id //login_id
                    };
                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/add-recently-view', pro_recent, function (response) {
                    }, function (error) {
                        console.log(error);
                    });
                }
                catch (Error) {
                    console.log(Error);
                }
            }
        }
    };
    ProductDetailsPage.prototype.save_seller = function (val) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false) {
            $(".zoomContainer").remove();
            localStorage.setItem('getPageDetails', 'ProductDetailsPage');
            this.navCtrl.push('LoginPage', {
                id: 'login'
            });
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
            }
            else {
                try {
                    var sav_seller = {
                        user_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id,
                        seller_id: this.show_categoryDetails.data[0].user_id,
                        status: val
                    };
                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/save-seller', sav_seller, function (response) {
                        _this.callfunc();
                    }, function (error) {
                        console.log(error);
                    });
                }
                catch (Error) {
                    console.log(Error);
                }
            }
        }
    };
    ProductDetailsPage.prototype.callfunc = function () {
        var _this = this;
        var pro_callfunc = {
            product_id: this.navParams.data.id,
            user_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id
        };
        try {
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/view-product', pro_callfunc, function (response) {
                _this.show_categoryDetails = response;
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
            this.infoService.hideLoading();
        }
        finally {
            this.infoService.hideLoading();
        }
    };
    ProductDetailsPage.prototype.addCart = function (val) {
        var _this = this;
        if (parseInt($('.price1:last#price1').val()) > parseInt(val)) {
            $('.add_cartError:last#add_cartError').removeClass('d-none');
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false) {
                $(".zoomContainer").remove();
                localStorage.setItem('getPageDetails', 'ProductDetailsPage');
                this.navCtrl.push('LoginPage', {
                    id: 'login'
                });
            }
            else {
                if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
                }
                else {
                    if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id == this.show_categoryDetails.data[0].user_id) {
                        $('.error-wishlist#error-wishlist').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.error-wishlist#error-wishlist').addClass('d-none');
                    }
                    if ($('.price1:last#price1').val() <= 0) {
                        $('.buynow_Error:last#buynow_Error').removeClass('d-none');
                    }
                    else if ($('.select-color:last#color').val() == '-1') {
                        $('.Selection_Error:last#Selection_Error').removeClass('d-none');
                        $('.error-color:last#error-color').removeClass('d-none');
                        $('.error-size:last#error-size').addClass('d-none');
                    }
                    else if ($('.select-size:last#size').val() == '-1') {
                        $('.error-color:last#error-color').addClass('d-none');
                        $('.Selection_Error:last#Selection_Error').removeClass('d-none');
                        $('.error-size:last#error-size').removeClass('d-none');
                    }
                    else {
                        var color_arr = [], size_arr = [], spec_arraddcart = {}, condition_arr = [];
                        if (this.colorForm.controls.color.value == '-1') {
                            color_arr.push('-');
                        }
                        else {
                            color_arr.push(this.colorForm.controls.color.value);
                        }
                        if (this.colorForm.controls.size.value == '-1') {
                            size_arr.push('-');
                        }
                        else {
                            size_arr.push(this.colorForm.controls.size.value);
                        }
                        condition_arr.push(this.show_categoryDetails.data[0].p_condition);
                        spec_arraddcart['color'] = color_arr;
                        spec_arraddcart['size'] = size_arr;
                        spec_arraddcart['condition'] = condition_arr;
                        this.infoService.showLoading();
                        try {
                            $('.buynow_Error:last#buynow_Error').addClass('d-none');
                            $('.Selection_Error:last#Selection_Error').addClass('d-none');
                            var cart_details = {
                                product_id: this.navParams.data.id,
                                user_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id,
                                quantity: $('.price1:last#price1').val(),
                                specification: spec_arraddcart
                            };
                            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/cart/add-to-cart', cart_details, function (response) {
                                _this.infoService.hideLoading();
                                _this.select_color = '';
                                _this.callfunc();
                                _this.viewMsgCount();
                            }, function (error) {
                                console.log(error);
                                _this.infoService.hideLoading();
                            });
                        }
                        catch (Error) {
                            console.log(Error);
                            this.infoService.hideLoading();
                        }
                    }
                }
            }
        }
    };
    ProductDetailsPage.prototype.viewCart = function () {
        $(".zoomContainer").remove();
        this.navCtrl.push('ViewCartPage');
    };
    ProductDetailsPage.prototype.showwishList = function () {
        $(".zoomContainer").remove();
        this.navCtrl.push('SellerMyAccountPage', {
            id: 'WishList'
        });
    };
    ProductDetailsPage.prototype.removewishList = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false) {
            localStorage.setItem('getPageDetails', 'ProductDetailsPage');
            this.navCtrl.push('LoginPage', {
                id: 'login'
            });
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
            }
            else {
                var remove_wish = {
                    user_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id,
                    product_id: [this.navParams.data.id]
                };
                try {
                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/wishlist/remove-wishlist', remove_wish, function (response) {
                        _this.callfunc();
                    }, function (error) {
                        console.log(error);
                    });
                }
                catch (Error) {
                    console.log(Error);
                }
            }
        }
    };
    ProductDetailsPage.prototype.addwishlist = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false) {
            $(".zoomContainer").remove();
            localStorage.setItem('getPageDetails', 'ProductDetailsPage');
            this.navCtrl.push('LoginPage', {
                id: 'login'
            });
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
            }
            else {
                if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id == this.show_categoryDetails.data[0].user_id) {
                    $('.error-wishlist#error-wishlist').removeClass('d-none');
                    return;
                }
                else {
                    $('.error-wishlist#error-wishlist').addClass('d-none');
                }
                if ($('.price1:last#price1').val() <= 0) {
                    $('.buynow_Error:last').removeClass('d-none');
                }
                else if ($('.select-color:last#color').val() == '-1') {
                    $('.Selection_Error:last#Selection_Error').removeClass('d-none');
                    $('.error-color:last#error-color').removeClass('d-none');
                    $('.error-size:last#error-size').addClass('d-none');
                }
                else if ($('.select-size:last#size').val() == '-1') {
                    $('.error-color:last#error-color').addClass('d-none');
                    $('.Selection_Error:last#Selection_Error').removeClass('d-none');
                    $('.error-size:last#error-size').removeClass('d-none');
                }
                else {
                    var color_arrWish = [], size_arrWish = [], spec_arrWish = {}, condition_arrWish = [];
                    if (this.colorForm.controls.color.value == '-1') {
                        color_arrWish.push('-');
                    }
                    else {
                        color_arrWish.push(this.colorForm.controls.color.value);
                    }
                    if (this.colorForm.controls.size.value == '-1') {
                        size_arrWish.push('-');
                    }
                    else {
                        size_arrWish.push(this.colorForm.controls.size.value);
                    }
                    condition_arrWish.push(this.show_categoryDetails.data[0].p_condition);
                    spec_arrWish['color'] = color_arrWish;
                    spec_arrWish['size'] = size_arrWish;
                    spec_arrWish['condition'] = condition_arrWish;
                    $('.buynow_Error:last#buynow_Error').addClass('d-none');
                    $('.Selection_Error:last#Selection_Error').addClass('d-none');
                    var wishlist_add = {
                        user_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id,
                        product_id: this.navParams.data.id,
                        quantity: $('.price1:last#price1').val(),
                        specification: spec_arrWish
                    };
                    try {
                        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/wishlist/add-to-wishlist', wishlist_add, function (response) {
                            _this.callfunc();
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    catch (Error) {
                        console.log(Error);
                    }
                }
            }
        }
    };
    ProductDetailsPage.prototype.viewMsgCount = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
        }
        else {
            try {
                /*var id_uMsg = JSON.parse(this.retrievedObject);*/
                var msg_details = {
                    user_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/message/unread-msg-count', msg_details, function (response) {
                    if (response.count.status == "success" && response.count.cnt > 0) {
                        $('#ShowMessageCount').text(response.count.cnt);
                        $('#ShowMsgCount').text(response.count.cnt);
                    }
                    if (response.count.status == "success" && response.count.cart_total > 0) {
                        $('#addtoCount').text(response.count.cart_total);
                        $('#addtoCount_mobile').text(response.count.cart_total);
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
    ProductDetailsPage.prototype.buyNow = function (val) {
        var getColor = '', getSize = '';
        if (parseInt($('.price1:last#price1').val()) > parseInt(val)) {
            $('.buynow_Error:last#buynow_Error').removeClass('d-none');
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false) {
                $(".zoomContainer").remove();
                localStorage.setItem('getPageDetails', 'ProductDetailsPage');
                this.navCtrl.push('LoginPage', {
                    id: 'login'
                });
            }
            else {
                if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
                }
                else {
                    if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id == this.show_categoryDetails.data[0].user_id) {
                        $('.error-buy#error-buy').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.error-buy#error-buy').addClass('d-none');
                    }
                    if ($('.price1:last#price1').val() <= 0) {
                        $('.buynow_Error:last#buynow_Error').removeClass('d-none');
                    }
                    else if ($('.select-color:last#color').val() == '-1') {
                        $('.Selection_Error:last#Selection_Error').removeClass('d-none');
                        $('.error-color:last#error-color').removeClass('d-none');
                        $('.error-size:last#error-size').addClass('d-none');
                    }
                    else if ($('.select-size:last#size').val() == '-1') {
                        $('.error-color:last#error-color').addClass('d-none');
                        $('.Selection_Error:last#Selection_Error').removeClass('d-none');
                        $('.error-size:last#error-size').removeClass('d-none');
                    }
                    else {
                        getColor = this.colorForm.controls.color.value;
                        getSize = this.colorForm.controls.size.value;
                        var spec_arr = {};
                        if (getColor == '-1') {
                            spec_arr['color'] = '-';
                        }
                        else {
                            spec_arr['color'] = getColor;
                        }
                        if (getSize == '-1') {
                            spec_arr['size'] = '-';
                        }
                        else {
                            spec_arr['size'] = getSize;
                        }
                        spec_arr['condition'] = this.show_categoryDetails.data[0].p_condition;
                        $('.buynow_Error:last#buynow_Error').addClass('d-none');
                        $('.Selection_Error:last#Selection_Error').addClass('d-none');
                        var pass_data = {
                            user_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id,
                            product_id: this.show_categoryDetails.data[0].product_id,
                            quantity: $('.price1:last#price1').val(),
                            specification: spec_arr
                        };
                        $('.buynow_Error:last#buynow_Error').addClass('d-none');
                        $(".zoomContainer").remove();
                        var convert_stringify = JSON.stringify(pass_data);
                        var convert_encode = btoa(convert_stringify);
                        this.navCtrl.push('CheckOutPage', {
                            id: convert_encode
                        });
                    }
                }
            }
        }
    };
    ProductDetailsPage.prototype.contactSeller = function (val, val1, val2) {
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false) {
            $(".zoomContainer").remove();
            localStorage.setItem('getPageDetails', 'ProductDetailsPage');
            this.navCtrl.push('LoginPage', {
                id: 'login'
            });
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
            }
            else {
                $(".zoomContainer").remove();
                var contact_seller = {
                    seller_id: val1,
                    business_name: val,
                    userId: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id,
                    product_id: val2
                };
                var convert_stringify = JSON.stringify(contact_seller);
                var convert_encode = btoa(convert_stringify);
                this.navCtrl.push('ContactSellerPage', {
                    id: convert_encode
                });
            }
        }
    };
    ProductDetailsPage.prototype.ReportItem = function (proId, sellerName, Protitle, ProSKU, proimg) {
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false) {
            $(".zoomContainer").remove();
            localStorage.setItem('getPageDetails', 'ProductDetailsPage');
            this.navCtrl.push('LoginPage', {
                id: 'login'
            });
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
            }
            else {
                var reportData = {
                    ProId: proId,
                    SellerName: sellerName,
                    ProTitle: Protitle,
                    PROSKU: ProSKU,
                    ProImage: proimg
                };
                $(".zoomContainer").remove();
                var convert_stringify = JSON.stringify(reportData);
                var convert_encode = btoa(convert_stringify);
                this.navCtrl.push('ReportItemPage', {
                    id: convert_encode
                });
            }
        }
    };
    ProductDetailsPage.prototype.expanddvi = function () {
        $('#expandptag').toggleClass("expand", 1000);
    };
    ProductDetailsPage.prototype.leaveFeedback = function (val_proId, val_proTitle, val_proImage, val_sellerId) {
        var feedbackData = {
            ProId: val_proId,
            ProTitle: val_proTitle,
            ProImage: val_proImage,
            sellerId: val_sellerId,
        };
        $(".zoomContainer").remove();
        var convert_stringifyfeedback = JSON.stringify(feedbackData);
        var convert_encodefeedback = btoa(convert_stringifyfeedback);
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false || __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
            localStorage.setItem('getPageDetails', 'writereviewPage');
            localStorage.setItem('getreviewData', convert_encodefeedback);
            this.navCtrl.push('LoginPage', {
                id: 'login'
            });
        }
        else {
            this.navCtrl.push('LeaveProductRatingPage', {
                id: convert_encodefeedback
            });
        }
    };
    ProductDetailsPage.prototype.openModal = function (val_proId, val_sellerId, val_finalprice, val_cont) {
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false) {
            $(".zoomContainer").remove();
            localStorage.setItem('getPageDetails', 'ProductDetailsPage');
            this.navCtrl.push('LoginPage', {
                id: 'login'
            });
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
            }
            else {
                if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id == val_sellerId) {
                    $('.error-bid#error-bid').removeClass('d-none');
                    return;
                }
                else {
                    $('.error-bid#error-bid').addClass('d-none');
                }
                var modalPage;
                if (val_cont == 'one') {
                    if (parseInt(val_finalprice) > parseInt($('#inputbid').val())) {
                        $('#errorbids').removeClass('d-none');
                    }
                    else {
                        $('#errorbids').addClass('d-none');
                        var obj = {
                            buyer_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id,
                            seller_id: val_sellerId,
                            product_id: val_proId,
                            final_price: val_finalprice,
                            bid_price: $('#inputbid').val()
                        };
                        modalPage = this.modalCtrl.create('ModalPage', obj, { enableBackdropDismiss: false });
                        modalPage.present();
                    }
                }
                else if (val_cont == 'morethanone') {
                    if (parseInt((val_finalprice + 1)) > parseInt($('#inputbid').val())) {
                        $('#errorbids').removeClass('d-none');
                    }
                    else {
                        $('#errorbids').addClass('d-none');
                        var obj = {
                            buyer_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id,
                            seller_id: val_sellerId,
                            product_id: val_proId,
                            final_price: val_finalprice + 1,
                            bid_price: $('#inputbid').val()
                        };
                        modalPage = this.modalCtrl.create('ModalPage', obj, { enableBackdropDismiss: false });
                        modalPage.present();
                    }
                }
            }
        }
    };
    ProductDetailsPage.prototype.showDiv = function (val) {
        if (val == 'cancel')
            this.dispMakeOffer = false;
        else if (val == 'open')
            this.dispMakeOffer = true;
    };
    ProductDetailsPage.prototype.addtomakeOffer = function (val) {
       // alert("fddsf");
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false) {
            $(".zoomContainer").remove();
            localStorage.setItem('getPageDetails', 'ProductDetailsPage');
            this.navCtrl.push('LoginPage', {
                id: 'login'
            });
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
            }
            else {
                if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id == this.show_categoryDetails.data[0].user_id) {
                    $('.error-makeoffer#error-makeoffer').removeClass('d-none');
                    return;
                }
                else {
                    $('.error-makeoffer#error-makeoffer').addClass('d-none');
                }
                if ($('.price1:last').val() <= 0) {
                    $('.buynow_Error:last#buynow_Error').removeClass('d-none');
                }
                else {
                    if (parseInt($('.price1:last').val()) > parseInt(val)) {
                        $('.buynow_Error:last#buynow_Error').removeClass('d-none');
                    }
                    else {
                        if (parseInt($('#offerInput').val()) == 0 || $('#offerInput').val() == '') {
                            $('#offer_price').removeClass('d-none');
                        }
                        else {
                            $('#offer_price').addClass('d-none');
                            $('.buynow_Error:last#buynow_Error').addClass('d-none');
                            if ((parseInt($('#offerInput').val())) > parseInt(this.show_categoryDetails.data[0].final_price)) {
                                var alert_1 = this.alertCtrl.create({
                                    title: 'Make Offer',
                                    subTitle: 'Dear buyer you are about to make an offer greater than the cost of the item. If you would like to continue please click continue.',
                                    buttons: [
                                        {
                                            text: 'Cancel',
                                            role: 'cancel',
                                            handler: function () {
                                            }
                                        },
                                        {
                                            text: 'Continue',
                                            handler: function () {
                                                var make_offer = {
                                                    buyer_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id,
                                                    seller_id: _this.show_categoryDetails.data[0].user_id,
                                                    product_id: _this.show_categoryDetails.data[0].product_id,
                                                    offer_price: $('#offerInput').val(),
                                                    quantity: $('.price1:last#price1').val(),
                                                };
                                                try {
                                                    _this.infoService.showLoading();
                                                    _this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/make-offer/make-offer', make_offer, function (response) {
                                                        _this.infoService.hideLoading();
                                                        if (response.bid.status == "fail") {
                                                            var alert_2 = _this.alertCtrl.create({
                                                                title: 'Make Offer',
                                                                subTitle: response.bid.msg,
                                                                buttons: ['Dismiss']
                                                            });
                                                            alert_2.present();
                                                            _this.dispMakeOffer = false;
                                                        }
                                                        else {
                                                            var alert_3 = _this.alertCtrl.create({
                                                                title: 'Make Offer',
                                                                subTitle: response.bid.msg,
                                                                buttons: ['Dismiss']
                                                            });
                                                            alert_3.present();
                                                            _this.callfunc();
                                                            _this.dispMakeOffer = false;
                                                        }
                                                    }, function (error) {
                                                        console.log(error);
                                                        _this.infoService.hideLoading();
                                                    });
                                                }
                                                catch (Error) {
                                                    console.log(Error);
                                                    _this.infoService.hideLoading();
                                                }
                                            }
                                        }
                                    ]
                                });
                                alert_1.present();
                            }
                            else {
                                var make_offer = {
                                    buyer_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id,
                                    seller_id: this.show_categoryDetails.data[0].user_id,
                                    product_id: this.show_categoryDetails.data[0].product_id,
                                    offer_price: $('#offerInput').val(),
                                    quantity: $('.price1:last#price1').val(),
                                };
                                try {
                                    this.infoService.showLoading();
                                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/make-offer/make-offer', make_offer, function (response) {
                                        _this.infoService.hideLoading();
                                        if (response.bid.status == "fail") {
                                            var alert_4 = _this.alertCtrl.create({
                                               // title: 'Make Offetretretr',
                                                subTitle: response.bid.msg,
                                                buttons: ['Dismiss']
                                            });
                                            alert_4.present();
                                            _this.dispMakeOffer = false;
                                        }
                                        else {
                                            var alert_5 = _this.alertCtrl.create({
                                                title: 'Make Offer',
                                                subTitle: response.bid.msg,
                                                buttons: ['Dismiss']
                                            });
                                            alert_5.present();
                                            _this.callfunc();
                                            _this.dispMakeOffer = false;
                                        }
                                    }, function (error) {
                                        console.log(error);
                                        _this.infoService.hideLoading();
                                    });
                                }
                                catch (Error) {
                                    console.log(Error);
                                    this.infoService.hideLoading();
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    ProductDetailsPage.prototype.goToLogin = function (val) {
        $(".zoomContainer").remove();
        if (val == 'Register') {
            this.navCtrl.push('LoginPage', {
                id: 'register'
            });
        }
    };
    ProductDetailsPage.prototype.callLoginPage = function (val) {
        if (val == "retrntoLogin") {
            localStorage.setItem('getPageDetails', 'ProductDetailsPage');
            this.navCtrl.push('LoginPage', {
                id: 'login'
            });
        }
        else if (val == "gotoSellerinfo") {
            localStorage.setItem('getPageDetails', 'DraftListingPage');
            this.navCtrl.push('LoginPage', {
                id: 'login'
            });
        }
    };
    ProductDetailsPage.prototype.filterbySize = function (val) {
        var _this = this;
        if (val.value != -1) {
            try {
                var pro_type;
                if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false) {
                    pro_type = {
                        product_id: this.navParams.data.id,
                        sq: val.value
                    };
                }
                else {
                    if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
                        pro_type = {
                            product_id: this.navParams.data.id,
                            sq: val.value
                        };
                    }
                    else {
                        pro_type = {
                            product_id: this.navParams.data.id,
                            user_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id,
                            sq: val.value
                        };
                    }
                }
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/view-product', pro_type, function (response) {
                    if (response.data.length > 0) {
                        response.data[0].quantity = response.data[0].sq;
                        _this.show_categoryDetails = response;
                        _this.infoService.hideLoading();
                    }
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
            catch (Error) {
                console.log(Error);
                this.infoService.hideLoading();
            }
        }
        else {
            this.callfunc();
        }
    };
    ProductDetailsPage.prototype.goTouserProfile = function (val) {
        this.navCtrl.push('UserProfilePage', {
            id: val
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ProductDetailsPage.prototype, "content", void 0);
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-details',templateUrl:'/src/pages/product/product-details/product-details.html',styleUrl:['/src/pages/product/product-details/product-details.scss']
            //selector: 'page-product-details',template:/*ion-inline-start:"/var/www/html/src/pages/product/product-details/product-details.html"*/'<ion-content padding class="product-detail">\n    <div class="wrapper">\n        <div class="container mb-3" *ngIf="show_categoryDetails?.data.length > 0;">\n            <div class="row ">\n                <div class="col-lg-12 col-md-12 col-xl-12 col-12 breadcrumblink_div">\n                    <p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n					<p>\n                        <a href="#/home" class="breadcrumblink">Dibdaa</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n                        <a href="#/b/{{show_categoryDetails?.data[0].parent_cat_id}}" class="breadcrumblink">{{show_categoryDetails?.data[0].parent_cat_name}}</a>\n                        &nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n                        <a class="breadcrumblink" disabled>{{show_categoryDetails?.data[0].sub_category_name}}</a>\n                    </p>\n                </div>\n            </div>\n            <div class="row m-0 justify-content-center">\n                <div class="col-lg-12 col-md-12 col-12 whish_listDiv"\n                     *ngIf="show_categoryDetails?.data[0].save_wishlist == true">\n                    <span>Saved in your </span>\n                    <span class="whish_listspan" (click)="showwishList()">Wish list</span><span> | </span><span\n                        class="whish_listspan" (click)="removewishList()">Remove</span>\n                </div>\n                <div class="col-lg-4 col-md-6 col-10 pl-lg-0">\n                    <div id="magnific">\n                        <div class="row">\n                            <div class="large-5 column mr-3 col-12">\n                                <div class="xzoom-container text-center" id="disp_zoom_img">\n                                    <div class="setImage_middle">\n										<img id="zoom_demo" class="galleryimg zoom_demo" src="" />\n									</div>\n                                    <div class="top-left-sticker" *ngIf="show_categoryDetails?.data[0].time == \'End\' && show_categoryDetails?.data[0].status == 1">\n                                        <img src="assets/images/sold.png">\n                                        <p class="m-0 sold-text">ENDED</p>\n                                    </div>\n                                    <div class="xzoom-thumbs gallery_demo" id="gallery_demo">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="large-7 column"></div>\n                        </div>\n                    </div>\n                    <div class="col-lg-12" *ngIf="localItem != null">\n                        <div class="Upgrading text-center mb-md-3 mb-3 mb-lg-0">\n                            <span class="Upgradingtxt breadcrumblink_div">Upgrading? Sell it, don\'t trade it. </span>\n                            <a *ngIf="localItem?.role == \'buyer\'" class="btn theme-light-btn" role="button" href="#/seller-business-info">Sell Now</a>\n                            <a *ngIf="localItem?.role == \'seller\'" class="btn theme-light-btn" role="button" href="#/draft-listing">Sell Now</a>\n                            \n                        </div>\n                    </div>\n					<div class="col-lg-12" *ngIf="localItem == null">\n                        <div class="Upgrading text-center mb-md-3 mb-3 mb-lg-0">\n                            <span class="Upgradingtxt breadcrumblink_div">Upgrading? Sell it, don\'t trade it. </span>\n                            <a class="btn theme-light-btn" role="button" (click)="callLoginPage(\'gotoSellerinfo\')">Sell Now</a>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-lg-8 col-md-12 col-12 p-lg-0">\n                    <div class="row">\n                        <div class="col-lg-12 col-md-12 col-12 pb-2 itemdescription mt-2">\n                            <h5 class="mb-1">{{show_categoryDetails?.data[0].title}}</h5>\n                            <h6 class="m-0" *ngIf="show_categoryDetails?.data[0].subtitle != null && show_categoryDetails?.data[0].subtitle != \'\'">{{show_categoryDetails?.data[0].subtitle}}</h6>\n                            <p class="mb-1 breadcrumblink_div">Warranty :\n                                {{show_categoryDetails?.data[0].specification[0].Warranty}}\n							</p>\n							<p class="mb-1">\n								<span class="ratings">\n									<div class="empty-stars"></div> \n									<div class="full-stars" style="width:0%" *ngIf="show_categoryDetails?.data[0].product_avg == 0"></div>\n									<div class="full-stars" style="width:20%" *ngIf="show_categoryDetails?.data[0].product_avg == 1"></div>\n									<div class="full-stars" style="width:40%" *ngIf="show_categoryDetails?.data[0].product_avg == 2"></div>\n									<div class="full-stars" style="width:60%" *ngIf="show_categoryDetails?.data[0].product_avg == 3"></div>\n									<div class="full-stars" style="width:80%" *ngIf="show_categoryDetails?.data[0].product_avg == 4"></div>\n									<div class="full-stars" style="width:100%" *ngIf="show_categoryDetails?.data[0].product_avg == 5"></div>\n								</span>\n                                <span class="text-primary">\n                                   <a (click)="showBottom()">{{show_categoryDetails?.data[0].product_rate_cnt}} product ratings </a>\n                                </span>\n								<span class="writeDiv" *ngIf="show_categoryDetails?.data[0].status == 1">\n									<b>|</b> &nbsp;<a (click)="leaveFeedback(show_categoryDetails?.data[0].product_id,show_categoryDetails?.data[0].title,show_categoryDetails?.data[0].photos[0],show_categoryDetails?.data[0].seller_id)" class="atag_textReview">Write a review</a>\n								</span>\n								<span class="writeDiv" *ngIf="show_categoryDetails?.data[0].status != 1">\n									<b>|</b> &nbsp;<a class="atag_textReview">Write a review</a>\n								</span>\n							</p>\n                            <div class="row m-0">\n                                <div class="col-lg-6 col-md-6 col-12 p-0">\n                                    <p class="m-0 totalview"><i class="fa fa-eye"></i> {{ perHourcnt }} viewed per hour</p>\n                                </div>\n                                <div class="col-lg-6 col-md-6 col-12 p-0">\n                                    <p class="text-lg-right text-md-left text-left m-0">SKU No : {{show_categoryDetails?.data[0].product_sku }}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row">\n                        <div class="col-lg-8 col-md-12 col-12 pb-2 mt-3 itemconditionform p-md-0">\n                            <form class="form-horizontal breadcrumblink_div">\n                                <div class="form-group row mb-1">\n                                    <label class="control-label col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right mt-1">Condition:</label>\n                                    <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                        <p class="font-weight-bold m-0">\n                                            <span *ngIf="show_categoryDetails?.data[0].p_condition != \'Refurbished\';else showRefurbishedtop;">{{ show_categoryDetails?.data[0].p_condition }}</span>\n                                            <span *ngIf="show_categoryDetails?.data[0].p_condition == \'\'"> - </span>\n                                            <ng-template #showRefurbishedtop>\n                                                <span>Refurbished</span>\n                                            </ng-template>\n                                        </p>\n                                    </div>\n                                </div>\n                                <div class="form-group row mb-1">\n                                    <label class="control-label col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right mt-1"></label>\n                                    <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                        <p class="font-italic">{{ show_categoryDetails?.data[0].condition_description }}\n                                    </div>\n                                </div>\n								 <div class="form-group row mb-1" *ngIf="show_categoryDetails?.data[0].time == \'Started\'">\n									<label class="control-label col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right mt-1">Time left: </label>\n									<div class="col-sm-10 col-lg-10 col-md-9 col-9">\n										<p class="font-weight-bold m-0" [ngClass]="{\'text-danger\': show_categoryDetails?.data[0].endsoon == \'0\'}">{{show_categoryDetails?.data[0].days_left | removeplusSign:show_categoryDetails?.data[0].days_left}}</p>\n									</div>\n								 </div>\n                                <form [formGroup]="colorForm" id="color-form" method="post" role="form" class="form" *ngIf="show_categoryDetails?.data[0].selling_type == \'Fixed price\'">\n                                    <div class="form-group row mb-1" *ngIf="show_categoryDetails?.data[0].specification[0].Color.length > 0 && show_categoryDetails?.data[0].specification[0].Color[0] != null">\n                                        <label class="control-label col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right mt-1">\n											<span class="text-danger font-weight-bold ">*</span>Color:\n										</label>\n                                        <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                            <select class="form-control selectcolor select-color" id="color" name="select_color" [formControl]="colorForm.controls[\'color\']" [ngClass]="{\'error-border\':!colorForm.controls[\'color\'].valid}">\n                                               <option value="-1">-Select-</option>\n                                               <option *ngFor="let colorData of show_categoryDetails?.data[0].specification[0].Color;" [value]="colorData">{{colorData}}</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class="form-group row mb-1 mt-3"\n                                         *ngIf="show_categoryDetails?.data[0].specification[0].Size.length > 0 && show_categoryDetails?.data[0].specification[0].Size[0] != null">\n                                        <label class="control-label col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right mt-1"><span\n                                                class="text-danger font-weight-bold ">*</span>Size:</label>\n                                        <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                            <select class="form-control selectcolor select-size" id="size"\n                                                    [formControl]="colorForm.controls[\'size\']"\n                                                    [ngClass]="{\'error-border\':!colorForm.controls[\'size\'].valid}" (change)="filterbySize(colorForm.controls[\'size\'])">\n                                                <option value="-1">-Select-</option>\n                                                <option *ngFor="let sizeData of show_categoryDetails?.data[0].specification[0].Size;"\n                                                        [value]="sizeData">{{sizeData}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </form>\n                                <div class="priceformform-group row mt-3">\n                                    <label class="control-label col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right mt-1 pricelabel"><span\n                                            class="text-danger font-weight-bold ">*</span>Quantity:</label>\n                                    <div class="col-sm-3 col-lg-3 col-md-3 col-3">\n                                        <input type="number" class="form-control pricetxtbox price1" id="price1"\n                                               disabled value="1"\n                                               *ngIf="show_categoryDetails?.data[0].selling_type == \'Auction style\'">\n                                        <input type="number" class="form-control pricetxtbox price1" id="price1"\n                                               value="1"\n                                               *ngIf="show_categoryDetails?.data[0].selling_type == \'Fixed price\'">\n                                    </div>\n                                    <p class="control-label col-sm-7 col-lg-7 col-md-5 col-6 p-lg-0 text-left pricelabel">\n                                        <a><span class="solditem"\n                                                 *ngIf="show_categoryDetails?.data[0].quantity < 5 && show_categoryDetails?.data[0].quantity >= 1 ">Hurry, Only {{ show_categoryDetails?.data[0].quantity }} left !</span></a>\n                                        <span class="solditem" *ngIf="show_categoryDetails?.data[0].quantity >= 5"> <b>{{ show_categoryDetails?.data[0].quantity }}</b> Quantity available</span>\n                                        <a><span class="solditem" *ngIf="show_categoryDetails?.data[0].quantity <= 0">Item not available</span></a>\n                                    </p>\n                                </div>\n                            </form>\n\n                            <div class="quantity_error d-none add_cartError"\n                                 *ngIf="show_categoryDetails?.data[0].save_cart == false" id="add_cartError">\n                                <span> You have to enter the quantity between 1 to <b> {{ show_categoryDetails?.data[0].quantity }} </b> quantity</span>\n                            </div>\n                            <div class="quantity_error d-none buynow_Error" id="buynow_Error">\n                                <span> You have to enter the quantity between 1 to <b> {{ show_categoryDetails?.data[0].quantity }} </b> quantity</span>\n                            </div>\n                            <div class="quantity_error d-none Selection_Error" id="Selection_Error">\n                                <span id="error-color" class="d-none error-color"> Select <b> Color  </b> </span>\n                                <span id="error-size" class="d-none error-size"> Select <b> Size </b></span>\n                            </div>\n							\n							<div class="quantity_error User_Error">\n                                <span id="error-makeoffer" class="d-none error-makeoffer">Sorry you cannot make offer on your own items.</span>\n                                <span id="error-bid" class="d-none error-bid">Sorry you cannot bid on your own items.</span>\n                                <span id="error-buy" class="d-none error-buy"> Sorry you cannot buy your own items.</span>\n                                <span id="error-wishlist" class="d-none error-wishlist"> Sorry you cannot add your own items.</span>\n                            </div>\n							\n                            <div class="row itempricediv ml-0 mr-0 mt-0 pt-2 pb-2 mb-2 mt-3 breadcrumblink_div" *ngIf="show_categoryDetails?.data[0].selling_type == \'Auction style\';else showfixprice">\n                                <div class="row itempricediv ml-0 mr-0 mt-0 breadcrumblink_div" *ngIf="show_categoryDetails?.data[0].last_bid[0] == null && show_categoryDetails?.data[0].time == \'Started\';else showbidsdata">\n                                    <div class="col-lg-6 col-md-12 col-12 priceusdollar text-left">\n                                        <div class="row">\n                                            <div class="col-lg-5 col-md-5 col-5 text-right pr-2">\n                                                Starting bid:\n                                            </div>\n                                            <div class="col-lg-7 col-md-7 col-7 pl-1">\n                                                <span class="pl-2 usdollarprice">{{show_categoryDetails?.data[0].min_price}} AED</span>\n                                                <div class="row m-0">\n                                                    <div class="col-lg-12 col-md-12 col-12 pl-1">\n                                                        <div class="form-group">\n                                                            <form #frm_bids="ngForm" class="form" method="post" role="form" novalidate>\n                                                                <input class="form-control form-control-sm bid-input" id="inputbid" type="number" name="inputbid" #inputbid="ngModel" required ngModel>\n                                                                <div *ngIf="inputbid.invalid && (inputbid.dirty || inputbid.touched)" class="error-box">\n                                                                    <div *ngIf="inputbid.errors.required">\n                                                                        * Enter Bid Amount.\n                                                                    </div>\n                                                                </div>\n                                                            </form>\n                                                        </div>\n                                                    </div>\n                                                    <div class="col-lg-12 col-md-12 col-12 pl-1 pr-0">\n                                                        <p class="m-0 enter-price">Enter {{show_categoryDetails?.data[0].min_price}} AED or more</p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-6 col-md-7 col-7 offset-5 pl-2 offset-lg-0 offset-md-5 addtocart">\n                                        <div class="row">\n                                            <div class="col-lg-12 col-md-12 col-12">\n                                                [<a> 0 bids </a>]\n                                            </div>\n                                            <div class="col-lg-12 col-md-12 col-12 mt-2">\n                                                <button class="btn theme-light-btn" (click)="openModal(show_categoryDetails?.data[0].product_id,show_categoryDetails?.data[0].user_id,show_categoryDetails?.data[0].min_price,\'one\')" [disabled]="!frm_bids.valid">Place bid\n                                                </button>\n                                            </div>\n                                            <div class="col-lg-12 col-md-12 col-12 mt-2">\n                                                <a (click)="addwishlist()"  *ngIf="show_categoryDetails?.data[0].save_wishlist == false && show_categoryDetails?.data[0].status == 1">\n                                                    <p class="mb-1 addtowatchlist">\n                                                        <i class="fa fa-plus pr-1"></i> Add to wish list\n                                                    </p>\n                                                </a>\n												<a *ngIf="show_categoryDetails?.data[0].save_wishlist == false && show_categoryDetails?.data[0].status != 1">\n                                                    <p class="mb-1 addtowatchlist">\n                                                        <i class="fa fa-plus pr-1"></i> Add to wish list\n                                                    </p>\n                                                </a>\n                                                <a (click)="showwishList()" *ngIf="show_categoryDetails?.data[0].save_wishlist == true">\n                                                    <p class="mb-1 addtowatchlist">\n                                                        <i class="fa fa-eye pr-1"></i> View wish list\n                                                    </p>\n                                                </a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div id="errorbids" class="text-center error-box d-none w-100"> You have to bid at\n                                        least {{show_categoryDetails?.data[0].min_price}}\n                                    </div>\n                                </div>\n                                <ng-template #showbidsdata>\n                                    <div class="row itempricediv ml-0 mr-0 mt-0 breadcrumblink_div" *ngIf="show_categoryDetails?.data[0].last_bid[0] == null && show_categoryDetails?.data[0].time == \'End\'">\n                                        <div class="col-lg-6 col-md-12 col-12 priceusdollar text-left">\n                                            <div class="row">\n                                                <div class="col-lg-5 col-md-5 col-5 text-right pr-2">\n                                                    Starting bid:\n                                                </div>\n                                                <div class="col-lg-7 col-md-7 col-7 pl-1">\n                                                    <span class="pl-2 usdollarprice">{{show_categoryDetails?.data[0].min_price}} AED</span>\n                                                    <div class="row m-0">\n                                                        <div class="col-lg-12 col-md-12 col-12 pl-1">\n                                                            <div class="form-group">\n                                                                <form #frm_bids="ngForm" class="form" method="post"\n                                                                      role="form" novalidate>\n                                                                    <input class="form-control form-control-sm bid-input"\n                                                                           id="inputbid" type="number" name="inputbid"\n                                                                           #inputbid="ngModel" required ngModel>\n                                                                    <div *ngIf="inputbid.invalid && (inputbid.dirty || inputbid.touched)"\n                                                                         class="error-box">\n                                                                        <div *ngIf="inputbid.errors.required">\n                                                                            * Enter bid amount.\n                                                                        </div>\n                                                                    </div>\n                                                                </form>\n                                                            </div>\n                                                        </div>\n                                                        <div class="col-lg-12 col-md-12 col-12 pl-1 pr-0">\n                                                            <p class="m-0 enter-price">Enter\n                                                                {{show_categoryDetails?.data[0].min_price}} AED or\n                                                                more</p>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class="col-lg-6 col-md-7 col-7 offset-5 pl-2 offset-lg-0 offset-md-5 addtocart">\n                                            <div class="row">\n                                                <div class="col-lg-12 col-md-12 col-12">\n                                                    [<a> 0 bids </a>]\n                                                </div>\n												<div class="col-lg-12 col-md-12 col-12 mt-2">\n                                                    <a (click)="addwishlist()" *ngIf="show_categoryDetails?.data[0].save_wishlist == false && show_categoryDetails?.data[0].status == 1">\n                                                        <p class="mb-1 addtowatchlist">\n                                                            <i class="fa fa-plus pr-1"></i> Add to wish list\n                                                        </p>\n                                                    </a>\n													<a *ngIf="show_categoryDetails?.data[0].save_wishlist == false && show_categoryDetails?.data[0].status != 1">\n														<p class="mb-1 addtowatchlist">\n															<i class="fa fa-plus pr-1"></i> Add to wish list\n														</p>\n													</a>\n                                                    <a (click)="showwishList()" *ngIf="show_categoryDetails?.data[0].save_wishlist == true">\n                                                        <p class="mb-1 addtowatchlist">\n                                                            <i class="fa fa-eye pr-1"></i> View wish list\n                                                        </p>\n                                                    </a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="row itempricediv ml-0 mr-0 mt-0 breadcrumblink_div" *ngIf="show_categoryDetails?.data[0].last_bid[0] != null">\n                                        <div class="col-lg-6 col-md-12 col-12 priceusdollar text-left">\n                                            <div class="row">\n                                                <div class="col-lg-5 col-md-5 col-5 text-right pr-2">\n                                                    Starting bid:\n                                                </div>\n                                                <div class="col-lg-7 col-md-7 col-7 pl-1">\n                                                    <span class="pl-2 usdollarprice">{{show_categoryDetails?.data[0].last_bid[0].bid_price + 1}} AED</span>\n                                                    <div class="row m-0">\n                                                        <div class="col-lg-12 col-md-12 col-12 pl-1">\n                                                            <div class="form-group">\n                                                                <form #frm_bids="ngForm" class="form" method="post"\n                                                                      role="form" novalidate>\n                                                                    <input class="form-control form-control-sm bid-input"\n                                                                           id="inputbid" type="number" name="inputbid"\n                                                                           #inputbid="ngModel" required ngModel>\n                                                                    <div *ngIf="inputbid.invalid && (inputbid.dirty || inputbid.touched)"\n                                                                         class="error-box">\n                                                                        <div *ngIf="inputbid.errors.required">\n                                                                            * Enter bid amount.\n                                                                        </div>\n                                                                    </div>\n                                                                </form>\n                                                            </div>\n                                                        </div>\n                                                        <div class="col-lg-12 col-md-12 col-12 pl-1 pr-0">\n                                                            <p class="m-0 enter-price">Enter\n                                                                {{show_categoryDetails?.data[0].last_bid[0].bid_price + 1}}\n                                                                AED or more</p>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class="col-lg-6 col-md-7 col-7 offset-5 pl-2 offset-lg-0 offset-md-5 addtocart">\n                                            <div class="row">\n                                                <div class="col-lg-12 col-md-12 col-12">\n                                                    [<a href="#/viewbids/{{show_categoryDetails?.data[0].product_id}}">\n                                                    {{show_categoryDetails?.data[0].last_bid[0].count}} bids </a>]\n                                                </div>\n                                                <div class="col-lg-12 col-md-12 col-12 mt-2" *ngIf="show_categoryDetails?.data[0].time == \'Started\'">\n                                                    <button class="btn theme-light-btn" (click)="openModal(show_categoryDetails?.data[0].product_id,show_categoryDetails?.data[0].user_id,show_categoryDetails?.data[0].last_bid[0].bid_price,\'morethanone\')" [disabled]="!frm_bids.valid">Place bid</button>\n                                                </div>\n                                                <div class="col-lg-12 col-md-12 col-12 mt-2">\n                                                    <a (click)="addwishlist()" *ngIf="show_categoryDetails?.data[0].save_wishlist == false && show_categoryDetails?.data[0].status == 1">\n                                                        <p class="mb-1 addtowatchlist">\n                                                            <i class="fa fa-plus pr-1"></i> Add to wish list\n                                                        </p>\n                                                    </a>\n													\n													<a *ngIf="show_categoryDetails?.data[0].save_wishlist == false && show_categoryDetails?.data[0].status != 1">\n                                                        <p class="mb-1 addtowatchlist">\n                                                            <i class="fa fa-plus pr-1"></i> Add to wish list\n                                                        </p>\n                                                    </a>\n													\n                                                    <a (click)="showwishList()" *ngIf="show_categoryDetails?.data[0].save_wishlist == true">\n                                                        <p class="mb-1 addtowatchlist">\n                                                            <i class="fa fa-eye pr-1"></i> view wish list\n                                                        </p>\n                                                    </a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div id="errorbids" class="text-center error-box d-none w-100"> You have to bid at\n                                            least {{show_categoryDetails?.data[0].last_bid[0].bid_price + 1}} AED\n                                        </div>\n                                    </div>\n                                </ng-template>\n                            </div>\n                            <ng-template #showfixprice>\n                                <div class="row itempricediv m-0 pt-2 mb-lg-4 breadcrumblink_div mb-3" *ngIf="dispMakeOffer == false;else showofferInput;">\n                                    <div class="col-lg-6 col-md-12 col-12 priceusdollar text-left" *ngIf="show_categoryDetails?.data[0].discount > 0">\n                                        List price: <span class="pl-2 text_deco"> {{ show_categoryDetails?.data[0].price}} AED </span>\n                                        <br/>\n                                        You save: <span class="pl-2"> {{ show_categoryDetails?.data[0].price - show_categoryDetails?.data[0].final_price | number:\'1.2-2\'}} AED ({{ show_categoryDetails?.data[0].discount }} % OFF) </span>\n                                        <br/>\n                                        Now: <span class="pl-2 usdollarprice"> {{ show_categoryDetails?.data[0].final_price}} AED </span>\n                                    </div>\n									<div class="col-lg-6 col-md-12 col-12 priceusdollar text-left" *ngIf="show_categoryDetails?.data[0].discount <= 0">\n										Price: <span class="pl-2 usdollarprice">{{ show_categoryDetails?.data[0].price}} AED </span>\n									</div>\n\n                                    <div class="col-lg-6 col-md-12 col-12 addtocart">\n                                        <div class="row">\n                                            <div class="col-lg-12 col-md-4 col-6 mt-lg-0 mt-md-2 mt-2"\n                                                 *ngIf="show_categoryDetails?.data[0].quantity > 0">\n                                                <a class="btn theme-light-btn" role="button" disabled\n                                                   *ngIf="show_categoryDetails?.data[0].time == \'End\';else showBuynow;">Buy\n                                                    It Now</a>\n                                                <ng-template #showBuynow>\n                                                    <a class="btn theme-light-btn" role="button"\n                                                       (click)="buyNow(show_categoryDetails?.data[0].quantity)">Buy It\n                                                        Now</a>\n                                                </ng-template>\n                                            </div>\n                                            <div class="col-lg-12 col-md-4 col-6 mt-lg-0 mt-md-2 mt-0"\n                                                 *ngIf="show_categoryDetails?.data[0].quantity <= 0">\n                                                <button class="btn theme-light-btn" disabled>Buy It Now</button>\n                                            </div>\n\n                                            <div class="col-lg-12 col-md-4 col-6 mt-2 mt-md-2" *ngIf="show_categoryDetails?.data[0].quantity > 0">\n											<span *ngFor="let chkpymnt of show_categoryDetails?.data[0].payment_opt">\n												<a class="btn theme-dark-btn" role="button"\n                                                   (click)="addCart(show_categoryDetails?.data[0].quantity)"\n                                                   *ngIf="show_categoryDetails?.data[0].save_cart == false && show_categoryDetails?.data[0].time == \'Started\' && chkpymnt == \'1\'">Add to cart</a>\n											</span>\n                                                <a class="btn theme-dark-btn" role="button" disabled\n                                                   *ngIf="show_categoryDetails?.data[0].save_cart == false && show_categoryDetails?.data[0].time == \'End\'">Add\n                                                    To Cart</a>\n                                                <a class="btn theme-dark-btn" role="button" (click)="viewCart()"\n                                                   *ngIf="show_categoryDetails?.data[0].save_cart == true">View Cart</a>\n                                            </div>\n                                            <div class="col-lg-12 col-md-4 col-6 mt-2 mt-md-2" *ngIf="show_categoryDetails?.data[0].quantity <= 0">\n                                                <button class="btn theme-dark-btn" *ngIf="show_categoryDetails?.data[0].save_cart == false"\n                                                        disabled>Add To Cart\n                                                </button>\n                                                <button class="btn theme-dark-btn" *ngIf="show_categoryDetails?.data[0].save_cart == true"\n                                                        disabled>View Cart\n                                                </button>\n                                            </div>\n                                            <div class="col-lg-12 col-md-4 col-12 text-lg-left text-md-left text-center mt-2" *ngIf="show_categoryDetails?.data[0].make_offer == 1">\n                                                <button class="btn theme-dark-btn"  *ngIf="show_categoryDetails?.data[0].make_offer_status == false && show_categoryDetails?.data[0].time == \'Started\'"\n                                                        (click)="showDiv(\'open\')">Make Offer\n                                                </button>\n                                                <a class="btn theme-dark-btn" *ngIf="show_categoryDetails?.data[0].make_offer_status == true" href="#/seller-my-account/Bids">View Offer</a>\n                                            </div>\n                                            <div class="col-lg-12 col-md-4 col-12 mt-2 text-lg-left text-md-left text-center">\n                                                <a (click)="addwishlist()" *ngIf="show_categoryDetails?.data[0].save_wishlist == false && show_categoryDetails?.data[0].status == 1">\n                                                    <p class="mb-1 addtowatchlist">\n                                                        <i class="fa fa-plus pr-1"></i> Add to wish list\n                                                    </p>\n                                                </a>\n												<a *ngIf="show_categoryDetails?.data[0].save_wishlist == false && show_categoryDetails?.data[0].status != 1">\n                                                    <p class="mb-1 addtowatchlist">\n                                                        <i class="fa fa-plus pr-1"></i> Add to wish list\n                                                    </p>\n                                                </a>\n                                                <a (click)="showwishList()" *ngIf="show_categoryDetails?.data[0].save_wishlist == true">\n                                                    <p class="mb-1 addtowatchlist">\n                                                        <i class="fa fa-eye pr-1"></i> view wish list\n                                                    </p>\n                                                </a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-4 col-md-6 col-12 mt-1 morethansold text-center pt-2 pb-2 borderrightsold">\n                                        <p class="m-0 solditem">\n                                            <span *ngIf="show_categoryDetails?.data[0].sold_quantity == null"> 0 </span>\n                                            <span *ngIf="show_categoryDetails?.data[0].sold_quantity != null"> {{show_categoryDetails?.data[0].sold_quantity}} </span>\n                                            sold\n                                        </p>\n                                    </div>\n                                    <div class="col-lg-4 col-md-6 col-12 mt-1 morethansold text-center pt-2 pb-2 borderrightsold">\n                                        <p class="m-0">{{show_categoryDetails?.data[0].sold_avg | number:\'2.2-4\'}}% sold</p>\n                                    </div>\n                                    <div class="col-lg-4 col-md-12 col-12 mt-1 morethansold text-center pt-2 pb-2">\n                                        <p class="m-0">{{ show_categoryDetails?.data[0].return_opt |\n                                            replaceString:show_categoryDetails?.data[0].return_opt }} \n											<span *ngIf="show_categoryDetails?.data[0].return_opt != \'No\'">days </span>\n                                            returns</p>\n                                    </div>\n                                </div>\n                                <ng-template #showofferInput>\n                                    <div class="row itempricediv m-0 pt-2 mb-lg-4 breadcrumblink_div mb-3">\n										<div class="col-lg-6 col-md-6 col-12 priceusdollar text-left mb-md-0 mb-sm-3 mb-3 mb-lg-0" *ngIf="show_categoryDetails?.data[0].discount > 0">\n											List price: <span class="pl-2 text_deco"> {{ show_categoryDetails?.data[0].price}} AED </span>\n											<br/>\n											You save: <span class="pl-2"> {{ show_categoryDetails?.data[0].price - show_categoryDetails?.data[0].final_price | number:\'1.2-2\'}} AED ({{ show_categoryDetails?.data[0].discount }} % OFF) </span>\n											<br/>\n											Now: <span class="pl-2 usdollarprice"> {{ show_categoryDetails?.data[0].final_price}} AED </span>\n											<!--<span class="bestoffer" *ngIf="show_categoryDetails?.data[0].make_offer == 1">Best Offer:</span>-->\n										</div>\n										<div class="col-lg-6 col-md-6 col-12 priceusdollar text-left mb-md-0 mb-sm-3 mb-3 mb-lg-0" *ngIf="show_categoryDetails?.data[0].discount <= 0">\n											Price: <span class="pl-2 usdollarprice"> {{ show_categoryDetails?.data[0].price}} AED </span>\n										</div>\n										\n										<div class="col-lg-6 col-md-6 col-12 addtocart">\n                                            <div class="row justify-content-center">\n                                                <div class="col-lg-8 col-md-6 col-9 text-center">\n                                                    <input type="number" class="w-100" id="offerInput" placeholder="Enter your offer price" #inputnumber="ngModel" ngModel/>\n												</div>\n													\n													\n                                                <div class="quantity_error w-100 text-center d-none" id="offer_price">\n                                                    <span> Please enter a price of AED 1 or more. </span>\n                                                </div>\n												<!--<div class="bg-info text-warning w-100 text-center mt-2" *ngIf="inputnumber?.value > show_categoryDetails?.data[0].final_price">\n                                                    <span>Dear buyer you are about to make an offer greater than the cost of the item. If you would like to continue please click continue. </span>\n                                                </div> -->\n                                                <div class="col-lg-12 col-md-12 col-12 text-center mt-3 mb-3">\n                                                    <button class="btn theme-dark-btn" (click)="addtomakeOffer(show_categoryDetails?.data[0].quantity)">\n                                                        Review Offer\n                                                    </button>\n                                                    <button class="btn theme-light-btn" (click)="showDiv(\'cancel\')">\n                                                        Cancel\n                                                    </button>\n                                                </div>\n											</div>\n                                        </div>\n                                    </div>\n                                </ng-template>\n                            </ng-template>\n                            <div class="row mb-1 shiptedcondition breadcrumblink_div">\n                                <div class="col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right">Shipping:</div>\n                                <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                    <p class="font-weight-bold m-0 notshipindia">\n                                        <span *ngIf="show_categoryDetails?.data[0].ship_to == \'buyer\'"> Buyer pays for return shipping </span>\n                                        <span *ngIf="show_categoryDetails?.data[0].ship_to == \'seller\'"> Seller pays for return shipping </span>\n                                        <span *ngIf="show_categoryDetails?.data[0].ship_to != \'seller\' && show_categoryDetails?.data[0].ship_to != \'buyer\'"> </span>\n                                        <a (click)="shipingtabseedetail()"><span\n                                                class="seedetails"> &nbsp;See details</span></a></p>\n                                    <p class="m-0 itemlocation">item location: {{\n                                        show_categoryDetails?.data[0].product_address }}</p>\n                                    <p class="m-0 itemlocation">Ships to:\n                                        <span> {{show_categoryDetails?.data[0].product_address}} </span>\n                                    </p>\n                                </div>\n                            </div>\n                            <div class="row mb-1 mt-1 breadcrumblink_div">\n                                <div class="col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right">Delivery:</div>\n                                <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                    <p class="deleveryans m-0"\n                                       *ngFor="let stype of show_categoryDetails?.data[0].shipment_type;index as i">\n                                        <span>-{{ stype }}</span>\n                                    </p>\n                                </div>\n                            </div>\n                            <div class="row mb-1 mt-1 paymentcondition breadcrumblink_div">\n                                <div class="col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right">Payment:</div>\n                                <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                    <div class="m-0"><!--<img src="assets/images/logopaypal.png" class="mr-3"> -->\n                                        <span *ngFor="let ptype of show_categoryDetails?.data[0].payment_opt">\n											<span *ngIf="ptype == \'1\'">\n												<img src="assets/images/logopaypal.png">\n												<img src="assets/images/payment_icons.png">\n											</span> &nbsp;\n											<span *ngIf="ptype == \'2\'">Cash on Delivery</span>\n										</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row mb-1 mt-1 returnscondition breadcrumblink_div">\n                                <div class="col-sm-2 col-lg-2 col-md-3 col-3 p-lg-0 text-lg-right text-md-left text-right">Returns:</div>\n                                <div class="col-sm-10 col-lg-10 col-md-9 col-9">\n                                    <p class="deleveryans m-0">{{ show_categoryDetails?.data[0].return_opt |\n                                        replaceString:show_categoryDetails?.data[0].return_opt}} <span\n                                                *ngIf="show_categoryDetails?.data[0].return_opt != \'No\'">days </span>\n                                        returns. <span *ngIf="show_categoryDetails?.data[0].return_opt != \'No\'">{{show_categoryDetails?.data[0].return_policy}}</span>\n                                        <!-- <a href="#"><span class="seedetails"> See details</span></a> --></p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-lg-4 col-md-12 col-12 pb-2 mt-3 pr-0 topratedplus">\n                            <div class="row m-0">\n\n                            </div>\n                            <div class="row pr-3">\n                                <div class="col-lg-12 col-md-6 col-12 toprateddiv pt-2 pb-2">\n                                    <div class="row starcontent pb-1">\n                                        <div class="col-lg-9 col-md-8 col-8 pl-0 pr-0 breadcrumblink_div">\n                                            <a (click)="goTouserProfile(show_categoryDetails?.data[0].seller_id)">\n												<p class="buysprytxt mb-1">\n													{{ show_categoryDetails?.data[0].display_name }} ( {{ show_categoryDetails?.data[0].feedback_count }} <i class="fa fa-star star"></i> )\n												</p>\n											</a>\n                                            <p class="mb-1">\n												{{ show_categoryDetails?.data[0].feedback_avg | number : \'2.2-2\'}}% Positive feedback\n											</p>\n                                        </div>\n                                    </div>\n                                    <div class="row saveseller pt-1 breadcrumblink_div">\n                                        <div class="col-lg-12 col-md-12 col-12 pl-0 pr-0">\n                                            <a *ngIf="show_categoryDetails?.data[0].save_seller == false">\n                                                <p class="savesellertxt mb-1" (click)="save_seller(\'save\')" *ngIf="localItem != null && show_categoryDetails?.data[0].seller_id != localItem?.id">\n                                                    <i class="fa fa-heart-o"></i> Save this seller\n                                                </p>\n                                            </a>\n                                            <a *ngIf="show_categoryDetails?.data[0].save_seller == true">\n                                                <p class="savesellertxt mb-1" (click)="save_seller(\'remove\')" *ngIf="localItem != null && show_categoryDetails?.data[0].seller_id != localItem?.id">\n                                                    <i class="fa fa-heart"></i> Saved\n                                                </p>\n                                            </a>\n                                            <a (click)="contactSeller(show_categoryDetails?.data[0].display_name,show_categoryDetails?.data[0].user_id,show_categoryDetails?.data[0].product_id)" *ngIf="localItem != null && show_categoryDetails?.data[0].seller_id != localItem?.id">\n                                                <p class="savesellertxt mb-1"> Contact seller</p></a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="row productdescriptiontabrow">\n                <div class="col-lg-12 col-md-12 col-12 productdescriptiontab p-0">\n                    <!-- Nav tabs -->\n                    <div class="row ml-0 mr-0">\n                        <div class="col-lg-11 col-9 col-md-10 p-0">\n                            <ul class="nav detailnavigationtab" role="tablist">\n                                <li role="presentation" class="descriptiontabing active" id="descriptiontab">\n                                    <a href="#description" role="tab" class="btn tablistinbtn active show"\n                                       data-toggle="tab">Description</a>\n                                </li>\n                                <li role="presentation" class="descriptiontabing">\n                                    <a href="#shippingandpayments" id="seedetailactivtab" class="btn tablistinbtn"\n                                       role="tab" data-toggle="tab">Shipping ,Returns and Payments</a></li>\n                            </ul>\n                        </div>\n                        <div class="col-lg-1 col-3 col-md-2 text-right pl-0 pr-0 pr-xl-3 pr-lg-3">\n                            <a (click)="ReportItem(show_categoryDetails?.data[0].product_id,show_categoryDetails?.data[0].business_name,show_categoryDetails?.data[0].title,show_categoryDetails?.data[0].product_sku,show_categoryDetails?.data[0].photos[0])" *ngIf="show_categoryDetails?.data[0].status == 1;else showstaticreposrlink">\n                                <p class="reportitem itemfortxt mb-0 breadcrumblink_div">Report item</p>\n							</a>\n							<ng-template #showstaticreposrlink>\n								<a>\n									<p class="reportitem itemfortxt mb-0 breadcrumblink_div">Report item</p>\n								</a>\n							</ng-template>\n                        </div>\n                        <!-- Tab panes -->\n                        <div class="col-lg-12 col-md-12 col-12 tab-content p-lg-4 p-md-3 p-2">\n                            <div role="tabpanel" class="tab-pane active" id="description">\n                                <div class="col-lg-12 col-md-12 col-12 pl-0 pr-0 mb-3 breadcrumblink_div">\n                                    <p class="text-right itemnumber mb-2">SKU No :\n                                        {{show_categoryDetails?.data[0].product_sku}}</p>\n                                    <p class="mb-2">Seller assumes all responsibility for this listing.</p>\n                                    <p class="mb-0">Last updated on\n                                        <span class="font-weight-bold">{{show_categoryDetails?.data[0].updated_date}}</span>\n                                    </p>\n                                </div>\n                                <div class="row mb-2 mb-lg-3 mb-xl-3 ml-0 mr-0 frontbg">\n                                    <div class="col-lg-12 col-md-12 col-12 pl-3 pt-2 pb-2">\n                                        <h6 class="m-0">Item specifics</h6>\n                                    </div>\n                                </div>\n                                <div class="col-lg-12 col-md-12 col-12 pl-3 pt-3 pb-1 pr-3 itemspecifics">\n                                    <div class="row sellerrefurbished m-0 p-2 breadcrumblink_div">\n                                        <div class="col-lg-1 col-md-2 col-4 p-0">\n                                            <p class="m-0">Condition:</p>\n                                        </div>\n                                        <div class="col-lg-11 col-md-10 col-8 p-0">\n                                            <p class="m-0 font-weight-bold">\n                                                <span *ngIf="show_categoryDetails?.data[0].p_condition != \'Refurbished\';else showRefurbished;">{{show_categoryDetails?.data[0].p_condition}}</span>\n                                                <ng-template #showRefurbished>\n                                                    <span>Refurbished</span>\n                                                </ng-template>\n                                            </p>\n                                        </div>\n                                        <div class="col-lg-1 col-md-2 col-4 p-0"\n                                             *ngIf="show_categoryDetails?.data[0].specification[0].Item_Condition == \'New\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Old\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Used\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Brands\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Best Sellers\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'On Sales\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Best Offers\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Deals\';else showRefurbisheddiv;">\n                                            <p class="m-0 d-none">Seller Notes:</p>\n                                        </div>\n                                        <ng-template #showRefurbisheddiv>\n                                            <div class="col-lg-1 col-md-2 col-4 p-0">\n                                                <p class="m-0">Seller Notes:</p>\n                                            </div>\n                                        </ng-template>\n\n                                        <div class="col-lg-11 col-md-10 col-8 p-0"\n                                             *ngIf="show_categoryDetails?.data[0].specification[0].Item_Condition == \'New\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Old\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Used\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Brands\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Best Sellers\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'On Sales\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Best Offers\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Deals\';else showRefurbisheddiv2;">\n                                            <p class="m-0 d-none">-</p>\n                                        </div>\n                                        <ng-template #showRefurbisheddiv2>\n                                            <div class="col-lg-11 col-md-10 col-8 p-0">\n                                                <p class="m-0"\n                                                   *ngIf="show_categoryDetails?.data[0].specification[0].Item_Condition == \'New\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Old\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Used\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Brands\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Best Sellers\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'On Sales\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Best Offers\' || show_categoryDetails?.data[0].specification[0].Item_Condition == \'Deals\';else showRefurbisheddetails;">\n                                                    -</p>\n                                                <ng-template #showRefurbisheddetails>\n                                                    <p>\n                                                        {{show_categoryDetails?.data[0].specification[0].Item_Condition}}</p>\n                                                </ng-template>\n                                            </div>\n                                        </ng-template>\n                                    </div>\n\n                                    <div class="row itemspecificssub m-0 pl-0 pr-0 pt-2 pb-2">\n                                        <div class="col-lg-6 col-md-12 col-12 p-0">\n                                            <table class="table breadcrumblink_div">\n                                                <tbody>\n                                                <tr *ngFor="let itmsp of specification_arr">\n                                                    <td class="firsttd" *ngIf="itmsp[1][0] != null && itmsp[0] != \'Item_Description\'">\n                                                        {{itmsp[0] | removeUnderscore:itmsp[0]}} :\n                                                    </td>\n                                                    <td class="secondtd" *ngIf="itmsp[1][0] != null && itmsp[0] != \'Item_Description\'">\n														<span *ngIf="itmsp[1].length > 1;else showSinglearr">\n															<span *ngFor="let itm of itmsp[1];">\n																{{ itm }} ,\n															</span>\n														</span>\n                                                        <ng-template #showSinglearr>\n                                                           <span>{{itmsp[1][0]}}</span>\n                                                        </ng-template>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td class="firsttd">UPC/EAN/ISBN :</td>\n                                                    <td class="secondtd">\n                                                        <span *ngIf="show_categoryDetails?.data[0].isbn == 0">Does not apply</span>\n                                                        <span *ngIf="show_categoryDetails?.data[0].isbn != 0">{{show_categoryDetails?.data[0].isbn}}</span>\n                                                    </td>\n                                                </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="row mt-3 mb-2 mb-lg-3 mb-xl-3 ml-0 mr-0 frontbg target_div">\n                                    <div class="col-lg-12 col-md-12 col-12 pl-3 pt-2 pb-2">\n                                        <h6 class="m-0">Product Description</h6>\n                                    </div>\n                                </div>\n                                <div class="row mt-3 ml-0 mr-0 pb-3">\n                                    <div class="col-lg-12 col-md-12 col-12 pl-4 pt-2 pb-2 shopvarticledetail">\n                                        <div class="shopvarticledetailsublaw mb-lg-3 breadcrumblink_div" [innerHTML]="show_categoryDetails?.data[0].specification[0].Item_Description">\n                                            \n                                        </div>\n									\n                                    </div>\n                                </div>\n                            </div>\n                            <div role="tabpanel" class="tab-pane" id="shippingandpayments">\n                                <div class="col-lg-12 col-md-12 col-12 pl-0 pr-0 mb-3">\n                                    <p class="mb-2 breadcrumblink_div">Seller assumes all responsibility for this\n                                        listing.</p>\n                                </div>\n                                <div class="row mb-2 mb-lg-3 mb-xl-3 ml-0 mr-0 frontbg">\n                                    <div class="col-lg-12 col-md-12 col-12 pl-3 pt-2 pb-2">\n                                        <h6 class="m-0">Shipping and handling</h6>\n                                    </div>\n                                </div>\n                                <div class="row shipingandhandling m-0 pb-3" id="shippingandhandlingtabdetail">\n                                    <div class="col-lg-12 col-md-12 col-12 pl-3 pt-3 pb-1 pr-3">\n                                        <table class="table breadcrumblink_div">\n                                            <tbody>\n                                            <tr>\n                                                <td class="firsttd">Item location:</td>\n                                                <td class="secondtd">{{show_categoryDetails?.data[0].product_address}}\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td class="firsttd">Shipping to:</td>\n                                                <td class="secondtd"><span\n                                                        *ngIf="show_categoryDetails?.data[0].ship_to == null; else spto"> - </span>\n                                                    <ng-template #spto>\n                                                        <span> {{show_categoryDetails?.data[0].ship_to}}</span>\n                                                    </ng-template>\n                                                </td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                                <div class="row mb-2 mb-lg-3 mb-xl-3 ml-0 mr-0 frontbg">\n                                    <div class="col-lg-12 col-md-12 col-12 pl-3 pt-2 pb-2">\n                                        <h6 class="m-0">Return policy <span class="pl-4"\n                                                                            *ngIf="show_categoryDetails?.data[0].return_opt == \'No\'">Not Applicable</span>\n                                        </h6>\n                                    </div>\n                                </div>\n                                <div class="row shipingandhandling ml-0 mr-0 mt-3 mb-0 pb-3">\n                                    <div class="col-lg-12 col-md-12 col-12 pl-3 pt-3 pb-1 pr-3" id="returnpolicy"\n                                         *ngIf="show_categoryDetails?.data[0].return_opt != \'No\'">\n                                        <table class="table breadcrumblink_div">\n                                            <thead class="thead-dark">\n                                            <tr>\n                                                <th scope="col" class="pl-3">After receiving the item, contact seller\n                                                    within\n                                                </th>\n                                                <th scope="col">Refund will be given as</th>\n                                                <th scope="col">Return shipping</th>\n                                            </tr>\n                                            </thead>\n                                            <tbody>\n                                            <tr>\n                                                <td class="pl-3">\n													<span>\n														{{ show_categoryDetails?.data[0].return_opt | replaceString:show_categoryDetails?.data[0].return_opt }} <span\n                                                            *ngIf="show_categoryDetails?.data[0].return_opt != \'No\'">days </span> returns\n													</span>\n                                                </td>\n                                                <td>-</td>\n                                                <td>\n                                                    <span *ngIf="show_categoryDetails?.data[0].ship_to == \'buyer\'">Buyer pays for return shipping</span>\n                                                    <span *ngIf="show_categoryDetails?.data[0].ship_to == \'seller\'">Seller pays for return shipping</span>\n                                                    <span *ngIf="show_categoryDetails?.data[0].ship_to != \'seller\' && show_categoryDetails?.data[0].ship_to != \'seller\'">-</span>\n                                                </td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <div class="col-lg-12 col-md-12 col-12">\n                                        <div class="returnpolicydetails pl-3 pt-1 pb-1 pr-3">\n                                            <p class="m-0 breadcrumblink_div">Return policy details</p>\n                                        </div>\n                                        <div class="returnpolicydetailstxt pl-3 pt-1 pb-1 pr-3 breadcrumblink_div">\n                                            <p class="m-1">\n                                                {{ show_categoryDetails?.data[0].return_policy }}\n                                            </p>\n                                            <p *ngIf="show_categoryDetails?.data[0].return_policy == null">\n                                                Seller does not have a return policy\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="row mb-2 mb-lg-3 mb-xl-3 ml-0 mr-0 frontbg">\n                                    <div class="col-lg-12 col-md-12 col-12 pl-3 pt-2 pb-2">\n                                        <h6 class="m-0">Payment details</h6>\n                                    </div>\n                                </div>\n                                <div class="row shipingandhandling ml-0 mr-0 mt-3 mb-0 pb-3" id="paypalaccepted">\n                                    <div class="col-lg-12 col-md-12 col-12 pt-2">\n                                        <div class="row m-0 returnpolicydetails pl-3 pt-1 pb-1 pr-3">\n                                            <div class="col-lg-5 col-md-5 col-7 pl-0">\n                                                <p class="m-0 breadcrumblink_div">Payment method</p>\n                                            </div>\n                                            <div class="col-lg-7 col-md-7 col-5 pl-0">\n                                                <p class="m-0 breadcrumblink_div"> Preferred / Accepted</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-12 col-md-12 col-12 pt-2">\n                                        <div class="row m-0 pl-3 pt-1 pb-1 pr-3" *ngFor="let pym_opt of show_categoryDetails?.data[0].payment_opt">\n                                            <div class="col-lg-5 col-md-5 col-7 pt-2 pl-lg-4">\n                                                <p *ngIf="pym_opt == \'1\'">\n													<img src="assets/images/logopaypal.png" class="img-fluid">\n													<img src="assets/images/payment_icons.png" class="img-fluid">\n												</p>\n                                                <p *ngIf="pym_opt == \'2\'" class="breadcrumblink_div">Cash on Delivery</p>\n                                            </div>\n                                            <div class="col-lg-5 col-md-5 col-5 pt-2 pl-lg-1">\n                                                <p class="m-0 breadcrumblink_div" *ngIf="pym_opt != \'3\'">Accepted</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n			\n			<div class="row mt-3 writeReview_div productdescriptiontabrow">\n				<div class="col-sm-12" *ngIf="localItem != null && show_categoryDetails?.data[0].seller_id != localItem?.id">\n					<div class="row pt-4 pb-4">\n						<div class="col-sm-4 col-md-4 col-lg-4 col-12">\n							Ratings and Reviews\n						</div>\n						<div class="col-sm-8 col-md-8 col-lg-8 col-12 text-left text-lg-right text-md-right mt-2 mt-lg-0 mt-md-0">\n							<a (click)="leaveFeedback(show_categoryDetails?.data[0].product_id,show_categoryDetails?.data[0].title,show_categoryDetails?.data[0].photos[0],show_categoryDetails?.data[0].seller_id)"\n                            class="atag_text">Write a review</a>\n						</div>\n					</div>\n					<hr>\n				</div>\n                <div class="col-sm-12 col-md-12 col-lg-12 col-12" *ngIf="show_categoryDetails?.feedback.total != 0">\n                    <div class="row pt-4 pb-4">\n                        <div class="col-sm-8 col-md-6 col-lg-6 col-12 text-left">\n                            Ratings and Reviews\n                        </div>\n                        <div class="col-sm-4 col-md-6 col-lg-6 col-12 text-left text-lg-right text-md-right mt-2 mt-lg-0 mt-md-0">\n                            <a href="#/product-reviews/{{show_categoryDetails?.data[0].product_id}}" class="atag_text">See all {{show_categoryDetails?.feedback.total}} reviews </a>\n                        </div>\n                    </div>\n                </div>\n				<div class="col-sm-12 mt-3">\n					<div class="set_fontSize" >\n                        <div class="row pt-2 pb-2 itemdescription" *ngFor="let ratingdisp of show_categoryDetails?.feedback.data">\n							<div class="col-sm-3 col-md-3 col-lg-3 col-12 mb-3 mb-lg-0 mb-md-0 mb-sm-0">\n								<div>\n									<span class="ratings">\n										<div class="empty-stars"></div> \n										<div class="full-stars" style="width:0%" *ngIf="ratingdisp?.rate == 0"></div>\n										<div class="full-stars" style="width:20%" *ngIf="ratingdisp?.rate == 1"></div>\n										<div class="full-stars" style="width:40%" *ngIf="ratingdisp?.rate == 2"></div>\n										<div class="full-stars" style="width:60%" *ngIf="ratingdisp?.rate == 3"></div>\n										<div class="full-stars" style="width:80%" *ngIf="ratingdisp?.rate == 4"></div>\n										<div class="full-stars" style="width:100%" *ngIf="ratingdisp?.rate == 5"></div>\n									</span>\n								</div>\n                                <div>by <a href="#/UserProfile/{{ratingdisp?.buyer_id}}">{{ratingdisp?.buyer_display_name}}</a></div>\n								<div>{{ratingdisp?.created_date}}</div>\n							</div>\n							<div class="col-sm-9 col-md-9 col-lg-9 col-12">\n								<div>\n									<h5 class="mb-1 m-0">{{ratingdisp?.title}}</h5>\n								</div>\n								<div>{{ratingdisp?.description}}</div>\n							</div>\n						</div>\n					</div>\n					\n					<div class="set_fontSize text-center" *ngIf="show_categoryDetails?.feedback.total == 0">\n						<h5>No rating available</h5>\n					</div>\n				</div>\n			</div>\n        </div>\n        <div *ngIf="show_categoryDetails?.data.length <= 0">\n            <div class="row bg-light m-0 text-center">\n                <div class="col-lg-12 col-md-12 col-12">\n                    <div class="error_inner pt-3 d-none">\n                        <h4>404</h4>\n                        <h5 class="mb-3">Error - Not Found</h5>\n                        <p class="mb-3">Sorry We’re not able to find this product</p>\n                        <h6 class="mb-3">back to <a href="#/home">Home</a></h6>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n	<!--================Footer Area =================-->\n	<footer-page></footer-page>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/product/product-details/product-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

/* jshint -W071, -W074 */
/* global jQuery:false */

/* Disabled options are:
 * W071: This function has too many statements
 * W074: This function's cyclomatic complexity is too high
 */

/*
 *	jQuery ezPlus 1.1.21
 *	Demo's and documentation:
 *	http://igorlino.github.io/elevatezoom-plus/
 *
 *	licensed under MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 *
 */

if (typeof Object.create !== 'function') {
    Object.create = function (obj) {
        function F() {
        }

        F.prototype = obj;
        return new F();
    };
}

(function ($, window, document, undefined) {
    var EZP = {
        init: function (options, elem) {
            var self = this;
            var $galleries;

            self.elem = elem;
            self.$elem = $(elem);

            self.options = $.extend({}, $.fn.ezPlus.options, self.responsiveConfig(options || {}));

            self.imageSrc = self.$elem.data(self.options.attrImageZoomSrc) ? self.$elem.data(self.options.attrImageZoomSrc) : self.$elem.attr('src');

            if (!self.options.enabled) {
                return;
            }

            //TINT OVERRIDE SETTINGS
            if (self.options.tint) {
                self.options.lensColour = 'transparent'; //colour of the lens background
                self.options.lensOpacity = '1'; //opacity of the lens
            }
            //INNER OVERRIDE SETTINGS
            if (self.options.zoomType === 'inner') {
                self.options.showLens = false;
            }

            // LENS OVERRIDE SETTINGS
            if (self.options.zoomType === 'lens') {
                self.options.zoomWindowWidth = 0;
            }

            //UUID WHEN MISSING IDENTIFIER
            if (self.options.zoomId === -1) {
                self.options.zoomId = generateUUID();
            }

            //Remove alt on hover

            self.$elem.parent().removeAttr('title').removeAttr('alt');

            self.zoomImage = self.imageSrc;

            self.refresh(1);

            //Create the image swap from the gallery
            $galleries = $(self.options.gallery ? ('#' + self.options.gallery) : self.options.gallerySelector);
            $galleries.on('click.zoom', self.options.galleryItem, function (e) {

                //Set a class on the currently active gallery image
                if (self.options.galleryActiveClass) {
                    $(self.options.galleryItem, $galleries).removeClass(self.options.galleryActiveClass);
                    $(this).addClass(self.options.galleryActiveClass);
                }
                //stop any link on the a tag from working
                if (this.tagName === 'A') {
                    e.preventDefault();
                }

                //call the swap image function
                if ($(this).data(self.options.attrImageZoomSrc)) {
                    self.zoomImagePre = $(this).data(self.options.attrImageZoomSrc);
                }
                else {
                    self.zoomImagePre = $(this).data('image');
                }
                self.swaptheimage($(this).data('image'), self.zoomImagePre);
                if (this.tagName === 'A') {
                    return false;
                }
            });

            function generateUUID() {
                var d = new Date().getTime();
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
                return uuid;
            }
        },
        refresh: function (length) {
            var self = this;

            setTimeout(function () {
                self.fetch(self.imageSrc, self.$elem, self.options.minZoomLevel);

            }, length || self.options.refresh);
        },
        fetch: function (imgsrc, element, minZoom) {
            //get the image
            var self = this;
            var newImg = new Image();
            newImg.onload = function () {
                //set the large image dimensions - used to calculte ratio's
                if (newImg.width / element.width() <= minZoom) {
                    self.largeWidth = element.width() * minZoom;
                } else {
                    self.largeWidth = newImg.width;
                }
                if (newImg.height / element.height() <= minZoom) {
                    self.largeHeight = element.height() * minZoom;
                } else {
                    self.largeHeight = newImg.height;
                }
                //once image is loaded start the calls
                self.startZoom();
                self.currentImage = self.imageSrc;
                //let caller know image has been loaded
                self.options.onZoomedImageLoaded(self.$elem);
            };
            self.setImageSource(newImg, imgsrc); // this must be done AFTER setting onload

            return;
        },
        setImageSource: function (image, src) {
            //sets an image's source.
            image.src = src;
        },
        startZoom: function () {
            var self = this;
            //get dimensions of the non zoomed image
            self.nzWidth = self.$elem.width();
            self.nzHeight = self.$elem.height();

            //activated elements
            self.isWindowActive = false;
            self.isLensActive = false;
            self.isTintActive = false;
            self.overWindow = false;

            //CrossFade Wrapper
            if (self.options.imageCrossfade) {
                self.zoomWrap = self.$elem.wrap('<div style="height:' + self.nzHeight + 'px;width:' + self.nzWidth + 'px;" class="zoomWrapper" />');
                self.$elem.css('position', 'absolute');
            }

            self.zoomLock = 1;
            self.scrollingLock = false;
            self.changeBgSize = false;
            self.currentZoomLevel = self.options.zoomLevel;

            //get offset of the non zoomed image
            self.updateOffset(self);
            //calculate the width ratio of the large/small image
            self.widthRatio = (self.largeWidth / self.currentZoomLevel) / self.nzWidth;
            self.heightRatio = (self.largeHeight / self.currentZoomLevel) / self.nzHeight;

            function getWindowZoomStyle() {
                return 'display: none;' +
                    'position: absolute;' +
                    'float: left;' +
                    'height: ' + String(self.options.zoomWindowHeight) + 'px;' +
                    'width: ' + String(self.options.zoomWindowWidth) + 'px;' +
                    'text-align: center;' +
                    'border: ' + String(self.options.borderSize) + 'px solid ' + self.options.borderColour + ';' +
                    'background-size: ' + self.largeWidth / self.currentZoomLevel + 'px ' + self.largeHeight / self.currentZoomLevel + 'px;' +
                    'background-position: 0px 0px;' +
                    'background-repeat: no-repeat;' +
                    'background-color: ' + String(self.options.zoomWindowBgColour) + ';' +
                    'overflow: hidden;' +
                    'z-index: 100;';
            }

            //if window zoom
            if (self.options.zoomType === 'window') {
                self.zoomWindowStyle = getWindowZoomStyle();
            }

            function getInnerZoomStyle() {
                //has a border been put on the image? Lets cater for this
                var borderWidth = self.$elem.css('border-left-width');

                return 'display: none;' +
                    'position: absolute;' +
                    'float: left;' +
                    'height: ' + String(self.nzHeight) + 'px;' +
                    'width: ' + String(self.nzWidth) + 'px;' +
                    'margin-top: ' + String(borderWidth) + ';' +
                    'margin-left: ' + String(borderWidth) + ';' +
                    'border: ' + String(self.options.borderSize) + 'px solid ' + self.options.borderColour + ';' +
                    'background-position: 0px 0px;' +
                    'background-repeat: no-repeat;' +
                    'cursor:' + (self.options.cursor) + ';' +
                    'overflow: hidden;' +
                    'zindex: ' + self.options.zIndex + ";";
            }

            //if inner  zoom
            if (self.options.zoomType === 'inner') {
                self.zoomWindowStyle = getInnerZoomStyle();
            }

            function getWindowLensStyle() {
                // adjust images less than the window height

                if (self.nzHeight < self.options.zoomWindowHeight / self.heightRatio) {
                    self.lensHeight = self.nzHeight;
                }
                else {
                    self.lensHeight = String(self.options.zoomWindowHeight / self.heightRatio);
                }
                if (self.largeWidth < self.options.zoomWindowWidth) {
                    self.lensWidth = self.nzWidth;
                }
                else {
                    self.lensWidth = String(self.options.zoomWindowWidth / self.widthRatio);
                }

                return 'display: none;' +
                    'position: absolute;' +
                    'float: right;' +
                    'height: ' + self.lensHeight + 'px;' +
                    'width: ' + self.lensWidth + 'px;' +
                    'border: ' + (self.options.lensBorderSize) + 'px' + ' solid ' + (self.options.lensBorderColour) + ';' +
                    'background-position: 0px 0px;' +
                    'background-repeat: no-repeat;' +
                    'background-color: ' + (self.options.lensColour) + ';' +
                    'opacity: ' + (self.options.lensOpacity) + ';' +
                    'filter: alpha(opacity = ' + (self.options.lensOpacity * 100) + ');' +
                    'zoom: 1;' +
                    'cursor:' + (self.options.cursor) + ';' +
                    'z-index: 999;' +
                    'overflow: hidden;';
            }

            //lens style for window zoom
            if (self.options.zoomType === 'window') {
                self.lensStyle = getWindowLensStyle();
            }

            //tint style
            self.tintStyle =
                'display: block;' +
                'position: absolute;' +
                'height: ' + self.nzHeight + 'px;' +
                'width: ' + self.nzWidth + 'px;' +
                'background-color: ' + self.options.tintColour + ';' +
                'filter: alpha(opacity=0);' +
                'opacity: 0;';

            //lens style for lens zoom with optional round for modern browsers
            self.lensRound = '';

            if (self.options.zoomType === 'lens') {
                self.lensStyle =
                    'display: none;' +
                    'position: absolute;' +
                    'float: left;' +
                    'height:' + String(self.options.lensSize) + 'px;' +
                    'width:' + String(self.options.lensSize) + 'px;' +
                    'border: ' + String(self.options.borderSize) + 'px solid ' + self.options.borderColour + ';' +
                    'background-position: 0px 0px;' +
                    'background-repeat: no-repeat;' +
                    'background-color: ' + self.options.lensColour + ";" +
                    'cursor:' + (self.options.cursor) + ';';
            }

            //does not round in all browsers
            if (self.options.lensShape === 'round') {
                self.lensRound =
                    'border-radius: ' + String(self.options.lensSize / 2 + self.options.borderSize) + 'px;';
            }

            //create the div's                                                + ""
            //self.zoomContainer = $('<div/>').addClass('zoomContainer').css({"position":"relative", "height":self.nzHeight, "width":self.nzWidth});

            self.zoomContainer =
                $('<div class="zoomContainer" ' +
                'uuid="' + self.options.zoomId + '"' +
                'style="' +
                'position: absolute;' +
                'top: ' + self.nzOffset.top + 'px;' +
                'left: ' + self.nzOffset.left + 'px;' +
                'height: ' + self.nzHeight + 'px;' + '' +
                'width: ' + self.nzWidth + 'px;' +
                'z-index: ' + self.options.zIndex + '"></div>');
            if (self.$elem.attr('id')) {
                self.zoomContainer.attr('id', self.$elem.attr('id') + '-zoomContainer');
            }
            $(self.options.zoomContainerAppendTo).append(self.zoomContainer);

            //this will add overflow hidden and contrain the lens on lens mode
            if (self.options.containLensZoom && self.options.zoomType === 'lens') {
                self.zoomContainer.css('overflow', 'hidden');
            }
            if (self.options.zoomType !== 'inner') {
                self.zoomLens = $('<div class="zoomLens" style="' + self.lensStyle + self.lensRound + '">&nbsp;</div>')
                    .appendTo(self.zoomContainer)
                    .click(function () {
                        self.$elem.trigger('click');
                    });

                if (self.options.tint) {
                    self.tintContainer = $('<div/>').addClass('tintContainer');
                    self.zoomTint = $('<div class="zoomTint" style="' + self.tintStyle + '"></div>');

                    self.zoomLens.wrap(self.tintContainer);

                    self.zoomTintcss = self.zoomLens.after(self.zoomTint);

                    //if tint enabled - set an image to show over the tint

                    self.zoomTintImage = $('<img style="' +
                    'position: absolute;' +
                    'top: 0px;' +
                    'left: 0px;' +
                    'height: ' + self.nzHeight + 'px;" ' +
                    'width: ' + self.nzWidth + 'px; ' +
                    'max-width: none; ' +
                    'src="' + self.$elem.attr('src') + '">')
                        .appendTo(self.zoomLens)
                        .click(function () {
                            self.$elem.trigger('click');
                        });
                }
            }

            //create zoom window
            var targetZoomContainer = isNaN(self.options.zoomWindowPosition) ? 'body' : self.zoomContainer;
            self.zoomWindow = $('<div style="' +
            'z-index: 999;' +
            'top: ' + (self.windowOffsetTop) + 'px;' +
            'left: ' + (self.windowOffsetLeft) + 'px;' +
            self.zoomWindowStyle + '" class="zoomWindow">&nbsp;</div>')
                .appendTo(targetZoomContainer).click(function () {
                    self.$elem.trigger('click');
                });
            self.zoomWindowContainer = $('<div/>').addClass('zoomWindowContainer').css('width', self.options.zoomWindowWidth);
            self.zoomWindow.wrap(self.zoomWindowContainer);

            //  self.captionStyle = "text-align: left;background-color: black;'+
            // 'color: white;font-weight: bold;padding: 10px;font-family: sans-serif;font-size: 11px";
            // self.zoomCaption = $('<div class="ezplus-caption" '+
            // 'style="'+self.captionStyle+'display: block; width: 280px;">INSERT ALT TAG</div>').appendTo(self.zoomWindow.parent());

            if (self.options.zoomType === 'lens') {
                self.zoomLens.css('background-image', 'url("' + self.imageSrc + '")');
            }
            if (self.options.zoomType === 'window') {
                self.zoomWindow.css('background-image', 'url("' + self.imageSrc + '")');
            }
            if (self.options.zoomType === 'inner') {
                self.zoomWindow.css('background-image', 'url("' + self.imageSrc + '")');
            }

            /*-------------------END THE ZOOM WINDOW AND LENS----------------------------------*/
            if (self.options.touchEnabled) {
                //touch events
                self.$elem.bind('touchmove.ezpspace', function (e) {
                    e.preventDefault();
                    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    self.setPosition(touch);
                });
                self.zoomContainer.bind('touchmove.ezpspace', function (e) {
                    self.setElements('show');
                    e.preventDefault();
                    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    self.setPosition(touch);

                });
                self.zoomContainer.bind('touchend.ezpspace', function (e) {
                    self.showHideWindow('hide');
                    if (self.options.showLens) {
                        self.showHideLens('hide');
                    }
                    if (self.options.tint && self.options.zoomType !== 'inner') {
                        self.showHideTint('hide');
                    }
                });

                self.$elem.bind('touchend.ezpspace', function (e) {
                    self.showHideWindow('hide');
                    if (self.options.showLens) {
                        self.showHideLens('hide');
                    }
                    if (self.options.tint && self.options.zoomType !== 'inner') {
                        self.showHideTint('hide');
                    }
                });
                if (self.options.showLens) {
                    self.zoomLens.bind('touchmove.ezpspace', function (e) {

                        e.preventDefault();
                        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                        self.setPosition(touch);
                    });

                    self.zoomLens.bind('touchend.ezpspace', function (e) {
                        self.showHideWindow('hide');
                        if (self.options.showLens) {
                            self.showHideLens('hide');
                        }
                        if (self.options.tint && self.options.zoomType !== 'inner') {
                            self.showHideTint('hide');
                        }
                    });
                }
            }
            //Needed to work in IE
            self.$elem.bind('mousemove.ezpspace', function (e) {
                if (self.overWindow === false) {
                    self.setElements('show');
                }
                //make sure on orientation change the setposition is not fired
                if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
                    self.setPosition(e);
                    self.currentLoc = e;
                }
                self.lastX = e.clientX;
                self.lastY = e.clientY;

            });

            self.zoomContainer.bind('click.ezpspace touchstart.ezpspace', self.options.onImageClick);

            self.zoomContainer.bind('mousemove.ezpspace', function (e) {
                if (self.overWindow === false) {
                    self.setElements('show');
                }
                mouseMoveZoomHandler(e);
            });

            function mouseMoveZoomHandler(e) {
                //self.overWindow = true;
                //make sure on orientation change the setposition is not fired
                if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
                    self.setPosition(e);
                    self.currentLoc = e;
                }
                self.lastX = e.clientX;
                self.lastY = e.clientY;
            }

            var elementToTrack = null;
            if (self.options.zoomType !== 'inner') {
                elementToTrack = self.zoomLens;
            }
            if (self.options.tint && self.options.zoomType !== 'inner') {
                elementToTrack = self.zoomTint;
            }
            if (self.options.zoomType === 'inner') {
                elementToTrack = self.zoomWindow;
            }

            //register the mouse tracking
            if (elementToTrack) {
                elementToTrack.bind('mousemove.ezpspace', mouseMoveZoomHandler);
            }

            //  lensFadeOut: 500,  zoomTintFadeIn
            self.zoomContainer.add(self.$elem).mouseenter(function () {
                if (self.overWindow === false) {
                    self.setElements('show');
                }
            }).mouseleave(function () {
                if (!self.scrollLock) {
                    self.setElements('hide');
                    self.options.onDestroy(self.$elem);
                }
            });
            //end ove image

            if (self.options.zoomType !== 'inner') {
                self.zoomWindow.mouseenter(function () {
                    self.overWindow = true;
                    self.setElements('hide');
                }).mouseleave(function () {
                    self.overWindow = false;
                });
            }
            //end ove image

            // var delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);

            //      $(this).empty();
            //    return false;

            //fix for initial zoom setting
            //if (self.options.zoomLevel !== 1) {
            //    	self.changeZoomLevel(self.currentZoomLevel);
            //}
            //set the min zoomlevel
            if (self.options.minZoomLevel) {
                self.minZoomLevel = self.options.minZoomLevel;
            }
            else {
                self.minZoomLevel = self.options.scrollZoomIncrement * 2;
            }

            if (self.options.scrollZoom) {
                //see compatibility of mouse events at https://developer.mozilla.org/en-US/docs/Web/Events/mousewheel
                self.zoomContainer.add(self.$elem).bind('wheel DOMMouseScroll MozMousePixelScroll', function (e) {
                    // in IE there is issue with firing of mouseleave - So check whether still scrolling
                    // and on mouseleave check if scrolllock
                    self.scrollLock = true;
                    clearTimeout($.data(this, 'timer'));
                    $.data(this, 'timer', setTimeout(function () {
                        self.scrollLock = false;
                        //do something
                    }, 250));

                    var theEvent = e.originalEvent.deltaY || e.originalEvent.detail * -1;

                    //this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
                    //   e.preventDefault();

                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    e.preventDefault();

                    if (theEvent == 0) {
                        // fixes last event inversion bug
                        return false;
                    }

                    if (theEvent / 120 > 0) {
                        var nextZoomLevel = parseFloat(self.currentZoomLevel) - self.options.scrollZoomIncrement;
                        //scrolling up
                        if (nextZoomLevel >= parseFloat(self.minZoomLevel)) {
                            self.changeZoomLevel(nextZoomLevel);
                        }
                    }
                    else {
                        //scrolling down

                        //Check if it has to maintain original zoom window aspect ratio or not
                        if ((!self.fullheight && !self.fullwidth) || !self.options.mantainZoomAspectRatio) {
                            var nextZoomLevel = parseFloat(self.currentZoomLevel) + self.options.scrollZoomIncrement;

                            if (self.options.maxZoomLevel) {
                                if (nextZoomLevel <= self.options.maxZoomLevel) {
                                    self.changeZoomLevel(nextZoomLevel);
                                }
                            }
                            else {
                                //andy
                                self.changeZoomLevel(nextZoomLevel);
                            }
                        }
                    }
                    return false;
                });
            }
        },
        destroy: function () {
            var self = this;
            self.$elem.unbind('ezpspace');
            $(self.zoomContainer).remove();
            if (self.options.loadingIcon && !!self.spinner && !!self.spinner.length) {
                self.spinner.remove();
                delete self.spinner;
            }
        },
        getIdentifier: function () {
            var self = this;
            return self.options.zoomId;
        },
        setElements: function (type) {
            var self = this;
            if (!self.options.zoomEnabled) {
                return false;
            }
            if (type === 'show') {
                if (self.isWindowSet) {
                    if (self.options.zoomType === 'inner') {
                        self.showHideWindow('show');
                    }
                    if (self.options.zoomType === 'window') {
                        self.showHideWindow('show');
                    }
                    if (self.options.showLens) {
                        self.showHideLens('show');
                    }
                    if (self.options.tint && self.options.zoomType !== 'inner') {
                        self.showHideTint('show');
                    }
                }
            }

            if (type === 'hide') {
                if (self.options.zoomType === 'window') {
                    self.showHideWindow('hide');
                }
                if (!self.options.tint) {
                    self.showHideWindow('hide');
                }
                if (self.options.showLens) {
                    self.showHideLens('hide');
                }
                if (self.options.tint) {
                    self.showHideTint('hide');
                }
            }
        },
        setPosition: function (e) {

            var self = this;

            if (!self.options.zoomEnabled) {
                return false;
            }

            //recaclc offset each time in case the image moves
            //this can be caused by other on page elements
            self.nzHeight = self.$elem.height();
            self.nzWidth = self.$elem.width();
            self.updateOffset(self);

            if (self.options.tint && self.options.zoomType !== 'inner') {
                self.zoomTint.css({
                    top: 0,
                    left: 0
                });
            }
            //set responsive
            //will checking if the image needs changing before running this code work faster?
            if (self.options.responsive && !self.options.scrollZoom) {
                if (self.options.showLens) {
                    var lensHeight, lensWidth;
                    if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
                        self.lensHeight = self.nzHeight;
                    }
                    else {
                        self.lensHeight = String((self.options.zoomWindowHeight / self.heightRatio));
                    }
                    if (self.largeWidth < self.options.zoomWindowWidth) {
                        self.lensWidth = self.nzWidth;
                    }
                    else {
                        self.lensWidth = (self.options.zoomWindowWidth / self.widthRatio);
                    }
                    self.widthRatio = self.largeWidth / self.nzWidth;
                    self.heightRatio = self.largeHeight / self.nzHeight;
                    if (self.options.zoomType !== 'lens') {
                        //possibly dont need to keep recalcalculating
                        //if the lens is heigher than the image, then set lens size to image size
                        if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
                            self.lensHeight = self.nzHeight;

                        }
                        else {
                            self.lensHeight = String((self.options.zoomWindowHeight / self.heightRatio));
                        }

                        if (self.nzWidth < self.options.zoomWindowHeight / self.heightRatio) {
                            self.lensWidth = self.nzWidth;
                        }
                        else {
                            self.lensWidth = String((self.options.zoomWindowWidth / self.widthRatio));
                        }

                        self.zoomLens.css({
                            'width': self.lensWidth,
                            'height': self.lensHeight
                        });

                        if (self.options.tint) {
                            self.zoomTintImage.css({
                                'width': self.nzWidth,
                                'height': self.nzHeight
                            });
                        }

                    }
                    if (self.options.zoomType === 'lens') {
                        self.zoomLens.css({
                            width: String(self.options.lensSize) + 'px',
                            height: String(self.options.lensSize) + 'px'
                        });
                    }
                    //end responsive image change
                }
            }

            //container fix
            self.zoomContainer.css({
                top: self.nzOffset.top,
                left: self.nzOffset.left,
                width: self.nzWidth,  // new code
                height: self.nzHeight // new code
            });
            self.mouseLeft = parseInt(e.pageX - self.nzOffset.left);
            self.mouseTop = parseInt(e.pageY - self.nzOffset.top);
            //calculate the Location of the Lens

            //calculate the bound regions - but only if zoom window
            if (self.options.zoomType === 'window') {
                var zoomLensHeight = self.zoomLens.height() / 2;
                var zoomLensWidth = self.zoomLens.width() / 2;
                self.Etoppos = (self.mouseTop < 0 + zoomLensHeight);
                self.Eboppos = (self.mouseTop > self.nzHeight - zoomLensHeight - (self.options.lensBorderSize * 2));
                self.Eloppos = (self.mouseLeft < 0 + zoomLensWidth);
                self.Eroppos = (self.mouseLeft > (self.nzWidth - zoomLensWidth - (self.options.lensBorderSize * 2)));
            }
            //calculate the bound regions - but only for inner zoom
            if (self.options.zoomType === 'inner') {
                self.Etoppos = (self.mouseTop < ((self.nzHeight / 2) / self.heightRatio));
                self.Eboppos = (self.mouseTop > (self.nzHeight - ((self.nzHeight / 2) / self.heightRatio)));
                self.Eloppos = (self.mouseLeft < 0 + (((self.nzWidth / 2) / self.widthRatio)));
                self.Eroppos = (self.mouseLeft > (self.nzWidth - (self.nzWidth / 2) / self.widthRatio - (self.options.lensBorderSize * 2)));
            }

            // if the mouse position of the slider is one of the outerbounds, then hide  window and lens
            if (self.mouseLeft < 0 || self.mouseTop < 0 || self.mouseLeft > self.nzWidth || self.mouseTop > self.nzHeight) {
                self.setElements('hide');
                return;
            }
            //else continue with operations
            else {
                //lens options
                if (self.options.showLens) {
                    //		self.showHideLens('show');
                    //set background position of lens
                    self.lensLeftPos = String(Math.floor(self.mouseLeft - self.zoomLens.width() / 2));
                    self.lensTopPos = String(Math.floor(self.mouseTop - self.zoomLens.height() / 2));
                }
                //adjust the background position if the mouse is in one of the outer regions

                //Top region
                if (self.Etoppos) {
                    self.lensTopPos = 0;
                }
                //Left Region
                if (self.Eloppos) {
                    self.windowLeftPos = 0;
                    self.lensLeftPos = 0;
                    self.tintpos = 0;
                }
                //Set bottom and right region for window mode
                if (self.options.zoomType === 'window') {
                    if (self.Eboppos) {
                        self.lensTopPos = Math.max((self.nzHeight) - self.zoomLens.height() - (self.options.lensBorderSize * 2), 0);
                    }
                    if (self.Eroppos) {
                        self.lensLeftPos = (self.nzWidth - (self.zoomLens.width()) - (self.options.lensBorderSize * 2));
                    }
                }
                //Set bottom and right region for inner mode
                if (self.options.zoomType === 'inner') {
                    if (self.Eboppos) {
                        self.lensTopPos = Math.max(((self.nzHeight) - (self.options.lensBorderSize * 2)), 0);
                    }
                    if (self.Eroppos) {
                        self.lensLeftPos = (self.nzWidth - (self.nzWidth) - (self.options.lensBorderSize * 2));
                    }
                }
                //if lens zoom
                if (self.options.zoomType === 'lens') {

                    self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomLens.width() / 2) * (-1));
                    self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomLens.height() / 2) * (-1));
                    self.zoomLens.css('background-position', self.windowLeftPos + 'px ' + self.windowTopPos + 'px');

                    if (self.changeBgSize) {
                        if (self.nzHeight > self.nzWidth) {
                            if (self.options.zoomType === 'lens') {
                                self.zoomLens.css('background-size',
                                    self.largeWidth / self.newvalueheight + 'px ' +
                                    self.largeHeight / self.newvalueheight + 'px');
                            }

                            self.zoomWindow.css('background-size',
                                self.largeWidth / self.newvalueheight + 'px ' +
                                self.largeHeight / self.newvalueheight + 'px');
                        }
                        else {
                            if (self.options.zoomType === 'lens') {
                                self.zoomLens.css('background-size',
                                    self.largeWidth / self.newvaluewidth + 'px ' +
                                    self.largeHeight / self.newvaluewidth + 'px');
                            }
                            self.zoomWindow.css('background-size',
                                self.largeWidth / self.newvaluewidth + 'px ' +
                                self.largeHeight / self.newvaluewidth + 'px');
                        }
                        self.changeBgSize = false;
                    }

                    self.setWindowPosition(e);
                }
                //if tint zoom
                if (self.options.tint && self.options.zoomType !== 'inner') {
                    self.setTintPosition(e);
                }
                //set the css background position
                if (self.options.zoomType === 'window') {
                    self.setWindowPosition(e);
                }
                if (self.options.zoomType === 'inner') {
                    self.setWindowPosition(e);
                }
                if (self.options.showLens) {
                    if (self.fullwidth && self.options.zoomType !== 'lens') {
                        self.lensLeftPos = 0;
                    }
                    self.zoomLens.css({
                        left: self.lensLeftPos + 'px',
                        top: self.lensTopPos + 'px'
                    });
                }

            } //end else
        },
        showHideZoomContainer: function (change) {
            var self = this;
            if (change === 'show') {
                if (self.zoomContainer) {
                    self.zoomContainer.show();
                }
            }
            if (change === 'hide') {
                if (self.zoomContainer) {
                    self.zoomContainer.hide();
                }
            }
        },
        showHideWindow: function (change) {
            var self = this;
            if (change === 'show') {
                if (!self.isWindowActive && self.zoomWindow) {
                    self.options.onShow(self);
                    if (self.options.zoomWindowFadeIn) {
                        self.zoomWindow.stop(true, true, false).fadeIn(self.options.zoomWindowFadeIn);
                    }
                    else {
                        self.zoomWindow.show();
                    }
                    self.isWindowActive = true;
                }
            }
            if (change === 'hide') {
                if (self.isWindowActive) {
                    if (self.options.zoomWindowFadeOut) {
                        self.zoomWindow.stop(true, true).fadeOut(self.options.zoomWindowFadeOut, function () {
                            if (self.loop) {
                                //stop moving the zoom window when zoom window is faded out
                                clearInterval(self.loop);
                                self.loop = false;
                            }
                        });
                    }
                    else {
                        self.zoomWindow.hide();
                    }
                    self.isWindowActive = false;
                }
            }
        },
        showHideLens: function (change) {
            var self = this;
            if (change === 'show') {
                if (!self.isLensActive) {
                    if (self.zoomLens) {
                        if (self.options.lensFadeIn) {
                            self.zoomLens.stop(true, true, false).fadeIn(self.options.lensFadeIn);
                        }
                        else {
                            self.zoomLens.show();
                        }
                    }
                    self.isLensActive = true;
                }
            }
            if (change === 'hide') {
                if (self.isLensActive) {
                    if (self.zoomLens) {
                        if (self.options.lensFadeOut) {
                            self.zoomLens.stop(true, true).fadeOut(self.options.lensFadeOut);
                        }
                        else {
                            self.zoomLens.hide();
                        }
                    }
                    self.isLensActive = false;
                }
            }
        },
        showHideTint: function (change) {
            var self = this;
            if (change === 'show') {
                if (!self.isTintActive && self.zoomTint) {

                    if (self.options.zoomTintFadeIn) {
                        self.zoomTint.css('opacity', self.options.tintOpacity).animate().stop(true, true).fadeIn('slow');
                    }
                    else {
                        self.zoomTint.css('opacity', self.options.tintOpacity).animate();
                        self.zoomTint.show();
                    }
                    self.isTintActive = true;
                }
            }
            if (change === 'hide') {
                if (self.isTintActive) {

                    if (self.options.zoomTintFadeOut) {
                        self.zoomTint.stop(true, true).fadeOut(self.options.zoomTintFadeOut);
                    }
                    else {
                        self.zoomTint.hide();
                    }
                    self.isTintActive = false;
                }
            }
        },

        setLensPosition: function (e) {
        },

        setWindowPosition: function (e) {
            //return obj.slice( 0, count );
            var self = this;

            if (!isNaN(self.options.zoomWindowPosition)) {

                switch (self.options.zoomWindowPosition) {
                    case 1: //done
                        self.windowOffsetTop = (self.options.zoomWindowOffsetY);//DONE - 1
                        self.windowOffsetLeft = (+self.nzWidth); //DONE 1, 2, 3, 4, 16
                        break;
                    case 2:
                        if (self.options.zoomWindowHeight > self.nzHeight) { //positive margin

                            self.windowOffsetTop = ((self.options.zoomWindowHeight / 2) - (self.nzHeight / 2)) * (-1);
                            self.windowOffsetLeft = (self.nzWidth); //DONE 1, 2, 3, 4, 16
                        }
                        else { //negative margin
                            $.noop();
                        }
                        break;
                    case 3: //done
                        self.windowOffsetTop = (self.nzHeight - self.zoomWindow.height() - (self.options.borderSize * 2)); //DONE 3,9
                        self.windowOffsetLeft = (self.nzWidth); //DONE 1, 2, 3, 4, 16
                        break;
                    case 4: //done
                        self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
                        self.windowOffsetLeft = (self.nzWidth); //DONE 1, 2, 3, 4, 16
                        break;
                    case 5: //done
                        self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
                        self.windowOffsetLeft = (self.nzWidth - self.zoomWindow.width() - (self.options.borderSize * 2)); //DONE - 5,15
                        break;
                    case 6:
                        if (self.options.zoomWindowHeight > self.nzHeight) { //positive margin
                            self.windowOffsetTop = (self.nzHeight);  //DONE - 4,5,6,7,8

                            self.windowOffsetLeft = ((self.options.zoomWindowWidth / 2) - (self.nzWidth / 2) + (self.options.borderSize * 2)) * (-1);
                        }
                        else { //negative margin
                            $.noop();
                        }

                        break;
                    case 7: //done
                        self.windowOffsetTop = (self.nzHeight);  //DONE - 4,5,6,7,8
                        self.windowOffsetLeft = 0; //DONE 7, 13
                        break;
                    case 8: //done
                        self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
                        self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);  //DONE 8,9,10,11,12
                        break;
                    case 9:  //done
                        self.windowOffsetTop = (self.nzHeight - self.zoomWindow.height() - (self.options.borderSize * 2)); //DONE 3,9
                        self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);  //DONE 8,9,10,11,12
                        break;
                    case 10:
                        if (self.options.zoomWindowHeight > self.nzHeight) { //positive margin

                            self.windowOffsetTop = ((self.options.zoomWindowHeight / 2) - (self.nzHeight / 2)) * (-1);
                            self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);  //DONE 8,9,10,11,12
                        }
                        else { //negative margin
                            $.noop();
                        }
                        break;
                    case 11:
                        self.windowOffsetTop = (self.options.zoomWindowOffsetY);
                        self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);  //DONE 8,9,10,11,12
                        break;
                    case 12: //done
                        self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); //DONE 12,13,14,15,16
                        self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);  //DONE 8,9,10,11,12
                        break;
                    case 13: //done
                        self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); //DONE 12,13,14,15,16
                        self.windowOffsetLeft = (0); //DONE 7, 13
                        break;
                    case 14:
                        if (self.options.zoomWindowHeight > self.nzHeight) { //positive margin
                            self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); //DONE 12,13,14,15,16

                            self.windowOffsetLeft = ((self.options.zoomWindowWidth / 2) - (self.nzWidth / 2) + (self.options.borderSize * 2)) * (-1);
                        }
                        else { //negative margin
                            $.noop();
                        }
                        break;
                    case 15://done
                        self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); //DONE 12,13,14,15,16
                        self.windowOffsetLeft = (self.nzWidth - self.zoomWindow.width() - (self.options.borderSize * 2)); //DONE - 5,15
                        break;
                    case 16:  //done
                        self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); //DONE 12,13,14,15,16
                        self.windowOffsetLeft = (self.nzWidth); //DONE 1, 2, 3, 4, 16
                        break;
                    default: //done
                        self.windowOffsetTop = (self.options.zoomWindowOffsetY);//DONE - 1
                        self.windowOffsetLeft = (self.nzWidth); //DONE 1, 2, 3, 4, 16
                }
            } //end isNAN
            else {
                // For BC purposes, treat passed element as ID if element not found
                self.externalContainer = $(self.options.zoomWindowPosition);
                if (!self.externalContainer.length) {
                    self.externalContainer = $('#' + self.options.zoomWindowPosition);
                }

                self.externalContainerWidth = self.externalContainer.width();
                self.externalContainerHeight = self.externalContainer.height();
                self.externalContainerOffset = self.externalContainer.offset();

                self.windowOffsetTop = self.externalContainerOffset.top;//DONE - 1
                self.windowOffsetLeft = self.externalContainerOffset.left; //DONE 1, 2, 3, 4, 16

            }
            self.isWindowSet = true;
            self.windowOffsetTop = self.windowOffsetTop + self.options.zoomWindowOffsetY;
            self.windowOffsetLeft = self.windowOffsetLeft + self.options.zoomWindowOffsetX;

            self.zoomWindow.css({
                top: self.windowOffsetTop,
                left: self.windowOffsetLeft
            });

            if (self.options.zoomType === 'inner') {
                self.zoomWindow.css({
                    top: 0,
                    left: 0
                });

            }

            self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1));
            self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));
            if (self.Etoppos) {
                self.windowTopPos = 0;
            }
            if (self.Eloppos) {
                self.windowLeftPos = 0;
            }
            if (self.Eboppos) {
                self.windowTopPos = (self.largeHeight / self.currentZoomLevel - self.zoomWindow.height()) * (-1);
            }
            if (self.Eroppos) {
                self.windowLeftPos = ((self.largeWidth / self.currentZoomLevel - self.zoomWindow.width()) * (-1));
            }

            //stops micro movements
            if (self.fullheight) {
                self.windowTopPos = 0;
            }
            if (self.fullwidth) {
                self.windowLeftPos = 0;
            }

            //set the css background position
            if (self.options.zoomType === 'window' || self.options.zoomType === 'inner') {

                if (self.zoomLock === 1) {
                    //overrides for images not zoomable
                    if (self.widthRatio <= 1) {
                        self.windowLeftPos = 0;
                    }
                    if (self.heightRatio <= 1) {
                        self.windowTopPos = 0;
                    }
                }
                // adjust images less than the window height

                if (self.options.zoomType === 'window') {
                    if (self.largeHeight < self.options.zoomWindowHeight) {
                        self.windowTopPos = 0;
                    }
                    if (self.largeWidth < self.options.zoomWindowWidth) {
                        self.windowLeftPos = 0;
                    }
                }
                //set the zoomwindow background position
                if (self.options.easing) {

                    //     if(self.changeZoom){
                    //           clearInterval(self.loop);
                    //           self.changeZoom = false;
                    //           self.loop = false;

                    //            }
                    //set the pos to 0 if not set
                    if (!self.xp) {
                        self.xp = 0;
                    }
                    if (!self.yp) {
                        self.yp = 0;
                    }
                    var interval = 16;
                    if (Number.isInteger(parseInt(self.options.easing))) {
                        interval = parseInt(self.options.easing);
                    }
                    //if loop not already started, then run it
                    if (!self.loop) {
                        self.loop = setInterval(function () {
                            //using zeno's paradox

                            self.xp += (self.windowLeftPos - self.xp) / self.options.easingAmount;
                            self.yp += (self.windowTopPos - self.yp) / self.options.easingAmount;
                            if (self.scrollingLock) {

                                clearInterval(self.loop);
                                self.xp = self.windowLeftPos;
                                self.yp = self.windowTopPos;

                                self.xp = ((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1);
                                self.yp = (((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));

                                if (self.changeBgSize) {
                                    if (self.nzHeight > self.nzWidth) {
                                        if (self.options.zoomType === 'lens') {
                                            self.zoomLens.css('background-size',
                                                self.largeWidth / self.newvalueheight + 'px ' +
                                                self.largeHeight / self.newvalueheight + 'px');
                                        }
                                        self.zoomWindow.css('background-size',
                                            self.largeWidth / self.newvalueheight + 'px ' +
                                            self.largeHeight / self.newvalueheight + 'px');
                                    }
                                    else {
                                        if (self.options.zoomType !== 'lens') {
                                            self.zoomLens.css('background-size',
                                                self.largeWidth / self.newvaluewidth + 'px ' +
                                                self.largeHeight / self.newvalueheight + 'px');
                                        }
                                        self.zoomWindow.css('background-size',
                                            self.largeWidth / self.newvaluewidth + 'px ' +
                                            self.largeHeight / self.newvaluewidth + 'px');
                                    }

                                    /*
                                     if(!self.bgxp){self.bgxp = self.largeWidth/self.newvalue;}
                                     if(!self.bgyp){self.bgyp = self.largeHeight/self.newvalue ;}
                                     if (!self.bgloop){
                                     self.bgloop = setInterval(function(){

                                     self.bgxp += (self.largeWidth/self.newvalue  - self.bgxp) / self.options.easingAmount;
                                     self.bgyp += (self.largeHeight/self.newvalue  - self.bgyp) / self.options.easingAmount;

                                     self.zoomWindow.css('background-size', self.bgxp + 'px ' + self.bgyp + 'px' );


                                     }, 16);

                                     }
                                     */
                                    self.changeBgSize = false;
                                }

                                self.zoomWindow.css('background-position', self.windowLeftPos + 'px ' + self.windowTopPos + 'px');
                                self.scrollingLock = false;
                                self.loop = false;

                            }
                            else if (Math.round(Math.abs(self.xp - self.windowLeftPos) + Math.abs(self.yp - self.windowTopPos)) < 1) {
                                //stops micro movements
                                clearInterval(self.loop);
                                self.zoomWindow.css('background-position', self.windowLeftPos + 'px ' + self.windowTopPos + 'px');
                                self.loop = false;
                            }
                            else {
                                if (self.changeBgSize) {
                                    if (self.nzHeight > self.nzWidth) {
                                        if (self.options.zoomType === 'lens') {
                                            self.zoomLens.css('background-size',
                                                self.largeWidth / self.newvalueheight + 'px ' +
                                                self.largeHeight / self.newvalueheight + 'px');
                                        }
                                        self.zoomWindow.css('background-size',
                                            self.largeWidth / self.newvalueheight + 'px ' +
                                            self.largeHeight / self.newvalueheight + 'px');
                                    }
                                    else {
                                        if (self.options.zoomType !== 'lens') {
                                            self.zoomLens.css('background-size',
                                                self.largeWidth / self.newvaluewidth + 'px ' +
                                                self.largeHeight / self.newvaluewidth + 'px');
                                        }
                                        self.zoomWindow.css('background-size',
                                            self.largeWidth / self.newvaluewidth + 'px ' +
                                            self.largeHeight / self.newvaluewidth + 'px');
                                    }
                                    self.changeBgSize = false;
                                }

                                self.zoomWindow.css('background-position', self.xp + 'px ' + self.yp + 'px');
                            }
                        }, interval);
                    }
                }
                else {
                    if (self.changeBgSize) {
                        if (self.nzHeight > self.nzWidth) {
                            if (self.options.zoomType === 'lens') {
                                self.zoomLens.css('background-size',
                                    self.largeWidth / self.newvalueheight + 'px ' +
                                    self.largeHeight / self.newvalueheight + 'px');
                            }

                            self.zoomWindow.css('background-size',
                                self.largeWidth / self.newvalueheight + 'px ' +
                                self.largeHeight / self.newvalueheight + 'px');
                        }
                        else {
                            if (self.options.zoomType === 'lens') {
                                self.zoomLens.css('background-size',
                                    self.largeWidth / self.newvaluewidth + 'px ' +
                                    self.largeHeight / self.newvaluewidth + 'px');
                            }
                            if ((self.largeHeight / self.newvaluewidth) < self.options.zoomWindowHeight) {

                                self.zoomWindow.css('background-size',
                                    self.largeWidth / self.newvaluewidth + 'px ' +
                                    self.largeHeight / self.newvaluewidth + 'px');
                            }
                            else {

                                self.zoomWindow.css('background-size',
                                    self.largeWidth / self.newvalueheight + 'px ' +
                                    self.largeHeight / self.newvalueheight + 'px');
                            }

                        }
                        self.changeBgSize = false;
                    }

                    self.zoomWindow.css('background-position',
                        self.windowLeftPos + 'px ' +
                        self.windowTopPos + 'px');
                }
            }
        },

        setTintPosition: function (e) {
            var self = this;
            var zoomLensWidth = self.zoomLens.width();
            var zoomLensHeight = self.zoomLens.height();
            self.updateOffset(self);
            self.tintpos = String(((e.pageX - self.nzOffset.left) - (zoomLensWidth / 2)) * (-1));
            self.tintposy = String(((e.pageY - self.nzOffset.top) - zoomLensHeight / 2) * (-1));
            if (self.Etoppos) {
                self.tintposy = 0;
            }
            if (self.Eloppos) {
                self.tintpos = 0;
            }
            if (self.Eboppos) {
                self.tintposy = (self.nzHeight - zoomLensHeight - (self.options.lensBorderSize * 2)) * (-1);
            }
            if (self.Eroppos) {
                self.tintpos = ((self.nzWidth - zoomLensWidth - (self.options.lensBorderSize * 2)) * (-1));
            }
            if (self.options.tint) {
                //stops micro movements
                if (self.fullheight) {
                    self.tintposy = 0;

                }
                if (self.fullwidth) {
                    self.tintpos = 0;

                }
                self.zoomTintImage.css({
                    'left': self.tintpos + 'px',
                    'top': self.tintposy + 'px'
                });
            }
        },

        swaptheimage: function (smallimage, largeimage) {
            var self = this;
            var newImg = new Image();

            if (self.options.loadingIcon && !self.spinner) {
                var styleAttr = 'background: url(\'' + self.options.loadingIcon + '\') no-repeat center;' +
                    'height:' + self.nzHeight + 'px;' +
                    'width:' + self.nzWidth + 'px;' +
                    'z-index: 2000;' +
                    'position: absolute; ' +
                    'background-position: center center;';
                if (self.options.zoomType === 'inner') {
                    styleAttr += 'top: 0px;';
                }
                self.spinner = $('<div class="ezp-spinner" style="' + styleAttr + '"></div>');
                self.$elem.after(self.spinner);
            } else if (self.spinner) {
                self.spinner.show();
            }

            self.options.onImageSwap(self.$elem);

            newImg.onload = function () {
                self.largeWidth = newImg.width;
                self.largeHeight = newImg.height;
                self.zoomImage = largeimage;
                self.zoomWindow.css('background-size', self.largeWidth + 'px ' + self.largeHeight + 'px');

                self.swapAction(smallimage, largeimage);
                return;
            };
            self.setImageSource(newImg, largeimage);  // this must be done AFTER setting onload
        },

        swapAction: function (smallimage, largeimage) {
            var self = this;
            var elemWidth = self.$elem.width();
            var elemHeight = self.$elem.height();
            var newImg2 = new Image();
            newImg2.onload = function () {
                //re-calculate values
                self.nzHeight = newImg2.height;
                self.nzWidth = newImg2.width;
                self.options.onImageSwapComplete(self.$elem);

                self.doneCallback();
                return;
            };
            self.setImageSource(newImg2, smallimage);

            //reset the zoomlevel to that initially set in options
            self.currentZoomLevel = self.options.zoomLevel;
            self.options.maxZoomLevel = false;

            //swaps the main image
            //self.$elem.attr('src',smallimage);
            //swaps the zoom image
            if (self.options.zoomType === 'lens') {
                self.zoomLens.css('background-image', 'url("' + largeimage + '")');
            }
            if (self.options.zoomType === 'window') {
                self.zoomWindow.css('background-image', 'url("' + largeimage + '")');
            }
            if (self.options.zoomType === 'inner') {
                self.zoomWindow.css('background-image', 'url("' + largeimage + '")');
            }

            self.currentImage = largeimage;

            if (self.options.imageCrossfade) {
                var oldImg = self.$elem;
                var newImg = oldImg.clone();
                self.$elem.attr('src', smallimage);
                self.$elem.after(newImg);
                newImg.stop(true).fadeOut(self.options.imageCrossfade, function () {
                    $(this).remove();
                });

                // if(self.options.zoomType === 'inner'){
                //remove any attributes on the cloned image so we can resize later
                self.$elem.width('auto').removeAttr('width');
                self.$elem.height('auto').removeAttr('height');
                //   }

                oldImg.fadeIn(self.options.imageCrossfade);

                if (self.options.tint && self.options.zoomType !== 'inner') {

                    var oldImgTint = self.zoomTintImage;
                    var newImgTint = oldImgTint.clone();
                    self.zoomTintImage.attr('src', largeimage);
                    self.zoomTintImage.after(newImgTint);
                    newImgTint.stop(true).fadeOut(self.options.imageCrossfade, function () {
                        $(this).remove();
                    });

                    oldImgTint.fadeIn(self.options.imageCrossfade);

                    //self.zoomTintImage.attr('width',elem.data('image'));

                    //resize the tint window
                    self.zoomTint.css({
                        height: elemHeight,
                        width: elemWidth
                    });
                }

                self.zoomContainer.css({
                    'height': elemHeight,
                    'width': elemWidth
                });

                if (self.options.zoomType === 'inner') {
                    if (!self.options.constrainType) {
                        self.zoomWrap.parent().css({
                            'height': elemHeight,
                            'width': elemWidth
                        });

                        self.zoomWindow.css({
                            'height': elemHeight,
                            'width': elemWidth
                        });
                    }
                }

                if (self.options.imageCrossfade) {
                    self.zoomWrap.css({
                        'height': elemHeight,
                        'width': elemWidth
                    });
                }
            }
            else {
                self.$elem.attr('src', smallimage);
                if (self.options.tint) {
                    self.zoomTintImage.attr('src', largeimage);
                    //self.zoomTintImage.attr('width',elem.data('image'));
                    self.zoomTintImage.attr('height', elemHeight);
                    //self.zoomTintImage.attr('src') = elem.data('image');
                    self.zoomTintImage.css('height', elemHeight);
                    self.zoomTint.css('height', elemHeight);

                }
                self.zoomContainer.css({
                    'height': elemHeight,
                    'width': elemWidth
                });

                if (self.options.imageCrossfade) {
                    self.zoomWrap.css({
                        'height': elemHeight,
                        'width': elemWidth
                    });
                }
            }
            if (self.options.constrainType) {

                //This will contrain the image proportions
                if (self.options.constrainType === 'height') {

                    var autoWDimension = {
                        'height': self.options.constrainSize,
                        'width': 'auto'
                    };
                    self.zoomContainer.css(autoWDimension);

                    if (self.options.imageCrossfade) {
                        self.zoomWrap.css(autoWDimension);
                        self.constwidth = self.zoomWrap.width();
                    }
                    else {
                        self.$elem.css(autoWDimension);
                        self.constwidth = elemWidth;
                    }

                    var constWDim = {
                        'height': self.options.constrainSize,
                        'width': self.constwidth
                    };
                    if (self.options.zoomType === 'inner') {

                        self.zoomWrap.parent().css(constWDim);
                        self.zoomWindow.css(constWDim);
                    }
                    if (self.options.tint) {
                        self.tintContainer.css(constWDim);
                        self.zoomTint.css(constWDim);
                        self.zoomTintImage.css(constWDim);
                    }

                }
                if (self.options.constrainType === 'width') {
                    var autoHDimension = {
                        'height': 'auto',
                        'width': self.options.constrainSize
                    };
                    self.zoomContainer.css(autoHDimension);

                    if (self.options.imageCrossfade) {
                        self.zoomWrap.css(autoHDimension);
                        self.constheight = self.zoomWrap.height();
                    }
                    else {
                        self.$elem.css(autoHDimension);
                        self.constheight = elemHeight;
                    }

                    var constHDim = {
                        'height': self.constheight,
                        'width': self.options.constrainSize
                    };
                    if (self.options.zoomType === 'inner') {
                        self.zoomWrap.parent().css(constHDim);
                        self.zoomWindow.css(constHDim);
                    }
                    if (self.options.tint) {
                        self.tintContainer.css(constHDim);
                        self.zoomTint.css(constHDim);
                        self.zoomTintImage.css(constHDim);
                    }
                }
            }
        },

        doneCallback: function () {
            var self = this;
            if (self.options.loadingIcon && !!self.spinner && !!self.spinner.length) {
                self.spinner.hide();
            }

            self.updateOffset(self);
            self.nzWidth = self.$elem.width();
            self.nzHeight = self.$elem.height();

            // reset the zoomlevel back to default
            self.currentZoomLevel = self.options.zoomLevel;

            //ratio of the large to small image
            self.widthRatio = self.largeWidth / self.nzWidth;
            self.heightRatio = self.largeHeight / self.nzHeight;

            //NEED TO ADD THE LENS SIZE FOR ROUND
            // adjust images less than the window height
            if (self.options.zoomType === 'window') {

                if (self.nzHeight < self.options.zoomWindowHeight / self.heightRatio) {
                    self.lensHeight = self.nzHeight;

                }
                else {
                    self.lensHeight = String((self.options.zoomWindowHeight / self.heightRatio));
                }

                if (self.nzWidth < self.options.zoomWindowWidth) {
                    self.lensWidth = self.nzWidth;
                }
                else {
                    self.lensWidth = (self.options.zoomWindowWidth / self.widthRatio);
                }

                if (self.zoomLens) {
                    self.zoomLens.css({
                        'width': self.lensWidth,
                        'height': self.lensHeight
                    });
                }
            }
        },

        getCurrentImage: function () {
            var self = this;
            return self.zoomImage;
        },

        getGalleryList: function () {
            var self = this;
            //loop through the gallery options and set them in list for fancybox
            self.gallerylist = [];
            if (self.options.gallery) {
                $('#' + self.options.gallery + ' a').each(function () {

                    var imgSrc = '';
                    if ($(this).data(self.options.attrImageZoomSrc)) {
                        imgSrc = $(this).data(self.options.attrImageZoomSrc);
                    }
                    else if ($(this).data('image')) {
                        imgSrc = $(this).data('image');
                    }
                    //put the current image at the start
                    if (imgSrc === self.zoomImage) {
                        self.gallerylist.unshift({
                            href: '' + imgSrc + '',
                            title: $(this).find('img').attr('title')
                        });
                    }
                    else {
                        self.gallerylist.push({
                            href: '' + imgSrc + '',
                            title: $(this).find('img').attr('title')
                        });
                    }
                });
            }
            //if no gallery - return current image
            else {
                self.gallerylist.push({
                    href: '' + self.zoomImage + '',
                    title: $(this).find('img').attr('title')
                });
            }
            return self.gallerylist;
        },

        changeZoomLevel: function (value) {
            var self = this;

            //flag a zoom, so can adjust the easing during setPosition
            self.scrollingLock = true;

            //round to two decimal places
            self.newvalue = parseFloat(value).toFixed(2);
            var newvalue = self.newvalue;

            //maxwidth & Maxheight of the image
            var maxheightnewvalue = self.largeHeight / ((self.options.zoomWindowHeight / self.nzHeight) * self.nzHeight);
            var maxwidthtnewvalue = self.largeWidth / ((self.options.zoomWindowWidth / self.nzWidth) * self.nzWidth);

            //calculate new heightratio
            if (self.options.zoomType !== 'inner') {
                if (maxheightnewvalue <= newvalue) {
                    self.heightRatio = (self.largeHeight / maxheightnewvalue) / self.nzHeight;
                    self.newvalueheight = maxheightnewvalue;
                    self.fullheight = true;
                }
                else {
                    self.heightRatio = (self.largeHeight / newvalue) / self.nzHeight;
                    self.newvalueheight = newvalue;
                    self.fullheight = false;
                }

                // calculate new width ratio

                if (maxwidthtnewvalue <= newvalue) {
                    self.widthRatio = (self.largeWidth / maxwidthtnewvalue) / self.nzWidth;
                    self.newvaluewidth = maxwidthtnewvalue;
                    self.fullwidth = true;
                }
                else {
                    self.widthRatio = (self.largeWidth / newvalue) / self.nzWidth;
                    self.newvaluewidth = newvalue;
                    self.fullwidth = false;
                }
                if (self.options.zoomType === 'lens') {
                    if (maxheightnewvalue <= newvalue) {
                        self.fullwidth = true;
                        self.newvaluewidth = maxheightnewvalue;
                    } else {
                        self.widthRatio = (self.largeWidth / newvalue) / self.nzWidth;
                        self.newvaluewidth = newvalue;

                        self.fullwidth = false;
                    }
                }
            }

            if (self.options.zoomType === 'inner') {
                maxheightnewvalue = parseFloat(self.largeHeight / self.nzHeight).toFixed(2);
                maxwidthtnewvalue = parseFloat(self.largeWidth / self.nzWidth).toFixed(2);
                if (newvalue > maxheightnewvalue) {
                    newvalue = maxheightnewvalue;
                }
                if (newvalue > maxwidthtnewvalue) {
                    newvalue = maxwidthtnewvalue;
                }

                if (maxheightnewvalue <= newvalue) {
                    self.heightRatio = (self.largeHeight / newvalue) / self.nzHeight;
                    if (newvalue > maxheightnewvalue) {
                        self.newvalueheight = maxheightnewvalue;
                    } else {
                        self.newvalueheight = newvalue;
                    }
                    self.fullheight = true;
                }
                else {
                    self.heightRatio = (self.largeHeight / newvalue) / self.nzHeight;

                    if (newvalue > maxheightnewvalue) {

                        self.newvalueheight = maxheightnewvalue;
                    } else {
                        self.newvalueheight = newvalue;
                    }
                    self.fullheight = false;
                }

                if (maxwidthtnewvalue <= newvalue) {

                    self.widthRatio = (self.largeWidth / newvalue) / self.nzWidth;
                    if (newvalue > maxwidthtnewvalue) {

                        self.newvaluewidth = maxwidthtnewvalue;
                    } else {
                        self.newvaluewidth = newvalue;
                    }

                    self.fullwidth = true;
                }
                else {
                    self.widthRatio = (self.largeWidth / newvalue) / self.nzWidth;
                    self.newvaluewidth = newvalue;
                    self.fullwidth = false;
                }
            } //end inner
            var scrcontinue = false;

            if (self.options.zoomType === 'inner') {
                if (self.nzWidth >= self.nzHeight) {
                    if (self.newvaluewidth <= maxwidthtnewvalue) {
                        scrcontinue = true;
                    }
                    else {
                        scrcontinue = false;
                        self.fullheight = true;
                        self.fullwidth = true;
                    }
                }
                if (self.nzHeight > self.nzWidth) {
                    if (self.newvaluewidth <= maxwidthtnewvalue) {
                        scrcontinue = true;
                    }
                    else {
                        scrcontinue = false;
                        self.fullheight = true;
                        self.fullwidth = true;
                    }
                }
            }

            if (self.options.zoomType !== 'inner') {
                scrcontinue = true;
            }

            if (scrcontinue) {
                self.zoomLock = 0;
                self.changeZoom = true;

                //if lens height is less than image height
                if (((self.options.zoomWindowHeight) / self.heightRatio) <= self.nzHeight) {
                    self.currentZoomLevel = self.newvalueheight;
                    if (self.options.zoomType !== 'lens' && self.options.zoomType !== 'inner') {
                        self.changeBgSize = true;
                        self.zoomLens.css('height', String(self.options.zoomWindowHeight / self.heightRatio) + 'px');
                    }
                    if (self.options.zoomType === 'lens' || self.options.zoomType === 'inner') {
                        self.changeBgSize = true;
                    }
                }

                if ((self.options.zoomWindowWidth / self.widthRatio) <= self.nzWidth) {
                    if (self.options.zoomType !== 'inner') {
                        if (self.newvaluewidth > self.newvalueheight) {
                            self.currentZoomLevel = self.newvaluewidth;
                        }
                    }

                    if (self.options.zoomType !== 'lens' && self.options.zoomType !== 'inner') {
                        self.changeBgSize = true;

                        self.zoomLens.css('width', String(self.options.zoomWindowWidth / self.widthRatio) + 'px');
                    }
                    if (self.options.zoomType === 'lens' || self.options.zoomType === 'inner') {
                        self.changeBgSize = true;
                    }

                }
                if (self.options.zoomType === 'inner') {
                    self.changeBgSize = true;

                    if (self.nzWidth > self.nzHeight) {
                        self.currentZoomLevel = self.newvaluewidth;
                    }
                    else if (self.nzHeight >= self.nzWidth) {
                        self.currentZoomLevel = self.newvaluewidth;
                    }
                }
            }      //under

            //sets the boundry change, called in setWindowPos
            self.setPosition(self.currentLoc);
            //
        },

        closeAll: function () {
            var self = this;
            if (self.zoomWindow) {
                self.zoomWindow.hide();
            }
            if (self.zoomLens) {
                self.zoomLens.hide();
            }
            if (self.zoomTint) {
                self.zoomTint.hide();
            }
        },
        updateOffset: function (self) {
            if (self.options.zoomContainerAppendTo != 'body') {
                self.nzOffset = self.$elem.offset();
                appendedPosition = $(self.options.zoomContainerAppendTo).offset();
                self.nzOffset.top = self.$elem.offset().top - appendedPosition.top;
                self.nzOffset.left = self.$elem.offset().left - appendedPosition.left;

            } else {
                self.nzOffset = self.$elem.offset();
            }
        },

        changeState: function (value) {
            var self = this;
            if (value === 'enable') {
                self.options.zoomEnabled = true;
            }
            if (value === 'disable') {
                self.options.zoomEnabled = false;
            }
        },

        responsiveConfig: function (options) {
            if (options.respond && options.respond.length > 0) {
                return $.extend({}, options, this.configByScreenWidth(options));
            }
            return options;
        },

        configByScreenWidth: function (options) {
            var screenWidth = $(window).width();

            var config = $.grep(options.respond, function (item) {
                var range = item.range.split('-');
                return (screenWidth >= range[0]) && (screenWidth <= range[1]);
            });

            if (config.length > 0) {
                return config[0];
            } else {
                return options;
            }
        }
    };

    $.fn.ezPlus = function (options) {
        return this.each(function () {
            var elevate = Object.create(EZP);

            elevate.init(options, this);

            $.data(this, 'ezPlus', elevate);

        });
    };

    $.fn.ezPlus.options = {
        attrImageZoomSrc: 'zoom-image', // attribute to plugin use for zoom
        borderColour: '#888',
        borderSize: 4,
        constrainSize: false,  //in pixels the dimensions you want to constrain on
        constrainType: false,  //width or height
        containLensZoom: false,
        cursor: 'inherit', // user should set to what they want the cursor as, if they have set a click function
        debug: false,
        easing: false,
        easingAmount: 12,
        enabled: true,

        gallery: false,
        galleryActiveClass: 'zoomGalleryActive',
        gallerySelector: false,
        galleryItem: 'a',

        imageCrossfade: false,

        lensBorderColour: '#000',
        lensBorderSize: 1,
        lensColour: 'white', //colour of the lens background
        lensFadeIn: false,
        lensFadeOut: false,
        lensOpacity: 0.4, //opacity of the lens
        lensShape: 'square', //can be 'round'
        lensSize: 200,
        lenszoom: false,

        loadingIcon: false, //http://www.example.com/spinner.gif

        // This change will allow to decide if you want to decrease
        // zoom of one of the dimensions once the other reached it's top value,
        // or keep the aspect ratio, default behaviour still being as always,
        // allow to continue zooming out, so it keeps retrocompatibility.
        mantainZoomAspectRatio: false,
        maxZoomLevel: false,
        minZoomLevel: 1.01,

        onComplete: $.noop,
        onDestroy: $.noop,
        onImageClick: $.noop,
        onImageSwap: $.noop,
        onImageSwapComplete: $.noop,
        onShow: $.noop,
        onZoomedImageLoaded: $.noop,

        preloading: 1, //by default, load all the images, if 0, then only load images after activated (PLACEHOLDER FOR NEXT VERSION)
        respond: [],
        responsive: true,
        scrollZoom: false, //allow zoom on mousewheel, true to activate
        scrollZoomIncrement: 0.1,  //steps of the scrollzoom
        showLens: true,
        tint: false, //enable the tinting
        tintColour: '#333', //default tint color, can be anything, red, #ccc, rgb(0,0,0)
        tintOpacity: 0.4, //opacity of the tint
        touchEnabled: true,

        zoomActivation: 'hover', // Can also be click (PLACEHOLDER FOR NEXT VERSION)
        zoomContainerAppendTo: 'body', //zoom container parent selector
        zoomId: -1, // identifier for the zoom container
        zoomLevel: 1, //default zoom level of image
        zoomTintFadeIn: false,
        zoomTintFadeOut: false,
        zoomType: 'window', //window is default,  also 'lens' available -
        zoomWindowAlwaysShow: false,
        zoomWindowBgColour: '#fff',
        zoomWindowFadeIn: false,
        zoomWindowFadeOut: false,
        zoomWindowHeight: 400,
        zoomWindowOffsetX: 0,
        zoomWindowOffsetY: 0,
        zoomWindowPosition: 1, //Possible values: 1-16, but we can also position with a selector string.
        zoomWindowWidth: 400,
        zoomEnabled: true, //false disables zoomwindow from showing
        zIndex: 999
    };

})(jQuery, window, document);


/***/ })

});
//# sourceMappingURL=11.js.map