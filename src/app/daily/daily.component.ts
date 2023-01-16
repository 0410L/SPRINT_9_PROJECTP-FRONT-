import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValoracionService } from '../services/valoracion.service';
import { ErrorService } from 'src/app/services/error.service';
import { Valoracion } from '../interfaces/valoracion';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
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

  constructor(private router: Router, 
              private valoracionService: ValoracionService, 
              private errorService: ErrorService, 
              private userService: UserService) { }

  ngOnInit(): void {
    this.valoracionService.obtenerValoracionDiaria(this.userService.getLoggedUserId()).subscribe({
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



  volver(){
    this.router.navigate(['dashboard']);
    }


}
