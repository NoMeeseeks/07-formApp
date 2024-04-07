import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {

  // public miFormulario: FormGroup = new FormGroup({
  ///primer valor defecto, seguido validaciones sincronas y despues son validaciones asincronas
  ///y si es solo una sincrona se escribe asi nomas pero si son varias tienen que estar dentro de una lista
  //   nombre: new FormControl(''),
  //   precio: new FormControl(0),
  //   enAlmacen: new FormControl(0),
  // })

  public miFormulario: FormGroup = this.formBuilder.group({
    producto: ['', [Validators.required, Validators.minLength(4)]],
    precio: [0, [Validators.required, Validators.min(0)]],// no puede ser vacio ni negativo
    enAlmacen: [0, [Validators.required, Validators.min(0)]],// no puede ser vacio ni negativo
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //con el metodo onInit puedo establecer valores de que traigo de otra pagina
    this.miFormulario.reset({
      precio: 0,
      enAlmacen: 0
    })
  }

  getFieldError(field: string): string | null {
    if (!this.miFormulario.controls[field]) { return null };
    const errores = this.miFormulario.controls[field].errors || {}

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
    return this.miFormulario.controls[field].errors
      && this.miFormulario.controls[field].touched;
  }

  onSave(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return
    };
    console.log(this.miFormulario.value)

    //el reset permite recibir un objeto,porque lo que hace es vaciar el formulario
    this.miFormulario.reset({
      precio: 0,
      enAlmacen: 0
    });
  }
}
