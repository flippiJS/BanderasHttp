import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  temporizador: number = 0;

  constructor() { 
    console.log('EjemploService constructor');
  }

  iniciar(inicio: number) {
    this.temporizador = inicio;
  }

  sumar() {
    return this.temporizador++;
  }

  restar() {
    return this.temporizador--;
  }

  obtenerTiempo() {
    return this.temporizador;
  }
}
