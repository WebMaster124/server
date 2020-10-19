import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubCategoryPage } from './sub-category';
import {Ng2PaginationModule} from 'ng2-pagination';
import { PipesModule } from '../../../pipes/pipes.module';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    SubCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SubCategoryPage),
	Ng2PaginationModule,
    PipesModule,
	ComponentsModule
  ],
})
export class SubCategoryPageModule {}
