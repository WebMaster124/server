import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNoteWishlistPage } from './add-note-wishlist';
import {ComponentsModule} from "../../../components/components.module";
@NgModule({
  declarations: [
    AddNoteWishlistPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNoteWishlistPage),
	ComponentsModule
  ],
})
export class AddNoteWishlistPageModule {}
