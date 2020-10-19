import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewCartPage } from './view-cart';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    ViewCartPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewCartPage),
    ComponentsModule
  ],
})
export class ViewCartPageModule {}
