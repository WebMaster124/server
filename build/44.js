webpackJsonp([44],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(833);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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





var HomePage = /** @class */ (function () {
    function HomePage(googleanalytics, plt, viewCtrl, modalCtrl, infoService, navCtrl) {
        var _this = this;
        this.googleanalytics = googleanalytics;
        this.plt = plt;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.infoService = infoService;
        this.navCtrl = navCtrl;
        this.bannerImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageUrl;
        this.trandingImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/product';
        this.categoryImgRul = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].imageProduct + '/category/';
        this.localItem = '';
        $('.app-root').css('background-color', '#fff');
        this.retrievedObject = localStorage.getItem('userInfo');
        this.checkcookie = localStorage.getItem('gc');
        if (this.retrievedObject == null || this.retrievedObject == '') {
            this.localItem = null;
        }
        else {
            this.localItem = JSON.parse(this.retrievedObject);
        }
        if (this.plt.is('core') == false && this.plt.is('mobileweb') == false) {
            this.googleanalytics.startTrackerWithId('UA-127414417-1').then(function () {
                _this.googleanalytics.trackView('Home');
            }).catch(function (e) { return console.log(e); });
        }
    }
    HomePage.prototype.ionViewWillEnter = function () {
        $('body').removeClass().addClass('Home body');
        $(document).prop('title', 'Dibdaa');
        $(".searchanythingform").trigger("reset");
        $(".zoomContainer").remove();
        var d = new Date();
        this.showYear = d.getFullYear();
        if (localStorage.getItem('checkuserLogin') != null && localStorage.getItem('checkuserLogin') == 'Yes') {
            var modalPage = this.modalCtrl.create('PageAdvertisementPage', { enableBackdropDismiss: false });
            modalPage.present();
        }
        this.random_number = Math.floor(100000 + Math.random() * 900000);
        this.show_popup();
    };
    HomePage.prototype.ngAfterViewInit = function () {
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
            });
        }
    };
    HomePage.prototype.show_popup = function () {
        var _this = this;
        
        var passData = {
            user_id: this.localItem.id,
            notification: true
        };
	
        this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/announcement/view-announcements-popup', passData, function (response) {
            
            if (response.announcements.count > 0) {
                _this.shownotificationData = response.announcements;
                $('#p').text(response.announcements.count);
//                $('#announcementCount_mobile').text(response.announcements.count);
            }
            else {
                $('#announcementCount').text('');
                $('#announcementCount_mobile').text('');
            }
        }, function (error) {
            console.log(error);
        });
