import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';
import { MSSPFinancialInfoSaveModal } from '../../../../app/common/modal/mssp/mssp-financial-info-save-modal/mssp-financial-info-save.modal';
import { MSSPFinancialInfoSaveService } from '../../../../service/mssp/financial-info-service/financial-info-save-service/financial-info-save.service';
@IonicPage()
@Component({
  selector: 'page-financial',
  templateUrl: 'financial.html',
})
export class FinancialPage {

  financialFormGroup : FormGroup;
    isDocumantUploaded : boolean = false;

    constructor(private _formBuilder : FormBuilder, 
        private _fileChooser : FileChooser, 
        private alertController : AlertController,
        private financialInfoSaveService : MSSPFinancialInfoSaveService,
        private financialInfoSaveModal : MSSPFinancialInfoSaveModal){
        this.financialFormGroup = this._formBuilder.group({
            bg_lc_amount : ['',Validators.required],
            bg_lc_period : ['',Validators.required],
            fd_amount : ['',Validators.required],
            lien_period : ['',Validators.required]
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

    saveFinancialInformation() : void {
        this.financialInfoSaveService.saveFinancialInfo(this.financialInfoSaveModal)
        .subscribe((result)=>{
            alert("Your financial information saved successfully.");
        },(err)=>{
            alert("Error occurred while saving fiancial information. "+err);
        })
    }
}
