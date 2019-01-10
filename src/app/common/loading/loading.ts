import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingProgress{
    private loading : any;

    constructor(private _loadingCntrl : LoadingController){}

    generateLoadingProgress(message : string) : void {
        this.loading = this._loadingCntrl.create({
            content : message
        })
    }
    
    showLoading(){
        this.loading.present();
    }

    dismissLoading(){
        this.loading.dismiss();
    }

}