import {Component, OnInit} from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-navigation-tabs',
  templateUrl: 'navigation-tabs.component.html',
  styleUrls: ['navigation-tabs.component.css']
})
export class NavigationTabsComponent implements OnInit{
  constructor(private dataStorage: DataStorageService) { }

  ngOnInit() {}
  fetch(){
    this.dataStorage.fetchRecipe()
  }
  save(){
    this.dataStorage.addRecipes()
  }
}
