import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBaseWithTemplateHost]',
})
export class BaseWithTemplateDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
