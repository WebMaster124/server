import {Component, ViewChild,Injectable} from '@angular/core';
import { Platform,Nav,App} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InfoService } from '../services/info';
import { environment } from '../environments/environment';
import '../assets/jquery/webslidemenu.js';
declare var $:any;
import { AppVersion } from '@ionic-native/app-version';
//import { Market } from '@ionic-native/market';
//import { UniqueDeviceID } from '@ionic-native/unique-device-id';
//import { AlertController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { InAppBrowser,InAppBrowserOptions  } from '@ionic-native/in-app-browser';
@Component({
  templateUrl: 'app.html'
})
@Injectable()
export class MyApp {

	@ViewChild(Nav) nav: Nav;
	rootPage:any = 'HomePage';

	public viewcategory:any;
	public menu_category:any;
	public categoryImgRul:any;
	public lg:any;
	public retrievedObject = localStorage.getItem('userInfo');
	public userImg:any = environment.imageProduct + '/user/';
	public getapp_version:any;

	constructor(public iab: InAppBrowser,public keyboard: Keyboard,public app_version: AppVersion,public appCtrl: App,public infoService:InfoService,public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) { //private market: Market, public alertCtrl: AlertController,
		
		if(this.retrievedObject == null || this.retrievedObject == ''){
			environment.localItem = null;
			environment.isLogin = false;
			this.lg = environment;
		}else{
			environment.localItem = JSON.parse(this.retrievedObject);
			environment.isLogin = true;
			this.lg = environment;
		}
		
		if(this.platform.is('core') == false && this.platform.is('mobileweb') == false){
			this.platform.ready().then(() => {
				this.statusBar.backgroundColorByHexString('#ffffff');
				this.statusBar.styleDefault();
				this.splashScreen.hide();
				this.keyboard.hideFormAccessoryBar(false);
				this.app_version.getVersionNumber().then((version:any) => {
					this.getapp_version = version;
				});
				
				/*this.uniqueDeviceID.get()
				  .then((uuid: any) => console.log(uuid))
				  .catch((error: any) => console.log(error)); */
  
				this.callSearchcatList();
			});
		}else{
			this.callSearchcatList();
		}
	}

