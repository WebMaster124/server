import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerAgreementPage } from './seller-agreement';

@NgModule({
  declarations: [
    SellerAgreementPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerAgreementPage),
  ],
})
export class SellerAgreementPageModule {}
