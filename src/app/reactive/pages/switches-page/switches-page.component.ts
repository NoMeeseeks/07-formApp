import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {

  public formulario: FormGroup = this.formBuilder.group({
    genero: ['M', [Validators.required]],
    quiereNotificaciones: [true, [Validators.required]],
    terminosYcondiciones: [false, [Validators.requiredTrue]]
  });

  constructor(private formBuilder: FormBuilder) { }

  getFieldError(field: string): string | null {
    if (!this.formulario.controls[field]) { return null };
    const errores = this.formulario.controls[field].errors || {}

    for (const key of Object.keys(errores)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo ${errores['minlength'].requiredLength} caracteres.`;
      }
    }
    return null
  }

  isValidField(field: string): boolean | null {
    return this.formulario.controls[field].errors
      && this.formulario.controls[field].touched;
  }

  guardar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return
    }

    this.formulario.reset();
  }
}
