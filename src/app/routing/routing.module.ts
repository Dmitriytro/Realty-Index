import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {RecipesComponent} from "../recipes/recipes.component";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {AuthGuardService} from "../auth-guard.service";
import {RecipeDetailComponent} from "../recipes/recipe-detail/recipe-detail.component";
import {NoRecipeSelectedComponent} from "../recipes/no-recipe-selected/no-recipe-selected.component";
import {RecipeEditComponent} from "../recipes/recipe-edit/recipe-edit.component";
import {FormComponent} from "../form/form.component";

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: NoRecipeSelectedComponent},
    { path: 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipeDetailComponent},
    { path: ':id/edit', component: RecipeEditComponent}
  ] },
  { path: 'shopping-list', canActivate:[AuthGuardService], component: ShoppingListComponent },
  { path: '**', redirectTo: '/recipes', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
