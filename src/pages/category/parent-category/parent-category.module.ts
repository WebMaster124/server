import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentCategoryPage } from './parent-category';
import {Ng2PaginationModule} from 'ng2-pagination';
import {ComponentsModule} from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    ParentCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ParentCategoryPage),
	PipesModule,
	Ng2PaginationModule,
    ComponentsModule
  ],
})
export class ParentCategoryPageModule {}
