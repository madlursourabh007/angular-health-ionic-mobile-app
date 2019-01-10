import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'Enduser-registration',
    templateUrl: 'Enduser-registration.html',
    styleUrls : ['/Enduser-registration.scss']
  })
export class EndUserRegistrationComponent
{
    public EndUserRegistrationFormGroup:FormGroup
    constructor(private endUserregistrationFormbuilder:FormBuilder)
    {
            this.EndUserRegistrationFormGroup = this.endUserregistrationFormbuilder.group({
                Primaryno : ['',Validators.required],
                Whatsappno:['',Validators.required],
                OTP:['',Validators.required],
                Fname:['',Validators.required],
                MName:['',Validators.required],
                LName:['',Validators.required],
                pin:['',Validators.required],
                Address1:['',Validators.required],
                Address2:['',Validators.required],
                taluk:['',Validators.required],
                district:['',Validators.required]

            })
    }
    
}