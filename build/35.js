webpackJsonp([35],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAdvertisementPageModule", function() { return PageAdvertisementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_advertisement__ = __webpack_require__(803);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PageAdvertisementPageModule = /** @class */ (function () {
    function PageAdvertisementPageModule() {
    }
    PageAdvertisementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page_advertisement__["a" /* PageAdvertisementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page_advertisement__["a" /* PageAdvertisementPage */]),
            ],
        })
    ], PageAdvertisementPageModule);
    return PageAdvertisementPageModule;
}());

//# sourceMappingURL=page-advertisement.module.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageAdvertisementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
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
 * Generated class for the PageAdvertisementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PageAdvertisementPage = /** @class */ (function () {
    function PageAdvertisementPage(infoService, viewCtrl, navCtrl, navParams) {
        this.infoService = infoService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.advertiseData = null;
        this.bannerImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct;
    }
    PageAdvertisementPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
        localStorage.setItem('checkuserLogin', 'No');
    };
    PageAdvertisementPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/home/view-advertise', '', function (response) {
            if (response.advertisement.status == 'success')
                _this.advertiseData = response.advertisement;
            else
                _this.advertiseData = null;
        }, function (error) {
            console.log(error);
        });
    };
    PageAdvertisementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-page-advertisement',template:/*ion-inline-start:"/var/www/html/src/pages/modal/page-advertisement/page-advertisement.html"*/'<ion-header>\n  <ion-navbar class="title_Advertisement">\n  <ion-title ><h6 class="p-0 m-0">{{advertiseData?.data.title}}</h6></ion-title>\n	 <ion-buttons end>\n		<button ion-button (click)="closeModal()">X</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="main-view col-xl-12 col-12">\n<!-- <div class="overlay" (click)="dismiss()"></div> -->\n<div class="modal_content dibdaa-advertisement col-lg-12 col-md-12 col-xl-12 col-sm-12 col-12 p-0">\n	<a href="{{advertiseData?.data.url}}" target="_blank">\n		<img src="{{bannerImgUrl}}/advertisement/{{advertiseData?.data.id}}/{{advertiseData?.data.image}}" *ngIf="advertiseData?.data.image != \'\';else noImageFound;" />\n	</a>\n	<ng-template #noImageFound>\n		<a href="{{advertiseData?.data.url}}" target="_blank">\n			<img src="assets/images/advertise-image.jpg" />\n		</a>\n	</ng-template>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/modal/page-advertisement/page-advertisement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PageAdvertisementPage);
    return PageAdvertisementPage;
}());

//# sourceMappingURL=page-advertisement.js.map

/***/ })

});
//# sourceMappingURL=35.js.map