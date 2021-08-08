import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkrcreateComponent } from './okrcreate.component';

describe('OkrcreateComponent', () => {
  let component: OkrcreateComponent;
  let fixture: ComponentFixture<OkrcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkrcreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkrcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
