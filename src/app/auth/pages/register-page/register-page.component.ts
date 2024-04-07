import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import * as CustomValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {
  public formulario = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    apellido: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    correo: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [new EmailValidatorService()]],
    //como se cuando es sincrona es cuando esta con un observable, si no estamos usando nada sincrono
    usuario: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    contrasena: ['', [Validators.required, Validators.minLength(6)]],
    confirmacionContrasena: ['', [Validators.required]],
  }, {
    validators: [
      this.validatorsService.isFieldOneEqualFielTwo('contrasena', 'confirmacionContrasena')
    ]
  })

  constructor(private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService
  ) { }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.formulario, field)
  }

  onSubmit() {
    this.formulario.markAllAsTouched();
    return
  }
}
