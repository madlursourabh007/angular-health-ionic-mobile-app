import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingProgress } from '../../app/common/loading/loading';
import { AppPreferences } from '@ionic-native/app-preferences';
import { MsspPersonalInfoFetchService } from '../../service/mssp-personal-info-fetch-service/mssp-personal-info-fetch.service';
import { MsspPersonalInfoSaveModal } from '../../app/common/modal/mssp/mssp-personal-info-save-modal/mssp-personal-info-save-modal';

/**
 * Generated class for the MsspPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mssp',
  templateUrl: 'mssp.html',
})
export class MsspPage {

  public rootPage : any;
  mainPage : any = 'PersonalInfo';
  showProfile : boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingProgress : LoadingProgress,
    private _appPref : AppPreferences,
    private personalInfoFetchService : MsspPersonalInfoFetchService,
    private personalInfoSaveModal : MsspPersonalInfoSaveModal) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsspPage');
  }

  goToProfileMainPage() : void {
    this.fetchExistingPersonalInformation();
    //this.navCtrl.push('ProfileMainPage');
  }

  logOut() : void {
    this.navCtrl.setRoot("LoginPage");
  }

  gotoenduaerregistration()
  {
    this.navCtrl.push('GenerateOTPComponent');
  }

  genarateProgressDialog(content : string) : void {
    this.loadingProgress.generateLoadingProgress(content);
    this.loadingProgress.showLoading();
  }

  dismissGenerateProgressDialog() : void {
    this.loadingProgress.dismissLoading();
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
        this.navCtrl.push('ProfileMainPage');
      },(err)=>{
        this.dismissGenerateProgressDialog();
        this.navCtrl.push('ProfileMainPage');
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

}
