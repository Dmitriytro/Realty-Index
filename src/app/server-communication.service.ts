import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ServerCommunicationService {
  ZWSID: string = 'X1-ZWz18qazbt5onf_98wrk';
  serverUrl: string = '';
  example: string = `http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${this.ZWSID}&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA`;
  constructor(private httpClient: HttpClient) { }
  fetch(term: string){
    return this.httpClient.get(this.example)
  }

}