//        
//        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        try {
            var lmt;
            if (this.localItem == null) {
                lmt = {
                    limit: 10,
                    user_id: 0,
                };
            }
            else {
                lmt = {
                    limit: 10,
                    user_id: this.localItem.id,
                };
            }
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/home/view-blocks', lmt, function (response) {
                _this.viewbanner = response.blocks.banners;
                _this.latestranding = response.blocks.latest_trending;
                _this.dailydeals = response.blocks.daily_deals;
                _this.recentlyViewedData = response.blocks.recently_viewed;
                _this.recommendeddata = response.blocks.recommended;
                _this.blockStatus = response.blocks.block;
                _this.season_dealData = response.blocks.season_deal;
                _this.feature_dealData = response.blocks.feature_deal;
                _this.newData = response.blocks.new_products;
                
             //   alert(response.blocks.feature_deal.status);
                var self = _this;
                setTimeout(function () {
                    if ($('.owl-slider').length) {
                        $('.owl-slider').owlCarousel({
                            autoplay: true,
                            autoplayTimeout: 3500,
                            smartSpeed: 500,
                            items: 1,
                            loop: true,
                            nav: true,
                            dots: false,
                            mouseDrag: false,
                            touchDrag: false,
                            pullDrag: false,
                            freeDrag: false
                        });
                    }
                    if ($('.owl-sliderseason').length) {
                        if (response.blocks.season_deal.length > 5) {
                            $('.owl-owl-sliderseason').owlCarousel({
                                autoplay: true,
                                loop: true,
                                nav: true,
                                dots: true,
                                autoplayTimeout: 1300,
                                margin: 15,
                                mouseDrag: false,
                                responsive: {
                                    0: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                        else {
                            $('.owl-sliderseason').owlCarousel({
                                dots: false,
                                mouseDrag: true,
                                autoplayTimeout: 1300,
                                margin: 15,
                                responsive: {
                                    0: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                    }
                    if ($('.owl-slidertreding').length) {
                        if (response.blocks.latest_trending.length > 5) {
                            $('.owl-slidertreding').owlCarousel({
                                autoplay: true,
                                loop: true,
                                nav: true,
                                dots: false,
                                autoplayTimeout: 3400,
                                margin: 15,
                                mouseDrag: false,
                                responsive: {
                                    0: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                        else {
                            $('.owl-slidertreding').owlCarousel({
                                dots: false,
                                nav: false,
                                margin: 15,
                                mouseDrag: false,
                                autoplayTimeout: 3400,
                                responsive: {
                                    0: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                    }
                    if ($('.owl-sliderdailydeals').length) {
                        if (response.blocks.daily_deals.length > 5) {
                            $('.owl-sliderdailydeals').owlCarousel({
                                autoplay: true,
                                loop: true,
                                nav: true,
                                dots: false,
                                margin: 10,
                                mouseDrag: false,
                                autoplayTimeout: 3300,
                                responsive: {
                                    0: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                        else {
                            $('.owl-sliderdailydeals').owlCarousel({
                                dots: false,
                                nav: false,
                                margin: 10,
                                mouseDrag: false,
                                autoplayTimeout: 3300,
                                responsive: {
                                    0: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: true,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                    }
                    if ($('.owl-sliderYourRecently').length) {
                        if (response.blocks.recently_viewed.length > 5) {
                            $('.owl-sliderYourRecently').owlCarousel({
                                autoplay: true,
                                loop: true,
                                nav: true,
                                dots: false,
                                margin: 10,
                                mouseDrag: false,
                                autoplayTimeout: 3700,
                                responsive: {
                                    0: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                        else {
                            $('.owl-sliderYourRecently').owlCarousel({
                                dots: false,
                                nav: false,
                                margin: 10,
                                mouseDrag: false,
                                autoplayTimeout: 3700,
                                responsive: {
                                    0: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                    }
                    if ($('.owl-editorpicks').length) {
                        if (response.blocks.recommended.length > 5) {
                            $('.owl-editorpicks').owlCarousel({
                                autoplay: true,
                                loop: true,
                                nav: true,
                                dots: false,
                                margin: 15,
                                mouseDrag: false,
                                autoplayTimeout: 3500,
                                responsive: {
                                    0: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                        else {
                            $('.owl-editorpicks').owlCarousel({
                                dots: false,
                                nav: false,
                                margin: 10,
                                mouseDrag: false,
                                autoplayTimeout: 3500,
                                responsive: {
                                    0: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: true,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                    }
                    if ($('.owl-newData').length) {
                        if (response.blocks.new_products.length > 5) {
                            $('.owl-newData').owlCarousel({
                                autoplay: true,
                                loop: true,
                                nav: true,
                                dots: false,
                                margin: 15,
                                mouseDrag: false,
                                autoplayTimeout: 3500,
                                responsive: {
                                    0: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                        else {
                            $('.owl-newData').owlCarousel({
                                dots: false,
                                nav: false,
                                margin: 10,
                                mouseDrag: false,
                                autoplayTimeout: 3500,
                                responsive: {
                                    0: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: true,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                    }
                    self.showwishList();
                    self.infoService.hideLoading();
                }, 500);
            }, function (error) {
                console.log(error);
            });
        }
        catch (Error) {
            console.log(Error);
            this.infoService.hideLoading();
        }
    };
    HomePage.prototype.showwishList = function () {
        var _this = this;
        if (this.localItem == null) {
        }
        else {
            var wishlist_view = {
                user_id: this.localItem.id
            };
            this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/wishlist/view-wishlist', wishlist_view, function (response) {
                _this.viewishData = response.wishlist;
                setTimeout(function () {
                    if ($('.owl-slidereishlist').length) {
                        if (response.wishlist.data.length > 4) {
                            $('.owl-slidereishlist').owlCarousel({
                                autoplay: true,
                                loop: true,
                                nav: true,
                                dots: false,
                                margin: 10,
                                mouseDrag: false,
                                autoplayTimeout: 2200,
                                responsive: {
                                    0: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                        else {
                            $('.owl-slidereishlist').owlCarousel({
                                dots: false,
                                nav: false,
                                margin: 10,
                                mouseDrag: false,
                                autoplayTimeout: 2200,
                                responsive: {
                                    0: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: true,
                                        slideBy: 3
                                    },
                                    768: {
                                        items: 3,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 6,
                                        loop: false,
                                        autoplay: false,
                                        nav: false,
                                        slideBy: 6
                                    }
                                }
                            });
                        }
                    }
                }, 500);
            }, function (error) {
                console.log(error);
            });
            this.viewMsgCount();
        }
    };
    HomePage.prototype.viewMsgCount = function () {
        if (this.localItem == null) {
        }
        else {
            try {
                var msg_details = {
                    user_id: this.localItem.id
                };
                this.infoService.callHttpFunction_post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'api/message/unread-msg-count', msg_details, function (response) {
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
            }
            catch (Error) {
                console.log(Error);
            }
        }
    };
    HomePage.prototype.showfeatureDeals = function (val) {
        var pass_featureDeal = {
            category_id: val,
            feature_deal: true
        };
        this.navCtrl.push('ParentCategoryPage', {
            id: pass_featureDeal
        });
    };
    HomePage.prototype.showseasonDeals = function (val) {
        var pass_seasonDeal = {
            category_id: val,
            season_deal: true
        };
        this.navCtrl.push('ParentCategoryPage', {
            id: pass_seasonDeal
        });
    };
    HomePage.prototype.callCMSPage = function (val, val_pass) {
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
        else if (val == "resolutioncenter" || val == "cookies" || val == "registration" || val == "return" || val == "userprivacy" || val == "useragreement" || val == "comingsoon" || val == "policies" || val == "security" || val == "knowledge" || val == "charity" || val == "stuff" || val == "community" || val == "announcements" || val == "advertise" || val == "careers" || val == 'selling-tools' || val == "mobile-apps" || val == "company-info" || val == "news" || val == "investord") {
            this.navCtrl.push('AboutUsPage', {
                id: val
            });
        }
        else if (val == "contactUs") {
            if (this.navCtrl.getActive().name == "ContactUsPage") {
                return;
            }
            this.navCtrl.push('ContactUsPage');
        }
        else if (val == "Fees-CalculatorPage") {
            if (this.navCtrl.getActive().name == "FeesCalculatorPage") {
                return;
            }
            this.navCtrl.push('FeesCalculatorPage');
        }
        else if (val == "faq-listing") {
            this.navCtrl.push('FaqListingPage', {
                id: val_pass
            });
        }
        else if (val == "site-map") {
            this.navCtrl.push('SiteMapPage');
        }
    };
    HomePage.prototype.hideCookiebutton = function () {
        localStorage.setItem('gc', 'd53ba6');
        this.checkcookie = localStorage.getItem('gc');
    };
    HomePage.prototype.gotoProductdetailpage = function (val) {
        this.navCtrl.push('ProductDetails', {
            id: val
        });
    };
    HomePage.prototype.gotoallListingPage = function (val) {
        this.navCtrl.push('AllItemPage', {
            id: val
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/src/pages/home/home.html"*/'<ion-content padding>\n<div class="wrapper">\n\n	<div class="banner" *ngIf="viewbanner?.length > 0 && blockStatus?.banner == 1">\n        <div class="container pr-lg-0">\n            <ul class="owl-slider owl-carousel mt-3" id="banner">\n                <li *ngFor="let banner of viewbanner">\n                    <div class="col-lg-12 col-md-12 col-12 p-0">\n                        <div class="dynamic-bg-bnr1 slider-content-center d-lg-block d-md-none d-none">\n                            <h4 class="mb-lg-3">{{banner?.title}}</h4>\n                            <p class="bnr-description mb-lg-3">{{banner?.description}}</p>\n                            <a class="btn shopnowbtndetail">Shop Now <i class="fa fa-arrow-right fontrightarrow pl-2"></i></a>\n                        </div>\n                        <a>\n                            <img src="{{ bannerImgUrl }}{{banner.banner_image}}" class="productlistingimg">\n                        </a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n  \n                         <div class="feature_perfect_area" *ngIf="feature_dealData?.feature_cat.length > 0">\n        <div class="container mb-4 pr-lg-0">\n            <div class="s_m_title mb-2">\n                <h2 class="m-0">{{feature_dealData?.feature_deal}}</h2>\n            </div>\n			<ul class="owl-sliderseason owl-carousel">\n                <li *ngFor="let featuredata of feature_dealData?.category_ids">\n                    <a (click)="showfeatureDeals(featuredata?.parent_cat)">\n                        <div class="perfectpics mb-2">\n                            <img src="images/feature/{{featuredata?.image}}" class="img-fluid perfectpicsimg" *ngIf="featuredata?.season_thumbnail == \'\' || featuredata?.season_thumbnail == null">\n                            <img src="{{categoryImgRul}}{{featuredata?.season_thumbnail}}" class="img-fluid perfectpicsimg" *ngIf="featuredata?.season_thumbnail != \'\' && featuredata?.season_thumbnail != null">\n                        </div>\n                        <div class="perfectpicstitle mb-3">\n                            <h6 class="text-center">{{featuredata?.name}}</h6>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n     <div class="feature_perfect_area" *ngIf="season_dealData?.season_cat.length > 0 && blockStatus?.season_deal == 1">\n        <div class="container mb-4 pr-lg-0">\n            <div class="s_m_title mb-2">\n                <h2 class="m-0">{{season_dealData?.season_name}}</h2>\n            </div>\n			<ul class="owl-sliderseason owl-carousel">\n                <li *ngFor="let seasondata of season_dealData?.season_cat">\n                    <a (click)="showseasonDeals(seasondata?.id)">\n                        <div class="perfectpics mb-2">\n                            <img src="assets/images/category.png" class="img-fluid perfectpicsimg" *ngIf="seasondata?.season_thumbnail == \'\' || seasondata?.season_thumbnail == null">\n                            <img src="{{categoryImgRul}}{{seasondata?.season_thumbnail}}" class="img-fluid perfectpicsimg" *ngIf="seasondata?.season_thumbnail != \'\' && seasondata?.season_thumbnail != null">\n                        </div>\n                        <div class="perfectpicstitle mb-3">\n                            <h6 class="text-center">{{seasondata?.category_name}}</h6>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n   <div class="DailyDeals Recently_view" *ngIf="recentlyViewedData?.length > 0 && blockStatus?.recentlyviewed == 1">\n        <div class="container mb-4 pr-lg-0">\n            <div class="s_m_title mb-5 mb-lg-0 mb-md-0">\n                <h2 class="m-lg-0 m-md-0">Your Recently Viewed Items\n                    <span class="float-right seeall">\n						<a (click)="gotoallListingPage(\'RecentlyViewed\')">\n							See All\n							<i class="fa fa-arrow-right"></i>\n						</a>\n					</span>\n                </h2>\n            </div>\n            <ul class="owl-sliderYourRecently owl-carousel">\n                <li *ngFor="let rvd of recentlyViewedData">\n                    <a (click)="gotoProductdetailpage(rvd?.id)" title="{{rvd?.title}}">\n                        <img *ngIf="rvd?.photos.length <= 0;else showrecentImg;" src="assets/images/category.png" alt="category">\n                        <ng-template #showrecentImg>\n                            <img src="{{ trandingImgUrl }}/{{rvd?.id}}/L/{{rvd?.photos[0]}}" alt="{{rvd?.title}}">\n                        </ng-template>\n                        <h6 class="pl-1 pb-3 mt-0 mb-2 ml-2">{{ rvd?.price}} AED</h6>\n                    </a>\n                </li>\n                <!-- {{(87.99-13.79)/87.99 * 100 | currency:\'USD\':true:\'2.0-0\'}}% OFF -->\n            </ul>\n        </div>\n    </div>\n\n    <div class="DailyDeals Recently_view" *ngIf="viewishData?.data.length > 0 && blockStatus?.currently_view == 1">\n        <div class="container mb-4 pr-lg-0">\n            <div class="s_m_title mb-2">\n                <h2 class="m-0">Currently Watched Items\n                    <span class="float-right seeall">\n						<a (click)="gotoallListingPage(\'CurrentlyWatched\')">\n							See All\n							<i class="fa fa-arrow-right"></i>\n						</a>\n					</span>\n                </h2>\n            </div>\n            <ul class="owl-slidereishlist owl-carousel">\n                <li *ngFor="let wishlist of viewishData?.data">\n                    <a (click)="gotoProductdetailpage(wishlist?.product_id)" title="{{wishlist?.title}}">\n                        <img *ngIf="wishlist?.photos.length <= 0;else showeishImg;" src="assets/images/category.png" alt="category">\n                        <ng-template #showeishImg>\n                            <img src="{{ trandingImgUrl }}/{{wishlist?.product_id}}/L/{{wishlist?.photos[0]}}" alt="{{wishlist?.title}}">\n                        </ng-template>\n                        <h6 class="pl-1 pb-3 mt-0 mb-2 ml-2">{{ wishlist?.price}} AED</h6>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n    <div class="Tredingondibdaa" *ngIf="latestranding?.length > 0 && blockStatus?.trending == 1">\n        <div class="container mb-4 pr-lg-0">\n            <div class="s_m_title mb-0">\n                <h2 class="m-0">Trending on Dibdaa\n                    <span class="float-right seeall">\n						<a (click)="gotoallListingPage(\'TrendingDibdaa\')">See All\n							<i class="fa fa-arrow-right"></i>\n						</a>\n					</span>\n                </h2>\n            </div>\n            <ul class="owl-slidertreding owl-carousel">\n                <li *ngFor="let lst of latestranding; let i=index;">\n                    <a (click)="gotoProductdetailpage(lst?.product_id)" title="{{lst?.title}}">\n                        <img *ngIf="lst?.photos.length <= 0;else showtrendImg;" src="assets/images/category.png">\n                        <ng-template #showtrendImg>\n                            <img src="{{trandingImgUrl}}/{{lst?.product_id}}/L/{{lst?.photos[0]}}">\n                        </ng-template>\n                        <div class="row m-0 pl-md-2 pr-md-2 pl-0 pr-0 setResponsive_div_trd">\n                            <div class="col-lg-8 col-md-8 col-12 pl-1 pr-2 d-md-block d-lg-block d-none">\n                                <span class="tredingname">{{ (lst?.title.length > 14)? (lst?.title | slice:0:15)+\'...\':(lst?.title) }}</span>\n                            </div>\n                            <div class="col-lg-4 col-md-4 col-12 pl-1 pr-1">\n                                <span class="float-md-right views">{{ lst?.count}} Views</span>\n                            </div>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n	<div class="editorpicks" *ngIf="recommendeddata?.length > 0 && blockStatus?.recommended == 1">\n        <div class="container mb-4 pr-lg-0">\n            <div class="s_m_title mb-1">\n                <h2>Recommended For You <span class="float-right seeall">\n					<a (click)="gotoallListingPage(\'Recommended\')">See All <i class="fa fa-arrow-right"></i></a></span></h2>\n            </div>\n            <ul class="owl-editorpicks owl-carousel">\n                <li *ngFor="let rcd of recommendeddata; let i=index;">\n                    <a (click)="gotoProductdetailpage(rcd?.id)"> <!-- href="#/GetAll/Recommended" -->\n                        <img *ngIf="rcd?.photos.length <= 0;else showdailyImg;" src="assets/images/category.png">\n						<ng-template #showdailyImg>\n							<img src="{{trandingImgUrl}}/{{rcd?.id}}/L/{{rcd?.photos[0]}}">\n						</ng-template>\n                        <h6 class="homesecurity mt-2 mb-0 ml-0 ml-md-2">{{ (rcd?.title.length > 20)? (rcd?.title | slice:0:20)+\'...\':(rcd?.title) }}</h6>\n                        <p class="homesecurityp ml-2 d-md-flex d-none setResponsive_p_edtr" *ngIf="rcd?.discount > 0 ">Up to {{rcd?.discount}}% off.</p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n	<div class="editorpicks mb-3 Recently_view_new" *ngIf="newData?.length > 0 && blockStatus?.new_items == 1">\n        <div class="container mb-1 pr-lg-0">\n            <div class="s_m_title mb-2">\n                <h2 class="m-0">All New Items <span class="float-right seeall">\n					<a (click)="gotoallListingPage(\'newItems\')">See All <i class="fa fa-arrow-right"></i></a></span></h2>\n            </div>\n            <ul class="owl-newData owl-carousel">\n                <li *ngFor="let ndt of newData; let i=index;">\n                    <a (click)="gotoProductdetailpage(ndt?.id)">\n                        <img *ngIf="ndt?.photos.length <= 0;else shownewImg;" src="assets/images/category.png">\n						<ng-template #shownewImg>\n							<img src="{{trandingImgUrl}}/{{ndt?.id}}/L/{{ndt?.photos[0]}}">\n						</ng-template>\n                        <h6 class="h6_Recently_view_new mt-2 mb-0 ml-0 ml-md-2">{{ (ndt?.title.length > 20)? (ndt?.title | slice:0:20)+\'...\':(ndt?.title) }}</h6>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n	<!-- ================Footer Area ================= -->\n    <footer class="footer_area">\n        <div class="container">\n            <div class="footer_widgets d-lg-block d-md-none d-none">\n                <div class="row">\n                    <div class="col-lg-2 col-md-4 col-12">\n                        <aside class="f_widget link_widget f_info_widget">\n                            <div class="f_w_title">\n                                <h6>Buy</h6>\n                            </div>\n                            <ul class="footer_ul">\n                                <li><a class="alinkFooter" (click)="callCMSPage(\'registration\',\'\')">Registration</a></li>\n                                <li><a class="alinkFooter" (click)="callCMSPage(\'faq-listing\',\'6\')">Offers & buying help</a></li>\n                                <li><a class="alinkFooter" (click)="callCMSPage(\'comingsoon\',\'\')">More Coming Soon…</a></li>\n                            </ul>\n                        </aside>\n                    </div>\n                    <div class="col-lg-2 col-md-4 col-12">\n                        <aside class="f_widget link_widget f_info_widget">\n                            <div class="f_w_title">\n                                <h6>Sell</h6>\n                            </div>\n                            <ul class="footer_ul">\n                                <li>\n                                    <a class="alinkFooter" *ngIf="localItem != null" (click)="callCMSPage(\'add-product\')">Start selling</a>\n                                    <a class="alinkFooter" *ngIf="localItem == null" (click)="callCMSPage(\'login\',\'DraftListingPage\')">Start selling</a>\n                                </li>\n                                <li><a class="alinkFooter" (click)="callCMSPage(\'selling-tools\')">How To Selling Tools</a></li>\n                                <li>\n                                    <a class="alinkFooter" *ngIf="localItem == null" (click)="callCMSPage(\'register_business\',\'\')">Business Accounts</a>\n                                    <a class="alinkFooter" *ngIf="localItem != null && localItem.role == \'buyer\'" href="#/seller-business-info">Business Accounts</a>\n                                </li>\n                                <li><a class="alinkFooter" (click)="callCMSPage(\'dibdaaPremium\',\'\')">Dibdaa Premium</a></li>\n                            </ul>\n                        </aside>\n                        <aside class="f_widget link_widget f_info_widget">\n                            <div class="f_w_title">\n                                <h6>Tools & apps</h6>\n                            </div>\n                            <ul class="footer_ul">\n                                <li><a class="alinkFooter" (click)="callCMSPage(\'mobile-apps\',\'\')">Mobile apps</a></li>\n                                <li><a class="alinkFooter" (click)="callCMSPage(\'security\',\'\')">Security Awareness</a></li>\n								<li><a class="alinkFooter" (click)="callCMSPage(\'site-map\',\'\')">Site Map</a></li>\n                            </ul>\n                        </aside>\n                    </div>\n                    <div class="col-lg-3 col-md-4 col-12 pl-lg-5 Dibdaacompaniesinfo">\n                        <aside class="f_widget link_widget f_service_widget">\n                            <div class="f_w_title">\n                                <h6>Stay connected</h6>\n                            </div>\n                            <ul class="footer_ul">\n                                <li><a class="alinkFooter" href="https://www.facebook.com/dibdaa/" target="_blank"><i class="fa fa-facebook-square"></i> Facebook</a></li>\n                                <li><a class="alinkFooter" href="https://twitter.com/dibdaa" target="_blank"><i class="fa fa-twitter-square"></i> Twitter</a></li>\n                                <li><a class="alinkFooter" href="https://www.instagram.com/dibdaa/" target="_blank"><i class="fa fa-instagram"></i> Instagram</a></li>\n                                <li><a class="alinkFooter" href="https://www.linkedin.com/company/dibdaa/" target="_blank"><i class="fa fa-linkedin-square"></i> LinkedIN</a></li>\n                            </ul>\n                        </aside>\n                    </div>\n                    <div class="col-lg-2 col-md-4 col-12">\n                        <aside class="f_widget link_widget f_account_widget">\n                            <div class="f_w_title">\n                                <h6>About Dibdaa</h6>\n                            </div>\n                            <ul class="footer_ul">\n                                <li><a class="alinkFooter" (click)="callCMSPage(\'company-info\',\'\')">Company info</a></li>\n                                <li><a class="alinkFooter" (click)="callCMSPage(\'news\',\'\')">News</a></li>\n                                <li><a class="alinkFooter"(click)="callCMSPage(\'investord\',\'\')">Investors</a></li>\n                                <li><a class="alinkFooter" (click)="callCMSPage(\'careers\',\'\')">Careers</a></li>\n                                <li><a class="alinkFooter"(click)="callCMSPage(\'advertise\',\'\')">Advertise with us</a></li>\n                                <li><a class="alinkFooter" (click)="callCMSPage(\'policies\',\'\')">Policies</a></li>\n                            </ul>\n                        </aside>\n                    </div>\n                    <div class="col-lg-2 col-md-4 col-12">\n                        <aside class="f_widget link_widget f_account_widget">\n                            <div class="f_w_title">\n                                <h6>Help & Contact</h6>\n                            </div>\n                            <ul class="footer_ul">\n                                <li>\n                                    <a class="alinkFooter" (click)="callCMSPage(\'resolutioncenter\',\'\')">Resolution Center</a>\n                                </li>\n                                <li><a class="alinkFooter" (click)="callCMSPage(\'faq-listing\',\'7\')">Seller Center</a></li>\n                                <li><a class="alinkFooter" (click)="callCMSPage(\'contactUs\',\'\')">Contact us</a></li>\n								<li>\n									<a class="alinkFooter" (click)="callCMSPage(\'Fees-CalculatorPage\',\'\')">Fees Calculator</a>\n								</li>\n								<li><a class="alinkFooter" (click)="callCMSPage(\'return\',\'\')">Dibdaa Returns</a></li>\n                            </ul>\n                        </aside>\n                        <aside class="f_widget link_widget f_account_widget">\n                            <div class="f_w_title">\n                                <h6>Community</h6>\n                            </div>\n                            <ul class="footer_ul">\n                                <li><a (click)="callCMSPage(\'announcements\',\'\')" class="alinkFooter">Announcements</a></li>\n                                <li><a (click)="callCMSPage(\'knowledge\',\'\')" class="alinkFooter">Knowledge Base</a></li>\n                                <li><a (click)="callCMSPage(\'charity\',\'\')" class="alinkFooter">Dibdaa for Charity</a></li>\n                                <li><a (click)="callCMSPage(\'stuff\',\'\')" class="alinkFooter">Free Stuff</a></li>\n                                <li><a (click)="callCMSPage(\'community\',\'\')" class="alinkFooter">Dibdaa Community</a></li>\n                            </ul>\n                        </aside>\n                    </div>\n                </div>\n            </div>\n            <div class="footer_copyright mt-lg-0 mt-md-3 mt-0 pt-lg-0">\n				<div class="row">\n					<div class="col-lg-8 mt-lg-2 text-lg-right">\n						<h5 class="m-0 p-0">© {{showYear}} Copyright, All rights reserved |  <a class="alinkFootercopy" (click)="callCMSPage(\'useragreement\',\'\')">User Agreement,</a> <a class="alinkFootercopy" (click)="callCMSPage(\'userprivacy\',\'\')">Privacy,</a><a (click)="callCMSPage(\'cookies\',\'\')"> Cookies</a></h5>\n					</div>\n					<div class="col-lg-4 text-lg-left">\n						<img src="assets/images/homepage_footerimg.png" />\n					</div>\n				</div>\n            </div>\n        </div>\n    </footer>\n\n</div>\n</ion-content>\n<div id="myModal" class="modal" *ngIf="shownotificationData?.count == 3;" style="display:block;overflow: initial;left: 0;top: 300px;height: 100%;">\n<div class="modal-content" style="border: unset;bottom: 0;">\n<div id="aalert_popover">\n<div class="awrapper">\n<div class="content">\n<div class="alert aalert_default" *ngFor="let notData of shownotificationData?.data;let i = index">\n<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n<p>\n<a href="#/notification/{{notData?.id}}" target=_blank>\n<small><em>{{ (notData?.message.length > 50)? (notData?.message | slice:0:50)+\'...\':(notData?.message) }}</em></small>\n</a>\n</p>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div id="myModal" class="modal" *ngIf="shownotificationData?.count == 2;" style="display:block;overflow: initial;left: 0;top: 400px;height: 100%;">\n<div class="modal-content" style="border: unset;bottom: 0;">\n<div id="aalert_popover">\n<div class="awrapper">\n<div class="content">\n<div class="alert aalert_default" *ngFor="let notData of shownotificationData?.data;let i = index">\n<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n<p>\n<a href="#/notification/{{notData?.id}}" target=_blank>\n<small><em>{{ (notData?.message.length > 50)? (notData?.message | slice:0:50)+\'...\':(notData?.message) }}</em></small>\n</a>\n</p>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div id="myModal" class="modal" *ngIf="shownotificationData?.count == 1;" style="display:block;overflow: initial;left: 0;top: 500px;height: 100%;">\n<div class="modal-content" style="border: unset;bottom: 0;">\n<div id="aalert_popover">\n<div class="awrapper">\n<div class="content">\n<div class="alert aalert_default" *ngFor="let notData of shownotificationData?.data;let i = index">\n<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n<p>\n<a href="#/notification/{{notData?.id}}" target=_blank>\n<small><em>{{ (notData?.message.length > 50)? (notData?.message | slice:0:50)+\'...\':(notData?.message) }}</em></small>\n</a>\n</p>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class="alert alert-dismissible text-center cookiealert show" role="alert" *ngIf="this.checkcookie == null || this.checkcookie == undefined">\n	<div class="cookiealert-container">\n		<b>Do you like cookies?</b> <img src="images/biscuit.png" width="15"/> We use cookies to ensure you get the best experience on our website. <a class="text-primary" (click)="callCMSPage(\'cookies\',\'\')">Learn more</a>\n\n		<button type="button" class="btn theme-light-btn sell-btn ml-3" aria-label="Close" (click)="hideCookiebutton()">\n			I agree\n		</button>\n	</div>\n</div>\n'/*ion-inline-end:"/var/www/html/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__services_info__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=44.js.map