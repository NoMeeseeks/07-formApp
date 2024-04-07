import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {
  public formulario = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    correo: ['', [Validators.required]],
    usuario: ['', [Validators.required]],
    contrasena: ['', [Validators.required, Validators.minLength(6)]],
    confirmacionContrasena: ['', [Validators.required]],
  })

  constructor(private formBuilder: FormBuilder) { }

  isValidField(field: string) {

  }

  onSubmit() {
    this.formulario.markAllAsTouched();
    return
  }
}
