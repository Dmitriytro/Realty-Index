import {Injectable, EventEmitter, OnInit} from '@angular/core';
import Ingredient from "./shared/ingredient.model";

@Injectable()
export class ShoppingService implements OnInit{
  listChanging = new EventEmitter<void>();
  selectedIngredient: Ingredient = null;
  private ingredients: Ingredient[] = [
    new Ingredient('apples',5),
    new Ingredient('tomatoes',2)
  ];
  constructor() { }
  ngOnInit(){}
  getIngredients(){
    return this.ingredients.slice()
  }
  addIngredient(item: Ingredient){
    this.ingredients.push(item);
    this.listChanging.emit();
  }
  deleteIngredient(){
    if(this.selectedIngredient){
      this.ingredients = this.ingredients.filter(elem => elem !== this.selectedIngredient);
      this.selectedIngredient = null;
      this.listChanging.emit();
    }
  }
}
