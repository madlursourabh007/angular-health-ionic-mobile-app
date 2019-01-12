import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppPreferences } from '@ionic-native/app-preferences';

//import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any='LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen, private _appPref : AppPreferences) {
    this._appPref.fetch('userid').then((data)=>{console.log("Pref data:::: "+data)}).catch((err)=>console.log("No pref data :: "+err));
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
