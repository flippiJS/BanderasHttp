import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BanderaComponent } from './bandera/bandera.component';
import { EjemploComponent } from './componentes/ejemplo/ejemplo.component';
import { EjemploDosComponent } from './componentes/ejemplo-dos/ejemplo-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    BanderaComponent,
    EjemploComponent,
    EjemploDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
