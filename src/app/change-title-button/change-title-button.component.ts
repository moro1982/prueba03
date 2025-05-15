import { Component, Input } from '@angular/core';

@Component({
  selector : 'app-change-title-button',
  standalone : true,
  imports : [],
  templateUrl : './change-title-button.component.html',
  styleUrl : './change-title-button.component.scss'
})

export class ChangeTitleButtonComponent {

    titulo="¡¡Buenos días!!";

    public cambiar() {
      this.titulo = "¡¡Buenas noches!!";
    }
}
