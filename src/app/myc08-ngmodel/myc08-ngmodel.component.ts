import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc08-ngmodel',
  templateUrl: './myc08-ngmodel.component.html',
  styleUrls: ['./myc08-ngmodel.component.css']
})
export class Myc08NgmodelComponent implements OnInit {

  uname = '';
  warn = '密码长度在6-12之间';
  password = '';

  //处理uname改变事件
  doUnameChange(){
    console.log(this.uname)
  }

  doPasswdChange(){
    if(this.password.length > 12){
      this.warn = "密码太长啦"
    }else if(this.password.length >= 6){
      this.warn = "密码合适哦"
    }else{
      this.warn = "密码太短啦"
    }
    console.log(this.password)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
