export class MSSPFinancialInfoSaveModal{
    public depositAmount : string;
    public depositDate : string;
    public depositReceiptNumber : string;
    public recieptDocLink : string;
    public bglcAmount : string;
    public bglcPeriod : string;
    public bglcEndPeriod : string;
    public fdAmount : string;
    public lienPeriod : string;
    public lienEndPeriod : string;

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

    public setBGLCAmount(bglcAmount : string){
        this.bglcAmount = bglcAmount;
    }

    public setBGLCPeriod(bglcPeriod : string){
        this.bglcPeriod = bglcPeriod;
    }

    public setBGLCEndPeriod(bglcEndPeriod : string){
        this.bglcEndPeriod = bglcEndPeriod;
    }

    public setFDAmount(fdAmount : string){
        this.fdAmount = fdAmount;
    }

    public setLienPeriod(lienPeriod : string){
        this.lienPeriod = lienPeriod;
    }

    public setLienEndPeriod(lienEndPeriod : string){
        this.lienEndPeriod = lienEndPeriod;
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

    public getBGLCAmount() : string {
       return this.bglcAmount;
    }

    public getBGLCPeriod(): string {
        return this.bglcPeriod;
    }

    public getBGLCEndPeriod(): string {
        return this.bglcEndPeriod;
    }

    public getFDAmount() : string {
        return this.fdAmount;
    }

    public getLienPeriod() : string {
        return this.lienPeriod;
    }

    public getLienEndPeriod() : string {
        return this.lienEndPeriod;
    }
}