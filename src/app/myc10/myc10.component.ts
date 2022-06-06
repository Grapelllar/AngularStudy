import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc10',
  templateUrl: './myc10.component.html',
  styleUrls: ['./myc10.component.css']
})
export class Myc10Component implements OnInit {

  http : any
  constructor(http: HttpClient) { 
     this.http = http
  }

  // loadProduct(){
  //   let url = 'http://v.juhe.cn/toutiao/index'
  //   //使用注入进来的HttpClient实例发起异步请求
  //   this.http.get(url).subscribe((res: any)=>{
  //       console.log('得到了订阅的异步响应消息')
  //       console.log(res)
  //   }) //观察者模式
  // }

  ngOnInit(): void {
  }

}
