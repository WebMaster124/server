import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailsPage } from './product-details';
import { PipesModule } from '../../../pipes/pipes.module';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    ProductDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailsPage),
	PipesModule,
	ComponentsModule
  ],
})
export class ProductDetailsPageModule {}
