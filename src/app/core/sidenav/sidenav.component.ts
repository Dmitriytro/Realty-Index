import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { NgForm } from '@angular/forms';
import * as RealtyActions from '../../realty/store/realty.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(private store: Store<AppState>) { }
  search(searchInput: NgForm) {
    this.store.dispatch(new RealtyActions.SetParams(searchInput.value));
    searchInput.reset();
  }
}
