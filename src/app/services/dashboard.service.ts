import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { information } from '../interfaces/information';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  //private myAppUrl: string;
  //private myApiUrl: string;

  constructor(private http: HttpClient) {
    //this.myAppUrl = environment.endpoint;
    //this.myApiUrl = ''
  }

  // getProducts(): Observable<information[]> {
    /*  const token = localStorage.getItem('token')
     const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`) */
    /*     return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers } ) */
  //   return this.http.get<information[]>(`${this.myAppUrl}${this.myApiUrl}`)
  // }
}
