import {Component, OnInit} from '@angular/core';
import Ingredient from "../../shared/ingredient.model";
import {ShoppingService} from "../../shopping.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingList: ShoppingService) { }
  ngOnInit() {}
  onAddItem(ingredient: Ingredient){
    this.shoppingList.addIngredient(ingredient);
  }
  onDeleteItem(){
    this.shoppingList.deleteIngredient()
  }
  onClear(){
    this.shoppingList.selectedIngredient = null;
  }
}
