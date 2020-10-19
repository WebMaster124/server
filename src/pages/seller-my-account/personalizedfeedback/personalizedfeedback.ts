import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
declare var $:any;
/**
 * Generated class for the PersonalizedfeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment: 'ViewPersonalizedFeedback'
})
@Component({
  selector: 'page-personalizedfeedback',
  templateUrl: 'personalizedfeedback.html',
})
export class PersonalizedfeedbackPage {
    @ViewChild(Content) content: Content;
	public Userdata:any = environment.localItem;
	public replyFeedbackData:any;
	public showYear:any;
	public retrievedObject:any;
	public localItem:any;
	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('ReplytoFeedbackReceived');
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

		$('body').removeClass().addClass('Personalizedfeedback body');
		$(document).prop('title','Reply to Feedback Received');
        $( ".zoomContainer" ).remove();
        var d = new Date();
        this.showYear = d.getFullYear();
		this.showReplyfeedback();
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

	showReplyfeedback(){
		var reply_data:any = {
			user_id : this.Userdata.id,
			user_role : this.Userdata.role
		}
		
		try{
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/reply-feedback-list',reply_data,(response)=> {
				this.replyFeedbackData = response.feedback.data;
				this.infoService.hideLoading();
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
		}
	}
	
	getServerData(event){
		var replydata_pagination:any = {
			user_id : this.Userdata.id,
			user_role : this.Userdata.role
		}
		
		try{
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/reply-feedback-list?page='+event,replydata_pagination,(response)=> {
				this.replyFeedbackData = response.feedback.data;
				this.infoService.hideLoading();
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
		}
	}
	
	goToLeavefeedback(valseller_id:any,valproduct_id:any,valbuyer_id:any,valproduct_title:any,valbuyer_name:any,valphotos:any,valorderId:any){
		var feedbackData = {
			sellerId : valseller_id,
			productId : valproduct_id,
			buyerId : valbuyer_id,
			productTitle : valproduct_title,
			buyerName : valbuyer_name,
			productPhoto : valphotos,
			orderId:valorderId
		}
		
		var convert_stringify = JSON.stringify(feedbackData);
		var convert_encode = btoa(convert_stringify);

		this.navCtrl.push('LeaveFeedbackSellerPage',{
			id:convert_encode
		});
	}

}
