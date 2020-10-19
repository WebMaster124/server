import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewpurchaseUserlistPage } from './viewpurchase-userlist';
import {Ng2PaginationModule} from 'ng2-pagination';
import {ComponentsModule} from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';
@NgModule({
  declarations: [
    ViewpurchaseUserlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewpurchaseUserlistPage),
	Ng2PaginationModule,
	ComponentsModule,
	PipesModule
  ],
})
export class ViewpurchaseUserlistPageModule {}
