import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ChangeTitleButtonComponent } from './change-title-button/change-title-button.component';

@Component({
  selector: 'app-root',
  // selector: '.app-test',
  // selector: '[app-test]',
  standalone:true,
  imports: [ChangeTitleButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  name = 'Moro'; // Si no se le indica, por defecto su acceso es "public"

  public cambiarNombre() {
    this.name = "Lordix";
  }
}
