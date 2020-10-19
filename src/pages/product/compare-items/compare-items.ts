import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the CompareItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	name:'CompareList',
	segment: 'SubmitActionCompareProduct/:id'
})
@Component({
  	selector: 'page-compare-items',
  	templateUrl: 'compare-items.html'
})
export class CompareItemsPage {
    @ViewChild(Content) content: Content;
	public compareData: any;
	public trandingImgUrl:any = environment.imageProduct + '/product/';
	public getData_decode:any;
	public convert_decode:any;
	public convert_parse:any;
	public showYear:any;
	public retrievedObject:any;
	public localItem:any;
	public specification_arr = [];

	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('CompareItems');
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

		$('body').removeClass().addClass('CompareItem body');
		$(document).prop('title','Compare Items');
		this.getData_decode = this.navParams.data.id;
		this.convert_decode = atob(this.getData_decode);
		this.convert_parse = JSON.parse(this.convert_decode);
        $( ".zoomContainer" ).remove();
        var d = new Date();
        this.showYear = d.getFullYear();
		this.compareList();
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

	compareList(){
		try{
			var arr = this.convert_parse;
			var showCompareList ={
				product_id:arr.join(",")
			}
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/compare-product',showCompareList,(response)=> {
				if(response.compare.status == "success"){
					this.compareData = response.compare;
					for(var i=0;i<response.compare.data.length;i++){
						this.specification_arr.push((<any>Object).entries(response.compare.data[i].specification[0]));
					}
				}else{
					this.compareData = false;
				}
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
		}finally{
			this.infoService.hideLoading();
		}
	}

    goToProductdetail(val:any){
		this.navCtrl.push('ProductDetails',{
			id:val
		})
	}
	
	getTouserProfile(val:any){
		this.navCtrl.push('UserProfilePage',{
			id:val
		})
	}
}
