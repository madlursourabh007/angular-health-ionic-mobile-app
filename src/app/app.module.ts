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
import { FileChooser } from '@ionic-native/file-chooser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { MSSPEducationalInfoSaveModal } from './common/modal/mssp/mssp-educational-info-save-modal/mssp-educational-info-save.modal';
import { DocumentModal } from './common/modal/mssp/mssp-educational-info-save-modal/document-modal/document.modal';
import { MSSPFinancialInfoSaveModal } from './common/modal/mssp/mssp-financial-info-save-modal/mssp-financial-info-save.modal';

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
    FileChooser,
    StatusBar,
    SplashScreen,
    FileTransfer,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReactiveFormsModule,
    MsspPersonalInfoSaveModal,
    MSSPEducationalInfoSaveModal,
    MSSPFinancialInfoSaveModal,
    LoadingController,
    LoadingProgress,
    HandleError,
    HttpClientModule,
    InvitationCodeModal,
    DocumentModal,
    AppPreferences,
    { provide : HTTP_INTERCEPTORS, useClass : ContentTypeInterceptors, multi : true}
  ]
})
export class AppModule {}
