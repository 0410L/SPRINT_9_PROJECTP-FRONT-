import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private myApiUrl: string;

  constructor(private http: HttpClient) {
    //this.myAppUrl = environment.endpoint;
    //this.myApiUrl = 'api/users'
    //this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/'
    //this.myApiUrl = 'http://localhost:8080/api/'
    //this.myApiUrl = 'http://localhost:8080/api/profesor/list'
    

   }


   signIn(Email: User): Observable<any> {
    console.log(Email)
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(`http://localhost:8080/api/register/`, Email, {headers});
   }
   

   login(Email: User) {
    console.log(Email)
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(`http://localhost:8080/api/login/`, Email, {headers})
   }

   /*
   login(Email: User) {
    console.log(Email)
    return this.http.post<any>(`${this.myApiUrl}login`, Email)
   }
   */
/*
   signIn(Email: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, Email);
   }

   login(Email: User): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, Email)
   }
   */
}
