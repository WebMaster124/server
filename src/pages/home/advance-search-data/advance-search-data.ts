import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';

/**
 * Generated class for the AdvanceSearchDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	segment:'srch/:id'
})
@Component({
  selector: 'page-advance-search-data',
  templateUrl: 'advance-search-data.html',
})
export class AdvanceSearchDataPage {
    @ViewChild(Content) content: Content;
	tags = ['Ionic', 'Angular', 'TypeScript'];
	public pro_image:any = environment.imageProduct + '/product/';
	public searchData:any;
	public search_not:boolean = false;
	public retrievedObject:any;
	public localItem:any;
	public ifadvanceSearch:boolean = false;
	public getData_decode:any;
	public convert_decode:any;
	public convert_parse:any;
    public showYear:any;
	constructor(public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
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

		$('body').removeClass().addClass('advance-search-data body');
		$(document).prop('title','Dibdaa Search : Advance Search');
        $( ".zoomContainer" ).remove();
        var d = new Date();
        this.showYear = d.getFullYear();

        this.getData_decode = this.navParams.data.id;
        this.convert_decode = atob(this.getData_decode);
        this.convert_parse = JSON.parse(this.convert_decode);
		this.showSearchData();
	}
  
	showSearchData(){
		if(this.convert_parse.view_item == 'viewItme'){
			try{
				var view_searchdata = {
					id:this.convert_parse.id
				}
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/search/view-search-product',view_searchdata,(response)=> {
					this.ifadvanceSearch = false;
					this.searchData = response.data;
					
					if(this.convert_parse.check_search == 'editSearch')
						this.showviewSearchtags(this.convert_parse.id);
					
				},(error) => {
					console.log(error);
				});
			}catch(Error){
				console.log(Error);
			}
		}else{
			try{
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/search/advance-search',this.convert_parse,(response)=> {
                    this.ifadvanceSearch = true;
					this.searchData = response.data;
				},(error) => {
					console.log(error);
				});
			}catch(Error){
				console.log(Error);
			}
		}
	}
	
	public search_arr:any
	showviewSearchtags(val:any){
		var showviewData = {
			user_id : this.localItem.id,
			id : val
		}
		try{
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/search/view-search',showviewData,(response)=> {
				this.search_arr = (<any>Object).entries(response.view_search.data[0].search);
				$('.bootstrap-tagsinput').empty();
				for(var s=0;s<this.search_arr.length;s++){
					if(this.search_arr[s][0] != 'Resultsperpage' && this.search_arr[s][0] != 'sold'){
						
						if(this.search_arr[s][0] == 'end_product')
							this.search_arr[s][1] = 'Include end product';
						
						if(this.search_arr[s][0] == 'item_condition')
							this.search_arr[s][1] = 'Condition :- ' + this.search_arr[s][1];
						
						if(this.search_arr[s][0] == 'keyword')
							this.search_arr[s][1] = 'Keyword :- ' + this.search_arr[s][1];
						
						if(this.search_arr[s][0] == 'min_price')
							this.search_arr[s][1] = 'Min price :- ' + this.search_arr[s][1];
						
						if(this.search_arr[s][0] == 'max_price')
							this.search_arr[s][1] = 'Max price :- ' + this.search_arr[s][1];
						
						if(this.search_arr[s][0] == 'product_rating')
							this.search_arr[s][1] = 'Rating :- ' + this.search_arr[s][1] + ' star';
						
						if(this.search_arr[s][0] == 'payment_opt'){
							if(this.search_arr[s][1] == '1'){
									this.search_arr[s][1] = 'With PayPal accepted';
							}else{
								this.search_arr[s][1] = 'With cash';
							}
						}
						$('.bootstrap-tagsinput').append('<span class="tag label label-info mb-2">'+this.search_arr[s][1]+'<input type="hidden" value="'+this.search_arr[s][1]+'" name="'+this.search_arr[s][0]+'" /><span data-role="remove" class="remove"></span></span>');
					}
				}
				var self = this;
				$('.remove').on('click',function(){
					var getkeyword = $(this).parent().find('input').attr('name');
					self.removeTagSearch(getkeyword);
					$(this).parent().remove();
				})
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
		}
	}
	
	removeTagSearch(val:any){
		var removesavesearchdata = {
			keyword : val,
			user_id : this.localItem.id,
			id : this.convert_parse.id
		}
		try{
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/search/edit-search',removesavesearchdata,(response)=> {
				this.showSearchData();
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
		}	
	}
	
	getServerData(event){
		try{
			this.infoService.showLoading();	
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/search/advance-search?page='+event,this.convert_parse,(response)=> {
				this.searchData = response.data;
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
	
	saveSearch(){
		if(this.localItem == null){
			this.navCtrl.push('LoginPage', {
				id: 'login'	
			});
		}else{
			try{
				var arr1 = localStorage.getItem('searchData');
				var save_search = {
					search : JSON.parse(arr1),
					user_id : this.localItem.id,
					keyword : this.convert_parse.keyword
				}

				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/search/save-search',save_search,(response)=> {
					if(response.save_search.status == "success"){
						this.search_not = true;
                        localStorage.removeItem('searchData');
					}
				},(error) => {
					console.log(error);
				});
			}catch(Error){
				console.log(Error);
			}
		}
	}
	
	GoToProDetail(val:any){
		this.navCtrl.push('ProductDetails',{
			id:val
		});
	}
}
