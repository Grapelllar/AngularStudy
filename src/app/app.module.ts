import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myc02NgforComponent } from './myc02-ngfor/myc02-ngfor.component';
import { Myc03NgifComponent } from './myc03-ngif/myc03-ngif.component';
import { Myc04NgifComponent } from './myc04-ngif/myc04-ngif.component';
import { Myc06StyleComponent } from './myc06-style/myc06-style.component';
import { Myc07SwitchComponent } from './myc07-switch/myc07-switch.component';
import { Myc08NgmodelComponent } from './myc08-ngmodel/myc08-ngmodel.component';
// 表单模块,内含ngModel
import { FormsModule } from '@angular/forms';
import { XuYaoQiangDiaoDirective } from './xu-yao-qiang-diao.directive';
import { TodolistComponent } from './todolist/todolist.component';
import { PipeComponent } from './pipe/pipe.component';
import { SexPipe } from './pipe/sex.pipe';
import { ZzmmPipeComponent } from './zzmm-pipe/zzmm-pipe.component';
import { Zzmm } from './zzmm-pipe/zzmm.pip';
import { Myc09Component } from './myc09/myc09.component';

import { HttpClientModule } from '@angular/common/http';
import { Myc10Component } from './myc10/myc10.component';
import { Class04Component } from './class04/class04.component';
import { ParentBlogComponent } from './parent-blog/parent-blog.component';
import { Child1ModifyComponent } from './child1-modify/child1-modify.component';
import { Child2ModifyComponent } from './child2-modify/child2-modify.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'

@NgModule({
  declarations: [//声明
    AppComponent,
    Myc02NgforComponent,
    Myc03NgifComponent,
    Myc04NgifComponent,
    Myc06StyleComponent,
    Myc07SwitchComponent,
    Myc08NgmodelComponent,
    XuYaoQiangDiaoDirective,
    TodolistComponent,
    PipeComponent,
    SexPipe,
    ZzmmPipeComponent, //管道声明
    Zzmm,
    Myc09Component,
    Myc10Component,
    Class04Component,
    ParentBlogComponent,
    Child1ModifyComponent,
    Child2ModifyComponent,
    UserCenterComponent,
    ProductDetailComponent //HTTP对象声明
  ],
  imports: [
    BrowserModule, //浏览器模块,只要Angular用于Web项目就需要此模块,里面包含Common Module
    // AppRoutingModule
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  //启动项，引导组件，只有在这里导入才能引入index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
