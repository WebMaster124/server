import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,Platform} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
declare var $:any;
/**
 * Generated class for the CheckOtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-check-otp',
  templateUrl: 'check-otp.html',
})
export class CheckOtpPage {
	
	newPassword : FormGroup;
	public showYear:any;
	
	public passData = {
		email:'',
		otp:'',
		user_id:''
	}
	constructor(public plt: Platform,public googleanalytics: GoogleAnalytics,public alertCtrl: AlertController,public infoService:InfoService,public fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
	  this.newPassword = fb.group({
		  'otp': ['', Validators.compose([Validators.required,Validators.maxLength(4),Validators.minLength(4),Validators.pattern('[0-9]*')])],
		});
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('ConfirmAccount');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
		}
	}

	ionViewWillEnter() {
		$('body').removeClass().addClass('SetPassword body');
		$(document).attr('title','Confirm Account');
		var d = new Date();
        this.showYear = d.getFullYear();
		
		var parts = [],answer = "", decode_str ="" ,json_data:any = {};
		var path = window.location.href;
		parts = path.split('?q=');
		answer = parts[parts.length - 1];
		decode_str = decodeURIComponent(answer);
		json_data = JSON.parse(atob(decode_str));
		
		this.passData.email = json_data.email;
		this.passData.user_id = json_data.user_id;
		this.passData.otp = json_data.otp;
		this.newPassword.controls['otp'].setValue(json_data.otp);
	}
	
	setNewPassword(val:any){
		if(val.value.otp == ""){
			let alert1 = this.alertCtrl.create({
				title: 'Confirm Account',
				subTitle: 'OTP is required!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert1.present();
			return false;
		}
		
		if(val.value.otp == this.passData.otp){
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/check-otp',this.passData,(response)=> {
				if(response.user.status == "success"){
					this.infoService.hideLoading();
						localStorage.removeItem('registerBusinessEmail');
						localStorage.removeItem('registerConfirm');
					this.navCtrl.push('LoginPage', {
						id: 'login'	
					});
				}else{
					$('#showError').removeClass('d-none').text(response.user.msg);
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}else{
			$('#showError').removeClass('d-none').text('Verification code not matched.');
		}
	}

}
