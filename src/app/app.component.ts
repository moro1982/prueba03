import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { ChangeTitleButtonComponent } from './change-title-button/change-title-button.component';
// import { DireccionComponent } from './direccion/direccion.component';
// import { PlantillaComponent } from "./plantilla/plantilla.component";
// import { ReactivoComponent } from "./reactivo/reactivo.component";
// import { SignalExampleComponent } from './signal-example/signal-example.component';
import { PoliticosComponent } from "./politicos/politicos.component";
import { TableroComponent } from "./tablero/tablero.component";
import { ControlesComponent } from "./controles/controles.component";

@Component({
  selector: 'app-root',
  // selector: '.app-test',
  // selector: '[app-test]',
  standalone:true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // ChangeTitleButtonComponent,
    // DireccionComponent,
    // PlantillaComponent,
    // ReactivoComponent,
    // SignalExampleComponent, 
    PoliticosComponent,
    TableroComponent,
    ControlesComponent
],
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
