import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { combineLatest } from 'rxjs';
import { ApplicationStateService } from '../../bgr-resource/services/application-state.service';

@Component({
  selector: 'bgr-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer', { static: true }) drawer: MatSidenav;

  constructor(private appState: ApplicationStateService) {
  }

  ngOnInit(): void {
    combineLatest(
      this.appState.isHandset$,
      this.appState.sidenavOpen$
    ).subscribe(([isHandset, sidenavOpen]) =>
      isHandset && !sidenavOpen ? this.drawer.close() : this.drawer.open());
  }
}
