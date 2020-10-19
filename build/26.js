webpackJsonp([26],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListPageModule", function() { return UserListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserListPageModule = /** @class */ (function () {
    function UserListPageModule() {
    }
    UserListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_list__["a" /* UserListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_list__["a" /* UserListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], UserListPageModule);
    return UserListPageModule;
}());

//# sourceMappingURL=user-list.module.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
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





var UserListPage = /** @class */ (function () {
    function UserListPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userImg = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/user/';
        this.showYear = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/user/';
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('UserList');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    UserListPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('UserList body');
        $(document).prop('title', 'User List');
        $(".zoomContainer").remove();
        var d = new Date();
        this.showYear = d.getFullYear();
        this.showOfferList();
    };
    UserListPage.prototype.ngAfterViewInit = function () {
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
    UserListPage.prototype.showOfferList = function () {
        var _this = this;
        var pro_view = {
            product_id: this.navParams.data.id
        };
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/make-offer/seller-view-offers', pro_view, function (response) {
            if (response.offers.status == "success")
                _this.showOfferData = response.offers;
            else
                _this.showOfferData = null;
        }, function (error) {
            console.log(error);
        });
    };
    UserListPage.prototype.changeStatus = function (val_status, val_offrId) {
        var _this = this;
        var chng_status = {
            offer_id: val_offrId,
            offer_status: val_status
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/make-offer/offer-status', chng_status, function (response) {
            _this.infoService.hideLoading();
            _this.showOfferList();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], UserListPage.prototype, "content", void 0);
    UserListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-list',template:/*ion-inline-start:"/var/www/html/src/pages/seller-my-account/user-list/user-list.html"*/'\n<ion-content padding class="purchase-user-list">\n<div class="wrapper">\n	<div class="container all-category-main mb-3">\n        <div class="row">\n            <div class="col-lg-12 col-md-12 col-xl-12 col-12">\n				<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>	\n				<p class="mb-2 setFont-size">\n                    <a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;&nbsp;\n                    <i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n                    <a href="#/seller-my-account/Active" class="breadcrumblink">Active</a> &nbsp;&nbsp;\n                    <i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n                    <a href="#" class="breadcrumblink font-weight-bold" disabled="true">Offer User List</a></p>\n            </div>\n        </div>\n        <div class="row m-0">\n            <div class="col-lg-12 col-md-12 col-xl-12 col-12 pt-1 pb-1 text-left frontbg">\n                <h6 class="mt-1">Offer User List</h6>\n            </div>\n            <div class="col-lg-12 col-md-12 col-12 mt-2 mb-3">\n                <div class="table-responsive">\n                    <table class="table table-striped border setFont-size">\n                        <thead>\n                        <tr>\n                            <th scope="col" class="page-listing-first-td">#</th>\n                            <th scope="col" class="page-listing-first-td">User Name</th>\n                            <th scope="col" class="page-listing-first-td">Offer price</th>\n                            <th scope="col" class="page-listing-first-td">Quantity</th>\n                            <th scope="col" class="page-listing-first-td">Status</th>\n                        </tr>\n                        </thead>\n                        <tbody *ngIf="showOfferData?.data.length <= 0;else showData;">\n							<tr>\n								<td colspan="5" class="text-center">\n									No item found\n								</td>\n							</tr>\n						</tbody>\n						<ng-template #showData>\n							<tbody>\n								<tr *ngFor="let ofrdata of showOfferData?.data">\n									<td>\n                                        <a *ngIf="ofrdata?.profile_pic != \'\' ">\n                                            <img src="{{userImg}}{{ofrdata?.buyer_id}}/{{ofrdata?.profile_pic}}" width="60px" height="60px"/>\n                                        </a>\n                                        <a *ngIf="ofrdata?.profile_pic == \'\' ">\n                                            <img src="assets/images/men-placeholder.png" width="60px" height="60px"/>\n                                        </a>\n                                    </td>\n									<td>{{ofrdata?.first_name}}  {{ofrdata?.last_name}}</td>\n									<td>{{ofrdata?.offer_price}} AED</td>\n									<td>{{ofrdata?.quantity}}</td>\n									<td *ngIf="ofrdata?.offer_status ==\'Accept\'"> {{ofrdata?.offer_status}} </td>\n									<td *ngIf="ofrdata?.offer_status ==\'Decline\'"> {{ofrdata?.offer_status}} </td>\n									<td *ngIf="ofrdata?.offer_status ==\'Pending\'"> <a class="text-success" (click)="changeStatus(\'Accept\',ofrdata?.offer_id)"> ACCEPT</a> &nbsp; &nbsp; <a class="text-danger" (click)="changeStatus(\'Decline\',ofrdata?.offer_id)"> DECLINE </a></td>\n								</tr>\n							</tbody>\n						</ng-template>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n		<!--================Footer Area =================-->\n<footer-page></footer-page>\n</div>\n    \n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/seller-my-account/user-list/user-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], UserListPage);
    return UserListPage;
}());

//# sourceMappingURL=user-list.js.map

/***/ })

});
//# sourceMappingURL=26.js.map