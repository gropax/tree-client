import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { ApplicationStateService } from './application-state.service';


export class MainButton {
  constructor(
    public type: MainButtonType,
    public action: Function) {
  }
}

enum MainButtonType {
  Sidebar,
  Back,
  Cancel,
  None,
}

export class MenuAction {
  constructor(
    public name: string,
    public icon: string,
    public action: Function) {
  }
}

enum TopbarMode {
  Navigation,
  Contextual,
}

@Injectable({
  providedIn: 'root'
})
export class TopbarService {

  private modeSubject = new BehaviorSubject<TopbarMode>(TopbarMode.Navigation);
  private titleSubject = new BehaviorSubject<string>("");
  private mainButtonSubject = new BehaviorSubject<MainButton>(null);
  private actionsSubject = new BehaviorSubject<MenuAction[]>([]);

  public mode$ = this.modeSubject.asObservable();
  public title$ = this.titleSubject.asObservable();
  public mainButton$ = this.mainButtonSubject.asObservable();
  public actions$ = this.actionsSubject.asObservable();

  setMode(mode: TopbarMode) {
    this.modeSubject.next(mode);
  }

  setTitle(title: string) {
    this.titleSubject.next(title);
  }

  setMainButton(mainButton: MainButton) {
    this.mainButtonSubject.next(mainButton);
  }

  setActions(actions: MenuAction[]) {
    this.actionsSubject.next(actions);
  }
}
