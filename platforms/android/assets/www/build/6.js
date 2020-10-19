webpackJsonp([6],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryPageModule", function() { return SubCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_category__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_pagination__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SubCategoryPageModule = /** @class */ (function () {
    function SubCategoryPageModule() {
    }
    SubCategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sub_category__["a" /* SubCategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sub_category__["a" /* SubCategoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SubCategoryPageModule);
    return SubCategoryPageModule;
}());

//# sourceMappingURL=sub-category.module.js.map

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

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoryPage; });
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





var SubCategoryPage = /** @class */ (function () {
    function SubCategoryPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cat_image = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/category/';
        this.pro_image = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
        this.isfilter = false;
        this.showSpec();
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('SubCategory');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    SubCategoryPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('SubCategory body');
        this.random_number = Math.floor(100000 + Math.random() * 900000);
        $(".zoomContainer").remove();
        this.showSubCat();
    };
    //scroll to hide and show top header.
    SubCategoryPage.prototype.ngAfterViewInit = function () {
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
    //show sub category.
    SubCategoryPage.prototype.showSubCat = function () {
        var _this = this;
        try {
            var cat_sub = {
                category_id: this.navParams.data.id
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/category-product-list', cat_sub, function (response) {
                _this.sub_data = response;
                $(document).prop('title', _this.sub_data.category.category_name + ' | Dibdaa');
                _this.infoService.hideLoading();
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
    //call pagination data click to pagination call this function.
    SubCategoryPage.prototype.getServerData = function (event) {
        var _this = this;
        var cat_sub = {
            category_id: this.navParams.data.id,
        };
        try {
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/category-product-list?page=' + event, cat_sub, function (response) {
                _this.sub_data = response;
                _this.infoService.hideLoading();
                _this.content.scrollToTop();
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
    //Redirect to product detail page.
    SubCategoryPage.prototype.GoToProDetail = function (val) {
        this.navCtrl.push('ProductDetails', {
            id: val
        });
    };
    //show specification data.
    SubCategoryPage.prototype.showSpec = function () {
        var _this = this;
        try {
            var show_itemSpec = {
                category_id: this.navParams.data.id
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/view-specification', show_itemSpec, function (response) {
                if (response.specification.data[0].specification.length > 0) {
                    _this.specification_key = response.specification.data[0];
                }
                else {
                    _this.item_spe = response;
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    //show search data.
    SubCategoryPage.prototype.SaerchFilter = function (val, val1, val3) {
        var _this = this;
        try {
            if (val1 == "type") {
                var item_ar;
                var replaceString = val3.replace(/\s/g, '_');
                item_ar = (_a = {}, _a[replaceString] = [val], _a);
                var filter_spcType = {
                    category_id: this.sub_data.category.id,
                    specification: item_ar
                };
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/filter-specification', filter_spcType, function (response) {
                    if (response.specification.status == "success") {
                        _this.isfilter = true;
                        _this.filter_data = response.specification;
                    }
                    else {
                        _this.isfilter = false;
                        _this.filter_data = response;
                    }
                    _this.infoService.hideLoading();
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
            else if (val1 == 'size') {
                var val_size = [];
                $('input[type=checkbox][name=size_spec]:checked').each(function (i) {
                    val_size.push($(this).val());
                });
                var filter_spcSize = {
                    category_id: this.sub_data.category.id,
                    specification: (_b = {}, _b[val3] = val_size, _b)
                };
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/filter-specification', filter_spcSize, function (response) {
                    if (response.specification.status == "success") {
                        _this.isfilter = true;
                        _this.filter_data = response.specification;
                        //this.infoService.hideLoading();
                    }
                    else {
                        _this.isfilter = false;
                        _this.filter_data = response;
                    }
                    _this.infoService.hideLoading();
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
            else if (val1 == 'color') {
                console.log(val3);
                var val_color = [];
                $('input[type=checkbox][name=color_spec]:checked').each(function (i) {
                    val_color.push($(this).val());
                });
                var filter_spccolor = {
                    category_id: this.sub_data.category.id,
                    specification: (_c = {}, _c[val3] = val_color, _c)
                };
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/filter-specification', filter_spccolor, function (response) {
                    if (response.specification.status == "success") {
                        _this.isfilter = true;
                        _this.filter_data = response.specification;
                    }
                    else {
                        _this.isfilter = false;
                        _this.filter_data = response;
                    }
                    _this.infoService.hideLoading();
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
            else if (val1 == "price") {
                var price1 = $('#price1').val();
                var price2 = $('#price2').val();
                var filter_spcprice = {
                    category_id: this.sub_data.category.id,
                    min_price: price1,
                    max_price: price2
                };
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/filter-specification', filter_spcprice, function (response) {
                    if (response.specification.status == "success") {
                        _this.isfilter = true;
                        _this.filter_data = response.specification;
                    }
                    else {
                        _this.isfilter = false;
                        _this.filter_data = response;
                    }
                    _this.infoService.hideLoading();
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
            else if (val1 == "brand") {
                var brand_input = $('#input_brand').val();
                var filter_spcbrand = {
                    category_id: this.sub_data.category.id,
                    specification: (_d = {}, _d[val3] = [brand_input], _d)
                };
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/filter-specification', filter_spcbrand, function (response) {
                    if (response.specification.status == "success") {
                        _this.isfilter = true;
                        _this.filter_data = response.specification;
                    }
                    else {
                        _this.isfilter = false;
                        _this.filter_data = response;
                    }
                    _this.infoService.hideLoading();
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
        }
        catch (Error) {
            console.log(Error);
            this.infoService.hideLoading();
        }
        var _a, _b, _c, _d;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SubCategoryPage.prototype, "content", void 0);
    SubCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sub-category',template:/*ion-inline-start:"/var/www/html/src/pages/category/sub-category/sub-category.html"*/'<ion-content padding>\n	<div class="category-listing">\n		<div class="wrapper">\n			<div class="container mb-3">\n				<div class="row">\n					<div class="col-lg-12 col-md-12 col-xl-12 col-12 breadcrumblink_div">\n						<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n						<p>\n							<a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n							<a href="#/b/{{sub_data?.category.parent_id}}" class="breadcrumblink">{{sub_data?.category.parent_category_name}}</a> &nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp; \n							<a class="breadcrumblink font-weight-bold" disabled>{{sub_data?.category.category_name}}</a></p>\n					</div>\n				</div>\n				<div class="row">\n					<div class="col-lg-12 col-md-12 col-12">\n						<h4 class="productcategoryname">{{sub_data?.category.category_name}}</h4>\n					</div>\n				</div>\n				<!--Varticle menu start-->\n				<div class="row">\n					<div class="col-md-3 col-lg-2 d-lg-flex d-md-none d-none">\n						<!-- menu -->\n						<div id="MainMenu" class="categoryvarticlemenu">\n							<div class="list-group panel">\n								<div *ngFor="let isp of specification_key?.specification;let i = index">\n									<a href="#multiitem{{i}}" class="list-group-item font-weight-bold text_capital" data-toggle="collapse" data-parent="#MainMenu">{{isp?.label}} <i class="fa fa-caret-down"></i></a>\n									<div class="collapse pb-3 collapseborder" id="multiitem{{i}}" *ngIf="isp?.type == \'3\'">\n										<a class="list-group-item" *ngFor="let sptype of isp?.value;let i = index"  id="{{isp?.label | replaceUnderscore:isp?.label}}-{{i}}"> <!-- (click)="SaerchFilter(sptype,\'type\',isp[0])" -->\n											<input type="checkbox" id="chk{{isp?.label | replaceUnderscore:isp?.label}}-{{i}}" name="size_spec" value="{{sptype}}" (change)="SaerchFilter(sptype,\'size\',isp?.label)" *ngIf="isp?.label == \'Size\'">\n											<input type="checkbox" id="chk{{isp?.label | replaceUnderscore:isp?.label}}-{{i}}" name="color_spec" value="{{sptype}}" (change)="SaerchFilter(sptype,\'color\',isp?.label)" *ngIf="isp?.label == \'Color\'">\n											{{sptype}}\n										</a>\n									</div>\n									<ng-template [ngIf]="isp?.type == \'2\'">\n										<div class="collapse pb-3 collapseborder" id="multiitem{{i}}">\n											<div>\n												<input type="text" style="width:80%;border: 1px solid #ced4da;" id="input_brand" class="mt-2" />\n												<button type="submit" class="btn btn-primary arrowbtn mb-3" (click)="SaerchFilter(\'\',\'brand\',\'brand\')">\n													<i class="fa fa-angle-right"></i>\n												</button>\n											</div>\n										</div>\n									</ng-template>\n									<ng-template [ngIf]="isp?.type == \'1\'">\n										<div class="collapse pb-3 collapseborder" id="multiitem{{i}}">\n											<a class="list-group-item" *ngFor="let sptype of isp?.value;let i = index"  id="{{isp?.label | replaceUnderscore:isp?.label}}-{{i}}" (click)="SaerchFilter(sptype,\'type\',isp?.label)">\n												{{sptype}}\n											</a>\n										</div>\n									</ng-template>\n\n								</div>\n								<a href="#multiitem100" class="list-group-item font-weight-bold text_capital" data-toggle="collapse" data-parent="#MainMenu" aria-expanded="true">Price<i class="fa fa-caret-down category-arrow"></i></a>\n								<div class="pl-2 pb-3 collapseborder collapse show" id="multiitem100" style="">\n									<form class="form-inline priceform">\n										<label for="price1" class="pricelabel">AED</label>\n										<input type="text" class="form-control pricetxtbox" id="price1">\n										<label for="price1" class="pricelabel">- AED</label>\n										<input type="text" class="form-control pricetxtbox" id="price2">\n										<button type="submit" class="btn btn-primary arrowbtn" (click)="SaerchFilter(\'\',\'price\',\'price\')">\n											<i class="fa fa-angle-right"></i>\n										</button>\n									</form>\n								</div>\n							</div>\n						</div>\n					</div>\n					<div class="col-lg-10 col-md-12">\n						<div class="row">\n							<div class="col-lg-12 col-md-12 col-12">\n								<img src="{{cat_image}}{{sub_data?.category.Category_banner_image}}" class="img-fluid-cat" name="{{sub_data?.category.category_name}}" *ngIf="sub_data?.category?.Category_banner_image != null && sub_data?.category.Category_banner_image != \'\'">\n								<img src="assets/images/placeholder_banner.jpg" class="img-fluid-cat" name="{{sub_data?.category.category_name}}" *ngIf="sub_data?.category?.Category_banner_image == null || sub_data?.category?.Category_banner_image == \'\'">\n								<div class="top-left">\n									<p>{{sub_data?.category.Category_banner_desc}}</p>\n								</div>\n							</div>\n						</div>\n						<div class="col-lg-12 col-md-12 p-0" *ngIf="isfilter == false;else showFilterdata;">\n							<div class="gridviewlistview ml-0 mr-0 p-3 mt-3" *ngIf="sub_data?.data.data.length > 0;else nodatafnd;">\n								<div class="row d-lg-block d-md-none d-none">\n									<div class="col-lg-12 col-md-12 col-12 pt-3 pb-3 pl-3 pl-lg-4">\n										<!-- Nav tabs -->\n										<div class="row">\n											<div class="col-lg-12 col-12 col-md-12">\n												<ul class="nav" role="tablist">\n													<li role="presentation" class="active">\n														<a href="#alllisting_{{random_number}}" role="tab" class="btn tablistinbtn active show" data-toggle="tab">All Listings</a>\n													</li>\n													<li role="presentation">\n														<a href="#auction_{{random_number}}" class="btn tablistinbtn" role="tab" data-toggle="tab">Auction</a>\n													</li>\n													<li role="presentation">\n														<a href="#buyitnow_{{random_number}}" class="btn tablistinbtn" role="tab" data-toggle="tab">Buy It Now</a>\n													</li>\n												</ul>\n											</div>\n										</div>\n										<!-- Tab panes -->\n										<div class="tab-content">\n											<div role="tabpanel" class="tab-pane active" id="alllisting_{{random_number}}">\n												<div *ngIf="sub_data?.data.data.length <= 0;else showAllItem">\n													<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom">\n														Item not available!\n													</div>\n												</div>\n												<ng-template #showAllItem>\n													<div class="resultcount mt-3 mb-3 ml-1">\n														<p>{{sub_data?.data.from}}-{{sub_data?.data.to}} of {{sub_data?.data.total}} Results</p>\n													</div>\n													<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom" *ngFor="let dta of sub_data?.data.data  | paginate: {itemsPerPage: 50, currentPage:sub_data?.data.current_page, id: \'sub_dataId\' ,totalItems:sub_data?.data.total}; let i = index">\n														<div class="col-lg-3 col-md-4 p-0">\n															<a (click)="GoToProDetail(dta?.id)">\n																<img src="{{pro_image}}{{dta?.id}}/L/{{dta?.photos[0]}}" class="productlistingimg img-fluid">\n															</a>\n															<div class="top-left-sticker" *ngIf="dta?.time == \'End\'">\n																<img src="assets/images/sold.png">\n																<p class="m-0 sold-text">ENDED</p>\n															</div>\n														</div>\n														<div class="col-lg-9 col-md-8 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0 pl-md-2 pr-md-2">\n															<a (click)="GoToProDetail(dta?.id)">\n																<h6 class="producttitle font-weight-bold m-1">{{dta?.title}}</h6>\n															</a>\n															<div *ngIf="dta?.subtitle != null && dta?.subtitle != \'\'" class="breadcrumblink_div ml-1">\n																{{dta?.subtitle}}\n															</div>\n															<span class="ratings">\n																<div class="empty-stars"></div> \n																<div class="full-stars" style="width:0%" *ngIf="dta?.product_avg == 0"></div>\n																<div class="full-stars" style="width:20%" *ngIf="dta?.product_avg == 1"></div>\n																<div class="full-stars" style="width:40%" *ngIf="dta?.product_avg == 2"></div>\n																<div class="full-stars" style="width:60%" *ngIf="dta?.product_avg == 3"></div>\n																<div class="full-stars" style="width:80%" *ngIf="dta?.product_avg == 4"></div>\n																<div class="full-stars" style="width:100%" *ngIf="dta?.product_avg == 5"></div>\n															</span>\n															<table class="table breadcrumblink_div">\n																<tbody>\n																	<tr>\n																		<td class="price w-50" *ngIf="dta?.selling_type ==\'Auction style\'">{{ dta?.last_bid }} AED</td>\n																		<td class="price w-50" *ngIf="dta?.selling_type ==\'Fixed price\'">{{ dta?.price - (dta?.price*dta?.discount) / 100 }} AED</td>\n																		<td class="w-50" *ngIf="dta?.product_address != null">From {{dta?.product_address}}</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.selling_type ==\'Fixed price\' && dta?.discount != 0">Was: <span class="dollarcancle"> {{dta?.price}} AED</span></td>\n																	</tr>\n																	<tr>\n																		<td>Free shipping</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.quantity > 10">{{dta?.quantity}} left!</td>\n																		<td class="sold-item" *ngIf="dta?.quantity <= 10 && dta?.quantity >= 1">Only {{dta?.quantity}} left!</td>\n																		<td class="sold-item" *ngIf="dta?.quantity <= 0">Not available!</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.make_offer == 1">Best Offer</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.selling_type == \'Fixed price\'">Buy It Now</td>\n																		<td *ngIf="dta?.selling_type == \'Auction style\'">Auction</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.time == \'Started\'" [ngClass]="{\'text-danger\': dta?.endsoon == \'0\'}">Time left: {{dta?.days_left | removeplusSign:dta?.days_left}}</td>\n																	</tr>\n																</tbody>\n															</table>\n														</div>\n													</div>\n												</ng-template>\n											</div>\n											<div role="tabpanel" class="tab-pane" id="auction_{{random_number}}">\n												<div *ngIf="sub_data?.count.Auction_count <= 0;else showauction">\n													<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom text-center">\n														<span style="width:100%;">Item not available!</span>\n													</div>\n												</div>\n												<ng-template #showauction>\n													<div class="resultcount mt-3 mb-3 ml-1">\n														<p>{{sub_data?.count.Auction_count}} Results</p>\n													</div>\n													<div *ngFor="let dta of sub_data?.data.data | paginate: {itemsPerPage: 50, currentPage:sub_data?.data.current_page, id: \'sub_dataId\' ,totalItems:sub_data?.data.total}; let i = index">\n														<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom" *ngIf="dta?.selling_type == \'Auction style\'">\n															<div class="col-lg-3 col-md-4 p-0">\n																<a (click)="GoToProDetail(dta?.id)">\n																	<img src="{{pro_image}}{{dta?.id}}/L/{{dta?.photos[0]}}" class="img-fluid productlistingimg">\n																</a>\n																<div class="top-left-sticker" *ngIf="dta?.time == \'End\'">\n																	<img src="assets/images/sold.png">\n																	<p class="m-0 sold-text">ENDED</p>\n																</div>\n															</div>\n															<div class="col-lg-9 col-md-8 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0 pl-md-2 pr-md-2">\n																<a (click)="GoToProDetail(dta?.id)">\n																	<h6 class="producttitle font-weight-bold m-1">{{dta?.title}}</h6>\n																</a>\n																<div *ngIf="dta?.subtitle != null && dta?.subtitle != \'\'" class="breadcrumblink_div ml-1">\n																	{{dta?.subtitle}}\n																</div>\n																<span class="ratings">\n																	<div class="empty-stars"></div> \n																	<div class="full-stars" style="width:0%" *ngIf="dta?.product_avg == 0"></div>\n																	<div class="full-stars" style="width:20%" *ngIf="dta?.product_avg == 1"></div>\n																	<div class="full-stars" style="width:40%" *ngIf="dta?.product_avg == 2"></div>\n																	<div class="full-stars" style="width:60%" *ngIf="dta?.product_avg == 3"></div>\n																	<div class="full-stars" style="width:80%" *ngIf="dta?.product_avg == 4"></div>\n																	<div class="full-stars" style="width:100%" *ngIf="dta?.product_avg == 5"></div>\n																</span>\n																<table class="table breadcrumblink_div">\n																	<tbody>\n																	<tr>\n																		<td class="price w-50">{{ dta?.last_bid }} AED</td>\n																		<td class="w-50" *ngIf="dta?.product_address != null">From {{dta?.product_address}}</td>\n																	</tr>\n																	<tr>\n																		<td>Free shipping</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.quantity > 10">{{dta?.quantity}} left!</td>\n																		<td class="sold-item" *ngIf="dta?.quantity <= 10 && dta?.quantity >= 1">Only {{dta?.quantity}} left!</td>\n																		<td class="sold-item" *ngIf="dta?.quantity <= 0">Not available!</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.make_offer == 1">Best Offer</td>\n																	</tr>\n																	<tr>\n																		<td>Auction</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.time == \'Started\'" [ngClass]="{\'text-danger\': dta?.endsoon == \'0\'}">Time left: {{dta?.days_left | removeplusSign:dta?.days_left}}</td>\n																	</tr>\n																	</tbody>\n																</table>\n															</div>\n														</div>\n													</div>\n												</ng-template>\n											</div>\n											<div role="tabpanel" class="tab-pane" id="buyitnow_{{random_number}}">\n												<div *ngIf="sub_data?.count.Fixed_count <= 0;else showbuynow">\n													<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom text-center">\n														<span style="width:100%;">Item not available!</span>\n													</div>\n												</div>\n												<ng-template #showbuynow>\n													<div class="resultcount mt-3 mb-3 ml-1">\n														<p>{{sub_data?.count.Fixed_count}} Results</p>\n													</div>\n													<div *ngFor="let dta of sub_data?.data.data | paginate: {itemsPerPage: 50, currentPage:sub_data?.data.current_page, id: \'sub_dataId\' ,totalItems:sub_data?.data.total}; let i = index">\n														<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom" *ngIf="dta?.selling_type == \'Fixed price\'">\n															<!--;else nobuynow -->\n															<div class="col-lg-3 col-md-4 p-0">\n																<a (click)="GoToProDetail(dta?.id)">\n																	<img src="{{pro_image}}{{dta?.id}}/L/{{dta?.photos[0]}}" class="img-fluid productlistingimg">\n																</a>\n																<div class="top-left-sticker" *ngIf="dta?.time == \'End\'">\n																	<img src="assets/images/sold.png">\n																	<p class="m-0 sold-text">ENDED</p>\n																</div>\n															</div>\n															<div class="col-lg-9 col-md-8 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0 pl-md-2 pr-md-2">\n																<a (click)="GoToProDetail(dta?.id)">\n																	<h6 class="producttitle font-weight-bold m-1">{{dta?.title}}</h6>\n																</a>\n																<div *ngIf="dta?.subtitle != null && dta?.subtitle != \'\'" class="breadcrumblink_div ml-1">\n																	{{dta?.subtitle}}\n																</div>\n																<span class="ratings">\n																	<div class="empty-stars"></div> \n																	<div class="full-stars" style="width:0%" *ngIf="dta?.product_avg == 0"></div>\n																	<div class="full-stars" style="width:20%" *ngIf="dta?.product_avg == 1"></div>\n																	<div class="full-stars" style="width:40%" *ngIf="dta?.product_avg == 2"></div>\n																	<div class="full-stars" style="width:60%" *ngIf="dta?.product_avg == 3"></div>\n																	<div class="full-stars" style="width:80%" *ngIf="dta?.product_avg == 4"></div>\n																	<div class="full-stars" style="width:100%" *ngIf="dta?.product_avg == 5"></div>\n																</span>\n																<table class="table breadcrumblink_div">\n																	<tbody>\n																	<tr>\n																		<td class="price w-50">{{ dta?.price - (dta?.price*dta?.discount) / 100 }} AED</td>\n																		<td class="w-50" *ngIf="dta?.product_address != null">From {{dta?.product_address}}</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.selling_type ==\'Fixed price\' && dta?.discount != 0">Was: <span class="dollarcancle"> {{dta?.price}} AED</span></td>\n																	</tr>\n																	<tr>\n																		<td>Free shipping</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.quantity > 10">{{dta?.quantity}} left!</td>\n																		<td class="sold-item" *ngIf="dta?.quantity <= 10 && dta?.quantity >= 1">Only {{dta?.quantity}} left!</td>\n																		<td class="sold-item" *ngIf="dta?.quantity <= 0">Not available!</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.make_offer == 1">Best Offer</td>\n																	</tr>\n																	<tr>\n																		<td>Buy It Now</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.time == \'Started\'" [ngClass]="{\'text-danger\': dta?.endsoon == \'0\'}">Time left: {{dta?.days_left | removeplusSign:dta?.days_left}}</td>\n																	</tr>\n																	</tbody>\n																</table>\n															</div>\n														</div>\n													</div>\n												</ng-template>\n											</div>\n										</div>\n									</div>\n								</div>\n								\n								<div class="row d-lg-none d-md-block d-block">\n									<div class="col-lg-12 col-md-12 col-12 pt-3 pb-3 pl-3 pl-lg-4">\n										<!-- Nav tabs -->\n										<div class="row">\n											<div class="col-lg-12 col-12 col-md-12">\n												<ul class="nav" role="tablist">\n													<li role="presentation" class="active">\n														<a href="#alllisting_mobile{{random_number}}" role="tab" class="btn tablistinbtn active show" data-toggle="tab">All Listings</a>\n													</li>\n													<li role="presentation">\n														<a href="#auction_mobile{{random_number}}" class="btn tablistinbtn" role="tab" data-toggle="tab">Auction</a>\n													</li>\n													<li role="presentation">\n														<a href="#buyitnow_mobile{{random_number}}" class="btn tablistinbtn" role="tab" data-toggle="tab">Buy It Now</a>\n													</li>\n												</ul>\n											</div>\n											\n											<!-- Tab panes -->\n										<div class="tab-content w-100">\n											<div role="tabpanel" class="tab-pane active" id="alllisting_mobile{{random_number}}">\n												<div class="resultcount m-3">\n													<p> {{sub_data?.data.from}}-{{sub_data?.data.to}} of {{sub_data?.data.total}} Results</p>\n												</div>\n												<div *ngIf="sub_data?.data.data.length <= 0;else showAllItem_mobile text-center">\n													<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom text-center d-block">\n														Item not available!\n													</div>\n												</div>\n												<ng-template #showAllItem_mobile>\n													<div class="container pl-2 pr-2">\n														<div class="row set_fontSize">\n															<div class="col-md-4 col-6 marB30" *ngFor="let dta of sub_data?.data.data | paginate: {itemsPerPage: sub_data?.data.per_page, currentPage:sub_data?.data.current_page, id: \'sub_dataId\' ,totalItems:sub_data?.data.total}; let i = index">\n																<div class="box-a mb-4 border rounded">\n																	<figure class="m-0">\n																		<a href="#/viewItem/{{dta?.id}}" title="{{dta?.title}}">\n																			<img src="{{pro_image}}{{dta?.id}}/L/{{dta?.photos[0]}}" class="img-fluid" alt="{{dta?.title}}">\n																		</a>\n																	</figure>\n																	<div class="box-detail bg-light p-1 breadcrumblink_div">\n																		<p class="mt-2 mb-1"><a href="#/viewItem/{{dta?.id}}" title="{{dta?.title}}">{{(dta?.title.length > 15)? (dta?.title | slice:0:15)+\'...\':(dta?.title)}}</a></p>\n																		<div class="row p-0 m-0">\n																			<div class="col-lg-6 col-md-6 p-0 m-0">\n																				<span class="ratings">\n																					<div class="empty-stars"></div> \n																					<div class="full-stars" style="width:0%" *ngIf="dta?.product_avg == 0"></div>\n																					<div class="full-stars" style="width:20%" *ngIf="dta?.product_avg == 1"></div>\n																					<div class="full-stars" style="width:40%" *ngIf="dta?.product_avg == 2"></div>\n																					<div class="full-stars" style="width:60%" *ngIf="dta?.product_avg == 3"></div>\n																					<div class="full-stars" style="width:80%" *ngIf="dta?.product_avg == 4"></div>\n																					<div class="full-stars" style="width:100%" *ngIf="dta?.product_avg == 5"></div>\n																				</span>\n																			</div>\n																			<div class="col-lg-6 col-md-6 p-0 m-0 text-lg-right text-md-right">\n																				<span class="text-danger" *ngIf="dta?.quantity <= 5">Only {{dta?.quantity}} left! </span>\n																				<span *ngIf="dta?.quantity > 5">{{dta?.quantity}} left! </span>\n																			</div>\n																		</div>\n																		<span *ngIf="dta?.selling_type ==\'Auction style\'">{{ dta?.last_bid }} AED</span> \n																		<span *ngIf="dta?.selling_type ==\'Fixed price\'">{{dta?.price - (dta?.price*dta?.discount) / 100 }} AED</span> \n																		<span *ngIf="dta?.selling_type ==\'Fixed price\' && dta?.discount != 0 "> | <del><span class="grey">{{dta?.price}} AED</span></del>\n																			| <span class="text-uppercase">{{dta?.discount}}% off</span>\n																		</span>\n																		<p class="mb-1 mt-0" *ngIf="dta?.product_address != null">From <a title="{{dta?.product_address}}">{{(dta?.product_address.length > 13)? (dta?.product_address | slice:0:13)+\'...\':(dta?.product_address)}}</a></p>\n																		<p class="mb-1 mt-0">Free shipping</p>\n																		<p class="mb-1 mt-0" *ngIf="dta?.selling_type == \'Auction style\'">Auction style</p>\n																		<p class="mb-1 mt-0" *ngIf="dta?.selling_type ==\'Fixed price\'">Buy It Now</p>\n																	</div>\n																</div>\n															</div>\n														</div>\n													</div>\n												</ng-template>\n											</div>\n											<div role="tabpanel" class="tab-pane" id="auction_mobile{{random_number}}">\n												<div class="resultcount m-3">\n													<p> {{sub_data?.count.Auction_count}} Results</p>\n												</div>\n												<div *ngIf="sub_data?.count.Auction_count <= 0;else showauction_mobile">\n													<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom text-center d-block">\n														Item not available!\n													</div>\n												</div>\n												<ng-template #showauction_mobile>\n													<div class="container pl-2 pr-2">\n														<div class="row set_fontSize">\n															<div [ngClass]="{\'col-md-4 col-6 marB30\' : dta?.selling_type == \'Auction style\' }" *ngFor="let dta of sub_data?.data.data | paginate: {itemsPerPage: sub_data?.data.per_page, currentPage:sub_data?.data.current_page, id: \'sub_dataId\' ,totalItems:sub_data?.data.total}; let i = index" >\n																<div class="box-a mb-4 border rounded" *ngIf="dta?.selling_type == \'Auction style\'">\n																	<figure class="m-0">\n																		<a href="#/viewItem/{{dta?.id}}" title="{{dta?.title}}">\n																			<img src="{{pro_image}}{{dta?.id}}/L/{{dta?.photos[0]}}" class="img-fluid" alt="{{dta?.title}}">\n																		</a>\n																	</figure>\n																	<div class="box-detail bg-light p-1 breadcrumblink_div">\n																		<p class="mt-2 mb-1"><a href="#/viewItem/{{dta?.id}}" title="{{dta?.title}}">{{(dta?.title.length > 15)? (dta?.title | slice:0:15)+\'...\':(dta?.title)}}</a></p>\n																		<div class="row p-0 m-0">\n																			<div class="col-lg-6 col-md-6 p-0 m-0">\n																				<span class="ratings">\n																					<div class="empty-stars"></div> \n																					<div class="full-stars" style="width:0%" *ngIf="dta?.product_avg == 0"></div>\n																					<div class="full-stars" style="width:20%" *ngIf="dta?.product_avg == 1"></div>\n																					<div class="full-stars" style="width:40%" *ngIf="dta?.product_avg == 2"></div>\n																					<div class="full-stars" style="width:60%" *ngIf="dta?.product_avg == 3"></div>\n																					<div class="full-stars" style="width:80%" *ngIf="dta?.product_avg == 4"></div>\n																					<div class="full-stars" style="width:100%" *ngIf="dta?.product_avg == 5"></div>\n																				</span>\n																			</div>\n																			<div class="col-lg-6 col-md-6 p-0 m-0 text-lg-right text-md-right">\n																				<span class="text-danger" *ngIf="dta?.quantity <= 5">Only {{dta?.quantity}} left! </span>\n																				<span *ngIf="dta?.quantity > 5">{{dta?.quantity}} left! </span>\n																			</div>\n																		</div>\n																		<span>{{ dta?.last_bid }} AED</span> \n																		<p class="mb-1 mt-0" *ngIf="dta?.product_address != null">From <a title="{{dta?.product_address}}">{{(dta?.product_address.length > 13)? (dta?.product_address | slice:0:13)+\'...\':(dta?.product_address)}}</a></p>\n																		<p class="mb-1 mt-0">Free shipping</p>\n																		<p class="mb-1 mt-0">Auction style</p>\n																	</div>\n																</div>\n															</div>\n														</div>\n													</div>\n												</ng-template>\n											</div>\n											<div role="tabpanel" class="tab-pane" id="buyitnow_mobile{{random_number}}">\n												<div class="resultcount m-3">\n													<p> {{sub_data?.count.Fixed_count}} Results</p>\n												</div>\n												<div *ngIf="sub_data?.count.Fixed_count <= 0;else showbuynow_mobile">\n													<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom text-center d-block">\n														Item not available!\n													</div>\n												</div>\n												<ng-template #showbuynow_mobile>\n													<div class="container pl-2 pr-2">\n														<div class="row set_fontSize">\n															<div [ngClass]="{\'col-md-4 col-6 marB30\' : dta?.selling_type == \'Fixed price\' }" *ngFor="let dta of sub_data?.data.data | paginate: {itemsPerPage: sub_data?.data.per_page, currentPage:sub_data?.data.current_page, id: \'sub_dataId\' ,totalItems:sub_data?.data.total}; let i = index" >\n																<div class="box-a mb-4 border rounded" *ngIf="dta?.selling_type == \'Fixed price\'">\n																	<figure class="m-0">\n																		<a href="#/viewItem/{{dta?.id}}" title="{{dta?.title}}">\n																			<img src="{{pro_image}}{{dta?.id}}/L/{{dta?.photos[0]}}" class="img-fluid" alt="{{dta?.title}}">\n																		</a>\n																	</figure>\n																	<div class="box-detail bg-light p-1 breadcrumblink_div">\n																		<p class="mt-2 mb-1"><a href="#/viewItem/{{dta?.id}}" title="{{dta?.title}}">{{(dta?.title.length > 15)? (dta?.title | slice:0:15)+\'...\':(dta?.title)}}</a></p>\n																		<div class="row p-0 m-0">\n																			<div class="col-lg-6 col-md-6 p-0 m-0">\n																				<span class="ratings">\n																					<div class="empty-stars"></div> \n																					<div class="full-stars" style="width:0%" *ngIf="dta?.product_avg == 0"></div>\n																					<div class="full-stars" style="width:20%" *ngIf="dta?.product_avg == 1"></div>\n																					<div class="full-stars" style="width:40%" *ngIf="dta?.product_avg == 2"></div>\n																					<div class="full-stars" style="width:60%" *ngIf="dta?.product_avg == 3"></div>\n																					<div class="full-stars" style="width:80%" *ngIf="dta?.product_avg == 4"></div>\n																					<div class="full-stars" style="width:100%" *ngIf="dta?.product_avg == 5"></div>\n																				</span>\n																			</div>\n																			<div class="col-lg-6 col-md-6 p-0 m-0 text-lg-right text-md-right">\n																				<span class="text-danger" *ngIf="dta?.quantity <= 5">Only {{dta?.quantity}} left! </span>\n																				<span *ngIf="dta?.quantity > 5">{{dta?.quantity}} left! </span>\n																			</div>\n																		</div>\n																		<span>{{dta?.price - (dta?.price*dta?.discount) / 100 }} AED</span> \n																		<span *ngIf="dta?.selling_type ==\'Fixed price\' && dta?.discount != 0 "> | <del><span class="grey">{{dta?.price}} AED</span></del>\n																			| <span class="text-uppercase">{{dta?.discount}}% off</span>\n																		</span>\n																		<p class="mb-1 mt-0" *ngIf="dta?.product_address != null">From <a title="{{dta?.product_address}}">{{(dta?.product_address.length > 13)? (dta?.product_address | slice:0:13)+\'...\':(dta?.product_address)}}</a></p>\n																		<p class="mb-1 mt-0">Free shipping</p>\n																		<p class="mb-1 mt-0">Buy It Now</p>\n																	</div>\n																</div>\n															</div>\n														</div>\n													</div>\n												</ng-template>\n											</div>\n										</div>\n										</div>\n									</div>\n								</div>\n								\n								<div class="row">\n									<div class="col-lg-12 paginationlist">\n										<pagination-controls (pageChange)="page = getServerData($event)" id="sub_dataId" maxSize="{{sub_data?.data.last_page}}" directionLinks="true" autoHide="false" class="text-center breadcrumblink_div"></pagination-controls>\n									</div>\n								</div>\n							</div>\n							<ng-template #nodatafnd>\n								<div class="gridviewlistview ml-0 mr-0 p-3 mt-3">\n									<div class="row">\n										<span class="error_span">Item not available!</span>\n									</div>\n								</div>\n							</ng-template>\n						</div>\n						<ng-template #showFilterdata>\n						<div class="col-lg-12 col-md-12 p-0">\n							<div class="gridviewlistview ml-0 mr-0 p-3 mt-3" *ngIf="filter_data?.data.length > 0;else nodatafnd;">\n								<div class="row d-lg-block d-md-none d-none">\n									<div class="col-lg-12 col-md-12 col-12 pt-3 pb-3 pl-3 pl-lg-4">\n										<!-- Nav tabs -->\n										<div class="row">\n											<div class="col-lg-12 col-12 col-md-12">\n												<ul class="nav" role="tablist">\n													<li role="presentation" class="active">\n														<a href="#alllisting_filter_{{random_number}}" role="tab" class="btn tablistinbtn active show" data-toggle="tab">All Listings</a>\n													</li>\n													<li role="presentation">\n														<a href="#auction_filter_{{random_number}}" class="btn tablistinbtn" role="tab" data-toggle="tab">Auction</a>\n													</li>\n													<li role="presentation">\n														<a href="#buyitnow_filter_{{random_number}}" class="btn tablistinbtn" role="tab" data-toggle="tab">Buy It Now</a>\n													</li>\n												</ul>\n											</div>\n										</div>\n										<!-- Tab panes -->\n										<div class="tab-content">\n											<div role="tabpanel" class="tab-pane active" id="alllisting_filter_{{random_number}}">\n												<div *ngIf="filter_data?.data.length <= 0;else showAllItem_filter">\n													<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom">\n														Item not available!\n													</div>\n												</div>\n												<ng-template #showAllItem_filter>\n													<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom" *ngFor="let dta of filter_data?.data">\n														<div class="col-lg-3 col-md-4 p-0">\n															<a (click)="GoToProDetail(dta?.id)" *ngIf="dta?.photos.length > 0;else notImg;">\n																<img src="{{pro_image}}{{dta?.id}}/L/{{dta?.photos[0]}}" class="productlistingimg img-fluid">\n															</a>\n															\n															<ng-template #notImg>\n																<a (click)="GoToProDetail(dta?.id)">\n																	<img src="assets/images/category.png" class="productlistingimg img-fluid">\n																</a>\n															</ng-template>\n															<div class="top-left-sticker" *ngIf="dta?.time == \'End\'">\n																<img src="assets/images/sold.png">\n																<p class="m-0 sold-text">ENDED</p>\n															</div>\n														</div>\n														<div class="col-lg-9 col-md-8 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0 pl-md-2 pr-md-2">\n															<a (click)="GoToProDetail(dta?.id)">\n																<h6 class="producttitle font-weight-bold m-1">{{dta?.title}}</h6>\n															</a>\n															<div *ngIf="dta?.subtitle != null && dta?.subtitle != \'\'" class="breadcrumblink_div ml-1">\n																{{dta?.subtitle}}\n															</div>\n															<span class="ratings">\n																<div class="empty-stars"></div> \n																<div class="full-stars" style="width:0%" *ngIf="dta?.product_avg == 0"></div>\n																<div class="full-stars" style="width:20%" *ngIf="dta?.product_avg == 1"></div>\n																<div class="full-stars" style="width:40%" *ngIf="dta?.product_avg == 2"></div>\n																<div class="full-stars" style="width:60%" *ngIf="dta?.product_avg == 3"></div>\n																<div class="full-stars" style="width:80%" *ngIf="dta?.product_avg == 4"></div>\n																<div class="full-stars" style="width:100%" *ngIf="dta?.product_avg == 5"></div>\n															</span>\n															<table class="table breadcrumblink_div">\n																<tbody>\n																	<tr>\n																		<td class="price w-50" *ngIf="dta?.selling_type ==\'Auction style\'">{{ dta?.last_bid }} AED</td>\n																		<td class="price w-50" *ngIf="dta?.selling_type ==\'Fixed price\'">{{ dta?.price - (dta?.price*dta?.discount) / 100 }} AED</td>\n																		<td class="w-75" *ngIf="dta?.product_address != null">From {{dta?.product_address}}</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.selling_type ==\'Fixed price\' && dta?.discount != 0">Was: <span class="dollarcancle"> {{dta?.price}} AED</span></td>\n																	</tr>\n																	<tr>\n																		<td>Free shipping</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.quantity > 10">{{dta?.quantity}} left!</td>\n																		<td class="sold-item" *ngIf="dta?.quantity <= 10 && dta?.quantity >= 1">Only {{dta?.quantity}} left!</td>\n																		<td class="sold-item" *ngIf="dta?.quantity <= 0">Not available!</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.make_offer == 1">Best Offer</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.selling_type == \'Fixed price\'">Buy It Now</td>\n																		<td *ngIf="dta?.selling_type == \'Auction style\'">Auction</td>\n																	</tr>\n																	<tr>\n																		<td *ngIf="dta?.time == \'Started\'" [ngClass]="{\'text-danger\': dta?.endsoon == \'0\'}">Time left: {{dta?.days_left | removeplusSign:dta?.days_left}}</td>\n																	</tr>\n																</tbody>\n															</table>\n														</div>\n													</div>\n												</ng-template>\n											</div>\n											<div role="tabpanel" class="tab-pane" id="auction_filter_{{random_number}}">\n												<div *ngIf="filter_data?.data.length <= 0;else showauction">\n													<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom">\n														Item not available!\n													</div>\n												</div>\n												<ng-template #showauction>\n													<div *ngFor="let dta of filter_data?.data;">\n														<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom" *ngIf="dta?.selling_type == \'Auction style\'">\n															<div class="col-lg-3 col-md-4 p-0">\n																<a (click)="GoToProDetail(dta?.id)" *ngIf="dta?.photos.length > 0;else notImg;">\n																	<img src="{{pro_image}}{{dta?.id}}/L/{{dta?.photos[0]}}" class="productlistingimg img-fluid">\n																</a>\n																<ng-template #notImg>\n																	<a (click)="GoToProDetail(dta?.id)">\n																		<img src="assets/images/category.png" class="productlistingimg img-fluid">\n																	</a>\n																</ng-template>\n																<div class="top-left-sticker" *ngIf="dta?.time == \'End\'">\n																	<img src="assets/images/sold.png">\n																	<p class="m-0 sold-text">ENDED</p>\n																</div>\n															</div>\n															<div class="col-lg-9 col-md-8 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0 pl-md-2 pr-md-2">\n																<a (click)="GoToProDetail(dta?.id)">\n																	<h6 class="producttitle font-weight-bold m-1">{{dta?.title}}</h6>\n																</a>\n																<div *ngIf="dta?.subtitle != null && dta?.subtitle != \'\'" class="breadcrumblink_div ml-1">\n																	{{dta?.subtitle}}\n																</div>\n																<span class="ratings">\n																	<div class="empty-stars"></div> \n																	<div class="full-stars" style="width:0%" *ngIf="dta?.product_avg == 0"></div>\n																	<div class="full-stars" style="width:20%" *ngIf="dta?.product_avg == 1"></div>\n																	<div class="full-stars" style="width:40%" *ngIf="dta?.product_avg == 2"></div>\n																	<div class="full-stars" style="width:60%" *ngIf="dta?.product_avg == 3"></div>\n																	<div class="full-stars" style="width:80%" *ngIf="dta?.product_avg == 4"></div>\n																	<div class="full-stars" style="width:100%" *ngIf="dta?.product_avg == 5"></div>\n																</span>\n																<table class="table breadcrumblink_div">\n																	<tbody>\n																		<tr>\n																			<td class="price w-50">{{ dta?.last_bid }} AED</td>\n																			<td class="w-50" *ngIf="dta?.product_address != null">From {{dta?.product_address}}</td>\n																		</tr>\n																		<tr>\n																			<td>Free shipping</td>\n																		</tr>\n																		<tr>\n																			<td *ngIf="dta?.quantity > 10">{{dta?.quantity}} left!</td>\n																			<td class="sold-item" *ngIf="dta?.quantity <= 10 && dta?.quantity >= 1">Only {{dta?.quantity}} left!</td>\n																			<td class="sold-item" *ngIf="dta?.quantity <= 0">Not available!</td>\n																		</tr>\n																		<tr>\n																			<td *ngIf="dta?.make_offer == 1">Best Offer</td>\n																		</tr>\n																		<tr>\n																			<td>Auction</td>\n																		</tr>\n																		<tr>\n																			<td *ngIf="dta?.time == \'Started\'" [ngClass]="{\'text-danger\': dta?.endsoon == \'0\'}">Time left: {{dta?.days_left | removeplusSign:dta?.days_left}}</td>\n																		</tr>\n																	</tbody>\n																</table>\n															</div>\n														</div>\n													</div>\n												</ng-template>\n											</div>\n											<div role="tabpanel" class="tab-pane" id="buyitnow_filter_{{random_number}}">\n\n												<div *ngIf="filter_data?.data.length <= 0;else showbuynow">\n													<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom">\n														Item not available!\n													</div>\n												</div>\n												\n												<ng-template #showbuynow>\n													<div *ngFor="let dta of filter_data?.data;">\n														<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom" *ngIf="dta?.selling_type == \'Fixed price\'">\n															<div class="col-lg-3 col-md-4 p-0">\n																<a (click)="GoToProDetail(dta?.id)" *ngIf="dta?.photos.length > 0;else notImg;">\n																	<img src="{{pro_image}}{{dta?.id}}/L/{{dta?.photos[0]}}" class="productlistingimg img-fluid">\n																</a>\n																<ng-template #notImg>\n																	<a (click)="GoToProDetail(dta?.id)">\n																		<img src="assets/images/category.png" class="productlistingimg img-fluid">\n																	</a>\n																</ng-template>\n																<div class="top-left-sticker" *ngIf="dta?.time == \'End\'">\n																	<img src="assets/images/sold.png">\n																	<p class="m-0 sold-text">ENDED</p>\n																</div>\n															</div>\n															<div class="col-lg-9 col-md-8 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0 pl-md-2 pr-md-2">\n																<a (click)="GoToProDetail(dta?.id)">\n																	<h6 class="producttitle font-weight-bold m-1">{{dta?.title}}</h6>\n																</a>\n																<div *ngIf="dta?.subtitle != null && dta?.subtitle != \'\'" class="breadcrumblink_div ml-1">\n																	{{dta?.subtitle}}\n																</div>\n																<span class="ratings">\n																	<div class="empty-stars"></div> \n																	<div class="full-stars" style="width:0%" *ngIf="dta?.product_avg == 0"></div>\n																	<div class="full-stars" style="width:20%" *ngIf="dta?.product_avg == 1"></div>\n																	<div class="full-stars" style="width:40%" *ngIf="dta?.product_avg == 2"></div>\n																	<div class="full-stars" style="width:60%" *ngIf="dta?.product_avg == 3"></div>\n																	<div class="full-stars" style="width:80%" *ngIf="dta?.product_avg == 4"></div>\n																	<div class="full-stars" style="width:100%" *ngIf="dta?.product_avg == 5"></div>\n																</span>\n																<table class="table breadcrumblink_div">\n																	<tbody>\n																		<tr>\n																			<td class="price w-50">{{ dta?.price - (dta?.price*dta?.discount) / 100 }} AED</td>\n																			<td class="w-50" *ngIf="dta?.product_address != null">From {{dta?.product_address}}</td>\n																		</tr>\n																		<tr>\n																			<td *ngIf="dta?.selling_type ==\'Fixed price\' && dta?.discount != 0">Was: <span class="dollarcancle"> {{dta?.price}} AED</span></td>\n																		</tr>\n																		<tr>\n																			<td>Free shipping</td>\n																		</tr>\n																		<tr>\n																			<td *ngIf="dta?.quantity > 10">{{dta?.quantity}} left!</td>\n																			<td class="sold-item" *ngIf="dta?.quantity <= 10 && dta?.quantity >= 1">Only {{dta?.quantity}} left!</td>\n																			<td class="sold-item" *ngIf="dta?.quantity <= 0">Not available!</td>\n																		</tr>\n																		<tr>\n																			<td *ngIf="dta?.make_offer == 1">Best Offer</td>\n																		</tr>\n																		<tr>\n																			<td>Buy It Now</td>\n																		</tr>\n																		<tr>\n																			<td *ngIf="dta?.time == \'Started\'" [ngClass]="{\'text-danger\': dta?.endsoon == \'0\'}">Time left: {{dta?.days_left | removeplusSign:dta?.days_left}}</td>\n																		</tr>\n																	</tbody>\n																</table>\n															</div>\n														</div>\n													</div>\n												</ng-template>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n							<ng-template #nodatafnd>\n								<div class="gridviewlistview ml-0 mr-0 p-3 mt-3">\n									<div class="row">\n										<span class="error_span">Item not available!</span>\n									</div>\n								</div>\n							</ng-template>\n						</div>\n						</ng-template>\n					</div>\n				</div>\n			</div>\n		</div>\n		<footer-page></footer-page>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/category/sub-category/sub-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SubCategoryPage);
    return SubCategoryPage;
}());

//# sourceMappingURL=sub-category.js.map

/***/ })

});
//# sourceMappingURL=6.js.map