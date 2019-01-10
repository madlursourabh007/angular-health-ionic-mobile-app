import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { InvitationCodeModal } from '../../app/common/modal/inviatation-code-modal/inviataion.code.modal';
import { URLConfig } from '../../app/common/url-config/url-config';
import { HandleError } from '../../app/handleError';

@Injectable()
export class MsspGenerateInvitationCodeServie extends URLConfig{

    constructor(private _http : HttpClient,
    private handleError : HandleError ){super()}

    getInvitationCode() : Observable<InvitationCodeModal>{
        let body = {
            "status":false,
            "role" : "MSSP"
        }
        return this._http.post<InvitationCodeModal>(this.getGenerateInvitationCodeServiceURL(),body).pipe(
            map(res=>res),
            catchError(this.handleError.handleError)
        )
    }
}