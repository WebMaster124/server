webpackJsonp([45],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllItemPageModule", function() { return AllItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_item__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AllItemPageModule = /** @class */ (function () {
    function AllItemPageModule() {
    }
    AllItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_item__["a" /* AllItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_item__["a" /* AllItemPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], AllItemPageModule);
    return AllItemPageModule;
}());

//# sourceMappingURL=all-item.module.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllItemPage; });
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





var AllItemPage = /** @class */ (function () {
    function AllItemPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
        this.localItem = '';
        this.recntview = false;
        this.latestrend = false;
        this.dailydeal = false;
        this.recommended = false;
        this.sellSimilar = false;
        this.viewSeller = false;
        this.viewwishlist = false;
        this.viewunderfifty = false;
        this.viewsellerActive = false;
        this.viewnewItem = false;
        this.userName = null;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('AllItems');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    AllItemPage.prototype.ngAfterViewInit = function () {
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
    AllItemPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('all-item body');
        $(document).prop('title', 'All Items');
        $(".zoomContainer").remove();
        $(".searchanythingform").trigger("reset");
        var d = new Date();
        this.showYear = d.getFullYear();
        if (this.navParams.data.id == "RecentlyViewed") {
            this.recentlyViewedfunc();
        }
        else if (this.navParams.data.id == "CurrentlyWatched") {
            this.currentlyWatchedfunc();
        }
        else if (this.navParams.data.id == "SellerActiveItem") {
            this.selleractivefunc();
        }
        else if (this.navParams.data.id == "TrendingDibdaa") {
            this.tredingDibdaafunc();
        }
        else if (this.navParams.data.id == "UnderValue") {
            this.showMenuValue();
            this.underfiftyfunc();
        }
        else if (this.navParams.data.id == "FeaturedDeals") {
            this.featuredDealsfunc();
        }
        else if (this.navParams.data.id == "Recommended") {
            this.recommendedfunc();
        }
        else if (this.navParams.data.id == "newItems") {
            this.newItemsfunc();
        }
        else if ($.type(this.navParams.data.id) == 'object') {
            this.viewsellerfunc();
        }
        else {
            this.sellSimilarfunc();
        }
        $(".zoomContainer").remove();
    };
    AllItemPage.prototype.newItemsfunc = function () {
        var _this = this;
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/new-products', '', function (response) {
            _this.viewnewItem = true;
            _this.viewnewItemData = response.products;
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    AllItemPage.prototype.selleractivefunc = function () {
        var _this = this;
        var selleractive_viewed = {
            user_id: localStorage.getItem('seller_Id')
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/view-active-product', selleractive_viewed, function (response) {
            _this.viewsellerActive = true;
            _this.viewsellerActiveData = response.data;
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    AllItemPage.prototype.underfiftyfunc = function () {
        var _this = this;
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/home/under-fifty', '', function (response) {
            _this.viewunderfifty = true;
            _this.viewunderfiftyData = response.under_fifty;
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    AllItemPage.prototype.viewsellerfunc = function () {
        var _this = this;
        var data_viewpro = this.navParams.data.id;
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/view-product', data_viewpro, function (response) {
            _this.viewSeller = true;
            _this.userName = _this.navParams.data.id.user_name;
            _this.viewSellerData = response;
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    AllItemPage.prototype.recentlyViewedfunc = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var recently_viewed = {
                user_id: this.localItem.id
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/recently-viewed-items', recently_viewed, function (response) {
                if (response.status == "success" && response.data.length > 0) {
                    _this.recntview = true;
                    _this.recentlyViewedData = response;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.recentlyViewedData = null;
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    AllItemPage.prototype.currentlyWatchedfunc = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var wishlist_view = {
                user_id: this.localItem.id
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/wishlist/view-wishlist', wishlist_view, function (response) {
                if (response.wishlist.status == "success" && response.wishlist.data.length > 0) {
                    _this.viewwishlist = true;
                    _this.viewwishlistData = response.wishlist;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.viewwishlistData = null;
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    AllItemPage.prototype.tredingDibdaafunc = function () {
        var _this = this;
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/latest-trending', '', function (response) {
            if (response.status == "success" && response.data.length > 0) {
                _this.latestrend = true;
                _this.latestrandingData = response;
                _this.infoService.hideLoading();
            }
            else {
                _this.latestrandingData = null;
                _this.infoService.hideLoading();
            }
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    AllItemPage.prototype.featuredDealsfunc = function () {
        var _this = this;
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/daily-deals', '', function (response) {
            if (response.status == "success" && response.data.length > 0) {
                _this.dailydeal = true;
                _this.dailydealData = response;
                _this.infoService.hideLoading();
            }
            else {
                _this.dailydealData = null;
                _this.infoService.hideLoading();
            }
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    AllItemPage.prototype.recommendedfunc = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var recommended_viewed = {
                user_id: this.localItem.id
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/recommended-for-you', recommended_viewed, function (response) {
                if (response.list_count.status == "success" && response.list_count.data.length > 0) {
                    _this.recommended = true;
                    _this.recommendedData = response.list_count;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.recommendedData = null;
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    AllItemPage.prototype.showMenuValue = function () {
     var _this = this;
            try {
//                var id_uMsg = JSON.parse(this.retrievedObject);
                var msg_details = {
//                    user_id: id_uMsg.id
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/setting/setting-data', msg_details, function (response) {
//                    alert(response.setting.data);
                    if (response.setting.status == "success") {
                        _this.menuvalue = response.setting.data;
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            catch (Error) {
                console.log(Error);
            }
    };
    AllItemPage.prototype.sellSimilarfunc = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var sellSimilar_viewed = {
                product_id: this.navParams.data.id
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/sell-similar', sellSimilar_viewed, function (response) {
                if (response.similar_products.status == "success") {
                    _this.sellSimilar = true;
                    _this.sellSimilarData = response.similar_products;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.sellSimilarData = null;
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    AllItemPage.prototype.gotoProductdetailpage = function (val) {
        this.navCtrl.push('ProductDetails', {
            id: val
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], AllItemPage.prototype, "content", void 0);
    AllItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-all-item',template:/*ion-inline-start:"/var/www/html/src/pages/home/all-item/all-item.html"*/'<ion-content padding>\n<div class="featured-deals">\n	<div class="wrapper">\n		<div class="container featured-deals-main mb-3">\n			<div class="row">\n				<div class="col-lg-12 col-md-12 col-xl-12 col-12 breadcrumblink_div set_fontSize">\n					<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n					<p>\n						<a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n						<a class="breadcrumblink" disabled *ngIf="recntview == true">Recently viewed</a> \n						<a class="breadcrumblink" disabled *ngIf="latestrend == true">Latest Trending </a> \n						<a class="breadcrumblink" disabled *ngIf="dailydeal == true">Featured Deals</a> \n						<a class="breadcrumblink" disabled *ngIf="recommended == true">Recommended For You</a>\n						<a href="#/seller-my-account/SavedSellers" class="breadcrumblink" *ngIf="sellSimilar == true">My Dibdaa&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;</a> <a class="breadcrumblink" disabled *ngIf="sellSimilar == true">Sell Similar</a>\n						<a href="#/seller-my-account/SavedSellers" class="breadcrumblink" *ngIf="viewSeller == true">My Dibdaa &nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;</a> <a class="breadcrumblink" disabled *ngIf="viewSeller == true">&nbsp;Seller {{userName}} Product List</a>\n						<a class="breadcrumblink" disabled *ngIf="viewwishlist == true">Currently Watched</a>\n						<a class="breadcrumblink" disabled *ngIf="viewunderfifty == true">Under {{menuvalue}} AED</a>\n						<a class="breadcrumblink" disabled *ngIf="viewsellerActive == true">Seller active item</a>\n						<a class="breadcrumblink" disabled *ngIf="viewnewItem == true">New Items</a>\n					</p>\n				</div>\n			</div>\n			<div class="deals bg padTB60 mt-2" *ngIf="viewSeller == true">\n				<h6 *ngIf="userName != null"> Seller - {{userName}} Store Product Lists </h6>\n				<div class="container p-0">\n					<div class="row set_fontSize">\n						<div class="col-lg-2 col-md-3 col-6 marB30" *ngFor="let viewSLRdata of viewSellerData?.data">\n							<div class="box-a mb-4 border rounded">\n								<figure class="m-0">\n									<a (click)="gotoProductdetailpage(viewSLRdata?.product_id)" title="{{viewSLRdata?.title}}">\n										<img src="{{trandingImgUrl}}{{viewSLRdata?.product_id}}/L/{{viewSLRdata?.photos[0]}}" class="img-fluid" alt="{{viewSLRdata?.title}}">\n									</a>\n								</figure>\n								<div class="box-detail bg-light p-1">\n									<p class="mt-2 mb-1"><a (click)="gotoProductdetailpage(viewSLRdata?.product_id)" title="{{viewSLRdata?.title}}">{{(viewSLRdata?.title.length > 15)? (viewSLRdata?.title | slice:0:15)+\'...\':(viewSLRdata?.title)}}</a></p>\n									<div class="row p-0 m-0">\n										<div class="col-lg-6 col-md-6 p-0 m-0">\n											<span class="ratings">\n												<div class="empty-stars"></div> \n												<div class="full-stars" style="width:0%" *ngIf="viewSLRdata?.product_avg == 0"></div>\n												<div class="full-stars" style="width:20%" *ngIf="viewSLRdata?.product_avg == 1"></div>\n												<div class="full-stars" style="width:40%" *ngIf="viewSLRdata?.product_avg == 2"></div>\n												<div class="full-stars" style="width:60%" *ngIf="viewSLRdata?.product_avg == 3"></div>\n												<div class="full-stars" style="width:80%" *ngIf="viewSLRdata?.product_avg == 4"></div>\n												<div class="full-stars" style="width:100%" *ngIf="viewSLRdata?.product_avg == 5"></div>\n											</span>\n										</div>\n										<div class="col-lg-6 col-md-6 p-0 m-0 text-lg-right text-md-right">\n											<span class="text-danger" *ngIf="viewSLRdata?.quantity <= 5">Only {{viewSLRdata?.quantity}} left! </span>\n											<span *ngIf="viewSLRdata?.quantity > 5">{{viewSLRdata?.quantity}} left! </span>\n										</div>\n									</div>\n									<span>{{viewSLRdata?.final_price}} AED</span> \n									<span *ngIf="viewSLRdata?.discount > 0 "> | <del><span class="grey">{{viewSLRdata?.price}} AED</span></del>\n										| <span class="text-uppercase">{{viewSLRdata?.discount}}% off</span>\n									</span>\n									<p class="mb-1 mt-0" *ngIf="viewSLRdata?.product_address != null">From <a title="{{viewSLRdata?.product_address}}">{{(viewSLRdata?.product_address.length > 13)? (viewSLRdata?.product_address | slice:0:13)+\'...\':(viewSLRdata?.product_address)}}</a></p>\n									<p class="mb-1 mt-0">Free shipping</p>\n									<p class="mb-1 mt-0" *ngIf="viewSLRdata?.selling_type == \'Auction style\'">Auction style</p>\n									<p class="mb-1 mt-0" *ngIf="viewSLRdata?.selling_type ==\'Fixed price\'">Buy It Now</p>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class="deals bg padTB60 mt-2" *ngIf="viewnewItem == true">\n				<h6>New Items</h6>\n				<div class="container p-0">\n					<div class="row set_fontSize">\n						<div class="col-lg-2 col-md-3 col-6 marB30" *ngFor="let newitm of viewnewItemData?.data">\n							<div class="box-a mb-4 border rounded">\n								<figure class="m-0">\n									<a (click)="gotoProductdetailpage(newitm?.id)" title="{{newitm?.title}}">\n										<img src="{{trandingImgUrl}}{{newitm?.id}}/L/{{newitm?.photos[0]}}" class="img-fluid" alt="{{newitm?.title}}">\n									</a>\n								</figure>\n								<div class="sale" *ngIf="newitm?.endsoon <= 10 && newitm?.time == \'Started\'"><i class="fa fa-clock-o clockicon"></i></div>\n								<div class="box-detail bg-light p-1">\n									<p class="mt-2 mb-1"><a (click)="gotoProductdetailpage(newitm?.id)" title="{{newitm?.title}}">{{(newitm?.title.length > 15)? (newitm?.title | slice:0:15)+\'...\':(newitm?.title)}}</a></p>\n									<div class="row p-0 m-0">\n										<div class="col-lg-6 col-md-6 p-0 m-0">\n											<span class="ratings">\n												<div class="empty-stars"></div> \n												<div class="full-stars" style="width:0%" *ngIf="newitm?.product_avg == 0"></div>\n												<div class="full-stars" style="width:20%" *ngIf="newitm?.product_avg == 1"></div>\n												<div class="full-stars" style="width:40%" *ngIf="newitm?.product_avg == 2"></div>\n												<div class="full-stars" style="width:60%" *ngIf="newitm?.product_avg == 3"></div>\n												<div class="full-stars" style="width:80%" *ngIf="newitm?.product_avg == 4"></div>\n												<div class="full-stars" style="width:100%" *ngIf="newitm?.product_avg == 5"></div>\n											</span>\n										</div>\n										<div class="col-lg-6 col-md-6 p-0 m-0 text-lg-right text-md-right">\n											<span class="text-danger" *ngIf="newitm?.quantity <= 5">Only {{newitm?.quantity}} left! </span>\n											<span *ngIf="newitm?.quantity > 5">{{newitm?.quantity}} left! </span>\n										</div>\n									</div>\n									<span>{{newitm?.final_price}} AED</span> \n									<span *ngIf="newitm?.discount > 0 "> | <del><span class="grey">{{newitm?.price}} AED</span></del>\n										| <span class="text-uppercase">{{newitm?.discount}}% off</span>\n									</span>\n									<p class="mb-1 mt-0" *ngIf="newitm?.product_address != null">From <a title="{{newitm?.product_address}}">{{(newitm?.product_address.length > 13)? (newitm?.product_address | slice:0:13)+\'...\':(newitm?.product_address)}}</a></p>\n									<p class="mb-1 mt-0">Delivery by: {{newitm?.shipment_type}}</p>\n									<p class="mb-1 mt-0" *ngIf="newitm?.selling_type == \'Auction style\'">Auction style</p>\n									<p class="mb-1 mt-0" *ngIf="newitm?.selling_type ==\'Fixed price\'">Buy It Now</p> \n									<p class="mb-0 mt-2 font-weight-bold text-danger" *ngIf="newitm?.endsoon <= 10 && newitm?.time == \'Started\'">Almost gone</p>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class="deals bg padTB60 mt-2" *ngIf="recntview == true">\n				<h6>Recently viewed</h6>\n				<div class="container p-0">\n					<div class="row set_fontSize">\n						<div class="col-lg-2 col-md-3 col-6 marB30" *ngFor="let rcntview of recentlyViewedData?.data">\n							<div class="box-a mb-4 border rounded">\n								<figure class="m-0">\n									<a (click)="gotoProductdetailpage(rcntview?.id)" title="{{rcntview?.title}}">\n										<img src="{{trandingImgUrl}}{{rcntview?.id}}/L/{{rcntview?.photos[0]}}" class="img-fluid" alt="{{rcntview?.title}}">\n									</a>\n								</figure>\n								<div class="sale" *ngIf="rcntview?.endsoon <= 10 && rcntview?.time == \'Started\'"><i class="fa fa-clock-o clockicon"></i></div>\n								<div class="box-detail bg-light p-1">\n									<p class="mt-2 mb-1"><a (click)="gotoProductdetailpage(rcntview?.id)" title="{{rcntview?.title}}">{{(rcntview?.title.length > 15)? (rcntview?.title | slice:0:15)+\'...\':(rcntview?.title)}}</a></p>\n									<div class="row p-0 m-0">\n										<div class="col-lg-6 col-md-6 p-0 m-0">\n											<span class="ratings">\n												<div class="empty-stars"></div> \n												<div class="full-stars" style="width:0%" *ngIf="rcntview?.product_avg == 0"></div>\n												<div class="full-stars" style="width:20%" *ngIf="rcntview?.product_avg == 1"></div>\n												<div class="full-stars" style="width:40%" *ngIf="rcntview?.product_avg == 2"></div>\n												<div class="full-stars" style="width:60%" *ngIf="rcntview?.product_avg == 3"></div>\n												<div class="full-stars" style="width:80%" *ngIf="rcntview?.product_avg == 4"></div>\n												<div class="full-stars" style="width:100%" *ngIf="rcntview?.product_avg == 5"></div>\n											</span>\n										</div>\n										<div class="col-lg-6 col-md-6 p-0 m-0 text-lg-right text-md-right">\n											<span class="text-danger" *ngIf="rcntview?.quantity <= 5">Only {{rcntview?.quantity}} left! </span>\n											<span *ngIf="rcntview?.quantity > 5">{{rcntview?.quantity}} left! </span>\n										</div>\n									</div>\n									<span>{{rcntview?.final_price}} AED</span> \n									<span *ngIf="rcntview?.discount > 0 "> | <del><span class="grey">{{rcntview?.price}} AED</span></del>\n										| <span class="text-uppercase">{{rcntview?.discount}}% off</span>\n									</span>\n									<p class="mb-1 mt-0" *ngIf="rcntview?.product_address != null">From <a title="{{rcntview?.product_address}}">{{(rcntview?.product_address.length > 13)? (rcntview?.product_address | slice:0:13)+\'...\':(rcntview?.product_address)}}</a></p>\n									<p class="mb-1 mt-0">Delivery by: {{rcntview?.shipment_type}}</p>\n									<p class="mb-1 mt-0" *ngIf="rcntview?.selling_type == \'Auction style\'">Auction style</p>\n									<p class="mb-1 mt-0" *ngIf="rcntview?.selling_type ==\'Fixed price\'">Buy It Now</p> \n									<p class="mb-0 mt-2 font-weight-bold text-danger" *ngIf="rcntview?.endsoon <= 10 && rcntview?.time == \'Started\'">Almost gone</p>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class="deals bg padTB60 mt-2" *ngIf="latestrend == true">\n				<h6>Latest Trending </h6>\n				<div class="container p-0">\n					<div class="row set_fontSize">\n						<div class="col-lg-2 col-md-3 col-6 marB30" *ngFor="let lsttend of latestrandingData?.data">\n							<div class="box-a mb-4 border rounded">\n								<figure class="m-0">\n									<a (click)="gotoProductdetailpage(lsttend?.product_id)" title="{{lsttend?.title}}">\n										<img src="{{trandingImgUrl}}{{lsttend?.product_id}}/L/{{lsttend?.photos[0]}}" class="img-fluid" alt="{{lsttend?.title}}">\n									</a>\n								</figure>\n								<div class="sale" *ngIf="lsttend?.endsoon <= 10 && lsttend?.time == \'Started\'"><i class="fa fa-clock-o clockicon"></i></div>\n								<div class="box-detail bg-light p-1">\n									<p class="mt-2 mb-1"><a (click)="gotoProductdetailpage(lsttend?.product_id)" title="{{lsttend?.title}}">{{(lsttend?.title.length > 15)? (lsttend?.title | slice:0:15)+\'...\':(lsttend?.title)}}</a></p>\n									<div class="row p-0 m-0">\n										<div class="col-lg-6 col-md-6 p-0 m-0 text-lg-right text-md-right">\n											<span class="ratings">\n												<div class="empty-stars"></div> \n												<div class="full-stars" style="width:0%" *ngIf="lsttend?.product_avg == 0"></div>\n												<div class="full-stars" style="width:20%" *ngIf="lsttend?.product_avg == 1"></div>\n												<div class="full-stars" style="width:40%" *ngIf="lsttend?.product_avg == 2"></div>\n												<div class="full-stars" style="width:60%" *ngIf="lsttend?.product_avg == 3"></div>\n												<div class="full-stars" style="width:80%" *ngIf="lsttend?.product_avg == 4"></div>\n												<div class="full-stars" style="width:100%" *ngIf="lsttend?.product_avg == 5"></div>\n											</span>\n										</div>\n										<div class="col-lg-6 col-md-6 p-0 m-0">\n											<span class="text-danger" *ngIf="lsttend?.quantity <= 5">Only {{lsttend?.quantity}} left! </span>\n											<span *ngIf="lsttend?.quantity > 5">{{lsttend?.quantity}} left! </span>\n										</div>\n									</div>\n									<span>{{lsttend?.final_price}} AED</span> \n									<span *ngIf="lsttend?.discount > 0 "> | <del><span class="grey">{{lsttend?.price}} AED</span></del>\n										| <span class="text-uppercase">{{lsttend?.discount}}% off</span>\n									</span>\n									<p class="mb-1 mt-0" *ngIf="lsttend?.product_address != null">From <a title="{{lsttend?.product_address}}">{{(lsttend?.product_address.length > 13)? (lsttend?.product_address | slice:0:13)+\'...\':(lsttend?.product_address)}}</a></p>\n									<p class="mb-1 mt-0">Delivery by: {{lsttend?.shipment_type}}</p>\n									<p class="mb-1 mt-0" *ngIf="lsttend?.selling_type == \'Auction style\'">Auction style</p>\n									<p class="mb-1 mt-0" *ngIf="lsttend?.selling_type ==\'Fixed price\'">Buy It Now</p> \n									<p class="mb-0 mt-2 font-weight-bold text-danger" *ngIf="lsttend?.endsoon <= 10 && lsttend?.time == \'Started\'">Almost gone</p>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class="deals bg padTB60 mt-2" *ngIf="dailydeal == true">\n				<h6>Featured Deals</h6>\n				<div class="container p-0">\n					<div class="row set_fontSize">\n						<div class="col-lg-2 col-md-3 col-6 marB30" *ngFor="let dydeal of dailydealData?.data">\n							<div class="box-a mb-4 border rounded">\n								<figure class="m-0">\n									<a (click)="gotoProductdetailpage(dydeal?.id)" title="{{dydeal?.title}}">\n										<img src="{{trandingImgUrl}}{{dydeal?.id}}/L/{{dydeal?.photos[0]}}" class="img-fluid" alt="{{dydeal?.title}}">\n									</a>\n								</figure>\n								<div class="sale" *ngIf="dydeal?.endsoon <= 10 && dydeal?.time == \'Started\'"><i class="fa fa-clock-o clockicon"></i></div>\n								<div class="box-detail bg-light p-1">\n									<p class="mt-2 mb-1"><a title="{{dydeal?.title}}" (click)="gotoProductdetailpage(dydeal?.id)">{{(dydeal?.title.length > 15)? (dydeal?.title | slice:0:15)+\'...\':(dydeal?.title)}}</a></p>\n									<div class="row p-0 m-0">\n										<div class="col-lg-6 col-md-6 p-0 m-0">\n											<span class="ratings">\n												<div class="empty-stars"></div> \n												<div class="full-stars" style="width:0%" *ngIf="dydeal?.product_avg == 0"></div>\n												<div class="full-stars" style="width:20%" *ngIf="dydeal?.product_avg == 1"></div>\n												<div class="full-stars" style="width:40%" *ngIf="dydeal?.product_avg == 2"></div>\n												<div class="full-stars" style="width:60%" *ngIf="dydeal?.product_avg == 3"></div>\n												<div class="full-stars" style="width:80%" *ngIf="dydeal?.product_avg == 4"></div>\n												<div class="full-stars" style="width:100%" *ngIf="dydeal?.product_avg == 5"></div>\n											</span>\n										</div>\n										<div class="col-lg-6 col-md-6 p-0 m-0 text-lg-right text-md-right">\n											<span class="text-danger" *ngIf="dydeal?.quantity <= 5">Only {{dydeal?.quantity}} left! </span>\n											<span *ngIf="dydeal?.quantity > 5">{{dydeal?.quantity}} left! </span>\n										</div>\n									</div>\n									<span>{{dydeal?.final_price}} AED</span>\n									<span *ngIf="dydeal?.discount > 0 "> |\n										<del><span class="grey">{{dydeal?.price}} AED</span></del>\n										| <span class="text-uppercase">{{dydeal?.discount}}% off</span>\n									</span>\n									<p class="mb-1 mt-0" *ngIf="dydeal?.product_address != null">From <a title="{{dydeal?.product_address}}">{{(dydeal?.product_address.length > 13)? (dydeal?.product_address | slice:0:13)+\'...\':(dydeal?.product_address)}}</a></p>\n									<p class="mb-1 mt-0">Delivery by: {{dydeal?.shipment_type}}</p>\n									<p class="mb-1 mt-0" *ngIf="dydeal?.selling_type == \'Auction style\'">Auction style</p>\n									<p class="mb-1 mt-0" *ngIf="dydeal?.selling_type ==\'Fixed price\'">Buy It Now</p>\n									<p class="mb-0 mt-2 font-weight-bold text-danger" *ngIf="dydeal?.endsoon <= 10 && dydeal?.time == \'Started\'">Almost gone</p>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class="deals bg padTB60 mt-2" *ngIf="recommended == true">\n				<h6>Recommended For You</h6>\n				<div class="container p-0">\n					<div class="row set_fontSize">\n						<div class="col-lg-2 col-md-3 col-6 marB30" *ngFor="let recommendedeal of recommendedData?.data">\n							<div class="box-a mb-4 border rounded">\n								<figure class="m-0">\n									<a (click)="gotoProductdetailpage(recommendedeal?.id)" title="{{recommendedeal?.title}}">\n										<img src="{{trandingImgUrl}}{{recommendedeal?.id}}/L/{{recommendedeal?.photos[0]}}" class="img-fluid" alt="{{recommendedeal?.title}}">\n									</a>\n								</figure>\n								<div class="sale" *ngIf="recommendedeal?.endsoon <= 10 && recommendedeal?.time == \'Started\'"><i class="fa fa-clock-o clockicon"></i></div>\n								<div class="box-detail bg-light p-1">\n									<p class="mt-2 mb-1"><a title="{{recommendedeal?.title}}" (click)="gotoProductdetailpage(recommendedeal?.id)">{{(recommendedeal?.title.length > 15)? (recommendedeal?.title | slice:0:15)+\'...\':(recommendedeal?.title)}}</a></p>\n									<div class="row p-0 m-0">\n										<div class="col-lg-6 col-md-6 p-0 m-0">\n											<span class="ratings">\n												<div class="empty-stars"></div> \n												<div class="full-stars" style="width:0%" *ngIf="recommendedeal?.product_avg == 0"></div>\n												<div class="full-stars" style="width:20%" *ngIf="recommendedeal?.product_avg == 1"></div>\n												<div class="full-stars" style="width:40%" *ngIf="recommendedeal?.product_avg == 2"></div>\n												<div class="full-stars" style="width:60%" *ngIf="recommendedeal?.product_avg == 3"></div>\n												<div class="full-stars" style="width:80%" *ngIf="recommendedeal?.product_avg == 4"></div>\n												<div class="full-stars" style="width:100%" *ngIf="recommendedeal?.product_avg == 5"></div>\n											</span>\n										</div>\n										<div class="col-lg-6 col-md-6 p-0 m-0 text-lg-right text-md-right">\n											<span class="text-danger" *ngIf="recommendedeal?.quantity <= 5">Only {{recommendedeal?.quantity}} left! </span>\n											<span *ngIf="recommendedeal?.quantity > 5">{{recommendedeal?.quantity}} left! </span>\n										</div>\n									</div>\n									<span>{{(recommendedeal?.price - (recommendedeal?.price * recommendedeal?.discount) / 100)}} AED </span>\n									\n									<span *ngIf="recommendedeal?.discount > 0 "> |\n										<del><span class="grey">{{recommendedeal?.price}} AED</span></del>\n										| <span class="text-uppercase">{{recommendedeal?.discount}}% off</span>\n									</span>\n									<p class="mb-1 mt-0" *ngIf="recommendedeal?.product_address != null">From <a title="{{recommendedeal?.product_address}}">{{(recommendedeal?.product_address.length > 13)? (recommendedeal?.product_address | slice:0:13)+\'...\':(recommendedeal?.product_address)}}</a></p>\n									<p class="mb-1 mt-0">Free shipping</p>\n									<p class="mb-1 mt-0" *ngIf="recommendedeal?.selling_type == \'Auction style\'">Auction style</p>\n									<p class="mb-1 mt-0" *ngIf="recommendedeal?.selling_type ==\'Fixed price\'">Buy It Now</p>\n									<p class="mb-0 mt-2 font-weight-bold text-danger" *ngIf="recommendedeal?.endsoon <= 10 && recommendedeal?.time == \'Started\'">Almost gone</p>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class="deals bg padTB60 mt-2" *ngIf="sellSimilar == true">\n				<h6>Sell Similar</h6>\n				<div class="container p-0">\n					<div class="row set_fontSize">\n						<div class="col-lg-2 col-md-3 col-6 marB30" *ngFor="let selldata of sellSimilarData?.data">\n							<div class="box-a mb-4 border rounded">\n								<figure class="m-0">\n									<a (click)="gotoProductdetailpage(selldata?.product_id)" title="{{selldata?.title}}">\n										<img src="{{trandingImgUrl}}{{selldata?.product_id}}/L/{{selldata?.photos[0]}}" class="img-fluid" alt="{{selldata?.title}}">\n									</a>\n								</figure>\n								<div class="sale" *ngIf="selldata?.endsoon <= 10 && selldata?.time == \'Started\'"><i class="fa fa-clock-o clockicon"></i></div>\n								<div class="box-detail bg-light p-1">\n									<p class="mt-2 mb-1"><a title="{{selldata?.title}}" (click)="gotoProductdetailpage(selldata?.product_id)">{{(selldata?.title.length > 15)? (selldata?.title | slice:0:15)+\'...\':(selldata?.title)}}</a></p>\n									<div class="row p-0 m-0">\n										<div class="col-lg-6 col-md-6 p-0 m-0">\n											<span class="ratings">\n												<div class="empty-stars"></div> \n												<div class="full-stars" style="width:0%" *ngIf="selldata?.product_avg == 0"></div>\n												<div class="full-stars" style="width:20%" *ngIf="selldata?.product_avg == 1"></div>\n												<div class="full-stars" style="width:40%" *ngIf="selldata?.product_avg == 2"></div>\n												<div class="full-stars" style="width:60%" *ngIf="selldata?.product_avg == 3"></div>\n												<div class="full-stars" style="width:80%" *ngIf="selldata?.product_avg == 4"></div>\n												<div class="full-stars" style="width:100%" *ngIf="selldata?.product_avg == 5"></div>\n											</span>\n										</div>\n										<div class="col-lg-6 col-md-6 p-0 m-0 text-lg-right text-md-right">\n											<span class="text-danger" *ngIf="selldata?.quantity <= 5">Only {{selldata?.quantity}} left! </span>\n											<span *ngIf="selldata?.quantity > 5">{{selldata?.quantity}} left! </span>\n										</div>\n									</div>\n									<span>{{(selldata?.final_price - (selldata?.final_price * selldata?.discount) / 100)}} AED</span>\n									<span *ngIf="selldata?.discount > 0 "> |\n										<del><span class="grey">{{selldata?.price}} AED</span></del>\n										| <span class="text-uppercase">{{selldata?.discount}}% off</span>\n									</span>\n									<p class="mb-1 mt-0" *ngIf="selldata?.product_address != null">From <a title="{{selldata?.product_address}}">{{(selldata?.product_address.length > 13)? (selldata?.product_address | slice:0:13)+\'...\':(selldata?.product_address)}}</a></p>\n									<p class="mb-1 mt-0">Free shipping</p>\n									<p class="mb-1 mt-0" *ngIf="selldata?.selling_type == \'Auction style\'">Auction style</p>\n									<p class="mb-1 mt-0" *ngIf="selldata?.selling_type ==\'Fixed price\'">Buy It Now</p> \n									<p class="mb-0 mt-2 font-weight-bold text-danger" *ngIf="selldata?.endsoon <= 10 && selldata?.time == \'Started\'">Almost gone</p>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class="deals bg padTB60 mt-2" *ngIf="viewwishlist == true">\n				<h6>Currently Watched</h6>\n				<div class="container p-0">\n					<div class="row set_fontSize">\n						<div class="col-lg-2 col-md-3 col-6 marB30" *ngFor="let wishlilstdata of viewwishlistData?.data">\n							<div class="box-a mb-4 border rounded">\n								<figure class="m-0">\n									<a title="{{wishlilstdata?.title}}" (click)="gotoProductdetailpage(wishlilstdata?.product_id)">\n										<img src="{{trandingImgUrl}}{{wishlilstdata?.product_id}}/L/{{wishlilstdata?.photos[0]}}" class="img-fluid" alt="{{wishlilstdata?.title}}">\n									</a>\n								</figure>\n								<div class="sale" *ngIf="wishlilstdata?.endsoon <= 10 && wishlilstdata?.time == \'Started\'"><i class="fa fa-clock-o clockicon"></i></div>\n								<div class="box-detail bg-light p-1">\n									<p class="mt-2 mb-1"><a title="{{wishlilstdata?.title}}" (click)="gotoProductdetailpage(wishlilstdata?.product_id)">{{(wishlilstdata?.title.length > 15)? (wishlilstdata?.title | slice:0:15)+\'...\':(wishlilstdata?.title)}}</a></p>\n									<div class="row p-0 m-0">\n										<div class="col-lg-6 col-md-6 p-0 m-0">\n											<span class="ratings">\n												<div class="empty-stars"></div> \n												<div class="full-stars" style="width:0%" *ngIf="wishlilstdata?.product_avg == 0"></div>\n												<div class="full-stars" style="width:20%" *ngIf="wishlilstdata?.product_avg == 1"></div>\n												<div class="full-stars" style="width:40%" *ngIf="wishlilstdata?.product_avg == 2"></div>\n												<div class="full-stars" style="width:60%" *ngIf="wishlilstdata?.product_avg == 3"></div>\n												<div class="full-stars" style="width:80%" *ngIf="wishlilstdata?.product_avg == 4"></div>\n												<div class="full-stars" style="width:100%" *ngIf="wishlilstdata?.product_avg == 5"></div>\n											</span>\n										</div>\n										<div class="col-lg-6 col-md-6 p-0 m-0 text-lg-right text-md-right">\n											<span class="text-danger" *ngIf="wishlilstdata?.quantity <= 5">Only {{wishlilstdata?.quantity}} left! </span>\n											<span *ngIf="wishlilstdata?.quantity > 5">{{wishlilstdata?.quantity}} left! </span>\n										</div>\n									</div>\n									<span>{{(wishlilstdata?.price - (wishlilstdata?.price * wishlilstdata?.discount) / 100)}} AED</span> \n									<span *ngIf="wishlilstdata?.discount > 0 "> |\n										<del><span class="grey">{{wishlilstdata?.price}} AED</span></del>\n										| <span class="text-uppercase">{{wishlilstdata?.discount}}% off</span>\n									</span>\n									<p class="mb-1 mt-0" *ngIf="wishlilstdata?.product_address != null">From <a title="{{wishlilstdata?.product_address}}">{{(wishlilstdata?.product_address.length > 13)? (wishlilstdata?.product_address | slice:0:13)+\'...\':(wishlilstdata?.product_address)}}</a></p>\n									<p class="mb-1 mt-0">Free shipping</p>\n									<p class="mb-1 mt-0" *ngIf="wishlilstdata?.selling_type == \'Auction style\'">Auction style</p>\n									<p class="mb-1 mt-0" *ngIf="wishlilstdata?.selling_type ==\'Fixed price\'">Buy It Now</p>\n									\n									<p class="mb-0 mt-2 font-weight-bold text-danger" *ngIf="wishlilstdata?.endsoon <= 10 && wishlilstdata?.time == \'Started\'">Almost gone</p>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class="deals bg padTB60 mt-2" *ngIf="viewunderfifty == true">\n				<h6>Under {{menuvalue}} AED Product</h6>\n				<div class="container p-0">\n					<div class="row set_fontSize">\n						<div class="col-lg-2 col-md-4 col-6 marB30" *ngFor="let viewunderdata of viewunderfiftyData?.data">\n							<div class="box-a mb-4 border rounded">\n								<figure class="m-0">\n									<a title="{{viewunderdata?.title}}" (click)="gotoProductdetailpage(viewunderdata?.id)">\n										<img src="{{trandingImgUrl}}{{viewunderdata?.id}}/L/{{viewunderdata?.photos[0]}}" class="img-fluid" alt="{{viewunderdata?.title}}">\n									</a>\n								</figure>\n								<div class="sale" *ngIf="viewunderdata?.endsoon <= 10 && viewunderdata?.time == \'Started\'"><i class="fa fa-clock-o clockicon"></i></div>\n								<div class="box-detail bg-light p-1">\n									<p class="mt-2 mb-1"><a title="{{viewunderdata?.title}}" (click)="gotoProductdetailpage(viewunderdata?.id)">{{(viewunderdata?.title.length > 15)? (viewunderdata?.title | slice:0:15)+\'...\':(viewunderdata?.title)}}</a></p>\n									<div class="row p-0 m-0">\n										<div class="col-lg-6 col-md-6 p-0 m-0">\n											<span class="ratings">\n												<div class="empty-stars"></div> \n												<div class="full-stars" style="width:0%" *ngIf="viewunderdata?.product_avg == 0"></div>\n												<div class="full-stars" style="width:20%" *ngIf="viewunderdata?.product_avg == 1"></div>\n												<div class="full-stars" style="width:40%" *ngIf="viewunderdata?.product_avg == 2"></div>\n												<div class="full-stars" style="width:60%" *ngIf="viewunderdata?.product_avg == 3"></div>\n												<div class="full-stars" style="width:80%" *ngIf="viewunderdata?.product_avg == 4"></div>\n												<div class="full-stars" style="width:100%" *ngIf="viewunderdata?.product_avg == 5"></div>\n											</span>\n										</div>\n										<div class="col-lg-6 col-md-6 p-0 m-0 text-lg-right text-md-right">\n											<span class="text-danger" *ngIf="viewunderdata?.quantity <= 5">Only {{viewunderdata?.quantity}} left! </span>\n											<span *ngIf="viewunderdata?.quantity > 5">{{viewunderdata?.quantity}} left! </span>\n										</div>\n									</div>\n									<span>{{(viewunderdata?.price - (viewunderdata?.price * viewunderdata?.discount) / 100)}} AED</span>\n									<span *ngIf="viewunderdata?.discount > 0 "> |\n										<del><span class="grey">{{viewunderdata?.price}} AED</span></del>\n										| <span class="text-uppercase">{{viewunderdata?.discount}}% off</span>\n									</span>\n									\n									<p class="mb-1 mt-0" *ngIf="viewunderdata?.product_address != null">From <a title="{{viewunderdata?.product_address}}">{{(viewunderdata?.product_address.length > 13)? (viewunderdata?.product_address | slice:0:13)+\'...\':(viewunderdata?.product_address)}}</a></p>\n									<p class="mb-1 mt-0">Free shipping</p>\n									<p class="mb-1 mt-0" *ngIf="viewunderdata?.selling_type == \'Auction style\'">Auction style</p>\n									<p class="mb-1 mt-0" *ngIf="viewunderdata?.selling_type ==\'Fixed price\'">Buy It Now</p>\n									<p class="mb-0 mt-2 font-weight-bold text-danger" *ngIf="viewunderdata?.endsoon <= 10 && viewunderdata?.time == \'Started\'">Almost gone</p>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class="deals bg padTB60 mt-2" *ngIf="viewsellerActive == true">\n				<h6>Seller active item</h6>\n				<div class="container p-0">\n					<div class="row set_fontSize">\n						<div class="col-lg-2 col-md-3 col-6 marB30" *ngFor="let viewselleritm of viewsellerActiveData">\n							<div class="box-a mb-4 border rounded">\n								<figure class="m-0">\n									<a title="{{viewselleritm?.title}}" (click)="gotoProductdetailpage(viewselleritm?.product_id)">\n										<div class="top-left-sticker" *ngIf="viewselleritm?.time == \'End\'">\n											<img src="assets/images/sold.png" class="setImageSize">\n											<p class="m-0 sold-text">ENDED</p>\n										</div>\n										<img src="{{trandingImgUrl}}{{viewselleritm?.product_id}}/L/{{viewselleritm?.photos[0]}}" class="img-fluid" alt="{{viewselleritm?.title}}">\n									</a>\n								</figure>\n								<div class="box-detail bg-light p-1">\n									<p class="mt-2 mb-1"><a title="{{viewselleritm?.title}}" (click)="gotoProductdetailpage(viewselleritm?.product_id)">{{(viewselleritm?.title.length > 15)? (viewselleritm?.title | slice:0:15)+\'...\':(viewselleritm?.title)}}</a></p>\n									<div class="row p-0 m-0">\n										<div class="col-lg-6 col-md-6 p-0 m-0">\n											<span class="ratings">\n												<div class="empty-stars"></div> \n												<div class="full-stars" style="width:0%" *ngIf="viewselleritm?.product_avg == 0"></div>\n												<div class="full-stars" style="width:20%" *ngIf="viewselleritm?.product_avg == 1"></div>\n												<div class="full-stars" style="width:40%" *ngIf="viewselleritm?.product_avg == 2"></div>\n												<div class="full-stars" style="width:60%" *ngIf="viewselleritm?.product_avg == 3"></div>\n												<div class="full-stars" style="width:80%" *ngIf="viewselleritm?.product_avg == 4"></div>\n												<div class="full-stars" style="width:100%" *ngIf="viewselleritm?.product_avg == 5"></div>\n											</span>\n										</div>\n										<div class="col-lg-6 col-md-6 p-0 m-0 text-lg-right text-md-right">\n											<span class="text-danger" *ngIf="viewselleritm?.quantity <= 5">Only {{viewselleritm?.quantity}} left! </span>\n											<span *ngIf="viewselleritm?.quantity > 5">{{viewselleritm?.quantity}} left! </span>\n										</div>\n									</div> \n									<span>{{(viewselleritm?.price - (viewselleritm?.price * viewselleritm?.discount) / 100)}} AED</span>\n									\n									<span *ngIf="viewselleritm?.discount > 0 "> |\n										<del><span class="grey">{{viewselleritm?.price}} AED</span></del>\n										| <span class="text-uppercase">{{viewselleritm?.discount}}% off</span>\n									</span>\n									<p class="mb-1 mt-0" *ngIf="viewselleritm?.product_address != null">From <a title="{{viewselleritm?.product_address}}">{{(viewselleritm?.product_address.length > 13)? (viewselleritm?.product_address | slice:0:13)+\'...\':(viewselleritm?.product_address)}}</a></p>\n									<p class="mb-1 mt-0">Free shipping</p>\n									<p class="mb-1 mt-0" *ngIf="viewselleritm?.selling_type == \'Auction style\'">Auction style</p>\n									<p class="mb-1 mt-0" *ngIf="viewselleritm?.selling_type ==\'Fixed price\'">Buy It Now</p>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n			<!--================Footer Area =================-->\n	<footer-page></footer-page>\n	</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/home/all-item/all-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AllItemPage);
    return AllItemPage;
}());

//# sourceMappingURL=all-item.js.map

/***/ })

});
//# sourceMappingURL=45.js.map