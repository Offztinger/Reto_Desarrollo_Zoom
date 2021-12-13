import {Component} from "@angular/core";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})


export class FormularioComponent {



  constructor() {
    console.log("Componente formulario ha sido cargado")
  }

}
