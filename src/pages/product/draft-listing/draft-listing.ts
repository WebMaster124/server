import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

declare var $:any;
/**
 * Generated class for the DraftListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-draft-listing',
  templateUrl: 'draft-listing.html',
})
export class DraftListingPage {
  @ViewChild(Content) content: Content;
  public trandingImgUrl:any = environment.imageProduct + '/product/';
  public retrievedObject:any;
  public localItem:any;
  public dreftdata:any
	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('DraftListing');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
		}
	}

  ionViewWillEnter() {
    this.retrievedObject = environment.localItem;
    if (this.retrievedObject == null || this.retrievedObject == '') {
      this.localItem = null;
    } else {
      this.localItem = environment.localItem;
    }

    


    $( ".zoomContainer" ).remove();
    $('body').removeClass().addClass('DraftListing body');
    $(document).prop('title', 'Create your listing');
    this.showDraftProduct();
    this.checkAddress();
    this.getAllCount();

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

  showDraftProduct(){
    try{
		if(this.localItem == null){
			
		}else{
			var showdraftList ={
				user_id:this.localItem.id
			}
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/view-latest-draft',showdraftList,(response)=> {
				if(response.latest_draft.status == "success"){
				  this.dreftdata = response.latest_draft;
				  this.infoService.hideLoading();
				}else{
				  this.dreftdata = response;
				  this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
			});
		}
    }catch(Error){
      console.log(Error);
      this.infoService.hideLoading();
    }
  }
  

  deleteProduct(val:any){
    try{
      var deletePro ={
        product_id:val
      }
      this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/delete-latest-draft',deletePro,(response)=> {
        if(response.latest_draft.status == "success"){
          this.showDraftProduct();
        }
      },(error) => {
        console.log(error);
      });
    }catch(Error){
      console.log(Error);
    }
  }
  
  gotoPage(val:any,val1:any){
		
		if(val1 == "addProduct")
			this.navCtrl.push('AddProductPage');
		else if(val1 == "completelist"){
			this.navCtrl.push('AddProduct',{
				id : val
			})
		}
	}


        checkAddress(){
    try{
		if(this.localItem == null){
			
		}else{
			
                    var business_address ={
                                                id:this.localItem.id
                                        }

                    this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/check-address',business_address,(response)=> {
                            
                            if(response.check_address.status == "error"){
                                alert(response.check_address.msg);
                              this.navCtrl.push('SellerMyAccountPage',{
                                                id : 'account'
                                        })
                                this.infoService.hideLoading();
                            }else{
                              
                                this.infoService.hideLoading();
                            }
                    },(error) => {
                            console.log(error);
                    });
		}
    }catch(Error){
      console.log(Error);
      this.infoService.hideLoading();
    }
  }

getAllCount(){
		if(this.localItem == null){
			
		}else{
			var all_count ={
				user_id:this.localItem.id
			}
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/product/list-count',all_count,(response)=> {
				this.allCountData = response;
			},(error) => {
				console.log(error);
			});
		}
	}


}
