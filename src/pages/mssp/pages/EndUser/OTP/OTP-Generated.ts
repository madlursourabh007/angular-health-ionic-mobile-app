import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
    selector: 'OTPGenerate',
    templateUrl: './OTP-Generated.html',
    styleUrls : ['/OTP-Generated.scss']
  })
export class OTPGeneratedComponet
{
    public GeneratedOTP:FormGroup;
    constructor(public navctrl:NavController,private GeneratedOTPFormBuilder:FormBuilder)
    {
        this.GeneratedOTP = this.GeneratedOTPFormBuilder.group({
            OTP:['',Validators.required]
        })
    }
    onChangeTime()
    {
        this.navctrl.push('EndUserRegistrationComponent');
    }
}