import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileMainPage } from './profile-main-page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports : [IonicPageModule.forChild(ProfileMainPage)],
    providers : [ReactiveFormsModule],
    declarations : [ProfileMainPage]
})

export class ProfilemainPageModule{

}