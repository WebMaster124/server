import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
    @ViewChild(Content) content: Content;
    public contactusResponse:any;
    public retrievedObject:any;
    public localItem:any;
    public verification:any;
    public verification_code:boolean = true;
    constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('ContactUs');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
		}
	}

    ionViewWillEnter() {
        this.retrievedObject = environment.localItem;
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = environment.localItem;
        }
		this.verification = Math.floor(100000 + Math.random() * 900000);
        $('body').removeClass().addClass('contactUs body');
        $(document).prop('title','Contact Us');
        $( ".zoomContainer" ).remove();
    }

	changeNumber(){
		this.verification = Math.floor(100000 + Math.random() * 900000);
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


  showContact(){
		var contact_listing:any = {
			id : this.navParams.data.id
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/faq/view-faq',contact_listing,(response)=> {
			if(response.status == "success"){
				this.faqlistin_data = response;
				this.infoService.hideLoading();
			}else{
				this.infoService.hideLoading();
			}
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
   
	//submit contact us information form.
    submitContactus(val:any){

		if(parseInt($('#txtCaptcha').val()) != parseInt($('#imgcaptcha').val())){
			this.verification_code = false;
			return;
		}else{
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/contact-us',val.value,(response)=> {
				this.infoService.hideLoading();
				this.contactusResponse = response.contact_us;
				this.verification_code = true;
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
        
    }
}
