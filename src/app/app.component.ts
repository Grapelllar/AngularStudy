import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myngapp01';

  value = 0;

  jianshao(){
    if(this.value > 0)
    this.value--;
  }

  zengjia(){
    this.value++;
  }
}
