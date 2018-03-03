import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  id: number;
  isNew: boolean;
  defaultQuestion: string = 'secondOption';
  answer: string = '';
  genders: string[] = ['male','female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'] ? +params['id'] : null;
      this.isNew = !this.id;
    })
  }
  onSubmit(){
    this.user = {...this.form.value.userData};
    console.log(this.user);
  }
}
