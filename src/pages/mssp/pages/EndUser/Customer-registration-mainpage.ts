import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
    selector: 'Customer-registration-mainpage',
    templateUrl: './Customer-registration-mainpage.module.html',
    styleUrls : ['/Customer-registration-mainpage.scss']
  })
export class CustomerRegistrationComponent
{
    constructor(public navctrl:NavController)
    {}

    GotoEndUserRegistration()
    {
        this.navctrl.push('EndUserRegistrationComponent')
    }
}