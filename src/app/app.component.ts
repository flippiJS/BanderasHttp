import { Component, OnInit } from '@angular/core';
import { EjemploService } from './servicios/ejemplo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firebase';
  items = [];
  /**
   *
   */
  constructor(public ejemploService: EjemploService) { }

  ngOnInit() {
    this.ejemploService.iniciar(0);

    this.ejemploService.sumar();
  }
}
