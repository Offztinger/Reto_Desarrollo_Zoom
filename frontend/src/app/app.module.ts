import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//Componentes
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component'; //Tras diseñar el componente, debemos importarlo
import { ListadoComponent } from './components/listado/listado.component';
import { EventoComponent } from './components/listado/evento/evento.component';
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoComponent,
    EventoComponent,
    // Declararlo de forma global
  ],
  imports: [
    // Modulos de la aplicación
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [], // Servicios
  bootstrap: [AppComponent], //Landing page
})
export class AppModule {}
