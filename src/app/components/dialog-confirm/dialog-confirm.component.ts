import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {title: string , pregunta:string},
  ) {}

  cerrarDialogo(confirmacion: boolean): void {
    if (confirmacion) {
      this.dialogRef.close('confirmar'); 
    } else {
      this.dialogRef.close('cancelar'); 
    }
  }




}
