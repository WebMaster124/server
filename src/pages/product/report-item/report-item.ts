import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
declare var $:any;

/**
 * Generated class for the ReportItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment:'report-item/:id'
})
@Component({
  selector: 'page-report-item',
  templateUrl: 'report-item.html',
})
export class ReportItemPage {
    @ViewChild(Content) content: Content;
	public data_item:any;
	public trandingImgUrl:any;
	public report_item = {
		reported_by : '',
		product_id : '',
		reason : '',
		report_reasons : []
	}
	public show_successMsg:boolean = false;
	public response_report:any;
	public getData_decode:any;
	public convert_decode:any;
	public convert_parse:any;
	public showYear:any;
    public retrievedObject:any;
    public localItem:any;

	constructor(public googleanalytics: GoogleAnalytics,public plt: Platform,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('ReportItem');
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
		$(document).prop('title','Report Item');
		$('body').removeClass().addClass('ReportItem body');
        $( ".zoomContainer" ).remove();
		this.trandingImgUrl = environment.imageProduct + '/product/';
		this.getData_decode = this.navParams.data.id;
		this.convert_decode = atob(this.getData_decode);
		this.convert_parse = JSON.parse(this.convert_decode);
		
		this.data_item = this.convert_parse;
        var d = new Date();
        this.showYear = d.getFullYear();
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

	ReportItem(){
		if(environment.localItem == null){
		}else{
			this.report_item.reported_by = environment.localItem.id;
			this.report_item.product_id = this.data_item.ProId;
			this.report_item.reason = $('#OtherReason').val();
			this.report_item.report_reasons.push($('#reportcategory').val());
			this.report_item.report_reasons.push($('#reportreason').val());
			this.report_item.report_reasons.push($('#detailedreason').val());
			
			try{
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/report/product-report',this.report_item,(response)=> {
					if(response.product_report.status == "success"){
						this.response_report = response;
						this.show_successMsg = true;
						this.infoService.hideLoading();
					}else{
						this.show_successMsg = true;
						this.response_report = response;
						this.infoService.hideLoading();
					}
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
				});
			}catch(Error){
				console.log(Error);
				this.infoService.hideLoading();
			}
		}
	}
	
	goToback(){
		this.navCtrl.popToRoot();
	}
}
