webpackJsonp([18],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_detail__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OrderDetailPageModule = /** @class */ (function () {
    function OrderDetailPageModule() {
    }
    OrderDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_detail__["a" /* OrderDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_detail__["a" /* OrderDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], OrderDetailPageModule);
    return OrderDetailPageModule;
}());

//# sourceMappingURL=order-detail.module.js.map

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

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
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





var OrderDetailPage = /** @class */ (function () {
    function OrderDetailPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
        this.total = 0;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('Order details');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    OrderDetailPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $(".zoomContainer").remove();
        $(document).prop('title', 'Order details');
        $('body').removeClass().addClass('OrderDetail body');
        var d = new Date();
        this.showYear = d.getFullYear();
        this.purchaseDetails();
    };
    OrderDetailPage.prototype.ngAfterViewInit = function () {
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
    OrderDetailPage.prototype.purchaseDetails = function () {
        var _this = this;
        try {
            this.infoService.showLoading();
            var purchase_view = {
                order_id: this.navParams.data.id
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/purchase/purchase-details', purchase_view, function (response) {
                if (response.order.status == "success") {
                    _this.purchase_data = response.order;
                    _this.purchaseData_arr = Object.entries(response.order.order_info);
                    var data_order = {};
                    data_order['order_Id'] = _this.purchaseData_arr[0][1][0].order_id;
                    data_order['created_Date'] = _this.purchaseData_arr[0][1][0].created_date;
                    data_order['couponcode_discount'] = _this.purchaseData_arr[0][1][0].coupon_code_discount;
                    data_order['couponcode_type'] = _this.purchaseData_arr[0][1][0].code_type;
                    data_order['coupon_code'] = _this.purchaseData_arr[0][1][0].coupon_code;
                    _this.orderDetailData = data_order;
                    _this.transationData_arr = Object.entries(response.order.transaction_detail);
                    var cal_quentity = 0, cal_discount = 0;
                    _this.total = 0;
                    for (var i = 0; i < response.order.order_info.businessName.length; i++) {
                        for (var j = 0; j < _this.purchaseData_arr[i][1].length; j++) {
                            cal_quentity = _this.purchaseData_arr[i][1][j].price * parseInt(_this.purchaseData_arr[i][1][j].order_quantity);
                            cal_discount = (cal_quentity - (cal_quentity * _this.purchaseData_arr[i][1][j].discount) / 100);
                            _this.total = _this.total + cal_discount;
                        }
                    }
                    _this.infoService.hideLoading();
                }
                else {
                    _this.purchase_data = response.order;
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
            this.infoService.hideLoading();
        }
    };
    OrderDetailPage.prototype.leaveFeedback = function (val_proId, val_proTitle, val_proImage, val_sellerId, val_orderId) {
        var feedbackData = {
            ProId: val_proId,
            ProTitle: val_proTitle,
            ProImage: val_proImage,
            sellerId: val_sellerId,
            orderId: val_orderId,
        };
        var convert_stringifyfeedback = JSON.stringify(feedbackData);
        var convert_encodefeedback = btoa(convert_stringifyfeedback);
        this.navCtrl.push('LeaveFeedbackPage', {
            id: convert_encodefeedback
        });
    };
    OrderDetailPage.prototype.getTouserProfile = function (val) {
        this.navCtrl.push('UserProfilePage', {
            id: val
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], OrderDetailPage.prototype, "content", void 0);
    OrderDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-detail',template:/*ion-inline-start:"/var/www/html/src/pages/product/order-detail/order-detail.html"*/'<ion-content padding class="order-detail">\n	<div class="wrapper">\n		<div class="container order-detail-main mb-3">\n			<div class="row m-0">\n				<div class="col-lg-9 col-md-12 col-12">\n					<div class="row">\n						<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n					</div>\n					<div class="row">\n						<div class="col-lg-6 col-md-6 col-12 mt-2 mb-2 p-0">\n							<h5 class="m-0">Order Details ( #{{orderDetailData?.order_Id}} )</h5>\n						</div>\n						<div class="set-Fonts col-lg-6 col-md-6 col-12 mt-2 mb-2 pr-4 pt-2 pt-md-0 text-center text-lg-right text-md-right">\n							<span class="mr-2">Order on {{orderDetailData?.created_Date}}</span>\n						</div>\n					</div>\n					<div class="row bg-light mt-1 mr-lg-1 p-1 mb-3 border rounded" *ngFor="let pdata of purchase_data?.order_info.businessName;let i=index;">\n						<div class="col-lg-12 col-md-12 col-12 order-total p-0 mt-1">\n							<div class="row m-0 set-Fonts">\n								<div class="col-lg-6 col-md-6 col-12 text-md-left text-center pl-2 pr-2 pt-2 pb-2 pb-lg-4 pb-md-4">\n									<span ><b>Seller</b> </span><span><a class="text-primary" (click)="getTouserProfile(purchaseData_arr[i][1][0].seller_id)">{{pdata}}</a> (Payment status : {{ (purchaseData_arr[i][1][0].status == null?\'Unpaid\':purchaseData_arr[i][1][0].status)}})</span>\n								</div>\n								<div class="col-lg-6 col-md-6 col-12 mt-2 pl-2 pr-2 pt-0 text-lg-right text-md-right text-center pb-lg-0 pb-md-0 pb-3" *ngIf="purchaseData_arr[i][1][0].status == \'Completed\' || purchaseData_arr[i][1][0].status == \'complete\'">\n									<span class="mr-2" *ngIf="transationData_arr.length != 0"><b>Transaction Id :</b> {{transationData_arr[i][1]?.transaction_id}}</span>\n								</div>\n							</div>\n							<div class="table-responsive">\n								<table class="table table-sm order-detail-table set-Fonts mb-0">\n									<thead class="thead-light">\n										<tr>\n											<th scope="col" class="order-table-th">Item(SKU)</th>\n											<th scope="col" class="order-table-th-image">Image</th>\n											<th scope="col" class="order-table-th-title">Title</th>\n											<th scope="col" class="order-table-th text-center">Quantity</th>\n											<th scope="col" class="order-table-th-itemprice text-center">Item Price</th>\n										</tr>\n									</thead>\n									<tbody *ngFor="let psubdata of purchaseData_arr[i][1];">\n										<tr>\n											<td class="border-bottom-td">{{psubdata?.product_sku}}</td>\n											<td class="border-bottom-td">\n												<img src="{{trandingImgUrl}}{{psubdata?.product_id}}/L/{{psubdata.photos[0]}}" class="img-fluid border order-detail-image">\n											</td>\n											<td class="border-bottom-td"><a title="{{psubdata?.title}}">{{ (psubdata?.title.length > 25)? (psubdata?.title | slice:0:25)+\'...\':(psubdata?.title) }}</a></td>\n											<td class="border-bottom-td text-center">{{psubdata?.order_quantity}}</td>\n											<td class="border-bottom-td text-center">\n												<div *ngIf="psubdata?.discount > 0">\n													Price :{{psubdata?.price * psubdata?.order_quantity}}\n													<div>\n														You save: {{(psubdata?.price * psubdata?.order_quantity) - (psubdata?.price * psubdata?.order_quantity | discount:psubdata?.discount)}} AED ({{psubdata?.discount}}% OFF)\n													</div>\n												</div>\n												{{psubdata?.price * psubdata?.order_quantity | discount:psubdata?.discount}} AED</td>\n										</tr>\n										<tr *ngIf="psubdata?.feedback_status == false && psubdata?.order_status == \'Delivered\'">\n											<a class="text-primary" (click)="leaveFeedback(psubdata?.product_id,psubdata?.title,psubdata?.photos[0],psubdata?.seller_id,orderDetailData?.order_Id)">Leave Feedback to Seller</a>\n										</tr>\n										<tr *ngIf="purchaseData_arr[i][1][0].status == \'Completed\'">\n											<span><b>Order Status :- </b></span>\n											<a title="Item Paid" class="mr-2"><i class="fa fa-dollar"></i></a>\n											<a title="Left Feedback" class="mr-2"><img src="assets/images/leave_feedback.png" *ngIf="psubdata?.feedback_status == false" width="20px" /></a>\n											<a title="Feedback Received" class="mr-2"><img src="assets/images/receive_feedback.png" *ngIf="psubdata?.feedback_receive_status == true" width="20px" /></a>\n											<a title="Item Shipped" class="mr-2"><img src="assets/images/item_shipped.png" *ngIf="psubdata?.order_status == \'Shipped\'" width="20px" /></a>\n										</tr>\n										<tr>\n											<td colspan="5">\n												<div class="container mobile_width" *ngIf="psubdata?.order_status == \'Processing\'">\n													<div class="row bs-wizard" style="border-bottom:0;">\n														<div class="col-md-2 col-2 bs-wizard-step complete">\n														  <div class="text-center bs-wizard-stepnum">Processing</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled">\n														  <div class="text-center bs-wizard-stepnum">Dispatch</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled">\n														  <div class="text-center bs-wizard-stepnum">Item collected by buyer</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled">\n														  <div class="text-center bs-wizard-stepnum">Delivered</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled">\n														  <div class="text-center bs-wizard-stepnum">Feedback Sent</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled">\n														  <div class="text-center bs-wizard-stepnum">Feedback Received</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n													</div>\n												</div>\n											\n												<div class="container mobile_width" *ngIf="psubdata?.order_status == \'Ready For Dispatch\'">\n													<div class="row bs-wizard" style="border-bottom:0;">\n														<div class="col-md-2 col-2 bs-wizard-step complete">\n														  <div class="text-center bs-wizard-stepnum">Processing</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step complete">\n														  <div class="text-center bs-wizard-stepnum">Dispatch</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled">\n														  <div class="text-center bs-wizard-stepnum">Item collected by buyer</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled">\n														  <div class="text-center bs-wizard-stepnum">Delivered</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled">\n														  <div class="text-center bs-wizard-stepnum">Feedback Sent</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled">\n														  <div class="text-center bs-wizard-stepnum">Feedback Received</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n													</div>\n												</div>\n												\n												<div class="container mobile_width" *ngIf="psubdata?.order_status == \'Collected by buyer\'">\n													<div class="row bs-wizard" style="border-bottom:0;">\n														<div class="col-md-2 col-2 bs-wizard-step complete">\n														  <div class="text-center bs-wizard-stepnum">Processing</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step complete">\n														  <div class="text-center bs-wizard-stepnum">Dispatch</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step complete">\n														  <div class="text-center bs-wizard-stepnum">Item collected by buyer</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled">\n														  <div class="text-center bs-wizard-stepnum">Delivered</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled">\n														  <div class="text-center bs-wizard-stepnum">Feedback Sent</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled">\n														  <div class="text-center bs-wizard-stepnum">Feedback Received</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n													</div>\n												</div>\n												\n												<div class="container mobile_width" *ngIf="psubdata?.order_status == \'Delivered\'">\n													<div class="row bs-wizard" style="border-bottom:0;">\n														<div class="col-md-2 col-2 bs-wizard-step complete">\n														  <div class="text-center bs-wizard-stepnum">Processing</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step complete">\n														  <div class="text-center bs-wizard-stepnum">Dispatch</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step complete">\n														  <div class="text-center bs-wizard-stepnum">Item collected by buyer</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step complete">\n														  <div class="text-center bs-wizard-stepnum">Delivered</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled" *ngIf="psubdata?.feedback_status == false && psubdata?.order_status == \'Delivered\'">\n														  <div class="text-center bs-wizard-stepnum">Feedback Sent</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step complete" *ngIf="psubdata?.feedback_status == true && psubdata?.order_status == \'Delivered\'">\n														  <div class="text-center bs-wizard-stepnum">Feedback Sent</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step disabled" *ngIf="psubdata?.feedback_receive_status == false && psubdata?.order_status == \'Delivered\'">\n														  <div class="text-center bs-wizard-stepnum">Feedback Received</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n														\n														<div class="col-md-2 col-2 bs-wizard-step complete" *ngIf="psubdata?.feedback_receive_status == true && psubdata?.order_status == \'Delivered\'">\n														  <div class="text-center bs-wizard-stepnum">Feedback Received</div>\n														  <div class="progress"><div class="progress-bar"></div></div>\n														  <a class="bs-wizard-dot"></a>\n														</div>\n													</div>\n												</div>\n											</td>\n										</tr>\n									</tbody>\n								</table>\n							</div>\n						</div>\n					</div>\n	<!--                <div class="row ml-0 mt-3 mr-0 mr-lg-1 mr-md-0">-->\n					<div class="row bg-light mt-1 mr-lg-1 p-3 border rounded mt-3">\n						<div class="offset-lg-5 col-lg-7 col-md-12 col-12 p-1">\n							<form class="form-horizontal">\n								<div class="row m-0">\n									<div class="col-lg-12 col-md-12 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0">\n										<table class="table continue-order-tbl mb-2 set-Fonts">\n											<tbody>\n												<tr>\n													<td class="pl-lg-5 pl-md-1 pl-0"><strong>Subtotal:</strong></td>\n													<td class="text-right pr-lg-4 pr-md-3 pr-0">{{total}} AED</td>\n												</tr>\n												<tr>\n													<td class="pl-lg-5 pl-md-1 pl-0">\n														<strong>Coupon code\n															<span *ngIf="orderDetailData?.couponcode_discount != null && orderDetailData?.couponcode_type == \'Percentage Discount\'">({{orderDetailData?.coupon_code}})({{orderDetailData?.couponcode_discount}} %)</span>\n															<span *ngIf="orderDetailData?.couponcode_discount != null && orderDetailData?.couponcode_type == \'Flat Discount\'">({{orderDetailData?.coupon_code}})</span>\n														:\n														</strong>\n													</td>\n\n													<td class="text-right pr-lg-4 pr-md-3 pr-0" *ngIf="orderDetailData?.couponcode_discount != null && orderDetailData?.couponcode_type == \'Percentage Discount\'">- {{total * orderDetailData?.couponcode_discount / 100}} AED</td>\n													<td class="text-right pr-lg-4 pr-md-3 pr-0" *ngIf="orderDetailData?.couponcode_discount != null && orderDetailData?.couponcode_type == \'Flat Discount\'">- {{ orderDetailData?.couponcode_discount }} AED</td>\n													<td class="text-right pr-lg-4 pr-md-3 pr-0" *ngIf="orderDetailData?.couponcode_discount == null">-</td>\n\n												</tr>\n												<tr class="border-tr">\n													<td class="pl-lg-5 pl-md-1 pl-0"><h6 class="m-0 pt-1 pb-1">Grand Total:</h6>\n													</td>\n													<td class="text-right pr-lg-4 pr-md-3 pr-0"><h6 class="m-0 pt-1 pb-1">{{purchase_data?.order_price}} AED</h6></td>\n												</tr>\n											</tbody>\n										</table>\n									</div>\n								</div>\n							</form>\n						</div>\n					</div>\n				</div>\n				<div class="col-lg-3 col-md-12 col-12 mt-lg-5 mt-md-3 p-0 mt-3 mt-lg-0 mt-md-0">\n					<div class="row m-0 bg-light border rounded">\n						<div class="col-lg-12 col-md-12 col-12 p-3">\n							<h6 class="m-0 text-left">Shipping Address</h6>\n							<div class="row m-0">\n								<div class="col-lg-12 col-md-12 col-12 order-total p-0 mt-2">\n									<address class="m-0 set-Fonts">\n										{{purchase_data?.shipping_info.ship_address}} ,<br>\n										{{purchase_data?.shipping_info.ship_city}} {{purchase_data?.shipping_info.ship_pincode}}<br>\n										{{purchase_data?.shipping_info.ship_state}} , {{purchase_data?.shipping_info.ship_country}}<br>\n										{{purchase_data?.shipping_info.mobile}}\n									</address>\n								</div>\n							</div>\n						</div>\n					</div>\n					<div class="row bg-light border rounded mt-3 ml-0 mr-0 mb-0">\n						<div class="col-lg-12 col-md-12 col-12 p-3">\n							<h6 class="m-0 text-left">Billing Address</h6>\n							<div class="row m-0">\n								<div class="col-lg-12 col-md-12 col-12 order-total p-0 mt-2">\n									<address class="m-0 set-Fonts">\n										{{purchase_data?.shipping_info.ship_address}} ,<br>\n										{{purchase_data?.shipping_info.ship_city}} {{purchase_data?.shipping_info.ship_pincode}}<br>\n										{{purchase_data?.shipping_info.ship_state}} , {{purchase_data?.shipping_info.ship_country}}<br>\n										{{purchase_data?.shipping_info.mobile}}\n									</address>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!--================Footer Area =================-->\n<footer-page></footer-page>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/product/order-detail/order-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], OrderDetailPage);
    return OrderDetailPage;
}());

//# sourceMappingURL=order-detail.js.map

/***/ })

});
//# sourceMappingURL=18.js.map