import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageRatingPage } from './page-rating';

@NgModule({
  declarations: [
    PageRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(PageRatingPage),
  ],
})
export class PageRatingPageModule {}
