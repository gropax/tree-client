import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay, withLatestFrom, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  private sidenavOpenSubject = new BehaviorSubject<boolean>(false);
  public sidenavOpen$ = this.sidenavOpenSubject.asObservable();

  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(),
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  openSidenav() {
    this.sidenavOpenSubject.next(true);
  }

  closeSidenav() {
    this.sidenavOpenSubject.next(false);
  }
}
