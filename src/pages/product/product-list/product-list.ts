import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Content, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';

declare var $:any;

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment:'productlist/:id'
})

@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})

export class ProductListPage {
    @ViewChild(Content) content: Content;
	public catData:any;
	public pro_image:any = environment.imageProduct + '/product/';
	public getData_decode:any;
	public convert_decode:any;
	public convert_parse:any;
	public showYear:any;
	public retrievedObject:any;
	public localItem:any;

	constructor(public plt: Platform,public infoService:InfoService,public modalCtrl : ModalController,public navCtrl: NavController, public navParams: NavParams) {
		
	}	
	
	ionViewDidLoad(){
		this.getData_decode = this.navParams.data.id;
		this.convert_decode = atob(this.getData_decode);
		this.convert_parse = JSON.parse(this.convert_decode);
        $( ".zoomContainer" ).remove();
        var d = new Date();
        this.showYear = d.getFullYear();
		this.showCatData();
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
		$(document).prop('title','Product List');
		$('body').removeClass().addClass('ProductList body');
	}


	showCatData(){
		try{
			//var data = this.navParams.data.id;
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/category-product-list',this.convert_parse,(response)=> {
				this.catData = response;
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
		}
	}
	
	showCatData_proList(val:any,val1:any,val2:any){
		if(val2 == 'brand'){
			var byBrand = {
				category_id : val1,
				brand_id : val
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/category-product-list',byBrand,(response)=> {
				this.catData = response;
			},(error) => {
				console.log(error);
			});
		}else if(val2 == 'type'){
			var byType = {
				category_id : val1,
				settype_id : val
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/category-product-list',byType,(response)=> {
				this.catData = response;
			},(error) => {
				console.log(error);
			});
		}
	}
	
	GoToSubCat(val:any){
		this.navCtrl.push('SubCategoryPage',{
			id:val
		});
	}
	
	GoToProDetail(val:any){
		this.navCtrl.push('ProductDetails',{
			id:val
		});
	}

}
