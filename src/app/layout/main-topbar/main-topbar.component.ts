import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { ApplicationStateService } from '../../services/application-state.service';

@Component({
  selector: 'bgr-main-topbar',
  templateUrl: './main-topbar.component.html',
  styleUrls: ['./main-topbar.component.css']
})
export class MainTopbarComponent {

  @Input() navigation: string;  // sidebar | back
  @Input() title: string;

  constructor(private appState: ApplicationStateService, private location: Location) { }

  goBack() {
    this.location.back();
  }
}
