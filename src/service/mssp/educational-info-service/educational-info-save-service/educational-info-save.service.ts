import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MSSPEducationalInfoSaveModal } from '../../../../app/common/modal/mssp/mssp-educational-info-save-modal/mssp-educational-info-save.modal';
import { URLConfig } from '../../../../app/common/url-config/url-config';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { HandleError } from '../../../../app/handleError';
import { DocumentModal } from '../../../../app/common/modal/mssp/mssp-educational-info-save-modal/document-modal/document.modal';
import { InvitationCodeModal } from '../../../../app/common/modal/inviatation-code-modal/inviataion.code.modal';

@Injectable()
export class MSSPEducationalInfoSaveService extends URLConfig {
    constructor(private _http : HttpClient,
    private handleError : HandleError,
    private invitationCodeModal : InvitationCodeModal){super()}

    private documentsArray : Array<DocumentModal>;

    public documentArrayOfObjects : Array<any> = new Array();

    saveEducationalInfo(educationalInfoSaveModal : MSSPEducationalInfoSaveModal) : Observable<any>{
       this.documentArrayOfObjects.length = 0;
        this.documentsArray = educationalInfoSaveModal.getDocuments();
       let body = {
        "highestQualification" : educationalInfoSaveModal.getHighestQualification(),
        "id" : this.invitationCodeModal.getID(),
        "documents" : this.createDocumentsArrayAsPerService()
       }
        return this._http.post(this.getMSSPEducationalInfoSaveServiceURL(),body).pipe(
            map(res=>res),
            catchError(this.handleError.handleError)
        )
    }

    createDocumentsArrayAsPerService() : Array<DocumentModal> {
        for(let i=0; i<this.documentsArray.length;i++){
            let obj = {
                "dName" : this.documentsArray[i].getDocumentName(),
                "docLink" : this.documentsArray[i].getDocumentLink()
            }
           this.documentArrayOfObjects.push(obj)
        }

        return this.documentArrayOfObjects;
    }
}