import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutUsPage } from './about-us';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  declarations: [
    AboutUsPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutUsPage),
	ComponentsModule
  ],
})
export class AboutUsPageModule {}
