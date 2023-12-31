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
import { BarraNavTopComponent } from './components/barra-nav-top/barra-nav-top.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Routes , RouterModule } from '@angular/router';
import { ActualiaComponentComponent } from './components/actualia-component/actualia-component.component';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { ErrorPersonalizadoComponent } from './pages/error-personalizado/error-personalizado.component';
import { DataServices } from './services/data.sevice';
import { HttpClientModule } from '@angular/common/http';
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'quienes somos', component:QuienesSomosComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'actualizar/:nombre', component:ActualiaComponentComponent},
  {path:'**' , component:ErrorPersonalizadoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    BarraNavTopComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    ContactoComponent,
    ActualiaComponentComponent,
    DialogConfirmComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, MatTableModule , MatButtonModule,
    MatIconModule , MatCardModule , MatInputModule , MatFormFieldModule,
    MatSnackBarModule , MatMenuModule , MatSelectModule , 
    MatDialogModule, HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService,
    EmpleadosService,
    DataServices,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
