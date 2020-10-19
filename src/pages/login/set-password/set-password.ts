import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';

//import {HomePage} from '../../home/home';
declare var $:any;
/**
 * Generated class for the SetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-password',
  templateUrl: 'set-password.html',
})
export class SetPasswordPage implements OnInit{
	
	newPassword : FormGroup;
	
	public new_password = {
		user_id:'',
		password:'',
        request_id:''
	}
	public ischangePass:boolean = false;
	public showReset:any;
	public retrievedObject:any;
	public localItem:any;
	public showYear_footer:any;
	constructor(public alertCtrl: AlertController,public infoService:InfoService,public fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
		this.newPassword = fb.group({
			'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
		});
		
	}
	
	ngOnInit(){
		var parts = [],answer = "", decode_str ="" ,json_data:any = {};
		var path = window.location.href;
		//var path ="https://www.techcronus.com/staging/Dibdaa/www/#/set-password?q=eyJlbWFpbCI6Imtpc2hhbi5kaGFyYWppeWFAbWFpbGluYXRvci5jb20iLCJpZCI6MTV9";
		parts = path.split('?q=');
		answer = parts[parts.length - 1];
		decode_str = decodeURIComponent(answer);
		json_data = JSON.parse(atob(decode_str));
		this.new_password.user_id = json_data.id;
		this.new_password.request_id = json_data.request_id;

	}
	
	ionViewWillEnter() {
        this.retrievedObject = environment.localItem;
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = environment.localItem;
        }

		$('body').removeClass().addClass('SetPassword body');
		$(document).attr('title','Set your password');
		var d = new Date();
		this.showYear_footer = d.getFullYear();
	}
	
	show_text(){
		if($('#showpassword').prop('checked') == true){
		  $('#password-reg').prop('type','text');
		}else{
		  $('#password-reg').prop('type','password');
		}
	}
	
	setNewPassword(val:any){
		if(val.value.password == ""){
			let alert1 = this.alertCtrl.create({
				title: 'Set your password',
				subTitle: 'Password is required!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert1.present();
			return false;
		}
		
		if(val.value.password.length < 6){
			let alert2 = this.alertCtrl.create({
				title: 'Set your password',
				subTitle: 'Minimum password length is 6!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert2.present();
			return false;
		}
		
		this.new_password.password = val.value.password;
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/set-password',this.new_password,(response)=> {
			if(response.user.status == "success"){
				this.ischangePass = true;
			}else {
				this.showReset = response;
                this.ischangePass = false;

			}
			this.infoService.hideLoading();
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
}
