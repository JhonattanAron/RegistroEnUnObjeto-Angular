import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor(
    private ventana:MatSnackBar,
    ) { }

  muestraMensaje(mensaje:string){
    this.ventana.open(mensaje, "close")
  }
  
}
