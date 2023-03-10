import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { UserProfile } from '../interfaces/userProfile';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  /*contadorID: number = 0;
  loggedUser: any = 'Guest';
  loginControl: boolean = false;
  */
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    //this.myAppUrl = environment.endpoint;
    //this.myApiUrl = 'api/users'
    //this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/'
    

   }
 

   signIn(Email: User): Observable<any> {
    console.log(Email)
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(`http://localhost:8080/api/register/`, Email, {headers});
   }
   

   login(Email: User): Observable<any> {
    console.log(Email)
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(`http://localhost:8080/api/login/`, Email, {headers});
   }

   loginProfesor(Email: User): Observable<any> {
    console.log(Email)
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(`http://localhost:8080/api/profesor/login/`, Email, {headers});
   }

   sigInProfesor(Email: User): Observable<any> {
    console.log(Email)
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(`http://localhost:8080/api/profesor/add/`, Email, {headers});
   }


   getIdProfesor(): number {
    return Number (localStorage.getItem('id_usuario') ?? "0");
   }


   getLoggedUserName(): string {
    return localStorage.getItem('nombre_usuario') ?? "";
   }

   getGrupo(): string {
    return localStorage.getItem('grupo') ?? "";
   }

   getRol(): number {
    return Number(localStorage.getItem('role_id') ?? "0");
   }

   getIdValoracion(): number {
    return Number(localStorage.getItem('id_valoracion') ?? "0");
   }


   getNameTutor(): string {
    return localStorage.getItem('nombre_tutor') ?? "";
   }

   getLoggedUserId(): number {
//Number para convertir a entero el string que viene del local storage
    return Number(localStorage.getItem('id_usuario') ?? "0");
   }

   setLoggedUser(user: UserProfile) {

    localStorage.setItem('nombre_usuario', user.nombre);
    localStorage.setItem('nombre_tutor', user.nombre_tutor)
    localStorage.setItem('email_usuario', user.email);
    localStorage.setItem('id_usuario', user.id_usuario.toString());
    localStorage.setItem('grupo', user.grupodescripcion);
    localStorage.setItem('role_id', user.role_id.toString());

   }

   logout() {
    localStorage.clear();
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
