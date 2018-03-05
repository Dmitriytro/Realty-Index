import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipe.service";
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  serverUrl: string = 'https://realtyindexapp.firebaseio.com/';
  constructor(private http: Http,
              private recipeService: RecipeService) { }
  fetchRecipe(){
    this.http.get(`${this.serverUrl}/recipes.json`)
      .map((response: Response) => response.json())
      .map((object) => {
        object['-L6npp8Yp8eMZaI19Rc0'].forEach(elem => {
          if(!elem['ingredients']){
            elem['ingredients'] = [];
          }
        })
        return object['-L6npp8Yp8eMZaI19Rc0']
      })
      .subscribe((array) => {
        this.recipeService.recipes = array;
        this.recipeService.recipeChanged.next();
      })
  }
  addRecipes(){
    this.http.post(`${this.serverUrl}/recipes.json`,this.recipeService.getRecipes())
      .subscribe(console.log)
  }
}
