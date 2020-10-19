import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerpaymentSuccessPage } from './sellerpayment-success';
import {ComponentsModule} from "../../components/components.module";
@NgModule({
  declarations: [
    SellerpaymentSuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerpaymentSuccessPage),
	ComponentsModule
  ],
})
export class SellerpaymentSuccessPageModule {}
