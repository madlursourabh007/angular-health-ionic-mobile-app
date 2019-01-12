import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { NavController } from "ionic-angular";

@IonicPage()
@Component({
    selector : 'profile-main',
    templateUrl : './profile-main-page.html',
    styleUrls : ['./profile-main-page.scss']
})
export class ProfileMainPage{
    personalpage = 'PersonalInfo';
    educationalpage = 'EducationalInformation';
    financialpage = 'FinancialInformation';
    agreementpage = 'Agreement';
    constructor(public _navCntrl : NavController){}

    logOut() : void {
        this._navCntrl.setRoot("LoginPage");
    }
}