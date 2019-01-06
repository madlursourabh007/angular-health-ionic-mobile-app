import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EndUserRegistrationComponent } from './Enduser-registration';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[EndUserRegistrationComponent],
    imports:[IonicPageModule.forChild(EndUserRegistrationComponent)],
    providers:[ReactiveFormsModule],
    //exports:[EndUserRegistrationComponent]
})

export class EndUserRegistrtionModuleComponent
{

}