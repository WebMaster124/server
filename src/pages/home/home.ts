import { Component,ViewChild} from '@angular/core';
import { IonicPage,NavController,Content,ModalController,ViewController,Platform} from 'ionic-angular';
import { InfoService } from '../../services/info';
import { environment } from '../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
declare var $:any;

@IonicPage({
	name: 'HomePage',
	segment: 'home'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage{
	@ViewChild(Content) content: Content;

	public viewbanner:any;
	public bannerImgUrl:any = environment.imageUrl;
	public trandingImgUrl:any = environment.imageProduct + '/product';
	public categoryImgRul:any = environment.imageProduct + '/category/';
	public latestranding:any;
	public dailydeals:any;
	public recommendeddata:any;
	public recentlyViewedData:any;
	public season_dealData:any;
	public retrievedObject:any;
	public localItem:any = '';
    public viewishData:any;
    public showYear:any;
    public blockStatus:any;
    public newData:any;
	public checkcookie:any;
	public random_number:any;
	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public viewCtrl: ViewController,public modalCtrl : ModalController,public infoService:InfoService,public navCtrl: NavController) {
		$('.app-root').css('background-color','#fff');
        this.retrievedObject = localStorage.getItem('userInfo');
		this.checkcookie = localStorage.getItem('gc');
		if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = JSON.parse(this.retrievedObject);
        }
		
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('Home');
			}).catch(e => console.log(e));
		}
	}

	ionViewWillEnter() {
		$('body').removeClass().addClass('Home body');
		$(document).prop('title','Dibdaa');
        $(".searchanythingform").trigger("reset");
        $( ".zoomContainer" ).remove();
        var d = new Date();
        this.showYear = d.getFullYear();
		if(localStorage.getItem('checkuserLogin') != null && localStorage.getItem('checkuserLogin') == 'Yes'){
			var modalPage = this.modalCtrl.create('PageAdvertisementPage',{enableBackdropDismiss:false});
			modalPage.present();
		}
		
		this.random_number = Math.floor(100000 + Math.random() * 900000);
    }

    ngAfterViewInit() {
        if(this.content._scroll) {
            this.content.ionScrollEnd.subscribe((data)=>{

                if(data == null)
                    return false;
                if(this.plt.width() >= 769) {
					if (data.scrollTop >= "130") {
                        $('.top-header').slideUp();
                    } else {
                        $('.top-header').slideDown();
                    }
                }
            });
        }
    }

	ionViewDidLoad(){
		try{
			var lmt:any;
			if(this.localItem == null){
				lmt = {
					limit : 10,
					user_id:0,
				}
			}else{
				lmt = {
					limit : 10,
					user_id:this.localItem.id,
				}
			}
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/home/view-blocks',lmt,(response)=> {
				this.viewbanner = response.blocks.banners;
				this.latestranding = response.blocks.latest_trending;
				this.dailydeals = response.blocks.daily_deals;
				this.recentlyViewedData = response.blocks.recently_viewed;
				this.recommendeddata = response.blocks.recommended;
				this.blockStatus = response.blocks.block;
				this.season_dealData = response.blocks.season_deal;
				this.newData = response.blocks.new_products;
				var self = this;
				setTimeout(function(){
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
                        if(response.blocks.season_deal.length > 5) {
                            $('.owl-owl-sliderseason').owlCarousel({
                                autoplay: true,
								loop: true,
								nav: true,
								dots: true,
								autoplayTimeout: 1300,
                                margin: 15,
								mouseDrag : false,
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
                        }else{
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
                        if(response.blocks.latest_trending.length > 5) {
                            $('.owl-slidertreding').owlCarousel({
                                autoplay: true,
                                loop: true,
                                nav: true,
                                dots: false,
                                autoplayTimeout: 3400,
                                margin: 15,
								mouseDrag : false,
                                responsive: {
                                    0: {
                                        items:3,
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
                        }else{
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
                        if(response.blocks.daily_deals.length > 5){
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
                        }else{
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
						if(response.blocks.recently_viewed.length > 5){
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
						}else {
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
                        if(response.blocks.recommended.length > 5) {
                            $('.owl-editorpicks').owlCarousel({
                                autoplay: true,
                                loop: true,
                                nav: true,
                                dots: false,
                                margin: 15,
								mouseDrag : false,
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
                        }else {
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
                        if(response.blocks.new_products.length > 5) {
                            $('.owl-newData').owlCarousel({
                                autoplay: true,
                                loop: true,
                                nav: true,
                                dots: false,
                                margin: 15,
								mouseDrag : false,
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
                        }else {
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
                    self.showwishList()
					self.infoService.hideLoading();
				},500);
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error)
			this.infoService.hideLoading();
		}
    }

    showwishList(){
        if(this.localItem == null){

        }else{
            var wishlist_view ={
                user_id:this.localItem.id
            }
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/wishlist/view-wishlist',wishlist_view,(response)=> {
                this.viewishData = response.wishlist;
                setTimeout(function () {
                     if ($('.owl-slidereishlist').length) {

                        if(response.wishlist.data.length > 4){
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
                        }else {
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
										slideBy:3
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
                },500);
            },(error) => {
                console.log(error);
            });
            this.viewMsgCount();
        }
    }

    viewMsgCount(){
        if(this.localItem == null){

        }else{
            try{
                var msg_details:any = {
                    user_id:this.localItem.id
                }
                this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/unread-msg-count',msg_details,(response)=> {
                    if(response.count.status == "success" && response.count.cnt > 0){
                        $('#ShowMessageCount').text(response.count.cnt);
                        $('#ShowMsgCount').text(response.count.cnt);
                    }else{
                        $('#ShowMessageCount').text('');
                        $('#ShowMsgCount').text('');
                    }

                    if(response.count.status == "success" && response.count.cart_total > 0){
                        $('#addtoCount').text(response.count.cart_total);
                        $('#addtoCount_mobile').text(response.count.cart_total);
                    }else{
                        $('#addtoCount').text('');
                        $('#addtoCount_mobile').text('');
                    }

                },(error) => {
                    console.log(error);
                });
            }catch(Error){
                console.log(Error);
            }
        }
    }

    showseasonDeals(val:any){
	    var pass_seasonDeal = {
            category_id : val,
            season_deal : true
        }
	    this.navCtrl.push('ParentCategoryPage',{
	        id:pass_seasonDeal
        });
    }

    callCMSPage(val:any,val_pass:any){
	    if(val == 'register' || val == "dibdaaPremium" || val == "login"){
			localStorage.setItem('getPageDetails',val_pass);
            this.navCtrl.push('LoginPage', {
                id: val
            });
        }else if(val == 'register_business'){
			this.navCtrl.push('LoginPage', {
                id: 'registerBusiness'
            });
        }else if(val == "add-product"){
	        this.navCtrl.push('DraftListingPage');
        }else if(val == "resolutioncenter" || val == "cookies" || val == "registration" || val == "return" || val == "userprivacy" || val == "useragreement" ||val == "comingsoon" ||  val == "policies" || val == "security" || val == "knowledge" || val == "charity" || val == "stuff" || val == "community" || val == "announcements" || val == "advertise" || val == "careers" || val == 'selling-tools' || val == "mobile-apps" || val == "company-info" || val == "news" || val == "investord"){
            this.navCtrl.push('AboutUsPage', {
                id: val
            });
        }else if(val == "contactUs"){
			if(this.navCtrl.getActive().name == "ContactUsPage"){
				return;
			}
			
			this.navCtrl.push('ContactUsPage');
		}else if(val == "Fees-CalculatorPage"){
			if(this.navCtrl.getActive().name == "FeesCalculatorPage"){
				return;
			}
			
			this.navCtrl.push('FeesCalculatorPage');
		}else if(val == "faq-listing"){
			this.navCtrl.push('FaqListingPage',{
				id : val_pass
			});
		}else if(val == "site-map"){
			this.navCtrl.push('SiteMapPage');
		}
    }

	hideCookiebutton(){
		localStorage.setItem('gc','d53ba6');
		this.checkcookie = localStorage.getItem('gc');
	}

	gotoProductdetailpage(val:any){
		this.navCtrl.push('ProductDetails',{
			id : val
		});
	}

	gotoallListingPage(val:any){
		this.navCtrl.push('AllItemPage',{
			id : val
		});
	}
}
