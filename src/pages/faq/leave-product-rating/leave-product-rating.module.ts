import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveProductRatingPage } from './leave-product-rating';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    LeaveProductRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveProductRatingPage),
	ComponentsModule
  ],
})
export class LeaveProductRatingPageModule {}
