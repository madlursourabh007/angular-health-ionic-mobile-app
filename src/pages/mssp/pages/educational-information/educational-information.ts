import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
   selector : 'education-information',
   templateUrl : './educational-information.html',
   styleUrls : ['/educational-information.scss']
})

export class EducationalInformation{
    constructor(private _fileChooser : FileChooser,private alertController : AlertController){}

    uploadDocument() : void {
        this._fileChooser.open().then((uri)=>{}).catch((err)=>{
            this.alertController.create({
                title : 'Error occurred',
                subTitle : err,
                buttons : ['Ok']
            })
        })
    }
}