import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewPageComponent } from './tree-view-page.component';

describe('TreeViewPageComponent', () => {
  let component: TreeViewPageComponent;
  let fixture: ComponentFixture<TreeViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
