import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../Models/Evento';
import { take } from 'rxjs/operators';

@Injectable()
export class EventoService {
baseURL = 'https://localhost:5001/api/eventos'

constructor(private http: HttpClient) { }

      public getEventos(): Observable<Evento[]> {
        return this.http.get<Evento[]>(this.baseURL).pipe(take(1));
      }

      public getEventosByTema(tema: string): Observable<Evento[]> {
        return this.http
        .get<Evento[]>(`${this.baseURL}/${tema}/tema`)
        .pipe(take(1));
      }

      public getEventoById(id: number): Observable<Evento> {
        return this.http
        .get<Evento>(`${this.baseURL}/${id}`)
        .pipe(take(1));
      }
}
