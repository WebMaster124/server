import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
declare var $:any;
/**
 * Generated class for the ConfirmAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-confirm-account',
  templateUrl: 'confirm-account.html',
})
export class ConfirmAccountPage {

	confiemAcc : FormGroup;
	public emailID:any = localStorage.getItem('registerBusinessEmail');
	
	public userConfirm:any;
	public retrievedObject:any;
	public localItem:any;
	public showYear:any;
	public isConfirmAccount:boolean = false;
	constructor(public alertCtrl: AlertController,public infoService:InfoService,public fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
		this.confiemAcc = fb.group({
			'otp': ['', Validators.compose([Validators.required,Validators.maxLength(4),Validators.minLength(4)])],
		});
	}
        public user_id:any = this.navParams.data.id;
	ionViewWillEnter() {
        this.retrievedObject = environment.localItem;
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = environment.localItem;
        }

		$('body').removeClass().addClass('ConfirmAccount body');
		$(document).attr('title','Confirm account');
		var d = new Date();
        this.showYear = d.getFullYear();
	}

	confirmAcco(val:any){
		if(val.value.otp == ""){
			let alert1 = this.alertCtrl.create({
				title: 'Confirm account',
				subTitle: 'Verification code is required!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert1.present();
			return false;
		}
		var checkAPICALL = localStorage.getItem('registerConfirm');
		var conAcc:any;
		
		if(checkAPICALL != null && checkAPICALL != ''){
			conAcc = {
				otp : val.value.otp,
				email : this.emailID,
				user_id : checkAPICALL
			}

			try{	
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/check-otp',conAcc,(response)=> {
					if(response.user.status == "success"){
						localStorage.removeItem('registerBusinessEmail');
						localStorage.removeItem('registerConfirm');
						this.infoService.hideLoading();
						this.isConfirmAccount = true;
					}else {
						this.userConfirm = response;
						this.infoService.hideLoading();
					}
				},(error) => {
					console.log(error);
				});
			}catch(Error){
				console.log(Error);
				this.infoService.hideLoading();
			}		
		}else{
			conAcc = {
				'case':3,
				otp:val.value.otp,
				email:this.emailID
			}
			try{	
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/seller-registration',conAcc,(response)=> {
					if(response.user.status == "success"){
						localStorage.removeItem('registerBusinessEmail');
						this.infoService.hideLoading();
						this.navCtrl.push('LoginPage', {
							id: 'login'	
						});
					}else {
						this.userConfirm = response;
						this.infoService.hideLoading();
					}
				},(error) => {
					console.log(error);
				});
			}catch(Error){
				console.log(Error);
				this.infoService.hideLoading();
			}
		}
	}
	
	resendMail(){
		conAcc = {
				id:this.user_id,
				email:this.emailID
			}

                        try{	
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/seller-registration',conAcc,(response)=> {
					if(response.user.status == "success"){
						localStorage.removeItem('registerBusinessEmail');
						this.infoService.hideLoading();
						this.navCtrl.push('LoginPage', {
							id: 'login'	
						});
					}else {
						this.userConfirm = response;
						this.infoService.hideLoading();
					}
				},(error) => {
					console.log(error);
				});
			}catch(Error){
				console.log(Error);
				this.infoService.hideLoading();
			}

	}
	goToBack(){
		this.navCtrl.pop();
	}
	
	callloginPage(){
		localStorage.setItem('getPageDetails','HomePage');
		this.navCtrl.push('LoginPage', {
			id: 'login'
		});
	}
}
