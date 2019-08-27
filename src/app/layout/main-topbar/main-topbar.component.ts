import { Component, OnInit, Input } from '@angular/core';
import { ApplicationStateService } from '../../services/application-state.service';

@Component({
  selector: 'bgr-main-topbar',
  templateUrl: './main-topbar.component.html',
  styleUrls: ['./main-topbar.component.css']
})
export class MainTopbarComponent {

  @Input() title: string;

  constructor(private appState: ApplicationStateService) { }
}
