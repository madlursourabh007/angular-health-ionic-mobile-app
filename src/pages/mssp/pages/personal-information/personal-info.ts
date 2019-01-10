import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';
import { AlertController } from 'ionic-angular'
import { NavController } from 'ionic-angular';
import S3Client from 'aws-s3';
import { uploadFile } from 'aws-s3';
import { MSSPPersonalInfoSaveService } from '../../../../service/mssp-personal-info-save-service/personal-info-save-service';
import { MsspPersonalInfoSaveModal } from '../../../../app/common/modal/mssp/mssp-personal-info-save-modal/mssp-personal-info-save-modal';
import { LoadingProgress } from '../../../../app/common/loading/loading';
import { InvitationCodeModal } from '../../../../app/common/modal/inviatation-code-modal/inviataion.code.modal';

const config = {
    bucketName: 'o2_medicine_documents',
    accessKeyId: 'AKIAITNA2AL24F2OXU5Q',
    secretAccessKey: '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',
}

@IonicPage()
@Component({
    selector : 'personal-info',
    templateUrl : './personal-info.html',
    styleUrls : ['/personal-info.scss']
})

export class PersonalInfo{
    
    public personalFormGroup : FormGroup;

    constructor (private _personalInfoFormBuilder : FormBuilder,
    private _fileChooser : FileChooser, private _alertCntrl : AlertController,
    private _navCntrl : NavController, 
    private _service : MSSPPersonalInfoSaveService,
    private loadingControllerUIService : LoadingProgress,
    private personalInfoSaveModal : MsspPersonalInfoSaveModal,
    private invitationCodeModal : InvitationCodeModal){
        
        this.personalFormGroup = this._personalInfoFormBuilder.group({
            firstname : ['',Validators.required],
            lastname : ['', Validators.required],
            middlename : ['',Validators.required],
            bank_account_no : ['',Validators.required],
            ifsc : ['',Validators.required],
            bank_name : ['',Validators.required],
            branch : ['',Validators.required],
            dob : ['',Validators.required],
            pan : ['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10)])],
            aadhaar : ['',Validators.compose([Validators.required,Validators.maxLength(12),Validators.minLength(12)])]
        })
    }

    ionViewDidEnter(){
       
    }

    uploadDocument() : void {
        this._fileChooser.open().then((uri)=>{
            alert(uri);
            uploadFile(uri,config).then((data)=>{
                alert(data)
            }).catch((err)=>{alert("error occurred ::"+err)})

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

    saveMsspPersonalInfo() : void {
        this.personalInfoSaveModal.setFirstName(this.personalFormGroup.get('firstname').value);
        this.personalInfoSaveModal.setMiddleName(this.personalFormGroup.get('middlename').value);
        this.personalInfoSaveModal.setLastname(this.personalFormGroup.get('lastname').value);
        this.personalInfoSaveModal.setAccountNumber(this.personalFormGroup.get('bank_account_no').value);
        this.personalInfoSaveModal.setPanNumber(this.personalFormGroup.get('pan').value);
        this.personalInfoSaveModal.setAadhaarNumber(this.personalFormGroup.get('aadhaar').value);
        this.personalInfoSaveModal.setIfsc(this.personalFormGroup.get('ifsc').value);
        this.personalInfoSaveModal.setbankName(this.personalFormGroup.get('bank_name').value);
        this.personalInfoSaveModal.setBranch(this.personalFormGroup.get('branch').value);
        //this.personalInfoSaveModal.se(this.personalFormGroup.get('dob').value);
        this.personalInfoSaveModal.setPanDocLink("pan.pdf");
        this.personalInfoSaveModal.setAadhaarDocLink("aadhaar.pdf");
        this.personalInfoSaveModal.setcanChecque("cheque.pdf");
        this.personalInfoSaveModal.setUserID(this.invitationCodeModal.getID());
        
        this.loadingControllerUIService.generateLoadingProgress("Saving your personal information. Please wait..");
        this.loadingControllerUIService.showLoading();
        
        this._service.saveMsspPersonalInfo().subscribe((data)=>{
           this.loadingControllerUIService.dismissLoading();
            alert("Your personal information saved sucessfully.");
        },(err)=>{
            this.loadingControllerUIService.dismissLoading();
            alert("error ocurred : "+err)
        });
    }
}