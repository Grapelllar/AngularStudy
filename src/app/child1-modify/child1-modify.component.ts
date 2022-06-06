import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child1-modify',
  templateUrl: './child1-modify.component.html',
  styleUrls: ['./child1-modify.component.css']
})
export class Child1ModifyComponent implements OnInit {

  // userInput ?:string;
  userInput ?:string ;
  @Output()
  private modifyEvent = new EventEmitter(); //事件发射器
  constructor() { }

  ngOnInit(): void {
  }

  doModify(){
    console.log('do modify...');
    this.modifyEvent.emit(this.userInput)
  }

}
