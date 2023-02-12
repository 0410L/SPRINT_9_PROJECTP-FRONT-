import { Valoracion } from './../interfaces/valoracion';
import { ValoracionService } from './../services/valoracion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoValoracion } from '../interfaces/alumnoValoracion';
import { AlumnoService } from '../services/alumno.service';
import { ErrorService } from '../services/error.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Alumno } from '../interfaces/alumno';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { FormControl, Validators } from '@angular/forms';
import { ProfesorValoracion } from '../interfaces/profesorValoracion';
  
@Component({
  selector: 'app-daily-profesor',
  templateUrl: './daily-profesor.component.html',
  styleUrls: ['./daily-profesor.component.css']
})
export class DailyProfesorComponent implements OnInit {
  [x: string]: any;
  loading: boolean = true;
  model: Array<ProfesorValoracion> = [];
  colorIndex = 0;
  mostrar = false;
  


  constructor(private router: Router,
              private alummnoService: AlumnoService,
              private valoracionService: ValoracionService,
              private userservice: UserService,
              private errorService: ErrorService) { }

  ngOnInit(): void {

    this.valoracionService.obtenerValoracionDiariaAlumnos().subscribe(
    {
      next: (response) => {
        console.log(response);
        if(response.error)
        {
          this.errorService.mensajeError('No existen alumnos.');
          return;
        }

        //Asignar al modelo
        this.model = response.data;
        this.loading = false;
      },
      error: (e: HttpErrorResponse) => {
        console.log()
        this.errorService.msjError(e);
      }
    })
  
    

  
  
    

 


  }


  volverdashboard(){
    this.router.navigate(['dashboard']);
    }


  volver(){
    this.router.navigate(['dashboardProfesor']);
    }

  back(){
    return this.router.navigate(['dashboardProfesor']);
    }

  getGrupo(): string { 
    return this.userservice.getGrupo();
  }

  
  getdate()
  {
    return formatDate(Date.now(),'dd/MM/yyyy','en-US');
  }

  getIdProfesor(): number {
    return this.userservice.getIdProfesor();
  }

  getRol(): number {
    return this.userservice.getRol();
  } 


 
  checkearAlumno(){
    alert("hola")
  }


  

}
