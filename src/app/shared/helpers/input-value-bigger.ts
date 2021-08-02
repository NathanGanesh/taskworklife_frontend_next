import {FormGroup} from "@angular/forms";

export function InputOneBiggerThenTwo(controlName: string, matchingControlName: string){
  return (formGroup:FormGroup) =>{
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (control.errors || matchingControl.errors) {
      return;
    }



  }
}
