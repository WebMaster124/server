webpackJsonp([20],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidHistoryPageModule", function() { return BidHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bid_history__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BidHistoryPageModule = /** @class */ (function () {
    function BidHistoryPageModule() {
    }
    BidHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bid_history__["a" /* BidHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bid_history__["a" /* BidHistoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], BidHistoryPageModule);
    return BidHistoryPageModule;
}());

//# sourceMappingURL=bid-history.module.js.map

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

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidHistoryPage; });
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





var BidHistoryPage = /** @class */ (function () {
    function BidHistoryPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('BidHistory');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    BidHistoryPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('bidHistory body');
        $(document).prop('title', 'Dibdaa Item Bid History');
        $(".zoomContainer").remove();
        var d = new Date();
        this.showYear = d.getFullYear();
        this.showbidsHistory();
    };
    BidHistoryPage.prototype.ngAfterViewInit = function () {
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
    BidHistoryPage.prototype.showbidsHistory = function () {
        var _this = this;
        var bid_history = {
            product_id: this.navParams.data.id
        };
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/bid/view-bid-history', bid_history, function (response) {
            _this.bidHistoryData = response.bid;
        }, function (error) {
            console.log(error);
        });
    };
    BidHistoryPage.prototype.openModal = function () {
        var _this = this;
        if (parseInt((this.bidHistoryData.data[0].bid_price + 1)) > parseInt($('#inputCode').val())) {
            $('#errorbids').removeClass('d-none');
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id == this.bidHistoryData.data[0].seller_id) {
                $('.error-bid').removeClass('d-none');
                return;
            }
            else {
                $('.error-bid').addClass('d-none');
            }
            var place_bids = {
                buyer_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id,
                seller_id: this.bidHistoryData.data[0].seller_id,
                product_id: this.bidHistoryData.data[0].product_id,
                bid_price: $('#inputCode').val()
            };
            $('#errorbids').addClass('d-none');
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/bid/place-bid', place_bids, function (response) {
                if (response.bid.status == "success") {
                    $('#sucsessbids').removeClass('d-none');
                    _this.infoService.hideLoading();
                    _this.showbidsHistory();
                    _this.hideDiv();
                }
                else {
                    $('#sucsessbids').addClass('d-none');
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    BidHistoryPage.prototype.hideDiv = function () {
        setTimeout(function () {
            $('#sucsessbids').addClass('d-none');
        }, 1500);
    };
    BidHistoryPage.prototype.goToProductDetails = function (val) {
        this.navCtrl.push('ProductDetails', {
            id: val
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], BidHistoryPage.prototype, "content", void 0);
    BidHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bid-history',template:/*ion-inline-start:"/var/www/html/src/pages/product/bid-history/bid-history.html"*/'<ion-content padding class="bid-history">\n<div class="wrapper">\n	<div class="container bid-history-main mb-3">\n        <div class="row">\n            <div class="col-lg-12 col-md-12 col-12 set-fontSize">\n                <p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n				<span><a href="#/viewItem/{{bidHistoryData?.data[0].product_id}}"><i class="fa fa-caret-left"></i> Back to item description</a></span>\n            </div>\n        </div>\n        <div class="row m-0">\n            <div class="col-lg-9 col-md-12 col-12">\n                <div class="row">\n                    <div class="col-lg-6 col-md-6 col-12 mt-2 mb-2 p-0">\n                        <h5 class="m-0">Bid History</h5>\n                    </div>\n                </div>\n                <div class="row bg-light mt-1 mr-lg-1 border rounded">\n                    <div class="col-lg-12 col-md-12 col-12 mb-3 pt-2">\n                        <div class="">\n                            <ul class="bidders set-fontSize">\n                                <li class="pl-0 pr-2"><span>Bidders:</span><span> <b>{{bidHistoryData?.count.bidder_count}}</b></span></li>\n                                <li class="pl-2 pr-2"><span>Bids:</span><span> <b>{{bidHistoryData?.count.bids_count}}</b></span></li>\n                                <li class="pl-2 pr-2">\n                                    <span>Time left:</span>\n                                    <span *ngIf="bidHistoryData?.product_info.time == \'End\';else showbidtime"> <b>End</b></span>\n                                   <ng-template #showbidtime>\n                                       <span> <b>{{bidHistoryData?.count.time_left}}</b></span>\n                                   </ng-template>\n                                </li>\n                                <li class="pl-2 pr-2"><span>Duration:</span><span> <b>{{bidHistoryData?.count.duration}} days</b></span></li>\n                            </ul>\n                        </div>\n                        <p class="m-0 set-fontSize">Only actual bids (not automatic bids generated up to a bidder\'s maximum) are\n                            shown. Automatic bids may be placed days or hours before a listing ends.\n                        </p>\n                    </div>\n                    <div class="col-lg-12 col-md-12 col-12 mb-3 pt-2">\n                        <table class="table table-sm set-fontSize">\n                            <thead class="thead-light">\n								<tr>\n									<th scope="col" class="bid-history-th">Bidder</th>\n									<th scope="col" class="bid-history-th">Bid Amount</th>\n									<th scope="col" class="bid-history-th">Bid Time</th>\n								</tr>\n                            </thead>\n                            <tbody>\n								<tr *ngFor="let bidhistory of bidHistoryData?.data">\n									<td *ngIf="localItem?.id == bidhistory?.buyer_id && localItem != null">{{bidhistory?.display_name}}</td>\n									<td *ngIf="localItem?.id != bidhistory?.buyer_id && localItem != null">{{bidhistory?.display_name | replaceName : bidhistory?.display_name }}</td>\n									<td *ngIf="localItem == null">{{bidhistory?.display_name | replaceName : bidhistory?.display_name }}</td>\n									<td>{{bidhistory?.bid_price}} AED</td>\n									<td>{{bidhistory?.created_date}}</td>\n								</tr>\n                            </tbody>\n                        </table>\n                        <p class="m-0 set-fontSize">If two people bid the same amount, the first bid has priority. Also, you can only\n                            retract your bid under certain circumstances.</p>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3 col-md-12 col-12 mt-lg-5 mt-md-3 mt-3 pl-3 pr-3 pt-2 bg-light border rounded">\n                <h6 class="m-0 text-left">Item info</h6>\n                <div class="row m-0">\n                    <div class="col-lg-12 col-md-12 col-12 order-total p-0 mt-2 set-fontSize">\n                        <div class="row m-0">\n                            <div class="col-lg-5 col-md-4 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span><img src="{{trandingImgUrl}}{{bidHistoryData?.product_info.id}}/L/{{bidHistoryData?.product_info.photos[0]}}"  class="img-fluid mx-auto d-block border"></span>\n                            </div>\n                            <div class="col-lg-7 col-md-8 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span><a (click)="goToProductDetails(bidHistoryData?.product_info.id)" class="text-primary">{{bidHistoryData?.product_info.title}}</a></span>\n                            </div>\n                        </div>\n                        <div class="row m-0">\n                            <div class="col-lg-5 col-md-4 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span>Current bid:</span>\n                            </div>\n                            <div class="col-lg-7 col-md-8 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span>{{bidHistoryData?.data[0].bid_price}} AED<br/></span>\n                            </div>\n                        </div>\n                        <div class="row m-0">\n                            <div class="col-lg-5 col-md-4 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span>Item number:</span>\n                            </div>\n                            <div class="col-lg-7 col-md-8 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span>{{bidHistoryData?.product_info.product_sku}}</span>\n                            </div>\n                        </div>\n                        <div class="row m-0">\n                            <div class="col-lg-12 col-md-2 col-12 p-0 text-left linearBg3">\n                            </div>\n                        </div>\n                        <div *ngIf="bidHistoryData?.product_info.time != \'End\'">\n                            <div class="row m-0">\n                                <div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pr-1 pl-1 text-left">\n                                    <span>Enter your maximum bid:</span>\n                                </div>\n                            </div>\n                            <div class="form-group row m-0 ">\n                                <div class="col-lg-7 col-md-7 pl-lg-1 pl-md-1 col-12">\n                                    <form #frm_bids="ngForm" method="post" role="form" novalidate>\n                                        <input type="number" class="form-control" id="inputCode" name="inputbid" #inputbid="ngModel" required ngModel>\n                                        <div *ngIf="inputbid.invalid && (inputbid.dirty || inputbid.touched)" class="error-box">\n                                            <div *ngIf="inputbid.errors.required">\n                                                * Enter Bid Amount.\n                                            </div>\n                                        </div>\n									</form>\n                                </div>\n                                <div class="col-lg-5 col-md-5 col-12 text-center mt-2 mt-lg-0 mt-md-0">\n                                    <button class="btn theme-light-btn" role="button" type="submit" (click)="openModal()" [disabled]="!frm_bids.valid">Place bid</button>\n                                </div>\n                            </div>\n                            <div class="row m-0">\n                                <div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pr-1 pl-1 text-left">\n                                    <span>(Enter {{bidHistoryData?.data[0].bid_price + 1}} AED or more)</span>\n                                </div>\n                                <div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pr-1 pl-1 text-center d-none w-100" id="sucsessbids">\n                                    <span class="text-success">Bid Place Successfully</span>\n                                </div>\n                                <div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pr-1 pl-1 text-center d-none w-100" id="errorbids">\n                                    <span class="error-box">You have to bid at least {{bidHistoryData?.data[0].bid_price + 1}} AED</span>\n                                </div>\n								<span class="d-none error-bid text-danger"><b>Sorry you cannot bid on your own items.</b></span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--================Footer Area =================-->\n   <footer-page></footer-page>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/product/bid-history/bid-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], BidHistoryPage);
    return BidHistoryPage;
}());

//# sourceMappingURL=bid-history.js.map

/***/ })

});
//# sourceMappingURL=20.js.map