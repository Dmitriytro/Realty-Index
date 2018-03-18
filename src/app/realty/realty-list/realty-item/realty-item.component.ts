import { Component, Input, OnInit } from '@angular/core';
import { Realty } from '../realty.model';

@Component({
  selector: 'app-realty-item',
  templateUrl: './realty-item.component.html',
  styleUrls: ['./realty-item.component.css']
})
export class RealtyItemComponent implements OnInit {
  @Input() realty: Realty;
  @Input() selected: Realty;
  constructor() { }

  ngOnInit() {}

}
