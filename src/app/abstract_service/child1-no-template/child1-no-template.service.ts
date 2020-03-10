import { Injectable } from '@angular/core';
import { BaseService } from '../base-with-template/base.service';

@Injectable({
  providedIn: 'root'
})
export class Child1NoTemplateService extends BaseService {

  constructor() { super(); }

  doSomething(): void {
    alert('Child 1 says Hi!');
  }
}
