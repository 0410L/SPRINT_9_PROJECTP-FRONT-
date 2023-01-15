import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Valoracion } from '../interfaces/valoracion';
import { ErrorService } from '../services/error.service';
import { UserService } from '../services/user.service';
import { ValoracionService } from '../services/valoracion.service';


@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {
  loading: boolean = true;
  model: Array<Valoracion> = [];

  constructor(private router: Router,
    private valoracionService: ValoracionService, 
    private errorService: ErrorService, 
    private userService: UserService) { }

  ngOnInit(): void {
    this.valoracionService.obtenerAlertas(this.userService.getLoggedUserId()).subscribe({
      next: (response) => {
        console.log(response);
        if(response.error)
        {
          this.errorService.mensajeError('Error al obtener alertas.');
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
