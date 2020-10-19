import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompleteListPage } from './complete-list';
import { PipesModule } from '../../../pipes/pipes.module';
import {ComponentsModule} from "../../../components/components.module";
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import {CKEditorModule} from 'ng2-ckeditor';

@NgModule({
  declarations: [
    CompleteListPage,
  ],
  imports: [
    IonicPageModule.forChild(CompleteListPage),
	PipesModule,
	ComponentsModule,
	Ng4GeoautocompleteModule,
	CKEditorModule
  ],
})
export class CompleteListPageModule {}
