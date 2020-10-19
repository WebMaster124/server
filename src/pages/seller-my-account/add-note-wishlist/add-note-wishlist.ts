import { Component,ViewChild } from '@angular/core';
import { Content,IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the AddNoteWishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	name:'AddNoteWishlist',
	segment: 'SubmitAction.BulkAddNote/:id'
})

@Component({
  selector: 'page-add-note-wishlist',
  templateUrl: 'add-note-wishlist.html',
})

export class AddNoteWishlistPage {
	@ViewChild(Content) content: Content;
	public viewishData:any;
	public trandingImgUrl:any = environment.imageProduct + '/product/';
	public retrievedObject:any;
	public localItem:any;
	public getData_decode:any;
	public convert_decode:any;
	public convert_parse:any;
	public showYear:any;

	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('AddNote');
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
		$(document).prop('title','Added notes');
		$('body').removeClass().addClass('AddNote body');
		this.getData_decode = this.navParams.data.id;
		this.convert_decode = atob(this.getData_decode);
		this.convert_parse = JSON.parse(this.convert_decode);
        var d = new Date();
        this.showYear = d.getFullYear();
		this.viewwishList();
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
	
	viewwishList(){
		try{
			var wishlist_view ={
				user_id:this.localItem.id,
				product_id:this.convert_parse
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/wishlist/view-wishlist',wishlist_view,(response)=> {
				this.viewishData = response.wishlist;
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
		}
	}
	
	updatewishList(){
		var favorite = [];
		$.each($("textarea:input[name='note_add']"), function(){            
			favorite.push($(this).val());
		});
	
		var wishlist_update ={
			user_id:this.localItem.id,
			product_id:this.convert_parse,
			note:favorite
		}
		try{
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/wishlist/update-wishlist-note',wishlist_update,(response)=> {
				if(response.wishlist.status == "success"){
					this.infoService.hideLoading();
					this.navCtrl.popToRoot();
				}else {
					this.infoService.hideLoading();
					this.navCtrl.popToRoot();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}catch(Error){
			this.infoService.hideLoading();
			console.log(Error);
		}
	}

    cancelClick(){
		this.navCtrl.popToRoot();
	}
	
	goToProductdetail(val:any){
		this.navCtrl.push('ProductDetails',{
			id:val
		})
	}
}
