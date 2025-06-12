import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Politico } from '../models/Politico';

@Injectable({
  providedIn: 'root'
})
export class PoliticosService {
  private apiUrl = 'http://localhost:8080/politico';

  constructor(private http: HttpClient) {}

  getPoliticos(): Observable<Politico[]> {
    return this.http.get<Politico[]>(this.apiUrl + "/all");
  }

  crearPolitico(politico : Politico) : Observable<Politico> {
    return this.http.post<Politico>(this.apiUrl + "/single", politico);
  }

}
