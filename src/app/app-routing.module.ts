import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploComponent } from './componentes/ejemplo/ejemplo.component';
import { EjemploDosComponent } from './componentes/ejemplo-dos/ejemplo-dos.component';
import { BanderaComponent } from './bandera/bandera.component';

const routes: Routes = [
  { path: 'ejemplo', component: EjemploComponent },
  { path: 'ejemplo2', component: EjemploDosComponent },
  { path: 'banderas', component: BanderaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
