import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'
import { UserProfile } from '../../interfaces/userProfile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = 'pa@gmail.com';
  password: string = 'papa';
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
    this._userService.login(user).subscribe({
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
        this.router.navigate(['/dashboard'])

        //Obtener datos del usuario
        let usuario: UserProfile = {
          email: user.email,
          nombre: token.data.nombre,
          id_usuario: token.data.id_alumno,
          grupodescripcion: token.data.grupodescripcion,
          role_id: token.data.role_id,
          nombre_tutor: token.data.nombre_tutor


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
