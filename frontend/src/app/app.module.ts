import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppComponent} from './app.component'; //Tras diseñar el componente, debemos importarlo
import {FormularioComponent} from "./components/formulario/formulario.component";
import {ListadoComponent} from './components/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent, // Declararlo de forma global
    FormularioComponent, ListadoComponent
  ],
  imports: [
    BrowserModule, // Modulos de la aplicación
    FontAwesomeModule
  ],
  providers: [], // Servicios
  bootstrap: [AppComponent] //Landing page
})


export class AppModule {
}
