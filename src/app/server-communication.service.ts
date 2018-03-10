import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import { ZWSID } from "../../zwsid";
import {Params} from "./realty-list/params.model";

@Injectable()
export class ServerCommunicationService {
  key: string = ZWSID;
  params = new Params( `97219`,'TOWNHOUSE/ROWHOUSE','assdttlvalue','1','10');
  httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/json',
      'apikey': `${this.key}`
    })
  };
  serverUrl: string = `https://search.onboard-apis.com/propertyapi/v1.0.0/property/address`;
  constructor(private httpClient: HttpClient) { }
  fetching(body){
    this.params = {...this.params,...body};
    this.httpOptions['params'] = this.params;
    return this.httpClient.get(this.serverUrl,this.httpOptions)
  }

}
