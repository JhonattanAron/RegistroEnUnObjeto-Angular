import { Component , ViewChild } from '@angular/core';
import { Empleado } from 'src/models/empleado.model';
import { MatTable } from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected titulo = 'Listado de Empleados';
  protected empleados:Empleado[] = [
    new Empleado("Aron" , "Cachago" , "Programador", 2500),
    new Empleado("Ana" , "Fernandez" , "Directora", 2500),
    new Empleado("Maria" , "Cuti" , "Talentos Humanos", 1000),
    new Empleado("Laura" , "Lopez" , "Administrativo", 800)
  ];
  protected cuadroNombre:string = "";
  protected cuadroApellido:string = "";
  protected cuadroCargo:string = "";
  protected cuadroSalario:number = 0;
  @ViewChild('empleadosTable', { static: true }) table!: MatTable<any>;

  constructor(private _snackBar:MatSnackBar){}


  protected agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre , this.cuadroApellido , this.cuadroCargo , this.cuadroSalario);
    this.empleados.push(miEmpleado);
    this.table.renderRows();
    this.limpiarCuadros()
    this._snackBar.open("Empleado Agregado Con Exito" , "Close")
  }
  protected limpiarCuadros(){
      this.cuadroNombre = "";
      this.cuadroApellido = "";
      this.cuadroCargo = "";
      this.cuadroSalario = 0;
  }
}
