import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkrtableComponent } from './okrtable.component';

describe('OkrtableComponent', () => {
  let component: OkrtableComponent;
  let fixture: ComponentFixture<OkrtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkrtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkrtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
