import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Valoracion } from '../interfaces/valoracion';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) {
   }

   obtenerLista(): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get<any>(`http://localhost:8080/api/alumno/list`, {headers});
   }
}
