import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Content, Platform,Events,AlertController} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import "ez-plus";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { GoogleAnalytics } from '@ionic-native/google-analytics';

declare var $:any;

@IonicPage({
	name:'ProductDetails',
	segment: 'viewItem/:id'
})

@Component({
  	selector: 'page-product-details',
  	templateUrl: 'product-details.html'
})

export class ProductDetailsPage {
    @ViewChild(Content) content: Content;
	public show_categoryDetails:any;
	public trandingImgUrl:any = environment.imageProduct + '/product/';
	public imgarray:any = [];
	public perHourcnt:any;
	public specification_arr: any;
	public specificationarr_obj: any= {};
	public retrievedObject:any;
	public localItem:any = '';
	public dispMakeOffer:boolean = false;
	public sold_per:any;
	public select_color:any = '';
    colorForm : FormGroup;
    public avgCountArr = [];
	constructor(public googleanalytics: GoogleAnalytics,private alertCtrl: AlertController,public events: Events,public plt: Platform,public fb: FormBuilder,public infoService:InfoService,public modalCtrl : ModalController,public navCtrl: NavController, public navParams: NavParams) {
        this.colorForm = fb.group({
            'color' : ['-1', Validators.compose([Validators.required])],
            'size' : ['-1', Validators.compose([Validators.required])],
        });
		
		this.events.subscribe('productdetails:functioncall', () => {
		  this.showDetails();
		});
		
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('Product Details');
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

        $('#search-form')[0].reset();
		$('body').removeClass().addClass('ProductDetail body');
		$(".dropdown-content-my-account, .dropdown.withmydibdaa").hover(function(){
		   $('#zoom_demo-zoomContainer').css('position','');
			}, function(){
		   $('#zoom_demo-zoomContainer').css('position','absolute');
		});
		this.viewperHour();
		this.showDetails();
	}
	
	shipingtabseedetail(){
		(<any>document).getElementById('seedetailactivtab').click();
		this.content.scrollTo(0,660,1500);
    }
	
	showBottom(){
		this.content.scrollToBottom(1500);
	}
	
	showDetails(){
		var pro_type:any;
		if(environment.isLogin == false){
			pro_type = {
				product_id:this.navParams.data.id
			}
		}else{
			if(environment.localItem == null){
				pro_type = {
					product_id:this.navParams.data.id
				}
			}else{
				pro_type = {
					product_id:this.navParams.data.id,
					user_id:environment.localItem.id
				}
			}
		}
		
		try{
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/view-product',pro_type,(response)=> {
				if(response.data.length > 0) {
					this.show_categoryDetails = response;
					$(document).prop('title', response.data[0].title);
					this.specification_arr = (<any>Object).entries(response.data[0].specification[0]);
					var self = this;
					for(var a=0;a <response.data[0].product_avg ;a++){
						this.avgCountArr.push(a);
					}
					setTimeout(function () {
						$('.gallery_demo:last#gallery_demo').empty();
						for (var i = 0; i < response.data[0].photos.length; i++) {
							var imgfullpath_large = self.trandingImgUrl + response.data[0].product_id + '/L/' + response.data[0].photos[i];
							$('.gallery_demo:last#gallery_demo').append('<a data-zoom-image="' + imgfullpath_large + '" data-image="' + imgfullpath_large + '"><img class="thumb_border" width="80" height="80" src="' + imgfullpath_large + '" title="image-' + i + '" xpreview="' + imgfullpath_large + '"></a>');
						}
						$('.zoom_demo:last#zoom_demo').attr('src', self.trandingImgUrl + response.data[0].product_id + '/L/' + response.data[0].photos[0]);
						$('.zoom_demo:last#zoom_demo').attr('data-zoom-image', self.trandingImgUrl + response.data[0].product_id + '/L/' + response.data[0].photos[0]);
						if ($(window).width() > 768) {
							$(".zoom_demo:last#zoom_demo").ezPlus({
								gallery: 'gallery_demo',
								cursor: 'pointer',
								easing: true,
								scrollZoom: false,
								galleryActiveClass: "active",
							
							});
						}else {
							$('.zoom_demo:last#zoom_demo').ezPlus({
								constrainType: 'height', zoomType: 'lens',
								containLensZoom: true, gallery: 'gallery_demo', cursor: 'pointer', galleryActiveClass: 'active'
							});
						}
					}, 500);
					this.infoService.hideLoading();
				}else{
					$(document).attr('title', 'Product Details');
					this.show_categoryDetails = response;
					$('.error_inner:last').removeClass('d-none');
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
		}	
	}
	
	viewperHour(){
		try{
			var pro_viewperHour = {
				product_id:this.navParams.data.id
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/view-per-hour',pro_viewperHour,(response)=> {
				if(response.status == "success"){
					this.perHourcnt = response.count;
				}else{
					this.perHourcnt = 0;
				}
			},(error) => {
				console.log(error);
			});
			this.addrecentlyview();
		}catch(Error){
			console.log(Error);
		}
	}
	
