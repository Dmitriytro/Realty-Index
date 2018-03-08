import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ServerCommunicationService} from "../server-communication.service";

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private serverCommunication: ServerCommunicationService) { }

  ngOnInit() {}

  search(searchInput: NgForm){
    console.log(searchInput);
    this.serverCommunication.fetch(searchInput.value)
      .subscribe((responce) => console.log(responce));
  }
}
