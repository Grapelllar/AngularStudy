import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css']
})
export class Myc05Component{
  //MVVM: Model 模型数据 绑定到 V =》 模板
  uname = 'ding dang'
  age = 20
  count = 3
  imgUrl = '1.png'
  printfUname(){
    console.log(this.age)
  }

  hasMouse(){
    return false;
  }
  
  zengJia(){
    this.count++;
  }
  jianShao(){
    this.count--;
  }

}
