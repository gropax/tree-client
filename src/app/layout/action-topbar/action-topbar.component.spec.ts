import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTopbarComponent } from './action-topbar.component';

describe('ActionTopbarComponent', () => {
  let component: ActionTopbarComponent;
  let fixture: ComponentFixture<ActionTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
