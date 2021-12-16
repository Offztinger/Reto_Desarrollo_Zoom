import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/EventosService/EventosService.service';

@Component({
  selector: 'evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
})
export class EventoComponent implements OnInit {
  eventoModel: any;

  constructor(public Services: EventosService) {}

  ngOnInit() {
    this.Services.getAllEventos().subscribe(
      (resp) => {
        this.eventoModel = resp;
      },
      (error) => {
        alert('Ha ocurrido un error inesperado');
        console.error(error);
      }
    );
  }
}
