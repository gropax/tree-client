import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bgr-resource-content',
  templateUrl: './resource-content.component.html',
  styleUrls: ['./resource-content.component.css']
})
export class ResourceContentComponent implements OnInit {

  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }
}
