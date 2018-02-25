import {Component, OnInit, Input} from '@angular/core';
import Ingredient from "../shared/ingredient.model";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples',5),
    new Ingredient('tomatoes',2)
  ];
  constructor() { }

  ngOnInit() {
  }
  onAddIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
  }
}
