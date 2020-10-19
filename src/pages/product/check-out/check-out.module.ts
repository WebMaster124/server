import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckOutPage } from './check-out';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { ComponentsModule } from "../../../components/components.module";
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

@NgModule({
  declarations: [
    CheckOutPage,
  ],
  imports: [
	IonicPageModule.forChild(CheckOutPage),
    InternationalPhoneModule,
	ComponentsModule,
	Ng4GeoautocompleteModule
  ],
})
export class CheckOutPageModule {}
