export class MSSPFinancialInfoSaveModal{
    public depositAmount : string;
    public reciptDocLink : string;
    public depositDate : string;
    public depositReceiptNumber : string;

    /*
    *Setters
    */
    public setDepositAmount(depositAmount : string){
        this.depositAmount = depositAmount;
    }

    public setReciptDocLink(reciptDocLink : string){
        this.reciptDocLink = reciptDocLink;
    }

    public setDepositDate(depositDate : string){
        this.depositDate = depositDate;
    }

    public setDepositReceiptNumber(depositReceiptNumber : string){
        this.depositReceiptNumber = depositReceiptNumber;
    }

    /*
    *Getters
    */
    public getDepositAmount() : string {
        return this.depositAmount;
    }

    public getReciptDocLink() : string {
        return this.reciptDocLink;
    }

    public getDepositDate() : string {
        return this.depositDate;
    }

    public getDepositReceiptNumber() : string {
        return this.depositReceiptNumber;
    }
}