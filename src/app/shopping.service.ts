import {Injectable, OnInit} from '@angular/core';
import Ingredient from "./shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable()
export class ShoppingService implements OnInit{
  listChanging: Subject<void> = new Subject<void>();
  editIngredient: Subject<number> = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('apples',5),
    new Ingredient('tomatoes',2)
  ];
  constructor() {}
  ngOnInit(){}
  getIngredients(){
    return this.ingredients.slice()
  }
  getIngredient(index: number) {
    return this.getIngredients()[index];
  }
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.listChanging.next();
  }
  addIngredients(ings: Ingredient[]){
    this.ingredients = [...this.ingredients,...ings];
    this.listChanging.next();
  }
  update(index: number, ingredient: Ingredient) {
    const arr = this.getIngredients();
    arr[index] = ingredient;
    this.ingredients = arr;
    this.listChanging.next();
  };
  delete(index: number) {
    this.ingredients.splice(index,1);
    this.listChanging.next();
  }
}
