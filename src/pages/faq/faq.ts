import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import {environment} from "../../environments/environment";
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
 	@ViewChild(Content) content: Content;
        public faqcatlistin_data:any;
    public showYear:any;
    public retrievedObject:any;
    public localItem:any;
 	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('FAQ');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
		}
	}

    /* ngAfterViewInit() {
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
        $(".searchanythingform").trigger("reset");
		$('body').removeClass().addClass('Faq body');
		$(document).prop('title','FAQ');
        $( ".zoomContainer" ).remove();
        var d = new Date();
        this.showYear = d.getFullYear();
        this.showFaqCategorylisting();
        this.showFaqBanner();
	}
	
	gotoFaqDetailpage(val:any){
		this.navCtrl.push('FaqListingPage',{
			id : val
		});
	}
        
        
        //show faq data.
	showFaqCategorylisting(){
        var faq_listing:any = {
			id : this.navParams.data.id
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/faq/view-faq-category',faq_listing,(response)=> {
                
			if(response.status == "success"){
				this.faqcatlistin_data = response;
				this.infoService.hideLoading();
			}else{
				this.infoService.hideLoading();
			}
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
        
        
        //show faq data.
	showFaqBanner(){
        var faq_listing:any = {
			id : this.navParams.data.id
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/faq/view-faq-banner',faq_listing,(response)=> {
                
			if(response.status == "success"){
				this.faqbanner_data = response;
				this.infoService.hideLoading();
			}else{
				this.infoService.hideLoading();
			}
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	} */
        
        
        
}
