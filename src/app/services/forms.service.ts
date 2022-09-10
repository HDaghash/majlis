import { Injectable } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { FormControls, IKeyValue } from './types';

@Injectable()
export class FormService {
  constructor() {}

  bindData(controls: FormControls, data: any, fields?: string[]): void {
    if (!fields) {
      fields = Object.keys(controls);
    }

    fields.forEach(field => {
      const value = data[field];
      const control = controls[field];
      if (value !== null && typeof value !== 'undefined' && control instanceof FormControl) {
        controls[field].setValue(value);
      } else if (control instanceof FormGroup) {
        this.bindData(control.controls, value);
      }
    });
  }

  submitData(controls: FormControls | { [key: string]: AbstractControl }, fields?: string[]): any {
    const data = {};
    if (!fields) {
      fields = Object.keys(controls);
    }
    fields.forEach((field: keyof IKeyValue) => {
      const control = controls[field];
      const { value } = control;
      if (typeof value !== 'undefined' && value !== null && value !== '' && control instanceof FormControl) {
        (data as IKeyValue)[field] = value;
      }
    });

    return data;
  }

  updateFormValidity(controls: FormControls) {
    Object.keys(controls).forEach(name => {
      const control = (controls as IKeyValue)[name];
      control.markAsDirty();
      control.updateValueAndValidity();
    });
  }
}
