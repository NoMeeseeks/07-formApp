import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log({ email })
  //   return of({
  //     emailTaken: true
  //   })
  // }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    //creando un observable
    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {

      console.log({ email })
      if (email === 'Xavier@gmail.com') {
        subscriber.next({
          emailTaken: true
        });
        subscriber.complete();
      }
      subscriber.next(null)
      subscriber.complete();

    }).pipe(
      delay(300)
    )
    return httpCallObservable;
  }
}

