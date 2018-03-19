import { Component, OnInit } from '@angular/core';
import { State } from '../store/auth.reducer';
import { Store } from '@ngrx/store';
import * as authActions from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {}
  signUp(form) {
    this.store.dispatch(new authActions.OnSign({email: form.value.email, password: form.value.password}));
    console.log(form);
  }

}
