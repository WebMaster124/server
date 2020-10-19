import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	segment:'offerList/:id'
})
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {
    @ViewChild(Content) content: Content;
	public showOfferData:any;
	public userImg:any = environment.imageProduct + '/user/';
	public showYear:any = environment.imageProduct + '/user/';
    public retrievedObject:any;
    public localItem:any;

	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('UserList');
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

		$('body').removeClass().addClass('UserList body');
		$(document).prop('title','User List');
        $( ".zoomContainer" ).remove();
        var d = new Date();
        this.showYear = d.getFullYear();
		this.showOfferList();
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

	showOfferList(){
		var pro_view = {
			product_id:this.navParams.data.id
		}
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/make-offer/seller-view-offers',pro_view,(response)=> {
			if(response.offers.status == "success")
				this.showOfferData = response.offers;
			else
				this.showOfferData = null;
		},(error) => {
			console.log(error);
		});
	}
	
	changeStatus(val_status:any,val_offrId:any){
		var chng_status = {
			offer_id:val_offrId,
			offer_status:val_status
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/make-offer/offer-status',chng_status,(response)=> {
			this.infoService.hideLoading();
			this.showOfferList();
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
}
