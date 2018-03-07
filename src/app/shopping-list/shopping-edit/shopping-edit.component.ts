import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import Ingredient from "../../shared/ingredient.model";
import {ShoppingService} from "../../shopping.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import * as ShoppingListActions from "../store/shopping-list.actions";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') ingForm: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  selected: Ingredient = null;
  index: number = null;
  constructor(private shoppingList: ShoppingService,private store: Store<{ingredients: Ingredient[]}>) { }
  ngOnInit() {
    this.subscription = this.shoppingList.editIngredient.subscribe((index: number) => {
      this.editMode = true;
      this.index = index;
      this.selected = this.shoppingList.getIngredient(index);
      this.ingForm.setValue({
        name: this.selected.name,
        amount: this.selected.amount
      })
    })
  }
  onAddItem(){
    if(this.editMode) this.onUpdate();
    else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(new Ingredient(this.ingForm.value.name,this.ingForm.value.amount)));
    }
    this.onClean();
  }
  onUpdate(){
    this.shoppingList.update(this.index, this.ingForm.value);
  }
  onDeleteItem(){
    this.shoppingList.delete(this.index);
    this.onClean();
  }
  onClean(){
    this.index = null;
    this.selected = null;
    this.editMode = false;
    this.ingForm.reset()
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
