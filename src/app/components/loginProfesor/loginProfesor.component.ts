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
  userservice: any;
  grupo_id!: number;
  role_id!: number;

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
          grupodescripcion: token.data.grupodescripcion,
          role_id: token.data.role_id,
          nombre_tutor: token.data.nombre_tutor,
          id_profesor: token.data.id_profesor,
          grupo_id: token.data.grupo_id

        };
        
        this._userService.setLoggedUser(usuario);
        

        Swal.fire({
          icon: 'success',
          title: '¡Benvenido Profesor!',
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

  getIdProfesor(): number {
    return this.userservice.getIdProfesor();
  }

  getRol():number {
    return this.userservice.getRol();
   }

  

  

}
