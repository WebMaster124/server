import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalizedfeedbackPage } from './personalizedfeedback';
import {Ng2PaginationModule} from 'ng2-pagination';
import {ComponentsModule} from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';
@NgModule({
  declarations: [
    PersonalizedfeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalizedfeedbackPage),
	Ng2PaginationModule,
	ComponentsModule,
	PipesModule
  ],
})
export class PersonalizedfeedbackPageModule {}
