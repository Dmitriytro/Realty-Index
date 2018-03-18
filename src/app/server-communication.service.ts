import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {apiKey} from '../../apiKey';
import {Params} from './realty/realty-list/params.model';
import {Store} from '@ngrx/store';
import {AppState} from './store/app.reducer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {State} from './realty/realty-list/store/realty.reducer';

@Injectable()
export class ServerCommunicationService {
  params: Params;
  key: string = apiKey;
  httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/json',
      'apikey': `${this.key}`
    })
  };
  serverUrl = `https://search.onboard-apis.com/propertyapi/v1.0.0/property/address`;
  constructor(private httpClient: HttpClient, private store: Store<AppState>) {
    this.store.select('realtyReducer').subscribe((data: State) => {
      this.params = data.params;
    });
  }
  fetching() {
    this.httpOptions['params'] = this.params;
    return this.httpClient.get(this.serverUrl, this.httpOptions);
  }

}
