import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, Events,AlertController} from 'ionic-angular';
import { InfoService } from '../../services/info';
import { environment } from '../../environments/environment';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

	public price: any = this.navParams.get('final_price'); 
	public bid_price: any = this.navParams.get('bid_price');
	public bids_response:any = null;

	constructor(private alertCtrl: AlertController,public events:Events,public infoService:InfoService,public viewCtrl : ViewController,public navCtrl: NavController, public navParams: NavParams) {

	}

	closeModal(){
		this.viewCtrl.dismiss();
        this.events.publish('productdetails:functioncall');
	}
	
	placeBids(){
		
		let place_bids = {
			buyer_id: this.navParams.get('buyer_id'),
			seller_id:this.navParams.get('seller_id'),
			product_id:this.navParams.get('product_id'),
			bid_price:this.navParams.get('bid_price')
		};
		
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/bid/place-bid',place_bids,(response)=> {
			if(response.bid.status == "success"){
                this.bids_response = response;
                this.infoService.hideLoading();
			}
			else{
                this.infoService.hideLoading();
                this.bids_response = null;
				let alert = this.alertCtrl.create({
					title: 'Place Bid',
					subTitle: response.bid.msg,
					buttons: ['Dismiss']
				});
				alert.present();
			}
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		})
	}
}
