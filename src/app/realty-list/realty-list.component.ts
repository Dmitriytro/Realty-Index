import {Component, OnDestroy, OnInit} from '@angular/core';
import {Realty} from "./realty.model";
import {RealtyDataService} from "../realty-data.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-realty-list',
  templateUrl: './realty-list.component.html',
  styleUrls: ['./realty-list.component.css']
})
export class RealtyListComponent implements OnInit,OnDestroy {
  list: Realty[] = [];
  subscription: Subscription;
  constructor(private data: RealtyDataService) { }

  ngOnInit() {
    this.renewList();
    this.subscription = this.data.changeEmitter.subscribe(() => {
      this.renewList()
    });
  }
  renewList() {
    this.list = this.data.getNewList()
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
