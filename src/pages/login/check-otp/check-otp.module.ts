import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckOtpPage } from './check-otp';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    CheckOtpPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckOtpPage),
	ComponentsModule
  ],
})
export class CheckOtpPageModule {}
