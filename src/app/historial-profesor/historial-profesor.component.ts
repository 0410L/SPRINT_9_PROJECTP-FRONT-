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

@Component({
  selector: 'app-historial-profesor',
  templateUrl: './historial-profesor.component.html',
  styleUrls: ['./historial-profesor.component.css']
})
export class HistorialProfesorComponent implements OnInit {
  loading: boolean = true;
  model: Array<AlumnoValoracion> = [];

  constructor(private router: Router,
    private alummnoService: AlumnoService,
    private valoracionService: ValoracionService,
    private errorService: ErrorService) { }

  ngOnInit(): void {
    
    this.alummnoService.obtenerLista().subscribe(
      {
        next: (response) => {
          console.log(response);
          if(response.error)
          {
            this.errorService.mensajeError('No existen alumnos.');
            return;
          }
  
          //Asignar al modelo
          response.data.forEach((al: Alumno) => {
            let alumnoValoracion: AlumnoValoracion = {
              alumno: al,
              valoracion: {
                id_valoracion: 0,
                fecha: new Date(),
                alumno_id: 0,
                desayuno: '1',
                comida_primero: '1',
                comida_segundo: '1',
                comida_postre: '1',
                merienda: '1',
                dormir_inicio: '00:00',
                dormir_final: '00:00',
                deposiciones: 0,
                observaciones: ''
              }
            }
            this.model.push(alumnoValoracion);
          });
  
          this.loading = false;
        },
        error: (e: HttpErrorResponse) => {
          console.log()
          this.errorService.msjError(e);
        }
      })
    }



  volver(){
    this.router.navigate(['dashboardProfesor']);
    }


}
