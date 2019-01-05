import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalInfo } from './personal-info';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations : [PersonalInfo],
    imports : [IonicPageModule.forChild(PersonalInfo)],
    providers : [ReactiveFormsModule]
})

export class PersonalInformationModule{

}