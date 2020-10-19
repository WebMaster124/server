import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the SiteMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage()
@Component({
  selector: 'page-site-map',
  templateUrl: 'site-map.html',
})
export class SiteMapPage {
	@ViewChild(Content) content: Content;
	public retrievedObject:any;
	public sitemapData:any;
	public localItem:any = '';
	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('Sitemap');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
		}
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
				}else{

					if (data.scrollTop >= "130") {
						$('.mobile-sell-now').slideUp();
					} else {
						$('.mobile-sell-now').slideDown();
					}
				}
            });
        }
    }
	
	ionViewWillEnter() {
        this.retrievedObject = environment.localItem;
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = environment.localItem;
        }

		$('body').removeClass().addClass('site-map body');
		$(document).prop('title','Site map');
        $( ".zoomContainer" ).remove();
		$(".searchanythingform").trigger("reset");
		this.sitemapCategory();
	}
	
	sitemapCategory(){
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/category/view-category-site-map','',(response)=> {
           this.sitemapData = response.categories;
        },(error) => {
            console.log(error);
        });
	}
	
	callCMSpagesiteMap(val:any,val_pass:any){
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
        }else if(val == "selleragreement" || val == "sellerprivacy" || val == "userprivacy" || val == "user-agreement" || val == "return" || val == "user-privacy" || val == "useragreement" ||val == "comingsoon" ||  val == "policies" || val == "security" || val == "knowledge" || val == "charity" || val == "stuff" || val == "community" || val == "announcements" || val == "advertise" || val == "careers" || val == 'selling-tools' || val == "mobile-apps" || val == "company-info" || val == "news" || val == "investord"){
            this.navCtrl.push('AboutUsPage', {
                id: val
            });
        }
    }
	
}
