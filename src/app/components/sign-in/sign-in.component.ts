import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;
  nombre: string = '';
  fecha_nacimiento: string = '2020-01-01';
  nombre_tutor: string = '';
  phone_no: string = '';
  dni: string = '';
  role_id: string = '1'
  grupo_id: string = '1'


  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  addUser() {

    // Validamos que el usuario ingrese valores
    if (this.email == '' || this.password == '' || this.confirmPassword == ''|| this.nombre == ''||
    this.fecha_nacimiento == ''|| this.nombre_tutor == ''|| this.phone_no == ''|| this.dni == ''||
    this.role_id == ''|| this.grupo_id == '') {
      //this.toastr.error('Todos los campos son obligatorios', 'Error');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
        showConfirmButton: false,
        timer: 2000,
      })
      return;
    }

    // Validamos que las password sean iguales
    if (this.password != this.confirmPassword) {
      //this.toastr.error('Las passwords ingresadas son distintas', 'Error');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Los passwords son distintos',
        showConfirmButton: false,
        timer: 2000,
      })
      
      return;
    }

    // Creamos el objeto
    const user: User = {
      email: this.email,
      password: this.password,
      nombre: this.nombre,
      fecha_nacimiento: this.fecha_nacimiento,
      nombre_tutor: this.nombre_tutor,
      phone_no: this.phone_no,
      dni: this.dni,
      role_id: this.role_id,
      grupo_id: this.grupo_id,

    }

    this.loading = true;
    this._userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        //this.toastr.success(`El usuario ${this.email} fue registrado con exito`, 'Usuario registrado');
        Swal.fire(`cuenta creada ${this.email}`)
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }
}
