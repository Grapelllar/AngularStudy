import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  add = ''
  todoList=[]

  // addEvent(){
  //   this.todoList.push(this.add)
  // }



  constructor() { }

  ngOnInit(): void {
  }

}
