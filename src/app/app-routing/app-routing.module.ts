import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../core/home/home.component';
import { RealtyListComponent } from '../realty/realty-list/realty-list.component';

const appRouter: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'realty', loadChildren: '../realty/realty.module#RealtyModule'}
  {path: 'realty', component: RealtyListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
