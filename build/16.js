webpackJsonp([16],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesCalculatorPageModule", function() { return FeesCalculatorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fees_calculator__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FeesCalculatorPageModule = /** @class */ (function () {
    function FeesCalculatorPageModule() {
    }
    FeesCalculatorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fees_calculator__["a" /* FeesCalculatorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fees_calculator__["a" /* FeesCalculatorPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], FeesCalculatorPageModule);
    return FeesCalculatorPageModule;
}());

//# sourceMappingURL=fees-calculator.module.js.map

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

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeesCalculatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_info__ = __webpack_require__(87);
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





var FeesCalculatorPage = /** @class */ (function () {
    function FeesCalculatorPage(googleanalytics, alertCtrl, infoService, plt, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.alertCtrl = alertCtrl;
        this.infoService = infoService;
        this.plt = plt;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.insertion_fee = 0;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('FeesCalculator');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    FeesCalculatorPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].localItem;
        }
        $(document).prop('title', 'Fees Calculator');
        $('body').removeClass().addClass('FeesCalculator body');
        this.showCategory();
    };
    FeesCalculatorPage.prototype.ngAfterViewInit = function () {
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
    FeesCalculatorPage.prototype.showCategory = function () {
        var _this = this;
        try {
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'api/category/view-category', '', function (response) {
                _this.show_category = response.categories;
                _this.infoService.hideLoading();
                _this.showFees();
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    FeesCalculatorPage.prototype.showFees = function () {
        var _this = this;
        var seller_fees;
        if (this.localItem != null) {
            seller_fees = {
                user_id: this.localItem.id
            };
        }
        else {
            seller_fees = {
                user_id: 0
            };
        }
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'api/setting/seller-fees', seller_fees, function (response) {
            _this.show_feesData = response.setting;
            _this.featureitem = Object.entries(response.setting.feature_item);
            _this.seasonitem = Object.entries(response.setting.season_deal_fee);
            _this.checkinsertaionfees = 0;
        }, function (error) {
            console.log(error);
        });
    };
    FeesCalculatorPage.prototype.calculateFees = function () {
        if ($('#categories_select').val() == '') {
            var alert1 = this.alertCtrl.create({
                title: 'Category',
                subTitle: 'Please select category.',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert1.present();
            return;
        }
        if ($('#subcategories_select').val() == '') {
            var alert1 = this.alertCtrl.create({
                title: 'Primary Category',
                subTitle: 'Please select primary category.',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert1.present();
            return;
        }
        if ($('#BuyItNow').val() == '') {
            var alert1 = this.alertCtrl.create({
                title: 'Price',
                subTitle: 'Please enter price.',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert1.present();
            return;
        }
        var get_subtitle = 0;
        if ($('input[type=checkbox][name=subtitle]:checked').length == 1) {
            get_subtitle = 1.75;
        }
        var get_buyitnow_fees = 0;
        if ($('input[type=checkbox][name=BuyItNowPrice]:checked').length == 1) {
            get_buyitnow_fees = parseFloat(this.show_feesData.data.buyitnow_fee);
        }
        var get_daily_deal = 0;
        if ($('#daily_dealDay').val() != '') {
            get_daily_deal = parseFloat($('#daily_dealDay').val());
        }
        var get_season_deal = 0;
        if ($('#season_dealDay').val() != '') {
            get_season_deal = parseFloat($('#season_dealDay').val());
        }
        var get_price = parseFloat($('#BuyItNow').val());
        var primary_cat_fees = parseFloat($('#subcategories_select').children(":selected").attr("id"));
        var total_price = ((primary_cat_fees * get_price) / 100);
        var get_insertionfee = 0;
        if (get_price > 0.01 && get_price <= 3.75) {
            get_insertionfee = parseFloat(this.checkinsertaionfees) + 0;
        }
        else if (get_price > 3.75 && get_price <= 35) {
            get_insertionfee = parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.second);
        }
        else if (get_price > 35 && get_price <= 90) {
            get_insertionfee = parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.third);
        }
        else if (get_price > 90 && get_price <= 180) {
            get_insertionfee = parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.four);
        }
        else if (get_price > 180 && get_price <= 750) {
            get_insertionfee = parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.five);
        }
        else if (get_price > 750) {
            get_insertionfee = parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.six);
        }
        this.show_feesData.data.insertion_fee = get_insertionfee;
        this.feature_item_fees = get_daily_deal;
        this.season_item_fees = get_season_deal;
        this.subtitle_fees = get_subtitle;
        this.total_category_fees = total_price;
        this.category_fees_percentage = primary_cat_fees;
        this.buyitnow_fees = get_buyitnow_fees;
        this.totalFees = get_insertionfee + total_price + get_daily_deal + get_subtitle + get_season_deal + get_buyitnow_fees;
    };
    FeesCalculatorPage.prototype.clickToDraftList = function () {
        this.navCtrl.push('DraftListingPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], FeesCalculatorPage.prototype, "content", void 0);
    FeesCalculatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fees-calculator',template:/*ion-inline-start:"/var/www/html/src/pages/seller-my-account/fees-calculator/fees-calculator.html"*/'<ion-content padding class="fee-calculator">\n<div class="wrapper">\n	<div class="container fee-calculator-main mb-3">\n        <div class="row">\n            <div class="col-lg-12 col-md-12 col-xl-12 col-12 set-fontSize">\n                <p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n				<p class="mb-2 set-fontSize">\n					<a href="#/home" class="breadcrumblink">Home</a> &nbsp;&nbsp;\n						<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n                    <a class="breadcrumblink font-weight-bold" disabled>Fees Calculator</a></p>\n            </div>\n        </div>\n        <div class="row m-0">\n            <div class="col-lg-12 col-md-12 col-12 p-0">\n                <h5 class="mb-2">Fees Calculator</h5>\n                <p class="set-fontSize">Enter your information below and click <b>Calculate Fees</b> to get an estimate of total fees for\n                    your item</p>\n            </div>\n        </div>\n        <div class="row m-0">\n            <div class="col-lg-9 col-md-12 col-12">\n                <div class="row bg-light border rounded pb-3 mr-lg-0 set-fontSize">\n                    <div class="col-lg-12 col-md-12 col-12 pt-3 pb-1">\n                        <span class="badge badge-warning badge-calculator">1</span> <span class="select-text">Select a category</span>\n                    </div>\n                    <div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pl-4">\n                        <p class="m-0 set-fontSize">Fees vary, depending on the category. for the most accurate fee estimate, please\n                            select all applicable subcategories</p>\n                    </div>\n                    <div class="col-lg-12 col-md-12 col-12 pl-0 p-2">\n                        <form class="form set-fontSize d-lg-flex d-inline-block d-md-flex table-responsive">\n                            <div class="form-group col-md-3 col-12 set-fontSize">\n                                 <label><span class="text-danger font-weight-bold">*</span>Category</label>\n								<select id="categories_select" class="form-control calculator-controal" #categories_select="ngModel" name="category_id" required ngModel>\n									<option value="" selected>-- Select Category -- </option>\n									<option *ngFor="let categoriesselect of show_category?.data" value="{{categoriesselect.id}}" >{{categoriesselect.category_name}}</option>\n								</select>\n								<div *ngIf="categories_select.invalid && (categories_select.dirty || categories_select.touched)" class="error-box text-danger">\n									<div *ngIf="categories_select.errors.required">\n										* Select Category.\n									</div>\n								</div>\n                            </div>\n							\n							<div *ngFor="let categoriesselect of show_category?.data" [ngClass]="{\'col-md-4 col-12 col-lg-3 p-0\':categories_select.value == categoriesselect?.id}">\n								<div class="form-group col-md-12 col-12 set-fontSize" *ngIf="categories_select.value == categoriesselect?.id">\n									<label><span class="text-danger font-weight-bold">*</span>Primary Category</label>\n									<select id="subcategories_select" class="form-control calculator-controal" size="0" #subcategories_select="ngModel" name="subcategory_id" required ngModel>\n										<option value="" selected>-- Select Primary Category -- </option>\n										<option *ngFor="let catego of categoriesselect?.sub" value="{{catego.id}}" id="{{catego.facility_charges}}" >{{catego.category_name}}</option>\n									</select>\n									<div *ngIf="subcategories_select.invalid && (subcategories_select.dirty || subcategories_select.touched)" class="error-box text-danger">\n										<div *ngIf="subcategories_select.errors.required">\n											* Select Primary Category.\n										</div>\n									</div>\n								</div>\n							</div>\n							\n							<div class="form-group col-md-3 col-12 set-fontSize">\n                                <label>Featured Deals Days</label>\n								<select id="daily_dealDay" class="form-control calculator-controal" #daily_dealDay="ngModel" name="daily_dealDay" ngModel>\n									<option value="" selected>-- Select Days -- </option>\n									<option *ngFor="let allday of featureitem" value="{{allday[1]}}">{{allday[0] | replaceString:allday[0]}} <span *ngIf="allday[0] == \'Days_1\'">Day</span><span *ngIf="allday[0] != \'Days_1\'">Days</span></option>\n								</select>\n							</div>\n							\n							<div class="form-group col-md-3 col-12 set-fontSize">\n                                <label>Season Deals Days</label>\n								<select id="season_dealDay" class="form-control calculator-controal" #season_dealDay="ngModel" name="season_dealDay" ngModel>\n									<option value="" selected>-- Select Days -- </option>\n									<option *ngFor="let allday of seasonitem" value="{{allday[1]}}">{{allday[0] | replaceString:allday[0]}} <span *ngIf="allday[0] == \'Days_1\'">Day</span><span *ngIf="allday[0] != \'Days_1\'">Days</span></option>\n								</select>\n							</div>\n                        </form>\n                    </div>\n                </div>\n				\n				<div class="row bg-light border rounded pb-3 mt-3 mr-lg-0 set-fontSize">\n                    <div class="col-lg-12 col-md-12 col-12 pt-3 pb-1">\n                        <span class="badge badge-warning badge-calculator">2</span> <span class="select-text">Select listing information</span>\n                    </div>\n                    <div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pl-4">\n                        <p class="m-0 font-weight-bold">Listing Detail</p>\n                    </div>\n                    <div class="col-lg-12 col-md-12 col-12 pl-0 p-2">\n                        <form class="form-inline">\n                            <div class="form-group col-lg-4 col-md-4 col-12">\n                                <label for="BuyItNow" class="pb-2"><span class="text-danger font-weight-bold">*</span>Item Fixed Price</label>\n                                <input class="form-control form-control-sm startingprice-buyitnow" #BuyItNow="ngModel" required ngModel id="BuyItNow" name="BuyItNow" type="number" placeholder="Price" pattern="^([1-9][0-9]{0,6}?)$">\n								<div *ngIf="BuyItNow.invalid && (BuyItNow.dirty || BuyItNow.touched)" class="text-danger">\n									<div *ngIf="BuyItNow.errors.required">\n										* Enter price.\n									</div>\n									<div *ngIf="BuyItNow.errors.pattern">\n										* The price must be a valid number greater than 0 and maximum price length is 7.\n									</div>\n								</div>\n							</div>\n						</form>\n                    </div>\n\n                    <div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pl-4 mt-3">\n                        <p class="m-0 font-weight-bold">Listing Upgrades</p>\n                    </div>\n                    <div class="col-lg-4 col-md-4 col-12 pl-0 pl-4 pr-4">\n                        <label class="custom-control custom-checkbox pl-4">\n                            <input type="checkbox" class="custom-control-input" name="subtitle" id="subtitle">\n                            <span class="custom-control-indicator"></span>\n                            <span class="custom-control-description">Subtitle</span>\n                        </label>\n					</div>\n					<div class="col-lg-4 col-md-4 col-12 pl-0 pl-4 pr-4">\n                        <label class="custom-control custom-checkbox pl-4">\n                            <input type="checkbox" class="custom-control-input" name="BuyItNowPrice" id="BuyItNowPrice">\n                            <span class="custom-control-indicator"></span>\n                            <span class="custom-control-description">Buy It Now Price</span>\n                        </label>\n					</div>\n				</div>\n            </div>\n            <div class="col-lg-3 col-md-12 col-12 pt-3 pb-3 mt-lg-0 mt-md-4 mt-4 bg-light border rounded estimated-fees-section">\n                <h6 class="m-0 text-left">Your Estimated Fees</h6>\n                <div class="row m-0 set-fontSize">\n                    <div class="col-lg-12 col-md-12 col-12 order-total p-0 mt-2">\n                        <div class="row m-0">\n                            <div class="col-lg-7 col-md-7 col-7 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span>Item Insertion Fees:</span>\n                            </div>\n                            <div class="col-lg-5 col-md-5 col-5 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span class="font-weight-bold">{{show_feesData?.data.insertion_fee}} AED</span>\n                            </div>\n                        </div> \n						<div class="row m-0" *ngIf="feature_item_fees > 0">\n                            <div class="col-lg-7 col-md-7 col-7 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span>Featured Deals Fees:</span>\n                            </div>\n                            <div class="col-lg-5 col-md-5 col-5 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span class="font-weight-bold">{{feature_item_fees}} AED</span>\n                            </div>\n                        </div>\n						<div class="row m-0" *ngIf="season_item_fees > 0">\n                            <div class="col-lg-7 col-md-7 col-7 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span>Season Deals Fees:</span>\n                            </div>\n                            <div class="col-lg-5 col-md-5 col-5 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span class="font-weight-bold">{{season_item_fees}} AED</span>\n                            </div>\n                        </div>\n						<div class="row m-0" *ngIf="total_category_fees > 0">\n                            <div class="col-lg-7 col-md-7 col-7 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span>Category Fees:</span>\n                            </div>\n                            <div class="col-lg-5 col-md-5 col-5 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span class="font-weight-bold">{{total_category_fees}} AED ({{category_fees_percentage}}%)</span>\n                            </div>\n                        </div>\n						<div class="row m-0" *ngIf="subtitle_fees > 0">\n                            <div class="col-lg-7 col-md-7 col-7 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span>Subtitle Fees:</span>\n                            </div>\n                            <div class="col-lg-5 col-md-5 col-5 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span class="font-weight-bold">{{subtitle_fees}} AED</span>\n                            </div>\n                        </div>\n						<div class="row m-0" *ngIf="buyitnow_fees > 0">\n                            <div class="col-lg-7 col-md-7 col-7 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span>Buy It Now Price:</span>\n                            </div>\n                            <div class="col-lg-5 col-md-5 col-5 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span class="font-weight-bold">{{buyitnow_fees}} AED</span>\n                            </div>\n                        </div>\n						<div class="row m-0" *ngIf="discount_fees > 0">\n                            <div class="col-lg-7 col-md-7 col-7 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span>Discount:</span>\n                            </div>\n                            <div class="col-lg-5 col-md-5 col-5 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span class="font-weight-bold">{{discount_fees}} AED</span>\n                            </div>\n                        </div>\n                        <div class="row m-0">\n                            <div class="col-lg-12 col-md-12 col-12 p-0 text-left linearBg3">\n                            </div>\n                        </div>\n                        <div class="row m-0">\n                            <div class="col-lg-7 col-md-7 col-7 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span class="font-weight-bold">Total:</span>\n                            </div>\n                            <div class="col-lg-5 col-md-5 col-5 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <span class="font-weight-bold">{{totalFees}} AED</span>\n                            </div>\n                        </div>\n                        <div class="row m-0">\n                            <div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pr-1 pl-1 text-left">\n                                <button class="btn theme-light-btn w-100" role="button" type="submit" (click)="calculateFees()">Calculate Fees\n                                </button>\n                            </div>\n                            <div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pr-1 pl-1 text-left" *ngIf="localItem?.role == \'seller\'">\n                                <button class="btn theme-dark-btn w-100" role="button" type="button" (click)="clickToDraftList()">Start Over</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n	<footer-page></footer-page>\n</div>\n</ion-content>\n\n\n'/*ion-inline-end:"/var/www/html/src/pages/seller-my-account/fees-calculator/fees-calculator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FeesCalculatorPage);
    return FeesCalculatorPage;
}());

//# sourceMappingURL=fees-calculator.js.map

/***/ })

});
//# sourceMappingURL=16.js.map