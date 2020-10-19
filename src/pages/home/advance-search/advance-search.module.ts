import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvanceSearchPage } from './advance-search';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    AdvanceSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvanceSearchPage),
	ComponentsModule
  ],
})
export class AdvanceSearchPageModule {}
