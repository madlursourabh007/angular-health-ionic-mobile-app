import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLConfig } from '../../app/common/url-config/url-config';
import { MsspPersonalInfoSaveModal } from '../../app/common/modal/mssp/mssp-personal-info-save-modal/mssp-personal-info-save-modal';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { HandleError } from '../../app/handleError';

@Injectable()
export class MSSPPersonalInfoSaveService extends URLConfig{
    constructor(private _http : HttpClient, 
        private _mssPersonalInfoModal : MsspPersonalInfoSaveModal,
        private _handleError : HandleError){
        super(); 
    }

    saveMsspPersonalInfo(userID : string) : Observable<any>{
        let boody = {
            "firstName": this._mssPersonalInfoModal.getFirstName(),
           "middleName": this._mssPersonalInfoModal.getMiddleName(),
           "lastName": this._mssPersonalInfoModal.getLastname(),
           "panNumber":this._mssPersonalInfoModal.getPanNumber(),
           "panDocLink": this._mssPersonalInfoModal.getPanDocLink(),
           "aadhaarNumber": this._mssPersonalInfoModal.getAadhaarNumber(),
           "aadhaarDocLink": this._mssPersonalInfoModal.getAadhaarDocLink(),
           "accountNumber": this._mssPersonalInfoModal.getAccountNumber(),
           "ifsc":this._mssPersonalInfoModal.getIfsc(),
           "bankName" : this._mssPersonalInfoModal.getbankName(),
           "branch": this._mssPersonalInfoModal.getBranch(),
           "canChecque":this._mssPersonalInfoModal.getcanChecque(),
            "id":this._mssPersonalInfoModal.getUserID(),
            "dob":this._mssPersonalInfoModal.getDOB()
        }
        console.log("personal data is ::: "+boody);
        return this._http.post(this.getMSSPPersonalInfoSaveServiceURL(),boody).pipe(
            map(res=>res),
            catchError(this._handleError.handleError)
        );
    }
}