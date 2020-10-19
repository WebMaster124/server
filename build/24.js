webpackJsonp([24],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowErrorPageModule", function() { return ShowErrorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_error__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShowErrorPageModule = /** @class */ (function () {
    function ShowErrorPageModule() {
    }
    ShowErrorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__show_error__["a" /* ShowErrorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show_error__["a" /* ShowErrorPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ShowErrorPageModule);
    return ShowErrorPageModule;
}());

//# sourceMappingURL=show-error.module.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowErrorPage = /** @class */ (function () {
    function ShowErrorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShowErrorPage.prototype.ionViewWillEnter = function () {
        $('body').removeClass().addClass('ErrorPage body');
        $(document).prop('title', 'Error Page | Dibdaa');
    };
    ShowErrorPage.prototype.ngAfterViewInit = function () {
        if (this.content._scroll) {
            this.content.ionScrollEnd.subscribe(function (data) {
                if (data == null)
                    return false;
                if (data.scrollTop >= "130") {
                    $('.top-header').slideUp();
                }
                else {
                    $('.top-header').slideDown();
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ShowErrorPage.prototype, "content", void 0);
    ShowErrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-show-error',template:/*ion-inline-start:"/var/www/html/src/pages/show-error/show-error.html"*/'<ion-content padding class="Error-not-found">\n  <div class="wrapper">\n    <section class="solid_banner_area text-center">\n      <div class="container">\n        <div class="row m-0">\n          <div class="col-lg-12 col-md-12 col-12 p-0">\n            <div class="row bg-light m-0">\n              <div class="col-lg-12 col-md-12 col-12">\n                <div class="solid_banner_inner">\n                  <h3>error page</h3>\n                  <ul>\n                    <li><a href="#/home">Home</a></li>\n                    <li><a disabled>Error Page</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  <!--================End Categories Banner Area =================-->\n\n  <!--================login Area =================-->\n    <section class="error_area pt-5 pb-5">\n      <div class="container">\n        <div class="row">\n          <div class="col-lg-12 col-md-12 col-12">\n            <div class="error_inner">\n              <h4>404</h4>\n              <h5 class="mb-3">Page - Not Found</h5>\n              <p class="mb-3">Sorry We’re not able to find what you looking for</p>\n              <h6 class="mb-3">back to <a href="#/home">Home</a></h6>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <footer-page></footer-page>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/show-error/show-error.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ShowErrorPage);
    return ShowErrorPage;
}());

//# sourceMappingURL=show-error.js.map

/***/ })

});
//# sourceMappingURL=24.js.map