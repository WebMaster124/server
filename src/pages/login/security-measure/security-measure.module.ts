import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecurityMeasurePage } from './security-measure';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    SecurityMeasurePage,
  ],
  imports: [
    IonicPageModule.forChild(SecurityMeasurePage),
	ComponentsModule
  ],
})
export class SecurityMeasurePageModule {}
