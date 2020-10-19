import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessProductPage } from './product-success';
import { PipesModule } from '../../../pipes/pipes.module';
import { ComponentsModule } from "../../../components/components.module";
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { CKEditorModule } from 'ng2-ckeditor';
@NgModule({
    declarations: [
      SuccessProductPage,
	  
    ],
    imports: [
		IonicPageModule.forChild(SuccessProductPage),
		PipesModule,
		CKEditorModule,
		ComponentsModule,
		Ng4GeoautocompleteModule,
    ]
})
export class SuccessProductPageModule {}
