import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationDetailsPage } from './notification-details';
import {ComponentsModule} from "../../../components/components.module";
import { Ng2PaginationModule } from 'ng2-pagination';
@NgModule({
  declarations: [
    NotificationDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationDetailsPage),
	ComponentsModule,
	Ng2PaginationModule
  ],
})
export class NotificationDetailsPageModule {}
