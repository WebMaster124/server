webpackJsonp([9],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteListPageModule", function() { return CompleteListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complete_list__ = __webpack_require__(839);
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







var CompleteListPageModule = /** @class */ (function () {
    function CompleteListPageModule() {
    }
    CompleteListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__complete_list__["a" /* CompleteListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__complete_list__["a" /* CompleteListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng4_geoautocomplete__["a" /* Ng4GeoautocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__["CKEditorModule"]
            ],
        })
    ], CompleteListPageModule);
    return CompleteListPageModule;
}());

//# sourceMappingURL=complete-list.module.js.map

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

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_photo_photo__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompleteListPage = /** @class */ (function () {
    function CompleteListPage(googleanalytics, alertCtrl, loading, _PHOTO, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this._PHOTO = _PHOTO;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view_product_val = {
            user_id: '',
            product_id: ''
        };
        this.ifproductedit = false;
        this.makeoffertextbox = false;
        this.showsellDealDays = false;
        this.size_customQuantity = [];
        this.edit_product_val = {
            user_id: '',
            id: '',
            title: '',
            subtitle: '',
            category_id: '',
            isbn: '',
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
            //description:'',
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
            removeImages: [],
            secondary_cat_ids: [],
            make_offer: 0,
            seller_fee: 0,
            deals_days: 0,
            return_policy: '',
            season_deal: '',
            fees_details: {},
            changes: {},
            discount: 0,
            renew: '',
            status: 8,
            schedule_date: '',
            from_product: '',
            season_day: 0,
            sq: {}
        };
        this.setCustomspecification = {
            Color: '',
            Size: '',
            Color_selected: '',
            Size_selected: ''
        };
        this.retrievedObject = localStorage.getItem('userInfo');
        this.return_opt = false;
        this.otherPayment = false;
        this.otherPayment_text = "";
        this.subTotalFees = 0;
        this.daiydealsFees = 0;
        this.sellseasonFees = 0;
        this.categoryFees = 0;
        this.verificationResponsebusiness = null;
        this.userSettings = {
            showCurrentLocation: true,
            showSearchButton: false,
            useGoogleGeoApi: true,
            locationIconUrl: "assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
            geoCountryRestriction: ['ae', 'kw', 'om', 'qa', 'sa']
        };
        this.config = {
            removeButtons: 'ImageButton,Flash,CreatePlaceholder,HorizontalRule,Smiley,PageBreak,Iframe,InsertPre,Form,Checkbox,Radio,TextField,Textarea,Select,Button,HiddenField,NewPage,Templates,Find,Save,Print,Replace,SpellChecker,Preview,About,Maximize,ShowBlocks',
        };
        this.size_customQuantity_first = [];
        this.view_product_val.product_id = this.navParams.data.id;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = JSON.parse(this.retrievedObject);
            this.view_product_val.user_id = this.localItem.id;
        }
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('CompleteProduct');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
            this.userSettings.showCurrentLocation = false;
        }
    }
    CompleteListPage.prototype.ngAfterViewInit = function () {
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
    CompleteListPage.prototype.ionViewWillEnter = function () {
        $(document).prop('title', 'Update template');
        $('body').removeClass().addClass('CompleteProduct body');
        $(".zoomContainer").remove();
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
            var input = $(this);
            if (!input.data('minSize') && !input.data('maxSize')) {
                return;
            }
            var widget = uploadcare.Widget(input);
            widget.validators.push(self.fileSizeLimit(input.data('minSize'), input.data('maxSize')));
        });
        //Display Images
        var total = 0;
        var singleWidget = uploadcare.MultipleWidget('[role=uploadcare-uploader]');
        singleWidget.onUploadComplete(function (info) {
            $('.image-preview-muliple').empty();
            total = info.count + $('#image_preview div').length;
            var uploadedFile = $('#image_preview div').length;
            self.remaining = 10 - uploadedFile;
            if (total < 10) {
                var count_img_1 = 0;
                for (var img = 0; img < info.count; img++) {
                    self.convertFileToDataURLviaFileReader(info.cdnUrl + 'nth/' + img + '/', function (fileEntry) {
                        count_img_1++;
                        $('#image_preview_append').append("<div class='col-lg-2 col-sm-6 col-md-3 col-6 p-2'><img class='img-fluid add-product-img' src='" + fileEntry + "'><input type='hidden' value='" + fileEntry + "' class='hidde_val'></div>");
                        self.edit_product_val.photos.push(fileEntry);
                        if (info.count == count_img_1) {
                            singleWidget.value(info);
                            setTimeout(function () {
                                self.autoSaveProduct('photoupload');
                            }, 1000);
                        }
                    });
                }
                $(function () {
                    $("#image_preview_append").sortable();
                    $("#image_preview_append").disableSelection();
                });
            }
            else {
                var count_imgRemaining_1 = 0;
                for (var img = 0; img < self.remaining; img++) {
                    self.convertFileToDataURLviaFileReader(info.cdnUrl + 'nth/' + img + '/', function (fileEntry) {
                        count_imgRemaining_1++;
                        $('#image_preview_append').append("<div class='col-lg-2 col-sm-6 col-md-3 col-6 p-2'><img class='img-fluid add-product-img' src='" + fileEntry + "'><input type='hidden' value='" + fileEntry + "' class='hidde_val'></div>");
                        self.edit_product_val.photos.push(fileEntry);
                        if (self.remaining == count_imgRemaining_1) {
                            singleWidget.value(info);
                            setTimeout(function () {
                                self.autoSaveProduct('photoupload');
                            }, 1000);
                        }
                    });
                }
                $(function () {
                    $("#image_preview_append").sortable();
                    $("#image_preview_append").disableSelection();
                });
            }
        });
        /*Image Widget crop End*/
    };
    CompleteListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        try {
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/view-product-edit', this.view_product_val, function (response) {
                _this.view_Product = response.product;
                _this.checkSaesonDeal(response.product.data.parent_cat_id);
                var get_price = parseFloat(response.product.data.price);
                var get_catCharge = parseFloat(response.product.data.sub_cat_charge);
                _this.categoryFees = ((get_price * get_catCharge) / 100);
                _this.edit_product_val.user_id = _this.localItem.id;
                _this.edit_product_val.id = _this.view_Product.data.id;
                _this.edit_product_val.title = _this.view_Product.data.title;
                _this.edit_product_val.subtitle = _this.view_Product.data.subtitle;
                _this.edit_product_val.category_id = _this.view_Product.data.category_id;
                _this.edit_product_val.isbn = _this.view_Product.data.isbn;
                _this.edit_product_val.settype_id = _this.view_Product.data.settype_id;
                _this.edit_product_val.brand_id = _this.view_Product.data.brand_id;
                _this.edit_product_val.p_condition = _this.view_Product.data.p_condition;
                _this.edit_product_val.daily_deal = _this.view_Product.data.daily_deal;
                _this.edit_product_val.deals_days = _this.view_Product.data.deals_days;
                _this.edit_product_val.delivery_days = _this.view_Product.data.delivery_days;
                _this.edit_product_val.condition_description = _this.view_Product.data.condition_description;
                _this.edit_product_val.selling_type = _this.view_Product.data.selling_type;
                _this.edit_product_val.duration = _this.view_Product.data.duration;
                _this.edit_product_val.quantity = _this.view_Product.data.quantity;
                _this.edit_product_val.paypal_email = _this.view_Product.data.paypal_email;
                _this.edit_product_val.min_price = _this.view_Product.data.min_price;
                _this.edit_product_val.price = _this.view_Product.data.price;
                _this.edit_product_val.max_price = _this.view_Product.data.max_price;
                _this.edit_product_val.return_opt = _this.view_Product.data.return_opt;
                _this.edit_product_val.product_address = _this.view_Product.data.product_address;
                _this.edit_product_val.warrenty = _this.view_Product.data.warrenty;
                _this.edit_product_val.ship_to = _this.view_Product.data.ship_to;
                _this.edit_product_val.make_offer = _this.view_Product.data.make_offer;
                _this.edit_product_val.seller_fee = _this.view_Product.data.seller_fee;
                _this.edit_product_val.return_policy = _this.view_Product.data.return_policy;
                _this.edit_product_val.season_deal = _this.view_Product.data.season_deal;
                _this.edit_product_val.discount = _this.view_Product.data.discount;
                _this.edit_product_val.renew = _this.view_Product.data.renew;
                _this.edit_product_val.season_day = _this.view_Product.data.season_day;
                if (response.product.data.season_deal == "Yes") {
                    _this.showsellDealDays = true;
                }
                else {
                    _this.showsellDealDays = false;
                }
                if (response.product.data.payment_opt.length > 0) {
                    _this.edit_product_val.payment_opt = response.product.data.payment_opt.join(",");
                }
                if (response.product.data.shipment_type.length > 0) {
                    _this.edit_product_val.shipment_type = response.product.data.shipment_type.join(",");
                }
                if (_this.view_Product.data.specification.length <= 0) {
                    for (var sp = 0; sp < _this.view_Product.specification.specification.length; sp++) {
                        if (_this.view_Product.specification.specification[sp].type == "3") {
                            if (_this.view_Product.specification.specification[sp].label == "Color") {
                                _this.setCustomspecification.Color = _this.view_Product.specification.specification[sp].value;
                            }
                            if (_this.view_Product.specification.specification[sp].label == "Size") {
                                _this.setCustomspecification.Size = _this.view_Product.specification.specification[sp].value;
                            }
                        }
                    }
                }
                else {
                    for (var sp = 0; sp < _this.view_Product.specification.specification.length; sp++) {
                        if (_this.view_Product.specification.specification[sp].type == "3") {
                            if (_this.view_Product.specification.specification[sp].label == "Color") {
                                _this.setCustomspecification.Color = _this.view_Product.specification.specification[sp].value;
                                _this.setCustomspecification.Color_selected = _this.view_Product.specification.specification[sp].selectedValue;
                            }
                            if (_this.view_Product.specification.specification[sp].label == "Size") {
                                _this.setCustomspecification.Size = _this.view_Product.specification.specification[sp].value;
                                _this.setCustomspecification.Size_selected = _this.view_Product.specification.specification[sp].selectedValue;
                                _this.size_customQuantity = _this.view_Product.specification.specification[sp].selectedValue;
                            }
                        }
                    }
                }
                if (response.product.data.specification != false) {
                    _this.edit_product_val.specification = response.product.data.specification;
                    _this.Item_Description = _this.view_Product.data.specification[0].Item_Description[0];
                }
                else {
                    if (response.product.data.specification.length <= 0 || response.product.data.specification == false) {
                        _this.edit_product_val.specification = [];
                        _this.Item_Description = '';
                    }
                    else {
                        _this.edit_product_val.specification = response.product.data.specification;
                        _this.Item_Description = _this.view_Product.data.specification[0].Item_Description[0];
                    }
                }
                for (var i = 0; i < response.product.data.shipment_type.length; i++) {
                    if (response.product.data.shipment_type[i] == 'By Courier')
                        $('input[type=checkbox][name=shipment_type][value="By Courier"]').prop('checked', true);
                    if (response.product.data.shipment_type[i] == 'By Seller')
                        $('input[type=checkbox][name=shipment_type][value="By Seller"]').prop('checked', true);
                    if (response.product.data.shipment_type[i] != 'By Courier' && response.product.data.shipment_type[i] != 'By Seller' && response.product.data.shipment_type[i] != '') {
                        document.getElementById('Other').checked = true;
                        _this.otherPayment = true;
                        _this.otherPayment_text = response.product.data.shipment_type[i];
                    }
                }
                for (var p = 0; p < response.product.data.payment_opt.length; p++) {
                    $('input[type=checkbox][name=payment_opt][value="' + response.product.data.payment_opt[p] + '"]').prop('checked', true);
                    if (response.product.data.payment_opt[p] == '1') {
                        $('.showPaypaldiv').removeClass('d-none');
                    }
                }
                var self = _this;
                _this.sub_catText = response.product.data.sub_category_name;
                _this.ItemSpecificationData = response.product.specification.specification;
                setTimeout(function () {
                    $('#search_places').val(response.product.data.product_address);
                    if (response.product.data.daily_deal == 'Yes')
                        $("#daily_dealDay option[id='" + response.product.data.deals_days.toString() + "']").attr('selected', 'selected');
                    if (response.product.data.season_deal == 'Yes')
                        $("#Season_dealsDay option[id='" + response.product.data.season_day.toString() + "']").attr('selected', 'selected');
                    if (response.product.data.selling_type == 'Auction style') {
                        $('#Duration').val(response.product.data.duration);
                        if (response.product.data.schedule_date == '' || response.product.data.schedule_date == null) {
                            document.getElementById('schldLstng_0Auction').checked = true;
                        }
                        else {
                            document.getElementById('schldLstng_1Auction').checked = true;
                            var gtdte = response.product.data.schedule_date.split(' ');
                            $('.selectOptions#startDate').val(gtdte[0]);
                            var gtTime = gtdte[1].split(':');
                            $('.selectOptions#startTime').val(gtTime[0]);
                            $('.selectOptions#stTimeMinute').val(gtTime[1]);
                            $('.selectOptions').attr('disabled', false);
                        }
                    }
                    else if (response.product.data.selling_type == 'Fixed price') {
                        if (response.product.data.schedule_date == '' || response.product.data.schedule_date == null) {
                            document.getElementById('schldLstng_0').checked = true;
                        }
                        else {
                            var gtdte = response.product.data.schedule_date.split(' ');
                            $('.selectOptions#startDate_fixed').val(gtdte[0]);
                            var gtTime = gtdte[1].split(':');
                            $('.selectOptions#startTime_fixed').val(gtTime[0]);
                            $('.selectOptions#stTimeMinute_fixed').val(gtTime[1]);
                            document.getElementById('schldLstng_1').checked = true;
                            $('.selectOptions').attr('disabled', false);
                        }
                        $('#Duration1').val(response.product.data.duration);
                        if (response.product.data.make_offer == 1)
                            self.makeoffertextbox = true;
                        else
                            self.makeoffertextbox = false;
                    }
                    if (response.product.data.return_opt == "No" || response.product.data.return_opt == null) {
                        self.return_opt = false;
                        document.getElementById('no-return').checked = true;
                    }
                    else if (response.product.data.return_opt != "No" && response.product.data.return_opt != null) {
                        self.return_opt = true;
                        document.getElementById('return-accepted').checked = true;
                    }
                    if (response.product.data.renew == "Yes") {
                        $('#Duration_selection').val('Yes');
                    }
                    else {
                        $('#Duration_selection').val('No');
                    }
                    if (response.product.data.isbn == '0' || response.product.data.isbn == null) {
                        $('#user_time_zone').val('0');
                    }
                    else {
                        $('#user_time_zone').val('1');
                    }
                    if (response.product.data.sq != '') {
                        var sqData = Object.entries(response.product.data.sq);
                        for (var s = 0; s < sqData.length; s++) {
                            $("input[name=custom_sizeQun][id='" + sqData[s][0] + "']").val(sqData[s][1]);
                        }
                    }
                }, 2000);
                _this.infoService.hideLoading();
                for (var j = 0; j < _this.view_Product.data.photos.length; j++) {
                    $('#image_preview').append("<div class='col-lg-3 col-sm-6 col-md-3 col-sm-12 col-12 p-2'><span class='close'>&times;</span><img class='img-fluid add-product-img' src='" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/' + _this.view_Product.data.id + '/S/' + _this.view_Product.data.photos[j] + "'></div>");
                }
                _this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/category/view-category', '', function (response) {
                    _this.show_category = response.categories;
                    _this.showFees();
                }, function (error) {
                    console.log(error);
                });
                $('.close').on('click', function () {
                    var imgSRC = $(this).parent().find('img').attr('src');
                    var imgName = imgSRC.substr(imgSRC.lastIndexOf('/') + 1);
                    self.edit_product_val.removeImages.push(imgName);
                    $(this).parent().remove();
                });
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
    CompleteListPage.prototype.autoCompleteCallback1 = function (selectedData) {
        if (selectedData.response == true) {
            this.edit_product_val.product_address = selectedData.data.description;
            this.autoSaveProduct('productAddress');
        }
        else {
            this.edit_product_val.product_address = '';
            this.autoSaveProduct('productAddress');
        }
    };
    CompleteListPage.prototype.selectImage = function () {
        var _this = this;
        this._PHOTO.selectImage().then(function (data) {
            if (data != '0') {
                var self = _this;
                if ($('#image_preview div').length < 11) {
                    $('.image-preview-muliple').append("<div class='col-lg-3 col-sm-6 col-md-3 col-sm-12 col-12 p-2'><span class='close'>&times;</span><img class='img-fluid add-product-img' src='" + data + "'><input type='hidden' value='" + data + "' class='hidde_val'></div>");
                    self.edit_product_val.photos.push(data);
                    setTimeout(function () {
                        self.autoSaveProduct('photoupload');
                    }, 1000);
                    $('.close').on('click', function () {
                        $(this).parent().remove();
                    });
                }
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    CompleteListPage.prototype.showSpec = function (val) {
        var _this = this;
        $('#categories_second option').show();
        $('#categories_second option[value="' + val + '"]').hide();
        try {
            var show_itemSpec = {
                category_id: val
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/view-specification', show_itemSpec, function (response) {
                if (response.specification.data.length > 0 && response.specification.status == "success") {
                    _this.sub_catText = $("#subcategories_select option:selected").text();
                    _this.view_Product.specification.specification = response.specification.data[0].specification;
                    _this.edit_product_val.title = $('#main_title_text').val();
                    _this.edit_product_val.subtitle = $('#suntitle_text').val();
                    _this.edit_product_val.category_id = $('#subcategories_select').val();
                    _this.setCustomspecification.Color = '';
                    _this.setCustomspecification.Size = '';
                    for (var sp = 0; sp < response.specification.data[0].specification.length; sp++) {
                        if (response.specification.data[0].specification[sp].type == "3") {
                            if (response.specification.data[0].specification[sp].label == "Color") {
                                _this.setCustomspecification.Color = response.specification.data[0].specification[sp].value;
                            }
                            if (response.specification.data[0].specification[sp].label == "Size") {
                                _this.setCustomspecification.Size = response.specification.data[0].specification[sp].value;
                            }
                        }
                    }
                    _this.showcategoryFees();
                }
                else {
                    _this.view_Product.specification.specification = response.specification.data;
                    _this.sub_catText = "Not";
                    _this.showcategoryFees();
                    //this.autoSaveProduct('primarycategory');
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    //Convert To Base64
    CompleteListPage.prototype.convertFileToDataURLviaFileReader = function (url, callback) {
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
    };
    /*Image Widget crop Check File Size */
    CompleteListPage.prototype.fileSizeLimit = function (min, max) {
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
    CompleteListPage.prototype.showFees = function () {
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
        }, function (error) {
            console.log(error);
        });
    };
    CompleteListPage.prototype.showDailyfees = function (val) {
        if (val == "" || val == undefined)
            this.daiydealsFees = 0;
        else
            this.daiydealsFees = parseFloat(val);
        this.calculateFees();
        this.autoSaveProduct('Featured Deals');
    };
    CompleteListPage.prototype.showsellDayfees = function (val) {
        if (val == "" || val == null)
            this.sellseasonFees = 0;
        else
            this.sellseasonFees = parseFloat(val);
        this.calculateFees();
        this.autoSaveProduct('Season Deals');
    };
    CompleteListPage.prototype.showsubtotalFees = function () {
        if ($('#subtitle_text').val() == '')
            this.subTotalFees = 0;
        else
            this.subTotalFees = parseFloat(this.show_feesData.data.subtitle_fee);
        this.calculateFees();
        this.autoSaveProduct('subTitle');
    };
    CompleteListPage.prototype.showcategoryFees = function () {
        var price_cal;
        if ($('#Format').val() == "Auction style") {
            price_cal = parseFloat($('#format1_price').val());
        }
        else if ($('#Format').val() == "Fixed price") {
            price_cal = parseFloat($('#format1_price').val());
        }
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
        var singlecat = parseFloat(this.view_Product.data.sub_cat_charge);
        if (isNaN(singlecat) && isNaN(price_cal))
            this.categoryFees = 0;
        else if (isNaN(singlecat))
            this.categoryFees = 0;
        else if (isNaN(price_cal))
            this.categoryFees = 0;
        else {
            var total_price = ((singlecat * price_cal) / 100);
            this.categoryFees = total_price;
        }
        this.calculateFees();
        this.autoSaveProduct('price');
    };
    CompleteListPage.prototype.calculateFees = function () {
        var total;
        var insertionfee = parseFloat(this.show_feesData.data.insertion_fee);
        if ($('#subtitle_text').val() == '')
            this.subTotalFees = 0;
        else
            this.subTotalFees = parseFloat(this.show_feesData.data.subtitle_fee);
        if ($('#daily_deal').val() == 'Yes')
            this.daiydealsFees = parseFloat($('#daily_dealDay').val());
        else
            this.daiydealsFees = 0;
        if ($('#Season_deals').val() == 'Yes')
            this.sellseasonFees = parseFloat($('#Season_dealsDay').val());
        else
            this.sellseasonFees = 0;
        total = insertionfee + this.daiydealsFees + this.subTotalFees + this.categoryFees + this.sellseasonFees;
        this.edit_product_val.seller_fee = total;
        this.view_Product.data.seller_fee = this.edit_product_val.seller_fee;
    };
    CompleteListPage.prototype.disableText = function () {
        if ($('#paypal_check').prop('checked') == true) {
            $('#paypal_text').val(this.localItem.payment_email);
            $('.showPaypaldiv').removeClass('d-none');
        }
        else {
            $('.showPaypaldiv').addClass('d-none');
        }
    };
    CompleteListPage.prototype.change_date = function () {
        if ($('#return-accepted').prop('checked') == true) {
            this.return_opt = true;
            this.autoSaveProduct('returnopt');
        }
        else {
            this.return_opt = false;
            this.autoSaveProduct('noreturnaccept');
        }
    };
    CompleteListPage.prototype.showData = function (val) {
        this.view_Product.data.selling_type = val;
        this.autoSaveProduct(val);
    };
    CompleteListPage.prototype.showDays = function (val) {
        this.view_Product.data.daily_deal = val;
        this.showDailyfees(val);
    };
    CompleteListPage.prototype.other_Payment = function (val) {
        if (val == 'shipment_type') {
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
    CompleteListPage.prototype.chngeISBN = function (val) {
        this.view_Product.data.isbn = val;
        this.autoSaveProduct(val);
    };
    CompleteListPage.prototype.closeDiv_Delete = function () {
        $('#dangeralert').addClass('hide');
    };
    CompleteListPage.prototype.checkPaypalEmail = function (val) {
        var _this = this;
        var pass_data = {
            paypal_email: val
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
    CompleteListPage.prototype.checkMaxPrice = function (val_price, val) {
        if (val == "Auction-style") {
            this.autoSaveProduct('maxPrice');
        }
        else if (val == "BestOffer") {
            this.autoSaveProduct('bestoffermaxPrice');
        }
    };
    CompleteListPage.prototype.onBlur = function (val) {
        if ($('#Item_Description').val().length <= 0)
            return false;
        this.autoSaveProduct('itemDesc');
    };
    CompleteListPage.prototype.autoSaveProduct = function (val) {
        var _this = this;
        if (val == 'primarycategory') {
            this.edit_product_val.title = $('#main_title_text').val();
            this.edit_product_val.subtitle = $('#suntitle_text').val();
            this.edit_product_val.category_id = $('#subcategories_select').val();
        }
        else if (val == 'Featured Deals') {
            if ($('#daily_deal').val() == 'Yes') {
                this.edit_product_val.deals_days = $('#daily_dealDay').children(":selected").attr("id");
                this.edit_product_val.daily_deal = $('#daily_deal').val();
            }
            else {
                this.edit_product_val.daily_deal = $('#daily_deal').val();
            }
        }
        else if (val == 'Season Deals') {
            if ($('#Season_deals').val() == 'Yes') {
                this.edit_product_val.season_day = $('#Season_dealsDay').children(":selected").attr("id");
                this.edit_product_val.season_deal = $('#Season_deals').val();
            }
            else {
                this.edit_product_val.season_deal = $('#Season_deals').val();
            }
        }
        else if (val == 0) {
            this.edit_product_val.isbn = '0';
        }
        else if (val == 'addedIsbn') {
            this.edit_product_val.isbn = $('#upc_isbn').val();
        }
        else if (val == 'conditionItem') {
            this.edit_product_val.p_condition = $('#condition_select').val();
        }
        else if (val == 'conditionDesc') {
            this.edit_product_val.condition_description = $('#comment').val();
            if ($('#categories_second').val() != '')
                this.edit_product_val.secondary_cat_ids = $('#categories_second').val();
            else
                this.edit_product_val.secondary_cat_ids.length = 0;
            this.edit_product_val.season_deal = $('#Season_deals').val();
            this.edit_product_val.daily_deal = $('#daily_deal').val();
            if ($('#user_time_zone').val() == '') {
                this.edit_product_val.isbn = '0';
            }
            else {
                this.edit_product_val.isbn = $('#upc_isbn').val();
            }
        }
        else if (val == 'itemDesc') {
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
            this.edit_product_val.specification.length = 0;
            this.edit_product_val.specification.push(str_array);
        }
        else if (val == "Auction style" || val == "Fixed price") {
            this.edit_product_val.selling_type = $('#Format').val();
        }
        else if (val == "duration") {
            this.edit_product_val.duration = $('#Duration').val();
        }
        else if (val == "minPrice") {
            this.edit_product_val.min_price = $('#min_price').val();
        }
        else if (val == "price") {
            if ($('#format1_price').val() != '' && $('#format1_price').val() != undefined)
                this.edit_product_val.price = $('#format1_price').val();
            else
                this.edit_product_val.price = 0;
        }
        else if (val == "maxPrice") {
            if ($('#max_price').val() != '')
                this.edit_product_val.max_price = $('#max_price').val();
        }
        else if (val == "renew") {
            this.edit_product_val.renew = $('#Duration_selection').val();
        }
        else if (val == "fixduration") {
            this.edit_product_val.duration = $('#Duration1').val();
        }
        else if (val == "quantity") {
            this.edit_product_val.quantity = $('#quantity').val();
        }
        else if (val == "bestofferminprice") {
            this.edit_product_val.make_offer = 1;
            if ($('#minprice').val() != '')
                this.edit_product_val.min_price = $('#minprice').val();
        }
        else if (val == "bestoffermaxPrice") {
            if ($('#maxprice').val() != '')
                this.edit_product_val.max_price = $('#maxprice').val();
        }
        else if (val == "discount") {
            if ($('#discountval').val() == "") {
                this.edit_product_val.discount = 0;
            }
            else {
                this.edit_product_val.discount = $('#discountval').val();
            }
        }
        else if (val == "noreturnaccept") {
            this.edit_product_val.return_opt = 'No';
            this.edit_product_val.ship_to = '';
            if ($('#paypal_check').prop('checked') == true) {
                this.edit_product_val.paypal_email = $('#paypal_text').val();
            }
            var val_payment = [];
            $('input[type=checkbox][name=payment_opt]:checked').each(function (i) {
                val_payment[i] = $(this).val();
            });
            this.edit_product_val.payment_opt = val_payment.join(",");
        }
        else if (val == "returnopt") {
            this.edit_product_val.return_opt = $('#itemReturnedWithin').val();
        }
        else if (val == "cashSelect") {
            var val_payment = [], self = this;
            $('input[type=checkbox][name=payment_opt]:checked').each(function (i) {
                val_payment[i] = $(this).val();
                if ($(this).val() == 1) {
                    self.edit_product_val.paypal_email = $('#paypal_text').val();
                }
            });
            this.edit_product_val.payment_opt = val_payment.join(",");
        }
        else if (val == "returnby") {
            this.edit_product_val.ship_to = $('#returnby').val();
        }
        else if (val == "returnpolicy") {
            this.edit_product_val.return_policy = $('#returnpolicy').val();
        }
        else if (val == "addedarea_community") {
            this.edit_product_val.product_address = $('#area_community').val();
        }
        else if (val == "productAddress") {
            this.edit_product_val.product_address = $('#area_community').val() + ' , ' + this.edit_product_val.product_address;
            if ($('#Format').val() == "Auction style") {
                if ($('input[type=radio][name=schldlisting]:checked').val() == 'No') {
                    this.edit_product_val.schedule_date = '';
                }
                else {
                    var getStartDate = $('.selectOptions#startDate').val();
                    var getStartTime = $('.selectOptions#startTime').val();
                    var getStartMinute = $('.selectOptions#stTimeMinute').val();
                    this.edit_product_val.schedule_date = getStartDate + ' ' + getStartTime + ':' + getStartMinute + ':' + '30';
                }
            }
            else {
                if ($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'No') {
                    this.edit_product_val.schedule_date = '';
                }
                else {
                    var getStartDate_fixed = $('.selectOptions#startDate_fixed').val();
                    var getStartTime_fixed = $('.selectOptions#startTime_fixed').val();
                    var getStartMinute_fixed = $('.selectOptions#stTimeMinute_fixed').val();
                    this.edit_product_val.schedule_date = getStartDate_fixed + ' ' + getStartTime_fixed + ':' + getStartMinute_fixed + ':' + '30';
                }
            }
            var val_shipment = [];
            $('input[type=checkbox][name=shipment_type]:checked').each(function (i, field) {
                if ($(this).val() == "Other")
                    val_shipment[i] = $('#OtherShipment').val();
                else
                    val_shipment[i] = $(this).val();
            });
            this.edit_product_val.shipment_type = val_shipment.join(",");
        }
        else if (val == "delivery_days") {
            this.edit_product_val.delivery_days = $('#delivery_days').val();
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
            this.edit_product_val.fees_details = fees_details1;
        }
        else if (val == "checkschldlisting") {
            if ($('#Format').val() == "Auction style") {
                if ($('input[type=radio][name=schldlisting]:checked').val() == 'No') {
                    this.edit_product_val.schedule_date = '';
                }
                else {
                    var getStartDate = $('.selectOptions#startDate').val();
                    var getStartTime = $('.selectOptions#startTime').val();
                    var getStartMinute = $('.selectOptions#stTimeMinute').val();
                    this.edit_product_val.schedule_date = getStartDate + ' ' + getStartTime + ':' + getStartMinute + ':' + '30';
                }
            }
            else {
                if ($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'No') {
                    this.edit_product_val.schedule_date = '';
                }
                else {
                    var getStartDate_fixed = $('.selectOptions#startDate_fixed').val();
                    var getStartTime_fixed = $('.selectOptions#startTime_fixed').val();
                    var getStartMinute_fixed = $('.selectOptions#stTimeMinute_fixed').val();
                    this.edit_product_val.schedule_date = getStartDate_fixed + ' ' + getStartTime_fixed + ':' + getStartMinute_fixed + ':' + '30';
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
            this.edit_product_val.shipment_type = val_shipment.join(",");
        }
        else if (val == "title") {
            this.edit_product_val.title = $('#main_title_text').val();
        }
        else if (val == "subTitle") {
            this.edit_product_val.subtitle = $('#suntitle_text').val();
        }
        if (this.view_Product.data.duration == this.edit_product_val.duration) {
            this.edit_product_val.duration = 0;
        }
        if (val == "photoupload") {
            this.loader = this.loading.create({
                content: 'Please wait while we upload your photos.',
            });
            this.loader.present();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.edit_product_val, function (response) {
                if (response.status == "success") {
                    _this.loader.dismiss();
                    _this.edit_product_val.photos.length = 0;
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
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.edit_product_val, function (response) {
                if (response.status == "success") {
                    _this.infoService.hideLoading();
                    _this.edit_product_val.photos.length = 0;
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
    };
    CompleteListPage.prototype.addProduct = function () {
        var _this = this;
        try {
            this.edit_product_val.user_id = this.localItem.id;
            if (this.localItem.role == "buyer") {
                $('#buyerError').removeClass('hide');
            }
            else {
                $('#buyerError').addClass('hide');
                if ($('#main_title_text').val() == '') {
                    $('.productMSG_title').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_title').addClass('d-none');
                }
                if ($('#image_preview div').length <= 0 && $('#image_preview_append div').length <= 0) {
                    $('#photosSelectalert').removeClass('hide');
                    return;
                }
                else {
                    $('#photosSelectalert').addClass('hide');
                }
                if ($('#Item_Description').val() == '') {
                    $('.productMSG_description').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_description').addClass('d-none');
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
                if ($('#Format').val() == '') {
                    $('.productMSG_format').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_format').addClass('d-none');
                }
                if ($('#Format').val() == "Auction style") {
                    if ($('#Duration').val() == '') {
                        $('.productMSG_duration').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_duration').addClass('d-none');
                    }
                    if ($('input[type=radio][name=schldlisting]:checked').length == 0) {
                        $('.productMSG_schldlisting').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_schldlisting').addClass('d-none');
                    }
                    if (parseInt($('#min_price').val()) <= 0 || $('#min_price').val() == '') {
                        $('.productMSG_minprice').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_minprice').addClass('d-none');
                    }
                    if (parseInt($('#format1_price').val()) <= 0) {
                        $('.productMSG_format1price').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_format1price').addClass('d-none');
                    }
                    if (parseInt($('#max_price').val()) <= 0) {
                        $('.productMSG_maxprice').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_maxprice').addClass('d-none');
                    }
                    if (parseInt($('#max_price').val()) <= parseInt($('#min_price').val())) {
                        $('.productMSG_reservedPrice').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_reservedPrice').addClass('d-none');
                    }
                    if (parseInt($('#format1_price').val()) < parseInt($('#min_price').val())) {
                        $('.productMSG_buyitprice').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_buyitprice').addClass('d-none');
                    }
                }
                else {
                    if (parseInt($('#format1_price').val()) <= 0 || $('#format1_price').val() == '') {
                        $('.productMSG_format1price').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_format1price').addClass('d-none');
                    }
                    if ($('#Duration_selection').val() == null) {
                        $('.productMSG_durationselection').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_durationselection').addClass('d-none');
                    }
                    if ($('#Duration1').val() == '') {
                        $('productMSG_duration').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_duration').addClass('d-none');
                    }
                    if ($('input[type=radio][name=schldlisting_fixed]:checked').length == 0) {
                        $('.productMSG_schldlisting').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_schldlisting').addClass('d-none');
                    }
                    if (parseInt($('#quantity').val()) <= 0 || $('#quantity').val() == '') {
                        $('.productMSG_quantity').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_quantity').addClass('d-none');
                    }
                    if ($('input[type=checkbox][name=BestOffer]:checked').length == 1) {
                        if (parseInt($('#minprice').val()) <= 0 || $('#minprice').val() == '') {
                            $('.productMSG_minpriceoffer').removeClass('d-none');
                            return;
                        }
                        else {
                            $('.productMSG_minpriceoffer').addClass('d-none');
                        }
                        if (parseInt($('#maxprice').val()) <= 0 || $('#maxprice').val() == '') {
                            $('.productMSG_maxpriceoffer').removeClass('d-none');
                            return;
                        }
                        else {
                            $('.productMSG_maxpriceoffer').addClass('d-none');
                        }
                        if (parseInt($('#maxprice').val()) < parseInt($('#minprice').val())) {
                            $('.productMSG_offeraccept').removeClass('d-none');
                            return;
                        }
                        else {
                            $('.productMSG_offeraccept').addClass('d-none');
                        }
                    }
                }
                if (parseInt($('#discountval').val()) <= 0) {
                    $('.productMSG_discount').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_discount').addClass('d-none');
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
                if ($('#area_community').val() == '') {
                    $('.productMSG_areaCommunity').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_areaCommunity').addClass('d-none');
                }
                if ($('#search_places').val() == '') {
                    $('.product_address').removeClass('d-none');
                    return;
                }
                else {
                    $('.product_address').addClass('d-none');
                }
                if (parseInt($('#delivery_days').val()) <= 0 || $('#delivery_days').val() == '') {
                    $('.productMSG_disptach').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_disptach').addClass('d-none');
                }
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
                this.edit_product_val.title = $('#main_title_text').val();
                this.edit_product_val.subtitle = $('#suntitle_text').val();
                this.edit_product_val.category_id = $('#subcategories_select').val();
                this.edit_product_val.p_condition = $('#condition_select').val();
                if ($('#user_time_zone').val() == '') {
                    this.edit_product_val.isbn = '0';
                }
                else {
                    this.edit_product_val.isbn = $('#upc_isbn').val();
                }
                if ($('#discountval').val() == "") {
                    this.edit_product_val.discount = 0;
                }
                else {
                    this.edit_product_val.discount = $('#discountval').val();
                }
                this.edit_product_val.daily_deal = $('#daily_deal').val();
                this.edit_product_val.season_deal = $('#Season_deals').val();
                if ($('#daily_deal').val() == 'Yes')
                    this.edit_product_val.deals_days = $('#daily_dealDay').children(":selected").attr("id");
                if ($('#Season_deals').val() == 'Yes')
                    this.edit_product_val.season_day = $('#Season_dealsDay').children(":selected").attr("id");
                this.edit_product_val.condition_description = $('#comment').val();
                if ($('#Format').val() == "Auction style") {
                    this.edit_product_val.min_price = $('#min_price').val();
                    if ($('#format_price').val() != '')
                        this.edit_product_val.price = $('#format1_price').val();
                    if ($('#max_price').val() != '')
                        this.edit_product_val.max_price = $('#max_price').val();
                    if ($('#Duration').val() != '')
                        this.edit_product_val.duration = $('#Duration').val();
                    this.edit_product_val.quantity = $('#dis_id').val();
                    this.edit_product_val.renew = 'No';
                }
                else if ($('#Format').val() == "Fixed price") {
                    this.edit_product_val.price = $('#format1_price').val();
                    this.edit_product_val.quantity = $('#quantity').val();
                    this.edit_product_val.duration = $('#Duration1').val();
                    this.edit_product_val.renew = $('#Duration_selection').val();
                    if ($('#BestOffer').prop('checked') == true) {
                        this.edit_product_val.make_offer = 1;
                        if ($('#minprice').val() != '')
                            this.edit_product_val.min_price = $('#minprice').val();
                        if ($('#maxprice').val() != '')
                            this.edit_product_val.max_price = $('#maxprice').val();
                    }
                }
                this.edit_product_val.selling_type = $('#Format').val();
                if ($('#paypal_check').prop('checked') == true) {
                    this.edit_product_val.paypal_email = $('#paypal_text').val();
                }
                if ($('#return-accepted').prop('checked') == true) {
                    this.edit_product_val.return_opt = $('#itemReturnedWithin').val();
                    this.edit_product_val.return_policy = $('#returnpolicy').val();
                    this.edit_product_val.ship_to = $('#returnby').val();
                }
                else {
                    this.edit_product_val.return_opt = 'No';
                    this.edit_product_val.ship_to = '';
                }
                this.edit_product_val.product_address = $('#area_community').val() + ' , ' + $('#search_places').val();
                this.edit_product_val.delivery_days = $('#delivery_days').val();
                this.edit_product_val.specification.length = 0;
                this.edit_product_val.specification.push(str_array);
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
                this.edit_product_val.payment_opt = val_payment.join(",");
                this.edit_product_val.shipment_type = val_shipment.join(",");
                if ($('#Format').val() == "Auction style") {
                    if ($('input[type=radio][name=schldlisting]:checked').val() == 'No') {
                        this.edit_product_val.schedule_date = '';
                    }
                    else {
                        var getStartDate = $('.selectOptions#startDate').val();
                        var getStartTime = $('.selectOptions#startTime').val();
                        var getStartMinute = $('.selectOptions#stTimeMinute').val();
                        this.edit_product_val.schedule_date = getStartDate + ' ' + getStartTime + ':' + getStartMinute + ':' + '30';
                    }
                }
                else {
                    if ($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'No') {
                        this.edit_product_val.schedule_date = '';
                    }
                    else {
                        var getStartDate_fixed = $('.selectOptions#startDate_fixed').val();
                        var getStartTime_fixed = $('.selectOptions#startTime_fixed').val();
                        var getStartMinute_fixed = $('.selectOptions#stTimeMinute_fixed').val();
                        this.edit_product_val.schedule_date = getStartDate_fixed + ' ' + getStartTime_fixed + ':' + getStartMinute_fixed + ':' + '30';
                    }
                }
                if ($('#categories_second').val() != '')
                    this.edit_product_val.secondary_cat_ids = $('#categories_second').val();
                else
                    this.edit_product_val.secondary_cat_ids.length = 0;
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
                fees_details1['season_fees'] = seasondeal_dys;
                fees_details1['featured_fees'] = Featured_item;
                var self = this;
                self.edit_product_val.photos.length = 0;
                $('.hidde_val').each(function () {
                    self.edit_product_val.photos.push(this.value);
                });
                this.edit_product_val.fees_details = fees_details1;
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
                        this.edit_product_val.sq = taskObj_1;
                        if ($("input[name=custom_sizeQun]").length != taskArray_1.length) {
                            $('.productMSG_quantysize').removeClass('d-none');
                            return false;
                        }
                        else {
                            $('.productMSG_quantysize').addClass('d-none');
                        }
                        if (this.edit_product_val.quantity != tasktotalCount_1) {
                            $('.productMSG_quantitygreater').html('You enter quantity is ' + '&nbsp;' + this.edit_product_val.quantity + ' ' + 'but actual Custom Item specifications quantity total is' + ' ' + tasktotalCount_1 + '.Please update quantity');
                            return false;
                        }
                        else {
                            $('.productMSG_quantitygreater').html('');
                        }
                    }
                }
                this.edit_product_val.status = 2;
                this.edit_product_val.from_product = 'ADD_PRODUCT';
                if ($('#paypal_check').prop('checked') == true) {
                    if ($('.receiving-payment-email:last#paypal_text').val() == this.localItem.payment_email) {
                        if ($('#Format').val() == "Auction style") {
                            if (this.edit_product_val.max_price <= parseInt($('#min_price').val()) && this.edit_product_val.max_price != 0) {
                                $('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
                            }
                            else {
                                $('.Maxprice:last#Maxprice').text('');
                                this.infoService.showLoading();
                                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.edit_product_val, function (response) {
                                    if (response.status == "success") {
                                        _this.ifproductedit = true;
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
                                if (this.edit_product_val.max_price <= parseInt($('#minprice').val()) && this.edit_product_val.max_price != 0) {
                                    $('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
                                }
                                else {
                                    $('.Maxprice:last#Maxpriceoffer').text('');
                                    this.infoService.showLoading();
                                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.edit_product_val, function (response) {
                                        if (response.status == "success") {
                                            _this.ifproductedit = true;
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
                                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.edit_product_val, function (response) {
                                    if (response.status == "success") {
                                        _this.ifproductedit = true;
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
                            if (this.edit_product_val.max_price <= parseInt($('#min_price').val()) && this.edit_product_val.max_price != 0) {
                                $('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
                            }
                            else {
                                $('.Maxprice:last#Maxprice').text('');
                                this.infoService.showLoading();
                                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.edit_product_val, function (response) {
                                    if (response.status == "success") {
                                        _this.ifproductedit = true;
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
                                if (this.edit_product_val.max_price <= parseInt($('#minprice').val()) && this.edit_product_val.max_price != 0) {
                                    $('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
                                }
                                else {
                                    $('.Maxprice:last#Maxpriceoffer').text('');
                                    this.infoService.showLoading();
                                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.edit_product_val, function (response) {
                                        if (response.status == "success") {
                                            _this.ifproductedit = true;
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
                                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.edit_product_val, function (response) {
                                    if (response.status == "success") {
                                        _this.ifproductedit = true;
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
                        if (this.edit_product_val.max_price <= parseInt($('#min_price').val()) && this.edit_product_val.max_price != 0) {
                            $('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
                        }
                        else {
                            $('.Maxprice:last#Maxprice').text('');
                            this.infoService.showLoading();
                            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.edit_product_val, function (response) {
                                if (response.status == "success") {
                                    _this.ifproductedit = true;
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
                            if (this.edit_product_val.max_price <= parseInt($('#minprice').val()) && this.edit_product_val.max_price != 0) {
                                $('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
                            }
                            else {
                                $('.Maxprice:last#Maxpriceoffer').text('');
                                this.infoService.showLoading();
                                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.edit_product_val, function (response) {
                                    if (response.status == "success") {
                                        _this.ifproductedit = true;
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
                            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/edit-product', this.edit_product_val, function (response) {
                                if (response.status == "success") {
                                    _this.ifproductedit = true;
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
        catch (Error) {
            console.log(Error);
            this.infoService.hideLoading();
        }
    };
    CompleteListPage.prototype.previewData = function () {
        this.edit_product_val.user_id = this.localItem.id;
        if (this.localItem.role == "buyer") {
            $('#buyerError').removeClass('hide');
        }
        else {
            $('#buyerError').addClass('hide');
            var self = this;
            if ($('#main_title_text').val() == '') {
                $('.productMSG_title').removeClass('d-none');
                return;
            }
            else {
                $('.productMSG_title').addClass('d-none');
            }
            if ($('#image_preview div').length <= 0 && $('#image_preview_append div').length <= 0) {
                $('#photosSelectalert').removeClass('hide');
                return;
            }
            else {
                $('#photosSelectalert').addClass('hide');
            }
            if ($('#Item_Description').val() == '') {
                $('.productMSG_description').removeClass('d-none');
                return;
            }
            else {
                $('.productMSG_description').addClass('d-none');
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
            if ($('#Format').val() == '') {
                $('.productMSG_format').removeClass('d-none');
                return;
            }
            else {
                $('.productMSG_format').addClass('d-none');
            }
            if ($('#Format').val() == "Auction style") {
                if ($('#Duration').val() == '') {
                    $('.productMSG_duration').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_duration').addClass('d-none');
                }
                if ($('input[type=radio][name=schldlisting]:checked').length == 0) {
                    $('.productMSG_schldlisting').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_schldlisting').addClass('d-none');
                }
                if (parseInt($('#min_price').val()) <= 0 || $('#min_price').val() == '') {
                    $('.productMSG_minprice').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_minprice').addClass('d-none');
                }
                if (parseInt($('#format1_price').val()) <= 0) {
                    $('.productMSG_format1price').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_format1price').addClass('d-none');
                }
                if (parseInt($('#max_price').val()) <= 0) {
                    $('.productMSG_maxprice').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_maxprice').addClass('d-none');
                }
                //var getMinPrice:any = parseInt($('#min_price').val());
                //var calculateMinprice:any = getMinPrice + (getMinPrice * 30 / 100);
                if (parseInt($('#format1_price').val()) < parseInt($('#min_price').val())) {
                    $('.productMSG_buyitprice').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_buyitprice').addClass('d-none');
                }
            }
            else {
                if (parseInt($('#format1_price').val()) <= 0 || $('#format1_price').val() == '') {
                    $('.productMSG_format1price').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_format1price').addClass('d-none');
                }
                if ($('#Duration_selection').val() == null) {
                    $('.productMSG_durationselection').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_durationselection').addClass('d-none');
                }
                if ($('#Duration1').val() == '') {
                    $('productMSG_duration').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_duration').addClass('d-none');
                }
                if ($('input[type=radio][name=schldlisting_fixed]:checked').length == 0) {
                    $('.productMSG_schldlisting').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_schldlisting').addClass('d-none');
                }
                if (parseInt($('#quantity').val()) <= 0 || $('#quantity').val() == '') {
                    $('.productMSG_quantity').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_quantity').addClass('d-none');
                }
                if ($('input[type=checkbox][name=BestOffer]:checked').length == 1) {
                    if (parseInt($('#minprice').val()) <= 0 || $('#minprice').val() == '') {
                        $('.productMSG_minpriceoffer').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_minpriceoffer').addClass('d-none');
                    }
                    if (parseInt($('#maxprice').val()) <= 0 || $('#maxprice').val() == '') {
                        $('.productMSG_maxpriceoffer').removeClass('d-none');
                        return;
                    }
                    else {
                        $('.productMSG_maxpriceoffer').addClass('d-none');
                    }
                }
            }
            if (parseInt($('#discountval').val()) <= 0) {
                $('.productMSG_discount').removeClass('d-none');
                return;
            }
            else {
                $('.productMSG_discount').addClass('d-none');
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
            if ($('#area_community').val() == '') {
                $('.productMSG_areaCommunity').removeClass('d-none');
                return;
            }
            else {
                $('.productMSG_areaCommunity').addClass('d-none');
            }
            if ((this.edit_product_val.product_address == '' || this.edit_product_val.product_address == null) && $('#search_places').val() == '') {
                $('.product_address').removeClass('d-none');
                return;
            }
            else {
                $('.product_address').addClass('d-none');
            }
            if (parseInt($('#delivery_days').val()) <= 0 || $('#delivery_days').val() == '') {
                $('.productMSG_disptach').removeClass('d-none');
                return;
            }
            else {
                $('.productMSG_disptach').addClass('d-none');
            }
            if ($('#Format').val() != "Auction style") {
                if (parseInt($('#maxprice').val()) < parseInt($('#minprice').val())) {
                    $('.productMSG_offeraccept').removeClass('d-none');
                    return;
                }
                else {
                    $('.productMSG_offeraccept').addClass('d-none');
                }
            }
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
            this.edit_product_val.title = $('#main_title_text').val();
            this.edit_product_val.subtitle = $('#suntitle_text').val();
            this.edit_product_val.category_id = $('#subcategories_select').val();
            this.edit_product_val.p_condition = $('#condition_select').val();
            if ($('#user_time_zone').val() == '') {
                this.edit_product_val.isbn = '0';
            }
            else {
                this.edit_product_val.isbn = $('#upc_isbn').val();
            }
            if ($('#discountval').val() == "") {
                this.edit_product_val.discount = 0;
            }
            else {
                this.edit_product_val.discount = $('#discountval').val();
            }
            this.edit_product_val.daily_deal = $('#daily_deal').val();
            if ($('#daily_deal').val() == 'Yes')
                this.edit_product_val.deals_days = $('#daily_dealDay').val();
            this.edit_product_val.condition_description = $('#comment').val();
            if ($('#Format').val() == "Auction style") {
                this.edit_product_val.min_price = $('#min_price').val();
                if ($('#format_price').val() != '')
                    this.edit_product_val.price = $('#format1_price').val();
                if ($('#max_price').val() != '')
                    this.edit_product_val.max_price = $('#max_price').val();
                if ($('#Duration').val() != '')
                    this.edit_product_val.duration = $('#Duration').val();
                this.edit_product_val.quantity = $('#dis_id').val();
                this.edit_product_val.renew = 'No';
            }
            else if ($('#Format').val() == "Fixed price") {
                this.edit_product_val.price = $('#format1_price').val();
                this.edit_product_val.quantity = $('#quantity').val();
                this.edit_product_val.duration = $('#Duration1').val();
                this.edit_product_val.renew = $('#Duration_selection').val();
                if ($('#BestOffer').prop('checked') == true) {
                    this.edit_product_val.make_offer = 1;
                    if ($('#minprice').val() != '')
                        this.edit_product_val.price = $('#minprice').val();
                    if ($('#maxprice').val() != '')
                        this.edit_product_val.max_price = $('#maxprice').val();
                }
            }
            this.edit_product_val.selling_type = $('#Format').val();
            if ($('#paypal_check').prop('checked') == true) {
                this.edit_product_val.paypal_email = $('#paypal_text').val();
            }
            if ($('#return-accepted').prop('checked') == true) {
                this.edit_product_val.return_opt = $('#itemReturnedWithin').val();
                this.edit_product_val.return_policy = $('#returnpolicy').val();
                this.edit_product_val.ship_to = $('#returnby').val();
            }
            else {
                this.edit_product_val.return_opt = 'No';
                this.edit_product_val.ship_to = '';
            }
            this.edit_product_val.product_address = $('#area_community').val() + ' , ' + $('#search_places').val();
            this.edit_product_val.delivery_days = $('#delivery_days').val();
            this.edit_product_val.specification.length = 0;
            this.edit_product_val.specification.push(str_array);
            this.edit_product_val.season_deal = $('#Season_deals').val();
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
            this.edit_product_val.payment_opt = val_payment.join(",");
            this.edit_product_val.shipment_type = val_shipment.join(",");
            if ($('#Format').val() == "Auction style") {
                if ($('input[type=radio][name=schldlisting]:checked').val() == 'No') {
                    this.edit_product_val.schedule_date = '';
                }
                else {
                    var getStartDate = $('.selectOptions#startDate').val();
                    var getStartTime = $('.selectOptions#startTime').val();
                    var getStartMinute = $('.selectOptions#stTimeMinute').val();
                    this.edit_product_val.schedule_date = getStartDate + ' ' + getStartTime + ':' + getStartMinute + ':' + '30';
                }
            }
            else {
                if ($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'No') {
                    this.edit_product_val.schedule_date = '';
                }
                else {
                    var getStartDate_fixed = $('.selectOptions#startDate_fixed').val();
                    var getStartTime_fixed = $('.selectOptions#startTime_fixed').val();
                    var getStartMinute_fixed = $('.selectOptions#stTimeMinute_fixed').val();
                    this.edit_product_val.schedule_date = getStartDate_fixed + ' ' + getStartTime_fixed + ':' + getStartMinute_fixed + ':' + '30';
                }
            }
            if ($('#categories_second').val() != '')
                this.edit_product_val.secondary_cat_ids = $('#categories_second').val();
            else
                this.edit_product_val.secondary_cat_ids.length = 0;
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
            fees_details1['season_fees'] = seasondeal_dys;
            fees_details1['featured_fees'] = Featured_item;
            self.edit_product_val.photos.length = 0;
            $('#image_preview div').children('img').each(function () {
                self.edit_product_val.photos.push(this.src);
            });
            if ($('#image_preview_append div').length > 0) {
                $('#image_preview_append div').children('img').each(function () {
                    self.edit_product_val.photos.push(this.src);
                });
            }
            this.edit_product_val.fees_details = fees_details1;
            this.edit_product_val.status = 2;
            this.edit_product_val.from_product = 'ADD_PRODUCT';
            localStorage.setItem('previeProduct', JSON.stringify(this.edit_product_val));
            if (this.plt.is('core') == true || this.plt.is('mobileweb') == true) {
                //window.open('http://localhost:8100/#/previewProduct', "_blank");
                window.open('https://www.dibdaa.com/#/previewProduct', "_blank");
                //window.open('https://www.techcronus.com/staging/Dibdaa/www/#/previewProduct', "_blank");
            }
            else {
                this.navCtrl.push('PreviewProductPage');
            }
        }
    };
    CompleteListPage.prototype.hideSavingDiv = function () {
        setTimeout(function () {
            $('.estatus').css('visibility', 'hidden');
        }, 2000);
    };
    CompleteListPage.prototype.checkSaesonDeal = function (val) {
        var _this = this;
        var seasonData = {
            cat_id: val
        };
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/home/check-season-deal', seasonData, function (response) {
            _this.season_dealActive = response;
        }, function (error) {
            console.log(error);
        });
    };
    CompleteListPage.prototype.closeDiv_Photo = function () {
        $('#photosSelectalert').addClass('hide');
    };
    CompleteListPage.prototype.checkschldlisting = function (val) {
        if (val == 'yes') {
            $('.selectOptions').attr('disabled', false);
            this.autoSaveProduct('checkschldlisting');
        }
        else if (val == 'no') {
            $('.selectOptions').attr('disabled', true);
            this.autoSaveProduct('checkschldlisting');
        }
    };
    CompleteListPage.prototype.showDaysSelection = function (val) {
        if (val == "Yes") {
            this.showsellDealDays = true;
            this.edit_product_val.season_deal = val;
            this.autoSaveProduct('season_dealyesno');
        }
        else {
            this.showsellDealDays = false;
            this.edit_product_val.season_deal = val;
            this.autoSaveProduct('season_dealyesno');
        }
    };
    CompleteListPage.prototype.createCustomspecification = function (val) {
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
                        for (var sp = 0; sp < _this.view_Product.specification.specification.length; sp++) {
                            if (_this.view_Product.specification.specification[sp].type == "3") {
                                if (_this.view_Product.specification.specification[sp].label == "Color") {
                                    if (val == "Color") {
                                        _this.view_Product.specification.specification[sp].value.push($.trim(data.Color));
                                    }
                                }
                                if (_this.view_Product.specification.specification[sp].label == "Size") {
                                    if (val == "Size") {
                                        _this.view_Product.specification.specification[sp].value.push($.trim(data.Size));
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
    CompleteListPage.prototype.checkCheckboxforsize = function (val, val1) {
        if (val == "Size") {
            if (jQuery.inArray(val1, this.size_customQuantity) != -1) {
                for (var sp = 0; sp < this.view_Product.specification.specification.length; sp++) {
                    if (this.view_Product.specification.specification[sp].type == "3") {
                        if (this.view_Product.specification.specification[sp].label == "Size") {
                            this.view_Product.specification.specification[sp].value.push(val1);
                            this.view_Product.specification.specification[sp].selectedValue.splice(jQuery.inArray(val1, this.view_Product.specification.specification[sp].selectedValue), 1);
                        }
                    }
                }
            }
            else {
                for (var sp = 0; sp < this.view_Product.specification.specification.length; sp++) {
                    if (this.view_Product.specification.specification[sp].type == "3") {
                        if (this.view_Product.specification.specification[sp].label == "Size") {
                            this.view_Product.specification.specification[sp].selectedValue.push(val1);
                            this.view_Product.specification.specification[sp].value.splice(jQuery.inArray(val1, this.view_Product.specification.specification[sp].value), 1);
                        }
                    }
                }
            }
            if (this.size_customQuantity.length <= 0) {
                $('#quantity').val('1');
            }
        }
    };
    CompleteListPage.prototype.checkCheckboxforsize_first = function (val, val1) {
        if (val == "Size") {
            if (jQuery.inArray(val1, this.size_customQuantity_first) != -1) {
                this.size_customQuantity_first.splice(jQuery.inArray(val1, this.size_customQuantity_first), 1);
            }
            else {
                this.size_customQuantity_first.push(val1);
            }
            if (this.size_customQuantity_first.length <= 0) {
                $('#quantity').val('1');
            }
        }
    };
    CompleteListPage.prototype.setQuantityvalue = function () {
        var calculate_custom_qun = 0;
        var taskObj_autosave = {};
        $("input[name=custom_sizeQun]").each(function () {
            if ($(this).val() != '') {
                taskObj_autosave[$(this).attr('id')] = $(this).val();
                calculate_custom_qun += parseInt($(this).val());
            }
        });
        this.edit_product_val.sq = taskObj_autosave;
        $('#quantity').val(calculate_custom_qun);
        this.edit_product_val.quantity = calculate_custom_qun;
        this.autoSaveProduct('sq');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], CompleteListPage.prototype, "content", void 0);
    CompleteListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-complete-list',template:/*ion-inline-start:"/var/www/html/src/pages/product/complete-list/complete-list.html"*/'<ion-content padding>\n    <div class="add-product">\n		<div class="wrapper">\n			<div class="container mb-lg-3">\n				<div class="row">\n					<div class="col-lg-12 col-md-12 col-xl-12 col-12 mt-3 setFontSize">\n						<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n						<p class="set-Fonts">\n							<a href="#/home" class="breadcrumblink">Dibdaa</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n							<a href="#/seller-my-account/Active" class="breadcrumblink">My Dibdaa <i class="fa fa-angle-right"> </i>&nbsp;&nbsp;</a>\n							<a class="breadcrumblink" disabled>Update Product</a>\n						</p>\n					</div>\n				</div>\n				<div class="row">\n					<div class="col-lg-12 col-md-12 col-12">\n						<h4 class="h4-class">Update Product</h4>\n					</div>\n				</div>\n				<div class="row" *ngIf="ifproductedit == false;else showImageedit">\n					<div class="col-lg-12 col-md-12 col-12 add-product-main mt-3 p-0">\n						<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mb-4 frontbg">\n							<h6 class="m-0 text-left">Product Description</h6>\n						</div>\n						<div class="mt-3 pl-4 pr-4">\n							<form #frm="ngForm" class="form" id="complete-product" method="post" role="form" novalidate>\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										<span class="text-danger font-weight-bold ">*</span>Title\n									</label>\n									<div class="col-lg-6">\n										<input class="form-control" type="text" name="title" id="main_title_text" #title_main="ngModel" required [(ngModel)]="view_Product?.data.title" (change)="autoSaveProduct(\'title\')">\n										<div *ngIf="title_main.invalid && (title_main.dirty || title_main.touched)" class="error-box">\n											<div *ngIf="title_main.errors.required">\n												* Title is required.\n											</div>\n										</div>\n									</div>\n								</div>\n								<div class="form-group row"> \n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">Subtitle\n										<span class="font-weight-normal"> ({{show_feesData?.data.subtitle_fee}} AED) </span>\n									</label>\n									<div class="col-lg-6">\n										<input class="form-control" type="text" name="subtitle" id="subtitle_text" [(ngModel)]="view_Product?.data.subtitle" (change)="showsubtotalFees()">\n									</div>\n								</div>\n								\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n											class="text-danger font-weight-bold">*</span>Category </label>\n									<div class="col-lg-3">\n										<select id="categories_select" class="form-control" name="category_id" #categories_select (change)="checkSaesonDeal(categories_select.value)"> <!-- (change)="showType(categories_select)"  -->\n											<option value="">-- Select Category -- </option>\n											<option *ngFor="let categoriesselect of show_category?.data" [value]="categoriesselect?.id" [selected]="categoriesselect?.id == view_Product?.data.parent_cat_id">{{categoriesselect?.category_name}}</option>\n										</select>\n									</div>\n								</div>\n								\n								<div *ngFor="let categoriesselect of show_category?.data">\n									<div class="form-group row" *ngIf="categories_select.value == categoriesselect?.id">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Primary Category</label>\n										<div class="col-lg-3">\n											<select id="subcategories_select" class="form-control" name="subcategory_id" #subcategories_select (change)="showSpec(subcategories_select.value)">\n												<option value="">-- Select Primary Category -- </option>\n												<option *ngFor="let catego of categoriesselect?.sub" value="{{catego.id}}" id="{{catego.facility_charges}}" [selected]="catego?.id == view_Product?.data.category_id">{{catego.category_name}}</option>\n											</select>\n										</div>\n									</div>\n								</div>\n\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										Secondary Category (optional)\n									</label>	\n									<div class="col-lg-3" >\n										<select id="categories_second" class="form-control" name="categories_second" multiple>\n											<option value="" selected>-- Select Secondary Category --</option>\n											<option *ngFor="let catego of view_Product?.sub_category" value="{{catego.id}}" [selected]="catego?.check == true" id="{{catego.facility_charges}}" [hidden]=\'view_Product?.data.category_id == catego.id\'>{{catego.category_name}}</option>\n										</select>\n										<span class="set-fontSize d-lg-block d-none">(Press ctrl button to select multiple categories.)</span>\n									</div>\n								</div>\n\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">ISBN</label>\n									<div class="col-lg-3">\n										<select id="user_time_zone" class="form-control" name="isbn" #isbn="ngModel" ngModel (change)="chngeISBN(isbn.value)">\n											<option value="0" [selected]="view_Product?.data.isbn == \'0\' || view_Product?.data.isbn == null">Does not apply</option>\n											<option value="1" [selected]="view_Product?.data.isbn != \'0\'">Enter UPC/EAN/ISBN</option>\n										</select>\n									</div>\n								</div>\n\n								<div class="form-group row" *ngIf="view_Product?.data.isbn != \'0\' && view_Product?.data.isbn != null">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										<span class="text-danger font-weight-bold">*</span>Enter UPC/EAN/ISBN</label>\n									<div class="col-lg-3">\n										<input class="form-control" type="text" name="UPCISBN" id="upc_isbn" #UPCISBN="ngModel" required [(ngModel)]="view_Product?.data.isbn" (change)="autoSaveProduct(\'addedIsbn\')">\n										<div *ngIf="UPCISBN.invalid && (UPCISBN.dirty || UPCISBN.touched)" class="error-box">\n											<div *ngIf="UPCISBN.errors.required">\n												* Enter UPC/EAN/ISBN.\n											</div>\n										</div>\n									</div>\n								</div>\n\n								<div class="form-group row" *ngIf="season_dealActive?.check_season_deal.msg == true">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										Season Deals\n									</label>\n									<div class="col-lg-3">\n										<select id="Season_deals" class="form-control" name="Season_deals" #Season_deals (change)="showDaysSelection(Season_deals.value)">\n											<option value="No" [selected]="view_Product?.data.season_deal == \'No\'">No</option>\n											<option value="Yes" [selected]="view_Product?.data.season_deal == \'Yes\'">Yes</option>\n										</select>\n									</div>\n								</div>\n								\n								<div class="form-group row" *ngIf="showsellDealDays == true">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										<span class="text-danger font-weight-bold">*</span>Select Days\n									</label>\n									<div class="col-lg-3">\n										<select id="Season_dealsDay" class="form-control" #Season_dealsDay="ngModel" name="Season_dealsDay" required ngModel (change)="showsellDayfees(Season_dealsDay.value)">\n											<option value="" selected>-- Select Days -- </option>\n											<option *ngFor="let allday of seasondealfees" value="{{allday[1]}}" id="{{allday[0] | replaceString:allday[0]}}">{{allday[0] | replaceString:allday[0]}} <span *ngIf="allday[0] == \'Days_1\'">Day</span><span *ngIf="allday[0] != \'Days_1\'">Days</span></option>\n										</select>\n										<div *ngIf="Season_dealsDay.invalid && (Season_dealsDay.dirty || Season_dealsDay.touched)" class="error-box">\n											<div *ngIf="Season_dealsDay.errors.required">\n												* Select Days.\n											</div>\n										</div>\n									</div>\n								</div>\n								\n								<div class="form-group row" *ngIf="season_dealActive?.check_season_deal.msg == false" class="d-none">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										Season Deals\n									</label>\n									<div class="col-lg-3">\n										<select id="Season_deals" class="form-control" name="Season_deals">\n											<option value="No" [selected]="view_Product?.data.season_deal == \'No\'">No</option>\n										</select>\n									</div>\n								</div>\n								\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										Featured Deals\n									</label>\n									<div class="col-lg-3">\n										<select id="daily_deal" class="form-control" name="daily_deal" #daily_deal="ngModel" required ngModel (change)="showDays(daily_deal.value)">\n											<option value="No" [selected]="view_Product?.data.daily_deal == \'No\' || view_Product?.data.daily_deal == \'\'">No</option>\n											<option value="Yes" [selected]="view_Product?.data.daily_deal == \'Yes\'">Yes</option>										\n										</select>\n									</div>\n								</div>\n\n								<div class="form-group row" *ngIf="view_Product?.data.daily_deal == \'Yes\'">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n											class="text-danger font-weight-bold">*</span>Select Days\n									</label>\n									<div class="col-lg-3">\n										<select id="daily_dealDay" class="form-control" #daily_dealDay="ngModel" name="daily_dealDay"  ngModel (change)="showDailyfees(daily_dealDay.value)"> <!-- required  -->\n											<option value="" selected> -- Select Days -- </option>\n											<option *ngFor="let allday of featureitem" [value]="allday[1]" id="{{allday[0] | replaceString:allday[0]}}">{{allday[0] | replaceString:allday[0]}} <span *ngIf="allday[0] == \'Days_1\'">Day</span><span *ngIf="allday[0] != \'Days_1\'">Days</span></option>\n										</select>\n									</div>\n								</div>\n								\n								<div class="form-group row">\n									<div [ngClass]="{\'col-lg-3 p-0\': specdata?.label == \'Item Condition\'}" *ngFor="let specdata of view_Product?.specification.specification" >\n										<label class="col-lg-12 col-form-label form-control-label set-fontSize" *ngIf="specdata?.label == \'Item Condition\'">\n											<span class="text-danger font-weight-bold">*</span>Item Condition\n										</label>\n									</div>\n									<div [ngClass]="{\'col-lg-3\': specdata?.label == \'Item Condition\'}" *ngFor="let specdata of view_Product?.specification.specification">\n										<select class="form-control" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" *ngIf="specdata?.label == \'Item Condition\'" id="condition_select" (change)="autoSaveProduct(\'conditionItem\')">\n											<option *ngFor="let dropdownData of specdata?.value" value="{{dropdownData}}" [selected]="dropdownData == view_Product?.data.p_condition">{{dropdownData}}</option>\n										</select>\n									</div>\n								</div>\n								\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										Item Condition Description\n									</label>\n									<div class="col-lg-6">\n										<textarea class="form-control" rows="3" id="comment" name="condition_description" #condition_description="ngModel" [(ngModel)]=" view_Product?.data.condition_description" (change)="autoSaveProduct(\'conditionDesc\')"></textarea>\n									</div>\n								</div>\n								\n								<div class="form-group row" *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										<span class="text-danger font-weight-bold">*</span>Photos</label>\n									<div class="col-lg-9">\n										<button type="submit" class="btn theme-light-btn-filupload mb-3" (click)="selectImage()">Select an Image</button>\n										<span class="set-fontSize">Please upload images only jpg, jpeg and png format. You can upload maximum 3MB size images. Add up to 10 photos. </span>\n										<div class="row m-0" id="image_preview"></div>\n										<div class="image-preview-muliple row m-0" id="image_preview_append">\n										</div>\n									</div>\n									<div class="error-box showGIFError text-center w-100 pt-3 d-none"> Please upload images only jpg, jpeg and png format. </div>\n									<div class="error-box showFormatError text-center w-100 pt-3 d-none">\n										<span>You have exceeded the total amount of photos allowed. Only the first 10 photos have been uploaded.</span>\n									</div>\n								</div>\n								\n								<div class="form-group row" *ngIf="plt.is(\'core\') == true || plt.is(\'mobileweb\') == true">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n										<span class="text-danger font-weight-bold">*</span>Photos</label>\n									<div class="col-lg-9">\n										<input type="hidden" role="uploadcare-uploader" name="content" data-multiple="true" data-max-size="3000000" data-multiple-min="1" data-multiple-max="10" data-image-shrink="1300x1300">\n										<div class="set-fontSize">Please upload images only jpg, jpeg and png format. You can upload maximum 3MB size images. Add up to 10 photos. </div>\n										<div class="set-fontSize mb-2">Click file count to image Edit. You can also drag and reorder your image. Your 1st image is your primary image.</div>\n										<div class="image-preview-single row m-0" id="image_preview">\n										</div>\n										<div class="image-preview-muliple row m-0" id="image_preview_append">\n										</div>\n									</div> \n									<div class="error-box showFormatError text-center w-100 pt-3 d-none">\n										<span>You have exceeded the total amount of photos allowed. Only the first 10 photos have been uploaded.</span>\n									</div> \n								</div>\n								\n								<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mb-4 front-bg-secondary">\n									<h6 class="m-0 text-left">Item specifics</h6>\n								</div>\n								\n								<form role="form" name="Item-specifics" method="post" *ngIf="sub_catText == \'Not\'">\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 mb-4 mt-4 text-center">\n										Item specifications not available\n									</div>\n								</form>\n								\n								<form #frmspec="ngForm" role="form" id="Item_specifics" name="Item-specifics" method="post" novalidate *ngIf="view_Product?.data.specification.length <= 0">\n									<div class="form-row">\n										<div [ngClass]="{\'form-group\' : specdata?.label !=\'Item Description\' && specdata?.label != \'Item Condition\',\'col-md-6\' : specdata?.label !=\'Item Description\' && specdata?.label != \'Item Condition\', \'pr-lg-2\' : specdata?.label !=\'Item Description\' && specdata?.label != \'Item Condition\' , \'set-fontSize\' : specdata?.label !=\'Item Description\' && specdata?.label !=\'Item Condition\'}" *ngFor="let specdata of view_Product?.specification.specification">\n											<ng-template [ngIf]="specdata?.type == \'1\'">\n												<div *ngIf="specdata?.label == \'Type\'">\n													<label>\n														<span class="text-danger font-weight-bold" *ngIf="specdata?.label ==\'Type\' || specdata?.label ==\'Item Condition\'">*</span>{{specdata?.label}}\n													</label>\n													<select class="form-control" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" (change)="autoSaveProduct(\'itemDesc\')">\n														<!-- <option value="">Select</option> -->\n														<option *ngFor="let dropdownData of specdata?.value" value="{{dropdownData}}">{{dropdownData}}</option>\n													</select>\n												</div>\n												<div *ngIf="specdata?.label != \'Type\' && specdata?.label !=\'Item Condition\'">\n													<label> {{specdata?.label}} </label>\n													<select class="form-control" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" (change)="autoSaveProduct(\'itemDesc\')">\n														<option value="" *ngIf="specdata?.label !=\'Warranty\'">Select</option>\n														<option *ngFor="let dropdownData of specdata?.value" value="{{dropdownData}}" >{{dropdownData}}</option>\n													</select>\n												</div>\n											</ng-template>\n											<ng-template [ngIf]="specdata?.type == \'2\'">\n												<div *ngIf="specdata?.label !=\'Item Description\'">\n													<label><span class="text-danger font-weight-bold" *ngIf="specdata?.label ==\'Item Description\'">*</span>{{specdata?.label}}</label>\n													<input class="form-control" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" type="text" (change)="autoSaveProduct(\'itemDesc\')">\n												</div>\n											</ng-template>\n											<ng-template [ngIf]="specdata?.type == \'3\'">\n											<label>{{specdata?.label}}</label><br/>\n											<label class="custom-control custom-checkbox pl-4" *ngFor="let checkboxdata of specdata?.value">\n												<input type="checkbox" class="custom-control-input" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" value="{{checkboxdata}}" (change)="checkCheckboxforsize_first(specdata?.label,checkboxdata)"> <!--  -->\n												<span class="custom-control-indicator"></span>\n												<span class="custom-control-description">{{checkboxdata}}</span>\n											</label>\n											</ng-template>\n										</div>\n									</div>\n									\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mb-2 front-bg-secondary" *ngIf="setCustomspecification?.Color != \'\' || setCustomspecification?.Size != \'\'">\n										<h6 class="m-0 text-left">Custom Item specifications</h6>\n									</div> 	\n									\n									<div class="form-group row pl-3 pt-2 pb-2 mb-0" *ngIf="setCustomspecification?.Color != \'\' || setCustomspecification?.Size != \'\'">\n										<ul class="nav nav-tabs w-100 Custom_Item_specifications" role="tablist">\n											<li class="nav-item" *ngIf="setCustomspecification?.Color != \'\'">\n												<a class="nav-link active" href="#color" role="tab" data-toggle="tab">Color</a>\n											</li>\n											<li class="nav-item" *ngIf="setCustomspecification?.Size != \'\'">\n												<a class="nav-link" href="#Size" role="tab" data-toggle="tab">Size</a>\n											</li>\n										</ul>\n										<!-- Tab panes -->\n										<div class="tab-content">\n											<div role="tabpanel" class="tab-pane fade in active show" id="color" *ngIf="setCustomspecification?.Color != \'\'">\n												<div class="m-3">\n													<span class="badge badge-customorange mr-2 mb-2" *ngFor="let clr_slt of setCustomspecification?.Color_selected">{{clr_slt}}</span>\n													<span class="badge badge-customorange mr-2 mb-2" *ngFor="let clr of setCustomspecification?.Color">{{clr}}</span>\n												</div>\n												<a class="ml-3 text-primary set-fontSize" (click)="createCustomspecification(\'Color\')">+ Create your own</a>\n											</div>\n											<div role="tabpanel" class="tab-pane fade" id="Size" *ngIf="setCustomspecification?.Size != \'\'">\n												<div class="m-3">\n													<span class="badge badge-customorange mr-2 mb-2" *ngFor="let siz_slt of setCustomspecification?.Size_selected">{{siz_slt}}</span>\n													<span class="badge badge-customorange mr-2 mb-2" *ngFor="let siz of setCustomspecification?.Size">{{siz}}</span>\n												</div>\n												<a class="ml-3 text-primary set-fontSize" (click)="createCustomspecification(\'Size\')">+ Create your own</a>\n											</div>\n										</div>\n									</div>\n									\n									<div class="form-row" >\n										<div class="form-group col-md-12 pr-lg-2 set-fontSize">\n											<label>\n												<span class="text-danger font-weight-bold">*</span>Item Description\n											</label>\n											<textarea class="form-control d-none" rows="3" id="Item_Description" name="Item_Description" [value]="Item_Description"></textarea>\n											<ckeditor name="Item_Description" [(ngModel)]="Item_Description" (blur)="onBlur($event)" [config]="config"> </ckeditor>\n										</div>\n									</div>\n								</form>\n								\n								<form #frmspec="ngForm" role="form" id="Item_specifics" name="Item-specifics" method="post" novalidate *ngIf="view_Product?.data.specification.length != 0">\n									<div class="form-row">\n										<div [ngClass]="{\'form-group\' : specdata?.label !=\'Item Description\' && specdata?.label !=\'Item Condition\',\'col-md-6\' : specdata?.label !=\'Item Description\' && specdata?.label !=\'Item Condition\', \'pr-lg-2\' : specdata?.label !=\'Item Description\' && specdata?.label !=\'Item Condition\' , \'set-fontSize\' : specdata?.label !=\'Item Description\' && specdata?.label !=\'Item Condition\'}" *ngFor="let specdata of view_Product?.specification.specification">\n											<ng-template [ngIf]="specdata?.type == \'1\'">\n												<div *ngIf="specdata?.label == \'Type\'">\n													<label>\n														<span class="text-danger font-weight-bold" *ngIf="specdata?.label ==\'Type\' || specdata?.label ==\'Item Condition\'">*</span>{{specdata?.label}}\n													</label>\n													<select class="form-control" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" (change)="autoSaveProduct(\'itemDesc\')">\n														<!-- <option value="">Select</option> -->\n														<option *ngFor="let dropdownData of specdata?.value" value="{{dropdownData}}" [selected]="dropdownData == specdata?.selectedValue">{{dropdownData}}</option>\n													</select>\n												</div>\n												<div *ngIf="specdata?.label != \'Type\' && specdata?.label !=\'Item Condition\'">\n													<label> {{specdata?.label}} </label>\n													<select class="form-control" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" (change)="autoSaveProduct(\'itemDesc\')">\n														<option value="" *ngIf="specdata?.label !=\'Warranty\'">Select</option>\n														<option *ngFor="let dropdownData of specdata?.value" value="{{dropdownData}}" [selected]="dropdownData == specdata?.selectedValue">{{dropdownData}}</option>\n													</select>\n												</div>\n											</ng-template>\n											<ng-template [ngIf]="specdata?.type == \'2\'">\n												<div *ngIf="specdata?.label !=\'Item Description\'">\n													<label><span class="text-danger font-weight-bold" *ngIf="specdata?.label ==\'Item Description\'">*</span>{{specdata?.label}}</label>\n													<input class="form-control" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" type="text" [value]="specdata?.selectedValue" (change)="autoSaveProduct(\'itemDesc\')">\n												</div>\n											</ng-template>\n											<ng-template [ngIf]="specdata?.type == \'3\'">\n											<label>{{specdata?.label}}</label><br/>\n												<label class="custom-control custom-checkbox pl-4" *ngFor="let checkboxselecteddata of specdata?.selectedValue">\n													<input type="checkbox" class="custom-control-input" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" value="{{checkboxselecteddata}}" checked (change)="checkCheckboxforsize(specdata?.label,checkboxselecteddata)">\n													<span class="custom-control-indicator"></span>\n													<span class="custom-control-description">{{checkboxselecteddata}}</span>\n												</label>\n												<label class="custom-control custom-checkbox pl-4" *ngFor="let checkboxdata of specdata?.value">\n													<input type="checkbox" class="custom-control-input" name="{{specdata?.label | replaceUnderscore:specdata?.label}}" value="{{checkboxdata}}" (change)="checkCheckboxforsize(specdata?.label,checkboxdata)">\n													<span class="custom-control-indicator"></span>\n													<span class="custom-control-description">{{checkboxdata}}</span>\n												</label>\n											</ng-template>\n										</div>\n									</div>\n									\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mb-2 front-bg-secondary" *ngIf="setCustomspecification?.Color != \'\' || setCustomspecification?.Size != \'\'">\n										<h6 class="m-0 text-left">Custom Item specifications</h6>\n									</div> 	\n									\n									<div class="form-group row pl-3 pt-2 pb-2 mb-0" *ngIf="setCustomspecification?.Color != \'\' || setCustomspecification?.Size != \'\'">\n										<ul class="nav nav-tabs w-100 Custom_Item_specifications" role="tablist">\n											<li class="nav-item" *ngIf="setCustomspecification?.Color != \'\'">\n												<a class="nav-link active" href="#color" role="tab" data-toggle="tab">Color</a>\n											</li>\n											<li class="nav-item" *ngIf="setCustomspecification?.Size != \'\'">\n												<a class="nav-link" href="#Size" role="tab" data-toggle="tab">Size</a>\n											</li>\n										</ul>\n										<!-- Tab panes -->\n										<div class="tab-content">\n											<div role="tabpanel" class="tab-pane fade in active show" id="color" *ngIf="setCustomspecification?.Color != \'\'">\n												<div class="m-3">\n													<span class="badge badge-customorange mr-2 mb-2" *ngFor="let clr_slt of setCustomspecification?.Color_selected">{{clr_slt}}</span>\n													<span class="badge badge-customorange mr-2 mb-2" *ngFor="let clr of setCustomspecification?.Color">{{clr}}</span>\n												</div>\n												<a class="ml-3 text-primary set-fontSize" (click)="createCustomspecification(\'Color\')">+ Create your own</a>\n											</div>\n											<div role="tabpanel" class="tab-pane fade" id="Size" *ngIf="setCustomspecification?.Size != \'\'">\n												<div class="m-3">\n													<span class="badge badge-customorange mr-2 mb-2" *ngFor="let siz_slt of setCustomspecification?.Size_selected">{{siz_slt}}</span>\n													<span class="badge badge-customorange mr-2 mb-2" *ngFor="let siz of setCustomspecification?.Size">{{siz}}</span>\n												</div>\n												<a class="ml-3 text-primary set-fontSize" (click)="createCustomspecification(\'Size\')">+ Create your own</a>\n											</div>\n										</div>\n									</div>\n									\n									<div class="form-row" *ngIf="sub_catText != \'Not\'">\n										<div class="form-group col-md-12 pr-lg-2 set-fontSize">\n											<label>\n												<span class="text-danger font-weight-bold">*</span>Item Description\n											</label>\n											<textarea class="form-control d-none" rows="3" id="Item_Description" name="Item_Description" [value]="Item_Description"></textarea>\n											<ckeditor name="Item_Description" [(ngModel)]="Item_Description" (blur)="onBlur($event)" [config]="config"> </ckeditor>\n										</div>\n									</div>\n								</form>\n								\n								<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mb-4 front-bg-secondary">\n									<h6 class="m-0 text-left">Selling details</h6>\n								</div>\n								\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n											class="text-danger font-weight-bold">*</span>Format\n									</label>\n									<div class="col-lg-3">\n										<select id="Format" class="form-control" name="selling_type" #selling_type="ngModel" required ngModel (change)="showData(selling_type.value)">\n											<option value="">-- Select Condition -- </option>\n											<option value="Auction style" [selected]="view_Product?.data.selling_type == \'Auction style\'">Auction-style</option>\n											<option value="Fixed price" [selected]="view_Product?.data.selling_type == \'Fixed price\'">Fixed price</option>\n										</select>\n										<div *ngIf="selling_type.invalid && (selling_type.dirty || selling_type.touched)" class="error-box">\n											<div *ngIf="selling_type.errors.required">\n												* Select Format.\n											</div>\n										</div>\n									</div>\n								</div>\n								\n								<div *ngIf="view_Product?.data.selling_type == \'Auction style\'" id="Auctionstyle">\n									<div class="form-group row auctionduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Duration\n										</label>\n										<div class="col-lg-3">\n											<select id="Duration" class="form-control" name="duration" #duration="ngModel" required ngModel (change)="autoSaveProduct(\'duration\')">\n												<option value="" selected>-- Select Duration -- </option>\n												<option value="3">3 Days</option>\n												<option value="5">5 Days</option>\n												<option value="7">7 Days</option>\n												<option value="10">10 Days</option>\n												<option value="30">30 Days</option>\n											</select>\n											<div *ngIf="duration.invalid && (duration.dirty || duration.touched)" class="error-box">\n												<div *ngIf="duration.errors.required">\n													* Select duration.\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="form-group row">\n										<div class="offset-lg-3 col-lg-9">\n											<div class="row m-0">\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<input type="radio" id="schldLstng_0Auction" name="schldlisting" value="No" (click) = "checkschldlisting(\'no\')">\n													<label for="schldLstng_0Auction">Start my listings when I submit them</label>\n												</div>\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<input type="radio" id="schldLstng_1Auction" name="schldlisting" value="Yes" (click) = "checkschldlisting(\'yes\')">\n													<label for="schldLstng_1Auction">Schedule to start on</label>\n													<span>\n														<select name="startDate" id="startDate" title="Start Date" class="selectOptions" disabled="true">\n															<option value="{{dat | date : \'yyyy-MM-dd\'}}" *ngFor="let dat of arr">{{dat | date}}</option>\n														</select>\n													</span>\n													<span>\n														<select name="startTime" id="startTime" title="Start Time" class="selectOptions" disabled="true">\n															<option value="00" selected="selected">00</option>\n															<option value="01">01</option>\n															<option value="02">02</option>\n															<option value="03">03</option>\n															<option value="04">04</option>\n															<option value="05">05</option>\n															<option value="06">06</option>\n															<option value="07">07</option>\n															<option value="08">08</option>\n															<option value="09">09</option>\n															<option value="10">10</option>\n															<option value="11">11</option>\n															<option value="12">12</option>\n															<option value="13">13</option>\n															<option value="14">14</option>\n															<option value="15">15</option>\n															<option value="16">16</option>\n															<option value="17">17</option>\n															<option value="18">18</option>\n															<option value="19">19</option>\n															<option value="20">20</option>\n															<option value="21">21</option>\n															<option value="22">22</option>\n															<option value="23">23</option>\n														</select>\n													</span>\n													<span>\n														<select name="stTimeMinute" id="stTimeMinute" title="Minutes" class="selectOptions" disabled="true">\n															<option value="00" selected="selected">00</option>\n															<option value="01">01</option>\n															<option value="02">02</option>\n															<option value="03">03</option>\n															<option value="04">04</option>\n															<option value="05">05</option>\n															<option value="06">06</option>\n															<option value="07">07</option>\n															<option value="08">08</option>\n															<option value="09">09</option>\n															<option value="10">10</option>\n															<option value="11">11</option>\n															<option value="12">12</option>\n															<option value="13">13</option>\n															<option value="14">14</option>\n															<option value="15">15</option>\n															<option value="16">16</option>\n															<option value="17">17</option>\n															<option value="18">18</option>\n															<option value="19">19</option>\n															<option value="20">20</option>\n															<option value="21">21</option>\n															<option value="22">22</option>\n															<option value="23">23</option>\n															<option value="24">24</option>\n															<option value="25">25</option>\n															<option value="26">26</option>\n															<option value="27">27</option>\n															<option value="28">28</option>\n															<option value="29">29</option>\n															<option value="30">30</option>\n															<option value="31">31</option>\n															<option value="32">32</option>\n															<option value="33">33</option>\n															<option value="34">34</option>\n															<option value="35">35</option>\n															<option value="36">36</option>\n															<option value="37">37</option>\n															<option value="38">38</option>\n															<option value="39">39</option>\n															<option value="40">40</option>\n															<option value="41">41</option>\n															<option value="42">42</option>\n															<option value="43">43</option>\n															<option value="44">44</option>\n															<option value="45">45</option>\n															<option value="46">46</option>\n															<option value="47">47</option>\n															<option value="48">48</option>\n															<option value="49">49</option>\n															<option value="50">50</option>\n															<option value="51">51</option>\n															<option value="52">52</option>\n															<option value="53">53</option>\n															<option value="54">54</option>\n															<option value="55">55</option>\n															<option value="56">56</option>\n															<option value="57">57</option>\n															<option value="58">58</option>\n															<option value="59">59</option>\n														</select>\n													</span>\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="form-group row auctionduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Price</label>\n										<div class="col-lg-9">\n											<div class="form-row row">\n												<div class="form-group col-md-3 col-lg-2 pr-lg-2 set-fontSize">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label"><span\n															class="text-danger font-weight-bold">*</span>Starting price\n													</label>\n													<input class="form-control" type="number" name="min_price" id="min_price" #min_price="ngModel" required [(ngModel)]="view_Product?.data.min_price <= 0?\'\':view_Product?.data.min_price" (change)="autoSaveProduct(\'minPrice\')" pattern="^([1-9][0-9]{0,6}?)$">\n													<div *ngIf="min_price.invalid && (min_price.dirty || min_price.touched)" class="error-box">\n														<div *ngIf="min_price.errors.required">\n															* Enter starting price.\n														</div>\n														<div *ngIf="min_price.errors.pattern">\n															* The starting price must be a valid number greater than 0 and maximum price length is 7.\n														</div>\n													</div>\n												</div>\n												<div class="form-group col-md-3 col-lg-2 pr-lg-2 set-fontSize">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label">Buy It Now price</label>\n													<input class="form-control" type="number" name="price" id="format1_price" #price="ngModel" [(ngModel)]="view_Product?.data.price <= 0?\'\':view_Product?.data.price" (change)="showcategoryFees()" pattern="^([1-9][0-9]{0,6}?)$">\n													<div *ngIf="price.invalid && (price.dirty || price.touched)" class="error-box">\n														<div *ngIf="price.errors.pattern">\n															* The price must be a valid number greater than 0 and price length is 7.\n														</div>\n													</div>\n												</div>\n												<div class="form-group col-md-3 col-lg-2 pr-lg-2 set-fontSize">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label">Reserve price\n													</label>\n													<input class="form-control" type="number" name="max_price" id="max_price" #max_price="ngModel" [(ngModel)]="view_Product?.data.max_price <= 0?\'\':view_Product?.data.max_price" (change)="checkMaxPrice(max_price.value,\'Auction-style\')" pattern="^([1-9][0-9]{0,6}?)$">\n													<div *ngIf="max_price.invalid && (max_price.dirty || max_price.touched)" class="error-box">\n														<div *ngIf="max_price.errors.pattern">\n															* The reserve price must be a valid number greater than 0 and reserve price length is 7.\n														</div>\n													</div>\n													<div class="error-box Maxprice" id="Maxprice">\n\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="form-group row auctionduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize">Quantity</label>\n										<div class="col-lg-9">\n											<div class="form-row row">\n												<div class="form-group col-md-2 pr-lg-2">\n													<input class="form-control" type="number" value="1" disabled name="quantity" id="dis_id">\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n								<div *ngIf="view_Product?.data.selling_type == \'Fixed price\'">\n									<div class="form-group row fixedrateduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Buy It Now price</label>\n										<div class="col-lg-9">\n											<div class="form-row row">\n												<div class="form-group col-md-2 pr-lg-2 set-fontSize">\n													<input class="form-control" type="number" name="price" id="format1_price" #price="ngModel" required [(ngModel)]="view_Product?.data.price <=0?\'\':view_Product?.data.price" (change)="showcategoryFees()" pattern="^([1-9][0-9]{0,6}?)$">\n													<div *ngIf="price.invalid && (price.dirty || price.touched)" class="error-box">\n														<div *ngIf="price.errors.required">\n															* Enter buy it now price.\n														</div>\n														<div *ngIf="price.errors.pattern">\n															* The price must be a valid number greater than 0 and maximum price length is 7.\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="form-group row fixedrateduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize">Auto Renew</label>\n										<div class="col-lg-3">\n											<select id="Duration_selection" class="form-control" name="Duration_selection" #Duration_selection="ngModel" ngModel (change)="autoSaveProduct(\'renew\')">\n												<!--<option value="">&#45;&#45; Select Auto Renew &#45;&#45; </option>-->\n												<option value="Yes" [selected]="view_Product?.data.renew == \'Yes\'">Yes</option>\n												<option value="No" [selected]="view_Product?.data.renew == \'No\'">No</option>\n											</select>\n										</div>\n									</div>\n									<div class="form-group row fixedrateduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n											<span class="text-danger font-weight-bold">*</span>Duration\n										</label>\n										<div class="col-lg-3">\n											<select id="Duration1" class="form-control" size="0" name="duration" #duration="ngModel" required ngModel (change)="autoSaveProduct(\'fixduration\')">\n												<option value="">-- Select Duration -- </option>\n												<option value="3">3 Days</option>\n												<option value="5">5 Days</option>\n												<option value="7">7 Days</option>\n												<option value="10">10 Days</option>\n												<option value="30">30 Days</option>\n											</select>\n											<div *ngIf="duration.invalid && (duration.dirty || duration.touched)" class="error-box">\n												<div *ngIf="duration.errors.required">\n													* Select duration.\n												</div>\n											</div>\n											<p class="mb-0 mt-2" *ngIf="Duration_selection?.value == \'Yes\'">\n												Listings renew automatically every 30 days, based on the listing terms at that time,\n												until all quantities sell or the listing ends. Each time a listing renews and when\n												an item sells, you’ll be charged applicable fees.\n											</p>\n											<p class="mb-0 mt-2" *ngIf="Duration_selection?.value == \'No\'">\n												Your listing will end at the end of the selected time if items are unsold.\n											</p>\n										</div>\n									</div>\n									<div class="form-group row">\n										<div class="offset-lg-3 col-lg-9">\n											<div class="row m-0">\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<input type="radio" id="schldLstng_0" name="schldlisting_fixed" value="No" (click) = "checkschldlisting(\'no\')">\n													<label for="schldLstng_0">Start my listings when I submit them</label>\n												</div>\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<input type="radio" id="schldLstng_1" name="schldlisting_fixed" value="Yes" (click) = "checkschldlisting(\'yes\')">\n													<label for="schldLstng_1">Schedule to start on</label>\n													<span>\n														<select name="startDate" id="startDate_fixed" title="Start Date" class="selectOptions" disabled="true">\n															<option value="{{dat | date : \'yyyy-MM-dd\'}}" *ngFor="let dat of arr">{{dat | date}}</option>\n														</select>\n													</span>\n													<span>\n														<select name="startTime" id="startTime_fixed" title="Start Time" class="selectOptions" disabled="true">\n															<option value="00" selected="selected">00</option>\n															<option value="01">01</option>\n															<option value="02">02</option>\n															<option value="03">03</option>\n															<option value="04">04</option>\n															<option value="05">05</option>\n															<option value="06">06</option>\n															<option value="07">07</option>\n															<option value="08">08</option>\n															<option value="09">09</option>\n															<option value="10">10</option>\n															<option value="11">11</option>\n															<option value="12">12</option>\n															<option value="13">13</option>\n															<option value="14">14</option>\n															<option value="15">15</option>\n															<option value="16">16</option>\n															<option value="17">17</option>\n															<option value="18">18</option>\n															<option value="19">19</option>\n															<option value="20">20</option>\n															<option value="21">21</option>\n															<option value="22">22</option>\n															<option value="23">23</option>\n														</select>\n													</span>\n													<span>\n														<select name="stTimeMinute" id="stTimeMinute_fixed" title="Minutes" class="selectOptions" disabled="true">\n															<option value="00" selected="selected">00</option>\n															<option value="01">01</option>\n															<option value="02">02</option>\n															<option value="03">03</option>\n															<option value="04">04</option>\n															<option value="05">05</option>\n															<option value="06">06</option>\n															<option value="07">07</option>\n															<option value="08">08</option>\n															<option value="09">09</option>\n															<option value="10">10</option>\n															<option value="11">11</option>\n															<option value="12">12</option>\n															<option value="13">13</option>\n															<option value="14">14</option>\n															<option value="15">15</option>\n															<option value="16">16</option>\n															<option value="17">17</option>\n															<option value="18">18</option>\n															<option value="19">19</option>\n															<option value="20">20</option>\n															<option value="21">21</option>\n															<option value="22">22</option>\n															<option value="23">23</option>\n															<option value="24">24</option>\n															<option value="25">25</option>\n															<option value="26">26</option>\n															<option value="27">27</option>\n															<option value="28">28</option>\n															<option value="29">29</option>\n															<option value="30">30</option>\n															<option value="31">31</option>\n															<option value="32">32</option>\n															<option value="33">33</option>\n															<option value="34">34</option>\n															<option value="35">35</option>\n															<option value="36">36</option>\n															<option value="37">37</option>\n															<option value="38">38</option>\n															<option value="39">39</option>\n															<option value="40">40</option>\n															<option value="41">41</option>\n															<option value="42">42</option>\n															<option value="43">43</option>\n															<option value="44">44</option>\n															<option value="45">45</option>\n															<option value="46">46</option>\n															<option value="47">47</option>\n															<option value="48">48</option>\n															<option value="49">49</option>\n															<option value="50">50</option>\n															<option value="51">51</option>\n															<option value="52">52</option>\n															<option value="53">53</option>\n															<option value="54">54</option>\n															<option value="55">55</option>\n															<option value="56">56</option>\n															<option value="57">57</option>\n															<option value="58">58</option>\n															<option value="59">59</option>\n														</select>\n													</span>\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="form-group row auctionduration">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize">\n											<span class="text-danger font-weight-bold">*</span>Quantity</label>\n										<div class="col-lg-9">\n											<div class="form-row row">\n												<div class="form-group col-md-3 col-lg-2 pr-lg-2">\n													<input class="form-control" type="number" name="quantity" id="quantity" #quantity="ngModel" required [(ngModel)]="view_Product?.data.quantity <= 0?\'\':view_Product?.data.quantity" (change)="autoSaveProduct(\'quantity\')" pattern="^([1-9][0-9]{0,3}?)$">\n													<div *ngIf="quantity.invalid && (quantity.dirty || quantity.touched)" class="error-box">\n														<div *ngIf="quantity.errors.required">\n															* Enter quantity.\n														</div>\n														<div *ngIf="quantity.errors.pattern">\n															* The quantity must be a valid number greater than 0 and maximum quantity length is 4.\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n									\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mb-2 front-bg-secondary" *ngIf="setCustomspecification?.Size != \'\'">\n										<h6 class="m-0 text-left">Custom Quantity</h6>\n									</div> 	\n									\n									<div class="form-group row pl-3 pt-2 pb-2 mb-0" *ngIf="setCustomspecification?.Size != \'\'">\n										<ul class="nav nav-tabs w-100 Custom_Item_specifications" role="tablist">\n											<li class="nav-item" *ngIf="setCustomspecification?.Size != \'\' && view_Product?.data.selling_type == \'Fixed price\'">\n												<a class="nav-link active" href="#custom_Quantity" role="tab" data-toggle="tab">Quantity</a>\n											</li>\n										</ul>\n										<!-- Tab panes -->\n										<div class="tab-content">\n											<div role="tabpanel" class="tab-pane fade in active show" id="custom_Quantity" *ngIf="setCustomspecification?.Size != \'\' && view_Product?.data.selling_type == \'Fixed price\'">\n												<div *ngFor="let siz_qun of setCustomspecification?.Size_selected" class="m-2">\n													<input type="text" disabled value="{{siz_qun}}" class="custom_inputtext_size text-center">\n													<input type="number" placeholder="Enter Quantity" class="custom_inputtext_size w-50" name="custom_sizeQun" required id="{{siz_qun}}" (change)="setQuantityvalue()">\n												</div>\n												<div *ngFor="let siz_qun of size_customQuantity_first; let i=index;" class="m-2">\n													<input type="text" disabled value="{{siz_qun}}" class="custom_inputtext_size text-center">\n													<input type="number" placeholder="Enter Quantity" class="custom_inputtext_size w-50" name="custom_sizeQun" required id="{{siz_qun}}" (change)="setQuantityvalue()">\n												</div>\n											</div>\n										</div>\n									</div>\n									\n									<div class="form-group row">\n										<div class="offset-lg-3 col-lg-9">\n											<div class="form-row row">\n												<div class="form-group col-md-12 col-lg-12 pr-lg-2 set-fontSize">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label">Best Offer\n													</label>\n													<label class="custom-control custom-checkbox pl-4">\n														<input type="checkbox" class="custom-control-input" id="BestOffer" name="BestOffer" [checked]="view_Product?.data.make_offer == 1" (change)="other_Payment(\'BestOffer\')">\n														<span class="custom-control-indicator"></span>\n														<span class="custom-control-description">Let buyers make offers. Being flexible with your price may help your item sell faster</span>\n													</label>\n												</div>\n											</div>\n										</div>\n									</div>\n									\n									<div class="form-group row" *ngIf="makeoffertextbox == true">\n										<div class="offset-lg-3 col-lg-9">\n											<div class="form-row row">\n												<div class="form-group col-md-6 col-lg-4 pr-lg-2 col-12 set-fontSize">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label">Automatically decline offers lower than\n														</label>\n													<label class="custom-control custom-checkbox p-0 w-100">\n														<input class="form-control w-100" type="number" name="minprice" id="minprice" #minprice="ngModel" required [(ngModel)]="view_Product?.data.min_price <= 0?\'\':view_Product?.data.min_price" (change)="autoSaveProduct(\'bestofferminprice\')" pattern="^([1-9][0-9]{0,6}?)$">\n													</label>\n													<div *ngIf="minprice.invalid && (minprice.dirty || minprice.touched)" class="error-box">\n														<div *ngIf="minprice.errors.required">\n															* Enter Min Price.\n														</div>\n														<div *ngIf="minprice.errors.pattern">\n															* The min price must be a valid number greater than 0 and maximum min price length is 7.\n														</div>\n													</div>\n												</div>\n												<div class="form-group col-md-6 col-lg-4 pr-lg-2 col-12 set-fontSize">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label">Automatically accept offers of at least\n														</label>\n													<label class="custom-control custom-checkbox p-0 w-100">\n														<input class="form-control w-100" type="number" name="maxprice" id="maxprice" #maxprice="ngModel" required [(ngModel)]="view_Product?.data.max_price <= 0?\'\':view_Product?.data.max_price" (change)="checkMaxPrice(maxprice.value,\'BestOffer\')" pattern="^([1-9][0-9]{0,6}?)$">\n													</label>\n													<div *ngIf="maxprice.invalid && (maxprice.dirty || maxprice.touched)" class="error-box">\n														<div *ngIf="maxprice.errors.required">\n															* Enter Max Price\n														</div>\n														<div *ngIf="maxprice.errors.pattern">\n															* The max price must be a valid number greater than 0 and maximum max price length is 7.\n														</div>\n													</div>\n													<div class="error-box Maxprice" id="Maxpriceoffer">\n\n													</div>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n								\n								<div class="form-group row">\n									<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span class="text-danger font-weight-bold ">*</span>Payment Options</label>\n									<div class="col-lg-9">\n										<div class="row m-0">\n											<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n												<label class="custom-control custom-checkbox pl-4">\n													<input type="checkbox" class="custom-control-input paypal-checkbox" value="1" id="paypal_check" name="payment_opt" (change)="disableText()">\n													<span class="custom-control-indicator"></span>\n													<span class="custom-control-description">PayPal</span>\n												</label>\n											</div>\n											<div class="showPaypaldiv d-none w-100">\n												<div class="col-lg-4 col-md-6 col-12 p-0">\n													<p class="">Email address for receiving payment: </p>\n												</div>\n												<div class="col-lg-4 col-md-4 col-12 p-0">\n													<input type="email" class="form-control receiving-payment-email" name="paypal_email" id="paypal_text" [value]="view_Product?.data.paypal_email == null || view_Product?.data.paypal_email == \'\'?localItem?.payment_email:view_Product?.data.paypal_email" placeholder="Enter PayPal Email" #paypal_email="ngModel" required ngModel [email]="true" (change)="checkPaypalEmail(paypal_email.value)"  />\n													<span><i class="fa fa-close" style="font-size: 24px;position: relative;color:red;top: -4px;" *ngIf="verificationResponsebusiness?.responseEnvelope.ack == \'Failure\';else showrightSign"></i></span>\n													<ng-template #showrightSign>\n														<span class="hideRigthCircle" *ngIf="(view_Product?.data.paypal_email != null && view_Product?.data.paypal_email != \'\') || localItem?.payment_email != null"><i class="fa fa-check-circle" style="font-size: 24px;position: relative;color:green;top: -4px;"></i></span>\n													</ng-template>\n													<div *ngIf="paypal_email.invalid && (paypal_email.dirty || paypal_email.touched)" class="error-box">\n														<div *ngIf="paypal_email.errors.email || paypal_email.errors.required">\n															* Enter email.\n														</div>\n													</div>\n													<div class="error-box" *ngIf="verificationResponsebusiness?.responseEnvelope.ack == \'Failure\'">Please enter valid Paypal email address</div>\n												</div>\n											</div>\n										</div>\n										<div class="row m-0">\n											<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n												<label class="custom-control custom-checkbox pl-4">\n													<input type="checkbox" class="custom-control-input cash-checkbox" value="2" id="cash" name="payment_opt" (change)="autoSaveProduct(\'cashSelect\')">\n													<span class="custom-control-indicator"></span>\n													<span class="custom-control-description">Cash on delivery</span>\n												</label>\n											</div>\n										</div>\n									</div>\n								</div>\n								\n								<div class="mt-3 pl-0 pr-4">\n										<div class="form-group row">\n											<label class="col-lg-3 col-form-label form-control-label set-fontSize">Discount (%)</label>\n											<div class="col-lg-9">\n												<div class="col-lg-2 col-md-6 col-12 p-0 set-fontSize">\n													<input class="form-control" type="number" pattern="^$|^([1-9]|[1-9][0-9]|[1][0][0])?" name="discount" #discount="ngModel" [(ngModel)]="view_Product?.data.discount <= 0?\'\':view_Product?.data.discount" placeholder="Min: 1, max: 100" id="discountval" (change)="autoSaveProduct(\'discount\')">\n													<div *ngIf="discount.invalid" class="error-box">\n														<div *ngIf="discount.errors.pattern">\n															Number should be between 1 and 100\n														</div>\n													</div>\n												</div>\n											</div>\n										</div>\n										<div class="form-group row">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Return Options</label>\n										<div class="col-lg-9">\n											<div class="row m-0">\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<input type="radio" id="return-accepted" name="return_opt" value="true" (change)="change_date()">\n													<label for="return-accepted">Returns Accepted</label>\n												</div>\n												<div class="col-lg-4 col-md-12 col-12 p-0" id="recieving-days" *ngIf="return_opt == true">\n													<label class="col-lg-12 pl-0 col-form-label form-control-label set-fontSize"><span class="text-danger font-weight-bold">*</span>After receiving the item, your buyer should contact you within:</label>\n\n													<select id="itemReturnedWithin" class="form-control" name="returnopt" (change)="autoSaveProduct(\'returnopt\')">\n														<option *ngFor="let return_data of show_feesData?.return_days" value="Days_{{return_data}}" [selected]="view_Product.data.return_opt == \'Days_\'+return_data">{{return_data}} <span *ngIf="return_data == 1">Day</span><span *ngIf="return_data != 1">Days</span></option>\n													</select>\n												</div>\n												<div class="col-lg-12 col-xl-12 col-md-12 col-12 mt-3 p-0" *ngIf="return_opt == true">\n													<div class="form-row row">\n														<div class="form-group col-md-12 col-lg-4 pr-lg-2 set-fontSize">\n															<label class="col-lg-12 pl-0 col-form-label form-control-label">\n																<span class="text-danger font-weight-bold">*</span>Return shipping will be paid by:</label>\n															<select id="returnby" class="form-control" name="returnbyselect" (change)="autoSaveProduct(\'returnby\')"> <!-- #returnbyselect="ngModel" required ngModel -->\n																<option value="buyer" [selected]="view_Product?.data.ship_to == \'buyer\'">Buyer</option>\n																<option value="seller" [selected]="view_Product?.data.ship_to == \'seller\'">Seller</option> <!-- (Free Returns) -->\n															</select>\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-12 col-xl-12 col-md-12 col-12 mt-3 p-0" *ngIf="return_opt == true">\n													<div class="form-row row">\n														<div class="form-group col-md-12 col-lg-4 pr-lg-2 set-fontSize">\n															<label class="col-lg-12 pl-0 col-form-label form-control-label">\n																<span class="text-danger font-weight-bold">*</span>Return Policy\n															</label>\n															<textarea class="form-control" rows="3" id="returnpolicy" name="returnpolicy" #returnpolicy="ngModel" required [(ngModel)]="view_Product?.data.return_policy" (change)="autoSaveProduct(\'returnpolicy\')"></textarea>\n															<div *ngIf="returnpolicy.invalid && (returnpolicy.dirty || returnpolicy.touched)" class="error-box">\n																<div *ngIf="returnpolicy.errors.required">\n																	* Enter Return Policy.\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n												<div class="col-lg-12 col-md-12 col-12 pt-4 pl-0 pb-0 pr-0 set-fontSize">\n													<input type="radio" id="no-return" name="return_opt" value="false" (change)="change_date()"> <!-- [(ngModel)]="return_opt" type="radio" [value]="false" [checked]="!return_opt" -->\n													<label for="no-return">No Returns Accepted</label>\n												</div>\n											</div>\n										</div>\n									</div>\n									\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mb-4 front-bg-secondary">\n										<h6 class="m-0 text-left">Shipping details</h6>\n									</div>\n									<div class="form-group row" >\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Shipment Type</label>\n										<div class="col-lg-9">\n											<div class="row m-0" *ngIf="view_Product?.data.shipment_type != false">\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<label class="custom-control custom-checkbox pl-4">\n														<input type="checkbox" class="custom-control-input" name="shipment_type" value="By Courier" id="CourierService">\n														<span class="custom-control-indicator"></span>\n														<span class="custom-control-description">Courier Service</span>\n													</label>\n												</div>\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<label class="custom-control custom-checkbox pl-4">\n														<input type="checkbox" class="custom-control-input" name="shipment_type" value="By Seller">\n														<span class="custom-control-indicator"></span>\n														<span class="custom-control-description">Collect From Seller</span>\n													</label>\n												</div>\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<label class="custom-control custom-checkbox pl-4">\n														<input type="checkbox" class="custom-control-input" name="shipment_type" value="Other" id="Other" (change)="other_Payment(\'shipment_type\')">\n														<span class="custom-control-indicator"></span>\n														<span class="custom-control-description">Other</span>\n													</label>\n												</div>\n											</div>\n											<div class="row m-0" *ngIf="view_Product?.data.shipment_type == false">\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<label class="custom-control custom-checkbox pl-4">\n														<input type="checkbox" class="custom-control-input" name="shipment_type" value="By Courier" id="CourierService">\n														<span class="custom-control-indicator"></span>\n														<span class="custom-control-description">Courier Service</span>\n													</label>\n												</div>\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<label class="custom-control custom-checkbox pl-4">\n														<input type="checkbox" class="custom-control-input" name="shipment_type" value="By Seller" >\n														<span class="custom-control-indicator"></span>\n														<span class="custom-control-description">Collect From Seller</span>\n													</label>\n												</div>\n												<div class="col-lg-12 col-md-12 col-12 p-0 set-fontSize">\n													<label class="custom-control custom-checkbox pl-4">\n														<input type="checkbox" class="custom-control-input" name="shipment_type" value="Other" id="Other" (change)="other_Payment(\'shipment_type\')">\n														<span class="custom-control-indicator"></span>\n														<span class="custom-control-description">Other</span>\n													</label>\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="form-group row contactmessage" *ngIf="otherPayment == true">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span class="text-danger font-weight-bold">*</span>Other Shipment</label>\n										<div class="col-lg-3 pl-2">\n											<input type="text" class="form-control" name="otherPaymentOpt" id="OtherShipment" value="{{otherPayment_text}}" (change)="autoSaveProduct(\'checkOthership\')">\n										</div>\n									</div>\n									\n									<div class="form-group row">\n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Product Address</label>\n										<div class="col-lg-4 pl-2 mb-3 mb-lg-0">\n											<input type="text" class="form-control setAreaCommunity" placeholder="Area,Community" id="area_community" name="area_community" #area_community="ngModel" ngModel (change)="autoSaveProduct(\'addedarea_community\')" required />\n										</div>\n										\n										<div class="col-lg-5 pl-2">\n											<ng4geo-autocomplete [userSettings]="userSettings" (componentCallback)="autoCompleteCallback1($event)"></ng4geo-autocomplete>\n										</div>\n									</div>\n									<div class="form-group row" class="d-none">\n										<div class="offset-lg-3 col-lg-9">\n											<iframe id="mapiframe" class="d-none" src="" width="100%" height="500px" frameborder="0" style="border:0"></iframe>\n										</div>\n									</div>\n									\n									<div class="form-group row"> \n										<label class="col-lg-3 col-form-label form-control-label set-fontSize"><span\n												class="text-danger font-weight-bold">*</span>Days to disptach from seller<span\n												class="font-weight-normal"> </span></label>\n										<div class="col-lg-2 pl-2">\n											<input class="form-control" type="number" name="delivery_days" id="delivery_days" #delivery_days="ngModel" required [(ngModel)]="view_Product?.data.delivery_days <= 0?\'\':view_Product?.data.delivery_days" pattern="^$|^([1-9]|[1-9][0-9]|[1][0][0])?" (change)="autoSaveProduct(\'delivery_days\')">\n											<div *ngIf="delivery_days.invalid && (delivery_days.dirty || delivery_days.touched)" class="error-box">\n												<div *ngIf="delivery_days.errors.required">\n													* Enter delivery days.\n												</div>\n												<div *ngIf="delivery_days.errors.pattern">\n													* Enter a number between 1 to 100.\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0 set-fontSize" *ngIf="editproductResponse?.status == \'fail\'">\n										<div class="alert alert-danger alert-dismissible" id="dangeralert" role="alert">\n											<a class="close" (click)="closeDiv_Delete()">&times;</a>\n											<span id="dangerspan">{{editproductResponse?.msg}}</span>\n										</div>\n									</div>\n									\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 p-2 set-fontSize background_fees">\n										<div class="row m-0">\n											<div class="col-lg-2 col-md-3 col-xl-2 col-4 pt-1 pl-0 pr-0 set-fontSize">\n												<h6 class="mb-0">Fees:</h6>\n											</div>\n											<div class="col-lg-10 col-md-8 col-xl-10 col-8 pt-2 pl-0 pr-0">\n												<h6 class="mb-0">{{ view_Product?.data.seller_fee | number:\'1.2-2\' }} AED</h6>\n											</div>\n										</div>\n									</div>\n									<div class="text-center col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0 set-fontSize">\n										<span id="buyerError" class="hide text-danger">Your are now buyer,Please login as a Seller or convert profile to Seller.</span>\n										<span class="d-none text-danger Payment_Opt"><b>Please select Payment Option.</b></span>\n										<span class="d-none text-danger addProduct-errorMessage"></span>\n										<span class="d-none text-danger ShipmentSelectalert"><b>Please Select Shipment Type.</b></span>\n										<span class="d-none text-danger Scheduleonstart"><b>The scheduled date occurs in the past. Please select a new date.</b></span>\n										<span class="d-none text-danger duration_future"><b>The featured deals day must be less than or equal to the duration.</b></span>\n										<span class="d-none text-danger product_address"><b>Please enter product address.</b></span>\n										<span class="d-none text-danger productMSG_title"><b>Please enter product title.</b></span>\n										<span class="d-none text-danger productMSG_description"><b>Please enter product description.</b></span>\n										<span class="d-none text-danger productMSG_format"><b>Please select format.</b></span>\n										<span class="d-none text-danger productMSG_duration"><b>Please select duration.</b></span>\n										<span class="d-none text-danger productMSG_schldlisting"><b>Please checked scheduling.</b></span>\n										<span class="d-none text-danger productMSG_minprice"><b>The starting price must be a valid number greater than 0 and maximum price length is 7.</b></span>\n										<span class="d-none text-danger productMSG_maxprice"><b>The reserve price must be a valid number greater than 0 and reserve price length is 7.</b></span>\n										<span class="d-none text-danger productMSG_format1price"><b>The price must be a valid number greater than 0 and price length is 7.</b></span>\n										<span class="d-none text-danger productMSG_durationselection"><b>Please select auto renew.</b></span>\n										<span class="d-none text-danger productMSG_quantity"><b>The quantity must be a valid number greater than 0 and maximum quantity length is 4.</b></span>\n										<span class="d-none text-danger productMSG_minpriceoffer"><b>The min price must be a valid number greater than 0 and maximum min price length is 7.</b></span>\n										<span class="d-none text-danger productMSG_maxpriceoffer"><b>The max price must be a valid number greater than 0 and maximum max price length is 7.</b></span>\n										<span class="d-none text-danger productMSG_disptach"><b>Days to disptach from seller number between 1 to 100.</b></span>\n										<span class="d-none text-danger productMSG_discount"><b>Discount Number should be between 1 and 100 or blank.</b></span>\n										<span class="d-none text-danger productMSG_offeraccept"><b>Offer accept price must be greater than Offer decline price.</b></span>\n										<span class="d-none text-danger productMSG_buyitprice"><b> Buy It Now price should be greater than your starting price.</b></span>\n										<span class="d-none text-danger productMSG_reservedPrice"><b> Reserve price must be greater than Starting price.</b></span>\n										<span class="d-none text-danger productMSG_areaCommunity"><b> Enter Area,Community.</b></span>\n										<span class="text-danger productMSG_quantitygreater"></span>\n										<span class="d-none text-danger productMSG_quantysize"><b>Please enter quantity by specific size.</b></span>\n									</div>\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0 set-fontSize hide text-center" id="photosSelectalert">\n										<span class="text-danger"><b>Please Select Product Images.</b></span>\n									</div>\n									<div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-2 pl-0 pr-0 set-fontSize hide text-center" id="ShipmentSelectalert">\n										<span class="text-danger"><b>Please Select Shipment Type.</b></span>\n									</div>\n									<div class="form-group row mt-3 mb-4 add-product-form">\n										<div class="offset-lg-3 col-lg-3 col-md-12 col-12 mt-1 mb-1">\n											<button type="submit" class="btn theme-light-btn" (click)="addProduct()" >Add Product</button>\n										</div>\n										<div class="offset-lg-1 col-lg-3 col-md-12 col-12 mt-1 mb-1">\n											<button type="submit" class="btn theme-light-btn" (click)="previewData()" >Preview Your Product</button>\n										</div>\n									</div> \n								</div>\n							</form>\n						</div>\n						<!-- /form user info -->\n					</div>\n				</div>\n				<ng-template #showImageedit>\n					<div clas="row">\n						<div class="col-lg-12 col-md-12 col-12 text-center mt-3 p-0">\n							<img src="assets/images/tick-512.png" width="100px" height="100px">\n						</div>\n						<div class="col-lg-12 col-md-12 col-12 text-center mt-3 p-0">\n							<h5 class="m-1">Great we\'ve received your listing and it is currently being approved.</h5>\n							<h5 class="m-1">You are moments away from great things.</h5>\n						</div>\n					</div>\n				</ng-template>\n			</div>\n		</div>\n		<footer-page></footer-page>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/product/complete-list/complete-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_photo_photo__["a" /* PhotoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CompleteListPage);
    return CompleteListPage;
}());

//# sourceMappingURL=complete-list.js.map

/***/ })

});
//# sourceMappingURL=9.js.map