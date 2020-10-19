webpackJsonp([10],{

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPageModule", function() { return AddProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_product__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_geoautocomplete__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddProductPageModule = /** @class */ (function () {
    function AddProductPageModule() {
    }
    AddProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_product__["a" /* AddProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_product__["a" /* AddProductPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng4_geoautocomplete__["a" /* Ng4GeoautocompleteModule */],
            ]
        })
    ], AddProductPageModule);
    return AddProductPageModule;
}());

//# sourceMappingURL=add-product.module.js.map

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

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
var CKButtonDirective = /** @class */ (function () {
    function CKButtonDirective() {
        this.click = new core_1.EventEmitter();
    }
    CKButtonDirective.prototype.initialize = function (editor) {
        var _this = this;
        editor.instance.addCommand(this.command, {
            exec: function (evt) {
                _this.click.emit(evt);
            },
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon,
        });
    };
    CKButtonDirective.prototype.ngOnInit = function () {
        if (!this.name)
            throw new Error('Attribute "name" is required on <ckbutton>');
        if (!this.command)
            throw new Error('Attribute "command" is required on <ckbutton>');
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKButtonDirective.prototype, "click", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "command", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "toolbar", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "icon", void 0);
    CKButtonDirective = __decorate([
        core_1.Directive({
            selector: 'ckbutton',
        })
    ], CKButtonDirective);
    return CKButtonDirective;
}());
exports.CKButtonDirective = CKButtonDirective;
//# sourceMappingURL=ckbutton.directive.js.map

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ckbutton_directive_1 = __webpack_require__(772);
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
var CKGroupDirective = /** @class */ (function () {
    function CKGroupDirective() {
    }
    CKGroupDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach(function (button) { return (button.toolbar = _this.name); });
    };
    CKGroupDirective.prototype.initialize = function (editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach(function (button) {
            button.initialize(editor);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKGroupDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CKGroupDirective.prototype, "previous", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKGroupDirective.prototype, "subgroupOf", void 0);
    __decorate([
        core_1.ContentChildren(ckbutton_directive_1.CKButtonDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKGroupDirective.prototype, "toolbarButtons", void 0);
    CKGroupDirective = __decorate([
        core_1.Directive({
            selector: 'ckgroup',
        })
    ], CKGroupDirective);
    return CKGroupDirective;
}());
exports.CKGroupDirective = CKGroupDirective;
//# sourceMappingURL=ckgroup.directive.js.map

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(21);
var ckbutton_directive_1 = __webpack_require__(772);
var ckgroup_directive_1 = __webpack_require__(773);
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
var CKEditorComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function CKEditorComponent(zone) {
        this.zone = zone;
        this.change = new core_1.EventEmitter();
        this.editorChange = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this.contentDom = new core_1.EventEmitter();
        this.fileUploadRequest = new core_1.EventEmitter();
        this.fileUploadResponse = new core_1.EventEmitter();
        this.paste = new core_1.EventEmitter();
        this.drop = new core_1.EventEmitter();
        this._value = '';
    }
    CKEditorComponent_1 = CKEditorComponent;
    Object.defineProperty(CKEditorComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    CKEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
        }
    };
    /**
     * On component destroy
     */
    CKEditorComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                _this.instance.removeAllListeners();
                CKEDITOR.instances[_this.instance.name].destroy();
                _this.instance.destroy();
                _this.instance = null;
            });
        }
    };
    /**
     * On component view init
     */
    CKEditorComponent.prototype.ngAfterViewInit = function () {
        this.ckeditorInit(this.config || {});
    };
    /**
     * On component view checked
     */
    CKEditorComponent.prototype.ngAfterViewChecked = function () {
        this.ckeditorInit(this.config || {});
    };
    /**
     * Value update process
     */
    CKEditorComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * CKEditor init
     */
    CKEditorComponent.prototype.ckeditorInit = function (config) {
        var _this = this;
        if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        else {
            // Check textarea exists
            if (this.instance || !this.documentContains(this.host.nativeElement)) {
                return;
            }
            if (this.readonly) {
                config.readOnly = this.readonly;
            }
            // CKEditor replace textarea
            this.instance = CKEDITOR.replace(this.host.nativeElement, config);
            // Set initial value
            this.instance.setData(this.value);
            // listen for instanceReady event
            this.instance.on('instanceReady', function (evt) {
                // if value has changed while instance loading
                // update instance with current component value
                if (_this.instance.getData() !== _this.value) {
                    _this.instance.setData(_this.value);
                }
                // send the evt to the EventEmitter
                _this.ready.emit(evt);
            });
            // CKEditor change event
            this.instance.on('change', function (evt) {
                _this.onTouched();
                var value = _this.instance.getData();
                if (_this.value !== value) {
                    // Debounce update
                    if (_this.debounce) {
                        if (_this.debounceTimeout)
                            clearTimeout(_this.debounceTimeout);
                        _this.debounceTimeout = setTimeout(function () {
                            _this.updateValue(value);
                            _this.debounceTimeout = null;
                        }, parseInt(_this.debounce));
                        // Live update
                    }
                    else {
                        _this.updateValue(value);
                    }
                }
                // Original ckeditor event dispatch
                _this.editorChange.emit(evt);
            });
            // CKEditor blur event
            this.instance.on('blur', function (evt) {
                _this.blur.emit(evt);
            });
            // CKEditor focus event
            this.instance.on('focus', function (evt) {
                _this.focus.emit(evt);
            });
            // CKEditor contentDom event
            this.instance.on('contentDom', function (evt) {
                _this.contentDom.emit(evt);
            });
            // CKEditor fileUploadRequest event
            this.instance.on('fileUploadRequest', function (evt) {
                _this.fileUploadRequest.emit(evt);
            });
            // CKEditor fileUploadResponse event
            this.instance.on('fileUploadResponse', function (evt) {
                _this.fileUploadResponse.emit(evt);
            });
            // CKEditor paste event
            this.instance.on('paste', function (evt) {
                _this.paste.emit(evt);
            });
            // CKEditor drop event
            this.instance.on('drop', function (evt) {
                _this.drop.emit(evt);
            });
            // Add Toolbar Groups to Editor. This will also add Buttons within groups.
            this.toolbarGroups.forEach(function (group) {
                group.initialize(_this);
            });
            // Add Toolbar Buttons to Editor.
            this.toolbarButtons.forEach(function (button) {
                button.initialize(_this);
            });
        }
    };
    /**
     * Implements ControlValueAccessor
     */
    CKEditorComponent.prototype.writeValue = function (value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    };
    CKEditorComponent.prototype.onChange = function (_) { };
    CKEditorComponent.prototype.onTouched = function () { };
    CKEditorComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CKEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CKEditorComponent.prototype.documentContains = function (node) {
        return document.contains ? document.contains(node) : document.body.contains(node);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CKEditorComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKEditorComponent.prototype, "debounce", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "editorChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "ready", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "blur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "focus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "contentDom", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "fileUploadRequest", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "fileUploadResponse", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "paste", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "drop", void 0);
    __decorate([
        core_1.ViewChild('host'),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "host", void 0);
    __decorate([
        core_1.ContentChildren(ckbutton_directive_1.CKButtonDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKEditorComponent.prototype, "toolbarButtons", void 0);
    __decorate([
        core_1.ContentChildren(ckgroup_directive_1.CKGroupDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKEditorComponent.prototype, "toolbarGroups", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CKEditorComponent.prototype, "value", null);
    CKEditorComponent = CKEditorComponent_1 = __decorate([
        core_1.Component({
            selector: 'ckeditor',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return CKEditorComponent_1; }),
                    multi: true,
                },
            ],
            template: "<textarea #host></textarea>",
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], CKEditorComponent);
    return CKEditorComponent;
    var CKEditorComponent_1;
}());
exports.CKEditorComponent = CKEditorComponent;
//# sourceMappingURL=ckeditor.component.js.map

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ckeditor_module_1 = __webpack_require__(776);
exports.CKEditorModule = ckeditor_module_1.CKEditorModule;
var ckeditor_component_1 = __webpack_require__(774);
exports.CKEditorComponent = ckeditor_component_1.CKEditorComponent;
var ckbutton_directive_1 = __webpack_require__(772);
exports.CKButtonDirective = ckbutton_directive_1.CKButtonDirective;
var ckgroup_directive_1 = __webpack_require__(773);
exports.CKGroupDirective = ckgroup_directive_1.CKGroupDirective;
//# sourceMappingURL=ng2-ckeditor.js.map

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(29);
var ckeditor_component_1 = __webpack_require__(774);
var ckbutton_directive_1 = __webpack_require__(772);
var ckgroup_directive_1 = __webpack_require__(773);
/**
 * CKEditorModule
 */
var CKEditorModule = /** @class */ (function () {
    function CKEditorModule() {
    }
    CKEditorModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [ckeditor_component_1.CKEditorComponent, ckbutton_directive_1.CKButtonDirective, ckgroup_directive_1.CKGroupDirective],
            exports: [ckeditor_component_1.CKEditorComponent, ckbutton_directive_1.CKButtonDirective, ckgroup_directive_1.CKGroupDirective],
        })
    ], CKEditorModule);
    return CKEditorModule;
}());
exports.CKEditorModule = CKEditorModule;
//# sourceMappingURL=ckeditor.module.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_photo_photo__ = __webpack_require__(361);
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







