import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';
import { URLConfig } from '../../../../app/common/url-config/url-config';
import { HandleError } from '../../../../app/handleError';

@Injectable()
export class FinancialInfoFetchService extends URLConfig{
    constructor(private _http : HttpClient,
    private handleError : HandleError){super()}

    fetchFinancialInfo(financialInfoID : string) : Observable<any>{
        alert('Financial fetch URL :: '+this.getMSSPFinancialInfoFetchServiceURL()+financialInfoID);
        return this._http.get(this.getMSSPFinancialInfoFetchServiceURL()+financialInfoID).pipe(
            map(res=>res),
            catchError(this.handleError.handleError)
        )
    }
}