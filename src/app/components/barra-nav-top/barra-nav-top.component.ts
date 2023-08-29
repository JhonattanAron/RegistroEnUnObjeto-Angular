import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-nav-top',
  templateUrl: './barra-nav-top.component.html',
  styleUrls: ['./barra-nav-top.component.css']
})
export class BarraNavTopComponent {
  

  @Input() paginas:string[];
}
