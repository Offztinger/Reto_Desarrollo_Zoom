import {Component} from "@angular/core";

@Component({
  selector: "mi_componente",
  templateUrl: "./mi_componente.component.html",
})


export class MiComponente {

  public mi_variable: string;

  constructor() {
    this.mi_variable = "Hola"
    console.log("Componente mi_componente ha sido cargado")
  }

}
