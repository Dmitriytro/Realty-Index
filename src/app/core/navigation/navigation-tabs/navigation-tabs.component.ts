import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { Observable } from 'rxjs/Observable';
import * as AuthActions from '../../../auth/store/auth.actions';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navigation-tabs',
  templateUrl: 'navigation-tabs.component.html',
  styleUrls: ['navigation-tabs.component.css']
})
export class NavigationTabsComponent implements OnInit {
  authState: Observable<{token: string, isAuthenticated: boolean}>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('authReducer');
  }
  onSignOut() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthActions.OnSighOut());
  }
}
