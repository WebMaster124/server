import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfilePage } from './user-profile';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import {ComponentsModule} from "../../../components/components.module";
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { PipesModule } from '../../../pipes/pipes.module';
@NgModule({
  declarations: [
    UserProfilePage,
  ],
  imports: [
      IonicPageModule.forChild(UserProfilePage),
      InternationalPhoneModule,
	  ComponentsModule,
	  Ng4GeoautocompleteModule,
	  PipesModule
  ],
})
export class UserProfilePageModule {}
