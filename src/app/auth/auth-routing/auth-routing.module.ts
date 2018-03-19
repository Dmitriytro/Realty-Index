import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';
import { SignoutComponent } from '../signout/signout.component';
import { SignupComponent } from '../signup/signup.component';

const authRoutes: Routes = [
  { path: 'auth', children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'signout', component: SignoutComponent },
      { path: '**', redirectTo: 'signin'}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
