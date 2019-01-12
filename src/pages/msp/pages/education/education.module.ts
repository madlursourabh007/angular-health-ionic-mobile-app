import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { ReactiveFormsModule } from '@angular/forms';
import { MSSPEducationalInfoSaveService } from '../../../../service/mssp/educational-info-service/educational-info-save-service/educational-info-save.service';
import { EducationPage } from './education';

@NgModule({
  declarations: [
    EducationPage,
  ],
  imports: [
    IonicPageModule.forChild(EducationPage),
  ],
  providers:[FileChooser,ReactiveFormsModule,MSSPEducationalInfoSaveService]
})
export class EducationPageModule {}
