import { Component, OnInit } from '@angular/core';
import Recipe from "./recipe.model";
import { RecipeService } from "../recipe.service";
import { ShoppingService } from "../shopping.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe = null;
  constructor(private recipeService: RecipeService,private shoppinglist: ShoppingService) { }

  ngOnInit() {}
}
