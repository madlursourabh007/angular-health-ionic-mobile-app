import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ReactiveFormsModule } from '@angular/forms';
import { InvitationCodeModal } from '../../app/common/modal/inviatation-code-modal/inviataion.code.modal';
import { MsspGenerateInvitationCodeServie } from '../../service/mssp-generate-invitation-code-service/mssp-generate-invitation-code.service';
import { MsspPersonalInfoFetchService } from '../../service/mssp-personal-info-fetch-service/mssp-personal-info-fetch.service';
import { ValidateInvitationCodeService } from '../../service/mssp-validate-generated-invitation-code-service/mssp-validate-generated-invitation-code.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ReactiveFormsModule
  ],
  providers : [ReactiveFormsModule,MsspGenerateInvitationCodeServie,MsspPersonalInfoFetchService,ValidateInvitationCodeService,DatePipe]
})
export class LoginPageModule {}
