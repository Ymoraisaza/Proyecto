import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  datosAlumnosForm: FormGroup;

  @Output()
  alumnosSubmited = new EventEmitter();

  constructor(private fb: FormBuilder){
    this.datosAlumnosForm = this.fb.group({
      nombre: this.fb.control("",Validators.required),
      apellido: this.fb.control("",Validators.required),
      edad: this.fb.control("",Validators.required),
      asistencia: this.fb.control("",Validators.required),
    })
  }

  onSubmit(): void{
    if(this.datosAlumnosForm.invalid) {
      this.datosAlumnosForm.markAllAsTouched();
    } else{
      this.alumnosSubmited.emit(this.datosAlumnosForm.value)
      this.datosAlumnosForm.reset();
    }
    
  }
}
