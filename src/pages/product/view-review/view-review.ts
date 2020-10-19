import { Component ,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the ViewReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
  segment:'product-reviews/:id'
})
@Component({
  selector: 'page-view-review',
  templateUrl: 'view-review.html',
})

export class ViewReviewPage {
  @ViewChild(Content) content: Content;
  public retrievedObject:any;
  public localItem:any;
  public reviewData:any;
  public getProductId:any;
  public showProductImage:any;
  constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
	if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('ViewReview');
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
    $('body').removeClass().addClass('ViewReview body');
    $(document).prop('title','View Review');
    this.getProductId = this.navParams.data.id;
    this.showreviewData();
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

  showreviewData(){
    try{
      this.infoService.showLoading();
      var feedbackView ={
        product_id :this.navParams.data.id,
        per_page : 10
      }
      this.infoService.callHttpFunction_post(environment.serverUrl + 'api/rating/view-product-rating',feedbackView,(response)=> {
        this.showProductImage = environment.imageProduct + '/product/';
        this.reviewData = response.product_rate.data;
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
      product_id : this.navParams.data.id,
      per_page : 10
    }
    try{
      this.infoService.showLoading();
      this.infoService.callHttpFunction_post(environment.serverUrl + 'api/rating/view-product-rating?page='+event,replydata_pagination,(response)=> {
        this.reviewData = response.feedback.data;
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
	
	leaveFeedback(val_proId:any,val_proTitle:any,val_proImage:any,val_sellerId:any){
		var feedbackData = {
			ProId:val_proId,
			ProTitle:val_proTitle,
			ProImage:val_proImage,
			sellerId:val_sellerId,
		}

		var convert_stringifyfeedback = JSON.stringify(feedbackData)
		var convert_encodefeedback = btoa(convert_stringifyfeedback);

		this.navCtrl.push('LeaveProductRatingPage',{
			id:convert_encodefeedback
		});
  }
  
  getTouserProfile(val:any){
		this.navCtrl.push('UserProfilePage',{
			id:val
		})
	}
}
