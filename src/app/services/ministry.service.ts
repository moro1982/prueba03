import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ministry } from '../models/ministry';

@Injectable({
  providedIn: 'root'
})
export class MinistryService {

  private apiURL = 'http://localhost:8080/ministerio';

  constructor(private http : HttpClient) {}

  getMinistryByID(id : number) : Observable<Ministry> {
    return this.http.get<Ministry>(this.apiURL + "/" + id);
  }

  getMinisterios() : Observable<Ministry[]> {
    return this.http.get<Ministry[]>(this.apiURL + "/all");
  }

  asignarMinistro(idMin : number, idPol : number) : Observable<Ministry> {
    return this.http.put<Ministry>(this.apiURL + "/" + idMin + "/ministro/" +  idPol, null);
  }

  quitarMinistro(idMin : number) : Observable<Ministry> {
    return this.http.delete<Ministry>(this.apiURL + "/" + idMin + "/ministro");
  }

}
