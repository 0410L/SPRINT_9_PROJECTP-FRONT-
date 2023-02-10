import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Valoracion } from '../interfaces/valoracion';


@Injectable({
  providedIn: 'root'
})
export class ValoracionService {

  constructor(private http: HttpClient) {
   }

   obtenerValoracionDiaria(id_alumno: number): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get<any>(`http://localhost:8080/api/valoracion/show/${id_alumno}`, {headers});
   }

   //OBTENER VALORACION DIARIA ALUMNOS
   obtenerValoracionDiariaAlumnos(id_alumno: number): Observable<any> {
      const headers = new HttpHeaders({'Content-Type':'application/json'});
      return this.http.get<any>(`http://localhost:8080/api/valoracion/shows/`, {headers});
   }


   obtenerValoracionesHistorial(id_alumno: number): Observable<any> {
   const headers = new HttpHeaders({'Content-Type':'application/json'});
   return this.http.get<any>(`http://localhost:8080/api/valoracion/list/${id_alumno}`, {headers});
   }


/* 
   //OBTENER HISTORIA VALORACION ALUMNOS
   obtenerValoracionesHistorialAlumnos(id_alumno: number): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get<any>(`http://localhost:8080/api/valoracion/list`, {headers});
   } */



   introducirValoraciones(valoraciones: Valoracion[]): Observable<any>{
      const headers = new HttpHeaders({'Content-Type':'application/json'});
      return this.http.post<any>(`http://localhost:8080/api/valoracion/add/`, {"valoraciones": valoraciones}, {headers});
      /* return this.http.put<any>(`http://localhost:8080/api/valoracion/update/`, {"valoraciones": valoraciones}, {headers}); */
   }


   actualizarValoraciones(valoraciones: Valoracion[]): Observable<any> {
      const headers = new HttpHeaders({'Content-Type':'application/json'});
      return this.http.put<any>(`http://localhost:8080/api/valoracion/update/${valoraciones}`, {"valoraciones": valoraciones}, {headers});
    }



   /*actualizarValoraciones(valoraciones: Valoracion[]): Observable<any>{
      const headers = new HttpHeaders({'Content-Type':'application/json'});
      return this.http.put<any>(`http://localhost:8080/api/valoracion/update/${id_valoracion}`, {"valoraciones": valoraciones}, {headers});
   }*/



   obtenerAlertas(id_alumno: number): Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get<any>(`http://localhost:8080/api/valoracion/alerta/${id_alumno}`, {headers});
   }
   
}
function moment() {
   throw new Error('Function not implemented.');
}

