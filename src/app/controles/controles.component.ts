import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ministry } from '../models/ministry';
import { Politico } from '../models/politico';
import { MinistryService } from '../services/ministry.service';
import { PoliticoService } from '../services/politico.service';

@Component({
  selector: 'app-controles',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './controles.component.html',
  styleUrl: './controles.component.scss'
})
export class ControlesComponent {
  ministerios : Ministry[] = [];
  politicos : Politico[] = [];

  constructor(
    private ministryService : MinistryService,
    private politicoService : PoliticoService
  ){}

  
}
