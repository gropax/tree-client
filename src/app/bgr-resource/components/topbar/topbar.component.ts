import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { MenuAction } from '../../../layout/main-topbar/main-topbar.component';
import { TopbarService } from '../../services/topbar.service';
import { ApplicationStateService } from '../../services/application-state.service';

@Component({
  selector: 'bgr-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  private topbarActionsSubject = new BehaviorSubject<MenuAction[]>([]);
  private menuActionsSubject = new BehaviorSubject<MenuAction[]>([]);

  public topbarActions$ = this.topbarActionsSubject.asObservable();
  public menuActions$ = this.menuActionsSubject.asObservable();

  constructor(private appState: ApplicationStateService,
    private topbarService: TopbarService) {
  }

  ngOnInit() {
    combineLatest(
      this.appState.isHandset$,
      this.topbarService.actions$
    ).subscribe(([isHandset, actions]) => {
      var topbarMaxActions = this.getTopbarMaxActions(actions.length, isHandset);
      this.topbarActionsSubject.next(actions.slice(0, topbarMaxActions));
      this.menuActionsSubject.next(actions.slice(topbarMaxActions));
    });
  }

  getTopbarMaxActions(actions: number, isHandset: boolean) {
    return isHandset && actions > 2 ? 1 : 2;
  }
}
