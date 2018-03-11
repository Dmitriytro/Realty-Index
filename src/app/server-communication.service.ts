import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ZWSID} from "../../zwsid";
import {Params} from "./realty-list/params.model";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerCommunicationService {
  storeRealty: Observable<Params>;
  key: string = ZWSID;
  params = new Params( `97219`,'TOWNHOUSE/ROWHOUSE','assdttlvalue','1','10');
  httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/json',
      'apikey': `${this.key}`
    })
  };
  serverUrl: string = `https://search.onboard-apis.com/propertyapi/v1.0.0/property/address`;
  constructor(private httpClient: HttpClient, private store: Store<{realty: Params}>) {
    this.storeRealty = this.store.select('realty');
  }
  fetching(){
    return this.storeRealty
      .switchMap((params) => {
        this.httpOptions['params'] = params;
        return this.httpClient.get(this.serverUrl,this.httpOptions)
      });
  }

}
