import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform, AlertController} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { PhotoProvider } from '../../../providers/photo/photo';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the EditProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
declare var uploadcare:any;
declare var jQuery:any;
@IonicPage({
	name:'EditProduct',
	segment: 'EditItem&draftId/:id'
})
@Component({
  	selector: 'page-edit-product',
  	templateUrl: 'edit-product.html'
})
export class EditProductPage {
    @ViewChild(Content) content: Content;
	public view_product_val = {
		user_id:'',
		product_id:''
	}
	public view_Product:any;
	public show_category:any;
	public show_categoryType:any;
	public show_brandType:any;
	public validateRequest:any;
	public editproductResponse:any;
	public season_dealActive:any;
	public ifproductedit:boolean = false;
    public makeoffertextbox :boolean = false;
	public getData_decode:any;
	public convert_decode:any;
	public detailsData:any;
	public edit_product_val = {
		user_id:'',
		id:'',
		title:'',
		subtitle:'',
		category_id:'',
		isbn:'',
		settype_id:0,
		brand_id:0,
		p_condition:'',
		daily_deal:'',
		condition_description:'',
		selling_type:'',
		duration:0,
		quantity:'',
		payment_opt:'',
		paypal_email:'',
		//description:'',
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
		removeImages:[],
		secondary_cat_ids:[],
		make_offer:0,
		seller_fee:0,
		deals_days:0,
		return_policy:'',
        season_deal:'',
		fees_details:{},
        changes:{},
        discount:'',
		renew : '',
		status:0,
		schedule_date:'',
		from_product:'',
		season_day : 0,
		sq:{}
	}
	public size_customQuantity = [];
    public retrievedObject = localStorage.getItem('userInfo');
	public localItem:any;
	public ItemSpecificationData : any;
	public sub_catText:any;
	public return_opt:boolean = false;
	public otherPayment:boolean = false;
	public showsellDealDays:boolean = false;
	public otherPayment_text:any = "";
	public show_feesData:any;
	public featureitem:any;
	public checkinsertaionfees:any;
	public checkbuyitnowfees:any;
	Item_Description:any;
	public subTotalFees:any = 0;
	public daiydealsFees:any = 0;
	public categoryFees:any = 0;
	public seasondealfees:any;
	public sellseasonFees:any = 0;
	public verificationResponsebusiness:any = null;
	public arr:any;
	public userSettings: any = {
		showCurrentLocation: true,
		showSearchButton: false,
		useGoogleGeoApi:true,
		locationIconUrl:"assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
		geoCountryRestriction: ['ae','kw','om','qa','sa']
	};
	public setCustomspecification:any = {
		Color:'',
		Size:''
	};
	public config = {
		removeButtons : 'ImageButton,Flash,CreatePlaceholder,HorizontalRule,Smiley,PageBreak,Iframe,InsertPre,Form,Checkbox,Radio,TextField,Textarea,Select,Button,HiddenField,NewPage,Templates,Find,Save,Print,Replace,SpellChecker,Preview,About,Maximize,ShowBlocks'
	}

	constructor(public googleanalytics: GoogleAnalytics,public alertCtrl: AlertController,public _PHOTO: PhotoProvider,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
        this.getData_decode = this.navParams.data.id;
		this.convert_decode = atob(this.getData_decode);
		this.detailsData = JSON.parse(this.convert_decode);

		this.view_product_val.product_id = this.detailsData.product_id;
                
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = JSON.parse(this.retrievedObject);
            this.view_product_val.user_id = this.localItem.id;
        }
		
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('EditProduct');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
			
			this.userSettings.showCurrentLocation = false;
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

