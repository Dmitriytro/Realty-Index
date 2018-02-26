import {Injectable, EventEmitter} from '@angular/core';
import Recipe from "./recipes/recipe.model";

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'one more string', 'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',[{name:'bacon',amount:1},{name:'bacon2',amount:2},{name:'bacon3',amount:3}]),
    new Recipe('A test Recipe 2', 'one more string 2', 'https://c.pxhere.com/photos/bd/fe/dishes_kitchen_bio_food_recipe_meals_home_made_eat-657279.jpg!d',[{name:'bacon2',amount:2}]),
    new Recipe('A test Recipe 3', 'one more string 3', 'https://c.pxhere.com/photos/b0/0e/kitchen_recipe_carrots_oranges_cumin_mint_salad_eat-1389228.jpg!d',[{name:'bacon3',amount:3}]),
  ];
  constructor() { }
  getRecipes(){
    return this.recipes.slice()
  }
  selectRecipe(elem){
    this.selectedRecipe.emit(elem)
  }
}
