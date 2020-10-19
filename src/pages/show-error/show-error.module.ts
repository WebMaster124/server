import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowErrorPage } from './show-error';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ShowErrorPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowErrorPage),
    ComponentsModule
  ],
})
export class ShowErrorPageModule {}
