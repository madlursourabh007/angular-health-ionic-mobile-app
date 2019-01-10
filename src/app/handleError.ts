import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HandleError{

    handleError(error : HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            console.error("error occured :: "+error.message);
        }
        else{
            console.error(`Error occured. Backend returned code : ${error.status}` + `Body was ${error.message}`);
        }
        
        return Observable.throw("Something bad happned. Please try again later.");
    }

}