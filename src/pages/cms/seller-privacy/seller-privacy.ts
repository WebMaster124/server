import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {environment} from "../../../environments/environment";

/**
 * Generated class for the SellerPrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage()
@Component({
  selector: 'page-seller-privacy',
  templateUrl: 'seller-privacy.html',
})
export class SellerPrivacyPage {
    @ViewChild(Content) content: Content;
    public localItem:any;
    public retrievedObject:any;
    constructor(public plt: Platform,public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewWillEnter() {
        this.retrievedObject = environment.localItem;
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = environment.localItem;
        }

        $('body').removeClass().addClass('sellerPrivacy body');
        $(document).prop('title','Seller Privacy Notice');
        $( ".zoomContainer" ).remove();
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
}
