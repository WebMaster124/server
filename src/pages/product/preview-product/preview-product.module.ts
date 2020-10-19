import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviewProductPage } from './preview-product';
import { PipesModule } from '../../../pipes/pipes.module';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    PreviewProductPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviewProductPage),
    PipesModule,
	ComponentsModule
  ],
})
export class PreviewProductPageModule {}
