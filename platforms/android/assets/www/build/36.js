webpackJsonp([36],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(803);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
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
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(alertCtrl, events, infoService, viewCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.infoService = infoService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.price = this.navParams.get('final_price');
        this.bid_price = this.navParams.get('bid_price');
        this.bids_response = null;
    }
    ModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
        this.events.publish('productdetails:functioncall');
    };
    ModalPage.prototype.placeBids = function () {
        var _this = this;
        var place_bids = {
            buyer_id: this.navParams.get('buyer_id'),
            seller_id: this.navParams.get('seller_id'),
            product_id: this.navParams.get('product_id'),
            bid_price: this.navParams.get('bid_price')
        };
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/bid/place-bid', place_bids, function (response) {
            if (response.bid.status == "success") {
                _this.bids_response = response;
                _this.infoService.hideLoading();
            }
            else {
                _this.infoService.hideLoading();
                _this.bids_response = null;
                var alert_1 = _this.alertCtrl.create({
                    title: 'Place Bid',
                    subTitle: response.bid.msg,
                    buttons: ['Dismiss']
                });
                alert_1.present();
            }
        }, function (error) {
            console.log(error);
            _this.infoService.hideLoading();
        });
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal',template:/*ion-inline-start:"/var/www/html/src/pages/modal/modal.html"*/'<ion-header>\n\n<ion-navbar>\n	<ion-title><h6>Start Bids</h6></ion-title>\n    <ion-buttons end>\n		<button ion-button (click)="closeModal()">X</button>\n    </ion-buttons>\n</ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="modalPopup">\n	<div *ngIf="bids_response == null">\n		<div>\n			<span class="fisrt-span"> {{price}} AED + See item description for shipping. </span>\n		</div>\n		<div class="row div_bidcontent pl-3 pr-3 ml-0 mr-0">\n			<div class="col-lg-8 col-md-8 col-12 text-center">\n				<span>Your bid amount:</span> {{bid_price}} AED\n			</div>\n			<div class="col-lg-4 col-md-4 col-12 text-center mt-lg-0 mt-3 mt-md-0">\n				<button class="btn theme-light-btn" (click)="placeBids()">Confirm</button>\n			</div>\n		</div>\n	</div>\n	\n	<div class="bid_sucess" *ngIf="bids_response != null">\n		<span>Bid Placed Successfully.</span> \n	</div>\n	<div>\n		<span class="text-left modalbottom">By placing a bid, you\'re committing to buy this item if you win.</span>\n	</div>\n</ion-content>\n\n\n   '/*ion-inline-end:"/var/www/html/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=36.js.map