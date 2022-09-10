import { AbstractControl } from '@angular/forms';

export interface IKeyValue {
  [key: string]: any;
}

export interface FormControls {
  [key: string]: AbstractControl;
}
