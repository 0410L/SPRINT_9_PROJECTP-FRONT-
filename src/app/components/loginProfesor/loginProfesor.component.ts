import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserProfile } from 'src/app/interfaces/userProfile';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login-profesor',
  templateUrl: './loginProfesor.component.html',
  styleUrls: ['./loginProfesor.component.css']
})
export class LoginProfesorComponent implements OnInit {
  email: string = 'marta@gmail.com';
  password: string = '1234';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  login() {

    // Validamos que el usuario ingrese datos
    if (this.email == '' || this.password == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
        showConfirmButton: false,
        timer: 2000,
      })
      //this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }

    // Creamos el body
    const user: User = {
      email: this.email,
      password: this.password
    }

    this.loading = true;
    this._userService.loginProfesor(user).subscribe({
      next: (token) => {
        console.log(token);
        if(token.error)
        {
          this._errorService.mensajeError('El usuario y/o contraseña no es válido');
          this.loading = false
          return;
        }

        //Login successfully
        localStorage.setItem('token', token.data.token);
        this.router.navigate(['/dashboardProfesor'])

        //Obtener datos del usuario
        let usuario: UserProfile = {
          email: user.email,
          nombre: token.data.nombre,
          id_usuario: token.data.id_profesor,
        };
        
        this._userService.setLoggedUser(usuario);
        

        Swal.fire({
          icon: 'success',
          title: 'Benvenido',
          showConfirmButton: false,
          timer: 1500
        })

      },
      error: (e: HttpErrorResponse) => {
        console.log()
        this._errorService.msjError(e);
        this.loading = false
      }
    })
  }


  

}
