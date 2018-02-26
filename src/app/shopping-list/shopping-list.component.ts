import {Component, OnInit} from '@angular/core';
import Ingredient from "../shared/ingredient.model";
import {ShoppingService} from "../shopping.service";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingList: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredients();
    this.shoppingList.listChanging.subscribe(() => this.ingredients = this.shoppingList.getIngredients());
  }
}
