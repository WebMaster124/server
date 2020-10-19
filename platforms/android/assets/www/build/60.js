webpackJsonp([60],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCartPageModule", function() { return ViewCartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_cart__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ViewCartPageModule = /** @class */ (function () {
    function ViewCartPageModule() {
    }
    ViewCartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_cart__["a" /* ViewCartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_cart__["a" /* ViewCartPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ViewCartPageModule);
    return ViewCartPageModule;
}());

//# sourceMappingURL=view-cart.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCartPage; });
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





var ViewCartPage = /** @class */ (function () {
    function ViewCartPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('Shopping Cart');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    ViewCartPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $(document).prop('title', 'Your Dibdaa Shopping Cart');
        $('body').removeClass().addClass('Cart body');
        $(".zoomContainer").remove();
        $(".searchanythingform").trigger("reset");
        this.view_Cart();
    };
    //scroll to hide and show top header.
    ViewCartPage.prototype.ngAfterViewInit = function () {
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
    //dispaly cart data.
    ViewCartPage.prototype.view_Cart = function () {
        var _this = this;
        try {
            this.infoService.showLoading();
            if (this.localItem == null) {
                this.navCtrl.push('LoginPage', {
                    id: 'login'
                });
            }
            else {
                var cart_details = {
                    'user_id': this.localItem.id
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/cart/view-cart', cart_details, function (response) {
                    _this.viewData = response.cart;
                    _this.cart_arr = Object.entries(response.cart.data);
                    if (response.cart.total_item > 0) {
                        $('#addtoCount').text(response.cart.total_item);
                        $('#addtoCount_mobile').text(response.cart.total_item);
                    }
                    else {
                        $('#addtoCount').text('');
                        $('#addtoCount_mobile').text('');
                    }
                    _this.viewaboutCart();
                }, function (error) {
                    console.log(error);
                });
            }
        }
        catch (Error) {
            console.log(Error);
            this.infoService.hideLoading();
        }
        finally {
            this.infoService.hideLoading();
        }
    };
    //removeCart data.
    ViewCartPage.prototype.remove_cart = function (val) {
        var _this = this;
        try {
            var cart_remove = {
                'id': val
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/cart/remove-cart', cart_remove, function (response) {
                _this.view_Cart();
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    //show About your cart data.
    ViewCartPage.prototype.viewaboutCart = function () {
        var _this = this;
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/cart/view-about-cart', '', function (response) {
            if (response.about_cart.status == "success") {
                _this.viewabout_Cart = response.about_cart;
            }
        }, function (error) {
            console.log(error);
        });
    };
    //remove quant to show update button.
    ViewCartPage.prototype.show_update = function (val) {
        setTimeout(function () {
            $('#update-' + val).removeClass('d-none');
        }, 1000);
    };
    //click on update to update cart data.
    ViewCartPage.prototype.updateCart = function (proqua, val) {
        var _this = this;
        try {
            if (parseInt($('#quantity-' + val).val()) > parseInt(proqua)) {
                $('#error-' + val).removeClass('d-none');
            }
            else {
                if ($('#quantity-' + val).val() == 0) {
                    this.remove_cart(val);
                }
                else {
                    var cart_update = {
                        'id': val,
                        'quantity': $('#quantity-' + val).val()
                    };
                    this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/cart/update-cart', cart_update, function (response) {
                        _this.view_Cart();
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        }
        catch (Error) {
            console.log(Error);
        }
    };
    //click on save for later call this function.
    ViewCartPage.prototype.addwishlist = function (proid, quant, val_spec) {
        var _this = this;
        try {
            var wishlist_add = {
                'user_id': this.localItem.id,
                'product_id': proid,
                'quantity': quant,
                'specification': val_spec
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/wishlist/add-to-wishlist', wishlist_add, function (response) {
                if (response.wishlist.status == "success") {
                    _this.view_Cart();
                }
                else {
                    _this.wishlistData = response.wishlist;
                    $('#wish-' + proid).removeClass('d-none');
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    //click on proceed to checkOut call this function.
    ViewCartPage.prototype.checkOut = function (val, val_sellerId) {
        var pass_data;
        if (val == 'seller') {
            pass_data = {
                "user_id": this.localItem.id,
                "cart": "true",
                "seller_id": [val_sellerId]
            };
        }
        else {
            pass_data = {
                "user_id": this.localItem.id,
                "cart": "true"
            };
        }
        var convert_stringify = JSON.stringify(pass_data);
        var convert_encode = btoa(convert_stringify);
        this.navCtrl.push('CheckOutPage', {
            id: convert_encode
        });
    };
    ViewCartPage.prototype.gotoUserProfile = function (val) {
        this.navCtrl.push('UserProfilePage', {
            id: val
        });
    };
    ViewCartPage.prototype.gotoProductDetailsPage = function (val) {
        this.navCtrl.push('ProductDetails', {
            id: val
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ViewCartPage.prototype, "content", void 0);
    ViewCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-cart',template:/*ion-inline-start:"/var/www/html/src/pages/cart/view-cart/view-cart.html"*/'<ion-content padding>\n	<div class="add-to-cart">\n		<div class="wrapper">\n			<div class="container mb-3 mt-3">\n				<div class="row">\n					<div class="col-lg-12 col-md-12 col-xl-12 col-12 breadcrumblink_div">\n						<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n						<p class="set_fontSize">\n							<a href="#/home" class="breadcrumblink">Dibdaa</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n							<a class="breadcrumblink" disabled>View-Cart</a>\n						</p>\n					</div>\n				</div>\n				<div class="row">\n					<div class="col-lg-12 col-md-12 col-12">\n						<h4 class="productcategoryname m-0">Your Dibdaa Shopping Cart</h4>\n					</div>\n				</div>\n				<div class="cartsummarymain ml-0 mr-0 pt-0 pl-3 pr-3 pb-3 mt-3">\n					<div class="row">\n						<div class="col-lg-9 col-md-12 col-12 p-0 pr-lg-3 mb-3" *ngIf="viewData?.data.businessName.length == 0">\n							<div class="row ml-0 mt-3 mr-0">\n								<div class="col-lg-12 col-md-12 col-12 p-3 continue-shoping">\n									<form class="form-horizontal">\n										<div class="row m-0">\n											<div class="col-lg-12 col-md-12 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0">\n												<h6>Your shopping cart is empty, but it doesn\'t have to be.</h6>\n												<p class="set_fontSize">There are lots of great deals and one-of-a-kind items just waiting for you.\n												Start shopping, and look for the "Add to cart" button. You can add several items to your cart from different sellers and pay for them all at once.</p>\n											</div>\n											<div class="col-lg-12 col-md-12 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0">\n												<ul>\n													<li>\n														<a href="#/home"><h6>Start shopping and search for great deals</h6></a>\n													</li>\n												</ul>\n											</div>\n										</div>\n									</form>\n								</div>\n							</div>\n						</div>\n						<div class="col-lg-9 col-md-12 col-12 p-0 pr-lg-3 mb-3" *ngIf="viewData?.data.businessName.length != 0">\n							<div class="row ml-0 mr-0 mt-2 mb-3 set_fontSize" *ngFor="let bussinessnm of viewData?.data.businessName;let i=index;">\n								<div class="col-lg-12 col-md-12 col-12 p-0 border pay-on-this-seller-div">\n									<div class="row m-0">\n										<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 bg-light border">\n											<div class="row m-0">\n												<div class="col-lg-6 col-md-6 col-12 p-0 text-lg-left text-center pt-2 pb-2 pb-lg-0">\n													<span><b>Seller</b> </span><span><a class="seller_atag" (click)="gotoUserProfile(cart_arr[i][1][0]?.user_id)">{{bussinessnm}}</a> ({{cart_arr[i][1][0]?.feedback_count}} <i class="fa fa-star text-info"></i> )</span>\n												</div>\n												<div class="col-lg-6 col-md-6 col-12 p-0 text-lg-right text-md-right text-center pb-2 pb-lg-0" *ngIf="viewData?.data.businessName.length > 1">\n													<a class="btn theme-light-btn" role="button" (click)="checkOut(\'seller\',cart_arr[i][1][0]?.user_id)">Pay only this seller</a> <!--  -->\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="row ml-0 mt-3 mr-0 pl-3 pr-3 bordercartsummarybottom" *ngFor="let show_cart of cart_arr[i][1]">\n										<div class="col-lg-2 col-md-2 p-0 cartsummaryimgdiv">\n											<a (click)="gotoProductDetailsPage(show_cart?.product_id)"><img src="{{trandingImgUrl}}{{show_cart?.product_id}}/L/{{show_cart?.photos[0]}}" class="img-fluid cartsummaryimg"></a>\n										</div>\n										<div class="col-lg-5 col-md-5 col-12 p-0 pl-lg-2 pr-lg-2 pt-3 pt-lg-0">\n											<a (click)="gotoProductDetailsPage(show_cart?.product_id)">\n											<h6 class="producttitle font-weight-bold">\n												{{show_cart?.title}}</h6></a>\n											<table class="table set_fontSize">\n												<tbody>\n													<tr>\n														<td>Condition:</td>\n														<td>{{show_cart?.specification.condition[0]}}</td><!--{{show_cart?.specification.condition[0]}} -->\n													</tr>\n													<tr *ngIf="show_cart?.specification.color[0] != \'-\'">\n														<td>Color:</td>\n														<td>{{show_cart?.specification.color[0]}}</td>\n													</tr>\n													<tr *ngIf="show_cart?.specification.size[0] != \'-\'">\n														<td>Size:</td>\n														<td>{{show_cart?.specification.size[0]}}</td>\n													</tr>\n                                                    <tr *ngIf="show_cart?.time != \'Started\'">\n                                                        <td class="text-danger">Sorry item no longer available.</td>\n                                                    </tr>\n												</tbody>\n											</table>\n										</div>\n										<div class="col-lg-5 col-12 p-0 pl-lg-2 pr-lg-2 pt-0" *ngIf="show_cart?.product_quantity != \'0\'">\n											<form class="form-horizontal">\n												<div class="priceformform-group row m-0">\n													<div class="col-lg-7 col-md-9 col-7 text-left text-md-right text-lg-right text-xl-right p-0">\n														<label class="control-labeltext-right pricelabel set_fontSize">Quantity:</label>\n														<input type="text" class="form-control pricetxtbox" value="{{show_cart?.quantity}}" name="quantity" id="quantity-{{show_cart?.cart_id}}" (input)="show_update(show_cart.cart_id)">\n														<span class="error_span d-none" id="error-{{show_cart?.cart_id}}"> You Entered maximum <b> {{ show_cart?.product_quantity }} </b> quantity </span>\n														<a (click)="updateCart(show_cart?.product_quantity,show_cart?.cart_id)"><span class="update_cart d-none" id="update-{{show_cart?.cart_id}}">Update</span></a>\n													</div>\n													<div class="col-lg-5 col-md-3 col-5 pl-2 pl-md-5 pl-lg-2 pt-1">\n														<h6 class="m-0">{{ show_cart?.price - (show_cart?.price*show_cart?.discount) / 100 }} AED</h6>\n														<h6 class="strikethroughnormal strikethrough"></h6>\n													</div>\n												</div>\n											</form>\n										</div>\n										<div class="col-lg-5 col-12 p-0 pl-lg-2 pr-lg-2 pt-0" *ngIf="show_cart?.product_quantity == \'0\'">\n											<form class="form-horizontal">\n												<div class="priceformform-group row m-0">\n													<div class="col-lg-12 col-md-12 col-12 text-left text-lg-right text-xl-right p-0">\n														<span class="span_red">Item not available</span>\n													</div>\n												</div>\n											</form>\n										</div>\n										<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 text-right">\n											<span class="pl-3 pr-3">\n												<a class="removesavelater" (click)="remove_cart(show_cart?.cart_id)">Remove</a></span><span>|</span><span class="pl-3 pr-3"><a class="removesavelater" (click)="addwishlist(show_cart?.product_id,show_cart?.quantity,show_cart?.specification)">Save for later</a>\n											</span>\n											<div class="mt-3 mb-1 error_span">	\n												<span class="d-none" id="wish-{{show_cart?.product_id}}">{{wishlistData?.msg}}</span>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n							<div class="row ml-0 mt-3 mr-0">\n								<div class="offset-lg-6 col-lg-6 col-md-12 col-12 p-3 continue-shoping">\n									<form class="form-horizontal">\n										<div class="row m-0">\n											<div class="col-lg-12 col-md-12 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0">\n												<table class="table text-right continue-shoping-tbl set_fontSize">\n													<tbody>\n													<tr>\n														<td>Subtotal ({{viewData?.total_item | number}} items):</td>\n														<td>{{viewData?.total  | number}} AED</td>\n													</tr>\n													<tr>\n														<td>Shipping :</td>\n														<td>N/A</td>\n													</tr>\n													<tr class="border-tr">\n														<td><h6 class="m-0 pt-1 pb-1">Total:</h6></td>\n														<td><h6 class="m-0 pt-1 pb-1">{{viewData?.total | number}} AED</h6></td>\n													</tr>\n													</tbody>\n												</table>\n											</div>\n											<div class="col-lg-6 col-md-6 col-12 mb-3 mb-lg-0 mb-xl-0 p-0 pl-lg-2 pl-xl-2 pr-lg-2 pr-xl-2 pl-md-2 pl-md-2 pr-md-2 pr-md-2">\n												<a href="#/home" class="btn btn-primary continue-shoping-btn" role="button">Continue shopping</a>\n											</div>\n											<div class="col-lg-6 col-md-6 col-12 mb-3 mb-lg-0 mb-xl-0 p-0 pl-lg-2 pl-xl-2 pr-lg-2 pr-xl-2 pl-md-2 pl-md-2 pr-md-2 pr-md-2">\n												<a class="btn btn-primary proceedtocheckout" role="button" (click)="checkOut(\'All\',\'\')">Proceed to checkout</a>\n											</div>\n										</div>\n									</form>\n								</div>\n							</div>\n						</div>\n						<div class="col-lg-3 col-md-12 col-12 cart-summary-total pt-2 pb-3 mt-2">\n							<div class="row">\n								<div class="col-lg-12 col-md-12 col-12 mb-2">\n									<div class="border-bottom-summary">\n										<h4>Cart summary <span class="totalitems">({{viewData?.total_item}} items)</span></h4>\n									</div>\n								</div>\n								<div class="col-lg-12 col-md-12 col-12 mb-2">\n									<h4>Total: <span class="totalvalue">{{viewData?.total}} AED</span></h4>\n								</div>\n								<div class="col-lg-12 col-md-12 col-12">\n									<a class="btn btn-primary proceedtocheckout" role="button" (click)="checkOut(\'All\',\'\')" disabled *ngIf="viewData?.data.businessName.length <= 0">Proceed to checkout</a>\n									<a class="btn btn-primary proceedtocheckout" role="button" (click)="checkOut(\'All\',\'\')" *ngIf="viewData?.data.businessName.length > 0">Proceed to checkout</a>\n								</div>\n								<div class="col-lg-12 col-md-12 col-12 mt-3">\n									<img src="assets/images/dibdaamoneybackgurantee.png" class="img-fluid d-none">\n									<p class="mt-3 set_fontSize">You are almost there. Remember, items aren\'t yours until you have completed your checkout!<!--<a  class="pl-2">Learn more</a> -->\n									</p>\n								</div>\n								<div class="col-lg-12 col-md-12 col-12 mb-2 mt-3">\n									<div class="border-bottom-summary">\n										<h5>About your cart</h5>\n									</div>\n								</div>\n								<div class="col-lg-12 col-md-12 col-12 mb-2 mt-0 about-your-cart">\n									<div class="panel-group" id="accordion">\n										<div class="panel panel-default accordianpaneldefault" *ngFor="let aboutdata of viewabout_Cart?.data;let i = index">\n											<div class="panel-heading mb-2">\n												<h4 class="panel-title m-0">\n													<a data-toggle="collapse" data-parent="#accordion" href="#collapse_{{i}}"\n													   class="accordiana">\n														<div class="row m-0 flex-nowrap pt-2 pb-2">\n															<div class="col-lg-1 col-md-1 col-1 p-0">\n																<i class="fa fa-caret-right right-arrow-accordian mr-2"></i>\n															</div>\n															<div class="col-lg-11 col-md-11 col-11 p-0">\n																<span> {{aboutdata?.question}}</span>\n															</div>\n														</div>\n													</a>\n												</h4>\n											</div>\n											<div id="collapse_{{i}}" class="panel-collapse collapse">\n												<div class="panel-body">\n													<p class="m-2 pl-3 set_fontSize">{{aboutdata?.answer}}</p>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<!--================Footer Area =================-->\n			<footer-page></footer-page>\n		</div>\n	</div>\n</ion-content>\n<script>\n    fbq(\'track\', \'AddToCart\');\n</script>\n'/*ion-inline-end:"/var/www/html/src/pages/cart/view-cart/view-cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ViewCartPage);
    return ViewCartPage;
}());

//# sourceMappingURL=view-cart.js.map

/***/ })

});
//# sourceMappingURL=60.js.map