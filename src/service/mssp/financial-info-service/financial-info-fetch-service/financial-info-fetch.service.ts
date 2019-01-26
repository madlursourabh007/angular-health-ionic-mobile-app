import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';
import { URLConfig } from '../../../../app/common/url-config/url-config';
import { HandleError } from '../../../../app/handleError';

@Injectable()
export class FinancialInfoFetchService extends URLConfig{
    serviceURL : string = "";
    constructor(private _http : HttpClient,
    private handleError : HandleError){super()}

    fetchFinancialInfo(financialInfoID : string) : Observable<any>{
        if(localStorage.getItem('role') == "mssp")
            this.serviceURL = this.getMSSPFinancialInfoFetchServiceURL();
        else
            this.serviceURL = this.getMSPFinancialInfoFetchServiceURL();
        return this._http.get(this.serviceURL+financialInfoID).pipe(
            map(res=>res),
            catchError(this.handleError.handleError)
        )
    }
}