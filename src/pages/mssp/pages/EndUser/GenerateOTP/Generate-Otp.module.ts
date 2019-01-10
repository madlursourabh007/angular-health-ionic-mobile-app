import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerateOTPComponent } from './Generate-Otp';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[GenerateOTPComponent],
    imports:[IonicPageModule.forChild(GenerateOTPComponent)],
    providers:[ReactiveFormsModule],
    //exports:[EndUserRegistrationComponent]
})
export class GenerateOTPModuleComponent
{
    
}