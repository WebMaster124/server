import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveFeedbackPage } from './leave-feedback';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    LeaveFeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveFeedbackPage),
	ComponentsModule
  ],
})
export class LeaveFeedbackPageModule {}
