import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform, AlertController, ModalController} from 'ionic-angular';
import { InfoService } from '../../services/info';
import { environment } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { HTTP } from '@ionic-native/http';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the SellerMyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
        name:'SellerMyAccountPage',
	segment:'seller-my-account/:id'
})
@Component({
  selector: 'page-seller-my-account',
  templateUrl: 'seller-my-account.html',
})
export class SellerMyAccountPage {
    @ViewChild(Content) content: Content;
	public viewishData:any;
	public trandingImgUrl:any = environment.imageProduct + '/product/';
	public userImg:any = environment.imageProduct + '/user/';
	public view_productList:any;
	public view_sellerList:any;
	public view_purchaseData:any;
	public view_addressData:any;
	public saveSearchdata:any;
	public msgData:any;
	public dashboardData:any;
	public allCountData:any;
	public soldData:any;
	public activeItem:any;
	public unsoldItem:any;
	public deleteItem:any;
	public feedbacklistdata:any;
	public viewpurchaseProductsdata:any;
	public feedbacklistmonth:any;
	public feedbacklistBuyer:any;
	public feedbacklistSeller:any;
	public returnviewData:any;
	public sold_Shipped:any;
	public sold_AwaitingShipment:any;
	public sold_AwaitingPayment:any;
	public showseller_rating:any;
	public showonlyfeedback:any;
	public showaddress:boolean = false;
	public soldviewfeedback:boolean = false;
	public bidsData:any;
	public bidsWinData:any;
	public bidsNotWinData:any;
	public offerData:any;
	public showYear_footer:any;
	public msgData_buyer:any;
	public viewsellProductsdata:any;
	public viewuserListdata:any;
	public deletePro = {
		product_id:[],
		user_id:'',
	}

	public retrievedObject:any;
	public localItem:any;
	public filDataadd = {
		id:'',
		name:[],
		addrs:'',
		city:'',
		state:'',
		pincode:'',
		mobile:''
	};
	
	public saveAddress:any = {
		user_id : '',
		ship_name : '',
		mobile : '',
		ship_address : '',
		ship_city : '',
		ship_state : '',
		ship_country : '',
		ship_pincode : '',
		id:''
	}
	
	public userSettings: any = {
		showCurrentLocation: true,
		showSearchButton: false,
		useGoogleGeoApi:true,
		locationIconUrl:"assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
		geoCountryRestriction: ['ae','kw','om','qa','sa']
	};
	
        public edit_product_val = {
            user_id:'',
            id:'',
            status:0
        }
        public ifproductedit:boolean = false;
        public editproductResponse:any;
        
        
        
