import { NgModule } from '@angular/core';
import { FinancialInformation } from './financial-information';
import { IonicPageModule } from 'ionic-angular/module';
import { ReactiveFormsModule } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';
import { FinancialInfoFetchService } from '../../../../service/mssp/financial-info-service/financial-info-fetch-service/financial-info-fetch.service';
import { MSSPFinancialInfoSaveService } from '../../../../service/mssp/financial-info-service/financial-info-save-service/financial-info-save.service';
import { MSSPFinancialExistingInfoSaveService } from '../../../../service/mssp/financial-info-service/financial-info-save-exsisting-service/financial-info-save-existing.service';
@NgModule({
    declarations : [FinancialInformation],
    imports : [IonicPageModule.forChild(FinancialInformation)],
    entryComponents : [FinancialInformation],
    providers : [ReactiveFormsModule,FileChooser,MSSPFinancialInfoSaveService, FinancialInfoFetchService,
        MSSPFinancialExistingInfoSaveService]
})

export class FinancialInformationModule{}