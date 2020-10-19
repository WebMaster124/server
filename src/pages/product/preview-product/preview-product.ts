import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {environment} from "../../../environments/environment";
import { GoogleAnalytics } from '@ionic-native/google-analytics';

declare var $:any;
/**
 * Generated class for the PreviewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment: 'previewProduct'
})
@Component({
  selector: 'page-preview-product',
  templateUrl: 'preview-product.html',
})
export class PreviewProductPage {
    @ViewChild(Content) content: Content;
	public showpreviewdata:any;
	public specification_arr:any;
	public showYear:any;
	public retrievedObject:any;
	public localItem:any;

	constructor(public googleanalytics: GoogleAnalytics,public plt:Platform,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('PreviewProduct');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
		}
	}

    ngAfterViewInit() {
        if(this.content._scroll) {
            this.content.ionScrollEnd.subscribe((data)=>{

                if(data == null)
                    return false;
                if(this.plt.width() >= 769) {

                    if (data.scrollTop >= "130") {
                        $('.top-header').slideUp();
                    } else {
                        $('.top-header').slideDown();
                    }
                }else{

                    if (data.scrollTop >= "130") {
                        $('.mobile-sell-now').slideUp();
                    } else {
                        $('.mobile-sell-now').slideDown();
                    }
                }
            });
        }
    }

	ionViewWillEnter() {
        this.retrievedObject = environment.localItem;
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = environment.localItem;
        }

		$('body').removeClass().addClass('previewProduct body');
		$(document).prop('title','Preview Product');
		var cookie_data = localStorage.getItem('previeProduct');
		this.showpreviewdata = JSON.parse(cookie_data);
		this.specification_arr = (<any>Object).entries(this.showpreviewdata.specification[0]);
        var d = new Date();
        this.showYear = d.getFullYear();
	}

    shipingtabseedetail(){
        (<any>document).getElementById('seedetailactivtab').click();
        this.content.scrollTo(0,660,1500);
    }
}
