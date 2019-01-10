import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { HandleError } from '../../app/handleError';
import { URLConfig } from '../../app/common/url-config/url-config';

@Injectable()
export class ValidateInvitationCodeService extends URLConfig{
    constructor(private _http : HttpClient, private _handleError : HandleError){super()}

    validateInvitationCode(invitationCode : string) : Observable<any>{
        let body = {
            "InvitationCode" : invitationCode
        }

        return this._http.post(this.getValidateInvitationCodeServiceURL(),body).pipe(
            map(data=>data),
            catchError(this._handleError.handleError)
        )
    }
}