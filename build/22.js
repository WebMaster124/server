webpackJsonp([22],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_intl_phone__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng4_intl_phone__["a" /* InternationalPhoneModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jquery_multiselect_js__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jquery_multiselect_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__jquery_multiselect_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flogin_js__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flogin_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__flogin_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {HomePage} from '../home/home';
//import { GooglePlus } from '@ionic-native/google-plus';
//import { LinkedIn } from '@ionic-native/linkedin';
//import { TwitterConnect } from '@ionic-native/twitter-connect';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(plt, googleanalytics, alertCtrl, modalCtrl, appCtrl, infoService, navCtrl, navParams) {
        var _this = this;
        this.plt = plt;
        this.googleanalytics = googleanalytics;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.appCtrl = appCtrl;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.verification_code = true;
        
//        this.teamspdf();
//var user_data = {
//            name: 'Ram Sharma',
//            id: '246',
//            natinality: 'India'
//        };
//        this.teamspdf(user_data);
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('Login');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        $(document).attr('title', this.navParams.data.id);
        $('body').removeClass().addClass('Login body');
        this.imgcaptch_disp = Math.floor(100000 + Math.random() * 900000);
        var d = new Date();
        this.showYear_footer = d.getFullYear();
        $(".zoomContainer").remove();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        var self = this;
        self.infoService.showLoading();
        if (self.navParams.data.id == "register") {
            setTimeout(function () {
                document.getElementById('register-form-link').click();
                document.getElementById('personal').checked = true;
                $('.Optionstrue').removeClass('d-none');
                $('.Optionsfalse').addClass('d-none');
                self.infoService.hideLoading();
            }, 1500);
        }
        else if (self.navParams.data.id == "dibdaaPremium") {
            setTimeout(function () {
                document.getElementById('register-form-link').click();
                document.getElementById('business').checked = true;
                $('.Optionsfalse').removeClass('d-none');
                $('.Optionstrue').addClass('d-none');
                self.infoService.hideLoading();
            }, 1500);
        }
        else if (self.navParams.data.id == "registerBusiness") {
            setTimeout(function () {
                document.getElementById('register-form-link').click();
                document.getElementById('personal_business').checked = true;
                $('.Optionstrue').removeClass('d-none');
                $('.Optionsfalse').addClass('d-none');
                self.infoService.hideLoading();
            }, 1500);
        }
        else {
            self.infoService.hideLoading();
        }
    };
    LoginPage.prototype.changeAccount = function (val, val1) {
        if (val1 == 'personal') {
            $('.hidenationality').removeClass('d-none');
            $('.hideBusinessName').addClass('d-none');
            $('.Optionstrue').removeClass('d-none');
            $('.Optionsfalse').addClass('d-none');
        }
        else if (val1 == 'business') {
            $('.hidenationality').addClass('d-none');
            $('.hideBusinessName').removeClass('d-none');
            $('.Optionstrue').removeClass('d-none');
            $('.Optionsfalse').addClass('d-none');
        }
        else if (val1 == 'premimum') {
            $('.hidenationality').removeClass('d-none');
            $('.hideBusinessName').addClass('d-none');
            $('.Optionstrue').addClass('d-none');
            $('.Optionsfalse').removeClass('d-none');
        }
    };
    LoginPage.prototype.show_Register = function () {
        var path_register = window.location.href;
        var BSURL_register = path_register.split("USR");
        var path, BSURL;
        if (BSURL_register[1] == '/login') {
            $('#login-form').addClass('d-none');
            $('#register-form').removeClass('d-none');
            $('.hidenationality').removeClass('d-none');
            $('.hideBusinessName').addClass('d-none');
            path = window.location.href;
            BSURL = path.split("USR");
            history.pushState(null, '', BSURL[0] + 'USR/register');
            $(document).attr('title', 'register');
            setTimeout(function () {
                $('.Optionstrue').removeClass('d-none');
                $('.Optionsfalse').addClass('d-none');
                $('#login-form-link').removeClass('active');
                $('#register-form-link').addClass('active');
                if ($("#personal").prop("checked") == true) {
                }
                else
                    document.getElementById('personal').checked = true;
            }, 500);
        }
        else if (BSURL_register[1] == "/registerBusiness") {
            $('#login-form').addClass('d-none'); //css('display','none');
            $('#register-form').removeClass('d-none'); //.css('display', 'block');
            $('.hideBusinessName').removeClass('d-none');
            $('.hidenationality ').addClass('d-none');
            setTimeout(function () {
                $('.Optionstrue').removeClass('d-none');
                $('.Optionsfalse').addClass('d-none');
                $('#login-form-link').removeClass('active');
                $('#register-form-link').addClass('active');
                if ($("#personal").prop("checked") == true) {
                }
                else
                    document.getElementById('personal_business').checked = true;
            }, 500);
        }
        else if (BSURL_register[1] == "/dibdaaPremium") {
            $('#login-form').addClass('d-none');
            $('#register-form').removeClass('d-none');
            $('.hideBusinessName').removeClass('d-none');
            $('.hidenationality ').addClass('d-none');
            setTimeout(function () {
                $('.Optionstrue').addClass('d-none');
                $('.Optionsfalse').removeClass('d-none');
                $('#login-form-link').removeClass('active');
                $('#register-form-link').addClass('active');
                if ($("#personal").prop("checked") == true) {
                }
                else
                    document.getElementById('business').checked = true;
            }, 500);
        }
        else if (BSURL_register[1] == "/register") {
            $('#login-form').addClass('d-none');
            $('#register-form').removeClass('d-none');
            $('.hideBusinessName').addClass('d-none');
            $('.hidenationality ').removeClass('d-none');
            path = window.location.href;
            BSURL = path.split("USR");
            history.pushState(null, '', BSURL[0] + 'USR/register');
            $(document).attr('title', 'register');
            setTimeout(function () {
                $('#login-form-link').removeClass('active');
                $('#register-form-link').addClass('active');
                $('.Optionstrue').removeClass('d-none');
                $('.Optionsfalse').addClass('d-none');
                if ($("#personal").prop("checked") == true) {
                }
                else
                    document.getElementById('personal').checked = true;
            }, 500);
        }
    };
    LoginPage.prototype.show_Login = function () {
        $('#register-form-link').removeClass('active');
        $('#login-form-link').addClass('active');
        $('#login-form').removeClass('d-none');
        $('#register-form').addClass('d-none');
        var path_login = window.location.href;
        var BSURL_login = path_login.split("USR");
        history.pushState(null, '', BSURL_login[0] + 'USR/login');
        $(document).attr('title', 'login');
    };
    LoginPage.prototype.show_text = function () {
        if ($('#showpassword').prop('checked') == true) {
            $('#password-reg').prop('type', 'text');
        }
        else {
            $('#password-reg').prop('type', 'password');
        }
    };
    LoginPage.prototype.loginUser = function (val) {
        var _this = this;
        if (val.value.user_name == "") {
            var alert1 = this.alertCtrl.create({
                title: 'Sign In',
                subTitle: 'Email Or Username is required!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert1.present();
            return false;
        }
        if (val.value.password == "") {
            var alert2 = this.alertCtrl.create({
                title: 'Sign In',
                subTitle: 'Password is required!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert2.present();
            return false;
        }
        if (val.value.password.length < 6) {
            var alert2 = this.alertCtrl.create({
                title: 'Sign In',
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
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/login', val.value, function (response) {
            if (response.user.status == "success") {
                localStorage.setItem('checkuserLogin', 'Yes');
                localStorage.setItem('userInfo', JSON.stringify(response.user.msg));
                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].isLogin = true;
                var retrievedObject = localStorage.getItem('userInfo');
                __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = JSON.parse(retrievedObject);
                _this.countCart(response.user.msg.id);
                var pageDetails = localStorage.getItem('getPageDetails');
                _this.infoService.hideLoading();
                if (pageDetails == 'return' || pageDetails == 'resolutionCenter' || pageDetails == 'message' || pageDetails == 'SavedDrafts' || pageDetails == 'Active' || pageDetails == 'SavedSellers' || pageDetails == 'SavedSearches' || pageDetails == 'Bids' || pageDetails == 'PurchaseHistory' || pageDetails == 'WishList' || pageDetails == 'MyAddresses' || pageDetails == 'account') {
                    _this.appCtrl.getRootNav().push('SellerMyAccountPage', {
                        id: pageDetails
                    });
                    localStorage.removeItem('getPageDetails');
                }
                else if (pageDetails == 'HomePage' || pageDetails == 'ViewCartPage') {
                    _this.appCtrl.getRootNav().push(pageDetails);
                    localStorage.removeItem('getPageDetails');
                }
                else if (pageDetails == 'DraftListingPage') {
                    if (response.user.msg.role == 'seller')
                        _this.appCtrl.getRootNav().push(pageDetails);
                    else
                        _this.appCtrl.getRootNav().push('AddedSellerInfoPage');
                    localStorage.removeItem('getPageDetails');
                }
                else if (pageDetails == 'RecentlyViewed') {
                    _this.appCtrl.getRootNav().push('AllItemPage', {
                        id: pageDetails
                    });
                    localStorage.removeItem('getPageDetails');
                }
                else if (pageDetails == 'ProductDetailsPage') {
                    _this.navCtrl.pop();
                    localStorage.removeItem('getPageDetails');
                }
                else if (pageDetails == 'writereviewPage') {
                    var makeofferData = localStorage.getItem('getreviewData');
                    _this.navCtrl.push('LeaveProductRatingPage', {
                        id: makeofferData
                    });
                    localStorage.removeItem('getPageDetails');
                    localStorage.removeItem('getreviewData');
                }
                else {
                    _this.appCtrl.getRootNav().push('HomePage');
                    localStorage.removeItem('getPageDetails');
                }
            }
            else {
                _this.login_error = response.user.msg;
                $('#errf').removeClass('hide');
                _this.infoService.hideLoading();
            }
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    
    LoginPage.prototype.teamspdf = function (val) {
//        alert(val);
        var passData = {
            agreement: '23',
            privacy: '24',
            name:val.name,
            id:val.id,
            natinality:val.natinality,
        };
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/user-policy', passData, function (response) {
                if (response.docs.status == "success") {
//                    _this.infoService.hideLoading();
//                    localStorage.setItem('registerBusinessEmail', val.value.email);
//                    _this.navCtrl.push('BusinessDetailsPage', {
//                        id: response.user.user_id
//                    });
                }
                else {
//                    _this.register_Business_1 = response;
//                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
    };
    
    
    
    LoginPage.prototype.registerpersonalUser = function (val) {
        var _this = this;
        val.value.userrole = 'buyer';
        if (val.value.first_name == "") {
            var alert2 = this.alertCtrl.create({
                title: 'Register',
                subTitle: 'Name is required!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert2.present();
            return false;
        }
        if (val.value.last_name == "") {
            var alert3 = this.alertCtrl.create({
                title: 'Register',
                subTitle: 'Last Name is required!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert3.present();
            return false;
        }
        if (val.value.email == "") {
            var alert4 = this.alertCtrl.create({
                title: 'Register',
                subTitle: 'Email is not valid!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert4.present();
            return false;
        }
        if (val.value.password == "") {
            var alert5 = this.alertCtrl.create({
                title: 'Register',
                subTitle: 'Password is required!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert5.present();
            return false;
        }
        if (val.value.password.length < 6) {
            var alert7 = this.alertCtrl.create({
                title: 'Register',
                subTitle: 'Minimum password length is 6!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert7.present();
            return false;
        }
        if (val.value.agrement == "") {
            var alert8 = this.alertCtrl.create({
                title: 'Register',
                subTitle: 'Please check agree if you want to proceed!',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alert-button-changeColor'
                    }]
            });
            alert8.present();
            return false;
        }
        if ($("input[name='options'][value='personal_account']").prop("checked")) {
            val.value.account_type = 'personal_account';
            if (val.value.natinality == "" || val.value.natinality == undefined) {
                var alert1 = this.alertCtrl.create({
                    title: 'Personal account',
                    subTitle: 'Please select Nationality.',
                    buttons: [{
                            text: 'OK',
                            role: 'cancel',
                            cssClass: 'alert-button-changeColor'
                        }]
                });
                alert1.present();
                return false;
            }
        }
        else if ($("input[name='options'][value='business_account']").prop("checked")) {
            val.value.account_type = 'business_account';
            if (val.value.business_name == "") {
                var alert1 = this.alertCtrl.create({
                    title: 'Business account',
                    subTitle: 'Business Name is required!',
                    buttons: [{
                            text: 'OK',
                            role: 'cancel',
                            cssClass: 'alert-button-changeColor'
                        }]
                });
                alert1.present();
                return false;
            }
        }
        else {
            val.value.account_type = 'business_account';
        }
        
        
//        if (val.value.agrement != "") {
////            alert(user_data);
//                this.teamspdf(user_data);
//        }
        
//        this.infoService.showLoading();

//_this.navCtrl.push('ConfirmAccountPage', {
//                        id: '111'
//                    });

        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/buyer-registration', val.value, function (response) {
            
            var user_data = {
            name: val.value.first_name+' '+val.value.last_name,
            id: response.user.user_id,
            natinality: val.value.natinality
        };
            
            if (response.user.status == "success") {
                _this.teamspdf(user_data);
                _this.infoService.hideLoading();
                localStorage.setItem('registerBusinessEmail', val.value.email);
                localStorage.setItem('registerConfirm', response.user.user_id);
//                _this.navCtrl.push('ConfirmAccountPage');
                _this.navCtrl.push('ConfirmAccountPage', {
                                        id: response.user.user_id
                                    });
                
            }
            else {
                _this.register_personal = response;
                _this.infoService.hideLoading();
            }
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    
    
    
    LoginPage.prototype.registerbusinessUser = function (val) {
        var _this = this;
        if ($('#txtCaptcha').val() != val.value.imgcaptcha) {
            this.verification_code = false;
        }
        else {
            this.verification_code = true;
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/seller-registration', val.value, function (response) {
                if (response.user.status == "success") {
                    _this.infoService.hideLoading();
                    localStorage.setItem('registerBusinessEmail', val.value.email);
                    _this.navCtrl.push('BusinessDetailsPage', {
                        id: response.user.user_id
                    });
                }
                else {
                    _this.register_Business_1 = response;
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    LoginPage.prototype.changeNumber = function () {
        this.imgcaptch_disp = Math.floor(100000 + Math.random() * 900000);
    };
    LoginPage.prototype.gotoSecurity = function () {
        this.navCtrl.push('SecurityMeasurePage');
    };
    LoginPage.prototype.countCart = function (val) {
        var cart_details = {
            user_id: val
        };
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/message/unread-msg-count', cart_details, function (response) {
            if (response.count.status == "success" && response.count.cnt > 0) {
                $('#ShowMessageCount').text(response.count.cnt);
                $('#ShowMsgCount').text(response.count.cnt);
            }
            if (response.count.status == "success" && response.count.cart_total > 0) {
                $('#addtoCount').text(response.count.cart_total);
                $('#addtoCount_mobile').text(response.count.cart_total);
            }
            if (response.count.status == "success" && response.count.announcement_cnt > 0) {
                $('#announcementCount').text(response.count.announcement_cnt);
                $('#announcementCount_mobile').text(response.count.announcement_cnt);
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.funccallmodal = function (val) {
        var passData = {
            id: val
        };
        var modalPage;
        modalPage = this.modalCtrl.create('SellerAgreementPage', passData);
        modalPage.present();
    };
    LoginPage.prototype.readLearnmore = function () {
        $('.learn-more').removeClass('d-none');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/var/www/html/src/pages/login/login.html"*/'<ion-content padding>\n	<div class="login">\n		<div class="container login-container">\n			<div class="row loginregister pt-lg-5 pt-md-5 mb-5 pt-4">\n				<div class="col-lg-12 col-md-12 col-12 pb-4">\n					<a href="#/home"><img src="assets/images/Dibdaa.png" class="dibdaalogo" alt="Dibdaa Logo"></a>\n				</div>\n				<div class="col-lg-5 col-md-10 col-12">\n					<div class="panel panel-login">\n						<div class="panel-heading">\n							<div class="row">\n								<div class="col-lg-6 col-md-6 col-6 text-center pt-2 pb-4">\n									<a class="active" id="login-form-link" (click)="show_Login()">\n									<i class="fa fa-arrow-circle-right pr-3"></i>Sign In</a>\n								</div>\n								<div class="col-lg-6 col-md-6 col-6 text-center pt-2 pb-4">\n									<a id="register-form-link" (click)="show_Register()">\n									<i class="fa fa-plus-circle pr-3"></i>Register</a>\n								</div>\n							</div>\n						</div>\n						<div class="panel-body">\n							<div class="row">\n								<div class="col-lg-12 col-12 col-md-12">\n									<form #loginfrm="ngForm" class="form" id="login-form" method="post" role="form" novalidate>\n										<span id="errf" tabindex="-1" class="hide warning_msg mb-3"> <i class="fa fa-exclamation-triangle"></i> {{login_error}} </span>\n										<div class="form-group">\n											<input type="text" name="user_name" #user_name="ngModel" required ngModel class="form-control" placeholder="Email Or Username">\n											<div *ngIf="user_name.invalid && (user_name.dirty || user_name.touched)" class="error-box">\n												<div *ngIf="user_name.errors.required">\n													* Email Or Username is required!.\n												</div>\n											</div>\n										</div>\n										<div class="form-group">\n											<input type="password" class="form-control" name="password" #password_login="ngModel" required ngModel placeholder="Password" minlength="6">\n											<div *ngIf="password_login.invalid && (password_login.dirty || password_login.touched)" class="error-box">\n												<div *ngIf="password_login.errors.required">\n													* Password is required!.\n												</div>\n												<div *ngIf="password_login.errors?.minlength">\n													* Minimum password length is 6!.\n												</div>\n											</div>\n										</div>\n										<div class="form-group">\n											<button type="submit" class="btn theme-light-btn btnsignin" (click)="loginUser(loginfrm)">Sign In</button>\n										</div>\n										<div class="form-group">\n											<div class="row">\n												<div class="col-lg-6 col-12 col-md-6">\n													<label class="custom-control custom-checkbox">\n														<input type="checkbox" class="custom-control-input">\n														<span class="custom-control-indicator"></span>\n														<span class="custom-control-description">Stay signed in</span>\n													</label>\n												</div>\n											   <div class="col-lg-6 col-12 col-md-6">\n													<div class="text-left text-lg-right text-md-right text-xl-right">\n														<a tabindex="5" class="temporary-password" (click)="gotoSecurity()">Reset your password</a>\n													</div>\n												</div> \n											</div>\n											<div class="row">\n												<div class="col-lg-12 mt-2">\n													<div class="text-left">\n														<p>Using a public or shared device? Uncheck to protect your account. <a class="setlearn-more temporary-password" (click)="readLearnmore()">Learn more</a></p>\n														<p class="learn-more d-none">\n															With this box checked, we\'ll keep you signed in, making it easier to bid and buy. You can always turn off this feature in Dibdaa.\n														</p>\n													</div>\n												</div>\n											</div>\n										</div>\n									</form>\n									<form id="register-form" class="d-none">\n										<div class="row">\n											<div class="col-lg-4 col-md-4 form-group">\n												<input type="radio" id="personal" name="options" (change)="changeAccount(\'true\',\'personal\')" value="personal_account" >\n												<label for="personal" class="label_personal">Personal account</label>\n											</div>\n											<div class="col-lg-4 col-md-4 form-group">\n												<input type="radio" id="personal_business" name="options" (change)="changeAccount(\'true\',\'business\')" value="business_account" >\n												<label for="personal_business" class="label_personal">Business account</label>\n											</div>\n											<div class="col-lg-4 col-md-4 form-group">\n												<input type="radio" id="business" name="options" (change)="changeAccount(\'false\',\'premimum\')">\n												<label for="business" class="label_personal">Dibdaa premium</label>\n											</div>\n										</div>\n										<div class="Optionstrue"> \n											<form #registerfrm="ngForm" class="form" id="registeruser-form" method="post" role="form" novalidate>\n												<div class="form-group hideBusinessName d-none">\n													<label class="label_personal"><span class="text-danger font-weight-bold" required>*</span>Business Name</label>\n													<input type="text" name="business_name" class="form-control business_name" tabindex="2" #business_name="ngModel" ngModel id="business_name">\n												</div>\n												<div class="row">\n													<div class="col-lg-6 col-md-6 form-group">\n														<label class="label_personal"><span class="text-danger font-weight-bold">*</span>First Name</label>\n														<input type="text" name="first_name" tabindex="2" class="form-control" #first_name="ngModel" ngModel required pattern="^[a-zA-Z]+$">\n														<div *ngIf="first_name.invalid && (first_name.dirty || first_name.touched)" class="error-box">\n															<div *ngIf="first_name.errors.required">\n																* Name is required!.\n															</div>\n															<div *ngIf="first_name.errors?.pattern">\n																* Enter character only!\n															</div>\n														</div>\n													</div>\n													<div class="col-lg-6 col-md-6 form-group">\n														<label class="label_personal"><span class="text-danger font-weight-bold">*</span>Last Name</label>\n														<input type="text" name="last_name" tabindex="3" class="form-control" #last_name="ngModel" ngModel required pattern="^[a-zA-Z]+$">\n														<div *ngIf="last_name.invalid && (last_name.dirty || last_name.touched)" class="error-box">\n															<div *ngIf="last_name.errors.required">\n																* Last Name is required!.\n															</div>\n															<div *ngIf="last_name.errors?.pattern">\n																* Enter character only!\n															</div>\n														</div>\n														<input type="text" name="userrole" class="form-control d-none" [value]="buyer" #userrole="ngModel" ngModel>\n														<input type="text" name="account_type" class="form-control d-none" #account_type="ngModel" ngModel>\n													</div>\n												</div>\n												<div class="form-group">\n													<label class="label_personal"><span class="text-danger font-weight-bold">*</span>Email Address</label>\n													<input type="email" name="email" tabindex="4" class="form-control" #email="ngModel" ngModel required email="true">\n													<div *ngIf="email.invalid && (email.dirty || email.touched)" class="error-box">\n														<div *ngIf="email.errors?.email">\n															* Email is not valid!.\n														</div>\n													</div>\n												</div>\n												<div class="form-group hidenationality">\n													<label class="label_personal"><span class="text-danger font-weight-bold">*</span>Nationality</label>\n													<select class="form-control allcategories" tabindex="5" id="Business_country" name="natinality" #natinality_select="ngModel" ngModel>\n														 <option value="">-- Select Nationality --</option>\n														<option value="Afghanistan">Afghanistan</option>\n														<option value="Albania">Albania</option>\n														<option value="Algeria">Algeria</option>\n														<option value="American Samoa">American Samoa</option>\n														<option value="Andorra">Andorra</option>\n														<option value="Angola">Angola</option>\n														<option value="Anguilla">Anguilla</option>\n														<option value="Antartica">Antarctica</option>\n														<option value="Antigua and Barbuda">Antigua and Barbuda</option>\n														<option value="Argentina">Argentina</option>\n														<option value="Armenia">Armenia</option>\n														<option value="Aruba">Aruba</option>\n														<option value="Australia">Australia</option>\n														<option value="Austria">Austria</option>\n														<option value="Azerbaijan">Azerbaijan</option>\n														<option value="Bahamas">Bahamas</option>\n														<option value="Bahrain">Bahrain</option>\n														<option value="Bangladesh">Bangladesh</option>\n														<option value="Barbados">Barbados</option>\n														<option value="Belarus">Belarus</option>\n														<option value="Belgium">Belgium</option>\n														<option value="Belize">Belize</option>\n														<option value="Benin">Benin</option>\n														<option value="Bermuda">Bermuda</option>\n														<option value="Bhutan">Bhutan</option>\n														<option value="Bolivia">Bolivia</option>\n														<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>\n														<option value="Botswana">Botswana</option>\n														<option value="Bouvet Island">Bouvet Island</option>\n														<option value="Brazil">Brazil</option>\n														<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>\n														<option value="Brunei Darussalam">Brunei Darussalam</option>\n														<option value="Bulgaria">Bulgaria</option>\n														<option value="Burkina Faso">Burkina Faso</option>\n														<option value="Burundi">Burundi</option>\n														<option value="Cambodia">Cambodia</option>\n														<option value="Cameroon">Cameroon</option>\n														<option value="Canada">Canada</option>\n														<option value="Cape Verde">Cape Verde</option>\n														<option value="Cayman Islands">Cayman Islands</option>\n														<option value="Central African Republic">Central African Republic</option>\n														<option value="Chad">Chad</option>\n														<option value="Chile">Chile</option>\n														<option value="China">China</option>\n														<option value="Christmas Island">Christmas Island</option>\n														<option value="Cocos Islands">Cocos (Keeling) Islands</option>\n														<option value="Colombia">Colombia</option>\n														<option value="Comoros">Comoros</option>\n														<option value="Congo">Congo</option>\n														<option value="Congo">Congo, the Democratic Republic of the</option>\n														<option value="Cook Islands">Cook Islands</option>\n														<option value="Costa Rica">Costa Rica</option>\n														<option value="Cota D\'Ivoire">Cote d\'Ivoire</option>\n														<option value="Croatia">Croatia (Hrvatska)</option>\n														<option value="Cuba">Cuba</option>\n														<option value="Cyprus">Cyprus</option>\n														<option value="Czech Republic">Czech Republic</option>\n														<option value="Denmark">Denmark</option>\n														<option value="Djibouti">Djibouti</option>\n														<option value="Dominica">Dominica</option>\n														<option value="Dominican Republic">Dominican Republic</option>\n														<option value="East Timor">East Timor</option>\n														<option value="Ecuador">Ecuador</option>\n														<option value="Egypt">Egypt</option>\n														<option value="El Salvador">El Salvador</option>\n														<option value="Equatorial Guinea">Equatorial Guinea</option>\n														<option value="Eritrea">Eritrea</option>\n														<option value="Estonia">Estonia</option>\n														<option value="Ethiopia">Ethiopia</option>\n														<option value="Falkland Islands">Falkland Islands (Malvinas)</option>\n														<option value="Faroe Islands">Faroe Islands</option>\n														<option value="Fiji">Fiji</option>\n														<option value="Finland">Finland</option>\n														<option value="France">France</option>\n														<option value="France Metropolitan">France, Metropolitan</option>\n														<option value="French Guiana">French Guiana</option>\n														<option value="French Polynesia">French Polynesia</option>\n														<option value="French Southern Territories">French Southern Territories</option>\n														<option value="Gabon">Gabon</option>\n														<option value="Gambia">Gambia</option>\n														<option value="Georgia">Georgia</option>\n														<option value="Germany">Germany</option>\n														<option value="Ghana">Ghana</option>\n														<option value="Gibraltar">Gibraltar</option>\n														<option value="Greece">Greece</option>\n														<option value="Greenland">Greenland</option>\n														<option value="Grenada">Grenada</option>\n														<option value="Guadeloupe">Guadeloupe</option>\n														<option value="Guam">Guam</option>\n														<option value="Guatemala">Guatemala</option>\n														<option value="Guinea">Guinea</option>\n														<option value="Guinea-Bissau">Guinea-Bissau</option>\n														<option value="Guyana">Guyana</option>\n														<option value="Haiti">Haiti</option>\n														<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>\n														<option value="Holy See">Holy See (Vatican City State)</option>\n														<option value="Honduras">Honduras</option>\n														<option value="Hong Kong">Hong Kong</option>\n														<option value="Hungary">Hungary</option>\n														<option value="Iceland">Iceland</option>\n														<option value="India">India</option>\n														<option value="Indonesia">Indonesia</option>\n														<option value="Iran">Iran (Islamic Republic of)</option>\n														<option value="Iraq">Iraq</option>\n														<option value="Ireland">Ireland</option>\n														<option value="Israel">Israel</option>\n														<option value="Italy">Italy</option>\n														<option value="Jamaica">Jamaica</option>\n														<option value="Japan">Japan</option>\n														<option value="Jordan">Jordan</option>\n														<option value="Kazakhstan">Kazakhstan</option>\n														<option value="Kenya">Kenya</option>\n														<option value="Kiribati">Kiribati</option>\n														<option value="Democratic People\'s Republic of Korea">Korea, Democratic People\'s Republic of</option>\n														<option value="Korea">Korea, Republic of</option>\n														<option value="Kuwait">Kuwait</option>\n														<option value="Kyrgyzstan">Kyrgyzstan</option>\n														<option value="Lao">Lao People\'s Democratic Republic</option>\n														<option value="Latvia">Latvia</option>\n														<option value="Lebanon">Lebanon</option>\n														<option value="Lesotho">Lesotho</option>\n														<option value="Liberia">Liberia</option>\n														<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>\n														<option value="Liechtenstein">Liechtenstein</option>\n														<option value="Lithuania">Lithuania</option>\n														<option value="Luxembourg">Luxembourg</option>\n														<option value="Macau">Macau</option>\n														<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>\n														<option value="Madagascar">Madagascar</option>\n														<option value="Malawi">Malawi</option>\n														<option value="Malaysia">Malaysia</option>\n														<option value="Maldives">Maldives</option>\n														<option value="Mali">Mali</option>\n														<option value="Malta">Malta</option>\n														<option value="Marshall Islands">Marshall Islands</option>\n														<option value="Martinique">Martinique</option>\n														<option value="Mauritania">Mauritania</option>\n														<option value="Mauritius">Mauritius</option>\n														<option value="Mayotte">Mayotte</option>\n														<option value="Mexico">Mexico</option>\n														<option value="Micronesia">Micronesia, Federated States of</option>\n														<option value="Moldova">Moldova, Republic of</option>\n														<option value="Monaco">Monaco</option>\n														<option value="Mongolia">Mongolia</option>\n														<option value="Montserrat">Montserrat</option>\n														<option value="Morocco">Morocco</option>\n														<option value="Mozambique">Mozambique</option>\n														<option value="Myanmar">Myanmar</option>\n														<option value="Namibia">Namibia</option>\n														<option value="Nauru">Nauru</option>\n														<option value="Nepal">Nepal</option>\n														<option value="Netherlands">Netherlands</option>\n														<option value="Netherlands Antilles">Netherlands Antilles</option>\n														<option value="New Caledonia">New Caledonia</option>\n														<option value="New Zealand">New Zealand</option>\n														<option value="Nicaragua">Nicaragua</option>\n														<option value="Niger">Niger</option>\n														<option value="Nigeria">Nigeria</option>\n														<option value="Niue">Niue</option>\n														<option value="Norfolk Island">Norfolk Island</option>\n														<option value="Northern Mariana Islands">Northern Mariana Islands</option>\n														<option value="Norway">Norway</option>\n														<option value="Oman">Oman</option>\n														<option value="Pakistan">Pakistan</option>\n														<option value="Palau">Palau</option>\n														<option value="Panama">Panama</option>\n														<option value="Papua New Guinea">Papua New Guinea</option>\n														<option value="Paraguay">Paraguay</option>\n														<option value="Peru">Peru</option>\n														<option value="Philippines">Philippines</option>\n														<option value="Pitcairn">Pitcairn</option>\n														<option value="Poland">Poland</option>\n														<option value="Portugal">Portugal</option>\n														<option value="Puerto Rico">Puerto Rico</option>\n														<option value="Qatar">Qatar</option>\n														<option value="Reunion">Reunion</option>\n														<option value="Romania">Romania</option>\n														<option value="Russia">Russian Federation</option>\n														<option value="Rwanda">Rwanda</option>\n														<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>\n														<option value="Saint LUCIA">Saint LUCIA</option>\n														<option value="Saint Vincent">Saint Vincent and the Grenadines</option>\n														<option value="Samoa">Samoa</option>\n														<option value="San Marino">San Marino</option>\n														<option value="Sao Tome and Principe">Sao Tome and Principe</option>\n														<option value="Saudi Arabia">Saudi Arabia</option>\n														<option value="Senegal">Senegal</option>\n														<option value="Seychelles">Seychelles</option>\n														<option value="Sierra">Sierra Leone</option>\n														<option value="Singapore">Singapore</option>\n														<option value="Slovakia">Slovakia (Slovak Republic)</option>\n														<option value="Slovenia">Slovenia</option>\n														<option value="Solomon Islands">Solomon Islands</option>\n														<option value="Somalia">Somalia</option>\n														<option value="South Africa">South Africa</option>\n														<option value="South Georgia">South Georgia and the South Sandwich Islands</option>\n														<option value="Span">Spain</option>\n														<option value="SriLanka">Sri Lanka</option>\n														<option value="St. Helena">St. Helena</option>\n														<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>\n														<option value="Sudan">Sudan</option>\n														<option value="Suriname">Suriname</option>\n														<option value="Svalbard">Svalbard and Jan Mayen Islands</option>\n														<option value="Swaziland">Swaziland</option>\n														<option value="Sweden">Sweden</option>\n														<option value="Switzerland">Switzerland</option>\n														<option value="Syria">Syrian Arab Republic</option>\n														<option value="Taiwan">Taiwan, Province of China</option>\n														<option value="Tajikistan">Tajikistan</option>\n														<option value="Tanzania">Tanzania, United Republic of</option>\n														<option value="Thailand">Thailand</option>\n														<option value="Togo">Togo</option>\n														<option value="Tokelau">Tokelau</option>\n														<option value="Tonga">Tonga</option>\n														<option value="Trinidad and Tobago">Trinidad and Tobago</option>\n														<option value="Tunisia">Tunisia</option>\n														<option value="Turkey">Turkey</option>\n														<option value="Turkmenistan">Turkmenistan</option>\n														<option value="Turks and Caicos">Turks and Caicos Islands</option>\n														<option value="Tuvalu">Tuvalu</option>\n														<option value="Uganda">Uganda</option>\n														<option value="Ukraine">Ukraine</option>\n														<option value="United Arab Emirates" selected>United Arab Emirates</option>\n														<option value="United Kingdom">United Kingdom</option>\n														<option value="United States">United States</option>\n														<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>\n														<option value="Uruguay">Uruguay</option>\n														<option value="Uzbekistan">Uzbekistan</option>\n														<option value="Vanuatu">Vanuatu</option>\n														<option value="Venezuela">Venezuela</option>\n														<option value="Vietnam">Viet Nam</option>\n														<option value="Virgin Islands (British)">Virgin Islands (British)</option>\n														<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>\n														<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>\n														<option value="Western Sahara">Western Sahara</option>\n														<option value="Yemen">Yemen</option>\n														<option value="Yugoslavia">Yugoslavia</option>\n														<option value="Zambia">Zambia</option>\n														<option value="Zimbabwe">Zimbabwe</option>\n													</select>\n												</div>\n												\n												<div class="row">\n													<div class="col-lg-12 col-md-12 col-12 form-group">\n														<label class="label_personal"><span class="text-danger font-weight-bold">*</span>Password</label>\n														<div class="row">\n															<div class="col-lg-10 col-md-10 col-9 pr-0">\n																<input type="password" id="password-reg" name="password" tabindex="6" class="form-control passwordregister border-right-0" #password="ngModel" ngModel required minlength="6">\n															</div>\n															<div class="col-lg-2 col-md-2 col-3 pl-1 pr-1 showpassworddiv border-left-0">\n																<label class="custom-control custom-checkbox withpassword">\n																	<input type="checkbox" tabindex="7" class="custom-control-input" id="showpassword" (change)="show_text()">\n																	<span class="custom-control-indicator"></span>\n																	<span class="custom-control-description">Show</span>\n																</label>\n															</div>\n															<div *ngIf="password.invalid && (password.dirty || password.touched)" class="error-box pl-3">\n																<div *ngIf="password.errors.required">\n																	* Password is required!.\n																</div>\n																<div *ngIf="password.errors?.minlength">\n																	* Minimum password length is 6!.\n																</div>\n															</div>\n														</div>\n													</div>\n												</div>\n\n												<div class="form-group">\n													<div class="row">\n														<div class="col-lg-12 mt-2">\n															<div class="text-left">\n																<p>\n																	<input type="checkbox" id="tc-pp" tabindex="8" name="agrement" #agrement="ngModel" ngModel>\n																	<label for="tc-pp" class="control-label">I agree to the</label>\n																	<a class="temporary-password" (click)="funccallmodal(\'23\')">User Agreement</a>\n																	<label for="tc-pp" class="control-label">and</label>\n																	<a class="temporary-password" (click)="funccallmodal(\'24\')">User Privacy Notice.</a>\n																	<label for="tc-pp" class="control-label">for this site.</label>\n																</p>\n															</div>\n														</div>\n													</div>\n												</div>\n												<div class="form-group" *ngIf="register_personal?.user.status == \'fail\'">\n													<div class="alert alert-warning">\n													   <h6 class="m-0">{{register_personal?.user.msg}} Or Log in <strong><a href="#/USR/login" (click)="show_Login()">here</a></strong></h6>\n													</div>\n												</div>\n												<div class="form-group">\n													<button type="submit" class="btn theme-light-btn btnsignin" tabindex="9" (click)="registerpersonalUser(registerfrm)">Register</button>\n												</div>\n											</form>\n										</div>\n										<div class="Optionsfalse d-none">\n											<img class="img-fluid mx-auto mt-4 mb-4" src="assets/images/coming-soon1.png" />\n										</div>\n									</form>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!--================Footer Area =================-->\n        <footer-page></footer-page>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass("glyphicon-remove  glyphicon-menu-hamburger");
    });
});
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

