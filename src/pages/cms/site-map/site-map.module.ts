import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteMapPage } from './site-map';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    SiteMapPage,
  ],
  imports: [
    IonicPageModule.forChild(SiteMapPage),
	ComponentsModule
  ],
})
export class SiteMapPageModule {}
