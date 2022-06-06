import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appXuYaoQiangDiao]'
})
export class XuYaoQiangDiaoDirective {

  constructor(el: ElementRef) { 
    console.log('需要强调指令化一次')
    console.log(el)
    // 原生对象
    el.nativeElement.style.background = '#fcc'
    el.nativeElement.style.padding = '10px'
    el.nativeElement.style.color = '#833'

    
  }

  // constructor(){
  //   console.log('需要强调实例化一次')
  // }
}
