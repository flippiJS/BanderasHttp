import { Component, OnDestroy, OnInit } from '@angular/core';
import { EjemploService } from 'src/app/servicios/ejemplo.service';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit, OnDestroy {

  constructor(public ejemploService: EjemploService) { }

  ngOnInit(): void {
    console.log('EjemploComponent ngOnInit');
    this.ejemploService.sumar(); 
  }

  ngOnDestroy(): void {
    console.log('EjemploComponent ngOnDestroy');
  }

}
