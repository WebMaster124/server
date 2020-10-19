import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetPasswordPage } from './set-password';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    SetPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(SetPasswordPage),
	ComponentsModule
  ],
})
export class SetPasswordPageModule {}
