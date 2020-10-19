webpackJsonp([23],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageModule", function() { return ThankyouPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thankyou__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ThankyouPageModule = /** @class */ (function () {
    function ThankyouPageModule() {
    }
    ThankyouPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ThankyouPageModule);
    return ThankyouPageModule;
}());

//# sourceMappingURL=thankyou.module.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ThankyouPage = /** @class */ (function () {
    function ThankyouPage(googleanalytics, http_mobile, plt, http, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.http_mobile = http_mobile;
        this.plt = plt;
        this.http = http;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('OrderSuccess');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    ThankyouPage.prototype.ngAfterViewInit = function () {
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
    ThankyouPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
            this.getplaceOrderdata = JSON.parse(localStorage.getItem('checkoutInfo'));
            this.getPayKey = localStorage.getItem('KEYPaypal');
        }
        $(".zoomContainer").remove();
        $('body').removeClass().addClass('ThankYou body');
        $(document).prop('title', 'ThankYou');
        if (this.getPayKey == null) {
            this.order_Id = this.navParams.data.id;
        }
        else {
            this.getOrderdetails();
        }
    };
    ThankyouPage.prototype.getOrderdetails = function () {
        var _this = this;
        try {
            this.infoService.showLoading();
            var pass_data_pay = {
                pay_key: this.getPayKey
            };
            this.getplaceOrderdata.order_status = 'Completed';
            if (this.plt.is('core') == true || this.plt.is('mobileweb') == true || this.plt.is('android') == true) {
                var combined = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].forkJoin(this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/checkout/place-order', this.getplaceOrderdata, { headers: { "Auth": "dibdaaauth" } }).map(function (res) { return res; }), this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/pay/paypal-payment-detail', pass_data_pay, { headers: { "Auth": "dibdaaauth" } }).map(function (res) { return res; }));
                var self = this;
                combined.subscribe(function (latestValues) {
                    var data_placeOrder = latestValues[0], data_paymentDetails = latestValues[1];
                    if (data_placeOrder.place_order.status == "success") {
                        _this.order_Id = data_placeOrder.place_order.order_id;
                        localStorage.removeItem('coupanCode');
                        localStorage.removeItem('checkoutInfo');
                        localStorage.removeItem('KEYPaypal');
                        self.payment_Details = data_paymentDetails;
                        self.storeOrderDetails();
                    }
                    self.infoService.hideLoading();
                });
            }
            else {
                var headers = {
                    'Auth': 'dibdaaauth',
                };
                var combined = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].forkJoin(this.http_mobile.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/checkout/place-order', this.getplaceOrderdata, headers).then(function (res) { return res; }), this.http_mobile.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/pay/paypal-payment-detail', pass_data_pay, headers).then(function (res) { return res; }));
                var self = this;
                combined.subscribe(function (latestValues) {
                    var data_placeOrder = latestValues[0], data_paymentDetails = latestValues[1];
                    var convertdata_placeOrder = JSON.parse(data_placeOrder.data);
                    var convertdata_paymentDetails = JSON.parse(data_paymentDetails.data);
                    if (convertdata_placeOrder.place_order.status == "success") {
                        _this.order_Id = convertdata_placeOrder.place_order.order_id;
                        localStorage.removeItem('coupanCode');
                        localStorage.removeItem('checkoutInfo');
                        localStorage.removeItem('KEYPaypal');
                        self.payment_Details = convertdata_paymentDetails;
                        self.storeOrderDetails();
                    }
                    self.infoService.hideLoading();
                });
            }
        }
        catch (Error) {
            console.log(Error);
            this.infoService.hideLoading();
        }
    };
    ThankyouPage.prototype.storeOrderDetails = function () {
        var _this = this;
        var create_array = [];
        for (var i = 0; i < this.payment_Details.paymentInfoList.paymentInfo.length; i++) {
            create_array.push({
                "transaction_id": this.payment_Details.paymentInfoList.paymentInfo[i].transactionId,
                "transaction_status": this.payment_Details.paymentInfoList.paymentInfo[i].transactionStatus,
                "sendertransaction_id": this.payment_Details.paymentInfoList.paymentInfo[i].senderTransactionId,
                "sendertransaction_status": this.payment_Details.paymentInfoList.paymentInfo[i].senderTransactionStatus,
                "amount": this.payment_Details.paymentInfoList.paymentInfo[i].receiver.amount,
                "receiver_email": this.payment_Details.paymentInfoList.paymentInfo[i].receiver.email,
            });
        }
        var passdata = {
            "payment_Info": create_array,
            "payKey": this.payment_Details.payKey,
            "sender_email": this.payment_Details.senderEmail,
            "order_id": this.order_Id
        };
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/checkout/store-payment-details', passdata, function (response) {
            _this.countCart();
        }, function (error) {
            console.log(error);
        });
    };
    ThankyouPage.prototype.countCart = function () {
        var cart_details = {
            "user_id": this.localItem.id
        };
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/message/unread-msg-count', cart_details, function (response) {
            if (response.count.status == "success" && response.count.cnt > 0) {
                $('#ShowMessageCount').text(response.count.cnt);
                $('#ShowMsgCount').text(response.count.cnt);
            }
            else {
                $('#ShowMessageCount').text('');
                $('#ShowMsgCount').text('');
            }
            if (response.count.status == "success" && response.count.cart_total > 0) {
                $('#addtoCount').text(response.count.cart_total);
                $('#addtoCount_mobile').text(response.count.cart_total);
            }
            else {
                $('#addtoCount').text('');
                $('#addtoCount_mobile').text('');
            }
        }, function (error) {
            console.log(error);
        });
    };
    ThankyouPage.prototype.goToDetails = function () {
        this.navCtrl.push('OrderDetailPage', {
            id: this.order_Id
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ThankyouPage.prototype, "content", void 0);
    ThankyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-thankyou',template:/*ion-inline-start:"/var/www/html/src/pages/thankyou/thankyou.html"*/'<ion-content padding>\n<div class="thankyou">\n	<div class="wrapper">\n		<div class="container thankyou-page-main mb-3 text-center">\n			<div class="row">\n				<div class="col-lg-12 col-md-12 col-12 mt-3 mb-3">\n					<h1 class="text-center mt-3 text-uppercase">Thank you.</h1>\n				</div>\n				<div class="col-lg-12 col-md-12 col-12 text-center mb-3">\n					<i class="fa fa-check-square-o right-icon"></i>\n				</div>\n			</div>\n			<div class="row">\n				<div class="col-lg-12 col-md-12 col-12">\n					<p class="receipt-info-txt">Your order id is : <span><a class="text-primary" (click)="goToDetails()">#{{order_Id}}</a></span></p>\n					<p class="receipt-info-txt">Congrats! Your order is complete.</p>\n					<p class="receipt-info-txt">Thanks for choosing Dibdaa.</p>\n					<p class="receipt-info-txt">You will receive confirmation of your order via email shortly. In the meantime, You can view your order details <a class="text-primary" (click)="goToDetails()">here.</a></p>\n				</div>\n			</div>\n		</div>	\n	</div>\n	<footer-page></footer-page>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/thankyou/thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ThankyouPage);
    return ThankyouPage;
}());

//# sourceMappingURL=thankyou.js.map

/***/ })

});
//# sourceMappingURL=23.js.map