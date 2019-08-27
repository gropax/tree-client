import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopbarComponent } from './main-topbar.component';

describe('MainTopbarComponent', () => {
  let component: MainTopbarComponent;
  let fixture: ComponentFixture<MainTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
