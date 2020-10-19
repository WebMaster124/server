import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform, AlertController} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the LeaveUserRatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
  segment:'write-user-review/:id'
})
@Component({
  selector: 'page-leave-product-rating',
  templateUrl: 'leave-user-rating.html',
})
export class LeaveUserRatingPage {

  @ViewChild(Content) content: Content;
  public leavefeedback = {
    sender_id : '',
    product_id : '',
    receiver_id : '',
    title : '',
    description : '',
    recommend: '',
    valueproduct: '',
    rate:0,
    qualityproduct: '',
    feedback_by: 'buyer',
  }

  public trandingImgUrl:any = environment.imageProduct + '/product/';
  public retrievedObject :any;
  public localItem:any;
  public reviewAdded:boolean = false;
  public getData_decode:any;
  public convert_decode:any;
  public detailsData:any;
  public showYear:any;

	constructor(public googleanalytics: GoogleAnalytics,public alertCtrl: AlertController,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('Rate and Review');
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

    $('body').removeClass().addClass('LeaveProductRating body');
    $(document).prop('title','Rate and Review123 | Dibdaa');
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
		
		if(this.localItem.id == this.detailsData.sellerId){
			let alert1 = this.alertCtrl.create({
				title: 'RATE AND REVIEW123',
				subTitle: 'Sorry you cannot write review on your own items.',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert1.present();
			return;
		}
		this.leavefeedback.title = $('#review-title').val();
		this.leavefeedback.description = $('#checkout-instruction').val();
		this.leavefeedback.sender_id = this.localItem.id;
		this.leavefeedback.product_id = this.detailsData.ProId;
		this.leavefeedback.receiver_id = this.detailsData.sellerId;
		if($('input[type=radio][name=reviewStars]:checked').val() == undefined){
			this.leavefeedback.rate = 0;
		}else{
			this.leavefeedback.rate = $('input[type=radio][name=reviewStars]:checked').val();
		}
		
		this.leavefeedback.recommend = $('input[type=radio][name=recommend_yes]:checked').val();
		this.leavefeedback.valueproduct = $('input[type=radio][name=value_yes]:checked').val();
		this.leavefeedback.qualityproduct = $('input[type=radio][name=quality_yes]:checked').val();

		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/rating/save-rating',this.leavefeedback,(response)=> {
			if(response.product_rate.status == "success"){
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
  
}
