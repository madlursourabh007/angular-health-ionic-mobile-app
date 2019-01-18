export class MSSPFinancialInfoSaveModal{
    public depositAmount : string;
    public depositDate : string;
    public depositReceiptNumber : string;
    public recieptDocLink : string;

    /*
    *Setters
    */
    public setDepositAmount(depositAmount : string){
        this.depositAmount = depositAmount;
    }

    public setDepositDate(depositDate : string){
        this.depositDate = depositDate;
    }

    public setDepositReceiptNumber(depositReceiptNumber : string){
        this.depositReceiptNumber = depositReceiptNumber;
    }

    public setRecieptDocLink(recieptDocLink : string){
        this.recieptDocLink = recieptDocLink;
    }

    /*
    *Getters
    */
    public getDepositAmount() : string {
        return this.depositAmount;
    }

    public getDepositDate() : string {
        return this.depositDate;
    }

    public getDepositReceiptNumber() : string {
        return this.depositReceiptNumber;
    }

    public getRecieptDocLink() : string {
        return this.recieptDocLink;
    }
}