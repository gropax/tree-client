import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDetailsPageComponent } from './tree-details-page.component';

describe('TreeDetailsPageComponent', () => {
  let component: TreeDetailsPageComponent;
  let fixture: ComponentFixture<TreeDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
