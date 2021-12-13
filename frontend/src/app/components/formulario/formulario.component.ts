import {Component} from "@angular/core";
import {faHashtag, faVideo, faCalendar, faUserClock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})


export class FormularioComponent {
  faVideo = faVideo;
  faHashtag = faHashtag;
  faCalendar = faCalendar;
  faUserClock = faUserClock;

  constructor() {
    console.log("Componente formulario ha sido cargado")
  }

}
