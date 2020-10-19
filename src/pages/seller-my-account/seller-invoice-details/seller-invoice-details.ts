import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { InAppBrowser,InAppBrowserOptions  } from '@ionic-native/in-app-browser';
declare var $:any;
/**
 * Generated class for the SellerInvoiceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:"sellerinvoiceDetails/:id"
})
@Component({
    selector: 'page-seller-invoice-details',
    templateUrl: 'seller-invoice-details.html',
})
export class SellerInvoiceDetailsPage {
    @ViewChild(Content) content: Content;
    public retrievedObject:any;
    public localItem:any;
    public showInvoicedata:any;
    public showYear:any;
    constructor(public iab: InAppBrowser,public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('SellerInvoce');
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

        $(document).prop('title', 'Seller Invoice Details');
        $('body').removeClass().addClass('SellerInvoce body');
        var d = new Date();
        this.showYear = d.getFullYear();
        this.showSellerInvoice();
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

    showSellerInvoice(){
        var getData_decode = this.navParams.data.id;
        var convert_decode = atob(getData_decode);
        var sellerBusiness_name = JSON.parse(convert_decode);

        var sellerinvoice_view ={
            user_id:this.localItem.id,
            month:sellerBusiness_name.month,
            year:sellerBusiness_name.year
        }
        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/seller-payment-history',sellerinvoice_view,(response)=> {
           this.showInvoicedata = response.payment_history;
        },(error) => {
            console.log(error);
        });
    }
	
	paytoAdmin(){
		let total_pay = this.showInvoicedata.grand_total;
		let converttoDollor= (total_pay * 0.27).toFixed(2);
		var passData = [];
		passData.push({
			"amount":[converttoDollor],
			"email" : ["techcronus4@dibdaa.com"]
		});
			
		var passdatasellerinvoice:any = {
            "receiver_arr" : passData
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/pay/seller-paypal-payment',passdatasellerinvoice,(response)=> {
            if(response.responseEnvelope.ack == "Success"){
				let getData_decode = this.navParams.data.id;
				let convert_decode = atob(getData_decode);
				let sellerBusiness_name = JSON.parse(convert_decode);
				
				let storePaymentDetails = {
					user_id:this.localItem.id,
					month:sellerBusiness_name.month,
					year:sellerBusiness_name.year,
					invoice_id : this.showInvoicedata.date.invoice_id
				}
				localStorage.setItem('checkoutInfo_sellerPayment',JSON.stringify(storePaymentDetails));
                localStorage.setItem('KEYPaypal_sellerPayment',response.payKey);
				this.infoService.hideLoading();
				if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
					let target = "_blank";
					let options : InAppBrowserOptions = {
						location : 'yes',//Or 'no' 
						hidden : 'no', //Or  'yes'
						hardwareback : 'no',
						mediaPlaybackRequiresUserAction : 'no',
					};
					const browser = this.iab.create("https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_ap-payment&paykey="+response.payKey,target,options);
					browser.on('loadstop').subscribe(event => {
						if(event.url == "http://192.168.1.113:8100/#/paymentsuccess/UqGVdpWVM0Xcjsw05X8uv4KdAaoQVw77" || event.url == "https://www.dibdaa.com/#/paymentsuccess/UqGVdpWVM0Xcjsw05X8uv4KdAaoQVw77" || event.url == "https://www.techcronus.com/staging/Dibdaa/www/#/paymentsuccess/UqGVdpWVM0Xcjsw05X8uv4KdAaoQVw77"){
							browser.close();
							this.navCtrl.push('SellerpaymentSuccessPage',{
								id:'UqGVdpWVM0Xcjsw05X8uv4KdAaoQVw77'
							});
						}else if(event.url == "http://192.168.1.113:8100/#/home" || event.url == "https://www.dibdaa.com/#/home" || event.url == "https://www.techcronus.com/staging/Dibdaa/www/#/home"){
							browser.close();
							this.navCtrl.push('HomePage');
						}
					});
				}else{
					location.href = "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_ap-payment&paykey="+response.payKey;
				}
			}else{
				this.infoService.hideLoading();
			}
		},(error) => {
            console.log(error);
			this.infoService.hideLoading();
        });
	}
}
