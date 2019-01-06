import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerRegistrationComponent } from './Customer-registration-mainpage';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[CustomerRegistrationComponent],
    imports:[IonicPageModule.forChild(CustomerRegistrationComponent)],
    providers:[ReactiveFormsModule]
})

export class CustomerRegistrationModuleComponent
{
    
}