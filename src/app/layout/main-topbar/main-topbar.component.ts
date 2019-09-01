import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApplicationStateService } from '../../services/application-state.service';
import { BehaviorSubject } from 'rxjs';


export class MenuAction {
  constructor(
    public name: string,
    public icon: string,
    public action: Function) {
  }
}

@Component({
  selector: 'bgr-main-topbar',
  templateUrl: './main-topbar.component.html',
  styleUrls: ['./main-topbar.component.css']
})
export class MainTopbarComponent implements OnInit {

  @Input() navigation: string;  // sidebar | back
  @Input() title: string;
  @Input() actions: MenuAction[] = [];

  private topbarActionsSubject = new BehaviorSubject<MenuAction[]>([]);
  private menuActionsSubject = new BehaviorSubject<MenuAction[]>([]);
  private topbarActions$ = this.topbarActionsSubject.asObservable();
  private menuActions$ = this.menuActionsSubject.asObservable();

  constructor(private appState: ApplicationStateService, private location: Location) {
  }

  ngOnInit() {
    this.appState.isHandset$.subscribe(isHandset => {
      var topbarMaxActions = this.getTopbarMaxActions(isHandset);
      this.topbarActionsSubject.next(this.actions.slice(0, topbarMaxActions));
      this.menuActionsSubject.next(this.actions.slice(topbarMaxActions));
    });
  }

  getTopbarMaxActions(isHandset: boolean) {
    return isHandset && this.actions.length > 2 ? 1 : 2;
  }

  goBack() {
    this.location.back();
  }
}
