import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import {ComponentsModule} from "../../components/components.module";
@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
	InternationalPhoneModule,
	ComponentsModule
  ]
})
export class LoginPageModule {}
