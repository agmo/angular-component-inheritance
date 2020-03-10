import { Component, OnInit } from '@angular/core';
import { BaseService } from './base.service';

@Component({
  selector: 'app-base-with-template',
  templateUrl: './base-with-template.component.html',
  styleUrls: ['./base-with-template.component.scss']
})
export class BaseWithTemplateComponent implements OnInit {

  constructor(private baseService: BaseService) { }

  ngOnInit() {
  }

  log() {
    this.baseService.log();
  }

  doSomething() {
    this.baseService.doSomething();
  }
}
