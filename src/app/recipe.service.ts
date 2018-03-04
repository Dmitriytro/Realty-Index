import {Injectable} from '@angular/core';
import Recipe from "./recipes/recipe.model";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  selectedRecipe = new Subject<Recipe>();
  recipeChanged = new Subject<void>();
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'one more string',
      'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
      [{name:'bacon',amount:1},{name:'bacon2',amount:2},{name:'bacon3',amount:3}]),
    new Recipe(
      'Z test Recipe 2',
      'one more string 2',
      'https://c.pxhere.com/photos/bd/fe/dishes_kitchen_bio_food_recipe_meals_home_made_eat-657279.jpg!d',
      [{name:'bacon2',amount:2}]),
    new Recipe(
      'E test Recipe 3',
      'one more string 3',
      'https://c.pxhere.com/photos/b0/0e/kitchen_recipe_carrots_oranges_cumin_mint_salad_eat-1389228.jpg!d',
      [{name:'bacon3',amount:3}]),
  ];
  constructor() { }
  getRecipes(){
    return this.recipes.slice()
  }
  getRecipe(idx){
    return this.getRecipes()[idx]
  }
  addRecipe(form: Recipe){
    this.recipes.push(form);
    this.recipeChanged.next();
  }
  updateRecipe(idx: number, formValues: Recipe){
    // console.log(formValues)
    this.recipes[idx] = formValues;
    this.recipeChanged.next();
  }
  selectRecipe(elem){
    this.selectedRecipe.next(elem)
  }
  removeIngredient(id: number,idx: number){
    this.recipes.forEach((elem,i) => {
      if(i === id) {
        elem.ingredients.splice(idx,1)
      }
    });
    this.recipeChanged.next();
  }
}
