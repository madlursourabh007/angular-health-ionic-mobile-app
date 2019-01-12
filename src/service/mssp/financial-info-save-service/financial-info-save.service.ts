import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLConfig } from '../../../app/common/url-config/url-config';
import { MSSPFinancialInfoSaveModal } from '../../../app/common/modal/mssp/mssp-financial-info-save-modal/mssp-financial-info-save.modal';
import { Observable } from 'rxjs/Rx';
import { map,catchError } from 'rxjs/operators';
import { HandleError } from '../../../app/handleError';

@Injectable()
export class MSSPFinancialInfoSaveService extends URLConfig{
    constructor(private _http : HttpClient,
    private handleError : HandleError){super()}

    saveFinancialInfo(financialSaveModal : MSSPFinancialInfoSaveModal) : Observable<any>{
        let body = {}

        return this._http.post(this.getMSSPFinancialInfoSaveServiceURL(),body).pipe(
            map(res=>res),
            catchError(this.handleError.handleError)
        );
    }
}