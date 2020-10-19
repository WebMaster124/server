webpackJsonp([12],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_intl_phone__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_geoautocomplete__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng4_intl_phone__["a" /* InternationalPhoneModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng4_geoautocomplete__["a" /* Ng4GeoautocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());

//# sourceMappingURL=user-profile.module.js.map

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

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(googleanalytics, http_mobile, plt, fb, http, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.http_mobile = http_mobile;
        this.plt = plt;
        this.fb = fb;
        this.http = http;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
        this.userImg = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/user/';
        this.verificationResponsebusiness = null;
        this.editProfileshow = false;
        this.selectdValue = false;
        this.userSettings = {
            showCurrentLocation: true,
            showSearchButton: false,
            useGoogleGeoApi: true,
            locationIconUrl: "assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
            geoCountryRestriction: ['ae', 'kw', 'om', 'qa', 'sa']
        };
        this.changePasswordForm = fb.group({
            'currentpassword': ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(6)])],
            'newpassword': ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(6)])],
            'confirmpassword': ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required])]
        }, { validator: this.checkIfMatchingPasswords('newpassword', 'confirmpassword') });
        this.changeuserNameForm = fb.group({
            'username': ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(30)])],
        });
        this.changeuserProfileForm = fb.group({
            'fname': ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].pattern('^[a-zA-Z]+$')])],
            'lname': ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].pattern('^[a-zA-Z]+$')])],
            'payment_email': '',
            'nationality': '',
            'phonenumber': ['+971', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required])],
            'address1': ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3)])],
            'zipcode': '',
            'city': ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].pattern('^[a-zA-Z]+$')])],
            'state': '',
            'dob': '',
            'address2': '',
            'radio-group': '',
            'country': '',
            'email': ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required])],
        });
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('UserProfile');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
            this.userSettings.showCurrentLocation = false;
        }
    }
    UserProfilePage.prototype.checkIfMatchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    UserProfilePage.prototype.autoCompleteCallback1 = function (selectedData) {
        var postal_code = '', country = '', administrative_area_level_1 = '', administrative_area_level_2 = '', sublocality_level_1 = '';
        if (selectedData.response == true) {
            for (var add = 0; add < selectedData.data.address_components.length; add++) {
                if (selectedData.data.address_components[add].types[0] == 'postal_code') {
                    postal_code = selectedData.data.address_components[add].long_name;
                }
                if (selectedData.data.address_components[add].types[0] == 'country') {
                    country = selectedData.data.address_components[add].long_name;
                }
                if (selectedData.data.address_components[add].types[0] == 'administrative_area_level_1') {
                    administrative_area_level_1 = selectedData.data.address_components[add].long_name;
                }
                if (selectedData.data.address_components[add].types[0] == 'administrative_area_level_2') {
                    administrative_area_level_2 = selectedData.data.address_components[add].long_name;
                }
                if (selectedData.data.address_components[add].types[0] == 'sublocality_level_1') {
                    sublocality_level_1 = selectedData.data.address_components[add].long_name;
                }
            }
            this.changeuserProfileForm.controls['zipcode'].setValue(postal_code);
            this.changeuserProfileForm.controls['state'].setValue(administrative_area_level_1);
            this.changeuserProfileForm.controls['country'].setValue(country);
            this.changeuserProfileForm.controls['city'].setValue(administrative_area_level_2);
            $('#address2').val(sublocality_level_1);
        }
    };
    UserProfilePage.prototype.ngAfterViewInit = function () {
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
    UserProfilePage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = localStorage.getItem('userInfo');
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = JSON.parse(this.retrievedObject);
        }
        $(".zoomContainer").remove();
        this.getId = this.navParams.data.id;
        $(document).prop('title', 'User Profile');
        $('#search-form')[0].reset();
        $('body').removeClass().addClass('UserProfile body');
        var d = new Date();
        this.showYear = d.getFullYear();
        this.showuserProfile();
    };
    UserProfilePage.prototype.showuserProfile = function () {
        var _this = this;
        var view_profile = {
            user_id: this.navParams.data.id
        };
        var view_feedback = {
            receiver_id: this.navParams.data.id,
            per_page: 5,
            feedback_type: 'Positive'
        };
        if (this.plt.is('core') == true || this.plt.is('mobileweb') == true || this.plt.is('android') == true) {
            this.infoService.showLoading();
            var combined = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin(this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/view-profile', view_profile, { headers: { "Auth": "dibdaaauth" } }).map(function (res) { return res; }), this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-active-product', view_profile, { headers: { "Auth": "dibdaaauth" } }).map(function (res) { return res; }), this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-followers', view_profile, { headers: { "Auth": "dibdaaauth" } }).map(function (res) { return res; }), this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-following', view_profile, { headers: { "Auth": "dibdaaauth" } }).map(function (res) { return res; }), this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/feedback/view-feedback', view_feedback, { headers: { "Auth": "dibdaaauth" } }).map(function (res) { return res; }));
            combined.subscribe(function (latestValues) {
                var data_profile = latestValues[0], data_active_product = latestValues[1], data_followers = latestValues[2], data_followings = latestValues[3], data_fedback = latestValues[4];
                _this.profiledata = data_profile.user;
                _this.activeItemdata = data_active_product;
                _this.followerdata = data_followers.follower;
                _this.followingdata = data_followings.following;
                _this.feedbackdata = data_fedback.feedback.data;
                _this.infoService.hideLoading();
            });
        }
        else {
            var headers = {
                'Auth': 'dibdaaauth'
            };
            var combined = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin(this.http_mobile.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/view-profile', view_profile, headers).then(function (res) { return res; }), this.http_mobile.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-active-product', view_profile, headers).then(function (res) { return res; }), this.http_mobile.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-followers', view_profile, headers).then(function (res) { return res; }), this.http_mobile.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-following', view_profile, headers).then(function (res) { return res; }), this.http_mobile.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/feedback/view-feedback', view_feedback, headers).then(function (res) { return res; }));
            combined.subscribe(function (latestValues) {
                var data_profile = latestValues[0], data_active_product = latestValues[1], data_followers = latestValues[2], data_followings = latestValues[3], data_fedback = latestValues[4];
                var convertdata_profile = JSON.parse(data_profile.data);
                _this.profiledata = convertdata_profile.user;
                var convertdata_active_product = JSON.parse(data_active_product.data);
                _this.activeItemdata = convertdata_active_product;
                var convertdata_followers = JSON.parse(data_followers.data);
                _this.followerdata = convertdata_followers.follower;
                var convertdata_followings = JSON.parse(data_followings.data);
                _this.followingdata = convertdata_followings.following;
                var convertdata_fedback = JSON.parse(data_fedback.data);
                _this.feedbackdata = convertdata_fedback.feedback.data;
                _this.infoService.hideLoading();
            });
        }
    };
    UserProfilePage.prototype.showProfileData = function () {
        var _this = this;
        this.editProfileshow = true;
        var prodile_data = {
            user_id: this.localItem.id
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/view-profile', prodile_data, function (response) {
            _this.changeuserProfileForm.controls['fname'].setValue(response.user.data.first_name);
            _this.changeuserProfileForm.controls['lname'].setValue(response.user.data.last_name);
            document.getElementById('nationality').value = response.user.data.natinality;
            _this.changeuserProfileForm.controls['phonenumber'].setValue(response.user.data.mobile_number);
            _this.changeuserProfileForm.controls['address1'].setValue(response.user.data.address[0]);
            _this.changeuserProfileForm.controls['zipcode'].setValue(response.user.data.address[2]);
            _this.changeuserProfileForm.controls['city'].setValue(response.user.data.address[3]);
            _this.changeuserProfileForm.controls['dob'].setValue(response.user.data.dob);
            _this.changeuserProfileForm.controls['payment_email'].setValue(response.user.data.payment_email);
            _this.changeuserProfileForm.controls['state'].setValue(response.user.data.address[5]);
            _this.changeuserProfileForm.controls['email'].setValue(response.user.data.email);
            _this.changeuserNameForm.controls['username'].setValue(response.user.data.display_name);
            document.getElementById('Country').value = response.user.data.address[4];
            _this.viewprofiledata = response.user;
            var persons_pro = _this.localItem;
            persons_pro.profile_pic = response.user.data.profile_pic;
            persons_pro.first_name = response.user.data.first_name;
            persons_pro.last_name = response.user.data.last_name;
            persons_pro.payment_email = response.user.data.payment_email;
            persons_pro.email = response.user.data.email;
            localStorage.setItem('userInfo', JSON.stringify(persons_pro));
            __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons_pro;
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    UserProfilePage.prototype.changePassword = function () {
        var _this = this;
        var change_password = {
            old_password: $('#current-password').val(),
            new_password: $('#newPassword').val(),
            user_id: this.localItem.id
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/change-password', change_password, function (response) {
            _this.changepassworddata = response.user;
            _this.infoService.hideLoading();
            _this.setTimer('changePassword');
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    UserProfilePage.prototype.readURL = function (val) {
        var total_file = val.target.files[0];
        var picReader = new FileReader();
        picReader.addEventListener("load", function (event) {
            var picFile = event.target;
            $('.propicimg').attr('src', picFile.result);
            $('#hidden_img').val(picFile.result);
        });
        picReader.readAsDataURL(total_file);
    };
    UserProfilePage.prototype.changeUserName = function () {
        var _this = this;
        var change_username = {
            user_id: this.localItem.id,
            user_name: $('#user_name-edit').val()
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/change-username', change_username, function (response) {
            if (response.user.status == "success") {
                var persons = _this.localItem;
                persons.display_name = $('#user_name-edit').val();
                localStorage.setItem('userInfo', JSON.stringify(persons));
                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
            }
            _this.changeusernamedata = response.user;
            _this.infoService.hideLoading();
            _this.setTimer('changeUserName');
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    UserProfilePage.prototype.setTimer = function (val) {
        var self = this;
        if (val == 'changePassword') {
            setTimeout(function () {
                self.changepassworddata.status = 'none';
                document.getElementById("edit-password_form").reset();
            }, 4000);
        }
        else if (val == 'changeUserName') {
            setTimeout(function () {
                self.changeusernamedata.status = 'none';
                /*(<any>document).getElementById("edit-username_form").reset();*/
            }, 4000);
        }
        else if (val == 'hideselected') {
            setTimeout(function () {
                self.selectdValue = false;
            }, 4000);
        }
    };
    UserProfilePage.prototype.edituserProfile = function (val) {
        var _this = this;
        if ($('#Country').val() == '-1') {
            this.selectdValue = true;
            this.setTimer('hideselected');
        }
        else if ($('input[name=radio-group]:checked') == false) {
            this.selectdValue = true;
            this.setTimer('hideselected');
        }
        else {
            var editProData = {
                id: this.localItem.id,
                first_name: val.value.fname,
                last_name: val.value.lname,
                natinality: $('#nationality').val(),
                mobile_number: val.value.phonenumber,
                dob: val.value.dob,
                gender: $('input[name=radio-group]:checked').val(),
                prifile_image: $('#hidden_img').val(),
                address1: val.value.address1,
                address2: val.value.address2,
                postcode: val.value.zipcode,
                city: val.value.city,
                country: $('#Country').val(),
                payment_email: $('#paymentEmail').val(),
                state: $('#state').val(),
                email: val.value.email
            };
            if (this.changeuserProfileForm.controls['payment_email'].value == this.localItem.payment_email) {
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/update-profile', editProData, function (response) {
                    if (response.user.status == 'fail') {
                        _this.editProfiledata = response;
                        _this.infoService.hideLoading();
                    }
                    else {
                        var persons = _this.localItem;
                        persons.first_name = $('#first_name').val();
                        persons.last_name = $('#last_name').val();
                        persons.natinality = $('#nationality').val();
                        persons.address = $('#address1').val() + ' ' + $('#address2').val() + ',' + $('#zipcode').val();
                        persons.payment_email = $('#paymentEmail').val();
                        persons.email = $('#useremail').val();
                        localStorage.setItem('userInfo', JSON.stringify(persons));
                        __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                        _this.editProfiledata = response;
                        _this.infoService.hideLoading();
                        _this.showProfileData();
                    }
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
            else if (this.verificationResponsebusiness == null || this.verificationResponsebusiness.responseEnvelope.ack == 'Failure') {
                if (this.changeuserProfileForm.controls['payment_email'].value == '') {
                    this.infoService.showLoading();
                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/update-profile', editProData, function (response) {
                        if (response.user.status == 'fail') {
                            _this.editProfiledata = response;
                            _this.infoService.hideLoading();
                        }
                        else {
                            var persons = _this.localItem;
                            persons.first_name = $('#first_name').val();
                            persons.last_name = $('#last_name').val();
                            persons.natinality = $('#nationality').val();
                            persons.address = $('#address1').val() + ' ' + $('#address2').val() + ',' + $('#zipcode').val();
                            persons.payment_email = $('#paymentEmail').val();
                            persons.email = $('#useremail').val();
                            localStorage.setItem('userInfo', JSON.stringify(persons));
                            __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                            _this.editProfiledata = response;
                            _this.infoService.hideLoading();
                            _this.showuserProfile();
                        }
                    }, function (error) {
                        console.log(error);
                        _this.infoService.hideLoading();
                    });
                }
            }
            else {
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/update-profile', editProData, function (response) {
                    if (response.user.status == 'fail') {
                        _this.editProfiledata = response;
                        _this.infoService.hideLoading();
                    }
                    else {
                        var persons = _this.localItem;
                        persons.first_name = $('#first_name').val();
                        persons.last_name = $('#last_name').val();
                        persons.natinality = $('#nationality').val();
                        persons.address = $('#address1').val() + ' ' + $('#address2').val() + ',' + $('#zipcode').val();
                        persons.payment_email = $('#paymentEmail').val();
                        persons.email = $('#useremail').val();
                        localStorage.setItem('userInfo', JSON.stringify(persons));
                        __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                        _this.editProfiledata = response;
                        _this.infoService.hideLoading();
                        _this.showuserProfile();
                    }
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
        }
    };
    UserProfilePage.prototype.closeEditProfile = function () {
        this.editProfileshow = false;
        this.showuserProfile();
    };
    UserProfilePage.prototype.showAllActiveItem = function () {
        localStorage.setItem('seller_Id', this.navParams.data.id);
        this.navCtrl.push('AllItemPage', {
            id: 'SellerActiveItem'
        });
    };
    UserProfilePage.prototype.showuserProfilefunc = function (val) {
        this.navCtrl.push('UserProfilePage', {
            id: val
        });
    };
    UserProfilePage.prototype.checkPaypalEmail = function () {
        var _this = this;
        var pass_data = {
            paypal_email: this.changeuserProfileForm.controls['payment_email'].value
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/pay/verify-paypal-email', pass_data, function (response) {
            _this.verificationResponsebusiness = response;
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    UserProfilePage.prototype.gotoProductdetails = function (val) {
        this.navCtrl.push('ProductDetails', {
            id: val
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], UserProfilePage.prototype, "content", void 0);
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-profile',template:/*ion-inline-start:"/var/www/html/src/pages/seller-my-account/user-profile/user-profile.html"*/'<ion-content padding>\n	<div class="seller-profile">\n		<div class="wrapper">\n			<div class="container seller-profile-main mb-3 text-center">\n				<div class="row text-left">\n					<div class="col-lg-12 col-md-12 col-xl-12 col-12 breadcrumblink_div">\n						<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n						<p class="setFont-size mb-0">\n							<a href="#/home" class="breadcrumblink">Home</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n							<a href="#/seller-my-account/account" class="breadcrumblink">My Dibdaa</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n							<a class="breadcrumblink" disabled>User profile</a>\n						</p>\n					</div>\n				</div>\n				<div class="row">\n					<div class="col-lg-12 col-md-12 col-12">\n						<div class="profile clearfix">\n							<div class="seller-profil-sub pb-2 pb-md-2 pb-lg-0 mt-3" *ngIf="editProfileshow == false">\n								<div class="row m-0 pt-3">\n									<div class="col-lg-6 col-md-12 col-12 pt-3 pb-3 feedback-rating-profile">\n										<div class="row m-0 seller-profil-sub-bg">\n											<div class="col-lg-3 col-md-4 col-12">\n												<div class="user">\n													<div class="avatar" *ngIf="profiledata?.data.profile_pic == \'\';else showPropic;">\n														<img src="assets/images/user_placeholder.png" class="img-fluid img-seller-profile">\n													</div>\n													<ng-template #showPropic>\n														<div class="avatar">\n															<img src="{{userImg}}{{profiledata?.data.id}}/{{profiledata?.data.profile_pic}}" class="img-fluid img-seller-profile">\n														</div>\n													</ng-template>\n												</div>\n											</div>\n											<div class="col-lg-9 col-md-8 col-12 setFont-size pl-0 pl-lg-3 pr-lg-3 pr-0">\n												<div class="info text-center text-lg-left text-md-left">\n													<h2 class="seller-name mb-2 mt-3 mt-lg-0 mt-md-0">\n														<a class="seller-profile-link">{{profiledata?.data.display_name}}</a> \n															(<a><span class="feedback-count">{{profiledata?.data.totalCount}}</span></a> \n																<i class="fa fa-star text-info"></i>)\n													</h2>\n													<p class="mb-2">{{profiledata?.data.feedback_avg}}% positive feedback</p>\n													<a class="btn theme-light-btn mt-1" role="button" *ngIf="getId == localItem?.id" (click)="showProfileData()">Edit profile</a>\n												</div>\n											</div>\n										</div>\n										<div class="row m-0 pt-3">\n											<div class="col-lg-12 col-md-12 col-12 text-left setFont-size pl-0 pl-lg-3 pr-lg-3 pr-0">\n												<h6>Feedback ratings:-</h6>\n												<table class="table table-sm text-center">\n													<tbody>\n													<tr>\n														<td class="border-top-0 p-0 pt-2">\n															<i class="fa fa-plus-circle text-success"></i>\n															<b>{{profiledata?.data.positiveCount}}</b>\n														</td>\n														<td class="border-top-0 p-0 pt-2">\n															<i class="fa fa-dot-circle-o text-secondary"></i> \n															<b>{{profiledata?.data.neutralCount}}</b>\n														</td>\n														<td class="border-top-0 p-0 pt-2">\n															<i class="fa fa-minus-circle text-danger"></i>\n															<b>{{profiledata?.data.negativeCount}}</b>\n														</td>\n													</tr>\n													<tr>\n														<td class="border-top-0 p-0">Positive</td>\n														<td class="border-top-0 p-0">Neutral</td>\n														<td class="border-top-0 p-0">Negative</td>\n													</tr>\n													</tbody>\n												</table>\n												<p class="text-center"><strong>Feedback from the last 12 months</strong></p>\n											</div>\n										</div>\n										<div class="row m-0 pt-3">\n											<div class="col-lg-12 col-md-12 col-12 text-left setFont-size pl-0 pl-lg-3 pr-lg-3 pr-0">\n												<table class="table table-sm text-center">\n													<tbody>\n													<tr>\n														<td class="border-top-0 p-0"><b>Followers:</b></td>\n														<td class="border-top-0 p-0"><b>Reviews:</b></td>\n														<td class="border-top-0 p-0"><b>Member since:</b></td>\n														<td class="border-top-0 p-0"><b>Country:</b></td>\n													</tr>\n													<tr>\n														<td class="border-top-0 p-0 pt-2">{{followerdata?.data.length}}</td>\n														<td class="border-top-0 p-0 pt-2">{{profiledata?.data.totalCount}}</td>\n														<td class="border-top-0 p-0 pt-2">{{profiledata?.data.created_date}}</td>\n														<td class="border-top-0 p-0 pt-2">{{profiledata?.data.natinality}}</td>\n													</tr>\n													</tbody>\n												</table>\n											</div>\n										</div>\n									</div>\n									<div class="col-lg-6 col-md-12 col-12 pt-3 pb-3 setFont-size pl-0 pl-lg-3">\n										\n										<ion-slides autoplay="2000" loop="true" speed="500" pager *ngIf="feedbackdata?.data.length > 0;else showerrorfeedback;">\n										<span *ngFor="let fdbdata of feedbackdata?.data; let i=index;">\n											<ion-slide>\n												<p class="setFont-size text-left pl-3">\n													<i class="fa fa-plus-circle text-success pr-2"></i>{{fdbdata?.description}}\n												</p>\n											</ion-slide>\n										</span>\n\n										</ion-slides>\n										<ng-template #showerrorfeedback>\n											<ion-slides>\n												<ion-slide>\n													<p class="setFont-size text-left pl-3">\n														No Feedback available\n													</p>\n												</ion-slide>\n											</ion-slides>\n										</ng-template>\n									</div>\n								</div>\n							</div>\n							<div class="seller-profil-sub pb-3 mt-3" *ngIf="editProfileshow == true">\n								<div class="row m-0 pt-3">\n									<div class="col-lg-6 col-md-12 col-12 pt-3 pb-3 feedback-rating-profile">\n										<div class="contact_form">\n											<div class="row m-0">\n												<div class="col-lg-12 setFont-size">\n													<div class="contact_form_container">\n														<div class="contact_form_title mt-2 mb-4"><h5>Edit Profile</h5></div>\n														<form [formGroup]="changeuserProfileForm" method="post" role="form" id="edit-profile_form">\n															<div class="contact_form_inputs">\n																<div class="row m-0">\n																	<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="avatar-edit">\n																			<img src="assets/images/user_placeholder.png" class="img-fluid imgfluid img-seller-profile-edit propicimg" *ngIf="viewprofiledata?.data.profile_pic == \'\';else showuserPropic">\n																			<ng-template #showuserPropic>\n																				<img src="{{userImg}}{{viewprofiledata?.data.id}}/{{viewprofiledata?.data.profile_pic}}" class="propicimg img-fluid imgfluid img-seller-profile-edit" id="propicimg" width="100px" height="100px">\n																			</ng-template>\n																			<input type="hidden" id="hidden_img" />\n																			<span class="upload_propic">\n																				<i class="fa fa-camera set_font pl-1 pt-2" aria-hidden="true"></i>\n																				<input id="file-input" type="file" (change)="readURL($event)"/>\n																			</span>\n																		</div>\n																	</div>\n																	<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<ng4geo-autocomplete [userSettings]="userSettings" (componentCallback)="autoCompleteCallback1($event)"></ng4geo-autocomplete>\n																	</div>\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="first_name" class="pl-2"><span class="text-danger font-weight-bold ">*</span> First Name</label>\n																			<input type="text" class="form-control contact-form-input" id="first_name" placeholder="First Name" name="fname" [formControl]="changeuserProfileForm.controls[\'fname\']" [ngClass]="{\'error-border\':!changeuserProfileForm.controls[\'fname\'].valid}">\n																		</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'fname\'].hasError(\'required\') && changeuserProfileForm.controls[\'fname\'].touched">* Name is required!</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'fname\'].hasError(\'minlength\') && changeuserProfileForm.controls[\'fname\'].touched">* Minimum length is 3!</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'fname\'].hasError(\'pattern\') && changeuserProfileForm.controls[\'fname\'].touched">* Enter character only!</div>\n																	</div>\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="last_name" class="pl-2"><span class="text-danger font-weight-bold ">*</span> Last Name</label>\n																			<input type="text" class="form-control contact-form-input" id="last_name" placeholder="Last Name" name="lname" [formControl]="changeuserProfileForm.controls[\'lname\']" [ngClass]="{\'error-border\':!changeuserProfileForm.controls[\'lname\'].valid}">\n																		</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'lname\'].hasError(\'required\') && changeuserProfileForm.controls[\'lname\'].touched">* Name is required!</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'lname\'].hasError(\'minlength\') && changeuserProfileForm.controls[\'lname\'].touched">* Minimum length is 3!</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'lname\'].hasError(\'pattern\') && changeuserProfileForm.controls[\'lname\'].touched">* Enter character only</div>\n																	</div>\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="nationality" class="pl-2"><span class="text-danger font-weight-bold ">*</span> Nationality</label>\n																			<!--<input type="text" class="form-control contact-form-input" id="nationality" placeholder="Nationality" name="nationality" [formControl]="changeuserProfileForm.controls[\'nationality\']" [ngClass]="{\'error-border\':!changeuserProfileForm.controls[\'nationality\'].valid}">-->\n																			<select class="form-control contact-form-input" id="nationality" name="nationality" [formControl]="changeuserProfileForm.controls[\'nationality\']">\n																				<option value="Afghanistan">Afghanistan</option>\n																				<option value="Albania">Albania</option>\n																				<option value="Algeria">Algeria</option>\n																				<option value="American Samoa">American Samoa</option>\n																				<option value="Andorra">Andorra</option>\n																				<option value="Angola">Angola</option>\n																				<option value="Anguilla">Anguilla</option>\n																				<option value="Antartica">Antarctica</option>\n																				<option value="Antigua and Barbuda">Antigua and Barbuda</option>\n																				<option value="Argentina">Argentina</option>\n																				<option value="Armenia">Armenia</option>\n																				<option value="Aruba">Aruba</option>\n																				<option value="Australia">Australia</option>\n																				<option value="Austria">Austria</option>\n																				<option value="Azerbaijan">Azerbaijan</option>\n																				<option value="Bahamas">Bahamas</option>\n																				<option value="Bahrain">Bahrain</option>\n																				<option value="Bangladesh">Bangladesh</option>\n																				<option value="Barbados">Barbados</option>\n																				<option value="Belarus">Belarus</option>\n																				<option value="Belgium">Belgium</option>\n																				<option value="Belize">Belize</option>\n																				<option value="Benin">Benin</option>\n																				<option value="Bermuda">Bermuda</option>\n																				<option value="Bhutan">Bhutan</option>\n																				<option value="Bolivia">Bolivia</option>\n																				<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>\n																				<option value="Botswana">Botswana</option>\n																				<option value="Bouvet Island">Bouvet Island</option>\n																				<option value="Brazil">Brazil</option>\n																				<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>\n																				<option value="Brunei Darussalam">Brunei Darussalam</option>\n																				<option value="Bulgaria">Bulgaria</option>\n																				<option value="Burkina Faso">Burkina Faso</option>\n																				<option value="Burundi">Burundi</option>\n																				<option value="Cambodia">Cambodia</option>\n																				<option value="Cameroon">Cameroon</option>\n																				<option value="Canada">Canada</option>\n																				<option value="Cape Verde">Cape Verde</option>\n																				<option value="Cayman Islands">Cayman Islands</option>\n																				<option value="Central African Republic">Central African Republic</option>\n																				<option value="Chad">Chad</option>\n																				<option value="Chile">Chile</option>\n																				<option value="China">China</option>\n																				<option value="Christmas Island">Christmas Island</option>\n																				<option value="Cocos Islands">Cocos (Keeling) Islands</option>\n																				<option value="Colombia">Colombia</option>\n																				<option value="Comoros">Comoros</option>\n																				<option value="Congo">Congo</option>\n																				<option value="Congo">Congo, the Democratic Republic of the</option>\n																				<option value="Cook Islands">Cook Islands</option>\n																				<option value="Costa Rica">Costa Rica</option>\n																				<option value="Cota D\'Ivoire">Cote d\'Ivoire</option>\n																				<option value="Croatia">Croatia (Hrvatska)</option>\n																				<option value="Cuba">Cuba</option>\n																				<option value="Cyprus">Cyprus</option>\n																				<option value="Czech Republic">Czech Republic</option>\n																				<option value="Denmark">Denmark</option>\n																				<option value="Djibouti">Djibouti</option>\n																				<option value="Dominica">Dominica</option>\n																				<option value="Dominican Republic">Dominican Republic</option>\n																				<option value="East Timor">East Timor</option>\n																				<option value="Ecuador">Ecuador</option>\n																				<option value="Egypt">Egypt</option>\n																				<option value="El Salvador">El Salvador</option>\n																				<option value="Equatorial Guinea">Equatorial Guinea</option>\n																				<option value="Eritrea">Eritrea</option>\n																				<option value="Estonia">Estonia</option>\n																				<option value="Ethiopia">Ethiopia</option>\n																				<option value="Falkland Islands">Falkland Islands (Malvinas)</option>\n																				<option value="Faroe Islands">Faroe Islands</option>\n																				<option value="Fiji">Fiji</option>\n																				<option value="Finland">Finland</option>\n																				<option value="France">France</option>\n																				<option value="France Metropolitan">France, Metropolitan</option>\n																				<option value="French Guiana">French Guiana</option>\n																				<option value="French Polynesia">French Polynesia</option>\n																				<option value="French Southern Territories">French Southern Territories</option>\n																				<option value="Gabon">Gabon</option>\n																				<option value="Gambia">Gambia</option>\n																				<option value="Georgia">Georgia</option>\n																				<option value="Germany">Germany</option>\n																				<option value="Ghana">Ghana</option>\n																				<option value="Gibraltar">Gibraltar</option>\n																				<option value="Greece">Greece</option>\n																				<option value="Greenland">Greenland</option>\n																				<option value="Grenada">Grenada</option>\n																				<option value="Guadeloupe">Guadeloupe</option>\n																				<option value="Guam">Guam</option>\n																				<option value="Guatemala">Guatemala</option>\n																				<option value="Guinea">Guinea</option>\n																				<option value="Guinea-Bissau">Guinea-Bissau</option>\n																				<option value="Guyana">Guyana</option>\n																				<option value="Haiti">Haiti</option>\n																				<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>\n																				<option value="Holy See">Holy See (Vatican City State)</option>\n																				<option value="Honduras">Honduras</option>\n																				<option value="Hong Kong">Hong Kong</option>\n																				<option value="Hungary">Hungary</option>\n																				<option value="Iceland">Iceland</option>\n																				<option value="India">India</option>\n																				<option value="Indonesia">Indonesia</option>\n																				<option value="Iran">Iran (Islamic Republic of)</option>\n																				<option value="Iraq">Iraq</option>\n																				<option value="Ireland">Ireland</option>\n																				<option value="Israel">Israel</option>\n																				<option value="Italy">Italy</option>\n																				<option value="Jamaica">Jamaica</option>\n																				<option value="Japan">Japan</option>\n																				<option value="Jordan">Jordan</option>\n																				<option value="Kazakhstan">Kazakhstan</option>\n																				<option value="Kenya">Kenya</option>\n																				<option value="Kiribati">Kiribati</option>\n																				<option value="Democratic People\'s Republic of Korea">Korea, Democratic People\'s Republic of</option>\n																				<option value="Korea">Korea, Republic of</option>\n																				<option value="Kuwait">Kuwait</option>\n																				<option value="Kyrgyzstan">Kyrgyzstan</option>\n																				<option value="Lao">Lao People\'s Democratic Republic</option>\n																				<option value="Latvia">Latvia</option>\n																				<option value="Lebanon">Lebanon</option>\n																				<option value="Lesotho">Lesotho</option>\n																				<option value="Liberia">Liberia</option>\n																				<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>\n																				<option value="Liechtenstein">Liechtenstein</option>\n																				<option value="Lithuania">Lithuania</option>\n																				<option value="Luxembourg">Luxembourg</option>\n																				<option value="Macau">Macau</option>\n																				<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>\n																				<option value="Madagascar">Madagascar</option>\n																				<option value="Malawi">Malawi</option>\n																				<option value="Malaysia">Malaysia</option>\n																				<option value="Maldives">Maldives</option>\n																				<option value="Mali">Mali</option>\n																				<option value="Malta">Malta</option>\n																				<option value="Marshall Islands">Marshall Islands</option>\n																				<option value="Martinique">Martinique</option>\n																				<option value="Mauritania">Mauritania</option>\n																				<option value="Mauritius">Mauritius</option>\n																				<option value="Mayotte">Mayotte</option>\n																				<option value="Mexico">Mexico</option>\n																				<option value="Micronesia">Micronesia, Federated States of</option>\n																				<option value="Moldova">Moldova, Republic of</option>\n																				<option value="Monaco">Monaco</option>\n																				<option value="Mongolia">Mongolia</option>\n																				<option value="Montserrat">Montserrat</option>\n																				<option value="Morocco">Morocco</option>\n																				<option value="Mozambique">Mozambique</option>\n																				<option value="Myanmar">Myanmar</option>\n																				<option value="Namibia">Namibia</option>\n																				<option value="Nauru">Nauru</option>\n																				<option value="Nepal">Nepal</option>\n																				<option value="Netherlands">Netherlands</option>\n																				<option value="Netherlands Antilles">Netherlands Antilles</option>\n																				<option value="New Caledonia">New Caledonia</option>\n																				<option value="New Zealand">New Zealand</option>\n																				<option value="Nicaragua">Nicaragua</option>\n																				<option value="Niger">Niger</option>\n																				<option value="Nigeria">Nigeria</option>\n																				<option value="Niue">Niue</option>\n																				<option value="Norfolk Island">Norfolk Island</option>\n																				<option value="Northern Mariana Islands">Northern Mariana Islands</option>\n																				<option value="Norway">Norway</option>\n																				<option value="Oman">Oman</option>\n																				<option value="Pakistan">Pakistan</option>\n																				<option value="Palau">Palau</option>\n																				<option value="Panama">Panama</option>\n																				<option value="Papua New Guinea">Papua New Guinea</option>\n																				<option value="Paraguay">Paraguay</option>\n																				<option value="Peru">Peru</option>\n																				<option value="Philippines">Philippines</option>\n																				<option value="Pitcairn">Pitcairn</option>\n																				<option value="Poland">Poland</option>\n																				<option value="Portugal">Portugal</option>\n																				<option value="Puerto Rico">Puerto Rico</option>\n																				<option value="Qatar">Qatar</option>\n																				<option value="Reunion">Reunion</option>\n																				<option value="Romania">Romania</option>\n																				<option value="Russia">Russian Federation</option>\n																				<option value="Rwanda">Rwanda</option>\n																				<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>\n																				<option value="Saint LUCIA">Saint LUCIA</option>\n																				<option value="Saint Vincent">Saint Vincent and the Grenadines</option>\n																				<option value="Samoa">Samoa</option>\n																				<option value="San Marino">San Marino</option>\n																				<option value="Sao Tome and Principe">Sao Tome and Principe</option>\n																				<option value="Saudi Arabia">Saudi Arabia</option>\n																				<option value="Senegal">Senegal</option>\n																				<option value="Seychelles">Seychelles</option>\n																				<option value="Sierra">Sierra Leone</option>\n																				<option value="Singapore">Singapore</option>\n																				<option value="Slovakia">Slovakia (Slovak Republic)</option>\n																				<option value="Slovenia">Slovenia</option>\n																				<option value="Solomon Islands">Solomon Islands</option>\n																				<option value="Somalia">Somalia</option>\n																				<option value="South Africa">South Africa</option>\n																				<option value="South Georgia">South Georgia and the South Sandwich Islands</option>\n																				<option value="Span">Spain</option>\n																				<option value="SriLanka">Sri Lanka</option>\n																				<option value="St. Helena">St. Helena</option>\n																				<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>\n																				<option value="Sudan">Sudan</option>\n																				<option value="Suriname">Suriname</option>\n																				<option value="Svalbard">Svalbard and Jan Mayen Islands</option>\n																				<option value="Swaziland">Swaziland</option>\n																				<option value="Sweden">Sweden</option>\n																				<option value="Switzerland">Switzerland</option>\n																				<option value="Syria">Syrian Arab Republic</option>\n																				<option value="Taiwan">Taiwan, Province of China</option>\n																				<option value="Tajikistan">Tajikistan</option>\n																				<option value="Tanzania">Tanzania, United Republic of</option>\n																				<option value="Thailand">Thailand</option>\n																				<option value="Togo">Togo</option>\n																				<option value="Tokelau">Tokelau</option>\n																				<option value="Tonga">Tonga</option>\n																				<option value="Trinidad and Tobago">Trinidad and Tobago</option>\n																				<option value="Tunisia">Tunisia</option>\n																				<option value="Turkey">Turkey</option>\n																				<option value="Turkmenistan">Turkmenistan</option>\n																				<option value="Turks and Caicos">Turks and Caicos Islands</option>\n																				<option value="Tuvalu">Tuvalu</option>\n																				<option value="Uganda">Uganda</option>\n																				<option value="Ukraine">Ukraine</option>\n																				<option value="United Arab Emirates">United Arab Emirates</option>\n																				<option value="United Kingdom">United Kingdom</option>\n																				<option value="United States">United States</option>\n																				<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>\n																				<option value="Uruguay">Uruguay</option>\n																				<option value="Uzbekistan">Uzbekistan</option>\n																				<option value="Vanuatu">Vanuatu</option>\n																				<option value="Venezuela">Venezuela</option>\n																				<option value="Vietnam">Viet Nam</option>\n																				<option value="Virgin Islands (British)">Virgin Islands (British)</option>\n																				<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>\n																				<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>\n																				<option value="Western Sahara">Western Sahara</option>\n																				<option value="Yemen">Yemen</option>\n																				<option value="Yugoslavia">Yugoslavia</option>\n																				<option value="Zambia">Zambia</option>\n																				<option value="Zimbabwe">Zimbabwe</option>\n																			</select>\n																		</div>\n																		<!--<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'nationality\'].hasError(\'required\') && changeuserProfileForm.controls[\'nationality\'].touched">* Nationality is required!</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'nationality\'].hasError(\'minlength\') && changeuserProfileForm.controls[\'nationality\'].touched">* Minimum length is 3!</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'nationality\'].hasError(\'pattern\') && changeuserProfileForm.controls[\'nationality\'].touched">* Only alphabetsallowed !</div>-->\n																	</div>\n																	\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label class="pl-2" for="last_name"><span class="text-danger font-weight-bold ">*</span> Phone Number</label>\n																			<int-phone-prefix [locale]="\'en\'" name="phonenumber" id="phonenumber" [formControl]="changeuserProfileForm.controls[\'phonenumber\']" [ngClass]="{\'error-border\':!changeuserProfileForm.controls[\'phonenumber\'].valid}"></int-phone-prefix>\n																		</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'phonenumber\'].hasError(\'required\') && changeuserProfileForm.controls[\'phonenumber\'].touched">* Phone Number is required!</div>\n																		<!--<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'phonenumber\'].hasError(\'minlength\') && changeuserProfileForm.controls[\'phonenumber\'].touched">* Minimum length is 6!</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'phonenumber\'].hasError(\'pattern\') && changeuserProfileForm.controls[\'phonenumber\'].touched">* Enter Digits only!</div>-->\n																	</div>\n																	\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="dob" class="pl-2"><span class="text-danger font-weight-bold ">*</span> Date Of Birth</label>\n																			<input type="date" class="form-control contact-form-input" id="dob" placeholder="Date Of Birth" name="dob" [formControl]="changeuserProfileForm.controls[\'dob\']" required>\n																		</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'dob\'].hasError(\'required\') && changeuserProfileForm.controls[\'dob\'].touched">* Date Of Birth is required!</div>\n																	</div>\n																	\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="dob" class="pl-2"><span class="text-danger font-weight-bold ">*</span> Gender</label>\n																			<div class="row ml-0 mr-0 mt-3 edit-radio">\n																				<div class="col-lg-6 col-md-6 col-6 form-group m-0">\n																					<input type="radio" id="Male" name="radio-group" value="male" [formControl]="changeuserProfileForm.controls[\'radio-group\']" [checked]="viewprofiledata?.data.gender == \'male\'">\n																					<label for="Male">Male</label>\n																				</div>\n																				<div class="col-lg-6 col-md-6 col-6 m-0 form-group">\n																					<input type="radio" id="Female" name="radio-group" value="female" [formControl]="changeuserProfileForm.controls[\'radio-group\']" [checked]="viewprofiledata?.data.gender == \'female\'">\n																					<label for="Female">Female</label>\n																				</div>\n																			</div>\n																			<!--<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'radio-group\'].hasError(\'required\') && changeuserProfileForm.controls[\'radio-group\'].touched">* Gender is required!</div>-->\n																		</div>\n																	</div>\n																	\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-3 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="address1" class="pl-2"><span class="text-danger font-weight-bold ">*</span> Address 1</label>\n																			<input type="text" class="form-control contact-form-input" id="address1" placeholder="Address 1" name="address1" [formControl]="changeuserProfileForm.controls[\'address1\']" [ngClass]="{\'error-border\':!changeuserProfileForm.controls[\'address1\'].valid}">\n																		</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'address1\'].hasError(\'required\') && changeuserProfileForm.controls[\'address1\'].touched">* Address is required!</div>\n																	</div>\n																	\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-3 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="address2" class="pl-2">Address 2</label>\n																			<input type="text" class="form-control contact-form-input" id="address2" placeholder="Address 2" value="{{viewprofiledata?.data.address[1]}}">\n																		</div>\n																	</div>\n\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="city" class="pl-2"><span class="text-danger font-weight-bold ">*</span> City</label>\n																			<input type="text" class="form-control contact-form-input" id="city" placeholder="City" name="city" [formControl]="changeuserProfileForm.controls[\'city\']" [ngClass]="{\'error-border\':!changeuserProfileForm.controls[\'city\'].valid}">\n																		</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'city\'].hasError(\'required\') && changeuserProfileForm.controls[\'city\'].touched">* City is required!</div>\n																		<div class="error-box text-left" *ngIf="changeuserProfileForm.controls[\'city\'].hasError(\'pattern\') && changeuserProfileForm.controls[\'city\'].touched">* Only character allowed!</div>\n																	</div>\n\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="state" class="pl-2">State</label>\n																			<input type="text" class="form-control contact-form-input" id="state" placeholder="State" name="state" [formControl]="changeuserProfileForm.controls[\'state\']" >\n																		</div>\n																	</div>\n\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="zipcode" class="pl-2">Zip Code</label>\n																			<input type="text" class="form-control contact-form-input" id="zipcode" placeholder="Zip Code" name="zipcode" [formControl]="changeuserProfileForm.controls[\'zipcode\']">\n																		</div>\n																	</div>\n\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="Country" class="pl-2">Country</label>\n																			<select class="form-control contact-form-input" id="Country" [formControl]="changeuserProfileForm.controls[\'country\']">\n																				<option value="Afghanistan">Afghanistan</option>\n																				<option value="Albania">Albania</option>\n																				<option value="Algeria">Algeria</option>\n																				<option value="American Samoa">American Samoa</option>\n																				<option value="Andorra">Andorra</option>\n																				<option value="Angola">Angola</option>\n																				<option value="Anguilla">Anguilla</option>\n																				<option value="Antartica">Antarctica</option>\n																				<option value="Antigua and Barbuda">Antigua and Barbuda</option>\n																				<option value="Argentina">Argentina</option>\n																				<option value="Armenia">Armenia</option>\n																				<option value="Aruba">Aruba</option>\n																				<option value="Australia">Australia</option>\n																				<option value="Austria">Austria</option>\n																				<option value="Azerbaijan">Azerbaijan</option>\n																				<option value="Bahamas">Bahamas</option>\n																				<option value="Bahrain">Bahrain</option>\n																				<option value="Bangladesh">Bangladesh</option>\n																				<option value="Barbados">Barbados</option>\n																				<option value="Belarus">Belarus</option>\n																				<option value="Belgium">Belgium</option>\n																				<option value="Belize">Belize</option>\n																				<option value="Benin">Benin</option>\n																				<option value="Bermuda">Bermuda</option>\n																				<option value="Bhutan">Bhutan</option>\n																				<option value="Bolivia">Bolivia</option>\n																				<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>\n																				<option value="Botswana">Botswana</option>\n																				<option value="Bouvet Island">Bouvet Island</option>\n																				<option value="Brazil">Brazil</option>\n																				<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>\n																				<option value="Brunei Darussalam">Brunei Darussalam</option>\n																				<option value="Bulgaria">Bulgaria</option>\n																				<option value="Burkina Faso">Burkina Faso</option>\n																				<option value="Burundi">Burundi</option>\n																				<option value="Cambodia">Cambodia</option>\n																				<option value="Cameroon">Cameroon</option>\n																				<option value="Canada">Canada</option>\n																				<option value="Cape Verde">Cape Verde</option>\n																				<option value="Cayman Islands">Cayman Islands</option>\n																				<option value="Central African Republic">Central African Republic</option>\n																				<option value="Chad">Chad</option>\n																				<option value="Chile">Chile</option>\n																				<option value="China">China</option>\n																				<option value="Christmas Island">Christmas Island</option>\n																				<option value="Cocos Islands">Cocos (Keeling) Islands</option>\n																				<option value="Colombia">Colombia</option>\n																				<option value="Comoros">Comoros</option>\n																				<option value="Congo">Congo</option>\n																				<option value="Congo">Congo, the Democratic Republic of the</option>\n																				<option value="Cook Islands">Cook Islands</option>\n																				<option value="Costa Rica">Costa Rica</option>\n																				<option value="Cota D\'Ivoire">Cote d\'Ivoire</option>\n																				<option value="Croatia">Croatia (Hrvatska)</option>\n																				<option value="Cuba">Cuba</option>\n																				<option value="Cyprus">Cyprus</option>\n																				<option value="Czech Republic">Czech Republic</option>\n																				<option value="Denmark">Denmark</option>\n																				<option value="Djibouti">Djibouti</option>\n																				<option value="Dominica">Dominica</option>\n																				<option value="Dominican Republic">Dominican Republic</option>\n																				<option value="East Timor">East Timor</option>\n																				<option value="Ecuador">Ecuador</option>\n																				<option value="Egypt">Egypt</option>\n																				<option value="El Salvador">El Salvador</option>\n																				<option value="Equatorial Guinea">Equatorial Guinea</option>\n																				<option value="Eritrea">Eritrea</option>\n																				<option value="Estonia">Estonia</option>\n																				<option value="Ethiopia">Ethiopia</option>\n																				<option value="Falkland Islands">Falkland Islands (Malvinas)</option>\n																				<option value="Faroe Islands">Faroe Islands</option>\n																				<option value="Fiji">Fiji</option>\n																				<option value="Finland">Finland</option>\n																				<option value="France">France</option>\n																				<option value="France Metropolitan">France, Metropolitan</option>\n																				<option value="French Guiana">French Guiana</option>\n																				<option value="French Polynesia">French Polynesia</option>\n																				<option value="French Southern Territories">French Southern Territories</option>\n																				<option value="Gabon">Gabon</option>\n																				<option value="Gambia">Gambia</option>\n																				<option value="Georgia">Georgia</option>\n																				<option value="Germany">Germany</option>\n																				<option value="Ghana">Ghana</option>\n																				<option value="Gibraltar">Gibraltar</option>\n																				<option value="Greece">Greece</option>\n																				<option value="Greenland">Greenland</option>\n																				<option value="Grenada">Grenada</option>\n																				<option value="Guadeloupe">Guadeloupe</option>\n																				<option value="Guam">Guam</option>\n																				<option value="Guatemala">Guatemala</option>\n																				<option value="Guinea">Guinea</option>\n																				<option value="Guinea-Bissau">Guinea-Bissau</option>\n																				<option value="Guyana">Guyana</option>\n																				<option value="Haiti">Haiti</option>\n																				<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>\n																				<option value="Holy See">Holy See (Vatican City State)</option>\n																				<option value="Honduras">Honduras</option>\n																				<option value="Hong Kong">Hong Kong</option>\n																				<option value="Hungary">Hungary</option>\n																				<option value="Iceland">Iceland</option>\n																				<option value="India">India</option>\n																				<option value="Indonesia">Indonesia</option>\n																				<option value="Iran">Iran (Islamic Republic of)</option>\n																				<option value="Iraq">Iraq</option>\n																				<option value="Ireland">Ireland</option>\n																				<option value="Israel">Israel</option>\n																				<option value="Italy">Italy</option>\n																				<option value="Jamaica">Jamaica</option>\n																				<option value="Japan">Japan</option>\n																				<option value="Jordan">Jordan</option>\n																				<option value="Kazakhstan">Kazakhstan</option>\n																				<option value="Kenya">Kenya</option>\n																				<option value="Kiribati">Kiribati</option>\n																				<option value="Democratic People\'s Republic of Korea">Korea, Democratic People\'s Republic of</option>\n																				<option value="Korea">Korea, Republic of</option>\n																				<option value="Kuwait">Kuwait</option>\n																				<option value="Kyrgyzstan">Kyrgyzstan</option>\n																				<option value="Lao">Lao People\'s Democratic Republic</option>\n																				<option value="Latvia">Latvia</option>\n																				<option value="Lebanon">Lebanon</option>\n																				<option value="Lesotho">Lesotho</option>\n																				<option value="Liberia">Liberia</option>\n																				<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>\n																				<option value="Liechtenstein">Liechtenstein</option>\n																				<option value="Lithuania">Lithuania</option>\n																				<option value="Luxembourg">Luxembourg</option>\n																				<option value="Macau">Macau</option>\n																				<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>\n																				<option value="Madagascar">Madagascar</option>\n																				<option value="Malawi">Malawi</option>\n																				<option value="Malaysia">Malaysia</option>\n																				<option value="Maldives">Maldives</option>\n																				<option value="Mali">Mali</option>\n																				<option value="Malta">Malta</option>\n																				<option value="Marshall Islands">Marshall Islands</option>\n																				<option value="Martinique">Martinique</option>\n																				<option value="Mauritania">Mauritania</option>\n																				<option value="Mauritius">Mauritius</option>\n																				<option value="Mayotte">Mayotte</option>\n																				<option value="Mexico">Mexico</option>\n																				<option value="Micronesia">Micronesia, Federated States of</option>\n																				<option value="Moldova">Moldova, Republic of</option>\n																				<option value="Monaco">Monaco</option>\n																				<option value="Mongolia">Mongolia</option>\n																				<option value="Montserrat">Montserrat</option>\n																				<option value="Morocco">Morocco</option>\n																				<option value="Mozambique">Mozambique</option>\n																				<option value="Myanmar">Myanmar</option>\n																				<option value="Namibia">Namibia</option>\n																				<option value="Nauru">Nauru</option>\n																				<option value="Nepal">Nepal</option>\n																				<option value="Netherlands">Netherlands</option>\n																				<option value="Netherlands Antilles">Netherlands Antilles</option>\n																				<option value="New Caledonia">New Caledonia</option>\n																				<option value="New Zealand">New Zealand</option>\n																				<option value="Nicaragua">Nicaragua</option>\n																				<option value="Niger">Niger</option>\n																				<option value="Nigeria">Nigeria</option>\n																				<option value="Niue">Niue</option>\n																				<option value="Norfolk Island">Norfolk Island</option>\n																				<option value="Northern Mariana Islands">Northern Mariana Islands</option>\n																				<option value="Norway">Norway</option>\n																				<option value="Oman">Oman</option>\n																				<option value="Pakistan">Pakistan</option>\n																				<option value="Palau">Palau</option>\n																				<option value="Panama">Panama</option>\n																				<option value="Papua New Guinea">Papua New Guinea</option>\n																				<option value="Paraguay">Paraguay</option>\n																				<option value="Peru">Peru</option>\n																				<option value="Philippines">Philippines</option>\n																				<option value="Pitcairn">Pitcairn</option>\n																				<option value="Poland">Poland</option>\n																				<option value="Portugal">Portugal</option>\n																				<option value="Puerto Rico">Puerto Rico</option>\n																				<option value="Qatar">Qatar</option>\n																				<option value="Reunion">Reunion</option>\n																				<option value="Romania">Romania</option>\n																				<option value="Russia">Russian Federation</option>\n																				<option value="Rwanda">Rwanda</option>\n																				<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> \n																				<option value="Saint LUCIA">Saint LUCIA</option>\n																				<option value="Saint Vincent">Saint Vincent and the Grenadines</option>\n																				<option value="Samoa">Samoa</option>\n																				<option value="San Marino">San Marino</option>\n																				<option value="Sao Tome and Principe">Sao Tome and Principe</option> \n																				<option value="Saudi Arabia">Saudi Arabia</option>\n																				<option value="Senegal">Senegal</option>\n																				<option value="Seychelles">Seychelles</option>\n																				<option value="Sierra">Sierra Leone</option>\n																				<option value="Singapore">Singapore</option>\n																				<option value="Slovakia">Slovakia (Slovak Republic)</option>\n																				<option value="Slovenia">Slovenia</option>\n																				<option value="Solomon Islands">Solomon Islands</option>\n																				<option value="Somalia">Somalia</option>\n																				<option value="South Africa">South Africa</option>\n																				<option value="South Georgia">South Georgia and the South Sandwich Islands</option>\n																				<option value="Span">Spain</option>\n																				<option value="SriLanka">Sri Lanka</option>\n																				<option value="St. Helena">St. Helena</option>\n																				<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>\n																				<option value="Sudan">Sudan</option>\n																				<option value="Suriname">Suriname</option>\n																				<option value="Svalbard">Svalbard and Jan Mayen Islands</option>\n																				<option value="Swaziland">Swaziland</option>\n																				<option value="Sweden">Sweden</option>\n																				<option value="Switzerland">Switzerland</option>\n																				<option value="Syria">Syrian Arab Republic</option>\n																				<option value="Taiwan">Taiwan, Province of China</option>\n																				<option value="Tajikistan">Tajikistan</option>\n																				<option value="Tanzania">Tanzania, United Republic of</option>\n																				<option value="Thailand">Thailand</option>\n																				<option value="Togo">Togo</option>\n																				<option value="Tokelau">Tokelau</option>\n																				<option value="Tonga">Tonga</option>\n																				<option value="Trinidad and Tobago">Trinidad and Tobago</option>\n																				<option value="Tunisia">Tunisia</option>\n																				<option value="Turkey">Turkey</option>\n																				<option value="Turkmenistan">Turkmenistan</option>\n																				<option value="Turks and Caicos">Turks and Caicos Islands</option>\n																				<option value="Tuvalu">Tuvalu</option>\n																				<option value="Uganda">Uganda</option>\n																				<option value="Ukraine">Ukraine</option>\n																				<option value="United Arab Emirates">United Arab Emirates</option>\n																				<option value="United Kingdom">United Kingdom</option>\n																				<option value="United States">United States</option>\n																				<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>\n																				<option value="Uruguay">Uruguay</option>\n																				<option value="Uzbekistan">Uzbekistan</option>\n																				<option value="Vanuatu">Vanuatu</option>\n																				<option value="Venezuela">Venezuela</option>\n																				<option value="Vietnam">Viet Nam</option>\n																				<option value="Virgin Islands (British)">Virgin Islands (British)</option>\n																				<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>\n																				<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>\n																				<option value="Western Sahara">Western Sahara</option>\n																				<option value="Yemen">Yemen</option>\n																				<option value="Yugoslavia">Yugoslavia</option>\n																				<option value="Zambia">Zambia</option>\n																				<option value="Zimbabwe">Zimbabwe</option>\n																			</select>\n																			<!--<div class="error-box" *ngIf="changeuserProfileForm.controls[\'country\'].hasError(\'required\') && changeuserProfileForm.controls[\'country\'].touched">* Select country!</div>-->\n																		</div>\n																	</div>\n																	\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label class="pl-2">Payment Email</label>\n																			<input type="email" name="payment_email" id="paymentEmail" class="form-control contact-form-input" placeholder="Payment Email" [formControl]="changeuserProfileForm.controls[\'payment_email\']" (change)="checkPaypalEmail()"> <!-- #paypalEmail [ngClass]="{\'error-border\':!changeuserProfileForm.controls[\'payment_email\'].valid}"-->\n																			<!--<div class="error-box" *ngIf="changeuserProfileForm.controls[\'payment_email\'].hasError(\'email\') && changeuserProfileForm.controls[\'payment_email\'].touched">* Email is not valid!</div>-->\n																			<div class="error-box" *ngIf="verificationResponsebusiness?.responseEnvelope.ack == \'Failure\'">Please enter valid Paypal email address</div>\n																		</div>\n																	</div>\n																	\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label class="pl-2"><span class="text-danger font-weight-bold ">*</span> Email</label>\n																			<input type="email" name="email" id="useremail" class="form-control contact-form-input" placeholder="Email" [formControl]="changeuserProfileForm.controls[\'email\']" [ngClass]="{\'error-border\':!changeuserProfileForm.controls[\'email\'].valid}" email="true"> <!-- #paypalEmail "-->\n																			<div class="error-box" *ngIf="changeuserProfileForm.controls[\'email\'].hasError(\'email\') && changeuserProfileForm.controls[\'email\'].touched">* Email is not valid!</div>\n																		</div>\n																	</div>\n																</div>\n															</div>\n															<div class="contact_form_button mt-3">\n																<div class="error-box text-left" *ngIf="selectdValue == true">\n																	<span id="showError">Select Value</span>\n																</div>\n																<div class="text-left mb-3">\n																	<span class="text-danger" *ngIf="editProfiledata?.user.status == \'fail\'">{{editProfiledata?.user.msg}}</span>\n																	<span class="text-success" *ngIf="editProfiledata?.user.status == \'success\'">{{editProfiledata?.user.msg}}</span>\n																</div>\n																<div class="row m-0">\n																	<div class="col-lg-12 col-md-12 col-12 pt-3 pb-3 pt-lg-0 pb-lg-0 pl-2 pr-2">\n																		<button type="submit" class="btn theme-light-btn" (click)="edituserProfile(changeuserProfileForm)" [disabled]="!changeuserProfileForm.valid">Submit</button>\n																	</div>\n																</div>\n															</div>\n														</form>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="col-lg-6 col-md-12 col-12 pt-3 pb-3 feedback-rating-profile">\n										<div class="contact_form">\n											<div class="row m-0">\n												<div class="col-lg-12">\n													<div class="contact_form_container">\n														<div class="contact_form_title mt-2 mb-4"><h5>Change User Name</h5>\n														</div>\n														<form id="edit-username_form" [formGroup]="changeuserNameForm" method="post" role="form">\n															<div class="contact_form_inputs">\n																<div class="row m-0">\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="user_name-edit" class="pl-2 setFont-size">User Name</label>\n																			<input type="text" class="form-control contact-form-input" id="user_name-edit" placeholder="User Name" name="username" [formControl]="changeuserNameForm.controls[\'username\']" [ngClass]="{\'error-border\':!changeuserNameForm.controls[\'username\'].valid}">\n																		</div>\n																		<div class="error-box text-left" *ngIf="changeuserNameForm.controls[\'username\'].hasError(\'required\') && changeuserNameForm.controls[\'username\'].touched">* User name is required!</div>\n																		<div class="error-box text-left" *ngIf="changeuserNameForm.controls[\'username\'].hasError(\'maxlength\') && changeuserNameForm.controls[\'username\'].touched">* Maximum User name length is 30!</div>\n																		<div class="text-left setFont-size" *ngIf="changeusernamedata?.status == \'fail\'">{{changeusernamedata?.msg}}.</div>\n																		<div class="text-left setFont-size" *ngIf="changeusernamedata?.status == \'success\'">{{changeusernamedata?.msg}}.</div>\n																	</div>\n																</div>\n															</div>\n															<div class="contact_form_button mt-3">\n																<div class="row m-0">\n																	<div class="col-lg-12 col-md-12 col-12 pt-3 pb-3 pt-lg-0 pb-lg-0 pl-2 pr-2">\n																		<button type="submit" class="btn theme-light-btn" (click)="changeUserName()" [disabled]="!changeuserNameForm.valid">Submit</button>\n																	</div>\n																</div>\n															</div>\n														</form>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div class="contact_form mt-lg-4">\n											<div class="row m-0">\n												<div class="col-lg-12">\n													<div class="contact_form_container">\n														<div class="contact_form_title mt-2 mb-4"><h5>Change Password</h5></div>\n														<form [formGroup]="changePasswordForm" id="edit-password_form" method="post" role="form">\n															<div class="contact_form_inputs">\n																<div class="row m-0">\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="current-password" class="pl-2 setFont-size">Current Password</label>\n																			<input type="password" class="form-control contact-form-input" id="current-password" name="currentpassword" placeholder="Current Password" [formControl]="changePasswordForm.controls[\'currentpassword\']" [ngClass]="{\'error-border\':!changePasswordForm.controls[\'currentpassword\'].valid}">\n																		</div>\n																		<div class="error-box text-left" *ngIf="changePasswordForm.controls[\'currentpassword\'].hasError(\'required\') && changePasswordForm.controls[\'currentpassword\'].touched">* Password is required!</div>\n																		<div class="error-box text-left" *ngIf="changePasswordForm.controls[\'currentpassword\'].hasError(\'minlength\') && changePasswordForm.controls[\'currentpassword\'].touched">* Minimum password length is 6!</div>\n																	</div>\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="newPassword" class="pl-2 setFont-size">New Password</label>\n																			<input type="password" class="form-control contact-form-input" id="newPassword" placeholder="**********" name="newpassword" [formControl]="changePasswordForm.controls[\'newpassword\']" [ngClass]="{\'error-border\':!changePasswordForm.controls[\'newpassword\'].valid}">\n																		</div>\n																		<div class="error-box text-left" *ngIf="changePasswordForm.controls[\'newpassword\'].hasError(\'required\') && changePasswordForm.controls[\'newpassword\'].touched">* Password is required!</div>\n																		<div class="error-box text-left" *ngIf="changePasswordForm.controls[\'newpassword\'].hasError(\'minlength\') && changePasswordForm.controls[\'newpassword\'].touched">* Minimum password length is 6!</div>\n																	</div>\n																	<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 pt-lg-2 pb-lg-0 pl-2 pr-2">\n																		<div class="form-group text-left">\n																			<label for="ConfirmnewPassword" class="pl-2 setFont-size">Confirm New Password</label>\n																			<input type="password" class="form-control contact-form-input" id="ConfirmnewPassword" placeholder="**********" name="confirmpassword" [formControl]="changePasswordForm.controls[\'confirmpassword\']" [ngClass]="{\'error-border\':!changePasswordForm.controls[\'confirmpassword\'].valid}">\n																		</div>\n																		<div class="error-box text-left" *ngIf="changePasswordForm.value.newpassword != changePasswordForm.value.confirmpassword && changePasswordForm.controls[\'confirmpassword\'].touched">* Password Not Match</div>\n																	</div>\n																</div>\n															</div>\n															<div class="contact_form_button mt-3">\n																<div class="row m-0">\n																	<div class="text-left pt-3 pb-3 setFont-size" *ngIf="changepassworddata?.status == \'fail\'">{{changepassworddata?.msg}}.</div>\n																	<div class="text-left pt-3 pb-3 setFont-size" *ngIf="changepassworddata?.status == \'success\'">{{changepassworddata?.msg}}.</div>\n																		\n																	<div class="col-lg-12 col-md-12 col-12 pt-3 pb-3 pt-lg-0 pb-lg-0 pl-2 pr-2">\n																		<button type="submit" class="btn theme-light-btn" (click)="changePassword()" [disabled]="!changePasswordForm.valid">Submit</button>\n																	</div>\n																</div>\n															</div>\n														</form>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div class="contact_form cancel-btn-div text-lg-right text-md-right text-center">\n											<div class="row m-0">\n												<div class="col-lg-12 col-md-12 col-12">\n													<div class="contact_form_button edit-profile-cancel">\n														<button type="submit" class="btn theme-dark-btn mt-lg-0 mt-md-0 mt-2" (click)="closeEditProfile()">\n															Cancel\n														</button>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n							<div class="row m-0 item-specification mt-4">\n								<div class="col-lg-6 col-md-6 col-8 text-left p-0">\n									<h5>Items for sale ({{activeItemdata?.data.length}})</h5>\n								</div>\n								<div class="col-lg-6 col-md-6 col-4 text-right p-0 setFont-size">\n									<span><a (click)="showAllActiveItem()">See all items</a></span>\n								</div>\n								<div [ngClass]="{\'col-lg-2 col-md-4 col-6 border\' : i < 6}" *ngFor="let activeitm of activeItemdata?.data;let i = index">\n									<a (click)="gotoProductdetails(activeitm?.product_id)" *ngIf="i < 6">\n										<img src="{{trandingImgUrl}}{{activeitm?.product_id}}/S/{{activeitm?.photos[0]}}" class="img-fluid">\n										<h6 class="mt-3 item-for-sale-h6">{{(activeitm?.title.length > 15)? (activeitm?.title | slice:0:15)+\'...\':(activeitm?.title)}}</h6>\n										<p class="text-left">\n											<span class="mr-4 dollarcancle">{{activeitm?.final_price}} AED</span>\n											<span class="ml-4 dollaroff">{{activeitm?.quantity}} Left</span>\n										</p>\n									</a>\n								</div>\n\n								<div class="col-lg-12 col-md-12 col-12 text-left p-0 pt-2 mt-4 border-top-following">\n									<h5 class="mb-4">Following ({{followingdata?.data.length}})</h5>\n									<h6>Members</h6>\n									<div class="row m-0 setFont-size" *ngIf="followingdata?.data.length > 0;else showerrorFollowing">\n										<div class="col-lg-3 col-md-4 col-12 p-0" *ngFor="let folowindata of followingdata?.data">\n											<div class="row m-0 border-bottom-following p-2 mr-3">\n												<div class="col-lg-3 col-md-4 col-4 p-0">\n													<img *ngIf="folowindata?.profile_pic != \'\'" src="{{userImg}}{{folowindata?.user_id}}/{{folowindata?.profile_pic}}" class="img-fluid following-members" alt="{{folowindata?.display_name}}" width="65px" height="65px">\n													<img *ngIf="folowindata?.profile_pic == \'\'" src="assets/images/user_placeholder.png" class="img-fluid following-members" alt="{{folowindata?.display_name}}" width="65px" height="65px">\n												</div>\n												<div class="col-lg-9 col-md-8 col-8 pt-2 pl-0 pr-0">\n													<h6 class="mb-2"><a class="text-primary" (click)="showuserProfilefunc(folowindata?.user_id)">{{folowindata?.display_name}}</a></h6>\n													<p class="mb-2">{{folowindata?.follower_cnt}} followers</p>\n												</div>\n											</div>\n										</div>\n									</div>\n									<ng-template #showerrorFollowing>\n										<div class="row m-0">\n											<div class="col-lg-12 col-md-12 col-12 p-0 text-center">\n												No Following available\n											</div>\n										</div>\n									</ng-template>\n								</div>\n								<div class="col-lg-12 col-md-12 col-12 text-left p-0 pt-2 mt-4 border-top-following">\n									<h5 class="mb-4"><span *ngIf="getId == localItem?.id"><b>Your</b></span> followers ({{followerdata?.data.length}})</h5>\n									<div class="row m-0">\n										<div class="col-lg-12 col-md-12 col-12 p-0">\n											<div class="row m-0" *ngIf="followerdata?.data.length > 0;else showErrorfollowers">\n												<div *ngFor="let folw of followerdata?.data" class="col-lg-1 col-md-2 col-3 p-0 text-center">\n													<a data-toggle="tooltip" title="{{folw?.display_name}}" *ngIf="folw?.profile_pic != \'\';else showuserpic" (click)="showuserProfilefunc(folw?.user_id)">\n														<img src="{{userImg}}{{folw?.user_id}}/{{folw?.profile_pic}}" class="img-fluid your-followers-img m-1">\n														<p class="m-0 setFont-size">{{folw?.display_name}}</p>\n													</a>\n													<ng-template #showuserpic>\n														<a data-toggle="tooltip" title="{{folw?.display_name}}" (click)="showuserProfilefunc(folw?.user_id)">\n															<img src="assets/images/user_placeholder.png" class="img-fluid your-followers-img m-1">\n															<p class="m-0 setFont-size">{{folw?.display_name}}</p>\n														</a>\n													</ng-template>\n												</div>\n											</div>\n											<ng-template #showErrorfollowers>\n												<div class="row m-0">\n													<div class="col-lg-12 col-md-12 col-12 p-0 text-center">\n														No Followers available\n													</div>\n												</div>\n											</ng-template>\n										</div>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n\n				<!--================Footer Area =================-->\n			<footer-page></footer-page>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/seller-my-account/user-profile/user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ })

});
//# sourceMappingURL=12.js.map