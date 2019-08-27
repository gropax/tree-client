import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable, forkJoin, zip, combineLatest } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay, withLatestFrom, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { ApplicationStateService } from '../../services/application-state.service';

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
    ).subscribe(([isHandset, sidenavOpen]) => {
      console.log(`isHandset = [${isHandset}], sidenavOpen = [${sidenavOpen}]`);
      isHandset && !sidenavOpen ? this.drawer.close() : this.drawer.open();
    });
  }
}
