import { Injectable } from '@angular/core';

@Injectable()
export class MsspPersonalInfoSaveModal{
    firstName : string;
    middleName : string;
    lastName : string;
    panNumber : string;
    panDocLink : string;
    aadhaarNumber : string;
    aadhaarDocLink : string;
    accountNumber : string;
    ifsc : string;
    bankName : string;
    branch : string;
    canChecque : string;
    id : string;
    dob : string;

    /*
    *Setters
    */
    public setFirstName(firstName : string) : void {
        this.firstName = firstName;
    }

    public setMiddleName(middleName : string) : void {
        this.middleName = middleName;
    }

    public setLastname(lastName : string) : void {
        this.lastName = lastName;
    }

    public setPanNumber(panNumber : string) : void {
        this.panNumber = panNumber;
    }

    public setPanDocLink(panDocLink : string) : void {
        this.panDocLink = panDocLink;
    }

    public setAadhaarNumber(aadhaarNumber : string) : void {
        this.aadhaarNumber = aadhaarNumber;
    }

    public setAadhaarDocLink(aadhaarDocLink : string) : void {
        this.aadhaarDocLink = aadhaarDocLink;
    }

    public setAccountNumber(accountNumber : string) : void {
        this.accountNumber = accountNumber;
    }

    public setIfsc(ifsc : string) : void {
        this.ifsc = ifsc;
    }

    public setbankName(bankName : string) : void {
        this.bankName = bankName;
    }

    public setBranch(branch : string) : void {
        this.branch = branch;
    }

    public setcanChecque(canChecque : string) : void {
        this.canChecque = canChecque;
    }

    public setUserID(id : string) : void {
        this.id = id;
    }

    public setDOB( dob : string){
        this.dob = dob;
    }

    /*
    *Getters
    */
    public getFirstName() : string {
        return this.firstName;
    }

    public getMiddleName() : string {
        return this.middleName;
    }

    public getLastname() : string {
        return this.lastName;
    }

    public getPanNumber() : string {
        return this.panNumber;
    }

    public getPanDocLink() : string {
        return this.panDocLink;
    }

    public getAadhaarNumber() : string {
        return this.aadhaarNumber;
    }

    public getAadhaarDocLink() : string {
        return this.aadhaarDocLink;
    }

    public getAccountNumber() : string {
        return this.accountNumber;
    }

    public getIfsc() : string {
        return this.ifsc;
    }

    public getbankName() : string {
        return this.bankName;
    }

    public getBranch() : string {
        return this.branch;
    }

    public getcanChecque() : string {
        return this.canChecque;
    }

    public getUserID() : string {
        return this.id;
    }

    public getDOB() : string {
        return this.dob;
    }
}