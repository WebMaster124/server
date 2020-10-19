webpackJsonp([38],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPasswordPageModule", function() { return SetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_password__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SetPasswordPageModule = /** @class */ (function () {
    function SetPasswordPageModule() {
    }
    SetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__set_password__["a" /* SetPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__set_password__["a" /* SetPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SetPasswordPageModule);
    return SetPasswordPageModule;
}());

//# sourceMappingURL=set-password.module.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPasswordPage; });
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
 * Generated class for the SetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetPasswordPage = /** @class */ (function () {
    function SetPasswordPage(alertCtrl, infoService, fb, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.infoService = infoService;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.new_password = {
            user_id: '',
            password: '',
            request_id: ''
        };
        this.ischangePass = false;
        this.newPassword = fb.group({
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)])],
        });
    }
    SetPasswordPage.prototype.ngOnInit = function () {
        var parts = [], answer = "", decode_str = "", json_data = {};
        var path = window.location.href;
        //var path ="https://www.techcronus.com/staging/Dibdaa/www/#/set-password?q=eyJlbWFpbCI6Imtpc2hhbi5kaGFyYWppeWFAbWFpbGluYXRvci5jb20iLCJpZCI6MTV9";
        parts = path.split('?q=');
        answer = parts[parts.length - 1];
        decode_str = decodeURIComponent(answer);
        json_data = JSON.parse(atob(decode_str));
        this.new_password.user_id = json_data.id;
        this.new_password.request_id = json_data.request_id;
    };
    SetPasswordPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('SetPassword body');
        $(document).attr('title', 'Set your password');
        var d = new Date();
        this.showYear_footer = d.getFullYear();
    };
    SetPasswordPage.prototype.show_text = function () {
        if ($('#showpassword').prop('checked') == true) {
            $('#password-reg').prop('type', 'text');
        }
        else {
            $('#password-reg').prop('type', 'password');
        }
    };
    SetPasswordPage.prototype.setNewPassword = function (val) {
        var _this = this;
        if (val.value.password == "") {
            var alert1 = this.alertCtrl.create({
                title: 'Set your password',
                subTitle: 'Password is required!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert1.present();
            return false;
        }
        if (val.value.password.length < 6) {
            var alert2 = this.alertCtrl.create({
                title: 'Set your password',
                subTitle: 'Minimum password length is 6!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert2.present();
            return false;
        }
        this.new_password.password = val.value.password;
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/user/set-password', this.new_password, function (response) {
            if (response.user.status == "success") {
                _this.ischangePass = true;
            }
            else {
                _this.showReset = response;
                _this.ischangePass = false;
            }
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    SetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-set-password',template:/*ion-inline-start:"/var/www/html/src/pages/login/set-password/set-password.html"*/'<ion-content padding>\n<div class="login"> \n	<div class="container login-container">\n		<div class="row loginregister pt-lg-5 pt-md-5 mb-5">\n			<div class="col-lg-12 col-md-12 col-12 pb-4 margin_top">\n				<a href="#/home"><img src="assets/images/Dibdaa.png" class="dibdaalogo" alt="Dibdaa Logo"></a>\n			</div>\n			<div class="col-lg-5 col-md-10 col-12">\n				<div class="panel panel-login">\n					<div class="panel-body">\n						<div class="row">\n							<div class="col-lg-12 col-12 col-md-12" *ngIf="ischangePass == false">\n								\n								<div class="form-group">\n									<span class="register_info">Enter your new password below</span>\n 								</div>\n								<form id="reset-password" [formGroup]="newPassword" role="form" style="display: block;" class="form" novalidate>\n									<div class="row">\n										<div class="col-lg-12 col-md-12 col-12 form-group">\n											<div class="form-group">\n												<div class="row">\n													<div class="col-lg-10 col-md-10 col-9 pr-0">\n														<input type="password" id="password-reg" name="password" tabindex="1" class="form-control passwordregister border-right-0" [formControl]="newPassword.controls[\'password\']" [ngClass]="{\'error-border\':!newPassword.controls[\'password\'].valid}">\n													</div>\n													<div class="col-lg-2 col-md-2 col-3 pl-1 pr-1 showpassworddiv border-left-0">\n														<label class="custom-control custom-checkbox withpassword">\n															<input type="checkbox" class="custom-control-input" id="showpassword" (change)="show_text()">\n															<span class="custom-control-indicator"></span>\n															<span class="custom-control-description">Show</span>\n														</label>\n													</div>\n													<div class="error-box pl-3" *ngIf="newPassword.controls[\'password\'].hasError(\'required\') && newPassword.controls[\'password\'].touched">* Password is required!</div>\n													<div class="error-box pl-3" *ngIf="newPassword.controls[\'password\'].hasError(\'minlength\') && newPassword.controls[\'password\'].touched">* Minimum password length is 6!</div> \n												</div>\n											</div>\n											<div class="form-group">\n												<p class="error-box">{{showReset?.user.msg}}</p>\n											</div>\n											<div class="form-group">\n												<button type="submit" class="btn btn-warning btnsignin" (click)="setNewPassword(newPassword)">Continue</button>\n											</div>\n										</div>\n									</div>\n								</form>\n							</div>\n							<div class="col-lg-12 col-12 col-md-12" *ngIf="ischangePass == true">\n								<div class="row">\n									<p class="showSuccessMessage text-success">Your Password updated successfully.</p>\n								</div>\n								<div class="row">\n									<p class="w-100 text-center"><a href="#/home">Go To Home Page</a></p>\n								</div>\n							</div>\n						</div>\n						\n					</div>\n					\n				</div>\n				<div class="form-group youcanalso">\n					You can aslo:\n					<ul class="youcanalso-ul">\n						<li>\n							<a class="youcanalso-a" (click)="callCMSPage(\'register\')">Register a new account</a>\n						</li>\n					</ul>\n				</div>\n			</div>\n		</div>\n	</div>\n	\n<!--================Footer Area =================-->\n<footer-page></footer-page>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/login/set-password/set-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SetPasswordPage);
    return SetPasswordPage;
}());

//# sourceMappingURL=set-password.js.map

/***/ })

});
//# sourceMappingURL=38.js.map