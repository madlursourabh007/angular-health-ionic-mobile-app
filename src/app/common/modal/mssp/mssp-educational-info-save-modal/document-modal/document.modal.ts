export class DocumentModal{
    public documentName : string;
    public documentLink : string;

    /*
    *Setters
    */
    public setDocumentName(documentName : string) : void {
        this.documentName = documentName
    }

    public setDocumentLink(documentLink : string) : void {
        this.documentLink = documentLink;
    }

    /*
    *Getters
    */
    public getDocumentName() : string {
        return this.documentName;
    }

    public getDocumentLink() : string {
       return this.documentLink;
    }
}