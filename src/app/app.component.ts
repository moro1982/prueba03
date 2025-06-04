import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ChangeTitleButtonComponent } from './change-title-button/change-title-button.component';
import { DireccionComponent } from './direccion/direccion.component';
import { FormsModule } from '@angular/forms';
import { PlantillaComponent } from "./plantilla/plantilla.component";
import { ReactivoComponent } from "./reactivo/reactivo.component";

@Component({
  selector: 'app-root',
  // selector: '.app-test',
  // selector: '[app-test]',
  standalone:true,
  imports: [ChangeTitleButtonComponent, DireccionComponent, PlantillaComponent, ReactivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  nombre = "Moro"; // Si no se le indica, por defecto su acceso es "public"

  // hero : { "nombreHeroe" : string, "poder" : string } = { nombreHeroe:"Superman", poder:"Volar" }

  public cambiarNombre() {
    this.nombre = "Lordix";
  }

  public manejarCambio(newName : string) {
    this.nombre = newName;
  }
  
}
