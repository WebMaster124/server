import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
/**
 * Generated class for the BusinessinfoEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-businessinfo-edit',
  templateUrl: 'businessinfo-edit.html',
})
export class BusinessinfoEditPage {
	public userSettings: any = {
		showCurrentLocation: true,
		showSearchButton: false,
		useGoogleGeoApi:true,
		locationIconUrl:"assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
	};
	
	public checkKey = this.navParams.get('val');
	changeuserProfileForm : FormGroup;
	constructor(public alertCtrl: AlertController,public fb: FormBuilder,public infoService:InfoService,public viewCtrl : ViewController,public navCtrl: NavController, public navParams: NavParams) {
		this.changeuserProfileForm = fb.group({
			'phonenumber': ['+971', Validators.compose([Validators.required,Validators.minLength(7)])],
		});
	}

	autoCompleteCallback1(selectedData:any) {
		
		if(selectedData.response == true){
			var change_address ={
				id:this.navParams.get('user_Id'),
				key : 'business_address',
				value : selectedData.data.description
			}
						
			this.infoService.showLoading();

			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/edit-business-info',change_address,(response)=> {
				if(response.users.status == "success"){
					var persons = environment.localItem;
					persons.business_address = selectedData.data.description;
					localStorage.setItem('userInfo',JSON.stringify(persons));
					environment.localItem = persons;
					let alert = this.alertCtrl.create({
						title: 'Change Address',
						subTitle: 'Address updated successfully.',
						buttons: [{
					        text: 'OK',
					        role: 'cancel',
					        handler: () => {
					          this.viewCtrl.dismiss();
					        }
					    }]
					});
					alert.present();
				}
				
				this.infoService.hideLoading();
				
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
    }
	
	changePhone(val:any){
		var change_phone ={
			id:this.navParams.get('user_Id'),
			key : 'business_mobile',
			value : val.value.phonenumber
		}
			
		this.infoService.showLoading();

		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/edit-business-info',change_phone,(response)=> {
			if(response.users.status == "success"){
				var persons = environment.localItem;
				persons.business_mobile = val.value.phonenumber;
				localStorage.setItem('userInfo',JSON.stringify(persons));
				environment.localItem = persons;
				let alert = this.alertCtrl.create({
					title: 'Change phone number',
					subTitle: 'Phone number updated successfully.',
					buttons: [{
					        text: 'OK',
					        role: 'cancel',
					        handler: () => {
					          this.viewCtrl.dismiss();
					        }
					    }]
				});
				alert.present();
			}
			
			this.infoService.hideLoading();
			
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
	
	closeModal(){
		this.viewCtrl.dismiss();
	}
}
