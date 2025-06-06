import { JsonPipe } from '@angular/common';
import { Component, computed, effect, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [JsonPipe],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.scss'
})
export class SignalExampleComponent {
  quantity_ = signal<number>(1);

  // Set
  cambiar() {
    this.quantity_.set(4);
  }

  // Update
  incrementar() {
    this.quantity_.update(actual => actual + 1);
  }

  // Señales de sólo lectura
  writableSignal = signal<number>(0);
  readOnlySignal : Signal<number>;
  valorCalculado = computed(() => this.quantity_() % 2 == 0);
  constructor() {
    effect(() => { console.log("Hola " + this.quantity_() )});
    effect(() => { console.log("Chau " + this.valorCalculado() )});
    this.readOnlySignal = this.writableSignal.asReadonly()
  }

  // effect() ---> NO USAR FUERA DEL CONSTRUCTOR
  // (debe usarse en contextos de inyección de dependencias)
  // ngOnInit() {
  //   effect(() => { console.log("Hola " + this.quantity_() )});  // ERROR
  // }

}
