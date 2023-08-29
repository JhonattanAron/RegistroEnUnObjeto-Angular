import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { EmpleadoCaracteristica } from 'src/models/empleadoCaracteristica.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {

  protected nombreRecibido = "";
  protected arrayCaracteristicas:EmpleadoCaracteristica[] = [];

  @Input() empleadoDeLista: any;
  @Input() dataSource: any;
  @ViewChild('empleadosTable', { static: true }) table!: MatTable<any>;

  @Output() nuevaCaracteristica = new EventEmitter<object>();

  constructor(private empleadosServie:EmpleadosService){
    this.arrayCaracteristicas = empleadosServie.empleadoCaracteristicas;
  
  }

  

  
  cargarNombre() {
    return this.empleadosServie.obtenerNombres()
  }
  recibirNombre(nombre: string) {
    this.nombreRecibido = nombre;
  }





  agregarCaracteristica(nuevaCaracteristica: EmpleadoCaracteristica) {
    const caracteristicaEncontrada = this.arrayCaracteristicas.find(caracteristica => caracteristica.nombre === nuevaCaracteristica.nombre);
    if (caracteristicaEncontrada) {
      caracteristicaEncontrada.caracteristicas.push(...nuevaCaracteristica.caracteristicas);
    } else {
      console.log("Característica no encontrada");
    }
  }


  public updateTable(): void {
    this.table.renderRows();
  }

  protected mostrarCaracteristicas(nombre: string): string | undefined {
    const empleado = this.arrayCaracteristicas.find(c => c.nombre == nombre);
    if (empleado) {
      const caracteristicas = empleado.caracteristicas.join(" - ")
      return caracteristicas;
    } else {
      return undefined;
    }

  }


}
