import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeListPageComponent } from './tree-list-page.component';

describe('TreeListPageComponent', () => {
  let component: TreeListPageComponent;
  let fixture: ComponentFixture<TreeListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
