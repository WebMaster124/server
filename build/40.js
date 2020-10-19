webpackJsonp([40],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ResetPasswordPageModule = /** @class */ (function () {
    function ResetPasswordPageModule() {
    }
    ResetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ResetPasswordPageModule);
    return ResetPasswordPageModule;
}());

//# sourceMappingURL=reset-password.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
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
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(plt, googleanalytics, alertCtrl, infoService, fb, navCtrl, navParams) {
        var _this = this;
        this.plt = plt;
        this.googleanalytics = googleanalytics;
        this.alertCtrl = alertCtrl;
        this.infoService = infoService;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.matchEmail = true;
        this.resetSucess = false;
        this.resetPassword = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('ResetPassword');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    ResetPasswordPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('ResetPassword body');
        $(document).attr('title', 'Reset your password');
        var d = new Date();
        this.showYear_footer = d.getFullYear();
    };
    ResetPasswordPage.prototype.resetPswd = function (val) {
        var _this = this;
        try {
            if (val.value.email == '') {
                var alert1 = this.alertCtrl.create({
                    title: 'Reset your password',
                    subTitle: 'Email address or username is required!',
                    buttons: [{
                            text: 'OK',
                            role: 'cancel',
                            cssClass: 'alert-button-changeColor'
                        }]
                });
                alert1.present();
                return false;
            }
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/user/forgot-password', val.value, function (response) {
                if (response.user.status == "success") {
                    _this.matchEmail = true;
                    _this.resetSucess = true;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.matchEmail = false;
                    _this.resetSucess = false;
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
        catch (Error) {
            console.log(Error);
            this.infoService.hideLoading();
        }
        finally {
        }
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reset-password',template:/*ion-inline-start:"/var/www/html/src/pages/login/reset-password/reset-password.html"*/'<ion-content padding>\n<div class="login"> \n	<div class="container login-container">\n		<div class="row loginregister pt-lg-5 pt-md-5 mb-5">\n			<div class="col-lg-12 col-md-12 col-12 pb-4 margin_top">\n				<a href="#/home"><img src="assets/images/Dibdaa.png" class="dibdaalogo" alt="Dibdaa Logo"></a>\n			</div>\n			<div class="col-lg-5 col-md-10 col-12">\n				<div class="panel panel-login">\n					<div class="panel-body">\n						<div class="row" *ngIf="resetSucess == false">\n							<div class="col-lg-12 col-12 col-md-12">\n								<div class="form-group">\n									<h5>Reset your password </h5>\n									<span class="warning" *ngIf="matchEmail == false"><i class="fa fa-exclamation-triangle"></i> Oops, that\'s not a match. Try again?</span>\n 								</div>\n								<div class="form-group">\n									<span class="register_info">Enter the email address or username associated with your account.</span>\n 								</div>\n								\n								<form id="reset-password" [formGroup]="resetPassword" role="form" style="display: block;">\n									<div class="form-group">\n										<input type="text" name="email" class="form-control" [formControl]="resetPassword.controls[\'email\']" [ngClass]="{\'error-border\':!resetPassword.controls[\'email\'].valid}">\n										<div class="error-box" *ngIf="resetPassword.controls[\'email\'].hasError(\'required\') && resetPassword.controls[\'email\'].touched">* Email address or username is required!</div>\n									</div>\n									<div class="form-group">\n										<button type="submit" class="btn btn-warning btnsignin" (click)="resetPswd(resetPassword)">Continue</button>\n									</div>\n								</form>\n							</div>\n						</div>\n						<div class="row pb-3" *ngIf="resetSucess == true">\n							<div class="col-lg-1 col-xl-1 col-md-1 col-1">\n								<i class="fa fa-check-circle color_green"></i>\n							</div>\n							<div class="col-lg-11 col-xl-11 col-md-11 col-11">\n								<span class="success_msg">\n									We sent an email to {{ resetPassword.value.email }} with a link to help reset your password. \n								</span>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n<!--================Footer Area =================-->\n\n	<footer-page></footer-page>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/login/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ })

});
//# sourceMappingURL=40.js.map