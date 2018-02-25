import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navigation-tabs',
  templateUrl: 'navigation-tabs.component.html',
  styleUrls: ['navigation-tabs.component.css']
})
export class NavigationTabsComponent implements OnInit {
  currentTab = 'recipe';
  selectedElement: HTMLLIElement;
  @Output() current = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  makeActive(currentTab,event){
    this.selectedElement = event.target.parentElement;
    this.currentTab = currentTab;
    this.current.emit(this.currentTab)
  }
}
