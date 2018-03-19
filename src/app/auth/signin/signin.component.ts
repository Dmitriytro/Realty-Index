import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/auth.reducer';
import * as authActions from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {}
  signIn(form) {
    this.store.dispatch(new authActions.OnSign(form.value));
  }
}