	constructor(public googleanalytics: GoogleAnalytics,public http_mobile: HTTP,public modalCtrl: ModalController,public alertCtrl: AlertController,public plt: Platform,public http: HttpClient,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('SellerMyAccountPage');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
			
			this.userSettings.showCurrentLocation = false;
		}
	}

	ionViewWillEnter() {
		$('.checklogin, .checkResolutionCenter').addClass('d-none');
        this.retrievedObject = environment.localItem;
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = environment.localItem;
        }

		$('body').removeClass().addClass('SellerAccount body');
		$(document).prop('title','My accounts');
        $( ".zoomContainer" ).remove();
		$(".searchanythingform").trigger("reset");
        var d = new Date();
        this.showYear = d.getFullYear();
        this.showYear_footer = d.getFullYear();
		
		this.getAllCount();
		if(this.navParams.data.id == 'message'){
			(<any>document).getElementById('msg').click();
		}else if(this.navParams.data.id == 'PurchaseHistory'){
            $('.list-group-item').removeClass('activated123');
			$('.'+this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.viewpurchaseHistory('All','');
            $('.my-account-verticle-tab-div17:last').removeClass('d-none');
        }else if(this.navParams.data.id == 'Bids'){
            $('.list-group-item').removeClass('activated123');
            $('.'+this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.showBidsData();
            $('.my-account-verticle-tab-div1:last').removeClass('d-none');
        }else if(this.navParams.data.id == 'WishList'){
            $('.list-group-item').removeClass('activated123');
            $('.'+this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.showwishList();
            $('.my-account-verticle-tab-div16:last').removeClass('d-none');
        }else if(this.navParams.data.id == 'SavedDrafts'){
            $('.list-group-item').removeClass('activated123');
            $('.'+this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.viewProduct();
            $('.my-account-verticle-tab-div8:last').removeClass('d-none');
        }else if(this.navParams.data.id == 'SavedSearches'){
            $('.list-group-item').removeClass('activated123');
            $('.'+this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.showSaveSearch();
            $('.my-account-verticle-tab-div4:last').removeClass('d-none');
        }else if(this.navParams.data.id == 'SavedSellers'){
            $('.list-group-item').removeClass('activated123');
            $('.'+this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            this.viewSeller();
            $('.my-account-verticle-tab-div5:last').removeClass('d-none');
        }else if(this.navParams.data.id == 'return'){
            $('.list-group-item').removeClass('activated123');
            $('.'+this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
           this.viewReturnData('All');
            $('.my-account-verticle-tab-div14:last').removeClass('d-none');
        }else if(this.navParams.data.id == 'Active'){
            $('.list-group-item').removeClass('activated123');
            $('.'+this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
           	this.viewActiveItem();
            $('.my-account-verticle-tab-div10:last').removeClass('d-none');
        }else if(this.navParams.data.id == 'SellerInvoice'){
            $('.list-group-item').removeClass('activated123');
            $('.'+this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            $('.my-account-verticle-tab-div18:last').removeClass('d-none');
        }else if(this.navParams.data.id == 'Sold'){
            $('.list-group-item').removeClass('activated123');
            $('.'+this.navParams.data.id).addClass('activated123');
            $('.showTargetDiv').addClass('d-none');
            $('.my-account-verticle-tab-div11:last').removeClass('d-none');
            this.viewSoldItem('All');
        }else if(this.navParams.data.id == 'resolutionCenter'){
            (<any>document).getElementById('business-info').click();
            $('.list-group-item').removeClass('activated123');
            $('.'+this.navParams.data.id).addClass('activated123');
            $('.targetDiv').addClass('d-none');
            this.viewpurchaseProducts();
           
			setTimeout(function(){
				$('.my-account-verticle-tab9:last').removeClass('d-none');
				$('#my-account-verticle-tab1').addClass('d-none');
			},1000);
        }else if(this.navParams.data.id == 'MyAddresses'){
            (<any>document).getElementById('business-info').click();
            $('.list-group-item').removeClass('activated123');
            $('.'+this.navParams.data.id).addClass('activated123');
            $('.targetDiv').addClass('d-none');
            this.viewAdderss();
			setTimeout(function(){
				$('#my-account-verticle-tab1').addClass('d-none');
				$('.my-account-verticle-tab2:last').removeClass('d-none');
			},500);
        }else if(this.navParams.data.id == 'account'){
            (<any>document).getElementById('business-info').click();
			$('.list-group-item').removeClass('activated123');
            $('.'+this.navParams.data.id).addClass('activated123');
			setTimeout(function(){
				$('#my-account-verticle-tab1').removeClass('d-none');
			},500);
        }
		
		if ($(window).width() > 480) {
			$('.pb-3.collapseborder.collapse').addClass('show');
		}
		else {
			$('.pb-3.collapseborder.collapse').removeClass('show');
		}
	}

	showBusinessinfo(){
		(<any>document).getElementById('business-info').click();
		$('.list-group-item').removeClass('activated123');
		$('.account').addClass('activated123');
		setTimeout(function(){
			$('#my-account-verticle-tab1').removeClass('d-none');
		},1000);
	}
	
	showbidinfo(){
		$('.list-group-item').removeClass('activated123');
		$('.'+this.navParams.data.id).addClass('activated123');
		$('.showTargetDiv').addClass('d-none');
		this.showBidsData();
		setTimeout(function(){
			$('.my-account-verticle-tab-div1:last').removeClass('d-none');
		},1000);
	}
	
	ngOnInit(){
		$('.showSeller').click(function () {
            $('.list-group-item').removeClass('activated123');
			$(this).addClass('activated123');
			$('.showTargetDiv').hide();
			$('.my-account-verticle-tab-div' + $(this).attr('target') + ':last').show();
			$('.my-account-verticle-tab-div' + $(this).attr('target') + ':last').removeClass('d-none');
		});
		$('.showSingle').click(function () {
            $('.list-group-item').removeClass('activated123');
            $(this).addClass('activated123');
			$('.targetDiv').hide();
			$('#my-account-verticle-tab' + $(this).attr('target')).show();
			$('#my-account-verticle-tab' + $(this).attr('target')).removeClass('d-none');
		});
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
	
	autoCompleteCallback1(selectedData:any) {
        var postal_code:any = '',country:any = '', administrative_area_level_1:any = '',administrative_area_level_2:any = '',sublocality_level_1:any = '';
		
		if(selectedData.response == true){
			for(var add=0;add<selectedData.data.address_components.length;add++){
				if(selectedData.data.address_components[add].types[0] == 'postal_code'){
					postal_code = selectedData.data.address_components[add].long_name;
				}
				if(selectedData.data.address_components[add].types[0] == 'country'){
					country = selectedData.data.address_components[add].long_name;
				}
				if(selectedData.data.address_components[add].types[0] == 'administrative_area_level_1'){
					administrative_area_level_1 = selectedData.data.address_components[add].long_name;
					
				}
				if(selectedData.data.address_components[add].types[0] == 'administrative_area_level_2'){
					administrative_area_level_2 = selectedData.data.address_components[add].long_name;
					
				}
				if(selectedData.data.address_components[add].types[0] == 'sublocality_level_1'){
					sublocality_level_1 = selectedData.data.address_components[add].long_name;
				}
			}
			this.filDataadd.addrs = sublocality_level_1;
			
			this.filDataadd.city = administrative_area_level_2;
			
			this.filDataadd.state = administrative_area_level_1;
			
			this.filDataadd.pincode = postal_code;
			
			$('#inputCountry').val(country);
		}
    }
	
	gotouserProfile(val:any,val1:any){
		if(this.localItem != null){
			if(val1 == "UserProfile"){
				this.navCtrl.push('UserProfilePage',{
					id : val
				});
			}else{
				if(this.localItem.role == "buyer"){
					this.navCtrl.push('BuyerProfilePage',{
						id:this.localItem.id
					})
				}
			}
		}
	}
	
	gotoBidsDetailpage(val:any){
		this.navCtrl.push('BidHistoryPage',{
			id : val
		});
	}
	
	showBidsData(){
		if(this.localItem == null){
			
		}else{
			try{
				var bids_view ={
					user_id:this.localItem.id
				}
				if(this.plt.is('core') == true || this.plt.is('mobileweb') == true || this.plt.is('android') == true){
					const combined = Observable.forkJoin(
						this.http.post(environment.serverUrl + 'api/bid/view-own-bids',bids_view,{headers: {"Auth":"dibdaaauth"}}).map((res: any) => res),
						this.http.post(environment.serverUrl + 'api/bid/view-winning-bids',bids_view,{headers: {"Auth":"dibdaaauth"}}).map((res: any) => res),
						this.http.post(environment.serverUrl + 'api/bid/view-not-winning-bids',bids_view,{headers: {"Auth":"dibdaaauth"}}).map((res: any) => res),
						this.http.post(environment.serverUrl + 'api/make-offer/view-my-offers',bids_view,{headers: {"Auth":"dibdaaauth"}}).map((res: any) => res)
					)
				
					combined.subscribe(latestValues => {
						const [ data_ownbids , data_winbids, data_notwin, data_offer] = latestValues;
						
						this.bidsData = data_ownbids.bid;
						this.bidsWinData = data_winbids.bid;
						this.bidsNotWinData = data_notwin.bid;
						this.offerData = data_offer.offers;
						this.getAllCount();
					});
				}else{
					let headers = {
						'Auth': 'dibdaaauth'
					};
					const combined = Observable.forkJoin(
						this.http_mobile.post(environment.serverUrl + 'api/bid/view-own-bids',bids_view,headers).then((res: any) => res),
						this.http_mobile.post(environment.serverUrl + 'api/bid/view-winning-bids',bids_view,headers).then((res: any) => res),
						this.http_mobile.post(environment.serverUrl + 'api/bid/view-not-winning-bids',bids_view,headers).then((res: any) => res),
						this.http_mobile.post(environment.serverUrl + 'api/make-offer/view-my-offers',bids_view,headers).then((res: any) => res)
					)
				
					combined.subscribe(latestValues => {
						const [ data_ownbids , data_winbids, data_notwin, data_offer] = latestValues;
						
						let convertdata_ownbids = JSON.parse(data_ownbids.data);
						this.bidsData = convertdata_ownbids.bid;
						
						let convertdata_winbids = JSON.parse(data_winbids.data);
						this.bidsWinData = convertdata_winbids.bid;
						
						let convertdata_notwin = JSON.parse(data_notwin.data);
						this.bidsNotWinData = convertdata_notwin.bid;
						
						let convertdata_offer = JSON.parse(data_offer.data);
						this.offerData = convertdata_offer.offers;
						
						this.getAllCount();
					});
				}
			}catch(Error){
				console.log(Error);
			}
		}
	}
	
	showwishList(){
		if(this.localItem == null){
			
		}else{
			var wishlist_view ={
				user_id:this.localItem.id
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/wishlist/view-wishlist',wishlist_view,(response)=> {
				this.viewishData = response.wishlist;
				this.getAllCount();
			},(error) => {
				console.log(error);
			});
		}
	}
	
	buyNow(val_buyerId:any,val_proId:any,val_qua:any,val_ofeprice:any,val_ofrId:any){
		if(environment.isLogin == false){
			this.navCtrl.push('LoginPage', {
				id: 'login'	
			});
		}else{
			if(environment.localItem == null){
			}else{
				var spec_arr = {};
				spec_arr['color'] = '-'
				spec_arr['size'] = '-'
					
				var pass_data:any;
				if(val_ofrId == ''){
                    pass_data= {
                        user_id:val_buyerId,
                        product_id:val_proId,
                        quantity:val_qua,
                        specification:spec_arr,
                        bid_price:val_ofeprice,
                        offer_id:val_ofrId
                    }
				}else{
                    pass_data= {
                        user_id:val_buyerId,
                        product_id:val_proId,
                        quantity:val_qua,
                        specification:spec_arr,
                        offer_price:val_ofeprice,
                        offer_id:val_ofrId
                    }
				}

                var convert_stringify = JSON.stringify(pass_data)
                var convert_encode = btoa(convert_stringify);

				this.navCtrl.push('CheckOutPage',{
					id:convert_encode
				});
			}
		}
	}
	
	getAllVal(val:any){
		var totallengthcheckbox = $("input[type=checkbox][name=wishlist-chk]").length;
		var totallengthcheckboxchecked = $("input[type=checkbox][name=wishlist-chk]:checked").length;
		
		if(val == "single"){
			if(parseInt(totallengthcheckbox) == parseInt(totallengthcheckboxchecked)){
				$('#checkAllWishList').prop('checked',true);
			}else{
				$('#checkAllWishList').prop('checked',false)
			}
		}else if(val == "multiple"){
			if($('#checkAllWishList').prop('checked') == true){
				$.each($("input[name='wishlist-chk']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='wishlist-chk']"),function(){
					$(this).prop('checked',false);
				});
			}
		}
	}
	
	getAllCount(){
		if(this.localItem == null){
			
		}else{
			var all_count ={
				user_id:this.localItem.id
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/list-count',all_count,(response)=> {
				this.allCountData = response;
			},(error) => {
				console.log(error);
			});
		}
	}
	
	getAllValactive(val:any){
		var totallengthcheckbox = $("input[type=checkbox][name=wishlist-active]").length;
		var totallengthcheckboxchecked = $("input[type=checkbox][name=wishlist-active]:checked").length;
		
		if(val == "single"){
			if(parseInt(totallengthcheckbox) == parseInt(totallengthcheckboxchecked)){
				$('#checkAllWishactive').prop('checked',true);
			}else{
				$('#checkAllWishactive').prop('checked',false)
			}
		}else if(val == "multiple"){
			if($('#checkAllWishactive').prop('checked') == true){
				$.each($("input[name='wishlist-active']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='wishlist-active']"),function(){
					$(this).prop('checked',false);
				});
			}
		}
	}
	
	getAllValend(val:any){
		var totallengthcheckbox = $("input[type=checkbox][name=wishlist-end]").length;
		var totallengthcheckboxchecked = $("input[type=checkbox][name=wishlist-end]:checked").length;
		
		if(val == "single"){
			if(parseInt(totallengthcheckbox) == parseInt(totallengthcheckboxchecked)){
				$('#checkAllWishEnd').prop('checked',true);
			}else{
				$('#checkAllWishEnd').prop('checked',false)
			}
		}else if(val == "multiple"){
			if($('#checkAllWishEnd').prop('checked') == true){
				$.each($("input[name='wishlist-end']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='wishlist-end']"),function(){
					$(this).prop('checked',false);
				});
			}
		}
	}
	
	deletewish(val:any){
		var favorite = [];
		
		if(val == 'All'){
			$.each($("input[name='wishlist-chk']:checked"), function(){            
				favorite.push($(this).val());
			});
		}else if(val == 'Active'){
			$.each($("input[name='wishlist-active']:checked"), function(){            
				favorite.push($(this).val());
			});
		}else if(val == 'End'){
			$.each($("input[name='wishlist-end']:checked"), function(){            
				favorite.push($(this).val());
			});
		}

		if(favorite.length == 0){
			$('#danger-alert').removeClass('hide');
			$('#danger-span').text('You did not select any items.');
		}else{
			if(this.localItem == null){
			
			}else{
				var wishlist_delete ={
					user_id:this.localItem.id,
					product_id:favorite
				}
				
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/wishlist/remove-wishlist',wishlist_delete,(response)=> {
					this.showwishList();
				},(error) => {
					console.log(error);
				});
			}
		}
	}
	
	addCart(val:any){
		
		if(this.localItem == null){
			
		}else{
			var cart_details = {
				product_id:val,
				user_id:this.localItem.id,
				quantity:1,
				specification:'',
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/cart/add-to-cart',cart_details,(response)=> {
				$('#addtoCount').text(response.cart.count);
				if(response.cart.status == "fail"){
					$('#danger-alert').removeClass('hide');
					$('#danger-span').text(response.cart.msg);
				}else if (response.cart.status == "success"){
					$('#success-alert').removeClass('hide');
					$('#success-span').text("Saved to cart");
				}
				
			},(error) => {
				console.log(error);
			});
		}
	}
	
	addNote(val:any){
		var favorite = [];
		if(val == 'All'){
			$.each($("input[name='wishlist-chk']:checked"), function(){            
				favorite.push($(this).val());
			});
		}else if(val == 'Active'){
			$.each($("input[name='wishlist-active']:checked"), function(){            
				favorite.push($(this).val());
			});
		}else if(val == 'End'){
			$.each($("input[name='wishlist-end']:checked"), function(){            
				favorite.push($(this).val());
			});
		}
		
		if(favorite.length == 0){
			$('#danger-alert').removeClass('hide');
			$('#danger-span').text('You did not select any items.');
		}else{
			
			var convert_stringify = JSON.stringify(favorite)
			var convert_encode = btoa(convert_stringify);
			
			this.navCtrl.push('AddNoteWishlist',{
				id:convert_encode
			})
		}
	}
	
	comparewish(val:any){
		var favorite = [];
		if(val == 'All'){
			$.each($("input[name='wishlist-chk']:checked"), function(){            
				favorite.push($(this).val());
			});
		}else if(val == 'Active'){
			$.each($("input[name='wishlist-active']:checked"), function(){            
				favorite.push($(this).val());
			});
		}else if(val == 'End'){
			$.each($("input[name='wishlist-end']:checked"), function(){            
				favorite.push($(this).val());
			});
		}
		
		if(favorite.length == 0){
			$('#danger-alert').removeClass('hide');
			$('#danger-span').text('You did not select any items.');
		}else if(favorite.length < 2){
			$('#danger-alert').removeClass('hide');
			$('#danger-span').text('You can select at least 2 item.');
		}else if(favorite.length > 3){
			$('#danger-alert').removeClass('hide');
			$('#danger-span').text('You can select maximum  3 item.');
		}else {
			var convert_stringify = JSON.stringify(favorite)
			var convert_encode = btoa(convert_stringify);
			
			this.navCtrl.push('CompareList',{
				id:convert_encode
			});
		}
	}
	
	closeDiv(val:any){
		if(val == 'success'){
			$('#success-alert').addClass('hide');
		}else if (val == 'danger'){
			$('#danger-alert').addClass('hide');
		}else if (val == 'success_resoltion'){
			$('#success-alert-resolution').addClass('hide');
		}else if (val == 'success_resoltion_seller'){
			$('#success-alert-resolution-seller').addClass('hide');
		}
	}
	
	viewProduct(){
		if(this.localItem == null){
			
		}else{
			var viewPro = {
				user_id:this.localItem.id
			}
	
			this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/view-product-draft',viewPro,(response)=> {
					this.view_productList = response.draft_product;
					this.infoService.hideLoading();
					this.getAllCount();
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
			});
		}
	}
	public dreftdata:any;
	viewProduct_latestDraft(){
		try{
			if(this.localItem == null){
				
			}else{
				var showdraftList ={
					user_id:this.localItem.id
				}
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/view-latest-draft',showdraftList,(response)=> {
					if(response.latest_draft.status == "success"){
					  this.dreftdata = response.latest_draft;
					}else{
					  this.dreftdata = response;
					}
				},(error) => {
					console.log(error);
				});
			}
		}catch(Error){
		  console.log(Error);
		}
	}
	
	deleteProduct_latestdraft(val:any){
		try{
		  var deletePro ={
			product_id:val
		  }
		  this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/delete-latest-draft',deletePro,(response)=> {
			if(response.latest_draft.status == "success"){
			  this.viewProduct_latestDraft();
			  this.viewProduct();
			}
		  },(error) => {
			console.log(error);
		  });
		}catch(Error){
		  console.log(Error);
		}
	}
  
	gotoeditProduct_latestdraft(val:any){
		this.navCtrl.push('AddProduct',{
			id : val
		})
	}
  
	checkAllSD(val:any){
		if(val == 'saveDraft'){
			if($('#checkAllSD').prop('checked') == true){
				$.each($("input[name='viewProduct_chk']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='viewProduct_chk']"),function(){
					$(this).prop('checked',false);
				});
			}
		}else if(val == 'active'){
			if($('#checkAllactive').prop('checked') == true){
				$.each($("input[name='chkactive_all']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='chkactive_all']"),function(){
					$(this).prop('checked',false);
				});
			}
		}else if(val == 'unsold'){
			if($('#checkAllUnsold').prop('checked') == true){
				$.each($("input[name='chkunsoldAll']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='chkunsoldAll']"),function(){
					$(this).prop('checked',false);
				});
			}
		}else if(val == 'OpenOffer'){
			if($('#checkAllopenofr').prop('checked') == true){
				$.each($("input[name='chkactive_openofr']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='chkactive_openofr']"),function(){
					$(this).prop('checked',false);
				});
			}
		}else if(val == 'ActionStyle'){
			if($('#checkAllactionstyle').prop('checked') == true){
				$.each($("input[name='chkactive_actionstyl']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='chkactive_actionstyl']"),function(){
					$(this).prop('checked',false);
				});
			}
		}else if(val == 'fixprce'){
			if($('#checkAllfixedprice').prop('checked') == true){
				$.each($("input[name='chkactive_fixprice']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='chkactive_fixprice']"),function(){
					$(this).prop('checked',false);
				});
			}
		}else if(val == 'outstock'){
			if($('#checkAlloutofstock').prop('checked') == true){
				$.each($("input[name='chkactive_outstock']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='chkactive_outstock']"),function(){
					$(this).prop('checked',false);
				});
			}
		}else if(val == 'soldAll'){
			if($('#checksoldAll').prop('checked') == true){
				$.each($("input[name='soldchk_all']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='soldchk_all']"),function(){
					$(this).prop('checked',false);
				});
			}
		}else if(val == 'awaitpayment'){
			if($('#checkAllsoldawait').prop('checked') == true){
				$.each($("input[name='soldchk_awaitpayment']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='soldchk_awaitpayment']"),function(){
					$(this).prop('checked',false);
				});
			}
		}else if(val == 'awaitship'){
			if($('#checkAllsoldawaitship').prop('checked') == true){
				$.each($("input[name='soldchk_awaitshiped']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='soldchk_awaitshiped']"),function(){
					$(this).prop('checked',false);
				});
			}
		}else if(val == 'shiped'){
			if($('#checkAllshipped').prop('checked') == true){
				$.each($("input[name='soldchk_shiped']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='soldchk_shiped']"),function(){
					$(this).prop('checked',false);
				});
			}
		}
	}
	
	deleteProduct(val:any,val_check){
		
		var favorite = [];
		if(val == 'one'){
			favorite.push(val_check);
		}else{
			$.each($("input[name='viewProduct_chk']:checked"), function(){            
				favorite.push($(this).val());
			});
		}
		
		if(favorite.length == 0){
			$('#danger-alert-SD').removeClass('hide');
			$('#danger-span-SD').text('You did not select any items.');
		}else{
			if(this.localItem == null){
			
			}else{
				this.deletePro.product_id = favorite;
				this.deletePro.user_id = this.localItem.id;
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/delete-product',this.deletePro,(response)=> {
					this.infoService.hideLoading();
					this.viewProduct();
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
				});
			}
			
		}
	}
	
	closeDivSD(){
		$('#danger-alert-SD').addClass('hide');
	}
	
	viewSeller(){
		if(this.localItem == null){
			
		}else{
			var seller_view = {
				user_id:this.localItem.id
			}
			this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-seller',seller_view,(response)=> {
					this.view_sellerList = response.seveseller;
					this.infoService.hideLoading();
					this.getAllCount();
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
			});
		}
	}
	
	deleteSeller(val:any){
		if(this.localItem == null){
			
		}else{
			var seller_delete = {
				user_id:this.localItem.id,
				status:'remove',
				seller_id:val
			}
		
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/save-seller',seller_delete,(response)=> {
					this.infoService.hideLoading();
					this.viewSeller();
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
			});
		}
	}
	
	viewSellerItem(val:any,val_username:any){
		var pass_id = {
            user_id : this.localItem.id,
            seller_id : val,
			user_name : val_username
		}
		
		/*var convert_stringify = JSON.stringify(pass_id)
		var convert_encode = btoa(convert_stringify);*/

		this.navCtrl.push('AllItemPage',{
			id:pass_id
		});
	}
	
	public showYear:number;
	viewpurchaseHistory(val:any,val_year:any){
		var d = new Date();
        this.showYear = d.getFullYear();
		if(this.localItem == null){
			
		}else{
			var purchase_history:any
			if(val == "All"){
                purchase_history =  {
                    user_id:this.localItem.id
                }
			}else if(val == 'searchyear') {
                purchase_history = {
                    user_id: this.localItem.id,
                    year: val_year
                }
            }else if(val == 'searchdate'){
                purchase_history =  {
                    user_id:this.localItem.id,
                    date:val_year
                }
			}else if(val == 'searchstatus'){
                purchase_history =  {
                    user_id:this.localItem.id,
                    status:val_year
                }
			}

			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/purchase/purchase-history',purchase_history,(response)=> {
				this.view_purchaseData = response.order;
				this.infoService.hideLoading();
				this.getAllCount();
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
	}

    viewInvoiceData(){
        var dat = new Date();
        this.showYear = dat.getFullYear();
	}

    gotoSellerIvoice(){
		var pass_data = {
			month:$('#invoicemonth').val(),
			year:$('#invoiceyear').val()
		}

        var convert_stringify = JSON.stringify(pass_data)
        var convert_encode = btoa(convert_stringify);

        this.navCtrl.push('SellerInvoiceDetailsPage',{
            id:convert_encode
        });
	}

	orderDetails(val:any){
		this.navCtrl.push('OrderDetailPage',{
			id:val
		});
	}
	
	viewAdderss(){
		if(this.localItem == null){
			
		}else{
			var view_add = {
				user_id:this.localItem.id
			}
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/ship-address/view-ship-address',view_add,(response)=> {
				this.view_addressData = response.ship_address;
				this.infoService.hideLoading();
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
	}
	
	editAddress(val:any,val1:any){
		if(val == 'primary'){
			var add_primary = {
				user_id:this.localItem.id,
				ship_id:val1
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/ship-address/make-primary-address',add_primary,(response)=> {
				if(response.ship_address.status == "success"){
					this.viewAdderss();
				}else{
					console.log(response.ship_address);
				}
			},(error) => {
				console.log(error);
			});
		}else if (val == 'delete'){
			var delete_add = {
				user_id:this.localItem.id,
				ship_id:val1
			}
			
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/ship-address/delete-ship-address',delete_add,(response)=> {
				if(response.ship_address.status == "success"){
					this.viewAdderss();
				}else{
					console.log(response.ship_address);
				}
			},(error) => {
				console.log(error);
			});
		}else if(val == 'Cancel'){
			this.showaddress = false;
		}
	}
	
	editAddressfillData(id:any,name:any,addrs:any,city:any,state:any,pincode:any,country:any,mobile:any){
		this.showaddress = true;
		this.filDataadd.id = id;
		this.filDataadd.name = name.split(" ");
		this.filDataadd.addrs = addrs;
		this.filDataadd.city = city;
		this.filDataadd.state = state;
		this.filDataadd.pincode = pincode;
		this.filDataadd.mobile = mobile;

		setTimeout(function(){
			$('#inputCountry').val(country);
		},1000);
	}
	
	AddAddress(val:any){
		this.saveAddress.id = this.filDataadd.id;
		this.saveAddress.user_id = this.localItem.id
		this.saveAddress.ship_name = val.first_name + ' ' + val.last_name;
		this.saveAddress.mobile = val.mobile;
		this.saveAddress.ship_address = val.ship_address;
		this.saveAddress.ship_city = val.ship_city;
		this.saveAddress.ship_state = val.ship_state;
		this.saveAddress.ship_country = $('#inputCountry').val();
		this.saveAddress.ship_pincode = val.ship_pincode;
		
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/ship-address/update-ship-address',this.saveAddress,(response)=> {
			if(response.ship_address.status == "success"){
				this.showaddress = false;
				this.infoService.hideLoading();
				this.viewAdderss();
			}else{
				this.showaddress = true;
				this.infoService.hideLoading();
			}
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}

	goToProductDetails(val:any){
		this.navCtrl.push('ProductDetails',{
			id:val
		});
	}
	
	gotopurchaseusrList(val:any){
		this.navCtrl.push('ViewpurchaseUserlistPage',{
			id:val
		});
	}
	
    public specification_arr = [];

	showSaveSearch(){
		if(this.localItem == null){
			
		}else{
			var save_search = {
				user_id:this.localItem.id
			}
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/search/view-search',save_search,(response)=> {
				if(response.view_search.status == 'success'){
                    this.specification_arr.length = 0;
					for(var i=0;i<response.view_search.data.length;i++){
						this.specification_arr.push((<any>Object).entries(response.view_search.data[i].search));
					}
                    this.saveSearchdata = response.view_search;
					this.infoService.hideLoading();
					this.getAllCount();
				}
				else{
					this.saveSearchdata = response;
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
	}
	
	crudOperation(val:any,val1:any){
		if(val1 == 'view'){
			console.log('View Call');
		}else if(val1 == 'delete'){
			var remove_search = {
				id:val
			}
			
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/search/delete-search',remove_search,(response)=> {
				if(response.save_search.status == "success"){
					this.infoService.hideLoading();
					this.showSaveSearch();
				}else{
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
	}
	
	showMessageList(){
		if(this.localItem == null){
			
		}else{
			var msgList = {
				user_id:this.localItem.id,
				user_role:'seller'
			}
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/message-list',msgList,(response)=> {
				if(response.message.status == "success"){
					this.msgData = response.message;
					this.infoService.hideLoading();
				}else{
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
	}

	viewMessage(val_sender:any,val_pro:any){
		
		var view_msg = {
			sender_id: this.localItem.id,
			receiver_id : val_sender,
			product_id : val_pro
		}
		
		var convert_stringify = JSON.stringify(view_msg)
		var convert_encode = btoa(convert_stringify);

		this.navCtrl.push('LeaveMessagePage',{
			id:convert_encode
		})
	}
	
	ViewDashboard(){
		if(this.localItem == null){
			
		}else{
			var view_dash = {
				user_id : this.localItem.id
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/dashboard/user-dashboard',view_dash,(response)=> {
				if(response.dashboard.status = "success"){
					this.dashboardData = response.dashboard.count;
				}else{
					
				}
			},(error) => {
				console.log(error);
			});
		}
	}
	
	contactSeller(val:any,val1:any){
		if(this.localItem == null){
			this.navCtrl.push('LoginPage', {
				id: 'login'	
			});
		}else{
			$( ".zoomContainer" ).remove();
			var contact_seller = {
				seller_id:val1,
				business_name: val,
				userId:this.localItem.id
			}
			
			var convert_stringify = JSON.stringify(contact_seller);
			var convert_encode = btoa(convert_stringify);

			this.navCtrl.push('ContactSellerPage',{
				id:convert_encode
			});
		}
	}
	
	viewSoldItem(val:any){
		if(this.localItem == null){
			
		}else{
			this.soldviewfeedback = false;
			if(val == "All"){
				var view_sold = {
					user_id : this.localItem.id
				}
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-sold-product',view_sold,(response)=> {
					if(response.sold_product.status = "success"){
						this.soldData = response.sold_product;
						this.getAllCount();
					}else{
						
					}
				},(error) => {
					console.log(error);
				});
			}else if(val == "AwaitingPayment"){
				var view_AwaitingPayment = {
					user_id : this.localItem.id,
					payment : true
				}
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-sold-product',view_AwaitingPayment,(response)=> {
					if(response.sold_product.status = "success"){
						this.sold_AwaitingPayment = response.sold_product;
					}else{
						
					}
				},(error) => {
					console.log(error);
				});
			}else if(val == "AwaitingShipment"){
				var view_AwaitingShipment = {
					user_id : this.localItem.id,
					shipment : true
				}
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-sold-product',view_AwaitingShipment,(response)=> {
					if(response.sold_product.status = "success"){
						this.sold_AwaitingShipment = response.sold_product;
					}else{
						
					}
				},(error) => {
					console.log(error);
				});
			}else if(val == "Shipped"){
				var view_Shipped = {
					user_id : this.localItem.id,
					shipped : true
				}
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-sold-product',view_Shipped,(response)=> {
					if(response.sold_product.status = "success"){
						this.sold_Shipped = response.sold_product;
					}else{
						
					}
				},(error) => {
					console.log(error);
				});
			}
		}
	}
	
	deletesholdItem(val:any){
		var delete_sholdItem:any = [];
		if(val == "shiped"){
			$.each($("input[name='chkactive_all']:checked"), function(){            
				delete_sholdItem.push($(this).val());
			});
			
			if(delete_sholdItem.length  <= 0){
				$('#danger-span-sld').text('You did not select any items.');
				$('#danger-alert-sld').removeClass('hide');
				
			}else{
				$('#danger-alert-sld').addClass('hide');
				var end_productshiped = {
					product_id : delete_sholdItem,
					user_id : this.localItem.id,
				}
				
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/delete-product',end_productshiped,(response)=> {
					if(response.status == "success")
						this.viewSoldItem('Shipped');
					else
						this.viewSoldItem('Shipped');
				},(error) => {
					console.log(error);
				});
			
			}
		}else if(val == "awaitship"){
			$.each($("input[name='soldchk_awaitshiped']:checked"), function(){            
				delete_sholdItem.push($(this).val());
			});
			
			if(delete_sholdItem.length  <= 0){
				$('#danger-span-sld').text('You did not select any items.');
				$('#danger-alert-sld').removeClass('hide');
				
			}else{
				$('#danger-alert-sld').addClass('hide');
				var end_productawaitship = {
					product_id : delete_sholdItem,
					user_id : this.localItem.id,
				}
				
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/delete-product',end_productawaitship,(response)=> {
					if(response.status == "success")
						this.viewSoldItem('AwaitingShipment');
					else
						this.viewSoldItem('AwaitingShipment');
				},(error) => {
					console.log(error);
				});
			}
		}else if(val == "awaitpayment"){
			$.each($("input[name='soldchk_awaitpayment']:checked"), function(){            
				delete_sholdItem.push($(this).val());
			});
			
			if(delete_sholdItem.length  <= 0){
				$('#danger-span-sld').text('You did not select any items.');
				$('#danger-alert-sld').removeClass('hide');
				
			}else{
				$('#danger-alert-sld').addClass('hide');
				var end_productawaitpayment = {
					product_id : delete_sholdItem,
					user_id : this.localItem.id,
				}
				
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/delete-product',end_productawaitpayment,(response)=> {
					if(response.status == "success")
						this.viewSoldItem('AwaitingPayment');
					else
						this.viewSoldItem('AwaitingPayment');
				},(error) => {
					console.log(error);
				});
			}

		}else if(val == "soldAll"){
			$.each($("input[name='soldchk_all']:checked"), function(){            
				delete_sholdItem.push($(this).val());
			});
			
			if(delete_sholdItem.length  <= 0){
				$('#danger-span-sld').text('You did not select any items.');
				$('#danger-alert-sld').removeClass('hide');
			}else{
				$('#danger-alert-sld').addClass('hide');
				var end_productsoldAll = {
					product_id : delete_sholdItem,
					user_id : this.localItem.id,
				}
				
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/delete-product',end_productsoldAll,(response)=> {
					if(response.status == "success")
						this.viewSoldItem('All');
					else
						this.viewSoldItem('All');
				},(error) => {
					console.log(error);
				});
			}
		}
	}
	
	closeDivsld(){
		$('#danger-alert-sld').addClass('hide');
	}
	
	viewActiveItem(){
		if(this.localItem == null){
			
		}else{
			var view_active = {
				user_id : this.localItem.id
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-active-product',view_active,(response)=> {
				if(response.status = "success"){
					this.activeItem = response;
					this.getAllCount();
				}else{
					
				}
			},(error) => {
				console.log(error);
			});
		}
	}
	
	filterActive(val:any,val1:any){
		if(val == "Sort"){
			var Sort_active:any;
			if(val1 == "endsoon"){
				Sort_active = {
					endsoon : true,
					user_id : this.localItem.id
				}
			}else if(val1 == "newly_listed"){
				Sort_active = {
					newly_listed : true,
					user_id : this.localItem.id
				}
			}else if(val1 == "price_asc"){
				Sort_active = {
					price : 'asc',
					user_id : this.localItem.id
				}
			}else if(val1 == "price_desc"){
				Sort_active = {
					price : 'desc',
					user_id : this.localItem.id
				}
			}else if(val1 == "quantity_asc"){
				Sort_active = {
					quantity : 'asc',
					user_id : this.localItem.id
				}
			}else if(val1 == "quantity_desc"){
				Sort_active = {
					quantity : 'desc',
					user_id : this.localItem.id
				}
			}else if(val1 == "-1"){
				Sort_active = {
					user_id : this.localItem.id
				}
			}
			
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-active-product',Sort_active,(response)=> {
				if(response.status = "success"){
					this.activeItem = response;
					this.infoService.hideLoading();
				}else{
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}else if(val == "Format"){
			var Format_active:any;
			if(val1 == "auction"){
				Format_active = {
					auction : 'Auction style',
					user_id : this.localItem.id
				}
			}else if(val1 == "fix_price"){
				Format_active = {
					fix_price : 'Fixed price',
					user_id : this.localItem.id
				}
			}else if(val1 == "best_offer"){
				Format_active = {
					best_offer : true,
					user_id : this.localItem.id
				}
			}else if(val1 == "-1"){
				Format_active = {
					user_id : this.localItem.id
				}
			}else if(val1 == "out_of_stock"){
				Format_active = {
					user_id : this.localItem.id,
					out_of_stock: true
				}
			}
			
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-active-product',Format_active,(response)=> {
				if(response.status = "success"){
					this.activeItem = response;
					this.infoService.hideLoading();
				}else{
					this.activeItem = response;
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
			
		}
	}
	
	activeallOperation(val:any,val1:any){
		var favorite:any = [];
		if(val1 == "All"){
			if(val == "End"){
				$.each($("input[name='chkactive_all']:checked"), function(){            
					favorite.push($(this).val());
				});
				
				if(favorite.length  <= 0){
					$('#danger-span-AS').text('You did not select any items.');
					$('#danger-alert-AS').removeClass('hide');
					
				}else{
					$('#danger-alert-AS').addClass('hide');
					var end_productAll = {
						product_id : favorite
					}
					this.infoService.showLoading();
					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/end-product',end_productAll,(response)=> {
						this.infoService.hideLoading();
						if(response.cancel_users.status == "success")
							this.viewActiveItem();
						else
							this.viewActiveItem();
					},(error) => {
						console.log(error);
						this.infoService.hideLoading();
					});
				}
			}else if(val == "Edit"){
				$.each($("input[name='chkactive_all']:checked"), function(){            
					favorite.push($(this).val());
				});
				if(favorite.length > 1){
					$('#danger-alert-AS').removeClass('hide');
					$('#danger-span-AS').text('Select Only one');
				}else if(favorite.length == 1){
					$('#danger-alert-AS').addClass('hide');
					this.gotoeditProduct(favorite[0],'Active');
				}else{
					$('#danger-alert-AS').removeClass('hide');
					$('#danger-span-AS').text('You did not select any items.');
				}
			}
		}else if(val1 == "opnoffr"){
			if(val == "End"){
				$.each($("input[name='chkactive_openofr']:checked"), function(){            
					favorite.push($(this).val());
				});
				
				if(favorite.length  <= 0){
					$('#danger-span-AS').text('You did not select any items.');
					$('#danger-alert-AS').removeClass('hide');
				}else{
					$('#danger-alert-AS').addClass('hide');
					var end_productopnoffr = {
						product_id : favorite
					}
					this.infoService.showLoading();
					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/end-product',end_productopnoffr,(response)=> {
						this.infoService.hideLoading();
						if(response.cancel_users.status == "success")
							this.viewActiveItem();
						else
							this.viewActiveItem();
					},(error) => {
						console.log(error);
						this.infoService.hideLoading();
					});
				}
			}else if(val == "Edit"){
				$.each($("input[name='chkactive_openofr']:checked"), function(){            
					favorite.push($(this).val());
				});
				if(favorite.length > 1){
					$('#danger-alert-AS').removeClass('hide');
					$('#danger-span-AS').text('Select Only one');
				}else if(favorite.length == 1){
					$('#danger-alert-AS').addClass('hide');
					this.gotoeditProduct(favorite[0],'Active');
				}else{
					$('#danger-alert-AS').removeClass('hide');
					$('#danger-span-AS').text('You did not select any items.');
				}
			}
		}else if(val1 == "actionstyl"){
			if(val == "End"){
				$.each($("input[name='chkactive_actionstyl']:checked"), function(){            
					favorite.push($(this).val());
				});
				
				if(favorite.length  <= 0){
					$('#danger-span-AS').text('You did not select any items.');
					$('#danger-alert-AS').removeClass('hide');
				}else{
					$('#danger-alert-AS').addClass('hide');
					var end_productactionstyl = {
						product_id : favorite
					}
					this.infoService.showLoading();
					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/end-product',end_productactionstyl,(response)=> {
						this.infoService.hideLoading();
						if(response.cancel_users.status == "success")
							this.viewActiveItem();
						else
							this.viewActiveItem();
					},(error) => {
						console.log(error);
						this.infoService.hideLoading();
					});
				}
			}else if(val == "Edit"){
				$.each($("input[name='chkactive_actionstyl']:checked"), function(){            
					favorite.push($(this).val());
				});
				if(favorite.length > 1){
					$('#danger-alert-AS').removeClass('hide');
					$('#danger-span-AS').text('Select Only one');
				}else if(favorite.length == 1){
					$('#danger-alert-AS').addClass('hide');
					this.gotoeditProduct(favorite[0],'Active');
				}else{
					$('#danger-alert-AS').removeClass('hide');
					$('#danger-span-AS').text('You did not select any items.');
				}
			}
		}else if(val1 == "fixprce"){
			if(val == "End"){
				$.each($("input[name='chkactive_fixprice']:checked"), function(){            
					favorite.push($(this).val());
				});
				
				if(favorite.length  <= 0){
					$('#danger-span-AS').text('You did not select any items.');
					$('#danger-alert-AS').removeClass('hide');
				}else{
					$('#danger-alert-AS').addClass('hide');
					var end_productfixprce = {
						product_id : favorite
					}
					this.infoService.showLoading();
					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/end-product',end_productfixprce,(response)=> {
						this.infoService.hideLoading();
						if(response.cancel_users.status == "success")
							this.viewActiveItem();
						else
							this.viewActiveItem();
					},(error) => {
						console.log(error);
						this.infoService.hideLoading();
					});
				}
			}else if(val == "Edit"){
				$.each($("input[name='chkactive_fixprice']:checked"), function(){            
					favorite.push($(this).val());
				});
				if(favorite.length > 1){
					$('#danger-alert-AS').removeClass('hide');
					$('#danger-span-AS').text('Select Only one');
				}else if(favorite.length == 1){
					$('#danger-alert-AS').addClass('hide');
					this.gotoeditProduct(favorite[0],'Active');
				}else{
					$('#danger-alert-AS').removeClass('hide');
					$('#danger-span-AS').text('You did not select any items.');
				}
			}
		}else if(val1 == "outstock"){
			if(val == "End"){
				$.each($("input[name='chkactive_outstock']:checked"), function(){            
					favorite.push($(this).val());
				});
				
				if(favorite.length  <= 0){
					$('#danger-span-AS').text('You did not select any items.');
					$('#danger-alert-AS').removeClass('hide');
				}else{
					$('#danger-alert-AS').addClass('hide');
					var end_productoutstock = {
						product_id : favorite
					}
					this.infoService.showLoading();
					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/end-product',end_productoutstock,(response)=> {
						this.infoService.hideLoading();
						if(response.cancel_users.status == "success")
							this.viewActiveItem();
						else
							this.viewActiveItem();
					},(error) => {
						console.log(error);
						this.infoService.hideLoading();
					});
				}
			}else if(val == "Edit"){
				$.each($("input[name='chkactive_outstock']:checked"), function(){            
					favorite.push($(this).val());
				});
				if(favorite.length > 1){
					$('#danger-alert-AS').removeClass('hide');
					$('#danger-span-AS').text('Select Only one');
				}else if(favorite.length == 1){
					$('#danger-alert-AS').addClass('hide');
					this.gotoeditProduct(favorite[0],'Active');
				}else{
					$('#danger-alert-AS').removeClass('hide');
					$('#danger-span-AS').text('You did not select any items.');
				}
			}
		}
	}
	
	closeDivAS(){
		$('#danger-alert-AS').addClass('hide');
	}
	
	viewUnsoldItem(){
		if(this.localItem == null){
			
		}else{
			var view_unsold = {
				user_id : this.localItem.id
			}
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-unsold-product',view_unsold,(response)=> {
				if(response.unsold_product.status = "success"){
					this.unsoldItem = response.unsold_product;
					this.infoService.hideLoading();
					this.getAllCount();
				}else{
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
	}
	
	deleteAllunsold(){
		var favorite:any = [];
		$.each($("input[name='chkunsoldAll']:checked"), function(){            
			favorite.push($(this).val());
		});
		
		if(favorite.length <= 0){
			$('#danger-alert-US').removeClass('hide');
		}else{
			var deleteall_unsold = {
				user_id : this.localItem.id,
				product_id : favorite
			}
			
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/delete-product',deleteall_unsold,(response)=> {
				if(response.status == "success")
					this.viewUnsoldItem();
				else
					this.viewUnsoldItem();
			},(error) => {
				console.log(error);
			});
		}
	}
	
	filterunsold(val:any){
		var view_unsold = {
			user_id : this.localItem.id,
			val : val
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-unsold-product',view_unsold,(response)=> {
			if(response.unsold_product.status = "success"){
				this.unsoldItem = response.unsold_product;
				this.infoService.hideLoading();
			}else{
				this.infoService.hideLoading();
			}
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
	
	closeDivUS(){
		$('#danger-alert-US').addClass('hide');
	}
	
	viewDeleteItem(){
		if(this.localItem == null){
			
		}else{
			var view_deleteitm = {
				user_id : this.localItem.id
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-deleted-product',view_deleteitm,(response)=> {
				if(response.deleted_product.status = "success"){
					this.deleteItem = response.deleted_product;
					this.getAllCount();
				}else{
					
				}
			},(error) => {
				console.log(error);
			});
		}
	}
	
	deleteFilter(val:any){
		if(val == "sold"){
			var filter_deleteitmsold = {
				user_id : this.localItem.id,
				sold : true
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-deleted-product',filter_deleteitmsold,(response)=> {
				if(response.deleted_product.status = "success"){
					this.deleteItem = response.deleted_product;
				}else{
					
				}
			},(error) => {
				console.log(error);
			});
		}else if(val == "unsold"){
			var filter_deleteitmunsold = {
				user_id : this.localItem.id,
				unsold : true
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-deleted-product',filter_deleteitmunsold,(response)=> {
				if(response.deleted_product.status = "success"){
					this.deleteItem = response.deleted_product;
				}else{
					
				}
			},(error) => {
				console.log(error);
			});
		}else if(val == "CurrentMonth"){
			var filter_deleteCurrentMonth = {
				user_id : this.localItem.id,
				current_month : true
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-deleted-product',filter_deleteCurrentMonth,(response)=> {
				if(response.deleted_product.status = "success"){
					this.deleteItem = response.deleted_product;
				}else{
					
				}
			},(error) => {
				console.log(error);
			});
		}else if(val == "LastMonth"){
			var filter_deleteLastMonth = {
				user_id : this.localItem.id,
				last_month : true
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-deleted-product',filter_deleteLastMonth,(response)=> {
				if(response.deleted_product.status = "success"){
					this.deleteItem = response.deleted_product;
				}else{
					
				}
			},(error) => {
				console.log(error);
			});
		}else if(val == "Last60Days"){
			var filter_deleteLastDays = {
				user_id : this.localItem.id,
				last60days : true
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-deleted-product',filter_deleteLastDays,(response)=> {
				if(response.deleted_product.status = "success"){
					this.deleteItem = response.deleted_product;
				}else{
					
				}
			},(error) => {
				console.log(error);
			});
		}else if(val == "recently"){
			var filter_deleterecently = {
				user_id : this.localItem.id,
				recently : true
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-deleted-product',filter_deleterecently,(response)=> {
				if(response.deleted_product.status = "success"){
					this.deleteItem = response.deleted_product;
				}else{
					
				}
			},(error) => {
				console.log(error);
			});
		}else if(val == "asc"){
			var filter_deleteasc = {
				user_id : this.localItem.id,
				price : val
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-deleted-product',filter_deleteasc,(response)=> {
				if(response.deleted_product.status = "success"){
					this.deleteItem = response.deleted_product;
				}else{
					
				}
			},(error) => {
				console.log(error);
			});
		}else if(val == "desc"){
			var filter_deletedesc = {
				user_id : this.localItem.id,
				price : val
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-deleted-product',filter_deletedesc,(response)=> {
				if(response.deleted_product.status = "success"){
					this.deleteItem = response.deleted_product;
				}else{
					
				}
			},(error) => {
				console.log(error);
			});
		}
	}
	
	deleteItems(val:any){
		var totallengthcheckbox = $("input[type=checkbox][name=chkdltitem]").length;
		var totallengthcheckboxchecked = $("input[type=checkbox][name=chkdltitem]:checked").length;
		
		if(val == "single"){
			if(parseInt(totallengthcheckbox) == parseInt(totallengthcheckboxchecked)){
				$('#checkAlldeleteItem').prop('checked',true);
			}else{
				$('#checkAlldeleteItem').prop('checked',false)
			}
		}else if(val == "multiple"){
			if($('#checkAlldeleteItem').prop('checked') == true){
				$.each($("input[name='chkdltitem']"),function(){
					$(this).prop('checked',true);
				});
			}else{
				$.each($("input[name='chkdltitem']"),function(){
					$(this).prop('checked',false);
				});
			}
		}
	}
	
	undeleteItem(){
		var undelete_array = []
		$.each($("input[name='chkdltitem']:checked"), function(){            
			undelete_array.push($(this).val());
		});
		
		if(undelete_array.length <= 0){
			$('#dangeralert').removeClass('hide');
		}else{
			$('#dangeralert').addClass('hide');
			var undeleteItem_data = {
				user_id : this.localItem.id,
				product_id : undelete_array
			}
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/undelete-product',undeleteItem_data,(response)=> {
				if(response.status = "success"){
					this.infoService.hideLoading();
					this.viewDeleteItem();
				}else{
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
	}
	
	closeDiv_Delete(val:any){
		if(val == 'success'){
			$('#success-alert').addClass('hide');
		}else if (val == 'danger'){
			$('#dangeralert').addClass('hide');
		}
	}
	
	viewFeedbackData(val:any){
		if(this.localItem == null){
			
		}else{
			if(val == "all"){
				var feedback_data_all:any = {
                    user_id: this.localItem.id
				}
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/view-feedback',feedback_data_all,(response)=> {
					this.feedbacklistdata = response.feedback.data;
					this.infoService.hideLoading();
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
				});
			}else if(val == "seller"){
				var feedback_data_seller:any = {
					receiver_id: this.localItem.id,
                    user_role:'seller'
				}
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/view-feedback',feedback_data_seller,(response)=> {
					this.feedbacklistSeller= response.feedback.data;
					this.infoService.hideLoading();
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
				});
			}else if(val == "buyer"){
				var feedback_data_buyer:any = {
                    receiver_id: this.localItem.id,
					user_role : 'buyer'
				}
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/view-feedback',feedback_data_buyer,(response)=> {
					this.feedbacklistBuyer = response.feedback.data;
					this.infoService.hideLoading();
					
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
				});
			}
			this.feedback_monthwise();
		}
	}
	
	getServerData(event){
		var feedbackdata_pagination:any = {
			receiver_id: this.localItem.id
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/view-feedback?page='+event,feedbackdata_pagination,(response)=> {
			this.feedbacklistdata = response.feedback.data;
			this.infoService.hideLoading();
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
	
	getServerData_seller(event){
		var feedbackdata_sellerpagination:any = {
			receiver_id: this.localItem.id,
			user_role : 'seller'
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/view-feedback?page='+event,feedbackdata_sellerpagination,(response)=> {
			this.feedbacklistSeller= response.feedback.data;
			this.infoService.hideLoading();
			
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
	
	getServerData_buyer(event){
		var feedbackdata_buyerpagination:any = {
			receiver_id: this.localItem.id,
			user_role : 'buyer'
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/view-feedback?page='+event,feedbackdata_buyerpagination,(response)=> {
			this.feedbacklistBuyer = response.feedback.data;
			this.infoService.hideLoading();
			
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
	
	feedback_monthwise(){
		var month_wise = {
			reciever_id : this.localItem.id
		}
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/view-feedback-rating',month_wise,(response)=> {
			if(response.feedback.status == "success"){
				this.feedbacklistmonth = response.feedback.data;
			}else{
				this.feedbacklistmonth = response;
			}
		},(error) => {
			console.log(error);
		});
		this.feedback_sellerRating();
	}
	
	feedback_sellerRating(){
		var seller_wise = {
			user_id : this.localItem.id
		}
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/view-seller-rating',seller_wise,(response)=> {
			if(response.feedback.status == "success"){
				this.showseller_rating = response.feedback.data;
			}else{
				this.showseller_rating = response;
			}
			
		},(error) => {
			console.log(error);
		});
	}
	
	viewpurchaseProducts(){
		if(this.localItem == null){
			
		}else{
			var purchaseProducts_data = {
				user_id: this.localItem.id
			}
			
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/checkout/view-purchase-products',purchaseProducts_data,(response)=> {
				if(response.purchase_products.status == "success"){
					this.viewpurchaseProductsdata = response.purchase_products;
					this.infoService.hideLoading();
				}else{
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
	}

    viewpurchaseProducts_seller(){
        if(this.localItem == null){

        }else{
            var sellProducts_data = {
                user_id: this.localItem.id
            }

            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-sold-product',sellProducts_data,(response)=> {
                if(response.sold_product.status == "success"){
                    this.viewsellProductsdata = response.sold_product;
                    this.infoService.hideLoading();
                }else{
                    this.infoService.hideLoading();
                }
            },(error) => {
                console.log(error);
                this.infoService.hideLoading();
            });
        }
	}

    viewpurchaseProducts_userList(val:any){
        if(this.localItem == null){

        }else{
            var sellProducts_data = {
                product_id: val
            }

            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-product-purchase-user-list',sellProducts_data,(response)=> {
                if(response.user_list.status == "success"){
                    this.viewuserListdata = response.user_list;
                    this.infoService.hideLoading();
				}else{
                    this.infoService.hideLoading();
				}
            },(error) => {
                console.log(error);
                this.infoService.hideLoading();
            });
        }
    }

	submitResolution(){
		var other_reson:any;
		var usrrole:any;
		var radio_value = $('input[type=radio][name=radiogroup]:checked').val();
		if(radio_value == "other"){
			other_reson = $('#buyreason').val();
			usrrole = 'buyer'
		}else{
			other_reson = $('input[type=radio][name=radiogroup]:checked').val();
            usrrole = "buyer";
		}
		
		var resolution_centerData:any = {
			product_id: $('#productname').children(":selected").attr("id"),
			user_role : usrrole,
			seller_id: $('#hidden_id').val(),
			buyer_id: this.localItem.id,
			question:other_reson,
            order_id:$('#productname').children(":selected").attr("class"),
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/resolution-center/add-resolution-center',resolution_centerData,(response)=> {
			if(response.resolution_center.status == "success"){
				this.infoService.hideLoading();
				$('#success-alert-resolution').removeClass('hide');
				$('#success-span-resolution').text(response.resolution_center.msg + " your ticket id is " + response.resolution_center.ticket_id );
			}else{
				this.infoService.hideLoading();
			}
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}

    submitResolution_seller(){
		var other_reson:any;
		var usrrole:any;
		var radio_value = $('input[type=radio][name=radiogroup_seller]:checked').val();

		if(radio_value == "othersold"){
			other_reson = $('#soldreason_seller').val();
			usrrole = 'seller'
		}else{
			other_reson = $('input[type=radio][name=radiogroup_seller]:checked').val();
            usrrole = "seller"
		}

		var resolution_centerData:any = {
			product_id: $('#productname_seller').val(),
			user_role : usrrole,
			seller_id: this.localItem.id,
			buyer_id: $('#userlistname').val(),
			question:other_reson,
            order_id:$('#userlistname').children(":selected").attr('id')
		}

		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/resolution-center/add-resolution-center',resolution_centerData,(response)=> {
			if(response.resolution_center.status == "success"){
				this.infoService.hideLoading();
				$('#success-alert-resolution-seller').removeClass('hide');
				$('#success-span-resolution-seller').text(response.resolution_center.msg + " your ticket id is " + response.resolution_center.ticket_id );
			}else{
				this.infoService.hideLoading();
			}
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
	
	viewReturnData(val:any){
		var resolution_viewPro:any;
		if(this.localItem == null){
			
		}else{

			if(val == 'All' || val == ''){
				resolution_viewPro = {
					user_id : this.localItem.id,
					user_role : 'seller'/*this.localItem.role*/
				}
			}else if(val == 'Buyer' || val == ''){
				resolution_viewPro = {
					user_id : this.localItem.id,
					user_role : 'buyer'
				}
			}else if(val == 'one_day'){
				resolution_viewPro = {
					user_id : this.localItem.id,
					user_role : this.localItem.role,
					one_day : true
				}
			}else if(val == 'current_week'){
				resolution_viewPro = {
					user_id : this.localItem.id,
					user_role : this.localItem.role,
					current_week : true
				}
			}else if(val == 'current_month'){
				resolution_viewPro = {
					user_id : this.localItem.id,
					user_role : this.localItem.role,
					current_month : true
				}
			}else if(val == 'two_month'){
				resolution_viewPro = {
					user_id : this.localItem.id,
					user_role : this.localItem.role,
					two_month : true
				}
			}else if(val == 'six_month'){
				resolution_viewPro = {
					user_id : this.localItem.id,
					user_role : this.localItem.role,
					six_month : true
				}
			}else if(val == 'twelve_month'){
				resolution_viewPro = {
					user_id : this.localItem.id,
					user_role : this.localItem.role,
					twelve_month : true
				}
			}else if(val == 'eighteen_month'){
				resolution_viewPro = {
					user_id : this.localItem.id,
					user_role : this.localItem.role,
					eighteen_month : true
				}
			}
		
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/resolution-center/view-resolution-products',resolution_viewPro,(response)=> {
				if(response.resolution_products.status == "success"){
					this.infoService.hideLoading();
					this.returnviewData = response.resolution_products;
					this.getAllCount();
				}else{
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
	}
	
	showreturnThread(val_buyer:any,val_seller:any,val_pro:any,val_ticket:any){
		var return_thread:any = {
			buyer_id : val_buyer,
			seller_id : val_seller,
			product_id : val_pro,
			ticketId : val_ticket
		}
		
		var convert_stringify = JSON.stringify(return_thread);
		var convert_encode = btoa(convert_stringify);
		
		this.navCtrl.push('ReplayResolutionPage',{
			id:convert_encode
		});
	}

    showBuyerMessageData(){
        if(this.localItem == null){

        }else{
            var msgList = {
                user_id:this.localItem.id,
                user_role:'buyer'
            }
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/message-list',msgList,(response)=> {
                if(response.message.status == "success"){
                    this.msgData_buyer = response.message;
                    this.infoService.hideLoading();
                }else{
                    this.infoService.hideLoading();
                }
            },(error) => {
                console.log(error);
                this.infoService.hideLoading();
            });
        }
	}

    searchMessage_buyer(){
        if(this.localItem == null){

        }else{
            var search_message = {
                search : $('#mysearch_buyer').val(),
                user_id: this.localItem.id,
                user_role: 'buyer',
            }

            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/message-list',search_message,(response)=> {
                if(response.message.status == "success"){
                    this.msgData_buyer = response.message;
                    this.infoService.hideLoading();
                }else{
                    this.infoService.hideLoading();
                }
            },(error) => {
                console.log(error);
                this.infoService.hideLoading();
            });
        }
    }

	searchMessage(){
		if(this.localItem == null){
			
		}else{
			var search_message = {
				search : $('#mysearch').val(),
				user_id: this.localItem.id, 
				user_role: 'seller',
			}
			
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/message-list',search_message,(response)=> {
				if(response.message.status == "success"){
					this.msgData = response.message;
					this.infoService.hideLoading();
				}else{
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
	}
	
	soldviewfeedbackData(val:any){
		var feedbackall = {
			receiver_id: this.localItem.id,
			product_id : val
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/view-feedback',feedbackall,(response)=> {
			this.showonlyfeedback = response.feedback.data;
			this.soldviewfeedback = true;
			this.infoService.hideLoading();
		},(error) => {
			this.soldviewfeedback = false;
			console.log(error);
			this.infoService.hideLoading();
		});
	}
	
	hideFeedbackData(){
		this.soldviewfeedback = false;
	}
	
	getServerDataFeedbackonly(event){
		var feedbackall_pagination:any = {
			receiver_id: this.localItem.id,
			product_id: this.showonlyfeedback.data[0].product_id
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/feedback/view-feedback?page='+event,feedbackall_pagination,(response)=> {
			this.showonlyfeedback = response.feedback.data;
			this.soldviewfeedback = true;
			this.infoService.hideLoading();
		},(error) => {
			this.soldviewfeedback = false;
			console.log(error);
			this.infoService.hideLoading();
		});
	}
	
	viewItemSearch(val:any,val1:any){
		if(val1 == "viewSearch"){
			var pass_data = {
				id : val,
				view_item: 'viewItme',
				check_search : ''
			}
			var convert_stringify = JSON.stringify(pass_data)
			var convert_encode = btoa(convert_stringify);
			this.navCtrl.push('AdvanceSearchDataPage',{
				id:convert_encode
			});
		}else if(val1 == "editSearch"){
			var pass_data = {
				id : val,
				view_item: 'viewItme',
				check_search : 'editSearch'
			}
			var convert_stringify = JSON.stringify(pass_data)
			var convert_encode = btoa(convert_stringify);
			this.navCtrl.push('AdvanceSearchDataPage',{
				id:convert_encode
			});
		}
	}
	
	editBusinessuserName(){
		let alert = this.alertCtrl.create({
			title: 'Change Username',
			inputs: [
			  {
				name: 'username',
				placeholder: 'User name',
				type: 'text'
			  }
			],
			buttons: [
			  {
				text: 'Cancel',
				role: 'cancel',
				handler: data => {
				  
				},
				cssClass:'theme-light-btn'
			  },
			  {
				text: 'Submit',
				cssClass:'theme-light-btn',
				handler: data => {
					if (data.username == '') 
						return false;

					if(data.username.length > 20){
						let alert_msg = this.alertCtrl.create({
							title: 'Change Username',
							subTitle: 'Maximum length is 20.',
							buttons: [{
								text: 'OK',
								role: 'cancel',
								cssClass:'alert-button-changeColor'
							}]
						});
						alert_msg.present();
						return false;
					}
					var change_username ={
						user_id:this.localItem.id,
						user_name : data.username
					}
					
					this.infoService.showLoading();

					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/change-username',change_username,(response)=> {
						if(response.user.status == "success"){
							var persons = this.localItem;
							persons.display_name = data.username
							localStorage.setItem('userInfo',JSON.stringify(persons));
							environment.localItem = persons;
						}
						
						this.infoService.hideLoading();
						
					},(error) => {
						console.log(error);
						this.infoService.hideLoading();
					});
				}
			  }
			]
		});
		alert.present();
	}
	
	editBusinessname(){
		let alert = this.alertCtrl.create({
			title: 'Change business name',
			inputs: [
			  {
				name: 'business_name',
				placeholder: 'Business name',
				type: 'text'
			  }
			],
			buttons: [
			  {
				text: 'Cancel',
				role: 'cancel',
				handler: data => {
				  
				},
				cssClass:'theme-light-btn'
			  },
			  {
				text: 'Submit',
				cssClass:'theme-light-btn',
				handler: data => {
					if (data.business_name == '') 
						return false;
					
					if(data.business_name.length > 20){
						let alert_msg = this.alertCtrl.create({
							title: 'Change business name',
							subTitle: 'Maximum length is 20.',
							buttons: [{
								text: 'OK',
								role: 'cancel',
								cssClass:'alert-button-changeColor'
							}]
						});
						alert_msg.present();
						return false;
					}

					var change_businessname ={
						id:this.localItem.id,
						key : 'business_name',
						value : data.business_name 
					}
					
					this.infoService.showLoading();

					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/edit-business-info',change_businessname,(response)=> {
						if(response.users.status == "success"){
							var persons = this.localItem;
							persons.business_name = data.business_name
							localStorage.setItem('userInfo',JSON.stringify(persons));
							environment.localItem = persons;
						}
							
						this.infoService.hideLoading();
						
					},(error) => {
						console.log(error);
						this.infoService.hideLoading();
					});
				}
			  }
			]
		});
		alert.present();
	}
	
	editBusinessuserpassword(){
		let alert = this.alertCtrl.create({
			title: 'Change Password',
			inputs: [
			  {
				name: 'currentpassword',
				placeholder: 'Password',
				type: 'password'
			  },
			  {
				name: 'newpassword',
				placeholder: 'New Password',
				type: 'password'
			  },
			  {
				name: 'confirmpassword',
				placeholder: 'Confirm Password',
				type: 'password'
			  }
			],
			buttons: [
			  {
				text: 'Cancel',
				role: 'cancel',
				handler: data => {
				  
				},
				cssClass:'theme-light-btn'
			  },
			  {
				text: 'Submit',
				cssClass:'theme-light-btn',
				handler: data => {
					if (data.newpassword != data.confirmpassword) {
						let alert = this.alertCtrl.create({
							title: 'Change Password',
							subTitle: 'Password Not Match',
							buttons: [{
								text: 'OK',
								role: 'cancel',
								cssClass:'alert-button-changeColor'
							}]
						});
						alert.present();
						return false;
					}else{
						if(data.currentpassword == '')
							return false;
						if(data.newpassword == '')
							return false;
						if(data.confirmpassword == '')
							return false;
						
						if(data.newpassword.length < 6){
							let alert_newpassword = this.alertCtrl.create({
								title: 'Change Password',
								subTitle: 'minimum length is 6.',
								buttons: [{
									text: 'OK',
									role: 'cancel',
									cssClass:'alert-button-changeColor'
								}]
							});
							alert_newpassword.present();
							return false;
						}

						var change_password ={
							old_password : data.currentpassword,
							new_password : data.newpassword,
							user_id:this.localItem.id
						}
						
						this.infoService.showLoading();

						this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/change-password',change_password,(response)=> {
							let alert1 = this.alertCtrl.create({
								title: 'Change Password',
								subTitle: response.user.msg,
								buttons: [{
									text: 'OK',
									role: 'cancel',
									cssClass:'alert-button-changeColor'
								}]
							});
							alert1.present();
							this.infoService.hideLoading();
						},(error) => {
							console.log(error);
							this.infoService.hideLoading();
						});
					}
				}
			  }
			]
		});
		alert.present();
	}
	
	editBusinessrelationship(){
		let alert = this.alertCtrl.create({
			title: 'Business relationship',
			inputs: [
			  {
				type:'radio',
				label:'Approved Seller',
				value:'Approved Seller',
				checked: true
			},
			{
				type:'radio',
				label:'Director',
				value:'Director'
			},
			{
				type:'radio',
				label:'Manager',
				value:'Manager'
			},
			{
				type:'radio',
				label:'Owner',
				value:'Owner'
			},
			{
				type:'radio',
				label:'Partner',
				value:'Partner'
			},
			{
				type:'radio',
				label:'Other',
				value:'Other'
			}
			],
			buttons: [
			  {
				text: 'Cancel',
				role: 'cancel',
				handler: data => {
				  
				},
				cssClass:'theme-light-btn'
			  },
			  {
				text: 'Submit',
				cssClass:'theme-light-btn',
				handler: data => {
					var change_businessrelationship ={
						id:this.localItem.id,
						key : 'business_relationship',
						value : '' 
					}
					if(data == 'Other'){
						let alert1 = this.alertCtrl.create({
							title: 'Change business relationship',
							inputs: [
							  {
								name: 'other',
								placeholder: 'Other relationship',
								type: 'text'
							  }
							],
							buttons: [
							  {
								text: 'Cancel',
								role: 'cancel',
								handler: data => {
								  
								},
								cssClass:'theme-light-btn'
							  },
							  {
								text: 'Submit',
								cssClass:'theme-light-btn',
								handler: data => {
									if (data.other == '') 
										return false;
									
									change_businessrelationship.value = data.other;
									this.infoService.showLoading();
						
									this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/edit-business-info',change_businessrelationship,(response)=> {
										if(response.users.status == "success"){
											var persons = this.localItem;
											persons.business_relationship = data.other
											localStorage.setItem('userInfo',JSON.stringify(persons));
											environment.localItem = persons;
										}
											
										this.infoService.hideLoading();
										
									},(error) => {
										console.log(error);
										this.infoService.hideLoading();
									});
								}
							  }
							]
						});
						alert1.present();
					}else{
						change_businessrelationship.value = data;
						this.infoService.showLoading();
						
						this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/edit-business-info',change_businessrelationship,(response)=> {
							if(response.users.status == "success"){
								var persons = this.localItem;
								persons.business_relationship = data
								localStorage.setItem('userInfo',JSON.stringify(persons));
								environment.localItem = persons;
							}
								
							this.infoService.hideLoading();
							
						},(error) => {
							console.log(error);
							this.infoService.hideLoading();
						});
					}
				}
			  }
			]
		});
		alert.present();
	}
	
	editBusinesscompno(){
		let alert = this.alertCtrl.create({
			title: 'Change company number',
			inputs: [
			  {
				name: 'company_number',
				placeholder: 'Company number',
				type: 'text'
			  }
			],
			buttons: [
			  {
				text: 'Cancel',
				role: 'cancel',
				handler: data => {
				  
				},
				cssClass:'theme-light-btn'
			  },
			  {
				text: 'Submit',
				cssClass:'theme-light-btn',
				handler: data => {
					if (data.company_number == '') 
						return false;
					
					if(data.company_number.length > 30){
						let alert_company_number = this.alertCtrl.create({
							title: 'Change company number',
							subTitle: 'Maximum length is 30.',
							buttons: [{
								text: 'OK',
								role: 'cancel',
								cssClass:'alert-button-changeColor'
							}]
						});
						alert_company_number.present();
						return false;
					}

					var change_compno ={
						id:this.localItem.id,
						key : 'company_number',
						value : data.company_number
					}
					
					this.infoService.showLoading();

					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/edit-business-info',change_compno,(response)=> {
						if(response.users.status == "success"){
							var persons = this.localItem;
							persons.company_number = data.company_number
							localStorage.setItem('userInfo',JSON.stringify(persons));
							environment.localItem = persons;
						}
						
						this.infoService.hideLoading();
						
					},(error) => {
						console.log(error);
						this.infoService.hideLoading();
					});
				}
			  }
			]
		});
		alert.present();
	}
	
	editBusinessvatno(){
		let alert = this.alertCtrl.create({
			title: 'Change Vat number',
			inputs: [
			  {
				name: 'vat_number',
				placeholder: 'Vat number',
				type: 'text'
			  }
			],
			buttons: [
			  {
				text: 'Cancel',
				role: 'cancel',
				handler: data => {
				  
				},
				cssClass:'theme-light-btn'
			  },
			  {
				text: 'Submit',
				cssClass:'theme-light-btn',
				handler: data => {
					if (data.vat_number == '') 
						return false;
					
					if(data.vat_number.length > 20){
						let alert_vat_number = this.alertCtrl.create({
							title: 'Change Vat number',
							subTitle: 'Maximum length is 20.',
							buttons: [{
								text: 'OK',
								role: 'cancel',
								cssClass:'alert-button-changeColor'
							}]
						});
						alert_vat_number.present();
						return false;
					}

					var change_vatno ={
						id:this.localItem.id,
						key : 'vat_number',
						value : data.vat_number
					}
					
					this.infoService.showLoading();

					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/edit-business-info',change_vatno,(response)=> {
						if(response.users.status == "success"){
							var persons = this.localItem;
							persons.vat_number = data.vat_number
							localStorage.setItem('userInfo',JSON.stringify(persons));
							environment.localItem = persons;
						}
						
						this.infoService.hideLoading();
						
					},(error) => {
						console.log(error);
						this.infoService.hideLoading();
					});
				}
			  }
			]
		});
		alert.present();
	}
	
	editBusinessAddress(){
		let obj = {
			user_Id: this.localItem.id,
			val : 'Address'
		}
		var modalPage = this.modalCtrl.create('BusinessinfoEditPage',obj,{enableBackdropDismiss:false});
		modalPage.present();
	}
	
	editBusinessmobile(){
		let obj = {
			user_Id: this.localItem.id,
			val : 'Phone'
		}
		var modalPage = this.modalCtrl.create('BusinessinfoEditPage',obj,{enableBackdropDismiss:false});
		modalPage.present();
	}
	
	editPayment(){
		let alert = this.alertCtrl.create({
			title: 'Change PayPal account',
			inputs: [
			  {
				name: 'paypal_email',
				placeholder: 'PayPal Email',
				type: 'email'
			  }
			],
			buttons: [
			  {
				text: 'Cancel',
				role: 'cancel',
				handler: data => {
				  
				},
				cssClass:'theme-light-btn'
			  },
			  {
				text: 'Submit',
				cssClass:'theme-light-btn',
				handler: data => {
					if (data.paypal_email == '') 
						return false;
					
					var pass_data = {
						paypal_email: data.paypal_email
					}
					this.infoService.showLoading();
					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/pay/verify-paypal-email', pass_data, (response) => {
						this.infoService.hideLoading();
						if(response.responseEnvelope.ack == "Failure"){
							let alert1 = this.alertCtrl.create({
								title: 'PayPal verification',
								subTitle: 'Please enter valid PayPal email address.',
								buttons: [{
									text: 'OK',
									role: 'cancel',
									cssClass:'alert-button-changeColor'
								}]
							});
							alert1.present();
						}else{
							this.updatePayPalEmail(data.paypal_email);
						}
					}, (error) => {
						console.log(error);
						
					});
				}
			  }
			]
		});
		alert.present();
	}
	
	updatePayPalEmail(val:any){
		var change_paymentemail ={
			id:this.localItem.id,
			key : 'payment_email',
			value : val
		}
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/edit-business-info',change_paymentemail,(response)=> {
			if(response.users.status == "success"){
				var persons = this.localItem;
				persons.payment_email = val;
				localStorage.setItem('userInfo',JSON.stringify(persons));
				environment.localItem = persons;
			}
		},(error) => {
			console.log(error);
		});
	}
	
	gotoeditProduct(val:any,val1:any){
		let obj = {
			product_id : val,
			product_page : val1
		}
		
		let convert_stringifyobj = JSON.stringify(obj)
		let convert_encodefeedback = btoa(convert_stringifyobj);
		
		this.navCtrl.push('EditProduct',{
			id:convert_encodefeedback
		});
	}
	
	gotospecificProfile(val:any,val1:any){
		if(val1 == "seller"){
			this.navCtrl.push('UserProfilePage',{
				id : val
			});
		}else if(val1 == "buyer"){
			this.navCtrl.push('BuyerProfilePage',{
				id : val
			});
		}
	}
        
        
        gotorelistProduct(val:any,val1:any){
        
        
        var change_status ={
			id:this.localItem.id,
			
			value : val
		}
        this.edit_product_val.id = change_status.value;
        this.edit_product_val.user_id = change_status.id;
        this.edit_product_val.status = 1;
        this.infoService.callHttpFunction_post( environment.serverUrl + 'api/product/relist-product',this.edit_product_val,(response)=> {
                if(response.status == "success"){
                        this.infoService.hideLoading();
                        this.ifproductedit = true;
                        var self_this = this;
                        alert(response.msg);
                        setTimeout(function(){
                                
                                self_this.navCtrl.push('SellerMyAccountPage', {
                id: 'account'
            });
                                
                                self_this.ifproductedit = false;
                        },2500);
                }else{
                        this.editproductResponse = response;
                        $('#dangeralert').removeClass('hide');
                        this.infoService.hideLoading();
                }
        },(error) => {
                console.log(error);
                this.infoService.hideLoading();
        });
        
        
        

                
                
                
                
                
                
	}
        
}
