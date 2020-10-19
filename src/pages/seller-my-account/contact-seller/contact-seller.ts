import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the ContactSellerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	segment:'ContactUser/:id'
})
@Component({
  selector: 'page-contact-seller',
  templateUrl: 'contact-seller.html',
})
export class ContactSellerPage {
    @ViewChild(Content) content: Content;
	public sellerBusiness_name:any;
	public verification:any;
	public verification_code:boolean = true;
	public getData_decode:any;
	public convert_decode:any;
	public showYear:any;
	public retrievedObject:any;
	public localItem:any;

	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('ContactSeller');
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

        $( ".zoomContainer" ).remove();
		$(document).prop('title','Contact seller');
		$('body').removeClass().addClass('ContactSeller body');
		this.getData_decode = this.navParams.data.id;
		this.convert_decode = atob(this.getData_decode);
	
		this.sellerBusiness_name = JSON.parse(this.convert_decode);
		
		this.verification = Math.floor(100000 + Math.random() * 900000);
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

	changeNumber(){
		this.verification = Math.floor(100000 + Math.random() * 900000);
	}
	
	contactSeller(val:any){
		if(val == "send"){
			if(parseInt($('#txtCaptcha').val()) != parseInt($('#imgcaptcha').val())){
				this.verification_code = false;
			}else{
				this.verification_code = true;
				if(this.sellerBusiness_name.product_id == undefined){
					var sndMessage:any = {
						user_id : this.sellerBusiness_name.userId,
						seller_id : this.sellerBusiness_name.seller_id,
						message : $('#message').val()
					}
					
					try{
						this.infoService.showLoading();
						this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/contact-seller',sndMessage,(response)=> {
							if(response.contact_seller.status == "fail"){
								$('#showMessage').text(response.contact_seller.msg);
								this.infoService.hideLoading();
							}else{
								$('#showMessage').text('Mail sent successfully.');
								this.infoService.hideLoading();
								var self = this;
								setTimeout(function () {
									self.navCtrl.popToRoot()
								},2500);
							}
						},(error) => {
							console.log(error);
							this.infoService.hideLoading();
						});
					}catch(Error){
						console.log(Error);
					}
				}else{
					var sndMessage:any = {
						sender_id : this.sellerBusiness_name.userId,
						receiver_id : this.sellerBusiness_name.seller_id,
						product_id : this.sellerBusiness_name.product_id,
						message : $('#message').val()
					}
				
					try{
						this.infoService.showLoading();
						this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/send-message',sndMessage,(response)=> {
							if(response.message.status == "fail"){
								$('#showMessage').text(response.message.msg);
								this.infoService.hideLoading();
							}else{
								$('#showMessage').text('Message sent successfully.');
								this.infoService.hideLoading();
								var self = this;
								setTimeout(function () {
									self.navCtrl.popToRoot()
								},2500);
							}
						},(error) => {
							console.log(error);
							this.infoService.hideLoading();
						});
					}catch(Error){
						console.log(Error);
					}
				}
			}
		}else if(val == "cancel"){
			this.navCtrl.popToRoot();
		}
	}

}
