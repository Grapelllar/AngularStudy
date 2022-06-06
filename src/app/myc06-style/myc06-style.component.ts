import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc06-style',
  templateUrl: './myc06-style.component.html',
  styleUrls: ['./myc06-style.component.css']
})
export class Myc06StyleComponent implements OnInit {

  //待绑定的样式对象
  myStyleObj = {
    backgroundColor: '#383',
    color: '#fff',
    'border-Color':'#252'
  }

  //待绑定的CSSclass对象
  myClassObj={
    btn: true,
    'btn-danger':true, //烤串法则
    // btnSuccess: true    //驼峰法则,不建议!在DOM中无法转化,只能用烤串
    'btn-success':false,
    // 如果同时true,后面的覆盖前面
  }

  loadMore(){
    this.myStyleObj.backgroundColor = '#833';
    // 当对象为引号的时候,要用数组调用属性
    this.myStyleObj['border-Color'] = '#522'
  }

  loadMore2(){
    this.myClassObj['btn-success'] =true ,
    this.myClassObj['btn-danger'] = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
