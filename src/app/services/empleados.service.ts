import { Injectable } from '@angular/core';
import { Empleado } from 'src/models/empleado.model';
import { EmpleadoCaracteristica } from 'src/models/empleadoCaracteristica.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  public empleados:Empleado[] = [
    new Empleado("Aron" , "Cachago" , "Programador", 2500),
    new Empleado("Maria" , "Cuti" , "Talentos Humanos", 1000),
    new Empleado("Laura" , "Lopez" , "Administrativo", 800),
  ];
  public empleadoCaracteristicas: EmpleadoCaracteristica[] = [
    { nombre: "Aron", caracteristicas: ["Fundador", "Cultivador", "Formador"] },
    { nombre: "Maria", caracteristicas: ["Directora", "Líder", "Estratega"] },
    { nombre: "Laura", caracteristicas: ["Directora", "Líder", "Estratega"] },
  ];


  constructor() { }


  agregarEmpleadoService(empleado:Empleado){
    
    this.empleados.push(empleado);
  }

  obtenerNombres(){
    let nombres:string[] = [];
    this.empleados.map(empleado => nombres.push(empleado.nombre))
    return nombres;
  }
  guardarEnCaracteristicas(empleado:EmpleadoCaracteristica){
    this.empleadoCaracteristicas.push(empleado)
  }
}