	callSearchcatList(){
		try{
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/category/view-menu-category','',(response)=> {
                if(response.categories.status == "success"){
                    this.menu_category = response.categories;
                    this.categoryImgRul = environment.imageProduct + '/category/';
					/*if(this.platform.is('core') == false && this.platform.is('mobileweb') == false){
						this.app_version.getVersionNumber().then((version:any) => {
							if(version > this.menu_category.version){
								let alert_upate = this.alertCtrl.create({
									title: 'New version available',
									message: 'Please update your App immediately.',
									buttons: [
										{
											text: 'Ignore',
											role: 'cancel',
											handler: () => {
											}
										},
										{
											text: 'Update',
											handler: () => {
												if(this.platform.is('ios') == true) {
													this.market.open('id1292265668?mt=8'); // iOS use App Id
												}else if(this.platform.is('android') == true){
													this.market.open('com.dibdaa'); //Android use package name
												}
											}
										}
									]
								});
								alert_upate.present();
							}
						});
					}*/
				}
                this.viewMsgCount();
            },(error) => {
                console.log(error);
            });
		}catch(Error){
			console.log(Error);
		}
	}

	showMenu(){
		$('#add_class_menu').toggleClass('wsoffcanvasopener');
	}

	viewMsgCount(){
		if(environment.localItem == null){

		}else{
			try{
				var id_uMsg = JSON.parse(this.retrievedObject);
				var msg_details:any = {
					user_id:id_uMsg.id
				}
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/unread-msg-count',msg_details,(response)=> {
					if(response.count.status == "success" && response.count.cnt > 0){
						$('#ShowMessageCount').text(response.count.cnt);
						$('#ShowMsgCount').text(response.count.cnt);
					}

					if(response.count.status == "success" && response.count.cart_total > 0){
                $('#addtoCount').text(response.count.cart_total);
                $('#addtoCount_mobile').text(response.count.cart_total);
					}

					if(response.count.status == "success" && response.count.announcement_cnt > 0){
                        $('#announcementCount').text(response.count.announcement_cnt);
                        $('#announcementCount_mobile').text(response.count.announcement_cnt);
					}
				},(error) => {
					console.log(error);
				});
			}catch(Error){
				console.log(Error);
			}
		}
	}

	viewCart(){
		if(this.nav.getActive().name == "ViewCartPage"){
			return;
		}
		
		this.nav.push('ViewCartPage');
	}

	GoToCatList(val:any,val1:any){
		if(val1 == 'Parent'){
			this.closeMenu();
			this.nav.push('ParentCategoryPage',{
				id:val
			});
		}else if(val1 == 'Sub'){
			this.closeMenu();
			this.nav.push('SubCategoryPage',{
				id:val
			});
		}
	}

	logOut(){
		var my = this;
		my.infoService.showLoading();
		setTimeout(function(){
			localStorage.removeItem('userInfo');
			localStorage.removeItem('checkuserLogin');
			localStorage.removeItem('searchData');
			environment.isLogin = false;
			environment.localItem = null;
			my.infoService.hideLoading();
            my.nav.setRoot('HomePage');
		},1500);
	}

	GoToSellerAccount(val:any){
		this.nav.push('SellerMyAccountPage', {
			id:val
		});
	}

	SearchHome(val:any){
		var keywrd:any;
		var cat_id:any;
		keywrd = val.searchKeyWord;
		cat_id = val.allcategories;
		var home_search:any;
		var convert_stringify:any = '';
		var convert_encode:any = '';

		if((keywrd != null && cat_id != null) && (keywrd != '' && cat_id != null) && (keywrd != '' && cat_id != '')){
			home_search = {
				keyword:keywrd,
				category_id:cat_id
			}
			convert_stringify = JSON.stringify(home_search)
			convert_encode = btoa(convert_stringify);

			this.nav.push('SearchDataPage',{
				id:convert_encode
			});
		}else if(cat_id != null && cat_id != ''){
			this.nav.push('ParentCategoryPage',{
				id:cat_id
			});
		}else if(keywrd != null && keywrd != ''){
			home_search = {
				keyword:keywrd
			}
			convert_stringify = JSON.stringify(home_search)
			convert_encode = btoa(convert_stringify);

			this.nav.push('SearchDataPage',{
				id:convert_encode
			});
		}
	}

    goToHomePage(val:any,val_pass:any){
		if(val == "Home"){
			if(this.nav.getActive().name == "HomePage"){
				window.location.reload();
				return;
			}

        	this.nav.setRoot('HomePage');
		}else if(val == "login") {
			localStorage.setItem('getPageDetails',val_pass);
            this.appCtrl.getRootNav().push('LoginPage', {
                id: 'login',
            });
        }else if(val == "register") {
			localStorage.setItem('getPageDetails',val_pass);
            this.appCtrl.getRootNav().push('LoginPage', {
                id: 'register'
			});
        }else if(val == "dibdaaPremium") {
            this.appCtrl.getRootNav().push('LoginPage', {
                id: 'dibdaaPremium'
            });
        }
	}

	searchToggle(){
		$(".search-bar").slideToggle();
	}

	closeMenu(){
		$('#add_class_menu').toggleClass('wsoffcanvasopener');
	}

	gotouserProfilepage(val:any,val1:any){
		if(val1 == "UserProfile"){
			if(this.nav.getActive().id == "UserProfilePage"){
				return;
			}
			
			this.nav.push('UserProfilePage',{
				id : val
			});
		}else if(val1 == "Buyerprofile"){
			if(this.nav.getActive().id == "BuyerProfilePage"){
				return;
			}
			
			this.nav.push('BuyerProfilePage',{
				id : val
			});
		}else if(val1 == "draft-listing"){
			if(this.nav.getActive().id == "DraftListingPage"){
				return;
			}
			
			this.nav.push('DraftListingPage');
		}else if(val1 == "seller-business-info"){
			if(this.nav.getActive().id == "AddedSellerInfoPage"){
				return;
			}
			
			this.nav.push('AddedSellerInfoPage');
		}else if(val1 == "contact-us"){
			if(this.nav.getActive().id == "ContactUsPage"){
				return false;
			}
			
			this.nav.push('ContactUsPage');
		}else if(val1 == "advance-search"){
			if(this.nav.getActive().id == "AdvanceSearchPage")
				return;

			this.nav.push('AdvanceSearchPage');
		}else if(val1 == "FeaturedDeals" || val1 == "Under50"){
			this.nav.push('AllItemPage',{
				id : val
			})
		}else if(val1 == "notificationAll"){
			this.nav.push('NotificationDetailsPage',{
				id : val
			})
		}else if(val1 == "about-us"){
			this.nav.push('AboutUsPage',{
				id : val
			})
		}else if(val1 == "faq"){
			if(this.nav.getActive().id == "FaqPage"){
				return;
			}
			
			this.nav.push('FaqPage');
		}else if(val1 == "shop-by-departments"){
			if(this.nav.getActive().id == "ShopByDepartmentsPage"){
				return;
			}
			
			this.nav.push('ShopByDepartmentsPage');
		}else if(val1 == "seller-my-account") {
			
        	this.nav.setRoot('SellerMyAccountPage',{
				id : val
			});
		}
	}
	
	openURLInBrowser_Menu(val:any){
		let target = "_blank";
		let options : InAppBrowserOptions = {
			location : 'yes',//Or 'no' 
			hidden : 'no', //Or  'yes'
			hardwareback : 'no',
			mediaPlaybackRequiresUserAction : 'no',
		};
		let browser:any;
		if(val == "Facebook"){
			browser = this.iab.create("https://www.facebook.com/dibdaa",target,options);
		}else if(val == "Instagram"){
			browser = this.iab.create("https://www.instagram.com/dibdaa",target,options);
		}else if(val == "Twitter"){
			browser = this.iab.create("https://twitter.com/dibdaa",target,options);
		}else if(val == "LinkedIn"){
			browser = this.iab.create("https://www.linkedin.com/company/dibdaa",target,options);
		}
		
		browser.on('loadstop').subscribe(event => {
		});
	}

	clickonMenu(val:any,val1:any){
		if(val1 == "UserProfile"){
			if(this.nav.getActive().id == "UserProfilePage"){
				return;
			}
			
			this.nav.push('UserProfilePage',{
				id : val
			})
		}else if(val1 == "Buyerprofile"){
			if(this.nav.getActive().id == "BuyerProfilePage"){
				return;
			}
			
			this.nav.push('BuyerProfilePage',{
				id : val
			})
		}else if(val1 == "draft-listing"){
			if(this.nav.getActive().id == "DraftListingPage"){
				return;
			}
			
			this.closeMenu();
			this.nav.push('DraftListingPage');
		}else if(val1 == "seller-business-info"){
			if(this.nav.getActive().id == "AddedSellerInfoPage"){
				return;
			}
			
			this.closeMenu();
			this.nav.push('AddedSellerInfoPage');
		}else if(val1 == "contact-us"){
			if(this.nav.getActive().id == "ContactUsPage"){
				return;
			}
			
			this.closeMenu();
			this.nav.push('ContactUsPage');
		}else if(val1 == "advance-search"){
			if(this.nav.getActive().id == "AdvanceSearchPage"){
				return;
			}
			
			this.closeMenu();
			this.nav.push('AdvanceSearchPage');
		}else if(val1 == "FeaturedDeals" || val1 == "Under50"){
			this.closeMenu();
			this.nav.push('AllItemPage',{
				id : val
			})
		}else if(val1 == "notificationAll"){
			this.nav.push('NotificationDetailsPage',{
				id : val
			});
		}else if(val1 == "about-us"){
			this.closeMenu();
			this.nav.push('AboutUsPage',{
				id : val
			});
		}else if(val1 == "faq"){
			if(this.nav.getActive().id == "FaqPage"){
				return;
			}
			
			this.closeMenu();
			this.nav.push('FaqPage');
		}else if(val1 == "shop-by-departments"){
			if(this.nav.getActive().id == "ShopByDepartmentsPage"){
				return;
			}
			
			this.closeMenu();
			this.nav.push('ShopByDepartmentsPage');
		}else if(val1 == "Home") {
			if(this.nav.getActive().id == "HomePage"){
				window.location.reload();
				return;
			}

			this.closeMenu();
        	this.nav.setRoot('HomePage');
		}else if(val1 == "seller-my-account") {
			this.closeMenu();
        	this.nav.setRoot('SellerMyAccountPage',{
				id : val
			});
		}
	}
	
	callCMSPage_menu(val:any,val_pass:any){
	    this.closeMenu();
		if(val == 'register' || val == "dibdaaPremium" || val == "login"){
			localStorage.setItem('getPageDetails',val_pass);
            this.nav.push('LoginPage', {
                id: val
            });
        }else if(val == 'register_business'){
			this.nav.push('LoginPage', {
                id: 'registerBusiness'
            });
        }else if(val == "add-product"){
	        this.nav.push('DraftListingPage');
        }else if(val == "resolutioncenter" || val == "cookies" || val == "registration" || val == "return" || val == "userprivacy" || val == "useragreement" ||val == "comingsoon" ||  val == "policies" || val == "security" || val == "knowledge" || val == "charity" || val == "stuff" || val == "community" || val == "announcements" || val == "advertise" || val == "careers" || val == 'selling-tools' || val == "mobile-apps" || val == "company-info" || val == "news" || val == "investord"){
            this.nav.push('AboutUsPage', {
                id: val
            });
        }else if(val == "contactUs"){
			if(this.nav.getActive().id == "ContactUsPage"){
				return;
			}
			
			this.nav.push('ContactUsPage');
		}else if(val == "Fees-CalculatorPage"){
			if(this.nav.getActive().id == "FeesCalculatorPage"){
				return;
			}
			
			this.nav.push('FeesCalculatorPage');
		}else if(val == "faq-listing"){
			this.nav.push('FaqListingPage',{
				id : val_pass
			});
		}else if(val == "site-map"){
			this.nav.push('SiteMapPage');
		}
    }
}
$(".firstnav li.nav-item.right-border.dropdown.my-account-dropdown.pt-1.pb-1 div.dropdown-content-my-account").hover(function () {
		$('body').toggleClass("ZoomLensHide");
});