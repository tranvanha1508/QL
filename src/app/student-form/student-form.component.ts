import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  //value='Clear me';
  public id=0;
  public studentForm = new FormGroup({
    code: new FormControl(''),
    gender: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),  
    dob: new FormControl(''),                                                   
    email: new FormControl(''),
    phone: new FormControl(''),
    picture: new FormControl(''),
  });
  constructor(
    private common: CommonService,
    private serviceHttp: ServerHttpService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.id > 0){
    this.loadData(this.id);
    }
  }
  private loadData(id){
    console.log('load data', id);
    this.serviceHttp.getStudent(id).subscribe((data)=> {
      console.log('getStudent', data);
        for (const controlName in this.studentForm.controls) {
          if(controlName) {
            this.studentForm.controls[controlName].setValue(data[controlName]);
    }
  }
});
  }
    public saveData() {
    //console.log('onSubmit');
    const newStudent= {};
    for (const controlName in this.studentForm.controls) {
      if(controlName) {
        newStudent[controlName] = this.studentForm.controls[controlName].value;
      }
    }
    this.serviceHttp.addStudent(newStudent as Student).subscribe((data) => {
      console.log('Student Adder', data);
      this.router.navigate(['students']);
    });
    //console.log('name =' + this.studentForm.controls.name.value);
    }
    private createNewData(){
      const newStudent= {};
    for (const controlName in this.studentForm.controls) {
      if(controlName) {
        newStudent[controlName] = this.studentForm.controls[controlName].value;
      }
    }
    return newStudent as Student;
    }
  public saveAndGotoList() {
        if(this.id > 0){
          this.serviceHttp.modifyStudent(this.id, this.createNewData()).subscribe((data) => {
          this.router.navigate(['students']);
          });
    } else {
      this.serviceHttp.addStudent(this.createNewData()).subscribe((data) => {
        //console.log('Student Adder', data);
        this.router.navigate(['students']);
      });
    }
  }
  public save() {
    if(this.id > 0){
      this.serviceHttp.modifyStudent(this.id, this.createNewData()).subscribe((data) => {
        //this.router.navigate(['students']);
        });
    } else {
      this.serviceHttp.addStudent(this.createNewData()).subscribe((data) => {
        console.log('Student Adder', data);
        this.common.increamentsetTotalStudents();
        this.studentForm.reset();
      });
    }
    
  }
  public randomStudent() {
    this.serviceHttp.getRandomStudent().subscribe((data) => {
      console.log('getRandomStudent', data);
      if (data && data.results && data.results.length > 0) {
        const student = data.results[0];
        this.studentForm.controls.code.setValue(
          (student.id.name || '') + '-' + (student.id.value || '')
        );
        this.studentForm.controls.gender.setValue(student.gender);
        this.studentForm.controls.firstName.setValue(student.name.first);
        this.studentForm.controls.lastName.setValue(student.name.last);
        this.studentForm.controls.dob.setValue(student.dob.date);
        this.studentForm.controls.email.setValue(student.email);
        this.studentForm.controls.phone.setValue(student.phone);
        this.studentForm.controls.picture.setValue(student.picture.large);
      }
    });
  }
  
}
