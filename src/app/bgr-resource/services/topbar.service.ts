import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, pipe } from 'rxjs';
import { ApplicationStateService } from './application-state.service';
import { map } from 'rxjs/operators';


export class MainButton {
  constructor(
    public type: MainButtonType,
    public action: Function) {
  }
}

export enum MainButtonType {
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

export enum TopbarMode {
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

  public isNavigationMode$ = this.mode$.pipe(map(m => m == TopbarMode.Navigation));
  public isBackButton$ = this.mainButton$.pipe(map(b => b && b.type == MainButtonType.Back));
  public isSidebarButton$ = this.mainButton$.pipe(map(b => b && b.type == MainButtonType.Sidebar));
  public isCancelButton$ = this.mainButton$.pipe(map(b => b && b.type == MainButtonType.Cancel));

  public mainButtonAction: Function;

  constructor() {
    this.mainButton$.subscribe(b => {
      if (b) this.mainButtonAction = b.action
    });
  }

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
