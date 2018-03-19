import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RealtyActions from '../store/realty.actions';
import { AppState } from '../../store/app.reducer';
import { State } from '../store/realty.reducer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-realty-list',
  templateUrl: './realty-list.component.html',
  styleUrls: ['./realty-list.component.css']
})
export class RealtyListComponent implements OnInit {
  realtyState: Observable<State>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.realtyState = this.store.select('realtyReducer');
  }
  selection(index: number) {
    this.store.dispatch(new RealtyActions.Select(index));
  }
}
