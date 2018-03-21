import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() { }
  signUp(body) {
    return firebase.auth().createUserWithEmailAndPassword(body.email, body.password);
  }
  signIn(body) {
    return firebase.auth().signInWithEmailAndPassword(body.email, body.password);
  }
  getToken() {
    return firebase.auth().currentUser.getIdToken();
  }
}
