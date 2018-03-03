import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Recipe from "../recipe.model";
import {RecipeService} from "../../recipe.service";
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  idx: number;
  isNew: boolean;
  recipe: Recipe = null;
  recipeForm: FormGroup;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idx = params['id'] ? +params['id'] : null;
      this.isNew = !Number.isInteger(this.idx);
      this.initRecipeForm();
    });
  }
  onSubmit(){
    if(!this.isNew){
      this.recipeService.updateRecipe(this.idx,this.recipeForm.value)
    } else this.recipeService.addRecipe(this.recipeForm.value);
    this.router.navigate(['../'], {relativeTo: this.route})
  }
  initRecipeForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if(!this.isNew){
      const recipe = this.recipeService.getRecipe(this.idx);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for (let ingredient of recipe['ingredients']){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'ingredients': recipeIngredients
    });
  }
  removeIngredient(idx: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(idx);
    this.recipeService.removeIngredient(this.idx,idx)
  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }
  cancel(){

  }
}
