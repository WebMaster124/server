import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewReviewPage } from './view-review';
import {Ng2PaginationModule} from 'ng2-pagination';
import {ComponentsModule} from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';
@NgModule({
  declarations: [
    ViewReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewReviewPage),
    Ng2PaginationModule,
	ComponentsModule,
	PipesModule
  ],
})
export class ViewReviewPageModule {}
