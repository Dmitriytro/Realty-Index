import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { RealtyListComponent } from "../realty-list/realty-list.component";

const appRouter: Routes = [
  {path: '', component: RealtyListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
