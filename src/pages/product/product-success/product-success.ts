import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, Platform,LoadingController,AlertController} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PhotoProvider } from '../../../providers/photo/photo';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

declare var $:any;
declare var uploadcare:any;
declare var jQuery:any;
@IonicPage({
	name:'SuccessProductPage',
})
@Component({
	selector: 'page-product-success',
	templateUrl: 'product-Success.html',
})
export class SuccessProductPage {
	@ViewChild(Content) content: Content;
	public show_category:any;
	public sub_catText:any = "Not";
	public ifproductAdded:boolean = false;
	public retrievedObject = localStorage.getItem('userInfo');
	public localItem:any;
	public ItemSpecificationData:any;
	public verificationResponsebusiness:any = null;
	public season_dealActive:any;
	public loader:any;
	public add_product_val = {
		id:'',
		user_id:'',
		title:'',
		subtitle:'',
		category_id:'',
		isbn:'0',
		settype_id:0,
		brand_id:0,
		p_condition:'',
		daily_deal:'',
		condition_description:'',
		selling_type:'',
		duration:0,
		quantity:0,
		payment_opt:'',
		paypal_email:'',
		min_price:0,
		price:0,
		max_price:0,
		return_opt:'',
		product_address:'',
		warrenty:'',
		shipment_type:'',
		delivery_days:'',
		specification:[],
		ship_to:'',
		photos:[],
		secondary_cat_ids:[],
		make_offer:0,
		seller_fee:0,
		return_policy:'',
		deals_days:0,
		season_deal:'No',
		fees_details:{},
		discount:0,
		renew : '',
		removeImages:[],
		status:8,
		schedule_date:'',
		from_product:'',
		reset_photo:false,
		mobile_device:false,
		season_day:0,
		sq: {}
	}
	public otherPayment:boolean = false;
	public show_feesData:any;
	public featureitem:any;
	public seasondealfees:any;
	public subTotalFees:any = 0;
	public daiydealsFees:any = 0;
	public sellseasonFees:any = 0;
	public checkbuyitnowfees:any;
	public categoryFees:any = 0;
	public showYear:any = 0;
	public makeoffertextbox:boolean = false;
	public showsellDealDays:boolean = false;
	loginForm : FormGroup;
	public checkinsertaionfees:any;
	public setCustomspecification:any = {
		Color:'',
		Size:''
	};
	public userSettings: any = {
		showCurrentLocation: true,
		showSearchButton: false,
		useGoogleGeoApi:true,
		locationIconUrl:"assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
		geoCountryRestriction: ['ae','kw','om','qa','sa']
	};
	public size_customQuantity = [];
	public config = {
		removeButtons : 'ImageButton,Flash,CreatePlaceholder,HorizontalRule,Smiley,PageBreak,Iframe,InsertPre,Form,Checkbox,Radio,TextField,Textarea,Select,Button,HiddenField,NewPage,Templates,Find,Save,Print,Replace,SpellChecker,Preview,About,Maximize,ShowBlocks'
	}

