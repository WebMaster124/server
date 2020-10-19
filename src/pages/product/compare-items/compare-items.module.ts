import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompareItemsPage } from './compare-items';
import { PipesModule } from '../../../pipes/pipes.module';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
      CompareItemsPage
  ],
  imports: [
    IonicPageModule.forChild(CompareItemsPage),
	PipesModule,
	ComponentsModule
  ],
})
export class CompareItemsPageModule {}
