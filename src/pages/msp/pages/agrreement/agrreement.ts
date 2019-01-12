import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
@IonicPage()
@Component({
  selector: 'page-agrreement',
  templateUrl: 'agrreement.html',
})
export class AgrreementPage {

  isDocumantUploaded : boolean = false;
    constructor(private _fileChooser : FileChooser, private alertController : AlertController ){}
    
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




