import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactUsPage } from './contact-us';
import {ComponentsModule} from "../../../components/components.module";
import { InternationalPhoneModule } from 'ng4-intl-phone';
@NgModule({
  declarations: [
    ContactUsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactUsPage),
	ComponentsModule,
	InternationalPhoneModule
  ],
})
export class ContactUsPageModule {}
