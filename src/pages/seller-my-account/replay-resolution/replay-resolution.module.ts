import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReplayResolutionPage } from './replay-resolution';
import {ComponentsModule} from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';
@NgModule({
  declarations: [
    ReplayResolutionPage,
  ],
  imports: [
    IonicPageModule.forChild(ReplayResolutionPage),
	ComponentsModule,
	PipesModule
  ],
})
export class ReplayResolutionPageModule {}
