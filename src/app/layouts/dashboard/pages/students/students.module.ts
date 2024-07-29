import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import {MatTableModule} from '@angular/material/table';
import { FormularioComponent } from './componentes/formulario/formulario.component';
//inputs
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
//Select
import {MatSelectModule} from '@angular/material/select';
//Buttons
import {MatButtonModule} from '@angular/material/button';
//Formulario
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../../../core/services/users.service';
import { UsersMockService } from '../../../../core/services/users-mock.service';




@NgModule({
  declarations: [StudentsComponent, FormularioComponent],
  imports: [CommonModule,MatTableModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,ReactiveFormsModule],
  exports: [StudentsComponent],
  providers:[
    {
      provide: UsersService,
      useClass: UsersMockService
    }
  ]
})
export class StudentsModule { }
