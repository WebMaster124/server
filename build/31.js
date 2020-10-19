webpackJsonp([31],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductListPageModule = /** @class */ (function () {
    function ProductListPageModule() {
    }
    ProductListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ProductListPageModule);
    return ProductListPageModule;
}());

//# sourceMappingURL=product-list.module.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
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
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductListPage = /** @class */ (function () {
    function ProductListPage(plt, infoService, modalCtrl, navCtrl, navParams) {
        this.plt = plt;
        this.infoService = infoService;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pro_image = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
    }
    ProductListPage.prototype.ionViewDidLoad = function () {
        this.getData_decode = this.navParams.data.id;
        this.convert_decode = atob(this.getData_decode);
        this.convert_parse = JSON.parse(this.convert_decode);
        $(".zoomContainer").remove();
        var d = new Date();
        this.showYear = d.getFullYear();
        this.showCatData();
    };
    ProductListPage.prototype.ngAfterViewInit = function () {
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
    ProductListPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $(document).prop('title', 'Product List');
        $('body').removeClass().addClass('ProductList body');
    };
    ProductListPage.prototype.showCatData = function () {
        var _this = this;
        try {
            //var data = this.navParams.data.id;
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/category-product-list', this.convert_parse, function (response) {
                _this.catData = response;
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    ProductListPage.prototype.showCatData_proList = function (val, val1, val2) {
        var _this = this;
        if (val2 == 'brand') {
            var byBrand = {
                category_id: val1,
                brand_id: val
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/category-product-list', byBrand, function (response) {
                _this.catData = response;
            }, function (error) {
                console.log(error);
            });
        }
        else if (val2 == 'type') {
            var byType = {
                category_id: val1,
                settype_id: val
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/product/category-product-list', byType, function (response) {
                _this.catData = response;
            }, function (error) {
                console.log(error);
            });
        }
    };
    ProductListPage.prototype.GoToSubCat = function (val) {
        this.navCtrl.push('SubCategoryPage', {
            id: val
        });
    };
    ProductListPage.prototype.GoToProDetail = function (val) {
        this.navCtrl.push('ProductDetails', {
            id: val
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ProductListPage.prototype, "content", void 0);
    ProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-list',template:/*ion-inline-start:"/var/www/html/src/pages/product/product-list/product-list.html"*/'<ion-content padding class="product-listing">\n<div class="wrapper">\n	<div class="container mb-3">\n        <div class="row">\n            <p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n			<div class="col-lg-12 col-md-12 col-12">\n                <h4 class="productcategoryname">{{catData?.category.category_name}}</h4>\n            </div>\n        </div>\n        <!--Varticle menu start-->\n        <div class="row">\n			<div class="col-md-3 col-lg-2">\n				<div id="MainMenu" class="categoryvarticlemenu">\n					<div class="list-group panel">\n						<a href="#multiitem4" class="list-group-item font-weight-bold" data-toggle="collapse" data-parent="#MainMenu">Shop by Category <i class="fa fa-caret-down"></i></a>\n						<div class="collapse pb-3 collapseborder show" id="multiitem4">\n							<a *ngFor="let subCat of catData?.sub_category" class="list-group-item" id="cat-{{subCat?.id}}" (click)="GoToSubCat(subCat?.id)">{{subCat?.category_name}}</a>\n						</div>\n					</div>\n				</div>\n				<div id="MainMenu1" class="categoryvarticlemenu" *ngIf="catData?.brand.length > 0">\n					<div class="list-group panel">\n						<a href="#multiitem5" class="list-group-item font-weight-bold" data-toggle="collapse" data-parent="#MainMenu">Shop by Brand <i class="fa fa-caret-down"></i></a>\n						<div class="collapse pb-3 collapseborder show" id="multiitem5">\n							<a *ngFor="let shopBrand of catData?.brand" id="brand-{{shopBrand?.id}}" class="list-group-item" (click)="showCatData_proList(shopBrand?.id,catData?.category.id,\'brand\')">{{shopBrand?.brand_title}}</a>\n						</div>\n					</div>\n				</div>\n				<div id="MainMenu2" class="categoryvarticlemenu" *ngIf="catData?.set_type.length > 0">\n					<div class="list-group panel">\n						<a href="#multiitem6" class="list-group-item font-weight-bold" data-toggle="collapse" data-parent="#MainMenu">Shop by Type <i class="fa fa-caret-down"></i></a>\n						<div class="collapse pb-3 collapseborder show" id="multiitem6">\n							<a id="type-{{shopType?.id}}" *ngFor="let shopType of catData?.set_type" class="list-group-item" (click)="showCatData_proList(shopType?.id,catData?.category.id,\'type\')">{{shopType?.settype}}</a>\n						</div>\n					</div>\n				</div>\n            </div> \n            <div class="col-lg-10 col-md-9" *ngIf="catData?.data.data.length >0;else nodatafound">\n                <div class="gridviewlistview ml-0 mr-0 p-3 mt-3">\n                    <div class="row">\n                        <div class="col-lg-12 col-md-12 col-12 pt-3 pb-3 pl-3 pl-lg-4">\n                            <!-- Nav tabs -->\n                            <div class="row">\n                                <div class="col-lg-6 col-12 col-md-12">\n                                    <ul class="nav" role="tablist">\n                                        <li role="presentation" class="active">\n											<a href="#alllisting1" role="tab" class="btn tablistinbtn active show" data-toggle="tab">All Listings</a>\n                                        </li>\n                                        <li role="presentation">\n											<a href="#auction1" class="btn tablistinbtn" role="tab" data-toggle="tab">Auction</a>\n										</li>\n                                        <li role="presentation">\n											<a href="#buyitnow1" class="btn tablistinbtn" role="tab" data-toggle="tab">Buy It Now</a>\n										</li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <!-- Tab panes -->\n                            <div class="tab-content">\n                                <div role="tabpanel" class="tab-pane active" id="alllisting1">\n                                    <div class="resultcount mt-3 mb-3 ml-1">\n										<p> {{catData?.data.from}}-{{catData?.data.to}} of {{catData?.data.total}} Results</p>\n									</div>\n									<div *ngIf="catData?.data.data.length <= 0;else showAllItem">\n										<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom">\n											Item not available!\n										</div>\n									</div>\n									<ng-template #showAllItem>\n										<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom" *ngFor="let dta of catData?.data.data">\n											<div class="col-lg-3 p-0 productlistingimgdiv">\n												<a (click)="GoToProDetail(dta?.id)">\n													<img src="{{pro_image}}{{dta?.id}}/M/{{dta?.photos[0]}}" class="productlistingimg img-fluid">\n												</a>\n											</div>\n											<div class="col-lg-9 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0">\n												<a (click)="GoToProDetail(dta?.id)">\n													<h6 class="producttitle font-weight-bold">{{dta?.title}}</h6>\n												</a>\n												<p class="productdescription"> {{dta?.description}}</p>\n												<table class="table set_fontSize">\n													<tbody>\n														<tr>\n															<td class="price" *ngIf="dta?.max_price == 0 && dta?.min_price == 0;else toPrice">{{ dta?.price - (dta?.price*dta?.discount) / 100 }} AED</td>\n															<ng-template #toPrice>\n																<td class="price">{{dta?.min_price}} AED to {{dta?.max_price}} AED</td>\n															</ng-template>\n														</tr>\n														<tr>\n															<td>Was: <span class="dollarcancle">{{dta?.price}} AED</span></td>\n															<td>From {{dta?.product_address}}</td>\n														</tr>\n														<tr>\n															<td>Free shipping</td>\n															<td class="" *ngIf="dta?.quantity > 10">{{dta?.quantity}} left!</td>\n															<td class="sold-item" *ngIf="dta?.quantity <= 10 && dta?.quantity >= 1">Only {{dta?.quantity}} left!</td>\n															<td class="sold-item" *ngIf="dta?.quantity <= 0">Not available!</td>\n														</tr>\n														<tr>\n															<td>or Best Offer</td>\n														</tr>\n													</tbody>\n												</table>\n											</div>\n										</div>\n                                    </ng-template>\n								</div>\n                                <div role="tabpanel" class="tab-pane" id="auction1">\n                                    <div class="resultcount mt-3 mb-3 ml-1">\n										<p> {{catData?.data.from}}-{{catData?.data.to}} of {{catData?.data.total}} Results</p>\n									</div>\n									<div *ngIf="catData?.data.data.length <= 0;else showauction">\n										<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom">\n											Item not available!\n										</div>\n									</div>\n									<ng-template #showauction>\n										<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom" *ngFor="let dta of catData?.data.data;">\n											<div class="col-lg-3 p-0 productlistingimgdiv" *ngIf="dta?.selling_type == \'Auction style\'">\n												<a (click)="GoToProDetail(dta?.id)">\n													<img src="{{pro_image}}{{dta?.id}}/M/{{dta?.photos[0]}}" class="img-fluid productlistingimg">\n												</a>\n											</div>\n											<div class="col-lg-9 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0" *ngIf="dta?.selling_type == \'Auction style\'">\n												<a (click)="GoToProDetail(dta?.id)">\n													<h6 class="producttitle font-weight-bold">{{dta?.title}}</h6>\n												</a>\n												<p class="productdescription"> {{dta?.description}}</p>\n												<table class="table breadcrumblink_div">\n													<tbody>\n														<tr>\n															<td class="price" *ngIf="dta?.max_price == 0 && dta?.min_price == 0;else toPriceAuc">{{ dta?.price - (dta?.price*dta?.discount) / 100 }} AED</td>\n															<ng-template #toPriceAuc>\n																<td class="price">{{dta?.min_price}} AED to {{dta?.max_price}} AED</td>\n															</ng-template>\n														</tr>\n														<tr>\n															<td>Was: <span class="dollarcancle">{{dta?.price}} AED</span></td>\n															<td>From {{dta?.product_address}}</td>\n														</tr>\n														<tr>\n															<td>Free shipping</td>\n															<td class="" *ngIf="dta?.quantity > 10">{{dta?.quantity}} left!</td>\n															<td class="sold-item" *ngIf="dta?.quantity <= 10 && dta?.quantity >= 1">Only {{dta?.quantity}} left!</td>\n															<td class="sold-item" *ngIf="dta?.quantity <= 0">Not available!</td>\n														</tr>\n														<tr>\n															<td>or Best Offer</td>\n														</tr>\n														\n													</tbody>\n												</table>\n											</div>\n										</div>\n										<!--<ng-template #noAuction>\n											<span>Item not available! </span>\n										</ng-template> -->\n									</ng-template>\n                                </div>\n                                <div role="tabpanel" class="tab-pane" id="buyitnow1">\n                                    <div class="resultcount mt-3 mb-3 ml-1">\n										<p> {{catData?.data.from}}-{{catData?.data.to}} of {{catData?.data.total}} Results</p>\n									</div>\n									<div *ngIf="catData?.data.data.length <= 0;else showbuynow">\n										<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom">\n											Item not available!\n										</div>\n									</div>\n									<ng-template #showbuynow>\n										<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom" *ngFor="let dta of catData?.data.data">\n											<!--;else nobuynow -->\n											<div class="col-lg-3 p-0 productlistingimgdiv" *ngIf="dta?.selling_type == \'Fixed price\'">\n												<a (click)="GoToProDetail(dta?.id)">\n													<img src="{{pro_image}}{{dta?.id}}/M/{{dta?.photos[0]}}" class="img-fluid productlistingimg">\n												</a>\n											</div>\n											<div class="col-lg-9 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0" *ngIf="dta?.selling_type == \'Fixed price\'">\n												<a (click)="GoToProDetail(dta?.id)">\n													<h6 class="producttitle font-weight-bold">{{dta?.title}}</h6>\n												</a>\n												<p class="productdescription"> {{dta?.description}}</p>\n												<table class="table breadcrumblink_div">\n													<tbody>\n														<tr>\n															<td class="price" *ngIf="dta?.max_price == 0 && dta?.min_price == 0;else toPriceAuc">{{ dta?.price - (dta?.price*dta?.discount) / 100 }} AED</td>\n															<ng-template #toPriceAuc>\n																<td class="price">{{dta?.min_price}} AED to {{dta?.max_price}} AED</td>\n															</ng-template>\n														</tr>\n														<tr>\n															<td>Was: <span class="dollarcancle">{{dta?.price}} AED</span></td>\n															<td>From {{dta?.product_address}}</td>\n														</tr>\n														<tr>\n															<td>Free shipping</td>\n															<td class="" *ngIf="dta?.quantity > 10">{{dta?.quantity}} left!</td>\n															<td class="sold-item" *ngIf="dta?.quantity <= 10 && dta?.quantity >= 1">Only {{dta?.quantity}} left!</td>\n															<td class="sold-item" *ngIf="dta?.quantity <= 0">Not available!</td>\n														</tr>\n														<tr>\n															<td>or Best Offer</td>\n														</tr>\n													</tbody>\n												</table>\n											</div>\n										</div>\n										<!--<ng-template #nobuynow>\n											<span>Item not available! </span>\n										</ng-template>-->\n									</ng-template>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row">\n                        <div class="col-lg-12 paginationlist">\n                            <nav aria-label="Pagination alignment">\n                                <ul class="pagination justify-content-center">\n                                    <li class="page-item ">\n										<a class="page-link" href="#">\n											<i class="fa fa-angle-left arrowprevnext"></i>\n										</a>\n									</li>\n                                    <li class="page-item"><a class="page-link active" href="#">1</a></li>\n                                    \n                                    <li class="page-item">\n										<a class="page-link" href="#">\n											<i class="fa fa-angle-right arrowprevnext"></i>\n										</a>\n									</li>\n                                </ul>\n                            </nav>\n                        </div>\n                    </div>\n                </div>\n            </div>\n			<ng-template #nodatafound>\n				<div class="col-lg-10 col-md-9">\n					<div class="gridviewlistview ml-0 mr-0 p-3 mt-3">\n						<div class="row">\n							<span class="error_span">No Data Found</span>\n						</div>\n					</div>\n				</div>\n			</ng-template>\n		</div>\n    </div>\n	<!--================Footer Area =================-->\n<footer-page></footer-page>\n</div>\n		\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/product/product-list/product-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ProductListPage);
    return ProductListPage;
}());

//# sourceMappingURL=product-list.js.map

/***/ })

});
//# sourceMappingURL=31.js.map