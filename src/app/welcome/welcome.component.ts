import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    //acció que fará el botó 'iniciar' per començar amb els textos.
 iniciarUser(){
  this.router.navigate(['login']);
  this.navegacionweb = !this.navegacionweb;
 
  }
 iniciarProfesor(){
  this.router.navigate(['login']);
  this.navegacionweb = !this.navegacionweb;
 
  }
  navegacionweb:boolean = (false); //funció "boolean" / "false" per amagar el contingut de 'pantallaPrincipal'
  
}
