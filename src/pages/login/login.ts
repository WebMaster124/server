import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, App, ModalController, AlertController,Platform} from 'ionic-angular';
import { InfoService } from '../../services/info';
import { environment } from '../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
//import {HomePage} from '../home/home';
//import { GooglePlus } from '@ionic-native/google-plus';
//import { LinkedIn } from '@ionic-native/linkedin';
//import { TwitterConnect } from '@ionic-native/twitter-connect';
import './jquery.multiselect.js';
import './flogin.js';
declare var $:any;

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	name: 'LoginPage',
	segment: 'USR/:id'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	public verification_code:boolean =  true;
	public login_error:any;
	public register_personal:any;
	public register_Business_1:any;
	public imgcaptch_disp:any;
	public showYear_footer:any;
	constructor(public plt: Platform,public googleanalytics: GoogleAnalytics,public alertCtrl: AlertController,public modalCtrl : ModalController,public appCtrl: App,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('Login');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
		}
	}

	ionViewWillEnter(){
		$(document).attr('title',this.navParams.data.id);
		$('body').removeClass().addClass('Login body');
		this.imgcaptch_disp = Math.floor(100000 + Math.random() * 900000)
        var d = new Date();
        this.showYear_footer = d.getFullYear();
        $( ".zoomContainer" ).remove();
	}
	
	ionViewDidLoad() {
		var self = this;
		self.infoService.showLoading();
		if(self.navParams.data.id == "register"){
			setTimeout(function () {
				(<any>document).getElementById('register-form-link').click();
				(<any>document).getElementById('personal').checked = true;
				$('.Optionstrue').removeClass('d-none');
				$('.Optionsfalse').addClass('d-none');
				self.infoService.hideLoading();
			},1500);
		}else if(self.navParams.data.id == "dibdaaPremium"){
            setTimeout(function () {
                (<any>document).getElementById('register-form-link').click();
                (<any>document).getElementById('business').checked = true;
				$('.Optionsfalse').removeClass('d-none');
				$('.Optionstrue').addClass('d-none');
			   self.infoService.hideLoading();
            },1500);
		}else if(self.navParams.data.id == "registerBusiness"){
            setTimeout(function () {
                (<any>document).getElementById('register-form-link').click();
                (<any>document).getElementById('personal_business').checked = true;
				$('.Optionstrue').removeClass('d-none');
				$('.Optionsfalse').addClass('d-none');
			   self.infoService.hideLoading();
            },1500);
        }else {
            self.infoService.hideLoading();
        }
    }

    changeAccount(val:any,val1:any){
		if(val1 == 'personal'){
			$('.hidenationality').removeClass('d-none');
			$('.hideBusinessName').addClass('d-none');
			$('.Optionstrue').removeClass('d-none');
			$('.Optionsfalse').addClass('d-none');
		}else if(val1 == 'business'){
			$('.hidenationality').addClass('d-none');
			$('.hideBusinessName').removeClass('d-none');
			$('.Optionstrue').removeClass('d-none');
			$('.Optionsfalse').addClass('d-none');
		}else if(val1 == 'premimum'){
            $('.hidenationality').removeClass('d-none');
			$('.hideBusinessName').addClass('d-none');
			$('.Optionstrue').addClass('d-none');
			$('.Optionsfalse').removeClass('d-none');
		}
	}

	show_Register(){
        var path_register = window.location.href;
        var BSURL_register = path_register.split("USR");
		var path, BSURL;
        if(BSURL_register[1] == '/login'){
			$('#login-form').addClass('d-none');
			$('#register-form').removeClass('d-none');
            $('.hidenationality').removeClass('d-none');
			$('.hideBusinessName').addClass('d-none');
			
			 path = window.location.href;
			 BSURL = path.split("USR");
			history.pushState(null, '', BSURL[0]+'USR/register');
			$(document).attr('title','register');
			setTimeout(function () {
				$('.Optionstrue').removeClass('d-none');
				$('.Optionsfalse').addClass('d-none');
				$('#login-form-link').removeClass('active');
				$('#register-form-link').addClass('active');
				
				if ($("#personal").prop("checked") == true){

				}
				else
					(<any>document).getElementById('personal').checked = true;
			},500);
        }else if(BSURL_register[1] == "/registerBusiness"){
            $('#login-form').addClass('d-none');//css('display','none');
            $('#register-form').removeClass('d-none');//.css('display', 'block');
			$('.hideBusinessName').removeClass('d-none');
			$('.hidenationality ').addClass('d-none');
            setTimeout(function () {
				$('.Optionstrue').removeClass('d-none');
				$('.Optionsfalse').addClass('d-none');
                $('#login-form-link').removeClass('active');
                $('#register-form-link').addClass('active');

                if ($("#personal").prop("checked") == true){
                }
                else
                    (<any>document).getElementById('personal_business').checked = true;
            },500);
		}else if(BSURL_register[1] == "/dibdaaPremium"){
            $('#login-form').addClass('d-none');
            $('#register-form').removeClass('d-none');
			$('.hideBusinessName').removeClass('d-none');
			$('.hidenationality ').addClass('d-none');
            setTimeout(function () {
				$('.Optionstrue').addClass('d-none');
				$('.Optionsfalse').removeClass('d-none');
                $('#login-form-link').removeClass('active');
                $('#register-form-link').addClass('active');

                if ($("#personal").prop("checked") == true){
                }
                else
                    (<any>document).getElementById('business').checked = true;
            },500);
		}else if(BSURL_register[1] == "/register"){
            $('#login-form').addClass('d-none');
            $('#register-form').removeClass('d-none');
			$('.hideBusinessName').addClass('d-none');
			$('.hidenationality ').removeClass('d-none');
            path = window.location.href;
            BSURL = path.split("USR");
            history.pushState(null, '', BSURL[0]+'USR/register');
            $(document).attr('title','register');
            setTimeout(function () {
                $('#login-form-link').removeClass('active');
                $('#register-form-link').addClass('active');
				$('.Optionstrue').removeClass('d-none');
				$('.Optionsfalse').addClass('d-none');
                if ($("#personal").prop("checked") == true){

                }
                else
                    (<any>document).getElementById('personal').checked = true;
            },500);
		}
	}
	
	show_Login(){
		alert("HII");
		$('#register-form-link').removeClass('active');
        $('#login-form-link').addClass('active');
		$('#login-form').removeClass('d-none');
		$('#register-form').addClass('d-none');
		var path_login = window.location.href;
		var BSURL_login = path_login.split("USR");
		history.pushState(null, '', BSURL_login[0]+'USR/login');
		$(document).attr('title','login');
	}
	
	show_text(){
		if($('#showpassword').prop('checked') == true){
		  $('#password-reg').prop('type','text');
		}else{
		  $('#password-reg').prop('type','password');
		}
	}
	
	loginUser(val:any){
		alert("lflsdf");
		if(val.value.user_name == ""){
			let alert1 = this.alertCtrl.create({
				title: 'Sign In',
				subTitle: 'Email Or Username is required!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert1.present();
			return false;
		}
		
		if(val.value.password == ""){
			let alert2 = this.alertCtrl.create({
				title: 'Sign In',
				subTitle: 'Password is required!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert2.present();
			return false;
		}
		
		if(val.value.password.length < 6){
			let alert2 = this.alertCtrl.create({
				title: 'Sign In',
				subTitle: 'Minimum password length is 6!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert2.present();
			return false;
		}
		
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/login',val.value,(response)=> {
			if(response.user.status == "success"){
				localStorage.setItem('checkuserLogin','Yes');
				localStorage.setItem('userInfo',JSON.stringify(response.user.msg));
				environment.isLogin = true;
				var retrievedObject = localStorage.getItem('userInfo');
				environment.localItem = JSON.parse(retrievedObject);
				this.countCart(response.user.msg.id);
				var pageDetails = localStorage.getItem('getPageDetails');
				
				this.infoService.hideLoading();
				if(pageDetails == 'return' || pageDetails == 'resolutionCenter' || pageDetails == 'message' || pageDetails == 'SavedDrafts' || pageDetails == 'Active' || pageDetails == 'SavedSellers' || pageDetails == 'SavedSearches' || pageDetails == 'Bids' || pageDetails == 'PurchaseHistory' || pageDetails == 'WishList' || pageDetails == 'MyAddresses' || pageDetails == 'account' ){
					this.appCtrl.getRootNav().push('SellerMyAccountPage',{
						id:pageDetails
					});
					localStorage.removeItem('getPageDetails');
				}else if(pageDetails == 'HomePage' || pageDetails == 'ViewCartPage'){
					this.appCtrl.getRootNav().push(pageDetails);
					localStorage.removeItem('getPageDetails');
				}else if(pageDetails == 'DraftListingPage'){
					if(response.user.msg.role == 'seller')
						this.appCtrl.getRootNav().push(pageDetails);
					else
						this.appCtrl.getRootNav().push('AddedSellerInfoPage');
					
					localStorage.removeItem('getPageDetails');
				}else if(pageDetails == 'RecentlyViewed'){
					this.appCtrl.getRootNav().push('AllItemPage',{
						id:pageDetails
					});
					localStorage.removeItem('getPageDetails');
				}else if(pageDetails == 'ProductDetailsPage'){
					this.navCtrl.pop();
					localStorage.removeItem('getPageDetails');
				}else if(pageDetails == 'writereviewPage'){
					var makeofferData = localStorage.getItem('getreviewData');
					this.navCtrl.push('LeaveProductRatingPage',{
						id:makeofferData
					});
					localStorage.removeItem('getPageDetails');
					localStorage.removeItem('getreviewData');
				}else{
					this.appCtrl.getRootNav().push('HomePage');
					localStorage.removeItem('getPageDetails');
				}
			}else {
				this.login_error = response.user.msg;
				$('#errf').removeClass('hide');
				this.infoService.hideLoading();
			}
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
	
	registerpersonalUser(val:any){
		val.value.userrole = 'buyer';
		if(val.value.first_name == ""){
			let alert2 = this.alertCtrl.create({
				title: 'Register',
				subTitle: 'Name is required!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert2.present();
			return false;
		}
			
		if(val.value.last_name == ""){
			let alert3 = this.alertCtrl.create({
				title: 'Register',
				subTitle: 'Last Name is required!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert3.present();
			return false;
		}
		
		if(val.value.email == ""){
			let alert4 = this.alertCtrl.create({
				title: 'Register',
				subTitle: 'Email is not valid!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert4.present();
			return false;
		}
		
		if(val.value.password == ""){
			let alert5 = this.alertCtrl.create({
				title: 'Register',
				subTitle: 'Password is required!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert5.present();
			return false;
		}
		
		if(val.value.password.length < 6){
			let alert7 = this.alertCtrl.create({
				title: 'Register',
				subTitle: 'Minimum password length is 6!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert7.present();
			return false;
		}
		
		if(val.value.agrement == ""){
			let alert8 = this.alertCtrl.create({
				title: 'Register',
				subTitle: 'Please check agree if you want to proceed!',
				buttons: [{
					text: 'OK',
					role: 'cancel',
					cssClass:'alert-button-changeColor'
				}]
			});
			alert8.present();
			return false;
		}
		
		if ($("input[name='options'][value='personal_account']").prop("checked")){
            val.value.account_type = 'personal_account';
			if(val.value.natinality == "" || val.value.natinality == undefined){
				let alert1 = this.alertCtrl.create({
					title: 'Personal account',
					subTitle: 'Please select Nationality.',
					buttons: [{
						text: 'OK',
						role: 'cancel',
						cssClass:'alert-button-changeColor'
					}]
				});
				alert1.present();
				return false;
			}
		}else if ($("input[name='options'][value='business_account']").prop("checked")){
			val.value.account_type = 'business_account'
			if(val.value.business_name == ""){
				let alert1 = this.alertCtrl.create({
					title: 'Business account',
					subTitle: 'Business Name is required!',
					buttons: [{
						text: 'OK',
						role: 'cancel',
						cssClass:'alert-button-changeColor'
					}]
				});
				alert1.present();
				return false;
			}
		}else {
            val.value.account_type = 'business_account'
        }

		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/buyer-registration',val.value,(response)=> {
			if(response.user.status == "success"){
				this.infoService.hideLoading();
				localStorage.setItem('registerBusinessEmail',val.value.email);
				localStorage.setItem('registerConfirm',response.user.user_id);
				this.navCtrl.push('ConfirmAccountPage');
			}else {
				this.register_personal = response;
				this.infoService.hideLoading(); 
			}
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}

	registerbusinessUser(val:any){
		if($('#txtCaptcha').val() != val.value.imgcaptcha){
			this.verification_code = false;
		}else{
			this.verification_code = true;
			this.infoService.showLoading();
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/seller-registration',val.value,(response)=> {
				if(response.user.status == "success"){
					this.infoService.hideLoading();
					localStorage.setItem('registerBusinessEmail',val.value.email);
					this.navCtrl.push('BusinessDetailsPage', {
						id: response.user.user_id	
					});
				}else {
					this.register_Business_1 = response;
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
				this.infoService.hideLoading();
			});
		}
	}
	
	changeNumber(){
		this.imgcaptch_disp = Math.floor(100000 + Math.random() * 900000);
	}
	
	gotoSecurity(){
		this.navCtrl.push('SecurityMeasurePage');
	}
	
	countCart(val:any){
		var cart_details:any = {
			user_id:val
		}

		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/unread-msg-count',cart_details,(response)=> {
			if(response.count.status == "success" && response.count.cnt > 0){
				$('#ShowMessageCount').text(response.count.cnt);
				$('#ShowMsgCount').text(response.count.cnt);
			}

			if(response.count.status == "success" && response.count.cart_total > 0){
				$('#addtoCount').text(response.count.cart_total);
				$('#addtoCount_mobile').text(response.count.cart_total);
			}
			
			if(response.count.status == "success" && response.count.announcement_cnt > 0){
				$('#announcementCount').text(response.count.announcement_cnt);
				$('#announcementCount_mobile').text(response.count.announcement_cnt);
			}
		},(error) => {
			console.log(error);
		});
	}

    funccallmodal(val:any){
		var passData = {
			id:val
		}
        var modalPage:any;
        modalPage = this.modalCtrl.create('SellerAgreementPage',passData);
        modalPage.present();
    }
	
	readLearnmore(){
		$('.learn-more').removeClass('d-none');
	}
}

$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
		$(this).toggleClass("glyphicon-remove  glyphicon-menu-hamburger");
	});
});