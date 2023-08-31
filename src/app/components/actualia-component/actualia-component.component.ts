import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ServicioEmpleadosService } from 'src/app/services/servicio-empleados.service';
import { Empleado } from 'src/models/empleado.model';
import { EmpleadoCaracteristica } from 'src/models/empleadoCaracteristica.model';

@Component({
  selector: 'app-actualia-component',
  templateUrl: './actualia-component.component.html',
  styleUrls: ['./actualia-component.component.css']
})
export class ActualiaComponentComponent implements OnInit {

  protected titulo = 'Listado de Empleados';
  protected cuadroNombre: string = "";
  protected cuadroApellido: string = "";
  protected cuadroCargo: string = "";
  protected cuadroSalario: number = 0;
  protected empleados: Empleado[] = [];
  protected empleadoRecibido: Empleado | undefined;

  protected columnas: string[] = ['nombre',
    'apellido', 'cargo',
    'salario', 'caracteristicas']

  constructor(
    private miServicio: ServicioEmpleadosService,
    private router: Router,
    private dataCenter: EmpleadosService,
    private route: ActivatedRoute
  ) {
    this.empleados = dataCenter.empleados

  }
  ngOnInit(): void {

    const nombre = this.route.snapshot.params['nombre']
    console.log(nombre);
    this.empleadoRecibido = this.dataCenter.buscarPorNombre(nombre);
    this.setCuadros();


  }


  setCuadros(): void {
    this.cuadroNombre = this.empleadoRecibido?.nombre ?? "Sin Definir";
    this.cuadroApellido = this.empleadoRecibido?.apellido ?? "Sin Definir";
    this.cuadroCargo = this.empleadoRecibido?.cargo ?? "Sin Definir";
    this.cuadroSalario = this.empleadoRecibido?.salario ?? 0;
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
      this.dataCenter.actualizarEmpleado(miEmpleado)
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
