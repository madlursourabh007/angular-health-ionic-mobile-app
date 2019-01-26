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
    body : any;
    serviceURL : string = "";
    constructor(private _http : HttpClient,
    private handleError : HandleError,
    private invitationCodeModal : InvitationCodeModal){super()}

    saveFinancialInfo(financialSaveModal : MSSPFinancialInfoSaveModal) : Observable<any>{
        if(localStorage.getItem('role') == "mssp"){
            this.body = {
                "depositAmount":financialSaveModal.getDepositAmount(),
                 "receiptDocLink":financialSaveModal.getRecieptDocLink(),
                 "depositDate" : financialSaveModal.getDepositDate(),
                "depositReceiptNumber" : financialSaveModal.getDepositReceiptNumber(),
                "id" : this.invitationCodeModal.getID()
            }
            this.serviceURL = this.getMSSPFinancialInfoSaveServiceURL()
;        }
        else{
                this.body = {
                "amount" : financialSaveModal.getBGLCAmount(),
                "fdAmount" : financialSaveModal.getFDAmount(),
                "bgLcPersiod" : financialSaveModal.getBGLCPeriod() + "/" + financialSaveModal.getBGLCEndPeriod(),
                "lienPeriod" : financialSaveModal.getLienPeriod() + "/" + financialSaveModal.getLienEndPeriod(),
                "bgLcDoc":"bgLcDocLink1",
                "lienDoc":"lienDocLink1",
                "id" : this.invitationCodeModal.getID()
            }
            this.serviceURL = this.getMSPFinancialInfoSaveServiceURL();
        }
       console.log("ROle is :: "+localStorage.getItem('role'));
       console.log(this.body);
        return this._http.post(this.serviceURL,this.body).pipe(
            map(res=>res),
            catchError(this.handleError.handleError)
        );
    }
}