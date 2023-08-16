import { Component, EventEmitter, Output } from '@angular/core';
import { empleadoCaracteristica } from 'src/models/empleadoCaracteristica.model';
@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {

  @Output() CaracteristicasEmpleados = new EventEmitter<empleadoCaracteristica>();
  
  public agregarCaracteristica(nuevaCaracteristicaValue: string, nombre: string) {
    const nuevaCaracteristica: empleadoCaracteristica = {
      nombre: nombre,
      caracteristicas: [nuevaCaracteristicaValue] 
    };
    this.CaracteristicasEmpleados.emit(nuevaCaracteristica);
  }
  
  
}
