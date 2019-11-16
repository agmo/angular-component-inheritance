import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component extends BaseComponent implements OnInit {

  ngOnInit() {
    console.log('Child1Component OnInit');
    super.ngOnInit();
  }

}
