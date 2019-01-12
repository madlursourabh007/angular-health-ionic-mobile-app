import { Injectable } from '@angular/core';
import { DocumentModal } from './document-modal/document.modal';

@Injectable()
export class MSSPEducationalInfoSaveModal{
    public highestQualification : string;
    public documents : Array<DocumentModal>;

    /*
    *Setters
    */
    public setHighestQualification(highestQualification : string){
        this.highestQualification = highestQualification;
    }

    public setDocuments(documents : Array<DocumentModal>){
        this.documents = documents;
    }

    /*
    *Getters
    */
    public getHighestQualification() : string {
        return this.highestQualification;
    }

    public getDocuments() : Array<DocumentModal>{
        return this.documents;
    }
}