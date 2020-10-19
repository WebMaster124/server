import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListPage } from './user-list';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    UserListPage,
  ],
  imports: [
    IonicPageModule.forChild(UserListPage),
	ComponentsModule
  ],
})
export class UserListPageModule {}
