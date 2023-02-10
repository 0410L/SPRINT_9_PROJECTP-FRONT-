
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
  selector: 'app-modal-alumno',
  templateUrl: './modal-alumno.component.html',
  styleUrls: ['./modal-alumno.component.css']
})
export class ModalAlumnoComponent implements OnInit {
  [x: string]: any;
  loading: boolean = true;
  model: Array<AlumnoValoracion> = [];
  colorIndex = 0;
  mostrar = false;





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

          //SELECCIONAR ALUMNO CONCRETO
          if (al.id_alumno == 8) {

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
          this.model.push(alumnoValoracion);
        }});

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

  
  getUserName(): string { 
    return this.userservice.getLoggedUserName();
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

  cambiarEstadoCheckbox(i:number) {
    //alert("CAMBIO DE FUNCION")
    console.log("cambio de funcion")
    this.model[i].valoracion.actualizar = true;
    //const checkbox = document.getElementById("cb-"+i) as HTMLFormElement;
    //checkbox['checked'] = true;
  }

  
  checkearAlumno(){
    alert("hola")
  }

}
