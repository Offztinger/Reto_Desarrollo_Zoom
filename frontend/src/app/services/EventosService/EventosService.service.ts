import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  private APIZoom = 'http://localhost:8080/eventos/';

  constructor(private httpClient: HttpClient) {}

  public saveEvento(eventosModel: any): Observable<any> {
    return this.httpClient.post(this.APIZoom, eventosModel);
  }

  public getAllEventos(): Observable<any> {
    return this.httpClient.get(this.APIZoom);
  }
}
