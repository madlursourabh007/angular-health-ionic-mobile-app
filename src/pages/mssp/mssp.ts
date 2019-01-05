import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsspPage');
  }

  showProfileList() : void {
    this.showProfile = true;
  }

  hideProfileList() : void {
    this.showProfile = false;
  }

  goToProfileMainPage() : void {
    this.navCtrl.push('ProfileMainPage');
  }

}
