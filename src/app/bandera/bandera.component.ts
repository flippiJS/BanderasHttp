import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BanderasService } from '../banderas.service';

@Component({
  selector: 'app-bandera',
  templateUrl: './bandera.component.html',
  styleUrls: ['./bandera.component.css']
})
export class BanderaComponent implements OnInit, OnDestroy {

  misBanderas: any[] | undefined;
  misPaises: Observable<any> | undefined;
  bandera: string = "";
  subsripcionTodos: any;

  constructor(private banderaService: BanderasService) { }

  ngOnInit(): void {
   this.subsripcionTodos = this.banderaService.todos()
      .subscribe(banderas => {
        console.info(banderas);
        this.misBanderas = banderas;
      });

    this.misPaises = this.banderaService.todos();
  }

  buscarPais(nombre: string) {
    this.banderaService.pais(nombre).subscribe(t =>
      this.bandera = t[0].flags.png
    )
  }

  ngOnDestroy(): void {
    this.subsripcionTodos.unsubscribe();
  }

}
