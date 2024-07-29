import { Component } from '@angular/core';
import { alumnos } from './models/students';
import { UsersService } from '../../../../core/services/users.service';




@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  displayedColumns: string[] = ['id', 'name','apellido', 'edad', 'asistencia'];
  dataSource: alumnos[] = [
    {
      id: 1,
      nombre: "Mora",
      apellido:"Companys",
      edad: 25,
      asistencia: true,
    },
    {
      id: 2,
      nombre: "Emanuel",
      apellido:"Ginobilli",
      edad: 46,
      asistencia: false,
    },
    {
      id: 3,
      nombre: "Lebron",
      apellido:"James",
      edad: 39,
      asistencia: true,
    }
  ];

  constructor(private usersService: UsersService){}

  onAlumnosSubmited(ev: alumnos): void{
    this.dataSource = [...this.dataSource, ev]
  }

}
