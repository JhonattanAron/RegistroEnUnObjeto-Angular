import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {EmpleadoHijoCComponent } from './components/empleado-hijo-c/empleado-hijo-c.component';
import {CaracteristicasEmpleadoCComponent } from './components/caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { ServicioEmpleadosService } from './services/servicio-empleados.service';
import { EmpleadosService } from './services/empleados.service';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, MatTableModule , MatButtonModule,
    MatIconModule , MatCardModule , MatInputModule , MatFormFieldModule,
    MatSnackBarModule , MatMenuModule , MatSelectModule
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
