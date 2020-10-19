import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, ModalController, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
    name: 'AboutUsPage',
    segment: 'CMS/:id'
})
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {
    @ViewChild(Content) content: Content;
    public bannerImg = environment.imageProduct + "/cms_banners/";
    public showaboutData:any;
    public retrievedObject:any;
    public localItem:any;
    constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public modalCtrl : ModalController,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView(this.navParams.data.id);
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
        $('body').removeClass().addClass(this.navParams.data.id + ' body');
       
        $( ".zoomContainer" ).remove();

        if(this.navParams.data.id == 'about-us') {
            $(document).prop('title','About Us');
            this.callaboutFunction('1');
        }else if(this.navParams.data.id == 'comingsoon') {
            $(document).prop('title','Coming Soon');
            this.callaboutFunction('20');
        }else if(this.navParams.data.id == 'selling-tools') {
            $(document).prop('title','How To Selling Tools');
            this.callaboutFunction('15');
        }else if(this.navParams.data.id == 'mobile-apps') {
            $(document).prop('title','Mobile Apps');
            this.callaboutFunction('16');
        }else if(this.navParams.data.id == 'security') {
            $(document).prop('title','Security Awareness');
            this.callaboutFunction('17');
        }else if(this.navParams.data.id == 'company-info') {
            $(document).prop('title','Company Information');
            this.callaboutFunction('3');
        }else if(this.navParams.data.id == 'news') {
            $(document).prop('title','News');
            this.callaboutFunction('4');
        }else if(this.navParams.data.id == 'investord') {
            $(document).prop('title','Investord');
            this.callaboutFunction('5');
        }else if(this.navParams.data.id == 'careers') {
            $(document).prop('title','Careers');
            this.callaboutFunction('6');
        }else if(this.navParams.data.id == 'advertise') {
            $(document).prop('title','Advertise with us');
            this.callaboutFunction('7');
        }else if(this.navParams.data.id == 'policies') {
            $(document).prop('title','Policies');
            this.callaboutFunction('8');
        }else if(this.navParams.data.id == 'announcements') {
            $(document).prop('title','Announcements');
            this.callaboutFunction('9');
        }else if(this.navParams.data.id == 'knowledge') {
            $(document).prop('title','Knowledge Base');
            this.callaboutFunction('10');
        }else if(this.navParams.data.id == 'charity') {
            $(document).prop('title','Dibdaa for Charity');
            this.callaboutFunction('11');
        }else if(this.navParams.data.id == 'stuff') {
            $(document).prop('title','Free Stuff');
            this.callaboutFunction('12');
        }else if(this.navParams.data.id == 'community') {
            $(document).prop('title','Dibdaa Community');
            this.callaboutFunction('13');
        }else if(this.navParams.data.id == 'affiliates') {
            $(document).prop('title','Affiliates');
            this.callaboutFunction('21');
        }else if(this.navParams.data.id == 'security-center') {
            $(document).prop('title','Security Center');
            this.callaboutFunction('22');
        }else if(this.navParams.data.id == 'useragreement') {
            $(document).prop('title','User Agreement');
            this.callaboutFunction('23');
        }else if(this.navParams.data.id == 'userprivacy') {
            $(document).prop('title','User Privacy');
            this.callaboutFunction('24');
        }else if(this.navParams.data.id == 'return') {
            $(document).prop('title','Dibdaa Return');
            this.callaboutFunction('28');
        }else if(this.navParams.data.id == 'registration') {
            $(document).prop('title','Registration');
            this.callaboutFunction('29');
        }else if(this.navParams.data.id == 'cookies') {
            $(document).prop('title','Cookies');
            this.callaboutFunction('30');
        }else if(this.navParams.data.id == 'sellerprivacy') {
            $(document).prop('title','Seller Privacy');
            this.callaboutFunction('26');
        }else if(this.navParams.data.id == 'selleragreement') {
            $(document).prop('title','Seller Agreement');
            this.callaboutFunction('25');
        }else if(this.navParams.data.id == 'resolutioncenter') {
            $(document).prop('title','Resolution Center');
            this.callaboutFunction('31');
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

    callaboutFunction(val:any){
        var pass_aboutus = {
            id: val
        }
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/cms/view-cms',pass_aboutus,(response)=> {
            this.showaboutData = response;
            this.infoService.hideLoading();
        },(error) => {
            console.log(error);
            this.infoService.hideLoading();
        });
    }

	//open modalCtrl.
    funccallmodal(){
        var modalPage:any;
        modalPage = this.modalCtrl.create('SellerAgreementPage');
        modalPage.present();
    }
}
