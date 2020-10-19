import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
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
  selector: 'page-page-advertisement',
  templateUrl: 'page-advertisement.html',
})
export class PageAdvertisementPage {

    public advertiseData:any = null;
    public bannerImgUrl:any = environment.imageProduct;
    constructor(public infoService:InfoService,public viewCtrl : ViewController,public navCtrl: NavController, public navParams: NavParams) {
    }

    closeModal(){
        this.viewCtrl.dismiss();
		localStorage.setItem('checkuserLogin','No');
    }

    ionViewWillEnter() {
        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/home/view-advertise','',(response)=> {
           if(response.advertisement.status == 'success')
                this.advertiseData = response.advertisement;
           else
               this.advertiseData = null;
        },(error) => {
            console.log(error);
        });
    }
}
