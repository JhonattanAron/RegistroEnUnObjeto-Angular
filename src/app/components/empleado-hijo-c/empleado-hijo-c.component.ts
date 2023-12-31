import { Component, Input, ViewChild, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ServicioEmpleadosService } from 'src/app/services/servicio-empleados.service';
import { EmpleadoCaracteristica } from 'src/models/empleadoCaracteristica.model';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { Empleado } from 'src/models/empleado.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnChanges   {

  protected nombreRecibido = "";
  protected arrayCaracteristicas:EmpleadoCaracteristica[] = [];

  @Input() empleadoDeLista: any;
  dataSource: Observable<any[]> = of([]);
  private dataSourceSubject = new BehaviorSubject<any>(null);

  @ViewChild('empleadosTable', { static: true }) table!: MatTable<any>;

  @Output() nuevaCaracteristica = new EventEmitter<object>();

  constructor(
    private empleadosServie:EmpleadosService,
    private servicioVentana:ServicioEmpleadosService,
    public dialog:MatDialog
  ){
    this.arrayCaracteristicas = empleadosServie.empleadoCaracteristicas;
    empleadosServie.obtenerEmpleados().then(
      data=>{
        this.dataSource = of(data)
      }
    )
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource']) {
      this.dataSourceSubject.next(changes['dataSource'].currentValue)
    }
  }
  
  /*cargarNombre() {
    return this.empleadosServie.obtenerNombres()
  }*/
  recibirNombre(nombre: string) {
    this.nombreRecibido = nombre;
  }

  agregarCaracteristica(nuevaCaracteristica: EmpleadoCaracteristica) {
    const caracteristicaEncontrada = this.arrayCaracteristicas.find(caracteristica => caracteristica.nombre === nuevaCaracteristica.nombre);
    if (caracteristicaEncontrada) {
      this.servicioVentana.muestraMensaje(`Caracteristica Agregada al empleado: ${nuevaCaracteristica.nombre}`)
      caracteristicaEncontrada.caracteristicas.push(...nuevaCaracteristica.caracteristicas);
    } else {
      console.log("Característica no encontrada");
    }
  }


  public updateTable(): void {
    this.table.renderRows();
  }

  protected mostrarCaracteristicas(nombre: string): string[] | undefined {
    const empleado = this.arrayCaracteristicas.find(c => c.nombre == nombre);
    if (empleado) {
      return empleado.caracteristicas;
    } else {
      return undefined;
    }

  }
  protected eliminarEmpleado(title:string  , pregunta:string , empleadoNombre:string){
    const dialogRef =  this.dialog.open(DialogConfirmComponent , {
      height: '210px',
      width: '610px',
      data: {
        title: title,
        pregunta: pregunta
      }
    })
    dialogRef.afterClosed().subscribe(result =>{
      if (result == 'confirmar') {
        this.empleadosServie.eliminarEmpleado(empleadoNombre)
        this.table.renderRows()
        console.log("Confirmado");
      } else{
        console.log("Cancelado");
      }
    })

    

  }


}
