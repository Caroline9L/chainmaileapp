import { Component, OnInit, Input } from '@angular/core';
import { Weave } from '../../../shared/weave.model';

@Component({
  selector: 'app-weave-item',
  templateUrl: './weave-item.component.html',
  styleUrls: ['./weave-item.component.css']
})
export class WeaveItemComponent implements OnInit {
  @Input() weaves: Weave;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
