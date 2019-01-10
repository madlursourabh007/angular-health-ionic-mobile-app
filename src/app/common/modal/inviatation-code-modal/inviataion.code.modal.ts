import { Injectable } from '@angular/core';

@Injectable()
export class InvitationCodeModal{
    public msspDocument : Object[];
    public _id : string;
    public temID : string;
    public status : boolean
    public role : string;
    public __v : number

    /*
    *Setters
    */
    public setID(_id : string) : void {
        this._id = _id;
    }

    public setTempID(tempID : string) : void {
        this.temID = tempID;
    }

    /*
    *Getters
    */
    public getID() : string {
        return this._id;
    }

    public getTempID() : string {
        return this.temID;
    }
}