import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";

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
import { NoRecipeSelectedComponent } from './recipes/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ReversePipe } from './reverse.pipe';
import { SortByPipe } from './sort-by.pipe';
import { DataStorageService } from "./shared/data-storage.service";
import { shoppingListReducer } from "./shopping-list/store/shoppong-list.reducer";


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
    NoRecipeSelectedComponent,
    RecipeEditComponent,
    ReversePipe,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    StoreModule.forRoot({ shoppingList: shoppingListReducer }),
    ReactiveFormsModule
  ],
  providers: [RecipeService,ShoppingService,AuthGuardService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
