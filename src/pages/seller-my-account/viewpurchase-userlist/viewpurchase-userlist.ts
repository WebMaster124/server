import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform, AlertController} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the ViewpurchaseUserlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	segment:'purchaseusrList/:id'
})
@Component({
  selector: 'page-viewpurchase-userlist',
  templateUrl: 'viewpurchase-userlist.html',
})

export class ViewpurchaseUserlistPage {
    @ViewChild(Content) content: Content;
	public showpurchaseData:any;
	public showYear:any;
    public retrievedObject:any;
    public localItem:any;

	constructor(public googleanalytics: GoogleAnalytics,public alertCtrl: AlertController,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('ViewpurchaseList');
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
		$('body').removeClass().addClass('viewpurchaseList body');
		$(document).prop('title','Purchase User List');
        var d = new Date();
        this.showYear = d.getFullYear();
		this.showUserList();
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

	showUserList(){
		var pro_view = {
			product_id:this.navParams.data.id
		}
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-product-purchase-user-list',pro_view,(response)=> {
			this.showpurchaseData = response.user_list;
		},(error) => {
			console.log(error);
		});
	}

    changeOrderStatus(val_orderStatus:any,val_buyerid:any,val_productid:any,val_orderid:any){
        if(val_orderStatus == "")
			return false;
		
		let alert = this.alertCtrl.create({
			title: 'Change Status',
			subTitle: 'Are you sure you want to change order status?',
			buttons: [
				  {
					text: 'Cancel',
					role: 'cancel',
					cssClass:'alert-button-changeColor',
					handler: () => {
					  
					}
				  },
				  {
					text: 'Continue',
					cssClass:'alert-button-changeColor',
					handler: () => {
						var order_status = {
							buyer_id : val_buyerid,
							product_id : val_productid,
							order_id : val_orderid,
							status : val_orderStatus
						}
						this.infoService.showLoading();
						this.infoService.callHttpFunction_post(environment.serverUrl + 'api/checkout/change-order-product-status',order_status,(response)=> {
							this.infoService.hideLoading();
							this.showUserList();
						},(error) => {
							console.log(error);
							this.infoService.hideLoading();
						});
					}
				  }
				]
		  });
		alert.present();
    }
	
	changeStatusToPaid(val_buyerid:any,val_productid:any,val_orderid:any){
		let alert = this.alertCtrl.create({
			title: 'Change Status',
			subTitle: 'Are you sure you want to complete payment status?',
			buttons: [
				  {
					text: 'Cancel',
					role: 'cancel',
					cssClass:'alert-button-changeColor',
					handler: () => {
					  
					}
				  },
				  {
					text: 'Continue',
					cssClass:'alert-button-changeColor',
					handler: () => {
						var order_status = {
							buyer_id : val_buyerid,
							product_id : val_productid,
							order_id : val_orderid,
							status : 'Completed'
						}
						this.infoService.showLoading();
						this.infoService.callHttpFunction_post(environment.serverUrl + 'api/checkout/change-order-product-status',order_status,(response)=> {
							this.infoService.hideLoading();
							this.showUserList();
						},(error) => {
							console.log(error);
							this.infoService.hideLoading();
						});
					}
				  }
				]
		  });
		alert.present();
	}
}
