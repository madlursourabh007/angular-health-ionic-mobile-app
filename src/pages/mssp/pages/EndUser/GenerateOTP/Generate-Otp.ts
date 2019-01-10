import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'Generate-OTP',
    templateUrl: 'Generate-OTP.html',
    styleUrls : ['/Generate-Otp.scss']
  })

  export class GenerateOTPComponent
  {
        public GenerateOTP:FormGroup;
        constructor(private generateOTPFormBuilder:FormBuilder,private navctrl:NavController){
            this.GenerateOTP=this.generateOTPFormBuilder.group({
                Cmonno:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])]
            })
        }

        gotoOTP()
        {
            this.navctrl.push('OTPGeneratedComponet')
        }
  }