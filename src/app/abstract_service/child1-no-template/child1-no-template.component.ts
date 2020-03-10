import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild } from '@angular/core';
import { BaseWithTemplateDirective } from '../base-with-template/base-with-template.directive';
import { BaseWithTemplateComponent } from '../base-with-template/base-with-template.component';
import { BaseService } from '../base-with-template/base.service';
import { Child1NoTemplateService } from './child1-no-template.service';

@Component({
  selector: 'app-child1-no-template',
  templateUrl: './child1-no-template.component.html',
})
export class Child1NoTemplateComponent implements OnInit {
  @ViewChild(BaseWithTemplateDirective, {static: true}) componentHost: BaseWithTemplateDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private child1NoTemplateService: Child1NoTemplateService) {
  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BaseWithTemplateComponent);

    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();

    const injector: Injector = Injector.create({
      providers: [{
        provide: BaseService,
        useValue: this.child1NoTemplateService
      }]
    });
    viewContainerRef.createComponent(componentFactory, null, injector);
  }
}
