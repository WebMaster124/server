import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BidHistoryPage } from './bid-history';
import {ComponentsModule} from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';
@NgModule({
  declarations: [
    BidHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(BidHistoryPage),
	ComponentsModule,
	PipesModule
  ],
})
export class BidHistoryPageModule {}
