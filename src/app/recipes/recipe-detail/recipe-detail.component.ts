import {Component, OnInit, Input} from '@angular/core';
import Recipe from "../recipe.model";
import { RecipeService } from "../../recipe.service";
import {ShoppingService} from "../../shopping.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppinglist: ShoppingService) { }

  ngOnInit() {}

  addIngredients(){
    this.shoppinglist.addIngredients(this.recipe.ingredients)
  }
}
