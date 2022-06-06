import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button'
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatStepperModule } from '@angular/material/stepper'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { TableComponent } from './table/table.component';
// import { CdkTableModule } from "@angular/cdk/table";
import {MatTableModule} from '@angular/material/table';
import { StepperComponent } from './stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';


@NgModule({
  declarations: [//声明
    AppComponent, MaterialComponent, TableComponent, StepperComponent, EmployeesComponent,

  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    BrowserAnimationsModule, //浏览器模块,只要Angular用于Web项目就需要此模块,里面包含Common Module
    MatBadgeModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatDividerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    // AppRoutingModule
    FormsModule,
    // CdkTableModule
    MatTableModule,
    ReactiveFormsModule
    // HttpClientModule,
  ],
  providers: [FormBuilder],
  //启动项，引导组件，只有在这里导入才能引入index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
