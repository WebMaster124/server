import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InfoService } from '../../../services/info';
import {environment} from "../../../environments/environment";

declare var $:any;
/**
 * Generated class for the SecurityMeasurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-security-measure',
  templateUrl: 'security-measure.html',
})
export class SecurityMeasurePage {
	
	securityMeasure : FormGroup;
	
	public verification:any;
	public retrievedObject:any;
	public localItem:any;
	public showYear:any;
	
	constructor(public alertCtrl: AlertController,public infoService:InfoService,public fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
		this.securityMeasure = fb.group({
			'secNumber':['', Validators.compose([Validators.required])],
		});
		this.verification = Math.floor(100000 + Math.random() * 900000);
	}	

	ionViewWillEnter() {
        this.retrievedObject = environment.localItem;
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = environment.localItem;
        }

		$('body').removeClass().addClass('Security body');
		$(document).attr('title','Security Measure');
		var d = new Date();
		this.showYear = d.getFullYear();
	}
	
	changeNumber(){
		this.verification = Math.floor(100000 + Math.random() * 900000);
	}
	
	continueReset(val:any){
		if(val.value.secNumber == ""){
			let alert1 = this.alertCtrl.create({
				title: 'Security Measure',
				subTitle: 'Enter the verification code!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert1.present();
			return false;
		}
		
		if(this.verification != val.value.secNumber){
			$('.warning').removeClass('d-none');
		}else{
			this.navCtrl.push('ResetPasswordPage');
			$('.warning').addClass('d-none');
		}
	}

	goToBack(){
		this.navCtrl.pop();
	}
}