import {Injectable} from '@angular/core';
import Recipe from "./recipes/recipe.model";
import {Subject, Observable} from "rxjs";
import { Headers} from "@angular/http";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RecipeService {
  serverUrl: string = 'https://realtyindexapp.firebaseio.com/';
  fb: string = 'data.json';
  selectedRecipe = new Subject<Recipe>();
  recipeChanged = new Subject<void>();
  recipes: Recipe[] = [];
  constructor(private http: HttpClient) {}
  saveRecipe(form: Recipe): Observable<any>{
    const header = new Headers({'Content-Type':'application/json'});
    return this.http.post(this.serverUrl+this.fb,form,{headers:header})
  }
  getRecipes(){
    if(this.recipes.length) return this.recipes.slice();
    else return [];
  }
  getRecipe(idx){
    return this.getRecipes()[idx]
  }
  addRecipe(form: Recipe){
    this.recipes.push(form);
    this.recipeChanged.next();
  }
  updateRecipe(idx: number, formValues: Recipe){
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
