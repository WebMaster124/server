import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
		segment:'order-history/:id'
})
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {
    @ViewChild(Content) content: Content;
	public purchase_data:any;
	public purchaseData_arr:any;
	public trandingImgUrl:any = environment.imageProduct + '/product/';
	public orderDetailData:any;
	public transationData_arr:any;
	public showYear:any;
	public retrievedObject:any;
	public localItem:any;
	public total:any = 0;
	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('Order details');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
		}
	}

	ionViewWillEnter(){
        this.retrievedObject = environment.localItem;
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = environment.localItem;
        }
        $( ".zoomContainer" ).remove();
		$(document).prop('title','Order details');
		$('body').removeClass().addClass('OrderDetail body');
        var d = new Date();
        this.showYear = d.getFullYear();
		this.purchaseDetails();
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

	purchaseDetails(){
		try{
			this.infoService.showLoading();
			var purchase_view ={
				order_id:this.navParams.data.id
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/purchase/purchase-details',purchase_view,(response)=> {
				if(response.order.status == "success"){
					this.purchase_data = response.order;
                    this.purchaseData_arr = (<any>Object).entries(response.order.order_info);
                    var data_order = {};
                    data_order['order_Id'] = this.purchaseData_arr[0][1][0].order_id;
                    data_order['created_Date'] = this.purchaseData_arr[0][1][0].created_date;
                    data_order['couponcode_discount'] = this.purchaseData_arr[0][1][0].coupon_code_discount;
                    data_order['couponcode_type'] = this.purchaseData_arr[0][1][0].code_type;
                    data_order['coupon_code'] = this.purchaseData_arr[0][1][0].coupon_code;
                    this.orderDetailData = data_order;
                    this.transationData_arr = (<any>Object).entries(response.order.transaction_detail);
                    var cal_quentity=0,cal_discount=0;
					this.total = 0;
                    for(var i=0;i<response.order.order_info.businessName.length;i++){
                        for(var j=0; j < this.purchaseData_arr[i][1].length;j++){
                            cal_quentity = this.purchaseData_arr[i][1][j].price * parseInt(this.purchaseData_arr[i][1][j].order_quantity);
                            cal_discount = (cal_quentity - (cal_quentity * this.purchaseData_arr[i][1][j].discount) / 100);
                            this.total = this.total + cal_discount;
                        }
                    }
                    this.infoService.hideLoading();
				}else{
                    this.purchase_data = response.order;
				}
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
		}
	}

	leaveFeedback(val_proId:any,val_proTitle:any,val_proImage:any,val_sellerId:any,val_orderId:any){
        var feedbackData = {
            ProId:val_proId,
            ProTitle:val_proTitle,
            ProImage:val_proImage,
            sellerId:val_sellerId,
            orderId:val_orderId,
        }
        
        var convert_stringifyfeedback = JSON.stringify(feedbackData)
        var convert_encodefeedback = btoa(convert_stringifyfeedback);

        this.navCtrl.push('LeaveFeedbackPage',{
            id:convert_encodefeedback
        });
    }

	getTouserProfile(val:any){
		this.navCtrl.push('UserProfilePage',{
			id:val
		})
	}
}
