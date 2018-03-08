import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ZWSID } from "../../zwsid";

@Injectable()
export class ServerCommunicationService {
  serverUrl: string = '';
  key: string = ZWSID;
  example: string = `http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${this.key}&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA`;
  constructor(private httpClient: HttpClient) { }
  fetch(term: string){
    return this.httpClient.get(this.example)
  }

}
