import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {RecipesComponent} from "../recipes/recipes.component";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {AuthGuardService} from "../auth-guard.service";
import {RecipeDetailComponent} from "../recipes/recipe-detail/recipe-detail.component";
import {NoRecipeChoosedComponent} from "../recipes/no-recipe-choosed/no-recipe-choosed.component";

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: NoRecipeChoosedComponent},
    { path: ':id', component: RecipeDetailComponent}
  ] },
  { path: 'shopping-list', canActivate:[AuthGuardService], component: ShoppingListComponent },
  { path: '**', redirectTo: '/recipes', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
