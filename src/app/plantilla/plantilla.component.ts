import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

class Persona {
  nombre = '';
  apellido = '';
}

@Component({
  selector: 'app-plantilla',
  imports: [FormsModule],
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.scss'
})
export class PlantillaComponent {
  color = '';
  
  datosPersonales = new Persona;

  public cambiarColor() {
    this.color = 'Verde';
  }
}
