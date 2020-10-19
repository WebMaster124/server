import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the SellerAgreementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage()
@Component({
  selector: 'page-seller-agreement',
  templateUrl: 'seller-agreement.html',
})
export class SellerAgreementPage {
    public showaboutData:any;
    public retrievedObject:any;
    public localItem:any;
    
	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public viewCtrl : ViewController,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('SellerAgreement');
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

        this.showAgreementdata();
    }

    showAgreementdata(){
        var pass_aboutus = {
            id: this.navParams.get('id')
        }
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/cms/view-cms',pass_aboutus,(response)=> {
            this.showaboutData = response;
            $('#seller-agreement').append(response.cms.data.page_content);
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
