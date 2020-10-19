import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController, ViewController} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
/**
 * Generated class for the PageAdvertisementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-rating',
  templateUrl: 'page-rating.html',
})
export class PageRatingPage {

    public ratingData:any = null;
    //public bannerImgUrl:any = environment.imageProduct;
    constructor(public infoService:InfoService,public viewCtrl : ViewController,public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    }
	
	dismiss() {
     this.viewCtrl.dismiss();
   }

   

}
