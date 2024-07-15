import { Component } from '@angular/core';
import { usuario } from './models/user';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {

  displayedColumns: string[] = ['id', 'fullName', 'email', 'password', 'role','assignment'];//definimos la columnas de las tablas


  dataSource: usuario[] =[
    {
      id: 1,
      firstName: 'braian', 
      lastName: 'kandyba',
      email: 'braian_1732@hotmail.com',
      password: '1234',
      role: 'user',
      assignment: 'matematicas'
    },
    {
      id: 2,
      firstName: 'ivan',
      lastName: 'gems',
      email: 'ivan@hotmail.com',
      password: '12334',
      role: 'admin',
      assignment: 'lengua'
    }  
  ];

  onUserSubmitted(ev: usuario): void {
    // this.dataSource.push(ev);
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];
  }


}
