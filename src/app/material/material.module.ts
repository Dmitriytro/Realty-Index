import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
