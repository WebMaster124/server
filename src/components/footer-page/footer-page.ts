import { Component, OnInit} from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { environment } from '../../environments/environment'
import { InAppBrowser,InAppBrowserOptions  } from '@ionic-native/in-app-browser';
/**
 * Generated class for the FooterPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer-page',
  templateUrl: 'footer-page.html'
})
export class FooterPageComponent implements OnInit{
  public retrievedObject:any;
  public localItemData:any;
  public showYear:any;

  constructor(public iab: InAppBrowser,public navCtrl: NavController,public platform: Platform) {
    this.retrievedObject = environment.localItem;
    if(this.retrievedObject == null || this.retrievedObject == ''){
      this.localItemData = null;
    }else{
      this.localItemData = environment.localItem;
    }
  }

  ngOnInit(){
	var d = new Date();
	this.showYear = d.getFullYear();
  }

  callCMSPage(val:any){
    if(val == 'register' || val == "dibdaaPremium" || val == "login"){
      localStorage.setItem('getPageDetails','resolutionCenter');
      this.navCtrl.push('LoginPage', {
        id: val
      });
    }else if(val == "add-product"){
      this.navCtrl.push('DraftListingPage');
    }else if(val == "resolutioncenter" || val == "cookies" || val == "comingsoon" || val == "userprivacy" || val == "useragreement" || val == "security-center" || val == "affiliates" ||  val == "policies"  || val == "announcements" || val == "about-us"){
      this.navCtrl.push('AboutUsPage', {
        id: val
      });
    }else if(val == "FaqPage"){
		if(this.navCtrl.getActive().name == "FaqPage"){
			return;
		}
		
		this.navCtrl.push('FaqPage');
	}else if(val == "contactUs"){
		if(this.navCtrl.getActive().name == "ContactUsPage"){
			return;
		}
		
		this.navCtrl.push('ContactUsPage');
	}else if(val == "site-map"){
		if(this.navCtrl.getActive().name == "SiteMapPage"){
			return;
		}
		
		this.navCtrl.push('SiteMapPage');
	}else if(val == "faq-listing"){
		if(this.navCtrl.getActive().name == "FaqListingPage"){
			return;
		}
		
		this.navCtrl.push('FaqListingPage',{
			id : '7'
		});
	}
  }

	openURLInBrowser(val:any){
		let target = "_blank";
		let options : InAppBrowserOptions = {
			location : 'yes',//Or 'no' 
			hidden : 'no', //Or  'yes'
			hardwareback : 'no',
			mediaPlaybackRequiresUserAction : 'no',
		};
		let browser:any;
		if(val == "Facebook"){
			browser = this.iab.create("https://www.facebook.com/dibdaa/",target,options);
		}else if(val == "Instagram"){
			browser = this.iab.create("https://www.instagram.com/dibdaa/",target,options);
		}else if(val == "Twitter"){
			browser = this.iab.create("https://twitter.com/dibdaa",target,options);
		}else if(val == "LinkedIn"){
			browser = this.iab.create("https://www.linkedin.com/company/dibdaa",target,options);
		}
		
		browser.on('loadstop').subscribe(event => {
		});
	}
}
