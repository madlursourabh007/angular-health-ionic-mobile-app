import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MspPage } from './msp';

@NgModule({
  declarations: [
    MspPage,
  ],
  imports: [
    IonicPageModule.forChild(MspPage),
  ]
})
export class MspPageModule {}
