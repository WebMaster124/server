import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DraftListingPage } from './draft-listing';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    DraftListingPage,
  ],
  imports: [
    IonicPageModule.forChild(DraftListingPage),
    ComponentsModule
  ],
})
export class DraftListingPageModule {}
