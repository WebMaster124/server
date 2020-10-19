import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactSellerPage } from './contact-seller';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    ContactSellerPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactSellerPage),
	ComponentsModule
  ],
})
export class ContactSellerPageModule {}
