import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAgreementPage } from './user-agreement';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    UserAgreementPage,
  ],
  imports: [
    IonicPageModule.forChild(UserAgreementPage),
	ComponentsModule
  ],
})
export class UserAgreementPageModule {}
