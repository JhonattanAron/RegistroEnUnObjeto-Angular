import { Injectable } from '@angular/core';
import { Empleado } from 'src/models/empleado.model';
import { EmpleadoCaracteristica } from 'src/models/empleadoCaracteristica.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataServices } from './data.sevice';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  public empleados: Empleado[];
  /*public empleados:Empleado[] = [
    new Empleado("Aron" , "Cachago" , "Programador", 2500),
    new Empleado("Maria" , "Cuti" , "Talentos Humanos", 1000),
    new Empleado("Laura" , "Lopez" , "Administrativo", 800),
  ];*/
  public empleadoCaracteristicas: EmpleadoCaracteristica[] = [
    { nombre: "Aron", caracteristicas: ["Fundador", "Cultivador", "Formador"] },
    { nombre: "Maria", caracteristicas: ["Directora", "Líder", "Estratega"] },
    { nombre: "Laura", caracteristicas: ["Creativa", "Jugadora", "Inteligente"] },
  ];
  constructor(
    private servicioVentana: ServicioEmpleadosService,
    private dataService: DataServices,
  ) { }

  setEmpleados(misEmpleados: Empleado[]) {
    this.empleados = misEmpleados
  }

  obtenerEmpleados(){
    return this.dataService.cargarEmpleados()
  }

  agregarEmpleadoService(empleado: Empleado) {
    this.servicioVentana.muestraMensaje(`Empleado agregado: 
    \n ${empleado.nombre} 
    \n Salario: ${empleado.salario}`)
    this.dataService.guardarEmpleado(empleado)

  }



  /*obtenerNombres(): string[] | undefined{
    let nombres:string[] = [];
    this.empleados.map(empleado => nombres.push(empleado.nombre))
    return nombres;
  }*/
  guardarEnCaracteristicas(empleado: EmpleadoCaracteristica) {
    this.empleadoCaracteristicas.push(empleado)
  }
  buscarPorNombre(name: string): Empleado | undefined {
    return this.empleados.find(empleado => empleado.nombre == name);
  }
  actualizarEmpleado(empleado: Empleado) {
    const index = this.empleados.findIndex(data => data.nombre == empleado.nombre)
    if (index != -1) {
      console.log(index);
      this.empleados[index] = empleado;
    } else {
      console.log("El empleado no se Econtro");

    }
  }
  eliminarEmpleado(nombre: string) {
    const index = this.empleados.findIndex(data => data.nombre == nombre)
    if (index != -1) {
      console.log(index);
      this.empleados.splice(index, 1)
    } else[
      console.log("El empleado no se Econtro")
    ]
  }
}
