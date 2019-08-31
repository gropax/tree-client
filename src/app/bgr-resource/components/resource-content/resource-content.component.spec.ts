import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceContentComponent } from './resource-content.component';

describe('ResourceContentComponent', () => {
  let component: ResourceContentComponent;
  let fixture: ComponentFixture<ResourceContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
