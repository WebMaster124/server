import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeesCalculatorPage } from './fees-calculator';
import {ComponentsModule} from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    FeesCalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(FeesCalculatorPage),
	ComponentsModule,
	PipesModule
  ],
})
export class FeesCalculatorPageModule {}
