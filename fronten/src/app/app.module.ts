import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component'; //Tras diseñar el componente, debemos importarlo
import {MiComponente} from "./components/mi_componente/mi_componente.component";
import {NavbarComponent} from './components/navbar/navbar.component';
import {ResultsComponent} from "./components/results/results.component";


@NgModule({
  declarations: [
    AppComponent, // Declararlo de forma global
    MiComponente,
    NavbarComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule // Modulos de la aplicación
  ],
  providers: [], // Servicios
  bootstrap: [AppComponent] //Landing page
})


export class AppModule {
}
