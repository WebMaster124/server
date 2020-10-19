webpackJsonp([57],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_intl_phone__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactUsPageModule = /** @class */ (function () {
    function ContactUsPageModule() {
    }
    ContactUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng4_intl_phone__["a" /* InternationalPhoneModule */]
            ],
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());

//# sourceMappingURL=contact-us.module.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
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





var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.verification_code = true;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('ContactUs');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    ContactUsPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        this.verification = Math.floor(100000 + Math.random() * 900000);
        $('body').removeClass().addClass('contactUs body');
        $(document).prop('title', 'Contact Us');
        $(".zoomContainer").remove();
    };
    ContactUsPage.prototype.changeNumber = function () {
        this.verification = Math.floor(100000 + Math.random() * 900000);
    };
    ContactUsPage.prototype.ngAfterViewInit = function () {
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
    //submit contact us information form.
    ContactUsPage.prototype.submitContactus = function (val) {
        var _this = this;
        if (parseInt($('#txtCaptcha').val()) != parseInt($('#imgcaptcha').val())) {
            this.verification_code = false;
            return;
        }
        else {
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/contact-us', val.value, function (response) {
                _this.infoService.hideLoading();
                _this.contactusResponse = response.contact_us;
                _this.verification_code = true;
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ContactUsPage.prototype, "content", void 0);
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-us',template:/*ion-inline-start:"/var/www/html/src/pages/cms/contact-us/contact-us.html"*/'<ion-content class="contact">\n	<div class="wrapper">\n		<div class="container contact-main mb-3">\n			<div class="row setFontSize">\n				<div class="col-lg-12 col-md-12 col-xl-12 col-12">\n					<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>	\n					<p class="mb-2"><a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;&nbsp;\n						<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n					<a class="breadcrumblink font-weight-bold" disabled>Contact Us</a></p>\n				</div>\n			</div>\n			<div class="row m-0">\n				<div class="col-lg-12 col-md-12 col-12 p-0">\n					<h5 class="m-0">Conatct Us</h5>\n				</div>\n			</div>\n			<!-- Contact Info -->\n\n			<div class="contact_info">\n				<div class="row mt-3 ml-0 mr-0 mb-0">\n					<div class="col-lg-12 col-md-12 col-12 p-0">\n						<div class="contact_info_container setFontSize">\n							<div class="row m-0">\n								<!-- Contact Item -->\n								<div class="col-lg-4 col-md-6 col-12 pt-3 pb-3 pt-lg-0 pb-lg-0 pl-2 pr-2">\n									<div class="contact_info_item d-flex flex-row align-items-center justify-content-start">\n										<div class="contact_info_image"><img src="assets/images/contact_1.png" alt=""></div>\n										<div class="contact_info_content">\n										  <div class="contact_info_title"><h6 class="mb-1 mt-2">Phone</h6></div>\n										  <div class="contact_info_text">+971 523024995</div>\n										</div>\n									</div>\n								</div>\n\n								<!-- Contact Item -->\n								<div class="col-lg-4 col-md-6 col-12 pt-3 pb-3 pt-lg-0 pb-lg-0 pl-2 pr-2">\n									<div class="contact_info_item d-flex flex-row align-items-center justify-content-start">\n										<div class="contact_info_image"><img src="assets/images/contact_2.png" alt=""></div>\n										<div class="contact_info_content">\n										  <div class="contact_info_title"><h6 class="mb-1 mt-2">Email</h6></div>\n										  <div class="contact_info_text">contact@dibdaa.com</div>\n										</div>\n									</div>\n								</div>\n\n								<!-- Contact Item -->\n								<div class="col-lg-4 col-md-6 col-12 pt-3 pb-3 pt-lg-0 pb-lg-0 pl-2 pr-2">\n									<div class="contact_info_item d-flex flex-row align-items-center justify-content-start">\n										<div class="contact_info_image"><img src="assets/images/contact_3.png" alt=""></div>\n										<div class="contact_info_content">\n										  <div class="contact_info_title"><h6 class="mb-1 mt-2">Address</h6></div>\n										  <div class="contact_info_text">\n											Fujairah - Creative Tower, P.O. Box 4422 Fujairah , United Arab Emirates\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n\n      <!-- Contact Form -->\n\n			<div class="contact_form">\n				<div class="row mt-4">\n					<div class="col-lg-12">\n						<div class="contact_form_container">\n							<div class="contact_form_title mt-2 mb-2"><h5>Get in Touch</h5></div>\n\n							<form  #frm="ngForm" class="form" id="contact_form" method="post" role="form" novalidate>\n								<div class="contact_form_inputs">\n								  <div class="row m-0">\n									<div class="col-lg-4 col-md-6 col-12 pt-3 pb-3 pt-lg-0 pb-lg-0 pl-2 pr-2">\n										<div class="form-group">\n											<input type="text" class="form-control contact-form-input" id="name" placeholder="Your Name" name="name" #name="ngModel" required ngModel minlength="3">\n											<div *ngIf="name.invalid && (name.dirty || name.touched)" class="error-box">\n												<div *ngIf="name.errors.required">\n													* Name is required.\n												</div>\n												<div *ngIf="name.errors.minlength">\n													* Enter minimum 3 characters.\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="col-lg-4 col-md-6 col-12 pt-3 pb-3 pt-lg-0 pb-lg-0 pl-2 pr-2">\n										<div class="form-group">\n											<input type="email" class="form-control contact-form-input" id="email" placeholder="Your Email" name="email" #email="ngModel" required ngModel email="true">\n											<div *ngIf="email.invalid && (email.dirty || email.touched)" class="error-box">\n												<div *ngIf="email.errors.required && email.errors.email">\n													* Email not valid.\n												</div>\n											</div>\n										</div>\n									</div>\n									<div class="col-lg-4 col-md-6 col-12 pt-3 pb-3 pt-lg-0 pb-lg-0 pl-2 pr-2">\n										<div class="form-group">\n											<input type="text" class="form-control contact-form-input" id="phonenumber" placeholder="Your Phone Number" name="mobile" #mobile="ngModel" required ngModel pattern="^[0-9]*$"> \n											<div *ngIf="mobile.invalid && (mobile.dirty || mobile.touched)" class="error-box">\n												<div *ngIf="mobile.errors.required">\n													* Phone is required.\n												</div>\n												<div *ngIf="mobile.errors.pattern">\n													* Enter only digits.\n												</div>\n											</div>\n										</div>\n									</div>\n								  </div>\n								</div>\n								<div class="contact_form_text">\n									<div class="row m-0">\n										<div class="col-lg-12 col-md-12 col-12 pt-3 pb-3 pt-lg-0 pb-lg-0 pl-2 pr-2">\n										<textarea class="form-control contact-form-input" id="exampleFormControlTextarea1" placeholder="Message" rows="3" name="message" #message="ngModel" required ngModel maxlength="400"></textarea>\n											<div *ngIf="message.invalid && (message.dirty || message.touched)" class="error-box">\n												<div *ngIf="message.errors.required">\n													* Message is required.\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n								<div class="contact_form_text mt-3">\n									<div class="row setFontSize">\n										<div class="col-lg-12 col-md-12 col-12 ">\n											<label>For added security, please enter the verification code shown in the image.</label>\n											<div class="col-lg-12 col-md-12 col-12 m-0 p-0" *ngIf="verification_code == false">\n												<div class="text-danger mt-2 mb-2"> <i class="fa fa-exclamation-triangle"></i> <b>Sorry, the verification code you entered does not match against the image. Please try again.</b></div>\n											</div>\n										</div>\n										<div class="col-lg-2 col-md-3 col-12">\n											<input type="text" id="txtCaptcha" name="captcha" class="txtCaptcha" readonly onCopy="return false" onDrag="return false" onDrop="return false" onPaste="return false" value="{{verification}}"/>\n										</div>\n										<div class="col-lg-2 col-md-3 col-12 mt-md-0 mt-3 mt-lg-0">\n											<input type="text" name="imgcaptcha" class="form-control" id="imgcaptcha" #imgcaptcha="ngModel" required ngModel maxlength="6">\n											<div *ngIf="imgcaptcha.invalid && (imgcaptcha.dirty || imgcaptcha.touched)" class="error-box">\n												<div *ngIf="imgcaptcha.errors.required">\n													* Enter captcha.\n												</div>\n											</div>\n										</div>\n									</div>\n								</div> \n								<div class="row setFontSize">\n									<div class="col-lg-12 col-md-12 col-12">\n										<p class="mb-2">\n											<a (click)="changeNumber()" class="temporary-password">Change the image</a>\n										</p>\n									</div>\n								</div>\n								<div class="contact_form_button mt-3">\n									<div class="row m-0">\n										<div class="col-lg-12 col-md-12 col-12 pt-3 pb-3">\n											<span *ngIf="contactusResponse?.status == \'success\'" class="text-success">{{contactusResponse?.msg}}</span>\n											<span *ngIf="contactusResponse?.status != \'success\'" class="text-danger">{{contactusResponse?.msg}}</span>\n										</div>\n										<div class="col-lg-12 col-md-12 col-12 pt-3 pb-3 pt-lg-0 pb-lg-0 pl-2 pr-2">\n											<button type="submit" class="btn theme-light-btn" [disabled]="!frm.form.valid" (click)="submitContactus(frm)">Send Message</button>\n										</div>\n									</div>\n								</div>\n							</form>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class="row ml-0 mr-0 mt-4 mb-0">\n				<h5 class="mt-2 mb-3">Location</h5>\n				<div class="col-lg-12 col-md-12 col-12 pl-2 pr-2">\n					<div class="contact_map">\n						<iframe src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Creative%20City%2C%20Hamad%20Ben%20Mohammed%20St%2C%20Creative%20Tower%20-%20Fujairah%20-%20United%20Arab%20Emirates+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" width="100%" frameborder="0" style="border:0"></iframe>\n					</div>\n				</div>\n			</div>\n		</div>\n		<footer-page></footer-page>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/cms/contact-us/contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ })

});
//# sourceMappingURL=57.js.map