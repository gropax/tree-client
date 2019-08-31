import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTreePageComponent } from './new-tree-page.component';

describe('NewTreePageComponent', () => {
  let component: NewTreePageComponent;
  let fixture: ComponentFixture<NewTreePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTreePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
