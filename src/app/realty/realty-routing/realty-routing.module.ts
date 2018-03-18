import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RealtyListComponent } from '../realty-list/realty-list.component';

const realtyRouter: Routes = [
  { path: '', component: RealtyListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(realtyRouter)
  ],
  exports: [RouterModule]
})
export class RealtyRoutingModule { }
