import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zzmm-pipe',
  templateUrl: './zzmm-pipe.component.html',
  styleUrls: ['./zzmm-pipe.component.css']
})
export class ZzmmPipeComponent implements OnInit {

  zzmm = "10"
  aaa = "aaad"
  display = true

  // panduan(){
  
  // }

  constructor() { }

  ngOnInit(): void {
    if(this.aaa.length <= 3){
      this.display = false
    }
    console.log(this.display)
  }

}
