import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,Platform} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
declare var $:any;
/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

	resetPassword : FormGroup;
	public matchEmail:boolean = true;
	public resetSucess:boolean = false;
	public localItem:any
	public retrievedObject:any;
	public showYear_footer:any;
	constructor(public plt: Platform,public googleanalytics: GoogleAnalytics,public alertCtrl: AlertController,public infoService:InfoService,public fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
		
		this.resetPassword = fb.group({
			'email':['', Validators.compose([Validators.required])]
		})
		
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('ResetPassword');
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

		$('body').removeClass().addClass('ResetPassword body');
		$(document).attr('title','Reset your password');
		var d = new Date();
		this.showYear_footer = d.getFullYear();
	}
	
	resetPswd(val:any){
		try{
			if(val.value.email == ''){
				let alert1 = this.alertCtrl.create({
					title: 'Reset your password',
					subTitle: 'Email address or username is required!',
					buttons: [{
						text: 'OK',
						role: 'cancel',
						cssClass:'alert-button-changeColor'
					}]
				});
				alert1.present();
				return false;
			}
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/forgot-password',val.value,(response)=> {
				if(response.user.status == "success"){
					this.matchEmail = true;
					this.resetSucess = true;
                    this.infoService.hideLoading();
				}else {
					this.matchEmail = false;
					this.resetSucess = false;
                    this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
                this.infoService.hideLoading();
			});
		}catch(Error){
			console.log(Error);
            this.infoService.hideLoading();
		}finally{

		}
	}
}
