import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  userData: {} = {};
  defaultSubscription: string = 'Advanced';
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  constructor() { }
  ngOnInit() {}

  onSubmit(){
    console.log(this.form)
    console.log(this.form.form.value);
    this.userData = {...this.form.form.value};
  }

}
