import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPrivacyPage } from './user-privacy';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    UserPrivacyPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPrivacyPage),
	ComponentsModule
  ],
})
export class UserPrivacyPageModule {}
