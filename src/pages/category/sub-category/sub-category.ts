import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the SubCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	segment:'c/:id'
})
@Component({
  selector: 'page-sub-category',
  templateUrl: 'sub-category.html',
})
export class SubCategoryPage {
    @ViewChild(Content) content: Content;
	public sub_data:any;
	public item_spe:any;
	public cat_image:any = environment.imageProduct + '/category/';
	public pro_image:any = environment.imageProduct + '/product/';
	public specification_key:any [];
	public item_speArr:any [][];
	public isfilter:boolean = false;
	public filter_data:any;
    public random_number:any;
    public retrievedObject:any;
    public localItem:any;
	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		this.showSpec();
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('SubCategory');
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
		$('body').removeClass().addClass('SubCategory body');
        this.random_number = Math.floor(100000 + Math.random() * 900000);
        $( ".zoomContainer" ).remove();
        this.showSubCat();
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

	//show sub category.
	showSubCat(){
		try{
			var cat_sub = {
				category_id:this.navParams.data.id
			}
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/category-product-list',cat_sub,(response)=> {
				this.sub_data = response;
				$(document).prop('title',this.sub_data.category.category_name + ' | Dibdaa');
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
		var cat_sub = {
			category_id:this.navParams.data.id,
		}
		try{
			this.infoService.showLoading();	
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/category-product-list?page='+event,cat_sub,(response)=> {
				this.sub_data = response;
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
	
	//show specification data.
	showSpec(){
		try{
			var show_itemSpec:any = {
				category_id:this.navParams.data.id
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/view-specification',show_itemSpec,(response)=> {
				if(response.specification.data[0].specification.length > 0){
					this.specification_key = response.specification.data[0];
				}else {
					this.item_spe = response;
				}	
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
		}
	}
	
	//show search data.
	SaerchFilter(val:any,val1:any,val3:any){
		try{
			if(val1 == "type"){
				var item_ar:any;
				var replaceString = val3.replace(/\s/g, '_');
				item_ar = {[replaceString]:[val]}
				
				var filter_spcType:any = {
					category_id: this.sub_data.category.id,
					specification:item_ar
				}
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/filter-specification',filter_spcType,(response)=> {
					if(response.specification.status == "success"){
						this.isfilter = true;
						this.filter_data = response.specification;
					}else {
						this.isfilter = false;
						this.filter_data = response;
					}
					this.infoService.hideLoading();
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
				});
			
			}else if(val1 == 'size'){
				var val_size = [];
				
				$('input[type=checkbox][name=size_spec]:checked').each(function(i){
				  val_size.push($(this).val());
				});
				
				var filter_spcSize:any = {
					category_id: this.sub_data.category.id,
					specification:{[val3]:val_size}
				}
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/filter-specification',filter_spcSize,(response)=> {
					if(response.specification.status == "success"){
						this.isfilter = true;
						this.filter_data = response.specification;
						//this.infoService.hideLoading();
					}else {
						this.isfilter = false;
						this.filter_data = response;
					}
					this.infoService.hideLoading();
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
				});
				
			}else if(val1 == 'color'){
				console.log(val3);
				var val_color = [];
				
				$('input[type=checkbox][name=color_spec]:checked').each(function(i){
				  	val_color.push($(this).val());
				});
				
				var filter_spccolor:any = {
					category_id: this.sub_data.category.id,
					specification:{[val3]:val_color}
				}
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/filter-specification',filter_spccolor,(response)=> {
					if(response.specification.status == "success"){
						this.isfilter = true;
						this.filter_data = response.specification;
					}else {
						this.isfilter = false;
						this.filter_data = response;
					}
					this.infoService.hideLoading();
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
				});
			}else if(val1 == "price"){
				var price1 = $('#price1').val();
				var price2 = $('#price2').val();
				
				var filter_spcprice:any = {
					category_id: this.sub_data.category.id,
					min_price:price1,
					max_price:price2
				}
				
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/filter-specification',filter_spcprice,(response)=> {
					if(response.specification.status == "success"){
						this.isfilter = true;
						this.filter_data = response.specification;
					}else {
						this.isfilter = false;
						this.filter_data = response;
					}
					this.infoService.hideLoading();
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
				});
			}else if(val1 == "brand"){
				var brand_input = $('#input_brand').val();
				
				var filter_spcbrand:any = {
					category_id: this.sub_data.category.id,
					specification:{[val3]:[brand_input]}
				}
				
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/filter-specification',filter_spcbrand,(response)=> {
					if(response.specification.status == "success"){
						this.isfilter = true;
						this.filter_data = response.specification;
					}else {
						this.isfilter = false;
						this.filter_data = response;
					}
					this.infoService.hideLoading();
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
				});
			}
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
		}
	}
}
