import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducationalInformation } from './educational-information';
import { FileChooser } from '@ionic-native/file-chooser';
import { ReactiveFormsModule } from '@angular/forms';
import { MSSPEducationalInfoSaveService } from '../../../../service/mssp/educational-info-service/educational-info-save-service/educational-info-save.service';

@NgModule({
    declarations : [EducationalInformation],
    imports : [IonicPageModule.forChild(EducationalInformation)],
    providers : [FileChooser,ReactiveFormsModule,MSSPEducationalInfoSaveService]
})

export class EducationalInformationModule{}