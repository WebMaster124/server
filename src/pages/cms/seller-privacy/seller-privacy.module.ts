import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerPrivacyPage } from './seller-privacy';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    SellerPrivacyPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerPrivacyPage),
	ComponentsModule
  ],
})
export class SellerPrivacyPageModule {}
