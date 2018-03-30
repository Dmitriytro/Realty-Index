import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  authState: Observable<{token: string, isAuthenticated: boolean}>;
  @Input() sidenav;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('authReducer');
  }
  onSignOut(sidenav) {
    sidenav.close();
    // firebase.auth().signOut();
    // this.store.dispatch(new AuthActions.OnSighOut());
  }

}
