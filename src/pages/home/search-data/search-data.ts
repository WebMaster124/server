import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';

/**
 * Generated class for the SearchDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	segment:'Search/:id'
})
@Component({
  selector: 'page-search-data',
  templateUrl: 'search-data.html',
})
export class SearchDataPage {
    @ViewChild(Content) content: Content;
	public pro_image:any = environment.imageProduct + '/product/';
	public searchData:any;
	public random_number:any;
	public getData_decode:any;
	public showYear:any;
    public retrievedObject:any;
    public localItem:any = '';
	public search_not:boolean = false;
	constructor(public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {

	}

	ionViewWillEnter() {
        this.retrievedObject = environment.localItem;
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = environment.localItem;
        }

        $( ".zoomContainer" ).remove();
		$('body').removeClass().addClass('Search body');

		this.random_number = Math.floor(100000 + Math.random() * 900000);
		this.getData_decode = this.navParams.data.id;
		var convert_decode = atob(this.getData_decode);
        var convert_parse = JSON.parse(convert_decode);

        var d = new Date();
        this.showYear = d.getFullYear();

        if(convert_parse.keyword != '') {
            $('#searchKeyWord').val(convert_parse.keyword);
            $(document).prop('title', convert_parse.keyword + " | Dibdaa ");
        }
		if(convert_parse.category_id)
            $('#gh-cat').val(convert_parse.category_id);

		this.showSearchData();
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
	
	showSearchData(){
		try{
            var convertdecode = atob(this.getData_decode);
            var convertparse = JSON.parse(convertdecode);

			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/search/home-search',convertparse,(response)=> {
				if(response.data.length > 0 && response.status == "success"){
					this.searchData = response;
					this.infoService.hideLoading();
				}else{
					this.searchData = response;
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
	
	GoToProDetail(val:any){
		this.navCtrl.push('ProductDetails',{
			id:val
		});
	}
	
	GoToSubCat(val:any){
		this.navCtrl.push('SubCategoryPage',{
			id:val
		});
	}
	
	saveSearch(){
		var convertdecode = atob(this.getData_decode);
        var convertparse = JSON.parse(convertdecode);
		var advance_search:any;
			if(convertparse.category_id == '' || convertparse.category_id == null || convertparse.category_id == 'undefind'){
				advance_search = {
					['keyword'] : [convertparse.keyword]
				}
			}else{
				advance_search = {
					['keyword'] : [convertparse.keyword],
					['category_id'] : [convertparse.category_id]
				}
			}
	
		if(this.localItem == null){
			this.navCtrl.push('LoginPage', {
				id: 'login'	
			});
		}else{
			try{
				var save_search = {
					search : advance_search,
					user_id : this.localItem.id,
					keyword : convertparse.keyword
				}

				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/search/save-search',save_search,(response)=> {
					if(response.save_search.status == "success"){
						this.search_not = true;
					}
				},(error) => {
					console.log(error);
				});
			}catch(Error){
				console.log(Error);
			}
		}
	}
}
