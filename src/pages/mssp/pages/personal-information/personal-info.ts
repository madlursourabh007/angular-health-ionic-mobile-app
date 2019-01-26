import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';
import { AlertController } from 'ionic-angular'
import { NavController } from 'ionic-angular';
import { uploadFile } from 'aws-s3';
import { MSSPPersonalInfoSaveService } from '../../../../service/mssp-personal-info-save-service/personal-info-save-service';
import { MsspPersonalInfoSaveModal } from '../../../../app/common/modal/mssp/mssp-personal-info-save-modal/mssp-personal-info-save-modal';
import { LoadingProgress } from '../../../../app/common/loading/loading';
import { InvitationCodeModal } from '../../../../app/common/modal/inviatation-code-modal/inviataion.code.modal';
import { AppPreferences } from '@ionic-native/app-preferences';
import { MSSPExistingPersonalInfoSaveService } from '../../../../service/mssp-existing-personal-info-save-service/mssp-existing-personal-info-save.service';
import { App } from 'ionic-angular/components/app/app';

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
    private _navCntrl : NavController, 
    private _service : MSSPPersonalInfoSaveService,
    private loadingControllerUIService : LoadingProgress,
    private personalInfoSaveModal : MsspPersonalInfoSaveModal,
    private saveexistingPersonalInfoService : MSSPExistingPersonalInfoSaveService,
    private invitationCodeModal : InvitationCodeModal,
    private _appRef : AppPreferences,
    private _appCntrl : App){
        
        this.personalFormGroup = this._personalInfoFormBuilder.group({
            firstname : ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
            lastname : ['', Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
            middlename : ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
            bank_account_no : ['',Validators.required],
            ifsc : ['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(20)])],
            bank_name : ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
            branch : ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
            dob : ['',Validators.required],
            pan : ['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10)])],
            aadhaar : ['',Validators.compose([Validators.required,Validators.maxLength(12),Validators.minLength(12)])]
        })
    }

    ionViewDidEnter(){
        this._appRef.fetch('personalInfo').then((result)=>{
            if(result !="" || result != undefined)
                this.displayMsspPersonalInfo();
        })
    }

    uploadDocument() : void {
        this._fileChooser.open().then((uri)=>{
            alert(uri);
        }).catch((exception)=>{
           this._alertCntrl.create({
               title : "Error Occurred",
               subTitle : exception,
               buttons : ['Ok']
           }) 
        })
    }

    logOut() : void {
        this._appCntrl.getRootNav().setRoot('LoginPage');
    }

    displayMsspPersonalInfo() : void {
        this.personalFormGroup.get('firstname').setValue(this.personalInfoSaveModal.getFirstName())
        this.personalFormGroup.get('middlename').setValue(this.personalInfoSaveModal.getMiddleName());
        this.personalFormGroup.get('lastname').setValue(this.personalInfoSaveModal.getLastname());
        this.personalFormGroup.get('bank_account_no').setValue(this.personalInfoSaveModal.getAccountNumber());
        this.personalFormGroup.get('pan').setValue(this.personalInfoSaveModal.getPanNumber());
        this.personalFormGroup.get('aadhaar').setValue(this.personalInfoSaveModal.getAadhaarNumber());
        this.personalFormGroup.get('ifsc').setValue(this.personalInfoSaveModal.getIfsc());
        this.personalFormGroup.get('bank_name').setValue(this.personalInfoSaveModal.getbankName());
        this.personalFormGroup.get('branch').setValue(this.personalInfoSaveModal.getBranch());
       this.personalFormGroup.get('dob').setValue(this.personalInfoSaveModal.getDOB())
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
        this.personalInfoSaveModal.setDOB(this.personalFormGroup.get('dob').value);
        this.personalInfoSaveModal.setPanDocLink("pan.pdf");
        this.personalInfoSaveModal.setAadhaarDocLink("aadhaar.pdf");
        this.personalInfoSaveModal.setcanChecque("cheque.pdf");
        this.personalInfoSaveModal.setUserID(this.invitationCodeModal.getID());
        
        this.loadingControllerUIService.generateLoadingProgress("Saving your personal information. Please wait..");
        this.loadingControllerUIService.showLoading();
        this._appRef.fetch('personalInfo').then((res)=>{
            if(res == "" || res == undefined)
            {
                this._service.saveMsspPersonalInfo(this.invitationCodeModal.getID()).subscribe((data)=>{
                    this.loadingControllerUIService.dismissLoading();
                    console.log('Personal Info Save result :: '+Object.keys(data));
                     alert("Your personal information saved sucessfully.");
                     this._appRef.store('personalInfo',data.personalInfo);
                 },(err)=>{
                     this.loadingControllerUIService.dismissLoading();
                     alert("error ocurred : "+err)
                 });
            }
            else{
                this.saveexistingPersonalInfoService.saveMsspPersonalInfo(res).subscribe((data)=>{
                    this.loadingControllerUIService.dismissLoading();
                    console.log('Personal Info Save result :: '+Object.keys(data));
                     alert("Your personal information saved sucessfully.");
                 },(err)=>{
                     this.loadingControllerUIService.dismissLoading();
                     alert("error ocurred : "+err)
                 }); 
            }
        }).catch((error)=>{
            this.loadingControllerUIService.dismissLoading();
            console.error("Preff not found...");
        })
    }
}