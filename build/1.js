webpackJsonp([1],{

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerMyAccountPageModule", function() { return SellerMyAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seller_my_account__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_pagination__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_intl_phone__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_geoautocomplete__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_pipes_module__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SellerMyAccountPageModule = /** @class */ (function () {
    function SellerMyAccountPageModule() {
    }
    SellerMyAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seller_my_account__["a" /* SellerMyAccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__seller_my_account__["a" /* SellerMyAccountPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng4_intl_phone__["a" /* InternationalPhoneModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng4_geoautocomplete__["a" /* Ng4GeoautocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], SellerMyAccountPageModule);
    return SellerMyAccountPageModule;
}());

//# sourceMappingURL=seller-my-account.module.js.map

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var PaginationService = (function () {
    function PaginationService() {
        this.change = new core_1.EventEmitter();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());
exports.PaginationService = PaginationService;


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

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var pagination_service_1 = __webpack_require__(757);
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: config.itemsPerPage || 0,
            currentPage: config.currentPage || 1,
            totalItems: config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: pagination_service_1.PaginationService, },
    ]; };
    return PaginatePipe;
}());
exports.PaginatePipe = PaginatePipe;


/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var template_1 = __webpack_require__(771);
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new core_1.EventEmitter();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'pagination-controls',
                    template: template_1.DEFAULT_TEMPLATE,
                    styles: [template_1.DEFAULT_STYLES],
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    encapsulation: core_1.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: core_1.Input },],
        'maxSize': [{ type: core_1.Input },],
        'directionLinks': [{ type: core_1.Input },],
        'autoHide': [{ type: core_1.Input },],
        'previousLabel': [{ type: core_1.Input },],
        'nextLabel': [{ type: core_1.Input },],
        'screenReaderPaginationLabel': [{ type: core_1.Input },],
        'screenReaderPageLabel': [{ type: core_1.Input },],
        'screenReaderCurrentLabel': [{ type: core_1.Input },],
        'pageChange': [{ type: core_1.Output },],
    };
    return PaginationControlsComponent;
}());
exports.PaginationControlsComponent = PaginationControlsComponent;


/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var pagination_service_1 = __webpack_require__(757);
/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new core_1.EventEmitter();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: pagination_service_1.PaginationService, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: core_1.Input },],
        'maxSize': [{ type: core_1.Input },],
        'pageChange': [{ type: core_1.Output },],
    };
    return PaginationControlsDirective;
}());
exports.PaginationControlsDirective = PaginationControlsDirective;


/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(770));


/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(29);
var paginate_pipe_1 = __webpack_require__(766);
var pagination_service_1 = __webpack_require__(757);
var pagination_controls_component_1 = __webpack_require__(767);
var pagination_controls_directive_1 = __webpack_require__(768);
var pagination_service_2 = __webpack_require__(757);
exports.PaginationService = pagination_service_2.PaginationService;
var pagination_controls_component_2 = __webpack_require__(767);
exports.PaginationControlsComponent = pagination_controls_component_2.PaginationControlsComponent;
var pagination_controls_directive_2 = __webpack_require__(768);
exports.PaginationControlsDirective = pagination_controls_directive_2.PaginationControlsDirective;
var paginate_pipe_2 = __webpack_require__(766);
exports.PaginatePipe = paginate_pipe_2.PaginatePipe;
var Ng2PaginationModule = (function () {
    function Ng2PaginationModule() {
    }
    Ng2PaginationModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        paginate_pipe_1.PaginatePipe,
                        pagination_controls_component_1.PaginationControlsComponent,
                        pagination_controls_directive_1.PaginationControlsDirective
                    ],
                    providers: [pagination_service_1.PaginationService],
                    exports: [paginate_pipe_1.PaginatePipe, pagination_controls_component_1.PaginationControlsComponent, pagination_controls_directive_1.PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    Ng2PaginationModule.ctorParameters = function () { return []; };
    return Ng2PaginationModule;
}());
exports.Ng2PaginationModule = Ng2PaginationModule;


/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */

exports.DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ng2-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a *ngIf=\"1 < p.getCurrent()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </div>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
exports.DEFAULT_STYLES = "\n.ng2-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ng2-pagination::before, .ng2-pagination::after {\n    content: ' ';\n    display: table; }\n  .ng2-pagination::after {\n    clear: both; }\n  .ng2-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ng2-pagination li {\n    display: inline-block; }\n  .ng2-pagination a,\n  .ng2-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ng2-pagination a:hover,\n    .ng2-pagination button:hover {\n      background: #e6e6e6; }\n  .ng2-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ng2-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ng2-pagination .disabled:hover {\n      background: transparent; }\n  .ng2-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n\n.ng2-pagination .pagination-previous a::before,\n.ng2-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ng2-pagination .pagination-next a::after,\n.ng2-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ng2-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";


/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellerMyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SellerMyAccountPage = /** @class */ (function () {
    function SellerMyAccountPage(googleanalytics, http_mobile, modalCtrl, alertCtrl, plt, http, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.http_mobile = http_mobile;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.http = http;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
        this.userImg = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/user/';
        this.showaddress = false;
        this.soldviewfeedback = false;
        this.deletePro = {
            product_id: [],
            user_id: '',
        };
        this.filDataadd = {
            id: '',
            name: [],
            addrs: '',
            city: '',
            state: '',
            pincode: '',
            mobile: ''
        };
        this.saveAddress = {
            user_id: '',
            ship_name: '',
            mobile: '',
            ship_address: '',
            ship_city: '',
            ship_state: '',
            ship_country: '',
            ship_pincode: '',
            id: ''
        };
        this.userSettings = {
            showCurrentLocation: true,
            showSearchButton: false,
            useGoogleGeoApi: true,
            locationIconUrl: "assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
            geoCountryRestriction: ['ae', 'kw', 'om', 'qa', 'sa']
        };
        
        
        this.edit_product_val = {
            user_id:'',
            id:'',
            status:0
        };
        this.ifproductedit = false;
        this.editproductResponse;
        this.baddress;
        this.paddress;
        
        this.specification_arr = [];
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('SellerMyAccountPage');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
            this.userSettings.showCurrentLocation = false;
        }
    }
    SellerMyAccountPage.prototype.ionViewWillEnter = function () {
        $('.checklogin, .checkResolutionCenter').addClass('d-none');
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        
        $('body').removeClass().addClass('SellerAccount body');
        $(document).prop('title', 'My accounts');
        $(".zoomContainer").remove();
        $(".searchanythingform").trigger("reset");
        var d = new Date();
        this.showYear = d.getFullYear();
        this.showYear_footer = d.getFullYear();
        this.getAllCount();
        this.getAddress();
        if (this.navParams.data.id == 'message') {
            document.getElementById('msg').click();
        }
        else if (this.navParams.data.id == 'PurchaseHistory') {
            $('.list-group-item').removeClass('activated123');
            $('.' + this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.viewpurchaseHistory('All', '');
            $('.my-account-verticle-tab-div17:last').removeClass('d-none');
        }
        else if (this.navParams.data.id == 'Bids') {
            $('.list-group-item').removeClass('activated123');
            $('.' + this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.showBidsData();
            $('.my-account-verticle-tab-div1:last').removeClass('d-none');
        }
        else if (this.navParams.data.id == 'WishList') {
            $('.list-group-item').removeClass('activated123');
            $('.' + this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.showwishList();
            $('.my-account-verticle-tab-div16:last').removeClass('d-none');
        }
        else if (this.navParams.data.id == 'SavedDrafts') {
            $('.list-group-item').removeClass('activated123');
            $('.' + this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.viewProduct();
            $('.my-account-verticle-tab-div8:last').removeClass('d-none');
        }
        else if (this.navParams.data.id == 'SavedSearches') {
            $('.list-group-item').removeClass('activated123');
            $('.' + this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.showSaveSearch();
            $('.my-account-verticle-tab-div4:last').removeClass('d-none');
        }
        else if (this.navParams.data.id == 'SavedSellers') {
            $('.list-group-item').removeClass('activated123');
            $('.' + this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.viewSeller();
            $('.my-account-verticle-tab-div5:last').removeClass('d-none');
        }
        else if (this.navParams.data.id == 'return') {
            $('.list-group-item').removeClass('activated123');
            $('.' + this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.viewReturnData('All');
            $('.my-account-verticle-tab-div14:last').removeClass('d-none');
        }
        else if (this.navParams.data.id == 'Active') {
            $('.list-group-item').removeClass('activated123');
            $('.' + this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.viewActiveItem();
            $('.my-account-verticle-tab-div10:last').removeClass('d-none');
        }
        else if (this.navParams.data.id == 'SellerInvoice') {
            $('.list-group-item').removeClass('activated123');
            $('.' + this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            $('.my-account-verticle-tab-div18:last').removeClass('d-none');
        }
        else if (this.navParams.data.id == 'Sold') {
            $('.list-group-item').removeClass('activated123');
            $('.' + this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            $('.my-account-verticle-tab-div11:last').removeClass('d-none');
            this.viewSoldItem('All');
        }
        else if (this.navParams.data.id == 'resolutionCenter') {
//            document.getElementById('business-info').click();
//            $('.list-group-item').removeClass('activated123');
//            $('.' + this.navParams.data.id).addClass('activated123');
//            $('.targetDiv').addClass('d-none');
//            this.viewpurchaseProducts();
//            setTimeout(function () {
//                $('.my-account-verticle-tab9:last').removeClass('d-none');
//                $('#my-account-verticle-tab1').addClass('d-none');
//            }, 1000);
                $('.list-group-item').removeClass('activated');
                $('#activity-info').removeClass('active');
                $('#activity').removeClass('active');
                $('#activity').removeClass('show');
                $('#account').addClass('active');
                $('#account').addClass('show');
                $('.' + this.navParams.data.id).addClass('activated123');
                $('.targetDiv').addClass('d-none');
                $('#business-info').addClass('active');
                this.viewpurchaseProducts_seller();
                setTimeout(function () {
                    $('.my-account-verticle-tab9:last').removeClass('d-none');
                $('#my-account-verticle-tab1').addClass('d-none');
                }, 500);
        }
        else if (this.navParams.data.id == 'MyAddresses') {
            document.getElementById('business-info').click();
            $('.list-group-item').removeClass('activated123');
            $('.' + this.navParams.data.id).addClass('activated123');
            $('.targetDiv').addClass('d-none');
            this.viewAdderss();
            setTimeout(function () {
                $('#my-account-verticle-tab1').addClass('d-none');
                $('.my-account-verticle-tab2:last').removeClass('d-none');
            }, 500);
        }
        else if (this.navParams.data.id == 'account') {
//            this.showBusinessinfo();
//            document.getElementById('business-info').click();
            $('.list-group-item').removeClass('activated');
            $('#activity-info').removeClass('active');
            $('#activity').removeClass('active');
            $('#activity').removeClass('show');
            $('#' + this.navParams.data.id).addClass('active');
            $('#' + this.navParams.data.id).addClass('show');
            $('#business-info').addClass('active');
            setTimeout(function () {
                $('#my-account-verticle-tab1').removeClass('d-none');
            }, 500);
        } else if (this.navParams.data.id == 'editaddress') {
            $('.list-group-item').removeClass('activated');
            $('#activity-info').removeClass('active');
            $('#activity').removeClass('active');
            $('#activity').removeClass('show');
            $('#account').addClass('active');
            $('#account').addClass('show');
            $('#business-info').addClass('active');
            this.editBusinessAddress();
            setTimeout(function () {
                $('#my-account-verticle-tab1').removeClass('d-none');
                
            }, 500);
            
        }
        if ($(window).width() > 480) {
            $('.pb-3.collapseborder.collapse').addClass('show');
        }
        else {
            $('.pb-3.collapseborder.collapse').removeClass('show');
        }
    };
    
        SellerMyAccountPage.prototype.getAddress = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var all_count = {
                user_id: this.localItem.id
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/list-address', all_count, function (response) {
                
                _this.allAddress = response.list_address.data;
            }, function (error) {
                console.log(error);
            });
        }
    };
    
    
    SellerMyAccountPage.prototype.showBusinessinfo = function () {
        document.getElementById('business-info').click();
        $('.list-group-item').removeClass('activated123');
        $('.account').addClass('activated');
        setTimeout(function () {
            $('#my-account-verticle-tab1').removeClass('d-none');
        }, 1000);
    };
    SellerMyAccountPage.prototype.showbidinfo = function () {
        $('.list-group-item').removeClass('activated123');
        $('.' + this.navParams.data.id).addClass('activated123');
        $('.showTargetDiv').addClass('d-none');
        this.showBidsData();
        setTimeout(function () {
            $('.my-account-verticle-tab-div1:last').removeClass('d-none');
        }, 1000);
    };
    SellerMyAccountPage.prototype.ngOnInit = function () {
        $('.showSeller').click(function () {
            $('.list-group-item').removeClass('activated123');
            $(this).addClass('activated123');
            $('.showTargetDiv').hide();
            $('.my-account-verticle-tab-div' + $(this).attr('target') + ':last').show();
            $('.my-account-verticle-tab-div' + $(this).attr('target') + ':last').removeClass('d-none');
        });
        $('.showSingle').click(function () {
            $('.list-group-item').removeClass('activated123');
            $(this).addClass('activated123');
            $('.targetDiv').hide();
            $('#my-account-verticle-tab' + $(this).attr('target')).show();
            $('#my-account-verticle-tab' + $(this).attr('target')).removeClass('d-none');
        });
    };
    SellerMyAccountPage.prototype.ngAfterViewInit = function () {
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
    SellerMyAccountPage.prototype.autoCompleteCallback1 = function (selectedData) {
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
            this.filDataadd.addrs = sublocality_level_1;
            this.filDataadd.city = administrative_area_level_2;
            this.filDataadd.state = administrative_area_level_1;
            this.filDataadd.pincode = postal_code;
            $('#inputCountry').val(country);
        }
    };
    SellerMyAccountPage.prototype.gotouserProfile = function (val, val1) {
        if (this.localItem != null) {
            if (val1 == "UserProfile") {
                this.navCtrl.push('UserProfilePage', {
                    id: val
                });
            }
            else {
                if (this.localItem.role == "buyer") {
                    this.navCtrl.push('BuyerProfilePage', {
                        id: this.localItem.id
                    });
                }
            }
        }
    };
    SellerMyAccountPage.prototype.gotoBidsDetailpage = function (val) {
        this.navCtrl.push('BidHistoryPage', {
            id: val
        });
    };
    SellerMyAccountPage.prototype.showBidsData = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            try {
                var bids_view = {
                    user_id: this.localItem.id
                };
                if (this.plt.is('core') == true || this.plt.is('mobileweb') == true || this.plt.is('android') == true) {
                    var combined = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].forkJoin(this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/bid/view-own-bids', bids_view, { headers: { "Auth": "dibdaaauth" } }).map(function (res) { return res; }), this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/bid/view-winning-bids', bids_view, { headers: { "Auth": "dibdaaauth" } }).map(function (res) { return res; }), this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/bid/view-not-winning-bids', bids_view, { headers: { "Auth": "dibdaaauth" } }).map(function (res) { return res; }), this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/make-offer/view-my-offers', bids_view, { headers: { "Auth": "dibdaaauth" } }).map(function (res) { return res; }));
                    combined.subscribe(function (latestValues) {
                        var data_ownbids = latestValues[0], data_winbids = latestValues[1], data_notwin = latestValues[2], data_offer = latestValues[3];
                        _this.bidsData = data_ownbids.bid;
                        _this.bidsWinData = data_winbids.bid;
                        _this.bidsNotWinData = data_notwin.bid;
                        _this.offerData = data_offer.offers;
                        _this.getAllCount();
                    });
                }
                else {
                    var headers = {
                        'Auth': 'dibdaaauth'
                    };
                    var combined = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].forkJoin(this.http_mobile.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/bid/view-own-bids', bids_view, headers).then(function (res) { return res; }), this.http_mobile.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/bid/view-winning-bids', bids_view, headers).then(function (res) { return res; }), this.http_mobile.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/bid/view-not-winning-bids', bids_view, headers).then(function (res) { return res; }), this.http_mobile.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/make-offer/view-my-offers', bids_view, headers).then(function (res) { return res; }));
                    combined.subscribe(function (latestValues) {
                        var data_ownbids = latestValues[0], data_winbids = latestValues[1], data_notwin = latestValues[2], data_offer = latestValues[3];
                        var convertdata_ownbids = JSON.parse(data_ownbids.data);
                        _this.bidsData = convertdata_ownbids.bid;
                        var convertdata_winbids = JSON.parse(data_winbids.data);
                        _this.bidsWinData = convertdata_winbids.bid;
                        var convertdata_notwin = JSON.parse(data_notwin.data);
                        _this.bidsNotWinData = convertdata_notwin.bid;
                        var convertdata_offer = JSON.parse(data_offer.data);
                        _this.offerData = convertdata_offer.offers;
                        _this.getAllCount();
                    });
                }
            }
            catch (Error) {
                console.log(Error);
            }
        }
    };
    SellerMyAccountPage.prototype.showwishList = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var wishlist_view = {
                user_id: this.localItem.id
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/wishlist/view-wishlist', wishlist_view, function (response) {
                _this.viewishData = response.wishlist;
                _this.getAllCount();
            }, function (error) {
                console.log(error);
            });
        }
    };
    SellerMyAccountPage.prototype.buyNow = function (val_buyerId, val_proId, val_qua, val_ofeprice, val_ofrId) {
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin == false) {
            this.navCtrl.push('LoginPage', {
                id: 'login'
            });
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
            }
            else {
                var spec_arr = {};
                spec_arr['color'] = '-';
                spec_arr['size'] = '-';
                var pass_data;
                if (val_ofrId == '') {
                    pass_data = {
                        user_id: val_buyerId,
                        product_id: val_proId,
                        quantity: val_qua,
                        specification: spec_arr,
                        bid_price: val_ofeprice,
                        offer_id: val_ofrId
                    };
                }
                else {
                    pass_data = {
                        user_id: val_buyerId,
                        product_id: val_proId,
                        quantity: val_qua,
                        specification: spec_arr,
                        offer_price: val_ofeprice,
                        offer_id: val_ofrId
                    };
                }
                var convert_stringify = JSON.stringify(pass_data);
                var convert_encode = btoa(convert_stringify);
                this.navCtrl.push('CheckOutPage', {
                    id: convert_encode
                });
            }
        }
    };
    SellerMyAccountPage.prototype.getAllVal = function (val) {
        var totallengthcheckbox = $("input[type=checkbox][name=wishlist-chk]").length;
        var totallengthcheckboxchecked = $("input[type=checkbox][name=wishlist-chk]:checked").length;
        if (val == "single") {
            if (parseInt(totallengthcheckbox) == parseInt(totallengthcheckboxchecked)) {
                $('#checkAllWishList').prop('checked', true);
            }
            else {
                $('#checkAllWishList').prop('checked', false);
            }
        }
        else if (val == "multiple") {
            if ($('#checkAllWishList').prop('checked') == true) {
                $.each($("input[name='wishlist-chk']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='wishlist-chk']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
    };
    SellerMyAccountPage.prototype.getAllCount = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var all_count = {
                user_id: this.localItem.id
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/list-count', all_count, function (response) {
                _this.allCountData = response;
            }, function (error) {
                console.log(error);
            });
        }
    };
    SellerMyAccountPage.prototype.getAllValactive = function (val) {
        var totallengthcheckbox = $("input[type=checkbox][name=wishlist-active]").length;
        var totallengthcheckboxchecked = $("input[type=checkbox][name=wishlist-active]:checked").length;
        if (val == "single") {
            if (parseInt(totallengthcheckbox) == parseInt(totallengthcheckboxchecked)) {
                $('#checkAllWishactive').prop('checked', true);
            }
            else {
                $('#checkAllWishactive').prop('checked', false);
            }
        }
        else if (val == "multiple") {
            if ($('#checkAllWishactive').prop('checked') == true) {
                $.each($("input[name='wishlist-active']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='wishlist-active']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
    };
    SellerMyAccountPage.prototype.getAllValend = function (val) {
        var totallengthcheckbox = $("input[type=checkbox][name=wishlist-end]").length;
        var totallengthcheckboxchecked = $("input[type=checkbox][name=wishlist-end]:checked").length;
        if (val == "single") {
            if (parseInt(totallengthcheckbox) == parseInt(totallengthcheckboxchecked)) {
                $('#checkAllWishEnd').prop('checked', true);
            }
            else {
                $('#checkAllWishEnd').prop('checked', false);
            }
        }
        else if (val == "multiple") {
            if ($('#checkAllWishEnd').prop('checked') == true) {
                $.each($("input[name='wishlist-end']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='wishlist-end']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
    };
    SellerMyAccountPage.prototype.deletewish = function (val) {
        var _this = this;
        var favorite = [];
        if (val == 'All') {
            $.each($("input[name='wishlist-chk']:checked"), function () {
                favorite.push($(this).val());
            });
        }
        else if (val == 'Active') {
            $.each($("input[name='wishlist-active']:checked"), function () {
                favorite.push($(this).val());
            });
        }
        else if (val == 'End') {
            $.each($("input[name='wishlist-end']:checked"), function () {
                favorite.push($(this).val());
            });
        }
        if (favorite.length == 0) {
            $('#danger-alert').removeClass('hide');
            $('#danger-span').text('You did not select any items.');
        }
        else {
            if (this.localItem == null) {
            }
            else {
                var wishlist_delete = {
                    user_id: this.localItem.id,
                    product_id: favorite
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/wishlist/remove-wishlist', wishlist_delete, function (response) {
                    _this.showwishList();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    SellerMyAccountPage.prototype.addCart = function (val) {
        if (this.localItem == null) {
        }
        else {
            var cart_details = {
                product_id: val,
                user_id: this.localItem.id,
                quantity: 1,
                specification: '',
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/cart/add-to-cart', cart_details, function (response) {
                $('#addtoCount').text(response.cart.count);
                if (response.cart.status == "fail") {
                    $('#danger-alert').removeClass('hide');
                    $('#danger-span').text(response.cart.msg);
                }
                else if (response.cart.status == "success") {
                    $('#success-alert').removeClass('hide');
                    $('#success-span').text("Saved to cart");
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    SellerMyAccountPage.prototype.addNote = function (val) {
        var favorite = [];
        if (val == 'All') {
            $.each($("input[name='wishlist-chk']:checked"), function () {
                favorite.push($(this).val());
            });
        }
        else if (val == 'Active') {
            $.each($("input[name='wishlist-active']:checked"), function () {
                favorite.push($(this).val());
            });
        }
        else if (val == 'End') {
            $.each($("input[name='wishlist-end']:checked"), function () {
                favorite.push($(this).val());
            });
        }
        if (favorite.length == 0) {
            $('#danger-alert').removeClass('hide');
            $('#danger-span').text('You did not select any items.');
        }
        else {
            var convert_stringify = JSON.stringify(favorite);
            var convert_encode = btoa(convert_stringify);
            this.navCtrl.push('AddNoteWishlist', {
                id: convert_encode
            });
        }
    };
    SellerMyAccountPage.prototype.comparewish = function (val) {
        var favorite = [];
        if (val == 'All') {
            $.each($("input[name='wishlist-chk']:checked"), function () {
                favorite.push($(this).val());
            });
        }
        else if (val == 'Active') {
            $.each($("input[name='wishlist-active']:checked"), function () {
                favorite.push($(this).val());
            });
        }
        else if (val == 'End') {
            $.each($("input[name='wishlist-end']:checked"), function () {
                favorite.push($(this).val());
            });
        }
        if (favorite.length == 0) {
            $('#danger-alert').removeClass('hide');
            $('#danger-span').text('You did not select any items.');
        }
        else if (favorite.length < 2) {
            $('#danger-alert').removeClass('hide');
            $('#danger-span').text('You can select at least 2 item.');
        }
        else if (favorite.length > 3) {
            $('#danger-alert').removeClass('hide');
            $('#danger-span').text('You can select maximum  3 item.');
        }
        else {
            var convert_stringify = JSON.stringify(favorite);
            var convert_encode = btoa(convert_stringify);
            this.navCtrl.push('CompareList', {
                id: convert_encode
            });
        }
    };
    SellerMyAccountPage.prototype.closeDiv = function (val) {
        if (val == 'success') {
            $('#success-alert').addClass('hide');
        }
        else if (val == 'danger') {
            $('#danger-alert').addClass('hide');
        }
        else if (val == 'success_resoltion') {
            $('#success-alert-resolution').addClass('hide');
        }
        else if (val == 'success_resoltion_seller') {
            $('#success-alert-resolution-seller').addClass('hide');
        }
    };
    SellerMyAccountPage.prototype.viewProduct = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var viewPro = {
                user_id: this.localItem.id
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/view-product-draft', viewPro, function (response) {
                _this.view_productList = response.draft_product;
                _this.infoService.hideLoading();
                _this.getAllCount();
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.viewProduct_latestDraft = function () {
        var _this = this;
        try {
            if (this.localItem == null) {
            }
            else {
                var showdraftList = {
                    user_id: this.localItem.id
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/view-latest-draft', showdraftList, function (response) {
                    if (response.latest_draft.status == "success") {
                        _this.dreftdata = response.latest_draft;
                    }
                    else {
                        _this.dreftdata = response;
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
        catch (Error) {
            console.log(Error);
        }
    };
    SellerMyAccountPage.prototype.deleteProduct_latestdraft = function (val) {
        var _this = this;
        try {
            var deletePro = {
                product_id: val
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/delete-latest-draft', deletePro, function (response) {
                if (response.latest_draft.status == "success") {
                    _this.viewProduct_latestDraft();
                    _this.viewProduct();
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    SellerMyAccountPage.prototype.gotoeditProduct_latestdraft = function (val) {
        this.navCtrl.push('AddProduct', {
            id: val
        });
    };
    SellerMyAccountPage.prototype.checkAllSD = function (val) {
        if (val == 'saveDraft') {
            if ($('#checkAllSD').prop('checked') == true) {
                $.each($("input[name='viewProduct_chk']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='viewProduct_chk']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
        else if (val == 'active') {
            if ($('#checkAllactive').prop('checked') == true) {
                $.each($("input[name='chkactive_all']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='chkactive_all']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
        else if (val == 'unsold') {
            if ($('#checkAllUnsold').prop('checked') == true) {
                $.each($("input[name='chkunsoldAll']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='chkunsoldAll']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
        else if (val == 'OpenOffer') {
            if ($('#checkAllopenofr').prop('checked') == true) {
                $.each($("input[name='chkactive_openofr']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='chkactive_openofr']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
        else if (val == 'ActionStyle') {
            if ($('#checkAllactionstyle').prop('checked') == true) {
                $.each($("input[name='chkactive_actionstyl']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='chkactive_actionstyl']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
        else if (val == 'fixprce') {
            if ($('#checkAllfixedprice').prop('checked') == true) {
                $.each($("input[name='chkactive_fixprice']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='chkactive_fixprice']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
        else if (val == 'outstock') {
            if ($('#checkAlloutofstock').prop('checked') == true) {
                $.each($("input[name='chkactive_outstock']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='chkactive_outstock']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
        else if (val == 'soldAll') {
            if ($('#checksoldAll').prop('checked') == true) {
                $.each($("input[name='soldchk_all']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='soldchk_all']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
        else if (val == 'awaitpayment') {
            if ($('#checkAllsoldawait').prop('checked') == true) {
                $.each($("input[name='soldchk_awaitpayment']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='soldchk_awaitpayment']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
        else if (val == 'awaitship') {
            if ($('#checkAllsoldawaitship').prop('checked') == true) {
                $.each($("input[name='soldchk_awaitshiped']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='soldchk_awaitshiped']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
        else if (val == 'shiped') {
            if ($('#checkAllshipped').prop('checked') == true) {
                $.each($("input[name='soldchk_shiped']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='soldchk_shiped']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
    };
    SellerMyAccountPage.prototype.deleteProduct = function (val, val_check) {
        var _this = this;
        var favorite = [];
        if (val == 'one') {
            favorite.push(val_check);
        }
        else {
            $.each($("input[name='viewProduct_chk']:checked"), function () {
                favorite.push($(this).val());
            });
        }
        if (favorite.length == 0) {
            $('#danger-alert-SD').removeClass('hide');
            $('#danger-span-SD').text('You did not select any items.');
        }
        else {
            if (this.localItem == null) {
            }
            else {
                this.deletePro.product_id = favorite;
                this.deletePro.user_id = this.localItem.id;
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/delete-product', this.deletePro, function (response) {
                    _this.infoService.hideLoading();
                    _this.viewProduct();
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
        }
    };
    SellerMyAccountPage.prototype.closeDivSD = function () {
        $('#danger-alert-SD').addClass('hide');
    };
    SellerMyAccountPage.prototype.viewSeller = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var seller_view = {
                user_id: this.localItem.id
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-seller', seller_view, function (response) {
                _this.view_sellerList = response.seveseller;
                _this.infoService.hideLoading();
                _this.getAllCount();
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.deleteSeller = function (val) {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var seller_delete = {
                user_id: this.localItem.id,
                status: 'remove',
                seller_id: val
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/save-seller', seller_delete, function (response) {
                _this.infoService.hideLoading();
                _this.viewSeller();
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.viewSellerItem = function (val, val_username) {
        var pass_id = {
            user_id: this.localItem.id,
            seller_id: val,
            user_name: val_username
        };
        /*var convert_stringify = JSON.stringify(pass_id)
        var convert_encode = btoa(convert_stringify);*/
        this.navCtrl.push('AllItemPage', {
            id: pass_id
        });
    };
    SellerMyAccountPage.prototype.viewpurchaseHistory = function (val, val_year) {
        var _this = this;
        var d = new Date();
        this.showYear = d.getFullYear();
        if (this.localItem == null) {
        }
        else {
            var purchase_history;
            if (val == "All") {
                purchase_history = {
                    user_id: this.localItem.id
                };
            }
            else if (val == 'searchyear') {
                purchase_history = {
                    user_id: this.localItem.id,
                    year: val_year
                };
            }
            else if (val == 'searchdate') {
                purchase_history = {
                    user_id: this.localItem.id,
                    date: val_year
                };
            }
            else if (val == 'searchstatus') {
                purchase_history = {
                    user_id: this.localItem.id,
                    status: val_year
                };
            }
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/purchase/purchase-history', purchase_history, function (response) {
                _this.view_purchaseData = response.order;
                _this.infoService.hideLoading();
                _this.getAllCount();
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.viewInvoiceData = function () {
        var dat = new Date();
        this.showYear = dat.getFullYear();
    };
    SellerMyAccountPage.prototype.gotoSellerIvoice = function () {
        var pass_data = {
            month: $('#invoicemonth').val(),
            year: $('#invoiceyear').val()
        };
        var convert_stringify = JSON.stringify(pass_data);
        var convert_encode = btoa(convert_stringify);
        this.navCtrl.push('SellerInvoiceDetailsPage', {
            id: convert_encode
        });
    };
    SellerMyAccountPage.prototype.orderDetails = function (val) {
        this.navCtrl.push('OrderDetailPage', {
            id: val
        });
    };
    SellerMyAccountPage.prototype.viewAdderss = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var view_add = {
                user_id: this.localItem.id
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/ship-address/view-ship-address', view_add, function (response) {
                _this.view_addressData = response.ship_address;
                _this.infoService.hideLoading();
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.editAddress = function (val, val1) {
        var _this = this;
        if (val == 'primary') {
            var add_primary = {
                user_id: this.localItem.id,
                ship_id: val1
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/ship-address/make-primary-address', add_primary, function (response) {
                if (response.ship_address.status == "success") {
                    _this.viewAdderss();
                }
                else {
                    console.log(response.ship_address);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else if (val == 'delete') {
            var delete_add = {
                user_id: this.localItem.id,
                ship_id: val1
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/ship-address/delete-ship-address', delete_add, function (response) {
                if (response.ship_address.status == "success") {
                    _this.viewAdderss();
                }
                else {
                    console.log(response.ship_address);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else if (val == 'Cancel') {
            this.showaddress = false;
        }
    };
    SellerMyAccountPage.prototype.editAddressfillData = function (id, name, addrs, city, state, pincode, country, mobile) {
        this.showaddress = true;
        this.filDataadd.id = id;
        this.filDataadd.name = name.split(" ");
        this.filDataadd.addrs = addrs;
        this.filDataadd.city = city;
        this.filDataadd.state = state;
        this.filDataadd.pincode = pincode;
        this.filDataadd.mobile = mobile;
        setTimeout(function () {
            $('#inputCountry').val(country);
        }, 1000);
    };
    SellerMyAccountPage.prototype.AddAddress = function (val) {
        var _this = this;
        this.saveAddress.id = this.filDataadd.id;
        this.saveAddress.user_id = this.localItem.id;
        this.saveAddress.ship_name = val.first_name + ' ' + val.last_name;
        this.saveAddress.mobile = val.mobile;
        this.saveAddress.ship_address = val.ship_address;
        this.saveAddress.ship_city = val.ship_city;
        this.saveAddress.ship_state = val.ship_state;
        this.saveAddress.ship_country = $('#inputCountry').val();
        this.saveAddress.ship_pincode = val.ship_pincode;
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/ship-address/update-ship-address', this.saveAddress, function (response) {
            if (response.ship_address.status == "success") {
                _this.showaddress = false;
                _this.infoService.hideLoading();
                _this.viewAdderss();
            }
            else {
                _this.showaddress = true;
                _this.infoService.hideLoading();
            }
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    SellerMyAccountPage.prototype.goToProductDetails = function (val) {
        this.navCtrl.push('ProductDetails', {
            id: val
        });
    };
    SellerMyAccountPage.prototype.gotopurchaseusrList = function (val) {
        this.navCtrl.push('ViewpurchaseUserlistPage', {
            id: val
        });
    };
    SellerMyAccountPage.prototype.showSaveSearch = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var save_search = {
                user_id: this.localItem.id
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/search/view-search', save_search, function (response) {
                if (response.view_search.status == 'success') {
                    _this.specification_arr.length = 0;
                    for (var i = 0; i < response.view_search.data.length; i++) {
                        _this.specification_arr.push(Object.entries(response.view_search.data[i].search));
                    }
                    _this.saveSearchdata = response.view_search;
                    _this.infoService.hideLoading();
                    _this.getAllCount();
                }
                else {
                    _this.saveSearchdata = response;
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.crudOperation = function (val, val1) {
        var _this = this;
        if (val1 == 'view') {
            console.log('View Call');
        }
        else if (val1 == 'delete') {
            var remove_search = {
                id: val
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/search/delete-search', remove_search, function (response) {
                if (response.save_search.status == "success") {
                    _this.infoService.hideLoading();
                    _this.showSaveSearch();
                }
                else {
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.showMessageList = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var msgList = {
                user_id: this.localItem.id,
                user_role: 'seller'
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/message/message-list', msgList, function (response) {
                if (response.message.status == "success") {
                    _this.msgData = response.message;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.viewMessage = function (val_sender, val_pro) {
        var view_msg = {
            sender_id: this.localItem.id,
            receiver_id: val_sender,
            product_id: val_pro
        };
        var convert_stringify = JSON.stringify(view_msg);
        var convert_encode = btoa(convert_stringify);
        this.navCtrl.push('LeaveMessagePage', {
            id: convert_encode
        });
    };
    SellerMyAccountPage.prototype.ViewDashboard = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var view_dash = {
                user_id: this.localItem.id
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/dashboard/user-dashboard', view_dash, function (response) {
                if (response.dashboard.status = "success") {
                    _this.dashboardData = response.dashboard.count;
                }
                else {
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    SellerMyAccountPage.prototype.contactSeller = function (val, val1) {
        if (this.localItem == null) {
            this.navCtrl.push('LoginPage', {
                id: 'login'
            });
        }
        else {
            $(".zoomContainer").remove();
            var contact_seller = {
                seller_id: val1,
                business_name: val,
                userId: this.localItem.id
            };
            var convert_stringify = JSON.stringify(contact_seller);
            var convert_encode = btoa(convert_stringify);
            this.navCtrl.push('ContactSellerPage', {
                id: convert_encode
            });
        }
    };
    SellerMyAccountPage.prototype.viewSoldItem = function (val) {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            this.soldviewfeedback = false;
            if (val == "All") {
                var view_sold = {
                    user_id: this.localItem.id
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-sold-product', view_sold, function (response) {
                    if (response.sold_product.status = "success") {
                        _this.soldData = response.sold_product;
                        _this.getAllCount();
                    }
                    else {
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else if (val == "AwaitingPayment") {
                var view_AwaitingPayment = {
                    user_id: this.localItem.id,
                    payment: true
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-sold-product', view_AwaitingPayment, function (response) {
                    if (response.sold_product.status = "success") {
                        _this.sold_AwaitingPayment = response.sold_product;
                    }
                    else {
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else if (val == "AwaitingShipment") {
                var view_AwaitingShipment = {
                    user_id: this.localItem.id,
                    shipment: true
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-sold-product', view_AwaitingShipment, function (response) {
                    if (response.sold_product.status = "success") {
                        _this.sold_AwaitingShipment = response.sold_product;
                    }
                    else {
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else if (val == "Shipped") {
                var view_Shipped = {
                    user_id: this.localItem.id,
                    shipped: true
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-sold-product', view_Shipped, function (response) {
                    if (response.sold_product.status = "success") {
                        _this.sold_Shipped = response.sold_product;
                    }
                    else {
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    SellerMyAccountPage.prototype.deletesholdItem = function (val) {
        var _this = this;
        var delete_sholdItem = [];
        if (val == "shiped") {
            $.each($("input[name='chkactive_all']:checked"), function () {
                delete_sholdItem.push($(this).val());
            });
            if (delete_sholdItem.length <= 0) {
                $('#danger-span-sld').text('You did not select any items.');
                $('#danger-alert-sld').removeClass('hide');
            }
            else {
                $('#danger-alert-sld').addClass('hide');
                var end_productshiped = {
                    product_id: delete_sholdItem,
                    user_id: this.localItem.id,
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/delete-product', end_productshiped, function (response) {
                    if (response.status == "success")
                        _this.viewSoldItem('Shipped');
                    else
                        _this.viewSoldItem('Shipped');
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else if (val == "awaitship") {
            $.each($("input[name='soldchk_awaitshiped']:checked"), function () {
                delete_sholdItem.push($(this).val());
            });
            if (delete_sholdItem.length <= 0) {
                $('#danger-span-sld').text('You did not select any items.');
                $('#danger-alert-sld').removeClass('hide');
            }
            else {
                $('#danger-alert-sld').addClass('hide');
                var end_productawaitship = {
                    product_id: delete_sholdItem,
                    user_id: this.localItem.id,
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/delete-product', end_productawaitship, function (response) {
                    if (response.status == "success")
                        _this.viewSoldItem('AwaitingShipment');
                    else
                        _this.viewSoldItem('AwaitingShipment');
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else if (val == "awaitpayment") {
            $.each($("input[name='soldchk_awaitpayment']:checked"), function () {
                delete_sholdItem.push($(this).val());
            });
            if (delete_sholdItem.length <= 0) {
                $('#danger-span-sld').text('You did not select any items.');
                $('#danger-alert-sld').removeClass('hide');
            }
            else {
                $('#danger-alert-sld').addClass('hide');
                var end_productawaitpayment = {
                    product_id: delete_sholdItem,
                    user_id: this.localItem.id,
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/delete-product', end_productawaitpayment, function (response) {
                    if (response.status == "success")
                        _this.viewSoldItem('AwaitingPayment');
                    else
                        _this.viewSoldItem('AwaitingPayment');
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else if (val == "soldAll") {
            $.each($("input[name='soldchk_all']:checked"), function () {
                delete_sholdItem.push($(this).val());
            });
            if (delete_sholdItem.length <= 0) {
                $('#danger-span-sld').text('You did not select any items.');
                $('#danger-alert-sld').removeClass('hide');
            }
            else {
                $('#danger-alert-sld').addClass('hide');
                var end_productsoldAll = {
                    product_id: delete_sholdItem,
                    user_id: this.localItem.id,
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/delete-product', end_productsoldAll, function (response) {
                    if (response.status == "success")
                        _this.viewSoldItem('All');
                    else
                        _this.viewSoldItem('All');
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    SellerMyAccountPage.prototype.closeDivsld = function () {
        $('#danger-alert-sld').addClass('hide');
    };
    SellerMyAccountPage.prototype.viewActiveItem = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var view_active = {
                user_id: this.localItem.id
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-active-product', view_active, function (response) {
                if (response.status = "success") {
                    _this.activeItem = response;
                    _this.getAllCount();
                }
                else {
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    SellerMyAccountPage.prototype.filterActive = function (val, val1) {
        var _this = this;
        if (val == "Sort") {
            var Sort_active;
            if (val1 == "endsoon") {
                Sort_active = {
                    endsoon: true,
                    user_id: this.localItem.id
                };
            }
            else if (val1 == "newly_listed") {
                Sort_active = {
                    newly_listed: true,
                    user_id: this.localItem.id
                };
            }
            else if (val1 == "price_asc") {
                Sort_active = {
                    price: 'asc',
                    user_id: this.localItem.id
                };
            }
            else if (val1 == "price_desc") {
                Sort_active = {
                    price: 'desc',
                    user_id: this.localItem.id
                };
            }
            else if (val1 == "quantity_asc") {
                Sort_active = {
                    quantity: 'asc',
                    user_id: this.localItem.id
                };
            }
            else if (val1 == "quantity_desc") {
                Sort_active = {
                    quantity: 'desc',
                    user_id: this.localItem.id
                };
            }
            else if (val1 == "-1") {
                Sort_active = {
                    user_id: this.localItem.id
                };
            }
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-active-product', Sort_active, function (response) {
                if (response.status = "success") {
                    _this.activeItem = response;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
        else if (val == "Format") {
            var Format_active;
            if (val1 == "auction") {
                Format_active = {
                    auction: 'Auction style',
                    user_id: this.localItem.id
                };
            }
            else if (val1 == "fix_price") {
                Format_active = {
                    fix_price: 'Fixed price',
                    user_id: this.localItem.id
                };
            }
            else if (val1 == "best_offer") {
                Format_active = {
                    best_offer: true,
                    user_id: this.localItem.id
                };
            }
            else if (val1 == "-1") {
                Format_active = {
                    user_id: this.localItem.id
                };
            }
            else if (val1 == "out_of_stock") {
                Format_active = {
                    user_id: this.localItem.id,
                    out_of_stock: true
                };
            }
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-active-product', Format_active, function (response) {
                if (response.status = "success") {
                    _this.activeItem = response;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.activeItem = response;
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.activeallOperation = function (val, val1) {
        var _this = this;
        var favorite = [];
        if (val1 == "All") {
            if (val == "End") {
                $.each($("input[name='chkactive_all']:checked"), function () {
                    favorite.push($(this).val());
                });
                if (favorite.length <= 0) {
                    $('#danger-span-AS').text('You did not select any items.');
                    $('#danger-alert-AS').removeClass('hide');
                }
                else {
                    $('#danger-alert-AS').addClass('hide');
                    var end_productAll = {
                        product_id: favorite
                    };
                    this.infoService.showLoading();
                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/end-product', end_productAll, function (response) {
                        _this.infoService.hideLoading();
                        if (response.cancel_users.status == "success")
                            _this.viewActiveItem();
                        else
                            _this.viewActiveItem();
                    }, function (error) {
                        console.log(error);
                        _this.infoService.hideLoading();
                    });
                }
            }
            else if (val == "Edit") {
                $.each($("input[name='chkactive_all']:checked"), function () {
                    favorite.push($(this).val());
                });
                if (favorite.length > 1) {
                    $('#danger-alert-AS').removeClass('hide');
                    $('#danger-span-AS').text('Select Only one');
                }
                else if (favorite.length == 1) {
                    $('#danger-alert-AS').addClass('hide');
                    this.gotoeditProduct(favorite[0], 'Active');
                }
                else {
                    $('#danger-alert-AS').removeClass('hide');
                    $('#danger-span-AS').text('You did not select any items.');
                }
            }
        }
        else if (val1 == "opnoffr") {
            if (val == "End") {
                $.each($("input[name='chkactive_openofr']:checked"), function () {
                    favorite.push($(this).val());
                });
                if (favorite.length <= 0) {
                    $('#danger-span-AS').text('You did not select any items.');
                    $('#danger-alert-AS').removeClass('hide');
                }
                else {
                    $('#danger-alert-AS').addClass('hide');
                    var end_productopnoffr = {
                        product_id: favorite
                    };
                    this.infoService.showLoading();
                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/end-product', end_productopnoffr, function (response) {
                        _this.infoService.hideLoading();
                        if (response.cancel_users.status == "success")
                            _this.viewActiveItem();
                        else
                            _this.viewActiveItem();
                    }, function (error) {
                        console.log(error);
                        _this.infoService.hideLoading();
                    });
                }
            }
            else if (val == "Edit") {
                $.each($("input[name='chkactive_openofr']:checked"), function () {
                    favorite.push($(this).val());
                });
                if (favorite.length > 1) {
                    $('#danger-alert-AS').removeClass('hide');
                    $('#danger-span-AS').text('Select Only one');
                }
                else if (favorite.length == 1) {
                    $('#danger-alert-AS').addClass('hide');
                    this.gotoeditProduct(favorite[0], 'Active');
                }
                else {
                    $('#danger-alert-AS').removeClass('hide');
                    $('#danger-span-AS').text('You did not select any items.');
                }
            }
        }
        else if (val1 == "actionstyl") {
            if (val == "End") {
                $.each($("input[name='chkactive_actionstyl']:checked"), function () {
                    favorite.push($(this).val());
                });
                if (favorite.length <= 0) {
                    $('#danger-span-AS').text('You did not select any items.');
                    $('#danger-alert-AS').removeClass('hide');
                }
                else {
                    $('#danger-alert-AS').addClass('hide');
                    var end_productactionstyl = {
                        product_id: favorite
                    };
                    this.infoService.showLoading();
                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/end-product', end_productactionstyl, function (response) {
                        _this.infoService.hideLoading();
                        if (response.cancel_users.status == "success")
                            _this.viewActiveItem();
                        else
                            _this.viewActiveItem();
                    }, function (error) {
                        console.log(error);
                        _this.infoService.hideLoading();
                    });
                }
            }
            else if (val == "Edit") {
                $.each($("input[name='chkactive_actionstyl']:checked"), function () {
                    favorite.push($(this).val());
                });
                if (favorite.length > 1) {
                    $('#danger-alert-AS').removeClass('hide');
                    $('#danger-span-AS').text('Select Only one');
                }
                else if (favorite.length == 1) {
                    $('#danger-alert-AS').addClass('hide');
                    this.gotoeditProduct(favorite[0], 'Active');
                }
                else {
                    $('#danger-alert-AS').removeClass('hide');
                    $('#danger-span-AS').text('You did not select any items.');
                }
            }
        }
        else if (val1 == "fixprce") {
            if (val == "End") {
                $.each($("input[name='chkactive_fixprice']:checked"), function () {
                    favorite.push($(this).val());
                });
                if (favorite.length <= 0) {
                    $('#danger-span-AS').text('You did not select any items.');
                    $('#danger-alert-AS').removeClass('hide');
                }
                else {
                    $('#danger-alert-AS').addClass('hide');
                    var end_productfixprce = {
                        product_id: favorite
                    };
                    this.infoService.showLoading();
                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/end-product', end_productfixprce, function (response) {
                        _this.infoService.hideLoading();
                        if (response.cancel_users.status == "success")
                            _this.viewActiveItem();
                        else
                            _this.viewActiveItem();
                    }, function (error) {
                        console.log(error);
                        _this.infoService.hideLoading();
                    });
                }
            }
            else if (val == "Edit") {
                $.each($("input[name='chkactive_fixprice']:checked"), function () {
                    favorite.push($(this).val());
                });
                if (favorite.length > 1) {
                    $('#danger-alert-AS').removeClass('hide');
                    $('#danger-span-AS').text('Select Only one');
                }
                else if (favorite.length == 1) {
                    $('#danger-alert-AS').addClass('hide');
                    this.gotoeditProduct(favorite[0], 'Active');
                }
                else {
                    $('#danger-alert-AS').removeClass('hide');
                    $('#danger-span-AS').text('You did not select any items.');
                }
            }
        }
        else if (val1 == "outstock") {
            if (val == "End") {
                $.each($("input[name='chkactive_outstock']:checked"), function () {
                    favorite.push($(this).val());
                });
                if (favorite.length <= 0) {
                    $('#danger-span-AS').text('You did not select any items.');
                    $('#danger-alert-AS').removeClass('hide');
                }
                else {
                    $('#danger-alert-AS').addClass('hide');
                    var end_productoutstock = {
                        product_id: favorite
                    };
                    this.infoService.showLoading();
                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/end-product', end_productoutstock, function (response) {
                        _this.infoService.hideLoading();
                        if (response.cancel_users.status == "success")
                            _this.viewActiveItem();
                        else
                            _this.viewActiveItem();
                    }, function (error) {
                        console.log(error);
                        _this.infoService.hideLoading();
                    });
                }
            }
            else if (val == "Edit") {
                $.each($("input[name='chkactive_outstock']:checked"), function () {
                    favorite.push($(this).val());
                });
                if (favorite.length > 1) {
                    $('#danger-alert-AS').removeClass('hide');
                    $('#danger-span-AS').text('Select Only one');
                }
                else if (favorite.length == 1) {
                    $('#danger-alert-AS').addClass('hide');
                    this.gotoeditProduct(favorite[0], 'Active');
                }
                else {
                    $('#danger-alert-AS').removeClass('hide');
                    $('#danger-span-AS').text('You did not select any items.');
                }
            }
        }
    };
    SellerMyAccountPage.prototype.closeDivAS = function () {
        $('#danger-alert-AS').addClass('hide');
    };
    SellerMyAccountPage.prototype.viewUnsoldItem = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var view_unsold = {
                user_id: this.localItem.id
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-unsold-product', view_unsold, function (response) {
                if (response.unsold_product.status = "success") {
                    _this.unsoldItem = response.unsold_product;
                    _this.infoService.hideLoading();
                    _this.getAllCount();
                }
                else {
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.deleteAllunsold = function () {
        var _this = this;
        var favorite = [];
        $.each($("input[name='chkunsoldAll']:checked"), function () {
            favorite.push($(this).val());
        });
        if (favorite.length <= 0) {
            $('#danger-alert-US').removeClass('hide');
        }
        else {
            var deleteall_unsold = {
                user_id: this.localItem.id,
                product_id: favorite
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/delete-product', deleteall_unsold, function (response) {
                if (response.status == "success")
                    _this.viewUnsoldItem();
                else
                    _this.viewUnsoldItem();
            }, function (error) {
                console.log(error);
            });
        }
    };
    SellerMyAccountPage.prototype.filterunsold = function (val) {
        var _this = this;
        var view_unsold = {
            user_id: this.localItem.id,
            val: val
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-unsold-product', view_unsold, function (response) {
            if (response.unsold_product.status = "success") {
                _this.unsoldItem = response.unsold_product;
                _this.infoService.hideLoading();
            }
            else {
                _this.infoService.hideLoading();
            }
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    SellerMyAccountPage.prototype.closeDivUS = function () {
        $('#danger-alert-US').addClass('hide');
    };
    SellerMyAccountPage.prototype.viewDeleteItem = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var view_deleteitm = {
                user_id: this.localItem.id
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-deleted-product', view_deleteitm, function (response) {
                if (response.deleted_product.status = "success") {
                    _this.deleteItem = response.deleted_product;
                    _this.getAllCount();
                }
                else {
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    SellerMyAccountPage.prototype.deleteFilter = function (val) {
        var _this = this;
        if (val == "sold") {
            var filter_deleteitmsold = {
                user_id: this.localItem.id,
                sold: true
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-deleted-product', filter_deleteitmsold, function (response) {
                if (response.deleted_product.status = "success") {
                    _this.deleteItem = response.deleted_product;
                }
                else {
                }
            }, function (error) {
                console.log(error);
            });
        }
        else if (val == "unsold") {
            var filter_deleteitmunsold = {
                user_id: this.localItem.id,
                unsold: true
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-deleted-product', filter_deleteitmunsold, function (response) {
                if (response.deleted_product.status = "success") {
                    _this.deleteItem = response.deleted_product;
                }
                else {
                }
            }, function (error) {
                console.log(error);
            });
        }
        else if (val == "CurrentMonth") {
            var filter_deleteCurrentMonth = {
                user_id: this.localItem.id,
                current_month: true
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-deleted-product', filter_deleteCurrentMonth, function (response) {
                if (response.deleted_product.status = "success") {
                    _this.deleteItem = response.deleted_product;
                }
                else {
                }
            }, function (error) {
                console.log(error);
            });
        }
        else if (val == "LastMonth") {
            var filter_deleteLastMonth = {
                user_id: this.localItem.id,
                last_month: true
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-deleted-product', filter_deleteLastMonth, function (response) {
                if (response.deleted_product.status = "success") {
                    _this.deleteItem = response.deleted_product;
                }
                else {
                }
            }, function (error) {
                console.log(error);
            });
        }
        else if (val == "Last60Days") {
            var filter_deleteLastDays = {
                user_id: this.localItem.id,
                last60days: true
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-deleted-product', filter_deleteLastDays, function (response) {
                if (response.deleted_product.status = "success") {
                    _this.deleteItem = response.deleted_product;
                }
                else {
                }
            }, function (error) {
                console.log(error);
            });
        }
        else if (val == "recently") {
            var filter_deleterecently = {
                user_id: this.localItem.id,
                recently: true
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-deleted-product', filter_deleterecently, function (response) {
                if (response.deleted_product.status = "success") {
                    _this.deleteItem = response.deleted_product;
                }
                else {
                }
            }, function (error) {
                console.log(error);
            });
        }
        else if (val == "asc") {
            var filter_deleteasc = {
                user_id: this.localItem.id,
                price: val
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-deleted-product', filter_deleteasc, function (response) {
                if (response.deleted_product.status = "success") {
                    _this.deleteItem = response.deleted_product;
                }
                else {
                }
            }, function (error) {
                console.log(error);
            });
        }
        else if (val == "desc") {
            var filter_deletedesc = {
                user_id: this.localItem.id,
                price: val
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-deleted-product', filter_deletedesc, function (response) {
                if (response.deleted_product.status = "success") {
                    _this.deleteItem = response.deleted_product;
                }
                else {
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    SellerMyAccountPage.prototype.deleteItems = function (val) {
        var totallengthcheckbox = $("input[type=checkbox][name=chkdltitem]").length;
        var totallengthcheckboxchecked = $("input[type=checkbox][name=chkdltitem]:checked").length;
        if (val == "single") {
            if (parseInt(totallengthcheckbox) == parseInt(totallengthcheckboxchecked)) {
                $('#checkAlldeleteItem').prop('checked', true);
            }
            else {
                $('#checkAlldeleteItem').prop('checked', false);
            }
        }
        else if (val == "multiple") {
            if ($('#checkAlldeleteItem').prop('checked') == true) {
                $.each($("input[name='chkdltitem']"), function () {
                    $(this).prop('checked', true);
                });
            }
            else {
                $.each($("input[name='chkdltitem']"), function () {
                    $(this).prop('checked', false);
                });
            }
        }
    };
    SellerMyAccountPage.prototype.undeleteItem = function () {
        var _this = this;
        var undelete_array = [];
        $.each($("input[name='chkdltitem']:checked"), function () {
            undelete_array.push($(this).val());
        });
        if (undelete_array.length <= 0) {
            $('#dangeralert').removeClass('hide');
        }
        else {
            $('#dangeralert').addClass('hide');
            var undeleteItem_data = {
                user_id: this.localItem.id,
                product_id: undelete_array
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/undelete-product', undeleteItem_data, function (response) {
                if (response.status = "success") {
                    _this.infoService.hideLoading();
                    _this.viewDeleteItem();
                }
                else {
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.closeDiv_Delete = function (val) {
        if (val == 'success') {
            $('#success-alert').addClass('hide');
        }
        else if (val == 'danger') {
            $('#dangeralert').addClass('hide');
        }
    };
    SellerMyAccountPage.prototype.viewFeedbackData = function (val) {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            if (val == "all") {
                var feedback_data_all = {
                    user_id: this.localItem.id
                };
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/feedback/view-feedback', feedback_data_all, function (response) {
                    _this.feedbacklistdata = response.feedback.data;
                    _this.infoService.hideLoading();
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
            else if (val == "seller") {
                var feedback_data_seller = {
                    receiver_id: this.localItem.id,
                    user_role: 'seller'
                };
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/feedback/view-feedback', feedback_data_seller, function (response) {
                    _this.feedbacklistSeller = response.feedback.data;
                    _this.infoService.hideLoading();
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
            else if (val == "buyer") {
                var feedback_data_buyer = {
                    receiver_id: this.localItem.id,
                    user_role: 'buyer'
                };
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/feedback/view-feedback', feedback_data_buyer, function (response) {
                    _this.feedbacklistBuyer = response.feedback.data;
                    _this.infoService.hideLoading();
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
            this.feedback_monthwise();
        }
    };
    SellerMyAccountPage.prototype.getServerData = function (event) {
        var _this = this;
        var feedbackdata_pagination = {
            receiver_id: this.localItem.id
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/feedback/view-feedback?page=' + event, feedbackdata_pagination, function (response) {
            _this.feedbacklistdata = response.feedback.data;
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    SellerMyAccountPage.prototype.getServerData_seller = function (event) {
        var _this = this;
        var feedbackdata_sellerpagination = {
            receiver_id: this.localItem.id,
            user_role: 'seller'
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/feedback/view-feedback?page=' + event, feedbackdata_sellerpagination, function (response) {
            _this.feedbacklistSeller = response.feedback.data;
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    SellerMyAccountPage.prototype.getServerData_buyer = function (event) {
        var _this = this;
        var feedbackdata_buyerpagination = {
            receiver_id: this.localItem.id,
            user_role: 'buyer'
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/feedback/view-feedback?page=' + event, feedbackdata_buyerpagination, function (response) {
            _this.feedbacklistBuyer = response.feedback.data;
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    SellerMyAccountPage.prototype.feedback_monthwise = function () {
        var _this = this;
        var month_wise = {
            reciever_id: this.localItem.id
        };
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/feedback/view-feedback-rating', month_wise, function (response) {
            if (response.feedback.status == "success") {
                _this.feedbacklistmonth = response.feedback.data;
            }
            else {
                _this.feedbacklistmonth = response;
            }
        }, function (error) {
            console.log(error);
        });
        this.feedback_sellerRating();
    };
    SellerMyAccountPage.prototype.feedback_sellerRating = function () {
        var _this = this;
        var seller_wise = {
            user_id: this.localItem.id
        };
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/feedback/view-seller-rating', seller_wise, function (response) {
            if (response.feedback.status == "success") {
                _this.showseller_rating = response.feedback.data;
            }
            else {
                _this.showseller_rating = response;
            }
        }, function (error) {
            console.log(error);
        });
    };
    SellerMyAccountPage.prototype.viewpurchaseProducts = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var purchaseProducts_data = {
                user_id: this.localItem.id
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/checkout/view-purchase-products', purchaseProducts_data, function (response) {
                if (response.purchase_products.status == "success") {
                    _this.viewpurchaseProductsdata = response.purchase_products;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.viewpurchaseProducts_seller = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var sellProducts_data = {
                user_id: this.localItem.id
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-sold-product', sellProducts_data, function (response) {
                if (response.sold_product.status == "success") {
                    _this.viewsellProductsdata = response.sold_product;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.viewpurchaseProducts_userList = function (val) {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var sellProducts_data = {
                product_id: val
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-product-purchase-user-list', sellProducts_data, function (response) {
                if (response.user_list.status == "success") {
                    _this.viewuserListdata = response.user_list;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.submitResolution = function () {
        var _this = this;
        var other_reson;
        var usrrole;
        var radio_value = $('input[type=radio][name=radiogroup]:checked').val();
        if (radio_value == "other") {
            other_reson = $('#buyreason').val();
            usrrole = 'buyer';
        }
        else {
            other_reson = $('input[type=radio][name=radiogroup]:checked').val();
            usrrole = "buyer";
        }
        var resolution_centerData = {
            product_id: $('#productname').children(":selected").attr("id"),
            user_role: usrrole,
            seller_id: $('#hidden_id').val(),
            buyer_id: this.localItem.id,
            question: other_reson,
            order_id: $('#productname').children(":selected").attr("class"),
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/resolution-center/add-resolution-center', resolution_centerData, function (response) {
            if (response.resolution_center.status == "success") {
                _this.infoService.hideLoading();
                $('#success-alert-resolution').removeClass('hide');
                $('#success-span-resolution').text(response.resolution_center.msg + " your ticket id is " + response.resolution_center.ticket_id);
            }
            else {
                _this.infoService.hideLoading();
            }
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    SellerMyAccountPage.prototype.submitResolution_seller = function () {
        var _this = this;
        var other_reson;
        var usrrole;
        var radio_value = $('input[type=radio][name=radiogroup_seller]:checked').val();
        if (radio_value == "othersold") {
            other_reson = $('#soldreason_seller').val();
            usrrole = 'seller';
        }
        else {
            other_reson = $('input[type=radio][name=radiogroup_seller]:checked').val();
            usrrole = "seller";
        }
        var resolution_centerData = {
            product_id: $('#productname_seller').val(),
            user_role: usrrole,
            seller_id: this.localItem.id,
            buyer_id: $('#userlistname').val(),
            question: other_reson,
            order_id: $('#userlistname').children(":selected").attr('id')
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/resolution-center/add-resolution-center', resolution_centerData, function (response) {
            if (response.resolution_center.status == "success") {
                _this.infoService.hideLoading();
                $('#success-alert-resolution-seller').removeClass('hide');
                $('#success-span-resolution-seller').text(response.resolution_center.msg + " your ticket id is " + response.resolution_center.ticket_id);
            }
            else {
                _this.infoService.hideLoading();
            }
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    SellerMyAccountPage.prototype.viewReturnData = function (val) {
        var _this = this;
        var resolution_viewPro;
        if (this.localItem == null) {
        }
        else {
            if (val == 'All' || val == '') {
                resolution_viewPro = {
                    user_id: this.localItem.id,
                    user_role: 'seller' /*this.localItem.role*/
                };
            }
            else if (val == 'Buyer' || val == '') {
                resolution_viewPro = {
                    user_id: this.localItem.id,
                    user_role: 'buyer'
                };
            }
            else if (val == 'one_day') {
                resolution_viewPro = {
                    user_id: this.localItem.id,
                    user_role: this.localItem.role,
                    one_day: true
                };
            }
            else if (val == 'current_week') {
                resolution_viewPro = {
                    user_id: this.localItem.id,
                    user_role: this.localItem.role,
                    current_week: true
                };
            }
            else if (val == 'current_month') {
                resolution_viewPro = {
                    user_id: this.localItem.id,
                    user_role: this.localItem.role,
                    current_month: true
                };
            }
            else if (val == 'two_month') {
                resolution_viewPro = {
                    user_id: this.localItem.id,
                    user_role: this.localItem.role,
                    two_month: true
                };
            }
            else if (val == 'six_month') {
                resolution_viewPro = {
                    user_id: this.localItem.id,
                    user_role: this.localItem.role,
                    six_month: true
                };
            }
            else if (val == 'twelve_month') {
                resolution_viewPro = {
                    user_id: this.localItem.id,
                    user_role: this.localItem.role,
                    twelve_month: true
                };
            }
            else if (val == 'eighteen_month') {
                resolution_viewPro = {
                    user_id: this.localItem.id,
                    user_role: this.localItem.role,
                    eighteen_month: true
                };
            }
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/resolution-center/view-resolution-products', resolution_viewPro, function (response) {
                if (response.resolution_products.status == "success") {
                    _this.infoService.hideLoading();
                    _this.returnviewData = response.resolution_products;
                    _this.getAllCount();
                }
                else {
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.showreturnThread = function (val_buyer, val_seller, val_pro, val_ticket) {
        var return_thread = {
            buyer_id: val_buyer,
            seller_id: val_seller,
            product_id: val_pro,
            ticketId: val_ticket
        };
        var convert_stringify = JSON.stringify(return_thread);
        var convert_encode = btoa(convert_stringify);
        this.navCtrl.push('ReplayResolutionPage', {
            id: convert_encode
        });
    };
    SellerMyAccountPage.prototype.showBuyerMessageData = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var msgList = {
                user_id: this.localItem.id,
                user_role: 'buyer'
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/message/message-list', msgList, function (response) {
                if (response.message.status == "success") {
                    _this.msgData_buyer = response.message;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.searchMessage_buyer = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var search_message = {
                search: $('#mysearch_buyer').val(),
                user_id: this.localItem.id,
                user_role: 'buyer',
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/message/message-list', search_message, function (response) {
                if (response.message.status == "success") {
                    _this.msgData_buyer = response.message;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.searchMessage = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var search_message = {
                search: $('#mysearch').val(),
                user_id: this.localItem.id,
                user_role: 'seller',
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/message/message-list', search_message, function (response) {
                if (response.message.status == "success") {
                    _this.msgData = response.message;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    SellerMyAccountPage.prototype.soldviewfeedbackData = function (val) {
        var _this = this;
        var feedbackall = {
            receiver_id: this.localItem.id,
            product_id: val
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/feedback/view-feedback', feedbackall, function (response) {
            _this.showonlyfeedback = response.feedback.data;
            _this.soldviewfeedback = true;
            _this.infoService.hideLoading();
        }, function (error) {
            _this.soldviewfeedback = false;
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    SellerMyAccountPage.prototype.hideFeedbackData = function () {
        this.soldviewfeedback = false;
    };
    SellerMyAccountPage.prototype.getServerDataFeedbackonly = function (event) {
        var _this = this;
        var feedbackall_pagination = {
            receiver_id: this.localItem.id,
            product_id: this.showonlyfeedback.data[0].product_id
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/feedback/view-feedback?page=' + event, feedbackall_pagination, function (response) {
            _this.showonlyfeedback = response.feedback.data;
            _this.soldviewfeedback = true;
            _this.infoService.hideLoading();
        }, function (error) {
            _this.soldviewfeedback = false;
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    SellerMyAccountPage.prototype.viewItemSearch = function (val, val1) {
        if (val1 == "viewSearch") {
            var pass_data = {
                id: val,
                view_item: 'viewItme',
                check_search: ''
            };
            var convert_stringify = JSON.stringify(pass_data);
            var convert_encode = btoa(convert_stringify);
            this.navCtrl.push('AdvanceSearchDataPage', {
                id: convert_encode
            });
        }
        else if (val1 == "editSearch") {
            var pass_data = {
                id: val,
                view_item: 'viewItme',
                check_search: 'editSearch'
            };
            var convert_stringify = JSON.stringify(pass_data);
            var convert_encode = btoa(convert_stringify);
            this.navCtrl.push('AdvanceSearchDataPage', {
                id: convert_encode
            });
        }
    };
    SellerMyAccountPage.prototype.editBusinessuserName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'User name',
                    type: 'text'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    },
                    cssClass: 'theme-light-btn'
                },
                {
                    text: 'Submit',
                    cssClass: 'theme-light-btn',
                    handler: function (data) {
                        if (data.username == '')
                            return false;
                        if (data.username.length > 20) {
                            var alert_msg = _this.alertCtrl.create({
                                title: 'Change Username',
                                subTitle: 'Maximum length is 20.',
                                buttons: [{
                                        text: 'OK',
                                        role: 'cancel',
                                        cssClass: 'alert-button-changeColor'
                                    }]
                            });
                            alert_msg.present();
                            return false;
                        }
                        var change_username = {
                            user_id: _this.localItem.id,
                            user_name: data.username
                        };
                        _this.infoService.showLoading();
                        _this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/change-username', change_username, function (response) {
                            if (response.user.status == "success") {
                                var persons = _this.localItem;
                                persons.display_name = data.username;
                                localStorage.setItem('userInfo', JSON.stringify(persons));
                                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                            }
                            _this.infoService.hideLoading();
                        }, function (error) {
                            console.log(error);
                            _this.infoService.hideLoading();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SellerMyAccountPage.prototype.editBusinessname = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change business name',
            inputs: [
                {
                    name: 'business_name',
                    placeholder: 'Business name',
                    type: 'text'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    },
                    cssClass: 'theme-light-btn'
                },
                {
                    text: 'Submit',
                    cssClass: 'theme-light-btn',
                    handler: function (data) {
                        if (data.business_name == '')
                            return false;
                        if (data.business_name.length > 20) {
                            var alert_msg = _this.alertCtrl.create({
                                title: 'Change business name',
                                subTitle: 'Maximum length is 20.',
                                buttons: [{
                                        text: 'OK',
                                        role: 'cancel',
                                        cssClass: 'alert-button-changeColor'
                                    }]
                            });
                            alert_msg.present();
                            return false;
                        }
                        var change_businessname = {
                            id: _this.localItem.id,
                            key: 'business_name',
                            value: data.business_name
                        };
                        _this.infoService.showLoading();
                        _this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/edit-business-info', change_businessname, function (response) {
                            if (response.users.status == "success") {
                                var persons = _this.localItem;
                                persons.business_name = data.business_name;
                                localStorage.setItem('userInfo', JSON.stringify(persons));
                                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                            }
                            _this.infoService.hideLoading();
                        }, function (error) {
                            console.log(error);
                            _this.infoService.hideLoading();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SellerMyAccountPage.prototype.editBusinessuserpassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Password',
            inputs: [
                {
                    name: 'currentpassword',
                    placeholder: 'Password',
                    type: 'password'
                },
                {
                    name: 'newpassword',
                    placeholder: 'New Password',
                    type: 'password'
                },
                {
                    name: 'confirmpassword',
                    placeholder: 'Confirm Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    },
                    cssClass: 'theme-light-btn'
                },
                {
                    text: 'Submit',
                    cssClass: 'theme-light-btn',
                    handler: function (data) {
                        if (data.newpassword != data.confirmpassword) {
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Change Password',
                                subTitle: 'Password Not Match',
                                buttons: [{
                                        text: 'OK',
                                        role: 'cancel',
                                        cssClass: 'alert-button-changeColor'
                                    }]
                            });
                            alert_1.present();
                            return false;
                        }
                        else {
                            if (data.currentpassword == '')
                                return false;
                            if (data.newpassword == '')
                                return false;
                            if (data.confirmpassword == '')
                                return false;
                            if (data.newpassword.length < 6) {
                                var alert_newpassword = _this.alertCtrl.create({
                                    title: 'Change Password',
                                    subTitle: 'minimum length is 6.',
                                    buttons: [{
                                            text: 'OK',
                                            role: 'cancel',
                                            cssClass: 'alert-button-changeColor'
                                        }]
                                });
                                alert_newpassword.present();
                                return false;
                            }
                            var change_password = {
                                old_password: data.currentpassword,
                                new_password: data.newpassword,
                                user_id: _this.localItem.id
                            };
                            _this.infoService.showLoading();
                            _this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/change-password', change_password, function (response) {
                                var alert1 = _this.alertCtrl.create({
                                    title: 'Change Password',
                                    subTitle: response.user.msg,
                                    buttons: [{
                                            text: 'OK',
                                            role: 'cancel',
                                            cssClass: 'alert-button-changeColor'
                                        }]
                                });
                                alert1.present();
                                _this.infoService.hideLoading();
                            }, function (error) {
                                console.log(error);
                                _this.infoService.hideLoading();
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    SellerMyAccountPage.prototype.editBusinessrelationship = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Business relationship',
            inputs: [
                {
                    type: 'radio',
                    label: 'Approved Seller',
                    value: 'Approved Seller',
                    checked: true
                },
                {
                    type: 'radio',
                    label: 'Director',
                    value: 'Director'
                },
                {
                    type: 'radio',
                    label: 'Manager',
                    value: 'Manager'
                },
                {
                    type: 'radio',
                    label: 'Owner',
                    value: 'Owner'
                },
                {
                    type: 'radio',
                    label: 'Partner',
                    value: 'Partner'
                },
                {
                    type: 'radio',
                    label: 'Other',
                    value: 'Other'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    },
                    cssClass: 'theme-light-btn'
                },
                {
                    text: 'Submit',
                    cssClass: 'theme-light-btn',
                    handler: function (data) {
                        var change_businessrelationship = {
                            id: _this.localItem.id,
                            key: 'business_relationship',
                            value: ''
                        };
                        if (data == 'Other') {
                            var alert1 = _this.alertCtrl.create({
                                title: 'Change business relationship',
                                inputs: [
                                    {
                                        name: 'other',
                                        placeholder: 'Other relationship',
                                        type: 'text'
                                    }
                                ],
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: function (data) {
                                        },
                                        cssClass: 'theme-light-btn'
                                    },
                                    {
                                        text: 'Submit',
                                        cssClass: 'theme-light-btn',
                                        handler: function (data) {
                                            if (data.other == '')
                                                return false;
                                            change_businessrelationship.value = data.other;
                                            _this.infoService.showLoading();
                                            _this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/edit-business-info', change_businessrelationship, function (response) {
                                                if (response.users.status == "success") {
                                                    var persons = _this.localItem;
                                                    persons.business_relationship = data.other;
                                                    localStorage.setItem('userInfo', JSON.stringify(persons));
                                                    __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                                                }
                                                _this.infoService.hideLoading();
                                            }, function (error) {
                                                console.log(error);
                                                _this.infoService.hideLoading();
                                            });
                                        }
                                    }
                                ]
                            });
                            alert1.present();
                        }
                        else {
                            change_businessrelationship.value = data;
                            _this.infoService.showLoading();
                            _this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/edit-business-info', change_businessrelationship, function (response) {
                                if (response.users.status == "success") {
                                    var persons = _this.localItem;
                                    persons.business_relationship = data;
                                    localStorage.setItem('userInfo', JSON.stringify(persons));
                                    __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                                }
                                _this.infoService.hideLoading();
                            }, function (error) {
                                console.log(error);
                                _this.infoService.hideLoading();
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    SellerMyAccountPage.prototype.editBusinesscompno = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change company number',
            inputs: [
                {
                    name: 'company_number',
                    placeholder: 'Company number',
                    type: 'text'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    },
                    cssClass: 'theme-light-btn'
                },
                {
                    text: 'Submit',
                    cssClass: 'theme-light-btn',
                    handler: function (data) {
                        if (data.company_number == '')
                            return false;
                        if (data.company_number.length > 30) {
                            var alert_company_number = _this.alertCtrl.create({
                                title: 'Change company number',
                                subTitle: 'Maximum length is 30.',
                                buttons: [{
                                        text: 'OK',
                                        role: 'cancel',
                                        cssClass: 'alert-button-changeColor'
                                    }]
                            });
                            alert_company_number.present();
                            return false;
                        }
                        var change_compno = {
                            id: _this.localItem.id,
                            key: 'company_number',
                            value: data.company_number
                        };
                        _this.infoService.showLoading();
                        _this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/edit-business-info', change_compno, function (response) {
                            if (response.users.status == "success") {
                                var persons = _this.localItem;
                                persons.company_number = data.company_number;
                                localStorage.setItem('userInfo', JSON.stringify(persons));
                                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                            }
                            _this.infoService.hideLoading();
                        }, function (error) {
                            console.log(error);
                            _this.infoService.hideLoading();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SellerMyAccountPage.prototype.editBusinessvatno = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Vat number',
            inputs: [
                {
                    name: 'vat_number',
                    placeholder: 'Vat number',
                    type: 'text'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    },
                    cssClass: 'theme-light-btn'
                },
                {
                    text: 'Submit',
                    cssClass: 'theme-light-btn',
                    handler: function (data) {
                        if (data.vat_number == '')
                            return false;
                        if (data.vat_number.length > 20) {
                            var alert_vat_number = _this.alertCtrl.create({
                                title: 'Change Vat number',
                                subTitle: 'Maximum length is 20.',
                                buttons: [{
                                        text: 'OK',
                                        role: 'cancel',
                                        cssClass: 'alert-button-changeColor'
                                    }]
                            });
                            alert_vat_number.present();
                            return false;
                        }
                        var change_vatno = {
                            id: _this.localItem.id,
                            key: 'vat_number',
                            value: data.vat_number
                        };
                        _this.infoService.showLoading();
                        _this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/edit-business-info', change_vatno, function (response) {
                            if (response.users.status == "success") {
                                var persons = _this.localItem;
                                persons.vat_number = data.vat_number;
                                localStorage.setItem('userInfo', JSON.stringify(persons));
                                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                            }
                            _this.infoService.hideLoading();
                        }, function (error) {
                            console.log(error);
                            _this.infoService.hideLoading();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SellerMyAccountPage.prototype.editBusinessAddress = function () {
        var obj = {
            user_Id: this.localItem.id,
            val: 'Address'
        };
        var modalPage = this.modalCtrl.create('BusinessinfoEditPage', obj, { enableBackdropDismiss: false });
        modalPage.present();
    };
    SellerMyAccountPage.prototype.editBusinessmobile = function () {
        var obj = {
            user_Id: this.localItem.id,
            val: 'Phone'
        };
        var modalPage = this.modalCtrl.create('BusinessinfoEditPage', obj, { enableBackdropDismiss: false });
        modalPage.present();
    };
    SellerMyAccountPage.prototype.editPayment = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change PayPal account',
            inputs: [
                {
                    name: 'paypal_email',
                    placeholder: 'PayPal Email',
                    type: 'email'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    },
                    cssClass: 'theme-light-btn'
                },
                {
                    text: 'Submit',
                    cssClass: 'theme-light-btn',
                    handler: function (data) {
                        if (data.paypal_email == '')
                            return false;
                        var pass_data = {
                            paypal_email: data.paypal_email
                        };
                        _this.infoService.showLoading();
                        _this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/pay/verify-paypal-email', pass_data, function (response) {
                            _this.infoService.hideLoading();
                            if (response.responseEnvelope.ack == "Failure") {
                                var alert1 = _this.alertCtrl.create({
                                    title: 'PayPal verification',
                                    subTitle: 'Please enter valid PayPal email address.',
                                    buttons: [{
                                            text: 'OK',
                                            role: 'cancel',
                                            cssClass: 'alert-button-changeColor'
                                        }]
                                });
                                alert1.present();
                            }
                            else {
                                _this.updatePayPalEmail(data.paypal_email);
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SellerMyAccountPage.prototype.updatePayPalEmail = function (val) {
        var _this = this;
        var change_paymentemail = {
            id: this.localItem.id,
            key: 'payment_email',
            value: val
        };
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/edit-business-info', change_paymentemail, function (response) {
            if (response.users.status == "success") {
                var persons = _this.localItem;
                persons.payment_email = val;
                localStorage.setItem('userInfo', JSON.stringify(persons));
                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
            }
        }, function (error) {
            console.log(error);
        });
    };
    SellerMyAccountPage.prototype.gotoeditProduct = function (val, val1) {
        var obj = {
            product_id: val,
            product_page: val1
        };
        var convert_stringifyobj = JSON.stringify(obj);
        var convert_encodefeedback = btoa(convert_stringifyobj);
        this.navCtrl.push('EditProduct', {
            id: convert_encodefeedback
        });
    };
    SellerMyAccountPage.prototype.gotospecificProfile = function (val, val1) {
        if (val1 == "seller") {
            this.navCtrl.push('UserProfilePage', {
                id: val
            });
        }
        else if (val1 == "buyer") {
            this.navCtrl.push('BuyerProfilePage', {
                id: val
            });
        }
    };
    SellerMyAccountPage.prototype.gotorelistProduct = function (val, val1) {
        
        
        var change_status ={
			id:this.localItem.id,
			value : val
		}
        this.edit_product_val.status = 1;
        this.edit_product_val.id = change_status.value;
        this.edit_product_val.user_id = change_status.id;
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl +  'api/product/relist-product',this.edit_product_val,(response)=> {
                if(response.status == "success"){
                        this.infoService.hideLoading();
                        this.ifproductedit = true;
                        var self_this = this;
                        alert(response.msg);
                        setTimeout(function(){
                            
                                self_this.navCtrl.push('SellerMyAccountPage', {
                id: 'account'
            });
                                self_this.ifproductedit = false;
                        },2500);
                }else{
                        this.editproductResponse = response;
                        $('#dangeralert').removeClass('hide');
                        this.infoService.hideLoading();
                }
        }, function (error) {
                console.log(error);
                this.infoService.hideLoading();
        });
        };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SellerMyAccountPage.prototype, "content", void 0);
    SellerMyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-seller-my-account',
            templateUrl:'src/pages/seller-my-account/seller-my-account.html',
            //template:/*ion-inline-start:"/var/www/html/src/pages/seller-my-account/seller-my-account.html"*/'<ion-content padding>\n	<div class="seller-account">\n		<div class="wrapper">\n			<div class="container mb-3">\n				<div class="row">\n					<div class="col-lg-12 col-md-12 col-xl-12 col-12 mt-lg-4 mt-xl-4">\n						<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n						<p class="mb-2 setFont-size"><a href="#/home" class="breadcrumblink">Home</a> &nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n							<a class="breadcrumblink" disabled="">My Dibdaa</a>\n						</p>\n					</div>\n					<div class="col-lg-12 col-md-12 col-12 mt-3">\n						<h5 class="mb-3 mb-lg-0 mb-md-0" *ngIf="localItem != null && localItem?.role == \'seller\'">My Dibdaa <span class="pl-1 pl-lg-2 pl-md-2 profilename"><a class="text-primary" (click)="gotospecificProfile(localItem?.id,\'seller\')">{{localItem?.display_name}}</a></span></h5>\n						<h5 class="mb-3 mb-lg-0 mb-md-0" *ngIf="localItem != null && localItem?.role == \'buyer\'">My Dibdaa <span class="pl-1 pl-lg-2 pl-md-2 profilename"><a class="text-primary" (click)="gotospecificProfile(localItem?.id,\'buyer\')">{{localItem?.display_name}}</a></span></h5>\n					</div>\n					<div class="col-lg-12 col-md-12 col-xl-12 col-12 mt-lg-4 mt-xl-4 my-account-tab-panel">\n						<ul class="nav nav-tabs my-account-tab-ul" role="tablist">\n							<li class="nav-item">\n								<a class="nav-link active" href="#activity" id="activity-info" role="tab" data-toggle="tab" (click)="showbidinfo()">My Activity</a>\n							</li>\n							<li class="nav-item">\n								<a class="nav-link" href="#account" id="business-info" role="tab" data-toggle="tab" (click)="showBusinessinfo()">Account</a>\n							</li>\n							<li class="nav-item">\n								<a class="nav-link" href="#messages" role="tab" data-toggle="tab" id="msg" (click)="showMessageList()">Messages</a>\n							</li>\n						</ul>\n\n						<!-- Tab panes -->\n						<div class="tab-content my-account-tab-content">\n							<div role="tabpanel" class="messages-listing tab-pane fade in active show" id="activity">\n								<div class="row m-0">\n									<div class="col-lg-2 col-md-3 col-xl-2 col-12 mb-2 pr-lg-2 pl-0 pr-0 pr-md-2">\n										<div id="MainMenu" class="categoryvarticlemenu">\n											<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg mt-2 mb-2">\n												<h6 class="m-0 text-left"> Summary</h6>\n											</div>\n											<div class="list-group panel">\n												<a href="#multiitem1" class="list-group-item font-weight-bold"  data-toggle="collapse"  data-parent="#MainMenu">Buy <i class="fa fa-caret-down category-arrow"></i></a>\n												<div class="collapse pb-3 collapseborder show" id="multiitem1">\n													<a class="list-group-item showSeller Bids" target="1" id="Bids" (click)="showBidsData()">Bids / Offers</a>\n												</div>\n												<a href="#multiitem2" class="list-group-item font-weight-bold" data-toggle="collapse" data-parent="#MainMenu">Lists<i class="fa fa-caret-down category-arrow"></i></a>\n												<div class="collapse pb-3 collapseborder show" id="multiitem2">\n													<a class="list-group-item showSeller WishList" target="16" (click)="showwishList()" id="WishList">Wish List ({{allCountData?.wishlist || 0}})</a>\n													<a class="list-group-item showSeller SavedSearches" target="4" id="SavedSearches" (click)="showSaveSearch()">Saved Searches ({{allCountData?.save_search || 0}})</a>\n													<a class="list-group-item showSeller SavedSellers" target="5" (click)="viewSeller()" id="SavedSellers">Saved Sellers ({{allCountData?.save_seller || 0}})</a>\n													<a class="list-group-item showSeller PurchaseHistory" target="17" (click)="viewpurchaseHistory(\'All\',\'\')" id="PurchaseHistory">Purchase History ({{allCountData?.purchase_count || 0}})</a>\n												</div>\n												<a href="#multiitem3" class="list-group-item font-weight-bold" data-toggle="collapse" data-parent="#MainMenu">Sell<i class="fa fa-caret-down category-arrow"></i></a>\n												<div class="collapse pb-3 collapseborder show" id="multiitem3">\n													<a class="list-group-item showSeller Active" target="10" id="clickActive" (click)="viewActiveItem()">Active ({{allCountData?.active || 0}})</a>\n													<a class="list-group-item showSeller SavedDrafts" target="8" (click)="viewProduct()" id="clickSaveddrafts">Saved Drafts ({{allCountData?.draft || 0}}) </a>\n													<a class="list-group-item showSeller Sold" target="11" id="clickSold" (click)="viewSoldItem(\'All\')">Sold ({{allCountData?.sold || 0}})</a>\n													<a class="list-group-item showSeller SellerInvoice" target="18" id="clicksellerInvoice" (click)="viewInvoiceData()">Seller Invoice</a>\n													<a class="list-group-item showSeller" target="12" id="clickUnSold" (click)="viewUnsoldItem()">Unsold ({{allCountData?.unsold || 0}})</a>\n													<a class="list-group-item showSeller return" target="14" id="clickReturns" (click)="viewReturnData(\'All\')">Queries ({{allCountData?.return || 0}})</a>\n													<a class="list-group-item showSeller" target="15" id="clickDeleted" (click)="viewDeleteItem()">Deleted ({{allCountData?.delete || 0}})</a>\n												</div>\n											</div>\n										</div>\n									</div>\n									\n									<div class="col-lg-10 col-md-9 col-xl-10 col-12 mt-2 mb-2 pl-lg-2 pl-0 pr-0">\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 showTargetDiv my-account-verticle-tab-div1" id="my-account-verticle-tab-div1">\n											<div class="row mt-0 ml-0 mr-0 mb-2 my-dibdaa-views">\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-0 pl-lg-3 pl-md-3 pr-0">\n													<div class="row m-0">\n														<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 frontbg pl-3 mb-3 pt-2 pb-2">\n															<h6 class="m-0 text-left">Bidding</h6>\n														</div>\n													</div>\n													<div class="row m-0">\n														<div class="col-lg-12 col-md-12 col-12 p-0">\n															<div class="table-responsive">\n																<table class="table table-sm wish-list-table setFont-size">\n																	<thead class="thead-light">\n																		<tr>\n																			<th scope="col" class="wish-th-img text-center">\n																				Image\n																			</th>\n																			<th scope="col" class="wish-th-desc">\n																				Description\n																			</th>\n																			<th scope="col" class="wish-th">Time\n																				Left\n																			</th>\n																			<th scope="col" class="">Bids/Price</th>\n																			<th scope="col" class="wish-th">\n																				Actions\n																			</th>\n																		</tr>\n																	</thead>\n																	<tbody *ngIf="bidsData?.data.length <= 0;else showAllbids">\n																		<tr>\n																			<td class="text-center" colspan="5">\n																				You are not bidding on any items.\n																			</td>\n																		</tr>\n																	</tbody>\n																	<ng-template #showAllbids>\n																		<tbody *ngFor="let bdsdata of bidsData?.data | paginate: {itemsPerPage: 5, currentPage:page_bidding, id: \'page_biddingId\', totalItems:bidsData?.data.length};let i=index;">\n																			<tr>\n																				<td rowspan="4" class="border-bottom-td">\n																					<div class="wstbootslider clearfix">\n																						<div id="small-slider" class="carousel slide" data-ride="carousel">\n																							<div class="carousel-inner">\n																								<div class="carousel-item active text-center">\n																									<img src="{{trandingImgUrl}}{{bdsdata?.product_id}}/L/{{bdsdata?.photos[0]}}" class="img-fluid product-bid-img" alt=""/>\n																								</div>\n																							</div>\n																						</div>\n																					</div>\n																				</td>\n																				<td>\n																					<a class="text-primary" (click)="goToProductDetails(bdsdata?.product_id)" title="{{bdsdata?.title}}">{{bdsdata?.title}}</a>\n																				</td>\n																				<td *ngIf="bdsdata?.time == \'Started\'">{{bdsdata?.days_left}}</td>\n																				<td *ngIf="bdsdata?.time == \'End\'">{{bdsdata?.time}}</td>\n																				<td class="text-success"><b>{{bdsdata?.max_bid}} AED</b></td>\n																				<td><b><a class="text-primary" (click)="viewSellerItem(bdsdata?.seller_id , bdsdata?.seller_name)">View seller\'s other items</a></b></td>\n																			</tr>\n																			<tr>\n																				<td class="border-0" colspan="2">( {{bdsdata?.product_sku}} )</td>\n																				<td class="border-0" colspan="2"><a class="text-primary" (click)="gotoBidsDetailpage(bdsdata?.product_id)">{{bdsdata?.bid_cnt}} bid</a></td>\n																			</tr>\n																			<tr>\n																				<td class="border-0" colspan="4"><a class="text-primary" (click)="gotouserProfile(bdsdata?.seller_id,\'UserProfile\')">{{bdsdata?.seller_name}}</a> | <a>{{bdsdata?.feedback_cnt}}</a> | {{bdsdata?.feedback_avg}}%</td>\n																				\n																			</tr>\n																			<tr>\n																				<td class="border-0 border-bottom-td" colspan="4"><b>Your max bid: </b>{{bdsdata?.my_max_bid}} AED</td>\n																			</tr>\n																		</tbody>\n																	</ng-template>\n																</table>\n															</div>\n														</div>\n													</div>\n													<div class="row ml-0 mr-0 mb-0 mt-0 bg-light text-right">\n														<div class="col-lg-12 col-md-12 col-12 paginationlist">\n															<pagination-controls (pageChange)="page_bidding = $event" id="page_biddingId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n														</div>\n													</div>\n												</div>\n											</div>\n											<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-0 pl-lg-3 pl-md-3 pr-0">\n												<div class="row m-0">\n													<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 frontbg pl-3 mb-3 pt-2 pb-2">\n														<h6 class="m-0 text-left"> Offers</h6>\n													</div>\n												</div>\n												<div class="row m-0">\n													<div class="col-lg-12 col-md-12 col-12 p-0">\n														<div class="table-responsive">\n															<table class="table table-sm wish-list-table setFont-size">\n																<thead class="thead-light">\n																	<tr>\n																		<th scope="col" class="wish-th-img text-center">\n																			Image\n																		</th>\n																		<th scope="col" class="wish-th-desc">\n																			Description\n																		</th>\n																		<th scope="col" class="wish-th">Time\n																			Left\n																		</th>\n																		<th scope="col" class="">Price</th>\n																		<th scope="col" class="wish-th">\n																			Status\n																		</th>\n																		<th scope="col" class="wish-th">\n																			Action\n																		</th>\n																	</tr>\n																</thead>\n																<tbody *ngIf="offerData?.data.length <= 0;else showoffer">\n																	<tr>\n																		<td class="text-center" colspan="6">\n																			You don\'t have any offers now.\n																		</td>\n																	</tr>\n																</tbody>\n																<ng-template #showoffer>\n																	<tbody *ngFor="let ofrdata of offerData?.data | paginate: {itemsPerPage: 5, currentPage:page_bidsall, id: \'page_bidsallID\', totalItems:offerData?.data.length};let i=index;">\n																		<tr>\n																			<td rowspan="4" class="border-bottom-td">\n																				<div class="wstbootslider clearfix">\n																					<div id="small-slider" class="carousel slide" data-ride="carousel">\n																						<div class="carousel-inner">\n																							<div class="carousel-item active text-center">\n																								<img src="{{trandingImgUrl}}{{ofrdata?.product_id}}/L/{{ofrdata?.photos[0]}}"  class="img-fluid product-bid-img" alt=""/>\n																							</div>\n																						</div>\n																					</div>\n																				</div>\n																			</td>\n																			<td>\n																				<a class="text-primary" (click)="goToProductDetails(ofrdata?.product_id)" title="{{ofrdata?.title}}">{{ofrdata?.title}}</a>\n																			</td>\n																			<td *ngIf="ofrdata?.time == \'Started\'">{{ofrdata?.days_left}}</td>\n																			<td *ngIf="ofrdata?.time == \'End\'">{{ofrdata?.time}}</td>\n																			<td class="text-success"><b>{{ofrdata?.price}} AED</b></td>\n																			<td><b>{{ofrdata?.offer_status}}</b></td>\n																			<td *ngIf="ofrdata?.offer_status == \'Accept\'"><a class="text-primary" (click)="buyNow(ofrdata?.buyer_id,ofrdata?.product_id,ofrdata?.quantity,ofrdata?.offer_price,ofrdata?.id)" title="Place order">Place order</a></td>\n																			<td *ngIf="ofrdata?.offer_status == \'Decline\'">Auto declined due to non response by seller.</td>\n																			<td *ngIf="ofrdata?.offer_status == \'Pending\'">Not accepted yet.</td>\n																			\n																		</tr>\n																		<tr>\n																			<td class="border-0" colspan="5">( {{ofrdata?.product_sku}} ) </td>\n																		</tr>\n																		<tr>\n																			<td class="border-0" colspan="5"><a class="text-primary" (click)="gotouserProfile(ofrdata?.seller_id,\'UserProfile\')">{{ofrdata?.seller_name}}</a> | <a>{{ofrdata?.feedback_cnt}}</a> | {{ofrdata?.feedback_avg}}%</td>\n																		</tr>\n																		<tr>\n																			<td class="border-0 border-bottom-td" colspan="5"><b>Your offer price: </b> {{ofrdata?.offer_price}} AED</td>\n																		</tr>\n																	</tbody>\n																</ng-template>\n															</table>\n														</div>\n													</div>\n												</div>\n												<div class="row ml-0 mr-0 mb-0 mt-0 bg-light text-right">\n													<div class="col-lg-12 col-md-12 col-12 paginationlist">\n														<pagination-controls (pageChange)="page_bidsall = $event" id="page_bidsallID" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n													</div>\n												</div>\n											</div>\n											<div class="row mt-2 ml-0 mr-0 mb-2 my-dibdaa-views">\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-0 pl-lg-3 pl-md-3 pr-0">\n													<div class="row m-0">\n														<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 frontbg pl-3 mb-3 pt-2 pb-2">\n															<h6 class="m-0 text-left"> Didn\'t Win </h6>\n														</div>\n													</div>\n													<div class="row m-0">\n														<div class="col-lg-12 col-md-12 col-12 p-0">\n															<div class="table-responsive">\n																<table class="table table-sm wish-list-table setFont-size">\n																	<thead class="thead-light">\n																		<tr>\n																			<th scope="col" class="wish-th-img text-center">\n																				Image\n																			</th>\n																			<th scope="col" class="wish-th-desc">\n																				Description\n																			</th>\n																			<th scope="col" class="wish-th">Time\n																				Left\n																			</th>\n																			<th scope="col" class="">Bids/Price</th>\n																			<th scope="col" class="wish-th">\n																				Actions\n																			</th>\n																		</tr>\n																	</thead>\n																	<tbody *ngIf="bidsNotWinData?.data.length <= 0;else shownotwin">\n																		<tr>\n																			<td class="text-center" colspan="5">\n																				You don\'t have any item to display.\n																			</td>\n																		</tr>\n																	</tbody>\n																	<ng-template #shownotwin>\n																		<tbody *ngFor="let bdsnotwindata of bidsNotWinData?.data | paginate: {itemsPerPage: 5, currentPage:page_notwin, id: \'page_notwinId\', totalItems:bidsNotWinData?.data.length};let i=index;">\n																			<tr>\n																				<td rowspan="4" class="border-bottom-td">\n																					<div class="wstbootslider clearfix">\n																						<div id="small-slider" class="carousel slide" data-ride="carousel">\n																							<div class="carousel-inner">\n																								<div class="carousel-item active text-center">\n																									<img src="{{trandingImgUrl}}{{bdsnotwindata?.product_id}}/L/{{bdsnotwindata?.photos[0]}}"  class="img-fluid product-bid-img" alt=""/>\n																								</div>\n																							</div>\n																						</div>\n																					</div>\n																				</td>\n																				<td>\n																					<a class="text-primary" (click)="goToProductDetails(bdsnotwindata?.product_id)" title="{{bdsnotwindata?.title}}">{{bdsnotwindata?.title}}</a>\n																				</td>\n																				<td *ngIf="bdsnotwindata?.time == \'Started\'">{{bdsnotwindata?.days_left}}</td>\n																				<td *ngIf="bdsnotwindata?.time == \'End\'">{{bdsnotwindata?.time}}</td>\n																				<td class="text-success"><b>{{bdsnotwindata?.max_bid}} AED</b></td>\n																				<td><b><a>-</a></b></td>\n																			</tr>\n																			<tr>\n																				<td class="border-0" colspan="2"> ( {{bdsnotwindata?.product_sku}} )</td>\n																				<td class="border-0" colspan="2"><a class="text-primary" (click)="gotoBidsDetailpage(bdsnotwindata?.product_id)">{{bdsnotwindata?.bid_cnt}} bid</a></td>\n																			</tr>\n																			<tr>\n																				<td class="border-0" colspan="4"><a class="text-primary" (click)="gotouserProfile(bdsnotwindata?.seller_id,\'UserProfile\')">{{bdsnotwindata?.seller_name}}</a> | <a>{{bdsnotwindata?.feedback_cnt}}</a> | {{bdsnotwindata?.feedback_avg}}%</td>\n																			</tr>\n																			<tr>\n																				<td class="border-0 border-bottom-td" colspan="4"><b>Your max bid: </b> {{bdsnotwindata?.my_max_bid}} AED </td>\n																			</tr>\n																		</tbody>\n																	</ng-template>\n																</table>\n															</div>\n														</div>\n													</div>\n													<div class="row ml-0 mr-0 mb-0 mt-0 bg-light text-right">\n														<div class="col-lg-12 col-md-12 col-12 paginationlist">\n															<pagination-controls (pageChange)="page_notwin = $event" id="page_notwinId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n														</div>\n													</div>\n												</div>\n											</div>\n											<div class="row mt-2 ml-0 mr-0 mb-2 my-dibdaa-views">\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-0 pl-lg-3 pl-md-3 pr-0">\n													<div class="row m-0">\n														<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 frontbg pl-3 mb-3 pt-2 pb-2">\n															<h6 class="m-0 text-left"> Win </h6>\n														</div>\n													</div>\n													<div class="row m-0">\n														<div class="col-lg-12 col-md-12 col-12 p-0">\n															<div class="table-responsive">\n																<table class="table table-sm wish-list-table setFont-size">\n																	<thead class="thead-light">\n																		<tr>\n																			<th scope="col" class="wish-th-img text-center">\n																				Image\n																			</th>\n																			<th scope="col" class="wish-th-desc">\n																				Description\n																			</th>\n																			<th scope="col" class="wish-th">Time\n																				Left\n																			</th>\n																			<th scope="col" class="">Bids/Price</th>\n																			<th scope="col" class="wish-th">\n																				Actions\n																			</th>\n																		</tr>\n																	</thead>\n																	<tbody *ngIf="bidsWinData?.data.length <= 0;else showbidswin">\n																		<tr>\n																			<td class="text-center" colspan="5">\n																				You don\'t have any item to display.\n																			</td>\n																		</tr>\n																	</tbody>\n																	<ng-template #showbidswin>\n																		<tbody *ngFor="let bdswindata of bidsWinData?.data | paginate: {itemsPerPage: 5, currentPage:pageshowin, id: \'pageshowinId\', totalItems:bidsWinData?.data.length};let i=index;">\n																			<tr>\n																				<td rowspan="4" class="border-bottom-td">\n																					<div class="wstbootslider clearfix">\n																						<div id="small-slider" class="carousel slide" data-ride="carousel">\n																							<div class="carousel-inner">\n																								<div class="carousel-item active text-center">\n																									<img src="{{trandingImgUrl}}{{bdswindata?.product_id}}/L/{{bdswindata?.photos[0]}}"  class="img-fluid product-bid-img" alt=""/>\n																								</div>\n																							</div>\n																						</div>\n																					</div>\n																				</td>\n																				<td>\n																					<a (click)="goToProductDetails(bdswindata?.product_id)" title="{{bdswindata?.title}}">{{bdswindata?.title}}</a>\n																				</td>\n																				<td *ngIf="bdswindata?.time == \'Started\'">{{bdswindata?.days_left}}</td>\n																				<td *ngIf="bdswindata?.time == \'End\'">{{bdswindata?.time}}</td>\n																				<td class="text-success"><b>{{bdswindata?.max_bid}} AED</b></td>\n																				<td *ngIf="bdswindata?.bid_status == \'Done\';else showbidplaceorder">\n																					<b>-</b>\n																				</td>\n																				<ng-template #showbidplaceorder>\n																					<td>\n																						<b><a class="text-primary" (click)="buyNow(bdswindata?.buyer_id,bdswindata?.product_id,\'1\',bdswindata?.max_bid,\'\')">Place Order</a></b>\n																					</td>\n																				</ng-template>\n																			</tr>\n																			<tr>\n																				<td class="border-0" colspan="2"> ( {{bdswindata?.product_sku}} ) </td>\n																				<td class="border-0" colspan="2"><a class="text-primary" (click)="gotoBidsDetailpage(bdswindata?.product_id)">{{bdswindata?.bid_cnt}} bid</a></td>\n																			</tr>\n																			<tr>\n																				<td class="border-0" colspan="4"><a class="text-primary" (click)="gotouserProfile(bdswindata?.seller_id,\'UserProfile\')">{{bdswindata?.seller_name}}</a> | <a>{{bdswindata?.feedback_cnt}}</a> | {{bdswindata?.feedback_avg}}% </td>\n																			</tr>\n																			<tr>\n																				<td class="border-0 border-bottom-td" colspan="4"><b>Your max bid: </b> {{bdswindata?.my_max_bid}} AED </td>\n																			</tr>\n																		</tbody>\n																	</ng-template>\n																</table>\n															</div>\n														</div>\n													</div>\n													<div class="row ml-0 mr-0 mb-0 mt-0 bg-light text-right">\n														<div class="col-lg-12 col-md-12 col-12 paginationlist">\n															<pagination-controls (pageChange)="pageshowin = $event" id="pageshowinId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0  my-wish-list showTargetDiv d-none my-account-verticle-tab-div16" id="my-account-verticle-tab-div16">\n											<div class="alert alert-success alert-dismissible setFont-size hide" id="success-alert">\n												<a class="close" (click)="closeDiv(\'success\')">&times;</a>\n												<span id="success-span"></span>			\n											</div>\n											<div class="alert alert-danger alert-dismissible setFont-size hide" id="danger-alert" role="alert">\n												<a class="close" (click)="closeDiv(\'danger\')">&times;</a>\n												<span id="danger-span"></span>\n											</div>\n											<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n												<h6 class="m-0 text-left"> Wish list ({{viewishData?.data.length}})</h6>\n											</div>\n\n											<div class="row ml-0 mr-0 mb-0 mt-2">\n												<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0 mt-2 mb-2">\n													<ul class="nav nav-tabs listing-active-all setFont-size">\n														<li class="active border-right-wish pl-0">\n															<a data-toggle="tab" href="#all-wish" (click)="showwishList()">All ({{viewishData?.data.length}})</a>\n														</li>\n														<li class="border-right-wish">\n															<a data-toggle="tab" href="#active-wish">Active ({{viewishData?.start_cnt}})</a>\n														</li>\n														<li class="border-right-wish">\n															<a data-toggle="tab" href="#ended-wish">Ended ({{viewishData?.end_cnt}})</a>\n														</li>\n													</ul>\n\n													<div class="tab-content">\n														<div id="all-wish" class="tab-pane fade in active show">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<div class="table-responsive">\n																				<table class="table table-sm wish-list-table setFont-size">\n																					<thead class="thead-light">\n																						<tr>\n																							<th scope="col" class="">#</th>\n																							<th scope="col" class="wish-th-img text-center">Image</th>\n																							<th scope="col" class="wish-th-desc">Description</th>\n																							<th scope="col" class="">Bids</th>\n																							<th scope="col" class="wish-th">Price</th>\n																							<th scope="col" class="wish-th">Time Left</th>\n																							<th scope="col" class="wish-th">Actions</th>\n																						</tr>\n																					</thead>\n																					<tbody *ngFor="let showdta of viewishData?.data | paginate: {itemsPerPage: 10, currentPage:page_wishall, id: \'page_wishallId\', totalItems:viewishData?.data.length}; let i = index">\n																						<tr>\n																							<td rowspan="7" class="border-bottom-td">\n																								<label class="custom-control custom-checkbox m-0">\n																									<input type="checkbox" class="custom-control-input" id="checkItemWish-{{showdta?.list_id}}" value="{{showdta?.product_id}}" name="wishlist-chk" (change)="getAllVal(\'single\')">\n																									<span class="custom-control-indicator"></span>\n																								</label>\n																							</td>\n																							<td rowspan="7" class="border-bottom-td text-center">\n																								<a>\n																									<img src="{{trandingImgUrl}}{{showdta?.product_id}}/L/{{showdta?.photos[0]}}" class="img-fluid product-wish-img">\n																								</a>\n																							</td>\n																							<td>\n																								<a class="text-primary" (click)="goToProductDetails(showdta?.product_id)"> {{showdta?.title}}</a>\n																							</td>\n																							<td>--</td>\n																							<td>{{showdta?.price}}</td>\n																							<td *ngIf="showdta?.time == \'Started\'">{{showdta?.days_left | removeplusSign:showdta?.days_left}}</td>\n																							<td *ngIf="showdta?.time == \'End\'"> End </td>\n																							<td *ngIf="showdta?.time == \'Started\'">\n																								<b><a (click)="goToProductDetails(showdta?.product_id)" class="text-primary">Buy It Now</a></b>\n																							</td>\n																							<td *ngIf="showdta?.time == \'End\'"> <b> - </b> </td>\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="2">\n																								<a class="text-primary" (click)="gotouserProfile(showdta?.user_id,\'UserProfile\')">{{showdta?.display_name}}</a> | \n																								<a>{{showdta?.feedback_count}}</a> | {{showdta?.feedback_avg | number : \'2.2-2\'}} %\n																							</td>\n																							<td class="border-0" colspan="3" *ngIf="showdta?.time == \'Started\'"><b>Buy It Now</b></td>\n																							<td class="border-0" colspan="3" *ngIf="showdta?.time == \'End\'"> <b> - </b> </td>\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="2"><b>Color: </b> {{showdta?.specification.color}} </td>\n																							<td class="border-0" colspan="3">Free shipping</td>\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="5"><b>Size: </b> {{showdta?.specification.size}} </td>\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="5"><b>Condition: </b>\n																								{{showdta?.specification.condition}}\n																							</td>\n																						</tr>\n																						<tr>\n																							<td class="border-0 border-bottom-td" colspan="5">\n																								<p class="mb-2 note-show">Add Note:<span> {{showdta?.notes}}</span></p>\n																							</td>\n																						</tr>\n																					</tbody>\n																					<tbody *ngIf="viewishData?.data.length <= 0">\n																						<tr>\n																							<td colspan="7" class="errorDisp_cente"><b>You do not have any items in your list</b></td>\n																						</tr>\n																					</tbody>\n																				</table>\n																			</div>\n																		</div>\n																	</div>\n																	<div class="row m-0" *ngIf="viewishData?.data.length >= 1">\n																		<div class="col-lg-1 col-md-1 col-1 p-0">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox" class="custom-control-input" id="checkAllWishList" (change)="getAllVal(\'multiple\')">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-11 col-md-11 col-11 p-0">\n																			<button class="btn theme-light-btn ml-1 mr-1" (click)="addNote(\'All\')">Add note</button>\n																			<button class="btn theme-light-btn ml-1 mr-1" (click)="deletewish(\'All\')">Delete from list</button>\n																			<button class="btn theme-light-btn ml-1 mr-1 mt-lg-0 mt-md-0 mt-3" (click)="comparewish(\'All\')">Compare</button>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12">\n																			<pagination-controls (pageChange)="page_wishall = $event" id="page_wishallId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n															\n														<div id="active-wish" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<div class="table-responsive">\n																				<table class="table table-sm wish-list-table setFont-size">\n																					<thead class="thead-light">\n																					<tr>\n																						<th scope="col" class="">#</th>\n																						<th scope="col" class="wish-th-img text-center">\n																							Image\n																						</th>\n																						<th scope="col" class="wish-th-desc">\n																							Description\n																						</th>\n																						<th scope="col" class="">Bids</th>\n																						<th scope="col" class="wish-th">Price\n																						</th>\n																						<th scope="col" class="wish-th">Time\n																							Left\n																						</th>\n																						<th scope="col" class="wish-th">\n																							Actions\n																						</th>\n																					</tr>\n																					</thead>\n																					<tbody *ngFor="let showdta of viewishData?.data | paginate: {itemsPerPage: 10, currentPage:page_wishActive, id: \'page_wishActiveId\', totalItems:viewishData?.start_cnt}; let i = index">\n																						<tr *ngIf="showdta?.time == \'Started\'">\n																							<td rowspan="7" class="border-bottom-td">\n																								<label class="custom-control custom-checkbox m-0">\n																									<input type="checkbox" class="custom-control-input" name="wishlist-active" id="checkItemWish-{{showdta?.list_id}}" value="{{showdta?.product_id}}" (change)="getAllValactive(\'single\')">\n																									<span class="custom-control-indicator"></span>\n																								</label>\n																							</td>\n																							<td rowspan="7" class="border-bottom-td text-center">\n																								<a>\n																									<img src="{{trandingImgUrl}}{{showdta?.product_id}}/S/{{showdta?.photos[0]}}" class="img-fluid product-wish-img">\n																								</a>\n																							</td>\n																							<td>\n																								<a class="text-primary" (click)="goToProductDetails(showdta?.product_id)"> {{showdta?.title}}</a>\n																							</td>\n																							<td>--</td>\n																							<td>{{showdta?.price}}</td>\n																							<td>{{showdta?.days_left | removeplusSign:showdta?.days_left}}</td>\n																							<td>\n																								<b><a (click)="goToProductDetails(showdta?.product_id)" class="text-primary">Buy It Now</a></b>\n																							</td>\n																						</tr>\n																						<tr *ngIf="showdta?.time == \'Started\'">\n																							<td class="border-0" colspan="2">\n																								<a class="text-primary" (click)="gotouserProfile(showdta?.user_id,\'UserProfile\')">{{showdta?.display_name}}</a> | \n																								<a>{{showdta?.feedback_count}}</a> | {{showdta?.feedback_avg | number : \'2.2-2\'}} %\n																							</td>\n																							<td class="border-0" colspan="3"><b>Buy It Now</b></td>\n																						</tr>\n																						<tr *ngIf="showdta?.time == \'Started\'">\n																							<td class="border-0" colspan="2"><b>Color: </b> {{showdta?.specification.color}}</td>\n																							<td class="border-0" colspan="3">Free shipping</td>\n																						</tr>\n																						<tr *ngIf="showdta?.time == \'Started\'" >\n																							<td class="border-0" colspan="5"><b>Size: </b> {{showdta?.specification.size}}</td>\n																						</tr>\n																						<tr *ngIf="showdta?.time == \'Started\'" >\n																							<td class="border-0" colspan="5"><b>Condition: </b> {{showdta?.specification.condition}} </td>\n																						</tr>\n																						<tr *ngIf="showdta?.time == \'Started\'">\n																							<td class="border-0 border-bottom-td" colspan="5">\n																								<p class="mb-2 note-show">Add Note:<span> {{showdta?.notes}}</span> </p>\n																							</td>\n																						</tr>\n																					</tbody>\n																					<tbody *ngIf="viewishData?.start_cnt <= 0">\n																						<tr>\n																							<td colspan="7" class="errorDisp_cente"><b>You do not have any items in your list</b></td>\n																						</tr>\n																					</tbody>\n																				</table>\n																			</div>\n																		</div>\n																	</div>\n																	<div class="row m-0" *ngIf="viewishData?.start_cnt >= 1">\n																		<div class="col-lg-1 col-md-1 col-1 p-0">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox" class="custom-control-input" id="checkAllWishactive" (change)="getAllValactive(\'multiple\')">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-11 col-md-11 col-11 p-0">\n																			<button class="btn theme-light-btn ml-1 mr-1" (click)="addNote(\'Active\')">Add note</button>\n																			<button class="btn theme-light-btn ml-1 mr-1" (click)="deletewish(\'Active\')">Delete from list</button>\n																			<button class="btn theme-light-btn ml-1 mr-1 mt-lg-0 mt-md-0 mt-3" (click)="comparewish(\'Active\')">Compare</button>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 paginationlist">\n																			<pagination-controls (pageChange)="page_wishActive = $event" id="page_wishActiveId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="ended-wish" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<div class="table-responsive">\n																				<table class="table table-sm wish-list-table setFont-size">\n																					<thead class="thead-light">\n																					<tr>\n																						<th scope="col" class="">#</th>\n																						<th scope="col" class="wish-th-img text-center">\n																							Image\n																						</th>\n																						<th scope="col" class="wish-th-desc">\n																							Description\n																						</th>\n																						<th scope="col" class="">Bids</th>\n																						<th scope="col" class="wish-th">Price\n																						</th>\n																						<th scope="col" class="wish-th">Time\n																							Left\n																						</th>\n																						<th scope="col" class="wish-th">\n																							Actions\n																						</th>\n																					</tr>\n																					</thead>\n																					<tbody *ngFor="let showdta of viewishData?.data | paginate: {itemsPerPage: 10, currentPage:page_wishEnd, id: \'page_wishEndId\', totalItems: viewishData?.end_cnt}; let i = index">\n																						<tr *ngIf="showdta?.time == \'End\'">\n																							<td rowspan="7"\n																								class="border-bottom-td">\n																								<label class="custom-control custom-checkbox m-0">\n																									<input type="checkbox" class="custom-control-input" id="checkItemWish-{{showdta?.list_id}}" name="wishlist-end" value="{{showdta?.product_id}}" (change)="getAllValend(\'single\')">\n																									<span class="custom-control-indicator"></span>\n																								</label>\n																							</td>\n																							<td rowspan="7" class="border-bottom-td text-center">\n																								<a>\n																									<img src="{{trandingImgUrl}}{{showdta?.product_id}}/S/{{showdta?.photos[0]}}" class="img-fluid product-wish-img">\n																								</a>\n																							</td>\n																							<td>\n																								<a> {{showdta?.title}}</a>\n																							</td>\n																							<td>--</td>\n																							<td>{{showdta?.price}}</td>\n																							<td> End </td>\n																							<td><span><b><a> - </a></b></span></td>\n																						</tr>\n																						<tr *ngIf="showdta?.time == \'End\'">\n																							<td class="border-0" colspan="5">\n																								<a (click)="gotouserProfile(showdta?.user_id,\'UserProfile\')" class="text-primary">{{showdta?.display_name}}</a> | \n																								<a>{{showdta?.feedback_count}}</a> | {{showdta?.feedback_avg | number : \'2.2-2\'}} %\n																							</td>\n																						</tr>\n																						<tr *ngIf="showdta?.time == \'End\'">\n																							<td class="border-0" colspan="2"><b>Color: </b> {{showdta?.specification.color}}</td>\n																							<td class="border-0" colspan="3">Free shipping</td>\n																						</tr>\n																						<tr *ngIf="showdta?.time == \'End\'">\n																							<td class="border-0" colspan="5"><b>Size: </b> {{showdta?.specification.size}} </td>\n																						</tr>\n																						<tr *ngIf="showdta?.time == \'End\'">\n																							<td class="border-0" colspan="5"><b>Condition: </b> {{showdta?.specification.condition}} </td>\n																						</tr>\n																						<tr *ngIf="showdta?.time == \'End\'">\n																							<td class="border-0 border-bottom-td" colspan="5">\n																								<p class="mb-2 note-show">Add Note:<span> {{showdta?.notes}}</span></p>\n																							</td>\n																						</tr>\n																					</tbody>\n																					<tbody *ngIf="viewishData?.end_cnt == 0">\n																						<tr>\n																							<td colspan="7" class="errorDisp_cente"><b>You do not have any items in your list</b></td>\n																						</tr>\n																					</tbody>\n																				</table>\n																			</div>\n																		</div>\n																	</div>\n																	<div class="row m-0" *ngIf="viewishData?.end_cnt >= 1">\n																		<div class="col-lg-1 col-md-1 col-1 p-0">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox" class="custom-control-input" id="checkAllWishEnd" (change)="getAllValend(\'multiple\')">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-11 col-md-11 col-11 p-0">\n																			<button class="btn theme-light-btn ml-1 mr-1" (click)="addNote(\'End\')">Add note</button>\n																			<button class="btn theme-light-btn ml-1 mr-1" (click)="deletewish(\'End\')">Delete from list</button>\n																			<button class="btn theme-light-btn ml-1 mr-1 mt-lg-0 mt-md-0 mt-3" (click)="comparewish(\'End\')">Compare</button>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 paginationlist">\n																			<pagination-controls (pageChange)="page_wishEnd = $event" id="page_wishEndId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="purchased-wish" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<p class="m-0">You do not have any items in your\n																				list.</p>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 showTargetDiv d-none my-account-verticle-tab-div4" id="my-account-verticle-tab-div4">\n											<div class="row mt-0 ml-0 mr-0 mb-2 my-dibdaa-views">\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n													<div class="row m-0">\n														<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0">\n															<h6 class="m-0 text-left">Saved searches ({{saveSearchdata?.data.length}})</h6>\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n													<div class="row m-0">\n														<div class="col-lg-12 col-md-12 col-12 p-0 mt-1">\n															<div class="table-responsive">\n																<table class="table saved-sellers-tbl table-sm mb-2 setFont-size">\n																	<thead class="thead-light">\n																		<tr>\n																			<th scope="col">Image</th>\n																			<th scope="col">Search name</th>\n																			<th scope="col">Last Date</th>\n																			<th scope="col">Keyword</th>\n																			<th scope="col">Actions</th>\n																		</tr>\n																	</thead>\n																	<tbody *ngIf="saveSearchdata?.data.length <= 0;else allsaveSearchdata">\n																		<tr>\n																			<td colspan="5" class="text-center">\n																				You do not have any items in your list\n																			</td>\n																		</tr>\n																	</tbody>\n																	<ng-template #allsaveSearchdata>\n																		<tbody *ngFor="let savedata of saveSearchdata?.data | paginate: {itemsPerPage: 10, currentPage:page_search, id: \'page_searchId\', totalItems:saveSearchdata?.data.length}; let i = index">\n																			<tr>\n																				<td rowspan="3">\n																					<img src="assets/images/stockimage.jpg" class="img-fluid product-view-img">\n																				</td>\n																				<td>\n																					<span *ngFor="let datadisp of specification_arr[i];">\n																						<span *ngIf="datadisp[0] == \'completed\'"> Completed listing ,</span>\n																						<span *ngIf="datadisp[0] == \'sold\'"> Sold listing ,</span>\n																						<span *ngIf="datadisp[0] == \'product_rating\'"> {{datadisp[1][0]}} Rating,</span>\n																						<span *ngIf="datadisp[0] == \'min_price\'"> {{datadisp[1][0]}} AED  </span>\n																						<span *ngIf="datadisp[0] == \'max_price\'"> - {{datadisp[1][0]}} AED,</span>\n																						<span *ngIf="datadisp[0] == \'min_bid_number\'"> {{datadisp[1][0]}} Bid  </span>\n																						<span *ngIf="datadisp[0] == \'max_bid_number\'"> - {{datadisp[1][0]}} Bid,</span>\n																						<span *ngIf="datadisp[0] == \'category_id\'"> {{datadisp[1][0]}} , </span>\n																						<span *ngIf="datadisp[0] == \'listing_options\'"> <span *ngIf="datadisp[1][0] == 0"> Ending within</span> <span *ngIf="datadisp[1][0] == 1"> Ending in more than</span> <span *ngIf="datadisp[0] == \'hours\'"> {{datadisp[1][0]}} Hours</span>, </span>\n																						<span *ngIf="datadisp[0] == \'payment_opt\'"> <span *ngIf="datadisp[1][0] == 1"> PayPal accepted </span> <span *ngIf="datadisp[1][0] == 2"> With Cash</span> <span *ngIf="datadisp[1][0] == 3"> Other Payment Method</span>, </span>\n																						<span *ngIf="datadisp[0] != \'max_bid_number\' && datadisp[0] != \'min_bid_number\' && datadisp[0] != \'listing_options\' && datadisp[0] != \'hours\' && datadisp[0] != \'min_price\' &&  datadisp[0] != \'payment_opt\' &&  datadisp[0] != \'max_price\' && datadisp[0] != \'sold\' && datadisp[0] != \'completed\' && datadisp[0] != \'Resultsperpage\' && datadisp[0] != \'category_id\' && datadisp[0] != \'product_rating\'"> {{datadisp[1][0]}} ,</span>\n																					</span>\n																				</td>\n																					<td *ngIf="savedata?.updated_date == null;else showupdatedt;">{{savedata?.created_date}}</td>\n																				<ng-template #showupdatedt>\n																					<td>{{savedata?.updated_date}}</td>\n																				</ng-template>\n																				<td >{{savedata?.keyword}}</td>\n																				<td><a class="text-primary" (click)="viewItemSearch(savedata?.id,\'viewSearch\')"><i class="fa fa-eye"></i> View items</a>\n																				</td>\n																			</tr>\n																			<tr>\n																				<td class="border-0"></td>\n																				<td class="border-0"></td>\n																				<td class="border-0"></td>\n																				<td class="border-0">\n																					<a class="text-primary" (click)="viewItemSearch(savedata?.id,\'editSearch\')">\n																						<i class="fa fa fa-edit"></i> Edit Search\n																					</a>\n																				</td>\n																			</tr>\n																			<tr>\n																				<td class="border-0"></td>\n																				<td class="border-0"></td>\n																				<td class="border-0"></td>\n																				<td class="border-0">\n																					<a class="text-danger font-weight-bold" (click)="crudOperation(savedata?.id,\'delete\')">\n																						<i class="fa fa-trash-o"></i> Delete\n																					</a>\n																				</td>\n																			</tr>\n																		</tbody>	\n																	</ng-template>	\n																</table>															\n															</div>\n														</div>\n													</div>\n													<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n														<div class="col-lg-12 paginationlist">\n															<pagination-controls (pageChange)="page_search = $event" id="page_searchId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 showTargetDiv d-none my-account-verticle-tab-div5"\n											 id="my-account-verticle-tab-div5">\n											<form name="" method="post">\n												<div class="row mt-0 ml-0 mr-0 mb-2 my-dibdaa-views">\n													<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n														<div class="row m-0">\n															<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0">\n																<h6 class="m-0 text-left"> Saved sellers ({{view_sellerList?.data.length}})</h6>\n															</div>\n														</div>\n													</div>\n													<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n														<div class="row m-0">\n															<div class="col-lg-12 col-md-12 col-12 p-0 mt-1">\n																<div class="table-responsive">\n																	<table class="table saved-sellers-tbl table-sm mb-2 setFont-size">\n																		<thead class="thead-light">\n																		<tr>\n																			<th scope="col" class="saved-sellers-th">Seller Image</th>\n																			<th scope="col" class="saved-sellers-th">Store</th>\n																			<th scope="col" class="saved-sellers-th">Added</th>\n																			<th scope="col" class="saved-sellers-th">Follow Seller</th>\n																			<th scope="col" class="saved-sellers-th">Since By</th>\n																			<th scope="col" class="saved-sellers-th">Actions</th>\n\n																		</tr>\n																		</thead>\n																		<tbody *ngIf="view_sellerList?.data.length <= 0;else allview_sellerList">\n																			<tr>\n																				<td colspan="6" class="text-center">\n																					You do not have any items in your list\n																				</td>\n																			</tr>\n																		</tbody>\n																		<ng-template #allview_sellerList>\n																			<tbody *ngFor="let viewSell of view_sellerList?.data | paginate: {itemsPerPage: 5, currentPage:page_seller, id: \'page_sellerId\', totalItems: view_sellerList?.data.length}; let i = index " class="border_bottom">\n																				<tr>\n																					<td rowspan="3" class="border-bottom-td" *ngIf="viewSell?.profile_pic != \'\';else notimg">\n																						<img src="{{userImg}}{{viewSell?.seller_id}}/{{viewSell?.profile_pic}}" class="img-fluid product-view-img">\n																					</td>\n																					<ng-template #notimg>\n																						<td rowspan="3" class="border-bottom-td">\n																							<img src="assets/images/sellershop.gif" class="img-fluid product-view-img">\n																						</td>\n																					</ng-template>\n																					<td>\n																						<a (click)="gotouserProfile(viewSell?.seller_id,\'UserProfile\')" class="text-primary">{{viewSell?.display_name}}</a> ( <a\n																							>{{viewSell?.feedback_count}}</a> <i\n																							class="fa fa-star text-warning"></i> ) {{viewSell?.feedback_avg}} %\n																					</td>\n																					<td>{{viewSell?.created_date}}</td>\n																					<td>{{viewSell?.follower_cnt}}</td>\n																					<td>{{viewSell?.registered_date}}</td>\n																					<td><a class="text-primary" (click)="viewSellerItem(viewSell?.seller_id,viewSell?.business_name)"><i class="fa fa-eye"></i> View seller\'s items</a></td>\n																				</tr>\n																				<tr>\n																					<td class="border-0" colspan="4"></td>\n																					<td class="border-0"><a class="text-primary" (click)="contactSeller(viewSell?.business_name,viewSell?.seller_id)"><i class="fa fa-address-book"></i> Contact seller</a></td>\n																				</tr>\n																				<tr>\n																					<td class="border-0" colspan="4"></td>\n																					<td class="border-0">\n																						<a class="text-danger font-weight-bold" (click)="deleteSeller(viewSell?.seller_id)">\n																							<i class="fa fa-trash-o"></i> \n																							Delete\n																						</a>\n																					</td>\n																				</tr>\n																			</tbody>\n																		</ng-template>\n																	</table>\n																</div>\n															</div>\n														</div>\n\n														<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n															<div class="col-lg-12 paginationlist">\n																<pagination-controls (pageChange)="page_seller = $event" id="page_sellerId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n															</div>\n														</div>\n													</div>\n												</div>\n											</form>\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 my-wish-list showTargetDiv d-none my-account-verticle-tab-div17"\n											 id="my-account-verticle-tab-div17">\n											<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n												<h6 class="m-0 text-left"> Purchase History ({{view_purchaseData?.data.length}})</h6>\n											</div>\n											<div class="row ml-0 mr-0 mb-0 mt-2">\n												<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0 mt-2 mb-2">\n													<ul class="nav nav-tabs listing-active-all setFont-size">\n														<li class="border-right-wish">\n															<a data-toggle="tab" href="#orders">Orders ({{view_purchaseData?.data.length}})</a>\n														</li>\n														<li class="border-right-wish">\n															<a data-toggle="tab" href="#canceled-items">Canceled items (0)</a>\n														</li>\n\n														<li>\n															<a data-toggle="tab" href="#returns-and-canceled-orders">Returns and canceled orders (0)</a>\n														</li>\n													</ul>\n													<div class="form-row mt-2 m-0">\n														<div class="form-group col-md-4 col-12 setFont-size">\n															<label>See orders from:</label>\n															<select class="form-control" name="Period_search" #Period_search (change)="viewpurchaseHistory(\'searchyear\',Period_search.value)">\n																<option value="">Select</option>\n																<option value="{{showYear}}">{{showYear}}</option>\n																<option value="{{showYear-1}}">{{showYear-1}}</option>\n																<option value="{{showYear-2}}">{{showYear-2}}</option>\n																<option value="{{showYear-3}}">{{showYear-3}}</option>\n																<option value="{{showYear-4}}">{{showYear-4}}</option>\n															</select>\n														</div>\n														<div class="form-group col-md-4 col-12 setFont-size">\n															<label>Date</label>\n															<input type="date" class="form-control purchaseHistorySelect" name="date_search" #date_search (change)="viewpurchaseHistory(\'searchdate\',date_search.value)"/>\n														</div>\n														<div class="form-group col-md-4 col-12 setFont-size">\n															<label>See orders by:</label>\n															<select class="form-control" name="status_search" #status_search (change)="viewpurchaseHistory(\'searchstatus\',status_search.value)">\n																<option value="">Select</option>\n																<option value="unpaid">Unpaid</option>\n																<option value="completed">Completed</option>\n															</select>\n														</div>\n													</div>\n\n													<div class="tab-content">\n														<div id="orders" class="tab-pane fade in active show">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<div class="table-responsive">\n																				<table class="table table-sm wish-list-table setFont-size">\n																					<thead class="thead-light">\n																						<tr>\n																							<th scope="col" class="wish-th-img">\n																								Order Id\n																							</th>\n																							<th scope="col" class="wish-th-desc">\n																								Date\n																							</th>\n																							<th scope="col" class="wish-th-desc">\n																								Payment Status	\n																							</th>\n																							<th scope="col" class="wish-th-desc">\n																								Total Price	\n																							</th>\n																							<th scope="col" class="wish-th">\n																								Order Status\n																							</th> \n																							<th scope="col" class="wish-th">\n																								Order Detail\n																							</th>\n																						</tr>\n																					</thead>\n\n																					<tbody *ngIf="view_purchaseData?.data.length <=0;else showPurchasehistory;">\n																						<tr>\n																							<td colspan="6" class="text-center">No Item found</td>\n																						</tr>\n																					</tbody>\n																					<ng-template #showPurchasehistory>\n																						<tbody *ngFor="let vph of view_purchaseData?.data | paginate: {itemsPerPage: \'5\', currentPage:page_order, id: \'page_orderId\',totalItems: view_purchaseData?.data.length}; let i = index ">\n																							<tr>\n																								<td class="border-bottom-td">\n																									<a class="order_dtil" (click)="orderDetails(vph?.order_id)">#{{vph?.order_id}}</a>\n																								</td>\n																								<td class="border-bottom-td">\n																									{{vph?.created_date}}\n																								</td>\n																								<td class="border-bottom-td">\n																									{{vph?.status}}\n																								</td>\n																								<td class="border-bottom-td">\n																									{{vph?.order_price}} AED\n																								</td>\n																								<td class="border-bottom-td" *ngIf="vph?.status == \'Completed\'">\n																									<a title="Item Paid"><i class="fa fa-dollar"></i></a>\n																									<a title="Left Feedback"><img src="assets/images/leave_feedback.png" *ngIf="vph?.feedback_status == false" width="20px" /></a>\n																									<a title="Feedback Received"><img src="assets/images/receive_feedback.png" *ngIf="vph?.feedback_receive_status == true" width="20px" /></a>\n																								</td>\n																								<td class="border-bottom-td" *ngIf="vph?.status != \'Completed\'">\n																									-\n																								</td>\n																								<td class="border-bottom-td">\n																									<a class="order_dtil" (click)="orderDetails(vph?.order_id)" title="Order Detail"><i class="fa fa-eye" aria-hidden="true">\n</i>\n</a>\n	<a href="invoice/buyer/{{vph?.order_id}}.pdf"  target="_blank" title="Download Invoice">\n <i class="fa fa-download" aria-hidden="true">\n</i>\n</a>\n <a href="#"  title="Return Item">\n <i class="fa fa-undo" aria-hidden="true">\n</i>\n</a>\n		</td>\n																							</tr>\n																						</tbody>\n																					</ng-template>\n																				</table>\n																			</div>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light" *ngIf="view_purchaseData?.data.length > 0">\n																		<div class="col-lg-12 paginationlist">\n																			<pagination-controls (pageChange)="page_order = $event" id=\'page_orderId\' maxSize=\'25\' directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="canceled-items" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<div class="table-responsive">\n																				<table class="table table-sm wish-list-table setFont-size">\n																					<thead class="thead-light">\n																						<tr>\n																							<th scope="col" class="wish-th-img">\n																								Order Id\n																							</th>\n																							<th scope="col" class="wish-th-desc">\n																								Date\n																							</th>\n																							<th scope="col" class="wish-th-desc">\n																								Order Status\n																							</th>\n																							<th scope="col" class="wish-th-desc">\n																								Total Price\n																							</th>\n																							<th scope="col" class="wish-th">\n																								Order Detail\n																							</th>\n																						</tr>\n																					</thead>\n																					<tbody>\n																						<tr>\n																							<td colspan="5" class="text-center">No Item found</td>\n																						</tr>\n																					</tbody>\n																				</table>\n																			</div>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 paginationlist">\n																			<pagination-controls (pageChange)="page_cancel = $event" id="page_cancelId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="returns-and-canceled-orders" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<div class="table-responsive">\n																				<table class="table table-sm wish-list-table setFont-size">\n																					<thead class="thead-light">\n																					<tr>\n																						<th scope="col" class="wish-th-img">\n																							Order Id\n																						</th>\n																						<th scope="col" class="wish-th-desc">\n																							Date\n																						</th>\n																						<th scope="col" class="wish-th-desc">\n																							Order Status\n																						</th>\n																						<th scope="col" class="wish-th-desc">\n																							Total Price\n																						</th>\n																						<th scope="col" class="wish-th">\n																							Order Detail\n																						</th>\n																					</tr>\n																					</thead>\n																					<tr>\n																						<td colspan="5" class="text-center">No Item found</td>\n																					</tr>\n																				</table>\n																			</div>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 paginationlist">\n																			<pagination-controls (pageChange)="page_return = $event" id="page_returnId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 showTargetDiv d-none my-account-verticle-tab-div7" id="my-account-verticle-tab-div7">\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 showTargetDiv my-wish-list d-none my-account-verticle-tab-div8" id="my-account-verticle-tab-div8">\n											<form name="" method="post">\n												<div class="row mt-0 ml-0 mr-0 mb-2 my-dibdaa-views">\n													<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n														<div class="row m-0">\n															<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0">\n																<h6 class="m-0 text-left">Saved Drafts ({{view_productList?.count.saveDrafts + view_productList?.count.latestDrafts}})</h6>\n															</div>\n														</div>\n													</div>\n													\n													<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0 mt-2 mb-2">\n														<ul class="nav nav-tabs listing-active-all setFont-size">\n															<li class="active border-right-wish pl-0">\n																<a data-toggle="tab" href="#all-Submited-Drafts" (click)="viewProduct()">Awaiting Admin Approval ({{view_productList?.data.length}})</a>\n															</li>\n														\n															<li>\n																<a data-toggle="tab" href="#all-Latest-Drafts" (click)="viewProduct_latestDraft()">Latest Drafts ({{view_productList?.count.latestDrafts}})</a>\n															</li>\n														</ul>\n													</div>\n													<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0">\n														<div class="alert alert-danger alert-dismissible setFont-size hide mt-4" id="danger-alert-SD" role="alert">\n															<a class="close" (click)="closeDivSD()">&times;</a>\n															<span id="danger-span-SD"></span>\n														</div>\n													</div>\n													<div class="tab-content w-100">\n														<div id="all-Submited-Drafts" class="tab-pane fade in active show">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0" >\n																	<div class="row m-0 pb-2 pt-2 border-bottom-drafts setFont-size unsold_titleback">\n																		<div class="col-lg-1 col-md-1 col-1 p-0 pl-lg-2 pr-lg-2 pl-md-2 pr-md-2 text-center">\n																			<span>#</span>\n																		</div>\n																		<div class="col-lg-1 col-md-2 col-3 p-0">\n																			<span>Image</span>\n																		</div>\n																		<div class="col-lg-6 col-md-5 col-3 p-0">\n																			<span>Title</span>\n																		</div>\n																		<div class="col-lg-2 col-md-2 col-2 p-0 pl-md-2 text-center text-lg-left text-md-left">\n																			<span>Date</span>\n																		</div>\n																		<div class="col-lg-2 col-md-2 col-3 p-0 pt-0 text-center text-lg-right text-md-right">\n																			<span>Actions</span>\n																		</div>\n																	</div>\n																	<div class="row m-0 pb-2 pt-2 border-bottom-drafts" *ngFor="let viewpro of view_productList?.data | paginate: {itemsPerPage: 5, currentPage:page_draft, id: \'page_draftId\', totalItems: view_productList?.data.length}; let i = index">\n																		<div class="col-lg-1 col-md-1 col-1 p-0 pl-lg-2 pr-lg-2 pl-md-2 pr-md-2 text-center">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox" class="custom-control-input" id="viewProduct-{{viewpro?.id}}" value="{{viewpro?.id}}" name="viewProduct_chk">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-1 col-md-2 col-3 p-0 text-center">\n																			<a>\n																				<img src="{{trandingImgUrl}}{{viewpro?.id}}/L/{{viewpro?.photos[0]}}" class="img-fluid product-view-img">\n																			</a>\n																		</div>\n																		<div class="col-lg-6 col-md-5 col-3 p-0">\n																			<a>\n																				<h6 class="m-0 product-save-title "> {{viewpro?.title}}</h6>\n																			</a>\n																		</div>\n																		<div class="col-lg-2 col-md-2 col-2 p-0 pl-md-2 text-center text-lg-left text-md-left">\n																			<p class="m-0 setFont-size">{{viewpro?.created_date}}</p>\n																		</div>\n																		\n																		<div class="col-lg-2 col-md-2 col-3 p-0 pt-0 pt-lg-0 pt-md-0 text-center text-lg-right text-md-right">\n																			<p class="m-0 text-lg-right setFont-size"><a (click)="deleteProduct(\'one\',viewpro?.id)" class="text-danger font-weight-bold"><i class="fa fa-trash-o"></i> Delete</a></p>\n																			<!--<p class="ml-0 mr-0 mb-0 mt-3 text-lg-right setFont-size"><a (click)="gotoeditProduct(viewpro?.id,\'draft\')" class="text-primary font-weight-bold"><i class="fa fa-floppy-o"></i> Click to complete</a></p> -->\n																		</div>\n																	</div>\n																	<div class="row m-0 pb-2 pt-2 border-bottom-drafts" *ngIf="view_productList?.data.length == 0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 mb-3 text-center setFont-size">\n																			You do not have any items in your list\n																		</div>\n																	</div>\n																	<div class="row m-0 pb-2 pt-2 border-bottom-drafts" *ngIf="view_productList?.data.length >= 1">\n																		<div class="col-lg-1 col-md-1 col-1 p-0 pl-lg-2 pr-lg-2 pl-md-2 pr-md-2 text-center">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox" class="custom-control-input" id="checkAllSD" (change)="checkAllSD(\'saveDraft\')">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-1 col-md-2 col-3 p-0">\n																			<button class="btn theme-light-btn" (click)="deleteProduct(\'multiple\',\'\')">Delete</button>\n																		</div>\n																		<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																			<pagination-controls (pageChange)="page_draft = $event" id="page_draftId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="all-Latest-Drafts" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0" >\n																	<div class="row m-0 pb-2 pt-2 border-bottom-drafts setFont-size unsold_titleback">\n																		<div class="col-lg-1 col-md-2 col-3 p-0 text-center">\n																			<span>Image</span>\n																		</div>\n																		<div class="col-lg-7 col-md-6 col-4 p-0">\n																			<span>Title</span>\n																		</div>\n																		<div class="col-lg-2 col-md-2 col-2 p-0 pl-md-2 text-center text-lg-left text-md-left">\n																			<span>Date</span>\n																		</div>\n																		<div class="col-lg-2 col-md-2 col-3 p-0 pt-0 text-center text-lg-right text-md-right">\n																			<span>Actions</span>\n																		</div>\n																	</div>\n																	<div class="row m-0 pb-2 pt-2 border-bottom-drafts" *ngFor="let drftdata of dreftdata?.data | paginate: {itemsPerPage: 5, currentPage:page_latestdraft, id: \'page_latestdraftId\', totalItems: dreftdata?.data.length}; let i = index">\n																		<div class="col-lg-1 col-md-2 col-3 p-0 text-center">\n																			<a>\n																				<img src="assets/images/draft-placeholder.png" class="img-fluid product-view-img" *ngIf="drftdata?.photos == false || drftdata?.photos.length == 0">\n																				<img *ngIf="drftdata?.photos != false && drftdata?.photos.length > 0" src="{{trandingImgUrl}}{{drftdata?.id}}/L/{{drftdata?.photos[0]}}" class="img-fluid product-view-img">\n																			</a>\n																		</div>\n																		<div class="col-lg-7 col-md-6 col-4 p-0">\n																			<a>\n																				<h6 class="m-0 product-save-title"> {{drftdata?.title}} </h6>\n																			</a>\n																		</div>\n																		<div class="col-lg-2 col-md-2 col-2 p-0 pl-md-2 text-center text-lg-left text-md-left">\n																			<p class="m-0 setFont-size">{{drftdata?.created_date}}</p>\n																		</div>\n																		\n																		<div class="col-lg-2 col-md-2 col-3 p-0 pt-0 pt-lg-0 pt-md-0 text-center text-lg-right text-md-right">\n																			<p class="m-0 text-lg-right setFont-size"><a (click)="deleteProduct_latestdraft(drftdata?.id)" class="text-danger font-weight-bold"><i class="fa fa-trash-o"></i> Delete</a></p>\n																			<p class="ml-0 mr-0 mb-0 mt-3 text-lg-right setFont-size"><a (click)="gotoeditProduct_latestdraft(drftdata?.id)" class="text-primary font-weight-bold"><i class="fa fa-floppy-o"></i> Click to complete</a></p>\n																		</div>\n																	</div>\n																	<div class="row m-0 pb-2 pt-2 border-bottom-drafts" *ngIf="dreftdata?.data.length <= 0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 mb-3 text-center setFont-size">\n																			You do not have any items in your list\n																		</div>\n																	</div>\n																	<div class="row m-0 pb-2 pt-2 border-bottom-drafts" *ngIf="dreftdata?.data.length >= 1">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																			<pagination-controls (pageChange)="page_latestdraft = $event" id="page_latestdraftId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n											</form>\n										</div>\n										\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 my-wish-list showTargetDiv d-none my-account-verticle-tab-div10" id="my-account-verticle-tab-div10">\n											<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n												<h6 class="m-0 text-left"> Active Selling ({{activeItem?.count.all}})</h6>\n											</div>\n											<div class="row ml-0 mr-0 mb-0 mt-2">\n												<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0 mt-2 mb-2">\n													<ul class="nav nav-tabs listing-active-all setFont-size">\n														<li class="active border-right-wish pl-0">\n															<a data-toggle="tab" href="#all-active" (click)="viewActiveItem()">All ({{activeItem?.count.all}})</a>\n														</li>\n													\n														<li class="border-right-wish">\n															<a data-toggle="tab" href="#open-offers-active" (click)="filterActive(\'Format\',\'best_offer\')">Open Offers ({{activeItem?.count.best_offer}})</a>\n														</li>\n														<li class="border-right-wish">\n															<a data-toggle="tab" href="#bids-reserve-active" (click)="filterActive(\'Format\',\'auction\')">Bids/Reserve Met ({{activeItem?.count.auction}})</a>\n														</li>\n														<li class="border-right-wish">\n															<a data-toggle="tab" href="#without-bids-active" (click)="filterActive(\'Format\',\'fix_price\')">Without Bids/Reserve Not Met ({{activeItem?.count.fix_price}})</a>\n														</li>\n														<li>\n															<a data-toggle="tab" href="#out-of-stock-active" (click)="filterActive(\'Format\',\'out_of_stock\')">Out of stock ({{activeItem?.count.out_of_stock}})</a>\n														</li>\n														\n													</ul>\n													<div class="form-row mt-2 setFont-size">\n														<div class="form-group col-md-4 col-12 ">\n															<label for="inputFormat">Format</label>\n															<select id="inputFormat" class="form-control" #inputFormat name="inputFormat" (change)="filterActive(\'Format\',inputFormat.value)">\n																<option value="-1" selected>All</option>\n																<option value="auction">Auction style</option>\n																<option value="fix_price">Fixed Price</option>\n																<option value="best_offer">Best Offer</option>\n															</select>\n														</div>\n														<div class="form-group col-md-4 col-12 offset-md-4">\n															<label for="inputdSort">Sort</label>\n															<select id="inputdSort" class="form-control" #inputdSort name="inputdSort" (change)="filterActive(\'Sort\',inputdSort.value)">\n																\n																<option value="-1" selected>Select</option>\n																<option value="endsoon">Time left: ending soonest</option>\n																<option value="newly_listed">Time left: newly listed</option>\n																<option value="price_asc">Price: lowest</option>\n																<option value="price_desc">Price: highest</option>\n																<option value="quantity_desc">Available Quantity: highest</option>\n																<option value="quantity_asc">Available Quantity: lowest</option>\n															</select>\n														</div>\n													</div>\n													<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0">\n														<div class="alert alert-danger alert-dismissible setFont-size hide mt-4" id="danger-alert-AS" role="alert">\n															<a class="close" (click)="closeDivAS()">&times;</a>\n															<span id="danger-span-AS"></span>\n														</div>\n													</div>\n													<div class="tab-content">\n														<div id="all-active" class="tab-pane fade in active show">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<div class="table-responsive">\n																				<table class="table table-sm setFont-size">\n																					<thead class="thead-light">\n																						<tr>\n																							<th scope="col">#</th>\n																							<th scope="col" class="text-center">Image</th>\n																							<th scope="col">Description</th>\n																							<th scope="col" class="text-center">Views / Watchers</th>\n																							<th scope="col">Price</th>\n																							<th scope="col">Time Left</th>\n																							<th scope="col">Actions</th>\n																						</tr>\n																					</thead>\n																					<tbody *ngIf="activeItem?.data.length <= 0;else showAllactive;">\n																						<tr>\n																							<td colspan="7" class="text-center">You do not have any items in your list</td>\n																						</tr>\n																					</tbody>\n																					<ng-template #showAllactive>\n																						<tbody *ngFor="let actItem of activeItem?.data | paginate: {itemsPerPage: 5, currentPage:page_activeItem, id: \'page_activeItemId\', totalItems: activeItem?.data.length}; let i = index ">\n																							<tr>\n																								<td rowspan="3" class="border-bottom-td">\n																									<label class="custom-control custom-checkbox m-0">\n																										<input type="checkbox" class="custom-control-input" value="{{actItem?.product_id}}" id="chkactive-{{actItem?.product_id}}" name="chkactive_all">\n																										<span class="custom-control-indicator"></span>\n																									</label>\n																								</td>\n																								<td rowspan="3" class="border-bottom-td text-center">\n																									<a (click)="goToProductDetails(actItem?.product_id)" class="text-primary">\n																										<img src="{{trandingImgUrl}}{{actItem?.product_id}}/L/{{actItem?.photos[0]}}" class="img-fluid product-view-img">\n																									</a>\n																								</td>\n																								<td>\n																									<a (click)="goToProductDetails(actItem?.product_id)" class="text-primary" title="{{actItem?.title}}">{{ (actItem?.title.length > 30)? (actItem?.title | slice:0:20)+\'...\':(actItem?.title) }}</a> ({{actItem?.product_sku}})\n																								</td>\n\n																								<td class="text-center">{{actItem?.views}}</td>\n																								<td><span></span>{{actItem?.price}} AED</td>\n																								<td *ngIf="actItem?.time == \'End\'">Ended</td>\n																								<td *ngIf="actItem?.time == \'Started\'">{{actItem?.days_left | removeplusSign:actItem?.days_left}}</td>\n																								<td><a href="#/GetAll/{{actItem?.product_id}}">Sell similar</a></td>\n																							</tr>\n																							<tr>\n																								<td class="border-0" colspan="5">\n																									<b>Quantity:</b> {{actItem?.quantity}}\n																								</td>\n																							</tr>\n																							<tr>\n																								<td class="border-0 border-bottom-td" colspan="5">\n																									<b>Shipping cost:</b> free\n																								</td>\n																							</tr>\n																						</tbody>\n																					</ng-template>\n																				</table>\n																			</div>\n																		</div>\n																	</div>\n																	<div class="row m-0" *ngIf="activeItem?.data.length >= 1;">\n																		<div class="col-lg-1 col-md-1 col-1 p-0">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox" class="custom-control-input" id="checkAllactive" (change)="checkAllSD(\'active\')">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-11 col-md-11 col-11 p-0">\n																			<a class="btn theme-light-btn ml-1 mr-1" role="button" (click)="activeallOperation(\'Edit\',\'All\')">Edit</a>\n																			<a class="btn theme-light-btn ml-1 mr-1" role="button" (click)="activeallOperation(\'End\',\'All\')">End</a>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																			<pagination-controls (pageChange)="page_activeItem = $event" id="page_activeItemId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="open-offers-active" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 table-responsive">\n																			<table class="table table-sm setFont-size">\n																				<thead class="thead-light">\n																					<tr>\n																						<th scope="col">#</th>\n																						<th scope="col" class="text-center">Image</th>\n																						<th scope="col">Description</th>\n																						<th scope="col" class="text-center">Views / Watchers</th>\n																						<th scope="col">Price</th>\n																						<th scope="col">Time Left</th>\n																						<th scope="col">Actions</th>\n																					</tr>\n																				</thead>\n																				<tbody *ngIf="activeItem?.data.length <= 0;else showAllopenoffer;">\n																					<tr>\n																						<td colspan="7" class="text-center">You do not have any items in your list</td>\n																					</tr>\n																				</tbody>\n																				<ng-template #showAllopenoffer>\n																					<tbody *ngFor="let actItem of activeItem?.data | paginate: {itemsPerPage: 5, currentPage:page_openItem, id: \'page_openItemId\', totalItems: activeItem?.count.best_offer}; let i = index ">\n																						<tr>\n																							<td rowspan="3" class="border-bottom-td">\n																								<label class="custom-control custom-checkbox m-0">\n																									<input type="checkbox" class="custom-control-input" value="{{actItem?.product_id}}" id="chkactiveopenofr-{{actItem?.product_id}}" name="chkactive_openofr">\n																									<span class="custom-control-indicator"></span>\n																								</label>\n																							</td>\n																							<td rowspan="3" class="border-bottom-td text-center">\n																								<a (click)="goToProductDetails(actItem?.product_id)" class="text-primary">\n																									<img src="{{trandingImgUrl}}{{actItem?.product_id}}/L/{{actItem?.photos[0]}}" class="img-fluid product-view-img">\n																								</a>\n																							</td>\n																							<td>\n																								<a href="#/offerList/{{actItem?.product_id}}" title="{{actItem?.title}}">{{ (actItem?.title.length > 30)? (actItem?.title | slice:0:20)+\'...\':(actItem?.title) }}</a> ({{actItem?.product_sku}})\n																							</td>\n																							<td class="text-center">{{actItem?.views}}</td>\n																							<td>{{actItem?.final_price}} AED</td>\n																							<td *ngIf="actItem?.time == \'End\'">Ended</td>\n																							<td *ngIf="actItem?.time == \'Started\'">{{actItem?.days_left | removeplusSign:actItem?.days_left}}</td>\n																							<td><a href="#/GetAll/{{actItem?.product_id}}">Sell similar</a></td>\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="5">\n																								<b>Quantity:</b> {{actItem?.quantity}}\n																							</td>\n																						</tr>\n																						<tr>\n																							<td class="border-0 border-bottom-td" colspan="5">\n																								<b>Shipping cost:</b> free\n																							</td>\n																						</tr>\n																					</tbody>\n																				</ng-template>\n																			</table>\n																		</div>\n																	</div>\n																	<div class="row m-0" *ngIf="activeItem?.data.length >= 1;">\n																		<div class="col-lg-1 col-md-1 col-1 p-0">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox" class="custom-control-input" id="checkAllopenofr" (change)="checkAllSD(\'OpenOffer\')">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-11 col-md-11 col-11 p-0">\n																			<a class="btn theme-light-btn ml-1 mr-1" role="button" (click)="activeallOperation(\'Edit\',\'opnoffr\')">Edit</a>\n																			<a class="btn theme-light-btn ml-1 mr-1" role="button" (click)="activeallOperation(\'End\',\'opnoffr\')">End</a>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																			<pagination-controls (pageChange)="page_openItem = $event" id="page_openItemId" maxSize="25" directionLinks="true" autoHide="false" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="bids-reserve-active" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 table-responsive">\n																			<table class="table table-sm setFont-size">\n																				<thead class="thead-light">\n																					<tr>\n																						<th scope="col">#</th>\n\n																						<th scope="col" class="text-center">Image</th>\n																						<th scope="col">Description</th>\n																						<th scope="col" class="text-center">Views / Watchers</th>\n\n																						<th scope="col">Price</th>\n																						<th scope="col">Time Left</th>\n																						<th scope="col">Actions</th>\n																					</tr>\n																				</thead>\n																				<tbody *ngIf="activeItem?.data.length <= 0;else showAllactionstyle;">\n																					<tr>\n																						<td colspan="7" class="text-center">You do not have any items in your list</td>\n																					</tr>\n																				</tbody>\n																				<ng-template #showAllactionstyle>\n																					<tbody *ngFor="let actItem of activeItem?.data | paginate: {itemsPerPage: 5, currentPage:page_auction, id: \'page_auctionId\', totalItems: activeItem?.count.auction}; let i = index ">\n																						<tr>\n																							<td rowspan="3" class="border-bottom-td">\n																								<label class="custom-control custom-checkbox m-0">\n																									<input type="checkbox" class="custom-control-input" value="{{actItem?.product_id}}" id="chkactiveactionstyl-{{actItem?.product_id}}" name="chkactive_actionstyl">\n																									<span class="custom-control-indicator"></span>\n																								</label>\n																							</td>\n																							<td rowspan="3" class="border-bottom-td text-center">\n																								<a (click)="goToProductDetails(actItem?.product_id)" class="text-primary">\n																									<img src="{{trandingImgUrl}}{{actItem?.product_id}}/L/{{actItem?.photos[0]}}" class="img-fluid product-view-img">\n																								</a>\n																							</td>\n																							<td>\n																								<a (click)="goToProductDetails(actItem?.product_id)" class="text-primary" title="{{actItem?.title}}">{{ (actItem?.title.length > 30)? (actItem?.title | slice:0:20)+\'...\':(actItem?.title) }}</a> ({{actItem?.product_sku}})\n																							</td>\n\n																							<td class="text-center">{{actItem?.views}}</td>\n																							<td>{{actItem?.final_price}} AED</td>\n																							<td *ngIf="actItem?.time == \'End\'">Ended</td>\n																							<td *ngIf="actItem?.time == \'Started\'">{{actItem?.days_left | removeplusSign:actItem?.days_left}}</td>\n																							<td><a href="#/GetAll/{{actItem?.product_id}}">Sell similar</a></td>\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="5">\n																								<b>Quantity:</b> {{actItem?.quantity}}\n																							</td>\n																						</tr>\n																						<tr>\n																							<td class="border-0 border-bottom-td" colspan="5">\n																								<b>Shipping cost:</b> free\n																							</td>\n																						</tr>\n																					</tbody>\n																				</ng-template>\n																			</table>\n																		</div>\n																	</div>\n																	<div class="row m-0" *ngIf="activeItem?.data.length >= 1;">\n																		<div class="col-lg-1 col-md-1 col-1 p-0">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox" class="custom-control-input" id="checkAllactionstyle" (change)="checkAllSD(\'ActionStyle\')">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-11 col-md-11 col-11 p-0">\n																			<a class="btn theme-light-btn ml-1 mr-1" role="button" (click)="activeallOperation(\'Edit\',\'actionstyl\')">Edit</a>\n																			<a class="btn theme-light-btn ml-1 mr-1" role="button" (click)="activeallOperation(\'End\',\'actionstyl\')">End</a>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																			<pagination-controls (pageChange)="page_auction = $event" id="page_auctionId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="without-bids-active" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 table-responsive">\n																			<table class="table table-sm setFont-size">\n																				<thead class="thead-light">\n																					<tr>\n																						<th scope="col">#</th>\n\n																						<th scope="col" class="text-center">Image</th>\n																						<th scope="col">Description</th>\n																						<th scope="col" class="text-center">Views / Watchers</th>\n																						<th scope="col">Price</th>\n																						<th scope="col">Time Left</th>\n																						<th scope="col">Actions</th>\n																					</tr>\n																				</thead>\n																				<tbody *ngIf="activeItem?.data.length <= 0;else showAllfxdprice;">\n																					<tr>\n																						<td colspan="7" class="text-center">You do not have any items in your list</td>\n																					</tr>\n																				</tbody>\n																				<ng-template #showAllfxdprice>\n																					<tbody *ngFor="let actItem of activeItem?.data | paginate: {itemsPerPage: 5, currentPage:page_fix, id: \'page_fixId\',totalItems: activeItem?.count.fix_price}; let i = index">\n																						<tr>\n																							<td rowspan="3" class="border-bottom-td text-center">\n																								<label class="custom-control custom-checkbox m-0">\n																									<input type="checkbox" class="custom-control-input" value="{{actItem?.product_id}}" id="chkactivefixprice-{{actItem?.product_id}}" name="chkactive_fixprice">\n																									<span class="custom-control-indicator"></span>\n																								</label>\n																							</td>\n\n																							<td rowspan="3" class="border-bottom-td">\n																								<a (click)="goToProductDetails(actItem?.product_id)" class="text-primary">\n																									<img src="{{trandingImgUrl}}{{actItem?.product_id}}/L/{{actItem?.photos[0]}}" class="img-fluid product-view-img">\n																								</a>\n																							</td>\n																							<td>\n																								<a (click)="goToProductDetails(actItem?.product_id)" class="text-primary" title="{{actItem?.title}}">{{ (actItem?.title.length > 30)? (actItem?.title | slice:0:20)+\'...\':(actItem?.title) }}</a> ({{actItem?.product_sku}})\n																							</td>\n\n																							<td class="text-center">{{actItem?.views}}</td>\n																							<td>{{actItem?.final_price}} AED</td>\n																							<td *ngIf="actItem?.time == \'End\'">Ended</td>\n																							<td *ngIf="actItem?.time == \'Started\'">{{actItem?.days_left | removeplusSign:actItem?.days_left}}</td>\n																							<td><a href="#/GetAll/{{actItem?.product_id}}">Sell similar</a></td>\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="5">\n																								<b>Quantity:</b> {{actItem?.quantity}}\n																							</td>\n																						</tr>\n																						<tr>\n																							<td class="border-0 border-bottom-td" colspan="5">\n																								<b>Shipping cost:</b> free\n																							</td>\n																						</tr>\n																					</tbody>\n																				</ng-template>\n																			</table>\n																		</div>\n																	</div>\n																	<div class="row m-0" *ngIf="activeItem?.data.length >= 1;">\n																		<div class="col-lg-1 col-md-1 col-1 p-0">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox" class="custom-control-input" id="checkAllfixedprice" (change)="checkAllSD(\'fixprce\')">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-11 col-md-11 col-11 p-0">\n																			<a class="btn theme-light-btn ml-1 mr-1" role="button" (click)="activeallOperation(\'Edit\',\'fixprce\')">Edit</a>\n																			<a class="btn theme-light-btn ml-1 mr-1" role="button" (click)="activeallOperation(\'End\',\'fixprce\')">End</a>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																			<pagination-controls (pageChange)="page_fix = $event" id="page_fixId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="out-of-stock-active" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 table-responsive">\n																			<table class="table table-sm setFont-size">\n																				<thead class="thead-light">\n																					<tr>\n																						<th scope="col">#</th>\n																						<th scope="col" class="text-center">Image</th>\n																						<th scope="col">Description</th>\n																						<th scope="col" class="text-center">Views / Watchers</th>\n																						<th scope="col">Price</th>\n																						<th scope="col">Time Left</th>\n																						<th scope="col">Actions</th>\n																					</tr>\n																				</thead>\n																				<tbody *ngIf="activeItem?.data.length <= 0;else showAlloutstock;">\n																					<tr>\n																						<td colspan="9" class="text-center">You do not have any items in your list</td>\n																					</tr>\n																				</tbody>\n																				<ng-template #showAlloutstock>\n																					<tbody *ngFor="let actItem of activeItem?.data | paginate: {itemsPerPage: 5, currentPage:page_outstock, id: \'page_outstockId\', totalItems: activeItem?.count.out_of_stock}; let i = index ">\n																						<tr>\n																							<td rowspan="3" class="border-bottom-td">\n																								<label class="custom-control custom-checkbox m-0">\n																									<input type="checkbox" class="custom-control-input" value="{{actItem?.product_id}}" id="chkactiveoutstock-{{actItem?.product_id}}" name="chkactive_outstock">\n																									<span class="custom-control-indicator"></span>\n																								</label>\n																							</td>\n																							<td rowspan="3" class="border-bottom-td text-center">\n																								<a (click)="goToProductDetails(actItem?.product_id)" class="text-primary">\n																									<img src="{{trandingImgUrl}}{{actItem?.product_id}}/L/{{actItem?.photos[0]}}" class="img-fluid product-view-img">\n																								</a>\n																							</td>\n																							<td>\n																								<a (click)="goToProductDetails(actItem?.product_id)" class="text-primary" title="{{actItem?.title}}">{{ (actItem?.title.length > 30)? (actItem?.title | slice:0:20)+\'...\':(actItem?.title) }}</a> ({{actItem?.product_sku}})\n																							</td>\n\n																							<td class="text-center">{{actItem?.views}}</td>\n\n																							<td>{{actItem?.final_price}} AED</td>\n																							<td *ngIf="actItem?.time == \'End\'">Ended</td>\n																							<td *ngIf="actItem?.time == \'Started\'">{{actItem?.days_left | removeplusSign:actItem?.days_left}}</td>\n																							<td><a href="#/GetAll/{{actItem?.product_id}}">Sell similar</a></td>\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="5">\n																								<b>Quantity:</b> {{actItem?.quantity}}\n																							</td>\n																						</tr>\n																						<tr>\n																							<td class="border-0 border-bottom-td" colspan="5">\n																								<b>Shipping cost:</b> free\n																							</td>\n																						</tr>\n																					</tbody>\n																				</ng-template>\n																			</table>\n																		</div>\n																	</div>\n																	<div class="row m-0" *ngIf="activeItem?.data.length >= 1;">\n																		<div class="col-lg-1 col-md-1 col-1 p-0">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox" class="custom-control-input" id="checkAlloutofstock" (change)="checkAllSD(\'outstock\')">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-11 col-md-11 col-11 p-0">\n																			<a class="btn theme-light-btn ml-1 mr-1" role="button" (click)="activeallOperation(\'Edit\',\'outstock\')">Edit</a>\n																			<a class="btn theme-light-btn ml-1 mr-1" role="button" (click)="activeallOperation(\'End\',\'outstock\')">End</a>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																			<pagination-controls (pageChange)="page_outstock = $event" id="page_outstockId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 my-wish-list showTargetDiv d-none my-account-verticle-tab-div11" id="my-account-verticle-tab-div11">\n											<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n												<h6 class="m-0 text-left"> Sold ({{soldData?.data.length}})</h6>\n											</div>\n											<div class="row ml-0 mr-0 mb-0 mt-2" *ngIf="soldviewfeedback == false">\n												<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0 mt-2 mb-2">\n													<ul class="nav nav-tabs listing-active-all setFont-size">\n														<li class="active border-right-wish pl-0">\n															<a data-toggle="tab" href="#all-sold" (click)="viewSoldItem(\'All\')">All ({{soldData?.data.length}})</a></li>\n														<li class="border-right-wish">\n															<a data-toggle="tab" href="#awaiting-payment-sold" (click)="viewSoldItem(\'AwaitingPayment\')">Awaiting Payment ({{sold_AwaitingPayment?.data.length || 0}})</a></li>\n														<li class="border-right-wish">\n															<a data-toggle="tab" href="#awaiting-shipment-sold" (click)="viewSoldItem(\'AwaitingShipment\')">Awaiting Shipment ({{sold_AwaitingShipment?.data.length || 0}})</a></li>\n														<li>\n															<a data-toggle="tab" href="#shipped-sold" (click)="viewSoldItem(\'Shipped\')">Shipped ({{sold_Shipped?.data.length || 0}})</a></li>\n													</ul>\n													<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0">\n														<div class="alert alert-danger alert-dismissible setFont-size mt-4 hide" id="danger-alert-sld" role="alert">\n															<a class="close" (click)="closeDivsld()">&times;</a>\n															<span id="danger-span-sld"></span>\n														</div>\n													</div>\n													<div class="tab-content">\n														<div id="all-sold" class="tab-pane fade in active show">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<div class="table-responsive">\n																				<table class="table table-sm wish-list-table setFont-size">\n																					<thead class="thead-light">\n																						<tr>\n																							<th scope="col" class="wish-th-small">\n																								#\n																							</th>\n																							<th scope="col" class="wish-th-img-sold text-center">\n																								Image\n																							</th>\n																							<th scope="col" class="wish-th-desc">\n																								Description\n																							</th>\n																							<th scope="col" class="wish-th">Price\n																							</th>\n																							<th scope="col" class="wish-th">\n																								Sale Date\n																							</th>\n																							<th scope="col" class="wish-th">\n																								Actions\n																							</th>\n																						</tr>\n																					</thead>\n																					<tbody *ngIf="soldData?.data.length <=0;else showSoldAll">\n																						<tr>\n																							<td colspan="6" class="text-center">\n																								You do not have any items in your list\n																							</td>\n																						</tr>\n																					</tbody>\n																					<ng-template #showSoldAll>\n																						<tbody *ngFor="let sldData of soldData?.data | paginate: {itemsPerPage: 5, currentPage:page_soldall, id: \'page_soldallId\', totalItems: soldData?.data.length}; let i = index">\n																							<tr>\n																								<td rowspan="5"\n																									class="border-bottom-td">\n																									<label class="custom-control custom-checkbox m-0">\n																										<input type="checkbox" class="custom-control-input" id="soldchk_all-{{sldData?.id}}" value="{{sldData?.id}}" name="soldchk_all">\n																										<span class="custom-control-indicator"></span>\n																									</label>\n																								</td>\n																								\n																								<td rowspan="5" class="border-bottom-td text-center">\n																									<a>\n																										<img src="{{trandingImgUrl}}{{sldData.id}}/L/{{sldData?.photos[0]}}" class="img-fluid product-wish-img">\n																									</a>\n																								</td>\n																								<td>\n																									<a (click)="gotopurchaseusrList(sldData?.id)" class="text-primary">{{sldData?.title}}</a>\n																									({{sldData?.product_sku}})\n																								</td>\n																								<td>{{sldData?.price - (sldData?.price*sldData?.discount) / 100 }} AED</td>\n																								<td>-</td>\n																								\n																								<td><b><a class="text-primary" (click)="soldviewfeedbackData(sldData?.id)">view feedback</a></b></td> <!-- <b><a href="#/viewItem/{{sldData.id}}">Buy It Now</a></b> -->\n																							</tr>\n																							<tr>\n																								<td class="border-0" colspan="3"><b>Shipping Cost:</b> Free </td>\n																								<td class="border-0"><a class="text-primary" (click)="gotopurchaseusrList(sldData?.id)">View order details</a></td>\n																							</tr>\n																							<tr>\n																								<td class="border-0"><b>Sold Quantity:</b> {{sldData?.sold_quantity}}</td>\n																								<td class="border-0" colspan="3">Free shipping</td>\n																							</tr>\n																							<tr>\n																								<td class="border-0" colspan="4"><b>Number of orders:</b> {{sldData?.total_buyer}}</td>																							\n																							</tr>\n																						</tbody>\n																					</ng-template>\n																				</table>\n																			</div>\n																		</div>\n																	</div>\n																	<div class="row m-0" *ngIf="soldData?.data.length >= 1">\n																		<div class="col-lg-1 col-md-1 col-1 p-0">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox"  class="custom-control-input" id="checksoldAll" (change)="checkAllSD(\'soldAll\')">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-11 col-md-11 col-11 p-0">\n																			<a class="btn theme-light-btn ml-1 mr-1 mb-3 mb-md-0 mb-lg-0" role="button" (click)="deletesholdItem(\'soldAll\')">Delete from list</a>\n																			<br class="d-lg-none d-md-none d-block">\n																			<span class="setFont-size text-danger">Please click <b>order details</b> to update status.</span>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																			<pagination-controls (pageChange)="page_soldall = $event" id="page_soldallId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="awaiting-answer-sold" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<p class="m-0">You do not have any items in your list.</p>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="awaiting-total-sold" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<p class="m-0">You do not have any items in your list.</p>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="awaiting-payment-sold" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0 table-responsive">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<table class="table table-sm wish-list-table setFont-size">\n																				<thead class="thead-light">\n																					<tr>\n																						<th scope="col" class="wish-th-small">\n																							#\n																						</th>\n																						<th scope="col" class="wish-th-small">\n																							#\n																						</th>\n																						<th scope="col" class="wish-th-img-sold text-center">\n																							Image\n																						</th>\n																						<th scope="col" class="wish-th-desc">\n																							Description\n																						</th>\n																						<th scope="col" class="wish-th">Price\n																						</th>\n																						<th scope="col" class="wish-th">\n																							Sale Date\n																						</th>\n																						<th scope="col" class="wish-th">\n																							Actions\n																						</th>\n																					</tr>\n																				</thead>\n																				<tbody *ngIf="sold_AwaitingPayment?.data.length <=0;else showSoldawaitingpayment">\n																					<tr>\n																						<td colspan="7" class="text-center">\n																							You do not have any items in your list\n																						</td>\n																					</tr>\n																				</tbody>\n																				<ng-template #showSoldawaitingpayment>\n																					<tbody *ngFor="let sldawpData of sold_AwaitingPayment?.data | paginate: {itemsPerPage: 5, currentPage:page_soldpay, id: \'page_soldpayId\', totalItems: sold_AwaitingPayment?.data.length}; let i = index">\n																						<tr>\n																							<td rowspan="5" class="border-bottom-td">\n																								<label class="custom-control custom-checkbox m-0">\n																									<input type="checkbox" class="custom-control-input" id="soldchk_awaitpayment-{{sldawpData?.id}}" value="{{sldawpData?.id}}" name="soldchk_awaitpayment">\n																									<span class="custom-control-indicator"></span>\n																								</label>\n																							</td>\n																							<td rowspan="5" class="border-bottom-td">\n																								<i class="fa fa-lock"></i>\n																							</td>\n																							<td rowspan="5" class="border-bottom-td text-center">\n																								<a>\n																									<img src="{{trandingImgUrl}}{{sldawpData.id}}/L/{{sldawpData?.photos[0]}}" class="img-fluid product-wish-img">\n																								</a>\n																							</td>\n																							<td>\n																								<a (click)="gotopurchaseusrList(sldawpData?.id)" class="text-primary">{{sldawpData?.title}}</a>\n																								({{sldawpData?.product_sku}})\n																							</td>\n																							<td>{{sldawpData?.price - (sldawpData?.price*sldawpData?.discount) / 100 }} AED</td>\n																							<td>-</td>\n																							<td><b><a class="text-primary" (click)="soldviewfeedbackData(sldawpData?.id)">view feedback</a></b></td> <!-- <b><a href="#/viewItem/{{sldawpData.id}}">Buy It Now</a></b> -->\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="3"><b>Shipping Cost:</b> Free </td>\n																							<td class="border-0"><a class="text-primary" (click)="gotopurchaseusrList(sldawpData?.id)">View order details</a></td>\n																						</tr>\n																						<tr>\n																							<td class="border-0"><b>Sold Quantity:</b> {{sldawpData?.sold_quantity}}</td>\n																							<td class="border-0" colspan="3">Free shipping</td>\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="4"><b>Number of orders:</b> {{sldawpData?.total_buyer}}</td>																							\n																						</tr>\n																					</tbody>\n																				</ng-template>\n																			</table>\n																		</div>\n																	</div>\n																	<div class="row m-0" *ngIf="sold_AwaitingPayment?.data.length >=1;">\n																		<div class="col-lg-1 col-md-1 col-1 p-0">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox"  class="custom-control-input" id="checkAllsoldawait" (change)="checkAllSD(\'awaitpayment\')">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-11 col-md-11 col-11 p-0">\n																			<a class="btn theme-light-btn ml-1 mr-1 mb-3 mb-md-0 mb-lg-0" role="button" (click)="deletesholdItem(\'awaitpayment\')">Delete from list</a>\n																			<br class="d-lg-none d-md-none d-block">\n																			<span class="setFont-size text-danger">Please click <b>order details</b> to update status.</span>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																			<pagination-controls (pageChange)="page_soldpay = $event" id="page_soldpayId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="awaiting-shipment-sold" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0 table-responsive">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<table class="table table-sm wish-list-table setFont-size">\n																				<thead class="thead-light">\n																					<tr>\n																						<th scope="col" class="wish-th-small">\n																							#\n																						</th>\n																						<th scope="col" class="wish-th-small">\n																							#\n																						</th>\n																						<th scope="col" class="wish-th-img-sold text-center">\n																							Image\n																						</th>\n																						<th scope="col" class="wish-th-desc">\n																							Description\n																						</th>\n																						<th scope="col" class="wish-th">Price\n																						</th>\n																						<th scope="col" class="wish-th">\n																							Sale Date\n																						</th>\n																						<th scope="col" class="wish-th">\n																							Actions\n																						</th>\n																					</tr>\n																				</thead>\n																				<tbody *ngIf="sold_AwaitingShipment?.data.length <=0;else showSoldshipment">\n																					<tr>\n																						<td colspan="7" class="text-center">\n																							You do not have any items in your list\n																						</td>\n																					</tr>\n																				</tbody>\n																				<ng-template #showSoldshipment>\n																					<tbody *ngFor="let sldDataship of sold_AwaitingShipment?.data | paginate: {itemsPerPage: 5, currentPage:page_soldship, id: \'page_soldshipId\', totalItems: sold_AwaitingShipment?.data.length}; let i = index">\n																						<tr>\n																							<td rowspan="5"\n																								class="border-bottom-td">\n																								<label class="custom-control custom-checkbox m-0">\n																									<input type="checkbox" class="custom-control-input" id="soldchk_awaitshiped-{{sldDataship?.id}}" value="{{sldDataship?.id}}" name="soldchk_awaitshiped">\n																									<span class="custom-control-indicator"></span>\n																								</label>\n																							</td>\n																							<td rowspan="5" class="border-bottom-td">\n																								<i class="fa fa-lock"></i>\n																							</td>\n																							<td rowspan="5" class="border-bottom-td text-center">\n																								<a>\n																									<img src="{{trandingImgUrl}}{{sldDataship.id}}/L/{{sldDataship?.photos[0]}}" class="img-fluid product-wish-img">\n																								</a>\n																							</td>\n																							<td>\n																								<a>{{sldDataship?.title}}</a>\n																								({{sldDataship?.product_sku}})\n																							</td>\n																							<td>{{sldDataship?.price - (sldDataship?.price*sldDataship?.discount) / 100 }} AED</td>\n																							<td>-</td>\n																							<td><b><a class="text-primary" (click)="soldviewfeedbackData(sldDataship?.id)">view feedback</a></b></td> <!-- <b><a href="#/viewItem/{{sldDataship.id}}">Buy It Now</a></b> -->\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="3"><b>Shipping Cost:</b> Free</td>\n																							<td class="border-0"><a class="text-primary" href="#/purchaseusrList/{{sldDataship.id}}">View order details</a></td>\n																						</tr>\n																						<tr>\n																							<td class="border-0"><b>Sold Quantity:</b> {{sldDataship?.sold_quantity}}</td>\n																							<td class="border-0" colspan="3">Free shipping</td>\n																							\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="4"><b>Number of orders:</b> {{sldDataship?.total_buyer}}</td>																							\n																						</tr>\n																					</tbody>\n																				</ng-template>\n																			</table>\n																		</div>\n																	</div>\n																	<div class="row m-0" *ngIf="sold_AwaitingShipment?.data.length >= 1;">\n																		<div class="col-lg-1 col-md-1 col-1 p-0">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox"  class="custom-control-input" id="checkAllsoldawaitship" (change)="checkAllSD(\'awaitship\')">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-11 col-md-11 col-11 p-0">\n																			<a class="btn theme-light-btn ml-1 mr-1 mb-3 mb-md-0 mb-lg-0" role="button" (click)="deletesholdItem(\'awaitship\')">Delete from list</a>\n																			<br class="d-lg-none d-md-none d-block">\n																			<span class="setFont-size text-danger">Please click <b>order details</b> to update status.</span>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																			<pagination-controls (pageChange)="page_soldship = $event" id="page_soldshipId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="awaiting-feedback-sold" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<p class="m-0">You do not have any items in your list.</p>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div id="shipped-sold" class="tab-pane fade">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0 table-responsive">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<table class="table table-sm wish-list-table setFont-size">\n																				<thead class="thead-light">\n																					<tr>\n																						<th scope="col" class="wish-th-small">\n																							#\n																						</th>\n																						<th scope="col" class="wish-th-small">\n																							#\n																						</th>\n																						<th scope="col" class="wish-th-img-sold text-center">\n																							Image\n																						</th>\n																						<th scope="col" class="wish-th-desc">\n																							Description\n																						</th>\n																						<th scope="col" class="wish-th">Price\n																						</th>\n																						<th scope="col" class="wish-th">\n																							Sale Date\n																						</th>\n																						<th scope="col" class="wish-th">\n																							Actions\n																						</th>\n																					</tr>\n																				</thead>\n																				<tbody *ngIf="sold_Shipped?.data.length <=0;else showSoldshipped">\n																					<tr>\n																						<td colspan="7" class="text-center">\n																							You do not have any items in your list\n																						</td>\n																					</tr>\n																				</tbody>\n																				<ng-template #showSoldshipped>\n																					<tbody *ngFor="let sldDatashiped of sold_Shipped?.data | paginate: {itemsPerPage: 5, currentPage:page_soldshipped, id: \'page_soldshippedId\', totalItems: sold_Shipped?.data.length}; let i = index">\n																						<tr>\n																							<td rowspan="5" class="border-bottom-td">\n																								<label class="custom-control custom-checkbox m-0">\n																									<input type="checkbox" class="custom-control-input" id="soldchk_shiped-{{sldDatashiped?.id}}" value="{{sldDatashiped?.id}}" name="soldchk_shiped">\n																									<span class="custom-control-indicator"></span>\n																								</label>\n																							</td>\n																							<td rowspan="5" class="border-bottom-td">\n																								<i class="fa fa-lock"></i>\n																							</td>\n																							<td rowspan="5" class="border-bottom-td text-center">\n																								<a>\n																									<img src="{{trandingImgUrl}}{{sldDatashiped.id}}/L/{{sldDatashiped?.photos[0]}}" class="img-fluid product-wish-img">\n																								</a>\n																							</td>\n																							<td>\n																								<a>{{sldDatashiped?.title}}</a>\n																								({{sldDatashiped?.product_sku}})\n																							</td>\n																							<td>{{sldDatashiped?.price - (sldDatashiped?.price*sldDatashiped?.discount) / 100 }} AED</td>\n																							<td>-</td>\n																							<td><b><a class="text-primary" (click)="soldviewfeedbackData(sldDatashiped?.id)">view feedback</a></b></td> <!-- <b><a href="#/viewItem/{{sldDatashiped.id}}">Buy It Now</a></b> -->\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="3"><b>Shipping Cost:</b> Free </td>\n																							<td class="border-0"><a class="text-primary" href="#/purchaseusrList/{{sldDatashiped.id}}">View order details</a></td>\n																						</tr>\n																						<tr>\n																							<td class="border-0"><b>Sold Quantity:</b> {{sldDatashiped?.sold_quantity}}</td>\n																							<td class="border-0" colspan="3">Free shipping</td>\n																						</tr>\n																						<tr>\n																							<td class="border-0" colspan="4"><b>Number of orders:</b> {{sldDatashiped?.total_buyer}}</td>																							\n																						</tr>\n																					</tbody>\n																				</ng-template>\n																			</table>\n																		</div>\n																	</div>\n																	<div class="row m-0" *ngIf="sold_Shipped?.data.length >= 1;">\n																		<div class="col-lg-1 col-md-1 col-1 p-0">\n																			<label class="custom-control custom-checkbox m-0">\n																				<input type="checkbox"  class="custom-control-input" id="checkAllshipped" (change)="checkAllSD(\'shiped\')">\n																				<span class="custom-control-indicator"></span>\n																			</label>\n																		</div>\n																		<div class="col-lg-11 col-md-11 col-11 p-0">\n																			<a class="btn theme-light-btn ml-1 mr-1 mb-3 mb-md-0 mb-lg-0" role="button" (click)="deletesholdItem(\'shiped\')">Delete from list</a>\n																			<br class="d-lg-none d-md-none d-block">\n																			<span class="setFont-size text-danger">Please click <b>order details</b> to update status.</span>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																			<pagination-controls (pageChange)="page_soldshipped = $event" id="page_soldshippedId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n											</div>\n											<div class="row ml-0 mr-0 mb-0 mt-2" *ngIf="soldviewfeedback == true">\n												<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0 mt-2 mb-2">\n													<div class="tab-content">\n														<div id="all-sold" class="tab-pane fade in active show">\n															<p class="mt-2 setFont-size">{{showonlyfeedback?.total}} Feedback received (viewing {{showonlyfeedback?.from}}-{{showonlyfeedback?.to}})</p>\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																	<div class="row m-0">\n																		<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0 pb-3 text-right">\n																			<button class="btn theme-light-btn ml-1 mr-1 pb-4" (click)="hideFeedbackData()">Close</button>\n																		</div>\n																	</div>\n																	<div class="row m-0 ">\n																		<div class="col-lg-12 col-md-12 col-12 p-0">\n																			<div class="table-responsive">\n																				<table class="table table-sm feedback-listing-table setFont-size">\n																					<thead class="thead-light">\n																					<tr>\n																						<th scope="col" colspan="2">Feedback</th>\n																						<th scope="col">From</th>\n																						<th scope="col">When</th>\n																					</tr>\n																					</thead>\n																					<tbody *ngIf="showonlyfeedback?.total <= 0;else showonlyfeedbackdata">\n																						<tr>\n																							<td colspan="4" class="text-center">\n																								No Data found\n																							</td>\n																						</tr>\n																					</tbody>\n																					<ng-template #showonlyfeedbackdata>\n																						<tbody *ngFor="let onlyfeedback of showonlyfeedback?.data | paginate: {itemsPerPage: showonlyfeedback?.per_page, currentPage:showonlyfeedback?.current_page, id: \'showonlyfeedbackId\', totalItems: showonlyfeedback?.total}; let i = index">\n																							<tr class="darkfont">\n																								<td rowspan="2"><i class="fa fa-plus-circle text-success feedback-range"></i>\n																								</td>\n																								<td><b>{{onlyfeedback?.description}}</b></td>\n																								<td>Buyer: {{onlyfeedback?.buyer_name}}</td>\n																								<td>{{onlyfeedback?.created_date}}</td>\n																							</tr>\n																							<tr>\n																								<td class="border-0">{{onlyfeedback?.product_title}}(#{{onlyfeedback?.product_sku}}) </td>\n																								<td class="border-0" colspan="2">{{onlyfeedback?.price}} AED</td>\n																							</tr>\n																						</tbody>\n																					</ng-template>\n																				</table>\n																			</div>\n																		</div>\n																	</div>\n																	<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																		<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																			<pagination-controls (pageChange)="page = getServerDataFeedbackonly($event)" id="showonlyfeedbackId" maxSize="{{showonlyfeedback?.last_page}}" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 showTargetDiv d-none my-account-verticle-tab-div12" id="my-account-verticle-tab-div12">\n											<form name="" method="post">\n												<div class="row mt-0 ml-0 mr-0 mb-2 my-dibdaa-views">\n													<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n														<div class="row m-0">\n															<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0">\n																<h6 class="m-0 text-left"> Unsold: Not relisted yet ({{unsoldItem?.data.length}})</h6>\n															</div>\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0">\n													<div class="alert alert-danger alert-dismissible setFont-size hide mt-4" id="danger-alert-US" role="alert">\n														<a class="close" (click)="closeDivUS()">&times;</a>\n														<span id="danger-span-AS">You did not select any items.</span>\n													</div>\n												</div>\n												<div class="row ml-0 mr-0 mb-0 mt-3">\n													<div class="col-lg-2 col-md-2 col-xl-2 col-6 pt-2 pl-0 pr-0">\n														<label class="custom-control custom-checkbox pl-4 m-0">\n															<input type="checkbox" class="custom-control-input" name="checkAllUnsold" id="checkAllUnsold" (change)="checkAllSD(\'unsold\')">\n															<span class="custom-control-indicator"></span>\n															<span class="custom-control-description setFont-size">Select all items</span>\n														</label>\n													</div>\n													<div class="col-lg-2 col-md-2 col-xl-2 col-6 pl-0 pr-0">\n														<button class="btn theme-light-btn ml-1 mr-1mt-lg-0" role="button" (click)="deleteAllunsold()">Delete</button>\n													</div>\n													<div class="form-group col-md-8 col-lg-8 col-xl-8 col-6 pt-2 pr-0">\n														<select id="selectunsold" class="form-control select-fliter-sort" name="selectunsold" #selectunsold (change)="filterunsold(selectunsold.value)">\n															<option selected>Sort</option>\n															<option value="recent_first">Time ended: recent first</option>\n															<option value="recent_last">Time ended: recent last</option>\n														</select>\n													</div>\n												</div>\n												<div class="row ml-0 mr-0 mb-0 mt-1 setFont-size pt-2 pb-2">\n													<div class="col-lg-12 col-md-12 col-12 p-0">\n														<div class="table-responsive">\n															<table class="table table-sm setFont-size">\n																<thead class="thead-light">\n																<tr>\n																	<th scope="col">#</th>\n																	<th scope="col" class="text-center">Image</th>\n																	<th scope="col">Description</th>\n																	<th scope="col">Price</th>\n																	<th scope="col">Time</th>\n																	<th scope="col">Relist</th>\n																</tr>\n																</thead>\n																<tbody *ngIf="unsoldItem?.data.length <= 0;else nodataunsold">\n																	<tr>\n																		<td colspan="6"class="text-center">You do not have any items in your list</td>\n																	</tr>\n																</tbody>\n																<ng-template #nodataunsold>\n																	<tbody *ngFor="let unsolditm of unsoldItem?.data | paginate: {itemsPerPage: 5, currentPage:page_unsold, id: \'page_unsoldId\', totalItems: unsoldItem?.data.length}; let i = index">\n																		<tr>\n																			<td class="border-bottom-td" rowspan="3">\n																				<label class="custom-control custom-checkbox m-0">\n																					<input type="checkbox" class="custom-control-input" value="{{unsolditm?.id}}" name="chkunsoldAll" id="chkunsold-{{unsolditm?.id}}">\n																					<span class="custom-control-indicator"></span>\n																				</label>\n																			</td>\n																			<td class="border-bottom-td text-center" rowspan="3">\n																				<a href="#/viewItem/{{unsolditm?.id}}">\n																					<img src="{{trandingImgUrl}}{{unsolditm?.id}}/L/{{unsolditm?.photos[0]}}" class="img-fluid product-Unsold-img">\n																				</a>\n																			</td>\n																			<td> {{unsolditm?.title}} </td>\n																			<td>{{ unsolditm?.price - (unsolditm?.price*unsolditm?.discount) / 100 }} AED</td>\n																			<td>Ended</td>\n																			<td ><a class="text-primary" (click)="gotoeditProduct(unsolditm?.id,\'Unsold\')">Update and Relist</a></td>\n																		</tr>\n																		<tr>\n																			<td class="border-0">{{unsolditm?.product_sku}}</td>\n																			<td class="border-0 ">Free</td>\n																			<td class="border-0">{{unsolditm?.last_date}}</td>\n <td class="border-0"><a class="text-primary" (click)="gotorelistProduct(unsolditm?.id,\'Unsold\')">Relist</a></td>	\n																	</tr>\n																		<tr>\n																			<td class="border-0 border-bottom-td">\n																				<span *ngIf="unsolditm?.selling_type == \'Fixed price\'">Fixed price</span>\n																				<span *ngIf="unsolditm?.selling_type == \'Auction style\'">Auction style</span>\n																			</td>\n																			<td class="border-0 border-bottom-td" colspan="3">{{unsolditm?.quantity}} Remaining</td>\n																		</tr>\n																	</tbody>\n																</ng-template>\n															</table>\n														</div>\n													</div>\n												</div>\n												<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n													<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n														<pagination-controls (pageChange)="page_unsold = $event" id="page_unsoldId" maxSize="25" directionLinks="true" autoHide="false" class="text-center setFont-size"></pagination-controls>\n													</div>\n												</div>\n											</form>\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 my-wish-list showTargetDiv d-none my-account-verticle-tab-div14" id="my-account-verticle-tab-div14">\n											<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n												<h6 class="m-0 text-left"> Queries ({{returnviewData?.data.length}})</h6>\n											</div>\n											<div class="row ml-0 mr-0 mb-0 mt-2">\n												<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0 mt-2 mb-2">\n													<ul class="nav nav-tabs listing-active-all setFont-size">\n														<li class="active border-right-wish pl-0">\n															<a data-toggle="tab" href="#all-open-returns">All ({{returnviewData?.data.length}})</a></li>\n														<li class="border-right-wish">\n															<a data-toggle="tab" href="#open-returns">Open queries (0)</a></li>\n														<li class="border-right-wish">\n															<a data-toggle="tab" href="#delivered-returns">Delivered queries (0)</a></li>\n														<li>\n															<a data-toggle="tab" href="#closed-returns">Closed queries and replacements (0)</a>\n														</li>\n													</ul>\n													<div class="form-row mt-2 m-0">\n														<div class="form-group col-md-4 col-12 setFont-size">\n															<label>Period</label>\n															<select class="form-control" name="Period" #Period (change)="viewReturnData(Period.value)">\n																<option value="">Select</option>\n																<option value="one_day">Last 24 hours</option>\n																<option value="current_week">Last week</option>\n																<option value="current_month">Current month</option>\n																<option value="two_month">2 months</option>\n																<option value="six_month">6 months</option>\n																<option value="twelve_month">12 months</option>\n																<option value="eighteen_month">18 months</option>\n															</select>\n														</div>\n													</div>\n													<div class="col-lg-12 col-md-12 col-12 feedback-tab-panel p-0">\n														<ul class="nav nav-tabs feedback-tab-ul" role="tablist">\n															<li class="nav-item">\n																<a class="nav-link active" href="#returnbyseller" role="tab" data-toggle="tab" (click)="viewReturnData(\'All\')">Queries as seller ({{allCountData?.seller_return}})</a>\n															</li>\n															<li class="nav-item">\n																<a class="nav-link" href="#returnbybuyer" role="tab" data-toggle="tab" (click)="viewReturnData(\'Buyer\')">Queries as buyer ({{allCountData?.buyer_return}})</a>\n															</li>\n														</ul>\n													</div>\n													<div class="tab-content">\n														<div role="tabpanel" class="tab-pane fade in active show" id="returnbyseller">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-12 p-0">\n																	<div class="tab-content">\n																		<div id="all-open-returns" class="tab-pane fade in active show">\n																			<div class="row m-0">\n																				<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																					<div class="row m-0">\n																						<div class="col-lg-12 col-md-12 col-12 p-0">\n																							<div class="table-responsive">\n																								<table class="table table-sm wish-list-table setFont-size">\n																									<thead class="thead-light">\n																										<tr>\n																											<th scope="col" class="wish-th-desc">\n																												Description\n																											</th>\n																											<th scope="col" class="wish-th">Status\n																											</th>\n																											<th scope="col" class="wish-th">Refund\n																												Due\n																											</th>\n																											<th scope="col" class="wish-th">Refund\n																												Issued\n																											</th>\n																											<th scope="col" class="wish-th">Refund\n																												Due Date\n																											</th>\n																											<th scope="col" class="wish-th">\n																												Actions\n																											</th>\n																										</tr>\n																									</thead>\n																									<tbody *ngIf="returnviewData?.data.length <=0;else showreturnviewData">\n																										<tr>\n																											<td colspan="6" class="text-center">\n																												Item not found\n																											</td>\n																										</tr>\n																									</tbody>\n																									<ng-template #showreturnviewData>\n																										<tbody *ngFor="let rtrundata of returnviewData?.data | paginate: {itemsPerPage: 5, currentPage:page_returnall, id: \'page_returnallId\', totalItems: returnviewData?.data.length}; let i = index">\n																										<tr>\n																											<td>\n																												<a title="{{rtrundata?.title}}" class="text-primary" href="#/viewItem/{{rtrundata?.product_id}}"><b>{{ (rtrundata?.title.length > 20)? (rtrundata?.title | slice:0:20)+\'...\':(rtrundata?.title) }}</b></a>\n																											</td>\n																											<td>{{rtrundata?.ticket_status}}</td>\n																											<td>{{rtrundata?.price}} AED</td>\n																											<td>--</td>\n																											<td>--</td>\n																											<td><b><a class="text-primary" (click)="showreturnThread(rtrundata?.buyer_id,rtrundata?.seller_id,rtrundata?.product_id,rtrundata?.ticket_id)">Reply To {{rtrundata?.first_name}}</a></b>\n																											</td>\n																										</tr>\n																										<tr>\n																											<td class="border-0" colspan="6">\n																												<a class="text-primary" (click)="gotouserProfile(rtrundata?.buyer_id,\'UserProfile\')">{{rtrundata?.display_name}}</a>\n																											</td>\n																										</tr>\n																										<tr>\n																											<td class="border-0" colspan="6"><b>Return Date: </b>\n																												{{rtrundata?.created_date}}\n																											</td>\n																											\n																										</tr>\n																										<tr>\n																											<td class="border-0" colspan="6"><b>Return ID: </b>\n																												{{rtrundata?.ticket_id}}\n																											</td>\n																										</tr>\n																										<tr>\n																											<td class="border-0" colspan="6"><b>Reason: </b>\n																												{{rtrundata?.question}}\n																											</td>\n																										</tr>\n																										<tr>\n																											<td class="border-0 border-bottom-td" colspan="6">\n																												<b>Quantity: </b>\n																												1\n																											</td>\n																										</tr>\n																										</tbody>\n																									</ng-template>\n																								</table>\n																							</div>\n																						</div>\n																					</div>\n																					<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																						<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																							<pagination-controls (pageChange)="page_returnall = $event" id="page_returnallId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																						</div>\n																					</div>\n																				</div>\n																			</div>\n																		</div>\n																		<div id="open-returns" class="tab-pane fade">\n																			<div class="row m-0">\n																				<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																					<div class="row m-0">\n																						<div class="col-lg-12 col-md-12 col-12 p-0">\n																							<p class="m-0 empty-list-message text-center">You do not have any items in your list.</p>\n																						</div>\n																					</div>\n																				</div>\n																			</div>\n																		</div>\n																		<div id="open-replacements" class="tab-pane fade">\n																			<div class="row m-0">\n																				<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																					<div class="row m-0">\n																						<div class="col-lg-12 col-md-12 col-12 p-0">\n																							<p class="m-0 empty-list-message text-center">You do not have any items in your\n																								list.</p>\n																						</div>\n																					</div>\n																				</div>\n																			</div>\n																		</div>\n																		<div id="started-returns" class="tab-pane fade">\n																			<div class="row m-0">\n																				<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																					<div class="row m-0">\n																						<div class="col-lg-12 col-md-12 col-12 p-0">\n																							<p class="m-0 empty-list-message text-center">You do not have any items in your\n																								list.</p>\n																						</div>\n																					</div>\n																				</div>\n																			</div>\n																		</div>\n																		<div id="shipped-returns" class="tab-pane fade">\n																			<div class="row m-0">\n																				<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																					<div class="row m-0">\n																						<div class="col-lg-12 col-md-12 col-12 p-0">\n																							<p class="m-0 empty-list-message text-center">You do not have any items in your\n																								list.</p>\n																						</div>\n																					</div>\n																				</div>\n																			</div>\n																		</div>\n																		<div id="delivered-returns" class="tab-pane fade">\n																			<div class="row m-0">\n																				<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																					<div class="row m-0">\n																						<div class="col-lg-12 col-md-12 col-12 p-0">\n																							<p class="m-0 empty-list-message text-center">You do not have any items in your\n																								list.</p>\n																						</div>\n																					</div>\n																				</div>\n																			</div>\n																		</div>\n																		<div id="closed-returns" class="tab-pane fade">\n																			<div class="row m-0">\n																				<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																					<div class="row m-0">\n																						<div class="col-lg-12 col-md-12 col-12 p-0">\n																							<p class="m-0 empty-list-message text-center">You do not have any items in your\n																								list.</p>\n																						</div>\n																					</div>\n																				</div>\n																			</div>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n														<div role="tabpanel" class="tab-pane fade" id="returnbybuyer">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-12 p-0">\n																	<div class="tab-content">\n																		<div id="all-open-returns" class="tab-pane fade in active show">\n																			<div class="row m-0">\n																				<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n																					<div class="row m-0">\n																						<div class="col-lg-12 col-md-12 col-12 p-0">\n																							<div class="table-responsive">\n																								<table class="table table-sm wish-list-table setFont-size">\n																									<thead class="thead-light">\n																									<tr>\n																										<th scope="col" class="wish-th-desc">\n																											Description\n																										</th>\n																										<th scope="col" class="wish-th">Status\n																										</th>\n																										<th scope="col" class="wish-th">Refund\n																											Due\n																										</th>\n																										<th scope="col" class="wish-th">Refund\n																											Issued\n																										</th>\n																										<th scope="col" class="wish-th">Refund\n																											Due Date\n																										</th>\n																										<th scope="col" class="wish-th">\n																											Actions\n																										</th>\n																									</tr>\n																									</thead>\n																									<tbody *ngIf="returnviewData?.data.length <=0;else showreturnviewData">\n																									<tr>\n																										<td colspan="6" class="text-center">\n																											Item not found\n																										</td>\n																									</tr>\n																									</tbody>\n																									<ng-template #showreturnviewData>\n																										<tbody *ngFor="let rtrundata of returnviewData?.data | paginate: {itemsPerPage: 5, currentPage:page_returnallBuyer, id: \'page_returnallBuyerId\', totalItems: returnviewData?.data.length}; let i = index">\n																										<tr>\n																											<td>\n																												<a class="text-primary" title="{{rtrundata?.title}}"><b>{{ (rtrundata?.title.length > 20)? (rtrundata?.title | slice:0:20)+\'...\':(rtrundata?.title) }}</b></a>\n																											</td>\n																											<td>{{rtrundata?.ticket_status}}</td>\n																											<td>{{rtrundata?.price}} AED</td>\n																											<td>--</td>\n																											<td>--</td>\n																											<td><b><a class="text-primary" (click)="showreturnThread(rtrundata?.buyer_id,rtrundata?.seller_id,rtrundata?.product_id,rtrundata?.ticket_id)">Reply To {{rtrundata?.first_name}}</a></b>\n																											</td>\n																										</tr>\n																										<tr>\n																											<td class="border-0" colspan="6">\n																												<a class="text-primary" (click)="gotouserProfile(rtrundata?.seller_id,\'UserProfile\')">{{rtrundata?.display_name}}</a>\n																											</td>\n																										</tr>\n																										<tr>\n																											<td class="border-0" colspan="6"><b>Return Date: </b>\n																												{{rtrundata?.created_date}}\n																											</td>\n																										</tr>\n																										<tr>\n																											<td class="border-0" colspan="6"><b>Return ID: </b>\n																												{{rtrundata?.ticket_id}}\n																											</td>\n																										</tr>\n																										<tr>\n																											<td class="border-0" colspan="6"><b>Reason: </b>\n																												{{rtrundata?.question}}\n																											</td>\n																										</tr>\n																										<tr>\n																											<td class="border-0 border-bottom-td" colspan="6">\n																												<b>Quantity: </b>\n																												1\n																											</td>\n																										</tr>\n																										</tbody>\n																									</ng-template>\n																								</table>\n																							</div>\n																						</div>\n																					</div>\n																					<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n																						<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																							<pagination-controls (pageChange)="page_returnallBuyer = $event" id="page_returnallBuyerId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																						</div>\n																					</div>\n																				</div>\n																			</div>\n																		</div>\n																	</div>\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 showTargetDiv d-none my-account-verticle-tab-div15" id="my-account-verticle-tab-div15">\n											<form name="" method="post">\n												<div class="row mt-0 ml-0 mr-0 mb-2 my-dibdaa-views">\n													<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n														<div class="row m-0">\n															<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0">\n																<h6 class="m-0 text-left"> Selling: Deleted Items</h6>\n															</div>\n														</div>\n													</div>\n													<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n														<div class="alert alert-danger alert-dismissible setFont-size hide" id="dangeralert" role="alert">\n															<a class="close" (click)="closeDiv_Delete(\'danger\')">&times;</a>\n															<span id="dangerspan">You did not select any items.</span>\n														</div>\n													</div>\n													<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n														<div class="row ml-0 mr-0 mt-2 mb-3">\n															<div class="col-lg-4 col-md-4 col-12 pl-0 mb-3 mb-lg-0 mb-md-0">\n																<select id="deleteBrowse" class="form-control select-fliter-sort" name="deleteBrowse" #deleteBrowse (change)="deleteFilter(deleteBrowse.value)">\n																	<option selected="selected">Browse by</option>\n																	<option value="sold">Selling: Sold</option>\n																	<option value="unsold">Selling: Unsold</option>\n																</select>\n															</div>\n															<div class="col-lg-4 col-md-4 col-12 pl-0 mb-3 mb-lg-0 mb-md-0">\n																<select id="inputPeriod" class="form-control select-fliter-sort" name="deletePeriod" #deletePeriod (change)="deleteFilter(deletePeriod.value)">\n																	<option selected="selected">Period</option>\n																	<option value="CurrentMonth">Current month</option>\n																	<option value="LastMonth">Last month</option>\n																	<option value="Last60Days">Last 60 days</option>\n																</select>\n															</div>\n															<div class="col-lg-4 col-md-4 col-12 pl-0 mb-3 mb-lg-0 mb-md-0">\n																<select id="inputSortDele" class="form-control select-fliter-sort" name="deleteSort" #deleteSort (change)="deleteFilter(deleteSort.value)">\n																	<option selected="selected">Sort by</option>\n																	<option value="recently"> Recently deleted </option>\n																	<option value="asc">Price: lowest </option>\n																	<option value="desc"> Price: highest </option>\n																</select>\n															</div>\n														</div>\n														<div class="row m-0">\n															<div class="col-lg-12 col-md-12 col-12 p-0">\n																<div class="table-responsive">\n																	<table class="table table-sm setFont-size">\n																		<thead class="thead-light">\n																		<tr>\n																			<th scope="col">#</th>\n																			<th scope="col" class="text-center">Image</th>\n																			<th scope="col">Description</th>\n																			<th scope="col">Watchers</th>\n																			<th scope="col">Bids</th>\n																			<th scope="col">Price</th>\n																			<th scope="col">Time Left</th>\n																			<th scope="col">Actions</th>\n																		</tr>\n																		</thead>\n																		<tbody *ngIf="deleteItem?.data.length <=0;else showdeleteAll">\n																			<tr>\n																				<td colspan="8" class="text-center">\n																					You do not have any items in your list\n																				</td>\n																			</tr>\n																		</tbody>\n																		<ng-template #showdeleteAll>\n																			<tbody *ngFor="let dltitm of deleteItem?.data | paginate: {itemsPerPage: 5, currentPage:page_delete, id: \'page_deleteId\', totalItems: deleteItem?.data.length}; let i = index">\n																				<tr>\n																					<td rowspan="3" class="border-bottom-td">\n																						<label class="custom-control custom-checkbox m-0">\n																							<input type="checkbox" class="custom-control-input" name="chkdltitem" value="{{dltitm?.id}}" id="chkdltitem-{{dltitm?.id}}" (change)="deleteItems(\'single\')">\n																							<span class="custom-control-indicator"></span>\n																						</label>\n																					</td>\n																					\n																					<td rowspan="3" class="border-bottom-td text-center">\n																						<a>\n																							<img src="{{trandingImgUrl}}{{dltitm?.id}}/L/{{dltitm?.photos[0]}}" class="img-fluid product-view-img">\n																						</a>\n																					</td>\n																					<td>\n																						<a>{{dltitm?.title}}</a> ({{dltitm?.product_sku}})\n																					</td>\n																					<td>0</td>\n																					<td>--</td>\n																					<td>{{ dltitm?.price - (dltitm?.price*dltitm?.discount) / 100 }} AED</td>\n																					<td *ngIf="dltitm?.time == \'Started\'">{{dltitm?.days_left | removeplusSign:dltitm?.days_left}}</td>\n																					<td *ngIf="dltitm?.time == \'End\'">End</td>\n																					<td><a href="#/GetAll/{{dltitm?.id}}">Sell similar</a></td>\n																				</tr>\n																				<tr>\n																					<td class="border-0" colspan="6">\n																						<b>Quantity:</b> {{dltitm?.quantity}}\n																					</td>\n																				</tr>\n																				<tr>\n																					<td class="border-0 border-bottom-td" colspan="3"><b>Shipping\n																						cost:</b> Free\n																					</td>\n																					<td class="border-0 border-bottom-td" colspan="3">\n																						<img src="assets/images/bin_15x54.gif" *ngIf="dltitm?.time == \'Started\'">\n																					</td>\n																				</tr>\n																			</tbody>\n																		</ng-template>\n																	</table>\n																</div>\n															</div>\n														</div>\n														<div class="row m-0" *ngIf="deleteItem?.data.length >= 1;">\n															<div class="col-lg-1 col-md-1 col-1 p-0">\n																<label class="custom-control custom-checkbox m-0">\n																	<input type="checkbox" class="custom-control-input" id="checkAlldeleteItem" (change)="deleteItems(\'multiple\')">\n																	<span class="custom-control-indicator"></span>\n																</label>\n															</div>\n															<div class="col-lg-11 col-md-11 col-11 p-0">\n																<button class="btn theme-light-btn ml-1 mr-1" role="button" (click)="undeleteItem()">Undelete</button>\n															</div>\n														</div>\n														<div class="row ml-0 mr-0 mb-0 mt-3 bg-light">\n															<div class="col-lg-12 col-md-12 col-12 p-0 pl-md-2 paginationlist">\n																<pagination-controls (pageChange)="page_delete = $event" id="page_deleteId" maxSize="25" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n															</div>\n														</div>\n													</div>\n												</div>\n											</form>\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 showTargetDiv d-none my-account-verticle-tab-div18" id="my-account-verticle-tab-div18">\n											<div class="row mt-0 ml-0 mr-0 mb-2 my-dibdaa-views">\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-0 pl-lg-3 pl-md-3 pr-0">\n													<div class="row m-0">\n														<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 frontbg pl-3 mb-3 pt-2 pb-2">\n															<h6 class="m-0 text-left">Seller Invoice</h6>\n														</div>\n													</div>\n													<div class="form-row mt-2 m-0" *ngIf="allCountData?.active != 0">\n														<div class="form-group col-md-4 col-lg-5 col-12 setFont-size">\n															<label>Year</label>\n															<select class="form-control" name="invoiceMonth" #invoiceMonth="ngModel" required ngModel id="invoiceyear">\n																<option value="">Select</option>\n																<option value="{{showYear}}">{{showYear}}</option>\n																<option value="{{showYear-1}}">{{showYear-1}}</option>\n																<option value="{{showYear-2}}">{{showYear-2}}</option>\n																<option value="{{showYear-3}}">{{showYear-3}}</option>\n																<option value="{{showYear-4}}">{{showYear-4}}</option>\n															</select>\n															<div *ngIf="invoiceMonth.invalid && (invoiceMonth.dirty || invoiceMonth.touched)" class="error-box">\n																<div *ngIf="invoiceMonth.errors.required">\n																	* Select Year.\n																</div>\n															</div>\n														</div>\n														<div class="form-group col-md-4 col-lg-5 col-12 setFont-size">\n															<label>Month</label>\n															<select class="form-control" name="Period" id="invoicemonth">\n																<option value="01">January</option>\n																<option value="02">February</option>\n																<option value="03">March</option>\n																<option value="04">April</option>\n																<option value="05">May</option>\n																<option value="06">June</option>\n																<option value="07">July</option>\n																<option value="08">August</option>\n																<option value="09">September</option>\n																<option value="10">October</option>\n																<option value="11">November</option>\n																<option value="12">December</option>\n															</select>\n														</div>\n														<div class="form-group col-md-4 col-lg-2 col-12 setFont-size mt-2 pl-0 mt-md-4 mt-lg-4 text-center">\n															<button class="btn theme-light-btn ml-1 mr-1" [disabled]="!invoiceMonth.valid" (click)="gotoSellerIvoice()">Show Invoice</button>\n														</div>\n													</div>\n													<div class="form-row mt-2 m-0" *ngIf="allCountData?.active == 0">\n														<div class="form-group col-md-12 col-lg-12 col-12 setFont-size text-center">\n															Your seller invoice is not generated.\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n							<div role="tabpanel" class="tab-pane fade" id="account">\n								<div class="row m-0">\n									<div class="col-lg-2 col-md-3 col-xl-2 col-12 mt-2 mb-2 pr-lg-2 pl-0 pr-0">\n										<div class="row ml-lg-0 mr-lg-0 ml-md-0 mr-md-2 m-0 my-dibdaa-views">\n											<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n												<h6 class="m-0 text-left"> My Dibdaa Views</h6>\n											</div>\n											<div class="col-lg-12 col-md-12 col-xl-12 col-12">\n												<div class="categoryvarticlemenu">\n													<div class="list-group panel pt-2">\n														<h6 class="pt-2 m-0">My Account</h6>\n														<ul>\n															<li>\n																<a class="list-group-item pl-0 pr-0 showSingle account" target="1" (click)="gotouserProfile(\'\',\'\')">\n																	<span *ngIf="localItem?.role == \'seller\'">\n																		<span *ngIf="localItem?.account_type == \'business_account\'">Business Information</span>\n																		<span *ngIf="localItem?.account_type != \'business_account\'">Personal Information</span>\n																	</span>\n																	<span *ngIf="localItem?.role == \'buyer\'">Personal Information</span>\n																</a>\n															</li>\n															<li>\n																<a class="list-group-item pl-0 pr-0 showSingle MyAddresses" target="2" (click)="viewAdderss()">Addresses</a>\n															</li>\n															<li class="d-none">\n																<a class="list-group-item pl-0 pr-0 showSingle" target="4">Communication Preferences</a>\n															</li>\n															<li>\n																<a class="list-group-item pl-0 pr-0 showSingle" target="6" (click)="ViewDashboard()">Seller Dashboard</a>\n															</li>\n															<li>\n																<a class="list-group-item pl-0 pr-0 showSingle" target="7" (click)="viewFeedbackData(\'all\')">Feedback</a>\n															</li>\n															<li>\n																<a class="list-group-item pl-0 pr-0 showSingle resolutionCenter" target="9" (click)="viewpurchaseProducts_seller()">Resolution Center</a>\n															</li>\n														</ul>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="col-lg-10 col-md-9 col-xl-10 col-12 mt-2 mb-2 pl-lg-2 pl-0 pr-0">\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 targetDiv d-none" id="my-account-verticle-tab1" *ngIf="localItem?.role == \'seller\'">\n											<div class="row mt-0 ml-0 mr-0 mb-2 my-dibdaa-views">\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n													<div class="row m-0">\n														<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0">\n															<h6 class="m-0 text-left" *ngIf="localItem?.account_type == \'business_account\'">Business Information</h6>\n															<h6 class="m-0 text-left" *ngIf="localItem?.account_type != \'business_account\'">Personal Information</h6>\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 how-to-sell mt-2 p-2">\n													<h6 class="m-0 pl-1">Account Information</h6>\n												</div>\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0">\n													<table class="table table-sm table-striped">\n														<tbody>\n															<tr>\n																<td class="info-first-td pl-3">Account type</td>\n																<td class="info-second-td pl-3" *ngIf="localItem?.account_type == \'business_account\'">Business</td>\n																<td class="info-second-td pl-3" *ngIf="localItem?.account_type != \'business_account\'">Personal</td>\n																<td class="info-second-td pl-3"></td>\n															</tr>\n															<tr>\n																<td class="info-first-td pl-3">User name</td>\n																<td class="info-second-td pl-3">{{localItem?.display_name}}</td>\n																<td class="info-third-td pl-3"><a (click)="editBusinessuserName()"><i class="fa fa-pencil"></i>Edit</a></td>\n															</tr>\n															<tr>\n																<td class="info-first-td pl-3">Password</td>\n																<td class="info-second-td pl-3">**********</td>\n																<td class="info-third-td pl-3"><a (click)="editBusinessuserpassword()"><i class="fa fa-pencil"></i>Edit</a></td>\n															</tr>\n															<tr>\n																<td class="info-first-td pl-3">Company number</td>\n																<td class="info-second-td pl-3">{{(localItem?.company_number==null?\'-\':localItem?.company_number)}}</td>\n																<td class="info-third-td pl-3"><a (click)="editBusinesscompno()"><i class="fa fa-pencil"></i>Edit</a></td>\n															</tr>\n															<tr>\n																<td class="info-first-td pl-3">Vat number</td>\n																<td class="info-second-td pl-3">{{(localItem?.vat_number==null?\'-\':localItem?.vat_number)}}</td>\n																<td class="info-third-td pl-3"><a (click)="editBusinessvatno()"><i class="fa fa-pencil"></i>Edit</a></td>\n															</tr>\n														</tbody>\n													</table>\n												</div>\n											</div>\n											<div class="row mt-0 ml-0 mr-0 mb-2 my-dibdaa-views">\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n													<div class="row m-0">\n														<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0">\n															<h6 class="m-0 text-left">Email and Contact Information</h6>\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0 mt-1">\n													<table class="table table-sm table-striped">\n														<tbody *ngIf="localItem?.account_type == \'business_account\'">\n															<tr>\n																<td class="info-first-td pl-3">Registered email address</td>\n																<td class="info-second-td pl-3">{{(localItem?.email==null?\'-\':localItem?.email)}}</td>\n																<td class="info-third-td pl-3"></td>\n															</tr>\n															<tr>\n																<td class="info-first-td pl-3"> Business name</td>\n																<td class="info-second-td pl-3">{{(localItem?.business_name==null?\'-\':localItem?.business_name)}}</td>\n																<td class="info-third-td pl-3"><a (click)="editBusinessname()"><i class="fa fa-pencil"></i>Edit</a>\n																</td>\n															</tr>\n															<tr>\n																<td class="info-first-td pl-3">Business address</td>\n																<td class="info-second-td pl-3">{{(localItem?.business_address==null?\'-\':localItem?.business_address)}}</td>\n																<td class="info-third-td pl-3"><a (click)="editBusinessAddress()"><i class="fa fa-pencil"></i>Edit</a>\n															</tr>\n															<tr>\n																<td class="info-first-td pl-3">Business phone number</td>\n																<td class="info-second-td pl-3">{{(localItem?.business_mobile==null?\'-\':localItem?.business_mobile)}}</td>\n																<td class="info-third-td pl-3"><a (click)="editBusinessmobile()"><i class="fa fa-pencil"></i>Edit</a>\n															</tr>\n															<tr>\n																<td class="info-first-td pl-3">Business relationship</td>\n																<td class="info-second-td pl-3">{{(localItem?.business_relationship==null?\'-\':localItem?.business_relationship)}}</td>\n																<td class="info-third-td pl-3"><a (click)="editBusinessrelationship()"><i class="fa fa-pencil"></i>Edit</a>\n															</tr>\n														</tbody>\n														<tbody *ngIf="localItem?.account_type != \'business_account\'">\n															<tr>\n																<td class="info-first-td pl-3">Registered email address</td>\n																<td class="info-second-td pl-3">{{(localItem?.email==null?\'-\':localItem?.email)}}</td>\n																<td class="info-third-td pl-3"></td>\n															</tr>\n															<tr>\n																<td class="info-first-td pl-3">Personal address</td>\n																<td class="info-second-td pl-3">{{(localItem?.business_address==null?\'-\':localItem?.business_address)}}</td>\n																<td class="info-third-td pl-3"><a (click)="editBusinessAddress()"><i class="fa fa-pencil"></i>Edit</a>\n															</tr>\n															<tr>\n																<td class="info-first-td pl-3">Personal phone number</td>\n																<td class="info-second-td pl-3">{{(localItem?.business_mobile==null?\'-\':localItem?.business_mobile)}}</td>\n																<td class="info-third-td pl-3"><a (click)="editBusinessmobile()"><i class="fa fa-pencil"></i>Edit</a>\n															</tr>\n														</tbody>\n													</table>\n												</div>\n											</div>\n											<div class="row mt-0 ml-0 mr-0 mb-2 recent-feedback">\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n													<h6 class="m-0 text-left">Financial Information</h6>\n												</div>\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0 mt-1">\n													<table class="table table-sm table-striped">\n														<tbody>\n															<tr>\n																<td class="info-first-td pl-3">PayPal Account</td>\n																<td class="info-second-td pl-3">{{(localItem?.payment_email==null?\'Not Specified\':localItem?.payment_email)}} </td>\n																<td class="info-third-td pl-3"><a (click)="editPayment()"><i class="fa fa-pencil"></i> Edit</a></td>\n															</tr>\n														</tbody>\n													</table>\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 targetDiv" id="my-account-verticle-tab1" *ngIf="localItem?.role == \'buyer\'">\n											<div class="row mt-0 ml-0 mr-0 mb-2 my-dibdaa-views setFont-size" style="padding-left: 30%;padding-top: 10%;">\n												Click&nbsp;<a href="#/Buyerprofile/{{localItem?.id}}">here</a> &nbsp; if you want to change your personal information\n											</div>\n											<div class="row mt-0 ml-0 mr-0 mb-2 my-dibdaa-views setFont-size" style="padding-left: 30%;">\n												Once you have listed an item for sale this section will be viewable.\n											</div>\n										</div>\n\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 targetDiv d-none" id="my-account-verticle-tab2">\n											<div class="row mt-0 ml-0 mr-0 mb-2 my-dibdaa-views">\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n													<div class="row m-0">\n														<div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 p-0">\n															<h6 class="m-0 text-left">Shipping addresses</h6>\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 mt-2 p-0">\n													\n													<div class="row mt-2 ml-0 mr-0 bg-light border rounded" *ngIf="showaddress == false">\n														<div class="col-lg-12 col-md-12 col-xl-12 col-12 mt-2 pt-2 pb-2 pl-3 pr-3">\n															<h6 class="m-0 addresses-h6">Primary shipping address</h6>\n														</div>\n														<div *ngFor="let viewprimaryadd of view_addressData?.data" class="w-100">\n															<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-2 setFont-size" *ngIf="viewprimaryadd?.primary_add == 1">\n																<div class="row m-0">\n																	<div class="col-lg-10 col-md-8 col-xl-10 col-12">\n																		<p class="font-weight-bold mb-1">{{viewprimaryadd?.ship_name}}</p>\n																		<p class="font-weight-normal mb-1">{{viewprimaryadd?.ship_address}}</p>\n																		<p class="font-weight-normal mb-1"> {{viewprimaryadd?.ship_city}}, {{viewprimaryadd?.ship_state}}  <span *ngIf="viewprimaryadd?.ship_pincode != 0">{{viewprimaryadd?.ship_pincode}}</span></p>\n																		<p class="font-weight-normal mb-1">{{viewprimaryadd?.ship_country}}</p>\n																		<p class="font-weight-normal mb-1">{{viewprimaryadd?.mobile}}</p>\n																	</div>\n																	<div class="col-lg-2 col-md-4 col-xl-2 col-12 text-center">\n																		<!--<a target="_blank"><span class="mb-0"><i class="fa fa-map-marker map-icon"></i></span></a>-->\n																		<a class="btn theme-light-btn addresses-btn mt-2" role="button" (click)="editAddressfillData(viewprimaryadd?.id,viewprimaryadd?.ship_name,viewprimaryadd?.ship_address,viewprimaryadd?.ship_city,viewprimaryadd?.ship_state,viewprimaryadd?.ship_pincode,viewprimaryadd?.ship_country,viewprimaryadd?.mobile)">Edit</a>\n																	</div>\n																	<div class="col-lg-12 col-md-2 col-12 p-0 text-left linearBg3"></div>\n																</div>\n															</div>\n														</div>\n														<div class="col-lg-12 col-md-12 col-xl-12 col-12 mt-2 pt-2 pb-2 pl-3 pr-3">\n															<h6 class="m-0 addresses-h6">Other shipping addresses</h6>\n														</div>\n														<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-2 setFont-size" *ngFor="let viewadd of view_addressData?.data">\n															<div class="row m-0" *ngIf="viewadd?.primary_add == 0">\n																<div class="col-lg-10 col-md-8 col-xl-10 col-12">\n																	<p class="font-weight-bold mb-1">{{viewadd?.ship_name}}</p>\n																	<p class="font-weight-normal mb-1">{{viewadd?.ship_address}}</p>\n																	<p class="font-weight-normal mb-1"> {{viewadd?.ship_city}}, {{viewadd?.ship_state}}  <span *ngIf="viewadd?.ship_pincode != 0">{{viewadd?.ship_pincode}}</span></p>\n																	<p class="font-weight-normal mb-1">{{viewadd?.ship_country}}</p>\n																	<p class="font-weight-normal mb-1">{{viewadd?.mobile}}</p>\n																</div>\n																<div class="col-lg-2 col-md-4 col-xl-2 col-12 text-center">\n																	<!--<a target="_blank"><span class="mb-0"><i class="fa fa-map-marker map-icon"></i></span></a>-->\n																	<a class="btn theme-light-btn addresses-btn mt-2" role="button" (click)="editAddress(\'primary\',viewadd?.id)" *ngIf="view_addressData?.data.length > 1">Make primary</a>\n																	<a class="btn theme-light-btn addresses-btn mt-2" role="button" (click)="editAddressfillData(viewadd?.id,viewadd?.ship_name,viewadd?.ship_address,viewadd?.ship_city,viewadd?.ship_state,viewadd?.ship_pincode,viewadd?.ship_country,viewadd?.mobile)">Edit</a>\n																	<a class="btn theme-light-btn addresses-btn mt-2" role="button" (click)="editAddress(\'delete\',viewadd?.id)">Delete</a>\n																</div>\n																<div class="col-lg-12 col-md-2 col-12 p-0 mt-3 text-left linearBg3"></div>\n															</div>\n														</div>\n													</div>\n													<div class="edit-user-info mt-3 setFont-size p-2" *ngIf="showaddress == true">\n														<form #frm="ngForm" class="form" method="post" role="form" novalidate>\n															<div class="form-row">\n																<div class="form-group col-md-6 mt-1">\n																	<div>\n																		<ng4geo-autocomplete [userSettings]="userSettings" (componentCallback)="autoCompleteCallback1($event)"></ng4geo-autocomplete>\n																		<!--<input type="hidden" class="setCountry" id="setCountry" />\n																		<input type="hidden" class="setpostal_code" id="setpostal_code" />\n																		<input type="hidden" class="administrative_area_level_1" id="administrative_area_level_1" />\n																		<input type="hidden" class="administrative_area_level_2" id="administrative_area_level_2" />\n																		<input type="hidden" class="sublocality_level_1" id="sublocality_level_1" /> -->\n																	</div>\n																</div>\n																<div class="form-group col-md-6">\n																	<label for="inputCountry">Country or region</label>\n																	<select id="inputCountry" class="form-control" name="natinality" #natinality>\n																		<option value="Afghanistan">Afghanistan</option>\n																			<option value="Albania">Albania</option>\n																			<option value="Algeria">Algeria</option>\n																			<option value="American Samoa">American Samoa</option>\n																			<option value="Andorra">Andorra</option>\n																			<option value="Angola">Angola</option>\n																			<option value="Anguilla">Anguilla</option>\n																			<option value="Antartica">Antarctica</option>\n																			<option value="Antigua and Barbuda">Antigua and Barbuda</option>\n																			<option value="Argentina">Argentina</option>\n																			<option value="Armenia">Armenia</option>\n																			<option value="Aruba">Aruba</option>\n																			<option value="Australia">Australia</option>\n																			<option value="Austria">Austria</option>\n																			<option value="Azerbaijan">Azerbaijan</option>\n																			<option value="Bahamas">Bahamas</option>\n																			<option value="Bahrain">Bahrain</option>\n																			<option value="Bangladesh">Bangladesh</option>\n																			<option value="Barbados">Barbados</option>\n																			<option value="Belarus">Belarus</option>\n																			<option value="Belgium">Belgium</option>\n																			<option value="Belize">Belize</option>\n																			<option value="Benin">Benin</option>\n																			<option value="Bermuda">Bermuda</option>\n																			<option value="Bhutan">Bhutan</option>\n																			<option value="Bolivia">Bolivia</option>\n																			<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>\n																			<option value="Botswana">Botswana</option>\n																			<option value="Bouvet Island">Bouvet Island</option>\n																			<option value="Brazil">Brazil</option>\n																			<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>\n																			<option value="Brunei Darussalam">Brunei Darussalam</option>\n																			<option value="Bulgaria">Bulgaria</option>\n																			<option value="Burkina Faso">Burkina Faso</option>\n																			<option value="Burundi">Burundi</option>\n																			<option value="Cambodia">Cambodia</option>\n																			<option value="Cameroon">Cameroon</option>\n																			<option value="Canada">Canada</option>\n																			<option value="Cape Verde">Cape Verde</option>\n																			<option value="Cayman Islands">Cayman Islands</option>\n																			<option value="Central African Republic">Central African Republic</option>\n																			<option value="Chad">Chad</option>\n																			<option value="Chile">Chile</option>\n																			<option value="China">China</option>\n																			<option value="Christmas Island">Christmas Island</option>\n																			<option value="Cocos Islands">Cocos (Keeling) Islands</option>\n																			<option value="Colombia">Colombia</option>\n																			<option value="Comoros">Comoros</option>\n																			<option value="Congo">Congo</option>\n																			<option value="Congo">Congo, the Democratic Republic of the</option>\n																			<option value="Cook Islands">Cook Islands</option>\n																			<option value="Costa Rica">Costa Rica</option>\n																			<option value="Cota D\'Ivoire">Cote d\'Ivoire</option>\n																			<option value="Croatia">Croatia (Hrvatska)</option>\n																			<option value="Cuba">Cuba</option>\n																			<option value="Cyprus">Cyprus</option>\n																			<option value="Czech Republic">Czech Republic</option>\n																			<option value="Denmark">Denmark</option>\n																			<option value="Djibouti">Djibouti</option>\n																			<option value="Dominica">Dominica</option>\n																			<option value="Dominican Republic">Dominican Republic</option>\n																			<option value="East Timor">East Timor</option>\n																			<option value="Ecuador">Ecuador</option>\n																			<option value="Egypt">Egypt</option>\n																			<option value="El Salvador">El Salvador</option>\n																			<option value="Equatorial Guinea">Equatorial Guinea</option>\n																			<option value="Eritrea">Eritrea</option>\n																			<option value="Estonia">Estonia</option>\n																			<option value="Ethiopia">Ethiopia</option>\n																			<option value="Falkland Islands">Falkland Islands (Malvinas)</option>\n																			<option value="Faroe Islands">Faroe Islands</option>\n																			<option value="Fiji">Fiji</option>\n																			<option value="Finland">Finland</option>\n																			<option value="France">France</option>\n																			<option value="France Metropolitan">France, Metropolitan</option>\n																			<option value="French Guiana">French Guiana</option>\n																			<option value="French Polynesia">French Polynesia</option>\n																			<option value="French Southern Territories">French Southern Territories</option>\n																			<option value="Gabon">Gabon</option>\n																			<option value="Gambia">Gambia</option>\n																			<option value="Georgia">Georgia</option>\n																			<option value="Germany">Germany</option>\n																			<option value="Ghana">Ghana</option>\n																			<option value="Gibraltar">Gibraltar</option>\n																			<option value="Greece">Greece</option>\n																			<option value="Greenland">Greenland</option>\n																			<option value="Grenada">Grenada</option>\n																			<option value="Guadeloupe">Guadeloupe</option>\n																			<option value="Guam">Guam</option>\n																			<option value="Guatemala">Guatemala</option>\n																			<option value="Guinea">Guinea</option>\n																			<option value="Guinea-Bissau">Guinea-Bissau</option>\n																			<option value="Guyana">Guyana</option>\n																			<option value="Haiti">Haiti</option>\n																			<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>\n																			<option value="Holy See">Holy See (Vatican City State)</option>\n																			<option value="Honduras">Honduras</option>\n																			<option value="Hong Kong">Hong Kong</option>\n																			<option value="Hungary">Hungary</option>\n																			<option value="Iceland">Iceland</option>\n																			<option value="India">India</option>\n																			<option value="Indonesia">Indonesia</option>\n																			<option value="Iran">Iran (Islamic Republic of)</option>\n																			<option value="Iraq">Iraq</option>\n																			<option value="Ireland">Ireland</option>\n																			<option value="Israel">Israel</option>\n																			<option value="Italy">Italy</option>\n																			<option value="Jamaica">Jamaica</option>\n																			<option value="Japan">Japan</option>\n																			<option value="Jordan">Jordan</option>\n																			<option value="Kazakhstan">Kazakhstan</option>\n																			<option value="Kenya">Kenya</option>\n																			<option value="Kiribati">Kiribati</option>\n																			<option value="Democratic People\'s Republic of Korea">Korea, Democratic People\'s Republic of</option>\n																			<option value="Korea">Korea, Republic of</option>\n																			<option value="Kuwait">Kuwait</option>\n																			<option value="Kyrgyzstan">Kyrgyzstan</option>\n																			<option value="Lao">Lao People\'s Democratic Republic</option>\n																			<option value="Latvia">Latvia</option>\n																			<option value="Lebanon">Lebanon</option>\n																			<option value="Lesotho">Lesotho</option>\n																			<option value="Liberia">Liberia</option>\n																			<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>\n																			<option value="Liechtenstein">Liechtenstein</option>\n																			<option value="Lithuania">Lithuania</option>\n																			<option value="Luxembourg">Luxembourg</option>\n																			<option value="Macau">Macau</option>\n																			<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>\n																			<option value="Madagascar">Madagascar</option>\n																			<option value="Malawi">Malawi</option>\n																			<option value="Malaysia">Malaysia</option>\n																			<option value="Maldives">Maldives</option>\n																			<option value="Mali">Mali</option>\n																			<option value="Malta">Malta</option>\n																			<option value="Marshall Islands">Marshall Islands</option>\n																			<option value="Martinique">Martinique</option>\n																			<option value="Mauritania">Mauritania</option>\n																			<option value="Mauritius">Mauritius</option>\n																			<option value="Mayotte">Mayotte</option>\n																			<option value="Mexico">Mexico</option>\n																			<option value="Micronesia">Micronesia, Federated States of</option>\n																			<option value="Moldova">Moldova, Republic of</option>\n																			<option value="Monaco">Monaco</option>\n																			<option value="Mongolia">Mongolia</option>\n																			<option value="Montserrat">Montserrat</option>\n																			<option value="Morocco">Morocco</option>\n																			<option value="Mozambique">Mozambique</option>\n																			<option value="Myanmar">Myanmar</option>\n																			<option value="Namibia">Namibia</option>\n																			<option value="Nauru">Nauru</option>\n																			<option value="Nepal">Nepal</option>\n																			<option value="Netherlands">Netherlands</option>\n																			<option value="Netherlands Antilles">Netherlands Antilles</option>\n																			<option value="New Caledonia">New Caledonia</option>\n																			<option value="New Zealand">New Zealand</option>\n																			<option value="Nicaragua">Nicaragua</option>\n																			<option value="Niger">Niger</option>\n																			<option value="Nigeria">Nigeria</option>\n																			<option value="Niue">Niue</option>\n																			<option value="Norfolk Island">Norfolk Island</option>\n																			<option value="Northern Mariana Islands">Northern Mariana Islands</option>\n																			<option value="Norway">Norway</option>\n																			<option value="Oman">Oman</option>\n																			<option value="Pakistan">Pakistan</option>\n																			<option value="Palau">Palau</option>\n																			<option value="Panama">Panama</option>\n																			<option value="Papua New Guinea">Papua New Guinea</option>\n																			<option value="Paraguay">Paraguay</option>\n																			<option value="Peru">Peru</option>\n																			<option value="Philippines">Philippines</option>\n																			<option value="Pitcairn">Pitcairn</option>\n																			<option value="Poland">Poland</option>\n																			<option value="Portugal">Portugal</option>\n																			<option value="Puerto Rico">Puerto Rico</option>\n																			<option value="Qatar">Qatar</option>\n																			<option value="Reunion">Reunion</option>\n																			<option value="Romania">Romania</option>\n																			<option value="Russia">Russian Federation</option>\n																			<option value="Rwanda">Rwanda</option>\n																			<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> \n																			<option value="Saint LUCIA">Saint LUCIA</option>\n																			<option value="Saint Vincent">Saint Vincent and the Grenadines</option>\n																			<option value="Samoa">Samoa</option>\n																			<option value="San Marino">San Marino</option>\n																			<option value="Sao Tome and Principe">Sao Tome and Principe</option> \n																			<option value="Saudi Arabia">Saudi Arabia</option>\n																			<option value="Senegal">Senegal</option>\n																			<option value="Seychelles">Seychelles</option>\n																			<option value="Sierra">Sierra Leone</option>\n																			<option value="Singapore">Singapore</option>\n																			<option value="Slovakia">Slovakia (Slovak Republic)</option>\n																			<option value="Slovenia">Slovenia</option>\n																			<option value="Solomon Islands">Solomon Islands</option>\n																			<option value="Somalia">Somalia</option>\n																			<option value="South Africa">South Africa</option>\n																			<option value="South Georgia">South Georgia and the South Sandwich Islands</option>\n																			<option value="Span">Spain</option>\n																			<option value="SriLanka">Sri Lanka</option>\n																			<option value="St. Helena">St. Helena</option>\n																			<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>\n																			<option value="Sudan">Sudan</option>\n																			<option value="Suriname">Suriname</option>\n																			<option value="Svalbard">Svalbard and Jan Mayen Islands</option>\n																			<option value="Swaziland">Swaziland</option>\n																			<option value="Sweden">Sweden</option>\n																			<option value="Switzerland">Switzerland</option>\n																			<option value="Syria">Syrian Arab Republic</option>\n																			<option value="Taiwan">Taiwan, Province of China</option>\n																			<option value="Tajikistan">Tajikistan</option>\n																			<option value="Tanzania">Tanzania, United Republic of</option>\n																			<option value="Thailand">Thailand</option>\n																			<option value="Togo">Togo</option>\n																			<option value="Tokelau">Tokelau</option>\n																			<option value="Tonga">Tonga</option>\n																			<option value="Trinidad and Tobago">Trinidad and Tobago</option>\n																			<option value="Tunisia">Tunisia</option>\n																			<option value="Turkey">Turkey</option>\n																			<option value="Turkmenistan">Turkmenistan</option>\n																			<option value="Turks and Caicos">Turks and Caicos Islands</option>\n																			<option value="Tuvalu">Tuvalu</option>\n																			<option value="Uganda">Uganda</option>\n																			<option value="Ukraine">Ukraine</option>\n																			<option value="United Arab Emirates">United Arab Emirates</option>\n																			<option value="United Kingdom">United Kingdom</option>\n																			<option value="United States">United States</option>\n																			<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>\n																			<option value="Uruguay">Uruguay</option>\n																			<option value="Uzbekistan">Uzbekistan</option>\n																			<option value="Vanuatu">Vanuatu</option>\n																			<option value="Venezuela">Venezuela</option>\n																			<option value="Vietnam">Viet Nam</option>\n																			<option value="Virgin Islands (British)">Virgin Islands (British)</option>\n																			<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>\n																			<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>\n																			<option value="Western Sahara">Western Sahara</option>\n																			<option value="Yemen">Yemen</option>\n																			<option value="Yugoslavia">Yugoslavia</option>\n																			<option value="Zambia">Zambia</option>\n																			<option value="Zimbabwe">Zimbabwe</option>\n																	</select>\n																</div>\n															</div>\n															<div class="form-row">\n																<div class="form-group col-md-6">\n																	<label for="inputFname">First name</label>\n																	<input type="text" class="form-control" id="inputFname" name="first_name" #first_name="ngModel" required [(ngModel)]="filDataadd?.name[0]">\n																	<div *ngIf="first_name.invalid && (first_name.dirty || first_name.touched)" class="error-box">\n																		<div *ngIf="first_name.errors.required">\n																			* Name is required!\n																		</div>\n																	</div>\n																</div>\n																<div class="form-group col-md-6">\n																	<label for="inputLname">Last name</label>\n																	<input type="text" class="form-control" id="inputLname" name="last_name" #last_name="ngModel" required [(ngModel)]="filDataadd?.name[1]">\n																	<div *ngIf="last_name.invalid && (last_name.dirty || last_name.touched)" class="error-box">\n																		<div *ngIf="last_name.errors.required">\n																			* Name is required!\n																		</div>\n																	</div>\n																</div>\n															</div>\n															<div class="form-row">\n																<div class="form-group col-md-6">\n																	<label for="inputSaddress">Street address</label>\n																	<input type="text" class="form-control" id="inputSaddress" name="ship_address" #ship_address="ngModel" required [(ngModel)]="filDataadd.addrs">\n																	<div *ngIf="ship_address.invalid && (ship_address.dirty || ship_address.touched)" class="error-box">\n																		<div *ngIf="ship_address.errors.required">\n																			* Address is required!\n																		</div>\n																	</div>\n																</div>\n																<div class="form-group col-md-6">\n																	<label for="inputCity">City</label>\n																	<input type="text" class="form-control" id="inputCity" name="ship_city" #ship_city="ngModel" required [(ngModel)]="filDataadd.city">\n																	<div *ngIf="ship_city.invalid && (ship_city.dirty || ship_city.touched)" class="error-box">\n																		<div *ngIf="ship_city.errors.required">\n																			* City is required!\n																		</div>\n																	</div>\n																</div>\n															</div>\n															<div class="form-row">\n\n																<div class="form-group col-md-4">\n																	<label for="inputState">State</label>\n																	<input type="text" class="form-control" id="inputState" name="ship_state" #ship_state="ngModel" [(ngModel)]="filDataadd.state">\n																</div>\n																<div class="form-group col-md-2">\n																	<label for="inputZip">Zip</label>\n																	<input type="text" class="form-control" id="inputZip" name="ship_pincode" #ship_pincode="ngModel" [(ngModel)]="filDataadd.pincode">\n																</div>\n																<div class="form-group col-md-6">\n																	<label for="inputFname">Phone number</label>\n																	<int-phone-prefix [locale]="\'en\'" id="inputPhone" name="mobile" #mobile="ngModel" required [(ngModel)]="filDataadd.mobile"></int-phone-prefix>\n																	<div *ngIf="mobile.invalid && (mobile.dirty || mobile.touched)" class="error-box">\n																		<div *ngIf="mobile.errors.required">\n																			* Phone number is required!\n																		</div>\n																	</div>\n																</div>\n															</div>\n															<div class="form-row">\n																<div class="form-group col-md-12 col-xl-12 col-lg-12 col-sm-12 text-center">\n																	<button class="btn theme-light-btn" role="button" type="submit" [disabled]="!frm.form.valid" (click)="AddAddress(frm.value)">Add</button>\n																	<button class="btn theme-dark-btn mr-2" role="button" (click)="editAddress(\'Cancel\')">Cancel</button>\n																</div>\n															</div>\n														</form>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 targetDiv d-none" id="my-account-verticle-tab4">\n											Communication Preferences Page\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 targetDiv d-none"\n											 id="my-account-verticle-tab6">\n											<div class="row m-0">\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n													<h6 class="m-0 text-left">Seller Dashboard</h6>\n												</div>\n											</div>\n											<div class="row m-0 dashboard-main">\n												<div class="col-lg-3 col-md-4 col-12">\n													<div class="card p-30">\n														<div class="media">\n															<div class="media-left meida media-middle pt-3">\n																AED\n															</div>\n															<div class="media-body text-right">\n																<h5>{{dashboardData?.all_selling}}</h5>\n																<p class="m-b-0 setFont-size">All Selling</p>\n															</div>\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-3 col-md-4 col-12">\n													<div class="card p-30">\n														<div class="media">\n															<div class="media-left meida media-middle">\n																<span>\n																	<i class="fa fa-shopping-cart dashboard-awesome"></i>\n																</span>\n															</div>\n															<div class="media-body text-right">\n																<h5>{{dashboardData?.sold}}</h5>\n																<p class="m-b-0 setFont-size">Sold</p>\n															</div>\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-3 col-md-4 col-12">\n													<div class="card p-30">\n														<div class="media">\n															<div class="media-left meida media-middle">\n																<span><i class="fa fa-archive dashboard-awesome"></i></span>\n															</div>\n															<div class="media-body text-right">\n																<h5>{{dashboardData?.unsold}}</h5>\n																<p class="m-b-0 setFont-size">Unsold</p>\n															</div>\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-3 col-md-4 col-12">\n													<div class="card p-30">\n														<div class="media">\n															<div class="media-left meida media-middle">\n																<span><i class="fa fa-arrow-circle-left dashboard-awesome"></i></span>\n															</div>\n															<div class="media-body text-right">\n																<h5>{{dashboardData?.return}}</h5>\n																<p class="m-b-0 setFont-size">Return</p>\n															</div>\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-3 col-md-4 col-12">\n													<div class="card p-30">\n														<div class="media">\n															<div class="media-left meida media-middle">\n																<span><i class="fa fa-trash dashboard-awesome"></i></span>\n															</div>\n															<div class="media-body text-right">\n																<h5>{{dashboardData?.delete}}</h5>\n																<p class="m-b-0 setFont-size">Deleted</p>\n															</div>\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 targetDiv d-none"\n											 id="my-account-verticle-tab7">\n											<div class="row m-0">\n												<div class="col-lg-6 col-md-12 col-12 pl-0 pr-0 pr-lg-3">\n													<h6 class="mt-2">Recent Feedback ratings <span class="last-12-months">( last 12 months )</span>\n													</h6>\n													<table class="table table-sm">\n														<thead class="thead-light">\n														<tr>\n															<th scope="col"></th>\n															<th scope="col">1 month</th>\n															<th scope="col">6 months</th>\n															<th scope="col">12 months</th>\n														</tr>\n														</thead>\n														<tbody>\n														<tr>\n															<td><i class="fa fa-plus-circle text-success"></i> Positive</td>\n															<td>{{feedbacklistmonth?.positiveOne}}</td>\n															<td>{{feedbacklistmonth?.positiveSix}}</td>\n															<td>{{feedbacklistmonth?.positiveTwelve}}</td>\n														</tr>\n														<tr>\n															<td><i class="fa fa-dot-circle-o text-secondary"></i> Neutral</td>\n															<td>{{feedbacklistmonth?.neutralOne}}</td>\n															<td>{{feedbacklistmonth?.neutralSix}}</td>\n															<td>{{feedbacklistmonth?.neutralTwelve}}</td>\n														</tr>\n														<tr>\n															<td><i class="fa fa-minus-circle text-danger"></i> Negative</td>\n															<td>{{feedbacklistmonth?.negativeOne}}</td>\n															<td>{{feedbacklistmonth?.negativeSix}}</td>\n															<td>{{feedbacklistmonth?.negativeTwelve}}</td>\n														</tr>\n														</tbody>\n													</table>\n												</div>\n												<div class="col-lg-6 col-md-12 col-12 pl-0 pr-0">\n													<h6 class="mt-2">Detailed seller ratings <span class="last-12-months">( last 12 months )</span>\n													</h6>\n													<table class="table table-sm">\n														<thead class="thead-light">\n														<tr>\n															<th scope="col">Criteria</th>\n															<th scope="col">Average rating</th>\n															<th scope="col" class="text-center">Number of ratings</th>\n														</tr>\n														</thead>\n														<tbody>\n															<tr>\n																<td>Communication</td>\n																<td>\n																	<span *ngIf="showseller_rating?.communication.avg == 0">\n																		-\n																	</span>\n																	<span *ngIf="showseller_rating?.communication.avg == 1">\n																		<i class="fa fa-star text-warning"></i>\n																	</span>\n																	<span *ngIf="showseller_rating?.communication.avg == 2">\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																	</span>\n																	<span *ngIf="showseller_rating?.communication.avg == 3">\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																	</span>\n																	<span *ngIf="showseller_rating?.communication.avg == 4">\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																	</span>\n																	<span *ngIf="showseller_rating?.communication.avg == 5">\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																	</span>\n																</td>\n																<td class="text-center">{{showseller_rating?.communication.total}}</td>\n															</tr>\n															<tr>\n																<td>Recommend item </td>\n																<td>\n																	<span *ngIf="showseller_rating?.recommend.avg == 0">\n																		-\n																	</span>\n																	<span *ngIf="showseller_rating?.recommend.avg == 1">\n																		<i class="fa fa-star text-warning"></i>\n																	</span>\n																	<span *ngIf="showseller_rating?.recommend.avg == 2">\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																	</span>\n																	<span *ngIf="showseller_rating?.recommend.avg == 3">\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																	</span>\n																	<span *ngIf="showseller_rating?.recommend.avg == 4">\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																	</span>\n																	<span *ngIf="showseller_rating?.recommend.avg == 5">\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																		<i class="fa fa-star text-warning"></i>\n																	</span>\n																</td>\n																<td class="text-center">{{showseller_rating?.recommend.total}}</td>\n															</tr>\n														\n														<tr>\n															<td>Value for money</td>\n															<td>\n																<span *ngIf="showseller_rating?.valuemoney.avg == 0">\n																		-\n																</span>\n																<span *ngIf="showseller_rating?.valuemoney.avg == 1">\n																		<i class="fa fa-star text-warning"></i>\n																</span>\n																<span *ngIf="showseller_rating?.valuemoney.avg == 2">\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																</span>\n																<span *ngIf="showseller_rating?.valuemoney.avg == 3">\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																</span>\n																<span *ngIf="showseller_rating?.valuemoney.avg == 4">\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																</span>\n																<span *ngIf="showseller_rating?.valuemoney.avg == 5">\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																</span>\n															</td>\n															<td class="text-center">{{showseller_rating?.valuemoney.total}}</td>\n														</tr>\n														<tr>\n															<td>Item dispatched</td>\n															<td>\n																<span *ngIf="showseller_rating?.dispatch.avg == 0">\n																		-\n																</span>\n																<span *ngIf="showseller_rating?.dispatch.avg == 1">\n																		<i class="fa fa-star text-warning"></i>\n																</span>\n																<span *ngIf="showseller_rating?.dispatch.avg == 2">\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																</span>\n																<span *ngIf="showseller_rating?.dispatch.avg == 3">\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																</span>\n																<span *ngIf="showseller_rating?.dispatch.avg == 4">\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																</span>\n																<span *ngIf="showseller_rating?.dispatch.avg == 5">\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																	<i class="fa fa-star text-warning"></i>\n																</span>\n															</td>\n															<td class="text-center">{{showseller_rating?.dispatch.total}}</td>\n														</tr>\n														</tbody>\n													</table>\n												</div>\n											</div>\n											<div class="row m-0">\n												<div class="col-lg-12 col-md-12 col-12 feedback-tab-panel p-0">\n													<ul class="nav nav-tabs feedback-tab-ul" role="tablist">\n														<li class="nav-item">\n															<a class="nav-link active" href="#allfeedback" role="tab" data-toggle="tab">All Feedback</a>\n														</li>\n														<li class="nav-item">\n															<a class="nav-link" href="#sellerfeedback" role="tab" data-toggle="tab" (click)="viewFeedbackData(\'seller\')">Feedback as a seller</a>\n														</li>\n														<li class="nav-item">\n															<a class="nav-link" href="#buyerfeedback" role="tab" data-toggle="tab" (click)="viewFeedbackData(\'buyer\')">Feedback as a buyer</a>\n														</li>\n													</ul>\n\n													<!-- Tab panes -->\n													<div class="tab-content">\n														<div role="tabpanel" class="tab-pane fade in active show" id="allfeedback">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-12 p-0">\n																	<p class="mt-2 setFont-size">{{feedbacklistdata?.total}} Feedback received (viewing {{feedbacklistdata?.from}}-{{feedbacklistdata?.to}})</p>\n																	<table class="table table-sm feedback-listing-table">\n																		<thead class="thead-light">\n																		<tr>\n																			<th scope="col" colspan="2">Feedback</th>\n																			<th scope="col">From</th>\n																			<th scope="col">When</th>\n																		</tr>\n																		</thead>\n																		<tbody *ngIf="feedbacklistdata?.data.length <= 0;else fdbkfoundall">\n																			<tr class="darkfont">\n																				<td colspan="4" class="text-center">\n																					No Data Found\n																				</td>\n																			</tr>\n																		</tbody>\n																		<ng-template #fdbkfoundall>\n																			<tbody *ngFor="let feedbacklst of feedbacklistdata?.data | paginate: {itemsPerPage: feedbacklistdata?.per_page, currentPage:feedbacklistdata?.current_page, id: \'feedbacklistdataId\', totalItems: feedbacklistdata?.total}; let i = index">\n																				<tr class="darkfont">\n																					<td rowspan="2">\n																						<i class="fa fa-minus-circle text-danger feedback-range" *ngIf="feedbacklst?.feedback_type == \'Negative\'"></i>\n																						<i class="fa fa-dot-circle-o text-secondary feedback-range" *ngIf="feedbacklst?.feedback_type == \'Neutral\'"></i>\n																						<i class="fa fa-plus-circle text-success feedback-range" *ngIf="feedbacklst?.feedback_type == \'Positive\'"></i>\n																					</td>\n																					<td> {{feedbacklst?.description}}</td>\n																					<td>Buyer: {{feedbacklst?.buyer_display_name}} ( {{feedbacklst?.rate}} <i class="fa fa-star text-info"></i> )\n																					</td>\n																					<td>{{feedbacklst?.created_date}}</td>\n																				</tr>\n																				<tr>\n																					<td class="border-0">{{feedbacklst?.product_title}}(#{{feedbacklst?.product_sku}})</td>\n																					<td class="border-0">{{feedbacklst?.price}} AED</td>\n																					<td class="border-0"><a href="#/viewItem/{{feedbacklst?.product_id}}">View Item</a></td>\n																				</tr>\n																			</tbody>\n																		</ng-template>\n																	</table>\n																</div>\n															</div>\n															<div class="row m-0">\n																<div class="col-lg-12 paginationlist m-0 pt-3 pb-0">\n																	<pagination-controls (pageChange)="page = getServerData($event)" id="feedbacklistdataId" maxSize="{{feedbacklistdata?.last_page}}" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																</div>\n															</div>\n														</div>\n														<div role="tabpanel" class="tab-pane fade" id="sellerfeedback">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-12 p-0">\n																	<p class="mt-2 setFont-size">{{feedbacklistSeller?.total}} Feedback received (viewing {{feedbacklistSeller?.from}}-{{feedbacklistSeller?.to}})</p>\n																	<table class="table table-sm">\n																		<thead class="thead-light">\n																		<tr>\n																			<th scope="col" colspan="2">Feedback</th>\n																			<th scope="col">From</th>\n																			<th scope="col">When</th>\n																		</tr>\n																		</thead>\n																		<tbody *ngIf="feedbacklistSeller?.data.length <= 0;else fdbkfoundseller">\n																			<tr class="darkfont">\n																				<td colspan="4" class="text-center">\n																					No Data Found\n																				</td>\n																			</tr>\n																		</tbody>\n																		<ng-template #fdbkfoundseller>\n																			<tbody *ngFor="let fdbkseller of feedbacklistSeller?.data | paginate: {itemsPerPage: feedbacklistSeller?.per_page, currentPage:feedbacklistSeller?.current_page, id: \'feedbacklistSellerId\', totalItems: feedbacklistSeller?.total}; let i = index">\n																				<tr class="darkfont">\n																					<td rowspan="2">\n																						<i class="fa fa-minus-circle text-danger feedback-range" *ngIf="fdbkseller?.feedback_type == \'Negative\'"></i>\n																						<i class="fa fa-dot-circle-o text-secondary feedback-range" *ngIf="fdbkseller?.feedback_type == \'Neutral\'"></i>\n																						<i class="fa fa-plus-circle text-success feedback-range" *ngIf="fdbkseller?.feedback_type == \'Positive\'"></i>\n																					</td>\n																					<td>{{fdbkseller?.description}}</td>\n																					<td>Seller: {{fdbkseller?.buyer_display_name}} ( {{fdbkseller?.rate}} \n																						<i class="fa fa-star text-info"></i> )\n																					</td>\n																					<td>{{fdbkseller?.created_date}}</td>\n																				</tr>\n																				<tr>\n																					<td class="border-0">{{fdbkseller?.product_title}}(#{{fdbkseller?.product_sku}})\n																					</td>\n																					<td class="border-0">{{fdbkseller?.price}} AED</td>\n																					<td class="border-0"><a href="#/viewItem/{{fdbkseller?.product_id}}">View Item</a></td>\n																				</tr>\n																			</tbody>\n																		</ng-template>\n																	</table>\n																</div>\n															</div>\n															<div class="row m-0">\n																<div class="col-lg-12 paginationlist m-0 pt-3 pb-0">\n																	<pagination-controls (pageChange)="page = getServerData_seller($event)" id="feedbacklistSellerId" maxSize="{{feedbacklistSeller?.last_page}}" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																</div>\n															</div>\n														</div>\n														<div role="tabpanel" class="tab-pane fade" id="buyerfeedback">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-12 p-0">\n																	<p class="mt-2 setFont-size">{{feedbacklistBuyer?.total}} Feedback received (viewing {{feedbacklistBuyer?.from}}-{{feedbacklistBuyer?.to}})</p>\n																	<table class="table table-sm">\n																		<thead class="thead-light">\n																		<tr>\n																			<th scope="col" colspan="2">Feedback</th>\n																			<th scope="col">From</th>\n																			<th scope="col">When</th>\n																		</tr>\n																		</thead>\n																		<tbody *ngIf="feedbacklistBuyer?.data.length <= 0;else fdbkfoundbuyer">\n																			<tr class="darkfont">\n																				<td colspan="4" class="text-center">\n																					No Data Found\n																				</td>\n																			</tr>\n																		</tbody>\n																		<ng-template #fdbkfoundbuyer>\n																			<tbody *ngFor="let fdbkbuyer of feedbacklistBuyer?.data | paginate: {itemsPerPage: feedbacklistBuyer?.per_page, currentPage:feedbacklistBuyer?.current_page, id: \'feedbacklistBuyerId\', totalItems: feedbacklistBuyer?.total}; let i = index">\n																				<tr class="darkfont">\n																					<td rowspan="2">\n																						<i class="fa fa-minus-circle text-danger feedback-range" *ngIf="fdbkbuyer?.feedback_type == \'Negative\'"></i>\n																						<i class="fa fa-dot-circle-o text-secondary feedback-range" *ngIf="fdbkbuyer?.feedback_type == \'Neutral\'"></i>\n																						<i class="fa fa-plus-circle text-success feedback-range" *ngIf="fdbkbuyer?.feedback_type == \'Positive\'"></i>\n																					</td>\n																					<td>{{fdbkbuyer?.description}}</td>\n																					<td>Buyer: {{fdbkbuyer?.buyer_display_name}} ({{fdbkbuyer?.rate}} <i class="fa fa-star text-info"></i> )\n																					</td>\n																					<td>{{fdbkbuyer?.created_date}}</td>\n																				</tr>\n																				<tr>\n																					<td class="border-0">{{fdbkbuyer?.product_title}}(#{{fdbkbuyer?.product_sku}})\n																					</td>\n																					<td class="border-0">{{fdbkbuyer?.price}} AED</td>\n																					<td class="border-0"><a href="#/viewItem/{{fdbkbuyer?.product_id}}">View Item</a></td>\n																				</tr>\n																			</tbody>\n																		</ng-template>\n																	</table>\n																</div>\n															</div>\n															<div class="row m-0">\n																<div class="col-lg-12 paginationlist m-0 pt-3 pb-0">\n																	<pagination-controls (pageChange)="page = getServerData_buyer($event)" id="feedbacklistBuyerId" maxSize="{{feedbacklistBuyer?.last_page}}" directionLinks="true" autoHide="true" class="text-center setFont-size"></pagination-controls>\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n											</div>\n											<div class="row mt-3 setFont-size">\n												<div class="col-lg-12 col-md-12 col-12 mb-3">\n													<div>\n														<span class="deadEndLinkHeader">What would you like to do next?</span>\n													</div>\n												</div>\n												<div class="col-lg-12 col-md-12 col-12">\n													<a href="#/ViewPersonalizedFeedback" target="_blank">Reply to Feedback received</a>\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-0 targetDiv d-none my-account-verticle-tab9"\n											 id="my-account-verticle-tab9">\n											<div class="row m-0">\n												<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 frontbg">\n													<h6 class="m-0 text-left">Resolution Center</h6>\n												</div>\n											</div>\n											<div class="row m-0 resolution-center-main mt-2">\n												<div class="col-lg-12 col-md-12 col-12 feedback-tab-panel p-0 mt-2">\n													<ul class="nav nav-tabs feedback-tab-ul" role="tablist">\n														<li class="nav-item">\n															<a class="nav-link active" href="#resolutionBySeller" role="tab" data-toggle="tab" (click)="viewpurchaseProducts_seller()">As Seller</a>\n														</li>\n														<li class="nav-item">\n															<a class="nav-link" href="#resolutionByBuyer" role="tab" data-toggle="tab" (click)="viewpurchaseProducts()">As Buyer</a>\n														</li>\n													</ul>\n													<div class="tab-content">\n														<div role="tabpanel" class="tab-pane fade in active show" id="resolutionBySeller">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-12 mt-1 pl-3 pr-3 pt-2 pb-3 bg-light border rounded">\n																	<div class="col-lg-12 col-md-12 col-xl-12 col-12 view-all-feedback mt-2 p-2">\n																		<h6 class="m-0 text-left">Resolve a problem</h6>\n																	</div>\n																	<form #frm_recolution_seller="ngForm" class="form" id="resolution-center-seller" method="post" role="form" novalidate>\n																		<div class="row m-0">\n																			<div class="col-lg-12 col-md-12 col-12 order-total mt-2 pl-2 pr-2">\n																				<p class="setFont-size">We always encourage our members to communicate with each other when there\'s a problem with a transaction. The first step is to contact the member through the Resolution Center and try to resolve the problem.</p>\n																				<div class="form-row">\n																					<div class="form-group col-md-12 col-lg-6 pl-2 pr-2">\n																						<label class="resolution-label setFont-size" for="productname_seller">Product Name</label>\n																						<select id="productname_seller" class="form-control target" size="0" #productname_seller="ngModel" name="productname_seller" ngModel required (change)="viewpurchaseProducts_userList(productname_seller.value)">\n																							<option value="">-- Select Product -- </option>\n																							<option *ngFor="let vpsellerData of viewsellProductsdata?.data" value="{{vpsellerData?.id}}">{{vpsellerData?.title}} ({{vpsellerData?.product_sku}})</option>\n																						</select>\n																						<div *ngIf="productname_seller.invalid && (productname_seller.dirty || productname_seller.touched)" class="error-box setFont-size">\n																							<div *ngIf="productname_seller.errors.required">\n																								* Please select product.\n																							</div>\n																						</div>\n																					</div>\n\n																					<div class="form-group col-md-12 col-lg-6 pl-2 pr-2" *ngIf="productname_seller.value != \'\'">\n																						<label class="resolution-label setFont-size" for="userlistname">User Name</label>\n																						<select id="userlistname" class="form-control target" size="0" #userlistname name="userlistname" required>\n																							<option *ngFor="let usrlst of viewuserListdata?.data" value="{{usrlst?.buyer_id}}" id="{{usrlst?.order_id}}">{{usrlst?.display_name}} ({{usrlst?.order_id}})</option>\n																						</select>\n																						<div *ngIf="productname.invalid && (productname.dirty || productname.touched)" class="error-box setFont-size">\n																							<div *ngIf="productname.errors.required">\n																								* Please select User name.\n																							</div>\n																						</div>\n																					</div>\n\n																				</div>\n																			</div>\n																		</div>\n																		<div class="row m-0">\n																			<div class="col-lg-12 col-md-12 col-12 pl-3 pr-3 setFont-size">\n																				<span>To start the resolution process, please tell us what your problem is:</span>\n																			</div>\n																		</div>\n																		<div class="row m-0">\n																			<div class="col-lg-6 col-md-6 col-12 setFont-size">\n																				<div class="row m-0">\n																					<div class="col-lg-12 col-md-12 col-12 mt-3 mb-2 pl-0 pr-0 mt-2">\n																						<h6 class="mb-1">I sold an item.</h6>\n																					</div>\n																				</div>\n																				<div class="row m-0">\n																					<div class="col-lg-12 col-md-12 col-12 p-0 form-group mb-2">\n																						<input type="radio" id="receivepayment" name="radiogroup_seller" value="I haven\'t received my payment yet" [(ngModel)]="prop_seller" required #checkQuery_seller="ngModel">\n																						<label class="resolution-label" for="receivepayment">I haven\'t received my payment yet.</label>\n																					</div>\n																					<div class="col-lg-12 col-md-12 col-12 p-0 form-group mb-2">\n																						<input type="radio" id="canceltransaction" name="radiogroup_seller" value="I need to cancel a transaction" [(ngModel)]="prop_seller" required >\n																						<label class="resolution-label" for="canceltransaction">I need to cancel a transaction.</label>\n																					</div>\n																					<div class="col-lg-12 col-md-12 col-12 p-0 form-group mb-2">\n																						<input type="radio" id="othersold" name="radiogroup_seller" value="othersold" [(ngModel)]="prop_seller" required>\n																						<label class="resolution-label" for="othersold">Other.</label>\n																					</div>\n																					<div class="form-group col-md-12 p-0" id="soldreasondiv" *ngIf="prop_seller == \'othersold\'">\n																						<label class="resolution-label" for="soldreason_seller">Reason</label>\n																						<input class="form-control" type="text" id="soldreason_seller" value="">\n																					</div>\n\n																				</div>\n																				<div *ngIf="checkQuery_seller.invalid" class="error-box setFont-size">\n																					<div *ngIf="checkQuery_seller.errors.required">\n																						* Select option.\n																					</div>\n																				</div>\n																			</div>\n																		</div>\n																		<div class="row m-0 setFont-size">\n																			<div class="col-lg-12 col-md-12 col-12 order-total mt-2 pl-2 pr-2">\n																				<div class="form-row">\n																					<div class="form-group col-md-12 pl-2 pr-2">\n																						<button type="submit" class="btn theme-light-btn" (click)="submitResolution_seller()" [disabled]="!frm_recolution_seller.form.valid" >\n																							Submit\n																						</button>\n																					</div>\n																				</div>\n																			</div>\n																			<div class="col-lg-12 col-md-12 col-12 order-total mt-2 pl-2 pr-2">\n																				<div class="alert alert-success alert-dismissible setFont-size hide" id="success-alert-resolution-seller">\n																					<a class="close" (click)="closeDiv(\'success_resoltion_seller\')">&times;</a>\n																					<span id="success-span-resolution-seller"></span>\n																				</div>\n																			</div>\n																		</div>\n																	</form>\n																</div>\n															</div>\n														</div>\n														<div role="tabpanel" class="tab-pane fade in" id="resolutionByBuyer">\n															<div class="row m-0">\n																<div class="col-lg-12 col-md-12 col-12 mt-1 pl-3 pr-3 pt-2 pb-3 bg-light border rounded">\n																	<div class="col-lg-12 col-md-12 col-xl-12 col-12 view-all-feedback mt-2 p-2">\n																		<h6 class="m-0 text-left">Resolve a problem</h6>\n																	</div>\n																	<form #frm_recolution="ngForm" class="form" id="resolution-center" method="post" role="form" novalidate>\n																		<div class="row m-0">\n																			<div class="col-lg-12 col-md-12 col-12 order-total mt-2 pl-2 pr-2">\n																				<p class="setFont-size">We always encourage our members to communicate with each other when there\'s a problem with a transaction. The first step is to contact the member through the Resolution Center and try to resolve the problem.</p>\n																				<div class="form-row">\n																					<div class="form-group col-md-12 col-lg-6 pl-2 pr-2">\n																						<label class="resolution-label setFont-size" for="productname">Product Name</label>\n																						<select id="productname" class="form-control target" size="0" #productname="ngModel" name="productname" ngModel required>\n																							<option value="">select</option>\n																							<option *ngFor="let vpData of viewpurchaseProductsdata?.data;let i = index;" value="{{i}}" id="{{vpData?.product_id}}" class="{{vpData?.order_id}}">{{vpData?.title}} ({{vpData?.order_id}})</option>\n																						</select>\n																						<div *ngIf="productname.invalid && (productname.dirty || productname.touched)" class="error-box setFont-size">\n																							<div *ngIf="productname.errors.required">\n																								* Please select product name.\n																							</div>\n																						</div>\n																					</div>\n																					<div *ngFor="let vpData of viewpurchaseProductsdata?.data;let i = index;" [ngClass]="{\'w-50\':i == productname.value}">\n																						<div class="form-row">\n																							<div class="form-group col-md-6 col-lg-6 pl-2 pr-2" *ngIf="i == productname.value">\n																								<label class="resolution-label setFont-size" for="sellername">Seller Name</label>\n																								<input class="form-control" type="text" id="sellername" value="{{vpData?.display_name}}" disabled="">\n																								<input type="hidden" id="hidden_id" value="{{vpData?.seller_id}}" />\n																							</div>\n																							<div class="form-group col-md-6 col-lg-5 pl-2 pr-2" *ngIf="i == productname.value">\n																								<label class="resolution-label setFont-size" for="sellername">Order Id</label>\n																								<input class="form-control" type="text" value="{{vpData?.order_id}}" disabled="">\n																							</div>\n																						</div>\n																					</div>\n																				</div>\n																			</div>\n																		</div>\n																		<div class="row m-0">\n																			<div class="col-lg-12 col-md-12 col-12 pl-3 pr-3 setFont-size">\n																				<span>To start the resolution process, please tell us what your problem is:</span>\n																			</div>\n																		</div>\n																		<div class="row m-0">\n																			<div class="col-lg-6 col-md-6 col-12 ">\n																				<div class="row m-0">\n																					<div class="col-lg-12 col-md-12 col-12 mt-3 mb-2 pl-0 pr-0 mt-2">\n																						<h6 class="mb-1">I bought an item.</h6>\n																					</div>\n																				</div>\n																				<div class="row m-0 setFont-size">\n																					<div class="col-lg-12 col-md-12 col-12 p-0 form-group mb-2">\n																						<input type="radio" id="motreceive" name="radiogroup" value="I haven\'t received it yet" [(ngModel)]="prop">\n																						<label class="resolution-label" for="motreceive">I haven\'t received it yet.</label>\n																					</div>\n																					<div class="col-lg-12 col-md-12 col-12 p-0 form-group mb-2">\n																						<input type="radio" id="received" name="radiogroup" value="I received an item that does not match the seller\'s description" [(ngModel)]="prop" required #checkQuery="ngModel">\n																						<label class="resolution-label" for="received">I received an item that does not match the seller\'s description.</label>\n																					</div>\n																					<div class="col-lg-12 col-md-12 col-12 p-0 form-group mb-2">\n																						<input type="radio" id="other" name="radiogroup" [(ngModel)]="prop" value="other" required>\n																						<label class="resolution-label" for="other">Other.</label>\n																					</div>\n																					<div class="form-group col-md-12 p-0" id="buyreasondiv" *ngIf="prop == \'other\'">\n																						<label class="resolution-label" for="buyreason">Reason</label>\n																						<input class="form-control" type="text" id="buyreason" value="">\n																					</div>\n																					<div *ngIf="checkQuery.invalid" class="error-box setFont-size">\n																						<div *ngIf="checkQuery.errors.required">\n																							* Select option.\n																						</div>\n																					</div>\n																				</div>\n																			</div>\n																		</div>\n																		<div class="row m-0 setFont-size">\n																			<div class="col-lg-12 col-md-12 col-12 order-total mt-2 pl-2 pr-2">\n																				<div class="form-row">\n																					<div class="form-group col-md-12 pl-2 pr-2">\n																						<button type="submit" class="btn theme-light-btn" (click)="submitResolution()" [disabled]="!frm_recolution.form.valid" >\n																							Submit\n																						</button>\n																					</div>\n																				</div>\n																			</div>\n																			<div class="col-lg-12 col-md-12 col-12 order-total mt-2 pl-2 pr-2">\n																				<div class="alert alert-success alert-dismissible setFont-size hide" id="success-alert-resolution">\n																					<a class="close" (click)="closeDiv(\'success_resoltion\')">&times;</a>\n																					<span id="success-span-resolution"></span>\n																				</div>\n																			</div>\n																		</div>\n																	</form>\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n							<div role="tabpanel" class="messages-listing tab-pane fade" id="messages">\n								<div class="col-lg-12 col-md-12 col-12 feedback-tab-panel p-0 mt-2">\n									<ul class="nav nav-tabs feedback-tab-ul" role="tablist">\n										<li class="nav-item">\n											<a class="nav-link active" href="#messageBySeller" role="tab" data-toggle="tab" (click)="showMessageList()">Message as Seller</a>\n										</li>\n										<li class="nav-item">\n											<a class="nav-link" href="#messageByBuyer" role="tab" data-toggle="tab" (click)="showBuyerMessageData()">Message as Buyer</a>\n										</li>\n									</ul>\n									<div class="tab-content">\n										<div role="tabpanel" class="tab-pane fade in active show" id="messageBySeller">\n											<div class="row m-0">\n												<div class="col-lg-12 col-md-12 col-12 p-0">\n													<div class="chat_container">\n														<div class="row">\n															<div class="col-sm-12 col-lg-12 col-md-12 col-12 chat_sidebar">\n																<div id="custom-search-input">\n																	<form class="form">\n																		<div class="input-group">\n																			<input class="form-control" type="text" placeholder="Search conversation by product" aria-label="Search" style="padding-left: 20px; border-radius: 40px;" id="mysearch">\n																			<div class="input-group-addon">\n																				<button class="btn btn-sm search-chat-btn" type="submit" id="search-btn" (click)="searchMessage()">\n																					<i class="fa fa-search search-font-icon"></i>\n																				</button>\n																			</div>\n																		</div>\n																	</form>\n																</div>\n\n																<div class="member_list">\n																	<ul class="list-unstyled setFont-size" *ngIf="msgData?.data.length > 0;else nomsgfound;">\n																		<!--<div *ngIf="localItem.role != null && localItem.role == \'seller\'">-->\n																			<li class="left clearfix" *ngFor="let msgdta of msgData?.data">\n																				<a (click)="viewMessage(msgdta?.sender_id,msgdta?.product_id)">\n																					<span class="chat-img pull-left" *ngIf="msgdta?.send_pic == \'\';else showUserPic">\n																						<img src="assets/images/men-placeholder.png" alt="User Avatar" class="img-fluid rounded-circle">\n																					</span>\n																					<ng-template #showUserPic>\n																						<span class="chat-img pull-left">\n																							<img src="{{userImg}}{{msgdta?.sender_id}}/{{msgdta?.send_pic}}" alt="User Avatar" class="img-fluid rounded-circle">\n																						</span>\n																					</ng-template>\n																					<div class="chat-body clearfix">\n																						<div class="header_sec">\n																							<strong class="primary-font">{{msgdta?.sender}}</strong>\n																							<strong class="pull-right">{{msgdta?.created_date}}</strong>\n																						</div>\n																						<div class="contact_sec">\n																							<strong class="primary-font">{{msgdta?.title}}</strong>\n																							<span class="badge badge-warning badge-shaping float-right" *ngIf="msgdta?.unread > 0">{{msgdta?.unread}}</span>\n																						</div>\n																					</div>\n																				</a>\n																			</li>\n																	</ul>\n																	<ng-template #nomsgfound>\n																		<ul class="list-unstyled setFont-size">\n																			<li class="left clearfix text-center">\n																				You do not have any messages.\n																			</li>\n																		</ul>\n																	</ng-template>\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div role="tabpanel" class="tab-pane fade in" id="messageByBuyer">\n											<div class="row m-0">\n												<div class="col-lg-12 col-md-12 col-12 p-0">\n													<div class="chat_container">\n														<div class="row">\n															<div class="col-sm-12 col-lg-12 col-md-12 col-12 chat_sidebar">\n																<div id="custom-search-input">\n																	<form class="form">\n																		<div class="input-group">\n																			<input class="form-control" type="text" placeholder="Search conversation by product" aria-label="Search" style="padding-left: 20px; border-radius: 40px;" id="mysearch_buyer">\n																			<div class="input-group-addon">\n																				<button class="btn btn-sm search-chat-btn" type="submit" id="search-btn" (click)="searchMessage_buyer()">\n																					<i class="fa fa-search search-font-icon"></i>\n																				</button>\n																			</div>\n																		</div>\n																	</form>\n																</div>\n\n																<div class="member_list">\n																	<ul class="list-unstyled setFont-size" *ngIf="msgData_buyer?.data.length > 0;else nomsgfound_buyer;">\n																			<li class="left clearfix" *ngFor="let msgdta_buyer of msgData_buyer?.data">\n																				<a (click)="viewMessage(msgdta_buyer?.receiver_id,msgdta_buyer?.product_id)">\n																						<span class="chat-img pull-left" *ngIf="msgdta_buyer?.rec_pic == \'\';else showUserPic_buyer">\n																							<img src="assets/images/men-placeholder.png" alt="User Avatar" class="img-fluid rounded-circle">\n																						</span>\n																					<ng-template #showUserPic_buyer>\n																						<span class="chat-img pull-left">\n																							<img src="{{userImg}}{{msgdta_buyer?.receiver_id}}/{{msgdta_buyer?.rec_pic}}" alt="User Avatar" class="img-fluid rounded-circle">\n																						</span>\n																					</ng-template>\n																					<div class="chat-body clearfix">\n																						<div class="header_sec">\n																							<strong class="primary-font">{{msgdta_buyer?.receiver}}</strong>\n																							<strong class="pull-right">{{msgdta_buyer?.created_date}}</strong>\n																						</div>\n																						<div class="contact_sec">\n																							<strong class="primary-font">{{msgdta_buyer?.title}}</strong>\n																							<span class="badge badge-warning badge-shaping float-right" *ngIf="msgdta_buyer?.unread > 0">{{msgdta_buyer?.unread}}</span>\n																						</div>\n																					</div>\n																				</a>\n																			</li>\n																	</ul>\n																	<ng-template #nomsgfound_buyer>\n																		<ul class="list-unstyled setFont-size">\n																			<li class="left clearfix text-center">\n																				You do not have any messages.\n																			</li>\n																		</ul>\n																	</ng-template>\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n								<!---->\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			\n				<!--================Footer Area =================-->\n			<footer-page></footer-page>\n		</div>\n	</div>\n</ion-content>\n<script>\n    fbq(\'track\', \'AddToWishlist\');\n</script>'/*ion-inline-end:"/var/www/html/src/pages/seller-my-account/seller-my-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SellerMyAccountPage);
    return SellerMyAccountPage;
}());

//# sourceMappingURL=seller-my-account.js.map

/***/ })

});
//# sourceMappingURL=1.js.map