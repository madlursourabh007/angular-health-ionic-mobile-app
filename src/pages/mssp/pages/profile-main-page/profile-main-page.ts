import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { NavController } from "ionic-angular";

@IonicPage()
@Component({
    selector : 'profile-main',
    templateUrl : './profile-main-page.html',
    styleUrls : ['/profile-main-page.scss']
})
export class ProfileMainPage{
    constructor(public _navCntrl : NavController){}

    goToPersonalInfoPage() : void {
        this._navCntrl.push('PersonalInfo');
    }
}