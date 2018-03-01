import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationSearchComponent } from './navigation/navigation-search/navigation-search.component';
import { NavigationLabelComponent } from './navigation/navigation-label/navigation-label.component';
import { NavigationTabsComponent } from './navigation/navigation-tabs/navigation-tabs.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeService } from "./recipe.service";
import { ShoppingService } from "./shopping.service";
import { RoutingModule } from "./routing/routing.module";
import { AuthGuardService } from "./auth-guard.service";
import { NoRecipeChoosedComponent } from './recipes/no-recipe-choosed/no-recipe-choosed.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationSearchComponent,
    NavigationLabelComponent,
    NavigationTabsComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    NoRecipeChoosedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [RecipeService,ShoppingService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
