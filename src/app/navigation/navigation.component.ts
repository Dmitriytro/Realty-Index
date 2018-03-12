import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Params} from "../realty-list/params.model";
import * as RealtyActions from "../realty-list/store/realty.actions";

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private store: Store<Params>) { }

  ngOnInit() {}

  search(searchInput: NgForm){
    this.store.dispatch(new RealtyActions.setParams(searchInput.value));
    searchInput.reset();
  }
}