/**
 * Display a nice easy to use multiselect list
 * @Version: 2.4.10
 * @Author: Patrick Springstubbe
 * @Contact: @JediNobleclem
 * @Website: springstubbe.us
 * @Source: https://github.com/nobleclem/jQuery-MultiSelect
 *
 * Usage:
 *     $('select[multiple]').multiselect();
 *     $('select[multiple]').multiselect({ texts: { placeholder: 'Select options' } });
 *     $('select[multiple]').multiselect('reload');
 *     $('select[multiple]').multiselect( 'loadOptions', [{
 *         name   : 'Option Name 1',
 *         value  : 'option-value-1',
 *         checked: false,
 *         attributes : {
 *             custom1: 'value1',
 *             custom2: 'value2'
 *         }
 *     },{
 *         name   : 'Option Name 2',
 *         value  : 'option-value-2',
 *         checked: false,
 *         attributes : {
 *             custom1: 'value1',
 *             custom2: 'value2'
 *         }
 *     }]);
 *
 **/
(function($){
    var defaults = {
        columns: 1,     // how many columns should be use to show options
        search : false, // include option search box

        // search filter options
        searchOptions : {
            delay        : 250,                  // time (in ms) between keystrokes until search happens
            showOptGroups: false,                // show option group titles if no options remaining
            searchText   : true,                 // search within the text
            searchValue  : false,                // search within the value
            onSearch     : function( element ){} // fires on keyup before search on options happens
        },

        // plugin texts
        texts: {
            placeholder    : 'Select options', // text to use in dummy input
            search         : 'Search',         // search input placeholder text
            selectedOptions: ' selected',      // selected suffix text
            selectAll      : 'Select all',     // select all text
            unselectAll    : 'Unselect all',   // unselect all text
            noneSelected   : 'None Selected'   // None selected text
        },

        // general options
        selectAll          : false, // add select all option
        selectGroup        : false, // select entire optgroup
        minHeight          : 200,   // minimum height of option overlay
        maxHeight          : null,  // maximum height of option overlay
        maxWidth           : null,  // maximum width of option overlay (or selector)
        maxPlaceholderWidth: null,  // maximum width of placeholder button
        maxPlaceholderOpts : 10,    // maximum number of placeholder options to show until "# selected" shown instead
        showCheckbox       : true,  // display the checkbox to the user
        checkboxAutoFit    : false,  // auto calc checkbox padding
        optionAttributes   : [],    // attributes to copy to the checkbox from the option element

        // Callbacks
        onLoad        : function( element ){},         // fires at end of list initialization
        onOptionClick : function( element, option ){}, // fires when an option is clicked
        onControlClose: function( element ){},         // fires when the options list is closed
        onSelectAll   : function( element ){},         // fires when (un)select all is clicked

        // @NOTE: these are for future development
        minSelect: false, // minimum number of items that can be selected
        maxSelect: false, // maximum number of items that can be selected
    };

    var msCounter = 1;

    // FOR LEGACY BROWSERS (talking to you IE8)
    if( typeof Array.prototype.map !== 'function' ) {
        Array.prototype.map = function( callback, thisArg ) {
            if( typeof thisArg === 'undefined' ) {
                thisArg = this;
            }

            return $.isArray( thisArg ) ? $.map( thisArg, callback ) : [];
        };
    }
    if( typeof String.prototype.trim !== 'function' ) {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }

    function MultiSelect( element, options )
    {
        this.element           = element;
        this.options           = $.extend( true, {}, defaults, options );
        this.updateSelectAll   = true;
        this.updatePlaceholder = true;

        /* Make sure its a multiselect list */
        if( !$(this.element).attr('multiple') ) {
            throw new Error( '[jQuery-MultiSelect] Select list must be a multiselect list in order to use this plugin' );
        }

        /* Options validation checks */
        if( this.options.search ){
            if( !this.options.searchOptions.searchText && !this.options.searchOptions.searchValue ){
                throw new Error( '[jQuery-MultiSelect] Either searchText or searchValue should be true.' );
            }
        }

        /** BACKWARDS COMPATIBILITY **/
        if( 'placeholder' in this.options ) {
            this.options.texts.placeholder = this.options.placeholder;
            delete this.options.placeholder;
        }
        if( 'default' in this.options.searchOptions ) {
            this.options.texts.search = this.options.searchOptions['default'];
            delete this.options.searchOptions['default'];
        }
        /** END BACKWARDS COMPATIBILITY **/

        // load this instance
        this.load();
    }

    MultiSelect.prototype = {
        /* LOAD CUSTOM MULTISELECT DOM/ACTIONS */
        load: function() {
            var instance = this;

            // make sure this is a select list and not loaded
            if( (instance.element.nodeName != 'SELECT') || $(instance.element).hasClass('jqmsLoaded') ) {
                return true;
            }

            // sanity check so we don't double load on a select element
            $(instance.element).addClass('jqmsLoaded').data( 'plugin_multiselect-instance', instance );

            // add option container
            $(instance.element).after('<div class="ms-options-wrap"><button type="button"><span>None Selected</span></button><div class="ms-options"><ul></ul></div></div>');

            var placeholder = $(instance.element).next('.ms-options-wrap').find('> button:first-child');
            var optionsWrap = $(instance.element).next('.ms-options-wrap').find('> .ms-options');
            var optionsList = optionsWrap.find('> ul');

            // don't show checkbox (add class for css to hide checkboxes)
            if( !instance.options.showCheckbox ) {
                optionsWrap.addClass('hide-checkbox');
            }
            else if( instance.options.checkboxAutoFit ) {
                optionsWrap.addClass('checkbox-autofit');
            }

            // check if list is disabled
            if( $(instance.element).prop( 'disabled' ) ) {
                placeholder.prop( 'disabled', true );
            }

            // set placeholder maxWidth
            if( instance.options.maxPlaceholderWidth ) {
                placeholder.css( 'maxWidth', instance.options.maxPlaceholderWidth );
            }

            // override with user defined maxHeight
            if( instance.options.maxHeight ) {
                var maxHeight = instance.options.maxHeight;
            }
            else {
                // cacl default maxHeight
                var maxHeight = ($(window).height() - optionsWrap.offset().top + $(window).scrollTop() - 20);
            }

            // maxHeight cannot be less than options.minHeight
            maxHeight = maxHeight < instance.options.minHeight ? instance.options.minHeight : maxHeight;

            optionsWrap.css({
                maxWidth : instance.options.maxWidth,
                minHeight: instance.options.minHeight,
                maxHeight: maxHeight,
            });

            // isolate options scroll
            // @source: https://github.com/nobleclem/jQuery-IsolatedScroll
            optionsWrap.bind( 'touchmove mousewheel DOMMouseScroll', function ( e ) {
                if( ($(this).outerHeight() < $(this)[0].scrollHeight) ) {
                    var e0 = e.originalEvent,
                        delta = e0.wheelDelta || -e0.detail;

                    if( ($(this).outerHeight() + $(this)[0].scrollTop) > $(this)[0].scrollHeight ) {
                        e.preventDefault();
                        this.scrollTop += ( delta < 0 ? 1 : -1 );
                    }
                }
            });

            // hide options menus if click happens off of the list placeholder button
            $(document).off('click.ms-hideopts').on('click.ms-hideopts', function( event ){
                if( !$(event.target).closest('.ms-options-wrap').length ) {
                    $('.ms-options-wrap.ms-active > .ms-options').each(function(){
                        $(this).closest('.ms-options-wrap').removeClass('ms-active');

                        var thisInst = $(this).parent().prev('.jqmsLoaded').data('plugin_multiselect-instance');

                        // USER CALLBACK
                        if( typeof thisInst.options.onControlClose == 'function' ) {
                            thisInst.options.onControlClose( thisInst.element );
                        }
                    });
                }
            // hide open option lists if escape key pressed
            }).bind('keydown', function( event ){
                if( (event.keyCode || event.which) == 27 ) { // esc key
                    $(this).trigger('click.ms-hideopts');
                }
            });

            // handle pressing enter|space while tabbing through
            placeholder.bind('keydown', function( event ){
                var code = (event.keyCode || event.which);
                if( (code == 13) || (code == 32) ) { // enter OR space
                    placeholder.trigger( 'mousedown' );
                }
            });

            // disable button action
            placeholder.bind('mousedown',function( event ){
                // ignore if its not a left click
                if( event.which && (event.which != 1) ) {
                    return true;
                }

                // hide other menus before showing this one
                $('.ms-options-wrap.ms-active > .ms-options').each(function(){
                    if( $(this).parent().prev()[0] != optionsWrap.parent().prev()[0] ) {
                        $(this).closest('.ms-options-wrap').removeClass('ms-active');

                        var thisInst = $(this).parent().prev('.jqmsLoaded').data('plugin_multiselect-instance');

                        // USER CALLBACK
                        if( typeof thisInst.options.onControlClose == 'function' ) {
                            thisInst.options.onControlClose( thisInst.element );
                        }
                    }
                });

                // show/hide options
                optionsWrap.closest('.ms-options-wrap').toggleClass('ms-active');

                // recalculate height
                if( optionsWrap.closest('.ms-options-wrap').hasClass('ms-active') ) {
                    optionsWrap.css( 'maxHeight', '' );

                    // override with user defined maxHeight
                    if( instance.options.maxHeight ) {
                        var maxHeight = instance.options.maxHeight;
                    }
                    else {
                        // cacl default maxHeight
                        var maxHeight = ($(window).height() - optionsWrap.offset().top + $(window).scrollTop() - 20);
                    }

                    if( maxHeight ) {
                        // maxHeight cannot be less than options.minHeight
                        maxHeight = maxHeight < instance.options.minHeight ? instance.options.minHeight : maxHeight;

                        optionsWrap.css( 'maxHeight', maxHeight );
                    }
                }
                else if( typeof instance.options.onControlClose == 'function' ) {
                    instance.options.onControlClose( instance.element );
                }
            }).click(function( event ){ event.preventDefault(); });

            // add placeholder copy
            if( instance.options.texts.placeholder ) {
                placeholder.find('span').text( instance.options.texts.placeholder );
            }

            // add search box
            if( instance.options.search ) {
                optionsList.before('<div class="ms-search"><input type="text" value="" placeholder="'+ instance.options.texts.search +'" /></div>');

                var search = optionsWrap.find('.ms-search input');
                search.on('keyup', function(){
                    // ignore keystrokes that don't make a difference
                    if( $(this).data('lastsearch') == $(this).val() ) {
                        return true;
                    }

                    // pause timeout
                    if( $(this).data('searchTimeout') ) {
                        clearTimeout( $(this).data('searchTimeout') );
                    }

                    var thisSearchElem = $(this);

                    $(this).data('searchTimeout', setTimeout(function(){
                        thisSearchElem.data('lastsearch', thisSearchElem.val() );

                        // USER CALLBACK
                        if( typeof instance.options.searchOptions.onSearch == 'function' ) {
                            instance.options.searchOptions.onSearch( instance.element );
                        }

                        // search non optgroup li's
                        var searchString = $.trim( search.val().toLowerCase() );
                        if( searchString ) {
                            optionsList.find('li[data-search-term*="'+ searchString +'"]:not(.optgroup)').removeClass('ms-hidden');
                            optionsList.find('li:not([data-search-term*="'+ searchString +'"], .optgroup)').addClass('ms-hidden');
                        }
                        else {
                            optionsList.find('.ms-hidden').removeClass('ms-hidden');
                        }

                        // show/hide optgroups based on if there are items visible within
                        if( !instance.options.searchOptions.showOptGroups ) {
                            optionsList.find('.optgroup').each(function(){
                                if( $(this).find('li:not(.ms-hidden)').length ) {
                                    $(this).show();
                                }
                                else {
                                    $(this).hide();
                                }
                            });
                        }

                        instance._updateSelectAllText();
                    }, instance.options.searchOptions.delay ));
                });
            }

            // add global select all options
            if( instance.options.selectAll ) {
                optionsList.before('<a   class="ms-selectall global">' + instance.options.texts.selectAll + '</a>');
            }

            // handle select all option
            optionsWrap.on('click', '.ms-selectall', function( event ){
                event.preventDefault();

                instance.updateSelectAll   = false;
                instance.updatePlaceholder = false;

                var select = optionsWrap.parent().prev();

                if( $(this).hasClass('global') ) {
                    // check if any options are not selected if so then select them
                    if( optionsList.find('li:not(.optgroup, .selected, .ms-hidden)').length ) {
                        // get unselected vals, mark as selected, return val list
                        optionsList.find('li:not(.optgroup, .selected, .ms-hidden)').addClass('selected');
                        optionsList.find('li.selected input[type="checkbox"]:not(:disabled)').prop( 'checked', true );
                    }
                    // deselect everything
                    else {
                        optionsList.find('li:not(.optgroup, .ms-hidden).selected').removeClass('selected');
                        optionsList.find('li:not(.optgroup, .ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop( 'checked', false );
                    }
                }
                else if( $(this).closest('li').hasClass('optgroup') ) {
                    var optgroup = $(this).closest('li.optgroup');

                    // check if any selected if so then select them
                    if( optgroup.find('li:not(.selected, .ms-hidden)').length ) {
                        optgroup.find('li:not(.selected, .ms-hidden)').addClass('selected');
                        optgroup.find('li.selected input[type="checkbox"]:not(:disabled)').prop( 'checked', true );
                    }
                    // deselect everything
                    else {
                        optgroup.find('li:not(.ms-hidden).selected').removeClass('selected');
                        optgroup.find('li:not(.ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop( 'checked', false );
                    }
                }

                var vals = [];
                optionsList.find('li.selected input[type="checkbox"]').each(function(){
                    vals.push( $(this).val() );
                });
                select.val( vals ).trigger('change');

                instance.updateSelectAll   = true;
                instance.updatePlaceholder = true;

                // USER CALLBACK
                if( typeof instance.options.onSelectAll == 'function' ) {
                    instance.options.onSelectAll( instance.element );
                }

                instance._updateSelectAllText();
                instance._updatePlaceholderText();
            });

            // add options to wrapper
            var options = [];
            $(instance.element).children().each(function(){
                if( this.nodeName == 'OPTGROUP' ) {
                    var groupOptions = [];

                    $(this).children('option').each(function(){
                        var thisOptionAtts = {};
                        for( var i = 0; i < instance.options.optionAttributes.length; i++ ) {
                            var thisOptAttr = instance.options.optionAttributes[ i ];

                            if( $(this).attr( thisOptAttr ) !== undefined ) {
                                thisOptionAtts[ thisOptAttr ] = $(this).attr( thisOptAttr );
                            }
                        }

                        groupOptions.push({
                            name   : $(this).text(),
                            value  : $(this).val(),
                            checked: $(this).prop( 'selected' ),
                            attributes: thisOptionAtts
                        });
                    });

                    options.push({
                        label  : $(this).attr('label'),
                        options: groupOptions
                    });
                }
                else if( this.nodeName == 'OPTION' ) {
                    var thisOptionAtts = {};
                    for( var i = 0; i < instance.options.optionAttributes.length; i++ ) {
                        var thisOptAttr = instance.options.optionAttributes[ i ];

                        if( $(this).attr( thisOptAttr ) !== undefined ) {
                            thisOptionAtts[ thisOptAttr ] = $(this).attr( thisOptAttr );
                        }
                    }

                    options.push({
                        name      : $(this).text(),
                        value     : $(this).val(),
                        checked   : $(this).prop( 'selected' ),
                        attributes: thisOptionAtts
                    });
                }
                else {
                    // bad option
                    return true;
                }
            });
            instance.loadOptions( options, true, false );

            // update un/select all logic
            instance._updateSelectAllText( false );

            // BIND SELECT ACTION
            optionsWrap.on( 'click', 'input[type="checkbox"]', function(){
                $(this).closest( 'li' ).toggleClass( 'selected' );

                var select = optionsWrap.parent().prev();

                // toggle clicked option
                select.find('option[value="'+ $(this).val() +'"]').prop(
                    'selected', $(this).is(':checked')
                ).closest('select').trigger('change');

                // USER CALLBACK
                if( typeof instance.options.onOptionClick == 'function' ) {
                    instance.options.onOptionClick(instance.element, this);
                }

                instance._updateSelectAllText();
                instance._updatePlaceholderText();
            });

            // BIND FOCUS EVENT
            optionsWrap.on('focusin', 'input[type="checkbox"]', function(){
                $(this).closest('label').addClass('focused');
            }).on('focusout', 'input[type="checkbox"]', function(){
                $(this).closest('label').removeClass('focused');
            });

            // USER CALLBACK
            if( typeof instance.options.onLoad === 'function' ) {
                instance.options.onLoad( instance.element );
            }

            // hide native select list
            $(instance.element).hide();
        },

        /* LOAD SELECT OPTIONS */
        loadOptions: function( options, overwrite, updateSelect ) {
            overwrite    = (typeof overwrite == 'boolean') ? overwrite : true;
            updateSelect = (typeof updateSelect == 'boolean') ? updateSelect : true;

            var instance    = this;
            var optionsList = $(instance.element).next('.ms-options-wrap').find('> .ms-options > ul');
            var optionsWrap = $(instance.element).next('.ms-options-wrap').find('> .ms-options');
            var select      = optionsWrap.parent().prev();

            if( overwrite ) {
                optionsList.find('> li').remove();

                if( updateSelect ) {
                    select.find('> *').remove();
                }
            }

            var containers = [];
            for( var key in options ) {
                // Prevent prototype methods injected into options from being iterated over.
                if( !options.hasOwnProperty( key ) ) {
                    continue;
                }

                var thisOption      = options[ key ];
                var container       = $('<li/>');
                var appendContainer = true;

                // OPTION
                if( thisOption.hasOwnProperty('value') ) {
                    if( instance.options.showCheckbox && instance.options.checkboxAutoFit ) {
                        container.addClass('ms-reflow');
                    }

                    // add option to ms dropdown
                    instance._addOption( container, thisOption );

                    if( updateSelect ) {
                        var selOption = $('<option value="'+ thisOption.value +'">'+ thisOption.name +'</option>');

                        // add custom user attributes
                        if( thisOption.hasOwnProperty('attributes') && Object.keys( thisOption.attributes ).length ) {
                            selOption.attr( thisOption.attributes );
                        }

                        // mark option as selected
                        if( thisOption.checked ) {
                            selOption.prop( 'selected', true );
                        }

                        select.append( selOption );
                    }
                }
                // OPTGROUP
                else if( thisOption.hasOwnProperty('options') ) {
                    var optGroup = $('<optgroup label="'+ thisOption.label +'"></optgroup>');

                    optionsList.find('> li.optgroup > span.label').each(function(){
                        if( $(this).text() == thisOption.label ) {
                            container       = $(this).closest('.optgroup');
                            appendContainer = false;
                        }
                    });

                    // prepare to append optgroup to select element
                    if( updateSelect ) {
                        if( select.find('optgroup[label="'+ thisOption.label +'"]').length ) {
                            optGroup = select.find('optgroup[label="'+ thisOption.label +'"]');
                        }
                        else {
                            select.append( optGroup );
                        }
                    }

                    // setup container
                    if( appendContainer ) {
                        container.addClass('optgroup');
                        container.append('<span class="label">'+ thisOption.label +'</span>');
                        container.find('> .label').css({
                            clear: 'both'
                        });

                        // add select all link
                        if( instance.options.selectGroup ) {
                            container.append('<a   class="ms-selectall">' + instance.options.texts.selectAll + '</a>');
                        }

                        container.append('<ul/>');
                    }

                    for( var gKey in thisOption.options ) {
                        // Prevent prototype methods injected into options from
                        // being iterated over.
                        if( !thisOption.options.hasOwnProperty( gKey ) ) {
                            continue;
                        }

                        var thisGOption = thisOption.options[ gKey ];
                        var gContainer  = $('<li/>');
                        if( instance.options.showCheckbox && instance.options.checkboxAutoFit ) {
                            gContainer.addClass('ms-reflow');
                        }

                        // no clue what this is we hit (skip)
                        if( !thisGOption.hasOwnProperty('value') ) {
                            continue;
                        }

                        instance._addOption( gContainer, thisGOption );

                        container.find('> ul').append( gContainer );

                        // add option to optgroup in select element
                        if( updateSelect ) {
                            var selOption = $('<option value="'+ thisGOption.value +'">'+ thisGOption.name +'</option>');

                            // add custom user attributes
                            if( thisGOption.hasOwnProperty('attributes') && Object.keys( thisGOption.attributes ).length ) {
                                selOption.attr( thisGOption.attributes );
                            }

                            // mark option as selected
                            if( thisGOption.checked ) {
                                selOption.prop( 'selected', true );
                            }

                            optGroup.append( selOption );
                        }
                    }
                }
                else {
                    // no clue what this is we hit (skip)
                    continue;
                }

                if( appendContainer ) {
                    containers.push( container );
                }
            }
            optionsList.append( containers );

            // pad out label for room for the checkbox
            if( instance.options.checkboxAutoFit && instance.options.showCheckbox && !optionsWrap.hasClass('hide-checkbox') ) {
                var chkbx = optionsList.find('.ms-reflow:eq(0) input[type="checkbox"]');
                if( chkbx.length ) {
                    var checkboxWidth = chkbx.outerWidth();
                        checkboxWidth = checkboxWidth ? checkboxWidth : 15;

                    optionsList.find('.ms-reflow label').css(
                        'padding-left',
                        (parseInt( chkbx.closest('label').css('padding-left') ) * 2) + checkboxWidth
                    );

                    optionsList.find('.ms-reflow').removeClass('ms-reflow');
                }
            }

            // update placeholder text
            instance._updatePlaceholderText();

            // RESET COLUMN STYLES
            optionsWrap.find('ul').css({
                'column-count'        : '',
                'column-gap'          : '',
                '-webkit-column-count': '',
                '-webkit-column-gap'  : '',
                '-moz-column-count'   : '',
                '-moz-column-gap'     : ''
            });

            // COLUMNIZE
            if( select.find('optgroup').length ) {
                // float non grouped options
                optionsList.find('> li:not(.optgroup)').css({
                    'float': 'left',
                    width: (100 / instance.options.columns) +'%'
                });

                // add CSS3 column styles
                optionsList.find('li.optgroup').css({
                    clear: 'both'
                }).find('> ul').css({
                    'column-count'        : instance.options.columns,
                    'column-gap'          : 0,
                    '-webkit-column-count': instance.options.columns,
                    '-webkit-column-gap'  : 0,
                    '-moz-column-count'   : instance.options.columns,
                    '-moz-column-gap'     : 0
                });

                // for crappy IE versions float grouped options
                if( this._ieVersion() && (this._ieVersion() < 10) ) {
                    optionsList.find('li.optgroup > ul > li').css({
                        'float': 'left',
                        width: (100 / instance.options.columns) +'%'
                    });
                }
            }
            else {
                // add CSS3 column styles
                optionsList.css({
                    'column-count'        : instance.options.columns,
                    'column-gap'          : 0,
                    '-webkit-column-count': instance.options.columns,
                    '-webkit-column-gap'  : 0,
                    '-moz-column-count'   : instance.options.columns,
                    '-moz-column-gap'     : 0
                });

                // for crappy IE versions float grouped options
                if( this._ieVersion() && (this._ieVersion() < 10) ) {
                    optionsList.find('> li').css({
                        'float': 'left',
                        width: (100 / instance.options.columns) +'%'
                    });
                }
            }
        },

        /* UPDATE MULTISELECT CONFIG OPTIONS */
        settings: function( options ) {
            this.options = $.extend( true, {}, this.options, options );
            this.reload();
        },

        /* RESET THE DOM */
        unload: function() {
            $(this.element).next('.ms-options-wrap').remove();
            $(this.element).show(function(){
                $(this).css('display','').removeClass('jqmsLoaded');
            });
        },

        /* RELOAD JQ MULTISELECT LIST */
        reload: function() {
            // remove existing options
            $(this.element).next('.ms-options-wrap').remove();
            $(this.element).removeClass('jqmsLoaded');

            // load element
            this.load();
        },

        // RESET BACK TO DEFAULT VALUES & RELOAD
        reset: function() {
            var defaultVals = [];
            $(this.element).find('option').each(function(){
                if( $(this).prop('defaultSelected') ) {
                    defaultVals.push( $(this).val() );
                }
            });

            $(this.element).val( defaultVals );

            this.reload();
        },

        disable: function( status ) {
            status = (typeof status === 'boolean') ? status : true;
            $(this.element).prop( 'disabled', status );
            $(this.element).next('.ms-options-wrap').find('button:first-child')
                .prop( 'disabled', status );
        },

        /** PRIVATE FUNCTIONS **/
        // update the un/select all texts based on selected options and visibility
        _updateSelectAllText: function( visibleOnly ){
            if( !this.updateSelectAll ) {
                return;
            }

            if( typeof visibleOnly !== 'boolean' ) {
                visibleOnly = true;
            }

            var instance = this;

            // select all not used at all so just do nothing
            if( !instance.options.selectAll && !instance.options.selectGroup ) {
                return;
            }

            var optionsWrap = $(instance.element).next('.ms-options-wrap').find('> .ms-options');

            // update un/select all text
            optionsWrap.find('.ms-selectall').each(function(){
                var unselected = $(this).parent().find('li:not(.optgroup,.selected,.ms-hidden)');

                $(this).text(
                    unselected.length ? instance.options.texts.selectAll : instance.options.texts.unselectAll
                );
            });
        },

        // update selected placeholder text
        _updatePlaceholderText: function(){
            if( !this.updatePlaceholder ) {
                return;
            }

            var instance       = this;
            var placeholder    = $(instance.element).next('.ms-options-wrap').find('> button:first-child');
            var placeholderTxt = placeholder.find('span');
            var optionsWrap    = $(instance.element).next('.ms-options-wrap').find('> .ms-options');
            var select         = optionsWrap.parent().prev();
            var selectVals     = select.val() ? select.val() : [];

            // if there are disabled options get those values as well
            if( select.find('option:selected:disabled').length ) {
                selectVals = [];
                select.find('option:selected').each(function(){
                    selectVals.push( $(this).val() );
                });
            }

            // get selected options
            var selOpts = [];
            for( var key in selectVals ) {
                selOpts.push(
                    $.trim( select.find('option[value="'+ selectVals[ key ] +'"]').text() )
                );

                if( selOpts.length >= instance.options.maxPlaceholderOpts ) {
                    break;
                }
            }

            // UPDATE PLACEHOLDER TEXT WITH OPTIONS SELECTED
            placeholderTxt.text( selOpts.join( ', ' ) );

            if( selOpts.length ) {
                optionsWrap.closest('.ms-options-wrap').addClass('ms-has-selections');
            }
            else {
                optionsWrap.closest('.ms-options-wrap').removeClass('ms-has-selections');
            }

            // replace placeholder text
            if( !selOpts.length ) {
                placeholderTxt.text( instance.options.texts.placeholder );
            }
            // if copy is larger than button width use "# selected"
            else if( (placeholderTxt.width() > placeholder.width()) || (selOpts.length != selectVals.length) ) {
                placeholderTxt.text( select.val().length + instance.options.texts.selectedOptions );
            }
        },

        // Add option to the custom dom list
        _addOption: function( container, option ) {
            var instance = this;
            var thisOption = $('<label/>', {
                for : 'ms-opt-'+ msCounter,
                text: option.name
            });

            var thisCheckbox = $('<input>', {
                type : 'checkbox',
                title: option.name,
                id   : 'ms-opt-'+ msCounter,
                value: option.value
            });

            // add user defined attributes
            if( option.hasOwnProperty('attributes') && Object.keys( option.attributes ).length ) {
                thisCheckbox.attr( option.attributes );
            }

            if( option.checked ) {
                container.addClass('default selected');
                thisCheckbox.prop( 'checked', true );
            }

            thisOption.prepend( thisCheckbox );

            var searchTerm = '';
            if( instance.options.searchOptions.searchText ) {
                searchTerm += ' ' + option.name.toLowerCase();
            }
            if( instance.options.searchOptions.searchValue ) {
                searchTerm += ' ' + option.value.toLowerCase();
            }

            container.attr( 'data-search-term', $.trim( searchTerm ) ).prepend( thisOption );

            msCounter = msCounter + 1;
        },

        // check ie version
        _ieVersion: function() {
            var myNav = navigator.userAgent.toLowerCase();
            return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
        }
    };

    // ENABLE JQUERY PLUGIN FUNCTION
    $.fn.multiselect = function( options ){
        if( !this.length ) {
            return;
        }

        var args = arguments;
        var ret;

        // menuize each list
        if( (options === undefined) || (typeof options === 'object') ) {
            return this.each(function(){
                if( !$.data( this, 'plugin_multiselect' ) ) {
                    $.data( this, 'plugin_multiselect', new MultiSelect( this, options ) );
                }
            });
        } else if( (typeof options === 'string') && (options[0] !== '_') && (options !== 'init') ) {
            this.each(function(){
                var instance = $.data( this, 'plugin_multiselect' );

                if( instance instanceof MultiSelect && typeof instance[ options ] === 'function' ) {
                    ret = instance[ options ].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }

                // special destruct handler
                if( options === 'unload' ) {
                    $.data( this, 'plugin_multiselect', null );
                }
            });

            return ret;
        }
    };
}(jQuery));


/***/ }),

