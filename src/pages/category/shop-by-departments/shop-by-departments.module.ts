import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopByDepartmentsPage } from './shop-by-departments';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    ShopByDepartmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopByDepartmentsPage),
	ComponentsModule
  ],
})
export class ShopByDepartmentsPageModule {}
