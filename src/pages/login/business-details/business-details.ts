import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
declare var $:any;

/**
 * Generated class for the BusinessDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment: 'USR-Register/:id'
})

@Component({
  selector: 'page-business-details',
  templateUrl: 'business-details.html',
})
export class BusinessDetailsPage {
	
	businessDetails : FormGroup;
	public retrievedObject:any;
	public localItem:any;
	public showYear:any;
	constructor(public plt: Platform,public googleanalytics: GoogleAnalytics,public infoService:InfoService,public fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
		this.businessDetails = fb.group({
			'address1' : [null, Validators.compose([Validators.required])],
			'address2' :'',
			'business_relationship':'',
			'city' : [null, Validators.compose([Validators.required])],
			'country':'',
			'case':'2',
			'first_name': [null, Validators.compose([Validators.required])],
			'last_name': [null, Validators.compose([Validators.required])],
			'mobilenumber':'',
			'mobile_number': [null, Validators.compose([Validators.required])],//,Validators.pattern('[0-9]*')
			'natinality':'',
			'postcode' : [null, Validators.compose([Validators.required,Validators.minLength(6)])],
			'user_id':'', 
			'payment_opt':'',
			'company_number':[null, Validators.compose([Validators.required])],
			'vat_number':[null, Validators.compose([Validators.required])],
			'payment_email':[null, Validators.compose([Validators.required,Validators.email])],
		});
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('BusinessDetails');
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
		var d = new Date();
		this.showYear = d.getFullYear();
		$('body').removeClass().addClass('BusinessDetails body');
		$(document).attr('title','Register business');
	}
	
	registerBusiness(val:any){
		try{
			if($('#paymentOpt').prop('checked') == true){
				val.value.payment_opt = $('#paypal_hidden').val() ; //+ ',' + $('#paymentOpt').val(); 
			}
			val.value.user_id = this.navParams.data.id;
			
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/seller-registration',val.value,(response)=> {
				if(response.user.status == "success"){
					this.navCtrl.push('ConfirmAccountPage');
				}else {
					console.log(response.user.msg);
				}
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
		}finally{
			this.infoService.hideLoading();
		}
	}
}
