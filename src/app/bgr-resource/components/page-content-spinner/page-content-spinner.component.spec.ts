import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentSpinnerComponent } from './page-content-spinner.component';

describe('PageContentSpinnerComponent', () => {
  let component: PageContentSpinnerComponent;
  let fixture: ComponentFixture<PageContentSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContentSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContentSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
