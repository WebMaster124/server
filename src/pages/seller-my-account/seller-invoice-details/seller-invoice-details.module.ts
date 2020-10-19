import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerInvoiceDetailsPage } from './seller-invoice-details';
import {ComponentsModule} from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';
@NgModule({
  declarations: [
    SellerInvoiceDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerInvoiceDetailsPage),
	ComponentsModule,
	PipesModule
  ],
})
export class SellerInvoiceDetailsPageModule {}
