import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the LeaveFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	segment:'write-feedback/:id'
})
@Component({
  selector: 'page-leave-feedback',
  templateUrl: 'leave-feedback.html',
})
export class LeaveFeedbackPage {
    @ViewChild(Content) content: Content;
	public leavefeedback = {
		sender_id : '',
		product_id : '',
		receiver_id : '',
		title : '',
		description : '',
		feedback_type : '',
		rate:'',
		communicaton: '',
		recommend: '',
		valuemoney: '',
		dispatched: '',
		feedback_by: 'buyer',
		order_id:''
	}
	
	public trandingImgUrl:any = environment.imageProduct + '/product/';
	public retrievedObject :any;
	public localItem:any;
	public detailsData:any;
	public reviewAdded:boolean = false;
	public getData_decode:any;
	public convert_decode:any;
    public showYear:any;

	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('LeaveFeedback');
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

		$('body').removeClass().addClass('LeaveFeedback body');
		$(document).prop('title','Leave Feedback | Dibdaa');
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
			this.leavefeedback.sender_id = this.localItem.id;
			this.leavefeedback.product_id = this.detailsData.ProId;
			this.leavefeedback.receiver_id = this.detailsData.sellerId;
			this.leavefeedback.order_id = this.detailsData.orderId;
			this.leavefeedback.feedback_type = $('input[type=radio][name=feedback_type]:checked').val();
			this.leavefeedback.rate = $('input[type=radio][name=reviewStars]:checked').val();
			this.leavefeedback.communicaton = $('input[type=radio][name=communicationStars]:checked').val();
			this.leavefeedback.recommend = $('input[type=radio][name=itemStars]:checked').val();
			this.leavefeedback.valuemoney = $('input[type=radio][name=moneyStars]:checked').val();
			this.leavefeedback.dispatched = $('input[type=radio][name=dispatchedStars]:checked').val();

			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/save-feedback',this.leavefeedback,(response)=> {
				if(response.feedback.status == "success"){
					this.reviewAdded = true;
					this.infoService.hideLoading();
				}else{
					$('.showFeedbackError').removeClass('d-none');
					this.reviewAdded = false;
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

	goToback(){
		this.navCtrl.pop();
	}

    resetFunc(){
		$('#select-two-money').addClass('d-none');
	}

	onKeyPressed(val:any){
	  if (val.which === 32 && !val.target.value.length)
        val.preventDefault();
  	}
	
	gotoProductdetailspage(val:any){
		this.navCtrl.push('ProductDetails',{
			id : val
		})
	}
}	