	public arr:any;
	constructor(public googleanalytics: GoogleAnalytics,public alertCtrl: AlertController,public loading: LoadingController,public _PHOTO: PhotoProvider,public plt: Platform,public fb: FormBuilder,public infoService:InfoService,public navCtrl: NavController) {
		if(this.retrievedObject == null || this.retrievedObject == ''){
			this.localItem = null;
		}else{
			this.localItem = JSON.parse(this.retrievedObject);
		}

		this.loginForm = fb.group({
			'Item_Description' : [null, Validators.compose([Validators.required,Validators.minLength(6)])],
		});
		
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('Add Product');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
			
			this.userSettings.showCurrentLocation = false;
		}
	}

	ionViewWillEnter(){
		$('body').removeClass().addClass('SuccessProduct body');
		$(document).prop('title','Add your listing');
		$( ".zoomContainer" ).remove();
		$(".searchanythingform").trigger("reset");
		this.showYear = new Date();

		var d = new Date();
		var end = new Date(d.getTime() + 20 * 24 * 60 * 60 * 1000);

		this.arr = new Array();
		var dt = new Date(d.getTime() + 1 * 24 * 60 * 60 * 1000);
		while (dt <= end) {
			this.arr.push(new Date(dt));
			dt.setDate(dt.getDate() + 1);
		}

		/*Image Widget crop Start*/
		var self = this;
		$('[role=uploadcare-uploader]').each(function() {
			$('.uploadcare--tab__title').text('Edit this image?');
			var input = $(this);
			if ( ! input.data('minSize') && ! input.data('maxSize')) {
			  return;
			}
			var widget = uploadcare.Widget(input);
			widget.validators.push(self.fileSizeLimit(input.data('minSize'),input.data('maxSize')));
		});

		//Display Images
		var singleWidget = uploadcare.MultipleWidget('[role=uploadcare-uploader]');
		singleWidget.onUploadComplete(function(info) {
			$('.image-preview-single').empty();
			self.add_product_val.photos.length = 0;
			var count_img=0;

			for(var img=0;img<info.count;img++){
				self.convertFileToDataURLviaFileReader(info.cdnUrl+'nth/'+img+'/',(fileEntry) => {
					count_img++;
					$('#image_preview').append("<div class='col-lg-2 col-sm-6 col-md-3 col-6 p-2'><img class='img-fluid add-product-img' src='" + fileEntry + "'><input type='hidden' value='"+fileEntry+"' class='hidde_val'></div>");
					self.add_product_val.photos.push(fileEntry);
					if(info.count == count_img){
						singleWidget.value(info);
						setTimeout(function (){
							self.autoSaveProduct('photoupload');
						},500);
					}
				});
			}
			$( function() {
				$( "#image_preview" ).sortable();
				$( "#image_preview" ).disableSelection();
			});
		});

		/* Image Widget crop End */
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

	ionViewDidLoad() {
		try{
			if(this.localItem == null){
				this.navCtrl.push('LoginPage', {
					id: 'login'
				});
			}else{
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/category/view-category','',(response)=> {
					this.show_category = response.categories;
					this.infoService.hideLoading();
					this.showFees();
				},(error) => {
					console.log(error);
				});
			}
		}catch(Error){
			console.log(Error);
		}
	}

	//Convert To Base64
	convertFileToDataURLviaFileReader(url, callback) {
	 var xhr = new XMLHttpRequest();
	  xhr.onload = function() {
		var reader = new FileReader();
		reader.onloadend = function() {
		  callback(reader.result);
		}
		reader.readAsDataURL(xhr.response);
	  };
	  xhr.open('GET', url);
	  xhr.responseType = 'blob';
	  xhr.send();
	  console.log(url);

	}

	/*Image Widget crop Check File Size */
	fileSizeLimit(min:any, max:any) {
	  return function(fileInfo) {
		if (fileInfo.size === null) {
		  return;
		}
		if (min && fileInfo.size < min) {
		  throw new Error("fileMinimalSize");
		}
		if (max && fileInfo.size > max) {
		  throw new Error("fileMaximumSize");
		}
	  };
	}

	//For Mobile
	selectImage(){
	  this._PHOTO.selectImage().then((data:any) =>{
		  var self= this;
		if($('.hidde_val').length < 11) {
			$('#image_preview').append("<div class='col-lg-3 col-sm-6 col-md-4 col-sm-12 col-8 p-2'><span class='close'>&times;</span><img class='img-fluid add-product-img' src='" + data + "'><input type='hidden' value='"+data+"' class='hidde_val'></div>");
			self.add_product_val.photos.push(data);
			setTimeout(function (){
				self.autoSaveProduct('photoupload');
			},1000);
			$('.close').on('click',function(){
				$(this).parent().remove();
			});
		}
	  }).catch((error:any) =>{
		 console.log(error);
	  });
	}

	autoCompleteCallback1(selectedData:any) {
		if(selectedData.response == true){
			this.add_product_val.product_address = selectedData.data.description;
			this.autoSaveProduct('productAddress');
		}else{
			this.add_product_val.product_address = '';
			this.autoSaveProduct('productAddress');
		}
    }

	showFees(){
		var seller_fees = {
			user_id : this.localItem.id
		}
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/setting/seller-fees',seller_fees,(response)=> {
			this.show_feesData = response.setting;
			this.featureitem = (<any>Object).entries(response.setting.feature_item);
			this.seasondealfees = (<any>Object).entries(response.setting.season_deal_fee);
			this.checkinsertaionfees = response.setting.data.insertion_fee;
			this.checkbuyitnowfees = response.setting.data.buyitnow_fee;
			var self = this;
			setTimeout(function (){
				self.calculateFees();
			},3000);

		},(error) => {
			console.log(error);
		});
	}

	showDailyfees(val:any){
		if(val == "" || val == 'No' || val == 'Yes')
			this.daiydealsFees = 0;
		else
			this.daiydealsFees = parseFloat(val);

		this.calculateFees();
		this.autoSaveProduct('Featured Deals');
	}

	showsellDayfees(val:any){
		if(val == "" || val == null)
			this.sellseasonFees = 0;
		else
			this.sellseasonFees = parseFloat(val);

		this.calculateFees();
		this.autoSaveProduct('Season Deals');
	}

	showsubtotalFees(){
		if($('#suntitle_text').val() == '')
			this.subTotalFees = 0;
		else
			this.subTotalFees = parseFloat(this.show_feesData.data.subtitle_fee);

		this.calculateFees();
		this.autoSaveProduct('subTitle');
	}

	showcategoryFees(){
		var price_cal = parseFloat($('#format_price').val());

		var singlecat = parseFloat($('#subcategories_select').children(":selected").attr("id"));

		if(price_cal > 0.01 && price_cal <= 3.75){
			this.show_feesData.data.insertion_fee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + 0;
		}else if(price_cal > 3.75 && price_cal <= 35){
			this.show_feesData.data.insertion_fee = parseFloat(this.checkbuyitnowfees) +  parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.second);
		}else if(price_cal > 35 && price_cal <= 90){
			this.show_feesData.data.insertion_fee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.third);
		}else if(price_cal > 90 && price_cal <= 180){
			this.show_feesData.data.insertion_fee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.four);
		}else if(price_cal > 180 && price_cal <= 750){
			this.show_feesData.data.insertion_fee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.five);
		}else if(price_cal > 750){
			this.show_feesData.data.insertion_fee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.six);
		}

		if(isNaN(singlecat) && isNaN(price_cal))
			this.categoryFees = 0;
		else if(isNaN(singlecat))
			this.categoryFees = 0;
		else if(isNaN(price_cal))
			this.categoryFees = 0;
		else{
			this.autoSaveProduct('price');
			var total_price = ((singlecat * price_cal) / 100);
			this.categoryFees = total_price;

		}
		this.calculateFees();

	}

	calculateFees(){
		var total:any;
		var insertionfee = parseFloat(this.show_feesData.data.insertion_fee);
		total = insertionfee + this.daiydealsFees + this.subTotalFees + this.categoryFees + this.sellseasonFees;
		this.add_product_val.seller_fee = total;
	}

	disableText(){
		if($('.paypal-checkbox:last#paypal_check').prop('checked') == true){
			$('.receiving-payment-email:last#paypal_text').prop("disabled", false);
			$('.showPaypaldiv:last').removeClass('d-none');
		}else{
			$('.receiving-payment-email:last#paypal_text').prop("disabled", true);
			$('.showPaypaldiv:last').addClass('d-none');
		}
	}

	onBlur(val:any){
		if($('#Item_Description').val().length <= 0)
			return false;

		this.autoSaveProduct('itemDesc');
	}

	addProduct(){
		try{
			this.add_product_val.user_id = this.localItem.id;
			if(this.localItem.role == "buyer"){
				$('#buyerError').removeClass('hide');
			}else{
				$('#buyerError').addClass('hide');
				if($('.hidde_val').length <= 0){
					$('#dangeralert').removeClass('hide');
				}else{
					$('#dangeralert').addClass('hide');
					var fields = $( "#Item_specifics" ).serializeArray();
					var str_array = {},color:any = [],size = [],functions = [],finish = [] ,shade_color = [];

					for(var i=0;i<fields.length;i++){
						if(fields[i].name == 'Color')
							color.push(fields[i].value);

						if(fields[i].name == 'Size')
							size.push(fields[i].value);

						if(fields[i].name == 'Functions')
							functions.push(fields[i].value);

						if(fields[i].name == 'Finish')
							finish.push(fields[i].value);

						if(fields[i].name == 'Shade_Color')
							shade_color.push(fields[i].value);

						str_array[fields[i].name] = [fields[i].value];
					}

					if(color.length >= 0) {
						str_array['Color'] = color;
					}
					if(size.length >= 0) {
						str_array['Size'] = size;
					}
					if(functions.length >= 0) {
						str_array['Functions'] = functions;
					}
					if(finish.length >= 0) {
						str_array['Finish'] = finish;
					}
					if(shade_color.length > 0) {
						str_array['Shade_Color'] = shade_color;
					}

					this.add_product_val.title = $('#main_title_text').val();
					this.add_product_val.subtitle = $('#suntitle_text').val();
					this.add_product_val.category_id = $('#subcategories_select').val();
					this.add_product_val.p_condition = $('#condition_select').val();
					if($('#user_time_zone').val() == ''){
						this.add_product_val.isbn = '0';
					}else{
						this.add_product_val.isbn = $('#upc_isbn').val();
					}

					if($('input[name="payment_opt"]:checked').length == 0){
						$('.Payment_Opt').removeClass('d-none');
						return;
					}else{
						$('.Payment_Opt').addClass('d-none');
					}

					if ($('input[name="shipment_type"]:checked').length == 0) {
						$('.ShipmentSelectalert').removeClass('d-none');
						return;
					}else{
						$('.ShipmentSelectalert').addClass('d-none');
					}

					if($('#daily_deal').val() == 'Yes'){
						let replaceday:any = 0;
						let getnumber:any = 0;

						if($('#Format').val() == "Auction style"){
							if($("#daily_dealDay option:selected").text() == "1 Day"){
								replaceday = $("#daily_dealDay option:selected").text();
								getnumber = replaceday.replace('Day','');
								if(parseInt(getnumber) > parseInt($('#Duration').val())){
									$('.duration_future').removeClass('d-none');
									return;
								}else{
									$('.duration_future').addClass('d-none');
								}
							}else{
								replaceday = $("#daily_dealDay option:selected").text();
								getnumber = replaceday.replace('Days','');
								if(parseInt(getnumber) > parseInt($('#Duration').val())){
									$('.duration_future').removeClass('d-none');
									return;
								}else{
									$('.duration_future').addClass('d-none');
								}
							}
						}else{
							if($("#daily_dealDay option:selected").text() == "1 Day"){
								replaceday = $("#daily_dealDay option:selected").text();
								getnumber = replaceday.replace('Day','');
								if(parseInt(getnumber) > parseInt($('#Duration1').val())){
									$('.duration_future').removeClass('d-none');
									return;
								}else{
									$('.duration_future').addClass('d-none');
								}
							}else{
								replaceday = $("#daily_dealDay option:selected").text();
								getnumber = replaceday.replace('Days','');
								if(parseInt(getnumber) > parseInt($('#Duration1').val())){
									$('.duration_future').removeClass('d-none');
									return;
								}else{
									$('.duration_future').addClass('d-none');
								}
							}
						}
					}

					if($('#Format').val() == "Auction style"){
						if(parseInt($('#format_price').val()) < parseInt($('#min_price').val())){
							$('.productMSG_buyitprice').removeClass('d-none');
							return;
						}else{
							$('.productMSG_buyitprice').addClass('d-none');
						}
					}

					var dt = new Date();
					var checkTime:any;

					if($('#Format').val() == "Auction style"){
						checkTime = $('.selectOptions#startDate').val() + " " + $('.selectOptions#startTime').val() + ":" + $('.selectOptions#stTimeMinute').val() + ":" +"00";
						if($('input[type=radio][name=schldlisting]:checked').val() == 'Yes'){
							if(new Date(checkTime) > dt){
								$('.Scheduleonstart').addClass('d-none');
							}else{
								$('.Scheduleonstart').removeClass('d-none');
								return;
							}
						}
					}else{
						checkTime = $('.selectOptions#startDate_fixed').val() + " " + $('.selectOptions#startTime_fixed').val() + ":" + $('.selectOptions#stTimeMinute_fixed').val() + ":" +"00";
						if($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'Yes'){
							if(new Date(checkTime) > dt){
								$('.Scheduleonstart').addClass('d-none');
							}else{
								$('.Scheduleonstart').removeClass('d-none');
								return;
							}
						}
					}

					if(this.add_product_val.product_address == '' && $('#search_places').val() == ''){
						$('.product_address').removeClass('d-none');
						return;
					}else{
						$('.product_address').addClass('d-none');
					}

					if($('#discountval').val() == ""){
						this.add_product_val.discount = 0;
					}else{
						this.add_product_val.discount = $('#discountval').val();
					}

					this.add_product_val.daily_deal = $('#daily_deal').val();

					if($('#daily_deal').val() == 'Yes')
						this.add_product_val.deals_days = $('#daily_dealDay').children(":selected").attr("id");

					if($('#Season_deals').val() == 'Yes')
						this.add_product_val.season_day = $('#Season_dealsDay').children(":selected").attr("id");

					this.add_product_val.condition_description = $('#comment').val();

					if($('#Format').val() == "Auction style"){
						this.add_product_val.min_price = $('#min_price').val();

						if($('#format_price').val() != '')
							this.add_product_val.price = $('#format_price').val();

						if($('#max_price').val() != '')
							this.add_product_val.max_price = $('#max_price').val();

						if($('#Duration').val() != '')
							this.add_product_val.duration = $('#Duration').val();

						this.add_product_val.quantity = $('#dis_id').val();
						this.add_product_val.renew = 'No';
					}else if ($('#Format').val() == "Fixed price"){
						this.add_product_val.price = $('#format_price').val();
						this.add_product_val.quantity = $('#quantity').val();
						this.add_product_val.duration = $('#Duration1').val();
						this.add_product_val.renew = $('#Duration_selection').val();
						if($('#BestOffer').prop('checked') == true){
							this.add_product_val.make_offer = 1;

							if($('#minprice').val() != '')
								this.add_product_val.min_price = $('#minprice').val();

							if($('#maxprice').val() != '')
								this.add_product_val.max_price = $('#maxprice').val();
						}
					}

					this.add_product_val.selling_type = $('#Format').val();

					if($('#paypal_check').prop('checked') == true){
						this.add_product_val.paypal_email = $('#paypal_text').val();
					}

					if($('#return-accepted').prop('checked') == true){
						this.add_product_val.return_opt = $('#itemReturnedWithin').val();
						this.add_product_val.return_policy = $('#returnpolicy').val();
						this.add_product_val.ship_to = $('#returnby').val();
					}else {
						this.add_product_val.return_opt = 'No';
						this.add_product_val.ship_to = '';
					}

					this.add_product_val.product_address = $('#area_community').val() + ' , ' + $('#search_places').val();

					this.add_product_val.delivery_days = $('#delivery_days').val();

					this.add_product_val.specification.length = 0;
					this.add_product_val.specification.push(str_array);
					this.add_product_val.season_deal = $('#Season_deals').val();

					var val_payment = [];
					$('input[type=checkbox][name=payment_opt]:checked').each(function(i){
						val_payment[i] = $(this).val();
					});

					var val_shipment = [];
					$('input[type=checkbox][name=shipment_type]:checked').each(function(i,field){
						if($(this).val() == "Other")
							val_shipment[i] = $('#OtherShipment').val();
						else
							val_shipment[i] = $(this).val();
					});

					this.add_product_val.payment_opt = val_payment.join(",");
					this.add_product_val.shipment_type = val_shipment.join(",");

					if($('#categories_second').val() != '')
						this.add_product_val.secondary_cat_ids = $('#categories_second').val();
					else
						this.add_product_val.secondary_cat_ids.length = 0;

					var fees_details1 = {};
					fees_details1['categories_fees'] = [this.categoryFees];
					fees_details1['insertion_fees'] = [this.show_feesData.data.insertion_fee];
					fees_details1['buyitnow_fees'] = [this.show_feesData.data.buyitnow_fee];

					var Featured_item = [];

					if($('#daily_deal').val() == 'Yes'){
						Featured_item.push($('#daily_dealDay option:selected').text());
						Featured_item.push(this.daiydealsFees);
					}else{
						Featured_item.push(0);
						Featured_item.push(0);
					}

					var seasondeal_dys = [];
					if($('#Season_deals').val() == 'Yes'){
						seasondeal_dys.push($('#Season_dealsDay option:selected').text());
						seasondeal_dys.push(this.sellseasonFees);
					}else{
						seasondeal_dys.push(0);
						seasondeal_dys.push(0);
					}

					fees_details1['featured_fees'] = Featured_item;
					fees_details1['season_fees'] = seasondeal_dys;
					this.add_product_val.fees_details = fees_details1;

					if($('#Format').val() == "Auction style"){
						if($('input[type=radio][name=schldlisting]:checked').val() == 'No'){
							this.add_product_val.schedule_date = '';
						}else{
							var getStartDate = $('.selectOptions#startDate').val();
							var getStartTime = $('.selectOptions#startTime').val();
							var getStartMinute = $('.selectOptions#stTimeMinute').val();
							this.add_product_val.schedule_date = getStartDate+' '+getStartTime+':'+getStartMinute+':'+'30';
						}
					}else{
						if($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'No'){
							this.add_product_val.schedule_date = '';
						}else{
							var getStartDate_fixed = $('.selectOptions#startDate_fixed').val();
							var getStartTime_fixed = $('.selectOptions#startTime_fixed').val();
							var getStartMinute_fixed = $('.selectOptions#stTimeMinute_fixed').val();
							this.add_product_val.schedule_date = getStartDate_fixed+' '+getStartTime_fixed+':'+getStartMinute_fixed+':'+'30';
						}
					}

					if(size.length > 0){
						if($('#Format').val() != "Auction style"){
							let taskObj = {};let taskArray = []; let tasktotalCount = 0;
							$("input[name=custom_sizeQun]").each(function() {
								if($(this).val() != ''){
									taskObj[$(this).attr('id')] = $(this).val();
									taskArray.push($(this).val());
									tasktotalCount+= parseInt($(this).val());
								}
							});

							this.add_product_val.sq = taskObj;

							if(this.size_customQuantity.length != taskArray.length){
								$('.productMSG_quantysize').removeClass('d-none');
								return false;
							}else{
								$('.productMSG_quantysize').addClass('d-none');
							}

							if(this.add_product_val.quantity != tasktotalCount){
								$('.productMSG_quantitygreater').html('You enter quantity is ' + '&nbsp;' + this.add_product_val.quantity + ' ' + 'but actual Custom Item specifications quantity total is' + ' ' + tasktotalCount + '.Please update quantity');
								return false;
							}else{
								$('.productMSG_quantitygreater').html('');
							}
						}
					}

					this.add_product_val.status = 2;
					this.add_product_val.from_product = 'ADD_PRODUCT';

					if($('#paypal_check').prop('checked') == true) {
						if($('.receiving-payment-email:last#paypal_text').val() == this.localItem.payment_email){
							if($('#Format').val() == "Auction style"){
								if(this.add_product_val.max_price <= parseInt($('#min_price').val()) && this.add_product_val.max_price != 0){
									$('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
								}else{
									$('.Maxprice:last#Maxprice').text('');
									this.infoService.showLoading();
									this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.add_product_val,(response)=> {
										if(response.status == "success"){
											this.ifproductAdded = true;
											this.infoService.hideLoading();
										}else{
											this.infoService.hideLoading();
											$('.addProduct-errorMessage').removeClass('d-none');
											$('.addProduct-errorMessage').text(response.msg);
										}
									},(error) => {
										console.log(error);
										$('.addProduct-errorMessage').removeClass('d-none');
										$('.addProduct-errorMessage').text(error);
										this.infoService.hideLoading();
									});
								}
							}else{
								if($('#BestOffer').prop('checked') == true){
									if(this.add_product_val.max_price <= parseInt($('#minprice').val()) && this.add_product_val.max_price != 0){
										$('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
									}else{
										$('.Maxprice:last#Maxpriceoffer').text('');
										this.infoService.showLoading();
										this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.add_product_val,(response)=> {
											if(response.status == "success"){
												this.ifproductAdded = true;
												this.infoService.hideLoading();
											}else{
												this.infoService.hideLoading();
												$('.addProduct-errorMessage').removeClass('d-none');
												$('.addProduct-errorMessage').text(response.msg);
											}
										},(error) => {
											console.log(error);
											this.infoService.hideLoading();
											$('.addProduct-errorMessage').removeClass('d-none');
											$('.addProduct-errorMessage').text(error);
										});
									}
								}else{
									$('.Maxprice:last#Maxprice').text('');
									this.infoService.showLoading();
									this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.add_product_val,(response)=> {
										if(response.status == "success"){
											this.ifproductAdded = true;
											this.infoService.hideLoading();
										}else{
											this.infoService.hideLoading();
											$('.addProduct-errorMessage').removeClass('d-none');
											$('.addProduct-errorMessage').text(response.msg);
										}
									},(error) => {
										console.log(error);
										this.infoService.hideLoading();
										$('.addProduct-errorMessage').removeClass('d-none');
										$('.addProduct-errorMessage').text(error);
									});
								}
							}
						}else if (this.verificationResponsebusiness == null || this.verificationResponsebusiness.responseEnvelope.ack == 'Failure') {

						} else {
							if($('#Format').val() == "Auction style"){
								if(this.add_product_val.max_price <= parseInt($('#min_price').val()) && this.add_product_val.max_price != 0){
									$('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
								}else{
									$('.Maxprice:last#Maxprice').text('');
									this.infoService.showLoading();
									this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.add_product_val,(response)=> {
										if(response.status == "success"){
											this.ifproductAdded = true;
											this.infoService.hideLoading();
										}else{
											this.infoService.hideLoading();
											$('.addProduct-errorMessage').removeClass('d-none');
											$('.addProduct-errorMessage').text(response.msg);
										}
									},(error) => {
										console.log(error);
										this.infoService.hideLoading();
										$('.addProduct-errorMessage').removeClass('d-none');
										$('.addProduct-errorMessage').text(error);
									});
								}
							}else{
								if($('#BestOffer').prop('checked') == true){
									if(this.add_product_val.max_price <= parseInt($('#minprice').val()) && this.add_product_val.max_price != 0){
										$('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
									}else{
										$('.Maxprice:last#Maxpriceoffer').text('');
										this.infoService.showLoading();
										this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.add_product_val,(response)=> {
											if(response.status == "success"){
												this.ifproductAdded = true;
												this.infoService.hideLoading();
											}else{
												this.infoService.hideLoading();
												$('.addProduct-errorMessage').removeClass('d-none');
												$('.addProduct-errorMessage').text(response.msg);
											}
										},(error) => {
											console.log(error);
											this.infoService.hideLoading();
											$('.addProduct-errorMessage').removeClass('d-none');
											$('.addProduct-errorMessage').text(error);
										});
									}
								}else{
									$('.Maxprice:last#Maxprice').text('');
									this.infoService.showLoading();
									this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.add_product_val,(response)=> {
										if(response.status == "success"){
											this.ifproductAdded = true;
											this.infoService.hideLoading();

										}else{
											this.infoService.hideLoading();
											$('.addProduct-errorMessage').removeClass('d-none');
											$('.addProduct-errorMessage').text(response.msg);
										}
									},(error) => {
										console.log(error);
										this.infoService.hideLoading();
										$('.addProduct-errorMessage').removeClass('d-none');
										$('.addProduct-errorMessage').text(error);
									});
								}
							}
						}
					}else{
						if($('#Format').val() == "Auction style"){
							if(this.add_product_val.max_price <= parseInt($('#min_price').val()) && this.add_product_val.max_price != 0){
								$('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
							}else{
								$('.Maxprice:last#Maxprice').text('');
								this.infoService.showLoading();
								this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.add_product_val,(response)=> {
									if(response.status == "success"){
										this.ifproductAdded = true;
										this.infoService.hideLoading();
									}else{
										this.infoService.hideLoading();
										$('.addProduct-errorMessage').removeClass('d-none');
										$('.addProduct-errorMessage').text(response.msg);
									}
								},(error) => {
									console.log(error);
									this.infoService.hideLoading();
									$('.addProduct-errorMessage').removeClass('d-none');
									$('.addProduct-errorMessage').text(error);
								});
							}
						}else{
							if($('#BestOffer').prop('checked') == true){
								if(this.add_product_val.max_price <= parseInt($('#minprice').val()) && this.add_product_val.max_price != 0){
									$('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
								}else{
									$('.Maxprice:last#Maxpriceoffer').text('');
									this.infoService.showLoading();
									this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.add_product_val,(response)=> {
										if(response.status == "success"){
											this.ifproductAdded = true;
											this.infoService.hideLoading();
										}else{
											this.infoService.hideLoading();
											$('.addProduct-errorMessage').removeClass('d-none');
											$('.addProduct-errorMessage').text(response.msg);
										}
									},(error) => {
										console.log(error);
										this.infoService.hideLoading();
										$('.addProduct-errorMessage').removeClass('d-none');
										$('.addProduct-errorMessage').text(error);
									});
								}
							}else{
								$('.Maxprice:last#Maxprice').text('');
								this.infoService.showLoading();
								this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.add_product_val,(response)=> {
									if(response.status == "success"){
										this.ifproductAdded = true;
										this.infoService.hideLoading();
									}else{
										this.infoService.hideLoading();
										$('.addProduct-errorMessage').removeClass('d-none');
										$('.addProduct-errorMessage').text(response.msg);
									}
								},(error) => {
									console.log(error);
									this.infoService.hideLoading();
									$('.addProduct-errorMessage').removeClass('d-none');
									$('.addProduct-errorMessage').text(error);
								});
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

	closeDiv_Delete(){
		$('#dangeralert').addClass('hide');
	}

	showSpec(val:any){
		$('#categories_second option').show();
		$('#categories_second option[value="'+val+'"]').hide();
		try{
			var show_itemSpec = {
				category_id:val
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/view-specification',show_itemSpec,(response)=> {
				if(response.specification.data.length > 0 && response.specification.status == "success"){
					this.sub_catText = $("#subcategories_select option:selected").text();
					this.ItemSpecificationData = response.specification.data[0];
					this.setCustomspecification.Color = '';
					this.setCustomspecification.Size = '';
					for(var sp=0;sp<response.specification.data[0].specification.length;sp++){
						if(response.specification.data[0].specification[sp].type == "3"){
							if(response.specification.data[0].specification[sp].label == "Color"){
								this.setCustomspecification.Color = response.specification.data[0].specification[sp].value;
							}
							if(response.specification.data[0].specification[sp].label == "Size"){
								this.setCustomspecification.Size = response.specification.data[0].specification[sp].value;
							}
						}
					}
					this.showcategoryFees();
					this.autoSaveProduct('primarycategory');
				}else {
					this.sub_catText = "Not";
					this.showcategoryFees();
					this.autoSaveProduct('primarycategory');
				}
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
		}
	}

	other_Payment(val:any){
		if(val == "shipment_type") {
			if ($('#Other').prop('checked') == true) {
				this.otherPayment = true;
			} else {
				this.otherPayment = false;
			}
		}else if(val == "BestOffer") {
			if ($('#BestOffer').prop('checked') == true) {
				this.makeoffertextbox = true;
			} else {
				this.makeoffertextbox = false;
			}
		}
	}

	resetForm(){
		$('#image_preview').empty();
		(<any>document).getElementById("add-prosuct").reset();
		this.sub_catText = "Not";
		this.daiydealsFees = 0;
		this.subTotalFees = 0;
		this.categoryFees = 0;
		this.sellseasonFees = 0;
		this.add_product_val.seller_fee = 0.00;
		localStorage.removeItem('image');
		localStorage.removeItem('previeProduct');
		$('.hideRigthCircle:last').addClass('d-none');
	}

	previewData(){
		this.add_product_val.user_id = this.localItem.id;

		var self = this;
		self.add_product_val.photos.length = 0;
		$('.hidde_val').each(function() {
			self.add_product_val.photos.push(this.value);
		});

		if(this.add_product_val.photos.length <= 0){
			$('#dangeralert').removeClass('hide');
		}else{
			$('#dangeralert').addClass('hide');
			var fields = $( "#Item_specifics" ).serializeArray();

			var str_array = {},color:any = [],size = [],functions = [],finish = [] ,shade_color = [];

			for(var i=0;i<fields.length;i++){
				if(fields[i].name == 'Color')
					color.push(fields[i].value);

				if(fields[i].name == 'Size')
					size.push(fields[i].value);

				if(fields[i].name == 'Functions')
					functions.push(fields[i].value);

				if(fields[i].name == 'Finish')
					finish.push(fields[i].value);

				if(fields[i].name == 'Shade_Color')
					shade_color.push(fields[i].value);

				str_array[fields[i].name] = [fields[i].value]; //Main
			}

			if(color.length >= 0) {
				str_array['Color'] = color;
			}

			if(size.length >= 0) {
				str_array['Size'] = size;
			}

			if(functions.length >= 0) {
				str_array['Functions'] = functions;
			}

			if(finish.length >= 0) {
				str_array['Finish'] = finish;
			}

			if(shade_color.length > 0) {
				str_array['Shade_Color'] = shade_color;
			}

			this.add_product_val.title = $('#main_title_text').val();
			this.add_product_val.subtitle = $('#suntitle_text').val();
			this.add_product_val.category_id = $('#subcategories_select').val();

			if($('#user_time_zone').val() == 0){
				this.add_product_val.isbn = $('#user_time_zone').val();
			}else{
				this.add_product_val.isbn = $('#upc_isbn').val();
			}

			if($('#discountval').val() == ""){
				this.add_product_val.discount = 0;
			}else{
				this.add_product_val.discount = $('#discountval').val();
			}

			this.add_product_val.daily_deal = $('#daily_deal').val();

			if($('#daily_deal').val() == 'Yes')
				this.add_product_val.deals_days = $('#daily_dealDay').val();

			this.add_product_val.condition_description = $('#comment').val();

			if($('#Format').val() == "Auction style"){
				this.add_product_val.min_price = $('#min_price').val();

				if($('#format_price').val() != '')
					this.add_product_val.price = $('#format_price').val();

				if($('#max_price').val() != '')
					this.add_product_val.max_price = $('#max_price').val();

				if($('#Duration').val() != '')
					this.add_product_val.duration = $('#Duration').val();

				this.add_product_val.quantity = $('#dis_id').val();
				this.add_product_val.renew = 'No';
			}else if ($('#Format').val() == "Fixed price"){
				this.add_product_val.price = $('#format_price').val();
				this.add_product_val.quantity = $('#quantity').val();
				this.add_product_val.duration = $('#Duration1').val();
				this.add_product_val.renew = $('#Duration_selection').val();
				if($('#BestOffer').prop('checked') == true){
					this.add_product_val.make_offer = 1;

					if($('#minprice').val() != '')
						this.add_product_val.price = $('#minprice').val();

					if($('#maxprice').val() != '')
						this.add_product_val.max_price = $('#maxprice').val();
				}
			}

			if(this.add_product_val.product_address == '' && $('#search_places').val() == ''){
				$('.product_address').removeClass('d-none');
				return;
			}else{
				$('.product_address').addClass('d-none');
			}

			if($('#Format').val() == "Auction style"){
				if(parseInt($('#format_price').val()) < parseInt($('#min_price').val())){
					$('.productMSG_buyitprice').removeClass('d-none');
					return;
				}else{
					$('.productMSG_buyitprice').addClass('d-none');
				}
			}

			this.add_product_val.selling_type = $('#Format').val();

			if($('#paypal_check').prop('checked') == true){
				this.add_product_val.paypal_email = $('#paypal_text').val();
			}

			if($('#return-accepted').prop('checked') == true){
				this.add_product_val.return_opt = $('#itemReturnedWithin').val();
				this.add_product_val.return_policy = $('#returnpolicy').val();
				this.add_product_val.ship_to = $('#returnby').val();
			}else {
				this.add_product_val.return_opt = 'No';
				this.add_product_val.ship_to = '';
			}

			this.add_product_val.product_address = $('#area_community').val() + ' , ' + $('#search_places').val();

			this.add_product_val.delivery_days = $('#delivery_days').val();
			this.add_product_val.p_condition = $('#condition_select').val();
			this.add_product_val.specification.length = 0;
			this.add_product_val.specification.push(str_array);
			this.add_product_val.season_deal = $('#Season_deals').val();

			var val_payment = [];
			$('input[type=checkbox][name=payment_opt]:checked').each(function(i){
				val_payment[i] = $(this).val();
			});

			var val_shipment = [];
			$('input[type=checkbox][name=shipment_type]:checked').each(function(i,field){
				if($(this).val() == "Other")
					val_shipment[i] = $('#OtherShipment').val();
				else
					val_shipment[i] = $(this).val();
			});

			this.add_product_val.payment_opt = val_payment.join(",");
			this.add_product_val.shipment_type = val_shipment.join(",");

			if($('#categories_second').val() != '')
				this.add_product_val.secondary_cat_ids = $('#categories_second').val();
			else
				this.add_product_val.secondary_cat_ids.length = 0;

			var fees_details1 = {};
			fees_details1['categories_fees'] = [this.categoryFees];
			fees_details1['insertion_fees'] = [this.show_feesData.data.insertion_fee];
			fees_details1['buyitnow_fees'] = [this.show_feesData.data.buyitnow_fee];
			var Featured_item = [];
			if($('#daily_deal').val() == 'Yes'){
				Featured_item.push($('#daily_dealDay option:selected').text());
				Featured_item.push(this.daiydealsFees);
			}else{
				Featured_item.push(0);
			}
			fees_details1['featured_fees'] = Featured_item;
			this.add_product_val.fees_details = fees_details1;

			if($('input[name="payment_opt"]:checked').length == 0){
				$('.Payment_Opt').removeClass('d-none');
				$('.ShipmentSelectalert').addClass('d-none');
				return;
			}else{
				$('.Payment_Opt').addClass('d-none');
				$('.ShipmentSelectalert').addClass('d-none');
			}

			if ($('input[name="shipment_type"]:checked').length == 0) {
				$('.ShipmentSelectalert').removeClass('d-none');
				$('.Payment_Opt').addClass('d-none');
				return;
			}else{
				$('.ShipmentSelectalert').addClass('d-none');
				$('.Payment_Opt').addClass('d-none');
			}

			localStorage.setItem('previeProduct',JSON.stringify(this.add_product_val));
			if(this.plt.is('core') == true || this.plt.is('mobileweb') == true){
				//window.open('http://localhost:8100/#/previewProduct', "_blank");
				window.open('https://www.dibdaa.com/#/previewProduct', "_blank");
				//window.open('https://www.techcronus.com/staging/Dibdaa/www/#/previewProduct', "_blank");
			}else{
				this.navCtrl.push('PreviewProductPage');
			}
		}
	}

	checkPaypalEmail(val:any){
		var pass_data = {
			paypal_email: val
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/pay/verify-paypal-email', pass_data, (response) => {
			this.verificationResponsebusiness = response;
			this.infoService.hideLoading();
			if(response.responseEnvelope.ack == "Success"){
				$('.hideRigthCircle').removeClass('d-none');
			}
		}, (error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}

	checkMaxPrice(val_price:any,val:any){
		if(val == "Auction-style"){
			if(parseInt(val_price) <= parseInt($('#min_price').val())){
				$('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
			}else{
				$('.Maxprice:last#Maxprice').text('');
			}
			this.autoSaveProduct('maxPrice');
		}else if(val == "BestOffer"){
			if(parseInt(val_price) <= parseInt($('#minprice').val())){
				$('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
			}else{
				$('.Maxprice:last#Maxpriceoffer').text('');
			}

			this.autoSaveProduct('bestoffermaxPrice');
		}
	}

	autoSaveProduct(val:any){
		if(val == 'primarycategory'){
			this.add_product_val.title = $('#main_title_text').val();
			this.add_product_val.subtitle = $('#suntitle_text').val();
			this.add_product_val.category_id = $('#subcategories_select').val();
		}else if(val == 'Featured Deals'){
			if($('#daily_deal').val() == 'Yes') {
				this.add_product_val.deals_days = $('#daily_dealDay').children(":selected").attr("id");
				this.add_product_val.daily_deal = $('#daily_deal').val();
			}else{
				this.add_product_val.daily_deal = $('#daily_deal').val();
			}
		}else if(val == 'Season Deals'){
			if($('#Season_deals').val() == 'Yes') {
				this.add_product_val.season_day = $('#Season_dealsDay').children(":selected").attr("id");
				this.add_product_val.season_deal = $('#Season_deals').val();
			}else{
				this.add_product_val.season_deal = $('#Season_deals').val();
			}
		}else if(val == 0){
			this.add_product_val.isbn = '0';
		}else if(val == 'addedIsbn'){
			if($('#user_time_zone').val() == ""){
				this.add_product_val.isbn = '0';
			}else{
				this.add_product_val.isbn = $('#upc_isbn').val();
			}

		}else if(val == 'conditionItem'){
			this.add_product_val.p_condition = $('#condition_select').val();

			if($('#categories_second').val() != '')
				this.add_product_val.secondary_cat_ids = $('#categories_second').val();
			else
				this.add_product_val.secondary_cat_ids.length = 0;

			this.add_product_val.season_deal = $('#Season_deals').val();
			this.add_product_val.daily_deal = $('#daily_deal').val();
			if($('#user_time_zone').val() == ''){
				this.add_product_val.isbn = '0';
			}else{
				this.add_product_val.isbn = $('#upc_isbn').val();
			}

		}else if(val == 'conditionDesc'){
			this.add_product_val.condition_description = $('#comment').val();
		}else if(val == 'itemDesc'){
			var fields = $( "#Item_specifics" ).serializeArray();

			var str_array = {},color:any = [],size = [],functions = [],finish = [] ,shade_color = [];

			for(var i=0;i<fields.length;i++){
				if(fields[i].name == 'Color')
					color.push(fields[i].value);

				if(fields[i].name == 'Size')
					size.push(fields[i].value);

				if(fields[i].name == 'Functions')
					functions.push(fields[i].value);

				if(fields[i].name == 'Finish')
					finish.push(fields[i].value);

				if(fields[i].name == 'Shade_Color')
					shade_color.push(fields[i].value);

				str_array[fields[i].name] = [fields[i].value]; //Main
			}

			if(color.length >= 0) {
				str_array['Color'] = color;
			}

			if(size.length >= 0) {
				str_array['Size'] = size;
			}

			if(functions.length >= 0) {
				str_array['Functions'] = functions;
			}

			if(finish.length >= 0) {
				str_array['Finish'] = finish;
			}

			if(shade_color.length > 0) {
				str_array['Shade_Color'] = shade_color;
			}

			this.add_product_val.specification.length = 0;
			this.add_product_val.specification.push(str_array);

		}else if(val == "photoupload"){
			if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
				this.add_product_val.mobile_device = true;
			}else{
				this.add_product_val.reset_photo = true;
			}
		}else if(val == "Auction style" || val == "Fixed price"){
			this.add_product_val.selling_type = $('#Format').val();
		}else if(val == "duration"){
			this.add_product_val.duration = $('#Duration').val();
		}else if(val == "minPrice"){
			this.add_product_val.min_price = $('#min_price').val();
		}else if(val == "price"){
			if($('#format_price').val() != '' && $('#format_price').val() != undefined)
				this.add_product_val.price = $('#format_price').val();
			else
				this.add_product_val.price = 0;
		}else if(val == "maxPrice"){
			if($('#max_price').val() != '')
				this.add_product_val.max_price = $('#max_price').val();
		}else if(val == "renew"){
			this.add_product_val.renew = $('#Duration_selection').val();
		}else if(val == "fixduration"){
			this.add_product_val.duration = $('#Duration1').val();
		}else if(val == "quantity"){
			this.add_product_val.quantity = $('#quantity').val();
		}else if(val == "bestofferminprice"){
			this.add_product_val.make_offer = 1;

			if($('#minprice').val() != '')
				this.add_product_val.min_price = $('#minprice').val();
		}else if(val == "bestoffermaxPrice"){
			if($('#maxprice').val() != '')
				this.add_product_val.max_price = $('#maxprice').val();
		}else if(val == "discount"){
			if($('#discountval').val() == "")
				this.add_product_val.discount = 0;
			else
				this.add_product_val.discount = $('#discountval').val();
		}else if(val == "noreturnaccept"){
			this.add_product_val.return_opt = 'No';
			this.add_product_val.return_policy = '';
			this.add_product_val.ship_to = '';
		}else if(val == "returnopt"){
			this.add_product_val.return_opt = $('#itemReturnedWithin').val();
		}else if(val == "cashSelect"){
			var val_payment = [],self = this;
			$('input[type=checkbox][name=payment_opt]:checked').each(function(i){
				val_payment[i] = $(this).val();
				if($(this).val() == 1){
					self.add_product_val.paypal_email = $('#paypal_text').val();
				}
			});
			self.add_product_val.payment_opt = val_payment.join(",");
		}else if(val == "returnby"){
			this.add_product_val.ship_to = $('#returnby').val();
		}else if(val == "returnpolicy"){
			this.add_product_val.return_policy = $('#returnpolicy').val();
		}else if(val == "productAddress"){
			this.add_product_val.product_address = $('#area_community').val() + ' , ' + this.add_product_val.product_address;
			if($('#Format').val() == "Auction style"){
				if($('input[type=radio][name=schldlisting]:checked').val() == 'No'){
					this.add_product_val.schedule_date = '';

				}else{
					var getStartDate = $('.selectOptions#startDate').val();
					var getStartTime = $('.selectOptions#startTime').val();
					var getStartMinute = $('.selectOptions#stTimeMinute').val();
					this.add_product_val.schedule_date = getStartDate+' '+getStartTime+':'+getStartMinute+':'+'30';
				}
			}else{
				if($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'No'){
					this.add_product_val.schedule_date = '';
				}else{
					var getStartDate_fixed = $('.selectOptions#startDate_fixed').val();
					var getStartTime_fixed = $('.selectOptions#startTime_fixed').val();
					var getStartMinute_fixed = $('.selectOptions#stTimeMinute_fixed').val();
					this.add_product_val.schedule_date = getStartDate_fixed+' '+getStartTime_fixed+':'+getStartMinute_fixed+':'+'30';
				}
			}
			var val_shipment = [];
			$('input[type=checkbox][name=shipment_type]:checked').each(function(i,field){
				if($(this).val() == "Other")
					val_shipment[i] = $('#OtherShipment').val();
				else
					val_shipment[i] = $(this).val();
			});
			this.add_product_val.shipment_type = val_shipment.join(",");
		}else if(val == "addedarea_community"){
			this.add_product_val.product_address = $('#area_community').val();
		}else if(val == "delivery_days"){
			this.add_product_val.delivery_days = $('#delivery_days').val();

			var fees_details1 = {};
			fees_details1['categories_fees'] = [this.categoryFees];
			fees_details1['insertion_fees'] = [this.show_feesData.data.insertion_fee];

			var Featured_item = [];
			if($('#daily_deal').val() == 'Yes'){
				Featured_item.push($('#daily_dealDay option:selected').text());
				Featured_item.push(this.daiydealsFees);
			}else{
				Featured_item.push(0);
			}

			var seasondeal_dys = [];
			if($('#Season_deals').val() == 'Yes'){
				seasondeal_dys.push($('#Season_dealsDay option:selected').text());
				seasondeal_dys.push(this.sellseasonFees);
			}else{
				seasondeal_dys.push(0);
				seasondeal_dys.push(0);
			}

			fees_details1['featured_fees'] = Featured_item;
			fees_details1['season_fees'] = seasondeal_dys;
			this.add_product_val.fees_details = fees_details1;
		}else if(val == "checkschldlisting"){
			if($('#Format').val() == "Auction style"){
				if($('input[type=radio][name=schldlisting]:checked').val() == 'No'){
					this.add_product_val.schedule_date = '';

				}else{
					var getStartDate = $('.selectOptions#startDate').val();
					var getStartTime = $('.selectOptions#startTime').val();
					var getStartMinute = $('.selectOptions#stTimeMinute').val();
					this.add_product_val.schedule_date = getStartDate+' '+getStartTime+':'+getStartMinute+':'+'30';
				}
			}else{
				if($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'No'){
					this.add_product_val.schedule_date = '';
				}else{
					var getStartDate_fixed = $('.selectOptions#startDate_fixed').val();
					var getStartTime_fixed = $('.selectOptions#startTime_fixed').val();
					var getStartMinute_fixed = $('.selectOptions#stTimeMinute_fixed').val();
					this.add_product_val.schedule_date = getStartDate_fixed+' '+getStartTime_fixed+':'+getStartMinute_fixed+':'+'30';
				}
			}
		}else if(val == "checkOthership"){
			var val_shipment = [];
			$('input[type=checkbox][name=shipment_type]:checked').each(function(i,field){
				if($(this).val() == "Other")
					val_shipment[i] = $('#OtherShipment').val();
				else
					val_shipment[i] = $(this).val();
			});
			this.add_product_val.shipment_type = val_shipment.join(",");
		}else if(val == "title"){
			this.add_product_val.title = $('#main_title_text').val();
		}else if(val == "subTitle"){
			this.add_product_val.subtitle = $('#suntitle_text').val();
		}

		if(this.add_product_val.id == "" && val == 'primarycategory'){
			this.add_product_val.user_id = this.localItem.id;
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/auto-save-product', this.add_product_val, (response) => {
				this.infoService.hideLoading();
				if(response.status != "fail"){
					this.add_product_val.id = response.product_id;
					$('.estatus').css('visibility', 'visible');
					this.hideSavingDiv();
				}else{
					this.infoService.hideLoading();
					$('.estatus').css('visibility', 'hidden');
				}
			}, (error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}else if(this.add_product_val.id != ""){
			if(val == "photoupload"){
				this.loader = this.loading.create({
					content: 'Please wait while we upload your photos.',
				});
			this.loader.present();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.add_product_val,(response)=> {
					if(response.status == "success"){
						this.loader.dismiss();
						this.add_product_val.reset_photo = false;
						this.add_product_val.photos.length = 0;
						$('.estatus').css('visibility', 'visible');
						this.hideSavingDiv();
					}else{
						this.loader.dismiss();
						$('.estatus').css('visibility', 'hidden');
					}
				},(error) => {
					console.log(error);
					this.loader.dismiss();
					$('.estatus').css('visibility', 'hidden');
				});
			}else{
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.add_product_val,(response)=> {
					if(response.status == "success"){
						this.infoService.hideLoading();
						this.add_product_val.reset_photo = false;
						this.add_product_val.photos.length = 0;
						$('.estatus').css('visibility', 'visible');
						this.hideSavingDiv();
					}else{
						this.infoService.hideLoading();
						$('.estatus').css('visibility', 'hidden');
					}
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
					$('.estatus').css('visibility', 'hidden');
				});
			}
		}
	}

	hideSavingDiv(){
		setTimeout(function () {
			$('.estatus').css('visibility', 'hidden');
		},2000);
	}

	checkSaesonDeal(val:any){
		let seasonData = {
			cat_id : val
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/home/check-season-deal',seasonData,(response)=> {
			this.infoService.hideLoading();
			this.season_dealActive = response;
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}

	checkschldlisting(val:any){
		if(val == 'yes'){
			$('.selectOptions').attr('disabled',false);
			this.autoSaveProduct('checkschldlisting');
		}else if(val == 'no') {
			$('.selectOptions').attr('disabled',true);
			this.autoSaveProduct('checkschldlisting');
		}
	}

	showDaysSelection(val:any){
		if(val == "Yes"){
			this.showsellDealDays = true;
			this.add_product_val.season_deal = val;
			this.autoSaveProduct('season_dealyesno');
		}
		else{
			this.showsellDealDays = false;
			this.add_product_val.season_deal = val;
			this.autoSaveProduct('season_dealyesno');
		}
	}

	createCustomspecification(val:any){
		let alert = this.alertCtrl.create({
			title: 'Added own '+val,
			inputs: [
			  {
				name: val,
				placeholder: val,
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
					if(val == "Color"){
						var trimdata = $.trim(data.Color);
						if(trimdata.length <= 0){
							return false;
						}
					}else{
						var trimdata = $.trim(data.Size);
						if(trimdata.length <= 0){
							return false;
						}
					}

					for(var sp=0;sp<this.ItemSpecificationData.specification.length;sp++){
						if(this.ItemSpecificationData.specification[sp].type == "3"){
							if(this.ItemSpecificationData.specification[sp].label == "Color"){
								if(val == "Color"){
									this.ItemSpecificationData.specification[sp].value.push($.trim(data.Color));
								}
							}

							if(this.ItemSpecificationData.specification[sp].label == "Size"){
								if(val == "Size"){
									this.ItemSpecificationData.specification[sp].value.push($.trim(data.Size));
								}
							}
						}
					}
				}
			}
			]
		});
		alert.present();
	}

	checkCheckboxforsize(val:any,val1:any){
		if(val == "Size"){
			if(jQuery.inArray(val1, this.size_customQuantity) != -1){
				this.size_customQuantity.splice(jQuery.inArray(val1, this.size_customQuantity), 1);
			}else{
				this.size_customQuantity.push(val1);
			}

			if(this.size_customQuantity.length <= 0){
				$('#quantity').val('1');
			}
		}
	}

	setQuantityvalue(val:any){
		let calculate_custom_qun = 0;
		let taskObj_autosave = {};
		$("input[name=custom_sizeQun]").each(function() {
			if($(this).val() != ''){
				taskObj_autosave[$(this).attr('id')] = $(this).val();
				calculate_custom_qun+= parseInt($(this).val());
			}
		});
		this.add_product_val.sq = taskObj_autosave;
		$('#quantity').val(calculate_custom_qun);
		this.add_product_val.quantity = calculate_custom_qun;
		this.autoSaveProduct('sq');
	}
}
