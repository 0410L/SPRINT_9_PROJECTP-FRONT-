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

@Component({
  selector: 'app-edit-profesor',
  templateUrl: './edit-profesor.component.html',
  styleUrls: ['./edit-profesor.component.css']
})
export class EditProfesorComponent implements OnInit {
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
              desayuno: 'T',
              comida_primero: 'T',
              comida_segundo: 'T',
              comida_postre: 'T',
              merienda: 'T',
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

  
  guardar() {

    let valoraciones: Valoracion[] = [];
    this.model.forEach((v: AlumnoValoracion) => {
      let valoracion: Valoracion = v.valoracion;
      valoracion.alumno_id = v.alumno.id_alumno;
      valoraciones.push(valoracion);
    });
    

    this.valoracionService.introducirValoraciones(valoraciones).subscribe({
      next: (response) => {
        console.log(response);
        if(response.error)
        {
          this.errorService.mensajeError('Error al guardar.');
          return;
        }
        Swal.fire({
          icon: 'success',
          title: 'Datos guardados correctamente!',
          showConfirmButton: false,
          timer: 1500
        });

      },
      error: (e: HttpErrorResponse) => {
        console.log()
        this.errorService.msjError(e);
      }
    });
  }

  volver(){
    this.router.navigate(['dashboardProfesor']);
    }

  
  getdate()
  {
    return formatDate(Date.now(),'dd-MM-yyyy','en-US');
  }


}
