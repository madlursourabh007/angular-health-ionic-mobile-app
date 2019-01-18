import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map,catchError } from 'rxjs/operators';
import { URLConfig } from '../../../../app/common/url-config/url-config';
import { HandleError } from '../../../../app/handleError';
import { InvitationCodeModal } from '../../../../app/common/modal/inviatation-code-modal/inviataion.code.modal';
import { MSSPFinancialInfoSaveModal } from '../../../../app/common/modal/mssp/mssp-financial-info-save-modal/mssp-financial-info-save.modal';

@Injectable()
export class MSSPFinancialInfoSaveService extends URLConfig{
    constructor(private _http : HttpClient,
    private handleError : HandleError,
    private invitationCodeModal : InvitationCodeModal){super()}

    saveFinancialInfo(financialSaveModal : MSSPFinancialInfoSaveModal) : Observable<any>{
        let body = {
            "depositAmount":financialSaveModal.getDepositAmount(),
             "receiptDocLink":financialSaveModal.getRecieptDocLink(),
             "depositDate" : financialSaveModal.getDepositDate(),
            "depositReceiptNumber" : financialSaveModal.getDepositReceiptNumber(),
            "id" : this.invitationCodeModal.getID()
        }

        return this._http.post(this.getMSSPFinancialInfoSaveServiceURL(),body).pipe(
            map(res=>res),
            catchError(this.handleError.handleError)
        );
    }
}