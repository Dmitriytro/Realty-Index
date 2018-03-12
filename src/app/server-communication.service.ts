import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ZWSID} from "../../zwsid";
import {Params} from "./realty-list/params.model";
import {Store} from "@ngrx/store";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {InitialState} from "./realty-list/store/initialState.model";

@Injectable()
export class ServerCommunicationService {
  params: Params;
  key: string = ZWSID;
  httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/json',
      'apikey': `${this.key}`
    })
  };
  serverUrl: string = `https://search.onboard-apis.com/propertyapi/v1.0.0/property/address`;
  constructor(private httpClient: HttpClient, private store: Store<{realty: InitialState}>) {
    this.store.select('realty').subscribe((data) => {
      this.params = data.params;
    });
  }
  fetching(){
    this.httpOptions['params'] = this.params;
    return this.httpClient.get(this.serverUrl,this.httpOptions);
  }

}
