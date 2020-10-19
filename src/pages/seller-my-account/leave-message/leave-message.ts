import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
declare var $:any;
/**
 * Generated class for the LeaveMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment:'ViewMessageDetail/:id'
})
@Component({
  selector: 'page-leave-message',
  templateUrl: 'leave-message.html',
})
export class LeaveMessagePage {
    @ViewChild(Content) content: Content;
	public show_msgdata:any
	public UserId:any = environment.localItem.id;
	public trandingImgUrl:any;
	public userImg:any = environment.imageProduct + '/user/';
	public getData_decode:any;
	public convert_decode:any; 
    public convert_parse:any; 
    public showYear:any;
    public retrievedObject:any;
    public localItem:any;

	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('LeaveMessage');
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

		$('body').removeClass().addClass('LeaveMsg body');
		$(document).prop('title','Leave Message');
        $( ".zoomContainer" ).remove();
		this.getData_decode = this.navParams.data.id;
		this.convert_decode = atob(this.getData_decode);
		this.convert_parse = JSON.parse(this.convert_decode);
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

	sendMessage(){
		var send_megData = {
			sender_id:environment.localItem.id,
			receiver_id:this.convert_parse.receiver_id,
			product_id:this.convert_parse.product_id,
			message:$('#sendmsg').val()
		}
		try{
			this.infoService.showLoading();
			$('#sendmsg').val('');
			
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/send-message',send_megData,(response)=> {
				if(response.message.status == "success"){
					this.infoService.hideLoading();
					this.showMessageDetails();
				}else{
					this.infoService.hideLoading();
				}
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
			this.infoService.hideLoading();
		}
	}
	
	showMessageDetails(){
		//var message_Data = this.convert_parse;
		try{
			this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/view-messages',this.convert_parse,(response)=> {
			 this.trandingImgUrl = environment.imageProduct + '/product/';
				this.show_msgdata = response.message;
				setTimeout(function(){
					var objDiv = (<any>document).getElementById("chat_area");
					objDiv.scrollTop = objDiv.scrollHeight;
				},150);
				this.viewMsgCount();
			},(error) => {
				console.log(error);
			});
		}catch(Error){
			console.log(Error);
		}
	}
	
    viewMsgCount(){
        if(this.localItem == null){

        }else{
            try{
                var msg_details:any = {
                    user_id:this.localItem.id
                }
                this.infoService.callHttpFunction_post(environment.serverUrl + 'api/message/unread-msg-count',msg_details,(response)=> {
                    if(response.count.status == "success" && response.count.cnt > 0){
                        $('#ShowMessageCount').text(response.count.cnt);
                        $('#ShowMsgCount').text(response.count.cnt);
                    }else{
                        $('#ShowMessageCount').text('');
                        $('#ShowMsgCount').text('');
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
