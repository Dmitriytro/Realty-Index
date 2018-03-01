import {Component, OnInit, Input} from '@angular/core';
import Recipe from "../recipe.model";
import { RecipeService } from "../../recipe.service";
import {ShoppingService} from "../../shopping.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppinglist: ShoppingService, private recipeService: RecipeService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((paramId) => {
      const id = +paramId['id'];
      this.recipe = this.recipeService.getRecipes().find((elem) => id === elem.id);
    });
  }

  addIngredients(){
    this.shoppinglist.addIngredients(this.recipe.ingredients)
  }
}
