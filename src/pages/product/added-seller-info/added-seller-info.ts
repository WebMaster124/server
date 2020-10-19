import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, ModalController, NavController, NavParams, Platform ,AlertController} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { GoogleAnalytics } from '@ionic-native/google-analytics';

declare var $:any;
/**
 * Generated class for the AddedSellerInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    segment:'seller-business-info'
})
@Component({
  selector: 'page-added-seller-info',
  templateUrl: 'added-seller-info.html',
})
export class AddedSellerInfoPage {
    @ViewChild(Content) content: Content;
    business_Details : FormGroup;
    personal_Details : FormGroup;
    public retrievedObject:any;
    public localItem:any;
    public register_paypal:boolean=false;
    public sellerInfo:any;
    public interest:any;
    public showCatData:any;
    public showYear:any;
    public verificationResponsepersonal:any = null;
    public verificationResponsebusiness:any = null;
	public userSettings: any = {
		showCurrentLocation: true,
		showSearchButton: false,
		useGoogleGeoApi:true,
		locationIconUrl:"assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
		geoCountryRestriction: ['ae','kw','om','qa','sa']
	};
    
	constructor(public googleanalytics: GoogleAnalytics,public alertCtrl: AlertController,public plt: Platform,public modalCtrl : ModalController,public fb: FormBuilder,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
        this.business_Details = fb.group({
            'business_name' : [null, Validators.compose([Validators.required,Validators.minLength(3)])],
            'business_address' : '',
            'business_relationship':'',
            'business_type':'',
            'payment_opt':'',
            'business_mobile':['+971', Validators.compose([Validators.required,Validators.minLength(10)])],
            'company_number':'',
            'vat_number':'',
            'payment_email':'',
            'email':'',
            'role':'seller',
            'user_id':'',
            'interested_in':'',
            'agrement': [null, Validators.compose([Validators.required])],
            'account_type':'business_account'
        });
        this.personal_Details = fb.group({
            'business_name' : [null, Validators.compose([Validators.required,Validators.minLength(3)])],
            'payment_opt':'',
            'business_mobile':['+971', Validators.compose([Validators.required,Validators.minLength(10)])],
            'payment_email':'',
            'email':'',
            'role':'seller',
            'natinality':'',
            'user_id':'',
            'interested_in':'',
            'agrement': [null, Validators.compose([Validators.required])],
            'account_type':'personal_account'
        });
		
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('AddsellerInfo');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
			
			this.userSettings.showCurrentLocation = false;
		}
    }

    ionViewWillEnter(){

        this.retrievedObject = environment.localItem;
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = environment.localItem;
        }

        $('body').removeClass().addClass('addSellerInfo body');
        $(document).prop('title','Register - More details');
        $( ".zoomContainer" ).remove();
        var d = new Date();
        this.showYear = d.getFullYear();

        this.personal_Details.controls['business_name'].setValue(this.localItem.first_name+ ' ' + this.localItem.last_name);
        this.personal_Details.controls['email'].setValue(this.localItem.email);
        this.personal_Details.controls['natinality'].setValue(this.localItem.natinality);

        if(this.localItem.account_type == "business_account")
            this.business_Details.controls['business_name'].setValue(this.localItem.business_name);
            this.business_Details.controls['email'].setValue(this.localItem.email);

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

	autoCompleteCallback1(selectedData:any) {
		if(selectedData.response == true){
			this.business_Details.controls['business_address'].setValue(selectedData.data.description);
		}
    }
	
    showCategory(){
        this.infoService.showLoading();
        this.infoService.callHttpFunction_post(environment.serverUrl + 'api/category/view-category','',(response)=> {
            this.showCatData = response.categories
            this.infoService.hideLoading();
        },(error) => {
            console.log(error);
            this.infoService.hideLoading();
        });
    }

    changeInput(val:any){
        if(val == "interest"){
            if($('#interest').prop('checked') == true){
                this.interest = true;
            }else{
                this.interest = false;
            }
        }else if(val == "payment"){
            if($('#payment_opt').prop('checked') == true){
                this.register_paypal = true;
            }else{
                this.register_paypal = false;
            }
        }
    }

    registerBusiness(val:any){
		if($('input[name="payment_opt"]:checked').length == 0){
			$('.paymentselect').removeClass('d-none');
			return;
		}
        var val_payment = [];
		$('input[type=checkbox][name=payment_opt]:checked').each(function(i){
			val_payment[i] = $(this).val();
		});
		
		if($('#payment_opt').prop('checked') == true){
			if(val.value.payment_email == ""){
				let alert1 = this.alertCtrl.create({
					title: 'PayPal email',
					subTitle: 'Please enter paypal email address.',
					buttons: [{
						text: 'OK',
						role: 'cancel',
						cssClass:'alert-button-changeColor'
					}]
				});
				alert1.present();
				return;
			}
		}
		
		val.value.payment_opt = val_payment.join(",");
		val.value.user_id = this.localItem.id;
		
        if($('#payment_opt').prop('checked') == true){
            if(this.verificationResponsebusiness == null || this.verificationResponsebusiness.responseEnvelope.ack == 'Failure'){

            }else{
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/convert-buyer-to-seller',val.value,(response)=> {
                    if(response.users.status == "success"){
                        var persons = this.localItem;
                        persons.business_name = val.value.business_name;
                        persons.business_relationship = val.value.business_relationship;
                        persons.company_number = val.value.company_number;
                        persons.payment_email = val.value.payment_email;
                        persons.vat_number = val.value.vat_number;
                        persons.business_mobile = val.value.business_mobile;
                        persons.role = 'seller';
                        localStorage.setItem('userInfo',JSON.stringify(persons));
                        environment.localItem = persons;
                        this.infoService.hideLoading();
                        this.navCtrl.push('DraftListingPage');
                    }else{
                        this.infoService.hideLoading();
                        this.sellerInfo = response;
                    }
                },(error) => {
                    console.log(error);
                    this.infoService.hideLoading();
                });
            }
        }else {
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/convert-buyer-to-seller', val.value, (response) => {
                if (response.users.status == "success") {
                    var persons = this.localItem;
                    persons.business_name = val.value.business_name;
                    persons.business_relationship = val.value.business_relationship;
                    persons.company_number = val.value.company_number;
                    persons.payment_email = val.value.payment_email;
                    persons.vat_number = val.value.vat_number;
                    persons.business_mobile = val.value.business_mobile;
                    persons.role = 'seller';
                    localStorage.setItem('userInfo', JSON.stringify(persons));
                    environment.localItem = persons;
                    this.infoService.hideLoading();
                    this.navCtrl.push('DraftListingPage');
                } else {
                    this.infoService.hideLoading();
                    this.sellerInfo = response;
                }
            }, (error) => {
                console.log(error);
                this.infoService.hideLoading();
            });
        }
    }

    registerPersonal(val:any){
		if($('input[name="payment_opt"]:checked').length == 0){
			$('.paymentselect').removeClass('d-none');
			return;
		}
        var val_payment = [];
		$('input[type=checkbox][name=payment_opt]:checked').each(function(i){
			val_payment[i] = $(this).val();
		});
		
		if($('#payment_opt').prop('checked') == true){
			if(val.value.payment_email == ""){
				let alert1 = this.alertCtrl.create({
					title: 'PayPal email',
					subTitle: 'Please enter paypal email address.',
					buttons: [{
						text: 'OK',
						role: 'cancel',
						cssClass:'alert-button-changeColor'
					}]
				});
				alert1.present();
				return;
			}
		}
		
		val.value.payment_opt = val_payment.join(",");
        
        val.value.user_id = this.localItem.id;
		
        if($('#payment_opt').prop('checked') == true){
            if(this.verificationResponsepersonal == null || this.verificationResponsepersonal.responseEnvelope.ack == 'Failure'){

            }else{
                this.infoService.showLoading();
                this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/convert-buyer-to-seller',val.value,(response)=> {
                    if(response.users.status == "success"){
                        var persons = this.localItem;
                        persons.business_name = val.value.business_name;
                        persons.payment_email = val.value.payment_email;
                        persons.business_mobile = val.value.business_mobile;
                        persons.natinality = val.value.natinality;
                        persons.email = val.value.email;
                        persons.role = 'seller';
                        localStorage.setItem('userInfo',JSON.stringify(persons));
                        environment.localItem = persons;
                        this.infoService.hideLoading();
                        this.navCtrl.push('DraftListingPage');
                    }else{
                        this.infoService.hideLoading();
                        this.sellerInfo = response;
                    }
                },(error) => {
                    console.log(error);
                    this.infoService.hideLoading();
                });
            }
        }else {
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/convert-buyer-to-seller', val.value, (response) => {
                if (response.users.status == "success") {
                    var persons = this.localItem;
                    persons.business_name = val.value.business_name;
                    persons.payment_email = val.value.payment_email;
                    persons.business_mobile = val.value.business_mobile;
                    persons.natinality = val.value.natinality;
                    persons.email = val.value.email;
                    persons.role = 'seller';
                    localStorage.setItem('userInfo', JSON.stringify(persons));
                    environment.localItem = persons;
                    this.infoService.hideLoading();
                    this.navCtrl.push('DraftListingPage');
                } else {
                    this.infoService.hideLoading();
                    this.sellerInfo = response;
                }
            }, (error) => {
                console.log(error);
                this.infoService.hideLoading();
            });
        }
    }

    checkPaypalEmail(val:any,val_role:any){
        if(val_role == "personal") {
            var pass_datapersonal = {
                paypal_email: val
            }
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/pay/verify-paypal-email', pass_datapersonal, (response) => {
                this.verificationResponsepersonal = response;
                this.infoService.hideLoading();
            }, (error) => {
                console.log(error);
                this.infoService.hideLoading();
            });
        }else{
            var pass_dataBusiness = {
                paypal_email: val
            }
            this.infoService.showLoading();
            this.infoService.callHttpFunction_post(environment.serverUrl + 'api/pay/verify-paypal-email', pass_dataBusiness, (response) => {
                this.verificationResponsebusiness = response;
                this.infoService.hideLoading();
            }, (error) => {
                console.log(error);
                this.infoService.hideLoading();
            });
        }
    }

    funccallmodal(val:any){
        var passData = {
            id:val
        }
        var modalPage:any;
        modalPage = this.modalCtrl.create('SellerAgreementPage',passData);
        modalPage.present();
    }

    switchAccount(val:any){
        this.localItem.account_type = val;
    }
}
