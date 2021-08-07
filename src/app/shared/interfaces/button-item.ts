import {SelectedItem} from "./selected-item";

export class ButtonItem extends SelectedItem{
   iconName : string;


  constructor(value: string, viewValue: string, iconName: string) {
    super(value, viewValue);
    this.iconName = iconName;
  }
}
