webpackJsonp([13],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerInvoiceDetailsPageModule", function() { return SellerInvoiceDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seller_invoice_details__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SellerInvoiceDetailsPageModule = /** @class */ (function () {
    function SellerInvoiceDetailsPageModule() {
    }
    SellerInvoiceDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seller_invoice_details__["a" /* SellerInvoiceDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__seller_invoice_details__["a" /* SellerInvoiceDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], SellerInvoiceDetailsPageModule);
    return SellerInvoiceDetailsPageModule;
}());

//# sourceMappingURL=seller-invoice-details.module.js.map

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

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellerInvoiceDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(88);
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
 * Generated class for the SellerInvoiceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellerInvoiceDetailsPage = /** @class */ (function () {
    function SellerInvoiceDetailsPage(iab, googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.iab = iab;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('SellerInvoce');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    SellerInvoiceDetailsPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $(document).prop('title', 'Seller Invoice Details');
        $('body').removeClass().addClass('SellerInvoce body');
        var d = new Date();
        this.showYear = d.getFullYear();
        this.showSellerInvoice();
    };
    SellerInvoiceDetailsPage.prototype.ngAfterViewInit = function () {
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
    SellerInvoiceDetailsPage.prototype.showSellerInvoice = function () {
        var _this = this;
        var getData_decode = this.navParams.data.id;
        var convert_decode = atob(getData_decode);
        var sellerBusiness_name = JSON.parse(convert_decode);
        var sellerinvoice_view = {
            user_id: this.localItem.id,
            month: sellerBusiness_name.month,
            year: sellerBusiness_name.year
        };
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/seller-payment-history', sellerinvoice_view, function (response) {
            _this.showInvoicedata = response.payment_history;
        }, function (error) {
            console.log(error);
        });
    };
    SellerInvoiceDetailsPage.prototype.paytoAdmin = function () {
        var _this = this;
        var total_pay = this.showInvoicedata.grand_total;
        var converttoDollor = (total_pay * 0.27).toFixed(2);
        var passData = [];
        passData.push({
            "amount": [converttoDollor],
            "email": ["techcronus4@dibdaa.com"]
        });
        var passdatasellerinvoice = {
            "receiver_arr": passData
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/pay/seller-paypal-payment', passdatasellerinvoice, function (response) {
//            console.log(response);
//            alert(response);
             if(response.method=='create'){
                               location.href =  response.order.url;
            }
            else {
                _this.infoService.hideLoading();
            }
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    SellerInvoiceDetailsPage.prototype.invoiceQuery = function () {
        var _this = this;
        _this.navCtrl.push('SellerMyAccountPage', {
                            id: 'resolutionCenter'
                        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SellerInvoiceDetailsPage.prototype, "content", void 0);
    SellerInvoiceDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seller-invoice-details',template:/*ion-inline-start:"/var/www/html/src/pages/seller-my-account/seller-invoice-details/seller-invoice-details.html"*/'\n<ion-content padding class="order-detail">\n    <div class="wrapper">\n      <div class="container order-detail-main mb-3">\n        <div class="row">\n          <div class="col-lg-12 col-md-12 col-xl-12 col-12">\n            <p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n			<p class="mb-2 set-Fonts">\n              <a href="#/home" class="breadcrumblink">Dibdaa</a>\n              <i class="fa fa-angle-right"></i>\n              <a href="#/seller-my-account/SellerInvoice" class="breadcrumblink">Seller Invoice</a>\n              <i class="fa fa-angle-right"></i>\n              <a href="#" class="breadcrumblink font-weight-bold" disabled="true">Seller Invoice Detail</a></p>\n          </div>\n        </div>\n        <div class="row m-0">\n          <div class="col-lg-9 col-md-12 col-12">\n            <div class="row">\n				<div class="col-lg-6 col-md-6 col-9 mt-1 mb-2 p-0">\n					<h5 class="m-0">Seller Invoice Detail</h5>\n				</div>\n				<div class="col-lg-6 col-md-6 col-3 mt-3 mb-2 p-0 pr-lg-4 text-right" *ngIf="showInvoicedata?.product.length > 0 && showInvoicedata?.payment_status == false">\n					<button class="theme-light-btn" (click)="paytoAdmin()">Pay</button>\n	<button class="theme-light-btn" (click)="invoiceQuery()">Query Invoice</button>\n			</div> \n            </div>\n            <div class="row bg-light mt-1 mr-lg-1 p-3 border rounded">\n              <div class="col-lg-12 col-md-12 col-12 order-total p-0 mt-1">\n                <div class="table-responsive">\n                  <table class="table table-sm order-detail-table set-Fonts">\n                    <thead class="thead-light">\n                    <tr>\n                      <th scope="col" class="seller-invoice-table-th-amount">\n                        Date\n                      </th>\n                      <th scope="col" class="seller-invoice-table-th-amount">\n                        Title\n                      </th>\n                      <th scope="col" class="seller-invoice-table-th-amount">\n                        Item\n                      </th>\n                      <th scope="col" class="seller-invoice-table-th-amount">\n                        FEES TYPE\n                      </th>\n                      <th scope="col" class="seller-invoice-table-th-amount text-right pr-2">\n                        AMOUNT (AED)\n                      </th>\n                    </tr>\n                    </thead>\n                    <tbody *ngIf="showInvoicedata?.product.length <= 0;else showinvoiceData">\n                        <tr>\n                          <td class="border-bottom-td text-center" colspan="5"> Item not fount</td>\n                        </tr>\n                    </tbody>\n                    <ng-template #showinvoiceData>\n                      <tbody>\n                        <tr *ngFor="let invoicedata of showInvoicedata?.product">\n                          <td class="border-bottom-td">\n                            {{invoicedata?.created_date}}\n                          </td>\n                          <td class="border-bottom-td">\n                            <a title="{{invoicedata?.title}}">{{(invoicedata?.title.length > 34)? (invoicedata?.title | slice:0:34)+\'...\':(invoicedata?.title)}}</a>\n                          </td>\n                          <td class="border-bottom-td">\n                            {{invoicedata?.id}}\n                          </td>\n                          <td class="border-bottom-td">\n                            <!--Final Value Fee-->\n                            <tr>\n                              <td class="p-0">Categories fees:</td>\n                              <td>{{invoicedata?.fees_details.categories_fees[0]}} AED</td>\n                            </tr>\n                            <tr>\n                              <td class="p-0">Featured Fees:</td>\n                              <td>({{invoicedata?.fees_details.featured_fees[0]}}){{invoicedata?.fees_details.featured_fees[1]}} AED</td>\n                            </tr>\n                            <tr>\n                              <td class="p-0">Insertion fees:</td>\n                              <td>{{invoicedata?.fees_details.insertion_fees[0]}} AED</td>\n                            </tr>\n                          </td>\n                          <td class="border-bottom-td text-right pr-2">\n                            {{invoicedata?.seller_fee}} AED\n                          </td>\n                        </tr>\n                        <tr>\n                          <td class="border-bottom-td">\n                          </td>\n                          <td class="border-bottom-td">\n                          </td>\n                          <td class="border-bottom-td">\n                          </td>\n                          <td class="border-bottom-td">\n                            <strong>Grand Total :</strong>\n                          </td>\n                          <td class="border-bottom-td pr-2 text-right">\n                            {{showInvoicedata?.total}} AED\n                          </td>\n                        </tr>\n                      </tbody>\n                    </ng-template>\n                  </table>\n                </div>\n              </div>\n            </div>\n            <div class="row">\n              <div class="col-lg-12 col-md-12 col-12 mt-4 mb-3 p-0 text-left">\n                <h6 class="m-0">Transaction Fees Detail</h6>\n              </div>\n            </div>\n            <div class="row bg-light mt-1 mr-lg-1 p-3 border rounded">\n              <div class="col-lg-12 col-md-12 col-12 order-total p-0 mt-1">\n                <div class="table-responsive">\n                  <table class="table table-sm order-detail-table set-Fonts">\n                    <thead class="thead-light">\n                    <tr>\n                      <th scope="col" class="seller-invoice-table-th-amount">\n                        Date\n                      </th>\n                      <th scope="col" class="seller-invoice-table-th-amount">\n                        Title\n                      </th>\n                      <th scope="col" class="seller-invoice-table-th-amount">\n                        Item\n                      </th>\n                      <th scope="col" class="seller-invoice-table-th-amount">\n                        FEES TYPE\n                      </th>\n                      <th scope="col" class="seller-invoice-table-th-amount text-right pr-2">\n                        AMOUNT (AED)\n                      </th>\n                    </tr>\n                    </thead>\n                    <tbody *ngIf="showInvoicedata?.transaction_details.length <= 0;else showinvoiceTransation">\n                    <tr>\n                      <td class="border-bottom-td text-center" colspan="5"> Item not fount</td>\n                    </tr>\n                    </tbody>\n                    <ng-template #showinvoiceTransation>\n                      <tbody>\n                        <tr *ngFor="let invoicetransation of showInvoicedata?.transaction_details">\n                          <td class="border-bottom-td">\n                            {{invoicetransation?.created_date}}\n                          </td>\n                          <td class="border-bottom-td">\n                            <a title="{{invoicetransation?.title}}">{{(invoicetransation?.title.length > 34)? (invoicetransation?.title | slice:0:34)+\'...\':(invoicetransation?.title)}}</a>\n                          </td>\n                          <td class="border-bottom-td">\n                            {{invoicetransation?.product_sku }}\n                          </td>\n                          <td class="border-bottom-td">\n                           Featured Fees: ({{showInvoicedata?.changes[0][0]}})\n                          </td>\n                          <td class="border-bottom-td text-right pr-2">\n                            {{showInvoicedata?.changes[0][1]}} AED\n                          </td>\n                        </tr>\n\n                        <tr>\n                          <td class="border-bottom-td">\n                          </td>\n                          <td class="border-bottom-td">\n                          </td>\n                          <td class="border-bottom-td">\n                          </td>\n                          <td class="border-bottom-td">\n                            <strong>Transaction Fees Total :</strong>\n                          </td>\n                          <td class="border-bottom-td pr-2 text-right">\n                            {{showInvoicedata?.transaction_total}} AED\n                          </td>\n                        </tr>\n                      </tbody>\n                    </ng-template>\n                  </table>\n                </div>\n              </div>\n            </div>\n            <div class="row justify-content-end ml-lg-0 pl-0 mr-0">\n              <div class="col-lg-4 col-md-12 col-12 mt-4 mb-3 p-0 text-left">\n                <h6 class="m-0">Billing Detail Summary</h6>\n              </div>\n            </div>\n            <div class="row mt-1 mr-lg-1 justify-content-end">\n              <div class="bg-light p-3 border rounded col-lg-4 col-md-12 col-12 p-1">\n                <form class="form-horizontal">\n                  <div class="row m-0">\n                    <div class="col-lg-12 col-md-12 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0">\n                      <table class="table continue-order-tbl mb-2 set-Fonts">\n                        <tbody>\n                          <tr>\n                            <td class="pl-lg-1 pl-md-1 pl-0"><strong>Total Transaction Fees:</strong>\n                            </td>\n                            <td class="text-right pr-lg-1 pr-md-3 pr-0">{{showInvoicedata?.transaction_total}} AED</td>\n                          </tr>\n                          <tr>\n                            <td class="pl-lg-1 pl-md-1 pl-0"><strong>Grand Total:</strong>\n                            </td>\n                            <td class="text-right pr-lg-1 pr-md-3 pr-0">{{showInvoicedata?.total}} AED</td>\n                          </tr>\n                          <tr class="border-tr">\n                            <td class="pl-lg-1 pl-md-1 pl-0">\n                                <h6 class="m-0 pt-1 pb-1">Total Amount due:</h6>\n                            </td>\n                            <td class="text-right pr-lg-1 pr-md-3 pr-0">\n                              <h6 class="m-0 pt-1 pb-1">\n                                {{showInvoicedata?.grand_total}} AED\n                              </h6>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n          <div class="col-lg-3 col-md-12 col-12 mt-lg-5 mt-md-0 p-0 mt-3 mt-lg-0 mt-md-0">\n            <div class="row m-0 bg-light border rounded mt-md-3 mt-lg-0 mt-0" *ngIf="showInvoicedata?.payment_status == true">\n              <div class="col-lg-12 col-md-12 col-12 p-3">\n                <table class="table table-sm table-noborder set-Fonts m-0">\n					<tbody>\n						<tr>\n						  <th scope="row" class="border-0">Payment Date:</th>\n						  <td class="border-0">{{showInvoicedata?.paymentDate}}</td>\n						</tr>\n						<tr>\n						  <th scope="row" class="border-0">Transaction ID:</th>\n						  <td class="border-0">{{showInvoicedata?.payment_detail.transaction_id}}</td>\n						</tr>\n						<tr>\n						  <th scope="row" class="border-0">Transaction Status:</th>\n						  <td class="border-0 text-success"><b>{{showInvoicedata?.payment_detail.transaction_status}}</b></td>\n						</tr>\n					</tbody>\n                </table>\n              </div>\n            </div>\n			<div class="row m-0 bg-light border rounded mt-3">\n              <div class="col-lg-12 col-md-12 col-12 p-3">\n                <table class="table table-sm table-noborder set-Fonts m-0">\n                  <tbody>\n                    <tr>\n                      <th scope="row" class="border-0">Invoice ID:</th>\n                      <td class="border-0">{{showInvoicedata?.date.invoice_id}}</td>\n                    </tr>\n                    <tr>\n                      <th scope="row" class="border-0">Issue Date:</th>\n                      <td class="border-0">{{showInvoicedata?.date.issue_date}}</td>\n                    </tr>\n                    \n                    <tr>\n                      <th scope="row" class="border-0">Start Date:</th>\n                      <td class="border-0">{{showInvoicedata?.date.start_date}}</td>\n                    </tr>\n                    <tr>\n                      <th scope="row" class="border-0">End Date:</th>\n                      <td class="border-0">{{showInvoicedata?.date.end_date}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n			<div class="row m-0 bg-light border rounded mt-3 ml-0 mr-0 mb-0">\n              <div class="col-lg-12 col-md-12 col-12 p-3">\n                <h6 class="m-0 text-left">From:</h6>\n                <div class="row m-0">\n                  <div class="col-lg-12 col-md-12 col-12 order-total p-0 mt-2 set-Fonts">\n                    <address class="mb-0">\n                      {{showInvoicedata?.user.first_name}} {{showInvoicedata?.user.last_name}}<br/>\n                      {{showInvoicedata?.user.address[0]}} {{showInvoicedata?.user.address[1]}}<br/>\n                      PO Box {{showInvoicedata?.user.address[2]}} {{showInvoicedata?.user.address[3]}},<br/>\n                      {{showInvoicedata?.user.address[4]}}.\n                    </address>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="row bg-light border rounded mt-3 ml-0 mr-0 mb-0">\n              <div class="col-lg-12 col-md-12 col-12 p-3">\n                <h6 class="m-0 text-left">Invoice For:</h6>\n                <div class="row m-0">\n                  <div class="col-lg-12 col-md-12 col-12 order-total p-0 mt-2 set-Fonts">\n                    <address class="mb-0">\n                      John Doe,<br/>\n                      109C Street Umm Suqeim 3<br/>\n                      PO Box 29662 Dubai,<br/>\n                      UAE.\n                    </address>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      	<!--================Footer Area =================-->\n<footer-page></footer-page>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/seller-my-account/seller-invoice-details/seller-invoice-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SellerInvoiceDetailsPage);
    return SellerInvoiceDetailsPage;
}());

//# sourceMappingURL=seller-invoice-details.js.map

/***/ })

});
//# sourceMappingURL=13.js.map