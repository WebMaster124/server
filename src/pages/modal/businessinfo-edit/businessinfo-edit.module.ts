import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessinfoEditPage } from './businessinfo-edit';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { InternationalPhoneModule } from 'ng4-intl-phone';
@NgModule({
  declarations: [
    BusinessinfoEditPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessinfoEditPage),
	Ng4GeoautocompleteModule,
	InternationalPhoneModule
  ],
})
export class BusinessinfoEditPageModule {}
