import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private _loginFormBuilder : FormBuilder, private _invitationCodeAlert : AlertController ) {
    this.loginForm = this._loginFormBuilder.group({
      userName : ['', Validators.required],
      userPassword : ['', Validators.required]
    })
  }

  ionViewDidEnter(){
    console.log('ionViewDidLoad LoginPage');
  }

  askInvitationCode() : void {
    const codeAlert = this._invitationCodeAlert.create({
      title : 'Welcome O2 Medicine',
      inputs : [{
        name : 'invitationCode',
        placeholder : 'Enter InvitationCode'
      }],
      buttons : [{
        text : 'NEXT',
        handler : data =>{

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
}
