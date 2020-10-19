import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveMessagePage } from './leave-message';
import {ComponentsModule} from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';
@NgModule({
  declarations: [
    LeaveMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveMessagePage),
	ComponentsModule,
	PipesModule
  ],
})
export class LeaveMessagePageModule {}
