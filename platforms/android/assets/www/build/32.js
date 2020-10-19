webpackJsonp([32],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftListingPageModule", function() { return DraftListingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__draft_listing__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DraftListingPageModule = /** @class */ (function () {
    function DraftListingPageModule() {
    }
    DraftListingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__draft_listing__["a" /* DraftListingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__draft_listing__["a" /* DraftListingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], DraftListingPageModule);
    return DraftListingPageModule;
}());

//# sourceMappingURL=draft-listing.module.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraftListingPage; });
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





/**
 * Generated class for the DraftListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DraftListingPage = /** @class */ (function () {
    function DraftListingPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('DraftListing');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    DraftListingPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $(".zoomContainer").remove();
        $('body').removeClass().addClass('DraftListing body');
        $(document).prop('title', 'Create your listing');
        this.showDraftProduct();
    };
    DraftListingPage.prototype.ngAfterViewInit = function () {
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
    DraftListingPage.prototype.showDraftProduct = function () {
        var _this = this;
        try {
            if (this.localItem == null) {
            }
            else {
                var showdraftList = {
                    user_id: this.localItem.id
                };
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/view-latest-draft', showdraftList, function (response) {
                    if (response.latest_draft.status == "success") {
                        _this.dreftdata = response.latest_draft;
                        _this.infoService.hideLoading();
                    }
                    else {
                        _this.dreftdata = response;
                        _this.infoService.hideLoading();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
        catch (Error) {
            console.log(Error);
            this.infoService.hideLoading();
        }
    };
    DraftListingPage.prototype.deleteProduct = function (val) {
        var _this = this;
        try {
            var deletePro = {
                product_id: val
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/delete-latest-draft', deletePro, function (response) {
                if (response.latest_draft.status == "success") {
                    _this.showDraftProduct();
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    DraftListingPage.prototype.gotoPage = function (val, val1) {
        if (val1 == "addProduct")
            this.navCtrl.push('AddProductPage');
        else if (val1 == "completelist") {
            this.navCtrl.push('AddProduct', {
                id: val
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], DraftListingPage.prototype, "content", void 0);
    DraftListingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-draft-listing',template:/*ion-inline-start:"/var/www/html/src/pages/product/draft-listing/draft-listing.html"*/'<ion-content padding class="latest-draft">\n    <div class="wrapper">\n        <section class="draft_area pt-2 pb-2">\n            <div class="container">\n                <div class="row text-left">\n                    <div class="col-lg-12 col-md-12 col-xl-12 col-12 breadcrumblink_div">\n                        <p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n						<p class="set-fontsize p-0 m-0">\n                            <a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;<i class="fa fa-angle-right"></i>&nbsp;\n                            <a class="breadcrumblink" disabled>draft-listing</a>\n                        </p>\n                    </div>\n                </div>\n                <div class="row mt-4" *ngIf="dreftdata?.data.length > 0">\n                    <div class="col-lg-12 col-md-12 col-12">\n                        <div class="latest-draft-div p-lg-4 p-md-4 p-3">\n                            <h5>\n                                Latest drafts\n                            </h5>\n                            <div class="row">\n                                <div class="col-lg-4 col-md-6 col-12 mb-lg-0 mb-md-4 mb-4" *ngFor="let drftdata of dreftdata?.data">\n                                    <div class="row ml-0 mr-0 mt-2">\n                                        <div class="col-lg-3 col-md-4 col-4 p-0 text-center">\n                                            <img src="assets/images/draft-placeholder.png" class="img-fluid draft-image" *ngIf="drftdata?.photos == false || drftdata?.photos.length == 0">\n                                            <img *ngIf="drftdata?.photos != false && drftdata?.photos.length > 0" src="{{trandingImgUrl}}{{drftdata?.id}}/S/{{drftdata?.photos[0]}}" class="img-fluid draft-image">\n                                        </div>\n                                        <div class="col-lg-9 col-md-8 col-8 p-0" [ngClass]="{\'pt-4\' : drftdata?.title == null}">\n                                            <p class="draft-title mb-2 mt-2" *ngIf="drftdata?.title != null">{{drftdata?.title}}</p>\n                                            <span><a (click)="gotoPage(drftdata?.id,\'completelist\')" class="complete-delete" class="actionLink">Complete</a> |\n                                                <a class="complete-delete" (click)="deleteProduct(drftdata?.id)" class="actionLink">Delete</a></span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="row mt-4">\n                    <div class="col-lg-12 col-md-12 col-12">\n                        <div class="latest-draft-div p-lg-4 p-md-4 p-3">\n                            <h5 class="mb-4">\n                                Listing templates\n                            </h5>\n                            <p class="draft-title mb-4 mt-2">Create reusable listing templates to help you list items faster.</p>\n                            <a (click)="gotoPage(\'\',\'addProduct\')" class="btn theme-light-btn">Create a template</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <footer-page></footer-page>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/product/draft-listing/draft-listing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], DraftListingPage);
    return DraftListingPage;
}());

//# sourceMappingURL=draft-listing.js.map

/***/ })

});
//# sourceMappingURL=32.js.map