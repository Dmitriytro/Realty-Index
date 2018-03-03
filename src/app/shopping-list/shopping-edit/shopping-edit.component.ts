import {Component, OnInit, ViewChild} from '@angular/core';
import Ingredient from "../../shared/ingredient.model";
import {ShoppingService} from "../../shopping.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') ingForm: NgForm;
  editMode: boolean = false;
  selected: Ingredient = null;
  index: number = null;
  constructor(private shoppingList: ShoppingService) { }
  ngOnInit() {
    this.shoppingList.editIngredient.subscribe((index: number) => {
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
    else this.shoppingList.addIngredient(this.ingForm.value);
    this.onClean();
  }
  onUpdate(){
    this.shoppingList.update(this.index, this.ingForm.value);
    this.editMode = false;
    this.selected = null;
  }
  onDeleteItem(){

  }
  onClean(){
    this.ingForm.reset()
  }
}
