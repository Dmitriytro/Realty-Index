import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../auth/store/auth.actions';
import { AppState } from '../../store/app.reducer';
import { NgForm } from '@angular/forms';
import * as RealtyActions from '../../realty/store/realty.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav;
  authState: Observable<{token: string, isAuthenticated: boolean}>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('authReducer');
  }
  onSignOut() {
    this.sidenav.close();
    firebase.auth().signOut();
    this.store.dispatch(new AuthActions.OnSighOut());
  }
  search(searchInput: NgForm) {
    this.store.dispatch(new RealtyActions.SetParams(searchInput.value));
    searchInput.reset();
  }
}
