import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../services/info';
import { environment } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { HTTP } from '@ionic-native/http';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the SellerpaymentSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var $:any;
@IonicPage({
	segment:'paymentsuccess/:id'
})

@Component({
  selector: 'page-sellerpayment-success',
  templateUrl: 'sellerpayment-success.html',
})
export class SellerpaymentSuccessPage {
	
	@ViewChild(Content) content: Content;
	public retrievedObject:any;
	public localItem:any;
	public getPayKey:any;
	public getplaceOrderdata:any
	public payment_Details:any;
	
	constructor(public googleanalytics: GoogleAnalytics,public http_mobile: HTTP,public plt: Platform,public http: HttpClient,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('Sellerpayment');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
		}
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
            this.getplaceOrderdata = JSON.parse(localStorage.getItem('checkoutInfo_sellerPayment'));
            this.getPayKey = localStorage.getItem('KEYPaypal_sellerPayment');
        }
		
		$( ".zoomContainer" ).remove();
		$('body').removeClass().addClass('SellerpaymentSuccess body');
		$(document).prop('title','Sellerpayment');
		
		if(this.getPayKey == null){
			
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
			if(this.plt.is('core') == true || this.plt.is('mobileweb') == true || this.plt.is('android') == true){
				const combined = Observable.forkJoin(
				  this.http.post(environment.serverUrl + 'api/pay/paypal-payment-detail',pass_data_pay,{headers: {"Auth":"dibdaaauth"}}).map((res: any) => res),
				)
				var self = this;

				combined.subscribe(latestValues => {
					const [ data_paymentDetails ] = latestValues;
						self.payment_Details = data_paymentDetails;
						localStorage.removeItem('checkoutInfo_sellerPayment');
						localStorage.removeItem('KEYPaypal_sellerPayment');
						self.infoService.hideLoading();
						self.storeOrderDetails();
				});
			}else{
				let headers = {
					'Auth': 'dibdaaauth',
				};
				const combined = Observable.forkJoin(
				  this.http_mobile.post(environment.serverUrl + 'api/pay/paypal-payment-detail',pass_data_pay,headers).then((res: any) => res),
				)
				var self = this;

				combined.subscribe(latestValues => {
					const [ data_paymentDetails ] = latestValues;
					
					let convertdata_paymentDetails = JSON.parse(data_paymentDetails.data);
					self.payment_Details = convertdata_paymentDetails;
					localStorage.removeItem('checkoutInfo_sellerPayment');
					localStorage.removeItem('KEYPaypal_sellerPayment');
					self.infoService.hideLoading();
					self.storeOrderDetails();
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
                transaction_id:this.payment_Details.paymentInfoList.paymentInfo[i].transactionId,
                transaction_status:this.payment_Details.paymentInfoList.paymentInfo[i].transactionStatus,
                sendertransaction_id:this.payment_Details.paymentInfoList.paymentInfo[i].senderTransactionId,
                sendertransaction_status:this.payment_Details.paymentInfoList.paymentInfo[i].senderTransactionStatus,
                amount:this.payment_Details.paymentInfoList.paymentInfo[i].receiver.amount,
                receiver_email:this.payment_Details.paymentInfoList.paymentInfo[i].receiver.email,
            });
        }

        var passdata = {
        	payment_Info : create_array,
        	pay_key : this.payment_Details.payKey,
			sender_email : this.payment_Details.senderEmail,
			user_id: this.getplaceOrderdata.user_id,
			month : this.getplaceOrderdata.month,
			year : this.getplaceOrderdata.year,
			invoice_id : this.getplaceOrderdata.invoice_id,
		}

        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/store-seller-payment-details',passdata,(response)=> {
           
        },(error) => {
            console.log(error);
        });
	}
	
	goToinvoiceDetails(){
		let pass_data = {
			user_id: this.getplaceOrderdata.user_id,
			month: this.getplaceOrderdata.month,
			year:this.getplaceOrderdata.year
		}

        let convert_stringify = JSON.stringify(pass_data)
        let convert_encode = btoa(convert_stringify);
		
		this.navCtrl.setRoot('SellerInvoiceDetailsPage',{
			id : convert_encode
		})
	}
}