	addrecentlyview(){
		if(environment.isLogin == false){
			
		}else{
			if(environment.localItem == null){
			}else{
				try{
					var pro_recent = {
						product_id:this.navParams.data.id,
						user_id:environment.localItem.id //login_id
					}
					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/add-recently-view',pro_recent,(response)=> {
						
					},(error) => {
						console.log(error);
					});
				}catch(Error){
					console.log(Error);
				}
			}
		}
	}
	
	save_seller(val:any){
		if(environment.isLogin == false){
			$( ".zoomContainer" ).remove();
			localStorage.setItem('getPageDetails','ProductDetailsPage');
			this.navCtrl.push('LoginPage', {
				id: 'login'	
			});
		}else{
			if(environment.localItem == null){
			}else{
				try{
					var sav_seller = {
						user_id:environment.localItem.id, //login_id
						seller_id:this.show_categoryDetails.data[0].user_id,
						status:val
					}
					
					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/save-seller',sav_seller,(response)=> {
						this.callfunc();
					},(error) => {
						
						console.log(error);
					});
				}catch(Error){
					console.log(Error);
				}
			}
		}
	}
	
	callfunc(){
		var pro_callfunc = {
			product_id:this.navParams.data.id,
			user_id:environment.localItem.id
		}
		try{
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/view-product',pro_callfunc,(response)=> {
				this.show_categoryDetails = response;
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
	
	addCart(val:any){
		if(parseInt($('.price1:last#price1').val()) > parseInt(val)){
			$('.add_cartError:last#add_cartError').removeClass('d-none');
		}else{
			if(environment.isLogin == false){
				$( ".zoomContainer" ).remove();
				localStorage.setItem('getPageDetails','ProductDetailsPage');
				this.navCtrl.push('LoginPage', {
					id: 'login'	
				});
			}else{
				if(environment.localItem == null){
				}else{
					if(environment.localItem.id == this.show_categoryDetails.data[0].user_id){
						$('.error-wishlist#error-wishlist').removeClass('d-none');
						return;
					}else{
						$('.error-wishlist#error-wishlist').addClass('d-none');
					}
					
					if($('.price1:last#price1').val() <= 0){
						$('.buynow_Error:last#buynow_Error').removeClass('d-none');
					}else if($('.select-color:last#color').val() == '-1'){
                        $('.Selection_Error:last#Selection_Error').removeClass('d-none');
                        $('.error-color:last#error-color').removeClass('d-none');
                        $('.error-size:last#error-size').addClass('d-none');
					}else if($('.select-size:last#size').val() == '-1'){
                        $('.error-color:last#error-color').addClass('d-none');
                        $('.Selection_Error:last#Selection_Error').removeClass('d-none');
                        $('.error-size:last#error-size').removeClass('d-none');
					}else{
					
						var color_arr = [],size_arr = [],spec_arraddcart = {},condition_arr = [];
						
						if(this.colorForm.controls.color.value == '-1'){
                            color_arr.push('-');
                        }else{
                            color_arr.push(this.colorForm.controls.color.value);
                        }
						
                        if(this.colorForm.controls.size.value == '-1'){
                            size_arr.push('-');
                        }else{
                            size_arr.push(this.colorForm.controls.size.value);
                        }
						
						condition_arr.push(this.show_categoryDetails.data[0].p_condition);

                        spec_arraddcart['color'] = color_arr;
                        spec_arraddcart['size'] = size_arr;
                        spec_arraddcart['condition'] = condition_arr;
						
						this.infoService.showLoading();
						try{
							$('.buynow_Error:last#buynow_Error').addClass('d-none');
                            $('.Selection_Error:last#Selection_Error').addClass('d-none');
                           
							var cart_details = {
								product_id:this.navParams.data.id,
								user_id:environment.localItem.id,
								quantity:$('.price1:last#price1').val(),
								specification : spec_arraddcart
							}
							this.infoService.callHttpFunction_post(environment.serverUrl + 'api/cart/add-to-cart',cart_details,(response)=> {
								this.infoService.hideLoading();
								this.select_color = '';
								this.callfunc();
								this.viewMsgCount();
							},(error) => {
								console.log(error);
								this.infoService.hideLoading();
							});
						}catch(Error){
							console.log(Error);
							this.infoService.hideLoading();
						}
					}
				}
			}
		}
	}
	
	viewCart(){
		$( ".zoomContainer" ).remove();
		this.navCtrl.push('ViewCartPage');
	}
	
	showwishList(){
		$( ".zoomContainer" ).remove();
		this.navCtrl.push('SellerMyAccountPage',{
			id:'WishList'
		});
	}
	
	removewishList(){
		if(environment.isLogin == false){
			localStorage.setItem('getPageDetails','ProductDetailsPage');
			this.navCtrl.push('LoginPage', {
				id: 'login'	
			});
		}else{
			if(environment.localItem == null){
			}else{
				var remove_wish = {
					user_id:environment.localItem.id,
					product_id:[this.navParams.data.id]
				}
				try{
					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/wishlist/remove-wishlist',remove_wish,(response)=> {
						this.callfunc();
					},(error) => {
						console.log(error);
					});
				}catch(Error){
					console.log(Error);
				}
			}
		}
	}
	
	addwishlist(){
		if(environment.isLogin == false){
			$( ".zoomContainer" ).remove();
			localStorage.setItem('getPageDetails','ProductDetailsPage');
			this.navCtrl.push('LoginPage', {
				id: 'login'	
			});
		}else{
			if(environment.localItem == null){

			}else{
				if(environment.localItem.id == this.show_categoryDetails.data[0].user_id){
					$('.error-wishlist#error-wishlist').removeClass('d-none');
					return;
				}else{
					$('.error-wishlist#error-wishlist').addClass('d-none');
				}
					
				if($('.price1:last#price1').val() <= 0){
						$('.buynow_Error:last').removeClass('d-none');
				}else if($('.select-color:last#color').val() == '-1'){
                    $('.Selection_Error:last#Selection_Error').removeClass('d-none');
                    $('.error-color:last#error-color').removeClass('d-none');
                    $('.error-size:last#error-size').addClass('d-none');
                }else if($('.select-size:last#size').val() == '-1'){
                    $('.error-color:last#error-color').addClass('d-none');
                    $('.Selection_Error:last#Selection_Error').removeClass('d-none');
                    $('.error-size:last#error-size').removeClass('d-none');
                }else{
					
					
						
                    var color_arrWish = [],size_arrWish = [],spec_arrWish = {},condition_arrWish = [];

                    if(this.colorForm.controls.color.value == '-1'){
                        color_arrWish.push('-');
                    }else{
                        color_arrWish.push(this.colorForm.controls.color.value);
                    }

                    if(this.colorForm.controls.size.value == '-1'){
                        size_arrWish.push('-');
                    }else{
                        size_arrWish.push(this.colorForm.controls.size.value);
                    }

                    condition_arrWish.push(this.show_categoryDetails.data[0].p_condition);

                    spec_arrWish ['color'] = color_arrWish;
                    spec_arrWish ['size'] = size_arrWish;
                    spec_arrWish ['condition'] = condition_arrWish;

                    $('.buynow_Error:last#buynow_Error').addClass('d-none');
                    $('.Selection_Error:last#Selection_Error').addClass('d-none');

					var wishlist_add ={
						user_id:environment.localItem.id,
						product_id:this.navParams.data.id,
						quantity:$('.price1:last#price1').val(),
						specification:spec_arrWish
					}
					try{
						this.infoService.callHttpFunction_post(environment.serverUrl + 'api/wishlist/add-to-wishlist',wishlist_add,(response)=> {
							this.callfunc();
						},(error) => {
							console.log(error);
						});
					}catch(Error){
						console.log(Error);
					}
				}
			}
		}
	}

    viewMsgCount(){
        if(environment.localItem == null){

        }else{
            try{
                /*var id_uMsg = JSON.parse(this.retrievedObject);*/
                var msg_details:any = {
                    user_id:environment.localItem.id
                }
                this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/unread-msg-count',msg_details,(response)=> {
                    if(response.count.status == "success" && response.count.cnt > 0){
                        $('#ShowMessageCount').text(response.count.cnt);
                        $('#ShowMsgCount').text(response.count.cnt);
                    }

                    if(response.count.status == "success" && response.count.cart_total > 0){
                        $('#addtoCount').text(response.count.cart_total);
                        $('#addtoCount_mobile').text(response.count.cart_total);
                    }

                },(error) => {
                    console.log(error);
                });
            }catch(Error){
                console.log(Error);
            }
        }
    }

	buyNow(val:any){
		var getColor = '',getSize = '';
		if(parseInt($('.price1:last#price1').val()) > parseInt(val)){
			$('.buynow_Error:last#buynow_Error').removeClass('d-none');
		}else{
			if(environment.isLogin == false){
				$( ".zoomContainer" ).remove();
				localStorage.setItem('getPageDetails','ProductDetailsPage');
				this.navCtrl.push('LoginPage', {
					id: 'login'	
				});
			}else{
				if(environment.localItem == null){
				}else{
					if(environment.localItem.id == this.show_categoryDetails.data[0].user_id){
						$('.error-buy#error-buy').removeClass('d-none');
						return;
					}else{
						$('.error-buy#error-buy').addClass('d-none');
					}
					
					if($('.price1:last#price1').val() <= 0){
						$('.buynow_Error:last#buynow_Error').removeClass('d-none');
					}else if($('.select-color:last#color').val() == '-1'){
                        $('.Selection_Error:last#Selection_Error').removeClass('d-none');
                        $('.error-color:last#error-color').removeClass('d-none');
                        $('.error-size:last#error-size').addClass('d-none');
					}else if($('.select-size:last#size').val() == '-1'){
                        $('.error-color:last#error-color').addClass('d-none');
                        $('.Selection_Error:last#Selection_Error').removeClass('d-none');
                        $('.error-size:last#error-size').removeClass('d-none');
					}else{
						getColor = this.colorForm.controls.color.value;
                        getSize = this.colorForm.controls.size.value;

						var spec_arr = {};
						if(getColor == '-1'){
							spec_arr['color'] = '-';
						}else{
							spec_arr['color'] = getColor;
						}

                        if(getSize == '-1'){
							spec_arr['size'] = '-';
						}else{
							spec_arr['size'] = getSize;
						}

                        spec_arr['condition'] = this.show_categoryDetails.data[0].p_condition;
						$('.buynow_Error:last#buynow_Error').addClass('d-none');
                        $('.Selection_Error:last#Selection_Error').addClass('d-none');
						var pass_data = {
							user_id:environment.localItem.id,
							product_id:this.show_categoryDetails.data[0].product_id,
							quantity:$('.price1:last#price1').val(),
							specification:spec_arr
						}
						$('.buynow_Error:last#buynow_Error').addClass('d-none');
						$( ".zoomContainer" ).remove();
                        var convert_stringify = JSON.stringify(pass_data)
                        var convert_encode = btoa(convert_stringify);

						this.navCtrl.push('CheckOutPage',{
							id:convert_encode
						});
					}
				}
			}
		}
	}
	
	contactSeller(val:any,val1:any,val2:any){
		if(environment.isLogin == false){
			$( ".zoomContainer" ).remove();
			localStorage.setItem('getPageDetails','ProductDetailsPage');
			this.navCtrl.push('LoginPage', {
				id: 'login'	
			});
		}else{
			if(environment.localItem == null){
			}else{
				$( ".zoomContainer" ).remove();
				var contact_seller = {
					seller_id:val1,
					business_name: val,
					userId:environment.localItem.id,
					product_id:val2
				}
				
				var convert_stringify = JSON.stringify(contact_seller);
				var convert_encode = btoa(convert_stringify);
			
				this.navCtrl.push('ContactSellerPage',{
					id:convert_encode
				});
			}
		}
	}
	
	ReportItem(proId:any,sellerName:any,Protitle:any,ProSKU:any,proimg:any){
		if(environment.isLogin == false){
			$( ".zoomContainer" ).remove();
			localStorage.setItem('getPageDetails','ProductDetailsPage');
			this.navCtrl.push('LoginPage', {
				id: 'login'	
			});
		}else{
			if(environment.localItem == null){
			}else{
				var reportData = {
					ProId:proId,
					SellerName:sellerName,
					ProTitle:Protitle,
					PROSKU:ProSKU,
					ProImage:proimg
				}
				$( ".zoomContainer" ).remove();
				
				var convert_stringify = JSON.stringify(reportData)
				var convert_encode = btoa(convert_stringify);

				this.navCtrl.push('ReportItemPage',{
					id:convert_encode
				});
			}
		}
	}
	
	expanddvi(){
		 $('#expandptag').toggleClass("expand",1000);
	}
	
	leaveFeedback(val_proId:any,val_proTitle:any,val_proImage:any,val_sellerId:any){
		var feedbackData = {
			ProId:val_proId,
			ProTitle:val_proTitle,
			ProImage:val_proImage,
			sellerId:val_sellerId,
		}
		
		$( ".zoomContainer" ).remove();
		
		var convert_stringifyfeedback = JSON.stringify(feedbackData)
		var convert_encodefeedback = btoa(convert_stringifyfeedback);

		if(environment.isLogin == false || environment.localItem == null){
			localStorage.setItem('getPageDetails','writereviewPage');
			localStorage.setItem('getreviewData',convert_encodefeedback);
			this.navCtrl.push('LoginPage', {
				id: 'login'
			});
		}else{
			this.navCtrl.push('LeaveProductRatingPage',{
				id:convert_encodefeedback
			});
		}
	}
	
	openModal(val_proId:any,val_sellerId:any,val_finalprice:any,val_cont:any){
		if(environment.isLogin == false){
			$( ".zoomContainer" ).remove();
			localStorage.setItem('getPageDetails','ProductDetailsPage');
			this.navCtrl.push('LoginPage', {
				id: 'login'
			});
		}else {
			if (environment.localItem == null) {
			} else {
				if(environment.localItem.id == val_sellerId){
					$('.error-bid#error-bid').removeClass('d-none');
					return;
				}else{
					$('.error-bid#error-bid').addClass('d-none');
				}
				
				var modalPage:any;
				if(val_cont == 'one'){
					if(parseInt(val_finalprice) > parseInt($('#inputbid').val())){
						$('#errorbids').removeClass('d-none');
					}else{
						$('#errorbids').addClass('d-none');
						let obj = {
							buyer_id: environment.localItem.id,
							seller_id:val_sellerId,
							product_id:val_proId,
							final_price:val_finalprice,
							bid_price:$('#inputbid').val()
						};
						modalPage = this.modalCtrl.create('ModalPage',obj,{enableBackdropDismiss:false});
						modalPage.present();
					}
				}else if(val_cont == 'morethanone'){
					if(parseInt((val_finalprice + 1)) > parseInt($('#inputbid').val())){
						$('#errorbids').removeClass('d-none');
					}else{
						$('#errorbids').addClass('d-none');
						let obj = {
							buyer_id: environment.localItem.id,
							seller_id:val_sellerId,
							product_id:val_proId,
							final_price:val_finalprice + 1,
							bid_price:$('#inputbid').val()
						};
						modalPage = this.modalCtrl.create('ModalPage',obj,{enableBackdropDismiss:false});
						modalPage.present();
					}
				}
			}
		}
	}
	
	showDiv(val:any){
		if(val == 'cancel')
			this.dispMakeOffer = false;
		else if(val == 'open')
			this.dispMakeOffer = true;
	}	
	
	addtomakeOffer(val:any){
//alert("fsdfdsf");
		if(environment.isLogin == false){
			$( ".zoomContainer" ).remove();
			localStorage.setItem('getPageDetails','ProductDetailsPage');
			this.navCtrl.push('LoginPage', {
				id: 'login'	
			});
		}else{
			if(environment.localItem == null){
			
			}else{
				if(environment.localItem.id == this.show_categoryDetails.data[0].user_id){
					$('.error-makeoffer#error-makeoffer').removeClass('d-none');
					return;
				}else{
					$('.error-makeoffer#error-makeoffer').addClass('d-none');
				}
				
				if($('.price1:last').val() <= 0){
					$('.buynow_Error:last#buynow_Error').removeClass('d-none');
				}else{
					if(parseInt($('.price1:last').val()) > parseInt(val)){
						$('.buynow_Error:last#buynow_Error').removeClass('d-none');
					}else{
						if(parseInt($('#offerInput').val()) == 0 || $('#offerInput').val() == ''){
							$('#offer_price').removeClass('d-none');
						}else{
							$('#offer_price').addClass('d-none');
							$('.buynow_Error:last#buynow_Error').addClass('d-none');
							if((parseInt($('#offerInput').val())) > parseInt(this.show_categoryDetails.data[0].final_price)){
								let alert = this.alertCtrl.create({
									title: 'Make Offer',
									subTitle: 'Dear buyer you are about to make an offer greater than the cost of the item. If you would like to continue please click continue.',
									buttons: [
										  {
											text: 'Cancel',
											role: 'cancel',
											handler: () => {
											  
											}
										  },
										  {
											text: 'Continue',
											handler: () => {
												let make_offer = {
													buyer_id: environment.localItem.id,
													seller_id:this.show_categoryDetails.data[0].user_id,
													product_id:this.show_categoryDetails.data[0].product_id,
													offer_price:$('#offerInput').val(),
													quantity:$('.price1:last#price1').val(),
												};
												try{
													this.infoService.showLoading();
													this.infoService.callHttpFunction_post(environment.serverUrl + 'api/make-offer/make-offer',make_offer,(response)=> {
														this.infoService.hideLoading();
														if(response.bid.status == "fail"){
															let alert = this.alertCtrl.create({
																title: 'Make Offer',
																subTitle: response.bid.msg,
																buttons: ['Dismiss']
															});
															alert.present();
															this.dispMakeOffer = false;
														}else{
															let alert = this.alertCtrl.create({
																title: 'Make Offer',
																subTitle: response.bid.msg,
																buttons: ['Dismiss']
															});
															alert.present();
															this.callfunc();
															this.dispMakeOffer = false;
														}
													},(error) => {
														console.log(error);
														this.infoService.hideLoading();
													});
												}catch(Error){
													console.log(Error);
													this.infoService.hideLoading();
												}
											}
										  }
										]
								  });
								alert.present();
							}else{
								let make_offer = {
									buyer_id: environment.localItem.id,
									seller_id:this.show_categoryDetails.data[0].user_id,
									product_id:this.show_categoryDetails.data[0].product_id,
									offer_price:$('#offerInput').val(),
									quantity:$('.price1:last#price1').val(),
								};
								try{
									this.infoService.showLoading();
									this.infoService.callHttpFunction_post(environment.serverUrl + 'api/make-offer/make-offer',make_offer,(response)=> {
										this.infoService.hideLoading();
										if(response.bid.status == "fail"){
											let alert = this.alertCtrl.create({
												title: 'Make Offer',
												subTitle: response.bid.msg,
												buttons: ['Dismiss']
											});
											alert.present();
											this.dispMakeOffer = false;
										}else{
											let alert = this.alertCtrl.create({
												title: 'Make Offer',
												subTitle: response.bid.msg,
												buttons: ['Dismiss']
											});
											alert.present();
											this.callfunc();
											this.dispMakeOffer = false;
										}
									},(error) => {
										console.log(error);
										this.infoService.hideLoading();
									});
								}catch(Error){
									console.log(Error);
									this.infoService.hideLoading();
								}
							}
						}
					}
				}
			}
		}
	}

    goToLogin(val:any){
        $( ".zoomContainer" ).remove();
      	if(val == 'Register'){
            this.navCtrl.push('LoginPage', {
                id: 'register'
            });
        }
    }

    callLoginPage(val:any){
        if(val == "retrntoLogin"){
			localStorage.setItem('getPageDetails','ProductDetailsPage');
			this.navCtrl.push('LoginPage', {
				id: 'login'
			});
		}else if(val == "gotoSellerinfo"){
			localStorage.setItem('getPageDetails','DraftListingPage');
			this.navCtrl.push('LoginPage', {
				id: 'login'
			});
		}
    }
	
	filterbySize(val:any){
		if(val.value != -1){
			try{
				var pro_type:any;
				if(environment.isLogin == false){
					pro_type = {
						product_id:this.navParams.data.id,
						sq : val.value
					}
				}else{
					if(environment.localItem == null){
						pro_type = {
							product_id:this.navParams.data.id,
							sq : val.value
						}
					}else{
						pro_type = {
							product_id:this.navParams.data.id,
							user_id:environment.localItem.id,
							sq : val.value
						}
					}
				}
		
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/view-product',pro_type,(response)=> {
					if(response.data.length > 0) {
						response.data[0].quantity = response.data[0].sq
						this.show_categoryDetails = response;
						this.infoService.hideLoading();
					}
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
				});
			}catch(Error){
				console.log(Error);
				this.infoService.hideLoading();
			}
		}else{
			this.callfunc();
		}
	}
	
	goTouserProfile(val:any){
		this.navCtrl.push('UserProfilePage',{
			id : val
		});
	}
}
