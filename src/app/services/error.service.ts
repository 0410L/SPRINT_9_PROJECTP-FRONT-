import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr: ToastrService) { }

  msjError(e: HttpErrorResponse) {
    if (e.error.msg) {
      this.toastr.error(e.error.msg, 'Error');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'Verifica que has puesto correctamente tus datos',
        showConfirmButton: false,
        timer: 4500,
      })
      //this.toastr.error('Upps ocurrio un error, comuniquese con el administrador', 'Error');
    }
  }

  mensajeError(errorMessage: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error...',
      text: errorMessage,
      showConfirmButton: false,
      timer: 4500,
    })
  }
}
