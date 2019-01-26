import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MsspPersonalInfoFetchService } from '../../service/mssp-personal-info-fetch-service/mssp-personal-info-fetch.service';
import { MsspGenerateInvitationCodeServie } from '../../service/mssp-generate-invitation-code-service/mssp-generate-invitation-code.service';
import { InvitationCodeModal } from '../../app/common/modal/inviatation-code-modal/inviataion.code.modal';
import { LoadingProgress } from '../../app/common/loading/loading';
import { LoadingController } from 'ionic-angular';
import { ValidateInvitationCodeService } from '../../service/mssp-validate-generated-invitation-code-service/mssp-validate-generated-invitation-code.service';
import { AppPreferences } from '@ionic-native/app-preferences';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { MsspPersonalInfoSaveModal } from '../../app/common/modal/mssp/mssp-personal-info-save-modal/mssp-personal-info-save-modal';
import { DatePipe } from '@angular/common';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  public loginForm : FormGroup;
  public loading : any = null;
  public fileTransferObject : FileTransferObject;

  public params = {
    accessKeyId: 'AKIAITNA2AL24F2OXU5Q',
    secretAccessKey: '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',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public _loginFormBuilder : FormBuilder, 
    public _invitationCodeAlert : AlertController,
    public personalInfoFetchService : MsspPersonalInfoFetchService,
    private personalInfoSaveModal : MsspPersonalInfoSaveModal,
    public genarateInvitaionCodeService : MsspGenerateInvitationCodeServie,
    public invitationCodeModal : InvitationCodeModal,
    public loadingProgress : LoadingProgress,
    private validateInvitationCodeService : ValidateInvitationCodeService,
    private _appPref : AppPreferences,
    private _fileChooser : FileChooser,
    private _fileTransfer : FileTransfer,
    private _datePipe : DatePipe
  ) {
    this.loginForm = this._loginFormBuilder.group({
      userName : ['', Validators.required],
      userPassword : ['', Validators.required],
      role : ['',Validators.required]
    })
  }

  ionViewDidEnter(){
    console.log('ionViewDidLoad LoginPage');
    //this.uplodFile();
  }

  askInvitationCode() : void {
    this.genarateProgressDialog("Generating invitation code. Please wait..")
    this.genarateInvitaionCodeService.getInvitationCode("mssp").subscribe( data=>{
      this._appPref.fetch('userid').then((id)=>{
        if(id == "" || id == undefined){
          this._appPref.store('userid',data._id).
          then((prefData)=>{
            this.invitationCodeModal.setID(data._id);
            this.invitationCodeModal.setTempID(data.temID);
            this.dismissGenerateProgressDialog();
            this.generateInvitationCodePopUP();
          })
          .catch((err)=>{console.error("pref error")});
        }
        else{
          this.invitationCodeModal.setID(id);
          this.invitationCodeModal.setTempID(data.temID);
          this.dismissGenerateProgressDialog();
          this.generateInvitationCodePopUP();
        }
      }).catch((exce)=>{
        this.invitationCodeModal.setID(data._id);
          this.invitationCodeModal.setTempID(data.temID);
          this.dismissGenerateProgressDialog();
          this.generateInvitationCodePopUP();
        console.error("Error occurred while checking existance of userid ::: "+exce);
      });
    },err =>{
      alert("Error occurred during generating invitation code "+err);
    })
  }

  gotoMSSPHomePage() : void {
    this.navCtrl.setRoot('MsspPage')
  }

  generateInvitationCodePopUP() : void {
    if(this.loginForm.get('role').value == 1){
      localStorage.setItem('role',"mssp")
    }
    else if(this.loginForm.get('role').value == 2){
      localStorage.setItem('role',"msp")
    }
    else{
      localStorage.setItem('role',"customer")
    }
    const codeAlert = this._invitationCodeAlert.create({
      title : 'O2 Medicine',
      inputs : [{
        name : 'invitationCode',
        placeholder : 'Enter InvitationCode',
        value : this.invitationCodeModal.getTempID()
      }],
      buttons : [{
        text : 'NEXT',
        handler : data =>{
          this.validateInvitationCode(data.invitationCode);
        }
      },
      {
        text : 'CANCEL',
        handler : data =>{

        }
      }]
    });
    codeAlert.present();
  }

  genarateProgressDialog(content : string) : void {
    this.loadingProgress.generateLoadingProgress(content);
    this.loadingProgress.showLoading();
  }

  dismissGenerateProgressDialog() : void {
    this.loadingProgress.dismissLoading();
  }

  validateInvitationCode(invitationCode : string) : void {
    this.genarateProgressDialog("Validating invitation code. Please wait.");
    this.validateInvitationCodeService.validateInvitationCode(invitationCode).subscribe((data)=>{
      console.log("Validated Invitation code result :: "+data);
      this.dismissGenerateProgressDialog();
      this._appPref.fetch('personalInfo').then((appData)=>{
        if(appData == "" || appData == undefined)
          this.navCtrl.push('ProfileMainPage');
        else
          this.fetchExistingPersonalInformation();
      }).catch((exception)=>{
        console.log("Exception came ::");
      })
      
    },(err)=>{
      this.dismissGenerateProgressDialog();
      alert("Please provide correct invitation code");
    })
  }

  fetchExistingPersonalInformation() : void {
    let personalInfoID;
    this.genarateProgressDialog("Looking for existance of previously filled data. Please wait..");
    this._appPref.fetch('personalInfo').then((id)=>{
      personalInfoID = id;
      console.log("personalInfo is :: "+id);
      this.personalInfoFetchService.fetchPersonalInfo(id).subscribe((data)=>{
        this.dismissGenerateProgressDialog();
        console.log(data[0].firstName);
        this.personalInfoSaveModal.setFirstName(data[0].firstName);
        this.personalInfoSaveModal.setMiddleName(data[0].middleName);
        this.personalInfoSaveModal.setLastname(data[0].lastName);
        this.personalInfoSaveModal.setPanNumber(data[0].pan.panNumber);
        this.personalInfoSaveModal.setPanDocLink(data[0].pan.panDocLink);
        this.personalInfoSaveModal.setAadhaarNumber(data[0].aadhaar.aadhaarNumber);
        this.personalInfoSaveModal.setAadhaarDocLink(data[0].aadhaar.aadhaarDocLink);
        this.personalInfoSaveModal.setAccountNumber(data[0].bankDetails.accountNumber);
        this.personalInfoSaveModal.setbankName(data[0].bankDetails.bankName);
        this.personalInfoSaveModal.setBranch(data[0].bankDetails.branch);
        this.personalInfoSaveModal.setIfsc(data[0].bankDetails.ifsc);
        this.personalInfoSaveModal.setcanChecque(data[0].bankDetails.canChecque);
        let latestDOB = this._datePipe.transform(data[0].dob,"dd/MM/yyyy");
        //alert(latestDOB);
        this.personalInfoSaveModal.setDOB(data[0].dob);
        this.navCtrl.push('ProfileMainPage');
      },(err)=>{
        this.dismissGenerateProgressDialog();
        console.error("Problem occurred during fetching existing personal info.. :: "+err);
      })
    }).catch((exception)=>{
      this.personalInfoFetchService.fetchPersonalInfo(personalInfoID).subscribe((data)=>{
        this.dismissGenerateProgressDialog();
        console.log(data);
        this.navCtrl.push('ProfileMainPage');
      },(err)=>{
        this.dismissGenerateProgressDialog();
        console.error("Problem occurred during fetching existing personal info.. :: "+err);
      })
      console.error("Excpetion occurred while fetching data from appPref:: "+exception);
    })
  }


  uplodFile() : void {
    let fileUploadOptions : FileUploadOptions = {
      mimeType : 'application/pdf',
      params : this.params
    }
    this._fileChooser.open().then(uri=>{
      this.loadingProgress.generateLoadingProgress("Please wait uploading file..")
      this.loadingProgress.showLoading();
      this.fileTransferObject = this._fileTransfer.create();
      this.fileTransferObject.upload(uri,"https://o2_medicine_documents.s3.amazonaws.com/",fileUploadOptions)
      .then(result=>{alert(result);this.loadingProgress.dismissLoading();})
      .catch((err)=>{alert("Error occurred"+err);console.log("Error Ocrd ::: "+err.body);
      this.loadingProgress.dismissLoading();
      console.error("code :: "+err.code);
      console.error("source ::: "+err.source);
      console.error("target ::: "+err.target);
      console.error("http_status ::: "+err.http_status);
      console.error("body ::: "+err.body);
      console.error("exception ::: "+err.exception);
    });
    }).catch(err =>{
      this.loadingProgress.dismissLoading();
      alert("Error occurred while choosing file. "+err);
    })
  }
}
