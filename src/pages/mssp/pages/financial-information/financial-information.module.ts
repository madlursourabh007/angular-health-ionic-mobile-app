import { NgModule } from '@angular/core';
import { FinancialInformation } from './financial-information';
import { IonicPageModule } from 'ionic-angular/module';
import { ReactiveFormsModule } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';
import { MSSPEducationalInfoSaveService } from '../../../../service/mssp/educational-info-service/educational-info-save-service/educational-info-save.service';
import { MSSPFinancialInfoSaveService } from '../../../../service/mssp/financial-info-save-service/financial-info-save.service';

@NgModule({
    declarations : [FinancialInformation],
    imports : [IonicPageModule.forChild(FinancialInformation)],
    entryComponents : [FinancialInformation],
    providers : [ReactiveFormsModule,FileChooser,MSSPFinancialInfoSaveService]
})

export class FinancialInformationModule{}