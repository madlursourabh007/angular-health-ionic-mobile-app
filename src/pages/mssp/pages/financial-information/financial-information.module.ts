import { NgModule } from '@angular/core';
import { FinancialInformation } from './financial-information';
import { IonicPageModule } from 'ionic-angular/module';
import { ReactiveFormsModule } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';

@NgModule({
    declarations : [FinancialInformation],
    imports : [IonicPageModule.forChild(FinancialInformation)],
    entryComponents : [FinancialInformation],
    providers : [ReactiveFormsModule,FileChooser]
})

export class FinancialInformationModule{}