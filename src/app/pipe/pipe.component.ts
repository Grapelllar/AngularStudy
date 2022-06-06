import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  List = [
    {eid: 101, ename: 'xiaoMing', salary: 5000.24214,sex:1,birthday: 1000*365},
    {eid: 102, ename: 'xiaoHuang', salary: 5000.21412421,sex:1,birthday: 1000*365*365*365*365},
    {eid: 103, ename: 'xiaoLv', salary: 5000.214214214535,sex:0,birthday: 1000*30*60},
    {eid: 104, ename: 'xiaoHei', salary: 300,sex:0,birthday: 1000}
  ]

  doDelete(index: any){
    this.List.splice(index,1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
