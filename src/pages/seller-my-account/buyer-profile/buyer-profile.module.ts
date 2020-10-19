import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyerProfilePage } from './buyer-profile';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import {ComponentsModule} from "../../../components/components.module";
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

@NgModule({
  declarations: [
    BuyerProfilePage,
  ],
  imports: [
      IonicPageModule.forChild(BuyerProfilePage),
      InternationalPhoneModule,
	  ComponentsModule,
	  Ng4GeoautocompleteModule
  ],
})
export class BuyerProfilePageModule {}
