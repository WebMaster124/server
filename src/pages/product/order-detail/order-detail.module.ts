import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderDetailPage } from './order-detail';
import { PipesModule } from '../../../pipes/pipes.module';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    OrderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderDetailPage),
    PipesModule,
	ComponentsModule
  ],
})
export class OrderDetailPageModule {}
