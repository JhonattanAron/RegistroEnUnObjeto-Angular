import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { empleadoCaracteristica } from 'src/models/empleadoCaracteristica.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {

  protected nombreRecibido = "";

  @Input() empleadoDeLista: any;
  @Input() dataSource: any;
  @ViewChild('empleadosTable', { static: true }) table!: MatTable<any>;

  @Output() nuevaCaracteristica = new EventEmitter<object>();

  arrayCaracteristicas: empleadoCaracteristica[] = [
    { nombre: "Aron", caracteristicas: ["Fundador", "Cultivador", "Formador"] },
    { nombre: "Maria", caracteristicas: ["Directora", "Líder", "Estratega"] },
    { nombre: "Laura", caracteristicas: ["Directora", "Líder", "Estratega"] },
  ];

  cargarNombre() {
    let nombres: string[] = this.arrayCaracteristicas.map(data => data.nombre);
    console.log();
    this.verificarName("jose");
    return nombres;
  }
  recibirNombre(nombre: string) {
    this.nombreRecibido = nombre;
  }

  verificarName(nombre: string) {
    const nameInDataSource = this.dataSource.find((empleados: { nombre: string }) => empleados.nombre === nombre);
    const nameInArrayCaracteristicas = this.arrayCaracteristicas.find((caracteristica) => caracteristica.nombre === nombre);
  
    if (nameInDataSource) {
      console.log(`Nombre encontrado en dataSource: ${nameInDataSource.nombre}`);
      return true;
    } else if (!nameInArrayCaracteristicas) {
      const empleado: empleadoCaracteristica = {
        nombre: nombre,
        caracteristicas: [],
      };
      this.arrayCaracteristicas.push(empleado);
      console.log(`Nombre insertado en arrayCaracteristicas: ${nombre}`);
      return false;
    } else {
      console.log(`Nombre ya existe en arrayCaracteristicas: ${nombre}`);
      return false;
    }
  }
  




  agregarCaracteristica(nuevaCaracteristica: empleadoCaracteristica) {
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
