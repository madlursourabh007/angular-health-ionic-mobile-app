import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OTPGeneratedComponet } from './OTP-Generated';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[OTPGeneratedComponet],
    imports:[IonicPageModule.forChild(OTPGeneratedComponet)],
    providers:[ReactiveFormsModule]
})

export class OTPGenerationmoduleComponent
{
    
}