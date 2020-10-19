import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportItemPage } from './report-item';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    ReportItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportItemPage),
	ComponentsModule
  ],
})
export class ReportItemPageModule {}
