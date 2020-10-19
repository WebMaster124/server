webpackJsonp([27],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSellerPageModule", function() { return ContactSellerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_seller__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactSellerPageModule = /** @class */ (function () {
    function ContactSellerPageModule() {
    }
    ContactSellerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_seller__["a" /* ContactSellerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_seller__["a" /* ContactSellerPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ContactSellerPageModule);
    return ContactSellerPageModule;
}());

//# sourceMappingURL=contact-seller.module.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSellerPage; });
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





var ContactSellerPage = /** @class */ (function () {
    function ContactSellerPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.verification_code = true;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('ContactSeller');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    ContactSellerPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $(".zoomContainer").remove();
        $(document).prop('title', 'Contact seller');
        $('body').removeClass().addClass('ContactSeller body');
        this.getData_decode = this.navParams.data.id;
        this.convert_decode = atob(this.getData_decode);
        this.sellerBusiness_name = JSON.parse(this.convert_decode);
        this.verification = Math.floor(100000 + Math.random() * 900000);
        var d = new Date();
        this.showYear = d.getFullYear();
    };
    ContactSellerPage.prototype.ngAfterViewInit = function () {
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
    ContactSellerPage.prototype.changeNumber = function () {
        this.verification = Math.floor(100000 + Math.random() * 900000);
    };
    ContactSellerPage.prototype.contactSeller = function (val) {
        var _this = this;
        if (val == "send") {
            if (parseInt($('#txtCaptcha').val()) != parseInt($('#imgcaptcha').val())) {
                this.verification_code = false;
            }
            else {
                this.verification_code = true;
                if (this.sellerBusiness_name.product_id == undefined) {
                    var sndMessage = {
                        user_id: this.sellerBusiness_name.userId,
                        seller_id: this.sellerBusiness_name.seller_id,
                        message: $('#message').val()
                    };
                    try {
                        this.infoService.showLoading();
                        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/seller/contact-seller', sndMessage, function (response) {
                            if (response.contact_seller.status == "fail") {
                                $('#showMessage').text(response.contact_seller.msg);
                                _this.infoService.hideLoading();
                            }
                            else {
                                $('#showMessage').text('Mail sent successfully.');
                                _this.infoService.hideLoading();
                                var self = _this;
                                setTimeout(function () {
                                    self.navCtrl.popToRoot();
                                }, 2500);
                            }
                        }, function (error) {
                            console.log(error);
                            _this.infoService.hideLoading();
                        });
                    }
                    catch (Error) {
                        console.log(Error);
                    }
                }
                else {
                    var sndMessage = {
                        sender_id: this.sellerBusiness_name.userId,
                        receiver_id: this.sellerBusiness_name.seller_id,
                        product_id: this.sellerBusiness_name.product_id,
                        message: $('#message').val()
                    };
                    try {
                        this.infoService.showLoading();
                        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/message/send-message', sndMessage, function (response) {
                            if (response.message.status == "fail") {
                                $('#showMessage').text(response.message.msg);
                                _this.infoService.hideLoading();
                            }
                            else {
                                $('#showMessage').text('Message sent successfully.');
                                _this.infoService.hideLoading();
                                var self = _this;
                                setTimeout(function () {
                                    self.navCtrl.popToRoot();
                                }, 2500);
                            }
                        }, function (error) {
                            console.log(error);
                            _this.infoService.hideLoading();
                        });
                    }
                    catch (Error) {
                        console.log(Error);
                    }
                }
            }
        }
        else if (val == "cancel") {
            this.navCtrl.popToRoot();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ContactSellerPage.prototype, "content", void 0);
    ContactSellerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-seller',template:/*ion-inline-start:"/var/www/html/src/pages/seller-my-account/contact-seller/contact-seller.html"*/'<ion-content padding class="contact-seller">\n	<div class="wrapper">\n		<div class="container contact-seller-main mb-3">\n			<div class="row m-0">\n				<div class="col-lg-9 col-md-12 col-12">\n					<div class="row">\n						<div class="col-lg-12 col-md-12 col-xl-12 col-12 mt-1 setFontSize p-0">\n							<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n							<p class="setFont-size">\n								<a href="#/home" class="breadcrumblink">Dibdaa</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n								<a class="breadcrumblink" disabled>Contact seller</a>\n							</p>\n						</div>\n					</div>\n					<div class="row">\n						<div class="col-lg-6 col-md-6 col-12 mt-2 mb-2 p-0">\n							<h5 class="m-0">Contact {{sellerBusiness_name?.business_name}}</h5>\n						</div>\n						<div class="col-lg-6 col-md-6 col-12 mt-2 mb-2 text-center text-lg-right text-md-right">\n							<span class="tell-us-think setFont-size"><a>Tell us what you think</a></span>\n						</div>\n					</div>\n					<div class="row bg-light mt-1 mr-lg-1 border rounded">\n						<div class="col-lg-12 col-md-12 col-12 mb-3 pt-3">\n							<form>\n								<h6 class="mb-2">Hi {{sellerBusiness_name?.business_name}},</h6>\n								<div class="form-group">\n									<textarea class="form-control seller-contact-textarea" name="message" rows="5" id="message" placeholder="Enter your message here...." #message="ngModel" required ngModel></textarea>\n									<div *ngIf="message.invalid && (message.dirty || message.touched)" class="error-box">\n										<div *ngIf="message.errors.required">\n											* Enter your message to this member.\n										</div>\n									</div>\n								</div>\n								<div class="form-group">\n									<div class="row setFont-size">\n										<div class="col-lg-12 col-md-12 col-12 ">\n											<label>For added security, please enter the verification code shown in the\n												image.</label>\n												<div class="col-lg-12 col-md-12 col-12 warning" *ngIf="verification_code == false">\n													<span class="warning_msg"> <i class="fa fa-exclamation-triangle"></i> Sorry, the verification code you entered does not match against the image. Please try again.</span>\n												</div>\n										</div>\n										<div class="col-lg-3 col-md-3 col-12">\n											<input type="text" id="txtCaptcha" name="captcha" class="txtCaptcha" readonly onCopy="return false" onDrag="return false" onDrop="return false" onPaste="return false" value="{{verification}}"/>\n										</div>\n										<div class="col-lg-4 col-md-6 col-12 mt-md-3 mt-3 mt-lg-0">\n											<input type="text" name="imgcaptcha" class="form-control" id="imgcaptcha" #imgcaptcha="ngModel" required ngModel maxlength="6">\n											<div *ngIf="imgcaptcha.invalid && (imgcaptcha.dirty || imgcaptcha.touched)" class="error-box">\n												<div *ngIf="imgcaptcha.errors.required">\n													* Enter captcha.\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="row setFont-size">\n										<div class="col-lg-12 col-md-12 col-12">\n											<p class="mb-2">\n												<a (click)="changeNumber()" class="temporary-password">Change the image</a>\n											</p>\n										</div>\n									</div>\n									<div class="row setFont-size">\n										<div class="col-lg-12 col-md-12 col-12 mt-2">\n											<p class="mb-2">If you are a seller do NOT include your contact info or ask for\n												the buyer’s contact info. We scan and analyze messages to identify potential\n												fraud and <a>policy violations</a>. Sometimes it will keep us from sending your\n												message, even when there is no intention to commit fraud. Failure to follow\n												policies may trigger seller <a>fees</a>.</p>\n										</div>\n										<div class="col-lg-12 mt-3">\n											<div id="showMessage" class="mb-3"> </div>\n											<button class="btn theme-light-btn" role="button" (click)="contactSeller(\'send\')" [disabled]="!imgcaptcha.valid || !message.valid">Send</button>\n											<button class="btn theme-dark-btn ml-2" role="reset" (click)="contactSeller(\'cancel\')">Cancel</button>\n										</div>\n									</div>\n								</div>\n							</form>\n						</div>\n					</div>\n				</div>\n				<div class="col-lg-3 col-md-12 col-12 pl-3 pr-3 pt-3 pb-3 bg-light border rounded helpfull-hints">\n					<h6 class="m-0 text-left">Helpful hints</h6>\n					<div class="row m-0 setFont-size">\n						<div class="col-lg-12 col-md-12 col-12 order-total p-0 mt-2">\n							<p class="mb-2">My Dibdaa makes it easy to connect with other members. Follow these tips for a safe, secure, trusted experience.</p>\n							<ul>\n								<li>Communicate only on dibdaa</li>\n								<li>Be respectful at all times</li>\n								<li>Make sure transactions take place on dibdaa</li>\n							</ul>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!--================Footer Area =================-->\n<footer-page></footer-page>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/seller-my-account/contact-seller/contact-seller.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ContactSellerPage);
    return ContactSellerPage;
}());

//# sourceMappingURL=contact-seller.js.map

/***/ })

});
//# sourceMappingURL=27.js.map