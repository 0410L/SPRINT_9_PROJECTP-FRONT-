import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ValoracionService } from '../services/valoracion.service';
import { ErrorService } from 'src/app/services/error.service';
import { Valoracion } from '../interfaces/valoracion';
import { HttpErrorResponse } from '@angular/common/http';
import { AlumnoValoracion } from '../interfaces/alumnoValoracion';
import { AlumnoService } from '../services/alumno.service';
import { Alumno } from '../interfaces/alumno';

@Component({
  selector: 'app-daily-profesor',
  templateUrl: './daily-profesor.component.html',
  styleUrls: ['./daily-profesor.component.css']
})
export class DailyProfesorComponent implements OnInit {
  loading: boolean = true;
  model: Valoracion = {
    id_valoracion: 0,
    fecha: new Date(),
    alumno_id: 0,
    desayuno: '',
    comida_primero: '',
    comida_segundo: '',
    comida_postre: '',
    merienda: '',
    dormir_inicio: '00:00',
    dormir_final: '00:00',
    deposiciones: 0,
    observaciones: ''
  };
  alummnoService: any;

  constructor(private router: Router, 
    private userservice: UserService,
    private errorService: ErrorService, 
    private valoracionService: ValoracionService, ) { }

    ngOnInit(): void {
      this.valoracionService.obtenerValoracionDiaria(this.userservice.getLoggedUserId()).subscribe({
        next: (response) => {
          console.log(response);
          if(response.error)
          {
            this.errorService.mensajeError('No existe valoración.');
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

  getIdProfesor(): number {
    return this.userservice.getIdProfesor();
  }

  getGrupo(): string { 
    return this.userservice.getGrupo();
   }

  getUserName(): string { 
    return this.userservice.getLoggedUserName();
   }

  getRol():number {
    return this.userservice.getRol();
   }


   getNameTutor(): string {
    return this.userservice.getNameTutor();
   }

   getNumberAlumno(): any {
    return this.alummnoService.obtenerLista();
   }

  volver(){
    this.router.navigate(['dashboardProfesor']);
  }

  volverdashboard(){
    this.router.navigate(['dashboard']);
    }

    

}