	public remaining:number;
	ionViewWillEnter(){

		$(document).prop('title','Update template');
		$('body').removeClass().addClass('EditProduct body');
        $( ".zoomContainer" ).remove();

		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/category/view-category','',(response)=> {
			this.show_category = response.categories;
			this.showFees();
		},(error) => {
			console.log(error);
		});

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
			var input = $(this);
			if ( ! input.data('minSize') && ! input.data('maxSize')) {
			  return;
			}
			var widget = uploadcare.Widget(input);
			widget.validators.push(self.fileSizeLimit(input.data('minSize'),input.data('maxSize')));
		});

		//Display Images
		var total:number = 0;
		var singleWidget = uploadcare.MultipleWidget('[role=uploadcare-uploader]');
		singleWidget.onUploadComplete(function(info) {
			$('.image-preview-muliple').empty();
			total = info.count + $('#image_preview div').length;
			var uploadedFile = $('#image_preview div').length;
			self.remaining = 10 - uploadedFile;
			if(total < 10){
				let count_img=0;
				for(var img=0;img<info.count;img++){
					self.convertFileToDataURLviaFileReader(info.cdnUrl+'nth/'+img+'/',(fileEntry) => {
						count_img++;
						$('#image_preview_append').append("<div class='col-lg-2 col-sm-6 col-md-3 col-6 p-2'><img class='img-fluid add-product-img' src='" + fileEntry + "'><input type='hidden' value='"+fileEntry+"' class='hidde_val'></div>");
						if(info.count == count_img){
							singleWidget.value(info);
						}
					});
				}
			}else{
				let count_imgRemaining = 0;
				for(var img=0;img<self.remaining;img++){
					self.convertFileToDataURLviaFileReader(info.cdnUrl+'nth/'+img+'/',(fileEntry) => {
						count_imgRemaining ++;
						$('#image_preview_append').append("<div class='col-lg-2 col-sm-6 col-md-3 col-6 p-2'><img class='img-fluid add-product-img' src='" + fileEntry + "'><input type='hidden' value='"+fileEntry+"' class='hidde_val'></div>");
						if(self.remaining == count_imgRemaining){
							singleWidget.value(info);
						}
					});
				}
			}

			$( function() {
				$( "#image_preview_append" ).sortable();
				$( "#image_preview_append" ).disableSelection();
			});
		});
		/*Image Widget crop End*/
	}

	ionViewDidLoad() {
		try{
			this.infoService.showLoading();

			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/view-product-edit',this.view_product_val,(response)=> {
				this.view_Product = response.product;
				this.checkSaesonDeal(response.product.data.parent_cat_id);
				var get_price = parseFloat(response.product.data.price);
				var get_catCharge = parseFloat(response.product.data.sub_cat_charge);
				this.categoryFees = ((get_price * get_catCharge) / 100);
				this.edit_product_val.user_id = this.localItem.id;
				this.edit_product_val.id = this.view_Product.data.id;
				this.edit_product_val.status = this.view_Product.data.status;
				this.edit_product_val.product_address = this.view_Product.data.product_address;
				for(var i=0;i<response.product.data.shipment_type.length;i++){
					if(response.product.data.shipment_type[i] == 'By Courier')
						$('input[type=checkbox][name=shipment_type][value="By Courier"]').prop('checked',true);

					if(response.product.data.shipment_type[i] == 'By Seller')
						$('input[type=checkbox][name=shipment_type][value="By Seller"]').prop('checked',true);

					if(response.product.data.shipment_type[i] != 'By Courier' && response.product.data.shipment_type[i] != 'By Seller'){
						(<any>document).getElementById('Other').checked = true;
						this.otherPayment = true;
						this.otherPayment_text = response.product.data.shipment_type[i];
					}
				}

                for(var p=0;p<response.product.data.payment_opt.length;p++){
					$('input[type=checkbox][name=payment_opt][value="'+response.product.data.payment_opt[p]+'"]').prop('checked',true);
                    if(response.product.data.payment_opt[p] == '1'){
                        $('.showPaypaldiv').removeClass('d-none');
                    }
                }

				if(response.product.data.season_deal == "Yes"){
					this.showsellDealDays = true;
				}else{
					this.showsellDealDays = false;
				}

				for(var sp=0;sp<this.view_Product.specification.specification.length;sp++){
					if(this.view_Product.specification.specification[sp].type == "3"){
						if(this.view_Product.specification.specification[sp].label == "Color"){
							this.setCustomspecification.Color = this.view_Product.specification.specification[sp].value;
							this.setCustomspecification.Color_selected = this.view_Product.specification.specification[sp].selectedValue;
						}

						if(this.view_Product.specification.specification[sp].label == "Size"){
							this.setCustomspecification.Size = this.view_Product.specification.specification[sp].value;
							this.setCustomspecification.Size_selected = this.view_Product.specification.specification[sp].selectedValue;
							this.size_customQuantity = this.view_Product.specification.specification[sp].selectedValue;
						}
					}
				}

				var self = this;
				this.sub_catText = response.product.data.sub_category_name;
				this.ItemSpecificationData = response.product.specification.specification;
				this.Item_Description = this.view_Product.data.specification[0].Item_Description[0];
				setTimeout(function(){
					$('#search_places').val(response.product.data.product_address);

					if(response.product.data.daily_deal == 'Yes')
						$("#daily_dealDay option[id='" + response.product.data.deals_days.toString() + "']").attr('selected', 'selected');

					if(response.product.data.season_deal == 'Yes')
						$("#Season_dealsDay option[id='" + response.product.data.season_day.toString() + "']").attr('selected', 'selected');

					if(response.product.data.selling_type == 'Auction style'){
						$('#Duration').val(response.product.data.duration);
						if(response.product.data.schedule_date == '' || response.product.data.schedule_date == null){
							(<any>document).getElementById('schldLstng_0Auction').checked = true;
						}else{
							(<any>document).getElementById('schldLstng_1Auction').checked = true;
							var gtdte = response.product.data.schedule_date.split(' ');
							$('.selectOptions#startDate').val(gtdte[0]);
							var gtTime = gtdte[1].split(':');
							$('.selectOptions#startTime').val(gtTime[0]);
							$('.selectOptions#stTimeMinute').val(gtTime[1]);
							$('.selectOptions').attr('disabled',false);
						}
					}
					else{
						if(response.product.data.schedule_date == '' || response.product.data.schedule_date == null){
							(<any>document).getElementById('schldLstng_0').checked = true;
						}else{
							var gtdte = response.product.data.schedule_date.split(' ');
							$('.selectOptions#startDate_fixed').val(gtdte[0]);
							var gtTime = gtdte[1].split(':');
							$('.selectOptions#startTime_fixed').val(gtTime[0]);
							$('.selectOptions#stTimeMinute_fixed').val(gtTime[1]);
							(<any>document).getElementById('schldLstng_1').checked = true;
							$('.selectOptions').attr('disabled',false);
						}
						$('#Duration1').val(response.product.data.duration);
						if(response.product.data.make_offer == 1)
							self.makeoffertextbox =true;
					}

					if(response.product.data.return_opt == "No"){
						self.return_opt = false;
						(<any>document).getElementById('no-return').checked = true;
					}else {
						self.return_opt = true;
						(<any>document).getElementById('return-accepted').checked = true;
					}

					if(response.product.data.renew == "Yes"){
						$('#Duration_selection').val('Yes');
					}else{
						$('#Duration_selection').val('No');
					}

					if(response.product.data.isbn == '0'){
						$('#user_time_zone').val('0');
					}else{
						$('#user_time_zone').val('1');
					}

					if(response.product.data.sq != ''){
						let sqData = (<any>Object).entries(response.product.data.sq);
						for(var s=0;s<sqData.length;s++){
							$("input[name=custom_sizeQun][id='"+sqData[s][0]+"']").val(sqData[s][1]);
						}
					}

				},2000);
                this.infoService.hideLoading();
				for(var j=0;j<this.view_Product.data.photos.length;j++){
					$('#image_preview').append("<div class='col-lg-3 col-sm-6 col-md-3 col-sm-12 col-12 p-2'><span class='close'>&times;</span><img class='img-fluid add-product-img' src='" + environment.imageProduct + '/product/' + this.view_Product.data.id + '/S/' + this.view_Product.data.photos[j] + "'></div>");
				}

				$('.close').on('click',function(){
					var imgSRC = $(this).parent().find('img').attr('src');
					var imgName = imgSRC.substr(imgSRC.lastIndexOf('/') + 1);

					self.edit_product_val.removeImages.push(imgName);
					$(this).parent().remove();
				});
			},(error) => {
				console.log(error);
                this.infoService.hideLoading();
			});
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
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

	selectImage(){
	  this._PHOTO.selectImage().then((data:any) =>{
		 if(data != '0'){
			if($('#image_preview div').length < 11){
				$('.image-preview-muliple').append("<div class='col-lg-3 col-sm-6 col-md-3 col-sm-12 col-12 p-2'><span class='close'>&times;</span><img class='img-fluid add-product-img' src='" + data + "'><input type='hidden' value='"+data+"' class='hidde_val'></div>");
				this.edit_product_val.photos.push(data);
				$('.close').on('click',function(){
					$(this).parent().remove();
				});
			}
		 }
	  }).catch((error:any) =>{
		 console.log(error);
	  });
	}

	autoCompleteCallback1(selectedData:any) {
		if(selectedData.response == true){
			this.edit_product_val.product_address = selectedData.data.description;
		}else{
			this.edit_product_val.product_address = '';
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

			if(this.view_Product.data.seller_fee <= 0){
				let calculate_catPrice = ((this.view_Product.data.price * parseFloat(this.view_Product.data.sub_cat_charge)) / 100);

				var insertionfee = 0;

				if(this.view_Product.data.price > 0.01 && this.view_Product.data.price <= 3.75){
					insertionfee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + 0;
				}else if(this.view_Product.data.price > 3.75 && this.view_Product.data.price <= 35){
					insertionfee = parseFloat(this.checkbuyitnowfees) +  parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.second);
				}else if(this.view_Product.data.price > 35 && this.view_Product.data.price <= 90){
					insertionfee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.third);
				}else if(this.view_Product.data.price > 90 && this.view_Product.data.price <= 180){
					insertionfee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.four);
				}else if(this.view_Product.data.price > 180 && this.view_Product.data.price <= 750){
					insertionfee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.five);
				}else if(this.view_Product.data.price > 750){
					insertionfee = parseFloat(this.checkbuyitnowfees) + parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.six);
				}

				let subtitlesetfees = 0;
				if(this.view_Product.data.subtitle != null && this.view_Product.data.subtitle != '')
					subtitlesetfees = this.show_feesData.data.subtitle_fee;

				this.view_Product.data.seller_fee = insertionfee + calculate_catPrice + subtitlesetfees;
			}

		},(error) => {
			console.log(error);
		});
	}

	showDailyfees(val:any){
		if(val == "" || val == 'No' || val == 'Yes')
			this.daiydealsFees = 0;

		this.calculateFees();
	}

	showsubtotalFees(){
		if($('#subtitle_text').val() == '')
			this.subTotalFees = 0;
		else
			this.subTotalFees = parseFloat(this.show_feesData.data.subtitle_fee);

		this.calculateFees();
	}

	showcategoryFees(){
		var price_cal:any;

		if($('#Format').val() == "Auction style"){
			price_cal = parseFloat($('#format1_price').val());
		}else if ($('#Format').val() == "Fixed price"){
			price_cal = parseFloat($('#format2_price').val());
		}

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

		var singlecat = parseFloat(this.view_Product.data.sub_cat_charge);

		if(isNaN(singlecat) && isNaN(price_cal))
			this.categoryFees = 0;
		else if(isNaN(singlecat))
			this.categoryFees = 0;
		else if(isNaN(price_cal))
			this.categoryFees = 0;
		else{
			var total_price = ((singlecat * price_cal) / 100);
			this.categoryFees = total_price
		}
		this.calculateFees();
	}

	showsellDayfees(val:any){
		if(val == "" || val == null)
			this.sellseasonFees = 0;
		else
			this.sellseasonFees = parseFloat(val);

		this.calculateFees();
	}

	calculateFees(){
		var total:any;
		var insertionfee = parseFloat(this.show_feesData.data.insertion_fee);

		if($('#subtitle_text').val() == '')
			this.subTotalFees = 0;
		else
			this.subTotalFees = parseFloat(this.show_feesData.data.subtitle_fee);

		if(this.view_Product.data.daily_deal == 'Yes')
			this.daiydealsFees = parseFloat($('#daily_dealDay').val());
		else
			this.daiydealsFees = 0;

		if($('#Season_deals').val() == 'Yes')
			this.sellseasonFees = parseFloat($('#Season_dealsDay').val());
		else
			this.sellseasonFees = 0;

		total = insertionfee + this.daiydealsFees + this.subTotalFees + this.categoryFees + this.sellseasonFees;
		this.edit_product_val.seller_fee = total;
		this.view_Product.data.seller_fee = this.edit_product_val.seller_fee;
	}

	disableText(){
		if($('#paypal_check').prop('checked') == true){
			$('#paypal_text').val(this.localItem.payment_email);
		  $('.showPaypaldiv').removeClass('d-none');
		}else{
		  $('.showPaypaldiv').addClass('d-none');
		}
	}

	change_date(){
		if($('#return-accepted').prop('checked') == true)
			this.return_opt = true;
		else
			this.return_opt = false;
	}

	showData(val:any){
		this.view_Product.data.selling_type = val;
	}

	showDays(val:any){
		this.view_Product.data.daily_deal = val;
		this.showDailyfees(val);
	}

	other_Payment(val:any){
		if(val == 'shipment_type'){
            if($('#Other').prop('checked') == true){
                this.otherPayment = true;
            }else{
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

    chngeISBN(val:any){
        this.view_Product.data.isbn = val;
	}

	editProduct(){
		this.edit_product_val.user_id = this.localItem.id;

		var fields = $("#Item_specifics").serializeArray();

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

		if($('#image_preview div').length <= 0 && $('#image_preview_append div').length <= 0){
			$('#photosSelectedit').removeClass('hide');
		}else{
			$('#photosSelectedit').addClass('hide');

			this.edit_product_val.title = $('#main_title_text').val();
			this.edit_product_val.subtitle = $('#subtitle_text').val();
			this.edit_product_val.category_id = $('#subcategories_select').val();

			this.edit_product_val.specification.length = 0;
			this.edit_product_val.specification.push(str_array);

			if($('#user_time_zone').val() == 0){
				this.edit_product_val.isbn = $('#user_time_zone').val();
			}else{
				this.edit_product_val.isbn = $('#upc_isbn').val();
			}

			this.edit_product_val.daily_deal = $('#daily_deal').val();
			this.edit_product_val.season_deal = $('#Season_deals').val();

			if($('#daily_deal').val() == 'Yes')
					this.edit_product_val.deals_days = $('#daily_dealDay').children(":selected").attr("id");

			if($('#Season_deals').val() == 'Yes')
					this.edit_product_val.season_day = $('#Season_dealsDay').children(":selected").attr("id");

			this.edit_product_val.condition_description = $('#comment').val();

			if($('#main_title_text').val() == ''){
				$('.productMSG_title').removeClass('d-none');
				return;
			}else{
				$('.productMSG_title').addClass('d-none');
			}

			if(this.edit_product_val.specification[0].Item_Description[0] == ''){
				$('.productMSG_description').removeClass('d-none');
				return;
			}else{
				$('.productMSG_description').addClass('d-none');
			}

			if($('#Format').val() == ''){
				$('.productMSG_format').removeClass('d-none');
				return;
			}else{
				$('.productMSG_format').addClass('d-none');
			}

			if($('#Format').val() == "Auction style"){
				if($('#Duration').val() == ''){
					$('.productMSG_duration').removeClass('d-none');
					return;
				}else{
					$('.productMSG_duration').addClass('d-none');
				}

				if($('input[type=radio][name=schldlisting]:checked').length == 0){
					$('.productMSG_schldlisting').removeClass('d-none');
					return;
				}else{
					$('.productMSG_schldlisting').addClass('d-none');
				}

				if(parseInt($('#min_price').val()) <= 0 || $('#min_price').val() == ''){
					$('.productMSG_minprice').removeClass('d-none');
					return;
				}else{
					$('.productMSG_minprice').addClass('d-none');
				}

				if(parseInt($('#format1_price').val()) <= 0){
					$('.productMSG_format1price').removeClass('d-none');
					return;
				}else{
					$('.productMSG_format1price').addClass('d-none');
				}

				if(parseInt($('#max_price').val()) <= 0){
					$('.productMSG_maxprice').removeClass('d-none');
					return;
				}else{
					$('.productMSG_maxprice').addClass('d-none');
				}

				if(parseInt($('#max_price').val()) <= parseInt($('#min_price').val())){
					$('.productMSG_reservedPrice').removeClass('d-none');
					return;
				}else{
					$('.productMSG_reservedPrice').addClass('d-none');
				}

				if(parseInt($('#format1_price').val()) < parseInt($('#min_price').val())){
					$('.productMSG_buyitprice').removeClass('d-none');
					return;
				}else{
					$('.productMSG_buyitprice').addClass('d-none');
				}


			}else{
				if(parseInt($('#format2_price').val()) <= 0 || $('#format2_price').val() == ''){
					$('.productMSG_format1price').removeClass('d-none');
					return;
				}else{
					$('.productMSG_format1price').addClass('d-none');
				}

				if($('#Duration_selection').val() == null){
					$('.productMSG_durationselection').removeClass('d-none');
					return;
				}else{
					$('.productMSG_durationselection').addClass('d-none');
				}

				if($('#Duration1').val() == ''){
					$('productMSG_duration').removeClass('d-none');
					return;
				}else{
					$('.productMSG_duration').addClass('d-none');
				}

				if($('input[type=radio][name=schldlisting_fixed]:checked').length == 0){
					$('.productMSG_schldlisting').removeClass('d-none');
					return;
				}else{
					$('.productMSG_schldlisting').addClass('d-none');
				}

				if(parseInt($('#quantity').val()) <= 0 || $('#quantity').val() == ''){
					$('.productMSG_quantity').removeClass('d-none');
					return;
				}else{
					$('.productMSG_quantity').addClass('d-none');
				}

				if($('input[type=checkbox][name=BestOffer]:checked').length == 1){
					if(parseInt($('#minprice').val()) <= 0 || $('#minprice').val() == ''){
						$('.productMSG_minpriceoffer').removeClass('d-none');
						return;
					}else{
						$('.productMSG_minpriceoffer').addClass('d-none');
					}

					if(parseInt($('#maxprice').val()) <= 0 || $('#maxprice').val() == ''){
						$('.productMSG_maxpriceoffer').removeClass('d-none');
						return;
					}else{
						$('.productMSG_maxpriceoffer').addClass('d-none');
					}

					if(parseInt($('#maxprice').val()) < parseInt($('#minprice').val())){
						$('.productMSG_offeraccept').removeClass('d-none');
						return;
					}else{
						$('.productMSG_offeraccept').addClass('d-none');
					}

				}
			}

			if(parseInt($('#discountval').val()) <= 0){
				$('.productMSG_discount').removeClass('d-none');
				return;
			}else{
				$('.productMSG_discount').addClass('d-none');
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

			if($('#area_community').val() == ''){
				$('.productMSG_areaCommunity').removeClass('d-none');
				return;
			}else{
				$('.productMSG_areaCommunity').addClass('d-none');
			}

			if($('#search_places').val() == ''){
				$('.product_address').removeClass('d-none');
				return;
			}else{
				$('.product_address').addClass('d-none');
			}

			if(parseInt($('#delivery_days').val()) <= 0 || $('#delivery_days').val() == ''){
				$('.productMSG_disptach').removeClass('d-none');
				return;
			}else{
				$('.productMSG_disptach').addClass('d-none');
			}

			var self = this;
			self.edit_product_val.photos.length = 0;
			$('.hidde_val').each(function() {
			   self.edit_product_val.photos.push(this.value);
			});

			var dt = new Date();
			var checkTime:any;
			if($('#Format').val() == "Auction style"){
				checkTime = $('.selectOptions#startDate').val() + " " + $('.selectOptions#startTime').val() + ":" + $('.selectOptions#stTimeMinute').val() + ":" +"00";
				if($('input[type=radio][name=schldlisting]:checked').val() == 'Yes'){
					if(new Date(checkTime) > dt){
						$('.Scheduleonstart').addClass('d-none');
						$('.ShipmentSelectalert').addClass('d-none');
						$('.Payment_Opt').addClass('d-none');
						$('.Item_specificationError:last').addClass('d-none');
					}else{
						$('.ShipmentSelectalert').addClass('d-none');
						$('.Scheduleonstart').removeClass('d-none');
						$('.Payment_Opt').addClass('d-none');
						$('.Item_specificationError:last').addClass('d-none');
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
				this.edit_product_val.min_price = $('#min_price').val();

				if($('#format1_price').val() != '')
					this.edit_product_val.price = $('#format1_price').val();

				if($('#max_price').val() != '')
					this.edit_product_val.max_price = $('#max_price').val();

				if($('#Duration').val() != '' && this.view_Product.data.duration != $('#Duration').val())
					this.edit_product_val.duration = $('#Duration').val();
				else
					this.edit_product_val.duration = 0;

				this.edit_product_val.quantity = $('#dis_id').val();
				this.edit_product_val.renew = 'No';
			}else if ($('#Format').val() == "Fixed price"){
				this.edit_product_val.price = $('#format2_price').val();
				this.edit_product_val.quantity = $('#quantity').val();

				if($('#Duration1').val() != '' && this.view_Product.data.duration != $('#Duration1').val())
					this.edit_product_val.duration = $('#Duration1').val();
				else
					this.edit_product_val.duration = 0;

				this.edit_product_val.renew = $('#Duration_selection').val();
				if($('#BestOffer').prop('checked') == true){
					this.edit_product_val.min_price = $('#minprice').val();
					this.edit_product_val.max_price = $('#maxprice').val();
					this.edit_product_val.make_offer = 1;
				}
			}

			if($('#discountval').val() == ""){
				this.edit_product_val.discount = '';
			}else if($('#discountval').val() == "0"){
				this.edit_product_val.discount = '';
			}else{
				this.edit_product_val.discount = $('#discountval').val();
			}

			this.edit_product_val.selling_type = $('#Format').val();

			if($('#paypal_check').prop('checked') == true){
				this.edit_product_val.paypal_email = $('#paypal_text').val();
			}

			if($('#return-accepted').prop('checked') == true){
				this.edit_product_val.return_opt = $('#itemReturnedWithin').val();
				this.edit_product_val.return_policy = $('#returnpolicy').val();
				this.edit_product_val.ship_to = $('#returnby').val();
			}else {
				this.edit_product_val.return_opt = 'No';
				this.edit_product_val.ship_to = '';
			}

			this.edit_product_val.warrenty = $('#warrenty').val();
			this.edit_product_val.product_address = $('#area_community').val() + ' , ' + $('#search_places').val();
			this.edit_product_val.delivery_days = $('#delivery_days').val();
			this.edit_product_val.p_condition = $('#condition_select').val();
			var val_payment = [];
			$('input[type=checkbox][name=payment_opt]:checked').each(function(i){
				if($(this).prop('checked'))
					val_payment[i] = $(this).val();
			});

			this.edit_product_val.payment_opt = val_payment.join(",");

			var val_shipment = [];
				$('input[type=checkbox][name=shipment_type]:checked').each(function(i,field){
					if($(this).val() == "Other")
						val_shipment[i] = $('#OtherShipment').val();
					else
						val_shipment[i] = $(this).val();
			});

			this.edit_product_val.shipment_type = val_shipment.join(",");
			this.edit_product_val.secondary_cat_ids = $('#categories_second').val();

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

			this.edit_product_val.fees_details = fees_details1;

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

					this.edit_product_val.sq = taskObj;

					if($("input[name=custom_sizeQun]").length != taskArray.length){
						$('.productMSG_quantysize').removeClass('d-none');
						return false;
					}else{
						$('.productMSG_quantysize').addClass('d-none');
					}

<!--					if(parseInt(this.edit_product_val.quantity) != tasktotalCount){
						$('.productMSG_quantitygreater').html('You enter quantity is ' + '&nbsp;' + this.edit_product_val.quantity + ' ' + 'but actual Custom Item specifications quantity total is' + ' ' + tasktotalCount + '.Please update quantity');
						return false;
					}else{
						$('.productMSG_quantitygreater').html('');
					}-->
				}
			}

			if($('#Format').val() == "Auction style"){
				if($('input[type=radio][name=schldlisting]:checked').val() == 'No'){
					this.edit_product_val.schedule_date = '';
				}else{
					var getStartDate = $('.selectOptions#startDate').val();
					var getStartTime = $('.selectOptions#startTime').val();
					var getStartMinute = $('.selectOptions#stTimeMinute').val();
					this.edit_product_val.schedule_date = getStartDate+' '+getStartTime+':'+getStartMinute+':'+'30';
				}

			}else{
				if($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'No'){
					this.edit_product_val.schedule_date = '';
				}else{
					var getStartDate_fixed = $('.selectOptions#startDate_fixed').val();
					var getStartTime_fixed = $('.selectOptions#startTime_fixed').val();
					var getStartMinute_fixed = $('.selectOptions#stTimeMinute_fixed').val();
					this.edit_product_val.schedule_date = getStartDate_fixed+' '+getStartTime_fixed+':'+getStartMinute_fixed+':'+'30';
				}
			}
			if(this.detailsData.product_page == 'Unsold'){
				this.edit_product_val.status = 5;
                                this.edit_product_val.from_product = 'RELIST_PRODUCT';
			}
			if($('.paypal-checkbox:last#paypal_check').prop('checked') == true){
				if($('.receiving-payment-email:last#paypal_text').val() == this.localItem.payment_email || $('.receiving-payment-email:last#paypal_text').val() == this.view_Product.data.paypal_email){
					if($('#Format').val() == "Auction style"){
						if(this.edit_product_val.max_price <= parseInt($('#min_price').val()) && this.edit_product_val.max_price !=0){
							$('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
						}else{
							$('.Maxprice:last#Maxprice').text('');
							this.infoService.showLoading();
							this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.edit_product_val,(response)=> {
								if(response.status == "success"){
									this.infoService.hideLoading();
									this.ifproductedit = true;
									var self_this = this;
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
					}else{
						if($('#BestOffer').prop('checked') == true){
							if(this.edit_product_val.max_price <= parseInt($('#minprice').val()) && this.edit_product_val.max_price !=0){
								$('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
							}else{
								$('.Maxprice:last#Maxprice').text('');
								this.infoService.showLoading();
								this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.edit_product_val,(response)=> {
									if(response.status == "success"){
										this.infoService.hideLoading();
										this.ifproductedit = true;
										var self_this = this;
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
						}else{
							$('.Maxprice:last#Maxprice').text('');
							this.infoService.showLoading();
							this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.edit_product_val,(response)=> {
								if(response.status == "success"){
									this.infoService.hideLoading();
									this.ifproductedit = true;
									var self_this = this;
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
				}else if (this.verificationResponsebusiness == null || this.verificationResponsebusiness.responseEnvelope.ack == 'Failure') {

				}else{
					if($('#Format').val() == "Auction style") {
						if (this.edit_product_val.max_price <= parseInt($('#min_price').val()) && this.edit_product_val.max_price !=0) {
							$('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
						} else {
							$('.Maxprice:last#Maxprice').text('');
							this.infoService.showLoading();
							this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product', this.edit_product_val, (response) => {
								if (response.status == "success") {
									this.infoService.hideLoading();
									this.ifproductedit = true;
									var self_this = this;
									setTimeout(function () {
										self_this.navCtrl.push('SellerMyAccountPage', {
                id: 'account'
            });
										self_this.ifproductedit = false;
									}, 2500);
								} else {
									this.editproductResponse = response;
									$('#dangeralert').removeClass('hide');
									this.infoService.hideLoading();
								}
							}, (error) => {
								console.log(error);
								this.infoService.hideLoading();
							});
						}
					}else{
						if($('#BestOffer').prop('checked') == true) {
							if (this.edit_product_val.max_price <= parseInt($('#minprice').val()) && this.edit_product_val.max_price !=0) {
								$('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
							} else {
								$('.Maxprice:last#Maxprice').text('');
								this.infoService.showLoading();
								this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product', this.edit_product_val, (response) => {
									if (response.status == "success") {
										this.infoService.hideLoading();
										this.ifproductedit = true;
										var self_this = this;
										setTimeout(function () {
											self_this.navCtrl.push('SellerMyAccountPage', {
                id: 'account'
            });
											self_this.ifproductedit = false;
										}, 2500);
									} else {
										this.editproductResponse = response;
										$('#dangeralert').removeClass('hide');
										this.infoService.hideLoading();
									}
								}, (error) => {
									console.log(error);
									this.infoService.hideLoading();
								});
							}
						}else{
							$('.Maxprice:last#Maxprice').text('');
							this.infoService.showLoading();
							this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product', this.edit_product_val, (response) => {
								if (response.status == "success") {
									this.infoService.hideLoading();
									this.ifproductedit = true;
									var self_this = this;
									setTimeout(function () {
										self_this.navCtrl.push('SellerMyAccountPage', {
                id: 'account'
            });
										self_this.ifproductedit = false;
									}, 2500);
								} else {
									this.editproductResponse = response;
									$('#dangeralert').removeClass('hide');
									this.infoService.hideLoading();
								}
							}, (error) => {
								console.log(error);
								this.infoService.hideLoading();
							});
						}
					}
				}
			}else{
				if($('#Format').val() == "Auction style") {
					if (this.edit_product_val.max_price <= parseInt($('#min_price').val()) && this.edit_product_val.max_price !=0) {
						$('.Maxprice:last#Maxprice').text('Reserve price must be greater than Starting price');
					} else {
						this.infoService.showLoading();
						this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.edit_product_val,(response)=> {
							if(response.status == "success"){
								this.infoService.hideLoading();
								this.ifproductedit = true;
								var self_this = this;
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
				}else{
					if($('#BestOffer').prop('checked') == true) {
						if (this.edit_product_val.max_price <= parseInt($('#minprice').val()) && this.edit_product_val.max_price !=0) {
							$('.Maxprice:last#Maxpriceoffer').text('Accept price must be greater than Decline price');
						} else {
							this.infoService.showLoading();
							this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.edit_product_val,(response)=> {
								if(response.status == "success"){
									this.infoService.hideLoading();
									this.ifproductedit = true;
									var self_this = this;
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
					}else{
						this.infoService.showLoading();
						this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/edit-product',this.edit_product_val,(response)=> {
							if(response.status == "success"){
								this.infoService.hideLoading();
								this.ifproductedit = true;
								var self_this = this;
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
			}
		}
	}

	closeDiv_Delete(){
		$('#dangeralert').addClass('hide');
	}

	checkPaypalEmail(val:any){
        var pass_data = {
            paypal_email: val
        }
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/pay/verify-paypal-email', pass_data, (response) => {
            this.verificationResponsebusiness = response;
            this.infoService.hideLoading();
        }, (error) => {
            console.log(error);
            this.infoService.hideLoading();
        });
    }

	checkSaesonDeal(val:any){
		let seasonData = {
			cat_id : val
		}
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/home/check-season-deal',seasonData,(response)=> {
			this.season_dealActive = response;
		},(error) => {
			console.log(error);
		});
	}

	checkschldlisting(val:any){
		if(val == 'yes'){
			$('.selectOptions').attr('disabled',false);
		}else if(val == 'no') {
			$('.selectOptions').attr('disabled',true);
		}
	}

	showDaysSelection(val:any){
		if(val == "Yes"){
			this.showsellDealDays = true;
			this.edit_product_val.season_deal = val;
		}
		else{
			this.showsellDealDays = false;
			this.edit_product_val.season_deal = val;
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

					for(var sp=0;sp<this.view_Product.specification.specification.length;sp++){
						if(this.view_Product.specification.specification[sp].type == "3"){
							if(this.view_Product.specification.specification[sp].label == "Color"){
								if(val == "Color"){
									this.view_Product.specification.specification[sp].value.push($.trim(data.Color));
								}
							}

							if(this.view_Product.specification.specification[sp].label == "Size"){
								if(val == "Size"){
									this.view_Product.specification.specification[sp].value.push($.trim(data.Size));
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
				for(var sp=0;sp<this.view_Product.specification.specification.length;sp++){
					if(this.view_Product.specification.specification[sp].type == "3"){
						if(this.view_Product.specification.specification[sp].label == "Size"){
							this.view_Product.specification.specification[sp].value.push(val1);
							this.view_Product.specification.specification[sp].selectedValue.splice(jQuery.inArray(val1, this.view_Product.specification.specification[sp].selectedValue), 1);
						}
					}
				}
			}else{
				for(var sp=0;sp<this.view_Product.specification.specification.length;sp++){
					if(this.view_Product.specification.specification[sp].type == "3"){
						if(this.view_Product.specification.specification[sp].label == "Size"){
							this.view_Product.specification.specification[sp].selectedValue.push(val1);
							this.view_Product.specification.specification[sp].value.splice(jQuery.inArray(val1, this.view_Product.specification.specification[sp].value), 1);
						}
					}
				}
			}

			if(this.size_customQuantity.length <= 0){
				$('#quantity').val('1');
			}
		}
	}

	setQuantityvalue(){
		let tasktotalCount = 0;
		$("input[name=custom_sizeQun]").each(function() {
			if($(this).val() != ''){

				tasktotalCount+= parseInt($(this).val());
			}
		});

		$('#quantity').val(tasktotalCount);
	}
        
        
        previewData(){
		this.edit_product_val.user_id = this.localItem.id;
			if(this.localItem.role == "buyer"){
				$('#buyerError').removeClass('hide');
			}else{
				$('#buyerError').addClass('hide');
                                alert($('#main_title_text').val());
				var self = this;
				if($('#main_title_text').val() == ''){
					$('.productMSG_title').removeClass('d-none');
					return;
				}else{
					$('.productMSG_title').addClass('d-none');
				}

				if($('#image_preview div').length <= 0 && $('#image_preview_append div').length <= 0){
					$('#photosSelectalert').removeClass('hide');
					return;
				}else{
					$('#photosSelectalert').addClass('hide');
				}

				if($('#Item_Description').val() == ''){
					$('.productMSG_description').removeClass('d-none');
					return;
				}else{
					$('.productMSG_description').addClass('d-none');
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

				if($('#Format').val() == ''){
					$('.productMSG_format').removeClass('d-none');
					return;
				}else{
					$('.productMSG_format').addClass('d-none');
				}

				if($('#Format').val() == "Auction style"){
					if($('#Duration').val() == ''){
						$('.productMSG_duration').removeClass('d-none');
						return;
					}else{
						$('.productMSG_duration').addClass('d-none');
					}

					if($('input[type=radio][name=schldlisting]:checked').length == 0){
						$('.productMSG_schldlisting').removeClass('d-none');
						return;
					}else{
						$('.productMSG_schldlisting').addClass('d-none');
					}

					if(parseInt($('#min_price').val()) <= 0 || $('#min_price').val() == ''){
						$('.productMSG_minprice').removeClass('d-none');
						return;
					}else{
						$('.productMSG_minprice').addClass('d-none');
					}

					if(parseInt($('#format1_price').val()) <= 0){
						$('.productMSG_format1price').removeClass('d-none');
						return;
					}else{
						$('.productMSG_format1price').addClass('d-none');
					}

					if(parseInt($('#max_price').val()) <= 0){
						$('.productMSG_maxprice').removeClass('d-none');
						return;
					}else{
						$('.productMSG_maxprice').addClass('d-none');
					}

					//var getMinPrice:any = parseInt($('#min_price').val());
					//var calculateMinprice:any = getMinPrice + (getMinPrice * 30 / 100);
					if(parseInt($('#format1_price').val()) < parseInt($('#min_price').val())){
						$('.productMSG_buyitprice').removeClass('d-none');
						return;
					}else{
						$('.productMSG_buyitprice').addClass('d-none');
					}

				}else{
					if(parseInt($('#format1_price').val()) <= 0 || $('#format1_price').val() == ''){
						$('.productMSG_format1price').removeClass('d-none');
						return;
					}else{
						$('.productMSG_format1price').addClass('d-none');
					}

					if($('#Duration_selection').val() == null){
						$('.productMSG_durationselection').removeClass('d-none');
						return;
					}else{
						$('.productMSG_durationselection').addClass('d-none');
					}

					if($('#Duration1').val() == ''){
						$('productMSG_duration').removeClass('d-none');
						return;
					}else{
						$('.productMSG_duration').addClass('d-none');
					}

					if($('input[type=radio][name=schldlisting_fixed]:checked').length == 0){
						$('.productMSG_schldlisting').removeClass('d-none');
						return;
					}else{
						$('.productMSG_schldlisting').addClass('d-none');
					}

					if(parseInt($('#quantity').val()) <= 0 || $('#quantity').val() == ''){
						$('.productMSG_quantity').removeClass('d-none');
						return;
					}else{
						$('.productMSG_quantity').addClass('d-none');
					}

					if($('input[type=checkbox][name=BestOffer]:checked').length == 1){
						if(parseInt($('#minprice').val()) <= 0 || $('#minprice').val() == ''){
							$('.productMSG_minpriceoffer').removeClass('d-none');
							return;
						}else{
							$('.productMSG_minpriceoffer').addClass('d-none');
						}

						if(parseInt($('#maxprice').val()) <= 0 || $('#maxprice').val() == ''){
							$('.productMSG_maxpriceoffer').removeClass('d-none');
							return;
						}else{
							$('.productMSG_maxpriceoffer').addClass('d-none');

						}
					}
				}

				if(parseInt($('#discountval').val()) <= 0){
					$('.productMSG_discount').removeClass('d-none');
					return;
				}else{
					$('.productMSG_discount').addClass('d-none');
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

				if($('#area_community').val() == ''){
					$('.productMSG_areaCommunity').removeClass('d-none');
					return;
				}else{
					$('.productMSG_areaCommunity').addClass('d-none');
				}

				if((this.edit_product_val.product_address == '' || this.edit_product_val.product_address == null) && $('#search_places').val() == ''){
					$('.product_address').removeClass('d-none');
					return;
				}else{
					$('.product_address').addClass('d-none');
				}

				if(parseInt($('#delivery_days').val()) <= 0 || $('#delivery_days').val() == ''){
					$('.productMSG_disptach').removeClass('d-none');
					return;
				}else{
					$('.productMSG_disptach').addClass('d-none');
				}

				if($('#Format').val() != "Auction style"){
					if(parseInt($('#maxprice').val()) < parseInt($('#minprice').val())){
						$('.productMSG_offeraccept').removeClass('d-none');
						return;
					}else{
						$('.productMSG_offeraccept').addClass('d-none');
					}
				}

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

				this.edit_product_val.title = $('#main_title_text').val();
				this.edit_product_val.subtitle = $('#suntitle_text').val();
				this.edit_product_val.category_id = $('#subcategories_select').val();
				this.edit_product_val.p_condition = $('#condition_select').val();
				if($('#user_time_zone').val() == ''){
					this.edit_product_val.isbn = '0';
				}else{
					this.edit_product_val.isbn = $('#upc_isbn').val();
				}

				if($('#discountval').val() == ""){
					this.edit_product_val.discount = 0;
				}else{
					this.edit_product_val.discount = $('#discountval').val();
				}

				this.edit_product_val.daily_deal = $('#daily_deal').val();

				if($('#daily_deal').val() == 'Yes')
					this.edit_product_val.deals_days = $('#daily_dealDay').val();

				this.edit_product_val.condition_description = $('#comment').val();

				if($('#Format').val() == "Auction style"){
					this.edit_product_val.min_price = $('#min_price').val();

					if($('#format_price').val() != '')
						this.edit_product_val.price = $('#format1_price').val();

					if($('#max_price').val() != '')
						this.edit_product_val.max_price = $('#max_price').val();

					if($('#Duration').val() != '')
						this.edit_product_val.duration = $('#Duration').val();

					this.edit_product_val.quantity = $('#dis_id').val();
					this.edit_product_val.renew = 'No';
				}else if ($('#Format').val() == "Fixed price"){
					this.edit_product_val.price = $('#format1_price').val();
					this.edit_product_val.quantity = $('#quantity').val();
					this.edit_product_val.duration = $('#Duration1').val();
					this.edit_product_val.renew = $('#Duration_selection').val();
					if($('#BestOffer').prop('checked') == true){
						this.edit_product_val.make_offer = 1;

						if($('#minprice').val() != '')
							this.edit_product_val.price = $('#minprice').val();

						if($('#maxprice').val() != '')
							this.edit_product_val.max_price = $('#maxprice').val();
					}
				}

				this.edit_product_val.selling_type = $('#Format').val();

				if($('#paypal_check').prop('checked') == true){
					this.edit_product_val.paypal_email = $('#paypal_text').val();
				}

				if($('#return-accepted').prop('checked') == true){
					this.edit_product_val.return_opt = $('#itemReturnedWithin').val();
					this.edit_product_val.return_policy = $('#returnpolicy').val();
					this.edit_product_val.ship_to = $('#returnby').val();
				}else {
					this.edit_product_val.return_opt = 'No';
					this.edit_product_val.ship_to = '';
				}

				this.edit_product_val.product_address = $('#area_community').val() + ' , ' + $('#search_places').val();
				this.edit_product_val.delivery_days = $('#delivery_days').val();

				this.edit_product_val.specification.length = 0;
				this.edit_product_val.specification.push(str_array);
				this.edit_product_val.season_deal = $('#Season_deals').val();

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

				this.edit_product_val.payment_opt = val_payment.join(",");
				this.edit_product_val.shipment_type = val_shipment.join(",");

				if($('#Format').val() == "Auction style"){
					if($('input[type=radio][name=schldlisting]:checked').val() == 'No'){
						this.edit_product_val.schedule_date = '';
					}else{
						var getStartDate = $('.selectOptions#startDate').val();
						var getStartTime = $('.selectOptions#startTime').val();
						var getStartMinute = $('.selectOptions#stTimeMinute').val();
						this.edit_product_val.schedule_date = getStartDate+' '+getStartTime+':'+getStartMinute+':'+'30';
					}
				}else{
					if($('input[type=radio][name=schldlisting_fixed]:checked').val() == 'No'){
						this.edit_product_val.schedule_date = '';
					}else{
						var getStartDate_fixed = $('.selectOptions#startDate_fixed').val();
						var getStartTime_fixed = $('.selectOptions#startTime_fixed').val();
						var getStartMinute_fixed = $('.selectOptions#stTimeMinute_fixed').val();
						this.edit_product_val.schedule_date = getStartDate_fixed+' '+getStartTime_fixed+':'+getStartMinute_fixed+':'+'30';
					}
				}

				if($('#categories_second').val() != '')
					this.edit_product_val.secondary_cat_ids = $('#categories_second').val();
				else
					this.edit_product_val.secondary_cat_ids.length = 0;

				var fees_details1 = {};
				fees_details1['categories_fees'] = [this.categoryFees];
				fees_details1['insertion_fees'] = [this.show_feesData.data.insertion_fee];

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

				fees_details1['season_fees'] = seasondeal_dys;
				fees_details1['featured_fees'] = Featured_item;

				self.edit_product_val.photos.length = 0;
				$('#image_preview div').children('img').each(function() {
					self.edit_product_val.photos.push(this.src);
				});

				if($('#image_preview_append div').length > 0){
					$('#image_preview_append div').children('img').each(function() {
						self.edit_product_val.photos.push(this.src);
					});
				}
				this.edit_product_val.fees_details = fees_details1;
				this.edit_product_val.status = 2;
				this.edit_product_val.from_product = 'ADD_PRODUCT';
				localStorage.setItem('previeProduct',JSON.stringify(this.edit_product_val));
				if(this.plt.is('core') == true || this.plt.is('mobileweb') == true){
					//window.open('http://localhost:8100/#/previewProduct', "_blank");
					window.open('http://onlinetnt.com/#/previewProduct', "_blank");
					//window.open('https://www.techcronus.com/staging/Dibdaa/www/#/previewProduct', "_blank");
				}else{
					this.navCtrl.push('PreviewProductPage');
				}
		}
	}
        
}
