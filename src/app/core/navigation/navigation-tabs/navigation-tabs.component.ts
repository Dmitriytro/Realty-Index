import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { Observable } from 'rxjs/Observable';
import * as AuthActions from '../../../auth/store/auth.actions';

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
    this.store.dispatch(new AuthActions.OnSighOut());
  }
}
