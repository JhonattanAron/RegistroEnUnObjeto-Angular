import { Component } from '@angular/core';
import { Empleado } from 'src/models/empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected titulo = 'Listado de Empleados';
  protected empleados:Empleado[] = [
    new Empleado("Aron" , "Cachago" , "Programador", 2500),
    new Empleado("Ana" , "Fernandez" , "Directora", 2500),
    new Empleado("Maria" , "Cuti" , "Talentos Humanos", 1000),
    new Empleado("Laura" , "Lopez" , "Administrativo", 800)
  ];
}
