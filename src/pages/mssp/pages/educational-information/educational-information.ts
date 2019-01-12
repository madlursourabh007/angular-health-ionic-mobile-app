import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MSSPEducationalInfoSaveService } from '../../../../service/mssp/educational-info-service/educational-info-save-service/educational-info-save.service';
import { LoadingProgress } from '../../../../app/common/loading/loading';
import { MSSPEducationalInfoSaveModal } from '../../../../app/common/modal/mssp/mssp-educational-info-save-modal/mssp-educational-info-save.modal';
import { InvitationCodeModal } from '../../../../app/common/modal/inviatation-code-modal/inviataion.code.modal';
import { DocumentModal } from '../../../../app/common/modal/mssp/mssp-educational-info-save-modal/document-modal/document.modal';
import { AppPreferences } from '@ionic-native/app-preferences';
import { MSSPUpdateEducationalInfoSaveService } from '../../../../service/mssp/educational-info-service/educational-existing-info-save-service/update-educational-info-save.service';
import { MSSPEducationalInfoFetchService } from '../../../../service/mssp/educational-info-service/educational-info-fetch-service/educational-info-fetch.service';

@IonicPage()
@Component({
   selector : 'education-information',
   templateUrl : './educational-information.html',
   styleUrls : ['./educational-information.scss']
})
//educationalInfo
export class EducationalInformation{
    public educationalFormGroup : FormGroup;
    public documentArray : Array<DocumentModal> = new Array();
    isDocumantUploaded : boolean = false;
    constructor(private _fileChooser : FileChooser,
        private alertController : AlertController,
        private formBuilder : FormBuilder,
        private educationalInfoSaveService : MSSPEducationalInfoSaveService,
        private educationalUpdateService : MSSPUpdateEducationalInfoSaveService,
        private educationalInfoFetchService : MSSPEducationalInfoFetchService,
        private loadingProgress : LoadingProgress,
        private educationalInfoSaveModal : MSSPEducationalInfoSaveModal,
        private invitationCodeModal : InvitationCodeModal,
        private documentModal : DocumentModal,
        private _appPref : AppPreferences){
            this.educationalFormGroup = this.formBuilder.group({
                qualification : ['',Validators.required],
                certificate : ['',Validators.required]
            })
        }

        ionViewDidLoad() : void {
            this._appPref.fetch('educationalInfo').then((prefData)=>{
                if(prefData == "" || prefData == undefined)
                {}
                else{
                    this.loadingProgress.generateLoadingProgress("Gathering previously enterd data. Please wait..");
                    this.loadingProgress.showLoading();
                    this.educationalInfoFetchService.fetcheducationalInfo(prefData).
                    subscribe((data)=>{
                        console.log("Education data");
                        console.log(data);
                        this.educationalFormGroup.get('qualification').setValue(data[0].highestQualification);
                        this.educationalFormGroup.get('certificate').setValue(data[0].documents[0].dName);
                        this.documentModal.setDocumentName(data[0].documents[0].dName);
                        this.documentModal.setDocumentLink(data[0].docLink);
                        this.loadingProgress.dismissLoading();
                    },(err)=>{
                        alert("Error occurred.."+err);
                        this.loadingProgress.dismissLoading();
                    })
                }
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

    saveEducationalInformation() : void {
        this.loadingProgress.generateLoadingProgress("Saving your educational information. Please wait...");
        this.loadingProgress.showLoading();
        this.educationalInfoSaveModal.setHighestQualification(this.educationalFormGroup.get('qualification').value);
        this.documentModal.setDocumentName(this.educationalFormGroup.get('certificate').value)
        this.documentModal.setDocumentLink("temp.pdf");
        this.documentArray.push(this.documentModal)
        this.educationalInfoSaveModal.setDocuments(this.documentArray);
        this._appPref.fetch('educationalInfo').then((result)=>{
            if(result == "" || result == undefined){
                this.educationalInfoSaveService.saveEducationalInfo(this.educationalInfoSaveModal).subscribe((sucessResult)=>{
                    this.loadingProgress.dismissLoading();
                    alert("Your educational information saved successfully.");
                    this._appPref.store('educationalInfo',sucessResult.educationalInfo);
                },(err)=>{
                    this.loadingProgress.dismissLoading();
                    alert("Error occurred while saving education information. Please try agian later");
                })
            }
            else{
                this.educationalUpdateService.saveEducationalInfo(this.educationalInfoSaveModal,result).subscribe((sucessResult)=>{
                    this.loadingProgress.dismissLoading();
                    alert("Your educational information saved successfully.");
                    this._appPref.store('educationalInfo',sucessResult.educationalInfo);
                },(err)=>{
                    this.loadingProgress.dismissLoading();
                    alert("Error occurred while saving education information. Please try agian later");
                })
            }
        })
    }
}