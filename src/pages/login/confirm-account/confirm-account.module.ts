import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmAccountPage } from './confirm-account';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    ConfirmAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmAccountPage),
	ComponentsModule
  ],
})
export class ConfirmAccountPageModule {}
