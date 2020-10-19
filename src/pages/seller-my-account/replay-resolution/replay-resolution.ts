import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
declare var $:any;
/**
 * Generated class for the ReplayResolutionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment:'ViewThreadDetail/:id'
})

@Component({
  selector: 'page-replay-resolution',
  templateUrl: 'replay-resolution.html',
})

export class ReplayResolutionPage {
    @ViewChild(Content) content: Content;
	public show_msgdata:any;
	public trandingImgUrl:any;
	public Userrole:any;
	public ProducrId:any;
	public retrievedObject:any;
	public getData_decode:any;
	public convert_decode:any;
	public convert_parse:any;
	public showYear:any;

	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('Replyresolution');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
		}
	}

	ionViewWillEnter() {
        this.retrievedObject = localStorage.getItem('userInfo');
        this.Userrole = JSON.parse(this.retrievedObject);

		$(document).prop('title','Show Thread');
		$('body').removeClass().addClass('replyresolution body');
        $( ".zoomContainer" ).remove();
		this.getData_decode = this.navParams.data.id;
		this.convert_decode	= atob(this.getData_decode);
		this.convert_parse	= JSON.parse(this.convert_decode);
        var d = new Date();
        this.showYear = d.getFullYear();
		this.showMessageDetails();
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

	showMessageDetails(){
		this.ProducrId = this.convert_parse.product_id
		var return_thread = this.convert_parse;
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/resolution-center/view-resolution-thread-center',return_thread,(response)=> {
            this.show_msgdata = response.resolution_center;
			this.trandingImgUrl = environment.imageProduct;
			setTimeout(function(){
					var objDiv = (<any>document).getElementById("chat_area");
					objDiv.scrollTop = objDiv.scrollHeight;
				},150);
			this.infoService.hideLoading();
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}

	sendMessage(){
        var rply_question:any;
		if(parseInt(this.convert_parse.seller_id) == parseInt(this.Userrole.id)){
            rply_question = {
                ticket_id: this.convert_parse.ticketId,
                reply : $('#sendmsg').val(),
                user_role :  'seller'
            }
		}else{
            rply_question = {
                ticket_id: this.convert_parse.ticketId,
                reply : $('#sendmsg').val(),
                user_role :  'buyer'
            }
		}
		
		$('#sendmsg').val('');
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/resolution-center/reply-resolution-center',rply_question,(response)=> {
			this.infoService.hideLoading();
			this.showMessageDetails();
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
	
	changeStatus(){
		var close_status = {
			seller_id : this.show_msgdata.data[0].seller_id ,
			buyer_id : this.show_msgdata.data[0].buyer_id,
			product_id : this.show_msgdata.data[0].product_id,
			status : 'Close'
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/resolution-center/change-ticket-status',close_status,(response)=> {
			this.infoService.hideLoading();
			this.showMessageDetails();
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
}
