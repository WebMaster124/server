import { NgModule } from '@angular/core';
import { FooterPageComponent } from './footer-page/footer-page';
import { NotificationConponentComponent } from './notification-conponent/notification-conponent';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [FooterPageComponent,
    NotificationConponentComponent],
	imports: [IonicModule],
	exports: [FooterPageComponent,
    NotificationConponentComponent]
})
export class ComponentsModule {}
