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
  
@Component({
  selector: 'app-daily-profesor',
  templateUrl: './daily-profesor.component.html',
  styleUrls: ['./daily-profesor.component.css']
})
export class DailyProfesorComponent implements OnInit {
  [x: string]: any;
  loading: boolean = true;
  models: Array<AlumnoValoracion> = [];
  colorIndex = 0;
  mostrar = false;
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
    observaciones: '',
    actualizar: false
  };


  cambiarEstadoCheckbox(i:number) {
    //alert("CAMBIO DE FUNCION")
    console.log("cambio de funcion")
    this.models[i].valoracion.actualizar = true;
    //const checkbox = document.getElementById("cb-"+i) as HTMLFormElement;
    //checkbox['checked'] = true;
  
  }

    cambiarEstadoCheckboxPC(i:number) {
    //alert("CAMBIO DE FUNCION")
    console.log("cambio de funcion")
    this.models[i].valoracion.actualizar = true;
    //const checkbox = document.getElementById("cbb-"+i) as HTMLFormElement;
    //checkbox['checked'] = true;
    
  }
 


  constructor(private router: Router,
              private alummnoService: AlumnoService,
              private valoracionService: ValoracionService,
              private userservice: UserService,
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
              observaciones: '',
              actualizar: false
            }
          }
          this.models.push(alumnoValoracion);
        });

        this.loading = false;
      },
      error: (e: HttpErrorResponse) => {
        console.log()
        this.errorService.msjError(e);
      }
    })
  
    //this.valoracionService.obtenerValoracionDiaria(this['userService'].getLoggedUserId()).subscribe({
    this.valoracionService.obtenerValoracionDiariaAlumnos().subscribe({
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

  
  guardar() {

    let valoraciones: Valoracion[] = [];
    this.models.forEach((v: AlumnoValoracion) => {
      let valoracion: Valoracion = v.valoracion;
      //si se marca la opcion valoracion, se actualizara
      if(valoracion.actualizar)
      { 
        valoracion.alumno_id = v.alumno.id_alumno;
        valoraciones.push(valoracion);
      }
    });
    

    this.valoracionService.introducirValoraciones(valoraciones).subscribe({
      next: (response) => {
        console.log(response);
        if(response.error)
        {
          this.errorService.mensajeError('Señala las opciones y pulsa guardar.');
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
