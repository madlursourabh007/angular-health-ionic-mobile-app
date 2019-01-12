import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgrreementPage } from './agrreement';
import { FileChooser } from '@ionic-native/file-chooser';
@NgModule({
  declarations: [
    AgrreementPage,
  ],
  imports: [
    IonicPageModule.forChild(AgrreementPage),
  ],
  providers : [FileChooser]
})
export class AgrreementPageModule {}
