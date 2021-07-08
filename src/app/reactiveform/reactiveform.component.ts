import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  //public name = new FormControl('');
  public profileForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });
  public onSubmit(){
    console.log('onSubmit');
    console.log(this.profileForm);
    console.log('name ='+this.profileForm.controls.name.value);
    console.log('age ='+this.profileForm.controls.age.value);
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  public updateName() {
   // this.name.setValue('Nancy');
  }
}
