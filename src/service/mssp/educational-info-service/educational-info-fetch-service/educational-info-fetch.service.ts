import { URLConfig } from "../../../../app/common/url-config/url-config";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';
import { HandleError } from "../../../../app/handleError";

export class MSSPEducationalInfoFetchService extends URLConfig {
    constructor(private _http : HttpClient,private handleError : HandleError){super()}

    fetcheducationalInfo(educationalInfoID : string) : Observable<any> {
        return this._http.get(this.getMSSPEducationalInfoFetchServiceURL()+educationalInfoID).pipe(
            map(res=>res),
            catchError(this.handleError.handleError)
        )
    }
}