import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {RealtyDataService} from "../realty-data.service";

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private data: RealtyDataService) { }

  ngOnInit() {}

  search(searchInput: NgForm){
    this.data.fetchingData(searchInput.value);
    searchInput.reset();
  }
}
