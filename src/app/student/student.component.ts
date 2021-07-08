import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  
public student=[];
  constructor(
    private common: CommonService,
    private serviceHttp: ServerHttpService,
    private router: Router,
  ) {}
    


  ngOnInit(): void {
    this.serviceHttp.getStudent().subscribe((data=>{
      console.log('getStudent', data);
      this.student=data;
    }));
  }
public addStudent() {
  this.router.navigate(['student-form']);
}
}
