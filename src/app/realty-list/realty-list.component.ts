import {Component, OnInit} from '@angular/core';
import {Realty} from "./realty.model";
import {Store} from "@ngrx/store";
import {InitialState} from "./store/initialState.model";
import {RealtyState} from "./store/realty.reducer";

@Component({
  selector: 'app-realty-list',
  templateUrl: './realty-list.component.html',
  styleUrls: ['./realty-list.component.css']
})
export class RealtyListComponent implements OnInit {
  list: Realty[] = [];
  constructor(private store: Store<RealtyState>) { }

  ngOnInit() {
    this.store.select('realtyReducer').subscribe((state: InitialState) => {
      this.list = state.realtyList;
    });
  }
  selection(index: number) {

  }
}
