import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import Ingredient from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientsEvents = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
  onAddItem(ingredient: Ingredient){
    this.ingredientsEvents.emit(ingredient)
  }
}
