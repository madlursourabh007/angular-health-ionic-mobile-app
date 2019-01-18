import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';
import { ReactiveFormsModule } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';
import { MSSPEducationalInfoSaveService } from '../../../../service/mssp/educational-info-service/educational-info-save-service/educational-info-save.service';
import { FinancialPage } from './financial';
import { MSSPFinancialInfoSaveService } from '../../../../service/mssp/financial-info-service/financial-info-save-service/financial-info-save.service';

@NgModule({
  declarations: [
    FinancialPage,
  ],
  imports: [
    IonicPageModule.forChild(FinancialPage),
  ],
  providers : [ReactiveFormsModule,FileChooser,MSSPFinancialInfoSaveService]
})
export class FinancialPageModule {}
