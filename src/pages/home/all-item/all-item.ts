import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the AllItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	name:'AllItemPage',
	segment:"GetAll/:id"
})
@Component({
  selector: 'page-all-item',
  templateUrl: 'all-item.html',
})
export class AllItemPage {
    @ViewChild(Content) content: Content;
	public trandingImgUrl:any = environment.imageProduct + '/product/';
	public retrievedObject:any;
	public localItem:any = '';
	public showYear:any;
	public recentlyViewedData:any;
	public recntview:boolean = false;
	public latestrandingData:any;
	public latestrend:boolean = false;
	public dailydealData:any;
	public dailydeal:boolean = false;
	public recommendedData:any;
	public recommended:boolean = false;
	public sellSimilarData:any;
	public sellSimilar:boolean = false;
    public viewSellerData:any;
    public viewSeller:boolean = false;
    public viewwishlistData:any;
    public viewwishlist:boolean = false;
    public viewunderfiftyData:any;
    public viewunderfifty:boolean = false;
    public viewsellerActiveData:any;
    public viewsellerActive:boolean = false;
	public viewnewItemData:any;
    public viewnewItem:boolean = false;
	public userName:any = null;
	
	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('AllItems');
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

		$('body').removeClass().addClass('all-item body');
		$(document).prop('title','All Items');
        $( ".zoomContainer" ).remove();
		$(".searchanythingform").trigger("reset");
        var d = new Date();
        this.showYear = d.getFullYear();
		if(this.navParams.data.id == "RecentlyViewed"){
			this.recentlyViewedfunc();
		}else if(this.navParams.data.id == "CurrentlyWatched"){
			this.currentlyWatchedfunc();
		}else if(this.navParams.data.id == "SellerActiveItem"){
			this.selleractivefunc();
		}else if(this.navParams.data.id == "TrendingDibdaa"){
			this.tredingDibdaafunc();
		}else if(this.navParams.data.id == "UnderValue"){
			this.underfiftyfunc();
		}else if(this.navParams.data.id == "FeaturedDeals"){
			this.featuredDealsfunc();
		}else if(this.navParams.data.id == "Recommended"){
			this.recommendedfunc();
		}else if(this.navParams.data.id == "newItems"){
			this.newItemsfunc();
		}else if($.type(this.navParams.data.id) == 'object'){
            this.viewsellerfunc();
        }else{
			this.sellSimilarfunc();
		}
        $( ".zoomContainer" ).remove();
	}
	
	newItemsfunc(){
		this.infoService.showLoading();
        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/new-products','',(response)=> {
            this.viewnewItem = true;
            this.viewnewItemData = response.products;
            this.infoService.hideLoading();
        },(error) => {
            console.log(error);
            this.infoService.hideLoading();
        });
	}
	
    selleractivefunc(){
        var selleractive_viewed:any = {
            user_id:localStorage.getItem('seller_Id')
        }

        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/view-active-product',selleractive_viewed,(response)=> {
            this.viewsellerActive = true;
            this.viewsellerActiveData = response.data;
            this.infoService.hideLoading();
        },(error) => {
            console.log(error);
            this.infoService.hideLoading();
        });
	}

    underfiftyfunc(){
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/home/under-fifty','',(response)=> {
            this.viewunderfifty = true;
            this.viewunderfiftyData = response.under_fifty;
            this.infoService.hideLoading();
        },(error) => {
            console.log(error);
            this.infoService.hideLoading();
        });
	}

    viewsellerfunc(){
		var data_viewpro = this.navParams.data.id;
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/view-product',data_viewpro,(response)=> {
            this.viewSeller = true;
            this.userName = this.navParams.data.id.user_name
            this.viewSellerData = response;
            this.infoService.hideLoading();
        },(error) => {
            console.log(error);
            this.infoService.hideLoading();
        });
	}

	recentlyViewedfunc(){
		if(this.localItem == null){
			
		}else{
			var recently_viewed:any = {
				user_id:this.localItem.id
			}
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/recently-viewed-items',recently_viewed,(response)=> {
				if(response.status == "success" && response.data.length > 0){
					this.recntview = true;
					this.recentlyViewedData = response;
					this.infoService.hideLoading();
				}else {
					this.recentlyViewedData = null;
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
	}

    currentlyWatchedfunc(){
        if(this.localItem == null){

        }else{
            var wishlist_view ={
                user_id:this.localItem.id
            }
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/wishlist/view-wishlist',wishlist_view,(response)=> {
                if(response.wishlist.status == "success" && response.wishlist.data.length > 0){
                    this.viewwishlist = true;
                    this.viewwishlistData = response.wishlist;
                    this.infoService.hideLoading();
                }else {
                    this.viewwishlistData = null;
                    this.infoService.hideLoading();
                }
            },(error) => {
                console.log(error);
                this.infoService.hideLoading();
            });
        }
	}
	
	tredingDibdaafunc(){
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/latest-trending','',(response)=> {
			if(response.status == "success" && response.data.length > 0){
				this.latestrend = true;
				this.latestrandingData = response;
				this.infoService.hideLoading();
			}else {
				this.latestrandingData = null;
				this.infoService.hideLoading();
			}
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
	
	featuredDealsfunc(){
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/daily-deals','',(response)=> {
			if(response.status == "success" && response.data.length > 0){
				this.dailydeal = true;
				this.dailydealData = response;
				this.infoService.hideLoading();
			}else {
				this.dailydealData = null;
				this.infoService.hideLoading();
			}
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});	
	}
	
	recommendedfunc(){
		if(this.localItem == null){
			
		}else{
			var recommended_viewed:any = {
				user_id:this.localItem.id
			}
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/recommended-for-you',recommended_viewed,(response)=> {
				if(response.list_count.status == "success" && response.list_count.data.length > 0){
					this.recommended = true;
					this.recommendedData = response.list_count;
					this.infoService.hideLoading();
				}else {
					this.recommendedData = null;
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}	
	}
	
	sellSimilarfunc(){
		if(this.localItem == null){
			
		}else{
			var sellSimilar_viewed:any = {
				product_id:this.navParams.data.id
			}
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/seller/sell-similar',sellSimilar_viewed,(response)=> {
				if(response.similar_products.status == "success"){
					this.sellSimilar = true;
					this.sellSimilarData = response.similar_products;
					this.infoService.hideLoading();
				}else {
					this.sellSimilarData = null;
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}	
	}
	
	gotoProductdetailpage(val:any){
		this.navCtrl.push('ProductDetails',{
			id : val
		});
	}
}
