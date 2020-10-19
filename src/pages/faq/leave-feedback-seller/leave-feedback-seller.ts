import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the LeaveFeedbackSellerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	segment:'reply-review/:id'
})
@Component({
  selector: 'page-leave-feedback-seller',
  templateUrl: 'leave-feedback-seller.html',
})
export class LeaveFeedbackSellerPage {
    @ViewChild(Content) content: Content;
	public leavefeedback = {
		sender_id : '',
		product_id : '',
		receiver_id : '',
		title : '',
		description : '',
		feedback_type : '',
		rate:0,
		communicaton: '',
		recommend: '',
		valuemoney: 0,
		dispatched: 0,
		feedback_by: 'seller',
		order_id:''
	}
	
	public trandingImgUrl:any = environment.imageProduct + '/product/';
	public retrievedObject:any;
	public localItem:any;
	public detailsData:any;
	public reviewAdded:boolean = false;
	public getData_decode:any;
	public convert_decode:any;
    public showYear:any;
	public feedbackresponse:any;
	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('LeaveFeedbackSeller');
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

		this.getData_decode = this.navParams.data.id;
		this.convert_decode = atob(this.getData_decode);
		this.detailsData = JSON.parse(this.convert_decode);
		
		$('body').removeClass().addClass('LeaveFeedbackSeller body');
		$(document).prop('title','Feedback Reply');
        $( ".zoomContainer" ).remove();
        var d = new Date();
        this.showYear = d.getFullYear();
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

	submitForm(){
		try{
			
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
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/save-feedback',this.leavefeedback,(response)=> {
				if(response.feedback.status == "success"){
					this.reviewAdded = true;
					this.infoService.hideLoading();
				}else{
					this.reviewAdded = false;
					this.feedbackresponse = response;
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
		}
	}
}
