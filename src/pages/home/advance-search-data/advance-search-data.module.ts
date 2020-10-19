import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvanceSearchDataPage } from './advance-search-data';
import {Ng2PaginationModule} from 'ng2-pagination';
import {ComponentsModule} from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';
/*import {IonTagsInputModule} from "ionic-tags-input";
import { TagInputModule } from 'ngx-chips';*/
@NgModule({
  declarations: [
    AdvanceSearchDataPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvanceSearchDataPage),
	Ng2PaginationModule,
	ComponentsModule,
	PipesModule,
	/*IonTagsInputModule,
	TagInputModule*/
  ],
})
export class AdvanceSearchDataPageModule {}
