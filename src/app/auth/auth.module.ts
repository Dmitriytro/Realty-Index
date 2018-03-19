import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignoutComponent } from './signout/signout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';

@NgModule({
  declarations: [
    SignoutComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authReducer', authReducer),
  ]
})
export class AuthModule { }
