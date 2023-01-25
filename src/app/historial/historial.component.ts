import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Valoracion } from '../interfaces/valoracion';
import { ErrorService } from '../services/error.service';
import { UserService } from '../services/user.service';
import { ValoracionService } from '../services/valoracion.service';
/*import { L10nConfig, L10nLoader, TranslationModule } from 'angular-l10n';*/

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  loading: boolean = true;
  model: Array<Valoracion> = [];
  
  
  constructor(private router: Router, 
    private valoracionService: ValoracionService, 
    private errorService: ErrorService, 
    private userService: UserService) { }


  ngOnInit(): void {
    this.valoracionService.obtenerValoracionesHistorial(this.userService.getLoggedUserId()).subscribe({
      next: (response) => {
        console.log(response);
        if(response.error)
        {
          this.errorService.mensajeError('Error al consultar historial.');
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
  
  getGrupo(): string { 
    return this.userService.getGrupo();
   }

   getRol():number {
    return this.userService.getRol();
   }

  volver(){
    this.router.navigate(['dashboard']);
    }

}
