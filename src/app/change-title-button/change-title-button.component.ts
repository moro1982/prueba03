import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector : 'app-change-title-button',
  standalone : true,
  imports : [],
  templateUrl : './change-title-button.component.html',
  styleUrl : './change-title-button.component.scss'
})

export class ChangeTitleButtonComponent {

  @Input() nombre! : string;
  @Output() nombreCambiado = new EventEmitter<string>();

  saludo="Buenos días";

  public cambiar() {
    this.saludo = "Buenas noches";
    this.nombre = "Nico";
    this.nombreCambiado.emit(this.nombre);
  }

}
