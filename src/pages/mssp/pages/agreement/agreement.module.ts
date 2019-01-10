import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Agreement } from './agreement';
import { FileChooser } from '@ionic-native/file-chooser';

@NgModule({
    declarations : [Agreement],
    imports : [IonicPageModule.forChild(Agreement)],
    entryComponents : [Agreement],
    providers : [FileChooser]
})

export class AgreementModule{}