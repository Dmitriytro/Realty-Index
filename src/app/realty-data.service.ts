import {Injectable, OnInit} from '@angular/core';
import {ServerCommunicationService} from "./server-communication.service";
import {Subject} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {Params} from "./realty-list/params.model";
import {Observable} from "rxjs/Observable";
@Injectable()
export class RealtyDataService {
  changeEmitter = new Subject<string>();
  dataObject: any = {};
  constructor(private serverCommunication: ServerCommunicationService) { }
  fetchingData(){
    this.serverCommunication.fetching()
      .subscribe((newDataObject: HttpResponse<object>)=>{
        this.dataObject = newDataObject;
        this.changeEmitter.next('');
      });
  }
  getNewList(){
    if(this.dataObject.property) return this.dataObject.property.slice()
  }
}
