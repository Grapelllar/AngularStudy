import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyC01Component } from './myc01';
import { Myc02Component } from './myc02/myc02.component';
import { Myc03Component } from './myc03.component';
import { MyC03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { Myc05Component } from './myc05/myc05.component';

@NgModule({
  declarations: [//声明
    AppComponent,
    Myc02Component,
    MyC01Component,
    Myc03Component,
    MyC03Component,
    Myc04Component,
    Myc05Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //启动项，引导组件，只有在这里导入才能引入index.html
  bootstrap: [AppComponent,Myc02Component]
})
export class AppModule { }
