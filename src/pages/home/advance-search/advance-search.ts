import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the AdvanceSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage()
@Component({
  selector: 'page-advance-search',
  templateUrl: 'advance-search.html',
})
export class AdvanceSearchPage {
    @ViewChild(Content) content: Content;
	public advance_search = {
		keyword : '',
		category_id : '',
		min_price : '',
		max_price : '',
		buy_formats : '',
		item_condition : '',
		product_rating : '',
		per_page : '',
		sold : '',
		nationality : '',
		completed : '',
        category_name : '',
        payment_opt:'',
        shipping_opt:'',
        item_location:'',
        min_bid_number:'',
        max_bid_number:'',
        listing_options:'',
        hours:'',
		end_product:''
	}
	public viewcategory:any;
	public showYear:any;
	public retrievedObject:any;
	public localItem:any;

	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('AdvanceSearch');
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

		$('body').removeClass().addClass('AdSearch body');
		$(document).prop('title','Dibdaa Search : Advance Search');
        $( ".zoomContainer" ).remove();
		$(".searchanythingform").trigger("reset");
        $('#advance-search')[0].reset();
        var d = new Date();
        this.showYear = d.getFullYear();
        this.viewCat();
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
    
	viewCat(){
		try{
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/category/view-category','',(response)=> {
				this.viewcategory = response.categories;
			},(error) => {
				console.log(error);
			});
				
		}catch(Error){
			console.log(Error);
		}
	}
	
	advanceSearch(){
        var fields = null;
		try{
            fields = $( ".advance-search:last" ).serializeArray();
            var str_array = {};
            for(var i=0;i<fields.length;i++){
            	if(fields[i].value != '')
                	str_array[fields[i].name] = [fields[i].value]; //Main
			}
			localStorage.setItem('searchData',JSON.stringify(str_array));
			this.advance_search.keyword =$(".advance-search:last #keywords").val();

			if($(".advance-search:last #category_id :selected").text() == 'All Categories'){
                this.advance_search.category_name = '';
			}else {
                this.advance_search.category_name = $(".advance-search:last #category_id :selected").text();
			}

			this.advance_search.category_id =$(".advance-search:last #category_id").val();
			this.advance_search.min_price =$(".advance-search:last #min_price").val();
			this.advance_search.max_price =$(".advance-search:last #max_price").val();
			this.advance_search.buy_formats = $('.advance-search:last input[type=radio][name=buy_formats]:checked').val();
			this.advance_search.item_condition = $('.advance-search:last input[type=radio][name=item_condition]:checked').val();
			this.advance_search.product_rating = $('.advance-search:last input[type=radio][name=product_rating]:checked').val();
			this.advance_search.per_page = $('.advance-search:last #Resultsperpage').val();
			
			if($('.advance-search:last input[type=checkbox][name=sold]').prop('checked') == true){
				this.advance_search.sold = 'Yes';
			}else {
				this.advance_search.sold = '';
			}
			
			if($('.advance-search:last input[type=checkbox][name=completed]').prop('checked') == true){
				this.advance_search.completed = 'true';
			}else {
				this.advance_search.completed = '';
			}
			
			this.advance_search.nationality = $('.advance-search:last #nationality').val();
			this.advance_search.listing_options = $('.advance-search:last #listingoptions').val();
			this.advance_search.hours = $('.advance-search:last #Counthours').val();
			this.advance_search.min_bid_number = $('.advance-search:last #minbidnumber').val();
			this.advance_search.max_bid_number = $('.advance-search:last #maxbidnumber').val();
			this.advance_search.item_location = $('.advance-search:last #itemlocation').val();
            this.advance_search.payment_opt = $('.advance-search:last input[type=radio][name=payment_opt]:checked').val();
            this.advance_search.shipping_opt = $('.advance-search:last input[type=radio][name=shipping_opt]:checked').val();
            this.advance_search.end_product = $('.advance-search:last input[type=radio][name=end_product]:checked').val();

            var convert_stringify = JSON.stringify(this.advance_search)
            var convert_encode = btoa(convert_stringify);

			this.navCtrl.push('AdvanceSearchDataPage',{
				id:convert_encode
			});
		}catch(Error){
			console.log(Error);
		}
	}
}
