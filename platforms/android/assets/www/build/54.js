webpackJsonp([54],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteMapPageModule", function() { return SiteMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_map__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SiteMapPageModule = /** @class */ (function () {
    function SiteMapPageModule() {
    }
    SiteMapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__site_map__["a" /* SiteMapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__site_map__["a" /* SiteMapPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SiteMapPageModule);
    return SiteMapPageModule;
}());

//# sourceMappingURL=site-map.module.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteMapPage; });
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





var SiteMapPage = /** @class */ (function () {
    function SiteMapPage(googleanalytics, plt, infoService, navCtrl, navParams) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localItem = '';
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('Sitemap');
            }).catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }
    }
    SiteMapPage.prototype.ngAfterViewInit = function () {
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
    SiteMapPage.prototype.ionViewWillEnter = function () {
        this.retrievedObject = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].localItem;
        }
        $('body').removeClass().addClass('site-map body');
        $(document).prop('title', 'Site map');
        $(".zoomContainer").remove();
        $(".searchanythingform").trigger("reset");
        this.sitemapCategory();
    };
    SiteMapPage.prototype.sitemapCategory = function () {
        var _this = this;
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/category/view-category-site-map', '', function (response) {
            _this.sitemapData = response.categories;
        }, function (error) {
            console.log(error);
        });
    };
    SiteMapPage.prototype.callCMSpagesiteMap = function (val, val_pass) {
        if (val == 'register' || val == "dibdaaPremium" || val == "login") {
            localStorage.setItem('getPageDetails', val_pass);
            this.navCtrl.push('LoginPage', {
                id: val
            });
        }
        else if (val == 'register_business') {
            this.navCtrl.push('LoginPage', {
                id: 'registerBusiness'
            });
        }
        else if (val == "add-product") {
            this.navCtrl.push('DraftListingPage');
        }
        else if (val == "selleragreement" || val == "sellerprivacy" || val == "userprivacy" || val == "user-agreement" || val == "return" || val == "user-privacy" || val == "useragreement" || val == "comingsoon" || val == "policies" || val == "security" || val == "knowledge" || val == "charity" || val == "stuff" || val == "community" || val == "announcements" || val == "advertise" || val == "careers" || val == 'selling-tools' || val == "mobile-apps" || val == "company-info" || val == "news" || val == "investord") {
            this.navCtrl.push('AboutUsPage', {
                id: val
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SiteMapPage.prototype, "content", void 0);
    SiteMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-site-map',template:/*ion-inline-start:"/var/www/html/src/pages/cms/site-map/site-map.html"*/'<ion-content padding class="sitemap">\n	<div class="wrapper">\n		<div class="container sitemap-main mb-3">\n			<div class="row">\n				<div class="col-lg-12 col-md-12 col-xl-12 col-12 set_fontSize">\n					<p class="m-0" navPop *ngIf="plt.is(\'core\') == false && plt.is(\'mobileweb\') == false"><i class="fa fa-angle-left backButtonIcon"></i> <span class="backButtonText">Back</span></p>\n					\n					<p class="mb-2">\n						<a href="#/home" class="breadcrumblink">Home</a>&nbsp;<i class="fa fa-angle-right"></i>&nbsp;\n						<a class="breadcrumblink font-weight-bold" disableed>Sitemap</a>\n					</p>\n				</div>\n			</div>\n			<div class="row m-0">\n				<div class="col-lg-12 col-md-12 col-12 p-0">\n					<h5 class="m-0 p-0">Sitemap</h5>\n				</div>\n				<div class="col-lg-12 col-md-12 col-12 border rounded bg-light mt-3">\n					<div id="buy">\n						<div class="row">\n							<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pl-3 pr-3 border-left-0 border-top-0 border-right-0 border">\n								<h5 class="m-0">Buy</h5>\n							</div>\n						</div>\n						<div class="row set_fontSize" *ngFor="let stiedata of sitemapData?.data">\n							<div class="col-lg-12 col-md-12 col-12 pt-3 pl-4">\n								<h6 class="mb-3 categoryname"><a href="#/b/{{stiedata?.id}}">{{stiedata?.category_name}}</a></h6>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12" *ngFor="let subsite of stiedata?.sub_category">\n								<ul class="sitemap-ul">\n									<li><a href="#/c/{{subsite?.id}}">{{subsite?.category_name}}</a></li>\n								</ul>\n							</div>\n						</div>\n					</div>\n				</div>\n				<div class="col-lg-12 col-md-12 col-12 border rounded bg-light mt-4">\n					<div id="sell">\n						<div class="row">\n							<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pl-3 pr-3 border-left-0 border-top-0 border-right-0 border">\n								<h5 class="m-0">Sell</h5>\n							</div>\n						</div>\n						<div class="row set_fontSize">\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a (click)="callCMSpagesiteMap(\'dibdaaPremium\',\'\')">Dibdaa Premium</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a (click)="callCMSpagesiteMap(\'selling-tools\')">How To Selling Tools</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li>\n										<a *ngIf="localItem != null" (click)="callCMSpagesiteMap(\'add-product\')">Start selling</a>\n										<a *ngIf="localItem == null" (click)="callCMSpagesiteMap(\'login\',\'DraftListingPage\')">Start selling</a>\n									</li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li>\n										<a *ngIf="localItem == null" (click)="callCMSpagesiteMap(\'register_business\',\'\')">Business Accounts</a>\n										<a *ngIf="localItem != null && localItem.role == \'buyer\'" href="#/seller-business-info">Business Accounts</a>\n									</li>\n								</ul>\n							</div>\n						</div>\n					</div>\n				</div>\n				<div class="col-lg-12 col-md-12 col-12 border rounded bg-light mt-4">\n					<div id="sell">\n						<div class="row">\n							<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pl-3 pr-3 border-left-0 border-top-0 border-right-0 border">\n								<h5 class="m-0">HELP & CONTACT</h5>\n							</div>\n						</div>\n						<div class="row set_fontSize">\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a href="#/CMS/about-us">About Us</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a href="#/contact-us">Conatct Us</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li>\n										<a (click)="callCMSpagesiteMap(\'return\',\'\')">Dibdaa Returns</a>\n									</li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li>\n										<a *ngIf="localItem != null" href="#/fees-calculator">Fees Calculator</a>\n									</li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li>\n										<a *ngIf="localItem == null" (click)="callCMSpagesiteMap(\'login\',\'resolutionCenter\')">Resolution Center</a>\n										<a *ngIf="localItem != null" href="#/seller-my-account/resolutionCenter">Resolution Center</a>\n									</li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a href="#/faq/listing/7">Seller Center</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a (click)="callCMSpagesiteMap(\'useragreement\',\'\')">User Agreement</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a (click)="callCMSpagesiteMap(\'userprivacy\',\'\')">User Privacy Notice</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a (click)="callCMSpagesiteMap(\'selleragreement\',\'\')"> Seller Agreement</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a (click)="callCMSpagesiteMap(\'sellerprivacy\',\'\')"> Seller Privacy Notice</a></li>\n								</ul>\n							</div>\n						</div>\n					</div>\n				</div>\n				<div class="col-lg-12 col-md-12 col-12 border rounded bg-light mt-4">\n					<div id="sell">\n						<div class="row">\n							<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pl-3 pr-3 border-left-0 border-top-0 border-right-0 border">\n								<h5 class="m-0">Tools & apps</h5>\n							</div>\n						</div>\n						<div class="row set_fontSize">\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a class="alinkFooter" (click)="callCMSpagesiteMap(\'mobile-apps\',\'\')">Mobile apps</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a class="alinkFooter" (click)="callCMSpagesiteMap(\'security\',\'\')">Security Awareness</a></li>\n								</ul>\n							</div>\n						</div>\n					</div>\n				</div>\n				<div class="col-lg-12 col-md-12 col-12 border rounded bg-light mt-4">\n					<div id="sell">\n						<div class="row">\n							<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pl-3 pr-3 border-left-0 border-top-0 border-right-0 border">\n								<h5 class="m-0">Stay connected</h5>\n							</div>\n						</div>\n						<div class="row set_fontSize">\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a href="https://www.facebook.com/dibdaa/" target="_blank"><i class="fa fa-facebook-square"></i> Facebook</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a href="https://www.instagram.com/dibdaa/" target="_blank"><i class="fa fa-instagram"></i> Instagram</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a href="https://www.linkedin.com/company/dibdaa/" target="_blank"><i class="fa fa-linkedin-square"></i> LinkedIN</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a href="https://twitter.com/dibdaa" target="_blank"><i class="fa fa-twitter-square"></i> Twitter</a></li>\n								</ul>\n							</div>\n						</div>\n					</div>\n				</div>\n				<div class="col-lg-12 col-md-12 col-12 border rounded bg-light mt-4">\n					<div id="sell">\n						<div class="row">\n							<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pl-3 pr-3 border-left-0 border-top-0 border-right-0 border">\n								<h5 class="m-0">About Dibdaa</h5>\n							</div>\n						</div>\n						<div class="row set_fontSize">\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a class="alinkFooter"(click)="callCMSpagesiteMap(\'advertise\',\'\')">Advertise with us</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a class="alinkFooter" (click)="callCMSpagesiteMap(\'company-info\',\'\')">Company info</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a class="alinkFooter" (click)="callCMSpagesiteMap(\'careers\',\'\')">Careers</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a class="alinkFooter"(click)="callCMSpagesiteMap(\'investord\',\'\')">Investors</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a class="alinkFooter" (click)="callCMSpagesiteMap(\'news\',\'\')">News</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a class="alinkFooter" (click)="callCMSpagesiteMap(\'policies\',\'\')">Policies</a></li>\n								</ul>\n							</div>\n						</div>\n					</div>\n				</div>\n				<div class="col-lg-12 col-md-12 col-12 border rounded bg-light mt-4">\n					<div id="sell">\n						<div class="row">\n							<div class="col-lg-12 col-md-12 col-12 pt-2 pb-2 pl-3 pr-3 border-left-0 border-top-0 border-right-0 border">\n								<h5 class="m-0">Community</h5>\n							</div>\n						</div>\n						<div class="row set_fontSize">\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a (click)="callCMSpagesiteMap(\'announcements\',\'\')" class="alinkFooter">Announcements</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a (click)="callCMSpagesiteMap(\'charity\',\'\')" class="alinkFooter">Dibdaa for Charity</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a (click)="callCMSpagesiteMap(\'community\',\'\')" class="alinkFooter">Dibdaa Community</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a (click)="callCMSpagesiteMap(\'stuff\',\'\')" class="alinkFooter">Free Stuff</a></li>\n								</ul>\n							</div>\n							<div class="col-lg-4 col-md-3 col-12">\n								<ul class="sitemap-ul">\n									<li><a (click)="callCMSpagesiteMap(\'knowledge\',\'\')" class="alinkFooter">Knowledge Base</a></li>\n								</ul>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<footer-page></footer-page>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/src/pages/cms/site-map/site-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SiteMapPage);
    return SiteMapPage;
}());

//# sourceMappingURL=site-map.js.map

/***/ })

});
//# sourceMappingURL=54.js.map