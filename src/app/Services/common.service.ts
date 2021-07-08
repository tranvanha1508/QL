import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
public age =10;
  totalStudents$: any;
  constructor() { }

  public tangtuoi() {
    this.age++;
    // if(this.age===20){
    //   this.name="Hahaha";
    //this.vehicle.push(this.name + ': ' + this.age);
    }
}
