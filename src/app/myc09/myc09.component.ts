import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-myc09',
  templateUrl: './myc09.component.html',
  styleUrls: ['./myc09.component.css']
})
export class Myc09Component implements OnInit {

  //组件，王思聪，必须声明依赖
  log : any
  constructor(abc: LogService){  //声明依赖
    console.log('王思聪诞生了....')
    console.log(abc)
    this.log = abc
  }

  doAdd(){
    // Angular认为，组件是与用户交互的一种对象，其中的内容都应该和用户操作有关系，无关的都应该剥离出去，放在“服务对象”
    // 例如：日志记录、计时统计、数据服务器访问等
    let action = '正在执行数据库的添加...'
    this.log.doLog(action)
  }

  doDelete(){
    let action ='正在执行数据库的删除...'
    this.log.doLog(action)
  }

  ngOnInit(): void {
  }

}
