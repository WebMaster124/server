import { Component,ViewChild } from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the ViewCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage()
@Component({
  	selector: 'page-view-cart',
  	templateUrl: 'view-cart.html',
})

export class ViewCartPage {
    @ViewChild(Content) content: Content;
	public viewData:any;
	public trandingImgUrl:any = environment.imageProduct + '/product/';
    public retrievedObject:any;
    public localItem:any;
	public wishlistData:any;
	public cart_arr:any;
	public viewabout_Cart:any;
	
	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('Shopping Cart');
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

		$(document).prop('title','Your Dibdaa Shopping Cart');
		$('body').removeClass().addClass('Cart body');
		$( ".zoomContainer" ).remove();

		$(".searchanythingform").trigger("reset");
        this.view_Cart();
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

	//dispaly cart data.
	view_Cart(){
		try{
			this.infoService.showLoading();
			
			if(this.localItem == null){
				this.navCtrl.push('LoginPage', {
					id: 'login'	
				});
			}else{
				var cart_details ={
					 'user_id':this.localItem.id
				}
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/cart/view-cart',cart_details,(response)=> {
					this.viewData = response.cart;
					this.cart_arr = (<any>Object).entries(response.cart.data);
                    if(response.cart.total_item > 0){
						$('#addtoCount').text(response.cart.total_item);
						$('#addtoCount_mobile').text(response.cart.total_item);
					}else{
						$('#addtoCount').text('');
						$('#addtoCount_mobile').text('');
					}
                    this.viewaboutCart();
				},(error) => {
					console.log(error);
				});	
			}
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
		}finally{
			this.infoService.hideLoading();
		}
	}
	
	//removeCart data.
	remove_cart(val:any){
		try{
			var cart_remove ={
				'id':val
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/cart/remove-cart',cart_remove,(response)=> {
				this.view_Cart();
			},(error) => {
				console.log(error);
			});	
		}catch(Error){
			console.log(Error);
		}
	}

	//show About your cart data.
	viewaboutCart(){
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/cart/view-about-cart','',(response)=> {
			if(response.about_cart.status == "success"){
				this.viewabout_Cart = response.about_cart;
			}
		},(error) => {
			console.log(error);
		});
	}
	
	//remove quant to show update button.
	show_update(val:any){
		setTimeout(function(){
			$('#update-'+val).removeClass('d-none');
		},1000);		
	}
	
	//click on update to update cart data.
	updateCart(proqua:any,val:any){
		try{
			if(parseInt($('#quantity-'+val).val()) > parseInt(proqua)){
				$('#error-'+val).removeClass('d-none');
			}else{
				if($('#quantity-'+val).val() == 0){
					this.remove_cart(val);
				}else{
					var cart_update ={
						'id':val,
						'quantity':$('#quantity-'+val).val()
					}
					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/cart/update-cart',cart_update,(response)=> {
						this.view_Cart();
					},(error) => {
						console.log(error);
					});
				}
			}
		}catch(Error){
			console.log(Error);
		}
	}

	//click on save for later call this function.
	addwishlist(proid:any,quant:any,val_spec:any){
		try{
			var wishlist_add ={
				'user_id':this.localItem.id,
				'product_id':proid,
				'quantity':quant,
				'specification':val_spec
			}
		
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/wishlist/add-to-wishlist',wishlist_add,(response)=> {
				if(response.wishlist.status == "success"){
					this.view_Cart();
				}else{
					this.wishlistData = response.wishlist;
					$('#wish-'+proid).removeClass('d-none');
				}
				
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
		}
	}
	
	//click on proceed to checkOut call this function.
	checkOut(val:any,val_sellerId:any){
		var pass_data:any;
		if(val == 'seller'){
			pass_data = {
				"user_id":this.localItem.id,
				"cart":"true",
				"seller_id":[val_sellerId]
			}
		}else{
			pass_data = {
				"user_id":this.localItem.id,
				"cart":"true"
			}
		}

        var convert_stringify = JSON.stringify(pass_data)
        var convert_encode = btoa(convert_stringify);

		this.navCtrl.push('CheckOutPage',{
			id:convert_encode
		});
	}
	
	gotoUserProfile(val:any){
		this.navCtrl.push('UserProfilePage',{
			id : val
		});
	}
	
	gotoProductDetailsPage(val:any){
		this.navCtrl.push('ProductDetails',{
			id : val
		});
	}
}
