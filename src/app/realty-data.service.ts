import { Injectable } from '@angular/core';
import {ServerCommunicationService} from "./server-communication.service";
import {Subject} from "rxjs";
@Injectable()
export class RealtyDataService {
  changeEmitter = new Subject<string>();
  dataObject: any = {};
  constructor(private serverCommunication: ServerCommunicationService) { }
  fetchingData(term: string){
    this.serverCommunication.fetching(term)
      .subscribe((newDataObject)=>{
        this.dataObject = newDataObject;
        this.changeEmitter.next('');
        console.log(newDataObject);
      });
  }
  getNewList(){
    if(this.dataObject.property) return this.dataObject.property.slice()
  }
}
