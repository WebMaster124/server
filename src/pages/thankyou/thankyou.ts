
import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { InfoService } from '../../services/info';
import { environment } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { HTTP } from '@ionic-native/http';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the ThankyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	name: 'ThamkyouPage',
	segment:'ordersuccess/:id'
})

@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
  })

export class ThankyouPage {
    @ViewChild(Content) content: Content;
	public order_Id:any;
	public retrievedObject:any;
	public localItem:any;
	public getPayKey:any;
	public getplaceOrderdata:any
	public payment_Details:any;
	public ifproductAdded:boolean = false;

	constructor(public atrCtrl: AlertController,public googleanalytics: GoogleAnalytics,public http_mobile: HTTP,public plt: Platform,public http: HttpClient,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('OrderSuccess');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
		}
	}

	 showConfirmAlert() {
  let alertConfirm = this.atrCtrl.create({
    title: 'Delete Items',
    message: 'Are You Sure to delete this itemss?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('No clicked');
        }
      },
      {
        text: 'Yess',
        handler: () => {
          console.log('Yes clicked');
        }
      }
    ]
  });
  alertConfirm.present();
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

	ionViewWillEnter() {
        this.retrievedObject = environment.localItem;
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = environment.localItem;
            this.getplaceOrderdata = JSON.parse(localStorage.getItem('checkoutInfo'));
            this.getPayKey = localStorage.getItem('KEYPaypal');
        }
		
		$( ".zoomContainer" ).remove();
		$('body').removeClass().addClass('ThankYou body');
		$(document).prop('title','ThankYou');
        
		if(this.getPayKey == null){
			this.order_Id = this.navParams.data.id;
		}else {
            this.getOrderdetails();
		}
	}
	

	getOrderdetails(){
        try{
            this.infoService.showLoading();
            var pass_data_pay = {
                pay_key : this.getPayKey
			}
            this.getplaceOrderdata.order_status = 'Completed';
			if(this.plt.is('core') == true || this.plt.is('mobileweb') == true || this.plt.is('android') == true){
				const combined = Observable.forkJoin(
				   this.http.post(environment.serverUrl + 'api/checkout/place-order',this.getplaceOrderdata,{headers: {"Auth":"dibdaaauth"}}).map((res: any) => res),
				   this.http.post(environment.serverUrl + 'api/pay/paypal-payment-detail',pass_data_pay,{headers: {"Auth":"dibdaaauth"}}).map((res: any) => res),
				)
				var self = this;

				combined.subscribe(latestValues => {
					const [ data_placeOrder,data_paymentDetails ] = latestValues;

					if(data_placeOrder.place_order.status == "success"){
						this.order_Id = data_placeOrder.place_order.order_id;
						localStorage.removeItem('coupanCode');
						localStorage.removeItem('checkoutInfo');
						localStorage.removeItem('KEYPaypal');
						self.payment_Details = data_paymentDetails;
						self.storeOrderDetails();
					}
					self.infoService.hideLoading();
				});
			}else{
				let headers = {
					'Auth': 'dibdaaauth',
				};
				const combined = Observable.forkJoin(
				   this.http_mobile.post(environment.serverUrl + 'api/checkout/place-order',this.getplaceOrderdata,headers).then((res: any) => res),
				   this.http_mobile.post(environment.serverUrl + 'api/pay/paypal-payment-detail',pass_data_pay,headers).then((res: any) => res),
				)
				var self = this;

				combined.subscribe(latestValues => {
					const [ data_placeOrder,data_paymentDetails ] = latestValues;
					
					let convertdata_placeOrder = JSON.parse(data_placeOrder.data);
					let convertdata_paymentDetails = JSON.parse(data_paymentDetails.data);
					
					if(convertdata_placeOrder.place_order.status == "success"){
						this.order_Id = convertdata_placeOrder.place_order.order_id;
						localStorage.removeItem('coupanCode');
						localStorage.removeItem('checkoutInfo');
						localStorage.removeItem('KEYPaypal');
						self.payment_Details = convertdata_paymentDetails;
						self.storeOrderDetails();
					}
					self.infoService.hideLoading();
				});
			}
        }catch(Error){
            console.log(Error);
            this.infoService.hideLoading();
        }
	}

	storeOrderDetails(){
        var create_array = [];
        for(var i=0; i<this.payment_Details.paymentInfoList.paymentInfo.length; i++){
            create_array.push({
                "transaction_id":this.payment_Details.paymentInfoList.paymentInfo[i].transactionId,
                "transaction_status":this.payment_Details.paymentInfoList.paymentInfo[i].transactionStatus,
                "sendertransaction_id":this.payment_Details.paymentInfoList.paymentInfo[i].senderTransactionId,
                "sendertransaction_status":this.payment_Details.paymentInfoList.paymentInfo[i].senderTransactionStatus,
                "amount":this.payment_Details.paymentInfoList.paymentInfo[i].receiver.amount,
                "receiver_email":this.payment_Details.paymentInfoList.paymentInfo[i].receiver.email,
            });
        }

        var passdata = {
        	"payment_Info" : create_array,
        	"payKey" : this.payment_Details.payKey,
			"sender_email" : this.payment_Details.senderEmail,
			"order_id": this.order_Id
		}

        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/checkout/store-payment-details',passdata,(response)=> {
           this.countCart();
        },(error) => {
            console.log(error);
        });
	}

	countCart(){
		var cart_details = {
			"user_id":this.localItem.id
		}
        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/unread-msg-count',cart_details,(response)=> {
            if(response.count.status == "success" && response.count.cnt > 0){
                $('#ShowMessageCount').text(response.count.cnt);
                $('#ShowMsgCount').text(response.count.cnt);
            }else {
                $('#ShowMessageCount').text('');
                $('#ShowMsgCount').text('');
			}

            if(response.count.status == "success" && response.count.cart_total > 0){
                $('#addtoCount').text(response.count.cart_total);
                $('#addtoCount_mobile').text(response.count.cart_total);
            }else{
                $('#addtoCount').text('');
                $('#addtoCount_mobile').text('');
			}

        },(error) => {
            console.log(error);
        });
	}
	
	goToDetails(){
		alert("hii");
		this.navCtrl.push('OrderDetailPage',{
			id:this.order_Id
		})
	}
}
