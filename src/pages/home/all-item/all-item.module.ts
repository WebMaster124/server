import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllItemPage } from './all-item';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    AllItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AllItemPage),
	ComponentsModule
  ],
})
export class AllItemPageModule {}
