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
@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {

  public educationalFormGroup : FormGroup;
  public documentArray : Array<DocumentModal> = new Array();
  isDocumantUploaded : boolean = false;
  constructor(private _fileChooser : FileChooser,
      private alertController : AlertController,
      private formBuilder : FormBuilder,
      private educationalInfoSaveService : MSSPEducationalInfoSaveService,
      private loadingProgress : LoadingProgress,
      private educationalInfoSaveModal : MSSPEducationalInfoSaveModal,
      private invitationCodeModal : InvitationCodeModal,
      private documentModal : DocumentModal){
          this.educationalFormGroup = this.formBuilder.group({
              qualification : ['',Validators.required],
              certificate : ['',Validators.required]
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
      this.educationalInfoSaveService.saveEducationalInfo(this.educationalInfoSaveModal).subscribe((sucessResult)=>{
          this.loadingProgress.dismissLoading();
          alert("Your educational information saved successfully.");
      },(err)=>{
          this.loadingProgress.dismissLoading();
          alert("Error occurred while saving education information. Please try agian later");
      })
  }

}
