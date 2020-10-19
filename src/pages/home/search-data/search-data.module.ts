import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchDataPage } from './search-data';
import {Ng2PaginationModule} from 'ng2-pagination';
import {ComponentsModule} from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    SearchDataPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchDataPage),
	Ng2PaginationModule,
	ComponentsModule,
	PipesModule
  ],
})
export class SearchDataPageModule {}
