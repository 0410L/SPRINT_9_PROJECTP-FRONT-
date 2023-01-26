import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserProfile } from 'src/app/interfaces/userProfile';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  loading: boolean = false;
  navegacionweb: any;

  constructor(private router: Router,private toastr: ToastrService,
    private _userService: UserService,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
    
  }
  
  

    //acció que fará el botó 'iniciar' per començar amb els textos.
 iniciarUser(){
  this.router.navigate(['login']);
  this.navegacionweb = !this.navegacionweb;
 
  }
 iniciarProfesor(){
  this.router.navigate(['loginProfesor']);
  this.navegacionweb = !this.navegacionweb;
  }

  //this.loading = true;
  //navegacionweb:boolean = (false); //funció "boolean" / "false" per amagar el contingut de 'pantallaPrincipal'
 
}
