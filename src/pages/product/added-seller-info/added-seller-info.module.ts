import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddedSellerInfoPage } from './added-seller-info';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import {ComponentsModule} from "../../../components/components.module";
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
@NgModule({
  declarations: [
    AddedSellerInfoPage,
  ],
  imports: [
      IonicPageModule.forChild(AddedSellerInfoPage),
      InternationalPhoneModule,
	  ComponentsModule,
	  Ng4GeoautocompleteModule
  ],
})
export class AddedSellerInfoPageModule {}
