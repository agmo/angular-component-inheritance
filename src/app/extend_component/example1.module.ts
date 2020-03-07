import { NgModule } from '@angular/core';
import {BaseComponent} from './base/base.component';
import {Child1Component} from './child1/child1.component';
import {Child2Component} from './child2/child2.component';



@NgModule({
  declarations: [
    BaseComponent,
    Child1Component,
    Child2Component
  ],
  exports: [
    BaseComponent,
    Child1Component,
    Child2Component
  ]
})
export class Example1Module { }
