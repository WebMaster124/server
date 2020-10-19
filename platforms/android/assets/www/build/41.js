webpackJsonp([41],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmAccountPageModule", function() { return ConfirmAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_account__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConfirmAccountPageModule = /** @class */ (function () {
    function ConfirmAccountPageModule() {
    }
    ConfirmAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_account__["a" /* ConfirmAccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm_account__["a" /* ConfirmAccountPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ConfirmAccountPageModule);
    return ConfirmAccountPageModule;
}());

//# sourceMappingURL=confirm-account.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(64);
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
 * Generated class for the ConfirmAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmAccountPage = /** @class */ (function () {
    function ConfirmAccountPage(alertCtrl, infoService, fb, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.infoService = infoService;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailID = localStorage.getItem('registerBusinessEmail');
        this.isConfirmAccount = false;
        this.confiemAcc = fb.group({
            'otp': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4)])],
        });
    }
    ConfirmAccountPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('ConfirmAccount body');
        $(document).attr('title', 'Confirm account');
        var d = new Date();
        this.showYear = d.getFullYear();
    };
    ConfirmAccountPage.prototype.confirmAcco = function (val) {
        var _this = this;
        if (val.value.otp == "") {
            var alert1 = this.alertCtrl.create({
                title: 'Confirm account',
                subTitle: 'Verification code is required!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert1.present();
            return false;
        }
        var checkAPICALL = localStorage.getItem('registerConfirm');
        var conAcc;
        if (checkAPICALL != null && checkAPICALL != '') {
            conAcc = {
                otp: val.value.otp,
                email: this.emailID,
                user_id: checkAPICALL
            };
            try {
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/user/check-otp', conAcc, function (response) {
                    if (response.user.status == "success") {
                        localStorage.removeItem('registerBusinessEmail');
                        localStorage.removeItem('registerConfirm');
                        _this.infoService.hideLoading();
                        _this.isConfirmAccount = true;
                    }
                    else {
                        _this.userConfirm = response;
                        _this.infoService.hideLoading();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            catch (Error) {
                console.log(Error);
                this.infoService.hideLoading();
            }
        }
        else {
            conAcc = {
                'case': 3,
                otp: val.value.otp,
                email: this.emailID
            };
            try {
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/user/seller-registration', conAcc, function (response) {
                    if (response.user.status == "success") {
                        localStorage.removeItem('registerBusinessEmail');
                        _this.infoService.hideLoading();
                        _this.navCtrl.push('LoginPage', {
                            id: 'login'
                        });
                    }
                    else {
                        _this.userConfirm = response;
                        _this.infoService.hideLoading();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            catch (Error) {
                console.log(Error);
                this.infoService.hideLoading();
            }
        }
    };
    ConfirmAccountPage.prototype.goToBack = function () {
        this.navCtrl.pop();
    };
    ConfirmAccountPage.prototype.callloginPage = function () {
        localStorage.setItem('getPageDetails', 'HomePage');
        this.navCtrl.push('LoginPage', {
            id: 'login'
        });
    };
    ConfirmAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirm-account',template:/*ion-inline-start:"/var/www/html/src/pages/login/confirm-account/confirm-account.html"*/'<ion-content padding>\n<div class="login"> \n	<div class="container login-container">\n		<div class="row loginregister pt-lg-5 pt-md-5 mb-5">\n			<div class="col-lg-12 col-md-12 col-12 pb-4 margin_top">\n				<a href="#/home"><img src="assets/images/Dibdaa.png" class="dibdaalogo" alt="Dibdaa Logo"></a>\n			</div>\n			<div class="col-lg-6 col-md-10 col-12">\n				<div class="panel panel-login">\n					<div class="panel-body">\n						<div class="row" *ngIf="isConfirmAccount == false;else showsucessAccount">\n							<div class="col-lg-12 col-12 col-md-12">\n								<div class="form-group">\n									<button class="backbutton" (click)="goToBack()"><i class="fa fa-angle-left pr-2" style="font-size:18px"></i>Back</button>\n								</div>\n								<div class="form-group">\n									<h6>To complete your registration, please verify your email address. We emailed a link to you Please check your email and click the link to verify your email address or enter verification code below.</h6>\n								</div>\n								<div class="form-group">\n									<span class="register_info">We\'re send a Verification code to <b>{{emailID}}</b></span>\n 								</div>\n								<span class="warning" *ngIf="userConfirm?.user.status == \'fail\'"><i class="fa fa-exclamation-triangle"></i> {{userConfirm?.user.msg}}. Try again?</span>\n								<form id="reset-password" [formGroup]="confiemAcc" role="form" style="display: block;" class="form" novalidate>\n									<div class="form-group">\n										<input type="number" name="otp" class="form-control" [formControl]="confiemAcc.controls[\'otp\']" [ngClass]="{\'error-border\':!confiemAcc.controls[\'otp\'].valid}">\n										<div class="error-box text-left" *ngIf="confiemAcc.controls[\'otp\'].hasError(\'required\') && confiemAcc.controls[\'otp\'].touched">* Verification code is required!</div>\n										<div class="error-box text-left" *ngIf="confiemAcc.controls[\'otp\'].hasError(\'maxlength\') && confiemAcc.controls[\'otp\'].touched">* Maximum length is 4!</div>\n										<div class="error-box text-left" *ngIf="confiemAcc.controls[\'otp\'].hasError(\'minlength\') && confiemAcc.controls[\'otp\'].touched">* Minimum length is 4!</div>\n									</div>\n									<div class="form-group">\n										<button type="submit" class="btn btn-warning btnsignin" (click)="confirmAcco(confiemAcc)">Continue</button>\n									</div>\n								</form>\n							</div>\n						</div>\n						<ng-template #showsucessAccount>\n							<div class="col-lg-12 col-12 col-md-12">\n								<div class="form-group text-center">\n									<h6>Your email account verified successfully.</h6> <h6>Please click here to <a class="backbutton" (click)="callloginPage()">Sign In</a> and start Dibsing.</h6>\n								</div>\n							</div>\n						</ng-template>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n<!--================Footer Area =================-->\n	<footer-page></footer-page>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/login/confirm-account/confirm-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ConfirmAccountPage);
    return ConfirmAccountPage;
}());

//# sourceMappingURL=confirm-account.js.map

/***/ })

});
//# sourceMappingURL=41.js.map