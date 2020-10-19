import { Component, ViewChild} from '@angular/core';
import { Content, IonicPage, NavController, NavParams, Platform,Events} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
declare var $:any;
@IonicPage({
	segment:"notification/:id"
})
@Component({
  selector: 'page-notification-details',
  templateUrl: 'notification-details.html',
})
export class NotificationDetailsPage {
	@ViewChild(Content) content: Content;
	public retrievedObject:any;
	public notificationDetailsData:any;
	public localItem:any = '';
	public docsNotification:boolean = false;
	public singleNotification:boolean = false;
	public multipleNotification:boolean = false;
	constructor(public googleanalytics: GoogleAnalytics,public events: Events,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('NotificationDetails');
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

		$('body').removeClass().addClass('notification-details body');
		$(document).prop('title','Notification details');
        $( ".zoomContainer" ).remove();
		$(".searchanythingform").trigger("reset");
		if(this.navParams.data.id == 'all'){
			this.callmultiplenotificationDetails();
		}else{
			this.callnotificationDetails();
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

	callnotificationDetails(){
		var passunreadData = {
			id : this.navParams.data.id,
			user_id : this.localItem.id,
			notification : true
		}
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/announcement/view-announcements',passunreadData,(response)=> {

			this.notificationDetailsData =  response.announcements;
alert(this.notificationDetailsData.ext);

                        if(this.notificationDetailsData.ext=='pdf'){
                            this.docsNotification = true;
                            alert(this.docsNotification);
                        }
			this.singleNotification = true;
			this.events.publish('notification:functioncall');
		},(error) => {
			console.log(error);
		});
	}
	
	callmultiplenotificationDetails(){
		var passData = {
			user_id : this.localItem.id,
			view_all : true
		}
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/announcement/view-announcements',passData,(response)=> {
			this.notificationDetailsData = response.announcements;
			this.multipleNotification = true;
			this.events.publish('notification:functioncall');
		},(error) => {
			console.log(error);
		});
	}
}
