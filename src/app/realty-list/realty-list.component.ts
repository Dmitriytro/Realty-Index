import {Component, OnInit} from '@angular/core';
import {Realty} from "./realty.model";
import {Store} from "@ngrx/store";
import {InitialState} from "./store/initialState.model";

@Component({
  selector: 'app-realty-list',
  templateUrl: './realty-list.component.html',
  styleUrls: ['./realty-list.component.css']
})
export class RealtyListComponent implements OnInit {
  list: Realty[] = [];
  constructor(private store: Store<{realty: InitialState}>) { }

  ngOnInit() {
    this.store.select('realty').subscribe((state: InitialState) => {
      this.list = state.realtyList;
    });
  }
}