/***/ 831:
/***/ (function(module, exports) {

/*
 * flogin.js
 * stupidly simple facebook login as a jQuery plugin
 *
 * Gary Rafferty - 2013
 */
(function($) {
  $.fn.facebook_login = function(options) {
    var defaults = {
      endpoint: '/sessions/new',
      permissions: 'email',
      onSuccess: function(data) { console.log([200,'OK']); },
      onError: function(data) { console.log([500,'Error']); }
    };

    var settings = $.extend({}, defaults, options);

    if(settings.appId === 'undefined') {
      console.log('You must set the appId');
      return false;
    }

    (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/all.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function() {
      FB.init({
        appId: settings.appId,
        status: true,
        xfbml: true
      });
    };

    this.bind('click', function() {
      FB.login(function(r) {
        var response;
        if(response = r.authResponse) {
          var user_id = response.userID;
          var token   = response.accessToken;

          FB.api('/me?access_token='+token, function(user) {
            $.ajax({
              url: settings.endpoint,
              data: {user_id: user_id,token: token,email: user.email},
              type: 'POST',
              async: false,
            }).done(settings.onSuccess());
          });
        } else {
          settings.onError();
        }
      }, {scope: settings.permissions});

      return false; 
    });
  }
})(jQuery);

/***/ })

});
//# sourceMappingURL=22.js.map