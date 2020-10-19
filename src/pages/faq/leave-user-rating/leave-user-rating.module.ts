import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveUserRatingPage } from './leave-user-rating';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    LeaveUserRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveUserRatingPage),
	ComponentsModule
  ],
})
export class LeaveUserRatingPageModule {}
