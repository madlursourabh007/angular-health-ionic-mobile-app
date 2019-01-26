import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';
import { MSSPPersonalInfoSaveService } from '../../../../service/mssp-personal-info-save-service/personal-info-save-service';
import { AlertController } from 'ionic-angular';
import { MsspPersonalInfoFetchService } from '../../../../service/mssp-personal-info-fetch-service/mssp-personal-info-fetch.service';
import { PersonalPage } from './personal';
import { MSSPExistingPersonalInfoSaveService } from '../../../../service/mssp-existing-personal-info-save-service/mssp-existing-personal-info-save.service';

@NgModule({
  declarations: [
    PersonalPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalPage),
  ],
  providers : [ReactiveFormsModule,FileChooser,MSSPPersonalInfoSaveService,AlertController,MsspPersonalInfoFetchService,MSSPExistingPersonalInfoSaveService],
})
export class PersonalPageModule {}
