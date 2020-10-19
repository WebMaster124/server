webpackJsonp([34],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddedSellerInfoPageModule", function() { return AddedSellerInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__added_seller_info__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_intl_phone__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_geoautocomplete__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AddedSellerInfoPageModule = /** @class */ (function () {
    function AddedSellerInfoPageModule() {
    }
    AddedSellerInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__added_seller_info__["a" /* AddedSellerInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__added_seller_info__["a" /* AddedSellerInfoPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng4_intl_phone__["a" /* InternationalPhoneModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng4_geoautocomplete__["a" /* Ng4GeoautocompleteModule */]
            ],
        })
    ], AddedSellerInfoPageModule);
    return AddedSellerInfoPageModule;
}());

//# sourceMappingURL=added-seller-info.module.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddedSellerInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
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
 * Generated class for the AddedSellerInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddedSellerInfoPage = /** @class */ (function () {
    function AddedSellerInfoPage(googleanalytics, alertCtrl, plt, modalCtrl, fb, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.register_paypal = false;
        this.verificationResponsepersonal = null;
        this.verificationResponsebusiness = null;
        this.userSettings = {
            showCurrentLocation: true,
            showSearchButton: false,
            useGoogleGeoApi: true,
            locationIconUrl: "assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
            geoCountryRestriction: ['ae', 'kw', 'om', 'qa', 'sa']
        };
        this.business_Details = fb.group({
            'business_name': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])],
            'business_address': '',
            'business_relationship': '',
            'business_type': '',
            'payment_opt': '',
            'business_mobile': ['+971', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(10)])],
            'company_number': '',
            'vat_number': '',
            'payment_email': '',
            'email': '',
            'role': 'seller',
            'user_id': '',
            'interested_in': '',
            'agrement': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'account_type': 'business_account'
        });
        this.personal_Details = fb.group({
            'business_name': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])],
            'payment_opt': '',
            'business_mobile': ['+971', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(10)])],
            'payment_email': '',
            'email': '',
            'role': 'seller',
            'natinality': '',
            'user_id': '',
            'interested_in': '',
            'agrement': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'account_type': 'personal_account'
        });
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('AddsellerInfo');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
            this.userSettings.showCurrentLocation = false;
        }
    }
    AddedSellerInfoPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('addSellerInfo body');
        $(document).prop('title', 'Register - More details');
        $(".zoomContainer").remove();
        var d = new Date();
        this.showYear = d.getFullYear();
        this.personal_Details.controls['business_name'].setValue(this.localItem.first_name + ' ' + this.localItem.last_name);
        this.personal_Details.controls['email'].setValue(this.localItem.email);
        this.personal_Details.controls['natinality'].setValue(this.localItem.natinality);
        if (this.localItem.account_type == "business_account")
            this.business_Details.controls['business_name'].setValue(this.localItem.business_name);
        this.business_Details.controls['email'].setValue(this.localItem.email);
        this.showCategory();
    };
    AddedSellerInfoPage.prototype.ngAfterViewInit = function () {
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
    AddedSellerInfoPage.prototype.autoCompleteCallback1 = function (selectedData) {
        if (selectedData.response == true) {
            this.business_Details.controls['business_address'].setValue(selectedData.data.description);
        }
    };
    AddedSellerInfoPage.prototype.showCategory = function () {
        var _this = this;
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/category/view-category', '', function (response) {
            _this.showCatData = response.categories;
            _this.infoService.hideLoading();
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    AddedSellerInfoPage.prototype.changeInput = function (val) {
        if (val == "interest") {
            if ($('#interest').prop('checked') == true) {
                this.interest = true;
            }
            else {
                this.interest = false;
            }
        }
        else if (val == "payment") {
            if ($('#payment_opt').prop('checked') == true) {
                this.register_paypal = true;
            }
            else {
                this.register_paypal = false;
            }
        }
    };
    AddedSellerInfoPage.prototype.registerBusiness = function (val) {
        var _this = this;
        if ($('input[name="payment_opt"]:checked').length == 0) {
            $('.paymentselect').removeClass('d-none');
            return;
        }
        var val_payment = [];
        $('input[type=checkbox][name=payment_opt]:checked').each(function (i) {
            val_payment[i] = $(this).val();
        });
        if ($('#payment_opt').prop('checked') == true) {
            if (val.value.payment_email == "") {
                var alert1 = this.alertCtrl.create({
                    title: 'PayPal email',
                    subTitle: 'Please enter paypal email address.',
                    buttons: [{
                            text: 'OK',
                            role: 'cancel',
                            cssClass: 'alert-button-changeColor'
                        }]
                });
                alert1.present();
                return;
            }
        }
        val.value.payment_opt = val_payment.join(",");
        val.value.user_id = this.localItem.id;
        if ($('#payment_opt').prop('checked') == true) {
            if (this.verificationResponsebusiness == null || this.verificationResponsebusiness.responseEnvelope.ack == 'Failure') {
            }
            else {
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/convert-buyer-to-seller', val.value, function (response) {
                    if (response.users.status == "success") {
                        var persons = _this.localItem;
                        persons.business_name = val.value.business_name;
                        persons.business_relationship = val.value.business_relationship;
                        persons.company_number = val.value.company_number;
                        persons.payment_email = val.value.payment_email;
                        persons.vat_number = val.value.vat_number;
                        persons.business_mobile = val.value.business_mobile;
                        persons.role = 'seller';
                        localStorage.setItem('userInfo', JSON.stringify(persons));
                        __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                        _this.infoService.hideLoading();
                        _this.navCtrl.push('DraftListingPage');
                    }
                    else {
                        _this.infoService.hideLoading();
                        _this.sellerInfo = response;
                    }
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
        }
        else {
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/convert-buyer-to-seller', val.value, function (response) {
                if (response.users.status == "success") {
                    var persons = _this.localItem;
                    persons.business_name = val.value.business_name;
                    persons.business_relationship = val.value.business_relationship;
                    persons.company_number = val.value.company_number;
                    persons.payment_email = val.value.payment_email;
                    persons.vat_number = val.value.vat_number;
                    persons.business_mobile = val.value.business_mobile;
                    persons.role = 'seller';
                    localStorage.setItem('userInfo', JSON.stringify(persons));
                    __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                    _this.infoService.hideLoading();
                    _this.navCtrl.push('DraftListingPage');
                }
                else {
                    _this.infoService.hideLoading();
                    _this.sellerInfo = response;
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    AddedSellerInfoPage.prototype.registerPersonal = function (val) {
        var _this = this;
        if ($('input[name="payment_opt"]:checked').length == 0) {
            $('.paymentselect').removeClass('d-none');
            return;
        }
        var val_payment = [];
        $('input[type=checkbox][name=payment_opt]:checked').each(function (i) {
            val_payment[i] = $(this).val();
        });
        if ($('#payment_opt').prop('checked') == true) {
            if (val.value.payment_email == "") {
                var alert1 = this.alertCtrl.create({
                    title: 'PayPal email',
                    subTitle: 'Please enter paypal email address.',
                    buttons: [{
                            text: 'OK',
                            role: 'cancel',
                            cssClass: 'alert-button-changeColor'
                        }]
                });
                alert1.present();
                return;
            }
        }
        val.value.payment_opt = val_payment.join(",");
        val.value.user_id = this.localItem.id;
        if ($('#payment_opt').prop('checked') == true) {
            if (this.verificationResponsepersonal == null || this.verificationResponsepersonal.responseEnvelope.ack == 'Failure') {
            }
            else {
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/convert-buyer-to-seller', val.value, function (response) {
                    if (response.users.status == "success") {
                        var persons = _this.localItem;
                        persons.business_name = val.value.business_name;
                        persons.payment_email = val.value.payment_email;
                        persons.business_mobile = val.value.business_mobile;
                        persons.natinality = val.value.natinality;
                        persons.email = val.value.email;
                        persons.role = 'seller';
                        localStorage.setItem('userInfo', JSON.stringify(persons));
                        __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                        _this.infoService.hideLoading();
                        _this.navCtrl.push('DraftListingPage');
                    }
                    else {
                        _this.infoService.hideLoading();
                        _this.sellerInfo = response;
                    }
                }, function (error) {
                    console.log(error);
                    _this.infoService.hideLoading();
                });
            }
        }
        else {
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/user/convert-buyer-to-seller', val.value, function (response) {
                if (response.users.status == "success") {
                    var persons = _this.localItem;
                    persons.business_name = val.value.business_name;
                    persons.payment_email = val.value.payment_email;
                    persons.business_mobile = val.value.business_mobile;
                    persons.natinality = val.value.natinality;
                    persons.email = val.value.email;
                    persons.role = 'seller';
                    localStorage.setItem('userInfo', JSON.stringify(persons));
                    __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem = persons;
                    _this.infoService.hideLoading();
                    _this.navCtrl.push('DraftListingPage');
                }
                else {
                    _this.infoService.hideLoading();
                    _this.sellerInfo = response;
                }
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    AddedSellerInfoPage.prototype.checkPaypalEmail = function (val, val_role) {
        var _this = this;
        if (val_role == "personal") {
            var pass_datapersonal = {
                paypal_email: val
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/pay/verify-paypal-email', pass_datapersonal, function (response) {
                _this.verificationResponsepersonal = response;
                _this.infoService.hideLoading();
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
        else {
            var pass_dataBusiness = {
                paypal_email: val
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/pay/verify-paypal-email', pass_dataBusiness, function (response) {
                _this.verificationResponsebusiness = response;
                _this.infoService.hideLoading();
            }, function (error) {
                console.log(error);
                _this.infoService.hideLoading();
            });
        }
    };
    AddedSellerInfoPage.prototype.funccallmodal = function (val) {
        var passData = {
            id: val
        };
        var modalPage;
        modalPage = this.modalCtrl.create('SellerAgreementPage', passData);
        modalPage.present();
    };
    AddedSellerInfoPage.prototype.switchAccount = function (val) {
        this.localItem.account_type = val;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], AddedSellerInfoPage.prototype, "content", void 0);
    AddedSellerInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-added-seller-info',template:/*ion-inline-start:"/var/www/html/src/pages/product/added-seller-info/added-seller-info.html"*/'<ion-content padding >\n    <div class="login">\n        <div class="wrapper">\n            <div class="container">\n                <div class="row setFont">\n                    <div class="col-lg-12 col-md-12 col-xl-12 col-12">\n                        <p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n						<p class="mb-2">\n                            <a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n                            <a class="breadcrumblink font-weight-bold" disabled>Business-Info</a></p>\n                    </div>\n                </div>\n                <div class="row loginregister pt-lg-1 pt-md-1 mb-1">\n                    <div class="col-lg-5 col-md-10 col-12">\n                        <div class="panel panel-login">\n                            <div class="panel-body">\n                                <div class="row">\n                                    <div class="col-lg-12 col-12 col-md-12">\n                                        <div class="form-group business-title pb-3">\n                                            <span>Please tell us about <span *ngIf="localItem?.account_type == \'personal_account\'">yourself</span> <span *ngIf="localItem?.account_type == \'business_account\'">your business</span></span>\n                                        </div>\n                                        <div *ngIf="localItem?.account_type == \'personal_account\'">\n                                            <div class="form-group text-center">\n                                                <button class="btn btn-warning btnsignin mb-3 switchAccount" type="submit" (click)="switchAccount(\'business_account\')" >Switch To Business Account</button>\n                                            </div>\n                                            <form id="personal-details" [formGroup]="personal_Details" role="form" style="display: block;" class="mt-3">\n                                                <div class="form-group">\n                                                    <input type="text" name="business_name" tabindex="1" class="form-control" placeholder="Full name *" [formControl]="personal_Details.controls[\'business_name\']" [ngClass]="{\'error-border\':!personal_Details.controls[\'business_name\'].valid}">\n                                                    <div class="error-box" *ngIf="personal_Details.controls[\'business_name\'].hasError(\'required\') && personal_Details.controls[\'business_name\'].touched">* Full name!</div>\n                                                    <div class="error-box" *ngIf="personal_Details.controls[\'business_name\'].hasError(\'minlength\') && personal_Details.controls[\'business_name\'].touched">* Minimum length is 3!</div>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <input type="email" name="email" tabindex="2" class="form-control" placeholder="Enter personal email" [formControl]="personal_Details.controls[\'email\']" >\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <select id="inputCountry" tabindex="3" class="form-control" [formControl]="personal_Details.controls[\'natinality\']">\n                                                        <option value="Afghanistan">Afghanistan</option>\n                                                        <option value="Albania">Albania</option>\n                                                        <option value="Algeria">Algeria</option>\n                                                        <option value="American Samoa">American Samoa</option>\n                                                        <option value="Andorra">Andorra</option>\n                                                        <option value="Angola">Angola</option>\n                                                        <option value="Anguilla">Anguilla</option>\n                                                        <option value="Antartica">Antarctica</option>\n                                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>\n                                                        <option value="Argentina">Argentina</option>\n                                                        <option value="Armenia">Armenia</option>\n                                                        <option value="Aruba">Aruba</option>\n                                                        <option value="Australia">Australia</option>\n                                                        <option value="Austria">Austria</option>\n                                                        <option value="Azerbaijan">Azerbaijan</option>\n                                                        <option value="Bahamas">Bahamas</option>\n                                                        <option value="Bahrain">Bahrain</option>\n                                                        <option value="Bangladesh">Bangladesh</option>\n                                                        <option value="Barbados">Barbados</option>\n                                                        <option value="Belarus">Belarus</option>\n                                                        <option value="Belgium">Belgium</option>\n                                                        <option value="Belize">Belize</option>\n                                                        <option value="Benin">Benin</option>\n                                                        <option value="Bermuda">Bermuda</option>\n                                                        <option value="Bhutan">Bhutan</option>\n                                                        <option value="Bolivia">Bolivia</option>\n                                                        <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>\n                                                        <option value="Botswana">Botswana</option>\n                                                        <option value="Bouvet Island">Bouvet Island</option>\n                                                        <option value="Brazil">Brazil</option>\n                                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>\n                                                        <option value="Brunei Darussalam">Brunei Darussalam</option>\n                                                        <option value="Bulgaria">Bulgaria</option>\n                                                        <option value="Burkina Faso">Burkina Faso</option>\n                                                        <option value="Burundi">Burundi</option>\n                                                        <option value="Cambodia">Cambodia</option>\n                                                        <option value="Cameroon">Cameroon</option>\n                                                        <option value="Canada">Canada</option>\n                                                        <option value="Cape Verde">Cape Verde</option>\n                                                        <option value="Cayman Islands">Cayman Islands</option>\n                                                        <option value="Central African Republic">Central African Republic</option>\n                                                        <option value="Chad">Chad</option>\n                                                        <option value="Chile">Chile</option>\n                                                        <option value="China">China</option>\n                                                        <option value="Christmas Island">Christmas Island</option>\n                                                        <option value="Cocos Islands">Cocos (Keeling) Islands</option>\n                                                        <option value="Colombia">Colombia</option>\n                                                        <option value="Comoros">Comoros</option>\n                                                        <option value="Congo">Congo</option>\n                                                        <option value="Congo">Congo, the Democratic Republic of the</option>\n                                                        <option value="Cook Islands">Cook Islands</option>\n                                                        <option value="Costa Rica">Costa Rica</option>\n                                                        <option value="Cota D\'Ivoire">Cote d\'Ivoire</option>\n                                                        <option value="Croatia">Croatia (Hrvatska)</option>\n                                                        <option value="Cuba">Cuba</option>\n                                                        <option value="Cyprus">Cyprus</option>\n                                                        <option value="Czech Republic">Czech Republic</option>\n                                                        <option value="Denmark">Denmark</option>\n                                                        <option value="Djibouti">Djibouti</option>\n                                                        <option value="Dominica">Dominica</option>\n                                                        <option value="Dominican Republic">Dominican Republic</option>\n                                                        <option value="East Timor">East Timor</option>\n                                                        <option value="Ecuador">Ecuador</option>\n                                                        <option value="Egypt">Egypt</option>\n                                                        <option value="El Salvador">El Salvador</option>\n                                                        <option value="Equatorial Guinea">Equatorial Guinea</option>\n                                                        <option value="Eritrea">Eritrea</option>\n                                                        <option value="Estonia">Estonia</option>\n                                                        <option value="Ethiopia">Ethiopia</option>\n                                                        <option value="Falkland Islands">Falkland Islands (Malvinas)</option>\n                                                        <option value="Faroe Islands">Faroe Islands</option>\n                                                        <option value="Fiji">Fiji</option>\n                                                        <option value="Finland">Finland</option>\n                                                        <option value="France">France</option>\n                                                        <option value="France Metropolitan">France, Metropolitan</option>\n                                                        <option value="French Guiana">French Guiana</option>\n                                                        <option value="French Polynesia">French Polynesia</option>\n                                                        <option value="French Southern Territories">French Southern Territories</option>\n                                                        <option value="Gabon">Gabon</option>\n                                                        <option value="Gambia">Gambia</option>\n                                                        <option value="Georgia">Georgia</option>\n                                                        <option value="Germany">Germany</option>\n                                                        <option value="Ghana">Ghana</option>\n                                                        <option value="Gibraltar">Gibraltar</option>\n                                                        <option value="Greece">Greece</option>\n                                                        <option value="Greenland">Greenland</option>\n                                                        <option value="Grenada">Grenada</option>\n                                                        <option value="Guadeloupe">Guadeloupe</option>\n                                                        <option value="Guam">Guam</option>\n                                                        <option value="Guatemala">Guatemala</option>\n                                                        <option value="Guinea">Guinea</option>\n                                                        <option value="Guinea-Bissau">Guinea-Bissau</option>\n                                                        <option value="Guyana">Guyana</option>\n                                                        <option value="Haiti">Haiti</option>\n                                                        <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>\n                                                        <option value="Holy See">Holy See (Vatican City State)</option>\n                                                        <option value="Honduras">Honduras</option>\n                                                        <option value="Hong Kong">Hong Kong</option>\n                                                        <option value="Hungary">Hungary</option>\n                                                        <option value="Iceland">Iceland</option>\n                                                        <option value="India" selected>India</option>\n                                                        <option value="Indonesia">Indonesia</option>\n                                                        <option value="Iran">Iran (Islamic Republic of)</option>\n                                                        <option value="Iraq">Iraq</option>\n                                                        <option value="Ireland">Ireland</option>\n                                                        <option value="Israel">Israel</option>\n                                                        <option value="Italy">Italy</option>\n                                                        <option value="Jamaica">Jamaica</option>\n                                                        <option value="Japan">Japan</option>\n                                                        <option value="Jordan">Jordan</option>\n                                                        <option value="Kazakhstan">Kazakhstan</option>\n                                                        <option value="Kenya">Kenya</option>\n                                                        <option value="Kiribati">Kiribati</option>\n                                                        <option value="Democratic People\'s Republic of Korea">Korea, Democratic People\'s Republic of</option>\n                                                        <option value="Korea">Korea, Republic of</option>\n                                                        <option value="Kuwait">Kuwait</option>\n                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>\n                                                        <option value="Lao">Lao People\'s Democratic Republic</option>\n                                                        <option value="Latvia">Latvia</option>\n                                                        <option value="Lebanon">Lebanon</option>\n                                                        <option value="Lesotho">Lesotho</option>\n                                                        <option value="Liberia">Liberia</option>\n                                                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>\n                                                        <option value="Liechtenstein">Liechtenstein</option>\n                                                        <option value="Lithuania">Lithuania</option>\n                                                        <option value="Luxembourg">Luxembourg</option>\n                                                        <option value="Macau">Macau</option>\n                                                        <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>\n                                                        <option value="Madagascar">Madagascar</option>\n                                                        <option value="Malawi">Malawi</option>\n                                                        <option value="Malaysia">Malaysia</option>\n                                                        <option value="Maldives">Maldives</option>\n                                                        <option value="Mali">Mali</option>\n                                                        <option value="Malta">Malta</option>\n                                                        <option value="Marshall Islands">Marshall Islands</option>\n                                                        <option value="Martinique">Martinique</option>\n                                                        <option value="Mauritania">Mauritania</option>\n                                                        <option value="Mauritius">Mauritius</option>\n                                                        <option value="Mayotte">Mayotte</option>\n                                                        <option value="Mexico">Mexico</option>\n                                                        <option value="Micronesia">Micronesia, Federated States of</option>\n                                                        <option value="Moldova">Moldova, Republic of</option>\n                                                        <option value="Monaco">Monaco</option>\n                                                        <option value="Mongolia">Mongolia</option>\n                                                        <option value="Montserrat">Montserrat</option>\n                                                        <option value="Morocco">Morocco</option>\n                                                        <option value="Mozambique">Mozambique</option>\n                                                        <option value="Myanmar">Myanmar</option>\n                                                        <option value="Namibia">Namibia</option>\n                                                        <option value="Nauru">Nauru</option>\n                                                        <option value="Nepal">Nepal</option>\n                                                        <option value="Netherlands">Netherlands</option>\n                                                        <option value="Netherlands Antilles">Netherlands Antilles</option>\n                                                        <option value="New Caledonia">New Caledonia</option>\n                                                        <option value="New Zealand">New Zealand</option>\n                                                        <option value="Nicaragua">Nicaragua</option>\n                                                        <option value="Niger">Niger</option>\n                                                        <option value="Nigeria">Nigeria</option>\n                                                        <option value="Niue">Niue</option>\n                                                        <option value="Norfolk Island">Norfolk Island</option>\n                                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>\n                                                        <option value="Norway">Norway</option>\n                                                        <option value="Oman">Oman</option>\n                                                        <option value="Pakistan">Pakistan</option>\n                                                        <option value="Palau">Palau</option>\n                                                        <option value="Panama">Panama</option>\n                                                        <option value="Papua New Guinea">Papua New Guinea</option>\n                                                        <option value="Paraguay">Paraguay</option>\n                                                        <option value="Peru">Peru</option>\n                                                        <option value="Philippines">Philippines</option>\n                                                        <option value="Pitcairn">Pitcairn</option>\n                                                        <option value="Poland">Poland</option>\n                                                        <option value="Portugal">Portugal</option>\n                                                        <option value="Puerto Rico">Puerto Rico</option>\n                                                        <option value="Qatar">Qatar</option>\n                                                        <option value="Reunion">Reunion</option>\n                                                        <option value="Romania">Romania</option>\n                                                        <option value="Russia">Russian Federation</option>\n                                                        <option value="Rwanda">Rwanda</option>\n                                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>\n                                                        <option value="Saint LUCIA">Saint LUCIA</option>\n                                                        <option value="Saint Vincent">Saint Vincent and the Grenadines</option>\n                                                        <option value="Samoa">Samoa</option>\n                                                        <option value="San Marino">San Marino</option>\n                                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>\n                                                        <option value="Saudi Arabia">Saudi Arabia</option>\n                                                        <option value="Senegal">Senegal</option>\n                                                        <option value="Seychelles">Seychelles</option>\n                                                        <option value="Sierra">Sierra Leone</option>\n                                                        <option value="Singapore">Singapore</option>\n                                                        <option value="Slovakia">Slovakia (Slovak Republic)</option>\n                                                        <option value="Slovenia">Slovenia</option>\n                                                        <option value="Solomon Islands">Solomon Islands</option>\n                                                        <option value="Somalia">Somalia</option>\n                                                        <option value="South Africa">South Africa</option>\n                                                        <option value="South Georgia">South Georgia and the South Sandwich Islands</option>\n                                                        <option value="Span">Spain</option>\n                                                        <option value="SriLanka">Sri Lanka</option>\n                                                        <option value="St. Helena">St. Helena</option>\n                                                        <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>\n                                                        <option value="Sudan">Sudan</option>\n                                                        <option value="Suriname">Suriname</option>\n                                                        <option value="Svalbard">Svalbard and Jan Mayen Islands</option>\n                                                        <option value="Swaziland">Swaziland</option>\n                                                        <option value="Sweden">Sweden</option>\n                                                        <option value="Switzerland">Switzerland</option>\n                                                        <option value="Syria">Syrian Arab Republic</option>\n                                                        <option value="Taiwan">Taiwan, Province of China</option>\n                                                        <option value="Tajikistan">Tajikistan</option>\n                                                        <option value="Tanzania">Tanzania, United Republic of</option>\n                                                        <option value="Thailand">Thailand</option>\n                                                        <option value="Togo">Togo</option>\n                                                        <option value="Tokelau">Tokelau</option>\n                                                        <option value="Tonga">Tonga</option>\n                                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>\n                                                        <option value="Tunisia">Tunisia</option>\n                                                        <option value="Turkey">Turkey</option>\n                                                        <option value="Turkmenistan">Turkmenistan</option>\n                                                        <option value="Turks and Caicos">Turks and Caicos Islands</option>\n                                                        <option value="Tuvalu">Tuvalu</option>\n                                                        <option value="Uganda">Uganda</option>\n                                                        <option value="Ukraine">Ukraine</option>\n                                                        <option value="United Arab Emirates">United Arab Emirates</option>\n                                                        <option value="United Kingdom">United Kingdom</option>\n                                                        <option value="United States">United States</option>\n                                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>\n                                                        <option value="Uruguay">Uruguay</option>\n                                                        <option value="Uzbekistan">Uzbekistan</option>\n                                                        <option value="Vanuatu">Vanuatu</option>\n                                                        <option value="Venezuela">Venezuela</option>\n                                                        <option value="Vietnam">Viet Nam</option>\n                                                        <option value="Virgin Islands (British)">Virgin Islands (British)</option>\n                                                        <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>\n                                                        <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>\n                                                        <option value="Western Sahara">Western Sahara</option>\n                                                        <option value="Yemen">Yemen</option>\n                                                        <option value="Yugoslavia">Yugoslavia</option>\n                                                        <option value="Zambia">Zambia</option>\n                                                        <option value="Zimbabwe">Zimbabwe</option>\n                                                    </select>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <label class="setFont">Phone <span class="text-danger font-weight-bold ">*</span></label>\n													<int-phone-prefix [locale]="\'en\'" tabindex="4" [formControl]="personal_Details.controls[\'business_mobile\']" placeholder="Phone number"></int-phone-prefix>\n													<div class="error-box" *ngIf="personal_Details.controls[\'business_mobile\'].hasError(\'required\') && personal_Details.controls[\'business_mobile\'].touched">* Please enter number!</div>\n                                                    <div class="error-box" *ngIf="personal_Details.controls[\'business_mobile\'].hasError(\'minlength\')">* Minimum length is 10!</div>\n												</div>\n\n                                                <div class="form-group">\n                                                    <label class="setFont">Payment options <span class="text-danger font-weight-bold ">*</span></label>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <input type="checkbox" name="payment_opt" tabindex="5" required id="payment_opt" value="1" (change)="changeInput(\'payment\')">\n                                                    <label class="m-0 setFont">PayPal</label>\n                                                    <input type="checkbox" name="payment_opt" id="payment_cash" value="2" tabindex="6">\n                                                    <label class="m-0 setFont">Cash on deliver</label>\n                                                </div>\n\n                                                <div class="form-group" *ngIf="register_paypal == true">\n                                                    <input type="email" name="payment_email" tabindex="7" id="showpaypalbtn" class="form-control" placeholder="Enter payment email *" [formControl]="personal_Details.controls[\'payment_email\']" (change)="checkPaypalEmail(paypalEmail.value , \'personal\')" #paypalEmail>\n                                                    <span><i class="fa fa-check-circle" style="font-size: 24px;position: relative;color:green;top: 4px;" *ngIf="verificationResponsepersonal?.responseEnvelope.ack == \'Success\'"></i></span>\n                                                    <span><i class="fa fa-close" style="font-size: 24px;position: relative;color:red;top: 4px;" *ngIf="verificationResponsepersonal?.responseEnvelope.ack == \'Failure\'"></i></span>\n                                                    <div class="error-box" *ngIf="verificationResponsepersonal?.responseEnvelope.ack == \'Failure\'">Please enter valid Paypal email address</div>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <input type="checkbox" name="interest" tabindex="8" id="interest" value="1" (change)="changeInput(\'interest\')">\n                                                    <label class="m-0 setFont">Interest (optional)</label>\n                                                </div>\n\n                                                <div class="form-group" *ngIf="interest">\n                                                    <label class="setFont">Select categories</label>\n                                                    <select class="form-control allcategories" tabindex="9" [formControl]="personal_Details.controls[\'interested_in\']" multiple="true">\n                                                        <option value="" selected>-- Select categories --</option>\n                                                        <option *ngFor="let catdata of showCatData?.data" [value]="catdata?.id">{{catdata?.category_name}}</option>\n                                                    </select>\n                                                    <span class="setFont d-lg-block d-none">(Press ctrl button to select multiple categories.)</span>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <div class="error-box" *ngIf="sellerInfo?.users.status == \'fail\'"> {{sellerInfo?.users.msg}}</div>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <div class="row">\n                                                        <div class="col-lg-12 mt-2">\n                                                            <div class="text-left">\n                                                                <p>\n                                                                    <input type="checkbox" id="tc-pp" required  tabindex="10" name="agrement" [formControl]="personal_Details.controls[\'agrement\']" [ngClass]="{\'error-border\':!personal_Details.controls[\'agrement\'].valid}">\n                                                                    <label for="tc-pp" class="control-label">I agree to the</label>\n                                                                    <a class="temporary-password" (click)="funccallmodal(\'25\')">Seller Agreement</a>\n                                                                    <label for="tc-pp" class="control-label">and</label>\n                                                                    <a class="temporary-password" (click)="funccallmodal(\'26\')">Seller Privacy Notice.</a>\n                                                                    <label for="tc-pp" class="control-label">for this site.</label>\n                                                                </p>\n                                                                <div class="error-box" *ngIf="personal_Details.controls[\'agrement\'].hasError(\'required\') && personal_Details.controls[\'agrement\'].touched">* Please check this box if you want to proceed.!</div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n												<div class="form-group">\n                                                    <div class="row">\n                                                        <div class="col-lg-12 mt-2 text-center">\n															<p class="text-danger paymentselect d-none">Please select payment option.</p>\n														</div>\n													</div>\n												</div>\n                                                <div class="form-group">\n                                                    <button class="btn btn-warning btnsignin" type="submit" [disabled]="!personal_Details.valid" (click)="registerPersonal(personal_Details)">Continue</button>\n                                                </div>\n                                            </form>\n                                        </div>\n                                        <div *ngIf="localItem?.account_type == \'business_account\'">\n                                            <div class="form-group text-center">\n                                                <button (click)="switchAccount(\'personal_account\')" class="switchAccount btn btn-warning btnsignin mb-2" type="submit">Switch To Personal Account</button>\n                                            </div>\n                                            <form id="business-details" [formGroup]="business_Details" role="form" style="display: block;" class="mt-3">\n                                                <div class="form-group">\n                                                    <input type="text" name="business_name" tabindex="1" class="form-control" placeholder="Business name*" [formControl]="business_Details.controls[\'business_name\']" [ngClass]="{\'error-border\':!business_Details.controls[\'business_name\'].valid}">\n                                                    <div class="error-box" *ngIf="business_Details.controls[\'business_name\'].hasError(\'required\') && business_Details.controls[\'business_name\'].touched">* Business name is required!</div>\n                                                    <div class="error-box" *ngIf="business_Details.controls[\'business_name\'].hasError(\'minlength\') && business_Details.controls[\'business_name\'].touched">* Minimum length is 3!</div>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <!--<textarea class="form-control" rows="3" tabindex="2" id="business_address" name="business_address" placeholder="Business Address *" required [formControl]="business_Details.controls[\'business_address\']" [ngClass]="{\'error-border\':!business_Details.controls[\'business_address\'].valid}"></textarea>-->\n													<ng4geo-autocomplete [userSettings]="userSettings" (componentCallback)="autoCompleteCallback1($event)"></ng4geo-autocomplete>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <label class="setFont">Type of businesses <span class="text-danger font-weight-bold ">*</span></label>\n                                                    <select class="form-control allcategories" tabindex="3" [formControl]="business_Details.controls[\'business_type\']" required #type_business>\n                                                        <option value="" selected> --Select type of business -- </option>\n                                                        <option value="Sole trader">Sole trader</option>\n                                                        <option value="Limited Liability">Limited Liability</option>\n                                                        <option value="Charity">Charity</option>\n                                                        <option value="Freezone">Freezone</option>\n                                                        <option value="Other">Other</option>\n                                                    </select>\n                                                    <div class="error-box" *ngIf="business_Details.controls[\'business_type\'].hasError(\'required\') && business_Details.controls[\'business_type\'].touched">* Select business yype!</div>\n                                                </div>\n\n                                                <div class="form-group" *ngIf="type_business.value == \'Other\'">\n                                                    <input type="text" name="business_type" tabindex="4" class="form-control" placeholder="Enter Business Type *" [formControl]="business_Details.controls[\'business_type\']" required>\n                                                    <div class="error-box" *ngIf="business_Details.controls[\'business_type\'].hasError(\'required\') && business_Details.controls[\'business_type\'].touched">* Enter business type!</div>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <label class="setFont">Select business relationship</label>\n                                                    <select class="form-control allcategories" tabindex="5" [formControl]="business_Details.controls[\'business_relationship\']" #business_relationship>\n                                                        <option value="" selected>-- Reletionship to business --</option>\n                                                        <option value="owner">Owner</option>\n                                                        <option value="Manager">Manager</option>\n                                                        <option value="Director">Director</option>\n                                                        <option value="Partner">Partner</option>\n                                                        <option value="Approved Seller">Approved Seller</option>\n                                                        <option value="Other">Other</option>\n                                                    </select>\n                                                </div>\n\n                                                <div class="form-group" *ngIf="business_relationship.value == \'Other\'">\n                                                    <input type="text" name="business_relationship" tabindex="6" class="form-control" placeholder="Enter business relationship" [formControl]="business_Details.controls[\'business_relationship\']" required>\n                                                    <div class="error-box" *ngIf="business_Details.controls[\'business_relationship\'].hasError(\'required\') && business_Details.controls[\'business_relationship\'].touched">* Enter business relationship!</div>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <label class="setFont">Phone <span class="text-danger font-weight-bold ">*</span></label>\n													<int-phone-prefix [locale]="\'en\'" tabindex="7" [formControl]="business_Details.controls[\'business_mobile\']" placeholder="Phone number"></int-phone-prefix>\n													<div class="error-box" *ngIf="business_Details.controls[\'business_mobile\'].hasError(\'required\') && business_Details.controls[\'business_mobile\'].touched">* Please enter number!</div>\n													<div class="error-box" *ngIf="business_Details.controls[\'business_mobile\'].hasError(\'minlength\')">* Minimum length is 10!</div>\n											   </div>\n\n                                                <div class="form-group">\n                                                    <input type="email" name="email" tabindex="8" class="form-control" placeholder="Enter Business email" [formControl]="business_Details.controls[\'email\']">\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <label class="setFont">Payment options <span class="text-danger font-weight-bold ">*</span></label>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <input type="checkbox" name="payment_opt" tabindex="9" required id="payment_opt" value="1" (change)="changeInput(\'payment\')">\n                                                    <label class="m-0 setFont">PayPal</label>\n                                                    <input type="checkbox" name="payment_opt" id="payment_cash" value="2" tabindex="10">\n                                                    <label class="m-0 setFont">Cash on deliver</label>\n                                                </div>\n\n                                                <div class="form-group" *ngIf="register_paypal == true">\n                                                    <input type="email" name="payment_email" class="form-control" id="showpaypalbtn" tabindex="11" placeholder="Enter payment email *" [formControl]="business_Details.controls[\'payment_email\']" (change)="checkPaypalEmail(paypalEmail.value , \'business\')" #paypalEmail>\n                                                    <span><i class="fa fa-check-circle" style="font-size: 24px;position: relative;color:green;top: 4px;" *ngIf="verificationResponsebusiness?.responseEnvelope.ack == \'Success\'"></i></span>\n                                                    <span><i class="fa fa-close" style="font-size: 24px;position: relative;color:red;top: 4px;" *ngIf="verificationResponsebusiness?.responseEnvelope.ack == \'Failure\'"></i></span>\n                                                    <div class="error-box" *ngIf="verificationResponsebusiness?.responseEnvelope.ack == \'Failure\'">Please enter valid Paypal email address</div>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <input type="text" name="company_number" tabindex="12" class="form-control" placeholder="Company number" [formControl]="business_Details.controls[\'company_number\']" >\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <input type="text" name="vat_number" tabindex="13" class="form-control" placeholder="VAT number if applicable" [formControl]="business_Details.controls[\'vat_number\']">\n                                                    <span class="setFont d-none d-lg-block">(please note if you are VAT registered a VAT invoice will be generated from the system on your behalf to the buyer showing an inclusive VAT figure on final sales price for your records.)</span>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <input type="checkbox" name="interest" tabindex="14" id="interest" value="1" (change)="changeInput(\'interest\')">\n                                                    <label class="m-0 setFont">Interest (optional)</label>\n                                                </div>\n\n                                                <div class="form-group" *ngIf="interest">\n                                                    <label class="setFont">Select categories</label>\n                                                    <select class="form-control allcategories" tabindex="15" [formControl]="business_Details.controls[\'interested_in\']" multiple="true">\n                                                        <option value="" selected>-- Select categories --</option>\n                                                        <option *ngFor="let catdata of showCatData?.data" [value]="catdata?.id">{{catdata?.category_name}}</option>\n                                                    </select>\n                                                    <span class="setFont">(Press ctrl button to select multiple categories.)</span>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <div class="error-box" *ngIf="sellerInfo?.users.status == \'fail\'"> {{sellerInfo?.users.msg}}</div>\n                                                </div>\n\n                                                <div class="form-group">\n                                                    <div class="row">\n                                                        <div class="col-lg-12 mt-2">\n                                                            <div class="text-left">\n                                                                <p>\n                                                                    <input type="checkbox" id="tc-pp" required  tabindex="16" name="agrement" [formControl]="business_Details.controls[\'agrement\']" [ngClass]="{\'error-border\':!business_Details.controls[\'agrement\'].valid}">\n                                                                    <label for="tc-pp" class="control-label">I agree to the</label>\n                                                                    <a class="temporary-password" (click)="funccallmodal(\'25\')">Seller Agreement</a>\n                                                                    <label for="tc-pp" class="control-label">and</label>\n                                                                    <a class="temporary-password" (click)="funccallmodal(\'26\')">Seller Privacy Notice.</a>\n                                                                    <label for="tc-pp" class="control-label">for this site.</label>\n                                                                </p>\n                                                                <div class="error-box" *ngIf="business_Details.controls[\'agrement\'].hasError(\'required\') && business_Details.controls[\'agrement\'].touched">* Please check this box if you want to proceed.!</div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n												<div class="form-group">\n                                                    <div class="row">\n                                                        <div class="col-lg-12 mt-2 text-center">\n															<p class="text-danger paymentselect d-none">Please select payment option.</p>\n														</div>\n													</div>\n												</div>\n                                                <div class="form-group">\n                                                    <button class="btn btn-warning btnsignin" type="submit" [disabled]="!business_Details.valid" (click)="registerBusiness(business_Details)">Continue</button>\n                                                </div>\n                                            </form>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        	\n		<!--================Footer Area =================-->\n		<footer-page></footer-page>\n    </div>\n</ion-content>'/*ion-inline-end:"/var/www/html/src/pages/product/added-seller-info/added-seller-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AddedSellerInfoPage);
    return AddedSellerInfoPage;
}());

//# sourceMappingURL=added-seller-info.js.map

/***/ })

});
//# sourceMappingURL=34.js.map