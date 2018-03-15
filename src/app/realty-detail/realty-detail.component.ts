import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Realty} from "../realty-list/realty.model";

@Component({
  selector: 'app-realty-detail',
  templateUrl: './realty-detail.component.html',
  styleUrls: ['./realty-detail.component.css']
})
export class RealtyDetailComponent implements OnInit,OnChanges {
  @Input('selected') item: Realty;
  title: string = 'Property location';
  lat: number;
  lng: number;
  constructor() { }

  ngOnInit() {
    this.rerenderMap(this.item);
  }
  ngOnChanges(changes: SimpleChanges) {
    this.rerenderMap(changes.item.currentValue);
  }
  rerenderMap(value: Realty){
    this.lat = +value.location.latitude;
    this.lng = +value.location.longitude;
  }

}
