import { Component, OnInit } from '@angular/core';
import {
  faHashtag,
  faVideo,
  faCalendar,
  faUserClock,
} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventosService } from '../../services/EventosService/EventosService.service';
import { url, header } from '../constants/constants';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  //Variables para logotipos
  faVideo = faVideo;
  faHashtag = faHashtag;
  faCalendar = faCalendar;
  faUserClock = faUserClock;
  //Diseño de formulario
  // @ts-ignore
  datosFormulario: FormGroup;
  eventoModel: any;

  //Definicion de header

  constructor(public Formulario: FormBuilder, public Services: EventosService) {
    fetch(url, header)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data recogida');
        console.log(data.data);
        return data.data;
      })
      .catch((err) => {
        console.warn('Ha ocurrido un error desconocido');
        console.error(err);
      });
  }

  ngOnInit(): void {
    /*
        const ctrl = new FormControl('initial')

        const form = new FormGroup({
          id_evento: new FormControl('', Validators.required),
          nombre_evento: new FormControl('', Validators.required),
          fecha_evento: new FormControl('', Validators.required),
        })
    */
    this.datosFormulario = this.Formulario.group({
      id_evento: ['', Validators.required],
      nombre_evento: ['', Validators.required],
      fecha_evento: ['', Validators.required],
    });
  }

  saveFormulario(): void {
    this.Services.saveEvento(this.datosFormulario.value).subscribe(
      (resp) => {
        alert('Se ha mandado la data correctamente');
        this.datosFormulario.reset();
        this.eventoModel.push(resp);
      },
      (error) => {
        alert('Error');
        console.error(error);
      }
    );
  }
}
