webpackJsonp([49],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveFeedbackSellerPageModule", function() { return LeaveFeedbackSellerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leave_feedback_seller__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LeaveFeedbackSellerPageModule = /** @class */ (function () {
    function LeaveFeedbackSellerPageModule() {
    }
    LeaveFeedbackSellerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__leave_feedback_seller__["a" /* LeaveFeedbackSellerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__leave_feedback_seller__["a" /* LeaveFeedbackSellerPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], LeaveFeedbackSellerPageModule);
    return LeaveFeedbackSellerPageModule;
}());

//# sourceMappingURL=leave-feedback-seller.module.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveFeedbackSellerPage; });
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





var LeaveFeedbackSellerPage = /** @class */ (function () {
    function LeaveFeedbackSellerPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
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
            feedback_type: '',
            rate: 0,
            communicaton: '',
            recommend: '',
            valuemoney: 0,
            dispatched: 0,
            feedback_by: 'seller',
            order_id: ''
        };
        this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
        this.reviewAdded = false;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('LeaveFeedbackSeller');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    LeaveFeedbackSellerPage.prototype.ionViewWillEnter = function () {
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
        $('body').removeClass().addClass('LeaveFeedbackSeller body');
        $(document).prop('title', 'Feedback Reply');
        $(".zoomContainer").remove();
        var d = new Date();
        this.showYear = d.getFullYear();
    };
    LeaveFeedbackSellerPage.prototype.ngAfterViewInit = function () {
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
    LeaveFeedbackSellerPage.prototype.submitForm = function () {
        var _this = this;
        try {
            this.leavefeedback.title = $('#review-title').val();
            this.leavefeedback.description = $('#checkout-instruction').val();
            this.leavefeedback.sender_id = this.detailsData.sellerId;
            this.leavefeedback.product_id = this.detailsData.productId;
            this.leavefeedback.receiver_id = this.detailsData.buyerId;
            this.leavefeedback.feedback_by = this.localItem.role;
            this.leavefeedback.order_id = this.detailsData.orderId;
            this.leavefeedback.feedback_type = $('input[type=radio][name=feedback_type]:checked').val();
            this.leavefeedback.communicaton = $('input[type=radio][name=communicationStars]:checked').val();
            this.leavefeedback.recommend = $('input[type=radio][name=moneyStars]:checked').val();
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/feedback/save-feedback', this.leavefeedback, function (response) {
                if (response.feedback.status == "success") {
                    _this.reviewAdded = true;
                    _this.infoService.hideLoading();
                }
                else {
                    _this.reviewAdded = false;
                    _this.feedbackresponse = response;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], LeaveFeedbackSellerPage.prototype, "content", void 0);
    LeaveFeedbackSellerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-leave-feedback-seller',template:/*ion-inline-start:"/var/www/html/src/pages/faq/leave-feedback-seller/leave-feedback-seller.html"*/'\n<ion-content padding class="leave-feedback">\n<div class="wrapper">\n	<div class="container leave-feedback-main">\n		<div class="row setFont_size">\n			<div class="col-lg-12 col-md-12 col-xl-12 col-12">\n				<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n				<p class="mb-2">\n					<a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n					<!--<a href="#/viewItem/{{detailsData?.productId}}" class="breadcrumblink">Product details</a> &nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;-->\n					<a class="breadcrumblink font-weight-bold" disabled>Feedback</a></p>\n			</div>\n		</div>\n		<div class="row m-0">\n			<div class="col-lg-12 col-md-12 col-12 p-0 mb-2">\n				<h5 class="m-0">Feedback</h5>\n			</div>\n		</div>\n		<div class="row">\n			<div class="col-lg-3 col-md-3 col-12 mt-3 mb-3">\n				<a (click)="goToback()">\n					<img src="{{trandingImgUrl}}{{detailsData?.productId}}/L/{{detailsData?.productPhoto}}" class="img-fluid menclothesimages">\n				</a>\n			</div>\n			<div class="col-lg-9 col-md-9 col-12 mt-3 mb-3">\n				<div class="form-group mb-2">\n					<h5 class="mb-0 rate-and-review">ABOUT BUYER</h5>\n				</div>\n				<div class="form-group row ml-0 mr-0">\n					<div class="col-sm-3 col-md-5 col-lg-3 pr-0">\n						<label class="col-form-label">Buyer Name :-</label>\n					</div>\n					<div class="col-sm-9 col-md-7 col-lg-9 mt-1 setFont_size">\n						<span>{{detailsData?.buyerName}}</span>\n					</div>\n				</div>\n				<h5 class="mb-3 rate-and-review">RATE AND REVIEW</h5>\n				<a class="producttitle-link">\n					<h6 class="producttitle "> {{detailsData?.productTitle}} </h6>\n				</a>\n				<form class="mt-3" *ngIf="reviewAdded == false" #frm="ngForm"method="post" role="form" novalidate>\n					<div class="form-group row ml-0 mr-0 mb-0">\n						<div class="col-sm-3 col-md-5 col-lg-3 pr-0">\n							<label class="col-form-label"><span class="text-danger">*</span>Feedback\n								type :-</label>\n						</div>\n						<div class="col-sm-9 col-md-7 col-lg-9 rating-type pl-0">\n							<div class="row m-0 setFont_size">\n								<div class="col-lg-3 pt-lg-2 col-md-12 col-12 form-group">\n									<input type="radio" id="possitive" name="feedback_type" value="Positive" [(ngModel)]="feedback_type" required #feedbacktype="ngModel">\n									<label for="possitive"><i class="fa fa-plus-circle text-success feedback-range"></i>\n										Possitive</label>\n								</div>\n								<div class="col-lg-3 pt-lg-2 col-md-12 col-12 form-group">\n									<input type="radio" id="negative" name="feedback_type" value="Negative" [(ngModel)]="feedback_type" required>\n									<label for="negative"><i class="fa fa-minus-circle text-danger feedback-range"></i>\n										Negative</label>\n								</div>\n								<div class="col-lg-3 pt-lg-2 col-md-12 col-12 form-group">\n									<input type="radio" id="neutral" name="feedback_type" value="Neutral" [(ngModel)]="feedback_type" required>\n									<label for="neutral"><i class="fa fa-dot-circle-o text-secondary feedback-range"></i>\n										Neutralt</label>\n								</div>\n							</div>\n							<div *ngIf="feedbacktype.invalid" class="error-box pl-3">\n								<div *ngIf="feedbacktype.errors.required">\n									* Select option.\n								</div>\n							</div>\n						</div>\n					</div>\n					<div class="form-group">\n						<label class="tell-us-more">Tell us more</label>\n					</div>\n					<div class="form-group row ml-0 mr-0">\n						<div class="col-sm-3 col-md-5 col-lg-3 pr-0">\n							<label class="col-form-label"><span class="text-danger">*</span>Communicaton with Buyer :-</label>\n						</div>\n						<div class="col-sm-9 col-md-7 col-lg-9 rating-star">\n							<div id="CommunicatonStars-input">\n								<input id="star-9" type="radio" name="communicationStars" value="5" [(ngModel)]="communicationStars" required #communication="ngModel">\n								<label title="Excellent" for="star-9" ></label>\n\n								<input id="star-8" type="radio" name="communicationStars" value="4" [(ngModel)]="communicationStars" required>\n								<label title="Good" for="star-8"></label>\n\n								<input id="star-7" type="radio" name="communicationStars" value="3" [(ngModel)]="communicationStars" required>\n								<label title="Regular" for="star-7"></label>\n\n								<input id="star-6" type="radio" name="communicationStars" value="2" [(ngModel)]="communicationStars" required>\n								<label title="Poor" for="star-6"></label>\n\n								<input id="star-5" type="radio" name="communicationStars" value="1" [(ngModel)]="communicationStars" required>\n								<label title="Bad" for="star-5"></label>\n								\n								<div *ngIf="communication.invalid" class="error-box">\n									<div *ngIf="communication.errors.required">\n									* Select option.\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n						\n					<div class="form-group row ml-0 mr-0">\n						<div class="col-sm-3 col-md-5 col-lg-3 pr-0">\n							<label class="col-form-label"><span class="text-danger">*</span>Payment made promptly :-</label>\n						</div>\n						<div class="col-sm-9 col-md-7 col-lg-9 rating-star">\n							<div id="MoneyStars-input">\n								<input id="star-20" type="radio" name="moneyStars" value="5" [(ngModel)]="moneyStars" required #moneystr="ngModel">\n								<label title="Excellent" for="star-20"></label>\n\n								<input id="star-19" type="radio" name="moneyStars" value="4" [(ngModel)]="moneyStars" required>\n								<label title="Good" for="star-19"></label>\n\n								<input id="star-18" type="radio" name="moneyStars" value="3" [(ngModel)]="moneyStars" required>\n								<label title="Regular" for="star-18"></label>\n\n								<input id="star-17" type="radio" name="moneyStars" value="2" [(ngModel)]="moneyStars" required>\n								<label title="Poor" for="star-17"></label>\n\n								<input id="star-16" type="radio" name="moneyStars" value="1" [(ngModel)]="moneyStars" required>\n								<label title="Bad" for="star-16"></label>\n								\n								<div *ngIf="moneystr.invalid" class="error-box">\n									<div *ngIf="moneystr.errors.required">\n										* Select option.\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n					<div class="form-group">\n						<label class="tell-us-more">Write your review</label>\n						<div class="toggale-button">\n							<div class="form-group row ml-0 mr-0 mt-3 mb-3">\n								<label for="review-title" class="col-sm-3 col-md-5 col-lg-3 col-form-label"><span class="text-danger">*</span>Title your review :-</label>\n								<div class="col-sm-12 col-md-6 col-lg-5 col-12">\n									<input type="text" class="form-control" name ="title" id="review-title" placeholder="Title your review" #title="ngModel" required ngModel maxlength="40" minlength="3">\n									<div *ngIf="title.invalid && (title.dirty || title.touched)" class="error-box">\n									<div *ngIf="title.errors.required">\n										* Enter title.\n									</div>\n									<div *ngIf="title.errors.minlength">\n										* Minimum title length is 3.\n									</div>\n									<div *ngIf="title.errors.maxlength">\n										* Maximum title length is 40.\n									</div>\n								</div>\n								</div>\n							</div>\n							<div class="form-group row m-0">\n								<label for="review-title" class="col-sm-3 col-md-5 col-lg-3 col-form-label"><span class="text-danger">*</span>Write your review :-</label>\n								<div class="col-sm-9 col-md-7 col-lg-9">\n									<textarea class="form-control" rows="3" name="description" id="checkout-instruction" placeholder="Write your review" #description="ngModel" required ngModel maxlength="200" minlength="6"></textarea>\n									<div *ngIf="description.invalid && (description.dirty || description.touched)" class="error-box">\n										<div *ngIf="description.errors.required">\n											* Enter description.\n										</div>\n										<div *ngIf="description.errors.minlength">\n											* Minimum description length is 6.\n										</div>\n										<div *ngIf="description.errors.maxlength">\n											* Maximum description length is 200.\n										</div>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n					<div class="form-group text-center mt-4 mb-4">\n						<div class="error-box pb-2" *ngIf="feedbackresponse?.feedback.status == \'fail\'">{{feedbackresponse?.feedback.msg}}</div>\n						<button type="submit" class="btn theme-light-btn mr-3" (click)="submitForm()" [disabled]="!frm.valid">Submit</button>\n						<button type="reset" class="btn theme-dark-btn ml-3">Reset</button>\n					</div>\n				 </form>\n				<div class="form-group text-center p-5" *ngIf="reviewAdded == true">\n					<h5> Thank You! </h5>\n					<img src="assets/images/tick-512.png" width="60px" height="60px" />\n					<p class="mt-3 setSpace_mobile"> Your review has been successfully submitted. </p>\n				</div>\n			</div>\n		</div>\n	</div>\n		<!--================Footer Area =================-->\n	<footer-page></footer-page>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/faq/leave-feedback-seller/leave-feedback-seller.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], LeaveFeedbackSellerPage);
    return LeaveFeedbackSellerPage;
}());

//# sourceMappingURL=leave-feedback-seller.js.map

/***/ })

});
//# sourceMappingURL=49.js.map