import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducationalInformation } from './educational-information';
import { FileChooser } from '@ionic-native/file-chooser';
import { ReactiveFormsModule } from '@angular/forms';
import { MSSPEducationalInfoSaveService } from '../../../../service/mssp/educational-info-service/educational-info-save-service/educational-info-save.service';
import { MSSPUpdateEducationalInfoSaveService } from '../../../../service/mssp/educational-info-service/educational-existing-info-save-service/update-educational-info-save.service';
import { MSSPEducationalInfoFetchService } from '../../../../service/mssp/educational-info-service/educational-info-fetch-service/educational-info-fetch.service';

@NgModule({
    declarations : [EducationalInformation],
    imports : [IonicPageModule.forChild(EducationalInformation)],
    providers : [FileChooser,ReactiveFormsModule,MSSPEducationalInfoSaveService,MSSPUpdateEducationalInfoSaveService,
        MSSPEducationalInfoFetchService]
})

export class EducationalInformationModule{}