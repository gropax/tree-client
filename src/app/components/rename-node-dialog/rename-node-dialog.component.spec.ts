import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameNodeDialogComponent } from './rename-node-dialog.component';

describe('RenameNodeDialogComponent', () => {
  let component: RenameNodeDialogComponent;
  let fixture: ComponentFixture<RenameNodeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenameNodeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameNodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
