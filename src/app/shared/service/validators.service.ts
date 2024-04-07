import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  cantBeStrider = (control: FormControl): ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase();
    if (value === 'strider') {
      return {
        noStrider: true,
      }
    }
    return null;
  }


  isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors && form.controls[field].touched;
  }


  isFieldOneEqualFielTwo(field: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValueUno = formGroup.get(field)?.value;
      const fieldValueDos = formGroup.get(field2)?.value;

      if (fieldValueUno !== fieldValueDos) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return {
          notEqual: true
        };
      };

      formGroup.get(field2)?.setErrors(null);

      return null;
    }
  }
}
