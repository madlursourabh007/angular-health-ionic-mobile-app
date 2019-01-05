import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
    selector : 'personal-info',
    templateUrl : './personal-info.html',
    styleUrls : ['/personal-info.scss']
})

export class PersonalInfo{
    
    public personalFormGroup : FormGroup;

    constructor (private _personalInfoFormBuilder : FormBuilder){
        this.personalFormGroup = this._personalInfoFormBuilder.group({
            firstname : ['',Validators.required],
            lastname : ['', Validators.required],
            middlename : ['',Validators.required],
            bank_account_no : ['',Validators.required],
            ifsc : ['',Validators.required],
            bank_name : ['',Validators.required],
            branch : ['',Validators.required],
            dob : ['',Validators.required],
            email : ['',Validators.email]
        })
    }

    ionViewDidEnter(){
       
    }
}