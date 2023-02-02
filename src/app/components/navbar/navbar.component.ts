//import { AuthGuard } from './../../utils/auth.guard';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { UserService } from 'src/app/services/user.service';
//import { WeatherService } from 'src/app/weather.service';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],


  styles: []
})

export class NavbarComponent implements OnInit {
  
  showModal: any;
  temperature = '';
  data: any;

  constructor(private router: Router,
    //private weatherService: WeatherService,
    private userservice: UserService,
    private http : HttpClientModule) { }

  ngOnInit() {};
    

  logOut() {
    this.userservice.logout();
    this.router.navigate(['/welcome']);

    Swal.fire({
      icon: 'success',
      title: 'Nos vemos,',
      text: 'que pases un buen dia!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  getUserName(): string { 
    return this.userservice.getLoggedUserName();
   };

   getGrupo(): string { 
    return this.userservice.getGrupo();
   }

   getRol():number {
    return this.userservice.getRol();
   }

   getNameTutor(): string {
    return this.userservice.getNameTutor();
   }
  


  //BOTONES NAVEGADOR ALUMNO

  btnDashboard(){
  this.router.navigate(['dashboard']);
  }

  btnDaily(){
  this.router.navigate(['daily']);
  }

  btnHistorial(){
  this.router.navigate(['historial']);
  }

  btnAlertas(){
  this.router.navigate(['alertas']);
  }



  // BOTONES NAVEGADOR PROFESOR

  
  btnDashboardProfesor(){
  this.router.navigate(['dashboardProfesor']);
  }
  
  btnEntradaDaily(){
  this.router.navigate(['editProfesor']);
  }

  btnProfesorDaily(){
  this.router.navigate(['dailyProfesor']);
  }

  btnAlumnos(){
  this.router.navigate(['alumnos']);
  }


  btnGeneradorQR(){
    this.router.navigate(['qr']);
    }


  

}



