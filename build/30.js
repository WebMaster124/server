webpackJsonp([30],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportItemPageModule", function() { return ReportItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_item__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReportItemPageModule = /** @class */ (function () {
    function ReportItemPageModule() {
    }
    ReportItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__report_item__["a" /* ReportItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__report_item__["a" /* ReportItemPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ReportItemPageModule);
    return ReportItemPageModule;
}());

//# sourceMappingURL=report-item.module.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportItemPage; });
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





/**
 * Generated class for the ReportItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportItemPage = /** @class */ (function () {
    function ReportItemPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.report_item = {
            reported_by: '',
            product_id: '',
            reason: '',
            report_reasons: []
        };
        this.show_successMsg = false;
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('ReportItem');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    ReportItemPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $(document).prop('title', 'Report Item');
        $('body').removeClass().addClass('ReportItem body');
        $(".zoomContainer").remove();
        this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product/';
        this.getData_decode = this.navParams.data.id;
        this.convert_decode = atob(this.getData_decode);
        this.convert_parse = JSON.parse(this.convert_decode);
        this.data_item = this.convert_parse;
        var d = new Date();
        this.showYear = d.getFullYear();
    };
    ReportItemPage.prototype.ngAfterViewInit = function () {
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
    ReportItemPage.prototype.ReportItem = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem == null) {
        }
        else {
            this.report_item.reported_by = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem.id;
            this.report_item.product_id = this.data_item.ProId;
            this.report_item.reason = $('#OtherReason').val();
            this.report_item.report_reasons.push($('#reportcategory').val());
            this.report_item.report_reasons.push($('#reportreason').val());
            this.report_item.report_reasons.push($('#detailedreason').val());
            try {
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/report/product-report', this.report_item, function (response) {
                    if (response.product_report.status == "success") {
                        _this.response_report = response;
                        _this.show_successMsg = true;
                        _this.infoService.hideLoading();
                    }
                    else {
                        _this.show_successMsg = true;
                        _this.response_report = response;
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
        }
    };
    ReportItemPage.prototype.goToback = function () {
        this.navCtrl.popToRoot();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ReportItemPage.prototype, "content", void 0);
    ReportItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-report-item',template:/*ion-inline-start:"/var/www/html/src/pages/product/report-item/report-item.html"*/'<ion-content padding class="report-item">\n	<div class="wrapper">\n		<div class="container report-item-main mb-3">\n			<div class="row m-0">\n				<div class="p-0 col-lg-12 col-md-12 col-xl-12 col-12 breadcrumblink_div">\n					<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n					<p class="set_fontSize">\n						<a href="#/home" class="breadcrumblink">Dibdaa</a> &nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;\n						<a href="#/viewItem/{{data_item?.ProId}}" class="breadcrumblink">Product Details</a> &nbsp;&nbsp;\n						<i class="fa fa-angle-right"></i> &nbsp;&nbsp;\n						<a class="breadcrumblink" disabled>Report Item</a>\n					</p>\n				</div>\n			</div> \n			<div class="row m-0">\n				<div class="col-lg-12 col-md-12 col-12 mt-2 mb-2 p-0">\n					<h5 class="mb-2">File a Report</h5>\n				</div>\n				<div class="col-lg-12 col-md-12 col-12 bg-light rounded border mb-3" *ngIf="show_successMsg == false;else successReport;">\n					<div class="row ml-0 mt-3 mr-0 pb-3 borderproductbottom">\n						<div class="col-lg-2 col-md-3 col-12 p-0 productlistingimgdiv">\n							<a><img src="{{trandingImgUrl}}{{data_item?.ProId}}/L/{{data_item?.ProImage}}" class="img-fluid productlistingimg border rounded"></a>\n						</div>\n						<div class="col-lg-10 col-md-9 col-12 p-0 pl-lg-2 pr-lg-2 pt-2 pt-lg-0">\n							<h6 class="mb-3">{{data_item?.ProTitle}}</h6>\n							<p class="set_fontSize">Item no: <span>{{data_item?.PROSKU}}</span></p>\n							<p class="set_fontSize">Seller: <span>{{data_item?.SellerName}}</span></p>\n						</div>\n					</div>\n					<div class="row ml-0 mt-3 mr-0 pb-3">\n						<div class="col-lg-4 col-md-6 col-12 p-0 productlistingimgdiv">\n							<form class="set_fontSize">\n								<div class="form-group">\n									<label for="reportcategory">Report Category</label>\n									<select class="form-control select-report-item" id="reportcategory">\n										<option value="Copyright and trademark">Copyright and trademark</option>\n										<option value="Listing practices">Listing practices</option>\n										<option value="Prohibited and restricted items">Prohibited and restricted items</option>\n									</select>\n								</div>\n								<div class="form-group">\n									<label for="reportreason">Reason for Report</label>\n									<select class="form-control select-report-item" id="reportreason">\n										<option value="Bootleg records or unauthorized media">Bootleg records or unauthorized media</option>\n										<option value="Counterfeit item or authenticity disclaimer">Counterfeit item or authenticity disclaimer</option>\n										<option value="Descriptions that encourage infringement">Descriptions that encourage infringement</option>\n										<option value="Other copyright and trademark concerns">Other copyright and trademark concerns</option>\n										<option value="Dibdaa item infringes your intellectual property rights">Dibdaa item infringes your intellectual property rights</option>\n									</select>\n								</div>\n								<div class="form-group">\n									<label for="detailedreason">Detailed Reason</label>\n									<select class="form-control select-report-item" id="detailedreason">\n										<option value="Counterfeit, fake, or replica items">Counterfeit, fake, or replica items</option>\n										<option value="Disclaimers about the authenticity or legality of an Item">Disclaimers about the authenticity or legality of an Item</option>\n									</select>\n								</div>\n								<div class="form-group">\n									<label for="OtherReason"><span class="text-danger font-weight-bold">*</span>Other Reason</label>\n									<textarea class="form-control" rows="3" id="OtherReason" name="OtherReason" #OtherReason="ngModel" required ngModel></textarea>\n									<div *ngIf="OtherReason.invalid && (OtherReason.dirty || OtherReason.touched)" class="error-box">\n										<div *ngIf="OtherReason.errors.required">\n											* Enter Reason.\n										</div>\n									</div>\n								</div>\n								<p>The listing has wording that questions the authenticity or legality of an item.</p>\n								<p>Before reporting an item, please review the <a>Dibdaa Listings Policies</a>.</p>\n								<button class="btn theme-light-btn" role="submit" (click)="ReportItem()" [disabled]="!OtherReason.valid">Submit</button>\n								<button class="btn theme-dark-btn ml-lg-4 ml-md-4 ml-2" (click)="goToback()">Cancel</button>\n							</form>\n						</div>\n					</div>\n				</div>\n				<ng-template #successReport>\n					<div class="col-lg-12 col-md-12 col-12 bg-light rounded border mb-3 p-3 text-center">\n						<span class="report-suscess" *ngIf="response_report?.product_report.status == \'success\'"> You have Successful reported to admin.</span>\n						<span class="report-error" *ngIf="response_report?.product_report.status == \'fail\'"> You have Already reported for this product.</span>\n					</div>\n				</ng-template>\n			</div>\n		</div>\n	</div>\n	<!--================Footer Area =================-->\n<footer-page></footer-page>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/product/report-item/report-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ReportItemPage);
    return ReportItemPage;
}());

//# sourceMappingURL=report-item.js.map

/***/ })

});
//# sourceMappingURL=30.js.map