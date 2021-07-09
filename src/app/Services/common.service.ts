import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public totalStudents = 0;
  public totalStudents$ = new BehaviorSubject<number>(0);
  constructor() { }
  public setTotalStudents(total: number) {
    this.totalStudents = total;
    this.totalStudents$.next(total);
    console.log('total =' + total);
  }
  public increamentsetTotalStudents() {
    this.totalStudents++;
    this.totalStudents$.next(this.totalStudents);
    
  }

  public increamentStudent() {
    this.totalStudents++;
    //this.totalStudents$.next(this.totalStudents);
  }
  // public tangtuoi() {
  //   this.age++;
    // if(this.age===20){
    //   this.name="Hahaha";
    //this.vehicle.push(this.name + ': ' + this.age);
    //}
}
