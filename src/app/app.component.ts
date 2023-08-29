import { Component , ViewChild } from '@angular/core';
import { Empleado } from 'src/models/empleado.model';
import { EmpleadoCaracteristica } from 'src/models/empleadoCaracteristica.model';
import { EmpleadoHijoCComponent } from './components/empleado-hijo-c/empleado-hijo-c.component';
import { ServicioEmpleadosService } from './services/servicio-empleados.service';
import { EmpleadosService } from './services/empleados.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected titulo = 'Listado de Empleados';
  protected cuadroNombre:string = "";
  protected cuadroApellido:string = "";
  protected cuadroCargo:string = "";
  protected cuadroSalario:number = 0;
  protected empleados:Empleado[]=[];
  



  protected columnas:string[] = ['nombre' ,
   'apellido' , 'cargo' , 
   'salario', 'caracteristicas']

  @ViewChild(EmpleadoHijoCComponent , 
    {static: false}) empleadosTableComponent:EmpleadoHijoCComponent;

  constructor(
    private miServicio:ServicioEmpleadosService,
    private dataCenter:EmpleadosService
    ){
      this.empleados = dataCenter.empleados
    }


  protected agregarEmpleado(){

    let miEmpleado = new Empleado(
      this.cuadroNombre , 
      this.cuadroApellido , 
      this.cuadroCargo , 
      this.cuadroSalario);

      if (this.cuadroNombre == "" 
      || this.cuadroApellido == '' 
      || this.cuadroCargo == '') {
        this.miServicio.muestraMensaje("LLena Todos Los Campos Por Favor")
      }else{
        let empleadoCaracteristica = new EmpleadoCaracteristica(
          this.cuadroNombre , [])
        this.dataCenter.guardarEnCaracteristicas(empleadoCaracteristica)
        this.dataCenter.agregarEmpleadoService(miEmpleado)
        //this.miServicio.muestraMensaje(`Nombre del Empleado Agregado: ${miEmpleado.nombre}`)
        this.empleadosTableComponent.updateTable();
        this.limpiarCuadros()
      }
  
    
    
  }
  protected limpiarCuadros(){
      this.cuadroNombre = "";
      this.cuadroApellido = "";
      this.cuadroCargo = "";
      this.cuadroSalario = 0;
  }
}
