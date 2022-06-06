import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc04-ngif',
  templateUrl: './myc04-ngif.component.html',
  styleUrls: ['./myc04-ngif.component.css']
})
export class Myc04NgifComponent implements OnInit {
  age = 3
  hasMoreBoolean = true;

  hasMore(){
    this.hasMoreBoolean = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}