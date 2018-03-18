import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as RealtyActions from '../../realty/realty-list/store/realty.actions';
import {AppState} from '../../store/app.reducer';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  ngOnInit() {}

  search(searchInput: NgForm) {
    this.store.dispatch(new RealtyActions.SetParams(searchInput.value));
    searchInput.reset();
  }
}