var AddProductPage = /** @class */ (function () {
    function AddProductPage(googleanalytics, alertCtrl, loading, _PHOTO, plt, fb, infoService, navCtrl) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this._PHOTO = _PHOTO;
        this.plt = plt;
        this.fb = fb;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.sub_catText = "Not";
        this.ifproductAdded = false;
        this.retrievedObject = localStorage.getItem('userInfo');
        this.verificationResponsebusiness = null;
        this.add_product_val = {
            id: '',
            user_id: '',
            title: '',
            subtitle: '',
            category_id: '',
            isbn: '0',
            settype_id: 0,
            brand_id: 0,
            p_condition: '',
            daily_deal: '',
            condition_description: '',
            selling_type: '',
            duration: 0,
            quantity: 0,
            payment_opt: '',
            paypal_email: '',
            min_price: 0,
            price: 0,
            max_price: 0,
            return_opt: '',
            product_address: '',
            warrenty: '',
            shipment_type: '',
            delivery_days: '',
            specification: [],
            ship_to: '',
            photos: [],
            secondary_cat_ids: [],
            make_offer: 0,
            seller_fee: 0,
            return_policy: '',
            deals_days: 0,
            season_deal: 'No',
            fees_details: {},
            changes: {},
            discount: 0,
            renew: '',
            removeImages: [],
            status: 8,
            schedule_date: '',
            from_product: '',
            reset_photo: false,
            mobile_device: false,
            season_day: 0,
            val1: '',
            sq: {}
        };
        this.otherPayment = false;
        this.subTotalFees = 0;
        this.daiydealsFees = 0;
        this.sellseasonFees = 0;
        this.categoryFees = 0;
        this.showYear = 0;
        this.makeoffertextbox = false;
        this.showsellDealDays = false;
        this.setCustomspecification = {
            Color: '',
            Size: ''
        };
        this.userSettings = {
            showCurrentLocation: true,
            showSearchButton: false,
            useGoogleGeoApi: true,
            locationIconUrl: "assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
            geoCountryRestriction: ['ae', 'kw', 'om', 'qa', 'sa']
        };
        this.size_customQuantity = [];
        this.color_customQuantity = '';
        this.config = {
            removeButtons: 'ImageButton,Flash,CreatePlaceholder,HorizontalRule,Smiley,PageBreak,Iframe,InsertPre,Form,Checkbox,Radio,TextField,Textarea,Select,Button,HiddenField,NewPage,Templates,Find,Save,Print,Replace,SpellChecker,Preview,About,Maximize,ShowBlocks'
        };
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = JSON.parse(this.retrievedObject);
        }
        this.loginForm = fb.group({
            'Item_Description': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(6)])],
        });
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('Add Product');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
            this.userSettings.showCurrentLocation = false;
        }
    }
    AddProductPage.prototype.ionViewWillEnter = function () {
        $('body').removeClass().addClass('AddProduct body');
        $(document).prop('title', 'Add your listing');
        $(".zoomContainer").remove();
        $(".searchanythingform").trigger("reset");
        this.showYear = new Date();
        var d = new Date();
        var end = new Date(d.getTime() + 20 * 24 * 60 * 60 * 1000);
        this.arr = new Array();
        var dt = new Date(d.getTime() + 1 * 24 * 60 * 60 * 1000);
        while (dt <= end) {
            this.arr.push(new Date(dt));
            dt.setDate(dt.getDate() + 1);
        }
        /*Image Widget crop Start*/
        var self = this;
        $('[role=uploadcare-uploader]').each(function () {
            $('.uploadcare--tab__title').text('Edit this image?');
            var input = $(this);
            if (!input.data('minSize') && !input.data('maxSize')) {
                return;
            }
            var widget = uploadcare.Widget(input);
            widget.validators.push(self.fileSizeLimit(input.data('minSize'), input.data('maxSize')));
        });
        //Display Images
        var singleWidget = uploadcare.MultipleWidget('[role=uploadcare-uploader]');
        singleWidget.onUploadComplete(function (info) {
            $('.image-preview-single').empty();
            self.add_product_val.photos.length = 0;
            var count_img = 0;
            for (var img = 0; img < info.count; img++) {
                self.convertFileToDataURLviaFileReader(info.cdnUrl + 'nth/' + img + '/', function (fileEntry) {
                    count_img++;
                    $('#image_preview').append("<div class='col-lg-2 col-sm-6 col-md-3 col-6 p-2'><img class='img-fluid add-product-img' src='" + fileEntry + "'><input type='hidden' value='" + fileEntry + "' class='hidde_val'></div>");
                    self.add_product_val.photos.push(fileEntry);
                    if (info.count == count_img) {
                        singleWidget.value(info);
                        setTimeout(function () {
                            self.autoSaveProduct('photoupload');
                        }, 500);
                    }
                });
            }
            $(function () {
                $("#image_preview").sortable();
                $("#image_preview").disableSelection();
            });
        });
        /* Image Widget crop End */
        
        
         /*Image Widget crop Start*/
//        var self1 = this;
//        $('[role=uploadcare-uploader-color]').each(function () {
//            $('.uploadcare--tab__title').text('Edit this image?');
//            var input = $(this);
//            if (!input.data('minSize') && !input.data('maxSize')) {
//                return;
//            }
//            var widget = uploadcare.Widget(input);
//            widget.validators.push(self1.fileSizeLimit(input.data('minSize'), input.data('maxSize')));
//        });
//        //Display Images
//        var singleWidget = uploadcare.MultipleWidget('[role=uploadcare-uploader-color]');
//        singleWidget.onUploadComplete(function (info) {
//            $('.image-preview-single11').empty();
//            self1.add_product_val.colorphotos.length = 0;
//            var count_img = 0;
//            for (var img = 0; img < info.count; img++) {
//                alert(info.cdnUrl + 'nth/' + img + '/');
//                self1.convertFileToDataURLviaFileReader(info.cdnUrl + 'nth/' + img + '/', function (fileEntry) {
//                    count_img++;
////                    $('#image_preview_color').append("<div class='col-lg-2 col-sm-6 col-md-3 col-6 p-2'><img class='img-fluid add-product-img' src='" + fileEntry + "'><input type='hidden' value='" + fileEntry + "' class='hidde_val'></div>");
//                    $('#variations').val(fileEntry);
//                    self1.add_product_val.colorphotos.push(fileEntry);
////                    if (info.count == count_img) {
////                        singleWidget.value(info);
////                        setTimeout(function () {
////                            self.autoSaveProduct('photoupload_color');
////                        }, 500);
////                    }
//                });
//            }
//            $(function () {
//                $("#image_preview_color").sortable();
//                $("#image_preview_color").disableSelection();
//            });
//        });
        /* Image Widget crop End */
        
    };
    AddProductPage.prototype.ngAfterViewInit = function () {
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
    AddProductPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        try {
            if (this.localItem == null) {
                this.navCtrl.push('LoginPage', {
                    id: 'login'
                });
            }
            else {
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/category/view-category', '', function (response) {
                    _this.show_category = response.categories;
                    _this.infoService.hideLoading();
                    _this.showFees();
                }, function (error) {
                    console.log(error);
                });
            }
        }
        catch (Error) {
            console.log(Error);
        }
    };
    //Convert To Base64
    AddProductPage.prototype.convertFileToDataURLviaFileReader = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
        console.log(url);
    };
    /*Image Widget crop Check File Size */
    AddProductPage.prototype.fileSizeLimit = function (min, max) {
        return function (fileInfo) {
            if (fileInfo.size === null) {
                return;
            }
            if (min && fileInfo.size < min) {
                throw new Error("fileMinimalSize");
            }
            if (max && fileInfo.size > max) {
                throw new Error("fileMaximumSize");
            }
        };
    };
    //For Mobile
    AddProductPage.prototype.selectImage = function () {
        var _this = this;
        this._PHOTO.selectImage().then(function (data) {
            var self = _this;
            if ($('.hidde_val').length < 11) {
                $('#image_preview').append("<div class='col-lg-3 col-sm-6 col-md-4 col-sm-12 col-8 p-2'><span class='close'>&times;</span><img class='img-fluid add-product-img' src='" + data + "'><input type='hidden' value='" + data + "' class='hidde_val'></div>");
                self.add_product_val.photos.push(data);
                setTimeout(function () {
                    self.autoSaveProduct('photoupload');
                }, 1000);
                $('.close').on('click', function () {
                    $(this).parent().remove();
                });
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    AddProductPage.prototype.autoCompleteCallback1 = function (selectedData) {
        if (selectedData.response == true) {
            this.add_product_val.product_address = selectedData.data.description;
            this.autoSaveProduct('productAddress');
        }
        else {
            this.add_product_val.product_address = '';
            this.autoSaveProduct('productAddress');
        }
    };
    AddProductPage.prototype.showFees = function () {
        var _this = this;
        var seller_fees = {
            user_id: this.localItem.id
        };
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/setting/seller-fees', seller_fees, function (response) {
            _this.show_feesData = response.setting;
            _this.featureitem = Object.entries(response.setting.feature_item);
            _this.seasondealfees = Object.entries(response.setting.season_deal_fee);
            _this.checkinsertaionfees = response.setting.data.insertion_fee;
            _this.checkbuyitnowfees = response.setting.data.buyitnow_fee;
            var self = _this;
            setTimeout(function () {
                self.calculateFees();
            }, 3000);
        }, function (error) {
            console.log(error);
        });
    };
    
    AddProductPage.prototype.showDailyfees = function (val) {
        if (val == "" || val == 'No' || val == 'Yes')
            this.daiydealsFees = 0;
        else
            this.daiydealsFees = parseFloat(val);
        this.calculateFees();
        this.autoSaveProduct('Featured Deals');
    };
    AddProductPage.prototype.showsellDayfees = function (val) {
        if (val == "" || val == null)
            this.sellseasonFees = 0;
        else
            this.sellseasonFees = parseFloat(val);
        this.calculateFees();
        this.autoSaveProduct('Season Deals');
    };
    AddProductPage.prototype.showsubtotalFees = function () {
        if ($('#suntitle_text').val() == '')
            this.subTotalFees = 0;
        else
            this.subTotalFees = parseFloat(this.show_feesData.data.subtitle_fee);
        this.calculateFees();
        this.autoSaveProduct('subTitle');
    };
    AddProductPage.prototype.showcategoryFees = function () {
        var price_cal = parseFloat($('#format_price').val());
        var singlecat = parseFloat($('#subcategories_select').children(":selected").attr("id"));
        if (price_cal > 0.01 && price_cal <= 3.75) {
            this.show_feesData.data.insertion_fee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + 0;
        }
        else if (price_cal > 3.75 && price_cal <= 35) {
            this.show_feesData.data.insertion_fee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.second);
        }
        else if (price_cal > 35 && price_cal <= 90) {
            this.show_feesData.data.insertion_fee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.third);
        }
        else if (price_cal > 90 && price_cal <= 180) {
            this.show_feesData.data.insertion_fee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.four);
        }
        else if (price_cal > 180 && price_cal <= 750) {
            this.show_feesData.data.insertion_fee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.five);
        }
        else if (price_cal > 750) {
            this.show_feesData.data.insertion_fee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.six);
        }
        if (isNaN(singlecat) && isNaN(price_cal))
            this.categoryFees = 0;
        else if (isNaN(singlecat))
            this.categoryFees = 0;
        else if (isNaN(price_cal))
            this.categoryFees = 0;
        else {
            this.autoSaveProduct('price');
            var total_price = ((singlecat * price_cal) / 100);
            this.categoryFees = total_price;
        }
        this.calculateFees();
    };
    AddProductPage.prototype.calculateFees = function () {
        var total;
        var insertionfee = parseFloat(this.show_feesData.data.insertion_fee);
        total = insertionfee + this.daiydealsFees + this.subTotalFees + this.categoryFees + this.sellseasonFees;
        this.add_product_val.seller_fee = total;
    };
    AddProductPage.prototype.disableText = function () {
        if ($('.paypal-checkbox:last#paypal_check').prop('checked') == true) {
            $('.receiving-payment-email:last#paypal_text').prop("disabled", false);
            $('.showPaypaldiv:last').removeClass('d-none');
        }
        else {
            $('.receiving-payment-email:last#paypal_text').prop("disabled", true);
            $('.showPaypaldiv:last').addClass('d-none');
        }
    };
    AddProductPage.prototype.onBlur = function (val) {
        if ($('#Item_Description').val().length <= 0)
            return false;
        this.autoSaveProduct('itemDesc');
    };
    AddProductPage.prototype.addProduct = function () {
        var _this = this;
        try {
            
            this.add_product_val.user_id = this.localItem.id;
            if (this.localItem.role == "buyer") {
                $('#buyerError').removeClass('hide');
            }
            else {
                $('#buyerError').addClass('hide');
                if ($('.hidde_val').length <= 0) {
                    $('#dangeralert').removeClass('hide');
                }
                else {
                    $('#dangeralert').addClass('hide');
                    var fields = $("#Item_specifics").serializeArray();
                    var str_array = {}, color = [], size = [], functions = [], finish = [], shade_color = [];
                    for (var i = 0; i < fields.length; i++) {
                        if (fields[i].name == 'Color')
                            color.push(fields[i].value);
                        if (fields[i].name == 'Size')
                            size.push(fields[i].value);
                        if (fields[i].name == 'Functions')
                            functions.push(fields[i].value);
                        if (fields[i].name == 'Finish')
                            finish.push(fields[i].value);
                        if (fields[i].name == 'Shade_Color')
                            shade_color.push(fields[i].value);
                        str_array[fields[i].name] = [fields[i].value];
                    }
                    if (color.length >= 0) {
                        str_array['Color'] = color;
                    }
                    if (size.length >= 0) {
                        str_array['Size'] = size;
                    }
                    if (functions.length >= 0) {
                        str_array['Functions'] = functions;
                    }
                    if (finish.length >= 0) {
                        str_array['Finish'] = finish;
                    }
                    if (shade_color.length > 0) {
                        str_array['Shade_Color'] = shade_color;
                    }
                    this.add_product_val.title = $('#main_title_text').val();
                    this.add_product_val.subtitle = $('#suntitle_text').val();
                    this.add_product_val.category_id = $('#subcategories_select').val();
                    this.add_product_val.p_condition = $('#condition_select').val();
                    if ($('#user_time_zone').val() == '') {
                        this.add_product_val.isbn = '0';
                    }
                    else {
                        this.add_product_val.isbn = $('#upc_isbn').val();
                    }
                    if ($('input[name="payment_opt"]:checked').length == 0) {
                        $('.Payment_Opt').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.Payment_Opt').addClass('d-none');
                    }
                    if ($('input[name="shipment_type"]:checked').length == 0) {
                        $('.ShipmentSelectalert').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.ShipmentSelectalert').addClass('d-none');
                    }
                    if ($('#daily_deal').val() == 'Yes') {
                        var replaceday = 0;
                        var getnumber = 0;
                        if ($('#Format').val() == "Auction style") {
                            if ($("#daily_dealDay option:selected").text() == "1 Day") {
                                replaceday = $("#daily_dealDay option:selected").text();
                                getnumber = replaceday.replace('Day', '');
                                if (parseInt(getnumber) > parseInt($('#Duration').val())) {
                                    $('.duration_future').removeClass('d-none');
                                    return;
                                }
                                else {
                                    $('.duration_future').addClass('d-none');
                                }
                            }
                            else {
                                replaceday = $("#daily_dealDay option:selected").text();
                                getnumber = replaceday.replace('Days', '');
                                if (parseInt(getnumber) > parseInt($('#Duration').val())) {
                                    $('.duration_future').removeClass('d-none');
                                    return;
                                }
                                else {
                                    $('.duration_future').addClass('d-none');
                                }
                            }
                        }
                        else {
                            if ($("#daily_dealDay option:selected").text() == "1 Day") {
                                replaceday = $("#daily_dealDay option:selected").text();
                                getnumber = replaceday.replace('Day', '');
                                if (parseInt(getnumber) > parseInt($('#Duration1').val())) {
                                    $('.duration_future').removeClass('d-none');
                                    return;
                                }
                                else {
                                    $('.duration_future').addClass('d-none');
                                }
                            }
                            else {
                                replaceday = $("#daily_dealDay option:selected").text();
                                getnumber = replaceday.replace('Days', '');
                                if (parseInt(getnumber) > parseInt($('#Duration1').val())) {
                                    $('.duration_future').removeClass('d-none');
                                    return;
                                }
                                else {
                                    $('.duration_future').addClass('d-none');
                                }
                            }
                        }
                    }
                    if ($('#Format').val() == "Auction style") {
                        if (parseInt($('#format_price').val()) < parseInt($('#min_price').val())) {
                            $('.productMSG_buyitprice').removeClass('d-none');
                            return;
                        }
                        else {
                            $('.productMSG_buyitprice').addClass('d-none');
                        }
                    }
                    var dt = new Date();
                    var checkTime;
                    if ($('#Format').val() == "Auction style") {
                        checkTime = $('.selectOptions#startDate').val() + " " + $('.selectOptions#startTime').val() + ":" + $('.selectOptions#stTimeMinute').val() + ":" + "00";
                        if ($('input[type=radio][name=schldlisting]:checked').val() == 'Yes') {
                            if (new Date(checkTime) > dt) {
                                $('.Scheduleonstart').addClass('d-none');
                            }
                            else {
                                $('.Scheduleonstart').removeClass('d-none');
                                return;
                            }
                        }
                    }
                    else {
                        checkTime = $('.selectOptions#startDate_fixed').val() + " " + $('.selectOptions#startTime_fixed').val() + ":" + $('.selectOptions#stTimeMinute_fixed').val() + ":" + "00";
                        if ($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'Yes') {
                            if (new Date(checkTime) > dt) {
                                $('.Scheduleonstart').addClass('d-none');
                            }
                            else {
                                $('.Scheduleonstart').removeClass('d-none');
                                return;
                            }
                        }
                    }
                    if (this.add_product_val.product_address == '' && $('#search_places').val() == '') {
                        $('.product_address').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.product_address').addClass('d-none');
                    }
                    if ($('#discountval').val() == "") {
                        this.add_product_val.discount = 0;
                    }
                    else {
                        this.add_product_val.discount = $('#discountval').val();
                    }
                    this.add_product_val.daily_deal = $('#daily_deal').val();
                    if ($('#daily_deal').val() == 'Yes')
                        this.add_product_val.deals_days = $('#daily_dealDay').children(":selected").attr("id");
                    if ($('#Season_deals').val() == 'Yes')
                        this.add_product_val.season_day = $('#Season_dealsDay').children(":selected").attr("id");
                    this.add_product_val.condition_description = $('#comment').val();
                    if ($('#Format').val() == "Auction style") {
                        this.add_product_val.min_price = $('#min_price').val();
                        if ($('#format_price').val() != '')
                            this.add_product_val.price = $('#format_price').val();
                        if ($('#max_price').val() != '')
                            this.add_product_val.max_price = $('#max_price').val();
                        if ($('#Duration').val() != '')
                            this.add_product_val.duration = $('#Duration').val();
                        this.add_product_val.quantity = $('#dis_id').val();
                        this.add_product_val.renew = 'No';
                    }
                    else if ($('#Format').val() == "Fixed price") {
                        this.add_product_val.price = $('#format_price').val();
                        this.add_product_val.quantity = $('#quantity').val();
                        this.add_product_val.duration = $('#Duration1').val();
                        this.add_product_val.renew = $('#Duration_selection').val();
                        if ($('#BestOffer').prop('checked') == true) {
                            this.add_product_val.make_offer = 1;
                            if ($('#minprice').val() != '')
                                this.add_product_val.min_price = $('#minprice').val();
                            if ($('#maxprice').val() != '')
                                this.add_product_val.max_price = $('#maxprice').val();
                        }
                    }
                    this.add_product_val.selling_type = $('#Format').val();
                    if ($('#paypal_check').prop('checked') == true) {
                        this.add_product_val.paypal_email = $('#paypal_text').val();
                    }
                    if ($('#return-accepted').prop('checked') == true) {
                        this.add_product_val.return_opt = $('#itemReturnedWithin').val();
                        this.add_product_val.return_policy = $('#returnpolicy').val();
                        this.add_product_val.ship_to = $('#returnby').val();
                    }
                    else {
                        this.add_product_val.return_opt = 'No';
                        this.add_product_val.ship_to = '';
                    }
                    this.add_product_val.product_address = $('#area_community').val() + ' , ' + $('#search_places').val();
                    this.add_product_val.delivery_days = $('#delivery_days').val();
                    this.add_product_val.specification.length = 0;
                    this.add_product_val.specification.push(str_array);
                    this.add_product_val.season_deal = $('#Season_deals').val();
                    var val_payment = [];
                    $('input[type=checkbox][name=payment_opt]:checked').each(function (i) {
                        val_payment[i] = $(this).val();
                    });
                    var val_shipment = [];
                    $('input[type=checkbox][name=shipment_type]:checked').each(function (i, field) {
                        if ($(this).val() == "Other")
                            val_shipment[i] = $('#OtherShipment').val();
                        else
                            val_shipment[i] = $(this).val();
                    });
                    this.add_product_val.payment_opt = val_payment.join(",");
                    this.add_product_val.shipment_type = val_shipment.join(",");
                    if ($('#categories_second').val() != '')
                        this.add_product_val.secondary_cat_ids = $('#categories_second').val();
                    else
                        this.add_product_val.secondary_cat_ids.length = 0;
                    var fees_details1 = {};
                    fees_details1['categories_fees'] = [this.categoryFees];
                    fees_details1['insertion_fees'] = [this.show_feesData.data.insertion_fee];
                    fees_details1['buyitnow_fees'] = [this.show_feesData.data.buyitnow_fee];
                    var Featured_item = [];
                    if ($('#daily_deal').val() == 'Yes') {
                        Featured_item.push($('#daily_dealDay option:selected').text());
                        Featured_item.push(this.daiydealsFees);
                    }
                    else {
                        Featured_item.push(0);
                        Featured_item.push(0);
                    }
                    var seasondeal_dys = [];
                    if ($('#Season_deals').val() == 'Yes') {
                        seasondeal_dys.push($('#Season_dealsDay option:selected').text());
                        seasondeal_dys.push(this.sellseasonFees);
                    }
                    else {
                        seasondeal_dys.push(0);
                        seasondeal_dys.push(0);
                    }
                    fees_details1['featured_fees'] = Featured_item;
                    fees_details1['season_fees'] = seasondeal_dys;
                    this.add_product_val.fees_details = fees_details1;
                    if ($('#Format').val() == "Auction style") {
                        if ($('input[type=radio][name=schldlisting]:checked').val() == 'No') {
                            this.add_product_val.schedule_date = '';
                        }
                        else {
                            var getStartDate = $('.selectOptions#startDate').val();
                            var getStartTime = $('.selectOptions#startTime').val();
                            var getStartMinute = $('.selectOptions#stTimeMinute').val();
                            this.add_product_val.schedule_date = getStartDate + ' ' + getStartTime + ':' + getStartMinute + ':' + '30';
                        }
                    }
                    else {
                        if ($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'No') {
                            this.add_product_val.schedule_date = '';
                        }
                        else {
                            var getStartDate_fixed = $('.selectOptions#startDate_fixed').val();
                            var getStartTime_fixed = $('.selectOptions#startTime_fixed').val();
                            var getStartMinute_fixed = $('.selectOptions#stTimeMinute_fixed').val();
                            this.add_product_val.schedule_date = getStartDate_fixed + ' ' + getStartTime_fixed + ':' + getStartMinute_fixed + ':' + '30';
                        }
                    }
                    if (size.length > 0) {
                        if ($('#Format').val() != "Auction style") {
                            var taskObj_1 = {};
                            var taskArray_1 = [];
                            var tasktotalCount_1 = 0;
                            $("input[name=custom_sizeQun]").each(function () {
                                if ($(this).val() != '') {
                                    taskObj_1[$(this).attr('id')] = $(this).val();
                                    taskArray_1.push($(this).val());
                                    tasktotalCount_1 += parseInt($(this).val());
                                }
                            });
                            this.add_product_val.sq = taskObj_1;
                            if (this.size_customQuantity.length != taskArray_1.length) {
                                $('.productMSG_quantysize').removeClass('d-none');
                                return false;
                            }
                            else {
                                $('.productMSG_quantysize').addClass('d-none');
                            }
//                            if (this.add_product_val.quantity != tasktotalCount_1) {
//                                $('.productMSG_quantitygreater').html('You enter quantity is ' + '&nbsp;' + this.add_product_val.quantity + ' ' + 'but actual Custom Item specifications quantity total is' + ' ' + tasktotalCount_1 + '.Please update quantity');
//                                return false;
//                            }
//                            else {
//                                $('.productMSG_quantitygreater').html('');
//                            }
                        }
                    }
                    this.add_product_val.status = 2;
                    this.add_product_val.from_product = 'ADD_PRODUCT';
                    if ($('#paypal_check').prop('checked') == true) {
                        if ($('.receiving-payment-email:last#paypal_text').val() == this.localItem.payment_email) {
                            if ($('#Format').val() == "Auction style") {
                                if (this.add_product_val.max_price <= parseInt($('#min_price').val()) && this.add_product_val.max_price != 0) {
                                    $('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
                                }
                                else {
                                    $('.Maxprice:last#Maxprice').text('');
                                    this.infoService.showLoading();
                                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.add_product_val, function (response) {
                                        if (response.status == "success") {
                                            _this.ifproductAdded = true;
                                            _this.infoService.hideLoading();
                                        }
                                        else {
                                            _this.infoService.hideLoading();
                                            $('.addProduct-errorMessage').removeClass('d-none');
                                            $('.addProduct-errorMessage').text(response.msg);
                                        }
                                    }, function (error) {
                                        console.log(error);
                                        $('.addProduct-errorMessage').removeClass('d-none');
                                        $('.addProduct-errorMessage').text(error);
                                        _this.infoService.hideLoading();
                                    });
                                }
                            }
                            else {
                                if ($('#BestOffer').prop('checked') == true) {
                                    if (this.add_product_val.max_price <= parseInt($('#minprice').val()) && this.add_product_val.max_price != 0) {
                                        $('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
                                    }
                                    else {
                                        $('.Maxprice:last#Maxpriceoffer').text('');
                                        this.infoService.showLoading();
                                        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.add_product_val, function (response) {
                                            if (response.status == "success") {
                                                _this.ifproductAdded = true;
                                                _this.infoService.hideLoading();
                                            }
                                            else {
                                                _this.infoService.hideLoading();
                                                $('.addProduct-errorMessage').removeClass('d-none');
                                                $('.addProduct-errorMessage').text(response.msg);
                                            }
                                        }, function (error) {
                                            console.log(error);
                                            _this.infoService.hideLoading();
                                            $('.addProduct-errorMessage').removeClass('d-none');
                                            $('.addProduct-errorMessage').text(error);
                                        });
                                    }
                                }
                                else {
                                    $('.Maxprice:last#Maxprice').text('');
                                    this.infoService.showLoading();
                                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.add_product_val, function (response) {
                                        if (response.status == "success") {
                                            _this.ifproductAdded = true;
                                            _this.infoService.hideLoading();
                                        }
                                        else {
                                            _this.infoService.hideLoading();
                                            $('.addProduct-errorMessage').removeClass('d-none');
                                            $('.addProduct-errorMessage').text(response.msg);
                                        }
                                    }, function (error) {
                                        console.log(error);
                                        _this.infoService.hideLoading();
                                        $('.addProduct-errorMessage').removeClass('d-none');
                                        $('.addProduct-errorMessage').text(error);
                                    });
                                }
                            }
                        }
                        else if (this.verificationResponsebusiness == null || this.verificationResponsebusiness.responseEnvelope.ack == 'Failure') {
                        }
                        else {
                            if ($('#Format').val() == "Auction style") {
                                if (this.add_product_val.max_price <= parseInt($('#min_price').val()) && this.add_product_val.max_price != 0) {
                                    $('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
                                }
                                else {
                                    $('.Maxprice:last#Maxprice').text('');
                                    this.infoService.showLoading();
                                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.add_product_val, function (response) {
                                        if (response.status == "success") {
                                            _this.ifproductAdded = true;
                                            _this.infoService.hideLoading();
                                        }
                                        else {
                                            _this.infoService.hideLoading();
                                            $('.addProduct-errorMessage').removeClass('d-none');
                                            $('.addProduct-errorMessage').text(response.msg);
                                        }
                                    }, function (error) {
                                        console.log(error);
                                        _this.infoService.hideLoading();
                                        $('.addProduct-errorMessage').removeClass('d-none');
                                        $('.addProduct-errorMessage').text(error);
                                    });
                                }
                            }
                            else {
                                if ($('#BestOffer').prop('checked') == true) {
                                    if (this.add_product_val.max_price <= parseInt($('#minprice').val()) && this.add_product_val.max_price != 0) {
                                        $('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
                                    }
                                    else {
                                        $('.Maxprice:last#Maxpriceoffer').text('');
                                        this.infoService.showLoading();
                                        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.add_product_val, function (response) {
                                            if (response.status == "success") {
                                                _this.ifproductAdded = true;
                                                _this.infoService.hideLoading();
                                            }
                                            else {
                                                _this.infoService.hideLoading();
                                                $('.addProduct-errorMessage').removeClass('d-none');
                                                $('.addProduct-errorMessage').text(response.msg);
                                            }
                                        }, function (error) {
                                            console.log(error);
                                            _this.infoService.hideLoading();
                                            $('.addProduct-errorMessage').removeClass('d-none');
                                            $('.addProduct-errorMessage').text(error);
                                        });
                                    }
                                }
                                else {
                                    $('.Maxprice:last#Maxprice').text('');
                                    this.infoService.showLoading();
                                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.add_product_val, function (response) {
                                        if (response.status == "success") {
                                            _this.ifproductAdded = true;
                                            _this.infoService.hideLoading();
                                        }
                                        else {
                                            _this.infoService.hideLoading();
                                            $('.addProduct-errorMessage').removeClass('d-none');
                                            $('.addProduct-errorMessage').text(response.msg);
                                        }
                                    }, function (error) {
                                        console.log(error);
                                        _this.infoService.hideLoading();
                                        $('.addProduct-errorMessage').removeClass('d-none');
                                        $('.addProduct-errorMessage').text(error);
                                    });
                                }
                            }
                        }
                    }
                    else {
                        if ($('#Format').val() == "Auction style") {
                            if (this.add_product_val.max_price <= parseInt($('#min_price').val()) && this.add_product_val.max_price != 0) {
                                $('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
                            }
                            else {
                                $('.Maxprice:last#Maxprice').text('');
                                this.infoService.showLoading();
                                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.add_product_val, function (response) {
                                    if (response.status == "success") {
                                        _this.ifproductAdded = true;
                                        _this.infoService.hideLoading();
                                    }
                                    else {
                                        _this.infoService.hideLoading();
                                        $('.addProduct-errorMessage').removeClass('d-none');
                                        $('.addProduct-errorMessage').text(response.msg);
                                    }
                                }, function (error) {
                                    console.log(error);
                                    _this.infoService.hideLoading();
                                    $('.addProduct-errorMessage').removeClass('d-none');
                                    $('.addProduct-errorMessage').text(error);
                                });
                            }
                        }
                        else {
                            if ($('#BestOffer').prop('checked') == true) {
                                if (this.add_product_val.max_price <= parseInt($('#minprice').val()) && this.add_product_val.max_price != 0) {
                                    $('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
                                }
                                else {
                                    $('.Maxprice:last#Maxpriceoffer').text('');
                                    this.infoService.showLoading();
                                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.add_product_val, function (response) {
                                        if (response.status == "success") {
                                            _this.ifproductAdded = true;
                                            _this.infoService.hideLoading();
                                        }
                                        else {
                                            _this.infoService.hideLoading();
                                            $('.addProduct-errorMessage').removeClass('d-none');
                                            $('.addProduct-errorMessage').text(response.msg);
                                        }
                                    }, function (error) {
                                        console.log(error);
                                        _this.infoService.hideLoading();
                                        $('.addProduct-errorMessage').removeClass('d-none');
                                        $('.addProduct-errorMessage').text(error);
                                    });
                                }
                            }
                            else {
                                $('.Maxprice:last#Maxprice').text('');
                                this.infoService.showLoading();
                                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.add_product_val, function (response) {
                                    if (response.status == "success") {
                                        _this.ifproductAdded = true;
                                        _this.infoService.hideLoading();
                                    }
                                    else {
                                        _this.infoService.hideLoading();
                                        $('.addProduct-errorMessage').removeClass('d-none');
                                        $('.addProduct-errorMessage').text(response.msg);
                                    }
                                }, function (error) {
                                    console.log(error);
                                    _this.infoService.hideLoading();
                                    $('.addProduct-errorMessage').removeClass('d-none');
                                    $('.addProduct-errorMessage').text(error);
                                });
                            }
                        }
                    }
                }
            }
        }
        catch (Error) {
            console.log(Error);
            this.infoService.hideLoading();
        }
    };
    AddProductPage.prototype.closeDiv_Delete = function () {
        $('#dangeralert').addClass('hide');
    };
    AddProductPage.prototype.showSpec = function (val) {
        var _this = this;
        $('#categories_second option').show();
        $('#categories_second option[value="' + val + '"]').hide();
        try {
            var show_itemSpec = {
                category_id: val
            };
//            $('#variations').val(val);
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/view-specification', show_itemSpec, function (response) {
//                alert(response.specification.status);
                if (response.specification.data.length > 0 && response.specification.status == "success") {
                    _this.sub_catText = $("#subcategories_select option:selected").text();
                    _this.ItemSpecificationData = response.specification.data[0];
                    _this.setCustomspecification.Color = '';
                    _this.setCustomspecification.Size = '';
//                    alert(response.specification.data[0].specification.length);
                    for (var sp = 0; sp < response.specification.data[0].specification.length; sp++) {
                        if (response.specification.data[0].specification[sp].type == "3") {
                            if (response.specification.data[0].specification[sp].label == "Color") {
                                _this.setCustomspecification.Color = response.specification.data[0].specification[sp].value;
                            }
                            if (response.specification.data[0].specification[sp].label == "Size") {
                                _this.setCustomspecification.Size = response.specification.data[0].specification[sp].value;
                            }
                        }
                        
//                        alert(response.specification.data[0].specification[sp].label);
                        
                    }
                    _this.showcategoryFees();
                    _this.autoSaveProduct('primarycategory');
                }
                else {
                    _this.sub_catText = "Not";
                    _this.showcategoryFees();
                    _this.autoSaveProduct('primarycategory');
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    AddProductPage.prototype.other_Payment = function (val) {
        if (val == "shipment_type") {
            if ($('#Other').prop('checked') == true) {
                this.otherPayment = true;
            }
            else {
                this.otherPayment = false;
            }
        }
        else if (val == "BestOffer") {
            if ($('#BestOffer').prop('checked') == true) {
                this.makeoffertextbox = true;
            }
            else {
                this.makeoffertextbox = false;
            }
        }
    };
    AddProductPage.prototype.resetForm = function () {
        $('#image_preview').empty();
        document.getElementById("add-prosuct").reset();
        this.sub_catText = "Not";
        this.daiydealsFees = 0;
        this.subTotalFees = 0;
        this.categoryFees = 0;
        this.sellseasonFees = 0;
        this.add_product_val.seller_fee = 0.00;
        localStorage.removeItem('image');
        localStorage.removeItem('previeProduct');
        $('.hideRigthCircle:last').addClass('d-none');
    };
    AddProductPage.prototype.previewData = function () {
        this.add_product_val.user_id = this.localItem.id;
        var self = this;
        self.add_product_val.photos.length = 0;
        $('.hidde_val').each(function () {
            self.add_product_val.photos.push(this.value);
        });
        if (this.add_product_val.photos.length <= 0) {
            $('#dangeralert').removeClass('hide');
        }
        else {
            $('#dangeralert').addClass('hide');
            var fields = $("#Item_specifics").serializeArray();
            var str_array = {}, color = [], size = [], functions = [], finish = [], shade_color = [];
            for (var i = 0; i < fields.length; i++) {
                if (fields[i].name == 'Color')
                    color.push(fields[i].value);
                if (fields[i].name == 'Size')
                    size.push(fields[i].value);
                if (fields[i].name == 'Functions')
                    functions.push(fields[i].value);
                if (fields[i].name == 'Finish')
                    finish.push(fields[i].value);
                if (fields[i].name == 'Shade_Color')
                    shade_color.push(fields[i].value);
                str_array[fields[i].name] = [fields[i].value]; //Main
            }
            if (color.length >= 0) {
                str_array['Color'] = color;
            }
            if (size.length >= 0) {
                str_array['Size'] = size;
            }
            if (functions.length >= 0) {
                str_array['Functions'] = functions;
            }
            if (finish.length >= 0) {
                str_array['Finish'] = finish;
            }
            if (shade_color.length > 0) {
                str_array['Shade_Color'] = shade_color;
            }
            this.add_product_val.title = $('#main_title_text').val();
            this.add_product_val.subtitle = $('#suntitle_text').val();
            this.add_product_val.category_id = $('#subcategories_select').val();
            if ($('#user_time_zone').val() == 0) {
                this.add_product_val.isbn = $('#user_time_zone').val();
            }
            else {
                this.add_product_val.isbn = $('#upc_isbn').val();
            }
            if ($('#discountval').val() == "") {
                this.add_product_val.discount = 0;
            }
            else {
                this.add_product_val.discount = $('#discountval').val();
            }
            this.add_product_val.daily_deal = $('#daily_deal').val();
            if ($('#daily_deal').val() == 'Yes')
                this.add_product_val.deals_days = $('#daily_dealDay').val();
            this.add_product_val.condition_description = $('#comment').val();
            if ($('#Format').val() == "Auction style") {
                this.add_product_val.min_price = $('#min_price').val();
                if ($('#format_price').val() != '')
                    this.add_product_val.price = $('#format_price').val();
                if ($('#max_price').val() != '')
                    this.add_product_val.max_price = $('#max_price').val();
                if ($('#Duration').val() != '')
                    this.add_product_val.duration = $('#Duration').val();
                this.add_product_val.quantity = $('#dis_id').val();
                this.add_product_val.renew = 'No';
            }
            else if ($('#Format').val() == "Fixed price") {
                this.add_product_val.price = $('#format_price').val();
                this.add_product_val.quantity = $('#quantity').val();
                this.add_product_val.duration = $('#Duration1').val();
                this.add_product_val.renew = $('#Duration_selection').val();
                if ($('#BestOffer').prop('checked') == true) {
                    this.add_product_val.make_offer = 1;
                    if ($('#minprice').val() != '')
                        this.add_product_val.price = $('#minprice').val();
                    if ($('#maxprice').val() != '')
                        this.add_product_val.max_price = $('#maxprice').val();
                }
            }
            if (this.add_product_val.product_address == '' && $('#search_places').val() == '') {
                $('.product_address').removeClass('d-none');
                return;
            }
            else {
                $('.product_address').addClass('d-none');
            }
            if ($('#Format').val() == "Auction style") {
                if (parseInt($('#format_price').val()) < parseInt($('#min_price').val())) {
                    $('.productMSG_buyitprice').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_buyitprice').addClass('d-none');
                }
            }
            this.add_product_val.selling_type = $('#Format').val();
            if ($('#paypal_check').prop('checked') == true) {
                this.add_product_val.paypal_email = $('#paypal_text').val();
            }
            if ($('#return-accepted').prop('checked') == true) {
                this.add_product_val.return_opt = $('#itemReturnedWithin').val();
                this.add_product_val.return_policy = $('#returnpolicy').val();
                this.add_product_val.ship_to = $('#returnby').val();
            }
            else {
                this.add_product_val.return_opt = 'No';
                this.add_product_val.ship_to = '';
            }
            this.add_product_val.product_address = $('#area_community').val() + ' , ' + $('#search_places').val();
            this.add_product_val.delivery_days = $('#delivery_days').val();
            this.add_product_val.p_condition = $('#condition_select').val();
            this.add_product_val.specification.length = 0;
            this.add_product_val.specification.push(str_array);
            this.add_product_val.season_deal = $('#Season_deals').val();
            var val_payment = [];
            $('input[type=checkbox][name=payment_opt]:checked').each(function (i) {
                val_payment[i] = $(this).val();
            });
            var val_shipment = [];
            $('input[type=checkbox][name=shipment_type]:checked').each(function (i, field) {
                if ($(this).val() == "Other")
                    val_shipment[i] = $('#OtherShipment').val();
                else
                    val_shipment[i] = $(this).val();
            });
            this.add_product_val.payment_opt = val_payment.join(",");
            this.add_product_val.shipment_type = val_shipment.join(",");
            if ($('#categories_second').val() != '')
                this.add_product_val.secondary_cat_ids = $('#categories_second').val();
            else
                this.add_product_val.secondary_cat_ids.length = 0;
            var fees_details1 = {};
            fees_details1['categories_fees'] = [this.categoryFees];
            fees_details1['insertion_fees'] = [this.show_feesData.data.insertion_fee];
            fees_details1['buyitnow_fees'] = [this.show_feesData.data.buyitnow_fee];
            var Featured_item = [];
            if ($('#daily_deal').val() == 'Yes') {
                Featured_item.push($('#daily_dealDay option:selected').text());
                Featured_item.push(this.daiydealsFees);
            }
            else {
                Featured_item.push(0);
            }
            fees_details1['featured_fees'] = Featured_item;
            this.add_product_val.fees_details = fees_details1;
            if ($('input[name="payment_opt"]:checked').length == 0) {
                $('.Payment_Opt').removeClass('d-none');
                $('.ShipmentSelectalert').addClass('d-none');
                return;
            }
            else {
                $('.Payment_Opt').addClass('d-none');
                $('.ShipmentSelectalert').addClass('d-none');
            }
            if ($('input[name="shipment_type"]:checked').length == 0) {
                $('.ShipmentSelectalert').removeClass('d-none');
                $('.Payment_Opt').addClass('d-none');
                return;
            }
            else {
                $('.ShipmentSelectalert').addClass('d-none');
                $('.Payment_Opt').addClass('d-none');
            }
            localStorage.setItem('previeProduct', JSON.stringify(this.add_product_val));
            if (this.plt.is('core') == true || this.plt.is('mobileweb') == true) {
                //window.open('http://localhost:8100/#/previewProduct', "_blank");
                window.open('http://www.onlinetnt.com/#/previewProduct', "_blank");
                //window.open('https://www.techcronus.com/staging/Dibdaa/www/#/previewProduct', "_blank");
            }
            else {
                this.navCtrl.push('PreviewProductPage');
            }
        }
    };
    AddProductPage.prototype.checkPaypalEmail = function (val) {
        var _this = this;
        var pass_data = {
            paypal_email: val
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/pay/verify-paypal-email', pass_data, function (response) {
            _this.verificationResponsebusiness = response;
            _this.infoService.hideLoading();
            if (response.responseEnvelope.ack == "Success") {
                $('.hideRigthCircle').removeClass('d-none');
            }
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    AddProductPage.prototype.checkMaxPrice = function (val_price, val) {
        if (val == "Auction-style") {
            if (parseInt(val_price) <= parseInt($('#min_price').val())) {
                $('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
            }
            else {
                $('.Maxprice:last#Maxprice').text('');
            }
            this.autoSaveProduct('maxPrice');
        }
        else if (val == "BestOffer") {
            if (parseInt(val_price) <= parseInt($('#minprice').val())) {
                $('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
            }
            else {
                $('.Maxprice:last#Maxpriceoffer').text('');
            }
            this.autoSaveProduct('bestoffermaxPrice');
        }
    };
    AddProductPage.prototype.autoSaveProduct = function (val) {
        var _this = this;
        if (val == 'primarycategory') {
            this.add_product_val.title = $('#main_title_text').val();
            this.add_product_val.subtitle = $('#suntitle_text').val();
            this.add_product_val.category_id = $('#subcategories_select').val();
        }
        else if (val == 'Featured Deals') {
            if ($('#daily_deal').val() == 'Yes') {
                this.add_product_val.deals_days = $('#daily_dealDay').children(":selected").attr("id");
                this.add_product_val.daily_deal = $('#daily_deal').val();
            }
            else {
                this.add_product_val.daily_deal = $('#daily_deal').val();
            }
        }
        else if (val == 'Season Deals') {
            if ($('#Season_deals').val() == 'Yes') {
                this.add_product_val.season_day = $('#Season_dealsDay').children(":selected").attr("id");
                this.add_product_val.season_deal = $('#Season_deals').val();
            }
            else {
                this.add_product_val.season_deal = $('#Season_deals').val();
            }
        }
        else if (val == 0) {
            this.add_product_val.isbn = '0';
        }
        else if (val == 'addedIsbn') {
            if ($('#user_time_zone').val() == "") {
                this.add_product_val.isbn = '0';
            }
            else {
                this.add_product_val.isbn = $('#upc_isbn').val();
            }
        }
        else if (val == 'conditionItem') {
            this.add_product_val.p_condition = $('#condition_select').val();
            if ($('#categories_second').val() != '')
                this.add_product_val.secondary_cat_ids = $('#categories_second').val();
            else
                this.add_product_val.secondary_cat_ids.length = 0;
            this.add_product_val.season_deal = $('#Season_deals').val();
            this.add_product_val.daily_deal = $('#daily_deal').val();
            if ($('#user_time_zone').val() == '') {
                this.add_product_val.isbn = '0';
            }
            else {
                this.add_product_val.isbn = $('#upc_isbn').val();
            }
        }
        else if (val == 'conditionDesc') {
            this.add_product_val.condition_description = $('#comment').val();
        }
        else if (val == 'itemDesc') {
            var fields = $("#Item_specifics").serializeArray();
            var str_array = {}, color = [], size = [], functions = [], finish = [], shade_color = [], color_img=[];
            for (var i = 0; i < fields.length; i++) {
                if (fields[i].name == 'Color')
                    color.push(fields[i].value);
                if (fields[i].name == 'Size')
                    size.push(fields[i].value);
                if (fields[i].name == 'Functions')
                    functions.push(fields[i].value);
                if (fields[i].name == 'Finish')
                    finish.push(fields[i].value);
                if (fields[i].name == 'Shade_Color')
                    shade_color.push(fields[i].value);
                str_array[fields[i].name] = [fields[i].value]; //Main
            }
            if (color.length >= 0) {
                str_array['Color'] = color;
            }
            if (size.length >= 0) {
                str_array['Size'] = size;
            }
            if (functions.length >= 0) {
                str_array['Functions'] = functions;
            }
            if (finish.length >= 0) {
                str_array['Finish'] = finish;
            }
            if (shade_color.length > 0) {
                str_array['Shade_Color'] = shade_color;
            }
            this.add_product_val.specification.length = 0;
            this.add_product_val.specification.push(str_array);
        }
        else if (val == "photoupload") {
            if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
                this.add_product_val.mobile_device = true;
            }
            else {
                this.add_product_val.reset_photo = true;
            }
        } 
        else if (val == "Auction style" || val == "Fixed price") {
            this.add_product_val.selling_type = $('#Format').val();
        }
        else if (val == "duration") {
            this.add_product_val.duration = $('#Duration').val();
        }
        else if (val == "minPrice") {
            this.add_product_val.min_price = $('#min_price').val();
        }
        else if (val == "price") {
            if ($('#format_price').val() != '' && $('#format_price').val() != undefined)
                this.add_product_val.price = $('#format_price').val();
            else
                this.add_product_val.price = 0;
        }
        else if (val == "maxPrice") {
            if ($('#max_price').val() != '')
                this.add_product_val.max_price = $('#max_price').val();
        }
        else if (val == "renew") {
            this.add_product_val.renew = $('#Duration_selection').val();
        }
        else if (val == "fixduration") {
            this.add_product_val.duration = $('#Duration1').val();
        }
        else if (val == "quantity") {
            this.add_product_val.quantity = $('#quantity').val();
        }
        else if (val == "bestofferminprice") {
            this.add_product_val.make_offer = 1;
            if ($('#minprice').val() != '')
                this.add_product_val.min_price = $('#minprice').val();
        }
        else if (val == "bestoffermaxPrice") {
            if ($('#maxprice').val() != '')
                this.add_product_val.max_price = $('#maxprice').val();
        }
        else if (val == "discount") {
            if ($('#discountval').val() == "")
                this.add_product_val.discount = 0;
            else
                this.add_product_val.discount = $('#discountval').val();
        }
        else if (val == "noreturnaccept") {
            this.add_product_val.return_opt = 'No';
            this.add_product_val.return_policy = '';
            this.add_product_val.ship_to = '';
        }
        else if (val == "returnopt") {
            this.add_product_val.return_opt = $('#itemReturnedWithin').val();
        }
        else if (val == "cashSelect") {
            var val_payment = [], self = this;
            $('input[type=checkbox][name=payment_opt]:checked').each(function (i) {
                val_payment[i] = $(this).val();
                if ($(this).val() == 1) {
                    self.add_product_val.paypal_email = $('#paypal_text').val();
                }
            });
            self.add_product_val.payment_opt = val_payment.join(",");
        }
        else if (val == "returnby") {
            this.add_product_val.ship_to = $('#returnby').val();
        }
        else if (val == "returnpolicy") {
            this.add_product_val.return_policy = $('#returnpolicy').val();
        }
        else if (val == "productAddress") {
            this.add_product_val.product_address = $('#area_community').val() + ' , ' + this.add_product_val.product_address;
            if ($('#Format').val() == "Auction style") {
                if ($('input[type=radio][name=schldlisting]:checked').val() == 'No') {
                    this.add_product_val.schedule_date = '';
                }
                else {
                    var getStartDate = $('.selectOptions#startDate').val();
                    var getStartTime = $('.selectOptions#startTime').val();
                    var getStartMinute = $('.selectOptions#stTimeMinute').val();
                    this.add_product_val.schedule_date = getStartDate + ' ' + getStartTime + ':' + getStartMinute + ':' + '30';
                }
            }
            else {
                if ($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'No') {
                    this.add_product_val.schedule_date = '';
                }
                else {
                    var getStartDate_fixed = $('.selectOptions#startDate_fixed').val();
                    var getStartTime_fixed = $('.selectOptions#startTime_fixed').val();
                    var getStartMinute_fixed = $('.selectOptions#stTimeMinute_fixed').val();
                    this.add_product_val.schedule_date = getStartDate_fixed + ' ' + getStartTime_fixed + ':' + getStartMinute_fixed + ':' + '30';
                }
            }
            var val_shipment = [];
            $('input[type=checkbox][name=shipment_type]:checked').each(function (i, field) {
                if ($(this).val() == "Other")
                    val_shipment[i] = $('#OtherShipment').val();
                else
                    val_shipment[i] = $(this).val();
            });
            this.add_product_val.shipment_type = val_shipment.join(",");
        }
        else if (val == "addedarea_community") {
            this.add_product_val.product_address = $('#area_community').val();
        }
        else if (val == "delivery_days") {
            this.add_product_val.delivery_days = $('#delivery_days').val();
            var fees_details1 = {};
            fees_details1['categories_fees'] = [this.categoryFees];
            fees_details1['insertion_fees'] = [this.show_feesData.data.insertion_fee];
            var Featured_item = [];
            if ($('#daily_deal').val() == 'Yes') {
                Featured_item.push($('#daily_dealDay option:selected').text());
                Featured_item.push(this.daiydealsFees);
            }
            else {
                Featured_item.push(0);
            }
            var seasondeal_dys = [];
            if ($('#Season_deals').val() == 'Yes') {
                seasondeal_dys.push($('#Season_dealsDay option:selected').text());
                seasondeal_dys.push(this.sellseasonFees);
            }
            else {
                seasondeal_dys.push(0);
                seasondeal_dys.push(0);
            }
            fees_details1['featured_fees'] = Featured_item;
            fees_details1['season_fees'] = seasondeal_dys;
            this.add_product_val.fees_details = fees_details1;
        }
        else if (val == "checkschldlisting") {
            if ($('#Format').val() == "Auction style") {
                if ($('input[type=radio][name=schldlisting]:checked').val() == 'No') {
                    this.add_product_val.schedule_date = '';
                }
                else {
                    var getStartDate = $('.selectOptions#startDate').val();
                    var getStartTime = $('.selectOptions#startTime').val();
                    var getStartMinute = $('.selectOptions#stTimeMinute').val();
                    this.add_product_val.schedule_date = getStartDate + ' ' + getStartTime + ':' + getStartMinute + ':' + '30';
                }
            }
            else {
                if ($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'No') {
                    this.add_product_val.schedule_date = '';
                }
                else {
                    var getStartDate_fixed = $('.selectOptions#startDate_fixed').val();
                    var getStartTime_fixed = $('.selectOptions#startTime_fixed').val();
                    var getStartMinute_fixed = $('.selectOptions#stTimeMinute_fixed').val();
                    this.add_product_val.schedule_date = getStartDate_fixed + ' ' + getStartTime_fixed + ':' + getStartMinute_fixed + ':' + '30';
                }
            }
        }
        else if (val == "checkOthership") {
            var val_shipment = [];
            $('input[type=checkbox][name=shipment_type]:checked').each(function (i, field) {
                if ($(this).val() == "Other")
                    val_shipment[i] = $('#OtherShipment').val();
                else
                    val_shipment[i] = $(this).val();
            });
            this.add_product_val.shipment_type = val_shipment.join(",");
        }
        else if (val == "title") {
            this.add_product_val.title = $('#main_title_text').val();
        }
        else if (val == "subTitle") {
            this.add_product_val.subtitle = $('#suntitle_text').val();
        }
        if (this.add_product_val.id == "" && val == 'primarycategory') {
            this.add_product_val.user_id = this.localItem.id;
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/auto-save-product', this.add_product_val, function (response) {
                _this.infoService.hideLoading();
                if (response.status != "fail") {
                    _this.add_product_val.id = response.product_id;
                    $('.estatus').css('visibility', 'visible');
                    _this.hideSavingDiv();
                }
                else {
                    _this.infoService.hideLoading();
                    $('.estatus').css('visibility', 'hidden');
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
        else if (this.add_product_val.id != "") {
            if (val == "photoupload") {
                this.loader = this.loading.create({
                    content: 'Please wait while we upload your photos.',
                });
                this.loader.present();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.add_product_val, function (response) {
                    if (response.status == "success") {
                        _this.loader.dismiss();
                        _this.add_product_val.reset_photo = false;
                        _this.add_product_val.photos.length = 0;
                        $('.estatus').css('visibility', 'visible');
                        _this.hideSavingDiv();
                    }
                    else {
                        _this.loader.dismiss();
                        $('.estatus').css('visibility', 'hidden');
                    }
                }, function (error) {
                    console.log(error);
                    _this.loader.dismiss();
                    $('.estatus').css('visibility', 'hidden');
                });
            }
            else {
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.add_product_val, function (response) {
                    if (response.status == "success") {
                        _this.infoService.hideLoading();
                        _this.add_product_val.reset_photo = false;
                        _this.add_product_val.photos.length = 0;
                        $('.estatus').css('visibility', 'visible');
                        _this.hideSavingDiv();
                    }
                    else {
                        _this.infoService.hideLoading();
                        $('.estatus').css('visibility', 'hidden');
                    }
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                    $('.estatus').css('visibility', 'hidden');
                });
            }
        }
    };
    AddProductPage.prototype.hideSavingDiv = function () {
        setTimeout(function () {
            $('.estatus').css('visibility', 'hidden');
        }, 2000);
    };
   
    AddProductPage.prototype.checkSaesonDeal = function (val) {
        var _this = this;
        var seasonData = {
            cat_id: val
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/home/check-season-deal', seasonData, function (response) {
            _this.infoService.hideLoading();
            _this.season_dealActive = response;
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    AddProductPage.prototype.checkschldlisting = function (val) {
        if (val == 'yes') {
            $('.selectOptions').attr('disabled', false);
            this.autoSaveProduct('checkschldlisting');
        }
        else if (val == 'no') {
            $('.selectOptions').attr('disabled', true);
            this.autoSaveProduct('checkschldlisting');
        }
    };
    AddProductPage.prototype.showDaysSelection = function (val) {
        if (val == "Yes") {
            this.showsellDealDays = true;
            this.add_product_val.season_deal = val;
            this.autoSaveProduct('season_dealyesno');
        }
        else {
            this.showsellDealDays = false;
            this.add_product_val.season_deal = val;
            this.autoSaveProduct('season_dealyesno');
        }
    };
    AddProductPage.prototype.createCustomspecification = function (val) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Added own ' + val,
            inputs: [
                {
                    name: val,
                    placeholder: val,
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
                        if (val == "Color") {
                            var trimdata = $.trim(data.Color);
                            if (trimdata.length <= 0) {
                                return false;
                            }
                        }
                        else {
                            var trimdata = $.trim(data.Size);
                            if (trimdata.length <= 0) {
                                return false;
                            }
                        }
                        for (var sp = 0; sp < _this.ItemSpecificationData.specification.length; sp++) {
                            if (_this.ItemSpecificationData.specification[sp].type == "3") {
                                if (_this.ItemSpecificationData.specification[sp].label == "Color") {
                                    if (val == "Color") {
                                        _this.ItemSpecificationData.specification[sp].value.push($.trim(data.Color));
                                    }
                                }
                                if (_this.ItemSpecificationData.specification[sp].label == "Size") {
                                    if (val == "Size") {
                                        _this.ItemSpecificationData.specification[sp].value.push($.trim(data.Size));
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    var color=[];
    AddProductPage.prototype.checkCheckboxforsize = function (val, val1) {
        
//        alert(val);
        if (val == "Size") {
            if (jQuery.inArray(val1, this.size_customQuantity) != -1) {
                this.size_customQuantity.splice(jQuery.inArray(val1, this.size_customQuantity), 1);
            }
            else {
                this.size_customQuantity.push(val1);
            }
            if (this.size_customQuantity.length <= 0) {
                $('#quantity').val('1');
            }
        }
        if(val=="Color"){
            
            
//            var val11 = $("input[name='Color']:checked").val();
//            
//             if($("input[name='Color']:checked").prop("checked") == true){
//                alert(val11);
//            }
//            else if($("input[name='Color']:checked").prop("checked") == false){
//                alert(val11);
//            }
//            alert(val11);
//            color[]=val1;
//            color.push(val1);
//            alert(color);
//            $('#variations').val(color)
            //this.showVariations(val);
            
              
        }
    };
    
//    AddProductPage.prototype.filePreview = function (input) {
//        var _this = this;
//        alert('filePreview');
////        alert(input.src);
//        if (input.files && input.files[0]) {
//        var reader = new FileReader();
//        reader.onload = function (e) {
//            alert(e.target.result);
////            $('#uploadForm + img').remove();
//            $('#image_preview').after('<img src="'+e.target.result+'" width="450" height="300"/>');
//        };
//        reader.readAsDataURL(input.files[0]);
//    }
//    };
//    AddProductPage.prototype.colorImage = function () {
//        var _this = this;
//        alert('hghgkhg123');
//        var input = $(this);
//        alert(input.attr('src'));
//        _this.filePreview(input);
//        
////        this._PHOTO.selectImage1().then(function (data) {
////            var self = _this;
////           alert($('.hidde_val').length);
////            if ($('.hidde_val').length < 11) {
////                $('#image_preview').append("<div class='col-lg-3 col-sm-6 col-md-4 col-sm-12 col-8 p-2'><span class='close'>&times;</span><img class='img-fluid add-product-img' src='" + data + "'><input type='hidden' value='" + data + "' class='hidde_val'></div>");
////                self.add_product_val.photos.push(data);
////                setTimeout(function () {
////                    self.autoSaveProduct('photoupload');
////                }, 1000);
////                $('.close').on('click', function () {
////                    $(this).parent().remove();
////                });
////            }
////        }).catch(function (error) {
////            console.log(error);
////        });
//    };
//    
//     AddProductPage.prototype.showVariations = function (val) {
////        alert('vaiations');
//        var _this = this;
//        var test = $('#variations').val();
////alert(color.length);      
//color = 'r';
//            var i;
//                for (i = 0; i < color.length; i++) {
////                    $('.image').append('<label for="vehicle1">'+color[i]+'</label><input type="file" id="vehicle1" name="vehicle1" value="'+color[i]+'" ><br>');
////                    $('.image').append('<label for="vehicle1">'+color[i]+'</label><input type="hidden" role="uploadcare-uploader" name="content" data-multiple="true" data-max-size="3000000" data-multiple-min="1" data-multiple-max="10" data-image-shrink="1300x1300"><br>');
////                    $('.image').append('<div class="form-group row" style="margin-bottom: 0rem;"><label class="col-lg-3 col-form-label form-control-label set-fontSize">'+color[i]+'</label><div class="col-lg-9"><input type="hidden" role="uploadcare-uploader-color" name="color_image" data-multiple="true" data-max-size="3000000" data-multiple-min="1" data-multiple-max="10" data-image-shrink="1300x1300"><div class="image-preview-single row m-0" id="image_preview_color"></div></div></div><br>');
////                    $('.image').append('<div class="form-group row" style="margin-bottom: 0rem;"><label class="col-lg-3 col-form-label form-control-label set-fontSize">red</label><div class="col-lg-9"><input type="file" name="color_image"  (change)="colorImage()"><div class="image-preview-single row m-0" id="image_preview"></div></div></div><br>');
//                    
//                    }
//                    $("#myModal").show();
////                    try {
////            var show_itemSpec1 = {
////                color_id: color
////            };
////            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/view-color', show_itemSpec1, function (response) {
////                alert(response.color.data);
//////                if (response.color.data.length > 0 && response.color.status == "success") {
////////                    _this.sub_catText = $("#subcategories_select option:selected").text();
//////                    _this.color_customQuantity = response.color.data;
//////                    $("#myModal").show();
//////                }
////            }, function (error) {
////                console.log(error);
////            });
////        }
////        catch (Error) {
////            console.log(Error);
////        }
//        
//        
//    };
//    
//    
//     AddProductPage.prototype.addImage = function (val) {
//         var _this = this;
//        try {
//         var fields = $("#image_form").serializeArray();
//         for (var i = 0; i < fields.length; i++) {
//             alert(fields[i].name);
//             alert(fields[i].value);
//         }
//         }
//        catch (Error) {
//            console.log(Error);
//            this.infoService.hideLoading();
//        }
//    };
//     AddProductPage.prototype.close = function (val) {
////         $(".image").empty();
//         $("#myModal").hide();
//         
//         
//    };
    
    
    AddProductPage.prototype.setQuantityvalue = function (val) {
        var calculate_custom_qun = 0;
        var taskObj_autosave = {};
        $("input[name=custom_sizeQun]").each(function () {
            if ($(this).val() != '') {
                taskObj_autosave[$(this).attr('id')] = $(this).val();
                calculate_custom_qun += parseInt($(this).val());
            }
        });
        this.add_product_val.sq = taskObj_autosave;
        $('#quantity').val(calculate_custom_qun);
        this.add_product_val.quantity = calculate_custom_qun;
        this.autoSaveProduct('sq');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], AddProductPage.prototype, "content", void 0);
    AddProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
			
			 selector: 'page-add-product',templateUrl:'/src/pages/product/add-product/add-product.html'
//           selector: 'page-add-product',template:/*ion-inline-start:"/var/www/html/src/pages/product/add-product/add-product.html"*/'<ion-content padding>\n	<div class="add-product">\n		<div class="wrapper">\n			<div class="container mb-lg-3">\n				<div class="row set-fontSize">\n					<div class="col-lg-12 col-md-12 col-xl-12 col-12">\n						<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n						<p class="mb-2">\n							<a href="#/home" class="breadcrumblink" style="color:black;">Dibdaa</a> &nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n							<a class="breadcrumblink font-weight-bold" disabled>Add Product</a>\n						</p>\n					</div>\n				</div>\n				<div class="row">\n					<div class="col-lg-12 col-md-12 col-12">\n						<h4 class="h4-class">Add Product</h4>\n					</div>\n				</div>\n\n				<div class="row ml-lg-0" *ngIf="ifproductAdded == false;else showImageadd">\n					<div class="col-lg-12 col-md-12 col-12 add-product-main mt-3 p-0">\n						<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mb-4 frontbg">\n							<h6 class="m-0 text-left">Product Description</h6>\n						</div>\n						<div class="mt-3 pl-4 pr-4">\n							<form #frm="ngForm" class="form" id="add-prosuct" method="post" role="form" novalidate>\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										<span class="text-danger font-weight-bold ">*</span>Title\n									</label>\n									<div class="col-lg-6">\n										<input class="form-control" type="text" name="title" id="main_title_text" #title="ngModel" required ngModel maxlength="80" (change)="autoSaveProduct(\'title\')">\n										<div *ngIf="title.invalid && (title.dirty || title.touched)" class="error-box">\n											<div *ngIf="title.errors.required">\n												* Title is required.\n											</div>\n											<div *ngIf="title.errors.maxlength">\n												* Maximum title length is 80.\n											</div>\n										</div>\n									</div>\n								</div>\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">Subtitle\n										<span class="font-weight-normal"> ({{show_feesData?.data.subtitle_fee}} AED) </span>\n									</label>\n									<div class="col-lg-6">\n										<input class="form-control" type="text" name="subtitle" id="suntitle_text" (change)="showsubtotalFees()" maxlength="80">\n									</div>\n								</div>\n\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										<span class="text-danger font-weight-bold">*</span>Category </label>\n									<div class="col-lg-3">\n										<select id="categories_select" class="form-control" #categories_select="ngModel" name="category_id" required ngModel (change)="checkSaesonDeal(categories_select.value)">\n											<option value="" selected>-- Select Category -- </option>\n											<option *ngFor="let categoriesselect of show_category?.data" value="{{categoriesselect.id}}" >{{categoriesselect.category_name}}</option>\n										</select>\n										<div *ngIf="categories_select.invalid && (categories_select.dirty || categories_select.touched)" class="error-box">\n											<div *ngIf="categories_select.errors.required">\n												* Select Category.\n											</div>\n										</div>\n									</div>\n								</div>\n\n								<div *ngFor="let categoriesselect of show_category?.data">\n									<div class="form-group row" *ngIf="categories_select.value == categoriesselect?.id">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n											<span class="text-danger font-weight-bold">*</span>Primary Category\n										</label>\n										<div class="col-lg-3">\n											<select id="subcategories_select" class="form-control" #subcategories_select="ngModel" name="subcategory_id" required ngModel (change)="showSpec(subcategories_select.value)">\n												<option value="" selected>-- Select Primary Category -- </option>\n												<option *ngFor="let catego of categoriesselect?.sub" value="{{catego.id}}" id="{{catego.facility_charges}}" >{{catego.category_name}}</option>\n											</select>\n											<div *ngIf="subcategories_select.invalid && (subcategories_select.dirty || subcategories_select.touched)" class="error-box">\n												<div *ngIf="subcategories_select.errors.required">\n													* Select Primary Category.\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n\n								<div *ngFor="let categoriesselect of show_category?.data">\n									<div class="form-group row" *ngIf="categories_select.value == categoriesselect?.id">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n											Secondary Category(optional)\n										</label>\n										<div class="col-lg-3">\n											<select id="categories_second" class="form-control" name="categories_second" multiple > <!-- (change)="showcategorymultipleFees()" -->\n												<option value="" selected>Select</option>\n												<option *ngFor="let catego of categoriesselect?.sub" value="{{catego.id}}" id="{{catego.facility_charges}}">{{catego.category_name}}</option>\n											</select>\n											<span class="set-fontSize d-lg-block d-none">(Press ctrl button to select multiple categories.)</span>\n										</div>\n									</div>\n								</div>\n\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										ISBN\n									</label>\n									<div class="col-lg-3">\n										<select id="user_time_zone" class="form-control" name="isbn" #isbn="ngModel" ngModel (change)="autoSaveProduct(\'addedIsbn\')">\n											<option value="" selected>Does not apply</option>\n											<option value="1">Enter UPC/EAN/ISBN</option>\n										</select>\n									</div>\n								</div>\n\n								<div class="form-group row" *ngIf="isbn.value == \'1\'">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										<span class="text-danger font-weight-bold">*</span>Enter UPC/EAN/ISBN\n									</label>\n									<div class="col-lg-3">\n										<input class="form-control" type="text" name="UPCISBN" id="upc_isbn" #UPCISBN="ngModel" required ngModel (change)="autoSaveProduct(\'addedIsbn\')">\n										<div *ngIf="UPCISBN.invalid && (UPCISBN.dirty || UPCISBN.touched)" class="error-box">\n											<div *ngIf="UPCISBN.errors.required">\n												* Enter UPC/EAN/ISBN.\n											</div>\n										</div>\n									</div>\n								</div>\n\n								<div class="form-group row" *ngIf="season_dealActive?.check_season_deal.msg == true">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										Season Deals\n									</label>\n									<div class="col-lg-3">\n										<select id="Season_deals" class="form-control" name="Season_deals" #Season_deals (change)="showDaysSelection(Season_deals.value)">\n											<option value="No">No</option>\n											<option value="Yes">Yes</option>\n										</select>\n									</div>\n								</div>\n								\n								<div class="form-group row" *ngIf="showsellDealDays == true">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										<span class="text-danger font-weight-bold">*</span>Select Days\n									</label>\n									<div class="col-lg-3">\n										<select id="Season_dealsDay" class="form-control" #Season_dealsDay="ngModel" name="Season_dealsDay" required ngModel (change)="showsellDayfees(Season_dealsDay.value)">\n											<option value="" selected>-- Select Days -- </option>\n											<option *ngFor="let allday of seasondealfees" value="{{allday[1]}}" id="{{allday[0] | replaceString:allday[0]}}">{{allday[0] | replaceString:allday[0]}} <span *ngIf="allday[0] == \'Days_1\'">Day</span><span *ngIf="allday[0] != \'Days_1\'">Days</span></option>\n										</select>\n										<div *ngIf="Season_dealsDay.invalid && (Season_dealsDay.dirty || Season_dealsDay.touched)" class="error-box">\n											<div *ngIf="Season_dealsDay.errors.required">\n												* Select Days.\n											</div>\n										</div>\n									</div>\n								</div>\n								\n								<div class="form-group row" *ngIf="season_dealActive?.check_season_deal.msg == false" class="d-none">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										Season Deals\n									</label>\n									<div class="col-lg-3">\n										<select id="Season_deals" class="form-control" name="Season_deals" >\n											<option value="No">No</option>\n										</select>\n									</div>\n								</div>\n								\n\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										Featured Deals\n									</label>\n									<div class="col-lg-3">\n										<select id="daily_deal" class="form-control" name="daily_deal" #daily_deal (change)="showDailyfees(daily_deal.value)">\n											<option value="No">No</option>\n											<option value="Yes">Yes</option>\n										</select>\n									</div>\n								</div>\n\n								<div class="form-group row" *ngIf="daily_deal?.value == \'Yes\'">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										<span class="text-danger font-weight-bold">*</span>Select Days\n									</label>\n									<div class="col-lg-3">\n										<select id="daily_dealDay" class="form-control" #daily_dealDay="ngModel" name="daily_dealDay" required ngModel (change)="showDailyfees(daily_dealDay.value)">\n											<option value="" selected>-- Select Days -- </option>\n											<option *ngFor="let allday of featureitem" value="{{allday[1]}}" id="{{allday[0] | replaceString:allday[0]}}">{{allday[0] | replaceString:allday[0]}} <span *ngIf="allday[0] == \'Days_1\'">Day</span><span *ngIf="allday[0] != \'Days_1\'">Days</span></option>\n										</select>\n										<div *ngIf="daily_dealDay.invalid && (daily_dealDay.dirty || daily_dealDay.touched)" class="error-box">\n											<div *ngIf="daily_dealDay.errors.required">\n												* Select Days.\n											</div>\n										</div>\n									</div>\n								</div>\n								\n								<div class="form-group row">\n									<div [ngClass]="{\'col-lg-3 p-0\': specdata?.label == \'Item Condition\'}" *ngFor="let specdata of ItemSpecificationData?.specification" >\n										<label class="col-lg-12 col-form-label form-control-label set-fontSize" *ngIf="specdata?.label == \'Item Condition\'">\n											<span class="text-danger font-weight-bold">*</span>Item Condition\n										</label>\n									</div>\n									<div [ngClass]="{\'col-lg-3\': specdata?.label == \'Item Condition\'}" *ngFor="let specdata of ItemSpecificationData?.specification">\n										<select class="form-control" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" *ngIf="specdata?.label == \'Item Condition\'" id="condition_select" (change)="autoSaveProduct(\'conditionItem\')">\n											<option *ngFor="let dropdownData of specdata?.value" value="{{dropdownData}}">{{dropdownData}}</option>\n										</select>\n									</div>\n								</div>\n		<div class="form-group row">\n<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n<span class="text-danger font-weight-bold">*</span>Variations</label>\n<div class="col-lg-9">\n<span class="set-fontSize mb-2">If you see multiple variations of your item, you can list all of them in one multi-quantity, fixed-price listing. This saves you time and money. </span>\n<button type="button" class="btn theme-light-btn-filupload mb-3 mt-2 col-lg-3" data-toggle="modal" data-target="#myModal" >Choose Variations</button>\n<div class="row m-0" id="image_preview">\n</div>\n</div>\n</div>       							\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										Item Condition Description\n									</label>\n									<div class="col-lg-6">\n										<textarea class="form-control" rows="3" id="comment" name="condition_description" (change)="autoSaveProduct(\'conditionDesc\')"></textarea>\n									</div>\n								</div>\n\n								<div class="form-group row" *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										<span class="text-danger font-weight-bold">*</span>Photos</label>\n									<div class="col-lg-9">\n										<button type="submit" class="btn theme-light-btn-filupload mb-3" (click)="selectImage()">Select an Image</button>\n										<span class="set-fontSize">Please upload images in jpg, jpeg & png format only. You can add up to 10 images. You can edit, rearrange and select your primary image in the image gallery. click "Select an Image" to access.</span>\n										<div class="set-fontSize mb-2">The first element image set as a primary image.</div>\n										<div class="row m-0" id="image_preview"></div>\n									</div>\n									<div class="error-box showGIFError text-center w-100 pt-3 d-none"> Please upload images only jpg, jpeg and png format. </div>\n									<div class="error-box showFormatError text-center w-100 pt-3 d-none">\n										<span>You have exceeded the total amount of photos allowed. Only the first 10 photos have been uploaded.</span>\n									</div>\n								</div>\n								<div class="form-group row" *ngIf="plt.is(\'core\') == true || plt.is(\'mobileweb\') == true">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										<span class="text-danger font-weight-bold">*</span>Photos</label>\n									<div class="col-lg-9">\n										<input type="hidden" role="uploadcare-uploader" name="content" data-multiple="true" data-max-size="3000000" data-multiple-min="1" data-multiple-max="10" data-image-shrink="1300x1300">\n										<div class="set-fontSize mb-2">Please upload images in jpg, jpeg & png format only. You can add up to 10 images.Your 1st image is your primary image.</div>\n										<div class="set-fontSize mb-2">You can edit, rearrange and select your primary image in the image gallery. Select "Choose images" to access.</div>\n										<div class="image-preview-single row m-0" id="image_preview">\n										</div>\n									</div>\n								</div> \n								\n								<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mb-  front-bg-secondary">\n									<h6 class="m-0 text-left">Item specifics</h6>\n								</div>\n								\n								<form #frmspec="ngForm" role="form" id="Item_specifics" name="Item-specifics" method="post" *ngIf="sub_catText == \'Not\';else showSpecification" novalidate>\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 mb-4 mt-4 text_center">\n										Item specifications not available\n									</div>\n								</form>\n								\n								<ng-template #showSpecification>\n									<form [formGroup]="loginForm" role="form" id="Item_specifics" name="Item-specifics" method="post" novalidate>\n										<div class="form-row">\n											<div [ngClass]="{\'form-group\' : specdata?.label !=\'Item Description\' && specdata?.label !=\'Item Condition\',\'col-md-6\' : specdata?.label !=\'Item Description\' && specdata?.label !=\'Item Condition\', \'pr-lg-2\' : specdata?.label !=\'Item Description\' && specdata?.label !=\'Item Condition\' , \'set-fontSize\' : specdata?.label !=\'Item Description\' && specdata?.label !=\'Item Condition\'}" *ngFor="let specdata of ItemSpecificationData?.specification">\n												<ng-template [ngIf]="specdata?.type == \'1\'">\n													<div *ngIf="specdata?.label == \'Type\'">\n														<label>\n															<span class="text-danger font-weight-bold" *ngIf="specdata?.label ==\'Type\' || specdata?.label ==\'Item Condition\'">*</span>{{specdata?.label}}\n														</label>\n														<select class="form-control" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" (change)="autoSaveProduct(\'itemDesc\')">\n															<option *ngFor="let dropdownData of specdata?.value" value="{{dropdownData}}">{{dropdownData}}</option>\n														</select>\n													</div>\n													<div *ngIf="specdata?.label != \'Type\' && specdata?.label !=\'Item Condition\' && specdata?.label !=\'Item Condition\'">\n														<label> {{specdata?.label}} </label>\n														<select class="form-control" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" (change)="autoSaveProduct(\'itemDesc\')">\n															<option value="" *ngIf="specdata?.label !=\'Warranty\'">Select</option>\n															<option *ngFor="let dropdownData of specdata?.value" value="{{dropdownData}}">{{dropdownData}}</option>\n														</select>\n													</div>\n												</ng-template>\n												<ng-template [ngIf]="specdata?.type == \'2\'">\n													<div *ngIf="specdata?.label !=\'Item Description\';">\n														<label>{{specdata?.label}}</label>\n														<input class="form-control" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" type="text" (change)="autoSaveProduct(\'itemDesc\')">\n													</div>\n												</ng-template>\n												<ng-template [ngIf]="specdata?.type == \'3\'">\n													<label>{{specdata?.label}}</label><br/>\n													<label class="custom-control custom-checkbox pl-4" *ngFor="let checkboxdata of specdata?.value">\n														<input type="checkbox" class="custom-control-input" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" value="{{checkboxdata}}" (change)="checkCheckboxforsize(specdata?.label,checkboxdata)">\n														<span class="custom-control-indicator"></span>\n														<span class="custom-control-description">{{checkboxdata}}</span>\n													</label>\n												</ng-template>\n											</div>\n										</div>\n										\n										<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mb-4 front-bg-secondary" *ngIf="setCustomspecification?.Color != \'\' || setCustomspecification?.Size != \'\'">\n											<h6 class="m-0 text-left">Custom Item specifications</h6>\n										</div> 		\n							\n										<div class="form-group row pl-3 pt-2 pb-2 mb-4" *ngIf="setCustomspecification?.Color != \'\' || setCustomspecification?.Size != \'\'">\n											<ul class="nav nav-tabs w-100 Custom_Item_specifications" role="tablist">\n												<li class="nav-item" *ngIf="setCustomspecification?.Color != \'\'">\n													<a class="nav-link active" href="#color" role="tab" data-toggle="tab">Color</a>\n												</li>\n												<li class="nav-item" *ngIf="setCustomspecification?.Size != \'\'">\n													<a class="nav-link" href="#Size" role="tab" data-toggle="tab">Size</a>\n												</li>\n											</ul>\n											<!-- Tab panes -->\n											<div class="tab-content">\n												<div role="tabpanel" class="tab-pane fade in active show" id="color" *ngIf="setCustomspecification?.Color != \'\'">\n													<div class="m-3">\n														<span class="badge badge-customorange mr-2 mb-2" *ngFor="let clr of setCustomspecification?.Color">{{clr}}</span>\n													</div>\n													<a class="ml-3 text-primary set-fontSize" (click)="createCustomspecification(\'Color\')">+ Create your own</a>\n												</div>\n												<div role="tabpanel" class="tab-pane fade" id="Size" *ngIf="setCustomspecification?.Size != \'\'">\n													<div class="m-3">\n														<span class="badge badge-customorange mr-2 mb-2" *ngFor="let siz of setCustomspecification?.Size">{{siz}}</span>\n													</div>\n													<a class="ml-3 text-primary set-fontSize" (click)="createCustomspecification(\'Size\')">+ Create your own</a>\n												</div>\n											</div>\n										</div>\n								\n										<div class="form-row">\n											<div class="form-group col-md-12 pr-lg-2 set-fontSize">\n												<label>\n													<span class="text-danger font-weight-bold">*</span>Item Description\n												</label>\n												<ckeditor name="Item_Description" [(ngModel)]="Item_Description" [formControl]="loginForm.controls[\'Item_Description\']" [ngClass]="{\'error-border\':!loginForm.controls[\'Item_Description\'].valid}" (blur)="onBlur($event)" [config]="config"> </ckeditor>\n												<textarea class="form-control d-none" rows="3" id="Item_Description" name="Item_Description" [value]="Item_Description"></textarea>\n												<div class="error-box" *ngIf="loginForm.controls[\'Item_Description\'].hasError(\'required\') && loginForm.controls[\'Item_Description\'].touched">* Enter Item Description!</div>\n												<div class="error-box" *ngIf="loginForm.controls[\'Item_Description\'].hasError(\'minlength\') && loginForm.controls[\'Item_Description\'].touched">* Minimum item description length is 6!</div>\n											</div>\n										</div>\n									</form>\n								</ng-template>\n										\n								<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mb-4 front-bg-secondary">\n									<h6 class="m-0 text-left">Selling details</h6>\n								</div>\n\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n											class="text-danger font-weight-bold">*</span>Format\n									</label>\n									<div class="col-lg-3">\n										<select id="Format" class="form-control" name="selling_type" #selling_type="ngModel" required ngModel (change)="autoSaveProduct(selling_type.value)">\n											<option value="" selected>-- Select Condition -- </option>\n											<option value="Auction style">Auction style</option>\n											<option value="Fixed price">Fixed price</option>\n										</select>\n										<div *ngIf="selling_type.invalid && (selling_type.dirty || selling_type.touched)" class="error-box">\n											<div *ngIf="selling_type.errors.required">\n												* Select selling format.\n											</div>\n										</div>\n									</div>\n								</div>\n\n								<div *ngIf="selling_type.value == \'Auction style\'">\n									<div class="form-group row auctionduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Duration\n										</label>\n										<div class="col-lg-3">\n											<select id="Duration" class="form-control" name="duration" #duration="ngModel" required ngModel (change)="autoSaveProduct(\'duration\')">\n												<option value="" selected>-- Select Duration -- </option>\n												<option value="3">3 days</option>\n												<option value="5">5 days</option>\n												<option value="7">7 days</option>\n												<option value="10">10 days</option>\n												<option value="30">30 days</option>\n											</select>\n											<div *ngIf="duration.invalid && (duration.dirty || duration.touched)" class="error-box">\n												<div *ngIf="duration.errors.required">\n													* Select duration.\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="form-group row">\n										<div class="offset-lg-3 col-lg-9">\n											<div class="row m-0">\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<input type="radio" id="schldLstng_0" name="schldlisting" value="No" checked (click) = "checkschldlisting(\'no\')">\n													<label for="schldLstng_0">Start my listings when I submit them</label>\n												</div>\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<input type="radio" id="schldLstng_1" name="schldlisting" value="Yes" (click) = "checkschldlisting(\'yes\')">\n													<label for="schldLstng_1">Schedule to start on</label>\n													<span>\n														<select name="startDate" id="startDate" title="Start Date" class="selectOptions" disabled="true">\n															<option value="{{dat | date : \'yyyy-MM-dd\'}}" *ngFor="let dat of arr">{{dat | date}}</option>\n														</select>\n													</span>\n													<span>\n														<select name="startTime" id="startTime" title="Start Time" class="selectOptions" disabled="true">\n															<option value="00" selected="selected">00</option>\n															<option value="01">01</option>\n															<option value="02">02</option>\n															<option value="03">03</option>\n															<option value="04">04</option>\n															<option value="05">05</option>\n															<option value="06">06</option>\n															<option value="07">07</option>\n															<option value="08">08</option>\n															<option value="09">09</option>\n															<option value="10">10</option>\n															<option value="11">11</option>\n															<option value="12">12</option>\n															<option value="13">13</option>\n															<option value="14">14</option>\n															<option value="15">15</option>\n															<option value="16">16</option>\n															<option value="17">17</option>\n															<option value="18">18</option>\n															<option value="19">19</option>\n															<option value="20">20</option>\n															<option value="21">21</option>\n															<option value="22">22</option>\n															<option value="23">23</option>\n														</select>\n													</span>\n													<span>\n														<select name="stTimeMinute" id="stTimeMinute" title="Minutes" class="selectOptions" disabled="true">\n															<option value="00" selected="selected">00</option>\n															<option value="01">01</option>\n															<option value="02">02</option>\n															<option value="03">03</option>\n															<option value="04">04</option>\n															<option value="05">05</option>\n															<option value="06">06</option>\n															<option value="07">07</option>\n															<option value="08">08</option>\n															<option value="09">09</option>\n															<option value="10">10</option>\n															<option value="11">11</option>\n															<option value="12">12</option>\n															<option value="13">13</option>\n															<option value="14">14</option>\n															<option value="15">15</option>\n															<option value="16">16</option>\n															<option value="17">17</option>\n															<option value="18">18</option>\n															<option value="19">19</option>\n															<option value="20">20</option>\n															<option value="21">21</option>\n															<option value="22">22</option>\n															<option value="23">23</option>\n															<option value="24">24</option>\n															<option value="25">25</option>\n															<option value="26">26</option>\n															<option value="27">27</option>\n															<option value="28">28</option>\n															<option value="29">29</option>\n															<option value="30">30</option>\n															<option value="31">31</option>\n															<option value="32">32</option>\n															<option value="33">33</option>\n															<option value="34">34</option>\n															<option value="35">35</option>\n															<option value="36">36</option>\n															<option value="37">37</option>\n															<option value="38">38</option>\n															<option value="39">39</option>\n															<option value="40">40</option>\n															<option value="41">41</option>\n															<option value="42">42</option>\n															<option value="43">43</option>\n															<option value="44">44</option>\n															<option value="45">45</option>\n															<option value="46">46</option>\n															<option value="47">47</option>\n															<option value="48">48</option>\n															<option value="49">49</option>\n															<option value="50">50</option>\n															<option value="51">51</option>\n															<option value="52">52</option>\n															<option value="53">53</option>\n															<option value="54">54</option>\n															<option value="55">55</option>\n															<option value="56">56</option>\n															<option value="57">57</option>\n															<option value="58">58</option>\n															<option value="59">59</option>\n														</select>\n													</span>\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="form-group row auctionduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Price</label>\n										<div class="col-lg-9">\n											<div class="form-row row">\n												<div class="form-group col-md-3 col-lg-2 pr-lg-2 set-fontSize">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label"><span\n															class="text-danger font-weight-bold">*</span>Starting price </label>\n													<input class="form-control" type="number" name="min_price" id="min_price" #min_price="ngModel" required ngModel (change)="autoSaveProduct(\'minPrice\')" pattern="^([1-9][0-9]{0,6}?)$">\n													<div *ngIf="min_price.invalid && (min_price.dirty || min_price.touched)" class="error-box">\n														<div *ngIf="min_price.errors.required">\n															* Enter starting price.\n														</div>\n														<div *ngIf="min_price.errors.pattern">\n															* The starting price must be a valid number greater than 0 and maximum price length is 7.\n														</div>\n													</div>\n												</div>\n												<div class="form-group col-md-3 col-lg-2 pr-lg-2 set-fontSize">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label">Buy It Now price</label>\n													<input class="form-control" type="number" name="price" id="format_price" #price="ngModel" ngModel (change)="showcategoryFees()" pattern="^([1-9][0-9]{0,6}?)$">\n													<div *ngIf="price.invalid && (price.dirty || price.touched)" class="error-box">\n														<div *ngIf="price.errors.pattern">\n															* The price must be a valid number greater than 0 and price length is 7.\n														</div>\n													</div>\n												</div>\n\n												<div class="form-group col-md-3 col-lg-2 pr-lg-2 set-fontSize">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label">\n														Reserve price\n													</label>\n													<input class="form-control" type="number" name="max_price" id="max_price" #max_price="ngModel" ngModel (change)="checkMaxPrice(max_price.value,\'Auction-style\')" pattern="^([1-9][0-9]{0,6}?)$">\n													<div *ngIf="max_price.invalid && (max_price.dirty || max_price.touched)" class="error-box">\n														<div *ngIf="max_price.errors.pattern">\n															* The reserve price must be a valid number greater than 0 and reserve price length is 7.\n														</div>\n													</div>\n													<div class="error-box Maxprice" id="Maxprice">\n\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="form-group row auctionduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize">Quantity</label>\n										<div class="col-lg-9">\n											<div class="form-row row">\n												<div class="form-group col-md-2 pr-lg-2">\n													<input class="form-control" type="number" value="1" disabled name="quantity" id="dis_id">\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n								\n								<div *ngIf="selling_type.value == \'Fixed price\'">\n									<div class="form-group row fixedrateduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Buy It Now price</label>\n										<div class="col-lg-9">\n											<div class="form-row row">\n												<div class="form-group col-md-2 pr-lg-2 set-fontSize">\n													<input class="form-control" type="number" name="price" id="format_price" #price="ngModel" required ngModel (change)="showcategoryFees()" pattern="^([1-9][0-9]{0,6}?)$">\n												</div>\n												<div *ngIf="price.invalid && (price.dirty || price.touched)" class="error-box form-group col-md-12">\n													<div *ngIf="price.errors.required">\n														* Enter buy it now price.\n													</div>\n													<div *ngIf="price.errors.pattern">\n														* The price must be a valid number greater than 0 and maximum price length is 7.\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="form-group row fixedrateduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize">Auto Renew</label>\n										<div class="col-lg-3">\n											<select id="Duration_selection" class="form-control" name="Duration_selection" #Duration_selection="ngModel" ngModel (change)="autoSaveProduct(\'renew\')">\n												<option value="" selected>-- Select Auto Renew -- </option>\n												<option value="Yes">Yes</option>\n												<option value="No">No</option>\n											</select>\n										</div>\n									</div>\n									<div class="form-group row fixedrateduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Duration </label>\n										<div class="col-lg-3">\n											<select id="Duration1" class="form-control" name="duration" #duration="ngModel" required ngModel (change)="autoSaveProduct(\'fixduration\')">\n												<option value="" selected>-- Select Duration -- </option>\n												<option value="3">3 days</option>\n												<option value="5">5 days</option>\n												<option value="7">7 days</option>\n												<option value="10">10 days</option>\n												<option value="30">30 days</option>\n											</select>\n					\n											<div *ngIf="duration.invalid && (duration.dirty || duration.touched)" class="error-box">\n												<div *ngIf="duration.errors.required">\n													* Select duration.\n												</div>\n											</div>\n											<p class="mb-0 mt-2" *ngIf="Duration_selection?.value == \'Yes\'">\n												Listings renew automatically every 30 days, based on the listing terms at that time,\n												until all quantities sell or the listing ends. Each time a listing renews and when\n												an item sells, youâ€™ll be charged applicable fees.\n											</p>\n											<p class="mb-0 mt-2" *ngIf="Duration_selection?.value == \'No\'">\n												Your listing will end at the end of the selected time if items are unsold.\n											</p>\n										</div>\n									</div>\n									<div class="form-group row">\n										<div class="offset-lg-3 col-lg-9">\n											<div class="row m-0">\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<input type="radio" id="schldLstng_0" name="schldlisting_fixed" value="No" checked (click) = "checkschldlisting(\'no\')">\n													<label for="schldLstng_0">Start my listings when I submit them</label>\n												</div>\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<input type="radio" id="schldLstng_1" name="schldlisting_fixed" value="Yes" (click) = "checkschldlisting(\'yes\')">\n													<label for="schldLstng_1">Schedule to start on</label>\n													<span>\n														<select name="startDate" id="startDate_fixed" title="Start Date" class="selectOptions" disabled="true">\n															<option value="{{dat | date : \'yyyy-MM-dd\'}}" *ngFor="let dat of arr">{{dat | date}}</option>\n														</select>\n													</span>\n													<span>\n														<select name="startTime" id="startTime_fixed" title="Start Time" class="selectOptions" disabled="true">\n															<option value="00" selected="selected">00</option>\n															<option value="01">01</option>\n															<option value="02">02</option>\n															<option value="03">03</option>\n															<option value="04">04</option>\n															<option value="05">05</option>\n															<option value="06">06</option>\n															<option value="07">07</option>\n															<option value="08">08</option>\n															<option value="09">09</option>\n															<option value="10">10</option>\n															<option value="11">11</option>\n															<option value="12">12</option>\n															<option value="13">13</option>\n															<option value="14">14</option>\n															<option value="15">15</option>\n															<option value="16">16</option>\n															<option value="17">17</option>\n															<option value="18">18</option>\n															<option value="19">19</option>\n															<option value="20">20</option>\n															<option value="21">21</option>\n															<option value="22">22</option>\n															<option value="23">23</option>\n														</select>\n													</span>\n													<span>\n														<select name="stTimeMinute" id="stTimeMinute_fixed" title="Minutes" class="selectOptions" disabled="true">\n															<option value="00" selected="selected">00</option>\n															<option value="01">01</option>\n															<option value="02">02</option>\n															<option value="03">03</option>\n															<option value="04">04</option>\n															<option value="05">05</option>\n															<option value="06">06</option>\n															<option value="07">07</option>\n															<option value="08">08</option>\n															<option value="09">09</option>\n															<option value="10">10</option>\n															<option value="11">11</option>\n															<option value="12">12</option>\n															<option value="13">13</option>\n															<option value="14">14</option>\n															<option value="15">15</option>\n															<option value="16">16</option>\n															<option value="17">17</option>\n															<option value="18">18</option>\n															<option value="19">19</option>\n															<option value="20">20</option>\n															<option value="21">21</option>\n															<option value="22">22</option>\n															<option value="23">23</option>\n															<option value="24">24</option>\n															<option value="25">25</option>\n															<option value="26">26</option>\n															<option value="27">27</option>\n															<option value="28">28</option>\n															<option value="29">29</option>\n															<option value="30">30</option>\n															<option value="31">31</option>\n															<option value="32">32</option>\n															<option value="33">33</option>\n															<option value="34">34</option>\n															<option value="35">35</option>\n															<option value="36">36</option>\n															<option value="37">37</option>\n															<option value="38">38</option>\n															<option value="39">39</option>\n															<option value="40">40</option>\n															<option value="41">41</option>\n															<option value="42">42</option>\n															<option value="43">43</option>\n															<option value="44">44</option>\n															<option value="45">45</option>\n															<option value="46">46</option>\n															<option value="47">47</option>\n															<option value="48">48</option>\n															<option value="49">49</option>\n															<option value="50">50</option>\n															<option value="51">51</option>\n															<option value="52">52</option>\n															<option value="53">53</option>\n															<option value="54">54</option>\n															<option value="55">55</option>\n															<option value="56">56</option>\n															<option value="57">57</option>\n															<option value="58">58</option>\n															<option value="59">59</option>\n														</select>\n													</span>\n											\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="form-group row auctionduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n											<span class="text-danger font-weight-bold">*</span>Quantity</label>\n										<div class="col-lg-9">\n											<div class="form-row row">\n												<div class="form-group col-md-3 col-lg-2 pr-lg-2">\n													<input class="form-control" type="number" name="quantity" id="quantity" #quantity="ngModel" required ngModel (change)="autoSaveProduct(\'quantity\')" pattern="^([1-9][0-9]{0,3}?)$">\n												</div>\n												<div *ngIf="quantity.invalid && (quantity.dirty || quantity.touched)" class="error-box form-group col-md-12 col-lg-12 pr-lg-2">\n													<div *ngIf="quantity.errors.required">\n														* Enter quantity.\n													</div>\n													<div *ngIf="quantity.errors.pattern">\n														* The quantity must be a valid number greater than 0 and maximum quantity length is 4.\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n									\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mb-4 front-bg-secondary" *ngIf="setCustomspecification?.Size != \'\'">\n										<h6 class="m-0 text-left">Custom Quantity</h6>\n									</div> 		\n								\n									<div class="form-group row pl-3 pt-2 pb-2 mb-4" *ngIf="setCustomspecification?.Size != \'\'">\n										<ul class="nav nav-tabs w-100 Custom_Item_specifications" role="tablist">\n											<li class="nav-item" *ngIf="size_customQuantity?.length > 0 && selling_type.value == \'Fixed price\'">\n												<a class="nav-link active" href="#custom_Quantity" role="tab" data-toggle="tab">Quantity</a>\n											</li>\n										</ul>\n										<!-- Tab panes -->\n										<div class="tab-content">\n											<div role="tabpanel" class="tab-pane fade in active show" id="custom_Quantity" *ngIf="size_customQuantity?.length > 0 && selling_type.value == \'Fixed price\'">\n												<div *ngFor="let siz_qun of size_customQuantity; let i=index;" class="m-2">\n													<input type="text" disabled value="{{siz_qun}}" class="custom_inputtext_size text-center">\n													<input type="number" placeholder="Enter Quantity" class="custom_inputtext_size w-50" name="custom_sizeQun" required id="{{siz_qun}}" (change)="setQuantityvalue()">\n												</div>\n											</div>\n										</div>\n									</div>\n								\n									<div class="form-group row">\n										<div class="offset-lg-3 col-lg-9">\n											<div class="form-row row">\n												<div class="form-group col-md-12 col-lg-12 pr-lg-2 set-fontSize">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label">Best Offer\n													</label>\n													<label class="custom-control custom-checkbox pl-4">\n														<input type="checkbox" class="custom-control-input" id="BestOffer" (change)="other_Payment(\'BestOffer\')">\n														<span class="custom-control-indicator"></span>\n														<span class="custom-control-description">Let buyers make offers. Being flexible with your price may help your item sell faster</span>\n													</label>\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="form-group row" *ngIf="makeoffertextbox == true">\n										<div class="offset-lg-3 col-lg-9">\n											<div class="form-row row">\n												<div class="form-group col-md-6 col-lg-4 pr-lg-2 col-12 set-fontSize">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label"><span\n															class="text-danger font-weight-bold">*</span>Automatically decline offers lower than\n													</label>\n													<label class="custom-control custom-checkbox p-0 w-100">\n														<input class="form-control w-100" type="number" name="minprice" id="minprice" #minprice="ngModel" required ngModel (change)="autoSaveProduct(\'bestofferminprice\')" pattern="^([1-9][0-9]{0,6}?)$">\n													</label>\n													<div *ngIf="minprice.invalid && (minprice.dirty || minprice.touched)" class="error-box">\n														<div *ngIf="minprice.errors.required">\n															* Enter Min Price.\n														</div>\n														<div *ngIf="minprice.errors.pattern">\n															* The min price must be a valid number greater than 0 and maximum min price length is 7.\n														</div>\n													</div>\n												</div>\n												<div class="form-group col-md-6 col-lg-4 pr-lg-2 col-12 set-fontSize">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label"><span\n															class="text-danger font-weight-bold">*</span>Automatically accept offers of at least\n													</label>\n													<label class="custom-control custom-checkbox p-0 w-100">\n														<input class="form-control w-100" type="number" name="maxprice" id="maxprice" #maxprice="ngModel" required ngModel (change)="checkMaxPrice(maxprice.value,\'BestOffer\')" pattern="^([1-9][0-9]{0,6}?)$">\n													</label>\n													<div *ngIf="maxprice.invalid && (maxprice.dirty || maxprice.touched)" class="error-box">\n														<div *ngIf="maxprice.errors.required">\n															* Enter Max Price\n														</div>\n														<div *ngIf="maxprice.errors.pattern">\n															* The max price must be a valid number greater than 0 and maximum max price length is 7.\n														</div>\n													</div>\n													<div class="error-box Maxprice" id="Maxpriceoffer">\n\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span class="text-danger font-weight-bold">*</span>Payment Options</label>\n									<div class="col-lg-9">\n										<div class="row m-0">\n											<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n												<label class="custom-control custom-checkbox pl-4" for="paypal_check">\n													<input type="checkbox" class="custom-control-input paypal-checkbox" id="paypal_check" value="1" name="payment_opt" (change)="disableText()">\n													<span class="custom-control-indicator"></span>\n													<span class="custom-control-description">PayPal</span>\n												</label>\n											</div>\n											<div class="showPaypaldiv d-none w-100">\n												<div class="col-lg-4 col-md-6 col-12 p-0 pt-2">\n													<p>Email address for receiving payment: </p>\n												</div>\n												<div class="col-lg-4 col-md-5 col-12 p-0">\n													<input class="form-control receiving-payment-email" type="text" name="paypal_email" id="paypal_text" email="true" disabled="true" (change)="checkPaypalEmail(paypalEmail.value)" #paypalEmail [value]="localItem?.payment_email" required>\n\n													<span><i class="fa fa-close" style="font-size: 24px;position: relative;color:red;top: -4px;" *ngIf="verificationResponsebusiness?.responseEnvelope.ack == \'Failure\';else showrightSign"></i></span>\n													<ng-template #showrightSign>\n														<span class="hideRigthCircle"><i class="fa fa-check-circle" style="font-size: 24px;position: relative;color:green;top: -4px;"></i></span>\n													</ng-template>\n													<div class="error-box" *ngIf="verificationResponsebusiness?.responseEnvelope.ack == \'Failure\'">Please enter valid Paypal email address</div>\n												</div>\n											</div>\n										</div>\n										<div class="row m-0">\n											<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n												<label class="custom-control custom-checkbox pl-4">\n													<input type="checkbox" class="custom-control-input cash-checkbox" name="payment_opt" value="2" id="cash" (change)="autoSaveProduct(\'cashSelect\')">\n													<span class="custom-control-indicator"></span>\n													<span class="custom-control-description">Cash on delivery</span>\n												</label>\n											</div>\n										</div>\n									</div>\n								</div>\n\n								<div class="mt-3 p-0">\n									<div class="form-group row">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize">Discount (%)</label>\n										<div class="col-lg-9">\n											<div class="col-lg-2 col-md-5 col-12 p-0 set-fontSize">\n												<input class="form-control" type="number" pattern="^$|^([1-9]|[1-9][0-9]|[1][0][0])?" name="discount" #discount="ngModel" ngModel placeholder="Min: 1, Max: 100" id="discountval" (change)="autoSaveProduct(\'discount\')">\n												<div *ngIf="discount.invalid && (discount.dirty || discount.touched)" class="error-box">\n													<div *ngIf="discount.errors.pattern">\n														Number should be between 1 and 100.\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n									\n									<div class="form-group row">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Return Options</label>\n										<div class="col-lg-9">\n											<div class="row m-0">\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<input type="radio" id="return-accepted" name="return_opt" [value]="true" [checked]="return_opt" [(ngModel)]="return_opt" required #returnOption="ngModel" (change)="autoSaveProduct(\'returnaccept\')" >\n													<label for="return-accepted">Returns Accepted</label>\n												</div>\n												<div class="col-lg-4 col-md-12 col-12 p-0" id="recieving-days" *ngIf="return_opt">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label set-fontSize">\n														<span class="text-danger font-weight-bold">*</span>After receiving the item, your buyer should contact you within:</label>\n													<select id="itemReturnedWithin" class="form-control" size="0" name="returnopt" #returnopt="ngModel" required ngModel (change)="autoSaveProduct(\'returnopt\')">\n														<option value="" selected> -- Select Days -- </option>\n														<option *ngFor="let return_data of show_feesData?.return_days" value="Days_{{return_data}}">{{return_data}} <span *ngIf="return_data == 1">Day</span><span *ngIf="return_data != 1">Days</span></option>\n													</select>\n													<div *ngIf="returnopt.invalid && (returnopt.dirty || returnopt.touched)" class="error-box">\n														<div *ngIf="returnopt.errors.required">\n															* Select days.\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-12 col-xl-12 col-md-12 col-12 mt-3 p-0" *ngIf="return_opt">\n													<div class="form-row row">\n														<div class="form-group col-md-12 col-lg-4 pr-lg-2 set-fontSize">\n															<label class="col-lg-12 pl-0 col-form-label form-control-label">\n																<span class="text-danger font-weight-bold">*</span>Return shipping will be paid by:</label>\n															<select id="returnby" class="form-control" size="0" name="returnby" #returnby="ngModel" required ngModel (change)="autoSaveProduct(\'returnby\')">\n																<option value="" selected> -- Select Return shipping -- </option>\n																<option value="buyer">Buyer</option>\n																<option value="seller">Seller</option> <!-- (Free Returns) -->\n															</select>\n															<div *ngIf="returnby.invalid && (returnby.dirty || returnby.touched)" class="error-box">\n																<div *ngIf="returnby.errors.required">\n																	* Select Return shipping.\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-12 col-xl-12 col-md-12 col-12 mt-3 p-0" *ngIf="return_opt">\n													<div class="form-row row">\n														<div class="form-group col-md-12 col-lg-4 pr-lg-0 set-fontSize">\n															<label class="col-lg-12 pl-0 col-form-label form-control-label">\n																<span class="text-danger font-weight-bold">*</span>Return Policy\n															</label>\n															<textarea class="form-control" rows="3" id="returnpolicy" name="returnpolicy" #returnpolicy="ngModel" required ngModel (change)="autoSaveProduct(\'returnpolicy\')"></textarea>\n															<div *ngIf="returnpolicy.invalid && (returnpolicy.dirty || returnpolicy.touched)" class="error-box">\n																<div *ngIf="returnpolicy.errors.required">\n																	* Enter Return Policy.\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-12 col-md-12 col-12 pt-4 pl-0 pb-0 pr-0 set-fontSize">\n													<input type="radio" id="no-return" name="return_opt" [(ngModel)]="return_opt" type="radio" [value]="false" [checked]="!return_opt" required (change)="autoSaveProduct(\'noreturnaccept\')">\n													<label for="no-return">No Returns Accepted</label>\n												</div>\n												<div *ngIf="returnOption.invalid" class="error-box">\n													<div *ngIf="returnOption.errors.required">\n														* Select return option.\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mb-4 front-bg-secondary">\n										<h6 class="m-0 text-left">Shipping details</h6>\n									</div>\n									\n									<div class="form-group row">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Shipment Type</label>\n										<div class="col-lg-9">\n											<div class="row m-0">\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<label class="custom-control custom-checkbox pl-4">\n														<input type="checkbox" class="custom-control-input" name="shipment_type" value="By Courier" id="CourierService">\n														<span class="custom-control-indicator"></span>\n														<span class="custom-control-description">Courier Service</span>\n													</label>\n												</div>\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<label class="custom-control custom-checkbox pl-4">\n														<input type="checkbox" class="custom-control-input" name="shipment_type" value="By Seller" id="DirectSeller">\n														<span class="custom-control-indicator"></span>\n														<span class="custom-control-description">Collect From Seller</span>\n													</label>\n												</div>\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<label class="custom-control custom-checkbox pl-4">\n														<input type="checkbox" class="custom-control-input" name="shipment_type" value="Other" id="Other" (change)="other_Payment(\'shipment_type\')">\n														<span class="custom-control-indicator"></span>\n														<span class="custom-control-description">Other</span>\n													</label>\n												</div>\n											</div>\n										</div>\n									</div>\n									\n									<div class="form-group row contactmessage" *ngIf="otherPayment == true">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span class="text-danger font-weight-bold">*</span>Other Shipment</label>\n										<div class="col-lg-3 pl-2">\n											<textarea class="form-control" rows="3" id="OtherShipment" (change)="autoSaveProduct(\'checkOthership\')"></textarea>\n										</div>\n									</div>\n\n									<div class="form-group row">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n											<span class="text-danger font-weight-bold">*</span>Product Address</label>\n										<div class="col-lg-4 pl-2 mb-3 mb-lg-0">\n											<input type="text" class="form-control setAreaCommunity" placeholder="Area,Community" id="area_community" name="area_community" #area_community="ngModel" required ngModel (change)="autoSaveProduct(\'addedarea_community\')" >\n											<div *ngIf="area_community.invalid && (area_community.dirty || area_community.touched)" class="error-box">\n												<div *ngIf="area_community.errors.required">\n													* Enter Area,Community.\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-5 pl-2">\n											<ng4geo-autocomplete [userSettings]="userSettings" (componentCallback)="autoCompleteCallback1($event)"></ng4geo-autocomplete>\n										</div>\n										\n									</div>\n									\n									<div class="form-group row" class="d-none">\n										<div class="offset-lg-3 col-lg-9">\n											<iframe id="mapiframe" class="d-none" src="" width="100%" height="500px" frameborder="0" style="border:0"></iframe>\n										</div>\n									</div>\n									\n									<div class="form-group row">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Days to disptach from seller<span\n												class="font-weight-normal"> </span></label>\n										<div class="col-lg-2 pl-2">\n											<input class="form-control" type="text" name="delivery_days" id="delivery_days" #delivery_days="ngModel" required ngModel pattern="^$|^([1-9]|[1-9][0-9]|[1][0][0])?" (change)="autoSaveProduct(\'delivery_days\')" maxlength="3">\n											<div *ngIf="delivery_days.invalid && (delivery_days.dirty || delivery_days.touched)" class="error-box">\n												<div *ngIf="delivery_days.errors.required">\n													* Enter delivery days.\n												</div>\n												<div *ngIf="delivery_days.errors.pattern">\n													* Enter a number between 1 to 100.\n												</div>\n											</div>\n										</div>\n									</div>\n									\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0 set-fontSize">\n										<div class="alert alert-danger alert-dismissible hide" id="dangeralert" role="alert">\n											<a class="close" (click)="closeDiv_Delete()">&times;</a>\n											<span id="dangerspan">Please Select Product Images.</span>\n										</div>\n									</div>\n									\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-2 set-fontSize background_fees">\n										<div class="row m-0">\n											<div class="col-lg-2 col-md-3 col-xl-2 col-4 pt-1 pl-0 pr-0 set-fontSize">\n												<h6 class="mb-0">Fees:</h6>\n											</div>\n											<div class="col-lg-10 col-md-8 col-xl-10 col-8 pt-2 pl-0 pr-0">\n												<h6 class="mb-0">{{add_product_val?.seller_fee | number:\'1.2-2\'}} AED</h6>\n											</div>\n										</div>\n									</div>\n\n									<div class="text-center col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0 set-fontSize">\n										<span id="buyerError" class="hide text-danger">Your are now buyer,Please login as a Seller or convert profile to Seller.</span>\n										<span class="d-none text-danger Payment_Opt"><b>Please select Payment Option</b></span>\n										<span class="d-none text-danger addProduct-errorMessage"></span>\n										<span class="d-none text-danger ShipmentSelectalert"><b>Please select Shipment Type.</b></span>\n										<span class="d-none text-danger duration_future"><b>The featured deals day must be less than or equal to the duration.</b></span>\n										<span class="d-none text-danger product_address"><b>Please enter product address.</b></span>\n										<span class="d-none text-danger productMSG_buyitprice"><b>Buy It Now price should be at least 30% more than your starting price.</b></span>\n										<span class="d-none text-danger productMSG_quantysize"><b>Please enter quantity by specific size.</b></span>\n										<span class="text-danger productMSG_quantitygreater"></span>\n									</div>\n									\n									<div class="form-group row mt-3 mb-4 add-product-form">\n										<div class="offset-lg-2 col-lg-3 col-md-4 col-12 mt-1 mb-1">\n											<button type="submit" class="btn theme-light-btn" (click)="addProduct()" [disabled]="!frm.form.valid || !loginForm.valid">Add Product</button> <!--   -->\n										</div>\n\n										<div class="col-lg-3 col-md-4 col-12 mt-1 mb-1">\n											<button class="btn theme-light-btn" [disabled]="!frm.form.valid || !loginForm.valid" (click)="previewData()">\n												Preview Your Product\n											</button>\n										</div>\n\n										<div class="col-lg-3 col-md-4 col-12 mt-1 mb-1">\n											<button type="reset" class="btn theme-light-btn" (click)="resetForm()">Reset</button>\n										</div>\n									</div>\n								</div>\n							</form>\n						</div>\n					</div>\n				</div>\n\n				<ng-template #showImageadd>\n					<div clas="row">\n						<div class="col-lg-12 col-md-12 col-12 text-center mt-3 p-0">\n							<img src="assets/images/tick-512.png" width="100px" height="100px">\n						</div>\n						<div class="col-lg-12 col-md-12 col-12 text-center mt-3 p-0">\n							<h5 class="m-1">Great we\'ve received your listing and it is currently being approved.</h5>\n							<h5 class="m-1">You are moments away from great things.</h5>\n						</div>\n <div class="col-lg-12 col-md-12 col-12 text-center mt-3 p-0">\n<h5 class="m-1">Don\'t stop add another</h5>\n<a href="#/draft-listing" class="btn theme-light-btn">Click Here</a>\n</div>\n					</div>\n				</ng-template>\n			</div>\n		</div>\n		<!--================Footer Area =================-->\n		<footer-page>\n\n		</footer-page>\n	</div>\n<div id="myModal" class="modal fade" role="dialog" style="display: none">\n<div class="modal-dialog">\n<div class="modal-content">\n<div class="modal-header">\n<button type="button" class="close" data-dismiss="modal">&times;</button>\n<h4 class="modal-title">Modal Header</h4>\n</div>\n<div class="modal-body">\n<p>Some text in the modal.</p>\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n</div>\n</div>\n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/product/add-product/add-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_photo_photo__["a" /* PhotoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], AddProductPage);
    return AddProductPage;
}());

//# sourceMappingURL=add-product.js.map

/***/ })

});
//# sourceMappingURL=10.js.map