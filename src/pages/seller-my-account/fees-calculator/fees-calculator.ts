import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform, AlertController} from 'ionic-angular';
import {environment} from "../../../environments/environment";
import { InfoService } from '../../../services/info';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
declare var $:any;
@IonicPage()
@Component({
  selector: 'page-fees-calculator',
  templateUrl: 'fees-calculator.html',
})
export class FeesCalculatorPage {
    @ViewChild(Content) content: Content;
   
    public retrievedObject:any;
    public localItem:any;
    public show_category:any;
    public show_feesData:any;
    public featureitem:any;
    public seasonitem:any;
	public totalFees:any;
	public feature_item_fees:any;
	public season_item_fees:any;
	public subtitle_fees:any;
	public total_category_fees:any;
	public category_fees_percentage:any;
	public checkinsertaionfees:any;
	public buyitnow_fees:any;
	public insertion_fee:any = 0;
	
	constructor(public googleanalytics: GoogleAnalytics,public alertCtrl: AlertController,public infoService:InfoService,public plt: Platform,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('FeesCalculator');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
		}
	}
	
	ionViewWillEnter(){
        this.retrievedObject = environment.localItem;
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = environment.localItem;
        }
		$(document).prop('title','Fees Calculator');
		$('body').removeClass().addClass('FeesCalculator body');
		this.showCategory();
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
	
	showCategory() {
		try{
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/category/view-category','',(response)=> {
				this.show_category = response.categories;
				
				this.infoService.hideLoading();
				this.showFees();
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
		}
	}
	
	showFees(){
		let seller_fees:any;
		if(this.localItem != null){
			seller_fees = {
				user_id : this.localItem.id
			}
		}else{
			seller_fees = {
				user_id : 0
			}
		}
		
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/setting/seller-fees',seller_fees,(response)=> {
			this.show_feesData = response.setting;
			this.featureitem = (<any>Object).entries(response.setting.feature_item);
			this.seasonitem = (<any>Object).entries(response.setting.season_deal_fee);
			this.checkinsertaionfees = 0;
		},(error) => {
			console.log(error);
		});
	}
	
	calculateFees(){
		if($('#categories_select').val() == ''){
			let alert1 = this.alertCtrl.create({
				title: 'Category',
				subTitle: 'Please select category.',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert1.present();
			return;
		}
		
		if($('#subcategories_select').val() == ''){
			let alert1 = this.alertCtrl.create({
				title: 'Primary Category',
				subTitle: 'Please select primary category.',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert1.present();
			return;
		}
		
		if($('#BuyItNow').val() == ''){
			let alert1 = this.alertCtrl.create({
				title: 'Price',
				subTitle: 'Please enter price.',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert1.present();
			return;
		}
		
		var get_subtitle:any = 0;
		if($('input[type=checkbox][name=subtitle]:checked').length == 1){
			get_subtitle = 1.75;
		}
		
		var get_buyitnow_fees:any = 0;
		if($('input[type=checkbox][name=BuyItNowPrice]:checked').length == 1){
			get_buyitnow_fees = parseFloat(this.show_feesData.data.buyitnow_fee);
		}
		
		var get_daily_deal:any = 0;
		if($('#daily_dealDay').val() != ''){
			get_daily_deal = parseFloat($('#daily_dealDay').val());
		}
		
		var get_season_deal:any = 0;
		if($('#season_dealDay').val() != ''){
			get_season_deal = parseFloat($('#season_dealDay').val());
		}
		
		var get_price = parseFloat($('#BuyItNow').val());
		var primary_cat_fees = parseFloat($('#subcategories_select').children(":selected").attr("id"));
		var total_price = ((primary_cat_fees * get_price) / 100);
		
		var get_insertionfee = 0;
		
		if(get_price > 0.01 && get_price <= 3.75){
			get_insertionfee = parseFloat(this.checkinsertaionfees) + 0;
		}else if(get_price > 3.75 && get_price <= 35){
			get_insertionfee = parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.second);
		}else if(get_price > 35 && get_price <= 90){
			get_insertionfee = parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.third);
		}else if(get_price > 90 && get_price <= 180){
			get_insertionfee = parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.four);
		}else if(get_price > 180 && get_price <= 750){
			get_insertionfee = parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.five);
		}else if(get_price > 750){
			get_insertionfee = parseFloat(this.checkinsertaionfees) + parseFloat(this.show_feesData.insert_fee.six);
		}
		
		this.show_feesData.data.insertion_fee = get_insertionfee;
		this.feature_item_fees = get_daily_deal;
		this.season_item_fees = get_season_deal;
		this.subtitle_fees = get_subtitle;
		this.total_category_fees = total_price;
		this.category_fees_percentage = primary_cat_fees;
		this.buyitnow_fees = get_buyitnow_fees;
		
		this.totalFees = get_insertionfee + total_price + get_daily_deal + get_subtitle + get_season_deal + get_buyitnow_fees;
	}
	
	clickToDraftList(){
		this.navCtrl.push('DraftListingPage');
	}
}