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
  email: string = 'oriol.busquet@gmail.com';
  password: string = 'papa';
  loading: boolean = false;
  role_id: string = '1'
  grupo_id: string = '1'

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
     
      return
    }

    // Creamos el body
    const user: User = {
      email: this.email,
      password: this.password,
      nombre: '',
      fecha_nacimiento: '',
      nombre_tutor: '',
      phone_no: '',
      dni: '',
      role_id:  '',
      grupo_id:  '',
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
          nombre_tutor: token.data.nombre_tutor,
          id_profesor: token.data.id_profesor,
          grupo_id: token.data.grupo_id

        };
        
        this._userService.setLoggedUser(usuario);
        

        Swal.fire({
          icon: 'success',
          title: '¡Benvenido Alumno!',
          showConfirmButton: false,
          background: '#fff url(../../assets/img/sweetalert2.gif)',
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
