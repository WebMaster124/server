webpackJsonp([33],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutPageModule", function() { return CheckOutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_out__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_intl_phone__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_geoautocomplete__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CheckOutPageModule = /** @class */ (function () {
    function CheckOutPageModule() {
    }
    CheckOutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__check_out__["a" /* CheckOutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__check_out__["a" /* CheckOutPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng4_intl_phone__["a" /* InternationalPhoneModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng4_geoautocomplete__["a" /* Ng4GeoautocompleteModule */]
            ],
        })
    ], CheckOutPageModule);
    return CheckOutPageModule;
}());

//# sourceMappingURL=check-out.module.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_analytics__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckOutPage = /** @class */ (function () {
    function CheckOutPage(googleanalytics, iab, alertCtrl, plt, infoService, fb, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.infoService = infoService;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showaddress = false;
        this.notSelect = false;
        this.paymentNotselect = false;
        this.paymentdata;
        this.paymentdetails;
        this.saveAddress = {
            user_id: '',
            ship_name: '',
            mobile: '',
            ship_address: '',
            ship_city: '',
            ship_state: '',
            ship_country: '',
            ship_pincode: '',
            primary_add: 0
        };
        this.sendmsg = false; /*public payPal:PayPal,*/
        this.userSettings = {
            showCurrentLocation: true,
            showSearchButton: false,
            useGoogleGeoApi: true,
            locationIconUrl: "assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
            geoCountryRestriction: ['ae', 'kw', 'om', 'qa', 'sa']
        };
        this.addressfrm = fb.group({
            'first_name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            'last_name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            'address1': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(4)])],
            'address2': '',
            'city': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)])],
            'natinality': '',
            'state': '',
            'zip': '',
            'phoneno': ['+971', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10)])],
        });
        localStorage.removeItem('coupanCode');
        if (this.retrive_codedata != null) {
            this.data_coupanStore = JSON.parse(this.retrive_codedata);
        }
        this.retrievedObject = localStorage.getItem('userInfo');
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = JSON.parse(this.retrievedObject);
        }
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('Checkout');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
            this.userSettings.showCurrentLocation = false;
        }
    }
    CheckOutPage.prototype.ionViewWillEnter = function () {
        $(document).prop('title', 'Checkout');
        $('body').removeClass().addClass('Checkout body');
        var d = new Date();
        this.showYear = d.getFullYear();
        $(".zoomContainer").remove();
        var convertdecode = atob(this.navParams.data.id);
        this.getData_decode = JSON.parse(convertdecode);
        this.CreateShipping();
        this.checkoutInfo();
    };
    CheckOutPage.prototype.clickToshowtab = function (val) {
        $('.showTargetDiv').hide();
        $('#my-account-verticle-tab-div' + val).show();
        $('#my-account-verticle-tab-div' + val).removeClass('d-none');
    };
    CheckOutPage.prototype.ngAfterViewInit = function () {
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
    CheckOutPage.prototype.autoCompleteCallback1 = function (selectedData) {
        var postal_code = '', country = '', administrative_area_level_1 = '', administrative_area_level_2 = '', sublocality_level_1 = '';
        if (selectedData.response == true) {
            for (var add = 0; add < selectedData.data.address_components.length; add++) {
                if (selectedData.data.address_components[add].types[0] == 'postal_code') {
                    postal_code = selectedData.data.address_components[add].long_name;
                }
                if (selectedData.data.address_components[add].types[0] == 'country') {
                    country = selectedData.data.address_components[add].long_name;
                }
                if (selectedData.data.address_components[add].types[0] == 'administrative_area_level_1') {
                    administrative_area_level_1 = selectedData.data.address_components[add].long_name;
                }
                if (selectedData.data.address_components[add].types[0] == 'administrative_area_level_2') {
                    administrative_area_level_2 = selectedData.data.address_components[add].long_name;
                }
                if (selectedData.data.address_components[add].types[0] == 'sublocality_level_1') {
                    sublocality_level_1 = selectedData.data.address_components[add].long_name;
                }
            }
            this.addressfrm.controls['zip'].setValue(postal_code);
            this.addressfrm.controls['state'].setValue(administrative_area_level_1);
            this.addressfrm.controls['natinality'].setValue(country);
            this.addressfrm.controls['city'].setValue(administrative_area_level_2);
            this.addressfrm.controls['address2'].setValue(sublocality_level_1);
        }
    };
    
    CheckOutPage.prototype.CreateShipping = function (val) {
        var userID = JSON.parse(this.retrievedObject);
            this.saveAddress.user_id = userID.id;
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/checkout/createe', this.saveAddress, function (response) {
//                if (response.ship_address.status == "success") {
//                    _this.showaddress = false;
//                    _this.viewAddress();
//                }
//                else {
//                    _this.showaddress = true;
//                }
            }, function (error) {
                console.log(error);
            });
    };
    
    CheckOutPage.prototype.checkoutInfo = function () {
        var _this = this;
        try {
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/checkout/check-out-info', this.getData_decode, function (response) {
                if (response.checkout_info.status == "success") {
                    _this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].imageProduct + '/product/';
                    _this.checkOut_data = response.checkout_info;
                    if (response.checkout_info.cart === true) {
                        _this.gruopSeller = Object.entries(response.checkout_info.product_info);
                        var self_this = _this;
                        if (self_this.couponCode != null) {
                            if (self_this.data_coupanStore.data.code_type == "Flat Discount") {
                                self_this.couponCode.total = self_this.checkOut_data.total - self_this.data_coupanStore.data.discount;
                                self_this.data_coupanStore.total = self_this.checkOut_data.total - self_this.data_coupanStore.data.discount;
                            }
                            else if (self_this.data_coupanStore.data.code_type == "Percentage Discount") {
                                self_this.couponCode.total = self_this.checkOut_data.total - ((self_this.checkOut_data.total * self_this.data_coupanStore.data.discount) / 100);
                                self_this.data_coupanStore.total = self_this.checkOut_data.total - ((self_this.checkOut_data.total * self_this.data_coupanStore.data.discount) / 100);
                            }
                        }
                        setTimeout(function () {
                            for (var i = 0; i < response.checkout_info.product_info.businessName.length; i++) {
                                for (var j = 0; j < self_this.gruopSeller[i][1].length; j++) {
                                    $('#inputQuantity-' + self_this.gruopSeller[i][1][j].product_id).editableSelect({ effects: 'default' }).on('hide.editable-select', function (e) {
                                        var up_id = e.target.id.split("-");
                                        ;
                                        $('#update-' + up_id[1]).removeClass('d-none');
                                    });
                                    $('#inputQuantity-' + self_this.gruopSeller[i][1][j].product_id).val(self_this.gruopSeller[i][1][j].quantity);
                                }
                            }
                        }, 1000);
                    }
                    else {
                        var self = _this;
                        if (response.checkout_info.product_info.make_offer == true) {
                            $('#inputQuantity').attr('disabled', true);
                        }
                        else {
                            $('#inputQuantity').editableSelect({ effects: 'default' }).on('hide.editable-select', function (e) {
                                setTimeout(function () {
                                    var hid_qua = $('#hidden_quan').val();
                                    var act_qua = $('#inputQuantity').val();
                                    if (parseInt(act_qua) > parseInt(hid_qua)) {
                                        $('#error-quantitymax').removeClass('d-none');
                                    }
                                    else if (parseInt(act_qua) <= 0 || act_qua == '' || act_qua == ' ') {
                                        $('#error-quantitymax').removeClass('d-none');
                                    }
                                    else {
                                        if (self.data_coupanStore == undefined) {
                                            self.checkOut_data.product_info.quantity = $('#inputQuantity').val();
                                            var actual_price_actual = self.checkOut_data.product_info.price - (self.checkOut_data.product_info.price * self.checkOut_data.product_info.discount) / 100;
                                            var data_actual = actual_price_actual * $('#inputQuantity').val();
                                            self.checkOut_data.total = data_actual;
                                            self.checkOut_data.product_info.final_price = data_actual;
                                            $('#error-quantitymax').addClass('d-none');
                                        }
                                        else {
                                            if (self.data_coupanStore.data.code_type == "Flat Discount") {
                                                self.checkOut_data.product_info.quantity = $('#inputQuantity').val();
                                                var actual_price_flat = self.checkOut_data.product_info.price - (self.checkOut_data.product_info.price * self.checkOut_data.product_info.discount) / 100;
                                                var data_flat = actual_price_flat * $('#inputQuantity').val();
                                                self.checkOut_data.total = data_flat;
                                                self.checkOut_data.product_info.final_price = data_flat;
                                                self.couponCode.total = data_flat - self.data_coupanStore.data.discount;
                                                self.data_coupanStore.total = data_flat - self.data_coupanStore.data.discount;
                                                $('#error-quantitymax').addClass('d-none');
                                            }
                                            else if (self.data_coupanStore.data.code_type == "Percentage Discount") {
                                                self.checkOut_data.product_info.quantity = $('#inputQuantity').val();
                                                var actual_price_Percentage = self.checkOut_data.product_info.price - (self.checkOut_data.product_info.price * self.checkOut_data.product_info.discount) / 100;
                                                var data_Percentage = actual_price_Percentage * $('#inputQuantity').val();
                                                self.checkOut_data.total = data_Percentage;
                                                self.checkOut_data.product_info.final_price = data_Percentage;
                                                self.couponCode.total = data_Percentage - ((data_Percentage * self.data_coupanStore.data.discount) / 100);
                                                self.data_coupanStore.total = data_Percentage - ((data_Percentage * self.data_coupanStore.data.discount) / 100);
                                                $('#error-quantitymax').addClass('d-none');
                                            }
                                        }
                                    }
                                }, 1500);
                            });
                        }
                        $('#inputQuantity').val(response.checkout_info.product_info.quantity);
                    }
                    if (response.checkout_info.user_info.address == "") {
                        _this.viewAddress();
                    }
                    else {
                        _this.AddAddress(response.checkout_info.user_info, 'add');
                    }
                }
                else {
                    _this.viewAddress();
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    CheckOutPage.prototype.EditAddress = function (val) {
        if (val == "Add") {
            this.showaddress = true;
        }
        else if (val == "Cancel") {
            this.showaddress = false;
        }
    };
    CheckOutPage.prototype.AddAddress = function (val, val1) {
        var _this = this;
        try {
            this.infoService.showLoading();
            var userID = JSON.parse(this.retrievedObject);
            this.saveAddress.user_id = userID.id;
            if (val1 == 'AddClick') {
                this.saveAddress.ship_name = val.value.first_name + ' ' + val.value.last_name;
                this.saveAddress.mobile = val.value.phoneno;
                this.saveAddress.ship_address = val.value.address1 + ',' + val.value.address2;
                this.saveAddress.ship_city = val.value.city;
                this.saveAddress.ship_state = val.value.state;
                this.saveAddress.ship_country = val.value.natinality;
                this.saveAddress.ship_pincode = val.value.zip;
                if ($('#primaryadd').prop('checked') == true) {
                    this.saveAddress.primary_add = 1;
                }
                else {
                    this.saveAddress.primary_add = 0;
                }
            }
            else if (val1 == 'add') {
                this.saveAddress.ship_name = val.first_name + ' ' + val.last_name;
                this.saveAddress.mobile = val.mobile_number;
                this.saveAddress.ship_address = val.address;
                this.saveAddress.ship_city = val.city;
                this.saveAddress.ship_state = val.state;
                this.saveAddress.ship_country = val.country;
                this.saveAddress.ship_pincode = val.pincode;
            }
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/ship-address/save-ship-address', this.saveAddress, function (response) {
                if (response.ship_address.status == "success") {
                    _this.showaddress = false;
                    _this.viewAddress();
                }
                else {
                    _this.showaddress = true;
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
            this.infoService.hideLoading();
        }
        finally {
            this.infoService.hideLoading();
        }
    };
    CheckOutPage.prototype.viewAddress = function () {
        var _this = this;
        try {
            var userID = JSON.parse(this.retrievedObject);
            var view_address = {
                "user_id": userID.id
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/ship-address/view-ship-address', view_address, function (response) {
                if (response.ship_address.status == "success") {
                    _this.viewAddData = response.ship_address;
                }
                else {
                    console.log(response);
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
        finally {
        }
    };
    CheckOutPage.prototype.applyCouponCode = function () {
        var _this = this;
        try {
            var userID = JSON.parse(this.retrievedObject);
            var apply_code = {
                "user_id": userID.id,
                "code": $('#inputCode').val(),
                "price": this.checkOut_data.total
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/coupon/apply-coupon-code', apply_code, function (response) {
                if (response.coupon_code.status == "success") {
                    _this.couponCode = response.coupon_code;
                    localStorage.setItem('coupanCode', JSON.stringify(_this.couponCode));
                    _this.retrive_codedata = JSON.stringify(_this.couponCode);
                    _this.data_coupanStore = JSON.parse(_this.retrive_codedata);
                }
                else {
                    _this.retrive_codedata = null;
                    _this.couponCode = response.coupon_code;
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    CheckOutPage.prototype.removeCoupan_Code = function () {
        var _this = this;
        var userID = JSON.parse(this.retrievedObject);
        var coupn_data = this.data_coupanStore;
        var remove_code = {
            "user_id": userID.id,
            "id": coupn_data.data.id,
            "code": coupn_data.data.code
        };
        try {
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/coupon/remove-coupon-code', remove_code, function (response) {
                if (response.coupon_code.status == "success") {
                    _this.retrive_codedata = null;
                    _this.couponCode = null;
                    localStorage.removeItem('coupanCode');
                    _this.checkoutInfo();
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
        }
    };
    CheckOutPage.prototype.ConfirmPay = function () {
        try {
            var userID = JSON.parse(this.retrievedObject);
            var cCode, fprice, makeOffer, myofferid;
            if (this.data_coupanStore != null) {
                cCode = this.data_coupanStore.data.code;
                fprice = this.data_coupanStore.total;
                if (this.checkOut_data.product_info.make_offer == true) {
                    makeOffer = true;
                    myofferid = this.checkOut_data.product_info.my_offer_id;
                }
                else {
                    makeOffer = false;
                    myofferid = 0;
                }
            }
            else {
                if (this.checkOut_data.product_info.make_offer == true) {
                    cCode = '';
                    fprice = this.checkOut_data.total;
                    makeOffer = true;
                    myofferid = this.checkOut_data.product_info.my_offer_id;
                }
                else if (this.checkOut_data.product_info.make_bid == true) {
                    cCode = '';
                    fprice = this.checkOut_data.total;
                    makeOffer = false;
                    myofferid = 0;
                }
                else {
                    cCode = '';
                    fprice = this.checkOut_data.total;
                    makeOffer = false;
                    myofferid = 0;
                }
            }
            if ($('input[type="radio"][name=radio-group]:checked').val() == undefined) {
                this.notSelect = true;
            }
            else if ($('input[type="radio"][name=radio-group-pay]:checked').val() == undefined) {
                this.paymentNotselect = true;
            }
            else {
                this.paymentNotselect = false;
                this.notSelect = false;
                if (this.checkOut_data.cart == true) {
                    this.place_orderData = {
                        "user_id": userID.id,
                        "cart": "true",
                        "shipping_id": $('input[type="radio"][name=radio-group]:checked').val(),
                        "coupon_code": cCode,
                        "final_price": fprice,
                        "seller_id": this.getData_decode.seller_id,
                        "order_status": ''
                    };
                    if ($('input[type="radio"][name=radio-group-pay]:checked').val() == 'cash') {
                        this.callcashPayment();
                    }
                    else {
                        this.callPaypalPayment();
                    }
                }
                else {
                    if ($('#inputQuantity').val() == 0 || $('#inputQuantity').val() == '') {
                        $('#quantity_added').removeClass('d-none');
                    }
                    else {
                        var hid_qua = $('#hidden_quan').val();
                        var act_qua = $('#inputQuantity').val();
                        if (parseInt(act_qua) > parseInt(hid_qua)) {
                            $('#error-quantitymax').removeClass('d-none');
                        }
                        else if (parseInt(act_qua) <= 0 || act_qua == '' || act_qua == ' ') {
                            $('#error-quantitymax').removeClass('d-none');
                        }
                        else {
                            $('#error-quantitymax').addClass('d-none');
                            $('#quantity_added').addClass('d-none');
                            this.place_orderData = {
                                "user_id": userID.id,
                                "product_id": this.checkOut_data.product_info.id,
                                "quantity": $('#inputQuantity').val(),
                                "specification": this.checkOut_data.product_info.specification,
                                "seller_id": this.checkOut_data.product_info.user_id,
                                "final_price": fprice,
                                "coupon_code": cCode,
                                "shipping_id": $('input[type="radio"][name=radio-group]:checked').val(),
                                "make_offer": makeOffer,
                                "offer_id": myofferid,
                                "order_status": ''
                            };
                            if ($('input[type="radio"][name=radio-group-pay]:checked').val() == 'cash') {
                                this.callcashPayment();
                            }
                            else {
                                this.callPaypalPayment();
                            }
                        }
                    }
                }
            }
        }
        catch (Error) {
            console.log(Error);
            this.infoService.hideLoading();
        }
    };
    
        CheckOutPage.prototype.initiatePaypal = function () {
PayPal.init({
        "PayPalEnvironmentProduction": "YOUR_PRODUCTION_CLIENT_ID",
        "PayPalEnvironmentSandbox": "ASV57ivVN4A960WA9t1PMtwKn0F9AEOMAZ8zo3Mz52Qa4wBOZt2CO2BS"
        })
    .then(onSuccess => {
        console.log("init success")
    })
    .catch(onError => {
        console.log("init failed", Error)
    });
};
     CheckOutPage.prototype.callPaypalPaymentas = function () {
		 alert("sdg");
		window.location.href ='paywithpaypal';
	 }
    CheckOutPage.prototype.callPaypalPayment = function () {

        var _this = this;
        if (this.checkOut_data.cart == true) {
//            var str = [];
//            var business_name, count_discount, count_difference;
//            business_name = Object.entries(this.checkOut_data.seller);
//            if (this.data_coupanStore != null) {
//                if (this.data_coupanStore.data.code_type == "Percentage Discount") {
//                    for (var p = 0; p < this.checkOut_data.seller.businessName.length; p++) {
//                        count_discount = business_name[p][1].total * this.data_coupanStore.data.discount / 100;
//                        count_difference = parseInt(business_name[p][1].total) - count_discount;
//                        str.push({
//                            "amount": ['100.00'],
//                            "email": ['sb-bj3y47982010@personal.example.com']
//                        });
//                    }
//                }
//                else {
//                    for (var q = 0; q < this.checkOut_data.seller.businessName.length; q++) {
//                        count_discount = this.data_coupanStore.data.discount / this.checkOut_data.seller.businessName.length;
//                        count_difference = parseInt(business_name[q][1].total) - (count_discount * 0.27);
//                        str.push({
//                            "amount": ['100.00'],
//                            "email": ['sb-bj3y47982010@personal.example.com']
//                        });
//                    }
//                }
//            }
//            else {
//                for (var r = 0; r < this.checkOut_data.seller.businessName.length; r++) {
//                    str.push({
//                        "amount": ['100.00'],
//                        "email": ['sb-bj3y47982010@personal.example.com']
//                    });
//                }
//            }
//            var passdtaCart = {
//                "receiver_arr": str
//            };
//            this.infoService.showLoading();
//            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/pay/paypal', passdtaCart, function (response) {
//                if (response.responseEnvelope.ack == "Success") {
//                    localStorage.setItem('checkoutInfo', JSON.stringify(_this.place_orderData));
//                    localStorage.setItem('KEYPaypal', response.payKey);
//                    _this.continuePaypal(response.payKey);
//                    _this.infoService.hideLoading();
//                }
//                else {
//                    _this.paypal_response = response;
//                    _this.infoService.hideLoading();
//                }
//            }, function (error) {
//                console.log(error);
//                _this.infoService.hideLoading();
//            });

    this.place_orderData.order_status = 'paid';
            var checkoutInfo = JSON.stringify(_this.place_orderData);
            var Info = encodeURIComponent(window.btoa(checkoutInfo));
            var total_price = (this.place_orderData.final_price * 0.27).toFixed(2);
            var receiver_email = this.checkOut_data.product_info.payment_email;
            var passData = [];
            passData.push({
                "amount": [total_price],
                "email": [receiver_email]
            });
            var passdtaBuynow = {
                "receiver_arr": passData
            };
            window.location.href ='paywithpaypal/'+encodeURIComponent(window.btoa(total_price))+'/'+Info;

        }
        else {
            this.place_orderData.order_status = 'paid';
            var checkoutInfo = JSON.stringify(_this.place_orderData);
            var Info = encodeURIComponent(window.btoa(checkoutInfo));
            var total_price = (this.place_orderData.final_price * 0.27).toFixed(2);
            var receiver_email = this.checkOut_data.product_info.payment_email;
            var passData = [];
            passData.push({
                "amount": [total_price],
                "email": [receiver_email]
            });
            var passdtaBuynow = {
                "receiver_arr": passData
            };
            window.location.href ='paywithpaypal/'+encodeURIComponent(window.btoa(total_price))+'/'+Info;
            
        }
    };
    CheckOutPage.prototype.callcashPayment = function () {
        var _this = this;
        this.place_orderData.order_status = 'unpaid';
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/checkout/place-order', this.place_orderData, function (response) {
            if (response.place_order.status == "success") {
                _this.retrive_codedata = null;
                _this.couponCode = null;
                localStorage.removeItem('coupanCode');
                _this.infoService.hideLoading();
                _this.navCtrl.push('ThankyouPage', {
                    id: response.place_order.order_id
                });
            }
            else {
                _this.infoService.hideLoading();
            }
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    CheckOutPage.prototype.continuePaypal = function (val) {
        var _this = this;
        //open url in inappBrowser (Android,iOS) Mobile app.
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            var target = "_blank";
            var options = {
                location: 'yes',
                hidden: 'no',
                hardwareback: 'no',
                mediaPlaybackRequiresUserAction: 'no',
            };
            var browser_1 = this.iab.create("https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_ap-payment&paykey=" + val, target, options);
            browser_1.on('loadstop').subscribe(function (event) {
                if (event.url == "http://192.168.1.113:8100/#/ordersuccess/123465895" || event.url == "https://www.dibdaa.com/#/ordersuccess/123465895" || event.url == "https://www.techcronus.com/staging/Dibdaa/www/#/ordersuccess/123465895") {
                    browser_1.close();
                    _this.navCtrl.push('ThankyouPage', {
                        id: '123465895'
                    });
                }
                else if (event.url == "http://192.168.1.113:8100/#/home" || event.url == "https://www.dibdaa.com/#/home" || event.url == "https://www.techcronus.com/staging/Dibdaa/www/#/home") {
                    browser_1.close();
                    _this.navCtrl.push('HomePage');
                }
            });
        }
        else {
            location.href = "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_ap-payment&paykey=" + val;
        }
    };
    CheckOutPage.prototype.updateCart = function (val, proId, proqua) {
        var _this = this;
        if (parseInt($('#inputQuantity-' + proId).val()) > parseInt(proqua)) {
            setTimeout(function () {
                $('#error-' + proId).removeClass('d-none');
            }, 1000);
        }
        else {
            var cart_update = {
                "id": val,
                "quantity": $('#inputQuantity-' + proId).val()
            };
            $('#error-' + proId).addClass('d-none');
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/cart/update-cart', cart_update, function (response) {
                _this.checkoutInfo();
            }, function (error) {
                console.log(error);
            });
        }
    };
    CheckOutPage.prototype.checkmessage = function (val, val_sellerId) {
        if (val == "cancel") {
            this.sendmsg = false;
        }
        else {
            this.sendmsg = true;
            this.setSellerId = val_sellerId;
        }
    };
    CheckOutPage.prototype.sendmessage = function () {
        var _this = this;
        var userID_msg = JSON.parse(this.retrievedObject);
        var sndMessage;
        if (this.checkOut_data.cart == true) {
            sndMessage = {
                sender_id: userID_msg.id,
                receiver_id: $('.allcategories:last#productID').children(":selected").attr("id"),
                product_id: $('.allcategories:last#productID').val(),
                message: $('#sndmsgtext').val()
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/message/send-message', sndMessage, function (response) {
                if (response.message.status == "success") {
                    _this.infoService.hideLoading();
                    var alert1 = _this.alertCtrl.create({
                        title: 'Message to seller',
                        subTitle: response.message.msg,
                        buttons: [{
                                text: 'OK',
                                role: 'cancel',
                                cssClass: 'alert-button-changeColor'
                            }]
                    });
                    alert1.present();
                    _this.sendmsg = false;
                }
                else {
                    _this.sendmsg = false;
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            sndMessage = {
                sender_id: userID_msg.id,
                receiver_id: this.checkOut_data.product_info.user_id,
                product_id: this.getData_decode.product_id,
                message: $('#sndmsgtext').val()
            };
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverUrl + 'api/message/send-message', sndMessage, function (response) {
                if (response.message.status == "success") {
                    var alert2 = _this.alertCtrl.create({
                        title: 'Message to seller',
                        subTitle: response.message.msg,
                        buttons: [{
                                text: 'OK',
                                role: 'cancel',
                                cssClass: 'alert-button-changeColor'
                            }]
                    });
                    alert2.present();
                    _this.infoService.hideLoading();
                    _this.sendmsg = false;
                }
                else {
                    _this.sendmsg = false;
                    _this.infoService.hideLoading();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    CheckOutPage.prototype.showPaypalNote = function (val) {
        if (val == "paypal") {
            $('.showPaymentConvertation').removeClass('d-none');
        }
        else {
            $('.showPaymentConvertation').addClass('d-none');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], CheckOutPage.prototype, "content", void 0);
    CheckOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
           selector: 'page-check-out',templateUrl:'/src/pages/product/check-out/check-out.html'
//            selector: 'page-check-out',template:/*ion-inline-start:"/var/www/html/src/pages/product/check-out/check-out.html"*/'<ion-content padding class="checkout">\n	<div class="wrapper">\n		<div class="container checkout-main mb-3 mt-2">\n			<div class="row">\n				<div class="col-lg-12 col-md-12 col-xl-12 col-12 breadcrumblink_div">\n					<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n					<p class="set_fontSize">\n						<a href="#/home" class="breadcrumblink">Dibdaa</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n						<a href="#/view-cart" class="breadcrumblink" *ngIf="checkOut_data?.cart == true">View-Cart &nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</a>\n						<a class="breadcrumblink" disabled>Checkout</a>\n					</p>\n				</div>\n			</div>\n			<div class="row">\n				<div class="col-lg-12 col-md-12 col-12">\n					<h5 class="">Checkout</h5>\n				</div>\n			</div>\n			<div class="row">\n				<div class="col-lg-9 col-md-12 col-12">\n					<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mt-1 frontbg">\n						<div class="row m-0">\n							<div class="col-lg-6 col-md-6 col-5 p-0">\n								<h6 class="m-0 text-left"> Pay with </h6>\n							</div>\n						</div>\n					</div>\n					<div class="mt-3 p-0 set_fontSize addressinfo" *ngIf="checkOut_data?.cart == true;else showbuynowOpt">\n						<div class="row m-0 checkout-detail" *ngIf="paymentNotselect == true;">\n							<span class="p-2 noaddress">Please select Payment Method</span>\n						</div>\n						<div class="row m-0 checkout-detail">\n							<div class="col-lg-1 col-md-1 col-2 pt-2 pb-2 form-group">\n								<input type="radio" id="paypal" name="radio-group-pay" value="paypal" checked>\n								<label for="paypal"></label>\n							</div>\n							<div class="col-lg-11 col-md-11 col-10 pt-2 pb-2">\n								<h6 class="m-0 p-0 pt-2"><img src="assets/images/logopaypal.png" /> &nbsp;  <img src="assets/images/payment_icons.png" /></h6> (Please note if you choose to pay by PayPal your AED balance will be converted into US$ at the current day\'s exchange rate.)\n							</div>\n						</div>\n					</div>\n					<ng-template #showbuynowOpt>\n						<div class="mt-3 p-0 set_fontSize addressinfo">\n							<div class="row m-0 checkout-detail" *ngIf="paymentNotselect == true;">\n								<span class="p-2 noaddress">Please select Payment Method</span>\n							</div>\n							<span *ngFor="let pytopt of checkOut_data?.product_info.payment_opt">\n								<div class="row m-0 checkout-detail" *ngIf="pytopt == \'1\'">\n									<div class="col-lg-1 col-md-1 col-2 pt-2 pb-2 form-group">\n										<input type="radio" id="paypal" name="radio-group-pay" value="paypal" [checked]="pytopt == \'1\'" (change)="showPaypalNote(\'paypal\')">\n										<label for="paypal"></label>\n									</div>\n									<div class="col-lg-11 col-md-11 col-10 pt-2 pb-2">\n										<h6 class="m-0 p-0 pt-2"><img src="assets/images/logopaypal.png" /> &nbsp; <img src="assets/images/payment_icons.png" /></h6> (Please note if you choose to pay by PayPal your AED balance will be converted into US$ at the current day\'s exchange rate.)\n									</div>\n								</div>\n								<div class="row m-0 checkout-detail" *ngIf="pytopt == \'2\'" >\n									<div class="col-lg-1 col-md-1 col-2 pt-2 pb-2 form-group">\n										<input type="radio" id="cash" name="radio-group-pay" value="cash" [checked]="pytopt == \'2\'" (change)="showPaypalNote(\'cash\')">\n										<label for="cash"></label>\n									</div>\n									<div class="col-lg-10 col-md-10 col-7 pt-2 pb-2">\n										<h6 class="m-0 p-0 pt-2">Cash on delivery</h6>\n									</div>\n								</div>\n							</span>\n						</div>\n					</ng-template>\n					<div class="row m-0">\n						<div class="col-lg-12 col-md-12 col-12 p-0">\n							<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mt-3 frontbg">\n								<div class="row m-0">\n									<div class="col-lg-6 col-md-6 col-5 p-0">\n										<h6 class="m-0 text-left"> Ship to </h6>\n									</div>\n									<div class="col-lg-6 col-md-6 col-7 p-0 text-right">\n										<a (click)="EditAddress(\'Add\')" id="edit"><i class="fa fa-plus"></i> Add a new address</a>\n									</div>\n								</div>\n							</div>\n							<div class="mt-3 p-0 set_fontSize addressinfo" *ngIf="showaddress == false">\n								<div class="row m-0 checkout-detail" *ngIf="notSelect == true">\n									<span class="p-2 noaddress">Please select address or Enter new address</span>\n								</div>\n								<div class="row m-0 checkout-detail" *ngFor="let viewadd of viewAddData?.data">\n									<div class="col-lg-1 col-md-1 col-2 pt-2 pb-2 form-group">\n										<input type="radio" id="useraddress-{{viewadd?.id}}" name="radio-group" value="{{viewadd?.id}}" [checked]="viewadd?.primary_add == 1 || viewAddData?.data.length == 1">\n										<label for="useraddress-{{viewadd?.id}}"></label>\n									</div>\n									<div class="col-lg-11 col-md-11 col-10 pt-2 pb-2">\n										<p class="font-weight-bold mb-1">{{viewadd?.ship_name}}</p>\n										<p class="font-weight-normal mb-1">{{viewadd?.ship_address}}</p>\n										<p class="font-weight-normal mb-1">{{viewadd?.ship_city}} , {{viewadd?.ship_state}}  {{viewadd?.ship_pincode}}</p>\n										<p class="font-weight-normal mb-1">{{viewadd?.ship_country}}</p>\n										<p class="font-weight-normal mb-1">{{viewadd?.mobile}}</p>\n									</div>\n								</div>\n							</div>\n							<div class="edit-user-info mt-3 set_fontSize p-2" *ngIf="showaddress == true">\n								<form [formGroup]="addressfrm" role="form">\n									<div class="form-row">\n										<div class="form-group col-md-6 mt-3">\n											<ng4geo-autocomplete [userSettings]="userSettings" (componentCallback)="autoCompleteCallback1($event)"></ng4geo-autocomplete>\n										</div>\n										<div class="form-group col-md-6">\n											<label for="inputCountry"><span class="text-danger font-weight-bold ">*</span> Country or region</label>\n											<select id="inputCountry" class="form-control" [formControl]="addressfrm.controls[\'natinality\']" required>\n												<option value="">Select Country</option>\n												<option value="Afghanistan">Afghanistan</option>\n												<option value="Albania">Albania</option>\n												<option value="Algeria">Algeria</option>\n												<option value="American Samoa">American Samoa</option>\n												<option value="Andorra">Andorra</option>\n												<option value="Angola">Angola</option>\n												<option value="Anguilla">Anguilla</option>\n												<option value="Antartica">Antarctica</option>\n												<option value="Antigua and Barbuda">Antigua and Barbuda</option>\n												<option value="Argentina">Argentina</option>\n												<option value="Armenia">Armenia</option>\n												<option value="Aruba">Aruba</option>\n												<option value="Australia">Australia</option>\n												<option value="Austria">Austria</option>\n												<option value="Azerbaijan">Azerbaijan</option>\n												<option value="Bahamas">Bahamas</option>\n												<option value="Bahrain">Bahrain</option>\n												<option value="Bangladesh">Bangladesh</option>\n												<option value="Barbados">Barbados</option>\n												<option value="Belarus">Belarus</option>\n												<option value="Belgium">Belgium</option>\n												<option value="Belize">Belize</option>\n												<option value="Benin">Benin</option>\n												<option value="Bermuda">Bermuda</option>\n												<option value="Bhutan">Bhutan</option>\n												<option value="Bolivia">Bolivia</option>\n												<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>\n												<option value="Botswana">Botswana</option>\n												<option value="Bouvet Island">Bouvet Island</option>\n												<option value="Brazil">Brazil</option>\n												<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>\n												<option value="Brunei Darussalam">Brunei Darussalam</option>\n												<option value="Bulgaria">Bulgaria</option>\n												<option value="Burkina Faso">Burkina Faso</option>\n												<option value="Burundi">Burundi</option>\n												<option value="Cambodia">Cambodia</option>\n												<option value="Cameroon">Cameroon</option>\n												<option value="Canada">Canada</option>\n												<option value="Cape Verde">Cape Verde</option>\n												<option value="Cayman Islands">Cayman Islands</option>\n												<option value="Central African Republic">Central African Republic</option>\n												<option value="Chad">Chad</option>\n												<option value="Chile">Chile</option>\n												<option value="China">China</option>\n												<option value="Christmas Island">Christmas Island</option>\n												<option value="Cocos Islands">Cocos (Keeling) Islands</option>\n												<option value="Colombia">Colombia</option>\n												<option value="Comoros">Comoros</option>\n												<option value="Congo">Congo</option>\n												<option value="Congo">Congo, the Democratic Republic of the</option>\n												<option value="Cook Islands">Cook Islands</option>\n												<option value="Costa Rica">Costa Rica</option>\n												<option value="Cota D\'Ivoire">Cote d\'Ivoire</option>\n												<option value="Croatia">Croatia (Hrvatska)</option>\n												<option value="Cuba">Cuba</option>\n												<option value="Cyprus">Cyprus</option>\n												<option value="Czech Republic">Czech Republic</option>\n												<option value="Denmark">Denmark</option>\n												<option value="Djibouti">Djibouti</option>\n												<option value="Dominica">Dominica</option>\n												<option value="Dominican Republic">Dominican Republic</option>\n												<option value="East Timor">East Timor</option>\n												<option value="Ecuador">Ecuador</option>\n												<option value="Egypt">Egypt</option>\n												<option value="El Salvador">El Salvador</option>\n												<option value="Equatorial Guinea">Equatorial Guinea</option>\n												<option value="Eritrea">Eritrea</option>\n												<option value="Estonia">Estonia</option>\n												<option value="Ethiopia">Ethiopia</option>\n												<option value="Falkland Islands">Falkland Islands (Malvinas)</option>\n												<option value="Faroe Islands">Faroe Islands</option>\n												<option value="Fiji">Fiji</option>\n												<option value="Finland">Finland</option>\n												<option value="France">France</option>\n												<option value="France Metropolitan">France, Metropolitan</option>\n												<option value="French Guiana">French Guiana</option>\n												<option value="French Polynesia">French Polynesia</option>\n												<option value="French Southern Territories">French Southern Territories</option>\n												<option value="Gabon">Gabon</option>\n												<option value="Gambia">Gambia</option>\n												<option value="Georgia">Georgia</option>\n												<option value="Germany">Germany</option>\n												<option value="Ghana">Ghana</option>\n												<option value="Gibraltar">Gibraltar</option>\n												<option value="Greece">Greece</option>\n												<option value="Greenland">Greenland</option>\n												<option value="Grenada">Grenada</option>\n												<option value="Guadeloupe">Guadeloupe</option>\n												<option value="Guam">Guam</option>\n												<option value="Guatemala">Guatemala</option>\n												<option value="Guinea">Guinea</option>\n												<option value="Guinea-Bissau">Guinea-Bissau</option>\n												<option value="Guyana">Guyana</option>\n												<option value="Haiti">Haiti</option>\n												<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>\n												<option value="Holy See">Holy See (Vatican City State)</option>\n												<option value="Honduras">Honduras</option>\n												<option value="Hong Kong">Hong Kong</option>\n												<option value="Hungary">Hungary</option>\n												<option value="Iceland">Iceland</option>\n												<option value="India">India</option>\n												<option value="Indonesia">Indonesia</option>\n												<option value="Iran">Iran (Islamic Republic of)</option>\n												<option value="Iraq">Iraq</option>\n												<option value="Ireland">Ireland</option>\n												<option value="Israel">Israel</option>\n												<option value="Italy">Italy</option>\n												<option value="Jamaica">Jamaica</option>\n												<option value="Japan">Japan</option>\n												<option value="Jordan">Jordan</option>\n												<option value="Kazakhstan">Kazakhstan</option>\n												<option value="Kenya">Kenya</option>\n												<option value="Kiribati">Kiribati</option>\n												<option value="Democratic People\'s Republic of Korea">Korea, Democratic People\'s Republic of</option>\n												<option value="Korea">Korea, Republic of</option>\n												<option value="Kuwait">Kuwait</option>\n												<option value="Kyrgyzstan">Kyrgyzstan</option>\n												<option value="Lao">Lao People\'s Democratic Republic</option>\n												<option value="Latvia">Latvia</option>\n												<option value="Lebanon">Lebanon</option>\n												<option value="Lesotho">Lesotho</option>\n												<option value="Liberia">Liberia</option>\n												<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>\n												<option value="Liechtenstein">Liechtenstein</option>\n												<option value="Lithuania">Lithuania</option>\n												<option value="Luxembourg">Luxembourg</option>\n												<option value="Macau">Macau</option>\n												<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>\n												<option value="Madagascar">Madagascar</option>\n												<option value="Malawi">Malawi</option>\n												<option value="Malaysia">Malaysia</option>\n												<option value="Maldives">Maldives</option>\n												<option value="Mali">Mali</option>\n												<option value="Malta">Malta</option>\n												<option value="Marshall Islands">Marshall Islands</option>\n												<option value="Martinique">Martinique</option>\n												<option value="Mauritania">Mauritania</option>\n												<option value="Mauritius">Mauritius</option>\n												<option value="Mayotte">Mayotte</option>\n												<option value="Mexico">Mexico</option>\n												<option value="Micronesia">Micronesia, Federated States of</option>\n												<option value="Moldova">Moldova, Republic of</option>\n												<option value="Monaco">Monaco</option>\n												<option value="Mongolia">Mongolia</option>\n												<option value="Montserrat">Montserrat</option>\n												<option value="Morocco">Morocco</option>\n												<option value="Mozambique">Mozambique</option>\n												<option value="Myanmar">Myanmar</option>\n												<option value="Namibia">Namibia</option>\n												<option value="Nauru">Nauru</option>\n												<option value="Nepal">Nepal</option>\n												<option value="Netherlands">Netherlands</option>\n												<option value="Netherlands Antilles">Netherlands Antilles</option>\n												<option value="New Caledonia">New Caledonia</option>\n												<option value="New Zealand">New Zealand</option>\n												<option value="Nicaragua">Nicaragua</option>\n												<option value="Niger">Niger</option>\n												<option value="Nigeria">Nigeria</option>\n												<option value="Niue">Niue</option>\n												<option value="Norfolk Island">Norfolk Island</option>\n												<option value="Northern Mariana Islands">Northern Mariana Islands</option>\n												<option value="Norway">Norway</option>\n												<option value="Oman">Oman</option>\n												<option value="Pakistan">Pakistan</option>\n												<option value="Palau">Palau</option>\n												<option value="Panama">Panama</option>\n												<option value="Papua New Guinea">Papua New Guinea</option>\n												<option value="Paraguay">Paraguay</option>\n												<option value="Peru">Peru</option>\n												<option value="Philippines">Philippines</option>\n												<option value="Pitcairn">Pitcairn</option>\n												<option value="Poland">Poland</option>\n												<option value="Portugal">Portugal</option>\n												<option value="Puerto Rico">Puerto Rico</option>\n												<option value="Qatar">Qatar</option>\n												<option value="Reunion">Reunion</option>\n												<option value="Romania">Romania</option>\n												<option value="Russia">Russian Federation</option>\n												<option value="Rwanda">Rwanda</option>\n												<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>\n												<option value="Saint LUCIA">Saint LUCIA</option>\n												<option value="Saint Vincent">Saint Vincent and the Grenadines</option>\n												<option value="Samoa">Samoa</option>\n												<option value="San Marino">San Marino</option>\n												<option value="Sao Tome and Principe">Sao Tome and Principe</option>\n												<option value="Saudi Arabia">Saudi Arabia</option>\n												<option value="Senegal">Senegal</option>\n												<option value="Seychelles">Seychelles</option>\n												<option value="Sierra">Sierra Leone</option>\n												<option value="Singapore">Singapore</option>\n												<option value="Slovakia">Slovakia (Slovak Republic)</option>\n												<option value="Slovenia">Slovenia</option>\n												<option value="Solomon Islands">Solomon Islands</option>\n												<option value="Somalia">Somalia</option>\n												<option value="South Africa">South Africa</option>\n												<option value="South Georgia">South Georgia and the South Sandwich Islands</option>\n												<option value="Span">Spain</option>\n												<option value="SriLanka">Sri Lanka</option>\n												<option value="St. Helena">St. Helena</option>\n												<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>\n												<option value="Sudan">Sudan</option>\n												<option value="Suriname">Suriname</option>\n												<option value="Svalbard">Svalbard and Jan Mayen Islands</option>\n												<option value="Swaziland">Swaziland</option>\n												<option value="Sweden">Sweden</option>\n												<option value="Switzerland">Switzerland</option>\n												<option value="Syria">Syrian Arab Republic</option>\n												<option value="Taiwan">Taiwan, Province of China</option>\n												<option value="Tajikistan">Tajikistan</option>\n												<option value="Tanzania">Tanzania, United Republic of</option>\n												<option value="Thailand">Thailand</option>\n												<option value="Togo">Togo</option>\n												<option value="Tokelau">Tokelau</option>\n												<option value="Tonga">Tonga</option>\n												<option value="Trinidad and Tobago">Trinidad and Tobago</option>\n												<option value="Tunisia">Tunisia</option>\n												<option value="Turkey">Turkey</option>\n												<option value="Turkmenistan">Turkmenistan</option>\n												<option value="Turks and Caicos">Turks and Caicos Islands</option>\n												<option value="Tuvalu">Tuvalu</option>\n												<option value="Uganda">Uganda</option>\n												<option value="Ukraine">Ukraine</option>\n												<option value="United Arab Emirates">United Arab Emirates</option>\n												<option value="United Kingdom">United Kingdom</option>\n												<option value="United States">United States</option>\n												<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>\n												<option value="Uruguay">Uruguay</option>\n												<option value="Uzbekistan">Uzbekistan</option>\n												<option value="Vanuatu">Vanuatu</option>\n												<option value="Venezuela">Venezuela</option>\n												<option value="Vietnam">Viet Nam</option>\n												<option value="Virgin Islands (British)">Virgin Islands (British)</option>\n												<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>\n												<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>\n												<option value="Western Sahara">Western Sahara</option>\n												<option value="Yemen">Yemen</option>\n												<option value="Yugoslavia">Yugoslavia</option>\n												<option value="Zambia">Zambia</option>\n												<option value="Zimbabwe">Zimbabwe</option>\n											</select>\n											<div class="error-box" *ngIf="addressfrm.controls[\'natinality\'].hasError(\'required\') && addressfrm.controls[\'natinality\'].touched">* Select country!</div>\n										</div>\n									</div>\n									<div class="form-row">\n										<div class="form-group col-md-6">\n											<label for="inputFname"><span class="text-danger font-weight-bold ">*</span> First name</label>\n											<input type="text" class="form-control" id="inputFname" name="first_name" [formControl]="addressfrm.controls[\'first_name\']" [ngClass]="{\'error-border\':!addressfrm.controls[\'first_name\'].valid}">\n											<div class="error-box" *ngIf="addressfrm.controls[\'first_name\'].hasError(\'required\') && addressfrm.controls[\'first_name\'].touched">* Name is required!</div>\n											<div class="error-box" *ngIf="addressfrm.controls[\'first_name\'].hasError(\'minlength\') && addressfrm.controls[\'first_name\'].touched">* Minimum Enter 2 character!</div>\n										</div>\n										<div class="form-group col-md-6">\n											<label for="inputLname"><span class="text-danger font-weight-bold ">*</span> Last name</label>\n											<input type="text" class="form-control" id="inputLname" name="last_name" [formControl]="addressfrm.controls[\'last_name\']" [ngClass]="{\'error-border\':!addressfrm.controls[\'last_name\'].valid}">\n											<div class="error-box" *ngIf="addressfrm.controls[\'last_name\'].hasError(\'required\') && addressfrm.controls[\'last_name\'].touched">* Name is required!</div>\n											<div class="error-box" *ngIf="addressfrm.controls[\'last_name\'].hasError(\'minlength\') && addressfrm.controls[\'last_name\'].touched">* Minimum Enter 2 character!</div>\n										</div>\n									</div>\n									<div class="form-row">\n										<div class="form-group col-md-6">\n											<label for="inputSaddress2nd">Apt/Villa/Building #</label>\n											<input type="text" class="form-control" id="inputSaddress2nd" name="address2" [formControl]="addressfrm.controls[\'address2\']">\n										</div>\n										<div class="form-group col-md-6">\n											<label for="inputSaddress"><span class="text-danger font-weight-bold ">*</span> Street address</label>\n											<input type="text" class="form-control" id="inputSaddress" [formControl]="addressfrm.controls[\'address1\']" [ngClass]="{\'error-border\':!addressfrm.controls[\'address1\'].valid}">\n											<div class="error-box" *ngIf="addressfrm.controls[\'address1\'].hasError(\'required\') && addressfrm.controls[\'address1\'].touched">* Address is required!</div>\n											<div class="error-box" *ngIf="addressfrm.controls[\'address1\'].hasError(\'minlength\') && addressfrm.controls[\'address1\'].touched">* Minimum Enter 4 character!</div>\n										</div>\n										\n									</div>\n									<div class="form-row">\n										<div class="form-group col-md-6">\n											<label for="inputCity"><span class="text-danger font-weight-bold ">*</span> City</label>\n											<input type="text" class="form-control" id="inputCity" [formControl]="addressfrm.controls[\'city\']" [ngClass]="{\'error-border\':!addressfrm.controls[\'city\'].valid}">\n											<div class="error-box" *ngIf="addressfrm.controls[\'city\'].hasError(\'required\') && addressfrm.controls[\'city\'].touched">* City is required!</div>\n											<div class="error-box" *ngIf="addressfrm.controls[\'city\'].hasError(\'minlength\') && addressfrm.controls[\'city\'].touched">* Minimum Enter 3 character!</div>\n										</div>\n										<div class="form-group col-md-4">\n											<label for="inputState">State</label>\n											<input type="text" class="form-control" id="inputState" [formControl]="addressfrm.controls[\'state\']" > <!-- [ngClass]="{\'error-border\':!addressfrm.controls[\'state\'].valid}" -->\n										</div>\n										<div class="form-group col-md-2">\n											<label for="inputZip">Zip</label>\n											<input type="text" class="form-control" id="inputZip" [formControl]="addressfrm.controls[\'zip\']" > <!-- [ngClass]="{\'error-border\':!addressfrm.controls[\'zip\'].valid}" -->\n										</div>\n									</div>\n									<div class="form-row">\n										<div class="form-group col-md-6">\n											<label for="inputFname"><span class="text-danger font-weight-bold ">*</span> Phone number</label>\n											<int-phone-prefix [locale]="\'en\'" id="inputPhone" [formControl]="addressfrm.controls[\'phoneno\']" [ngClass]="{\'error-border\':!addressfrm.controls[\'phoneno\'].valid}"></int-phone-prefix>\n											<div class="error-box" *ngIf="addressfrm.controls[\'phoneno\'].hasError(\'required\') && addressfrm.controls[\'phoneno\'].touched">* Phone Number is required!</div>\n											<div class="error-box" *ngIf="addressfrm.controls[\'phoneno\'].hasError(\'minlength\') && addressfrm.controls[\'phoneno\'].touched">* Phone length is 10!</div>\n										</div>\n									</div>\n									<div class="form-row">\n										<div class="form-group col-md-6">\n											<label class="custom-control custom-checkbox">\n												<input type="checkbox" class="custom-control-input" name="primaryadd" id="primaryadd">\n												<span class="custom-control-indicator"></span>\n												<span class="custom-control-description">Save as primary address</span>\n											</label>\n										</div>\n										<div class="form-group col-md-6 text-right">\n											<button class="btn theme-light-btn" role="button" type="submit" [disabled]="!addressfrm.valid" (click)="AddAddress(addressfrm,\'AddClick\')">Add</button>\n											<button class="btn theme-dark-btn mr-2" role="button" (click)="EditAddress(\'Cancel\')">Cancel</button>\n										</div>\n									</div>\n								</form>\n							</div>\n							<div class="col-lg-12 col-md-12 col-xl-12 col-12 pl-3 pt-2 pb-2 mt-3 frontbg">\n								<h6 class="m-0 text-left"> Review item and shipping </h6>\n							</div>\n							<div class="review-item-and-shipping mt-3 p-2" *ngIf="sendmsg == false;else showsendmsg;">\n								<div class="col-lg-12 col-md-12 col-12 p-0 bg-light border" *ngIf="checkOut_data?.cart == false">\n									<div class="row m-0 set_fontSize">\n										<div class="col-lg-6 col-md-6 col-12 pt-3 pb-2 text-center text-lg-left text-md-left">\n											<p class="m-0" *ngIf="checkOut_data?.item_cnt > 0"><b>Seller:- </b>\n												<span *ngIf="checkOut_data?.cart == true">{{checkOut_data?.product_info[0].display_name}}</span>\n											</p>\n											<p *ngIf="checkOut_data?.item_cnt <= 0" class="m-0">\n												<b>Seller:- </b> <span>{{checkOut_data?.product_info.display_name}}</span>\n											</p>\n										</div>\n										<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 text-center text-lg-right text-md-right">\n											<p class="m-0"><b><a class="btn theme-light-btn" role="button" (click)="checkmessage(\'Ok\',\'\')">Message to seller</a></b></p>\n										</div>\n									</div>\n								</div>\n								<ng-template #oneItem_review>\n									<div class="row m-0 review-item-and-shipping-main-detail single_product">\n										<div class="col-lg-2 col-md-3 col-12 pt-2 pb-2">\n											<img src="{{trandingImgUrl}}{{checkOut_data?.product_info.id}}/L/{{checkOut_data?.product_info.photos[0]}}" class="img-fluid mx-auto d-block border col-lg-12 col-md-12 col-6">\n										</div>\n										<div class="col-lg-8 col-md-7 col-12 pt-2 pb-2 set_fontSize">\n											<p class="font-weight-bold mb-1">{{checkOut_data?.product_info.title}}</p>\n											<p class="font-weight-normal mb-1">\n												<span *ngIf="checkOut_data?.product_info.specification.color != \'-\'"><b>Color : </b>{{checkOut_data?.product_info.specification.color}} &nbsp;</span> \n												<span *ngIf="checkOut_data?.product_info.specification.size != \'-\'"><b>Size : </b>{{checkOut_data?.product_info.specification.size}} &nbsp;</span> \n												<span *ngIf="checkOut_data?.product_info.specification.condition != null"><b>Condition : </b>{{checkOut_data?.product_info.specification.condition}}</span>\n											</p>\n											<form>\n												<div class="form-group row mb-2">\n													<label for="inputQuantity" class="col-lg-2 col-4 col-md-4 col-form-label"><b>Quantity:-</b></label>\n													<div class="col-lg-10 col-8 col-md-8 ">\n														<input type="hidden" value="{{checkOut_data?.product_info.product_quantity}}" id="hidden_quan"/>\n														<select id="inputQuantity" class="form-control quantity-select">\n															<option value="1">1</option>\n															<option value="2">2</option>\n															<option value="3">3</option>\n															<option value="4">4</option>\n															<option value="5">5</option>\n															<option value="6">6</option>\n															<option value="7">7</option>\n															<option value="8">8</option>\n															<option value="9">9</option>\n															<option value="10">10</option>\n														</select>\n														<span class="error_span d-none" id="error-quantitymax"> You Entered maximum <b> {{ checkOut_data?.product_info.product_quantity }} </b> and  <b> 1 </b> or more quantity </span>\n													</div>\n												</div>\n											</form>\n											<p class="mb-1"><b>Delivery:-</b> <span> {{checkOut_data?.product_info.delivery_days}} days</span></p>\n										</div>\n										<div class="col-lg-2 col-md-2 col-12 pt-2 pb-2 set_fontSize text-lg-right text-md-right">\n											<span>{{checkOut_data?.product_info.final_price | number}} AED</span>\n										</div>\n\n									</div>\n								</ng-template>\n								<div *ngIf="checkOut_data?.cart == true;else oneItem_review">\n									<div class="review-item-and-shipping mb-3" *ngFor="let chkinfo of checkOut_data?.product_info.businessName;let i=index;">\n										<div class="col-lg-12 col-md-12 col-12 p-0 bg-light border">\n											<div class="row m-0 set_fontSize">\n												<div class="col-lg-6 col-md-6 col-12 pt-3 pb-3 text-center text-lg-left text-md-left">\n													<p class="m-0">\n														<b>Seller:- </b> <span>{{chkinfo}}</span>\n													</p>\n												</div>\n												<div class="col-lg-6 col-md-6 col-12 pt-2 pb-2 text-center text-lg-right text-md-right">\n													<p class="m-0"><b><a class="btn theme-light-btn" role="button" (click)="checkmessage(\'Ok\',gruopSeller[i][1][0].seller_id)">Message to seller</a></b></p>\n												</div>\n											</div>\n										</div>\n\n										<div class="row m-0 review-item-and-shipping-main-detail multiple_review" *ngFor="let chkinfogrp of gruopSeller[i][1]">\n											<div class="col-lg-2 col-md-3 col-12 pt-2 pb-2">\n												<img src="{{trandingImgUrl}}{{chkinfogrp?.product_id}}/L/{{chkinfogrp?.photos[0]}}" class="img-fluid mx-auto d-block border col-lg-12 col-md-12 col-6">\n											</div>\n											<div class="col-lg-8 col-md-7 col-12 pt-2 pb-2 set_fontSize">\n												<p class="font-weight-bold mb-1">{{chkinfogrp?.title}}</p>\n												<p class="font-weight-normal mb-1">\n													<span *ngIf="chkinfogrp?.specification.color[0] != \'-\'"><b> Color : </b>{{chkinfogrp?.specification.color[0]}} &nbsp;</span> \n													<span *ngIf="chkinfogrp?.specification.size[0] != \'-\'"><b>Size : </b>{{chkinfogrp?.specification.size[0]}} &nbsp;</span> \n													<span *ngIf="chkinfogrp?.specification.condition[0] != null"><b>Condition : </b>{{chkinfogrp?.specification.condition[0]}}</span>\n												</p>\n												<form>\n													<div class="form-group row mb-2">\n														<label for="inputQuantity" class="col-lg-2 col-4 col-md-4 col-form-label"><b>Quantity:-</b></label>\n														<div class="col-lg-10 col-8 col-md-8">\n															<select id="inputQuantity-{{chkinfogrp?.product_id}}" class="form-control quantity-select">\n																<option value="1">1</option>\n																<option value="2">2</option>\n																<option value="3">3</option>\n																<option value="4">4</option>\n																<option value="5">5</option>\n																<option value="6">6</option>\n																<option value="7">7</option>\n																<option value="8">8</option>\n																<option value="9">9</option>\n																<option value="10">10</option>\n															</select>\n															<span class="error_span d-none" id="error-{{chkinfogrp?.product_id}}"> You Entered maximum <b> {{ chkinfogrp?.product_quantity }} </b> quantity </span>\n															<a (click)="updateCart(chkinfogrp?.cart_id,chkinfogrp?.product_id,chkinfogrp?.product_quantity)"><span class="update_cart d-none" id="update-{{chkinfogrp?.product_id}}">Update</span></a>\n														</div>\n													</div>\n												</form>\n												<p class="mb-1"><b>Delivery:-</b> <span> {{chkinfogrp?.delivery_days}} days</span></p>\n											</div>\n											<div class="col-lg-2 col-md-2 col-12 pt-2 pb-2 set_fontSize text-lg-right text-md-right">\n												<span>{{chkinfogrp?.final_price}} AED</span>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n							<ng-template #showsendmsg>\n								<div class="review-item-and-shipping mt-3 p-2">\n									<div *ngFor="let chkinfo of checkOut_data?.product_info.businessName;let i=index;">\n										<div class="row m-0 set_fontSize" *ngIf="gruopSeller[i][1][0].seller_id == setSellerId">\n											<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 text-center text-lg-left text-md-left">\n												<label class="label_personal"><span class="text-danger font-weight-bold">*</span>Ptoduct name</label>\n												<select class="form-control allcategories" id="productID">\n													<option *ngFor="let chkinfogrp of gruopSeller[i][1]" value="{{chkinfogrp?.product_id}}" id="{{chkinfogrp?.seller_id}}">{{chkinfogrp?.title}}</option>\n												</select>\n											</div>\n										</div>\n									</div>\n									<div class="row m-0 checkout-detail set_fontSize">\n										<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 text-center text-lg-left text-md-left">\n											<textarea class="form-control" rows="3" id="sndmsgtext" name="sndmsgtext" #sndmsgtext="ngModel" required ngModel></textarea>\n											<div *ngIf="sndmsgtext.invalid && (sndmsgtext.dirty || sndmsgtext.touched)" class="error-box">\n												<div *ngIf="sndmsgtext.errors.required">\n													* Enter message.\n												</div>\n											</div>\n										</div>\n										<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 text-center text-lg-left text-md-left">\n											<button class="btn theme-light-btn" role="button" (click)="sendmessage()" [disabled]="!sndmsgtext.valid">Send Message</button>\n											<button class="btn theme-light-btn" role="button" (click)="checkmessage(\'cancel\',\'\')">Return</button>\n										</div>\n									</div>\n								</div>\n							</ng-template>\n						</div>\n					</div>\n				</div>\n				<ng-template #oneItem>\n					<div class="col-lg-3 col-md-6 col-12 mt-3 p-3 p-lg-0 p-md-3 p-3 set_fontSize">\n						<div class="row m-0">\n							<div class="col-lg-12 col-md-12 col-12 bg-light border rounded">\n								<span class="warning_msg mb-3" *ngIf="couponCode?.status == \'fail\'"><i class="fa fa-exclamation-triangle"></i> Oops, {{couponCode?.msg}}</span>\n								<form>\n									<h6 class="mb-2 mt-2">Have a coupon? Apply here </h6>\n									<div class="form-group row mb-2 set_fontSize" *ngIf="retrive_codedata == null;else removeCoupan">\n										<div class="col-sm-8">\n											<input type="text" class="form-control" id="inputCode" placeholder="" value="">\n										</div>\n										<div class="col-sm-2 text-center mt-2 mt-lg-0 mt-md-0">\n											<button class="btn theme-light-btn" role="button" type="submit" (click)="applyCouponCode()">Apply</button>\n										</div>\n									</div>\n									<ng-template #removeCoupan>\n										<div>\n											<div class="text-success"> <i class="fa fa-check-circle"></i> Coupon Successfully Applied</div>\n											<span>{{data_coupanStore?.data.code}} </span>\n											<span *ngIf="data_coupanStore?.data.code_type == \'Flat Discount\'">{{data_coupanStore?.data.discount | currency:\'AED\'}} off</span>\n											<span *ngIf="data_coupanStore?.data.code_type == \'Percentage Discount\'">{{data_coupanStore?.data.discount}}% off</span>\n											<span><a (click)="removeCoupan_Code()">Remove</a></span>\n										</div>\n									</ng-template>\n								</form>\n							</div>\n							<div class="col-lg-12 col-md-12 col-12 bg-light mt-3 border rounded">\n								<div class="row m-0">\n									<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n										<span>Item ({{checkOut_data?.product_info.quantity}})</span>\n									</div>\n									<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-right">\n										<span>{{checkOut_data?.total | number}} AED</span>\n									</div>\n								</div>\n								<div class="row m-0">\n									<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n										<span>Shipping</span>\n									</div>\n									<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-right">\n										<span>-</span>\n									</div>\n								</div>\n								<div class="row m-0 border-bottom-order-total">\n									<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n										<span>Import charges</span>\n									</div>\n									<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-right">\n										<span>-</span>\n									</div>\n								</div>\n								<div class="row m-0 border-bottom-order-total" *ngIf="retrive_codedata != null">\n									<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n										<span>Coupon discount</span>\n									</div>\n									<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-right">\n										<span *ngIf="couponCode?.data.code_type == \'Percentage Discount\'">{{couponCode?.data.discount}}%</span>\n										<span *ngIf="couponCode?.data.code_type == \'Flat Discount\'">{{couponCode?.data.discount}} AED</span>\n									</div>\n								</div>\n								<div class="row m-0">\n									<div class="col-lg-6 col-md-6 col-6 pt-3 pb-3 pr-1 pl-1 text-left">\n										<h6 class="m-0">Order total</h6>\n									</div>\n									<div class="col-lg-6 col-md-6 col-6 pt-3 pb-3 pr-1 pl-1 text-right">\n										<h6 class="m-0" *ngIf="couponCode?.status == \'success\';else show_old">{{couponCode?.total | number}} AED</h6>\n										<ng-template #show_old>\n											<h6 class="m-0">{{checkOut_data?.total | number}} AED</h6>\n										</ng-template>\n									</div>\n\n								</div>\n								<div class="row m-0">\n									<div class="col-lg-12 col-md-12 col-12 pr-1 pl-1 pb-1 text-center d-none showPaymentConvertation">\n										Estimated PayPal rate: 1.00 AED = 0.27 USD.\n									</div>\n									<div class="col-lg-12 col-md-12 col-12 p-0 text-center m-0 pb-3 d-none showPaymentConvertation">\n										Please refer to your statement for exact amount.\n									</div>\n									<span class="warning_msg mb-3 d-none" id="quantity_added">Please enter Quantiy 1 or more</span>\n									<div class="col-lg-12 col-md-12 col-12 pr-1 pl-1 pb-3 text-center">\n										<ng-template [ngIf]="checkOut_data?.cart == false">\n											<button class="btn theme-light-btn" (click)="ConfirmPay()" [disabled]="checkOut_data?.product_info.user_status == 0">Confirm and pay</button>\n										</ng-template>\n										<ng-template [ngIf]="checkOut_data?.cart == true">\n											<button class="btn theme-light-btn" (click)="ConfirmPay()">Confirm and pay</button>\n										</ng-template>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n				</ng-template>\n\n				<div class="col-lg-3 col-md-6 col-12 mt-3 p-3 p-lg-0 p-md-3 p-3 set_fontSize" *ngIf="checkOut_data?.cart == true;else oneItem">\n					<div class="row m-0">\n						<div class="col-lg-12 col-md-12 col-12 bg-light border rounded">\n							<span class="warning_msg mb-3" *ngIf="couponCode?.status == \'fail\'"><i class="fa fa-exclamation-triangle"></i> Oops, {{couponCode?.msg}}</span>\n							<form>\n								<h6 class="mb-2 mt-2">Have a coupon? Apply here</h6>\n								<div class="form-group row mb-2 set_fontSize" *ngIf="retrive_codedata == null || retrive_codedata == \'null\';else removeCoupan_multi">\n									<div class="col-sm-8">\n										<input type="text" class="form-control" id="inputCode" placeholder="" value="">\n									</div>\n									<div class="col-sm-2 text-center mt-2 mt-lg-0 mt-md-0">\n										<button class="btn theme-light-btn" role="button" type="submit" (click)="applyCouponCode()">Apply</button>\n									</div>\n								</div>\n								<ng-template #removeCoupan_multi>\n									<div>\n										<div class="text-success"> <i class="fa fa-check-circle"></i> Coupon Successfully Applied</div>\n										<span>{{data_coupanStore?.data.code}} </span>\n										<span *ngIf="data_coupanStore?.data.code_type == \'Flat Discount\'">{{data_coupanStore?.data.discount | currency:\'AED\'}} off</span>\n										<span *ngIf="data_coupanStore?.data.code_type == \'Percentage Discount\'">{{data_coupanStore?.data.discount}}% off</span>\n										<span><a (click)="removeCoupan_Code()">Remove</a></span>\n									</div>\n								</ng-template>\n							</form>\n						</div>\n						<div class="col-lg-12 col-md-12 col-12 mt-3 bg-light border rounded">\n							<div class="row m-0">\n								<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n									<span>Item ({{checkOut_data?.item_cnt}})</span>\n								</div>\n								<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-right">\n									<span>{{checkOut_data?.total}} AED</span>\n								</div>\n							</div>\n							<div class="row m-0">\n								<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n									<span>Shipping</span>\n								</div>\n								<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-right">\n									<span>-</span>\n								</div>\n							</div>\n							<div class="row m-0 border-bottom-order-total">\n								<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n									<span>Import charges</span>\n								</div>\n								<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-right">\n									<span>-</span>\n								</div>\n							</div>\n							<div class="row m-0 border-bottom-order-total" *ngIf="retrive_codedata != null">\n								<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-left">\n									<span>Coupon discount</span> -\n								</div>\n								<div class="col-lg-6 col-md-6 col-6 pt-2 pb-2 pr-1 pl-1 text-right">\n									<span *ngIf="couponCode?.data.code_type == \'Percentage Discount\'">{{couponCode?.data.discount}}%</span>\n									<span *ngIf="couponCode?.data.code_type == \'Flat Discount\'">{{couponCode?.data.discount}}</span>\n								</div>\n							</div>\n							<div class="row m-0">\n								<div class="col-lg-6 col-md-6 col-6 pt-3 pb-3 pr-1 pl-1 text-left">\n									<h6 class="m-0">Order total</h6>\n								</div>\n								<div class="col-lg-6 col-md-6 col-6 pt-3 pb-3 pr-1 pl-1 text-right">\n									<h6 class="m-0" *ngIf="couponCode?.status == \'success\';else show_old">{{couponCode?.total}} AED</h6>\n									<ng-template #show_old>\n										<h6 class="m-0">{{checkOut_data?.total}} AED</h6>\n									</ng-template>\n								</div>\n							</div>\n							<div class="row m-0">\n								<div class="col-lg-12 col-md-12 col-12 pr-1 pl-1 pb-1 text-center">\n									Estimated PayPal rate: 1.00 AED = 0.27 USD.\n								</div>\n								<div class="col-lg-12 col-md-12 col-12 p-0 text-center m-0 pb-3">\n									Please refer to your statement for exact amount.\n								</div>\n								<div class="col-lg-12 col-md-12 col-12 pr-1 pl-1 pb-3 text-center">\n									<a class="btn theme-light-btn" role="button" (click)="ConfirmPay()">Confirm and pay</a>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n\n	<footer-page></footer-page>\n</ion-content>\n<script>\n    fbq(\'track\', \'InitiateCheckout\');\n</script>'/*ion-inline-end:"/var/www/html/src/pages/product/check-out/check-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CheckOutPage);
    return CheckOutPage;
}());

//# sourceMappingURL=check-out.js.map

/***/ })

});
//# sourceMappingURL=33.js.map