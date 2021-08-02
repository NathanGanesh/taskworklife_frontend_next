import {
  Component,
  ElementRef, Input,
  OnInit, Output,
  ViewChild
} from '@angular/core';
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {MatChipInputEvent} from "@angular/material/chips";
import {BookNote} from "../shared/interfaces/book-note";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-chip-auto-complete',
  templateUrl: './input-chip-auto-complete.component.html',
  styleUrls: ['./input-chip-auto-complete.component.css']
})
export class InputChipAutoCompleteComponent  {
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  formControl = new FormControl();

  filteredItems: Observable<string[]>;

  @Input()
  selectedItems: string[] = [];

  @Input()
  allCategories: string[] = [];

  @Input()
  inputName:string = '';

  @Input()
  inputLabel:string = '';

  // @ts-ignore
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredItems = this.formControl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allCategories.slice()));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.selectedItems.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
    this.formControl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.selectedItems.indexOf(fruit);

    if (index >= 0) {
      this.selectedItems.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedItems.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.formControl.setValue(null);

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allCategories.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }


}
