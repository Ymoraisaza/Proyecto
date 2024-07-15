import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrl: './usuarios-form.component.scss'
})
export class UsuariosFormComponent {

  @Output()
  userSubmitted = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: this.fb.control('',
        [ 
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ]),
      lastName: this.fb.control('',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      email: this.fb.control('',
      [
        Validators.required,
        Validators.email,
      ]),
      password: this.fb.control('',
      [
        Validators.required,
        Validators.minLength(8),
      ]),
      role: this.fb.control('', Validators.required),
      assignment: this.fb.control('', Validators.required),

    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      alert("error en el ingreso de datos");
    } else {
      this.userSubmitted.emit(this.form.value);
      this.form.reset();
      alert("datos cargados corectamente");

    }
  }

  
}


