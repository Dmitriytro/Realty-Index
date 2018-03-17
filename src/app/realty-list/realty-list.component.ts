import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Realty} from "./realty.model";
import * as RealtyActions from "./store/realty.actions";
import {AppState} from "../store/app.reducer";
import {State} from "./store/realty.reducer";

@Component({
  selector: 'app-realty-list',
  templateUrl: './realty-list.component.html',
  styleUrls: ['./realty-list.component.css']
})
export class RealtyListComponent implements OnInit {
  list: Realty[] = [];
  selected: Realty = null;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('realtyReducer').subscribe((state: State) => {
      this.list = state.realtyList;
      this.selected = state.selected;
    });
  }
  selection(index: number) {
    this.store.dispatch(new RealtyActions.Select(index));
  }
}
