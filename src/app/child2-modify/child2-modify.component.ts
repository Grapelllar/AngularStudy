import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2-modify',
  templateUrl: './child2-modify.component.html',
  styleUrls: ['./child2-modify.component.css']
})
export class Child2ModifyComponent implements OnInit {

  // 装饰为输入属性 用于获取数据.装饰器的下一行不要写注释！装饰器是装饰下一行
  @Input() 
  data ?:{username: string}

  constructor() { }

  ngOnInit(): void {
    console.log(this.data?.username)
  }

}
