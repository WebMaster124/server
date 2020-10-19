webpackJsonp([29],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteWishlistPageModule", function() { return AddNoteWishlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_note_wishlist__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddNoteWishlistPageModule = /** @class */ (function () {
    function AddNoteWishlistPageModule() {
    }
    AddNoteWishlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_note_wishlist__["a" /* AddNoteWishlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_note_wishlist__["a" /* AddNoteWishlistPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], AddNoteWishlistPageModule);
    return AddNoteWishlistPageModule;
}());

//# sourceMappingURL=add-note-wishlist.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNoteWishlistPage; });
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





var AddNoteWishlistPage = /** @class */ (function () {
    function AddNoteWishlistPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('AddNote');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    AddNoteWishlistPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $(document).prop('title', 'Added notes');
        $('body').removeClass().addClass('AddNote body');
        this.getData_decode = this.navParams.data.id;
        this.convert_decode = atob(this.getData_decode);
        this.convert_parse = JSON.parse(this.convert_decode);
        var d = new Date();
        this.showYear = d.getFullYear();
        this.viewwishList();
    };
    AddNoteWishlistPage.prototype.ngAfterViewInit = function () {
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
    AddNoteWishlistPage.prototype.viewwishList = function () {
        var _this = this;
        try {
            var wishlist_view = {
                user_id: this.localItem.id,
                product_id: this.convert_parse
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/wishlist/view-wishlist', wishlist_view, function (response) {
                _this.viewishData = response.wishlist;
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    AddNoteWishlistPage.prototype.updatewishList = function () {
        var _this = this;
        var favorite = [];
        $.each($("textarea:input[name='note_add']"), function () {
            favorite.push($(this).val());
        });
        var wishlist_update = {
            user_id: this.localItem.id,
            product_id: this.convert_parse,
            note: favorite
        };
        try {
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/wishlist/update-wishlist-note', wishlist_update, function (response) {
                if (response.wishlist.status == "success") {
                    _this.infoService.hideLoading();
                    _this.navCtrl.popToRoot();
                }
                else {
                    _this.infoService.hideLoading();
                    _this.navCtrl.popToRoot();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
        catch (Error) {
            this.infoService.hideLoading();
            console.log(Error);
        }
    };
    AddNoteWishlistPage.prototype.cancelClick = function () {
        this.navCtrl.popToRoot();
    };
    AddNoteWishlistPage.prototype.goToProductdetail = function (val) {
        this.navCtrl.push('ProductDetails', {
            id: val
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], AddNoteWishlistPage.prototype, "content", void 0);
    AddNoteWishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-note-wishlist',template:/*ion-inline-start:"/var/www/html/src/pages/seller-my-account/add-note-wishlist/add-note-wishlist.html"*/'<ion-content padding>\n<div class="add-note">\n	<div class="wrapper">\n		<div class="container add-note-main mb-3">\n			<div class="row m-0">\n				<div class="col-lg-12 col-md-12 col-xl-12 col-12 mt-lg-4 mt-xl-4">\n					<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n					<p class="mb-2 setFontSize">\n						<a class="breadcrumblink" href="#/home">Dibdaa</a> &nbsp;<i class="fa fa-angle-right"></i>&nbsp;\n						<a class="breadcrumblink" href="#/seller-my-account/WishList">My Dibdaa</a> &nbsp;<i class="fa fa-angle-right"></i>&nbsp;\n						<a class="breadcrumblink" disabled="" href="#">Add Notes</a>\n					</p>\n				</div>\n			</div>\n		</div>\n		<div class="container add-note-main mb-3" *ngFor="let wishlst of viewishData?.data">\n			<div class="row border-bottom-add-note pb-4 m-0">\n				<div class="col-lg-2 col-md-3 col-12">\n					<img src="{{trandingImgUrl}}{{wishlst.product_id}}/L/{{wishlst.photos[0]}}" class="img-fluid add-note-image">\n				</div>\n				<div class="col-lg-6 col-md-9 col-12 mt-3 mt-lg-0 mt-md-0">\n					<p class="m-0 setFontSize"><a (click)="goToProductdetail(wishlst?.product_id)" class="text-primary">{{wishlst.title}}</a> ({{wishlst.product_sku}})</p>\n					<div class="form-group mt-3">\n						<textarea class="form-control" id="addnotetxt" rows="2" name="note_add">{{wishlst.notes}}</textarea>\n					</div>\n				</div>\n			</div>\n			\n		</div>\n		<div class="container">\n			<div class="row border-bottom-add-note pb-4 pt-4 m-0">\n				<div class="col-lg-12 col-md-12 col-12">\n					<button class="btn theme-light-btn ml-1 mr-1" (click)="updatewishList()">Save</button>\n					<button class="btn theme-dark-btn ml-1 mr-1" (click)="cancelClick()">Cancel</button>\n				</div>\n			</div>\n		</div>\n	</div>\n	<!--================Footer Area =================-->\n	<footer-page></footer-page>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/seller-my-account/add-note-wishlist/add-note-wishlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AddNoteWishlistPage);
    return AddNoteWishlistPage;
}());

//# sourceMappingURL=add-note-wishlist.js.map

/***/ })

});
//# sourceMappingURL=29.js.map