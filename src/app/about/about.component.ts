import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
public age = '';
public name = '';
public comments;
public posts;
  constructor(
    private common: CommonService,
    private serviceHttp: ServerHttpService
    ) {
    //this.age =common.age;
  }
  
  ngOnInit(): void {
    this.serviceHttp.getProfile().subscribe((data=>{
      console.log(data);
      this.name=data.name;
      this.age=data.age;
    }));
    this.serviceHttp.getComments().subscribe((data=>{
      console.log('comments',data);
      this.comments=data;
    }));
    this.serviceHttp.getPosts().subscribe((data=>{
      console.log('posts',data);
      this.posts=data;
    }));

  }
  public addPost() {
    const newData = {title: 'testing', author: 'author testing'};
    this.serviceHttp.addPosts(newData).subscribe((data)=>{
      console.log('addPost',data);
      this.posts.push(data);
    });
  }
  public tangtuoi() {
    
    //this.common.age++;
    //this.age= this.common.age;
    // if(this.age===20){
    //   this.name="Hahaha";
    //this.vehicle.push(this.name + ': ' + this.age);
    }

}
