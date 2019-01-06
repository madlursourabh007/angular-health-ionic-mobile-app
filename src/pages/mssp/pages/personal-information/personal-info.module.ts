import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalInfo } from './personal-info';
import { ReactiveFormsModule } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';

@NgModule({
    declarations : [PersonalInfo],
    imports : [IonicPageModule.forChild(PersonalInfo)],
    providers : [ReactiveFormsModule,FileChooser]
})

export class PersonalInformationModule{

}