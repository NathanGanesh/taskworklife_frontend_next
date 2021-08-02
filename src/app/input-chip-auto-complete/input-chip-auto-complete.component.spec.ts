import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChipAutoCompleteComponent } from './input-chip-auto-complete.component';

describe('InputChipAutoCompleteComponent', () => {
  let component: InputChipAutoCompleteComponent;
  let fixture: ComponentFixture<InputChipAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputChipAutoCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputChipAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
