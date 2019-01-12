import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MsspPage } from './mssp';
import { MsspPersonalInfoFetchService } from '../../service/mssp-personal-info-fetch-service/mssp-personal-info-fetch.service';
@NgModule({
  declarations: [
    MsspPage
  ],
  imports: [
    IonicPageModule.forChild(MsspPage),
  ],
  providers : [MsspPersonalInfoFetchService]
})
export class MsspPageModule {}
