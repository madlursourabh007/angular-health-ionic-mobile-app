import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
   selector : 'education-information',
   templateUrl : './educational-information.html',
   styleUrls : ['/educational-information.scss']
})

export class EducationalInformation{
    public educationalFormGroup : FormGroup;
    isDocumantUploaded : boolean = false;
    constructor(private _fileChooser : FileChooser,
        private alertController : AlertController,
        private formBuilder : FormBuilder){
            this.educationalFormGroup = this.formBuilder.group({
                qualification : ['',Validators.required]
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