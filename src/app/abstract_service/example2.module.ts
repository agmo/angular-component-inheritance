import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseWithTemplateComponent } from './base-with-template/base-with-template.component';
import { Child1NoTemplateComponent } from './child1-no-template/child1-no-template.component';
import { BaseWithTemplateDirective } from './base-with-template/base-with-template.directive';


@NgModule({
  declarations: [
    BaseWithTemplateComponent,
    Child1NoTemplateComponent,
    BaseWithTemplateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseWithTemplateComponent,
    Child1NoTemplateComponent
  ]
})
export class Example2Module {
}
