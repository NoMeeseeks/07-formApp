import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent implements OnInit {

  public nuevoJuegoFavorito: FormControl = new FormControl('', [Validators.required])

  public miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    //para crear un arreglo de strings o de cualquier objeto
    juegosFavoritos: this.formBuilder.array([
      ['Metal Gear', [Validators.required]],
      ['Cod Mobile', [Validators.required]],
      ['Minecraft', [Validators.required]],
    ])

  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors && formArray.controls[index].touched
  }

  isValidField(field: string): boolean | null {
    return this.miFormulario.controls[field].errors
      && this.miFormulario.controls[field].touched;
  }

  agregarJuegoFavorito() {
    if (this.nuevoJuegoFavorito.invalid) { return };


    this.listaJuegosFavoritos.push(
      this.formBuilder.control(this.nuevoJuegoFavorito.value, Validators.required)
    );

    this.nuevoJuegoFavorito.reset();
  }

  eliminarJuegoFavorito(index: number) {
    this.listaJuegosFavoritos.removeAt(index);
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

  onSubmit(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched;
      return;
    }

    (this.miFormulario.controls['juegosFavoritos'] as FormArray) = this.formBuilder.array([]);
    this.miFormulario.reset();
  }
  get listaJuegosFavoritos() {
    return this.miFormulario.get('juegosFavoritos') as FormArray;
  }
}
