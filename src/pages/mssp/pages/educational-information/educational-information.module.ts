import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EducationalInformation } from './educational-information';
import { FileChooser } from '@ionic-native/file-chooser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations : [EducationalInformation],
    imports : [IonicPageModule.forChild(EducationalInformation)],
    providers : [FileChooser,ReactiveFormsModule]
})

export class EducationalInformationModule{}