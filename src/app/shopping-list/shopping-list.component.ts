import {Component, OnInit, OnDestroy} from '@angular/core';
import Ingredient from "../shared/ingredient.model";
import {ShoppingService} from "../shopping.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  subscription: Subscription;
  constructor(private shoppingList: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredients();
    this.subscription = this.shoppingList.listChanging.subscribe(() => this.ingredients = this.shoppingList.getIngredients());
  }
  onEdit(index: number) {
    this.shoppingList.editIngredient.next(index)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
