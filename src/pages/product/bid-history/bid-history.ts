import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the BidHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	segment:'viewbids/:id'
})
@Component({
  selector: 'page-bid-history',
  templateUrl: 'bid-history.html',
})
export class BidHistoryPage {
    @ViewChild(Content) content: Content;
	public bidHistoryData:any;
	public trandingImgUrl:any = environment.imageProduct + '/product/';
	public retrievedObject:any;
	public localItem:any;
	public showYear:any;

	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController,public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('BidHistory');
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

		$('body').removeClass().addClass('bidHistory body');
		$(document).prop('title','Dibdaa Item Bid History');
        $( ".zoomContainer" ).remove();
        var d = new Date();
        this.showYear = d.getFullYear();
		this.showbidsHistory();
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

	showbidsHistory(){
		var bid_history = {
			product_id:this.navParams.data.id
		}
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/bid/view-bid-history',bid_history,(response)=> {
			this.bidHistoryData = response.bid;
		},(error) => {
			console.log(error);
		});
	}
	
	openModal(){
		if(parseInt((this.bidHistoryData.data[0].bid_price + 1)) > parseInt($('#inputCode').val())){
			$('#errorbids').removeClass('d-none');
		}else{
			if(environment.localItem.id == this.bidHistoryData.data[0].seller_id){
				$('.error-bid').removeClass('d-none');
				return;
			}else{
				$('.error-bid').addClass('d-none');
			}
			
			let place_bids = {
				buyer_id: environment.localItem.id,
				seller_id:this.bidHistoryData.data[0].seller_id,
				product_id:this.bidHistoryData.data[0].product_id,
				bid_price:$('#inputCode').val()
			};
			$('#errorbids').addClass('d-none');
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/bid/place-bid',place_bids,(response)=> {
				if(response.bid.status == "success"){
					$('#sucsessbids').removeClass('d-none');
					this.infoService.hideLoading();
					this.showbidsHistory();
					this.hideDiv();
				}
				else{
					$('#sucsessbids').addClass('d-none');
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
	}

	hideDiv(){
		setTimeout(function () {
			$('#sucsessbids').addClass('d-none');
		},1500);
	}
	
	goToProductDetails(val:any){
		this.navCtrl.push('ProductDetails',{
			id:val
		});
	}
}
