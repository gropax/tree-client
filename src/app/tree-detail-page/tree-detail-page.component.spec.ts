import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDetailPageComponent } from './tree-detail-page.component';

describe('TreeDetailPageComponent', () => {
  let component: TreeDetailPageComponent;
  let fixture: ComponentFixture<TreeDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
