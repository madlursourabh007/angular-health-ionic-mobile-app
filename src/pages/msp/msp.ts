import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MspPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-msp',
  templateUrl: 'msp.html'
})
export class MspPage {

  personalRoot = 'PersonalPage'
  educationRoot = 'EducationPage'
  financialRoot = 'FinancialPage'
  agrreementRoot = 'AgrreementPage'


  constructor(public navCtrl: NavController) {}

}
