import { Component,ViewChild } from '@angular/core';
import { Content, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
  segment:'e/:id'
})
@Component({
  selector: 'page-show-error',
  templateUrl: 'show-error.html',
})
export class ShowErrorPage {

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    $('body').removeClass().addClass('ErrorPage body');
    $(document).prop('title','Error Page | Dibdaa');
  }

  ngAfterViewInit() {
    if(this.content._scroll) {
      this.content.ionScrollEnd.subscribe((data)=>{

        if(data == null)
          return false;

        if(data.scrollTop >= "130"){
          $('.top-header').slideUp();
        }else{
          $('.top-header').slideDown();
        }
      });
    }
  }
}
