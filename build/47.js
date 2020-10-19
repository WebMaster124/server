webpackJsonp([47],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveProductRatingPageModule", function() { return LeaveProductRatingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leave_product_rating__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LeaveProductRatingPageModule = /** @class */ (function () {
    function LeaveProductRatingPageModule() {
    }
    LeaveProductRatingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__leave_product_rating__["a" /* LeaveProductRatingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__leave_product_rating__["a" /* LeaveProductRatingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LeaveProductRatingPageModule);
    return LeaveProductRatingPageModule;
}());

//# sourceMappingURL=leave-product-rating.module.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveProductRatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_info__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeaveProductRatingPage = /** @class */ (function () {
    function LeaveProductRatingPage(googleanalytics, alertCtrl, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.leavefeedback = {
            sender_id: '',
            product_id: '',
            receiver_id: '',
            title: '',
            description: '',
            recommend: '',
            valueproduct: '',
            rate: 0,
            qualityproduct: '',
            feedback_by: 'buyer',
        };
        this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
        this.reviewAdded = false;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('Rate and Review');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    LeaveProductRatingPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        this.getData_decode = this.navParams.data.id;
        this.convert_decode = atob(this.getData_decode);
        this.detailsData = JSON.parse(this.convert_decode);
        $('body').removeClass().addClass('LeaveProductRating body');
        $(document).prop('title', 'Rate and Review | Dibdaa');
        var d = new Date();
        this.showYear = d.getFullYear();
    };
    LeaveProductRatingPage.prototype.ngAfterViewInit = function () {
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
    LeaveProductRatingPage.prototype.submitForm = function () {
        var _this = this;
        try {
            if (this.localItem.id == this.detailsData.sellerId) {
                var alert1 = this.alertCtrl.create({
                    title: 'RATE AND REVIEW',
                    subTitle: 'Sorry you cannot write review on your own items.',
                    buttons: [{
                            text: 'OK',
                            role: 'cancel',
                            cssClass: 'alert-button-changeColor'
                        }]
                });
                alert1.present();
                return;
            }
            this.leavefeedback.title = $('#review-title').val();
            this.leavefeedback.description = $('#checkout-instruction').val();
            this.leavefeedback.sender_id = this.localItem.id;
            this.leavefeedback.product_id = this.detailsData.ProId;
            this.leavefeedback.receiver_id = this.detailsData.sellerId;
            if ($('input[type=radio][name=reviewStars]:checked').val() == undefined) {
                this.leavefeedback.rate = 0;
            }
            else {
                this.leavefeedback.rate = $('input[type=radio][name=reviewStars]:checked').val();
            }
            this.leavefeedback.recommend = $('input[type=radio][name=recommend_yes]:checked').val();
            this.leavefeedback.valueproduct = $('input[type=radio][name=value_yes]:checked').val();
            this.leavefeedback.qualityproduct = $('input[type=radio][name=quality_yes]:checked').val();
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/rating/save-rating', this.leavefeedback, function (response) {
                if (response.product_rate.status == "success") {
                    _this.reviewAdded = true;
                    _this.infoService.hideLoading();
                }
                else {
                    $('.showFeedbackError').removeClass('d-none');
                    _this.reviewAdded = false;
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
    };
    LeaveProductRatingPage.prototype.goToback = function () {
        this.navCtrl.pop();
    };
    LeaveProductRatingPage.prototype.resetFunc = function () {
        $('#select-two-money').addClass('d-none');
    };
    LeaveProductRatingPage.prototype.onKeyPressed = function (val) {
        if (val.which === 32 && !val.target.value.length)
            val.preventDefault();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], LeaveProductRatingPage.prototype, "content", void 0);
    LeaveProductRatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-leave-product-rating',template:/*ion-inline-start:"/var/www/html/src/pages/faq/leave-product-rating/leave-product-rating.html"*/'\n<ion-content padding class="leave-feedback">\n  <div class="wrapper">\n    <div class="container leave-feedback-main">\n      <div class="row setFont_size">\n        <div class="col-lg-12 col-md-12 col-xl-12 col-12">\n          <p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n			<p class="mb-2">\n            <a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n            <a href="#/viewItem/{{detailsData?.ProId}}" class="breadcrumblink">Product details</a> &nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n            <a class="breadcrumblink font-weight-bold" disabled>Rate and review</a></p>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-lg-3 col-md-3 col-12 mt-3 mb-3">\n          <a (click)="goToback()">\n            <img src="{{trandingImgUrl}}{{detailsData?.ProId}}/L/{{detailsData?.ProImage}}" class="img-fluid menclothesimages">\n          </a>\n        </div>\n        <div class="col-lg-9 col-md-9 col-12 mt-3 mb-3">\n          <h5 class="mb-3 rate-and-review">RATE AND REVIEW</h5>\n          <a (click)="goToback()" class="producttitle-link">\n            <h6 class="producttitle ">\n              {{detailsData?.ProTitle}}\n            </h6>\n          </a>\n          <form class="mt-3" *ngIf="reviewAdded == false" #frm="ngForm" method="post" role="form" novalidate>\n            <div class="form-group row ml-0 mr-0">\n              <div class="col-sm-3 col-md-5 col-lg-3 pr-0">\n                <label class="col-form-label">\n                  Rate this product :-\n                </label>\n              </div>\n              <div class="col-sm-9 col-md-7 col-lg-9 rating-star">\n                <div id="reviewStars-input">\n					<input id="star-4" type="radio" name="reviewStars" value="5" [(ngModel)]="review_Stars" #reviewStars="ngModel">\n					<label title="Excellent" for="star-4"></label>\n                 \n					<input id="star-3" type="radio" name="reviewStars" value="4" [(ngModel)]="review_Stars">\n					<label title="Good" for="star-3"></label>\n\n					<input id="star-2" type="radio" name="reviewStars" value="3" [(ngModel)]="review_Stars">\n					<label title="Regular" for="star-2"></label>\n\n					<input id="star-1" type="radio" name="reviewStars" value="2" [(ngModel)]="review_Stars">\n					<label title="Poor" for="star-1"></label>\n\n					<input id="star-0" type="radio" name="reviewStars" value="1" [(ngModel)]="review_Stars">\n					<label title="Bad" for="star-0"></label>\n				</div>\n				<div class="setFont_size pt-2">\n					<span *ngIf="reviewStars?.value == 5">Excellent</span>\n					<span *ngIf="reviewStars?.value == 4">Good</span>\n					<span *ngIf="reviewStars?.value == 3">Regular</span>\n					<span *ngIf="reviewStars?.value == 2">Poor</span>\n					<span *ngIf="reviewStars?.value == 1">Bad</span>\n				</div>\n              </div>\n            </div>\n\n            <div class="form-group">\n              <label class="tell-us-more">Tell us more</label>\n            </div>\n            <div class="form-group row ml-0 mr-0">\n              <div class="col-sm-3 col-md-5 col-lg-3 pr-0">\n                <label class="col-form-label"><span class="text-danger">*</span>Do you recommend it?</label>\n              </div>\n              <div class="col-sm-9 col-md-7 col-lg-9 rating-type pl-0 pt-lg-0 pt-md-2">\n                <div class="row m-0 setFont_size">\n                  <div class="col-lg-3 pt-lg-2 col-md-6 col-6 form-group">\n                    <input type="radio" id="recommend_yes" name="recommend_yes" value="Yes" [(ngModel)]="recommend_type" required #recommendtype="ngModel">\n                    <label for="recommend_yes"><i class="fa fa-plus-circle text-success feedback-range"></i>\n                      Yes</label>\n                  </div>\n                  <div class="col-lg-3 pt-lg-2 col-md-6 col-6 form-group">\n                    <input type="radio" id="recommend_no" name="recommend_yes" value="No" [(ngModel)]="recommend_type" required>\n                    <label for="recommend_no"><i class="fa fa-minus-circle text-danger feedback-range"></i>\n                      No</label>\n                  </div>\n                </div>\n                <div *ngIf="recommendtype.invalid" class="error-box pl-3">\n                  <div *ngIf="recommendtype.errors.required">\n                    * Select option.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="form-group row ml-0 mr-0">\n              <div class="col-sm-3 col-md-5 col-lg-3 pr-0">\n                <label class="col-form-label"><span class="text-danger">*</span>Is it a good value?</label>\n              </div>\n              <div class="col-sm-9 col-md-7 col-lg-9 rating-type pl-0 pt-lg-0 pt-md-2">\n                <div class="row m-0 setFont_size">\n                  <div class="col-lg-3 pt-lg-2 col-md-6 col-6 form-group">\n                    <input type="radio" id="value_yes" name="value_yes" value="Yes" [(ngModel)]="value_type" required #valuetype="ngModel">\n                    <label for="value_yes"><i class="fa fa-plus-circle text-success feedback-range"></i>\n                      Yes</label>\n                  </div>\n                  <div class="col-lg-3 pt-lg-2 col-md-6 col-6 form-group">\n                    <input type="radio" id="value_no" name="value_yes" value="No" [(ngModel)]="value_type" required>\n                    <label for="value_no"><i class="fa fa-minus-circle text-danger feedback-range"></i>\n                      No</label>\n                  </div>\n                </div>\n                <div *ngIf="valuetype.invalid" class="error-box pl-3">\n                  <div *ngIf="valuetype.errors.required">\n                    * Select option.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="form-group row ml-0 mr-0">\n              <div class="col-sm-3 col-md-5 col-lg-3 pr-0">\n                <label class="col-form-label"><span class="text-danger">*</span>Is it of good quality?</label>\n              </div>\n              <div class="col-sm-9 col-md-7 col-lg-9 rating-type pl-0 pt-lg-0 pt-md-2">\n                <div class="row m-0 setFont_size">\n                  <div class="col-lg-3 pt-lg-2 col-md-6 col-6 form-group">\n                    <input type="radio" id="quality_yes" name="quality_yes" value="Yes" [(ngModel)]="quality_type" required #qualitytype="ngModel">\n                    <label for="quality_yes"><i class="fa fa-plus-circle text-success feedback-range"></i>\n                      Yes</label>\n                  </div>\n                  <div class="col-lg-3 pt-lg-2 col-md-6 col-6 form-group">\n                    <input type="radio" id="quality_no" name="quality_yes" value="No" [(ngModel)]="quality_type" required>\n                    <label for="quality_no"><i class="fa fa-minus-circle text-danger feedback-range"></i>\n                      No</label>\n                  </div>\n                </div>\n                <div *ngIf="qualitytype.invalid" class="error-box pl-3">\n                  <div *ngIf="qualitytype.errors.required">\n                    * Select option.\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class="form-group">\n              <label class="tell-us-more">Write your review</label>\n              <div class="toggale-button">\n                <div class="form-group row ml-0 mr-0 mt-3 mb-3">\n                  <label for="review-title" class="col-sm-3 col-md-5 col-lg-3 col-form-label"><span class="text-danger">*</span>Title your review :-</label>\n                  <div class="col-sm-12 col-md-6 col-lg-5 col-12">\n                    <input type="text" class="form-control" name ="title" id="review-title" placeholder="Title your review" #title="ngModel" required ngModel minlength="3" maxlength="40" (keypress)="onKeyPressed($event)">\n                    <div *ngIf="title.invalid && (title.dirty || title.touched)" class="error-box">\n                      <div *ngIf="title.errors.required">\n                        * Enter title.\n                      </div>\n                      <div *ngIf="title.errors.minlength">\n                        * Minimum title length is 3.\n                      </div>\n                      <div *ngIf="title.errors.maxlength">\n                        * Maximum title length is 40.\n                      </div>\n					</div>\n                  </div>\n                </div>\n                <div class="form-group row m-0">\n                  <label for="review-title" class="col-sm-3 col-md-5 col-lg-3 col-form-label"><span class="text-danger">*</span>Write your review :-</label>\n                  <div class="col-sm-9 col-md-7 col-lg-9">\n                    <textarea class="form-control" rows="3" name="description" id="checkout-instruction" placeholder="Write your review" #description="ngModel" required ngModel maxlength="200" minlength="6" (keypress)="onKeyPressed($event)"></textarea>\n                    <div *ngIf="description.invalid && (description.dirty || description.touched)" class="error-box">\n                      <div *ngIf="description.errors.required">\n                        * Enter description.\n                      </div>\n                      <div *ngIf="description.errors.minlength">\n                        * Minimum description length is 6.\n                      </div>\n                      <div *ngIf="description.errors.maxlength">\n                        * Maximum description length is 200.\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="form-group text-center mt-4 mb-4">\n              <div class="text-danger d-none showFeedbackError pt-2 pb-2 setFont_size">Your are already give feedback on this product</div>\n              <button type="submit" class="btn theme-light-btn mr-3" (click)="submitForm()" [disabled]="!frm.valid">Submit</button>\n              <button type="reset" class="btn theme-dark-btn ml-3" (click)="resetFunc()">Reset</button>\n            </div>\n          </form>\n          <div class="form-group text-center p-5" *ngIf="reviewAdded == true">\n            <h5> Thank You! </h5>\n            <img src="assets/images/tick-512.png" width="60px" height="60px" />\n            <p class="mt-3 setSpace_mobile"> Your review has been successfully submitted. </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    	<!--================Footer Area =================-->\n	<footer-page></footer-page>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/faq/leave-product-rating/leave-product-rating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], LeaveProductRatingPage);
    return LeaveProductRatingPage;
}());

//# sourceMappingURL=leave-product-rating.js.map

/***/ })

});
//# sourceMappingURL=47.js.map