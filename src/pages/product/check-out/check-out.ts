import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform, AlertController} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { InAppBrowser,InAppBrowserOptions  } from '@ionic-native/in-app-browser';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

declare var $:any;
@IonicPage({
	name:'CheckOutPage',
	segment:'ReviewOrder/:id'
})

@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html',
})

export class CheckOutPage {
    @ViewChild(Content) content: Content;

	public showaddress:boolean = false;
	public retrievedObject:any;
	addressfrm: FormGroup;
	public viewAddData:any;
	public checkOut_data:any;
	public couponCode:any;
	public notSelect:boolean = false;
	public paymentNotselect:boolean = false;
	public trandingImgUrl:any;
	public saveAddress:any = {
		user_id : '',
		ship_name : '',
		mobile : '',
		ship_address : '',
		ship_city : '',
		ship_state : '',
		ship_country : '',
		ship_pincode : '',
		primary_add : 0
	}
	public retrive_codedata:any;
	public data_coupanStore:any;
	public sendmsg:boolean = false; /*public payPal:PayPal,*/
    public getData_decode:any;
    public place_orderData:any;
    public paypal_response:any;
    public showYear:any;
    public localItem:any;
	public gruopSeller:any;
	public userSettings: any = {
		showCurrentLocation: true,
		showSearchButton: false,
		useGoogleGeoApi:true,
		locationIconUrl:"assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
		geoCountryRestriction: ['ae','kw','om','qa','sa']
	};
public paymentdata : any;
public paymentdetails: any;
	constructor(public googleanalytics: GoogleAnalytics,public iab: InAppBrowser,public alertCtrl: AlertController,public plt: Platform,public infoService:InfoService,public fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
		this.addressfrm = fb.group({
			'first_name' : ['', Validators.compose([Validators.required,Validators.minLength(2)])],
			'last_name' : ['', Validators.compose([Validators.required,Validators.minLength(2)])],
			'address1': ['', Validators.compose([Validators.required,Validators.minLength(4)])],
			'address2': '',
			'city': ['', Validators.compose([Validators.required,Validators.minLength(3)])],
			'natinality': '',
			'state': '',
			'zip': '',
			'phoneno': ['+971', Validators.compose([Validators.required,Validators.minLength(10)])],
		});
		localStorage.removeItem('coupanCode');

		if(this.retrive_codedata != null){
			this.data_coupanStore = JSON.parse(this.retrive_codedata);
		}

        this.retrievedObject = localStorage.getItem('userInfo');
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = JSON.parse(this.retrievedObject);
        }
		
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('Checkout');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
			this.userSettings.showCurrentLocation = false;
		}
	}

	ionViewWillEnter(){
		$(document).prop('title','Checkout');
		$('body').removeClass().addClass('Checkout body');
        var d = new Date();
        this.showYear = d.getFullYear();
        $( ".zoomContainer" ).remove();
		
		var convertdecode = atob(this.navParams.data.id);
        this.getData_decode = JSON.parse(convertdecode);
		this.checkoutInfo();

	}
	
	clickToshowtab(val:any){
        $('.showTargetDiv').hide();
        $('#my-account-verticle-tab-div' + val).show();
        $('#my-account-verticle-tab-div' + val).removeClass('d-none');
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
			this.addressfrm.controls['zip'].setValue(postal_code);	
			this.addressfrm.controls['state'].setValue(administrative_area_level_1);	
			this.addressfrm.controls['natinality'].setValue(country);	
			this.addressfrm.controls['city'].setValue(administrative_area_level_2);	
			this.addressfrm.controls['address2'].setValue(sublocality_level_1);	
		}		
    }
	
    checkoutInfo(){
		try{
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/checkout/check-out-info',this.getData_decode,(response)=> {
				if(response.checkout_info.status == "success"){
					this.trandingImgUrl = environment.imageProduct + '/product/';
					this.checkOut_data = response.checkout_info;

					if(response.checkout_info.cart === true){
						this.gruopSeller = (<any>Object).entries(response.checkout_info.product_info);
						var self_this = this;
						
						if(self_this.couponCode != null){
							if(self_this.data_coupanStore.data.code_type == "Flat Discount"){
								self_this.couponCode.total = self_this.checkOut_data.total - self_this.data_coupanStore.data.discount;
								self_this.data_coupanStore.total = self_this.checkOut_data.total - self_this.data_coupanStore.data.discount;
							}else if(self_this.data_coupanStore.data.code_type == "Percentage Discount"){
								self_this.couponCode.total = self_this.checkOut_data.total - ((self_this.checkOut_data.total * self_this.data_coupanStore.data.discount) / 100);
								self_this.data_coupanStore.total = self_this.checkOut_data.total - ((self_this.checkOut_data.total * self_this.data_coupanStore.data.discount) / 100);
							}
						}
						setTimeout(function(){
							for(var i=0;i<response.checkout_info.product_info.businessName.length;i++){
								for(var j=0;j<self_this.gruopSeller[i][1].length;j++){
									$('#inputQuantity-'+self_this.gruopSeller[i][1][j].product_id).editableSelect({ effects: 'default' }).on('hide.editable-select', function(e){
										var up_id = e.target.id.split("-");;
										$('#update-'+up_id[1]).removeClass('d-none');
									});
									$('#inputQuantity-'+self_this.gruopSeller[i][1][j].product_id).val(self_this.gruopSeller[i][1][j].quantity);
								}
							}
						},1000);
					}else{
						var self = this;
						if(response.checkout_info.product_info.make_offer == true){
							$('#inputQuantity').attr('disabled',true);
						}else{
							$('#inputQuantity').editableSelect({ effects: 'default' }).on('hide.editable-select', function (e) {
								setTimeout(function(){
									var hid_qua = $('#hidden_quan').val();
									var act_qua = $('#inputQuantity').val();
									if(parseInt(act_qua) > parseInt(hid_qua)){
										$('#error-quantitymax').removeClass('d-none');
									}else if(parseInt(act_qua) <= 0 || act_qua == '' || act_qua == ' '){
										$('#error-quantitymax').removeClass('d-none');
									}else{
										if(self.data_coupanStore == undefined){
											self.checkOut_data.product_info.quantity = $('#inputQuantity').val();
											var actual_price_actual = self.checkOut_data.product_info.price - (self.checkOut_data.product_info.price * self.checkOut_data.product_info.discount) / 100;
											var data_actual = actual_price_actual * $('#inputQuantity').val();
											self.checkOut_data.total = data_actual;
											self.checkOut_data.product_info.final_price = data_actual;
											$('#error-quantitymax').addClass('d-none');
										}else{
											if(self.data_coupanStore.data.code_type == "Flat Discount"){
												self.checkOut_data.product_info.quantity = $('#inputQuantity').val();
												var actual_price_flat = self.checkOut_data.product_info.price - (self.checkOut_data.product_info.price * self.checkOut_data.product_info.discount) / 100;
												var data_flat = actual_price_flat * $('#inputQuantity').val();
												self.checkOut_data.total = data_flat;
												self.checkOut_data.product_info.final_price = data_flat;
												self.couponCode.total = data_flat - self.data_coupanStore.data.discount;
												self.data_coupanStore.total = data_flat - self.data_coupanStore.data.discount;
												
												$('#error-quantitymax').addClass('d-none');
											}else if(self.data_coupanStore.data.code_type == "Percentage Discount"){
												self.checkOut_data.product_info.quantity = $('#inputQuantity').val();
												var actual_price_Percentage = self.checkOut_data.product_info.price - (self.checkOut_data.product_info.price * self.checkOut_data.product_info.discount) / 100;
												var data_Percentage = actual_price_Percentage * $('#inputQuantity').val();
												self.checkOut_data.total = data_Percentage;
												self.checkOut_data.product_info.final_price = data_Percentage;
												self.couponCode.total = data_Percentage - ((data_Percentage * self.data_coupanStore.data.discount) / 100);
												self.data_coupanStore.total = data_Percentage - ((data_Percentage * self.data_coupanStore.data.discount) / 100);
												$('#error-quantitymax').addClass('d-none');
											}
										}
									}
								},1500);
							});
						}
						$('#inputQuantity').val(response.checkout_info.product_info.quantity);
					}
					if(response.checkout_info.user_info.address == ""){
						this.viewAddress();
					}else{
						this.AddAddress(response.checkout_info.user_info,'add');
					}
				}else{
					this.viewAddress();
				}
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
		}
	}
	
	EditAddress(val:any){
		if(val == "Add"){
			this.showaddress = true;
		}else if(val == "Cancel"){
			this.showaddress = false;
		}
	}
	
	AddAddress(val:any,val1:any){
		try{
			this.infoService.showLoading();
			var userID = JSON.parse(this.retrievedObject);
			this.saveAddress.user_id = userID.id;
			if(val1 == 'AddClick'){
				this.saveAddress.ship_name = val.value.first_name + ' ' + val.value.last_name;
				this.saveAddress.mobile = val.value.phoneno;
				this.saveAddress.ship_address = val.value.address1 + ',' + val.value.address2;
				this.saveAddress.ship_city = val.value.city;
				this.saveAddress.ship_state = val.value.state;
				this.saveAddress.ship_country = val.value.natinality;
				this.saveAddress.ship_pincode = val.value.zip;
				
				if($('#primaryadd').prop('checked') == true){
					this.saveAddress.primary_add = 1;
				}else{
					this.saveAddress.primary_add = 0;
				}
			}else if(val1 == 'add'){
				this.saveAddress.ship_name = val.first_name + ' ' + val.last_name;
				this.saveAddress.mobile = val.mobile_number;
				this.saveAddress.ship_address = val.address;
				this.saveAddress.ship_city = val.city;
				this.saveAddress.ship_state = val.state;
				this.saveAddress.ship_country = val.country;
				this.saveAddress.ship_pincode = val.pincode;
			}
			
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/ship-address/save-ship-address',this.saveAddress,(response)=> {
				if(response.ship_address.status == "success"){
					this.showaddress = false;
					this.viewAddress();
				}else{
					this.showaddress = true;
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
	
	viewAddress(){
		try{
			var userID = JSON.parse(this.retrievedObject);
			var view_address = {
				"user_id":userID.id
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/ship-address/view-ship-address',view_address,(response)=> {
				if(response.ship_address.status == "success"){
					this.viewAddData = response.ship_address;
				}else{
					console.log(response);
				}
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
		}finally{
		}
	}
	
	applyCouponCode(){
		try{
			var userID = JSON.parse(this.retrievedObject);
			var apply_code = {
				"user_id":userID.id,
				"code":$('#inputCode').val(),
				"price":this.checkOut_data.total
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/coupon/apply-coupon-code',apply_code,(response)=> {
				if(response.coupon_code.status == "success"){
					this.couponCode = response.coupon_code;
					localStorage.setItem('coupanCode',JSON.stringify(this.couponCode));
					this.retrive_codedata = JSON.stringify(this.couponCode);
					this.data_coupanStore = JSON.parse(this.retrive_codedata);
				}else {
					this.retrive_codedata = null;
					this.couponCode = response.coupon_code;
				}
			},(error) => {
				console.log(error);
			});
		}catch(Error){
				console.log(Error);
		}
	}

    removeCoupan_Code(){
		var userID = JSON.parse(this.retrievedObject);
		var coupn_data = this.data_coupanStore;
		var remove_code = {
			"user_id":userID.id,
			"id":coupn_data.data.id,
			"code":coupn_data.data.code
		}

		try{
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/coupon/remove-coupon-code',remove_code,(response)=> {
				if(response.coupon_code.status == "success"){
					this.retrive_codedata = null;
					this.couponCode = null;
					localStorage.removeItem('coupanCode');
					this.checkoutInfo();
				}
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
		}
	}

	ConfirmPay(){
		try{
			var userID = JSON.parse(this.retrievedObject);
			var cCode:any,fprice:any,makeOffer:boolean,myofferid:any;

			if(this.data_coupanStore != null){
				cCode = this.data_coupanStore.data.code;
				fprice = this.data_coupanStore.total;
                if(this.checkOut_data.product_info.make_offer == true){
                    makeOffer = true;
                    myofferid = this.checkOut_data.product_info.my_offer_id
                }else {
                    makeOffer = false;
                    myofferid = 0;
                }
			}else{
				if(this.checkOut_data.product_info.make_offer == true){
                    cCode = '';
                    fprice = this.checkOut_data.total;
                    makeOffer = true;
                    myofferid = this.checkOut_data.product_info.my_offer_id
				}else if(this.checkOut_data.product_info.make_bid == true){
                    cCode = '';
                    fprice = this.checkOut_data.total;
                    makeOffer = false;
                    myofferid = 0;
                }else {
                    cCode = '';
                    fprice = this.checkOut_data.total;
                    makeOffer = false;
                    myofferid = 0;
				}
			}
			
			if($('input[type="radio"][name=radio-group]:checked').val() == undefined){
				this.notSelect = true;
			}else if($('input[type="radio"][name=radio-group-pay]:checked').val() == undefined){
				this.paymentNotselect = true;
			}else{
                this.paymentNotselect = false;
                this.notSelect = false;
				if(this.checkOut_data.cart == true){
					this.place_orderData = {
						"user_id": userID.id,
						"cart": "true",
						"shipping_id": $('input[type="radio"][name=radio-group]:checked').val(),
						"coupon_code": cCode,
						"final_price": fprice,
						"seller_id": this.getData_decode.seller_id,
						"order_status": ''
					}
					if($('input[type="radio"][name=radio-group-pay]:checked').val() == 'cash'){
						this.callcashPayment();
					}else{
                        this.callPaypalPayment();
					}
				}else{
					if($('#inputQuantity').val() == 0 || $('#inputQuantity').val() == ''){
						$('#quantity_added').removeClass('d-none');
					}else{
                        var hid_qua = $('#hidden_quan').val();
                        var act_qua = $('#inputQuantity').val();
                        if(parseInt(act_qua) > parseInt(hid_qua)){
                            $('#error-quantitymax').removeClass('d-none');
                        }else if(parseInt(act_qua) <= 0 || act_qua == '' || act_qua == ' ') {
                            $('#error-quantitymax').removeClass('d-none');
                        }else {
                            $('#error-quantitymax').addClass('d-none');
                            $('#quantity_added').addClass('d-none');
                            this.place_orderData = {
                                "user_id": userID.id,
                                "product_id": this.checkOut_data.product_info.id,
                                "quantity": $('#inputQuantity').val(),
                                "specification": this.checkOut_data.product_info.specification,
                                "seller_id": this.checkOut_data.product_info.user_id,
                                "final_price": fprice,
                                "coupon_code": cCode,
                                "shipping_id": $('input[type="radio"][name=radio-group]:checked').val(),
                                "make_offer": makeOffer,
                                "offer_id": myofferid,
                                "order_status": ''
                            }
                            if($('input[type="radio"][name=radio-group-pay]:checked').val() == 'cash'){
                                this.callcashPayment();
                            }else{
                                this.callPaypalPayment();
                            }
                        }
					}
				}				
			}
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
		}
	}

	callPaypalPayment(){



        if(this.checkOut_data.cart == true){
            var str = [];
            var business_name:any,count_discount:any,count_difference:any;
            business_name =(<any>Object).entries(this.checkOut_data.seller);
            if(this.data_coupanStore != null){
                if(this.data_coupanStore.data.code_type == "Percentage Discount") {
                    for(var p = 0;p<this.checkOut_data.seller.businessName.length; p++){
                        count_discount = business_name[p][1].total * this.data_coupanStore.data.discount / 100;
                        count_difference = parseInt(business_name[p][1].total) - count_discount;
                        str.push({
                            "amount": ['100.00'],
                            "email": ['sb-bj3y47982010@personal.example.com']
                        });
                    }
				}else{
                    for(var q = 0;q<this.checkOut_data.seller.businessName.length; q++){
                       count_discount = this.data_coupanStore.data.discount / this.checkOut_data.seller.businessName.length;
						count_difference = parseInt(business_name[q][1].total) - (count_discount * 0.27);
						str.push({
                            "amount": ['100.00'],
                            "email": ['sb-bj3y47982010@personal.example.com']
                        });
                    }
				}
            }else{
                for(var r = 0;r<this.checkOut_data.seller.businessName.length; r++){
                    str.push({
                        "amount": ['100.00'],
                        "email": ['sb-bj3y47982010@personal.example.com']
                    });
                }
			}

			var passdtaCart = {
                "receiver_arr" : str
            }
			
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/pay/paypal',passdtaCart,(response)=> {
                if(response.responseEnvelope.ack == "Success"){
                    localStorage.setItem('checkoutInfo',JSON.stringify(this.place_orderData));
                    localStorage.setItem('KEYPaypal',response.payKey);
                    this.continuePaypal(response.payKey);
                    this.infoService.hideLoading();
				}else{
                    this.paypal_response = response;
                    this.infoService.hideLoading();
				}
            },(error) => {
                console.log(error);
                this.infoService.hideLoading();
            });
        }else{
            var total_price = (this.place_orderData.final_price * 0.27).toFixed(2);
            var receiver_email = this.checkOut_data.product_info.payment_email;
            var passData = [];
            passData.push({
				"amount":['100.00'],
				"email" : ['sb-bj3y47982010@personal.example.com']
			});

            var passdtaBuynow = {
                "receiver_arr" : passData
			}

            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/pay/paypal',passdtaBuynow,(response)=> {
                if(response.responseEnvelope.ack == "Success"){
alert(response.responseEnvelope.ack);
                    localStorage.setItem('checkoutInfo',JSON.stringify(this.place_orderData));
                    localStorage.setItem('KEYPaypal',response.payKey);
                    this.continuePaypal(response.payKey);
                    this.infoService.hideLoading();
                }else{
                    this.paypal_response = response;
                    this.infoService.hideLoading();
                }
            },(error) => {
                console.log(error);
                this.infoService.hideLoading();
            });
		}
	}

    callcashPayment(){
		this.place_orderData.order_status = 'unpaid';
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/checkout/place-order',this.place_orderData,(response)=> {
            if(response.place_order.status == "success"){
                this.retrive_codedata = null;
                this.couponCode = null;
                localStorage.removeItem('coupanCode');
                this.infoService.hideLoading();
                this.navCtrl.push('ThankyouPage',{
                    id:response.place_order.order_id
                });
            }else{
                this.infoService.hideLoading();
            }
        },(error) => {
            console.log(error);
            this.infoService.hideLoading();
        });
	}

	continuePaypal(val:any){
		//open url in inappBrowser (Android,iOS) Mobile app.
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			let target = "_blank";
			let options : InAppBrowserOptions = {
				location : 'yes',//Or 'no' 
				hidden : 'no', //Or  'yes'
				hardwareback : 'no',
				mediaPlaybackRequiresUserAction : 'no',
			};
			const browser = this.iab.create("https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_ap-payment&paykey="+val,target,options);
			browser.on('loadstop').subscribe(event => {
				if(event.url == "http://192.168.1.113:8100/#/ordersuccess/123465895" || event.url == "https://www.dibdaa.com/#/ordersuccess/123465895" || event.url == "https://www.techcronus.com/staging/Dibdaa/www/#/ordersuccess/123465895"){
					browser.close();
					this.navCtrl.push('ThankyouPage',{
						id:'123465895'
					});
				}else if(event.url == "http://192.168.1.113:8100/#/home" || event.url == "https://www.dibdaa.com/#/home" || event.url == "https://www.techcronus.com/staging/Dibdaa/www/#/home"){
					browser.close();
					this.navCtrl.push('HomePage');
				}
			});
		}else{
			location.href = "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_ap-payment&paykey="+val;
		}
	}

	updateCart(val:any,proId:any,proqua:any){
		if(parseInt($('#inputQuantity-'+proId).val()) > parseInt(proqua)){
			setTimeout(function(){
				$('#error-'+proId).removeClass('d-none');	
			},1000);
		}else{
			var cart_update ={
				"id":val,
				"quantity":$('#inputQuantity-'+proId).val()
			}
			$('#error-'+proId).addClass('d-none');
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/cart/update-cart',cart_update,(response)=> {
				this.checkoutInfo();
			},(error) => {
				console.log(error);
			});
		}
	}
	
	public setSellerId:any;
	public setProductId:any;
	checkmessage(val:any,val_sellerId:any){
		if(val == "cancel"){
			this.sendmsg = false;
		}else{
			this.sendmsg = true;
			this.setSellerId = val_sellerId;
		}
	}
	
	sendmessage(){
		var userID_msg = JSON.parse(this.retrievedObject);
		var sndMessage:any;
        if(this.checkOut_data.cart == true){

            sndMessage = {
                sender_id : userID_msg.id,
                receiver_id : $('.allcategories:last#productID').children(":selected").attr("id"),
                product_id : $('.allcategories:last#productID').val(),
                message : $('#sndmsgtext').val()
            }

            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/send-message',sndMessage,(response)=> {
                if(response.message.status == "success"){
                    this.infoService.hideLoading();
					let alert1 = this.alertCtrl.create({
						title: 'Message to seller',
						subTitle: response.message.msg,
						buttons: [{
							text: 'OK',
							role: 'cancel',
							cssClass:'alert-button-changeColor'
						}]
					});
					alert1.present();
                    this.sendmsg = false;
                }else{
                    this.sendmsg = false;
                    this.infoService.hideLoading();
                }
            },(error) => {
                console.log(error);
            });
        }else{
            sndMessage = {
                sender_id : userID_msg.id,
                receiver_id : this.checkOut_data.product_info.user_id,
                product_id : this.getData_decode.product_id,
                message : $('#sndmsgtext').val()
            }
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/send-message',sndMessage,(response)=> {
                if(response.message.status == "success"){
					let alert2 = this.alertCtrl.create({
						title: 'Message to seller',
						subTitle: response.message.msg,
						buttons: [{
							text: 'OK',
							role: 'cancel',
							cssClass:'alert-button-changeColor'
						}]
					});
					alert2.present();
                    this.infoService.hideLoading();
                    this.sendmsg = false;
                }else{
                    this.sendmsg = false;
                    this.infoService.hideLoading();
                }
            },(error) => {
                console.log(error);
            });
		}
	}
	
	showPaypalNote(val:any){
		if(val == "paypal"){
			$('.showPaymentConvertation').removeClass('d-none');
		}else{
			$('.showPaymentConvertation').addClass('d-none');
		}
	}
}
