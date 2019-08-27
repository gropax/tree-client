import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bgr-action-topbar',
  templateUrl: './action-topbar.component.html',
  styleUrls: ['./action-topbar.component.css']
})
export class ActionTopbarComponent {

  @Input() title: string;
  @Output() cancel = new EventEmitter();

  constructor() { }
}
