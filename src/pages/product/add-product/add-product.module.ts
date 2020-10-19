import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProductPage } from './add-product';
import { PipesModule } from '../../../pipes/pipes.module';
import { ComponentsModule } from "../../../components/components.module";
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { CKEditorModule } from 'ng2-ckeditor';
@NgModule({
    declarations: [
      AddProductPage,
	  
    ],
    imports: [
		IonicPageModule.forChild(AddProductPage),
		PipesModule,
		CKEditorModule,
		ComponentsModule,
		Ng4GeoautocompleteModule,
    ]
})
export class AddProductPageModule {}
