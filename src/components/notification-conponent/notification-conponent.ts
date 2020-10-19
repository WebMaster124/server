import { Component } from '@angular/core';
import { environment } from '../../environments/environment'
import { InfoService } from '../../services/info';
import { Events } from 'ionic-angular';

declare var $:any;

@Component({
	selector: 'notification-component',
	templateUrl: 'notification-conponent.html'
})
export class NotificationConponentComponent {
	public retrievedObject:any;
	public localItem:any;
	public shownotificationData:any;
	
	constructor(public events: Events,public infoService:InfoService) {
		this.retrievedObject = environment.localItem;
		if(this.retrievedObject == null || this.retrievedObject == ''){
		  this.localItem = null;
		}else{
		  this.localItem = environment.localItem;
		}
		
		this.events.subscribe('notification:functioncall', () => {
		  this.callnotification();
		});
		
		this.callnotification();
	}

	callnotification(){
		var passData = {
			user_id : this.localItem.id,
			notification : true
		}
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/announcement/view-announcements',passData,(response)=> {
			this.shownotificationData = response.announcements;
			if(response.announcements.count > 0){
				$('#announcementCount').text(response.announcements.count);
				$('#announcementCount_mobile').text(response.announcements.count);
			}else{
				$('#announcementCount').text('');
				$('#announcementCount_mobile').text('');
			}
		},(error) => {
			console.log(error);
		});
	}
	
	readNotification(val:any){
		var passunreadData = {
			user_id : this.localItem.id,
			id : val
		}
	
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/announcement/unread-announcement',passunreadData,(response)=> {
			this.callnotification();
		},(error) => {
			console.log(error);
		});
	}
}
