import { Component, EventEmitter, Input, Output } from '@angular/core';
import { empleadoCaracteristica } from 'src/models/empleadoCaracteristica.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {


  constructor(
    private miServicio:ServicioEmpleadosService
  ){

  }

  @Output() CaracteristicasEmpleados = new EventEmitter<empleadoCaracteristica>();
  @Input() nombres:string[];
  @Output() nombreEnviado = new EventEmitter<string>();

  enviarNombre(nombre: string) {
    this.nombreEnviado.emit(nombre);
  }
  
  public agregarCaracteristica(nuevaCaracteristicaValue: string, nombre: string) {
    this.miServicio.muestraMensaje(`Caracteristica Agregada: ${nuevaCaracteristicaValue}`)
    const nuevaCaracteristica: empleadoCaracteristica = {
      nombre: nombre,
      caracteristicas: [nuevaCaracteristicaValue] 
    };
    //console.log(nuevaCaracteristica);
    
    this.CaracteristicasEmpleados.emit(nuevaCaracteristica);
  }
  
  
}
