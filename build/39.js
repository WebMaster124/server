webpackJsonp([39],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityMeasurePageModule", function() { return SecurityMeasurePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_measure__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SecurityMeasurePageModule = /** @class */ (function () {
    function SecurityMeasurePageModule() {
    }
    SecurityMeasurePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__security_measure__["a" /* SecurityMeasurePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__security_measure__["a" /* SecurityMeasurePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SecurityMeasurePageModule);
    return SecurityMeasurePageModule;
}());

//# sourceMappingURL=security-measure.module.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityMeasurePage; });
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
 * Generated class for the SecurityMeasurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SecurityMeasurePage = /** @class */ (function () {
    function SecurityMeasurePage(alertCtrl, infoService, fb, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.infoService = infoService;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.securityMeasure = fb.group({
            'secNumber': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
        });
        this.verification = Math.floor(100000 + Math.random() * 900000);
    }
    SecurityMeasurePage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('Security body');
        $(document).attr('title', 'Security Measure');
        var d = new Date();
        this.showYear = d.getFullYear();
    };
    SecurityMeasurePage.prototype.changeNumber = function () {
        this.verification = Math.floor(100000 + Math.random() * 900000);
    };
    SecurityMeasurePage.prototype.continueReset = function (val) {
        if (val.value.secNumber == "") {
            var alert1 = this.alertCtrl.create({
                title: 'Security Measure',
                subTitle: 'Enter the verification code!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert1.present();
            return false;
        }
        if (this.verification != val.value.secNumber) {
            $('.warning').removeClass('d-none');
        }
        else {
            this.navCtrl.push('ResetPasswordPage');
            $('.warning').addClass('d-none');
        }
    };
    SecurityMeasurePage.prototype.goToBack = function () {
        this.navCtrl.pop();
    };
    SecurityMeasurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-security-measure',template:/*ion-inline-start:"/var/www/html/src/pages/login/security-measure/security-measure.html"*/'<ion-content padding>\n	<div class="login">\n		<div class="container login-container">\n			<div class="row loginregister pt-lg-5 pt-md-5 mb-5">\n				<div class="col-lg-12 col-md-12 col-12 pb-4 margin_top">\n					<a href="#/home"><img src="assets/images/Dibdaa.png" class="dibdaalogo" alt="Dibdaa Logo"></a>\n				</div>\n				<div class="col-lg-6 col-md-10 col-12">\n					<div class="panel panel-login">\n						<div class="panel-body">\n							<div class="row">\n								<div class="col-lg-12 col-12 col-md-12">\n									<div class="form-group">\n										<button class="backbutton" (click)="goToBack()"><i class="fa fa-angle-left pr-2" style="font-size:18px"></i>Back</button>\n									</div>\n									<h6>Enter the verification code</h6>\n									<div class="col-lg-12 col-md-12 col-12 warning d-none">\n										<span class="warning_msg"> <i class="fa fa-exclamation-triangle"></i> Sorry, the verification code you entered does not match against the image. Please try again.</span>\n									</div>\n									<form [formGroup]="securityMeasure" role="form" style="display: block;" class="form" novalidate>\n										<div class="row m-0">\n											<div class="form-group">\n												<input type="text" id="txtCaptcha" name = "captcha" class="txtCaptcha" readonly onCopy="return false" onDrag="return false" onDrop="return false" onPaste="return false" value="{{verification}}"/>\n											</div>\n											<div class="form-group input_captcha pl-lg-3 pl-md-3">\n												<input type="number" name="secNumber" class="inputDigit form-control" [formControl]="securityMeasure.controls[\'secNumber\']" [ngClass]="{\'error-border\':!securityMeasure.controls[\'secNumber\'].valid}" />\n												<div class="error-box" *ngIf="securityMeasure.controls[\'secNumber\'].hasError(\'required\') && securityMeasure.controls[\'secNumber\'].touched">* Enter the verification code!</div>\n											</div>\n										</div>\n										<div class="form-group">\n											<a (click)="changeNumber()" class="changeCaptchlink">Change the image</a>\n										</div>\n										<div class="form-group">\n											<button type="submit" class="btn btn-warning btnsignin" (click)="continueReset(securityMeasure)">Continue</button>\n										</div>\n									</form>\n								</div>\n							</div>\n\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!--================Footer Area =================-->\n		<footer-page></footer-page>\n		</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/login/security-measure/security-measure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SecurityMeasurePage);
    return SecurityMeasurePage;
}());

//# sourceMappingURL=security-measure.js.map

/***/ })

});
//# sourceMappingURL=39.js.map