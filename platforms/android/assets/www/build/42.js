webpackJsonp([42],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOtpPageModule", function() { return CheckOtpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_otp__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckOtpPageModule = /** @class */ (function () {
    function CheckOtpPageModule() {
    }
    CheckOtpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__check_otp__["a" /* CheckOtpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__check_otp__["a" /* CheckOtpPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], CheckOtpPageModule);
    return CheckOtpPageModule;
}());

//# sourceMappingURL=check-otp.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(357);
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
 * Generated class for the CheckOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckOtpPage = /** @class */ (function () {
    function CheckOtpPage(plt, googleanalytics, alertCtrl, infoService, fb, navCtrl, navParams) {
        var _this = this;
        this.plt = plt;
        this.googleanalytics = googleanalytics;
        this.alertCtrl = alertCtrl;
        this.infoService = infoService;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.passData = {
            email: '',
            otp: '',
            user_id: ''
        };
        this.newPassword = fb.group({
            'otp': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]*')])],
        });
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('ConfirmAccount');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    CheckOtpPage.prototype.ionViewWillEnter = function () {
        $('body').removeClass().addClass('SetPassword body');
        $(document).attr('title', 'Confirm Account');
        var d = new Date();
        this.showYear = d.getFullYear();
        var parts = [], answer = "", decode_str = "", json_data = {};
        var path = window.location.href;
        parts = path.split('?q=');
        answer = parts[parts.length - 1];
        decode_str = decodeURIComponent(answer);
        json_data = JSON.parse(atob(decode_str));
        this.passData.email = json_data.email;
        this.passData.user_id = json_data.user_id;
        this.passData.otp = json_data.otp;
        this.newPassword.controls['otp'].setValue(json_data.otp);
    };
    CheckOtpPage.prototype.setNewPassword = function (val) {
        var _this = this;
        if (val.value.otp == "") {
            var alert1 = this.alertCtrl.create({
                title: 'Confirm Account',
                subTitle: 'OTP is required!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert1.present();
            return false;
        }
        if (val.value.otp == this.passData.otp) {
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/user/check-otp', this.passData, function (response) {
                if (response.user.status == "success") {
                    _this.infoService.hideLoading();
                    localStorage.removeItem('registerBusinessEmail');
                    localStorage.removeItem('registerConfirm');
                    _this.navCtrl.push('LoginPage', {
                        id: 'login'
                    });
                }
                else {
                    $('#showError').removeClass('d-none').text(response.user.msg);
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
        else {
            $('#showError').removeClass('d-none').text('Verification code not matched.');
        }
    };
    CheckOtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-check-otp',template:/*ion-inline-start:"/var/www/html/src/pages/login/check-otp/check-otp.html"*/'<ion-content padding>\n<div class="login"> \n	<div class="container login-container">\n		<div class="row loginregister pt-lg-5 pt-md-5 mb-5">\n			<div class="col-lg-12 col-md-12 col-12 pb-4 margin_top">\n				<a href="#/home"><img src="assets/images/Dibdaa.png" class="dibdaalogo" alt="Dibdaa Logo"></a>\n			</div>\n			<div class="col-lg-5 col-md-10 col-12">\n				<div class="panel panel-login">\n					<div class="panel-body">\n						<div class="row">\n							<div class="col-lg-12 col-12 col-md-12">\n								\n								<div class="form-group">\n									<h6>To Complete your registration, please verify your email addresss.</h6>\n									<span class="setFont"><b>{{passData?.email}}</b></span>\n									<br /><br />\n									<span class="register_info">Enter OTP below</span>\n 								</div>\n								<form id="reset-password" [formGroup]="newPassword" role="form" style="display: block;" class="form" novalidate>\n									<div class="row">\n										<div class="col-lg-12 col-md-12 col-12 form-group">\n											<div class="form-group">\n												<div class="row">\n													<div class="col-lg-12 col-md-10 col-12">\n														<input type="number" id="password-reg" name="otp" tabindex="1" class="form-control passwordregister" [formControl]="newPassword.controls[\'otp\']" [ngClass]="{\'error-border\':!newPassword.controls[\'otp\'].valid}">\n													</div>\n													<div class="error-box text-left pl-3" *ngIf="newPassword.controls[\'otp\'].hasError(\'required\') && newPassword.controls[\'otp\'].touched">* OTP is required!</div>\n													<div class="error-box text-left pl-3" *ngIf="newPassword.controls[\'otp\'].hasError(\'maxlength\') && newPassword.controls[\'otp\'].touched">* Maximum length is 4!</div>\n													<div class="error-box text-left pl-3" *ngIf="newPassword.controls[\'otp\'].hasError(\'minlength\') && newPassword.controls[\'otp\'].touched">* Minimum length is 4!</div>\n													<div class="error-box pl-3 d-none" id="showError"></div>\n												</div>\n											</div>\n											<div class="form-group">\n												<p class="error-box">{{showReset?.user.msg}}</p>\n											</div>\n											<div class="form-group">\n												<button type="submit" class="btn btn-warning btnsignin" (click)="setNewPassword(newPassword)">Continue</button>\n											</div>\n										</div>\n									</div>\n								</form>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	\n<!--================Footer Area =================-->\n<footer-page></footer-page>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/login/check-otp/check-otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CheckOtpPage);
    return CheckOtpPage;
}());

//# sourceMappingURL=check-otp.js.map

/***/ })

});
//# sourceMappingURL=42.js.map