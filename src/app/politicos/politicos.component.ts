import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Politico } from '../models/Politico';
import { PoliticosService } from '../services/politicos.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-politicos',
  standalone: true,
  imports: [ 
             CommonModule,
             FormsModule,
             ReactiveFormsModule
           ],
  templateUrl: './politicos.component.html',
  styleUrl: './politicos.component.scss'
})
export class PoliticosComponent {
  
  politicos : Politico[] = [];
  datosPolitico: FormGroup = new FormGroup({
    // id: new FormControl<number | null>(null),
    name: new FormControl<string>('', [Validators.required]),
    alias: new FormControl<string>('', [Validators.required]),
    age: new FormControl<number>(0, [Validators.required])
  });

  constructor(private politicoService : PoliticosService) {}

  getPoliticos() {
    this.politicoService.getPoliticos().subscribe( data => {
      this.politicos = data;
    });
  }

  crearPolitico() : void {
    console.log(this.datosPolitico);
    const nuevoPolitico : Politico = this.datosPolitico.getRawValue();
    console.log(nuevoPolitico); // Debug
    this.politicoService.crearPolitico(nuevoPolitico).subscribe({
      next : res => console.log("Guardado con éxito: ", res),
      error : err => console.log("Error al guardar: ", err)
    });
  }

}
