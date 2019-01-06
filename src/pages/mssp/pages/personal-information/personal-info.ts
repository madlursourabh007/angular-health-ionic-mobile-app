import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';
import { AlertController } from 'ionic-angular'
import { NavController } from 'ionic-angular';

@IonicPage()
@Component({
    selector : 'personal-info',
    templateUrl : './personal-info.html',
    styleUrls : ['./personal-info.scss']
})

export class PersonalInfo{
    
    public personalFormGroup : FormGroup;

    constructor (private _personalInfoFormBuilder : FormBuilder,
    private _fileChooser : FileChooser, private _alertCntrl : AlertController,
    private _navCntrl : NavController){
        this.personalFormGroup = this._personalInfoFormBuilder.group({
            firstname : ['',Validators.required],
            lastname : ['', Validators.required],
            middlename : ['',Validators.required],
            bank_account_no : ['',Validators.required],
            ifsc : ['',Validators.required],
            bank_name : ['',Validators.required],
            branch : ['',Validators.required],
            dob : ['',Validators.required],
            pan:['',Validators.required],
            aadhaar : ['',Validators.required]
        })
    }

    ionViewDidEnter(){
       
    }

    uploadCancelledCopy() : void {
        this._fileChooser.open().then((uri)=>{
            console.log(uri)
        }).catch((exception)=>{
           this._alertCntrl.create({
               title : "Error Occurred",
               subTitle : exception,
               buttons : ['Ok']
           }) 
        })
    }

    logOut() : void {
        this._navCntrl.setRoot("LoginPage");
    }
}