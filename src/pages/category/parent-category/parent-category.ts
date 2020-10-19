import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the ParentCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	segment: 'b/:id'
})
@Component({
	selector: 'page-parent-category',
  	templateUrl: 'parent-category.html',
})
export class ParentCategoryPage {
    @ViewChild(Content) content: Content;

	public parent_data:any;
	public cat_image:any = environment.imageProduct + '/category/';
	public pro_image:any = environment.imageProduct + '/product/';
    public random_number:any;
    public retrievedObject:any;
    public localItem:any;
	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('ParentCategory');
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

        $('#search-form')[0].reset();
        $('body').removeClass().addClass('ParentCategory body');
        this.random_number = Math.floor(100000 + Math.random() * 900000);
        $( ".zoomContainer" ).remove();
        this.showParentCat();
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
	
	//show parent category.
	showParentCat(){
		try{
            var cat_parent:any;
			this.infoService.showLoading();
			if($.type(this.navParams.data.id) == 'object')
                cat_parent = this.navParams.data.id
			else {
                cat_parent = {
                    'category_id' : this.navParams.data.id,
                }
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/category-product-list',cat_parent,(response)=> {
				this.parent_data = response;
				$(document).prop('title',this.parent_data.category.category_name + ' | Dibdaa');
				this.infoService.hideLoading();
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
		}
	}
	
	//call pagination data click to pagination call this function.
	getServerData(event){
		var cat_parent:any;
        if($.type(this.navParams.data.id) == 'object')
            cat_parent = this.navParams.data.id
        else {
            cat_parent = {
                'category_id' : this.navParams.data.id,
            }
        }
		try{
			this.infoService.showLoading();	
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/category-product-list?page='+event,cat_parent,(response)=> {
				this.parent_data = response;
				this.infoService.hideLoading();
				this.content.scrollToTop();
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
		}
	}
	
	//Redirect to product detail page.
	GoToProDetail(val:any){
		this.navCtrl.push('ProductDetails',{
			id:val
		});
	}
	
	//Redirect to sub category page.
	GoToSubCat(val:any){
		this.navCtrl.push('SubCategoryPage',{
			id:val
		});
	}
	
	//show data by type.
	showBytype(val:any,val1:any){
		var convert_stringify:any 
		var convert_encode:any
		if(val1 == "brand"){
			var byBrand = {
				'category_id' : this.navParams.data.id,
				'brand_id' : val
			}
			
			convert_stringify = JSON.stringify(byBrand);
			convert_encode  = btoa(convert_stringify);
			
			this.navCtrl.push('ProductListPage',{
				id:convert_encode
			});
			
		}else if(val1 == "type"){
			var byType = {
				'category_id' : this.navParams.data.id,
				'settype_id' : val
			}
			
			convert_stringify = JSON.stringify(byType);
			convert_encode  = btoa(convert_stringify);
			
			this.navCtrl.push('ProductListPage',{
				id:convert_encode
			});
		}
	}
	
	/*doRefresh(refresher:any){
		this.showParentCat();
		refresher.complete();
	}*/

}
