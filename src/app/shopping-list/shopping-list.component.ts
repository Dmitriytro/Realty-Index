import {Component, OnInit} from '@angular/core';
import Ingredient from "../shared/ingredient.model";
import {ShoppingService} from "../shopping.service";
import {Subscription, Observable} from "rxjs";
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients:Ingredient[]}>;
  constructor(private shoppingList: ShoppingService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription = this.shoppingList.listChanging.subscribe(() => this.shoppingListState = this.shoppingList.getIngredients());
  }
  onEdit(index: number) {
    this.shoppingList.editIngredient.next(index)
  }
}
