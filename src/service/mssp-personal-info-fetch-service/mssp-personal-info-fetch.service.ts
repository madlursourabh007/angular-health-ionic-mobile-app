import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';
import { MsspPersonalInfoSaveModal } from '../../app/common/modal/mssp/mssp-personal-info-save-modal/mssp-personal-info-save-modal';
import { HandleError } from '../../app/handleError';
import { URLConfig } from '../../app/common/url-config/url-config';

@Injectable()
export class MsspPersonalInfoFetchService extends URLConfig{
    constructor(private _http : HttpClient,
    private _handleError : HandleError){super()}

    fetchPersonalInfo(id : string) : Observable<MsspPersonalInfoSaveModal>{
        return this._http.get<MsspPersonalInfoSaveModal>(this.getMSSPPersonalInfoFetchServiceURL()+"/"+id).pipe(
            map(res=>res),
            catchError(this._handleError.handleError)
        );
    }

}