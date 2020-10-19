import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveFeedbackSellerPage } from './leave-feedback-seller';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    LeaveFeedbackSellerPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveFeedbackSellerPage),
	ComponentsModule
  ],
})
export class LeaveFeedbackSellerPageModule {}
