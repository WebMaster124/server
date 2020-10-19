import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerMyAccountPage } from './seller-my-account';
import { Ng2PaginationModule } from 'ng2-pagination';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import {ComponentsModule} from "../../components/components.module";
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SellerMyAccountPage,
  ],
  imports: [
      IonicPageModule.forChild(SellerMyAccountPage),
	  Ng2PaginationModule,
      InternationalPhoneModule,
	  ComponentsModule,
	  Ng4GeoautocompleteModule,
	  PipesModule
  ],
})
export class SellerMyAccountPageModule {}
