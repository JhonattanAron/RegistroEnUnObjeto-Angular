import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "src/models/empleado.model";

@Injectable()
export class DataServices {
    constructor(
        private httpClient: HttpClient
    ) { }

    async cargarEmpleados(){
      let peticion = await fetch("https://mis-clientes-fa7ac-default-rtdb.firebaseio.com/datos.json");
      let resultado = await peticion.json()
      return resultado
    }

    guardarEmpleado(empleados: Empleado) {
        this.httpClient.put("https://mis-clientes-fa7ac-default-rtdb.firebaseio.com/datos.json", empleados).subscribe(
            response => console.log(response),
            error => console.log("Error: " + error)
        )
    }


}