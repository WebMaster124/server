import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqListingPage } from './faq-listing';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    FaqListingPage,
  ],
  imports: [
    IonicPageModule.forChild(FaqListingPage),
	ComponentsModule
  ],
})
export class FaqListingPageModule {}
