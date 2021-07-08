import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from './Services/common.service';
import { ServerHttpService } from './Services/server-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HelloWorld';
  @ViewChild('sidenav') sidenav: MatSidenav;
  public isOpened = false;
  public totalStudents = 0;

  

  public openLeftSide() {
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
  }
  public closeLeftSide() {
    this.isOpened = false;
  }
}