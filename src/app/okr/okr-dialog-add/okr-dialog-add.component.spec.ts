import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkrDialogAddComponent } from './okr-dialog-add.component';

describe('OkrDialogAddComponent', () => {
  let component: OkrDialogAddComponent;
  let fixture: ComponentFixture<OkrDialogAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkrDialogAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkrDialogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
