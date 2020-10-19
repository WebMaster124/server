import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessDetailsPage } from './business-details';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    BusinessDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessDetailsPage),
	InternationalPhoneModule,
	ComponentsModule
  ],
})
export class BusinessDetailsPageModule {}
