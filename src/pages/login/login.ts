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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public _loginFormBuilder : FormBuilder, 
    public _invitationCodeAlert : AlertController,
    public personalInfoFetchService : MsspPersonalInfoFetchService,
    public genarateInvitaionCodeService : MsspGenerateInvitationCodeServie,
    public invitationCodeModal : InvitationCodeModal,
    public loadingProgress : LoadingProgress,
    private validateInvitationCodeService : ValidateInvitationCodeService) {
    this.loginForm = this._loginFormBuilder.group({
      userName : ['', Validators.required],
      userPassword : ['', Validators.required]
    })
  }

  ionViewDidEnter(){
    console.log('ionViewDidLoad LoginPage');
  }

  askInvitationCode() : void {
    this.genarateProgressDialog("Generating invitation code. Please wait..")
    this.genarateInvitaionCodeService.getInvitationCode().subscribe( data=>{
      this.invitationCodeModal.setID(data._id);
      this.invitationCodeModal.setTempID(data.temID);
      this.dismissGenerateProgressDialog();
      this.generateInvitationCodePopUP();
    },err =>{
      alert("Error occurred during generating invitation code "+err);
    })
  }

  gotoMSSPHomePage() : void {
    this.navCtrl.setRoot('MsspPage')
  }

  generateInvitationCodePopUP() : void {
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
      this.fetchExistingPersonalInformation();
    },(err)=>{
      this.dismissGenerateProgressDialog();
      alert("Please provide correct invitation code");
    })
  }

  fetchExistingPersonalInformation() : void {
    this.genarateProgressDialog("Looking for existance of previously filled data. Please wait..");
    this.personalInfoFetchService.fetchPersonalInfo(this.invitationCodeModal.getID()).subscribe((data)=>{
      this.dismissGenerateProgressDialog();
      console.log(data);
      this.navCtrl.push('ProfileMainPage');
    },(err)=>{
      this.dismissGenerateProgressDialog();
      console.error("Problem occurred during fetching existing personal info.. :: "+err);
    })
  }
}
