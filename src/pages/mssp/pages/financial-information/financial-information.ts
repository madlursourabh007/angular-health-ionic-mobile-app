import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';

@IonicPage()
@Component({
    selector : 'financial-information',
    templateUrl : './financial-information.html',
    styleUrls : ['/financial-information.scss']
})
export class FinancialInformation{
    financialFormGroup : FormGroup;
    isDocumantUploaded : boolean = false;

    constructor(private _formBuilder : FormBuilder, 
        private _fileChooser : FileChooser, private alertController : AlertController){
        this.financialFormGroup = this._formBuilder.group({
            deposit_amount : ['',Validators.required],
            deposit_date : ['',Validators.required],
            deposit_reciept : ['',Validators.required]
        })
    }

    uploadDocument() : void {
        this._fileChooser.open().then((uri)=>{
            if(uri.length < 1)
            this.isDocumantUploaded = false;
            else
            this.isDocumantUploaded = true;
        }).catch((err)=>{
            this.alertController.create({
                title : 'Error occurred',
                subTitle : err,
                buttons : ['Ok']
            })
        })
    }
}