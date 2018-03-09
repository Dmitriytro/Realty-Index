import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { ZWSID } from "../../zwsid";

@Injectable()
export class ServerCommunicationService {
  key: string = ZWSID;
  params = {
    zip: 97219,
    propertytype: 'TOWNHOUSE%2FROWHOUSE',
    orderby: 'assdttlvalue',
    page: 1,
    pagesize: 10
  };
  httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/json',
      'apikey': `${this.key}`
    })
    // ,
    // params: new HttpParams({
    //   'postalcode': `${this.params.zip}`
    // })
  };
  serverUrl: string = `https://search.onboard-apis.com/propertyapi/v1.0.0/property/address?postalcode=${this.params.zip}&propertytype=${this.params.propertytype}&orderby=${this.params.orderby}&page=${this.params.page}&pagesize=${this.params.pagesize}`;
  constructor(private httpClient: HttpClient) { }
  fetching(term: string){
    return this.httpClient.get(this.serverUrl,this.httpOptions)
  }

}
