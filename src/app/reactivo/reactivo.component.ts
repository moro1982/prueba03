import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './reactivo.component.html',
  styleUrl: './reactivo.component.scss'
})
export class ReactivoComponent {
  colorForm = new FormControl('', Validators.required);

  cambiarColor() {
    this.colorForm.setValue('Verde');
  }

  validarCampo() {
    return this.colorForm.invalid;
  }
  
}
