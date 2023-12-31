import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoHijoCComponent } from 'src/app/components/empleado-hijo-c/empleado-hijo-c.component';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ServicioEmpleadosService } from 'src/app/services/servicio-empleados.service';
import { Empleado } from 'src/models/empleado.model';
import { EmpleadoCaracteristica } from 'src/models/empleadoCaracteristica.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  protected titulo = 'Listado de Empleados';
  protected cuadroNombre: string = "";
  protected cuadroApellido: string = "";
  protected cuadroCargo: string = "";
  protected cuadroSalario: number = 0;
  protected empleados: Empleado[] = [];

  protected columnas: string[] = ['nombre',
    'apellido', 'cargo',
    'salario', 'caracteristicas']

  constructor(
    private miServicio: ServicioEmpleadosService,
    private router: Router,
    private dataCenter: EmpleadosService
  ) {
    this.empleados = dataCenter.empleados
  }


  protected agregarEmpleado() {

    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );

    if (
      this.cuadroNombre == ""
      || this.cuadroApellido == ''
      || this.cuadroCargo == ''
      ) {
      this.miServicio.muestraMensaje("LLena Todos Los Campos Por Favor")
    } else {
      let empleadoCaracteristica = new EmpleadoCaracteristica(
        this.cuadroNombre, [])
      this.dataCenter.guardarEnCaracteristicas(empleadoCaracteristica)
      this.dataCenter.agregarEmpleadoService(miEmpleado)
      this.limpiarCuadros()
      this.router.navigate([''])
    }




  }
  protected limpiarCuadros() {
    this.cuadroNombre = "";
    this.cuadroApellido = "";
    this.cuadroCargo = "";
    this.cuadroSalario = 0;
  }




  protected volverHome() {
    this.router.navigate(['']);
  }
}
