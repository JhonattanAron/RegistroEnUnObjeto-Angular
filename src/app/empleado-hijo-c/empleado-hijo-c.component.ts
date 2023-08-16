import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { empleadoCaracteristica } from 'src/models/empleadoCaracteristica.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {

  @Input() empleadoDeLista: any;
  @Input() dataSource: any;
  @ViewChild('empleadosTable', { static: true }) table!: MatTable<any>;

  @Output() nuevaCaracteristica = new EventEmitter<object>();

  arrayCaracteristicas: empleadoCaracteristica[] = [
    { nombre: "Aron", caracteristicas: ["Fundador", "Cultivador", "Formador"] },
    { nombre: "Maria", caracteristicas: ["Directora", "Líder", "Estratega"] }
    // ... otros objetos
  ];

  agregarCaracteristica(nuevaCaracteristica: empleadoCaracteristica) {
    const caracteristicaEncontrada = this.arrayCaracteristicas.find(caracteristica => caracteristica.nombre === nuevaCaracteristica.nombre);
  
    if (caracteristicaEncontrada) {
      caracteristicaEncontrada.caracteristicas.push(...nuevaCaracteristica.caracteristicas);
      console.log(caracteristicaEncontrada);
      
    } else {
      console.log("Característica no encontrada");
    }
  }
  
  

  public updateTable(): void {
    this.table.renderRows();
  }
}
