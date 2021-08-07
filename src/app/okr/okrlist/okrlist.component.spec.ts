import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkrlistComponent } from './okrlist.component';

describe('OkrlistComponent', () => {
  let component: OkrlistComponent;
  let fixture: ComponentFixture<OkrlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkrlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkrlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
