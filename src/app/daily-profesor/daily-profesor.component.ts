import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-profesor',
  templateUrl: './daily-profesor.component.html',
  styleUrls: ['./daily-profesor.component.css']
})
export class DailyProfesorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  volver(){
    this.router.navigate(['dashboardProfesor']);
    }

}
