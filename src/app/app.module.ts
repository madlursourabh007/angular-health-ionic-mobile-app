import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContentTypeInterceptors } from './common/interceptors/content_type_interceptors/content.type.interceptors';
import { MsspPersonalInfoSaveModal } from './common/modal/mssp/mssp-personal-info-save-modal/mssp-personal-info-save-modal';
import { HttpClientModule } from '@angular/common/http';
import { HandleError } from './handleError';
import { LoadingController } from 'ionic-angular';
import { LoadingProgress } from './common/loading/loading';
import { InvitationCodeModal } from './common/modal/inviatation-code-modal/inviataion.code.modal';
import { AppPreferences } from '@ionic-native/app-preferences';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReactiveFormsModule,
    MsspPersonalInfoSaveModal,
    LoadingController,
    LoadingProgress,
    HandleError,
    HttpClientModule,
    InvitationCodeModal,
    AppPreferences,
    { provide : HTTP_INTERCEPTORS, useClass : ContentTypeInterceptors, multi : true}
  ]
})
export class AppModule {}
