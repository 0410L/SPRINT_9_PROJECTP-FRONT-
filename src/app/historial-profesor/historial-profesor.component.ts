import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-profesor',
  templateUrl: './historial-profesor.component.html',
  styleUrls: ['./historial-profesor.component.css']
})
export class HistorialProfesorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  volver(){
    this.router.navigate(['dashboardProfesor']);
    }


}
