import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-direccion',
  standalone : true,
  imports: [],
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.scss'
})
export class DireccionComponent {

  @Input() nombre! : string;

  direccion : string = "Av. Siempreviva 742";

  public cambiarDireccion() {
    this.direccion = "Gutierrez 254";
  }

}
