import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the ShopByDepartmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage()
@Component({
  selector: 'page-shop-by-departments',
  templateUrl: 'shop-by-departments.html',
})
export class ShopByDepartmentsPage {
	
	@ViewChild(Content) content: Content;
	public subCategotyData:any
	public retrievedObject:any;
    public localItem:any;
	public cat_image:any = environment.imageProduct + '/category/';
	
	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('ShopByDepartments');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
		}
	}
  
	//scroll to hide and show top header.
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
		$('body').removeClass().addClass('ShopByDepartments body');
        
        $( ".zoomContainer" ).remove();
        this.showSubCategory();
	}
	
	//show categories data.
	showSubCategory(){
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/category/view-category-site-map','',(response)=> {
           this.subCategotyData = response.categories;
        },(error) => {
            console.log(error);
        });
	}
	
	gotoCategoryPage(val:any){
		this.navCtrl.push('ParentCategoryPage',{
			id : val
		});
	}
}
