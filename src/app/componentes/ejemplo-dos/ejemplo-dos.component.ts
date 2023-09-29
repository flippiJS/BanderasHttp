import { Component, OnDestroy, OnInit } from '@angular/core';
import { EjemploService } from 'src/app/servicios/ejemplo.service';

@Component({
  selector: 'app-ejemplo-dos',
  templateUrl: './ejemplo-dos.component.html',
  styleUrls: ['./ejemplo-dos.component.css']
})
export class EjemploDosComponent implements OnInit, OnDestroy {

  constructor(public ejemploService: EjemploService) { }

  ngOnInit(): void {
    console.log('EjemploDosComponent ngOnInit');
    this.ejemploService.sumar();
  }

  ngOnDestroy(): void {
    console.log('EjemploDosComponent ngOnDestroy');
  }

}
