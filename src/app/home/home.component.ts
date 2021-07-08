import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
public name = 'Ha';
public age = 17;
public vehicle = ['Toyota','Honda','Mẹc','Ford','yamaha'];
  constructor(private common: CommonService) {
    this.age =common.age;
  }

  ngOnInit(): void {
  }
  public tangtuoi() {
    this.common.age++;
    this.age = this.common.age; 
    // if(this.age===20){
    //   this.name="Hahaha";
    //this.vehicle.push(this.name + ': ' + this.age);
    }
  }


