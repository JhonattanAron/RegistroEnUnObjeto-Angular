import { Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {

  @Input() empleadoDeLista:any;
  @Input() dataSource:any;
  @ViewChild('empleadosTable', { static: true }) table!: MatTable<any>;


  public updateTable():void{
    this.table.renderRows()
  }
}
