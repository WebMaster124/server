import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThankyouPage } from './thankyou';
import {ComponentsModule} from "../../components/components.module";
@NgModule({
  declarations: [
    ThankyouPage,
  ],
  imports: [
    IonicPageModule.forChild(ThankyouPage),
	ComponentsModule
  ],
})
export class ThankyouPageModule {
	
	 submitForm(){
	  alert("hii");
  }
	
	
}
