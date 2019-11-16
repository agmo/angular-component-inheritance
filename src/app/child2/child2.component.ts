import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component extends BaseComponent implements OnInit {

  ngOnInit() {
    console.log('Child2Component OnInit');
    super.ngOnInit();
  }

}
