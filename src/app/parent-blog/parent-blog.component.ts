import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-blog',
  templateUrl: './parent-blog.component.html',
  styleUrls: ['./parent-blog.component.css']
})
export class ParentBlogComponent implements OnInit {

  username :string = '苍茫大地123'

  constructor() { }

  ngOnInit(): void {
  }

  getDate(){
    return{
      username: this.username,
    }
  }
  modify(e : any){
    console.log(e)
    this.username = e;
    console.log(event)
  }
}
// $event